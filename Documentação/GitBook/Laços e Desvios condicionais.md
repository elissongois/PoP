# Laços e Desvios condicionais

As declarações condicionais são iniciadas com a palavra-chave <mark style="color:blue;">`Se`</mark> e seguem um padrão de sintaxe similar à abaixo:

<mark style="color:blue;">**`Se`**</mark>*<mark style="color:red;">**`<expressão condicional>`**</mark>*<mark style="color:red;">**`,`**</mark>

&#x20; <mark style="color:blue;">`Faça uma coisa`</mark><mark style="color:red;">**`;`**</mark>

&#x20; <mark style="color:blue;">`Faça outra coisa`</mark><mark style="color:red;">**`.`**</mark>

O bloco de declarações é iniciado após a 1ª vírgula.&#x20;

**As demais declarações devem ser separadas por ponto e vírgula,&#x20;**<mark style="color:red;">**com exceção da última**</mark>**,&#x20;*****que deve terminar com um ponto*****.**&#x20;

Exemplo:

```
Átribua 10 para um número.
Se o número for maior do que 1,
  Escreva "oi" no console;
  Retorne.
```

{% hint style="warning" %} <mark style="color:orange;">**O aninhamento de declarações condicionais não é permitido.**</mark>
{% endhint %}

## Laços e iterações

A linguagem possui apenas um tipo de laço, o qual funciona de forma similar a um laço do tipo <mark style="color:orange;">**`while(true)`**</mark> presente em outras linguagens:

Exemplo:

<mark style="color:blue;">**`Itere.`**</mark>&#x20;

&#x20; `Adicione 1 para uma contagem.`&#x20;

&#x20; `Escreva a contagem no console.`&#x20;

&#x20; `Se a contagem for maior do que 10,`` `<mark style="color:red;">**`pare.`**</mark>&#x20;

<mark style="color:blue;">**`Reitere.`**</mark>

A palavra-chave <mark style="color:blue;">**`Itere`**</mark> indica o ínicio do laço de repetição. Quando o loop começa a partir da primeira linha do corpo da rotina, a keyword "Itere" pode ser omitida.

A palavra-chave <mark style="color:blue;">**`Reitere`**</mark>direciona o fluxo de execução de volta ao início do loop atual.&#x20;

A palavra chave <mark style="color:red;">**`Pare`**</mark> abandona o laço de repetição, interrompendo a execução do loop e saltando para a linha de código que estiver logo depois do bloco de repetição.

A palavra chave <mark style="color:red;">**`Retorne`**</mark> abandona a rotina atual e devolve o controle de execução à linha seguinte da rotina que chamou a atual.

{% hint style="warning" %} <mark style="color:orange;">**O aninhamento de laços de iteração não é permitido.**</mark>
{% endhint %}

## Escopo de variáveis em loops

Variáveis locais que forem definidas dentro de um loop continuarão existindo dentro do escopo da rotina atual . Exemplo:

```
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Atribua "João" para uma string denominada nome. 
    \ "nome" é a variável local inicializada dentro do escopo do loop
    Se o nome for "João", pare.
  Reitere.
  Escreva o nome para StdOut. 
  \ ^ A variável nome permanece acessível mesmo após o fim do loop
  Feche o programa.
```

## Inicialização de variáveis locais em expressões condicionais

É possível declarar variáveis locais diretamente na expressão condicional. Observe o exemplo abaixo:

```
 Itere.
    Se um número for maior que 10, pare.
    Adicione 1 ao número.    
 Reitere.  
```