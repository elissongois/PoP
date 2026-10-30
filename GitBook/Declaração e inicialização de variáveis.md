# Declaração e inicialização de variáveis

O escopo se refere à visibilidade de uma variável, ou seja, onde uma variável pode ser usada dentro de um programa. Existem dois principais escopos em Português Puro:

* **Escopo Global:** As variáveis declaradas fora de qualquer rotina ou função têm escopo global. Elas são visíveis em todo o programa, ou seja, podem ser acessadas de qualquer lugar.
* **Escopo Local:** As variáveis declaradas dentro de uma rotina ou função têm escopo local. Elas só são visíveis dentro dessa rotina ou função.

## Declaração de Variáveis Globais

Variáveis globais são declaradas com os seguintes artigos definidos:

* **O**
* **Os**
* **A**
* **As**

A sintaxe para declaração de variáveis é a seguinte:

<mark style="color:blue;">**\<artigo definido>**</mark>**&#x20;**<mark style="color:purple;">**\<nome da variável>**</mark>**&#x20;<é|são>&#x20;**<mark style="color:red;">**\<artigo indefinido>**</mark>**&#x20;**<mark style="color:green;">**\<tipo da variável>**</mark><mark style="color:$info;">**<**</mark><mark style="color:$info;">ponto final></mark>

Exemplos:

```
A cor do ambiente de trabalho é uma cor.
A aba atual é uma aba.
As aspas duplas são um caractere.
```

A sintaxe para declaração de variáveis seguido da inicialização é a seguinte:

<mark style="color:blue;">**\<artigo definido>**</mark>**&#x20;**<mark style="color:purple;">**\<variável>**</mark>**&#x20;<é|são>&#x20;**<mark style="color:red;">**\<artigo indefinido>**</mark>**&#x20;**<mark style="color:green;">**\<tipo>**</mark>**\<igual a>&#x20;**<mark style="background-color:orange;">**\<valor literal>**</mark><mark style="color:$info;">**<**</mark><mark style="color:$info;">ponto final></mark>

Exemplos:

```
A raiz de dois é uma fração igual a 99/70.
O número pi é uma fração igual a 355/113.
O servidor SMTP é uma string igual a "localhost".
As aspas duplas são um byte igual a 34.
```

## Inicialização de Variáveis Locais

Variáveis locais podem ser declaradas e inicializadas dentro de rotinas e funções. Para isto basta utilizar algum dos artigos indefinidos a seguir:

* **um**
* **uns**
* **uma**
* **umas**

A sintaxe para declaração de variáveis locais é a seguinte:

<mark style="color:red;">**\<artigo indefinido>**</mark>**&#x20;**<mark style="color:green;">**\<tipo>**</mark>**\<denominado>&#x20;**<mark style="background-color:orange;">**\<nome da variável local>**</mark><mark style="color:$info;">**<**</mark><mark style="color:$info;">ponto final></mark>

Exemplos:

```
Atribua 0 para um número denominado total.
Atribua "João" para uma string denominada nome do usuário.
Ative um sinalizador denominado status.
Atribua $DEADBEEF para uma cifra hexadecimal denominada exemplo.
```
