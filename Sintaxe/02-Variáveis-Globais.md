# Variáveis Globais - Português Puro

## Visão Geral

Variáveis globais são declaradas **fora de rotinas** e são acessíveis em todo o módulo (escopo global). Utilizam **artigos definidos** (`O`, `A`, `Os`, `As`).

---

## Sintaxe Básica

### Forma Simples (sem inicialização)

```
<Artigo Definido> <nome da variável> é <Artigo Indefinido> <tipo>.
```

### Com Inicialização

```
<Artigo Definido> <nome da variável> é <Artigo Indefinido> <tipo> igual a <valor>.
```

### Com Comentário em Linha

```
<Artigo Definido> <nome da variável> [comentário] é <Artigo Indefinido> <tipo> igual a <valor>. \comentário de linha
```

---

## Artigos Definidos

| Artigo | Gênero/Número | Exemplo |
|--------|---------------|---------|
| `O` | Masculino singular | `O contador` |
| `A` | Feminino singular | `A mensagem` |
| `Os` | Masculino plural | `Os contadores` |
| `As` | Feminino plural | `As mensagens` |

> **Nota**: Pronomes demonstrativos determinados (`este`, `esta`, `estes`, `estas`) também funcionam como artigos definidos.

---

## Nome da Variável

### Caracteres Permitidos

| Categoria | Exemplos | Observação |
|-----------|----------|------------|
| **Permitidos** | `bytes#`, `& comercial`, `s_byte1`, `ponto&vírgula` | Isolados ou aglutinados |
| **Limitados** | `A`, `E`, `O`, `a`, `e`, `o`, `À`, `É`, `é`, `à` | Função sintática quando isolados |
| **Numéricos/Símbolos** | `data/hora`, `big-endian`, `Shift-Out`, `s_byte1` | Entre outros caracteres |
| **Especiais** | `<`, `=`, `>`, `^`, `\|`, `€`, `×`, `÷` | Não adjacentes a outros especiais |
| **Reservados** | `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, `'` | **Não podem** ser usados |
| **Não permitidos** | `!`, `*`, `?`, `{`, `}`, `ª`, `º` | Apenas em strings/comentários |

### Regras de Nomeação

- **Primeiro caractere**: Qualquer letra (com/sem acento) ou símbolo permitido (exceto espaço)
- **Case-insensitive**: Não diferencia maiúsculas/minúsculas
- **Aspas simples**: Delimitam palavras reservadas (`'A'`, `'um'`)
- **Colchetes**: Abreviações/siglas (`[SOH]`, `[NULL]`, `[CR]`)
- **Pluralização automática**: `O caractere` → `Os caracteres`, `A letra` → `As letras`

---

## Exemplos Completos

### Variáveis Simples sem Inicialização

```pop
O contador é um número.
A mensagem é uma string.
```

### Variáveis com Inicialização

```pop
O caractere NULL [NULL] é um byte igual a 0. \Null
O sinal de adição é um byte igual a 43.
A próxima letra é uma letra igual a 65.\ Letra A maiúscula
```

### Variáveis com Nomes Compostos

```pop
O caractere de início de cabeçalho [SOH] é um byte igual a 1. \Start of Header
O ponto de exclamação é um byte igual a 33.
O número de telefone é uma string.
```

### Variáveis com Símbolos Especiais

```pop
Uns bytes# são um número.
O grupo data/hora de criação é uma string.
O caractere Shift-Out [SO] é um byte igual a 14.
O & comercial é um byte igual a 38.
O ponto&vírgula é um byte igual a 59.
```

### Variáveis com Aspas Simples (Palavras Reservadas)

```pop
A letra 'A' maiúscula é um byte igual a 65.
O 'A' maiúsculo é um byte igual a 65.
O número 'um' é um byte igual a 49.
O 'número um' é um byte igual a 49.
A letra 'E' maiúscula é um byte igual a 69.
O 'e' minúsculo é um byte igual a 101.
```

### Variáveis com Números no Nome

```pop
O número zero é um byte igual a 48.
O número dois é um byte igual a 50.
O s_byte1 é um byte.
```

### Estruturas Inline (sem declarar tipo separado)

```pop
O mouse é uma estrutura com
  Uma tecla denominado botão esquerdo,
  Uma tecla denominado botão direito.

O módulo é uma estrutura com
  Um número identificador,
  Um endereço completo,
  Um endereço da pasta,
  Um root endereço da pasta,
  Um nome do arquivo s/ extensão denominado nome.

A tela é uma estrutura com
  Uma caixa,
  Uma altura denominada altura do pixel e
  Uma largura denominada largura do pixel.
```

### Valores Hexadecimais Longos

```pop
A tabela ascii é uma tabela de tradução igual a $000102030405060708090A0B0C0D0E0F...FDFEFF.
O som de aviso é uma wave igual a $524946463A02000057415645666D74201200000001000100....
A fonte osmosiana é um texto hexadecimal igual a $00010000000B0080000300304F532F32BB41B2760000013800000056....
```

### Frações como Valores

```pop
A raiz de dois é uma fração igual a 2147483647/1518500249.
A raiz de três é uma fração igual a 2147483647/1239850262.
O número pi é uma fração igual a 2147483647/683565275.
A proporção dourada é uma fração igual a 1618033988/1000000000.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Sintaxe Opcional (para legibilidade)

```pop
O tpi [quantidade de twips por polegada] é [composta de] uns twips igual a 1440.
Uma coordenada é [composta de] uns twips.
O tamanho do quadrado é [igual a] uns twips.
A stack é [composta de] uns elementos das stacks.
```

---

## Observações Importantes

1. **Artigo definido vs indefinido**:
   - Artigo **definido** (`O`, `A`, `Os`, `As`) = variável **global**
   - Artigo **indefinido** (`um`, `uma`, `uns`, `umas`) = tipo ou variável **local**

2. **Abreviações entre colchetes**: Usadas para siglas e códigos (`[NULL]`, `[SOH]`, `[CR]`)

3. **Comentários**:
   - Em Linha: entre `[...]`. Não aceita quebra de linhas. Também chamados de `Observação` no Código-Fonte do Compilador.
   - Fim de Linha: após `\` até a quebra de linha.

4. **Símbolos em nomes**: Permitem maior expressividade e clareza (`&`, `/`, `-`, `#`)

5. **Aspas simples**: Delimitam palavras que seriam reservadas ou ambíguas (`'A'`, `'um'`, `número 'um'`)

6. **Pluralização**: O compilador gera automaticamente o plural

7. **Inicialização**: Opcional, mas comum para constantes e valores padrão

8. **Nomes descritivos**: Português Puro incentiva nomes longos e descritivos em linguagem natural

9. **Estruturas inline**: Variáveis globais podem ser definidas como estruturas sem declarar o tipo separadamente
   - Sintaxe: `O nome é uma estrutura com campos...`
   - Útil para variáveis únicas que não precisam de reutilização de tipo

10. **Valores hexadecimais**: Podem ser extremamente longos (milhares de caracteres)
    - Prefixo: `$` indica valor hexadecimal
    - Uso: tabelas de tradução, fontes, sons, imagens embutidas

11. **Frações como valores**: Expressas diretamente com `/`
    - Sintaxe: `numerador/denominador`
    - Uso: constantes matemáticas, razões de conversão

12. **Sintaxe opcional**: `[composto de]`, `[composta de]`, `[igual a]` podem ser usados para legibilidade
    - Exemplo: `é [composta de] uns twips`
    - Equivalente a: `são uns twips`

---

## Mapeamento para Langium

```langium
DeclaracaoGlobal:
    artigo=ArtigoDefinido nome+=IDVariavel+ abreviacao?=Abreviacao? 
    ('é' | 'são') 
    tipo=TipoVariavel 
    (('igual' | 'iguais') 'a' valor=Expressao)? 
    '.';

TipoVariavel:
    artigo=ArtigoIndefinido tipo+=IDVariavel+;

Abreviacao:
    '[' conteudo=ID ']';

// Terminal para identificadores de variáveis (permite símbolos especiais)
terminal IDVariavel:
    /[_a-zA-Zà-úÀ-Ú#\/'&][_\w_à-úÀ-Ú#\/-&]*/;

ArtigoDefinido:
    'O' | 'A' | 'Os' | 'As';

ArtigoIndefinido:
    'um' | 'uma' | 'uns' | 'umas';
```

---

## Diferença: Variáveis Globais vs Locais

| Aspecto | Variáveis Globais | Variáveis Locais |
|---------|-------------------|------------------|
| **Artigo** | Definido (`O`, `A`, `Os`, `As`) | Indefinido (`um`, `uma`, `uns`, `umas`) |
| **Escopo** | Todo o módulo | Dentro da rotina |
| **Declaração** | Fora de rotinas | Na primeira atribuição |
| **Sintaxe** | `O nome é um tipo` | `Atribua valor para um tipo` |
| **Acesso posterior** | Sempre com artigo definido | Com artigo definido |

> **Próximo**: [Variáveis Locais](03-Variáveis-Locais.md)