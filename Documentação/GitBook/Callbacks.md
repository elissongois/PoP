# Callbacks

Em [programação de computadores](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_de_computadores), um método de callback é uma [rotina](https://pt.wikipedia.org/wiki/M%C3%A9todo_\(programa%C3%A7%C3%A3o\)) que é passada como [parâmetro](https://pt.wikipedia.org/wiki/Par%C3%A2metro) para outro método. É esperado então que o método execute o código do argumento em algum momento. A invocação do trecho pode ser imediata, como em um (callback síncrono), ou em outro momento (callback assíncrono).

Os meios em que os callbacks são suportados em diferentes linguagens de programação diferem, porém eles são normalmente implementados com sub-rotinas, [expressões lambda](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda), blocos de código ou [ponteiros](https://pt.wikipedia.org/wiki/Ponteiro_\(programa%C3%A7%C3%A3o\)) de funções.

Às vezes o Windows precisa que forneçamos o endereço de uma de nossas rotinas.&#x20;

Você pode usar a seguinte sintaxe para obter o endereço de uma rotina:&#x20;

**`Aponte`**` ``um ponteiro`` `**`para a rotina`**` ``manipule uma variável qualquer.`&#x20;

Mas se você for passar o endereço para o Windows, certifique-se de que o cabeçalho da rotina inclua a palavra-chave **`compativelmente`** logo após o **`para que se`**.&#x20;

Exemplo:

`Rotina para que se`` `**`compativelmente`**` ``manipule uma variável qualquer:`

&#x20;&#x20;