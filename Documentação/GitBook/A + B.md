# A + B

Este algoritmo realiza a soma de 2 números inteiros, sendo que os números devem estar no intervalo de -1000 a 1000.

{% code overflow="wrap" fullWidth="true" %}

```
Rotina para que se execute o programa:
  Inicialize os componentes.
  Prepare o console.
  Escreva "Digite um número: " para STDOUT.
  Leia um trecho desde a STDIN.
  Elimine os resíduos no trecho.
  Se o trecho não for algum número inteiro,
    Escreva "Entrada inválida. Operação abortada." junto com o texto CRLF para STDOUT;
    Feche o programa;
    Retorne.
  Converta o trecho para um número.
  Se o número não for válido, 
    Escreva "Entrada inválida. Operação abortada." junto com o texto CRLF para STDOUT;
    Feche o programa;
    Retorne.
  Escreva "Digite outro número: " para STDOUT.
  Leia um segundo trecho desde a STDIN.
  Elimine os resíduos no segundo trecho.
  Se o segundo trecho não for algum número inteiro,
    Escreva "Entrada inválida. Operação abortada." junto com o texto CRLF para STDOUT;
    Feche o programa;
    Retorne.
  Converta o segundo trecho para um segundo número.
  Some o número com o segundo número e escreva a soma em STDOUT.
  Feche o programa.

Rotina para que se some um número com um segundo número e escreva a soma em STDOUT:
  Se o segundo número não for válido,
    Escreva "Entrada inválida. Operação abortada." junto com o texto CRLF para STDOUT;
    Retorne.
  Adicione o segundo número ao número.
  Converta o número para uma string.
  Escreva "Soma = " junto com a string para STDOUT. \junto com o texto CRLF para STDOUT.

Rotina para que se determine se um número é válido:
  \Se o número for uma 
  Se o número for menor do que -1000, diga não. \ aprove / rejeite
  Se o número for maior do que 1000, diga não.
  Diga sim.
  
```

{% endcode %}