# Estruturas e Uniões

## Visão Geral

Português Puro possui **apenas dois tipos primitivos**, dos quais todos os demais tipos derivam:

- **`byte`** - Tipo primitivo escalar (8 bits)
- **`estrutura`** - Tipo primitivo composto

**Importante:** Todos os tipos em Português Puro são derivados de um destes dois tipos primitivos.

---

## Definição de Tipos

### Sintaxe Básica

```
<Artigo> <nome do tipo> <é|são> <definição>.
```

### Componentes Obrigatórios

1. **Artigo indefinido**: `um`, `uma`, `uns`, `umas`
2. **Nome do tipo**: Identificador após o artigo
3. **Palavra-chave `é` ou `são`**: Conecta o nome à definição
4. **Tipo de definição**: `tipo derivado`, `uma estrutura`, `uma lista`
5. **Fim**: Ponto final (`.`)

---

## Hierarquia de Tipos

### Tipos Primitivos

| Tipo | Descrição |
|------|-----------|
| `byte` | 8 bits, valor 0-255 (unsigned) |
| `estrutura` | Tipo composto, base para estruturas |

### Tipo Base

É o tipo utilizado como **referência** para a definição de um tipo derivado. Pode ser:
- Um **tipo primitivo** (`byte` ou `estrutura`)
- Um **tipo derivado** já definido anteriormente

### Tipo Derivado

Definido a partir de um **tipo base** (primitivo ou derivado).

**Sintaxe:**
```pop
Um <nome_tipo_derivado> é <tipo_base>.
```

---

## Derivação de Tipos

### Derivação de `byte`

```pop
\ Tipo derivado diretamente do tipo primitivo 'byte'
Um caractere é um byte.

\ Hierarquia: caractere → byte (primitivo)
```

### Derivação de `estrutura`

```pop
\ Tipo derivado diretamente do tipo primitivo 'estrutura'
Um par de números é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

\ Hierarquia: par de números → estrutura (primitivo)
```

### Cadeia de Derivação (Múltiplos Níveis)

```pop
\ Nível 0: Tipo primitivo
\\ (byte é primitivo)

\ Nível 1: Primeira derivação
Um caractere é um byte.

\ Nível 2: Segunda derivação
Uma letra é um caractere.

\ Nível 3: Terceira derivação
Uma vogal é uma letra.

\ Hierarquia: vogal → letra → caractere → byte (primitivo)
```

### Derivação de Estruturas com Herança de Campos

```pop
\ Nível 0: Tipo primitivo (estrutura)

\ Nível 1: Estrutura básica
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.

\ Nível 2: Adiciona campo
Um ponto 3D é um ponto com
  Um número denominado X,
  Um número denominado Y e
  Um número denominado Z.

\ Nível 3: Adiciona cor
Um vértice é um ponto 3D com
  Um número denominado X,
  Um número denominado Y,
  Um número denominado Z e
  Uma cor denominada cor.

\ Hierarquia: vértice → ponto 3D → ponto → estrutura (primitivo)
```

**Observação:** No segundo nível, `localização` **herda** os campos de `par de números` e pode adicionar novos campos.

---

## Estruturas

### Sintaxe Básica

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

### Campos

- Cada campo é declarado com **artigo indefinido + tipo + palavra `denominado` + nome do campo**
- Campos são separados por `e`, `ou` ou `,` (vírgula)
- O último campo termina com `.` (ponto final)

### Campos Sobrepostos (`sob`)

Usar `sob` para indicar que um campo compartilha a mesma posição de memória de outro:

```pop
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte.
```

### Estruturas Delimitadas por Tamanho

Podem ser definidas apenas com o tamanho em bytes:

```pop
Um ponteiro é uma estrutura com 4 bytes. \ 32 bits
Uma word big-endian unsigned é uma estrutura com 2 bytes.
```

### Campos Numéricos (Arrays de Bytes)

**Sem nome (padding):**
```pop
3 bytes, \ padding de 3 bytes sem nome
```

**Com nome:**
```pop
32 bytes denominados dmDeviceName,
260 bytes denominados cFileName,
```

### Observações de Tipo

Informações opcionais entre colchetes após o tipo (ignoradas pelo compilador, servem para documentação):

```pop
Uma word [unsigned] denominada s_word1
Um ponteiro [que aponta] para um byte
```

### Comentários Inline em Campos

Podem aparecer após campos entre `[...]`:

```pop
Uma coordenada denominada coordenada X1, [left]
Um grau é um número [cujos valores vão de 0 até 3599]
```

---

## Ponteiros

### Ponteiro Genérico

```pop
Um tipo é um ponteiro.
```

### Ponteiro Tipado

```pop
Um tipo é um ponteiro para outro_tipo.
```

### Sintaxe Opcional

A palavra `que aponta` pode aparecer entre `ponteiro` e `para`:

```pop
Um caractere inicial é um ponteiro [que aponta] para um byte.
```

### Ponteiros em Campos

Marcados com `(referência)` após o tipo:

```pop
Um tipo base (referência)
```

---

## Tipos Escalares (Unidades de Medida)

Definidos com razão de conversão usando `são` ou `é`:

**Sintaxe:**
```
Um tipo são N tipo_base
Um tipo é fração tipo_base
```

**Exemplos:**

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
Uma altura é [composta de] uns twips.
Um ângulo é [composto de] uns graus.
```

**Uso:** Permite conversões automáticas entre unidades.

---

## Listas

Definidas com `uma lista com` seguido dos campos. Seguem as mesmas regras de campos das estruturas. Automaticamente criam estrutura de lista duplamente encadeada com ponteiros `anterior` e `posterior`.

```pop
Um polígono é uma lista com uns vértices.
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

---

## Pluralização Automática

**Regra fundamental:** O compilador automaticamente gera o nome plural a partir do nome singular.

**Processo:**
1. Analisa o nome do tipo palavra por palavra
2. Aplica regras de pluralização do português para cada palavra
3. Preserva palavras invariáveis (advérbios, preposições)
4. Trata exceções conhecidas

### Regras de Pluralização

#### 1. Exceções Conhecidas

- `caráter` → `carateres`
- `júnior` → `juniores`
- `sênior` → `seniores`

#### 2. Advérbios Invariáveis

`muito`, `pouco`, `mais`, `menos`, `bastante`, `quase`, `demais`, `bem`, `mal`, `melhor`, `pior`

#### 3. Terminações Especiais

**Palavras terminadas em `-ão`:**
- Maioria: `-ão` → `-ões` (opinião → opiniões)
- Paroxítonas: `-ão` → `-ãos` (órgão → órgãos)
- Algumas: `-ão` → `-ães` (pão → pães)

**Palavras terminadas em `-m`:**
- `-m` → `-ns` (homem → homens)

**Palavras terminadas em `-al`:**
- `-al` → `-ais` (animal → animais)
- Exceção: `mal` → `males`

**Palavras terminadas em `-el`:**
- Com acento na sílaba anterior: `-el` → `-eis` (nível → níveis)
- Sem acento: `-el` → `-éis` (papel → papéis)

**Palavras terminadas em `-il`:**
- Oxítonas: `-il` → `-is` (fuzil → fuzis)
- Paroxítonas: `-il` → `-eis` (fóssil → fósseis)

**Palavras terminadas em `-ol`:**
- Com acento: `-ol` → `-ois` (álcool → álcoois)
- Sem acento: `-ol` → `-óis` (lençol → lençóis)

**Palavras terminadas em `-ul`:**
- `-ul` → `-uis` (azul → azuis)
- Exceção: `cônsul` → `cônsules`

**Palavras terminadas em `-r`, `-s`, `-z`:**
- Acrescenta `-es` (flor → flores, país → países, luz → luzes)

#### 4. Regra Padrão

Acrescenta `-s` ao final da palavra.

#### 5. Nomes Compostos

Pluraliza palavra por palavra, exceto após preposição `de`.

**Exemplo:** `número de telefone` → `números de telefone`

---

## Conversão de Tipos (Casting)

O Português Puro permite a conversão explícita de tipos (casting) utilizando conjunções modificadoras.

### Operadores de Casting

- **`like`**: Converte o valor anterior para o tipo especificado.
- **`as`**: Funciona de forma idêntica ao `like`, mas **não pode** ser seguido por um artigo indefinido (para evitar ambiguidade com "as" artigo definido plural).

### Sintaxe

```pop
valor like um <tipo>
valor as um <tipo>
```

### Exemplos

```pop
\ Conversão de ponteiro genérico para ponteiro tipado
Atribua o ponteiro genérico like um ponteiro para byte para o ponteiro específico.

\ Conversão de estrutura
Atribua a estrutura A as uma estrutura B para a variável.

\ Uso em expressões
Se o valor like um byte for maior que 10...
```

### Regras

1. **Compatibilidade**: A conversão deve ser entre tipos compatíveis em tamanho ou estrutura.
2. **Restrição do `as`**: O operador `as` não deve ser usado se a próxima palavra for um artigo indefinido que possa ser confundido. Na prática, prefira `like` quando seguido de `um`/`uma`.
3. **Uso comum**: Muito utilizado para tratar ponteiros genéricos ou reinterpretar dados em memória.

---

## Exemplos Completos

### Tipo Derivado

```pop
Um nome é uma string.
Um nome plural é um nome.
Uns bytes# são um número.
Um grupo data/hora de criação é uma string.
Umas x-twips são uns twips.
```

### Tipos Derivados de Ponteiros

```pop
Um caractere inicial é um ponteiro [que aponta] para um byte.
Um caractere final é um ponteiro para um byte.
Um endereço de byte é um ponteiro para um byte.
Uma lista é um ponteiro [que aponta] para uma lista estruturada.
Um série de vértices é um ponteiro [que aponta] para uma série de vértices conjunto.
Um GpImageAttributes é um ponteiro.
```

### Estrutura Delimitada

```pop
Um ponteiro é uma estrutura com 4 bytes. \ 32 bits
Uma word big-endian unsigned é uma estrutura com 2 bytes.
```

### Estrutura Simples

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

### Estrutura com Declaração no Campo

```pop
Um array é uma estrutura com
  Um ponteiro denominado endereço,
  Um número denominado tamanho.
```

### Estrutura Composta (com `sob`)

```pop
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte. \ A word de ordem superior vem depois devido à extremidade (ordenação) dos processadores x86
```

### Estrutura com Observações e Comentários

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X1, [left]
  Uma coordenada denominada coordenada Y1, [top]
  Uma coordenada denominada coordenada X2, [right]
  Uma coordenada denominada coordenada Y2, [bottom]
  Uma localização denominada canto superior esquerdo sob a coordenada X1, [left-top]
  Uma localização denominada canto inferior direito sob a coordenada X2. [right-bottom]
```

### Estrutura com Arrays de Bytes

```pop
Um UUID é uma estrutura com
  Um número denominado Data1,
  Uma word denominada Data2,
  Uma word denominada Data3,
  8 bytes denominados Data4.
```

### Estrutura com Padding

```pop
Um OUTLINETEXTMETRIC é uma estrutura com
  Um número denominado otmSize,
  Um TEXTMETRIC denominado otmTextMetrics,
  3 bytes,  \ padding de 3 bytes
  Um byte denominado otmFiller.
```

### Estrutura Complexa (In_Addr / SOCKADDR)

```pop
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

### Tipo Escalar [Unidade de Medida]

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um kb são 1024 bytes#.
Um megabyte são 1024 kb.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Tipo Complexo (Referência)

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

---

## Observações Importantes

1. **Referências**: Campos podem ter `(referência)` para indicar ponteiros.
2. **Comentários inline**: Podem aparecer após campos entre `[...]` para documentação, restrições ou notas técnicas.
3. **Observações opcionais**: Informações entre colchetes após tipos (ex: `[unsigned]`, `[que aponta]`) são ignoradas pelo compilador.
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

---

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

### Notas sobre o Mapeamento

- `IDTipo` permite `#`, `/`, `-`, `_`, `'` em nomes
- `são` e `é` são alternativas para conectar nome e definição
- Campos podem ter `sob` para sobreposição de memória
- Ponteiros podem ter `que aponta` como palavra opcional
- Estruturas podem ser definidas por tamanho (`N bytes`) ou por campos

---

## Estatísticas

- **Tipos primitivos**: 2 (`byte`, `estrutura`)
- **Formas de definição**: 4 (`tipo base`, `uma estrutura`, `uma lista`, `tipo escalar`)
- **Separadores de campos**: 3 (`e`, `ou`, `,`)
- **Operadores de casting**: 2 (`like`, `as`)
- **Pluralização**: Automática com regras do português
- **Campos sobrepostos**: Suportados via `sob`
- **Qualificadores**: Entre colchetes `[]`
- **Comentários inline**: Entre colchetes `[]`