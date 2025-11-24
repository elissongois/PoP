# Valores Literais - Português Puro

## Visão Geral

Valores literais são **constantes** escritas diretamente no código-fonte. Português Puro suporta diversos tipos de valores literais: números inteiros, frações, strings, hexadecimais, booleanos e caracteres especiais.

---

## Categorias de Valores Literais

### 1. Números Inteiros
- Decimais: `0`, `10`, `255`, `-1`
- Negativos: `-10`, `-255`

### 2. Frações
- Formato: `numerador/denominador`
- Exemplos: `1/2`, `3/4`, `2147483647/1518500249`

### 3. Strings
- Delimitadas por aspas duplas: `"texto"`
- Escape de aspas: `""` dentro da string

### 4. Hexadecimais
- Prefixo `$`: `$00`, `$FF`, `$0D0A`
- Longos: Milhares de caracteres

### 5. Booleanos
- `sim` (verdadeiro)
- `não` (falso)

### 6. Valores Especiais
- `inexistente` (NULL/nulo)

---

## 1. Números Inteiros

### Sintaxe

```pop
<dígitos>
-<dígitos>
```

### Exemplos

```pop
\\ Inteiros positivos
Atribua 0 para o contador.
Atribua 10 para o número.
Atribua 255 para o byte.
Atribua 2147483647 para o máximo.

\\ Inteiros negativos
Atribua -1 para o resultado.
Atribua -10 para a diferença.

\\ Zero
Atribua 0 para o total.
```

### Limites

- **Byte**: 0 a 255 (8 bits, unsigned)
- **Número**: -2147483648 a 2147483647 (32 bits, signed)

---

## 2. Frações

### Sintaxe

```pop
<numerador>/<denominador>
```

### Características

- Representam números racionais
- Armazenados como par de inteiros (numerador/denominador)
- Podem ser simplificados automaticamente

### Exemplos

```pop
\\ Frações simples
Atribua 1/2 para a metade.
Atribua 3/4 para três quartos.
Atribua 2/3 para dois terços.

\\ Frações complexas
Atribua 2147483647/1518500249 para a raiz de dois.

\\ Frações em operações
Adicione 1/4 para a fração.
Multiplique a largura por 3/4.
```

### Conversão

```pop
\\ Fração para string
Converta a fração para uma string.
\\ Resultado: "1/2" ou "1+1/2" (numeral misto)

\\ Número para fração
Atribua o número para uma fração.
\\ Resultado: número/1
```

---

## 3. Strings

### Sintaxe Básica

```pop
"<texto>"
```

### Características

- Delimitadas por **aspas duplas** (`"`)
- Codificação: Windows-1252 (ISO-8859-1)
- Suportam caracteres acentuados

### Exemplos

```pop
\\ Strings simples
Atribua "Olá, Mundo!" para a mensagem.
Atribua "João" para o nome.
Atribua "" para a string vazia.

\\ Strings com acentos
Atribua "São Paulo" para a cidade.
Atribua "Programação" para o curso.

\\ Strings com espaços
Atribua "Português Puro" para o nome da linguagem.
```

---

### Escape de Aspas

Para incluir aspas duplas **dentro** de uma string, use **duas aspas** (`""`):

```pop
\\ Escape de aspas
Atribua "Ele disse ""Olá""!" para a frase.
\\ Resultado: Ele disse "Olá"!

\\ Múltiplas aspas
Atribua """""" para as aspas duplas.
\\ Resultado: ""
```

**Regra:** Cada `""` dentro da string representa uma aspa `"`

---

### Strings Multilinha

**Não suportadas diretamente**. Use concatenação:

```pop
Atribua "Linha 1" para o texto.
Acrescente o texto CRLF para o texto.
Acrescente "Linha 2" para o texto.
```

---

## 4. Hexadecimais

### Sintaxe

```pop
$<dígitos hexadecimais>
```

### Características

- Prefixo obrigatório: `$`
- Dígitos: `0-9`, `A-F` (case-insensitive)
- Podem ter **milhares de caracteres**
- Usados para: tabelas, fontes, sons, imagens embutidas

### Exemplos Curtos

```pop
\\ Bytes hexadecimais
Atribua $00 para o byte nulo.
Atribua $FF para o byte máximo.
Atribua $0D para o carriage return.
Atribua $0A para o line feed.

\\ Valores combinados
O texto CRLF é uma string igual a $0D0A.

\\ Cores
Atribua $FF0000 para a cor vermelha. \\ RGB: Red=FF, Green=00, Blue=00
```

---

### Exemplos Longos

```pop
\\ Tabela ASCII (256 bytes)
A tabela ascii é uma tabela de tradução igual a $000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A6B6C6D6E6F707172737475767778797A7B7C7D7E7F808182838485868788898A8B8C8D8E8F909192939495969798999A9B9C9D9E9FA0A1A2A3A4A5A6A7A8A9AAABACADAEAFB0B1B2B3B4B5B6B7B8B9BABBBCBDBEBFC0C1C2C3C4C5C6C7C8C9CACBCCCDCECFD0D1D2D3D4D5D6D7D8D9DADBDCDDDEDFE0E1E2E3E4E5E6E7E8E9EAEBECEDEEEFF0F1F2F3F4F5F6F7F8F9FAFBFCFDFEFF.

\\ Som embutido (wave file)
O som de aviso é uma wave igual a $524946463A02000057415645666D74201200000001000100401F0000401F000001000800000066616374040000000702000064617461070200007F7F807F7F807F7F808080807F807F7F80817F81817E7E827E7D847C79877D5F6D99B2A25D608269A5979869667F7D8D738C7D8C5E7E878F767A75868D84797278829A7D7E857A73929271657492907D7E7D787E8B887C758388827E817F7C7B89897C7A7E84838183827E7A8488877D7E8181808484817C7F84838181807E7F8283807E8081808182807F7F81818081807F7F8081818080807F7F808180807F80808080807F8080807F8080808080807F7F7F7F7F8080807F7F7F7C7B8182817C7B7D7E8082807D7D7C7F8281807F7C7D808082807E7E7E7D7E807D7B7C7B7D7D7B7A7979797875727269797A490F4571FFF4FF0C001297FBF492525BB0F5B26A001C69BEE5BA76476F9EBD953C3757BAC9BB705C7F9AA883645D7897AA9B806977959588696976999B83766F828C907F7375828E91877B757D868B837A757C858D8880787B8187847B7A7D8788807B79808486817D7C7F8384817D7C7F8484817B7B7D83847F7C7B7E8182827D7C7C8082817D7C7D7F81807F7D7D7F82817F7B7B7E8081807E7D7D7F80807E7D7D7E80807E7D7D7E7F807F7D7D7E7F807F7E7D7E7E80807F7E7D7E80807F7E7E7E7F7F7E7E7E7F7F7F7F7E7E7F7F807F7F7E7E7E7F8080807E7E7E80807F7E7E7F8081807F7F7E7F7F80807F7E7F8081807F7E7E7E80808080807F807F7F7F7F7F7F7F80808080807F7F7F808080807F80808180807F80808100.
```

**Uso:** Embutir dados binários diretamente no código

---

## 5. Booleanos

### Valores

- `sim` - Verdadeiro (true)
- `não` - Falso (false)

### Exemplos

```pop
\\ Atribuição
Atribua sim ao sinalizador.
Atribua não ao flag de erro.

\\ Retorno de função
Diga sim.
Diga não.

\\ Comparação
Se o sinalizador for sim, processe.
Se o flag for não, retorne.
```

---

## 6. Valores Especiais

### `inexistente`

Representa um **ponteiro nulo** (NULL):

```pop
\\ Verificação
Se o ponteiro for inexistente, retorne.
Se a lista não for inexistente, processe.

\\ Atribuição (implícita ao criar ponteiro)
Aloque memória para um ponteiro.
Se o ponteiro for inexistente,
  Escreva "Erro de alocação!" no console.
```

---

## Caracteres Especiais

### Variáveis Globais Predefinidas

```pop
\\ Quebra de linha (CRLF)
O texto CRLF é uma string igual a $0D0A.

\\ Aspas duplas
As aspas duplas são uma string igual a """".

\\ Caracteres de controle
O caractere de espaço é um byte igual a 32.
O caractere de tabulação é um byte igual a 9.
```

### Uso

```pop
\\ Quebra de linha
Escreva "Linha 1" junto com o texto CRLF no console.

\\ Aspas em strings
Acrescente as aspas duplas para a string.
```

---

## Comentários em Valores

### Comentários Inline

Use `[...]` para comentários **dentro** de valores:

```pop
Atribua 2147483648 [0x80000000] para o valor máximo.
Atribua 8 [HEAP_ZERO_MEMORY] para as flags.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// VALORES LITERAIS
// ============================================================================

ValorLiteral:
    NumeroInteiro | Fracao | String | Hexadecimal | Booleano | ValorEspecial;

// ============================================================================
// NÚMEROS
// ============================================================================

NumeroInteiro:
    sinal=('-')? digitos=INT;

Fracao:
    numerador=INT '/' denominador=INT;

// ============================================================================
// STRINGS
// ============================================================================

String:
    '"' conteudo=StringConteudo '"';

StringConteudo:
    // Aspas escapadas: "" = "
    (CaractereNormal | '""')*;

// ============================================================================
// HEXADECIMAIS
// ============================================================================

Hexadecimal:
    '$' digitos=HEX+;

HEX:
    /[0-9A-Fa-f]/;

// ============================================================================
// BOOLEANOS
// ============================================================================

Booleano:
    'sim' | 'não';

// ============================================================================
// VALORES ESPECIAIS
// ============================================================================

ValorEspecial:
    'inexistente';
```

---

## Observações Importantes

1. **Números Inteiros**: Sem separadores de milhares
2. **Frações**: Formato `numerador/denominador` (sem espaços)
3. **Strings**: Aspas duplas obrigatórias, escape com `""`
4. **Hexadecimais**: Prefixo `$` obrigatório
5. **Case-Insensitive**: Hexadecimais aceitam `A-F` ou `a-f`
6. **Sem Notação Científica**: Use valores completos
7. **Sem Ponto Flutuante**: Use frações para números racionais
8. **Caracteres Especiais**: Use variáveis globais predefinidas
9. **Comentários Inline**: `[...]` para anotações
10. **Valores Longos**: Hexadecimais podem ter milhares de caracteres

---

## Boas Práticas

1. **Use Frações**: Para valores racionais exatos (evite aproximações)
2. **Nomes Descritivos**: Para valores hexadecimais longos
3. **Comentários**: Anote valores mágicos com `[...]`
4. **Constantes Globais**: Para valores reutilizados
5. **Escape Correto**: Sempre use `""` para aspas em strings
6. **Validação**: Verifique limites de bytes e números
7. **Legibilidade**: Quebre hexadecimais longos em múltiplas linhas (se necessário)
8. **Documentação**: Comente o significado de valores especiais
9. **Consistência**: Use o mesmo formato para valores similares
10. **Teste**: Verifique valores extremos (0, máximo, mínimo)

---

## Exemplos Completos

### Inicialização de Variáveis

```pop
\\ Números
Atribua 0 para o contador.
Atribua -1 para o resultado de erro.
Atribua 255 para o byte máximo.

\\ Frações
Atribua 1/2 para a metade.
Atribua 3/4 para a proporção.

\\ Strings
Atribua "Português Puro" para o nome da linguagem.
Atribua "" para a string vazia.

\\ Booleanos
Atribua sim ao sinalizador de debug.
Atribua não ao flag de erro.

\\ Hexadecimais
Atribua $0D0A para a quebra de linha.
Atribua $FF para o byte máximo.
```

---

### Valores em Estruturas

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome igual a "João",
  Um número denominado idade igual a 30,
  Um sinalizador denominado ativo igual a sim.
```

---

### Valores em Comparações

```pop
Se o contador for 0, retorne.
Se a string for "", limpe o buffer.
Se o sinalizador for sim, processe.
Se o ponteiro for inexistente, aloque memória.
```

---

### Valores em Operações

```pop
\\ Aritméticas
Adicione 1 para o contador.
Multiplique o número por 2.
Divida a largura por 3.

\\ Frações
Adicione 1/4 para a fração.
Multiplique a largura por 3/4.

\\ Strings
Acrescente "!" para a mensagem.
Acrescente o texto CRLF para a linha.
```

---

## Tabela de Referência Rápida

| Tipo            | Exemplo         | Uso                         |
|-----------------|-----------------|-----------------------------|
| **Inteiro**     | `10`, `-5`, `0` | Contadores, índices         |
| **Fração**      | `1/2`, `3/4`    | Proporções, cálculos exatos |
| **String**      | `"texto"`       | Mensagens, nomes            |
| **Hexadecimal** | `$FF`, `$0D0A`  | Bytes, dados binários       |
| **Booleano**    | `sim`, `não`    | Flags, estados              |
| **Especial**    | `inexistente`   | Ponteiros nulos             |

---

## Estatísticas

- **Tipos de literais**: 6
- **Formatos numéricos**: 3 (inteiro, fração, hexadecimal)
- **Booleanos**: 2 (`sim`, `não`)
- **Valores especiais**: 1 (`inexistente`)
- **Escape de aspas**: `""` → `"`
- **Prefixo hexadecimal**: `$`
- **Separador de fração**: `/`
- **Delimitador de string**: `"`
