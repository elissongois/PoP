# Definição de Tipos - Português Puro

## Início

* A instrução se inicia com um artigo indefinido.

## Obrigatório

* **Nome do tipo**: Identificador que segue o artigo indefinido.
* **Palavra-chave `é` ou `são`**: Conecta o nome à definição. Delimita o fim do nome do tipo.
* **Tipo de definição**: Pode ser:
  * `tipo derivado` Outro tipo já definido (tipo base)
  * `uma estrutura` - para tipos compostos
  * `uma lista` - para listas duplamente encadeadas
* **Fim**: Ponto final.

## Artigo indefinido

* Pode ser `um`, `uma`, `uns` ou `umas`. Atualmente, pronomes demonstrativos indeterminados [abrangentes] são considerados artigos indefinidos. Veja a seção [Pronomes demonstrativos](#pronomes-demonstrativos).

## Nome do tipo

* **Nome do tipo**: Identificador que segue o artigo indefinido.
* **Caracteres**: Consulte o arquivo [Símbolos.md](Símbolos.md) para a lista completa e detalhada de todos os caracteres.
  * **Caracteres reservados**: Não podem ser usados em nomes de tipos. Exemplos: `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, `'`
  * **Caracteres limitados**: Têm função sintática quando isolados, mas podem ser aglutinados com outros caracteres. Exemplos:
    * `A`, `E`, `O`, `a`, `e`, `o` (vogais que podem ser artigos ou conjunções quando isoladas)
    * `À`, `É`, `é`, `à` (vogais acentuadas com função sintática)
  * **Caracteres permitidos**: Podem ser usados isolados ou aglutinados em qualquer posição. Exemplos comuns:
    * `#` (cardinal/jogo da velha) - ex: `bytes#`
    * `&` (e comercial) - ex: `ponto&vírgula`
    * `_` (underscore/sublinhado) - ex: `In_Addr`, `s_byte1`
    * `@` (arroba)
    * Letras (B-Z, b-z exceto vogais limitadas) com ou sem acentos
  * **Caracteres numéricos**: Permitidos em qualquer posição, desde que estejam entre outros caracteres permitidos ou limitados. Exemplos:
    * Espaço (para nomes compostos) - ex: `data hora`
    * `/` (barra) - ex: `data/hora`
    * `-` (hífen/traço) - ex: `big-endian`, `x-twips`
    * Números `0-9` - **podem ser o primeiro caractere**. Em campos, podem ser o primeiro caractere, mas não possuem função de identificador
  * **Caracteres especiais**: Permitidos em qualquer posição, mas não podem ser precedidos ou sucedidos por outros caracteres especiais. Exemplos: `<`, `=`, `>`, `^`, `|`, `€`, `×`, `÷`
  * **Caracteres não permitidos**: Só podem estar presentes em strings literais ou comentários. Exemplos: `!`, `*`, `?`, `{`, `}`, `ª`, `º`
* **Primeiro caractere**: Qualquer letra (com ou sem acento) ou símbolo permitido.
* **Case sensitivity**: Insensitive (exceto em strings e comentários).
* **Nomes entre aspas simples**: Usados para delimitar palavras reservadas - ex: `'A' maiúscula`, `'número um'`.

## Hierarquia de Tipos

### Tipos Primitivos

Português Puro possui **apenas dois tipos primitivos**, dos quais todos os demais tipos derivam:

* **`byte`** - Tipo primitivo escalar (8 bits)
* **`estrutura`** - Tipo primitivo composto

**Importante:** Todos os tipos em Português Puro são derivados de um destes dois tipos primitivos.

---

### Tipo Base

* É o tipo utilizado como **referência** para a definição de um tipo derivado.
* Pode ser:
  * Um **tipo primitivo** (`byte` ou `estrutura`)
  * Um **tipo derivado** já definido anteriormente

---

### Tipo Derivado

* Definido a partir de um **tipo base** (primitivo ou derivado).
* **Sintaxe**: `Um <nome_tipo_derivado> é <tipo_base>.`

---

### Derivação a partir de Tipos Primitivos

#### Derivação de `byte`

```pop
\\ Tipo derivado diretamente do tipo primitivo 'byte'
Um caractere é um byte.

\\ Hierarquia: caractere → byte (primitivo)
```

#### Derivação de `estrutura`

```pop
\\ Tipo derivado diretamente do tipo primitivo 'estrutura'
Um par de números é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

\\ Hierarquia: par de números → estrutura (primitivo)
```

---

### Derivação a partir de Tipos Derivados

É possível criar **tipos derivados de tipos derivados**, formando uma cadeia de herança:

#### Exemplo 1: Derivação de `byte`

```pop
\\ Tipo primitivo
\\ (byte é primitivo)

\\ Primeiro nível de derivação
Um caractere é um byte.

\\ Segundo nível de derivação
Uma letra é um caractere.

\\ Hierarquia: letra → caractere → byte (primitivo)
```

#### Exemplo 2: Derivação de `estrutura`

```pop
\\ Tipo primitivo
\\ (estrutura é primitivo)

\\ Primeiro nível de derivação
Um par de números é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

\\ Segundo nível de derivação (herda campos do tipo base)
Uma localização é um par de números com
  Uma coordenada denominada coordenada X [left] e
  Uma coordenada denominada coordenada Y. [top]

\\ Hierarquia: localização → par de números → estrutura (primitivo)
```

**Observação:** No segundo nível, `localização` **herda** os campos de `par de números` e pode adicionar novos campos ou redefinir os existentes.

---

### Análise de Hierarquia Completa

#### Exemplo: Tipo `localização`

```pop
\\ Definições
Um par de números é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

Uma localização é um par de números com
  Uma coordenada denominada coordenada X [left] e
  Uma coordenada denominada coordenada Y. [top]
```

**Hierarquia:**

* **Tipo derivado**: `localização`
* **Tipo base**: `par de números`
* **Tipo primitivo**: `estrutura`

**Campos herdados:**

* `localização` herda a estrutura de `par de números`
* Os campos `número X` e `número Y` são redefinidos como `coordenada X` e `coordenada Y`

---

### Regras de Derivação

1. **Tipos primitivos** não podem ser redefinidos
2. **Tipos derivados** podem ser usados como base para novos tipos
3. **Herança de estruturas**: Tipos derivados de estruturas herdam os campos do tipo base
4. **Redefinição de campos**: Campos podem ser redefinidos com novos tipos ou nomes
5. **Cadeia de derivação**: Não há limite para o número de níveis de derivação
6. **Compatibilidade**: Tipos derivados são compatíveis com seu tipo base

---

### Exemplos Adicionais

#### Cadeia de Derivação Simples

```pop
\\ Nível 0: Tipo primitivo (byte)
\\ Nível 1: Derivação direta
Um caractere é um byte.

\\ Nível 2: Derivação de caractere
Uma letra é um caractere.

\\ Nível 3: Derivação de letra
Uma vogal é uma letra.

\\ Hierarquia: vogal → letra → caractere → byte (primitivo)
```

#### Cadeia de Derivação com Estruturas

```pop
\\ Nível 0: Tipo primitivo (estrutura)

\\ Nível 1: Estrutura básica
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.

\\ Nível 2: Adiciona campo
Um ponto 3D é um ponto com
  Um número denominado X,
  Um número denominado Y e
  Um número denominado Z.

\\ Nível 3: Adiciona cor
Um vértice é um ponto 3D com
  Um número denominado X,
  Um número denominado Y,
  Um número denominado Z e
  Uma cor denominada cor.

\\ Hierarquia: vértice → ponto 3D → ponto → estrutura (primitivo)
```

## Estruturas

* Definidas com `uma estrutura com` seguido dos campos.
* **Campos**:
  * Cada campo é declarado com artigo indefinido + tipo + palavra `denominado` + nome do campo.
  * Campos são separados por `e`, `ou` ou `,` (vírgula).
  * O último campo termina com `.` (ponto final).
* **Campos sobrepostos**: Usar `sob` para indicar que um campo compartilha a mesma posição de memória de outro.
  * Exemplo: `Uma word de ordem inferior sob o primeiro byte`
* **Estruturas delimitadas por tamanho**: Podem ser definidas apenas com o tamanho em bytes.
  * Sintaxe: `uma estrutura com N bytes`
  * Exemplo: `Um ponteiro é uma estrutura com 4 bytes.`
* **Campos numéricos (arrays de bytes)**:
  * **Sem nome (padding)**: `N bytes` - usado para alinhamento de memória
  * **Com nome**: `N bytes denominados nome` - array de bytes
  * Exemplos:
    * `3 bytes,` - padding de 3 bytes sem nome
    * `32 bytes denominados dmDeviceName,` - array de 32 bytes
    * `260 bytes denominados cFileName,` - array de 260 bytes
* **Qualificadores de tipo**: Informações opcionais entre colchetes após o tipo.
  * Sintaxe: `tipo [qualificador]`
  * Exemplos:
    * `Uma word [unsigned] denominado s_word1`
    * `Um ponteiro [que aponta] para um byte`
  * **Nota**: Qualificadores são ignorados pelo compilador, servem apenas para documentação.
* **Comentários inline em campos**: Podem aparecer após campos entre `[...]`.
  * Exemplos:
    * `Uma coordenada denominada coordenada X1, [left]`
    * `Um grau é um número [cujos valores vão de 0 até 3599]`
  * **Uso**: Documentação, restrições de valores, notas técnicas.

## Ponteiros

* **Ponteiro genérico**: `Um tipo é um ponteiro.`
* **Ponteiro tipado**: `Um tipo é um ponteiro para outro_tipo.`
* **Sintaxe opcional**: A palavra `que aponta` pode aparecer entre `ponteiro` e `para`.
  * Exemplo: `Um caractere inicial é um ponteiro [que aponta] para um byte.`
* **Ponteiros em campos**: Marcados com `(referência)` após o tipo.
  * Exemplo: `Um tipo base (referência)`

## Tipos Escalares (Unidades de Medida)

* Definidos com razão de conversão usando `são` ou `é`.
* **Sintaxe**: `Um tipo são N tipo_base` ou `Um tipo é fração tipo_base`
* **Sintaxe opcional**: Pode incluir `[composto de]` ou `[composta de]` para legibilidade.
  * Exemplo: `Uma coordenada é [composta de] uns twips.`
  * Equivalente a: `Uma coordenada são uns twips.`
* **Exemplos**:
  * `Um pixel são 15 twips.`
  * `Uma polegada são 1440 twips.`
  * `Um cm são 254/100 polegadas.`
  * `Um milímetro é 1/10 centímetros.`
  * `Uma altura é [composta de] uns twips.`
  * `Um ângulo é [composto de] uns graus.`
* **Uso**: Permite conversões automáticas entre unidades.

## Listas

* Definidas com `uma lista com` seguido dos campos.
* Seguem as mesmas regras de campos das estruturas.
* Automaticamente criam estrutura de lista duplamente encadeada com ponteiros `anterior` e `posterior`.

## Pluralização Automática

* **Regra fundamental**: O compilador automaticamente gera o nome plural a partir do nome singular.
* **Processo**:
  1. Analisa o nome do tipo palavra por palavra.
  2. Aplica regras de pluralização do português para cada palavra.
  3. Preserva palavras invariáveis (advérbios, preposições).
  4. Trata exceções conhecidas.

## Fim

* A instrução se encerra com `.` (ponto final) após a lista de campos ou tipo base.

## Exemplos

### Tipo derivado

```pop
Um nome é uma string.
Um nome plural é um nome.
Uns bytes# são um número.
Um grupo data/hora de criação é uma string.
Umas x-twips são uns twips.
```

### Tipos derivados de ponteiros

```pop
Um caractere inicial é um ponteiro [que aponta] para um byte. \ TODO: avaliar a possibilidade de substituir "byte" por "caractere".
Um caractere final é um ponteiro para um byte.
Um endereço de byte é um ponteiro para um byte.
Uma lista é um ponteiro [que aponta] para uma lista estruturada.
Um série de vértices é um ponteiro [que aponta] para uma série de vértices conjunto.
Um GpImageAttributes é um ponteiro.
```

### Estrutura delimitada

```pop
Um ponteiro é uma estrutura com 4 bytes. \ 32 bits
Uma word big-endian unsigned é uma estrutura com 2 bytes.
```

### Estrutura simples

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

### Estrutura com declaração no campo

```pop
Um array é uma estrutura com
  Um ponteiro denominado endereço,
  Um número denominado tamanho.
```

### Estrutura composta

```pop
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte. \ A word de ordem superior vem depois devido à extremidade (ordenação) dos processadores x86

\\ Exemplo com qualificadores e comentários inline
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X1, [left]
  Uma coordenada denominada coordenada Y1, [top]
  Uma coordenada denominada coordenada X2, [right]
  Uma coordenada denominada coordenada Y2, [bottom]
  Uma localização denominada canto superior esquerdo sob a coordenada X1, [left-top]
  Uma localização denominada canto inferior direito sob a coordenada X2. [right-bottom]

\\ Exemplo com campos numéricos (arrays de bytes)
Um UUID é uma estrutura com
  Um número denominado Data1,
  Uma word denominada Data2,
  Uma word denominada Data3,
  8 bytes denominados Data4.

\\ Exemplo com padding (bytes sem nome)
Um OUTLINETEXTMETRIC é uma estrutura com
  Um número denominado otmSize,
  Um TEXTMETRIC denominado otmTextMetrics,
  3 bytes,  \\ padding de 3 bytes
  Um byte denominado otmFiller.

Um In_Addr é uma estrutura com \ representa um endereço IPv4. -> Internet Adress
  Um byte denominado s_byte1,
  Um byte denominado s_byte2,
  Um byte denominado s_byte3,
  Um byte denominado s_byte4,
  Uma word [unsigned] denominado s_word1 sob o s_byte1,
  Uma word [unsigned] denominado s_word2 sob o s_byte3,
  Um número denominado s_addr sob o s_byte1. 

Um SOCKADDR é uma estrutura com
  Uma word denominada SIn_family,
  Um word big-endian unsigned denominado SIn_Port,
  Um In_Addr denominado SIn_addr,
  8 bytes denominados SIn_zero.
```

### Lista

```pop
Um polígono é uma lista com uns vértices.
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

### Tipo escalar [unidade de medida]

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um kb são 1024 bytes#.
Um megabyte são 1024 kb.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Tipo complexo (referência)

```pop
Um tipo é uma lista com
  Um endereço local (referência),
  Um nome,
  Um nome plural,
  Um cabeçalho compactado,
  Uma quantidade de caracteres,
  Um nome do tipo primitivo,
  Um tipo base (referência),
  Um nome do conteúdo,
  Um tipo do conteúdo (referência) [aplicável somente a ponteiros],
  Uma razão de escala,
  Uns campos [aplicável somente a estruturas],
  Um sinalizador de recursividade,
  Um sinalizador de informações complementares.
```

## Regras de Pluralização

O compilador implementa regras completas de pluralização do português:

### 1. Exceções conhecidas

* `caráter` → `carateres`

* `júnior` → `juniores`
* `sênior` → `seniores`

### 2. Advérbios invariáveis

`muito`, `pouco`, `mais`, `menos`, `bastante`, `quase`, `demais`, `bem`, `mal`, `melhor`, `pior`

### 3. Terminações especiais

#### Palavras terminadas em `-ão`

* Maioria: `-ão` → `-ões` (opinião → opiniões)

* Paroxítonas: `-ão` → `-ãos` (órgão → órgãos)
* Algumas: `-ão` → `-ães` (pão → pães)

#### Palavras terminadas em `-m`

* `-m` → `-ns` (homem → homens)

#### Palavras terminadas em `-al`

* `-al` → `-ais` (animal → animais)

* Exceção: `mal` → `males`

#### Palavras terminadas em `-el`

* Com acento na sílaba anterior: `-el` → `-eis` (nível → níveis)

* Sem acento: `-el` → `-éis` (papel → papéis)

#### Palavras terminadas em `-il`

* Oxítonas: `-il` → `-is` (fuzil → fuzis)

* Paroxítonas: `-il` → `-eis` (fóssil → fósseis)

#### Palavras terminadas em `-ol`

* Com acento: `-ol` → `-ois` (álcool → álcoois)

* Sem acento: `-ol` → `-óis` (lençol → lençóis)

#### Palavras terminadas em `-ul`

* `-ul` → `-uis` (azul → azuis)

* Exceção: `cônsul` → `cônsules`

#### Palavras terminadas em `-r`, `-s`, `-z`

* Acrescenta `-es` (flor → flores, país → países, luz → luzes)

### 4. Regra padrão

Acrescenta `-s` ao final da palavra.

### 5. Nomes compostos

Pluraliza palavra por palavra, exceto após preposição `de`.

Exemplo: `número de telefone` → `números de telefone`

## Conversão de Tipos (Casting)

O Português Puro permite a conversão explícita de tipos (casting) utilizando conjunções modificadoras.

### Operadores de Casting

* **`like`**: Converte o valor anterior para o tipo especificado.
* **`as`**: Funciona de forma idêntica ao `like`, mas **não pode** ser seguido por um artigo indefinido (para evitar ambiguidade com "as" artigo definido plural).

### Sintaxe

```pop
valor like um <tipo>
valor as um <tipo>
```

### Exemplos

```pop
\\ Conversão de ponteiro genérico para ponteiro tipado
Atribua o ponteiro genérico like um ponteiro para byte para o ponteiro específico.

\\ Conversão de estrutura
Atribua a estrutura A as uma estrutura B para a variável.

\\ Uso em expressões
Se o valor like um byte for maior que 10...
```

### Regras

1. **Compatibilidade**: A conversão deve ser entre tipos compatíveis em tamanho ou estrutura.
2. **Restrição do `as`**: O operador `as` não deve ser usado se a próxima palavra for um artigo indefinido que possa ser confundido, embora a regra léxica verifique especificamente se *não* é um artigo indefinido. Na prática, prefira `like` quando seguido de `um`/`uma`.
3. **Uso comum**: Muito utilizado para tratar ponteiros genéricos ou reinterpretar dados em memória.

---

## Observações Importantes

1. **Referências**: Campos podem ter `(referência)` para indicar ponteiros.
2. **Comentários inline**: Podem aparecer após campos entre `[...]` para documentação, restrições ou notas técnicas.
3. **Qualificadores opcionais**: Informações entre colchetes após tipos (ex: `[unsigned]`, `[que aponta]`) são ignoradas pelo compilador.
4. **Sintaxe opcional para escalares**: `[composto de]` ou `[composta de]` pode ser usado para legibilidade em tipos escalares.
5. **Campos numéricos**: `N bytes` (sem nome) para padding, `N bytes denominados nome` para arrays.
6. **Uso automático**: Uma vez definido `Um contato`, pode-se usar `uns contatos` automaticamente.
7. **Tipo primitivo**: O compilador trata os tipos derivados como tipo base. Isso permite que os tipos derivados sejam utilizados como tipos base. Exemplo: `Um número inteiro é um número.` Em uma rotina que receba um `número`, pode-se receber um `número inteiro`.
8. **Pluralização automática**: O compilador automaticamente gera o nome plural a partir do nome singular.
9. **Campos sobrepostos**: Usando `sob`, múltiplos campos podem compartilhar a mesma posição de memória (útil para unions/variantes).
10. **Símbolos em nomes**: Nomes podem conter `#`, `/`, `-`, `_` para maior expressividade.
11. **Aspas simples**: Usadas para delimitar palavras reservadas ou letras isoladas em nomes de variáveis.
12. **Palavra-chave `são` vs `é`**: Use `são` para plural e razões de escala, `é` para singular e definições simples.
13. **Bytes Ignoráveis**: Caracteres como `#`, `&`, `_`, `-`, `+`, `/`, `£` são considerados "bytes ignoráveis" na formação de identificadores, permitindo flexibilidade na nomenclatura (ex: `data/hora`, `big-endian`).

## Mapeamento para Langium

```langium
DeclaracaoTipo:
    artigo=ArtigoIndefinido nome+=IDTipo+ ('é' | 'são') definicao=DefinicaoTipo '.';

DefinicaoTipo:
    DefinicaoEstrutura | DefinicaoLista | DefinicaoPonteiro | TipoEscalar | TipoBase;

DefinicaoEstrutura:
    'uma' 'estrutura' 'com' (tamanho=Expressao 'bytes' | campos+=CampoEstrutura (separador=('e'|'ou'|',') campos+=CampoEstrutura)*);

DefinicaoLista:
    'uma' 'lista' 'com' campos+=CampoEstrutura (separador=('e'|'ou'|',') campos+=CampoEstrutura)*;

DefinicaoPonteiro:
    'um' 'ponteiro' (('que' 'aponta')? 'para' tipo+=IDTipo+)?;

CampoEstrutura:
    artigo=ArtigoIndefinido tipo+=IDTipo+ ('denominado' nome+=IDTipo+)? referencia?='(referência)'? ('sob' campoBase+=IDTipo+)?;

TipoEscalar:
    razao=Expressao tipo+=IDTipo+;

TipoBase:
    artigo=ArtigoIndefinido tipo+=IDTipo+;

// Terminal para identificadores de tipos (permite símbolos especiais)
terminal IDTipo:
    /[_a-zA-Zà-úÀ-Ú#\/''][_\w_à-úÀ-Ú#\/-]*/;
```

### Notas sobre o mapeamento

* `IDTipo` permite `#`, `/`, `-`, `_`, `'` em nomes
* `são` e `é` são alternativas para conectar nome e definição
* Campos podem ter `sob` para sobreposição de memória
* Ponteiros podem ter `que aponta` como palavra opcional
* Estruturas podem ser definidas por tamanho (`N bytes`) ou por campos

```pop
Função para que se determine se uma string é o início de algum tipo:
  Se a string for algum artigo indefinido, diga sim.
  Diga não.

```
