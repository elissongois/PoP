# Guia de referência: gramáticas TextMate e escopos no VS Code

## Objetivo

Este documento descreve, de forma didática e técnica, como funcionam as gramáticas TextMate usadas pelo VS Code para realce de sintaxe. Ele também apresenta exemplos aplicados à linguagem `Português Puro`, incluindo regras para comentários, palavras-chave, strings, blocos estruturais e nomes de rotina.

O foco não é apenas a sintaxe formal de um arquivo JSON, mas a lógica real de como o editor interpreta cada regra, define escopos, empilha contextos e produz destaque visual.

## 1. O que é uma gramática TextMate?

Uma gramática TextMate é um arquivo JSON que informa ao editor:

- quais trechos do texto devem receber destaque;
- quais partes correspondem a comentários, strings, palavras-chave, operadores, números, nomes de funções etc.;
- como um bloco começa e termina;
- como o texto deve ser interpretado em contexto.

Em termos práticos, o VS Code usa esse mecanismo para colorir código em editores de linguagem. A gramática não “compila” o código; ela apenas reconhece padrões textuais e atribui escopos. Esses escopos são depois consumidos por um tema para definir as cores.

Exemplo mínimo de gramática:

```json
{
  "scopeName": "source.pop",
  "patterns": [
    {
      "name": "comment.line.pop",
      "match": "\\\\.*$"
    }
  ]
}
```

Essa regra diz: qualquer trecho que corresponda a uma linha começando com `\` deve ser tratado como comentário.

## 2. Estrutura raiz de uma gramática

A estrutura de alto nível de um arquivo de gramática é geralmente:

```json
{
  "name": "Português Puro",
  "scopeName": "source.pop",
  "fileTypes": ["pop"],
  "patterns": [],
  "repository": {},
  "injections": {}
}
```

Os elementos mais importantes são:

- `scopeName`: nome do escopo principal da linguagem, por exemplo `source.pop`.
- `patterns`: regras globais do documento.
- `repository`: regras reutilizáveis, nomeadas e incluídas por `include`.
- `injections`: regras aplicadas apenas em certos contextos de escopo.

Nem toda gramática usa todos os campos, mas este conjunto é o mais comum e o mais importante para entender a arquitetura do TextMate.

## 3. Diferença entre `patterns`, `repository` e `injections`

### 3.1 `patterns`

`patterns` é a lista principal de regras do documento. É o ponto de entrada da gramática. O editor percorre essas regras em ordem e tenta aplicá-las ao texto.

Exemplo:

```json
{
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#palavras-chave" },
    { "include": "#strings" }
  ]
}
```

Esse bloco indica: primeiro procure comentários, depois palavras-chave e depois strings.

`patterns` pode conter:

- `include`
- `match`
- `begin`/`end`
- `while`
- `patterns` aninhadas
- regras com `name`, `captures`, `contentName` etc.

### 3.2 `repository`

`repository` armazena regras nomeadas. As regras podem ser reutilizadas em vários pontos da gramática por meio de `include`.

Exemplo:

```json
{
  "repository": {
    "comentarios": {
      "patterns": [
        {
          "name": "comment.line.pop",
          "match": "\\\\.*$"
        }
      ]
    },
    "palavras-chave": {
      "name": "keyword.control.pop",
      "match": "\\b(Se|Então|Senão|Enquanto|Para|Retorne)\\b"
    }
  }
}
```

A partir daí, a regra principal pode fazer:

```json
{
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#palavras-chave" }
  ]
}
```

A grande vantagem é modularidade: você não precisa repetir a mesma regra várias vezes.

### 3.3 `injections`

`injections` é usado para aplicar regras em contextos específicos, normalmente quando o editor já sabe em qual escopo o texto está.

Exemplo:

```json
{
  "injections": {
    "L:source.pop": {
      "patterns": [
        {
          "match": "\\b(Escreva|Leia|Construa)\\b",
          "name": "support.function.pop"
        }
      ]
    }
  }
}
```

A expressão `L:source.pop` significa: “aplicar estas regras quando o contexto do editor for a linguagem `source.pop`”.

`injections` é útil quando a gramática precisa reforçar algum padrão específico de contexto sem reescrever a gramática base inteira. Em geral, é mais específico do que as regras globais em `patterns`.

## 4. Como funciona `include`

`include` é o mecanismo de reutilização e composição dentro da gramática. Ele não é um operador de herança tradicional; ele diz ao parser: “agora resolva esta regra em outro lugar”.

### 4.1 `include` em `patterns`

Quando um objeto no `patterns` contém `include`, o analisador resolve o valor e entra em outra regra ou outra gramática.

Exemplos comuns:

```json
{ "include": "#comentarios" }
```

Procura uma regra chamada `comentarios` dentro de `repository`.

```json
{ "include": "$self" }
```

Inclui a própria gramática atual.

```json
{ "include": "$base" }
```

Inclui a gramática base do editor.

```json
{ "include": "source.js" }
```

Inclui uma gramática de outra linguagem, por exemplo JavaScript.

### 4.2 `include` em `repository`

Dentro de uma regra em `repository`, você pode reutilizar outras regras do mesmo repositório:

```json
{
  "repository": {
    "bloco-principal": {
      "patterns": [
        { "include": "#comentarios" },
        { "include": "#expressao" }
      ]
    }
  }
}
```

Assim, você pode compor blocos maiores a partir de regras menores e independentes.

### 4.3 `include` em blocos `begin`/`end`

Dentro de um bloco de região, o `patterns` aninhado pode incluir qualquer sub-regra relevante.

```json
{
  "begin": "\"",
  "end": "\"",
  "patterns": [
    { "include": "#escapes" },
    { "include": "#variaveis" }
  ]
}
```

Isso significa: enquanto o texto estiver dentro de uma string, aplique regras de escape e variáveis.

### 4.4 Regras de resolução do `include`

A resolução costuma seguir esta lógica:

- `#nome`: procura em `repository.nome`;
- `$self`: usa a gramática atual;
- `$base`: usa a gramática base;
- `source.lang`: usa outra gramática carregada pelo editor;
- nomes literais de gramática também podem ser usados quando a linguagem é conhecida.

Em outras palavras, `include` é o mecanismo de “delegação de análise” entre regras e gramáticas.

## 5. Como funciona cada item dentro de `patterns`

Um item dentro de `patterns` é um objeto de regra. Cada regra pode ter múltiplas propriedades, e estas propriedades determinam como o padrão será matcheado e como o escopo será atribuído.

### 5.1 `name`

`name` define o escopo do trecho que foi correspondido.

```json
{
  "name": "keyword.control.pop",
  "match": "\\b(Se|Então|Senão|Enquanto|Para)\\b"
}
```

Esse token recebe o escopo:

```text
keyword.control.pop
```

A estrutura de escopo usa hierarquia de nomes separados por ponto. Por exemplo:

- `keyword` → categoria geral
- `control` → subcategoria
- `pop` → linguagem/especificidade

Esses nomes depois são usados por temas para atribuir cor.

### 5.2 `match`

`match` é usado para padrões simples, normalmente em uma linha ou em um token isolado.

```json
{
  "name": "keyword.control.pop",
  "match": "\\b(Se|Então|Senão|Enquanto|Para)\\b"
}
```

`match` é bastante útil para:

- palavras-chave;
- operadores;
- números;
- identificadores especiais;
- sintaxe curta e não aninhada.

### 5.3 `begin` e `end`

`begin` e `end` definem blocos de texto que começam e terminam com padrões específicos.

```json
{
  "name": "string.quoted.double.pop",
  "begin": "\"",
  "end": "\"",
  "patterns": [
    {
      "name": "constant.character.escape.pop",
      "match": "\\\\."
    }
  ]
}
```

Aqui:

- `begin` = abre a string com `"`;
- `end` = fecha a string com `"`;
- o conteúdo interno pode ter regras próprias.

Em linguagens textuais, `begin` e `end` são essenciais para:

- strings;
- blocos de comentário;
- estruturas condicionais;
- blocos de código delimitados por palavras-chave.

Exemplo mais próximo de `Português Puro`:

```json
{
  "name": "meta.block.condicional.pop",
  "begin": "\\b(Se)\\b",
  "end": "\\b(Fim)\\b",
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#expressoes" }
  ]
}
```

Esse padrão reconhece a estrutura:

```text
Se ...
...
Fim
```

### 5.4 `beginCaptures` e `endCaptures`

Essas propriedades permitem atribuir escopos aos grupos de captura dentro do regex usado em `begin` e `end`.

Exemplo:

```json
{
  "begin": "(\\bSe\\b)(\\s+)([A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*)",
  "beginCaptures": {
    "1": { "name": "keyword.control.pop" },
    "2": { "name": "text.pop" },
    "3": { "name": "entity.name.function.pop" }
  }
}
```

Aqui:

- grupo 1 = palavra-chave `Se`
- grupo 2 = espaço
- grupo 3 = nome associado ao bloco ou rotina

O mesmo princípio vale para `endCaptures`:

```json
{
  "end": "(\\bFim\\b)",
  "endCaptures": {
    "1": { "name": "keyword.control.pop" }
  }
}
```

### 5.5 `captures`

`captures` é usado junto com `match` para atribuir escopo a cada grupo de captura da regex.

```json
{
  "match": "(\\bSe\\b|\\bSenão\\b|\\bEntão\\b)",
  "captures": {
    "1": { "name": "keyword.control.pop" }
  }
}
```

Isso significa: o primeiro grupo da regex recebe o escopo `keyword.control.pop`.

Quando houver múltiplos grupos, cada índice pode receber um escopo específico.

### 5.6 `contentName`

`contentName` indica qual escopo deve ser aplicado ao conteúdo interno de um bloco, independentemente dos delimitadores do início e do fim.

Exemplo:

```json
{
  "begin": "\\[",
  "end": "\\]",
  "contentName": "string.unquoted.pop"
}
```

Neste caso, o conteúdo dentro dos colchetes recebe o escopo definido em `contentName`, enquanto os delimitadores em si podem ficar com outros escopos ou sem destaque especial.

### 5.7 `applyEndPatternLast`

Essa propriedade define que, quando a regra com `begin`/`end` encontra um padrão de fim, o parser deve processar a última regra interna antes de encerrar o bloco.

Exemplo:

```json
{
  "begin": "\"",
  "end": "\"",
  "applyEndPatternLast": true,
  "patterns": [
    { "include": "#escapes" }
  ]
}
```

Isso é útil quando há regras internas que podem competir com o fechamento do bloco. Sem essa opção, o parser pode encerrar a região antes de aplicar a última regra relevante.

### 5.8 `patterns` aninhadas

Como visto antes, regras com `begin`/`end` frequentemente têm uma lista `patterns` de sub-regras. Isso permite que, dentro do bloco, o editor continue buscando subpadrões.

```json
{
  "begin": "\\b(Se)\\b",
  "end": "\\b(Fim)\\b",
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#variaveis" },
    { "include": "#numeros" }
  ]
}
```

O bloco é um contexto ativo, e os subpadrões observam apenas o texto contido nele.

### 5.9 `disabled`

`disabled` desativa uma regra sem removê-la da gramática.

```json
{
  "name": "keyword.control.pop",
  "match": "\\b(Se|Então)\\b",
  "disabled": 1
}
```

Isso é útil para facilitar teste e depuração da gramática durante o desenvolvimento.

### 5.10 `while` e `whileCaptures`

`while` é usado quando o parser deve manter um padrão ativo enquanto uma condição de continuidade continuar válida. É mais avançado e menos comum em gramáticas simples.

Exemplo conceitual:

```json
{
  "begin": "\\(",
  "end": "\\)",
  "while": "[A-Za-z0-9_\\s]*",
  "whileCaptures": {
    "0": { "name": "meta.parens.pop" }
  }
}
```

A lógica de `while` é importante quando um bloco precisa permanecer em análise enquanto o texto interno satisfaz uma expressão repetitiva.

## 6. Exemplo completo e específico para `Português Puro`

Abaixo está um exemplo mais próximo de uma gramática real para o `.pop`.

```json
{
  "name": "Português Puro",
  "scopeName": "source.pop",
  "fileTypes": ["pop"],
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#palavras-chaves" },
    { "include": "#strings" },
    { "include": "#rotinas" },
    { "include": "#numeros" }
  ],
  "repository": {
    "comentarios": {
      "patterns": [
        {
          "name": "comment.line.pop",
          "match": "\\\\.*$"
        },
        {
          "name": "comment.block.pop",
          "begin": "\\[",
          "end": "\\]",
          "patterns": [{ "include": "#comentarios" }]
        }
      ]
    },
    "palavras-chaves": {
      "match": "\\b(Se|Então|Senão|Enquanto|Para|Faça|Retorne|Verdade|Falso|Inicio|Fim)\\b",
      "name": "keyword.control.pop"
    },
    "strings": {
      "name": "string.quoted.double.pop",
      "begin": "\"",
      "end": "\"",
      "patterns": [
        {
          "name": "constant.character.escape.pop",
          "match": "\\\\."
        }
      ]
    },
    "rotinas": {
      "match": "\\b([A-ZÁÉÍÓÚ][A-Za-zÁÉÍÓÚáéíóú0-9_]*)\\b",
      "captures": {
        "1": { "name": "entity.name.function.pop" }
      }
    },
    "numeros": {
      "match": "\\b(\\d+(?:\\.\\d+)?)\\b",
      "name": "constant.numeric.pop"
    }
  }
}
```

Esse exemplo é suficiente para mostrar os princípios da linguagem:

- comentários com `\` e blocos com `[...]`;
- palavras-chave com destaque específico;
- strings delimitadas por aspas;
- nomes de rotina reconhecidos como entidades;
- números como constantes numéricas.

## 7. Escopo, temas e realce visual

A gramática produz escopos, e o tema do VS Code os transforma em cor.

Por exemplo:

```text
keyword.control.pop
string.quoted.double.pop
comment.line.pop
entity.name.function.pop
```

Esses nomes são interpretados pelos temas assim:

- `keyword.control.pop` → palavra-chave de controle
- `string.quoted.double.pop` → string em aspas duplas
- `comment.line.pop` → comentário de linha
- `entity.name.function.pop` → nome de rotina ou função

Um tema pode decidir que `keyword.control.pop` fique em azul, `comment.line.pop` em cinza, `string.quoted.double.pop` em verde, etc.

Esse mecanismo separa a lógica de reconhecimento (gramática) da lógica de apresentação (tema).

## 8. Boas práticas para gramáticas TextMate

Ao construir a gramática de uma linguagem como o `Português Puro`, vale seguir algumas recomendações:

1. Dividir regras por responsabilidade.
   - comentários
   - strings
   - palavras-chave
   - números
   - nomes de rotina
   - blocos de estrutura

2. Reaproveitar regras com `repository`.
   - Evita duplicação e melhora manutenção.

3. Usar `match` para padrões simples.
   - É a opção mais direta e legível.

4. Usar `begin`/`end` para blocos multilinha.
   - Ideal para strings e estruturas aninhadas.

5. Usar `captures` e `beginCaptures`/`endCaptures` para granularidade.
   - Isso permite pintar diferentes partes de uma mesma regra.

6. Testar em cenários reais da linguagem.
   - A gramática precisa validar casos de utilização reais e não apenas casos artificiais.

7. Evitar regras excessivamente gerais.
   - Uma regra que captura muita coisa pode mascarar outros padrões e tornar o realce pouco confiável.

## 9. Documentação técnica e referências atuais

A especificação e a prática de gramáticas TextMate são documentadas em fontes importantes:

- Manual oficial do TextMate: https://macromates.com/manual/en/language_grammars
- Introdução ao conceito de scopes: https://macromates.com/blog/2005/introduction-to-scopes/
- Documento histórico de referência sobre bundles TextMate: https://www.apeth.com/nonblog/stories/textmatebundle.html
- Repositório do VS Code TextMate: https://github.com/microsoft/vscode-textmate/tree/main

Essas referências são úteis para confirmar a interpretação real de `patterns`, `repository`, `include`, `captures`, `begin`/`end`, `scopeName` e a lógica de empilhamento de escopos.

## 10. Conclusão

Uma gramática TextMate do VS Code funciona como um sistema de reconhecimento textual baseado em regras e escopos. A estrutura mais importante é:

- `patterns`: regras principais;
- `repository`: regras reutilizáveis;
- `injections`: regras condicionais por contexto;
- `include`: delegação para outra regra ou gramática;
- `match`: padrão simples de regex;
- `begin`/`end`: blocos estruturados;
- `captures`/`beginCaptures`/`endCaptures`: granularidade de escopo;
- `name`: nome de escopo aplicado ao trecho;
- `contentName`: escopo aplicado ao conteúdo do bloco;
- `disabled`: desligamento temporário da regra;
- `while`: continuação de contexto enquanto uma condição persistir.

No caso do `Português Puro`, esse modelo permite criar uma gramática útil e legível para realce do editor, cobrindo comentários, palavras-chave, strings, números e nomes de rotina, sem exigir uma implementação completa de parser.

## 11. Referência resumida

Resumo prático da arquitetura:

```json
{
  "scopeName": "source.pop",
  "patterns": [
    { "include": "#comentarios" },
    { "include": "#palavras-chaves" }
  ],
  "repository": {
    "comentarios": {
      "patterns": [
        {
          "name": "comment.line.pop",
          "match": "\\\\.*$"
        }
      ]
    }
  },
  "injections": {
    "L:source.pop": {
      "patterns": [{ "match": "\\b(Se)\\b", "name": "keyword.control.pop" }]
    }
  }
}
```

Esse é o núcleo mental para entender como gramáticas TextMate realmente funcionam em um editor moderno como o VS Code.
