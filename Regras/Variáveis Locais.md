# Variáveis Locais - Português Puro
Variáveis locais são declaradas após um artigo indefinido dentro de rotinas ou funções.

Exemplos:
```pop
Ative um sinalizador denominado status.
Limpe uma string denominada nome.
Esvazie um ponteiro denominado endereço.
Pinte um número denominado valor.
Imprima uma folha denominada impressão.
Desenhe uma linha denominada traço.
```

Caso a palavra-chave "denominado" e suas variações sejam omitidas, o nome da variável será inferido a partir do tipo fornecido.

Exemplos:
```pop
Ative um sinalizador. // nome da variável: sinalizador
Limpe uma string. // nome da variável: string
Esvazie um ponteiro. // nome da variável: ponteiro
Pinte um número. // nome da variável: número
Imprima uma folha. // nome da variável: folha
Desenhe uma linha. // nome da variável: linha
```

Também é possível inicializar a variável com um valor

Exemplos:
```pop
Atribua 10 para um número denominado contagem.
Atribua "João" para uma string denominada nome.
Atribua 355/113 para uma fração denominada pi.
Atribua 1 para um sinalizador denominado status.
```

Caso a palavra-chave "denominado" e suas variações sejam omitidas, o nome da variável será inferido a partir do tipo fornecido.

Exemplos:
```pop
Atribua 10 para um número.
Atribua "João" para uma string.
Atribua 355/113 para uma fração.
Atribua 1 para um sinalizador.
```

## Início
* A instrução se inicia com um comando de atribuição ou alocação.

## Obrigatório
* **Comando**: `Atribua` ou `Aloque memória`
* **Valor ou ação**: O valor a ser atribuído ou a ação de alocação
* **Preposição**: `para` ou `em`
* **Artigo indefinido**: Indica que é uma variável local (não global)
* **Tipo ou nome**: Identificador do tipo ou nome da variável
* **Fim**: Ponto final `.`

## Opcional
* **Palavra-chave `denominado`**: Permite nomear explicitamente a variável
* **Nome da variável**: Identificador personalizado quando usado `denominado`

## Artigo Indefinido
* Pode ser `um`, `uma`, `uns` ou `umas`. Atualmente, pronomes demonstrativos indeterminados [abrangentes] são considerados artigos indefinidos. Veja a seção [Pronomes demonstrativos](#pronomes-demonstrativos). [colocar um link aqui quando o arquivo sobre pronomes demonstrativos estiver pronto]

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

## Escopo
* Variáveis locais são declaradas dentro de rotinas
* São acessíveis apenas dentro do escopo da rotina onde foram declaradas
* A declaração ocorre no momento da primeira atribuição ou alocação

## Formas de Declaração

### 1. Com Inferência de Tipo (mais comum)
* O tipo é inferido a partir de uma palavra-chave no nome da variável
* **Sintaxe**: `Atribua <valor> para <artigo indefinido> <nome-com-tipo>.`
* **Tipos inferíveis**: `número`, `string`, `fração`, `sinalizador`, `caractere`, `byte`, etc.

### 2. Com Nome Explícito
* O tipo é definido explicitamente e a variável é nomeada
* **Sintaxe**: `Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.`

### 3. Com Alocação de Memória
* Usada para tipos complexos (estruturas, listas)
* **Sintaxe**: `Aloque memória para <artigo indefinido> <tipo>.`

## Uso Posterior
* Após a declaração, a variável local é referenciada usando um **artigo definido** (`o`, `a`, `os`, `as`)
* Exemplo: Após `Atribua 10 para um número`, usa-se `o número`

## Sintaxe

### Forma com inferência de tipo
```
Atribua <valor> para <artigo indefinido> <nome-com-tipo>.
```

### Forma com nome explícito
```
Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.
```

### Forma com alocação
```
Aloque memória para <artigo indefinido> <tipo>.
```

## Exemplos

### Variável com inferência de tipo
```pop
\ O tipo 'número' é inferido da palavra "número"
Atribua 10 para um número.

\ O tipo 'string' é inferido da palavra "string"
Atribua "João" para uma string.

\ O tipo 'fração' é inferido da palavra "fração"
Atribua 355/113 para uma fração.

\ O tipo 'sinalizador' é inferido da palavra "sinalizador"
Atribua sim para um sinalizador.
```

### Variável com nome explícito
```pop
Atribua 18 para um número denominado idade.
Atribua "Maria" para uma string denominada nome.
Atribua 3/4 para uma fração denominada proporção.
```

### Variável com alocação de memória
```pop
\ Para estruturas
Aloque memória para uma pessoa.
Atribua "João" para o nome desta pessoa.

\ Para listas
Aloque memória para um contato.
Acrescente o contato na agenda telefônica.
```

### Uso posterior com artigo definido
```pop
\ Declaração
Atribua 10 para um contador.

\ Uso posterior
Adicione 5 para o contador.
Se o contador for maior do que 10, pare.
```

### Variáveis em laços
```pop
Atribua 1 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que 10, pare.
Reitere.
```

### Variáveis com tipos complexos
```pop
\ Declaração de uma estrutura local
Aloque memória para uma pessoa.
Atribua "João Silva" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.

\ Declaração de uma lista local
Atribua nulo para um contato.
Itere.
  Obtenha um contato desde a agenda telefônica.
  Se o contato for nulo, pare.
  Escreva o nome deste contato para StdOut.
Reitere.
```

## Observações Importantes

1. **Artigo indefinido vs definido**: 
   * Artigo **indefinido** (`um`, `uma`, `uns`, `umas`) = declaração de variável **local**
   * Artigo **definido** (`o`, `a`, `os`, `as`) = referência a variável já declarada

2. **Inferência de tipo**: 
   * A linguagem identifica o tipo pela presença de palavras-chave no nome
   * Palavras como `número`, `string`, `fração`, `sinalizador` indicam o tipo
   * Exemplo: `um número total` é do tipo `número`

3. **Escopo limitado**: 
   * Variáveis locais existem apenas dentro da rotina onde foram declaradas
   * Não são acessíveis fora da rotina

4. **Primeira atribuição**: 
   * A declaração ocorre na primeira vez que a variável é mencionada com artigo indefinido
   * Não é necessário declarar separadamente antes de usar

5. **Passagem por referência**: 
   * Todos os parâmetros em rotinas são passados por referência
   * Alterar um parâmetro dentro de uma rotina **altera a variável original**
   * Use `Preserve` para criar uma cópia local e evitar modificação

6. **Nomes descritivos**: 
   * Português Puro incentiva nomes longos e descritivos em linguagem natural
   * Exemplo: `um número de tentativas`, `uma string de boas-vindas`

7. **Pluralização automática**: 
   * O compilador gera automaticamente o plural
   * `um contador` → `os contadores`
   * `uma pessoa` → `as pessoas`

## Diferenças entre Variáveis Locais e Globais

| Aspecto              | Variáveis Locais             | Variáveis Globais          |
|----------------------|------------------------------|----------------------------|
| **Artigo**           | Indefinido (`um`, `uma`)     | Definido (`o`, `a`)        |
| **Escopo**           | Dentro da rotina             | Todo o módulo              |
| **Declaração**       | Na primeira atribuição       | Fora de rotinas            |
| **Sintaxe**          | `Atribua valor para um tipo` | `O nome é um tipo`         |
| **Acesso posterior** | Com artigo definido          | Sempre com artigo definido |

## Mapeamento para Langium

```langium
DeclaracaoLocal:
    comando=ComandoDeclaracao valor=Expressao preposicao=('para'|'em') 
    artigo=ArtigoIndefinido tipo=TipoOuNome 
    (denominacao?='denominado' nome+=IDVariavel+)? 
    '.';

ComandoDeclaracao:
    'Atribua' | 'Aloque' 'memória';

TipoOuNome:
    tipo+=IDVariavel+;

ArtigoIndefinido:
    'um' | 'uma' | 'uns' | 'umas' | 
    'esse' | 'essa' | 'esses' | 'essas' |
    'aquele' | 'aquela' | 'aqueles' | 'aquelas' |
    'certo' | 'certa' | 'certos' | 'certas' |
    'determinado' | 'determinada' | 'determinados' | 'determinadas';

// Terminal para identificadores de variáveis (permite símbolos especiais)
terminal IDVariavel:
    /[_a-zA-Zà-úÀ-Ú#\/'&][_\w_à-úÀ-Ú#\/-&]*/;
```

### Notas sobre o mapeamento:
* `IDVariavel` permite `#`, `/`, `-`, `_`, `'`, `&` em nomes, dentre outros símbolos permitidos (conferir a lista completa de símbolos permitidos no arquivo [Símbolos.md](Símbolos.md))
* A palavra-chave `denominado` é opcional
* Artigos indefinidos incluem pronomes demonstrativos abrangentes
* O comando pode ser `Atribua` ou `Aloque memória`
* Preposições aceitas: `para` ou `em`

```pop

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