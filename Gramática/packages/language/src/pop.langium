grammar PortuguesPuro

interface ComandoRetorno {
    comando: string;
    valor?: Expressao;
}

interface ComandoPare {
    comando: string;
}

entry Programa:
    (elementos+=Elemento)*;

Elemento:
    DeclaracaoTipo | DeclaracaoGlobal | Rotina;

// ============================================================================
// EXPRESSÕES
// ============================================================================

Expressao:
    Termo (
        (operador+=OperadorBinario direita+=Termo) |
        (casting+=OperadorCasting artigo+=ArtigoIndefinido? tipo+=ID+)
    )*;

OperadorBinario returns string:
    OperadorAritmetico | OperadorLogico | OperadorComparacao | OperadorConcatenacao;

OperadorAritmetico returns string:
    'mais' | 'menos' | 'vezes' | 'multiplicado' 'por' | 'dividido' ('por'|'pelo'|'pela');

OperadorLogico returns string:
    'e' | 'ou' | 'nem';

OperadorComparacao returns string:
    'igual' 'a' | 'diferente' 'de' | 
    'maior' ('que'|'do' 'que') | 'menor' ('que'|'do' 'que') |
    'é' | 'são';

OperadorConcatenacao returns string:
    'junto' 'com' | 'seguido' 'de';

OperadorCasting returns string:
    'like' | 'as';

Termo:
    LiteralNumero | LiteralString | LiteralFracao | LiteralHex | VarRef | AcessoMembro;

LiteralNumero:
    value=INT;

LiteralHex:
    value=HEX;

LiteralString:
    value=STRING;

LiteralFracao:
    numerador=INT '/' denominador=INT;

VarRef:
    ref=ID;

// Acesso a membro: "o campo X deste registro"
AcessoMembro:
    artigo=ArtigoDefinido? campo=ID possessivo=Possessivo registro=[VarRef:ID];

Possessivo returns string:
    'deste' | 'desta' | 'destes' | 'destas' |
    'desse' | 'dessa' | 'desses' | 'dessas' |
    'daquele' | 'daquela' | 'daqueles' | 'daquelas' |
    'do' | 'da' | 'dos' | 'das';

// ============================================================================
// DECLARAÇÃO DE TIPOS
// ============================================================================

DeclaracaoTipo:
    artigo=ArtigoIndefinido nome+=ID+ verbo=VerboSer definicao=DefinicaoTipo '.';

DefinicaoTipo:
    DefinicaoEstrutura | DefinicaoLista | DefinicaoPonteiro | TipoEscalar | TipoBase;

// Estrutura: "uma estrutura com N bytes" ou "uma estrutura com campos"
DefinicaoEstrutura:
    'uma' 'estrutura' 'com' (tamanho=Expressao 'bytes' | campos+=CampoEstrutura (separador+=SeparadorCampo campos+=CampoEstrutura)*);

// Lista: "uma lista com campos"
DefinicaoLista:
    'uma' 'lista' 'com' campos+=CampoEstrutura (separador+=SeparadorCampo campos+=CampoEstrutura)*;

// Ponteiro: "um ponteiro" ou "um ponteiro para tipo"
DefinicaoPonteiro:
    'um' 'ponteiro' /*que aponta*/ 'para' tipo+=ID+;

// Campo de estrutura/lista
CampoEstrutura:
    artigo=ArtigoIndefinido tipo+=ID+ ('denominado' nome+=ID+)? referencia?='(referência)'? ('sob' campoBase+=ID+)?;

// Separador de campos: e, ou, vírgula
SeparadorCampo returns string:
    'e' | 'ou' | ',';

// Tipo escalar (unidade de medida): "Um pixel são 15 twips"
TipoEscalar:
    razao=Expressao tipo+=ID+;

// Tipo base (derivado): "um nome"
TipoBase:
    artigo=ArtigoIndefinido tipo+=ID+;


// ============================================================================
// DECLARAÇÃO DE VARIÁVEIS GLOBAIS
// ============================================================================

DeclaracaoGlobal:
    artigo=ArtigoDefinido nome+=ID+ abreviacao?=Abreviacao? 
    verbo=VerboSer 
    tipo=TipoVariavel 
    (('igual' | 'iguais') 'a' valor=Expressao)? 
    '.';

TipoVariavel:
    artigo=ArtigoIndefinido tipo+=ID+;

Abreviacao:
    '[' conteudo=ID ']';

// ============================================================================
// DECLARAÇÃO DE VARIÁVEIS LOCAIS
// ============================================================================

// Variáveis locais podem ser declaradas de duas formas:
// 1. Com inicialização: Atribua <valor> para <artigo> <tipo> [denominado <nome>]
// 2. Sem inicialização: <Verbo> <artigo> <tipo> [denominado <nome>]

DeclaracaoLocal:
    DeclaracaoLocalComInicializacao | DeclaracaoLocalSemInicializacao;

// Declaração com inicialização (usa Atribua)
DeclaracaoLocalComInicializacao:
    'Atribua' valor=Expressao preposicao=PreposicaoAtribuicao 
    artigo=ArtigoIndefinido tipo+=ID+ 
    (denominacao?='denominado' nome+=ID+)? 
    '.';

// Declaração sem inicialização (usa verbos imperativos genéricos)
// Exemplos: Ative, Limpe, Esvazie, Pinte, Imprima, Desenhe, etc.
DeclaracaoLocalSemInicializacao:
    verbo=VerboImperativo 
    artigo=ArtigoIndefinido tipo+=ID+ 
    (denominacao?='denominado' nome+=ID+)? 
    '.';

// Verbo imperativo genérico - aceita qualquer identificador que termine em vogal + 'e'
// Isso permite verbos como: Ative, Limpe, Esvazie, Pinte, Imprima, Desenhe, etc.
VerboImperativo returns string:
    ID;

PreposicaoAtribuicao returns string:
    'para' | 'em';

// ============================================================================
// ROTINAS
// ============================================================================

Rotina:
    'Rotina' 'para' 'que' 'se' nome+=ID+ (':' | ';') (corpo=Bloco)?;

// ============================================================================
// COMANDOS
// ============================================================================

Comando:
    ComandoAtribuicao | ComandoES | ComandoAritmetico | ComandoRetorno | ComandoPare | ComandoProcessar | ComandoChamada;

ComandoAtribuicao:
    'Atribua' valor=Expressao (preposicao='para'|preposicao='a'|preposicao='ao') alvo=AcessoVariavel '.';

ComandoES:
    'Escreva' expressao=Expressao 'para' 'StdOut' '.';

ComandoAritmetico:
    (operacao='Adicione' | operacao='Subtraia' | operacao='Multiplique' | operacao='Divida') 
    valor=Expressao 
    (preposicao='para' | preposicao='pelo' | preposicao='por' | preposicao='de') 
    alvo=AcessoVariavel '.';

ComandoRetorno returns ComandoRetorno:
    comando='Retorne' (valor=Expressao)? '.';

ComandoPare returns ComandoPare:
    comando='Pare' '.';

ComandoProcessar:
    'Processe' biblioteca=STRING funcao=STRING ('com' (argumentos+=Expressao)*)? '.';

ComandoChamada:
    'Chame' rotina=[Rotina:ID] ('com' (argumentos+=Expressao)*)? '.';

// Acesso a variável ou campo para atribuição
AcessoVariavel:
    VarRef | AcessoMembro;

// ============================================================================
// ESTRUTURAS DE CONTROLE
// ============================================================================

Controle:
    Condicional | Laco;

Condicional:
    'Se' condicao=Expressao ',' corpo=BlocoCondicional;

Laco:
    'Itere' '.' (corpo=Bloco)? 'Reitere' '.';

BlocoCondicional:
    (instrucoes+=Instrucao)* '.';

Bloco:
    (instrucoes+=Instrucao)+;

Instrucao:
    Comando | Controle | Laco | DeclaracaoLocal;

// NOTA: Case-insensitive será implementado futuramente através de uma das seguintes estratégias:
// 1. Normalização no lexer/scanner antes do parsing
// 2. Transformação customizada no Langium usando ValueConverter
// 3. Post-processing no AST visitor
// Por enquanto, todas as palavras-chave estão em minúsculas

ArtigoDefinido returns string:
    'o' | 'os' | 'a' | 'as' | 
    'este' | 'esta' | 'estes' | 'estas';

ArtigoIndefinido returns string:
    'um' | 'uns' | 'uma' | 'umas' |
    'esse' | 'essa' | 'esses' | 'essas' |
    'aquele' | 'aquela' | 'aqueles' | 'aquelas' |
    'certo' | 'certa' | 'certos' | 'certas' |
    'determinado' | 'determinada' | 'determinados' | 'determinadas';

VerboSer returns string:
    'é' | 'são';

// ============================================================================
// TERMINAIS
// ============================================================================

// Espaços em branco e comentários
hidden terminal WS: /\s+/;
hidden terminal SL_COMMENT: /\\.*/;
hidden terminal ML_COMMENT: /\[[\s\S]*?\]/;

// Identificador genérico (para abreviações e outros usos)
terminal ID: 
    /[_a-zA-ZÀ-ÿ][_a-zA-ZÀ-ÿ0-9]*/;

// Número inteiro
terminal INT returns number: 
    /[0-9]+/;

// Número Hexadecimal (ex: $FF, $A0)
terminal HEX returns number:
    /\$[0-9a-fA-F]+/;

// String literal (entre aspas duplas, com escape "")
terminal STRING: 
    /"(""|[^"])*"/;

