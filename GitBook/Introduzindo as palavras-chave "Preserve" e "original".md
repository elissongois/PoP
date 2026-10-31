# Introduzindo as palavras-chave "Preserve" e "original"

Já que todos os parâmetros são passados por referência, inevitavelmente haverão situações onde a alteração do valor do parâmetro se tornará indesejada. Eis o que fazer nestes casos.

O comando "Preserve" cria uma cópia da variável original, para que você possa alterá-la sem maiores preocupações.

Exemplos:

```
Função para que se determine se uma string possui alguma vogal acentuada:
  Preserve a string.
  Itere.
    Se a string estiver em branco, diga não.
    Se o conteúdo deste caractere final desta string for alguma vogal acentuada, diga sim.
    Subtraia 1 desde o caractere final desta string.
  Reitere.

Rotina para que se adicione uma fração para uma segunda fração:
  Preserve a fração.
  Simplifique a fração e a segunda fração.
  Adicione o numerador desta fração para o numerador desta segunda fração.
  Reduza a segunda fração.

Rotina para que se acrescente um byte para uma string usando uma contagem:
  Preserve a contagem.
  Itere.
    Se a contagem for menor do que 1, retorne.
    Acrescente o byte para a string.
    Subtraia 1 desde a contagem.
  Reitere.
```

Caso você deseje manipular a variável original, basta acrescentar a palavra chave "original" após o nome da variável preservada.

Exemplos de uso:

```
Rotina para que se inverta uma string:
  Preserve a string.
  Limpe a string original.
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```