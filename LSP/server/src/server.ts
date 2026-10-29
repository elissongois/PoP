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
	InitializeResult,
	Location,
	ProposedFeatures,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	TextDocuments
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	findRoutineCallTargetAtOffset,
	findRoutineDeclarationAtOffset,
	GlobalVariableSymbolTable,
	findTypeReferenceAtOffset,
	normalizeTypeName,
	parseTypeDeclarations,
	TypeSymbolTable
} from './typeParser';

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
		implementationProvider: true
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
