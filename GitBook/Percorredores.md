# Percorredores

Um "percorredor" é uma estrutura usada para analisar strings (fazer o parsing) . Para entendê-lo, você deve estar familiarizado com o conceito "[strings](/documentacao/tipos-de-dados/strings-e-caracteres.md#strings)" e "[subtextos](/documentacao/tipos-de-dados/strings-e-caracteres/subtextos.md)".

Parsing é o ato de percorrer um bloco de texto, um pedaço de cada vez, onde um pedaço pode ser tão pequeno quanto uma letra ou tão grande quanto o bloco inteiro.&#x20;

Vamos usar a string abaixo como nosso bloco de texto de exemplo:&#x20;

**"The quick brown fox jumps over the lazy dog"**&#x20;

Digamos que queremos extrair cada uma das palavras individuais da string acima.&#x20;

As ferramentas que usaremos serão&#x20;

1. o subtexto, e
2. o percorredor

**Um percorredor é definido da seguinte forma:**

```
Um percorredor é uma estrutura com 
  Uma cópia da string original,
  Um segmento final e
  Um segmento inicial.

Uma cópia da string original é um subtexto. 
Um segmento inicial é um subtexto. 
Um segmento final é um subtexto.
```

Quando você "lançar" um subtexto na string acima, o compilador irá definir o caractere inicial do subtexto como **"T"** (da palavra **The**) e o caractere inicial como **"g"** (da palavra **dog**).

Ao usar o comando:

`"Lance um percorredor sobre o subtexto"`

Os membros do percorredor ficarão assim:

* cópia da string original = "**The quick brown fox jumps over the lazy dog"**
* segmento inicial = ""
* segmento final = "**The quick brown fox jumps over the lazy dog"**

A partir daí podemos invocar a rotina

`Mova o percorredor (strings com aspas).`

Neste momento, os membros do percorredor ficarão assim:

* cópia da string original = "**The quick brown fox jumps over the lazy dog"**
* segmento inicial = "**The**"
* segmento final = "**quick brown fox jumps over the lazy dog"**

Se repetirmos o comando, os membros do percorredor ficarão assim:

* cópia da string original = "**The quick brown fox jumps over the lazy dog"**
* segmento inicial = "**quick**"
* segmento final = "**brown fox jumps over the lazy dog"**

Perceba que o "**The**" foi "removido" do segmento inicial.

Outra rotina útil que serve para percorrer uma string caractere a caractere é:

`Avance o percorredor.`

Digamos que o nosso percorredor esteja assim:

* cópia da string original = "**The quick brown fox jumps over the lazy dog"**
* segmento inicial = ""
* segmento final = "**The quick brown fox jumps over the lazy dog"**

Ao usar a rotina "avance um percorredor", nosso percorredor ficará assim:

* cópia da string original = "**The quick brown fox jumps over the lazy dog"**
* segmento inicial = **"T"**
* segmento final = "**he quick brown fox jumps over the lazy dog"**

Importante:

Subtextos contém ponteiros para os caracteres então precisamos usar a seguinte sintaxe para obter o valor do dado em si:

`O`` `*`conteúdo`*` ``deste`` `*`caractere inicial`*` ``deste`` `*`segmento inicial`*` ``deste`` `*`percorredor`*`.`

É um tanto quanto prolixo, mas não há outra forma.