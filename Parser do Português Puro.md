O código implementa um parser próprio para Português Puro, escrito em TypeScript/JavaScript, sem depender de um gerador de parsers como ANTLR ou Langium. Sua arquitetura é baseada em funções especializadas que analisam trechos do código-fonte, identificam construções da linguagem, montam estruturas semânticas e resolvem referências entre declarações.

A documentação abaixo segue a implementação efetivamente presente no arquivo, incluindo o fluxo de execução, as principais funções auxiliares, os mecanismos de reconhecimento e resolução semântica e a estrutura dos resultados produzidos.

# Guia técnico: arquitetura e funcionamento do parser do Português Puro

# Parser do Português Puro

## Documentação técnica e guia didático

## 1. Visão geral

O parser do Português Puro é um analisador sintático e semântico desenvolvido manualmente. Sua implementação não utiliza uma gramática formal processada por um gerador de parsers. Em vez disso, a análise é realizada por um conjunto de funções especializadas que identificam construções da linguagem diretamente no texto-fonte.

O parser é responsável por:

- Identificar declarações de tipos.
- Identificar variáveis globais.
- Identificar rotinas, funções booleanas e seus cabeçalhos alternativos.
- Interpretar parâmetros e tipos de retorno.
- Reconhecer campos de estruturas e uniões.
- Identificar variáveis locais.
- Interpretar instruções e expressões.
- Resolver chamadas de rotinas.
- Resolver acessos a campos de estruturas.
- Verificar compatibilidade entre tipos.
- Construir tabelas de símbolos.
- Identificar referências entre declarações e utilizações.
- Produzir diagnósticos com intervalos precisos no código-fonte.

A implementação utiliza principalmente expressões regulares, pesquisas textuais, percorrimento caractere por caractere e funções auxiliares para delimitar trechos do código.

Uma característica importante é que o parser trabalha diretamente com o texto original, preservando as posições dos caracteres. Isso permite que as estruturas produzidas contenham referências aos intervalos exatos em que os elementos aparecem no documento.

---

# 2. Arquitetura geral

O ponto de entrada principal é:

`parseTypeDeclarations(text)`

Essa função recebe o conteúdo completo de um documento e coordena praticamente todo o processo de análise.

Seu funcionamento pode ser dividido em seis grandes etapas:

1. Preparação do código-fonte e identificação das rotinas.
2. Identificação e análise das declarações.
3. Construção das tabelas de símbolos.
4. Validação das declarações e resolução dos tipos.
5. Análise dos corpos das rotinas.
6. Retorno das estruturas semânticas e dos diagnósticos.

### 2.1. Fluxo geral

```
                    CÓDIGO-FONTE
                          |
                          v
                 parseTypeDeclarations
                          |
                          v
                   maskComments
                          |
                 +--------+--------+
                 |                 |
                 v                 v
        parseRoutineDeclarations  Busca de declarações
                 |                 |
                 |                 v
                 |          findDeclarationPeriod
                 |                 |
                 |                 v
                 |          findDeclarationStart
                 |                 |
                 |          +------+------+
                 |          |             |
                 |          v             v
                 |   parseDeclaration  parseGlobalVariableDeclaration
                 |          |             |
                 +----------+-------------+
                            |
                            v
                   Construção das tabelas
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
       TypeSymbolTable  GlobalVariable  RoutineSymbolTable
                         SymbolTable
             |              |              |
             +--------------+--------------+
                            |
                            v
                  Validação e resolução
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
       Tipos e campos   Parâmetros      Campos calculados
                            |
                            v
                    Resolução das rotinas
                            |
                            v
                    resolveRoutineCalls
                            |
                            v
                 Modelo semântico completo
                            |
                            v
                       Diagnósticos
```

O diagrama representa o fluxo principal. Algumas operações são executadas em sequência, e outras utilizam as estruturas construídas anteriormente para resolver referências.

---

# 3. Preparação do código-fonte

## 3.1. maskComments

A primeira operação realizada pelo parser é:

`maskComments(text, diagnostics)`

Sua finalidade é identificar comentários e removê-los da análise sintática sem modificar o comprimento do documento.

Em vez de apagar os comentários, a função substitui seus caracteres por espaços.

Isso é particularmente importante porque todas as estruturas do parser utilizam posições absolutas dos caracteres.

Por exemplo:

Código original:

```
Uma quantidade [comentário] é um número.
```

Texto utilizado internamente:

```
Uma quantidade             é um número.
```

O texto resultante possui exatamente o mesmo comprimento do original.

Consequentemente, se um elemento estiver na posição 30 do documento original, continuará na posição 30 depois da remoção lógica dos comentários.

### 3.2. Tipos de comentários

A implementação reconhece dois formatos de comentários.

**Comentário de linha**

Começa com uma barra invertida e termina na quebra de linha.

```
Uma quantidade é um número. \ Isto é um comentário.
```

A barra invertida e todo o conteúdo até o final da linha são substituídos por espaços.

**Comentário de bloco**

Começa com `[` e termina com `]`.

```
Uma quantidade [comentário] é um número.
```

O comentário pode ocupar várias linhas.

### 3.3. Proteção de strings

A função também reconhece strings delimitadas por aspas duplas.

Isso impede que caracteres que normalmente iniciariam comentários sejam interpretados como comentários quando aparecem dentro de strings.

Por exemplo:

```
Uma mensagem é uma string igual a "Texto [não é comentário]".
```

As aspas duplicadas representam aspas literais dentro da string:

```
Uma mensagem é uma string igual a "Esta é uma ""string""".
```

A função mantém um estado interno para distinguir três situações:

- Dentro de uma string.
- Dentro de um comentário de bloco.
- Fora de strings e comentários.

Também verifica caracteres de controle não imprimíveis nos comentários e produz diagnósticos quando os encontra.

**Por que essa estratégia é importante?**

A substituição por espaços permite que o restante do parser trabalhe sobre uma versão simplificada do documento sem perder a correspondência entre posições originais e posições analisadas.

---

# 4. Identificação das declarações

Depois de preparar o texto, o parser identifica os diferentes elementos declarativos.

Existem dois mecanismos principais:

- Identificação dos cabeçalhos de rotinas.
- Percorrimento das declarações terminadas por ponto.

## 4.1. findDeclarationPeriod

Essa função procura o próximo ponto que representa o encerramento de uma declaração.

Entretanto, não considera qualquer ponto encontrado no texto.

Ela mantém dois estados:

- Se está dentro de uma string.
- O nível atual de aninhamento de parênteses.

Um ponto somente é considerado terminador quando:

- Está fora de uma string.
- Não está dentro de parênteses.

Por exemplo:

```
Uma mensagem é uma string igual a "Olá. Tudo bem?".
```

O ponto dentro da string não encerra a declaração.

Da mesma forma, pontos dentro de expressões entre parênteses não são considerados terminadores.

A função também considera o escape de aspas duplicadas.

## 4.2. findDeclarationStart

Depois de encontrar o ponto terminador, o parser procura o início da declaração.

A busca percorre as linhas do trecho e procura um artigo no início de uma linha.

São reconhecidos dois grupos:

**Artigos indefinidos:**

- um
- uma
- uns
- umas

**Artigos definidos:**

- o
- a
- os
- as

A distinção é utilizada posteriormente para determinar o tipo de declaração.

Artigos indefinidos indicam declarações de tipos.

Artigos definidos indicam declarações de variáveis globais.

## 4.3. Identificação dos tipos de declaração

O parser utiliza a primeira palavra da declaração para decidir qual função deve processá-la.

| Início             | Função responsável               |
| ------------------ | -------------------------------- |
| Um, Uma, Uns, Umas | `parseDeclaration`               |
| O, A, Os, As       | `parseGlobalVariableDeclaration` |

Se uma declaração não puder ser interpretada, a função correspondente simplesmente não produz uma estrutura declarativa.

---

# 5. Declarações de tipos

## 5.1. parseDeclaration

Essa função interpreta declarações de tipos.

Ela reconhece três elementos principais:

- Nome do novo tipo.
- Tipo-base.
- Características adicionais, como escala, ponteiro ou campos.

A declaração possui a seguinte estrutura geral:

```
Um nome de tipo é um tipo-base.
```

A função começa procurando o artigo indefinido e, em seguida, procura o operador de declaração.

## 5.2. findOperator

Identifica o operador de declaração.

São reconhecidos:

- é
- são

A pesquisa utiliza limites de palavras para evitar correspondências parciais.

Depois de encontrar o operador, o trecho anterior representa o nome do tipo, enquanto o trecho posterior contém sua definição.

## 5.3. Tipos derivados

Exemplo:

```
Uma quantidade é um número.
```

O parser produz uma estrutura semelhante a:

```
{
    kind: "type-declaration",
    name: {
        name: "quantidade",
        normalizedName: "quantidade",
        range: { ... }
    },
    baseType: {
        name: "número",
        normalizedName: "número",
        range: { ... }
    },
    scalarFactor: "1",
    operator: "é",
    range: { ... }
}
```

O campo `scalarFactor` é inicialmente determinado pelo parser.

Quando o tipo-base é `número`, o fator padrão é `"1"`.

## 5.4. Tipos escalares

O parser também reconhece declarações com um número inteiro entre o operador e o tipo-base.

Exemplo:

```
Um byte é 8 bits.
```

Nesse caso:

- O nome do tipo é `byte`.
- O fator escalar é `8`.
- O tipo-base é `bits`.

A função `readInteger` identifica o número inteiro utilizado nessa declaração.

O parser guarda o valor como texto, permitindo posteriormente convertê-lo para `BigInt` durante os cálculos de escala.

## 5.5. Ponteiros

A função também reconhece declarações que contêm `para`.

Exemplo:

```
Um ponteiro de caractere é um ponteiro para um caractere.
```

O trecho posterior a `para` é armazenado em `pointedType`.

Essa informação permite que o resolvedor reconheça operações relacionadas a endereçamento e conteúdo.

## 5.6. Estruturas

Declarações que contêm `com` podem definir campos.

Exemplo:

```
Uma pessoa é uma estrutura com um nome de texto e uma idade de número.
```

O trecho posterior a `com` é encaminhado para:

`parseFields`

Essa função é responsável por interpretar os campos.

---

# 6. Campos de estruturas

## 6.1. parseFields

A função `parseFields` interpreta a lista de campos de uma estrutura ou de uma variável global estruturada.

Ela reconhece diferentes formatos de campo.

### Campos com nome implícito

Exemplo:

```
Uma pessoa é uma estrutura com um texto.
```

Nesse formato, o nome e o tipo do campo são inicialmente representados pelo mesmo trecho.

O campo recebe `usesTypeAlias: true`.

Posteriormente, `resolveFields` tenta identificar qual tipo declarado corresponde ao nome informado.

### Campos com nome explícito

Exemplo:

```
Uma pessoa é uma estrutura com um texto denominado nome.
```

O parser reconhece o marcador `denominado`.

Nesse caso:

- O trecho anterior ao marcador representa o tipo.
- O trecho posterior representa o nome do campo.

Também são reconhecidas as formas:

- denominado
- denominada
- denominados

### Campos de referência

A função `findReferenceMarker` reconhece:

```
(referência)
```

Essa informação é armazenada em `isReference`.

### Arrays de bytes

O parser reconhece campos declarados por meio de uma quantidade inteira seguida de um tipo.

Exemplo:

```
Uma estrutura é uma estrutura com 16 bytes.
```

O campo resultante possui:

```
{
    kind: "byte-array",
    count: "16",
    elementType: { ... },
    range: { ... }
}
```

A implementação permite somente arrays contíguos de `byte`.

Se o tipo do elemento não for `byte` ou `bytes`, é produzido um diagnóstico:

`Only contiguous arrays of byte are supported.`

### Uniões

O marcador `sob` introduz um campo que utiliza outro campo como destino de união.

Exemplo estrutural:

```
... sob o campo ...
```

A função `parseUnionTarget` identifica o artigo definido e o nome do campo de destino.

O resultado é armazenado em `unionTarget`.

### Separação dos campos

A função `findFieldSeparator` reconhece separadores como:

- Vírgula.
- Conjunção `e`.

A conjunção somente é considerada separador quando o trecho seguinte começa com um artigo indefinido ou com uma quantidade inteira.

Isso ajuda a evitar que uma ocorrência de `e` dentro de um nome seja interpretada incorretamente como separador.

---

# 7. Resolução dos tipos e campos

Depois que todas as declarações foram identificadas, o parser constrói a tabela de símbolos de tipos.

## 7.1. TypeSymbolTable

Essa classe mantém os tipos conhecidos pelo compilador.

Sua estrutura interna possui dois mapas:

- `symbols`: tipos indexados pelo nome normalizado.
- `names`: nomes alternativos que também podem identificar um tipo.

Na inicialização, são adicionados dois tipos primitivos:

- `byte`
- `estrutura`

Depois, os tipos declarados no documento são incorporados à tabela.

### Tipos plurais

A tabela também registra os nomes plurais dos tipos.

Por exemplo, um tipo chamado `quantidade` pode ser identificado por sua forma plural.

A formação do plural é delegada à função importada `pluralizeTypeName`, que utiliza o módulo `plural`.

A função `pluralizeTypeName` também preserva a parte posterior à palavra `de`.

### Normalização

A função `normalizeTypeName` executa duas operações:

1. Remove espaços excedentes no início e no final.
2. Substitui sequências de espaços por um único espaço e converte o texto para minúsculas usando a localidade `pt-BR`.

Assim:

```
"  Quantidade   de  Pixels "
```

É normalizado para:

```
"quantidade de pixels"
```

Isso permite que nomes com diferenças de capitalização ou espaçamento sejam reconhecidos como equivalentes.

## 7.2. Tipos escalares e escalas

A função `resolveScale` determina se um tipo derivado representa um tipo escalar.

Ela percorre a cadeia de tipos-base.

Quando encontra um tipo escalar, calcula a escala acumulada.

Os valores são representados como frações.

Exemplo conceitual:

```
Um tipo A é 2 números.
Um tipo B é 3 tipos A.
```

A escala de B será:

```
6/1
```

A implementação utiliza:

- `parseFraction`
- `formatFraction`
- `greatestCommonDivisor`

O uso de `BigInt` evita a limitação dos números inteiros convencionais do JavaScript durante esses cálculos.

O algoritmo também utiliza um conjunto de tipos visitados para evitar recursão infinita em cadeias circulares.

## 7.3. getBaseTypeDistance

Essa função calcula a distância entre dois tipos na cadeia de herança.

Por exemplo:

```
A -> B -> C
```

A distância de A até C será 2.

Se o tipo de destino não for encontrado na cadeia, a função não retorna uma distância válida.

Essa informação é utilizada principalmente na resolução de chamadas de rotinas e na compatibilidade de argumentos.

## 7.4. resolveFields

Depois da construção da tabela de tipos, `resolveFields` resolve os tipos dos campos.

A função também:

- Resolve campos que utilizam aliases de tipos.
- Identifica tipos desconhecidos.
- Detecta nomes de campos duplicados.
- Considera a relação de herança entre estruturas.
- Identifica se uma estrutura deriva de `lista`.

Quando um campo utiliza um alias, o parser procura combinações de palavras que correspondam a um tipo conhecido.

A pesquisa é realizada em duas direções para tentar identificar o trecho correspondente.

---

# 8. Variáveis globais

## 8.1. parseGlobalVariableDeclaration

As variáveis globais começam com artigos definidos.

Exemplo:

```
A quantidade é um número.
```

A função reconhece duas modalidades principais.

### Declaração com tipo explícito

```
A quantidade é um número.
```

O parser armazena:

- Nome da variável.
- Tipo declarado.
- Artigo utilizado.
- Operador.
- Intervalo da declaração.

Também permite declarar campos:

```
A pessoa é uma estrutura com um texto denominado nome e um número denominado idade.
```

### Declaração com inicializador

Exemplo:

```
A quantidade é 10.
```

Nesse formato, o tipo pode ser inferido a partir do literal.

A função `parseGlobalVariableLiteral` reconhece:

| Categoria    | Exemplos                        |
| ------------ | ------------------------------- |
| Inteiro      | `10`, `-5`, `+20`               |
| Fração       | `3/4`, `-5/2`                   |
| Número misto | `2+3/5`                         |
| Hexadecimal  | `$FF`, `$A5`                    |
| String       | `"Olá"`                         |
| Nulo         | `nulo`, `inexistente`, `zerado` |

Os inteiros e componentes numéricos das frações são verificados como inteiros de 32 bits com sinal.

Strings são verificadas por `isValidStringLiteral`, que também considera as aspas duplicadas.

### Inferência de tipos

A função `inferGlobalVariableTypeName` associa as categorias de literais aos tipos correspondentes:

| Literal      | Tipo inferido       |
| ------------ | ------------------- |
| Inteiro      | `número`            |
| Fração       | `fração`            |
| Número misto | `fração`            |
| Hexadecimal  | `texto hexadecimal` |
| String       | `string`            |
| Nulo         | Sem tipo inferido   |

O tipo nulo não recebe um tipo inferido nessa etapa.

## 8.2. GlobalVariableSymbolTable

Essa classe organiza as variáveis globais em um mapa.

Cada entrada contém:

- Nome original.
- Nome normalizado.
- Nome do tipo.
- Referência à estrutura de tipo, quando existente.
- Referência à declaração original.

O método `lookup` permite localizar uma variável pelo nome normalizado.

---

# 9. Declarações de rotinas

## 9.1. parseRoutineDeclarations

A identificação das rotinas é realizada separadamente das declarações de tipos e variáveis globais.

A função procura cabeçalhos que começam com:

```
para que se
```

Também aceita os prefixos opcionais:

```
rotina para que se
função para que se
```

A expressão regular utilizada é:

```
(?:(rotina|função)\s+)?para\s+que\s+se(?:\s+(determine)\s+(se))?
```

A função exige que o início do cabeçalho esteja no começo de uma linha.

Também ignora correspondências encontradas dentro de parênteses.

## 9.2. Delimitação do cabeçalho

A função `findHeaderTerminator` procura o final do cabeçalho.

São reconhecidos:

- Dois-pontos `:`.
- Ponto e vírgula `;`.

A pesquisa respeita o aninhamento de parênteses.

Isso permite que qualificadores parentéticos façam parte do cabeçalho sem que seus caracteres sejam confundidos com o terminador.

## 9.3. Funções booleanas

Um cabeçalho que utiliza:

```
para que se determine se
```

é identificado como função booleana.

O campo `isBooleanFunction` recebe `true`.

A implementação também verifica se a palavra `não` aparece indevidamente no cabeçalho.

## 9.4. Nome da rotina

O nome da rotina é identificado a partir dos elementos encontrados no cabeçalho.

A delimitação considera:

- Marcadores de parâmetros.
- Marcadores de retorno.
- Qualificadores parentéticos.
- Palavras que identificam predicados booleanos.
- Marcadores de campos calculados.

A função utiliza conjuntos de palavras para reconhecer esses elementos.

## 9.5. Qualificadores

O parser reconhece qualificadores parentéticos no final dos nomes.

Exemplo:

```
... (qualificador)
```

A função `findTrailingParentheticalQualifier` identifica o grupo parentético final e extrai seu conteúdo.

O qualificador é armazenado separadamente do nome principal da rotina.

Isso permite distinguir rotinas com nomes equivalentes, mas qualificadores diferentes.

## 9.6. Parâmetros

Os parâmetros são identificados por `parseRoutineParameters`.

Cada parâmetro é interpretado por `parseRoutineParameter`.

A estrutura esperada contém:

- Tipo.
- Nome.

O artigo indefinido introduz a declaração do parâmetro.

O nome pode ser identificado por marcadores como:

- denominado
- denominada
- denominados
- chamados
- chamada

A função `findRoutineParameterSeparator` reconhece separadores entre parâmetros:

- Vírgula.
- `e`.
- `ou`.
- `nem`.
- `para`, quando seguido de um artigo indefinido.

## 9.7. Tipo de retorno

O marcador `retornando` introduz o parâmetro de retorno.

O parser utiliza a mesma função `parseRoutineParameter` para interpretar esse elemento.

Se o marcador existir, mas não houver uma declaração válida de tipo e nome, é produzido um diagnóstico.

## 9.8. Cabeçalhos alternativos

Uma característica importante da implementação é o suporte a cabeçalhos alternativos para uma mesma rotina.

A função identifica cabeçalhos primários e alternativos.

O cabeçalho primário termina com `:`.

Os alternativos terminam com `;`.

Os nomes alternativos são armazenados em `alternateNames`, enquanto a rotina mantém uma única estrutura principal.

A função `hasEquivalentRoutineSignature` verifica se dois cabeçalhos possuem assinaturas semanticamente equivalentes.

A comparação considera:

- Nome normalizado.
- Qualificador.
- Quantidade de parâmetros.
- Tipos dos parâmetros.

Cabeçalhos equivalentes podem gerar diagnósticos.

## 9.9. Estrutura interna de uma rotina

Uma rotina recebe uma estrutura que contém:

```
{
    name,
    qualifier,
    alternateNames,
    parameters,
    preservedParameters,
    assignments,
    outputs,
    localVariables,
    conditionals,
    processes,
    loopInstructions,
    computedFieldAccesses,
    computedField,
    returnParameter,
    calls,
    annotation,
    isBooleanFunction,
    range,
    bodyRange
}
```

Esses campos são preenchidos progressivamente durante a análise.

---

# 10. Delimitação dos corpos das rotinas

## 10.1. setRoutineBodyRanges

Depois de identificar as rotinas, o parser precisa determinar onde começa e termina cada corpo.

O início é definido pelo final do cabeçalho primário.

O final é determinado pela primeira ocorrência posterior de:

- Outro cabeçalho de rotina.
- Uma declaração de tipo.
- Uma declaração de variável global.
- Final do documento.

O intervalo resultante é armazenado em `bodyRange`.

Esse mecanismo permite que o parser analise os statements de cada rotina sem precisar identificar explicitamente um delimitador de bloco de encerramento.

---

# 11. Análise dos statements

## 11.1. resolveRoutineCalls

Essa função percorre os corpos das rotinas e identifica os statements.

O corpo é percorrido utilizando `findDeclarationPeriod`, portanto os statements são delimitados por pontos.

Cada trecho é enviado para `processRoutineStatement`.

Antes disso, a função verifica se o corpo está vazio e emite um hint quando não existem instruções.

Também verifica se funções booleanas possuem um statement válido `Diga sim` ou `Diga não`.

## 11.2. processRoutineStatement

Essa é uma das funções centrais do parser.

Ela recebe um trecho de código e tenta classificá-lo conforme sua palavra inicial ou estrutura.

A sequência de reconhecimento inclui:

1. `Preserve`
2. `Atribua`
3. `Escreva`
4. `Diga`
5. `Retorne`
6. `Decodifique`
7. `Empilhe`
8. `Itere`
9. `Pare`
10. `Reitere`
11. `Processe`
12. Chamada de rotina

Cada categoria é encaminhada para sua função especializada.

Se nenhuma instrução conhecida for identificada, o parser tenta interpretar o trecho como uma chamada de rotina.

Caso não consiga resolvê-la, pode produzir um diagnóstico.

---

# 12. Atribuições e expressões

## 12.1. parseRoutineAssignment

Reconhece statements iniciados por `Atribua`.

A função procura um dos marcadores de destino:

- para
- à
- ao
- aos
- às

O trecho anterior ao marcador representa a expressão.

O trecho posterior representa o destino da atribuição.

A função também impede que uma declaração iniciada por artigo indefinido seja interpretada incorretamente como uma atribuição.

## 12.2. parseRoutineOutput

Reconhece statements iniciados por `Escreva`.

Procura o marcador `para`, separando:

- Expressão a ser escrita.
- Destino da saída.

## 12.3. parseRoutineExpression

Essa função interpreta expressões aritméticas.

Os operadores reconhecidos são:

| Operador     | Significado   |
| ------------ | ------------- |
| mais         | Adição        |
| menos        | Subtração     |
| vezes        | Multiplicação |
| dividido por | Divisão       |
| `/`          | Divisão       |
| junto com    | Concatenação  |
| seguido de   | Concatenação  |

A função primeiro identifica os operadores fora de strings.

Depois divide a expressão em operandos.

Cada operando é interpretado por `parseSignedExpressionOperand`.

### Operadores unários

A função reconhece os sinais `+` e `-` no início de um operando.

Exemplo:

```
-10 mais 5
```

O sinal é representado como um nó unário.

### Construção da árvore da expressão

A estrutura produzida utiliza dois tipos de nós:

**Operando:**

```
{
    kind: "operand",
    text: "...",
    range: { ... }
}
```

**Operador unário:**

```
{
    kind: "unary",
    operator: "-",
    operand: { ... },
    range: { ... }
}
```

**Operador binário:**

```
{
    kind: "binary",
    operator: "mais",
    left: { ... },
    right: { ... },
    range: { ... }
}
```

Quando existem vários operadores, a função constrói a árvore progressivamente, da esquerda para a direita.

Portanto, a implementação não utiliza uma tabela convencional de precedência entre os operadores.

Também produz diagnósticos quando falta um operando antes ou depois de um operador.

---

# 13. Condicionais

## 13.1. parseConditionalBlock

Os condicionais começam com `Se`.

A função procura uma vírgula que separa a condição dos statements.

Exemplo estrutural:

```
Se condição, instrução 1; instrução 2.
```

A condição é resolvida por `resolveBooleanCondition`.

Os statements posteriores à vírgula são separados por ponto e vírgula.

A estrutura resultante contém:

- Condição.
- Argumentos da condição.
- Rotina booleana correspondente.
- Lista de statements.
- Intervalo do bloco.

## 13.2. resolveBooleanCondition

Essa função procura uma função booleana compatível com a condição informada.

Ela considera:

- Funções booleanas sem parâmetros.
- Funções booleanas com parâmetros.
- Nomes principais.
- Nomes alternativos.
- Compatibilidade dos tipos dos argumentos.

A palavra `não` é mascarada durante a identificação do nome da rotina, permitindo reconhecer a negação da condição sem incorporá-la ao nome.

Quando existem várias possibilidades, a função seleciona a chamada com a menor distância total entre os tipos dos argumentos e os tipos esperados.

## 13.3. Condicionais aninhados

A implementação identifica a ocorrência de outro statement iniciado por `Se` dentro da lista de statements de um condicional.

Quando isso acontece, produz o diagnóstico:

`Conditional blocks cannot be nested.`

Portanto, a implementação reconhece a tentativa de aninhamento, mas não oferece suporte a blocos condicionais aninhados.

---

# 14. Instruções especiais

## 14.1. Preserve

A função `validatePreserveStatement` verifica se `Preserve` foi seguido pelo artigo definido e pelo nome de um parâmetro da rotina.

Quando válido, registra o parâmetro em `preservedParameters`.

Também cria os nomes utilizados para representar a cópia e o original.

## 14.2. Diga

A função `validateDigaStatement` verifica:

- Se o statement está dentro de uma função booleana.
- Se o argumento é `sim` ou `não`.

O statement válido é utilizado para determinar o resultado de uma função booleana.

## 14.3. Retorne

A função `validateReturnStatement` reconhece `Retorne`.

A implementação não permite que essa instrução receba um valor ou uma variável.

Se houver conteúdo adicional, produz um diagnóstico.

## 14.4. Itere, Pare e Reitere

A função `parseLoopInstruction` reconhece três instruções:

| Instrução | Representação interna |
| --------- | --------------------- |
| Itere     | `iterate`             |
| Pare      | `break`               |
| Reitere   | `repeat`              |

Essas instruções não aceitam argumentos.

A estrutura resultante contém o tipo de instrução e seu intervalo.

## 14.5. Decodifique

A função `validateDecodeStatement` verifica se existe um literal hexadecimal depois de `Decodifique`.

O formato reconhecido é:

```
$A5
```

## 14.6. Empilhe

A função `validatePushStatement` aceita:

- Literais numéricos.
- Variáveis introduzidas por artigos definidos.

A variável precisa possuir um tipo compatível com `byte`, `word` ou `número`.

A compatibilidade é verificada por `isPushableNumericType`.

---

# 15. Chamadas Processe

## 15.1. parseRoutineProcess

A instrução `Processe` possui tratamento próprio.

O parser reconhece dois formatos de chamada:

**Chamada externa**

A biblioteca e o nome da função devem ser strings literais.

A estrutura registra:

- `kind: "external"`
- `library`
- `functionName`

**Chamada interna**

O destino deve ser um identificador de função introduzido por artigo definido.

A estrutura registra:

- `kind: "internal"`
- `target`

## 15.2. Argumentos

O marcador `com` introduz os argumentos.

A função `splitProcessArguments` separa os argumentos pela conjunção `e`, respeitando as strings.

Os argumentos podem ser literais ou variáveis introduzidas por artigos definidos.

A implementação verifica se cada argumento é válido e conhecido.

## 15.3. Retorno

O marcador `retornando` permite declarar o tipo e o nome de uma variável que receberá o resultado.

A função `parseProcessReturnVariable` identifica o artigo indefinido, procura o tipo declarado e exige um nome para a variável.

A variável resultante é adicionada a `localVariables` da rotina.

---

# 16. Resolução de chamadas de rotinas

## 16.1. resolveRoutineCall

Essa função tenta encontrar uma rotina correspondente ao statement analisado.

Primeiro, procura correspondências com rotinas sem parâmetros.

Depois, verifica as rotinas que possuem parâmetros.

A comparação considera:

- Nome da rotina.
- Nomes alternativos.
- Qualificadores.
- Quantidade de argumentos.
- Tipos dos argumentos.

## 16.2. matchRoutineNamePrefix

Essa função verifica se o início de um trecho corresponde ao nome de uma rotina.

Ela percorre possíveis finais do nome e compara cada trecho normalizado com o nome declarado.

Isso é necessário porque os nomes das rotinas podem conter várias palavras.

## 16.3. Normalização dos nomes de rotinas

Diferentemente da normalização dos tipos, os nomes das rotinas passam por um processo adicional.

A função `normalizeRoutineName` utiliza `normalizeRoutineNameWords`.

São aplicadas substituições de palavras, equivalências verbais e expansões de contrações.

Exemplos de equivalências:

| Forma encontrada | Forma normalizada |
| ---------------- | ----------------- |
| for              | é                 |
| foi              | é                 |
| são              | é                 |
| está             | é                 |
| existir          | existe            |
| começar          | começa            |
| possuir          | possui            |
| couber           | cabe              |
| desde            | usando            |
| dada             | usando            |
| com              | usando            |

As contrações também são expandidas.

Por exemplo:

- ao → para o
- à → para a
- no → em o
- na → em a
- pelo → por o
- pela → por a

A normalização também considera o contexto da palavra `a`, especialmente quando seguida de artigos.

## 16.4. Seleção da melhor sobrecarga

Quando várias rotinas possuem nomes compatíveis, o parser calcula a distância entre os tipos dos argumentos e os tipos esperados.

A função `getRoutineArgumentTypeDistance` utiliza a distância entre tipos-base.

A chamada com a menor soma de distâncias é selecionada.

Isso permite privilegiar correspondências de tipos mais específicas.

---

# 17. Resolução dos tipos dos argumentos

## 17.1. resolveRoutineArgumentType

Essa função é central para a resolução semântica.

Ela tenta determinar o tipo de um argumento seguindo diferentes possibilidades:

1. Conversão explícita de tipo.
2. Acesso a campos de estruturas.
3. Literal.
4. Variável local.
5. Parâmetro da rotina.
6. Variável global.

### Conversões explícitas

A função `parseTypeCast` reconhece construções que utilizam:

```
tal como
tal qual
```

A conversão exige um artigo indefinido antes do nome do tipo de destino.

### Literais

Os literais são interpretados por `parseGlobalVariableLiteral`.

O tipo resultante é obtido por `inferGlobalVariableTypeName`.

### Variáveis

A função reconhece variáveis introduzidas por artigos definidos e também os demonstrativos:

- este
- esta
- estes
- estas

A resolução procura primeiro variáveis locais e parâmetros.

Se não encontrar, consulta a tabela de variáveis globais.

## 17.2. Escopo das variáveis

A função `findRoutineVariable` procura primeiro nas variáveis locais, em ordem inversa, e depois nos parâmetros.

Isso permite que variáveis locais mais recentes tenham prioridade na resolução.

---

# 18. Acessos a campos de estruturas

## 18.1. resolveStructureFieldAccess

A linguagem permite acessar campos de estruturas utilizando construções com `deste`, `desta`, `destes` e `destas`.

A função `findStructureAccessMarkers` identifica esses marcadores.

O acesso é dividido em segmentos.

Cada segmento é interpretado em relação ao tipo do segmento anterior.

O resolvedor acompanha a evolução do tipo durante o percurso.

## 18.2. Campos herdados

A função `findStructureField` procura o campo na estrutura informada e, caso não o encontre, continua pesquisando nos tipos-base.

Assim, campos herdados também podem ser resolvidos.

## 18.3. Campos calculados

Quando um campo não existe diretamente na estrutura, o parser procura uma rotina que represente um campo calculado.

A função responsável é `findComputedFieldRoutine`.

Ela considera a compatibilidade entre a estrutura proprietária e o tipo da estrutura declarada no cabeçalho da rotina.

## 18.4. Operadores de tipo

A função `resolveTypeOperator` trata três operadores:

| Operador      | Significado                            |
| ------------- | -------------------------------------- |
| magnitude     | Produz o tipo `número`                 |
| endereçamento | Procura um tipo de ponteiro compatível |
| conteúdo      | Obtém o tipo apontado                  |

## 18.5. Campos especiais de listas

A função `resolveListSpecialField` reconhece campos especiais quando o tipo deriva de `lista`.

São reconhecidos:

- primeiro
- primeira
- último
- última
- próximo
- próxima
- anterior
- precedente

Essas construções permitem identificar o tipo dos elementos da lista.

---

# 19. Campos calculados

O parser também permite declarar campos calculados por meio de cabeçalhos especiais.

A função `parseComputedFieldHeader` identifica uma construção iniciada por `Atribua`.

O cabeçalho contém:

- Nome do campo calculado.
- Tipo da estrutura proprietária.
- Marcador `para`.
- Declaração do parâmetro de resultado.

A função `resolveComputedFields` realiza as validações posteriores.

Ela verifica:

1. Se a estrutura proprietária existe.
2. Se o tipo realmente deriva de `estrutura`.
3. Se a rotina possui exatamente um parâmetro de resultado.

Quando válido, o tipo desse parâmetro é armazenado em `valueType`.

---

# 20. Validação e diagnósticos

O parser acumula os diagnósticos em um único array.

Cada diagnóstico possui, conforme o caso:

- Mensagem.
- Intervalo no documento.
- Severidade opcional.

As validações incluem:

### Tipos

- Tipo-base desconhecido.
- Tipo de variável global desconhecido.
- Tipo de campo desconhecido.
- Alias sem tipo correspondente.

### Identificadores

- Palavras reservadas utilizadas em nomes.
- Pontuação proibida em identificadores.

Os caracteres `:`, `;` e `.` não podem aparecer nos identificadores de tipos e variáveis globais.

### Campos

- Campos duplicados.
- Estruturas inválidas para campos calculados.
- Campos calculados sem o parâmetro de resultado necessário.

### Rotinas

- Nome ausente.
- Parâmetros inválidos.
- Tipo de parâmetro desconhecido.
- Tipo de retorno ausente.
- Cabeçalhos alternativos equivalentes.
- Rotinas sem statements.
- Chamadas não resolvidas.

### Statements

- Expressões incompletas.
- Uso incorreto de `Diga`.
- Uso incorreto de `Retorne`.
- Argumentos indevidos em instruções de repetição.
- Chamadas `Processe` inválidas.
- Condicionais aninhados.

Os diagnósticos são produzidos durante as diferentes etapas da análise, sempre que possível com o intervalo específico do problema.

---

# 21. Tabelas de símbolos

O parser constrói três tabelas principais.

| Classe                      | Responsabilidade             |
| --------------------------- | ---------------------------- |
| `TypeSymbolTable`           | Tipos conhecidos             |
| `GlobalVariableSymbolTable` | Variáveis globais            |
| `RoutineSymbolTable`        | Rotinas e nomes alternativos |

### RoutineSymbolTable

Essa classe organiza as rotinas em um mapa.

Cada nome principal e alternativo é normalizado antes de ser armazenado.

O método `lookup` também considera qualificadores parentéticos.

O método `entries` retorna as rotinas únicas, evitando duplicações causadas pelos diferentes nomes de uma mesma rotina.

### Consultas

As três tabelas disponibilizam o método `lookup`.

Isso permite que as diferentes etapas do parser consultem os símbolos sem precisar percorrer repetidamente todas as declarações.

---

# 22. Referências semânticas

Além das tabelas de símbolos, o parser disponibiliza funções para localizar referências no documento.

Essas funções são especialmente importantes para funcionalidades de um servidor de linguagem.

## 22.1. getParsedReferences

Essa função percorre o modelo semântico e produz uma coleção de referências.

São identificadas quatro categorias:

- `type`
- `variable`
- `field`
- `routine`

Cada referência possui:

- Tipo da referência.
- Nome normalizado.
- Intervalo no documento.
- Informações adicionais, como escopo, contêiner e se representa uma declaração.

A função coleta referências de:

- Declarações de tipos.
- Tipos-base.
- Tipos apontados.
- Campos de estruturas.
- Variáveis globais.
- Rotinas.
- Parâmetros.
- Variáveis locais.
- Campos calculados.
- Atribuições.
- Saídas.
- Chamadas de rotinas.
- Chamadas `Processe`.

## 22.2. findParsedReferenceAtOffset

Recebe um deslocamento no documento e procura a referência correspondente.

Quando existem referências sobrepostas, aplica uma prioridade:

1. Variável.
2. Campo.
3. Rotina.
4. Tipo.

Dentro de cada categoria, também prioriza declarações.

## 22.3. findTypeReferenceAtOffset

Localiza referências a tipos em:

- Declarações.
- Tipos-base.
- Tipos apontados.
- Campos.
- Variáveis globais.
- Parâmetros.
- Variáveis locais.
- Retornos de chamadas internas.

## 22.4. findTypeDefinitionReferenceAtOffset

Identifica o tipo associado a uma variável, campo ou referência.

A pesquisa considera:

- Variáveis globais.
- Campos resolvidos.
- Variáveis utilizadas em atribuições.
- Variáveis utilizadas em chamadas.
- Variáveis utilizadas em `Processe`.
- Referências declarativas a tipos.

## 22.5. findRoutineDeclarationAtOffset

Localiza a declaração de uma rotina a partir de uma chamada.

A pesquisa considera também os intervalos dos qualificadores.

## 22.6. findRoutineFieldAtOffset

Localiza campos de estruturas utilizados em:

- Atribuições.
- Chamadas internas.
- Chamadas `Processe`.

Essas funções permitem que outras partes do servidor de linguagem consultem o modelo semântico sem precisar repetir o processo de análise.

---

# 23. Funções auxiliares

O parser possui diversas funções pequenas que centralizam operações comuns.

| Função                               | Responsabilidade                                             |
| ------------------------------------ | ------------------------------------------------------------ |
| `readWord`                           | Lê uma palavra a partir de uma posição                       |
| `readInteger`                        | Lê um inteiro decimal                                        |
| `isWordCharacter`                    | Verifica se um caractere pertence a uma palavra              |
| `trimRange`                          | Remove espaços das extremidades de um intervalo              |
| `skipWhitespace`                     | Avança sobre espaços em branco                               |
| `findWord`                           | Procura uma palavra delimitada                               |
| `findAnyWord`                        | Procura qualquer palavra de um conjunto                      |
| `findWordOutsideStrings`             | Procura uma palavra ignorando strings                        |
| `findQuotedRanges`                   | Identifica os intervalos de strings                          |
| `createTypeReference`                | Cria uma referência textual com nome normalizado e intervalo |
| `maskWordInRange`                    | Substitui logicamente uma palavra por espaços                |
| `maskParenthesizedGroups`            | Mascara grupos entre parênteses                              |
| `findTrailingParentheticalQualifier` | Identifica qualificadores parentéticos finais                |

Essas funções são importantes porque evitam que cada analisador precise implementar novamente as mesmas operações de pesquisa e delimitação.

---

# 24. Estrutura do resultado final

Ao concluir a análise, `parseTypeDeclarations` retorna um objeto com seis propriedades principais:

```
{
    declarations,
    globalVariables,
    routines,
    symbols,
    globalVariableSymbols,
    routineSymbols,
    diagnostics
}
```

### declarations

Array contendo as declarações de tipos encontradas.

Cada elemento contém informações sobre nome, tipo-base, ponteiro, campos, fator escalar e intervalo.

### globalVariables

Array contendo as declarações de variáveis globais.

Cada elemento pode conter tipo explícito ou tipo inferido, inicializador e campos.

### routines

Array contendo as rotinas e suas informações semânticas.

Inclui parâmetros, chamadas, atribuições, saídas, variáveis locais, condicionais e demais instruções reconhecidas.

### symbols

Instância de `TypeSymbolTable`.

### globalVariableSymbols

Instância de `GlobalVariableSymbolTable`.

### routineSymbols

Instância de `RoutineSymbolTable`.

### diagnostics

Array com os problemas encontrados durante a análise.

---

# 25. Características arquiteturais importantes

A implementação apresenta algumas características que ajudam a compreender sua arquitetura.

## 25.1. Análise diretamente sobre o texto-fonte

O parser não realiza uma tokenização convencional que produza previamente um array de tokens.

As funções leem diretamente o texto e identificam palavras, marcadores e intervalos conforme a necessidade.

Isso permite que diferentes analisadores reutilizem o mesmo documento sem depender de uma estrutura intermediária de tokens.

## 25.2. Preservação dos intervalos

Praticamente todas as estruturas relevantes possuem intervalos com `start` e `end`.

Esses intervalos são expressos em posições de caracteres no documento.

A preservação dos offsets é fundamental para:

- Diagnósticos.
- Navegação entre declarações e referências.
- Identificação do elemento sob o cursor.
- Recursos de edição e análise do VS Code.

## 25.3. Separação entre reconhecimento e resolução

O parser frequentemente realiza duas operações distintas.

Primeiro reconhece a construção sintática.

Depois resolve seus elementos utilizando as tabelas de símbolos.

Por exemplo:

1. `parseFields` identifica os campos.
2. `resolveFields` identifica os tipos correspondentes.

Outro exemplo:

1. `parseRoutineDeclarations` identifica os cabeçalhos.
2. `resolveRoutineParameters` verifica os tipos dos parâmetros.

Essa separação permite que as declarações sejam inicialmente coletadas antes de suas dependências serem resolvidas.

## 25.4. Resolução progressiva

O modelo semântico é construído progressivamente.

As primeiras etapas identificam declarações e produzem estruturas iniciais.

As etapas posteriores enriquecem essas estruturas com:

- Tipos resolvidos.
- Referências.
- Destinos de chamadas.
- Informações sobre campos.
- Compatibilidade entre argumentos.
- Variáveis locais.

Isso evita que cada função precise conhecer antecipadamente todas as declarações do documento.

## 25.5. Normalização linguística

Uma característica particularmente importante é a normalização dos nomes das rotinas.

Como a linguagem permite construções em português natural, o parser não depende exclusivamente da igualdade textual dos nomes.

Ele utiliza equivalências verbais, contrações e substituições para identificar diferentes formas de expressar uma mesma rotina.

Essa normalização é diferente daquela aplicada aos nomes de tipos e variáveis.

## 25.6. Recuperação e diagnósticos

Nem toda construção inválida interrompe a análise.

Diversas funções adicionam diagnósticos e permitem que o parser continue examinando outras declarações e statements.

Isso é importante para o uso em um servidor de linguagem, pois permite apresentar vários problemas simultaneamente ao programador.

---

# 26. Resumo do funcionamento

O parser pode ser entendido como um conjunto de analisadores especializados coordenados por uma função principal.

O fluxo é:

1. O texto é preparado com a remoção lógica dos comentários.
2. Os cabeçalhos das rotinas são identificados.
3. As declarações de tipos e variáveis globais são localizadas pelos pontos terminadores.
4. As estruturas declarativas são construídas.
5. As tabelas de símbolos são criadas.
6. Os tipos-base e campos são resolvidos.
7. Os parâmetros e campos calculados são validados.
8. Os corpos das rotinas são delimitados.
9. Os statements são classificados e analisados.
10. As chamadas e referências são resolvidas.
11. Os diagnósticos são reunidos.
12. O modelo semântico completo é retornado.

O resultado não é simplesmente uma coleção de declarações encontradas no texto. É um modelo semântico que relaciona tipos, variáveis, campos, parâmetros, rotinas, chamadas e referências, permitindo que outras ferramentas utilizem essas informações sem precisar reanalisar o código-fonte.

Esse modelo constitui a base para funcionalidades como diagnóstico, navegação, localização de definições, identificação de referências e resolução de tipos no servidor de linguagem do Português Puro.

**Observação sobre a documentação:** o arquivo fornecido contém a implementação compilada/minificada do parser. A explicação descreve o comportamento identificável nesse código; não pressupõe funcionalidades que não estejam demonstradas nele.&#x20;
