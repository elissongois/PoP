# Listas duplamente vinculadas

Uma lista encadeada ou lista ligada é uma [estrutura de dados](https://pt.wikipedia.org/wiki/Estrutura_de_dados) linear e dinâmica. Ela é composta por vários elementos que estão interligados através de [ponteiros](https://pt.wikipedia.org/wiki/Ponteiro_\(programa%C3%A7%C3%A3o\)), ou seja, cada elemento da lista possui um ponteiro que aponta para o [endereço de memória](https://pt.wikipedia.org/wiki/Endere%C3%A7o_\(mem%C3%B3ria\)) da próxima célula. Desse modo, os elementos da lista não precisam estar em posições contíguas da memória. Isso faz com que a estrutura se torne dinâmica, pois a qualquer momento, é possível incluir uma novo elemento na lista, bastando ajustar os ponteiros das células já existentes, de modo que a nova célula seja inserida na estrutura com êxito, na posição desejada pelo programador.

Você pode declarar listas usando a seguinte sintaxe:

```
A Bíblia é uma lista com uns versos.
Um verso é uma lista com uma string.
```

O compilador irá, internamente, converter as declarações acima, no código abaixo:

```
Uns versos são uma lista com
  Um verso denominado primeiro verso e
  Um verso denominado último verso.
  
Um verso é um ponteiro para uma estrutura de versos.

Uma estrutura de versos é uma estrutura com
  Um verso denominado próximo verso,
  Um verso denominado verso anterior e 
  Uma string.
```

Na Biblioteca padrão existem rotinas diversas para trabalhar com listas.&#x20;

Exemplos:

```
ACRESCENTE uma lista para umas listas. 
ACRESCENTE umas listas para umas outras listas. 
INSIRA uma lista em umas listas APÓS uma outra lista. 
INSIRA umas listas em umas outras listas APÓS uma lista.
INSIRA uma lista em umas listas ANTES DE uma outra lista. 
INSIRA umas listas em umas outras listas ANTES DE uma lista. 
MOVA uma lista de umas listas para outras listas. 
MOVA umas listas para umas outras listas. 
ANTEPONHA uma lista para umas listas. 
ANTEPONHA umas listas para umas outras listas. 
REVERTA umas listas.
REMOVA uma lista desde umas listas. 
```

Exemplo de utilização:

&#x20;<mark style="color:blue;">`Acrescente o verso para os versos.`</mark>

<mark style="color:blue;">`Insira o verso após os outros versos.`</mark>

&#x20;<mark style="color:blue;">`Remova o verso desde os versos.`</mark>

A Biblioteca padrão também aceita o comando

<mark style="color:blue;">`"Atribua a`</mark><mark style="color:green;">`quantidade de elementos`</mark><mark style="color:blue;">`de uma lista para uma contagem."`</mark>

{% hint style="info" %}
*<mark style="color:red;">**Listas são alocadas dinamicamente então é necessário efetuar a alocação e desalocação de memória das listas manualmente, de forma explícita.**</mark>*
{% endhint %}

Exemplo de alocação:

<mark style="color:blue;">`Aloque memória para a Bíblia.`</mark>

Exemplo de desalocação:

<mark style="color:red;">`Desaloque memória para a Bíblia.`</mark>

{% hint style="info" %} <mark style="color:purple;">**Perceba que ao destruir uma lista, todos os seus elementos (excluindo ponteiros) são destruídos juntamente com ela.**</mark>
{% endhint %}

Para evitar este q, utilize a palavra-chave "**(referência)"** após o nome do elemento. Isto indicará ao compilador que o campo trata-se de um ponteiro apenas.

Exemplos:

```
Um campo de estrutura é uma estrutura com
  Um sinalizador de redirecionamento,
  Um campo (referência),
  Uma rotina de função (referência),
  Um sinalizador de empilhamento.

Uma unidade semântica é uma lista com
  Uma string,
  Um tipo (referência),
  Uma variável (referência),
  Um tipo atual (referência),
  Um subtexto atual.
```