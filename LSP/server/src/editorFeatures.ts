import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export interface LanguageKeyword {
	label: string;
	detail: string;
	documentation: string;
}

export const languageKeywords: LanguageKeyword[] = [
	{
		label: 'Rotina para que se',
		detail: 'Cabeçalho de rotina',
		documentation: 'Inicia a declaração de uma rotina. O nome da rotina começa depois de “para que se”.'
	},
	{
		label: 'Função para que se determine se',
		detail: 'Cabeçalho de função deliberativa',
		documentation: 'Declara uma função booleana. O corpo termina com “Diga sim.” ou “Diga não.”.'
	},
	{
		label: 'Se',
		detail: 'Condicional',
		documentation: 'Executa uma instrução ou um bloco condicional quando a condição é verdadeira.'
	},
	{
		label: 'Itere',
		detail: 'Início de laço',
		documentation: 'Inicia a repetição de um bloco, finalizado pela instrução “Reitere.”.'
	},
	{
		label: 'Reitere',
		detail: 'Continuação de laço',
		documentation: 'Repete o bloco iniciado por “Itere.”.'
	},
	{
		label: 'Pare',
		detail: 'Controle de laço',
		documentation: 'Interrompe a repetição atual.'
	},
	{
		label: 'Continue',
		detail: 'Controle de laço',
		documentation: 'Continua a repetição atual.'
	},
	{
		label: 'Retorne',
		detail: 'Saída de rotina',
		documentation: 'Interrompe a rotina atual sem retornar um valor.'
	},
	{
		label: 'Diga sim',
		detail: 'Retorno verdadeiro',
		documentation: 'Encerra uma função deliberativa retornando verdadeiro.'
	},
	{
		label: 'Diga não',
		detail: 'Retorno falso',
		documentation: 'Encerra uma função deliberativa retornando falso.'
	},
	{
		label: 'Preserve',
		detail: 'Preservação de parâmetro',
		documentation: 'Cria uma cópia local de um parâmetro da rotina.'
	},
	{
		label: 'Atribua',
		detail: 'Atribuição',
		documentation: 'Atribui um valor a uma variável.'
	},
	{
		label: 'Escreva',
		detail: 'Saída',
		documentation: 'Escreve uma expressão em um destino.'
	},
	{
		label: 'Decodifique',
		detail: 'Instrução de máquina',
		documentation: 'Executa a sequência de bytes indicada por um literal hexadecimal.'
	},
	{
		label: 'Processe',
		detail: 'Chamada externa',
		documentation: 'Invoca uma rotina externa ou uma chamada declarada.'
	},
	{
		label: 'denominado',
		detail: 'Designação de variável local',
		documentation: 'Dá um nome explícito à variável local declarada.'
	},
	{
		label: 'denominada',
		detail: 'Designação de variável local',
		documentation: 'Dá um nome explícito à variável local declarada.'
	},
	{
		label: '(qualificador)',
		detail: 'Qualificador de rotina',
		documentation: 'Texto entre parênteses que diferencia cabeçalhos de rotinas ou funções.'
	},
	{
		label: ';',
		detail: 'Cabeçalho alternativo',
		documentation: 'Separa um nome alternativo do cabeçalho principal; somente o principal termina com dois-pontos.'
	}
];

export function createKeywordCompletions(): CompletionItem[] {
	return languageKeywords.map(keyword => ({
		label: keyword.label,
		kind: CompletionItemKind.Keyword,
		detail: keyword.detail,
		documentation: keyword.documentation
	}));
}
