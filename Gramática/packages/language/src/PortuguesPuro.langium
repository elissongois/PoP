grammar PortuguesPuro

interface ComandoDeRetorno {
    comando: string;
    valor?: Expressao;
}

interface ComandoDeParada {
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
        (operador+=OperadorBinario direita+=Termo) | // Exemplo:  
        (casting+=OperadorCasting artigo+=ArtigoIndefinido? tipo+=ID+)
    )*;

OperadorBinario returns string:
    OperadorAritmetico | OperadorLogico | OperadorComparacao | OperadorConcatenacao;

OperadorAritmetico returns string:
    'mais' | 'menos' | 'vezes' | 
    'multiplicado' ('por'|'pelo'|'pela'|'pelos'|'pelas') | 
    'dividido' ('por'|'pelo'|'pela'|'pelos'|'pelas');

OperadorLogico returns string:
    'e' | 'ou' | 'nem' | 'não';

OperadorComparacao returns string:
    'igual' 'a' | 'diferente' 'de' | 
    'maior' ('que'|'do' 'que') | 'menor' ('que'|'do' 'que') |
    'é' | 'são' | 'for' | 'forem';

OperadorConcatenacao returns string:
    'junto' 'com' | 'juntamente' 'com' |
    'seguido' 'de' | 'seguida' 'de' |
    'acompanhado' 'de' | 'acompanhada' 'de' |
    'com';

OperadorCasting returns string:
   'tal' ('como'|'qual');

Termo:
    NumeroLiteral | StringLiteral | FracaoLiteral | HexaLiteral | BollianoLiteral | PonteiroLiteral | Identificador | AcessoMembro;

NumeroLiteral:
    sinal=('-')? value=INT;

HexaLiteral:
    value=HEX;

StringLiteral:
    value=STRING;

FracaoLiteral:
    numerador=NumeroLiteral '/' denominador=INT;

BollianoLiteral:
    value=('sim'|'não');

PonteiroLiteral:
    value='inexistente';

Identificador:
    ref=ID;

// Acesso a membro: "o campo X deste registro"
AcessoMembro:
    artigo=ArtigoDefinido? campo=ID possessivo=Possessivo registro=[Identificador:ID];

Possessivo returns string:
    'deste' | 'desta' | 'destes' | 'destas';


Relativo returns string:
    'desse' | 'dessa' | 'desses' | 'dessas' |
    'daquele' | 'daquela' | 'daqueles' | 'daquelas' 
    ;

// ============================================================================
// DECLARAÇÃO DE TIPOS
// ============================================================================

DeclaracaoTipo:
    artigo=ArtigoIndefinido nome+=ID+ verbo=VerboSer definicao=DefinicaoTipo '.';

DefinicaoTipo:
    DefinicaoEstrutura  | DefinicaoPonteiro | TipoEscalar | TipoBase;

// Estrutura: "uma estrutura com N bytes" ou "uma estrutura com campos"
DefinicaoEstrutura:
    'uma' Identificador 'com' (tamanho=Expressao 'bytes' | campos+=CampoEstrutura (separador+=SeparadorCampo campos+=CampoEstrutura)*);

// Ponteiro: "um ponteiro" ou "um ponteiro para tipo"
DefinicaoPonteiro:
    'um' 'ponteiro'  'para' tipo+=ID+;

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
    artigo=ArtigoDefinido nome+=ID+
    verbo=VerboSer 
    tipo=TipoVariavel 
    ('igual' 'a' valor=Termo)? 
    '.'
    |
    artigo=ArtigoDefinido nome+=ID+
    verbo=VerboSer 
    valor=Termo
    '.'
    ;

TipoVariavel:
    artigo=ArtigoIndefinido tipo+=ID+;

Observacao:
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
    //'Atribua' 
    valor=Expressao preposicao=PreposicaoAtribuicao 
    artigo=ArtigoIndefinido tipo+=ID+ 
    (denominacao?='denominado' nome+=ID+)? 
    ;

// Declaração sem inicialização (usa verbos imperativos genéricos)
// Exemplos: Ative, Limpe, Esvazie, Pinte, Imprima, Desenhe, etc.
DeclaracaoLocalSemInicializacao:
    //verbo=VerboImperativo 
    artigo=ArtigoIndefinido tipo+=ID+ 
    (denominacao?='denominado' nome+=ID+)? 
    ;

// Verbo imperativo genérico - aceita qualquer identificador que termine em vogal + 'e'
// Isso permite verbos como: Ative, Limpe, Esvazie, Pinte, Imprima, Desenhe, etc.
VerboImperativo returns string:
    ID;

PreposicaoAtribuicao returns string:
    'para' | 'ao' | 'à' | 'às' | 'em' | 'na' | 'no' | 'nas' | 'nos' | 'neste' | 'nesta' | 'nestes' | 'nestas';

// ============================================================================
// ROTINAS
// ============================================================================

Rotina: // 'Rotina' é opcional para permitir declarações mais curtas
    'Rotina'? 'para' 'que' 'se' nome+=ID+ (':' | ';') (corpo=Bloco)?;

// ============================================================================
// COMANDOS
// ============================================================================

Comando:
    ComandoAtribuicao |  ComandoRetorno | ComandoPare | InvocacaoExterna | ComandoDeEmprego;

ComandoAtribuicao:
    'Atribua' valor=Expressao (preposicao='para'|preposicao='a'|preposicao='ao') alvo=AcessoVariavel '.';


ComandoRetorno returns ComandoDeRetorno:
    comando='Retorne' (valor=Expressao)? '.';

ComandoPare returns ComandoDeParada:
    comando='Pare' '.';

InvocacaoExterna:
    'Processe' biblioteca=STRING funcao=STRING ('com' (argumentos+=Expressao)*)? '.';

ComandoDeEmprego:
    'Empregue' rotina=[Rotina:ID] ('com' (argumentos+=Expressao)*)? '.';

// Acesso a variável ou campo para atribuição
AcessoVariavel:
    Identificador | AcessoMembro;

// ============================================================================
// ESTRUTURAS DE CONTROLE
// ============================================================================

Controle:
    Condicional | Laco;

Condicional:
    'Se' condicao=Expressao ',' corpo=BlocoCondicional;

Laco:
    ('Itere' '.')? (corpo=Bloco)? 'Reitere' '.';

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

// ============================================================================
// ARTIGOS E PRONOMES
// ============================================================================

ArtigoDefinido returns string:
    'o' | 'os' | 'a' | 'as' | 
    'este' | 'esta' | 'estes' | 'estas';

ArtigoIndefinido returns string:
    // Formas básicas
    'um' | 'uns' | 'uma' | 'umas' |
    // Pronomes demonstrativos abrangentes - proximidade média
    'esse' | 'essa' | 'esses' | 'essas' |
    // Pronomes demonstrativos abrangentes - distância
    'aquele' | 'aquela' | 'aqueles' | 'aquelas' |
    // Pronomes demonstrativos abrangentes - indeterminação
    'certo' | 'certa' | 'certos' | 'certas' |
    // Pronomes demonstrativos abrangentes - determinação
    'determinado' | 'determinada' | 'determinados' | 'determinadas';

// Contrações
ContracaoDeDefinido returns string:
    'do' | 'da' | 'dos' | 'das';

ContracaoEmDefinido returns string:
    'no' | 'na' | 'nos' | 'nas';

ContracaoDeDemonstrativo returns string:
    'deste' | 'desta' | 'destes' | 'destas' |
    'desse' | 'dessa' | 'desses' | 'dessas' |
    'daquele' | 'daquela' | 'daqueles' | 'daquelas';

ContracaoEmDemonstrativo returns string:
    'neste' | 'nesta' | 'nestes' | 'nestas' |
    'nesse' | 'nessa' | 'nesses' | 'nessas' |
    'naquele' | 'naquela' | 'naqueles' | 'naquelas';

// Pronomes
// PronomePossessivo returns string:
//     'meu' | 'minha' | 'meus' | 'minhas' |
//     'teu' | 'tua' | 'teus' | 'tuas' |
//     'seu' | 'sua' | 'seus' | 'suas' |
//     'nosso' | 'nossa' | 'nossos' | 'nossas' |
//     'vosso' | 'vossa' | 'vossos' | 'vossas';

PronomeRelativo returns string:
    'que' | 'qual' | 'quais' |
    'cujo' | 'cuja' | 'cujos' | 'cujas';

// Advérbios
AdverbioNegacao returns string:
    'não';

AdverbioIgnoravel returns string:
    'já' | 'ainda';

// Conjunções
Conjuncao returns string:
    'e' | 'ou' | 'nem';

Separador returns string:
    Conjuncao | ',' | ';';

// Preposições (principais - lista completa seria muito extensa)
Preposicao returns string:
    // Conectivas
    'a' | 'para' | 'em' | 'com' | 'por' |
    // Posição
    'acima' | 'abaixo' | 'sob' | 'debaixo' | 'sobre' | 
    'entre' | 'dentre' | 'perto' | 'próximo' |
    // Temporais
    'antes' | 'depois' | 'após' | 'desde' | 'durante' | 
    'até' | 'enquanto' |
    // Modo
    'como' | 'segundo' | 'mediante' | 'via' | 'usando' | 'através' |
    // Compostas
    'partir' | 'partindo' | 'dentro' | 'acerca' |
    // Relação
    'referente' | 'pertencente' | 'pertinente' | 'relativo' | 
    'relativa' | 'concernente' | 'atinente' |
    // Orientação
    'aproado' | 'aproada' | 'aproando' | 'orientado' | 'orientada' | 
    'orientando' | 'voltado' | 'voltada' | 'virado' | 'virada' | 'virando' |
    // Comparação
    'tal' | 'tão' | 'tanto' | 'quanto' | 'quão' | 'qual' |
    'parecido' | 'parecida' | 'semelhante' | 'similar' |
    // Restrição
    'sem' | 'só' | 'somente' | 'unicamente' | 'exclusivamente' | 'apenas' |
    // Especiais
    'ante' | 'perante' | 'contra' | 'versus' | 'cerca' | 
    'aproximadamente' | 'algum' | 'fora' | 'menores' |
    // Dimensão
    'alta' | 'alto' | 'comprido' | 'comprida' | 'largo' | 'larga' |
    // Resultado
    'gerando' | 'resultando' | 'retornando' | 'dando' | 'dado' | 'dada' |
    // Início
    'começando' | 'iniciando' |
    // Pronominais
    'cujo' | 'cuja' | 'cujos' | 'cujas' 
    ;

// ============================================================================
// VERBOS
// ============================================================================

Verbos returns string:
    VerboSer | VerboEstar | VerboTer | VerboHaver | VerboConter | VerboPossuir | VerboPoder | VerboDever | VerboExistir | VerboCaber | VerboComecar | VerboTerminar | OutrosVerbos;

VerboSer returns string:
    'é' | 'são' | 'for' | 'forem' | 'foi' | 'foram' | 
    'será' | 'serão' | 'ser';

VerboEstar returns string:
    'está' | 'estão' | 'estiver' | 'estiverem' | 'estava' | 'estavam' |
    'estará' | 'estarão' | 'estamos' | 'estar';

VerboTer returns string:
    'tem' | 'têm' | 'ter' | 'tiver';

VerboHaver returns string:
    'há' | 'houver';

VerboConter returns string:
    'contém' | 'conter' | 'contiver';

VerboPossuir returns string:
    'possui' | 'possuem' | 'possuir';

VerboPoder returns string:
    'pode' | 'podem' | 'podemos' | 'poderia' | 'puder' | 'puderem';

VerboDever returns string:
    'deve' | 'devem' | 'deveria' | 'deveriam';

VerboExistir returns string:
    'existe' | 'existem' | 'existir';

VerboCaber returns string:
    'cabe' | 'couber';

VerboComecar returns string:
    'começa' | 'começar' | 'inicia' | 'iniciar';

VerboTerminar returns string:
    'finaliza' | 'finalizar' | 'termina' | 'terminar';

OutrosVerbos returns string:
    'excede' | 'excedem' | 'necessita' | 'necessitar' |
    'parece' | 'requer' | 'supera' | 'superam' | 'superar';

// ============================================================================
// TERMINAIS
// ============================================================================

// Espaços em branco e comentários
hidden terminal ESPACO: /\s+/;
// Comentário de linha (uma ou mais barras invertidas)
hidden terminal COMENTARIO: /\\+[^\r\n]*/;
// Comentário inline (entre colchetes)
hidden terminal OBSERVACAO: /\[[^\]]*\]/;

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
