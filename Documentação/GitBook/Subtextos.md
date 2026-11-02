# Subtextos

Um "subtexto" faz parte de uma string. Os subtextos são implementadas como uma estrutura similar a uma string — um par de ponteiros de bytes chamados caractere inicial e caractere final — o que torna o subtexto "compatível" com o tipo string.

O comando:

`Lance um subtexto em uma string.`&#x20;

Faz com que o `caractere inicial` e o `caractere final` do subtexto englobem toda a string.&#x20;

Dessa forma você pode percorrer através dos caracteres da string, indo para frente ou para trás. Para iso basta incrementar o valor do endereço do caractere inicial ou reduzir o valor do endereço do caractere final do subtexto.

Você também pode usar o comando:&#x20;

`Posicione um subtexto em uma string.`&#x20;

O comando acima define apenas o caractere inicial do subtexto, deixando o valor do caractere final inicialmente em branco, porém pronto para ser alterado. Ao definir e incrementar o valor do caractere final, você pode ir criando a substring um byte de cada vez.

Os subtextos são utilizados principalmente de forma conjunta com "percorredores".

{% hint style="danger" %} <mark style="color:red;">**Existem certas operações que não devem ser efetuadas em subtextos.**</mark>
{% endhint %}

Primeiro, vamos olhar para o exemplo.&#x20;

O código abaixo funciona corretamente...

```
Rotina para que se execute o programa:
  Atribua "abc" para uma string.
```

Já o código abaixo gera um vazamento de memória

```
Rotina para que se execute o programa:
  Atribua "abc" para um subtexto.
```

Por quê?&#x20;

Porque a segunda versão é um abuso do tipo subtexto; ela usa o subtexto de uma forma para o qual ele não foi projetado.

Os subtextos devem ser referências para partes de outras strings reais.&#x20;

E já que eles são referências, elas nunca são desalocadas automaticamente.

O código acima "vaza", porque o subtexto é (incorretamente) tratado como uma string e a memória é alocada quando a rotina "atribua uma string para outra string" é chamada.&#x20;

Mas o tipo real da variável ainda é substring, então as rotinas de desalocação automática são ignoradas.&#x20;

Em resumo, nunca "atribua" nada para um subtexto. "lance" ou "posicione" um subtexto em uma string, conforme descrito na página 110 do manual.