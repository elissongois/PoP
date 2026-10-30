# Tipos

Este documento reúne a sintaxe para declarar tipos, estruturas, listas, ponteiros e unidades de medida, além das regras de campos e das exceções de identificação. Os nomes de tipos seguem as regras gerais de identificadores descritas em [Símbolos.md](Símbolos.md).

## Forma geral de uma declaração

Uma declaração de tipo começa com um artigo indefinido, seguido pelo nome do tipo, por `é` ou `são`, pela definição e por um ponto final:

```pop
<artigo> <nome do tipo> é <definição>.
<artigo> <nome do tipo> são <definição>.
```

Os artigos são `um`, `uma`, `uns` e `umas`. Formas abrangentes de pronomes demonstrativos também podem ocupar essa posição conforme as regras gerais de determinantes da linguagem.

`é` e `são` introduzem a definição. A forma usada depende da construção e da expressão de escala; por exemplo, uma definição simples usa `é`, enquanto uma razão de escala pode usar `são`.

### O que é a definição

A `definição` é a parte da declaração que vem depois de `é` ou `são`. Ela informa qual tipo existente serve de base ou descreve a forma, o conteúdo ou a escala do novo tipo. Não é o nome do tipo que está sendo declarado.

As definições podem assumir estas formas:

| Forma da definição | O que declara | Exemplo |
|---|---|---|
| Tipo base | Deriva o novo tipo de um tipo já definido | `Um caractere é um byte.` |
| Estrutura | Agrupa campos ou reserva um tamanho fixo | `Uma pessoa é uma estrutura com ...` / `Um ponteiro é uma estrutura com 4 bytes.` |
| Lista | Declara uma lista de elementos ou campos | `Um polígono é uma lista com uns vértices.` |
| Ponteiro | Declara um ponteiro genérico ou o tipo apontado | `Um endereço de byte é um ponteiro para um byte.` |
| Escala | Relaciona uma unidade a um tipo base por uma razão | `Um pixel são 15 twips.` |

Por exemplo, em `Um caractere é um byte.`, `caractere` é o nome declarado e `um byte` é sua definição (o tipo base). Em `Uma pessoa é uma estrutura com ...`, a definição começa em `uma estrutura com` e inclui os campos até o ponto final. As regras específicas de cada forma estão nas seções correspondentes abaixo.

O ponto final encerra a declaração, inclusive quando a definição ocupa várias linhas:

```pop
Um nome é uma string.
```

Palavras-chave e identificadores não diferenciam maiúsculas de minúsculas, exceto dentro de strings e comentários.

## Nomes de tipos

O nome do tipo pode ser simples ou composto. Espaços e alguns símbolos fazem parte de nomes compostos:

```pop
Uns bytes# são um número.
Um grupo data/hora de criação é uma string.
Uma word big-endian unsigned é uma estrutura com 2 bytes.
Um In_Addr é uma estrutura com 4 bytes.
```

Os caracteres permitidos, limitados, reservados e não permitidos seguem [Símbolos.md](Símbolos.md). Em resumo:

- Os caracteres reservados listados são `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]` e `'`.
- As vogais `A`, `E`, `O`, `a`, `e`, `o`, `À`, `É`, `é` e `à` têm função sintática quando isoladas, mas podem aparecer em nomes compostos.
- Espaços, números, `/` e hífen aparecem em nomes como `data/hora`, `ponto 3D` e `big-endian`.
- Símbolos como `#`, `&`, `_` e `@` podem fazer parte de identificadores, como em `bytes#`, `ponto&vírgula` e `In_Addr`.
- Os caracteres reservados não podem ser usados livremente dentro de nomes; pontuação como `.` encerra a declaração, e vírgulas separam campos.
- Caracteres especiais permitidos não podem ficar diretamente adjacentes a outros caracteres especiais.
- Alguns caracteres, como `!`, `*`, `?`, `{` e `}`, não são permitidos em identificadores.
- Números podem compor nomes, inclusive no início conforme a regra de nomes de tipos. Em uma declaração de campo, porém, uma expressão como `3 bytes` é reconhecida como uma quantidade de bytes, não como um nome de campo.

O hífen aparece tanto na lista de reservados quanto na regra de caracteres numéricos de [Símbolos.md](Símbolos.md); os exemplos de nomes compostos, como `big-endian`, demonstram seu uso nesse contexto.

Aspas simples podem delimitar palavras reservadas ou trechos que precisam ser lidos literalmente, como em `'A' maiúscula` e `'número um'`. Aspas simples não são um caractere comum de identificador.

## Tipos primitivos e derivação

Há dois tipos primitivos:

| Tipo | Natureza |
|--------|---|
| `byte` | Escalar de 8 bits |
| `estrutura` | Tipo composto |

Os demais tipos são derivados de um tipo primitivo ou de outro tipo já definido. A definição simples usa o artigo indefinido antes do tipo base:

```pop
Um caractere é um byte.
Uma letra é um caractere.
```

Uma cadeia de derivações pode ter vários níveis. Uma estrutura derivada herda os campos do tipo base e pode adicionar campos:

```pop
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.

Um ponto 3D é um ponto com
  Um número denominado Z.
```

O tipo base precisa estar definido antes de ser usado. Tipos primitivos não são redefinidos. Tipos derivados podem servir de base para novos tipos; tipos derivados de estruturas herdam sua estrutura. Campos herdados não devem ser redefinidos com outro nome ou tipo.

## Estruturas

Uma estrutura agrupa campos, cujas formas de declaração são descritas abaixo.

Uma declaração com campos tem a forma geral:

```pop
<artigo> <nome> é uma estrutura com
  <campo>,
  <campo> e
  <campo>.
```

Os campos podem ser separados por `e`, `ou` ou vírgula. O último campo termina com ponto final. As palavras `e` e `ou` funcionam como separadores, não como parte dos nomes.

### Campos nomeados e nomes inferidos

Um campo pode declarar seu nome com `denominado`, como nesta estrutura:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

Se `denominado <nome>` for omitido, o campo recebe como nome a expressão de tipo declarada:

```pop
Uma pessoa é uma estrutura com
  Uma string e
  Um número.
```

Isso equivale, para fins de nomeação, a:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada string e
  Um número denominado número.
```

Os nomes dos campos de uma estrutura precisam ser únicos, sejam explícitos ou inferidos. Portanto, campos repetidos com o mesmo tipo e sem nome explícito geram nomes repetidos e devem produzir um diagnóstico:

```pop
Um número é uma estrutura com
  Um byte,
  Um byte,
  Um byte e
  Um byte.
```

Nesse exemplo, todos os campos seriam inferidos como `byte`. Para evitar a colisão, use nomes explícitos ou apelidos distintos.

### Apelidos de tipos em campos

Uma expressão de tipo usada como apelido pode incluir palavras antes do nome do tipo base. O campo mantém o nome/apelido usado na declaração, enquanto o tipo base é identificado pela parte final da expressão:

```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte e
  Um quarto byte,
  Uma word de ordem inferior sob o primeiro byte e
  Uma word de ordem superior sob o terceiro byte.
```

`primeiro byte`, `segundo byte`, `terceiro byte` e `quarto byte` são nomes/apelidos distintos; o tipo base de cada campo é `byte`.

Para identificar o tipo base, o compilador testa a expressão completa e, se não encontrar um tipo correspondente, remove recursivamente os termos mais à esquerda até encontrar um nome de tipo:

```text
primeiro byte
→ byte
```

O primeiro termo não é tratado automaticamente como tipo base. Por exemplo, para `word de ordem inferior`, as tentativas são:

```text
word de ordem inferior
→ de ordem inferior
→ ordem inferior
→ inferior
```

Mesmo que `word` seja um tipo conhecido, ele não é selecionado apenas por aparecer no início da expressão. Se nenhuma tentativa corresponder a um tipo definido, a declaração deve gerar um diagnóstico.

### Campos de tamanho em bytes

Uma quantidade seguida de `bytes` pode declarar um campo de tamanho fixo:

- Sem nome, reserva espaço sem associá-lo a um campo (preenchimento/padding).
- Com `denominado <nome>`, declara uma sequência de bytes com esse nome.

Exemplos: `3 bytes` reserva espaço sem nome; `32 bytes denominados nome do dispositivo` declara um campo com esse nome.

Uma estrutura inteira também pode ser delimitada por tamanho, sem listar campos:

```pop
Um ponteiro é uma estrutura com 4 bytes.
Uma word é uma estrutura com 2 bytes.
```

### Campos sobrepostos

`sob <campo>` indica que o campo compartilha a posição de memória do campo indicado. O campo de referência precisa ser nomeado:

O exemplo de `número` na seção [Apelidos de tipos em campos](#apelidos-de-tipos-em-campos) demonstra duas words sobrepostas aos bytes. Isso permite representar uma união: os campos ocupam regiões de memória compartilhadas. `sob` não é um separador; faz parte da declaração do campo que vem antes dele.

## Referenciamento, observações e comentários em campos

### Referência em campos

O qualificador `(referência)` marca o campo como ponteiro em vez de valor incorporado. Esse campo não é desalocado automaticamente junto com a estrutura; o gerenciamento da memória fica a cargo do programa:

```pop
Uma árvore é uma estrutura com
  Um número denominado chave,
  Uma árvore denominada esquerda (referência) e
  Uma árvore denominada direita (referência).
```

Sem `(referência)`, o campo é incorporado à estrutura e segue o gerenciamento automático aplicável ao tipo.


`(referência)` é o único qualificador parentético com efeito semântico descrito aqui. Outros conteúdos entre parênteses são documentais e ignorados:

Os parênteses devem estar balanceados e qualificadores parentéticos não podem ser aninhados. As validações documentadas apontam:

- Código de erro `#009`: falta o parêntese de fechamento `)`.
- Código de erro `#010`: falta o parêntese de abertura `(`.


### Observações entre colchetes

Trechos entre colchetes podem acompanhar um tipo ou um campo para documentação, restrições ou detalhes de implementação. São ignorados pelo compilador:

```pop
Um retângulo é uma estrutura com
  Um número [em pixels] denominado largura e
  Um número [em pixels] denominado altura.
```

```pop
Uma word [unsigned] denominada valor.
Uma coordenada denominada coordenada X, [left]
```

Os colchetes podem também indicar uma observação final após a declaração do campo:

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X, [left] e
  Uma coordenada denominada coordenada Y. [top]
```

Não confunda essas observações com `sob`, que altera a sobreposição de memória, nem com `(referência)`, que tem efeito semântico.

### Comentários

Comentários de linha usam `\\`. As observações entre colchetes descritas acima são documentação de campos, não comentários de linha:

```pop
Uma word é uma estrutura com 2 bytes. \\ comentário de linha
```

## Ponteiros

Uma declaração de ponteiro pode ser genérica ou indicar o tipo apontado:

```pop
Um ponteiro genérico é um ponteiro.
Um endereço de byte é um ponteiro para um byte.
```

`que aponta` pode aparecer opcionalmente entre `ponteiro` e `para`:

```pop
Um caractere inicial é um ponteiro que aponta para um byte.
```

## Listas

Uma lista com campos declara o conteúdo dos elementos e segue as regras de campos das estruturas:

```pop
Um polígono é uma lista com uns vértices.

Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.
```

Uma lista estruturada é duplamente encadeada; sua representação usa referências anterior e posterior. Também é possível declarar um tipo como ponteiro para uma lista estruturada:

```pop
Uma lista é um ponteiro para uma lista estruturada.

Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.
```

O plural do tipo pode ser usado para declarar o cabeçalho/conjunto da lista:

```pop
Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.
```

## Tipos escalares e unidades de medida

Um tipo escalar associa uma escala numérica a um tipo base numérico. A escala pode ser um número inteiro ou uma fração:

```pop
Um pixel são 15 twips.
Um centímetro são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

As formas `é` e `são` são usadas conforme a expressão de escala. A expressão `[composto de]` ou `[composta de]` pode ser incluída como explicação:

```pop
Uma altura é [composta de] uns twips.
Um ângulo é [composto de] uns graus.
```

Razões e escalas destinam-se a tipos numéricos:

```pop
Um milissegundo é um número.
Um segundo são 1000 milissegundos.
Um minuto são 60 segundos.
```

## Plural dos tipos

O plural do nome de um tipo é formado automaticamente palavra por palavra. Preposições e palavras invariáveis permanecem inalteradas; assim, após definir `Um contato`, pode-se usar `uns contatos`.

As regras e exceções documentadas são:

| Forma singular | Formação do plural | Exemplos |
|---|---|---|
| Exceções | Forma especial | `caráter` → `carateres`; `júnior` → `juniores`; `sênior` → `seniores` |
| Advérbios invariáveis | Não varia, exceto `mal` | `muito`, `pouco`, `mais`, `menos`, `bastante`, `quase`, `demais`, `bem`, `melhor`, `pior`; `mal` → `males` |
| Terminação `-ão` | Em geral `-ões`; algumas `-ãos` ou `-ães` | `opinião` → `opiniões`; `órgão` → `órgãos`; `pão` → `pães` |
| Terminação `-m` | `-ns` | `homem` → `homens` |
| Terminação `-al` | `-ais` | `animal` → `animais` |
| Terminação `-el` | `-eis` ou `-éis`, conforme a acentuação | `nível` → `níveis`; `papel` → `papéis` |
| Terminação `-il` | `-is` nas oxítonas; `-eis` nas paroxítonas | `fuzil` → `fuzis`; `fóssil` → `fósseis` |
| Terminação `-ol` | `-ois` ou `-óis`, conforme a acentuação | `álcool` → `álcoois`; `lençol` → `lençóis` |
| Terminação `-ul` | `-uis`; exceção indicada | `azul` → `azuis`; `cônsul` → `cônsules` |
| Terminação `-r`, `-s` ou `-z` | Acrescenta `-es` | `flor` → `flores`; `país` → `países`; `luz` → `luzes` |
| Demais terminações | Acrescenta `-s` | regra padrão |

Em nomes compostos, pluralize palavra por palavra, preservando a palavra que vier após a preposição `de`:

```text
número de telefone → números de telefone
```

# Conversão de tipos

Ao lidar com entrada e saída de dados, muitas vezes precisamos formatá-los para que sua exibição seja efetuada corretamente.

Em Português Puro, a conversão de dados é feita de forma explícita. Exemplo:

```
Converta o número para uma string denominada valor.
Converta a string para um número denominado quantidade.
```

Apesar disso é possível forçar o compilador a tratar um tipo de dado como sendo outro tipo. Para fazer isto é necessário utilizar a expressão `tal como` ou `tal qual`. Exemplos:


```pop
  Atribua o byte à cifra binária tal como [se ele fosse] um byte.
  Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
  Converta o ponteiro para uma string tal qual uma cifra hexadecimal.
  Converta o trecho tal como  uma cifra hexadecimal para um texto hexadecimal.
  Destrinche a variável global tal como [se ela fosse] uma variável.
  Destrinche o campo tal como [se ele fosse] uma variável.
  Disjuncione logicamente o ponteiro tal como [se ele fosse] um número com o número.
  Inicie a folha tal como [se ela fosse] uma folha no modo retrato.
  Redimensione a caixa arredondada tal como [se ela fosse] uma caixa usando a fração.
```


## Exemplos de tipos compostos

```pop
Uma string é uma estrutura com
  Um caractere inicial e
  Um caractere final.

Uma palavra é uma estrutura com
  Um byte inicial e
  Um byte final.

Uma fração é uma estrutura com
  Um número denominado numerador e
  Um número denominado denominador.

Um numeral misto é uma estrutura com
  Um número inteiro e
  Uma proporção e
  Uma fração sob a proporção.

Um sinalizador é uma estrutura com 4 bytes.
```

### Estruturas com bytes reservados e preenchimento

```pop
Um UUID é uma estrutura com
  Um número denominado Data1,
  Uma word denominada Data2,
  Uma word denominada Data3 e
  8 bytes denominados Data4.

Um bloco de texto é uma estrutura com
  Um número denominado tamanho,
  3 bytes e
  Um byte denominado preenchimento.
```
