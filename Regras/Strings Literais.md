# Strings Literais - Português Puro

## Definição

Strings literais são sequências de caracteres delimitadas por aspas duplas (`"`). Representam valores textuais constantes no código-fonte.

## Sintaxe Básica

```
"texto aqui"
```

## Delimitadores

- **Início**: Aspas duplas (`"`)
- **Fim**: Aspas duplas (`"`)
- **Caractere de escape**: Aspas duplas (`"`)

## Técnicas para Incluir Aspas Duplas

### Técnica 1: Escape Direto (Concisa)

Usar `""` dentro da string literal:

```pop
Escreva "O comando é: ""Compilador.exe"" ""C:\projeto\""" para StdOut.
```

**Vantagens**:
- Conciso
- Direto
- Ideal para texto fixo

**Desvantagens**:
- Menos legível com muitas aspas
- Dificulta manutenção em textos complexos

### Técnica 2: Concatenação com Variável Global (Verbosa)

Usar a variável global `as aspas duplas` com operadores de concatenação:

```pop
Escreva "O comando é: " 
junto com as aspas duplas junto com "Compilador.exe" 
junto com as aspas duplas junto com " " 
junto com as aspas duplas junto com "C:\projeto\" 
junto com as aspas duplas para StdOut.
```

**Vantagens**:
- Mais legível
- Facilita manutenção
- Ideal para construção dinâmica

**Desvantagens**:
- Mais verboso
- Requer mais linhas de código

### Técnica 3: Função Auxiliar (Programática)

Criar uma rotina para adicionar aspas automaticamente:

```pop
Rotina para que se cite uma string:
  Atribua as aspas duplas para uma segunda string.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Acrescente o conteúdo deste caractere inicial deste subtexto para a segunda string.
    Se o conteúdo deste caractere inicial deste subtexto for as aspas duplas,
      Acrescente as aspas duplas para a segunda string.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Acrescente as aspas duplas para a segunda string.
  Atribua a segunda string à string.
```

**Uso**:
```pop
Atribua "Compilador.exe" para uma string.
Cite a string.
Escreva a string para StdOut.  \\ Resultado: "Compilador.exe"
```

**Vantagens**:
- Reutilizável
- Escapa aspas automaticamente
- Ideal para processamento de texto

### Técnica 4: Rotinas da Biblioteca Padrão (Idiomática)

A biblioteca padrão oferece rotinas para manipular strings, incluindo inserção de caracteres:

```pop
\\ Adicionar no final
Acrescente as aspas duplas para o relatório.
Posponha as aspas duplas para a string.
Adicione as aspas duplas para a string.

\\ Adicionar no início
Anteponha as aspas duplas para o relatório.

\\ Atribuir
Atribua as aspas duplas para uma segunda string.
```

**Vantagens**:
- Idiomática (natural em Português Puro)
- Múltiplos sinônimos disponíveis
- Suporta qualquer byte, não apenas aspas
- Pode usar contagem para repetição

**Desvantagens**:
- Requer conhecimento da biblioteca padrão
- Limitado a operações byte a byte

#### Sinônimos Disponíveis

A biblioteca padrão oferece **múltiplos sinônimos** para a mesma operação:

| Operação            | Sinônimos                                                                   |
|---------------------|-----------------------------------------------------------------------------|
| Adicionar no fim    | `acrescente`, `adicione`, `anexe`, `coloque`, `ponha`, `insira`, `posponha` |
| Adicionar no início | `anteponha`, `preponha`                                                     |

#### Variações Sintáticas

Cada sinônimo aceita **variações sintáticas** equivalentes:

```pop
\\ Todas equivalentes - adicionar no fim
Acrescente um byte para uma string.
Acrescente um byte para o final de uma string.
Acrescente um byte para o fim de uma string.
Acrescente um byte no fim de uma string.
Acrescente um byte no final de uma string.
```

#### Exemplo com Contagem

Repetir a inserção N vezes:

```pop
\\ Adicionar 5 aspas duplas
Acrescente as aspas duplas para a string usando 5.
```

**Implementação**:
```pop
Rotina para que se acrescente um byte para uma string usando uma contagem:
  Preserve a contagem.
  Itere.
    Se a contagem for menor do que 1, retorne.
    Acrescente o byte para a string.
    Subtraia 1 desde a contagem.
  Reitere.
```

### Comparação das Técnicas

#### Exemplo: Mensagem de Aviso com Comando

**Técnica 1 - Escape Direto**:
```pop
Escreva "|                 ""Compilador.exe"" ""D:\pasta_do_projeto_atual\""                                                     |" 
junto com o texto CRLF para StdOut.
```

**Técnica 2 - Concatenação**:
```pop
Escreva "|                 " 
junto com as aspas duplas junto com "Compilador.exe" 
junto com as aspas duplas junto com " " 
junto com as aspas duplas junto com "D:\pasta_do_projeto_atual\" 
junto com as aspas duplas junto com "                                                     |" 
junto com o texto CRLF para StdOut.
```

**Técnica 3 - Função Auxiliar**:
```pop
Atribua "Compilador.exe" para uma string.
Cite a string.
Atribua "D:\pasta_do_projeto_atual\" para uma segunda string.
Cite a segunda string.
- `""` dentro de uma string literal = uma aspa dupla (`"`) no valor final
```

### Exemplos

#### Exemplo 1: Texto com aspas
```pop
"Ele disse ""olá"" para mim."
```
**Resultado**: `Ele disse "olá" para mim.`

#### Exemplo 2: Chamada de API com strings
```pop
Acrescente "Processe ""kernel32.dll"" ""ExitProcess"" com 0." para a string.
```
**Resultado**: `Processe "kernel32.dll" "ExitProcess" com 0.`

#### Exemplo 3: Aspas duplas consecutivas
```pop
"texto com """" aspas duplas"
```
**Resultado**: `texto com "" aspas duplas`

### Caso Especial: Seis Aspas Duplas (`""""""`)

Este é o caso que aparece no código-fonte do compilador:

```pop
Se o segmento final deste percorredor começa com """""", diga sim.
```

**Análise**:
1. `"` - Início da string literal
2. `""` - Primeira aspa dupla escapada → representa `"`
3. `""` - Segunda aspa dupla escapada → representa `"`
4. `"` - Fim da string literal

**Resultado**: A string contém literalmente duas aspas duplas: `""`

**Propósito**: Detectar quando o parser encontra duas aspas duplas consecutivas no código-fonte (indicando aspas aninhadas).

## Caracteres Permitidos

### Permitidos SEM Escape
Todos os caracteres exceto:
- Quebra de linha (LF, CR, CRLF)
- Aspas duplas (requer escape: `""`)

### Exemplos de Caracteres Livres

```pop
"Aspas simples: ' são permitidas"
"Barra invertida: \ é permitida"
"Colchetes: [texto] são permitidos"
"Comentários: \\ são permitidos"
"Símbolos: @#$%&*+-/=<>!? são permitidos"
```

## Limitações

### Quebras de Linha
Strings literais **não podem** conter quebras de linha diretas:

❌ **Inválido**:
```pop
"texto com
quebra de linha"
```

✅ **Alternativa**: Concatenar strings
```pop
"texto com" junto com o texto CRLF junto com "quebra de linha"
```

## Detecção pelo Compilador

### Início de String Literal
```pop
Função para que se determine se uma string é algum string literal:
  Se a string estiver em branco, diga não.
  Se o conteúdo deste caractere inicial desta string for as aspas duplas, diga sim.
  Diga não.
```

### Aspas Duplas Aninhadas
```pop
Função para que se determine se um percorredor está sobre múltiplas aspas duplas aninhadas:
  Se o segmento final deste percorredor começa com """""", diga sim.
  Diga não.
```

## Comparação com Outras Linguagens

| Linguagem      | Delimitador | Escape de Aspas | Exemplo                  |
|----------------|-------------|-----------------|--------------------------|
| Português Puro | `"`         | `""`            | `"texto ""aspas"" aqui"` |
| C/C++          | `"`         | `\"`            | `"texto \"aspas\" aqui"` |
| Python         | `"` ou `'`  | `\"` ou `\'`    | `"texto \"aspas\" aqui"` |
| SQL            | `'`         | `''`            | `'texto ''aspas'' aqui'` |
| Pascal         | `'`         | `''`            | `'texto ''aspas'' aqui'` |

**Nota**: Português Puro usa a mesma convenção que SQL e Pascal (duplicação do delimitador).

## Mapeamento para Langium

```langium
// Terminal para strings literais
terminal STRING:
    '"' ( '""' | !'"' )* '"';
```

### Explicação da Regex
- `'"'` - Aspas duplas de abertura
- `( '""' | !'"' )*` - Zero ou mais ocorrências de:
  - `'""'` - Duas aspas duplas (escape) OU
  - `!'"'` - Qualquer caractere exceto aspas duplas
- `'"'` - Aspas duplas de fechamento

## Exemplos Completos

### Exemplo 1: Declaração de Variável
```pop
A mensagem de boas-vindas é uma string igual a "Bem-vindo ao ""Português Puro""!".
```

### Exemplo 2: Comando de Escrita
```pop
Escreva "O resultado é: ""sucesso""" para StdOut.
```

### Exemplo 3: Chamada Externa
```pop
Processe "user32.dll" "MessageBoxA" com
  0 [hWnd] e
  "Clique em ""OK"" para continuar." [lpText] e
  "Aviso" [lpCaption] e
  0 [uType].
```

### Exemplo 4: Construção Dinâmica de Código
```pop
Acrescente "Escreva ""Olá, mundo!"" para StdOut." para o corpo da rotina.
```

## Observações Importantes

1. **Case-Sensitive**: O conteúdo das strings é sensível a maiúsculas/minúsculas
2. **Encoding**: Strings usam codificação Windows-1252 (ANSI estendido)
3. **Sem Interpolação**: Não há interpolação de variáveis dentro de strings
4. **Concatenação**: Use operadores `junto`, `seguido`, `acompanhado` para concatenar
5. **Aspas Simples**: Não são delimitadores de string, são caracteres normais
6. **Variável Global `as aspas duplas`**: Contém o caractere `"` e pode ser usada para construção dinâmica de strings com aspas

## Erros Comuns

### ❌ Erro 1: Usar barra invertida para escape
```pop
"texto \"com aspas\" aqui"  \\ ERRADO!
```
✅ **Correto**:
```pop
"texto ""com aspas"" aqui"
```

### ❌ Erro 2: Quebra de linha direta
```pop
"linha 1
linha 2"  \\ ERRADO!
```
✅ **Correto**:
```pop
"linha 1" junto com o texto CRLF junto com "linha 2"
```

### ❌ Erro 3: Aspas simples como delimitador
```pop
'texto aqui'  \\ ERRADO! Aspas simples não delimitam strings
```
✅ **Correto**:
```pop
"texto aqui"
```
