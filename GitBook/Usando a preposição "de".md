# Usando a preposição "de"

A preposição "de" é fundamental na língua portuguesa, pois estabelece relações de posse, origem, e especificação entre palavras, contribuindo para a clareza e coesão do discurso.

Conforme demonstrado, o compilador permite a declaração de tipos e variáveis contendo espaços. Exemplos:

```
\----------------DEFINIÇÃO DE TIPOS ------------------
Uma mensagem de erro é uma string.
Uma contagem de nomes é uma contagem.
Um trecho de listagem é um trecho.
Um sinalizador de erros é um sinalizador.
Um endereço do arquivo é um endereço completo.
Um nome da DLL é um nome.
Um nome da função é um nome.

\----------------VARIÁVEIS GLOBAIS ------------------
O botão do mouse é um botão.
O texto de espaço é uma string igual a " ".
```

Perceba que as palavras "de", "do", "da", "dos" e "das" pudessem ser utilizadas livremente no nome dos tipos e variáveis.

Para que isso possa ser feito, tais palavras não são consideradas como preposições (pois preposições são proibidas em nomes de variáveis).

## Introduzindo as palavras-chave "esse", "essa", "esses", "essas"

No entanto, ainda assim é possível utilizar a preposição "de" tal como uma preposição comum. Veja os exemplos abaixo:

```
Rotina para que se defina o tipo de uma unidade semântica:
  Se a unidade semântica for inexistente, retorne.
  \[...]
```

No cabeçalho da rotina acima, o "de" é considerado como preposição pois encontra-se antes de um artigo indefinido. Artigos indefinidos em cabeçalhos de rotina indicam a presença de um parâmetro.

Para invocar a rotina acima, poderíamos escrever:

```
Defina o tipo dessa unidade semântica.
```

Perceba que utilizamos a palavra "dessa" ao invés de "da".

Ao se deparar com a contração "dessa" o compilador executa algumas ações:

* Decompõe a palavra "dessa" em "de essa"
* A palavra "de" recém criada se transforma em uma preposição, pois está acompanhada de um pronome ("essa").

Outros exemplos que seguem a mesma lógica:

```
Remova os caracteres ignoráveis no final dessa string.
Remova as aspas dessa string.
Inverta o sinal desse número.
Troque o sinal desse número.
```