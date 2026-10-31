# 100 Portas

Há 100 portas em uma fileira que estão todas inicialmente fechadas. Você faz 100 passagens pelas portas.

Na primeira vez, visite todas as portas e   *alterne*   a porta (se a porta estiver fechada, abra-a; se estiver aberta, feche-a).

Na segunda vez, visite apenas cada 2ª porta (porta nº 2, nº 4, nº 6, ...) e ative-a.

Na terceira vez, visite cada 3ª porta (porta nº 3, nº 6, nº 9, ...), etc., até visitar apenas a 100ª porta .

#### Tarefa

Responda à pergunta: em que estado estão as portas após a última passagem? Quais estão abertas, quais estão fechadas?

```
Uma passada é um número.
Uma porta é uma lista booleana.
Uma lista booleana é uma lista com um sinalizador.


Rotina para que se execute o programa:
  Inicialize os componentes.
  Passe através das portas usando 100 [portas] e 100 passadas.
  Feche o programa.

Rotina para que se passe através das portas usando um contagem e umas passadas:
  Crie umas portas usando a contagem.
  Itere.
    Adicione 1 para um contador.
    Se o contador for maior do que as passadas, pare.
    Vá através de as portas usando o contador e as passadas.
  Reitere.
  Transcreva o status de as portas.
  Destrua as portas.

Rotina para que se crie umas portas usando uma contagem:
  Itere.
    Adicione 1 para um contador.
    Se o contador for maior do que a contagem, retorne.
    Aloque memória para uma porta.
    Zere o sinalizador desta porta.
    Acrescente a porta para as portas.
  Reitere.  

Rotina para que se vá através de umas portas usando um número e umas passadas:
  Atribua 0 para um contador.
  Itere.
    Adicione o número para o contador.
    Se o contador for maior do que as passadas, retorne.
    Escolha uma porta desde as portas usando o número.
    Inverta o sinalizador desta porta.
  Reitere.

Rotina para que se escolha uma porta desde umas portas usando um número:
  Itere.
    Adicione 1 para um contador.
    Se o contador for maior do que o número, retorne.
    Obtenha a porta desde as portas.
    Se a porta for inexistente, retorne.
  Reitere.

Rotina para que se transcreva o status de umas portas:
  Itere.
    Incremente um contador.
    Obtenha uma porta desde as portas.
    Se a porta for inexistente, retorne.
    Se o sinalizador desta porta estiver ativo,
      Escreva "A porta " junto com o contador seguido de " está aberta." junto com o texto CRLF para STDOUT.\; Reitere.
  Reitere.
```