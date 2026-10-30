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
<Artigo Definido> <nome da variável> é 


<valor>.
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
| **Reservados** | `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, ``` | **Não podem** ser usados |
| **Não permitidos** | `!`, `*`, `?`, `{`, `}`, `ª`, `º` | Apenas em strings/comentários |

### Regras de Nomeação

- **Primeiro caractere**: Qualquer letra (com/sem acento) ou símbolo permitido (exceto espaço)
- **Case-insensitive**: Não diferencia maiúsculas/minúsculas
- **Aspas simples**: Delimitam palavras reservadas (``A``, ``um``)
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
A letra `A` maiúscula é um byte igual a 65.
O `A` maiúsculo é um byte igual a 65.
O número `um` é um byte igual a 49.
O `número um` é um byte igual a 49.
A letra `E` maiúscula é um byte igual a 69.
O `e` minúsculo é um byte igual a 101.
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

5. **Aspas simples**: Delimitam palavras que seriam reservadas ou ambíguas (``A``, ``um``, `número `um``)

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
    (`é` | `são`) 
    tipo=TipoVariavel 
    ((`igual` | `iguais`) `a` valor=Expressao)? 
    `.`;

TipoVariavel:
    artigo=ArtigoIndefinido tipo+=IDVariavel+;

Abreviacao:
    `[` conteudo=ID `]`;

// Terminal para identificadores de variáveis (permite símbolos especiais)
terminal IDVariavel:
    /[_a-zA-Zà-úÀ-Ú#\/`&][_\w_à-úÀ-Ú#\/-&]*/;

ArtigoDefinido:
    `O` | `A` | `Os` | `As`;

ArtigoIndefinido:
    `um` | `uma` | `uns` | `umas`;
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
Agora vamos reconhecer a declaração de variáveis globais seguida de sua inicialização.
Mas antes vamos entender quais são os valores literais permitidos na linguagem. São eles:
Números: correspondem a números inteiros de 32 bits com sinal, cujo intervalo vai de -2147483648 a 2147483647.
Exemplos: 
```
123
-67
```
Strings: correspondem a uma sequência de caracteres imprimíveis delimitados por aspas duplas. 
Os seguintes caracteres não são permitidos em strings literais (e devem gerar um erro na seção de diagnósticos). 
São eles:
Tabulação horizontal;
Carriage return; e 
Linefeed.
Exemplo de string literal válida:
```
"Olá, meu nome é João e tenho 25 anos."
```
O caractere de escape das aspas duplas são as próprias aspas duplas.
Exemplos de string com aspas duplas escapadas:
```
"Ele disse:""Olá, meu nome é João e tenho 25 anos.""
"Erro. A palavra chave ""Function"" não foi localizada."
```
Frações: São iniciados por um número inteiro (com ou sem sinal) seguido imediatamente por uma barra vertical seguido por outro número inteiro (com ou sem sinal).
Exemplos de frações válidas:
```
11/7
-5/12
7/-1
-8/-2
+9/4
+9/+4
+9/-5
```
Números mistos:
São iniciados por um número inteiro (com ou sem sinal) seguido imediatamente pelo sinal de adição `+` seguido imediatamente por uma fração. Exemplo de números mistos aceitos:
```
2+3/5
2+7/+1
2+7/-1
2+-7/1 
2+-7/-1
-2+3/5
-2+7/+1
-2+7/-1
-2+-7/1 
-2+-7/-1  
```
Exemplo de números mistos com sintaxe incorreta e portanto não são aceitos (para evitar confusão):
```
2-7/1
2-7/-1
```
Valores hexadecimais: São iniciados pelos caractere `$` seguidos pelo valor usando dígos hexadecimais (a-f0-9).
Exemplos válidos:
```
$DEADBEEF
$DED0FEDE
$bebacafe
$BeBaC0cA
```
Há também dois literais booleanos: "sim" e "não" (usados principalmente em retornos de funções booleanas). Veremos eles apenas mais tarde. De forma simplificada o literal `sim` tem o valor numérico 1 e o literal `não` tem o valor numérico 0. 

Muito bem. 

A sintaxe para declaração de variáveis globais seguido de sua inicialização é a seguinte:
artigo_definido nome_da_variável_global (`é`|`são`) artigo_indefinido tipo_da_variável_global `igual a` valor literal ponto_final
Exemplo de declarações de variáveis globais seguidos de inicialização:
```
A raiz de dois é uma fração igual a 99/70.
O número pi é uma fração igual a 355/113.
O servidor SMTP é uma string igual a "localhost".
As aspas duplas são um byte igual a 34.
O texto CRLF é um texto hexadecimal igual a $0D0A.
O sinalizador de problemas é um sinalizador igual a 0. [sinalizador corresponde a um tipo booleano]


O servidor deve ser capaz de inferir automaticamente o tipo de uma variável global. 
Por isso, as declarações a seguir:
```
O maior número é um número igual a 2147483647.
O número pi é uma fração igual a 355/113.
O servidor SMTP é uma string igual a "localhost".
As aspas duplas são um byte igual a 34.
O texto CRLF é um texto hexadecimal igual a $0D0A.
O sinalizador de problemas é um sinalizador igual a 0. 
```
podem ser abreviadas para
```
O maior número é 2147483647.
O número pi é 355/113.
O servidor SMTP é "localhost".
As aspas duplas são 34.
O texto CRLF é $0D0A.
O sinalizador de problemas é 0.
````
A sintaxe basicamente é:
```
artigo_definido nome_da_variável_global (`é`|`são`) valor_literal ponto_final
```
Perceba que essa declaração abreviada introduziu uma possível ambiguidade na inferição de tipos. 
Como o servidor não possui mais o nome do tipo para determinar seu tipo, ele deve inferir o tipo a partir do valor literal.
Porém no caso da variável global "aspas duplas" (cujo valor de inicialização é 34, mesmo formato de um número literal) e também no caso da variável global "sinalizador de problemas" (cujo valor de inicialização é 0, mesmo formato de um número literal), isso pode causar confusão (afinal de contas os tipos originais eram "byte" e "sinalizador"). Não é preciso criar nenhuma função mirabolante para resolver esse problema.
Basicamente, se o programador não especificou o tipo da variável global e a inicializou com um valor literal que corresponde exatamente à definição de número inteiro, então o tipo inferido também deverá ser "número" (assim como já ocorre com a declaração da variável global "maior número"), assim evitamos possíveis confusões futuras. 