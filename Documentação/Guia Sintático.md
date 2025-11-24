# Português Puro

Esta folha de consulta resume a sintaxe, os conceitos e os padrões idiomáticos da linguagem de programação "Português Puro". O objetivo é fornecer de forma sucinta mas completa um guia estruturado para auxiliar na escrita de código.

## 1. Conceitos Fundamentais

- **Paradigma:** Estruturada, Imperativa.
- **Tipagem:** Estática e forte.
- **Sensibilidade:** A linguagem ignora:
  - Maiúsculas/minúsculas (case-insensitive).
  - Acentos em letras e vogais.
  - Espaços, quebras de linha e tabulação (identação livre).
- **Arquivo Principal:** Todo programa precisa de uma rotina `Rotina para que se execute o programa:`.
- **Biblioteca Padrão:** O arquivo `Biblioteca padrão.pop` deve estar presente no diretório de compilação.

## 2. Comentários

- **Linha única:** Começa com `\` e se estende até o fim da linha `CRLF`.
  ```portugues-puro
  \ Este é um comentário de linha única.
  Uma nova linha de texto é uma linha de texto. \ Comentários de linha única podem aparecer após linhas de código
  ```
- **Bloco (inline):** Envolto por colchetes `[]`.
  ```portugues-puro
  Pinte a caixa usando a cor preta [na borda] e a cor branca [dentro].
  Um caractere inicial é um ponteiro [que aponta] para um byte.
  ```

## 3. Declaração de Variáveis

A declaração é baseada em artigos definidos (globais) e artigos indefinidos (locais), com inferência de tipo a partir do nome da variável.

### Variáveis Globais (Escopo do Módulo)

Declaradas fora de rotinas, são acessíveis em todo o módulo.

- **Artigos para Declaração:** `O`, `Os`, `A`, `As`.
- **Sintaxe:** `<artigo definido> <nome> é/são <artigo indefinido> <tipo> [igual a <valor>].`
- **Exemplos:**
  ```portugues-puro
  \ Declaração sem valor inicial
  O servidor SMTP é uma string.
  As cores primárias são umas cores.

  \ Declaração com valor inicial
  A cor de fundo é uma cor igual a #FFFFFF.
  O número pi é uma fração igual a 355/113.
  ```

### Variáveis Locais (Escopo da Rotina)

Declaradas dentro de rotinas e acessíveis apenas naquele escopo. A declaração ocorre no momento da atribuição de um valor.

- **Artigos para Declaração:** `um`, `uns`, `uma`, `umas`.

- **Formas de Declaração:**

  1.  **Com Inferência de Tipo (mais comum):** O tipo é inferido a partir de uma palavra-chave no nome da variável.
      - **Sintaxe:** `Atribua <valor> para <artigo indefinido> <nome-com-tipo>.`
      - **Exemplo:**
        ```portugues-puro
        \ O tipo 'número' é inferido da palavra "número".
        Atribua 10 para um número.

        \ O tipo 'string' é inferido da palavra "string".
        Atribua "João" para uma string.
        ```

  2.  **Com Nome Explícito:** O tipo é definido explicitamente, e a variável é nomeada.
      - **Sintaxe:** `Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.`
      - **Exemplo:**
        ```portugues-puro
        Atribua 18 para um número denominado idade.
        ```

- **Uso Posterior:** Após a declaração, a variável local é referenciada usando um artigo definido (`o`, `a`, etc.).
  - **Exemplo:**
    ```portugues-puro
    \ Declara a variável local 'contato'
    Aloque memória para um contato.
    \ Usa o artigo definido 'o' para se referir ao 'contato' já declarado
    Acrescente o contato na agenda telefônica.
    ```

## 4. Tipos de Dados Fundamentais

A linguagem conta com os seguintes tipos principais:

- **`número`**: Inteiro de 32 bits.
- **`fração`**: Representa um número racional com `numerador` e `denominador`.
- **`sinalizador`**: Valor booleano, que pode ser `sim` ou `não`.
- **`caractere`**: Um único `byte`, usado para representar caracteres.
- **`string`**: Uma sequência de caracteres.
- **`ponteiro`**: Armazena um endereço de memória.
- **`estrutura`**: Tipo composto que agrupa diferentes variáveis (detalhado na seção 8).
- **`lista`**: Estrutura de dados do tipo lista duplamente encadeada (detalhada na seção 9).
- **`byte`**: A menor unidade de memória endereçável.

## 5. Estruturas de Controle de Fluxo

### Condicionais (`Se`)

Executa um bloco de código se uma condição for verdadeira.

- **Sintaxe:**
  ```
  Se <condição>,
    <instrução 1>;
    <instrução 2>;
    <instrução 3>.
  ```
- **Estrutura:**
  - O bloco de código é iniciado por uma **vírgula** (`,`) após a condição.
  - As instruções dentro do bloco são separadas por **ponto e vírgula** (`;`).
  - O bloco é finalizado com um **ponto final** (`.`)
- **Importante:** Aninhamento de condicionais `Se` não é permitido.
- **Exemplo:**
  ```portugues-puro
  Se o número for menor do que 0,
    Escreva "Número negativo." para StdOut;
    Retorne.
  ```

### Laços de Repetição (`Itere...Reitere`)

Cria um laço infinito, análogo a um `while(true)`, que depende de uma condição de saída interna para ser encerrado.

- **Sintaxe:**
  ```
  [Itere.]
    <instruções>
    Se <condição>, pare.
  Reitere.
  ```

- **Palavras-chave:**
  - `Itere`: Marca o início do laço. É opcional se o laço for a primeira instrução da rotina.
  - `Reitere`: Delimita o fim do bloco e faz o fluxo de execução retornar ao `Itere`.
  - `Pare`: Interrompe o laço e continua a execução na linha seguinte ao `Reitere`. Equivale a um `break`.
  - `Retorne`: Encerra a execução da rotina inteira na qual o laço está contido.

- **Importante:** Aninhamento de laços não é permitido.

- **Exemplo:**
  ```portugues-puro
  Atribua 1 para um contador.
  Itere.
    Adicione 1 para o contador.
    Se o contador for maior do que 10, pare.
  Reitere.
  ```

## 6. Rotinas e Funções

### Rotinas (Procedimentos)

Blocos de código reutilizáveis que executam uma tarefa, equivalentes a procedimentos ou funções `void`.

- **Declaração e Chamada:**
  - A declaração define a tarefa e seus parâmetros (introduzidos por `um`, `uma`, etc.).
  - A chamada executa a tarefa de forma imperativa.
  - **Exemplo:**
    ```portugues-puro
    \ Declaração
    Rotina para que se saudação para uma pessoa:
      Escreva "Olá, " junto com a pessoa para StdOut.

    \ Chamada
    Saudação para "Mundo".
    ```

- **Sinônimos (Aliases):**
  - Permitem definir nomes alternativos para uma mesma rotina. Declare as assinaturas alternativas (terminadas em `;`) antes da declaração principal.
  - **Exemplo:**
    ```portugues-puro
    \ Definição de sinônimos
    Rotina para que se obtenha o fatorial de um número;
    Rotina para que se calcule o fatorial de um número:
      \ ... lógica do fatorial ...

    \ Chamadas possíveis
    Calcule o fatorial de 10.
    Obtenha o fatorial de 10.
    ```

### Funções Deliberativas (Booleanas)

Funções que retornam `sim` (verdadeiro) ou `não` (falso), usadas em expressões condicionais.

- **Declaração e Chamada:**
  - A declaração usa a sintaxe `Função para que se determine se...`.
  - O retorno é feito com `Diga sim.` ou `Diga não.`.
  - A chamada ocorre dentro de um condicional.
  - **Exemplo:**
    ```portugues-puro
    \ Declaração da função
    Função para que se determine se um número é negativo:
      Se o número for menor do que 0, diga sim.
      Diga não.

    \ Chamada da função
    Se o número for negativo,
      Escreva "O número é negativo." para StdOut.
    ```

## 7. Operações e Expressões

A linguagem possui duas formas de realizar operações: com comandos imperativos ou com expressões em atribuições.

- **Comandos Aritméticos (Imperativos):**
  - Modificam o valor de uma variável existente.
  - Comandos: `Adicione`, `Subtraia`, `Multiplique`, `Divida`.
  - Exemplo:
    ```portugues-puro
    Atribua 10 para um total.
    Adicione 5 para o total.      \ total agora é 15
    Multiplique o total por 2.   \ total agora é 30
    ```

- **Expressões Aritméticas (em Atribuições):**
  - Usadas para calcular um novo valor a ser atribuído.
  - Operadores: `mais`, `menos`, `vezes`, `dividido por`.
  - **Importante:** As expressões são avaliadas da esquerda para a direita, **sem ordem de precedência**.
  - Exemplo:
    ```portugues-puro
    \ A expressão "2 mais 3 vezes 4" resulta em 20 ( (2+3)*4 )
    Atribua 2 mais 3 vezes 4 para um resultado.
    Escreva o resultado para StdOut. \ Imprime 20
    ```

- **Concatenação de Strings:**
  - Segue o mesmo padrão, com o comando `Acrescente` ou operadores como `junto com`.
  - Exemplo:
    ```portugues-puro
    \ Usando um comando
    Atribua "Olá" para uma saudação.
    Acrescente ", Mundo!" para a saudação. \ A variável 'saudação' agora contém "Olá, Mundo!"

    \ Usando um operador em uma expressão
    Escreva "Olá" junto com ", Mundo!" para StdOut.
    ```

## 8. Estruturas

Estruturas são tipos de dados compostos que agrupam múltiplas variáveis (campos).

- **Declaração:**
  - Define os campos e seus tipos.
  - **Sintaxe:** `Um/Uma <nome> é uma estrutura com <campo 1> , <campo 2> e <campo 3> ou <campo 4> e <último campo>.`
  - **Exemplos:**
    ```portugues-puro
    \ Estrutura com múltiplos campos
    Uma pessoa é uma estrutura com
      Uma string denominada nome e \Entre o final da definição de um campo e o começo do próximo deve ser utilizado um delimitador dentre: `e`, `ou` e `,`
      Um número denominado idade. \ O último campo deve terminar com ponto final `.`

    \ Estrutura em linha única
    Uma linha é uma estrutura com uma coordenada esquerda e uma coordenada direita.
    ```

- **Acesso aos Campos:**
  - O acesso aos campos de uma variável de estrutura é feito com as contrações `deste`, `desta`, `destes`, `destas`.
  - **Exemplo:**
    ```portugues-puro
    \ Considerando que 'pessoa' é uma variável do tipo 'pessoa'
    Atribua "João" para o nome desta pessoa.
    Atribua 30 para a idade desta pessoa.
    ```

- **Campos Calculados:**
  - Um mecanismo para criar "campos virtuais" que não existem na estrutura e cujo valor é calculado por uma rotina, permitindo que sejam acessados como se fossem campos reais da estrutura. Primeiro é preciso implementar uma rotina dum campo calculado, e então basta que ela seja empregada no corpo de qualquer rotina para que o campo calculado seja tratado como campo real naquele escopo.
  - A rotina que define o campo usa o verbo `atribua` em sua assinatura.
  - **Exemplo:**
    ```portugues-puro
    \ A estrutura 'linha' só tem 'inicial' e 'final'.
    Uma linha é uma estrutura com uma localização inicial e uma localização final.

    \ Rotina que define o campo calculado 'centro' para a estrutura 'linha'.
    Rotina para que se atribua o centro duma linha para uma localização:
      \ ... lógica para calcular o ponto central ...
      Atribua a localização inicial desta linha mais a localização final desta linha à localização.
      Divida a localização por 2.

    \ Uso do campo calculado como se ele existisse na estrutura.
    Rotina para que se rotacione uma linha:
      \ O valor de 'centro desta linha' é obtido pela rotina do campo calculado.
      Atribua o centro desta linha para um centro localização.
      Rotacione a localização inicial desta linha em direção ao centro.
    ```

## 9. Listas

A linguagem implementa listas como estruturas duplamente encadeadas. A manipulação de memória (com `Aloque memória` e `Destrua`) geralmente precisa ser feita manualmente.

- **Conceito:** A coleção de itens (ex: `uns contatos`) armazena a referência para o primeiro e o último item. Cada item individual (ex: `um contato`) contém os dados e os ponteiros para o item `anterior` e `posterior`.

- **Declaração:** O processo tem dois passos: definir a estrutura do item individual e, em seguida, declarar a variável que representará a coleção.
  - **Exemplo:**
    ```portugues-puro
    \ 1. Define a estrutura de cada item da lista.
    Um contato é uma lista com
      Uma string denominada nome e
      Uma string denominada número de telefone.

    \ 2. Declara a variável que guardará a coleção de contatos.
    A agenda telefônica é uns contatos.
    ```

- **Manipulação Comum:** As operações são feitas através de rotinas. As mais comuns são:
  - **Adicionar:** `Acrescente <item> na <coleção>.` ou `Anteponha <item> para <coleção>.`
  - **Remover:** `Remova o <item> desde a <coleção>.`
  - **Obter:** Uma rotina de obtenção é usada dentro de um laço para percorrer os itens.
    ```portugues-puro
    \ Exemplo de iteração para percorrer a agenda
    Atribua nulo para um contato.
    Itere.
      Obtenha um contato desde a agenda telefônica.
      Se o contato for nulo, pare. \ Fim da lista
      Escreva o nome deste contato para StdOut.
    Reitere.
    ```

## 10. Interação com o Sistema

- **Saída no Console:**
  ```portugues-puro
  Escreva "Hello World!" para StdOut.
  ```
- **Entrada do Console:**
  ```portugues-puro
  Leia um trecho desde a StdIn.
  ```
- **Bibliotecas Externas (DLLs):**
  ```portugues-puro
  \ Sem parâmetros
  Processe "user32.dll" "CloseClipboard".

  \ Com parâmetros e retorno
  Processe "user32.dll" "GetClipboardData" com o formato retornando um número.
  ```

## 11. Exemplo Completo (Fatorial)

```portugues-puro
O fatorial é um número.

Rotina para que se calcule o fatorial de um número:
  \ O fatorial de 0 ou 1 é 1.
  Se o número for menor que 2,
    Atribua 1 para o fatorial;
    Retorne.

  \ Calcula o fatorial para números a partir de 2
  Atribua 1 para o fatorial.
  Atribua 2 para um número denominado contador.
  Itere.
    Multiplique o fatorial pelo contador.
    Adicione 1 para o contador.
    Se o contador for maior do que o número, pare.
  Reitere.

Rotina para que se execute o programa:
  Inicialize os componentes.
  Defina "console" como o tipo da aplicação.
  Calcule o fatorial de 10.
  Escreva "O fatorial de 10 é: " junto com o fatorial para StdOut.
  Feche o programa.
```

## 12. Manipulação Avançada de Strings

Para tarefas de parsing, a linguagem utiliza os conceitos de `Subtexto` e `Percorredor`.

- **Subtexto:** É uma referência a uma parte de uma string (um par de ponteiros para o caractere inicial e final), não uma cópia. É perigoso atribuir valores diretamente a um subtexto, pois pode causar vazamento de memória.
- **Percorredor:** É uma estrutura que facilita a iteração sobre uma string, dividindo-a em `segmento inicial` e `segmento final`.

- **Exemplo de uso:**
  ```portugues-puro
  \ Lança um subtexto sobre toda a string
  Lance um subtexto em uma string.

  \ Lança um percorredor sobre o subtexto para iniciar o parsing
  Lance um percorredor sobre o subtexto.

  \ Move o percorredor para o próximo caractere
  Avance o percorredor.

  \ Move o percorredor para o caractere anterior
  Recue o percorredor.
  ```

## 13. Passagem de Parâmetros e `Preserve`

- **Passagem por Referência:** Todos os parâmetros em rotinas são passados por referência. Alterar um parâmetro dentro de uma rotina **altera a variável original**.
- **`Preserve`:** Para evitar a modificação da variável original, use a palavra-chave `Preserve`. Ela cria uma cópia local da variável no início da rotina.

- **Exemplo:**
  ```portugues-puro
  Rotina para que se inverta uma string:
    \ Cria uma cópia local de 'string' para ser manipulada
    Preserve a string.
    \ Limpa a variável original que foi passada como parâmetro
    Limpe a string original.
    Itere.
      Se a string [a cópia] estiver em branco, pare.
      Obtenha um caractere desde a string (regressivamente).
      Acrescente o caractere para a string original.
    Reitere.
  ```

## 14. Conversão de Tipos (Casting)

- **Palavras-chave:** `tal como` ou `tal qual`.
- **Uso:** Permitem tratar uma variável de um tipo como se fosse de outro tipo para uma operação específica, sem alterar a variável original.

- **Exemplo:**
  ```portugues-puro
  \ Trata um ponteiro como um número para uma operação lógica
  Disjuncione logicamente o ponteiro tal como um número com o número.

  \ Converte uma string para um número, tratando-a como uma cifra hexadecimal
  Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
  ```
