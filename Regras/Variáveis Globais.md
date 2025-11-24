# Variáveis Globais - Português Puro

## Início
* A instrução se inicia com um artigo definido (`O`, `A`, `Os`, `As`).

## Obrigatório
* **Artigo definido**: Indica que é uma variável global (não local).
* **Nome da variável**: Identificador que segue o artigo definido.
* **Palavra-chave `é` ou `são`**: Conecta o nome ao tipo/valor.
* **Tipo**: Um artigo indefinido seguido do tipo da variável.
* **Fim**: Ponto final `.`

## Opcional
* **Inicialização**: Pode incluir `igual a` ou `iguais a` seguido do valor inicial.
* **Comentários inline**: Entre `[...]` após o nome ou valor.

## Artigo Definido
* Pode ser `o`, `a`, `os` ou `as`. Atualmente, pronomes demonstrativos determinados são considerados artigos definidos. Veja a seção [Pronomes demonstrativos](#pronomes-demonstrativos). [colocar um link aqui quando o arquivo sobre pronomes demonstrativos estiver pronto  ]

## Nome da variável
* **Caracteres**: Consulte o arquivo [Símbolos.md](Símbolos.md) para a lista completa e detalhada de todos os caracteres.
  * **Caracteres reservados**: Não podem ser usados em nomes de variáveis. Exemplos: `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, `'`
  * **Caracteres limitados**: Têm função sintática quando isolados, mas podem ser aglutinados com outros caracteres. Exemplos:
    * `A`, `E`, `O`, `a`, `e`, `o` (vogais que podem ser artigos ou conjunções quando isoladas)
    * `À`, `É`, `é`, `à` (vogais acentuadas com função sintática)
  * **Caracteres permitidos**: Podem ser usados isolados ou aglutinados em qualquer posição. Exemplos comuns:
    * `#` (cardinal) - ex: `bytes#`
    * `&` (e comercial) - ex: `& comercial`, `ponto&vírgula`
    * `_` (underscore) - ex: `s_byte1`
    * `@` (arroba)
    * Letras (B-Z, b-z exceto vogais limitadas) com ou sem acentos
  * **Caracteres numéricos**: Permitidos em qualquer posição, desde que estejam entre outros caracteres permitidos ou limitados. Exemplos:
    * Espaço (para nomes compostos) - ex: `data hora`
    * `/` (barra) - ex: `data/hora`
    * `-` (hífen) - ex: `big-endian`, `Shift-Out`
    * Números `0-9` - podem aparecer em qualquer posição
  * **Caracteres especiais**: Permitidos em qualquer posição, mas não podem ser precedidos ou sucedidos por outros caracteres especiais. Exemplos: `<`, `=`, `>`, `^`, `|`, `€`, `×`, `÷`
  * **Caracteres não permitidos**: Só podem estar presentes em strings literais ou comentários. Exemplos: `!`, `*`, `?`, `{`, `}`, `ª`, `º`
* **Primeiro caractere**: Qualquer letra (com ou sem acento) ou símbolo permitido (exceto espaço).
* **Case sensitivity**: Insensitive (exceto em strings e comentários).
* **Nomes entre aspas simples**: Usados para delimitar palavras reservadas.
* **Nomes entre colchetes**: Usados para abreviações/siglas - ex: `[SOH]`, `[NULL]`, `[CR]`

## Sintaxe

### Forma básica
```
Artigo_Definido nome_da_variável é Artigo_Indefinido nome_do_tipo.
```

### Com inicialização
```
Artigo_Definido nome_da_variável é Artigo_Indefinido nome_do_tipo igual a valor.
```

### Com comentário
```
Artigo_Definido nome_da_variável [comentário] é Artigo_Indefinido nome_do_tipo igual a valor. \comentário de linha
```

## Exemplos

### Variável simples sem inicialização
```pop
O contador é um número.
A mensagem é uma string.
```

### Variável com inicialização
```pop
O caractere NULL [NULL] é um byte igual a 0. \Null
O sinal de adição é um byte igual a 43.
A próxima letra é uma letra igual a 65.\ Letra A maiúscula, por ser esta a primeira letra.
```

### Variáveis com nomes compostos
```pop
O caractere de início de cabeçalho [SOH] é um byte igual a 1. \Start of Header
O ponto de exclamação é um byte igual a 33.
O número de telefone é uma string.
```

### Variáveis com símbolos especiais
```pop
Uns bytes# são um número.
O grupo data/hora de criação é uma string.
O caractere Shift-Out [SO] é um byte igual a 14.
O & comercial é um byte igual a 38.
O ponto&vírgula é um byte igual a 59.
```

### Variáveis com aspas simples (palavras reservadas)
```pop
A letra 'A' maiúscula é um byte igual a 65.
O 'A' maiúsculo é um byte igual a 65.
O número 'um' é um byte igual a 49.
O 'número um' é um byte igual a 49.
A letra 'E' maiúscula é um byte igual a 69.
O 'e' minúsculo é um byte igual a 101.
```

### Variáveis com números no nome
```pop
O número zero é um byte igual a 48.
O número dois é um byte igual a 50.
O s_byte1 é um byte.
```

### Variáveis com estruturas inline
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

### Variáveis com valores hexadecimais longos
```pop
A tabela ascii é uma tabela de tradução igual a $000102030405060708090A0B0C0D0E0F...FDFEFF.
O som de aviso é uma wave igual a $524946463A02000057415645666D74201200000001000100....
A fonte osmosiana é um texto hexadecimal igual a $00010000000B0080000300304F532F32BB41B2760000013800000056....
```

### Variáveis com frações como valores
```pop
A raiz de dois é uma fração igual a 2147483647/1518500249.
A raiz de três é uma fração igual a 2147483647/1239850262.
O número pi é uma fração igual a 2147483647/683565275.
A proporção dourada é uma fração igual a 1618033988/1000000000.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Variáveis com sintaxe opcional
```pop
O tpi [quantidade de twips por polegada] é [composta de] uns twips igual a 1440.
Uma coordenada é [composta de] uns twips.
O tamanho do quadrado é [igual a] uns twips.
A stack é [composta de] uns elementos das stacks.
```

## Observações Importantes

1. **Artigo definido vs indefinido**: 
   * Artigo **definido** (`O`, `A`, `Os`, `As`) = variável **global**
   * Artigo **indefinido** (`um`, `uma`, `uns`, `umas`) = tipo ou variável **local**

2. **Abreviações entre colchetes**: Usadas para siglas e códigos (ex: `[NULL]`, `[SOH]`, `[CR]`)

3. **Comentários**:
   * Em Linha: entre `[...]`. Não aceita quebra de linhas. Também é chamado de `Observação` no Código-Fonte do Compilador.
   * Fim de Linha: após `\` até a quebra de linha.

4. **Símbolos em nomes**: Permitem maior expressividade e clareza (ex: `&`, `/`, `-`, `#`)

5. **Aspas simples**: Delimitam palavras que seriam reservadas ou ambíguas (ex: `'A'`, `'um'`, `número 'um'`)

6. **Pluralização**: O compilador gera automaticamente o plural
   * `O caractere` → `Os caracteres`
   * `A letra` → `As letras`

7. **Inicialização**: Opcional, mas comum para constantes e valores padrão

8. **Nomes descritivos**: Português Puro incentiva nomes longos e descritivos em linguagem natural

9. **Estruturas inline**: Variáveis globais podem ser definidas como estruturas sem declarar o tipo separadamente
   * Sintaxe: `O nome é uma estrutura com campos...`
   * Útil para variáveis únicas que não precisam de reutilização de tipo

10. **Valores hexadecimais**: Podem ser extremamente longos (milhares de caracteres)
    * Prefixo: `$` indica valor hexadecimal
    * Uso: tabelas de tradução, fontes, sons, imagens embutidas
    * Exemplo: `$000102030405...FDFEFF`

11. **Frações como valores**: Expressas diretamente com `/`
    * Sintaxe: `numerador/denominador`
    * Uso: constantes matemáticas, razões de conversão
    * Exemplo: `2147483647/1518500249` (raiz de dois)

12. **Sintaxe opcional**: `[composto de]`, `[composta de]`, `[igual a]` podem ser usados para legibilidade
    * Exemplo: `é [composta de] uns twips`
    * Equivalente a: `são uns twips`

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

### Notas sobre o mapeamento:
* `IDVariavel` permite `#`, `/`, `-`, `_`, `'`, `&` em nomes, dentre outros símbolos permitidos (conferir a lista completa de símbolos permitidos no arquivo [Símbolos](#simbolos))
* Abreviações são opcionais e aparecem entre `[...]`
* `são` e `é` são alternativas (plural/singular)
* `igual` e `iguais` também seguem singular/plural
* Inicialização é opcional

```pop
Função para que se determine se uma string é o início de alguma variável global:
  Se a string for algum artigo definido, diga sim.
  Diga não.


Função para que se determine se uma string é o início de alguma variável:
  Se a string for algum artigo definido, diga sim.
  Diga não.


Função para que se determine se um percorredor está sobre algum indicador de início de variável:
  \ compare com indicador de fim de variável
  Se o segmento inicial deste percorredor for algum sinal de pontuação, diga não.
  Se o segmento inicial deste percorredor for algum símbolo, diga não.
  Se o segmento inicial deste percorredor for algum artigo, diga não.
  Se o segmento inicial deste percorredor for alguma conjunção, diga sim.
  Se o segmento inicial deste percorredor for algum possessivo inglês, diga não.
  Se o segmento inicial deste percorredor for algum verbo, diga sim.
  Se o segmento inicial deste percorredor for algum operador aritmético, diga sim.
  Se o percorredor estiver sobre alguma preposição, diga sim.
  Se o segmento inicial deste percorredor for algum qualificador, diga não.
  Se o segmento inicial deste percorredor for algum valor literal, diga não.
  Se o segmento inicial deste percorredor for uma palavra-chave de designação, diga sim.
  Se o segmento inicial deste percorredor for "então", diga sim.
  Se o segmento inicial deste percorredor for algum operador de atribuição composto, diga sim.
  Se o segmento inicial deste percorredor estiver em branco, diga não.
  Diga sim.

Função para que se determine se um percorredor está sobre algum indicador de fim de variável:
  \ compare com indicador de início de variável
  Se o segmento inicial deste percorredor for algum sinal de pontuação, diga sim.
  Se o segmento inicial deste percorredor for algum símbolo, diga sim.
  Se o segmento inicial deste percorredor for algum artigo, diga sim.
  Se o segmento inicial deste percorredor for alguma conjunção, diga sim.
  Se o segmento inicial deste percorredor for algum possessivo inglês, diga sim.
  Se o percorredor estiver sobre algum possessivo reverso, diga sim. \
  Se o segmento inicial deste percorredor for algum verbo, diga sim.
  Se o segmento inicial deste percorredor for algum operador aritmético, diga sim.
  Se o percorredor estiver sobre alguma preposição, diga sim.
  Se o segmento inicial deste percorredor for algum qualificador, diga sim.
  Se o segmento inicial deste percorredor for algum valor literal, diga sim.
  Se o segmento inicial deste percorredor for uma palavra-chave de designação, diga sim.
  Se o segmento inicial deste percorredor for "então", diga sim.
  Se o segmento inicial deste percorredor for algum operador de atribuição composto, diga sim.
  Se o segmento inicial deste percorredor estiver em branco, diga sim.
  Se o segmento inicial deste percorredor for algum advérbio de negação, diga sim.
  Diga não.

```
