/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { readFile, readdir, stat } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
	createConnection,
	Diagnostic,
	DiagnosticSeverity,
	CompletionItem,
	CompletionItemKind,
	ErrorCodes,
	Hover,
	InitializeResult,
	Location,
	MarkupKind,
	PrepareRenameParams,
	ProposedFeatures,
	RenameParams,
	ResponseError,
	TextEdit,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	TextDocuments,
	WorkspaceEdit
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	findRoutineCallTargetAtOffset,
	findRoutineDeclarationAtOffset,
	GlobalVariableSymbolTable,
	SourceRange,
	findTypeReferenceAtOffset,
	normalizeTypeName,
	parseTypeDeclarations,
	pluralizeTypeNames,
	RoutineDeclaration,
	TypeDeclaration,
	TypeReference,
	TypeSymbol,
	TypeSymbolTable
} from './typeParser';
import { createKeywordCompletions, languageKeywords } from './editorFeatures';

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const parsedDocuments = new Map<string, ReturnType<typeof parseTypeDeclarations>>();
const diskDocumentCache = new Map<string, {
	mtimeMs: number;
	size: number;
	document: TextDocument;
	parsed: ReturnType<typeof parseTypeDeclarations>;
}>();

connection.onInitialize((): InitializeResult => ({
	capabilities: {
		textDocumentSync: TextDocumentSyncKind.Incremental,
		definitionProvider: true,
		typeDefinitionProvider: true,
		implementationProvider: true,
		referencesProvider: true,
		renameProvider: { prepareProvider: true },
		completionProvider: { triggerCharacters: [' '] },
		hoverProvider: true
	}
}));

async function updateDocumentSymbols(document: TextDocument): Promise<void> {
	const version = document.version;
	const indexedDocuments = await getSiblingDocuments(document);
	if (documents.get(document.uri) !== document || document.version !== version) {
		return;
	}
	const externalDocuments = indexedDocuments.filter(candidate =>
		candidate.document.uri !== document.uri
	);
	const parsedDocument = parseTypeDeclarations(document.getText(), {
		externalDeclarations: externalDocuments.flatMap(candidate => candidate.parsed.declarations),
		externalGlobalVariables: externalDocuments.flatMap(candidate => candidate.parsed.globalVariables),
		externalRoutines: externalDocuments.flatMap(candidate => candidate.parsed.routines)
	});
	parsedDocuments.set(document.uri, parsedDocument);
	const diagnostics: Diagnostic[] = parsedDocument.diagnostics.map(diagnostic => ({
		severity: diagnostic.severity === 'hint'
			? DiagnosticSeverity.Hint
			: DiagnosticSeverity.Error,
		range: {
			start: document.positionAt(diagnostic.range.start),
			end: document.positionAt(diagnostic.range.end)
		},
		message: diagnostic.message,
		source: 'portugues-puro'
	}));
	connection.sendDiagnostics({ uri: document.uri, diagnostics });
}

documents.onDidOpen(({ document }) => {
	void updateDocumentSymbols(document).catch(error => {
		connection.console.error(`Failed to index ${document.uri}: ${String(error)}`);
	});
});

documents.onDidChangeContent(({ document }) => {
	void updateDocumentSymbols(document).catch(error => {
		connection.console.error(`Failed to index ${document.uri}: ${String(error)}`);
	});
});

documents.onDidSave(({ document }) => {
	void updateDocumentSymbols(document).catch(error => {
		connection.console.error(`Failed to index ${document.uri}: ${String(error)}`);
	});
});

documents.onDidClose(({ document }) => {
	parsedDocuments.delete(document.uri);
	connection.sendDiagnostics({ uri: document.uri, diagnostics: [] });
});

connection.onDefinition((params: TextDocumentPositionParams) => {
	return navigateDefinition(params);
});

connection.onReferences(async params => {
	const target = await findRenameTarget(params.textDocument.uri, params.position);
	if (!target) {
		return undefined;
	}
	const indexedDocuments = await getSiblingDocuments(target.document);
	const parsedDocuments = parseIndexedDocuments(indexedDocuments);
	return findSymbolOccurrences(
		target,
		parsedDocuments,
		params.context.includeDeclaration
	).map(occurrence => createLocation(occurrence.document, occurrence.range));
});

connection.onPrepareRename(async (params: PrepareRenameParams) => {
	const target = await findRenameTarget(params.textDocument.uri, params.position);
	if (!target) {
		return undefined;
	}
	return {
		range: toProtocolRange(target.selectionDocument, target.selectionRange),
		placeholder: target.name
	};
});

connection.onRenameRequest(async (params: RenameParams) => {
	const target = await findRenameTarget(params.textDocument.uri, params.position);
	if (!target) {
		return undefined;
	}
	if (!params.newName.trim() || params.newName !== params.newName.trim() || /[\r\n]/u.test(params.newName)) {
		throw new ResponseError(ErrorCodes.InvalidParams, 'The new name must be a non-empty single-line identifier.');
	}

	const indexedDocuments = await getSiblingDocuments(target.document);
	const parsedDocuments = parseIndexedDocuments(indexedDocuments);
	const changes: NonNullable<WorkspaceEdit['changes']> = {};
	for (const occurrence of findSymbolOccurrences(target, parsedDocuments, true, params.newName)) {
		const edits = changes[occurrence.document.uri] ?? [];
		edits.push(TextEdit.replace(
			toProtocolRange(occurrence.document, occurrence.range),
			occurrence.newText ?? params.newName
		));
		changes[occurrence.document.uri] = edits;
	}
	return { changes };
});

type RenameTarget =
	| {
		kind: 'type';
		document: TextDocument;
		selectionDocument: TextDocument;
		name: string;
		selectionRange: SourceRange;
		declarationRange: SourceRange;
		declaration: TypeDeclaration;
		symbol: TypeSymbol;
	}
	| {
		kind: 'variable';
		document: TextDocument;
		selectionDocument: TextDocument;
		name: string;
		selectionRange: SourceRange;
		declarationRange: SourceRange;
		routine?: RoutineDeclaration;
	}
	| {
		kind: 'routine';
		document: TextDocument;
		selectionDocument: TextDocument;
		name: string;
		selectionRange: SourceRange;
		declarationRange: SourceRange;
		routine: RoutineDeclaration;
	};

interface SymbolOccurrence {
	document: TextDocument;
	range: SourceRange;
	newText?: string;
}

async function findRenameTarget(
	documentUri: string,
	position: TextDocumentPositionParams['position']
): Promise<RenameTarget | undefined> {
	const document = documents.get(documentUri);
	const parsedDocument = document && parsedDocuments.get(document.uri);
	if (!document || !parsedDocument) {
		return undefined;
	}
	const offset = document.offsetAt(position);
	const indexedDocuments = await getSiblingDocuments(document);

	const declaration = parsedDocument.declarations.find(candidate =>
		offset >= candidate.name.range.start && offset <= candidate.name.range.end
	);
	const typeReference = declaration?.name ?? findTypeReferenceAtOffset(parsedDocument, offset);
	if (typeReference) {
		const symbol = parsedDocument.symbols.lookup(typeReference.name);
		const typeDeclaration = symbol?.declaration;
		const owner = typeDeclaration && indexedDocuments.find(candidate =>
			candidate.parsed.declarations.includes(typeDeclaration)
		);
		if (symbol && typeDeclaration && owner) {
			return {
				kind: 'type',
				document: owner.document,
				selectionDocument: document,
				name: typeDeclaration.name.name,
				selectionRange: typeReference.range,
				declarationRange: typeDeclaration.name.range,
				declaration: typeDeclaration,
				symbol
			};
		}
	}

	for (const routine of parsedDocument.routines) {
		for (const name of [routine.name, ...routine.alternateNames]) {
			if (offset >= name.range.start && offset <= name.range.end) {
				return {
					kind: 'routine',
					document,
					selectionDocument: document,
					name: name.name,
					selectionRange: name.range,
					declarationRange: name.range,
					routine
				};
			}
		}
		for (const call of routine.calls) {
			if (
				!call.target ||
				offset < call.name.range.start ||
				offset > call.name.range.end
			) {
				continue;
			}
			const targetName = [call.target.name, ...call.target.alternateNames]
				.find(name => name.normalizedName === call.name.normalizedName);
			const owner = indexedDocuments.find(candidate =>
				candidate.parsed.routines.includes(call.target!)
			);
			if (targetName && owner) {
				return {
					kind: 'routine',
					document: owner.document,
					selectionDocument: document,
					name: targetName.name,
					selectionRange: call.name.range,
					declarationRange: targetName.range,
					routine: call.target
				};
			}
		}
	}

	const symbol = findNamedSymbolAtOffset(document, offset, indexedDocuments, 'variable');
	if (!symbol) {
		return undefined;
	}
	const scopeRoutine = indexedDocuments
		.find(candidate => candidate.document.uri === symbol.document.uri)
		?.parsed.routines.find(routine =>
			routine.parameters.some(parameter => parameter.name.range.start === symbol.range.start) ||
			routine.localVariables.some(variable => variable.name.range.start === symbol.range.start)
		);
	const selectionRange = findNameRangeAtOffset(document.getText(), symbol.name, offset) ??
		symbol.range;
	return {
		kind: 'variable',
		document: symbol.document,
		selectionDocument: document,
		name: symbol.name,
		selectionRange,
		declarationRange: symbol.range,
		routine: scopeRoutine
	};
}

function parseIndexedDocuments(indexedDocuments: IndexedDocument[]): IndexedDocument[] {
	return indexedDocuments.map(candidate => {
		const externalDocuments = indexedDocuments.filter(other =>
			other.document.uri !== candidate.document.uri
		);
		return {
			document: candidate.document,
			parsed: parseTypeDeclarations(candidate.document.getText(), {
				externalDeclarations: externalDocuments.flatMap(other => other.parsed.declarations),
				externalGlobalVariables: externalDocuments.flatMap(other => other.parsed.globalVariables),
				externalRoutines: externalDocuments.flatMap(other => other.parsed.routines)
			})
		};
	});
}

function findSymbolOccurrences(
	target: RenameTarget,
	indexedDocuments: IndexedDocument[],
	includeDeclaration: boolean,
	newName?: string
): SymbolOccurrence[] {
	let occurrences: SymbolOccurrence[];
	if (target.kind === 'type') {
		occurrences = findTypeOccurrences(target, indexedDocuments, newName);
	} else if (target.kind === 'routine') {
		occurrences = findRoutineOccurrences(target, indexedDocuments);
	} else {
		occurrences = findVariableOccurrences(target, indexedDocuments);
	}

	if (!includeDeclaration) {
		occurrences = occurrences.filter(occurrence =>
			occurrence.document.uri !== target.document.uri ||
			occurrence.range.start !== target.declarationRange.start
		);
	}
	const unique = new Map<string, SymbolOccurrence>();
	for (const occurrence of occurrences) {
		const key = `${occurrence.document.uri}:${occurrence.range.start}:${occurrence.range.end}`;
		unique.set(key, occurrence);
	}
	return [...unique.values()].sort((first, second) =>
		first.document.uri.localeCompare(second.document.uri) ||
		first.range.start - second.range.start
	);
}

function findTypeOccurrences(
	target: Extract<RenameTarget, { kind: 'type' }>,
	indexedDocuments: IndexedDocument[],
	newName?: string
): SymbolOccurrence[] {
	const names = [
		target.symbol.normalizedName,
		...target.symbol.pluralNames.map(normalizeTypeName)
	];
	return indexedDocuments.flatMap(candidate =>
		collectTypeReferences(candidate.parsed)
			.filter(reference => names.includes(reference.normalizedName))
			.map(reference => {
				const pluralIndex = target.symbol.pluralNames.findIndex(name =>
					normalizeTypeName(name) === reference.normalizedName
				);
				const replacements = pluralizeTypeNames(newName ?? target.name);
				return {
					document: candidate.document,
					range: reference.range,
					newText: !newName
						? undefined
						: pluralIndex < 0
							? newName
							: replacements[pluralIndex] ?? replacements[0] ?? newName
				};
			})
	);
}

function collectTypeReferences(parsed: ReturnType<typeof parseTypeDeclarations>): TypeReference[] {
	const references: TypeReference[] = [];
	const addFields = (fields: TypeDeclaration['fields']): void => {
		for (const field of fields ?? []) {
			if (field.kind === 'byte-array') {
				references.push(field.elementType);
			} else {
				const inferredTypeName = parsed.symbols.lookup(field.name.name)
					? field.name
					: field.type;
				references.push(inferredTypeName);
			}
		}
	};
	for (const declaration of parsed.declarations) {
		references.push(declaration.name, declaration.baseType);
		if (declaration.pointedType) {
			references.push(declaration.pointedType);
		}
		addFields(declaration.fields);
	}
	for (const declaration of parsed.globalVariables) {
		if (declaration.type) {
			references.push(declaration.type);
		}
		addFields(declaration.fields);
	}
	for (const routine of parsed.routines) {
		for (const parameter of [
			...routine.parameters,
			...(routine.returnParameter ? [routine.returnParameter] : [])
		]) {
			references.push(parameter.type);
		}
		for (const variable of routine.localVariables) {
			references.push(variable.type);
		}
	}
	return references;
}

function findRoutineOccurrences(
	target: Extract<RenameTarget, { kind: 'routine' }>,
	indexedDocuments: IndexedDocument[]
): SymbolOccurrence[] {
	const targetOwner = indexedDocuments.find(candidate =>
		candidate.document.uri === target.document.uri
	);
	const targetRoutine = targetOwner?.parsed.routines.find(routine =>
		routine.name.range.start === target.routine.name.range.start
	);
	if (!targetRoutine) {
		return [];
	}
	const occurrences: SymbolOccurrence[] = [{
		document: target.document,
		range: target.declarationRange
	}];
	for (const candidate of indexedDocuments) {
		for (const routine of candidate.parsed.routines) {
			for (const call of routine.calls) {
				if (
					call.target?.name.range.start === targetRoutine.name.range.start &&
					call.name.normalizedName === normalizeTypeName(target.name)
				) {
					occurrences.push({ document: candidate.document, range: call.name.range });
				}
			}
		}
	}
	return occurrences;
}

function findVariableOccurrences(
	target: Extract<RenameTarget, { kind: 'variable' }>,
	indexedDocuments: IndexedDocument[]
): SymbolOccurrence[] {
	const occurrences: SymbolOccurrence[] = [];
	const scopeRoutineStart = target.routine?.range.start;
	for (const candidate of indexedDocuments) {
		const source = candidate.document.getText();
		const code = maskCommentsAndStrings(source);
		for (const routine of candidate.parsed.routines) {
			if (scopeRoutineStart !== undefined) {
				if (
					candidate.document.uri !== target.document.uri ||
					routine.range.start !== scopeRoutineStart
				) {
					continue;
				}
			} else if (
				routine.parameters.some(parameter =>
					parameter.name.normalizedName === normalizeTypeName(target.name)
				) ||
				routine.localVariables.some(variable =>
					variable.name.normalizedName === normalizeTypeName(target.name)
				)
			) {
				continue;
			}
			occurrences.push(...findNameRanges(
				code,
				target.name,
				routine.bodyRange
			).map(range => ({ document: candidate.document, range })));
		}
	}
	if (includeVariableDeclaration(target, indexedDocuments)) {
		occurrences.push({
			document: target.document,
			range: target.declarationRange
		});
	}
	return occurrences;
}

function includeVariableDeclaration(
	target: Extract<RenameTarget, { kind: 'variable' }>,
	_indexedDocuments: IndexedDocument[]
): boolean {
	return target.declarationRange.end > target.declarationRange.start;
}

function findNameRangeAtOffset(
	source: string,
	name: string,
	offset: number
): SourceRange | undefined {
	return findNameRanges(source, name, { start: 0, end: source.length })
		.find(range => offset >= range.start && offset <= range.end);
}

function findNameRanges(
	source: string,
	name: string,
	within: SourceRange
): SourceRange[] {
	const words = name.trim().split(/\s+/u).map(escapeRegExp);
	if (words.length === 0 || !words[0]) {
		return [];
	}
	const pattern = new RegExp(words.join('\\s+'), 'giu');
	const ranges: SourceRange[] = [];
	let match: RegExpExecArray | null;
	while ((match = pattern.exec(source))) {
		const start = match.index;
		const end = start + match[0].length;
		if (start < within.start || end > within.end) {
			continue;
		}
		const before = source[start - 1] ?? '';
		const after = source[end] ?? '';
		if (
			(isIdentifierCharacter(before) && isIdentifierCharacter(name[0])) ||
			(isIdentifierCharacter(after) && isIdentifierCharacter(name[name.length - 1]))
		) {
			continue;
		}
		ranges.push({ start, end });
	}
	return ranges;
}

function maskCommentsAndStrings(source: string): string {
	const characters = source.split('');
	let inString = false;
	let inBlockComment = false;
	let inLineComment = false;
	let blockDepth = 0;
	for (let index = 0; index < characters.length; index++) {
		const character = characters[index];
		const nextCharacter = characters[index + 1];
		if (inLineComment) {
			if (character === '\n' || character === '\r') {
				inLineComment = false;
			} else {
				characters[index] = ' ';
			}
			continue;
		}
		if (inBlockComment) {
			if (character === '[') {
				blockDepth++;
			} else if (character === ']') {
				blockDepth--;
				if (blockDepth === 0) {
					inBlockComment = false;
				}
			}
			if (character !== '\n' && character !== '\r') {
				characters[index] = ' ';
			}
			continue;
		}
		if (inString) {
			if (character === '"' && nextCharacter === '"') {
				characters[index] = ' ';
				characters[index + 1] = ' ';
				index++;
			} else {
				if (character !== '\n' && character !== '\r') {
					characters[index] = ' ';
				}
				if (character === '"') {
					inString = false;
				}
			}
			continue;
		}
		if (character === '"') {
			characters[index] = ' ';
			inString = true;
		} else if (character === '[') {
			characters[index] = ' ';
			inBlockComment = true;
			blockDepth = 1;
		} else if (character === '\\') {
			characters[index] = ' ';
			inLineComment = true;
		}
	}
	return characters.join('');
}

function toProtocolRange(document: TextDocument, range: SourceRange) {
	return {
		start: document.positionAt(range.start),
		end: document.positionAt(range.end)
	};
}

async function navigateDefinition(params: TextDocumentPositionParams): Promise<Location | undefined> {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return undefined;
	}

	const parsedDocument = parsedDocuments.get(document.uri);
	if (!parsedDocument) {
		return undefined;
	}
	const indexedDocuments = await getSiblingDocuments(document);
	const offset = document.offsetAt(params.position);
	return resolveTypeReferenceLocation(
		document,
		parsedDocument,
		offset,
		indexedDocuments
	) ?? resolveRoutineLocation(
		document,
		parsedDocument,
		offset,
		indexedDocuments
	) ?? resolveNamedSymbolLocation(
		document,
		offset,
		indexedDocuments
	) ?? resolveExternalRoutineLocation(
		document,
		offset,
		parsedDocument,
		indexedDocuments
	);
}

connection.onTypeDefinition(async (params: TextDocumentPositionParams) => {
	const document = documents.get(params.textDocument.uri);
	const parsedDocument = document && parsedDocuments.get(document.uri);
	if (!document || !parsedDocument) {
		return undefined;
	}

	const indexedDocuments = await getSiblingDocuments(document);
	const offset = document.offsetAt(params.position);
	const typeDeclaration = parsedDocument.declarations.find(declaration =>
		offset >= declaration.name.range.start && offset <= declaration.name.range.end
	);
	if (typeDeclaration) {
		return resolveTypeLocation(typeDeclaration.baseType.name, document.uri, indexedDocuments);
	}

	const declaredBaseType = parsedDocument.declarations.find(declaration =>
		offset >= declaration.baseType.range.start && offset <= declaration.baseType.range.end
	);
	if (declaredBaseType) {
		const referencedType = parsedDocument.symbols.lookup(declaredBaseType.baseType.name)?.declaration;
		const baseTypeLocation = referencedType &&
			resolveTypeLocation(referencedType.baseType.name, document.uri, indexedDocuments);
		if (baseTypeLocation) {
			return baseTypeLocation;
		}
	}

	const typeReferenceLocation = resolveTypeReferenceLocation(
		document,
		parsedDocument,
		offset,
		indexedDocuments
	);
	if (typeReferenceLocation) {
		return typeReferenceLocation;
	}

	const symbol = findNamedSymbolAtOffset(document, offset, indexedDocuments, 'variable');
	if (symbol?.typeName) {
		return resolveTypeLocation(symbol.typeName, document.uri, indexedDocuments);
	}

	return undefined;
});

connection.onImplementation(async (params: TextDocumentPositionParams) => {
	const document = documents.get(params.textDocument.uri);
	const parsedDocument = document && parsedDocuments.get(document.uri);
	if (!document || !parsedDocument) {
		return undefined;
	}

	const offset = document.offsetAt(params.position);
	const indexedDocuments = await getSiblingDocuments(document);
	return resolveRoutineLocation(
		document,
		parsedDocument,
		offset,
		indexedDocuments
	) ?? resolveExternalRoutineLocation(
		document,
		offset,
		parsedDocument,
		indexedDocuments
	);
});

connection.onCompletion(async params => {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return [];
	}
	const indexedDocuments = await getSiblingDocuments(document);
	const items = createKeywordCompletions();
	const seen = new Set(items.map(item => item.label.toLocaleLowerCase('pt-BR')));

	for (const candidate of indexedDocuments) {
		const symbols: CompletionItem[] = [
			...candidate.parsed.declarations.map(declaration => ({
				label: declaration.name.name,
				kind: CompletionItemKind.Class,
				detail: 'Tipo Português Puro'
			})),
			...candidate.parsed.globalVariables.map(declaration => ({
				label: declaration.name.name,
				kind: CompletionItemKind.Variable,
				detail: declaration.type?.name ?? declaration.inferredTypeName ?? 'Variável global'
			})),
			...candidate.parsed.routines.flatMap(routine => [
				{
					label: routine.name.name,
					kind: CompletionItemKind.Function,
					detail: routine.isBooleanFunction ? 'Função deliberativa' : 'Rotina'
				},
				...routine.alternateNames.map(alternate => ({
					label: alternate.name,
					kind: CompletionItemKind.Function,
					detail: `Nome alternativo de ${routine.name.name}`
				}))
			])
		];

		for (const item of symbols) {
			const key = item.label.toLocaleLowerCase('pt-BR');
			if (seen.has(key)) {
				continue;
			}
			seen.add(key);
			items.push(item);
		}
	}

	return items;
});

connection.onHover(async params => {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return null;
	}
	const offset = document.offsetAt(params.position);
	const indexedDocuments = await getSiblingDocuments(document);
	const parsedDocument = indexedDocuments.find(candidate =>
		candidate.document.uri === document.uri
	)?.parsed;
	const keyword = findKeywordAtOffset(document.getText(), offset);
	if (keyword) {
		return {
			contents: {
				kind: MarkupKind.Markdown,
				value: `**${keyword.label}** — ${keyword.detail}\n\n${keyword.documentation}`
			}
		} satisfies Hover;
	}

	const symbol = findNamedSymbolAtOffset(document, offset, indexedDocuments);
	if (symbol) {
		const type = symbol.typeName ? `\n\nTipo: \`${symbol.typeName}\`` : '';
		return {
			contents: {
				kind: MarkupKind.Markdown,
				value: `**${symbol.name}** — ${symbol.kind === 'type' ? 'Tipo' : 'Variável'} Português Puro${type}`
			}
		} satisfies Hover;
	}

	const routine = parsedDocument?.routines.find(declaration =>
		[declaration.name, ...declaration.alternateNames].some(name =>
			offset >= name.range.start && offset <= name.range.end
		)
	) ?? (parsedDocument && findRoutineDeclarationAtOffset(parsedDocument, offset));
	if (routine) {
		const parameters = routine.parameters.map(parameter =>
			`\`${parameter.type.name} ${parameter.name.name}\``
		).join(', ');
		return {
			contents: {
				kind: MarkupKind.Markdown,
				value: `**${routine.name.name}** — ${routine.isBooleanFunction ? 'Função deliberativa' : 'Rotina'}${parameters ? `\n\nParâmetros: ${parameters}` : ''}${routine.alternateNames.length ? `\n\nNomes alternativos: ${routine.alternateNames.map(name => `\`${name.name}\``).join(', ')}` : ''}`
			}
		} satisfies Hover;
	}
	return null;
});

type NavigationKind = 'type' | 'variable';

interface NavigationSymbol {
	name: string;
	kind: NavigationKind;
	document: TextDocument;
	range: { start: number; end: number };
	typeName?: string;
	priority: number;
}

interface IndexedDocument {
	document: TextDocument;
	parsed: ReturnType<typeof parseTypeDeclarations>;
}

async function getSiblingDocuments(document: TextDocument): Promise<IndexedDocument[]> {
	const directory = dirname(fileURLToPath(document.uri));
	const files = await readdir(directory, { withFileTypes: true });
	const siblingFiles = files
		.filter(entry => entry.isFile() && extname(entry.name).toLocaleLowerCase('en-US') === '.pop')
		.map(entry => pathToFileURL(join(directory, entry.name)).toString());
	if (!siblingFiles.includes(document.uri)) {
		siblingFiles.push(document.uri);
	}
	for (const uri of diskDocumentCache.keys()) {
		if (dirname(fileURLToPath(uri)) === directory && !siblingFiles.includes(uri)) {
			diskDocumentCache.delete(uri);
		}
	}

	const indexedDocuments = await Promise.all(siblingFiles.map(async uri => {
		const openDocument = documents.get(uri);
		if (openDocument) {
			const parsed = parsedDocuments.get(uri) ??
				parseTypeDeclarations(openDocument.getText(), { navigationOnly: true });
			return { document: openDocument, parsed };
		}

		const filePath = fileURLToPath(uri);
		const metadata = await stat(filePath);
		const cached = diskDocumentCache.get(uri);
		if (cached && cached.mtimeMs === metadata.mtimeMs && cached.size === metadata.size) {
			return cached;
		}

		const source = new TextDecoder('windows-1252').decode(await readFile(filePath));
		const siblingDocument = TextDocument.create(uri, 'portugues-puro', 0, source);
		const indexed = {
			mtimeMs: metadata.mtimeMs,
			size: metadata.size,
			document: siblingDocument,
			parsed: parseTypeDeclarations(source, { navigationOnly: true })
		};
		diskDocumentCache.set(uri, indexed);
		return indexed;
	}));
	return indexedDocuments;
}

function resolveExternalRoutineLocation(
	document: TextDocument,
	offset: number,
	parsedDocument: ReturnType<typeof parseTypeDeclarations>,
	indexedDocuments: IndexedDocument[]
): Location | undefined {
	const typeSymbols = new TypeSymbolTable(indexedDocuments.flatMap(candidate =>
		candidate.parsed.declarations
	));
	const globalVariableSymbols = new GlobalVariableSymbolTable(indexedDocuments.flatMap(candidate =>
		candidate.parsed.globalVariables
	));
	const target = findRoutineCallTargetAtOffset(
		parsedDocument,
		document.getText(),
		offset,
		indexedDocuments.flatMap(candidate => candidate.parsed.routines),
		typeSymbols,
		globalVariableSymbols
	);
	const owner = target && indexedDocuments.find(candidate =>
		candidate.parsed.routines.includes(target)
	);
	return target && owner ? createLocation(owner.document, target.name.range) : undefined;
}

function resolveTypeReferenceLocation(
	document: TextDocument,
	parsedDocument: ReturnType<typeof parseTypeDeclarations>,
	offset: number,
	indexedDocuments: IndexedDocument[]
): Location | undefined {
	const reference = findTypeReferenceAtOffset(parsedDocument, offset);
	if (!reference) {
		return undefined;
	}
	return resolveTypeLocation(reference.name, document.uri, indexedDocuments);
}

function resolveTypeLocation(
	name: string,
	preferredUri: string,
	indexedDocuments: IndexedDocument[]
): Location | undefined {
	const candidates = [...indexedDocuments].sort((first, second) =>
		Number(second.document.uri === preferredUri) - Number(first.document.uri === preferredUri)
	);
	for (const candidate of candidates) {
		const declaration = candidate.parsed.symbols.lookup(name)?.declaration;
		if (!declaration) {
			continue;
		}
		const owner = indexedDocuments.find(indexed =>
			indexed.parsed.declarations.includes(declaration)
		);
		if (owner) {
			return createLocation(owner.document, declaration.name.range);
		}
	}
	return undefined;
}

function resolveRoutineLocation(
	document: TextDocument,
	parsedDocument: ReturnType<typeof parseTypeDeclarations>,
	offset: number,
	indexedDocuments: IndexedDocument[]
): Location | undefined {
	const routine = findRoutineDeclarationAtOffset(parsedDocument, offset);
	if (!routine) {
		return undefined;
	}
	const owner = indexedDocuments.find(candidate =>
		candidate.parsed.routines.includes(routine)
	);
	return createLocation(owner?.document ?? document, routine.name.range);
}

function resolveNamedSymbolLocation(
	document: TextDocument,
	offset: number,
	indexedDocuments: IndexedDocument[]
): Location | undefined {
	const symbol = findNamedSymbolAtOffset(document, offset, indexedDocuments, 'variable');
	if (!symbol) {
		return undefined;
	}
	return createLocation(symbol.document, symbol.range);
}

function findNamedSymbolAtOffset(
	document: TextDocument,
	offset: number,
	indexedDocuments: IndexedDocument[],
	kind?: NavigationKind
): NavigationSymbol | undefined {
	const source = document.getText();
	const matches: NavigationSymbol[] = [];
	const currentParsed = indexedDocuments.find(candidate =>
		candidate.document.uri === document.uri
	);
	const activeRoutine = currentParsed?.parsed.routines.find(routine =>
		offset >= routine.range.start && offset <= routine.bodyRange.end
	);

	for (const candidate of indexedDocuments) {
		const { parsed } = candidate;
		for (const declaration of parsed.declarations) {
			matches.push({
				name: declaration.name.name,
				kind: 'type',
				document: candidate.document,
				range: declaration.name.range,
				priority: 0
			});
		}
		for (const declaration of parsed.globalVariables) {
			matches.push({
				name: declaration.name.name,
				kind: 'variable',
				document: candidate.document,
				range: declaration.name.range,
				typeName: declaration.type?.name ?? declaration.inferredTypeName,
				priority: 0
			});
		}
		for (const routine of parsed.routines) {
			if (candidate.document.uri !== document.uri || routine !== activeRoutine) {
				continue;
			}
			for (const parameter of routine.parameters) {
				matches.push({
					name: parameter.name.name,
					kind: 'variable',
					document: candidate.document,
					range: parameter.name.range,
					typeName: parameter.type.name,
					priority: 1
				});
			}
			for (const localVariable of routine.localVariables) {
				matches.push({
					name: localVariable.name.name,
					kind: 'variable',
					document: candidate.document,
					range: localVariable.name.range,
					typeName: localVariable.type.name,
					priority: 1
				});
			}
		}
	}

	return matches
		.filter(symbol => !kind || symbol.kind === kind)
		.filter(symbol => containsIdentifierAtOffset(source, symbol.name, offset))
		.sort((first, second) =>
			normalizeTypeName(second.name).length - normalizeTypeName(first.name).length ||
			second.priority - first.priority ||
			Number(second.document.uri === document.uri) - Number(first.document.uri === document.uri)
		)[0];
}

function containsIdentifierAtOffset(source: string, name: string, offset: number): boolean {
	const words = name.trim().split(/\s+/u).map(escapeRegExp);
	if (words.length === 0 || !words[0]) {
		return false;
	}
	const pattern = new RegExp(words.join('\\s+'), 'giu');
	let match: RegExpExecArray | null;
	while ((match = pattern.exec(source))) {
		const start = match.index;
		const end = start + match[0].length;
		if (offset < start || offset > end) {
			continue;
		}
		const before = source[start - 1] ?? '';
		const after = source[end] ?? '';
		if (
			(isIdentifierCharacter(before) && isIdentifierCharacter(name[0])) ||
			(isIdentifierCharacter(after) && isIdentifierCharacter(name[name.length - 1]))
		) {
			continue;
		}
		return true;
	}
	return false;
}

function isIdentifierCharacter(character: string): boolean {
	return /[\p{L}\p{N}_]/u.test(character);
}

function escapeRegExp(text: string): string {
	return text.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
}

function findKeywordAtOffset(source: string, offset: number) {
	const matches = languageKeywords
		.filter(keyword => !keyword.label.startsWith('(') && keyword.label !== ';')
		.sort((first, second) => second.label.length - first.label.length);
	return matches.find(keyword => containsIdentifierAtOffset(source, keyword.label, offset));
}

function createLocation(
	document: TextDocument,
	range: { start: number; end: number }
): Location {
	return Location.create(document.uri, {
		start: document.positionAt(range.start),
		end: document.positionAt(range.end)
	});
}

documents.listen(connection);
connection.listen();
