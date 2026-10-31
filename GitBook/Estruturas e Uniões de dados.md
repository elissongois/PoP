# Estruturas e Uniões de dados

Uma estrutura (também chamada de registro) é um [tipo](https://wiki.freepascal.org/Type) de dados altamente estruturado. Eles são amplamente usados  para agrupar itens relacionados.

Em português Puro,  [estruturas](https://en.wikipedia.org/wiki/Record_\(computer_science\)) são [estruturas de dados](https://pt.wikipedia.org/wiki/Estrutura_de_dados) que permitem que você defina um novo [tipo de dados](https://pt.wikipedia.org/wiki/Tipo_de_dado) personalizado que contém um conjunto de campos (ou membros), onde cada campo pode ter um tipo de dado diferente. Essa é uma parte fundamental da linguagem, pois permite criar estruturas de dados complexas para representar informações de maneira organizada. Aqui estão alguns detalhes adicionais.

Enquanto estruturas de dados simples como [vetores](https://wiki.freepascal.org/Array) or conjuntos consistem de elementos do mesmo tipo, uma estrutura pode consistir de elementos de diferentes tipos e pode ser muito complexo. Cada parte separada de uma estrutrua é chamada de *campo*.

**Declaração de Estruturas:** A sintaxe para declarar uma estrutura em Português Puro é a seguinte:

<mark style="color:blue;">**`<artigo indefinido>`**</mark><mark style="color:purple;">**`<nome do tipo>`**</mark>*<mark style="color:orange;">**`<é uma estrutura com>`**</mark>*<mark style="color:red;">**`<lista de campos>`**</mark><mark style="color:$info;">**<**</mark><mark style="color:$info;">ponto final></mark>

Exemplo:

```
Uma string é uma estrutura com 
  Um caractere inicial e 
  Um caractere final.
```

Uma estrutura vazia ocupa **0 bits** na memória, mas você pode definir estruturas de qualquer comprimento adicionando "campos" ou "membros" ao protótipo da estrutura. Esses campos podem ser de qualquer tipo.

O tamanho da estrutura é, em via de regra, igual à soma do tamanho de seus campos.

A estrutura acima contém 02 membros do tipo ponteiro: o **caractere inicial** e o **caractere final**. Perceba que os campos não foram nomeados. Este tipo de declaração só funcionará se estes tipos já estiverem declarados previamente (caso contrário o compilador emitiria uma mensagem de erro informando que o tipo de dado declarado não foi reconhecido).&#x20;

É recomendado nomear os campos sempre que possível.&#x20;

A sintaxe geral é para declaração de campos nomeados é:

<mark style="color:red;">**`<artigo indefinido>`**</mark> <mark style="color:purple;">**`<tipo>`**</mark> <mark style="color:blue;">**`<denominado>`**</mark>**` `**<mark style="color:green;">**`<nome>`**</mark>**`<separador de campo>`**

Onde \<separador de campo> pode corresponder a um "e", "," ou um ponto final no caso do último campo da estrutura.

Exemplos:

```
Uma string é uma estrutura com 
  Um ponteiro denominado caractere inicial e 
  Um ponteiro denominado caractere final.
```

```
Um DEVMODE é uma estrutura com
\ Contém informações sobre a inicialização de uma impressora ou monitor de vídeo.
  32 bytes denominados dmDeviceName,
  Uma word denominada dmSpecVersion,
  Uma word denominada dmDriverVersion,
  Uma word denominada dmSize,
  Uma word denominada dmDriverExtra,
  Um número denominado dmFields,
  Uma word denominada dmOrientation,
  Uma word denominada dmPaperSize,
  Uma word denominada dmPaperLength,
  Uma word denominada dmPaperWidth,
  Uma word denominada dmScale,
  Uma word denominada dmCopies,
  Uma word denominada dmDefaultSource,
  Uma word denominada dmPrintQuality,
  Uma word denominada dmColor,
  Uma word denominada dmDuplex,
  Uma word denominada dmYResolution,
  Uma word denominada dmTTOption,
  Uma word denominada dmCollate,
  32 bytes denominados dmFormName,
  Uma word denominada dmLogPixels,
  Um número denominado dmBitsPerPel,
  Um número denominado dmPelsWidth,
  Um número denominado dmPelsHeight,
  Um número denominado dmDisplayFlags,
  Um número denominado dmDisplayFrequency,
  Um número denominado dmICMMethod,
  Um número denominado dmICMIntent,
  Um número denominado dmMediaType,
  Um número denominado dmDitherType,
  Um número denominado dmReserved1,
  Um número denominado dmReserved2.
```

## Uniões de dados

Uma união é um valor que pode ter várias representações ou formatos dentro da mesma posição na memória.

**É possível criar uma "**[**união**](https://en.wikipedia.org/wiki/Union_type)[ **de dados**](https://en.wikipedia.org/wiki/Union_type)**" utilizando a palavra-chave&#x20;**<mark style="color:red;">**sob**</mark>**.**

Exemplo:

```
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte,
  Um quarto byte,
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte.
  
Uma word é uma estrutura com
  Um byte inicial e 
  Um byte final.
```

A estrutura <mark style="color:blue;">`número`</mark>, será armazenada da seguinte forma:<br>

<figure><img src="https://803735286-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FW9DLU1YMdC8rZiJDCRdo%2Fuploads%2FZ0aBAV1NIaNApivMAURQ%2Fimage.png?alt=media&token=75c82a08-ff10-4453-bf7c-ebf4fe822c47" alt=""><figcaption></figcaption></figure>

Sendo que cada <mark style="color:blue;">`word`</mark> será armazenada da seguinte forma:

<figure><img src="https://803735286-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FW9DLU1YMdC8rZiJDCRdo%2Fuploads%2FI83jvmicbdanXcpBBMHe%2Fimage.png?alt=media&token=d946c149-9bbf-481c-a148-ee1c1d87c830" alt=""><figcaption></figcaption></figure>