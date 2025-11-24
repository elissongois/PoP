# Português Puro - Cheat Sheet para Fine-Tuning

Esta folha de consulta resume a sintaxe, os conceitos e os padrões idiomáticos da linguagem de programação "Português Puro", com base na documentação e nos exemplos de código do projeto. O objetivo é fornecer um guia estruturado para o ajuste fino de modelos de linguagem.

## 1. Conceitos Fundamentais

- **Paradigma:** Estruturada, Imperativa.
- **Tipagem:** Estática e forte.
- **Sensibilidade a Caixa:** A linguagem **não** é sensível a maiúsculas e minúsculas (case-insensitive).
- **Sensibilidade a Identação:** A linguagem **não** é sensível a caracteres de espaço, quebras de linha e tabulação.
- **Arquivo Principal:** Todo programa precisa de uma rotina `Rotina para que se execute o programa:`.
- **Biblioteca Padrão:** O arquivo `Biblioteca padrão.pop` deve estar presente no diretório de compilação.

## 2. Comentários

- **Linha única:** Começa com `\`.
  ```portugues-puro
  \ Este é um comentário de linha única.
  ```
- **Bloco (inline):** Envolto por colchetes `[]`.
  ```portugues-puro
  Pinte a caixa usando a cor preta [na borda] e a cor branca.
  ```

## 3. Declaração de Variáveis

A declaração é baseada em artigos definidos (globais) e indefinidos (locais), com inferência de tipo a partir do nome da variável.

### Variáveis Globais

- **Artigos:** `O`, `Os`, `A`, `As`.
- **Sintaxe:** `<artigo definido> <nome da variável> é/são <artigo indefinido> <tipo>.`
- **Exemplos:**
  ```portugues-puro
  O servidor SMTP é uma string.
  A cor de fundo é uma cor.
  As aspas duplas são um caractere.
  ```
- **Inicialização:**
  ```portugues-puro
  O servidor SMTP é uma string igual a "localhost".
  O número pi é uma fração igual a 355/113.
  ```

### Variáveis Locais

- **Artigos:** `um`, `uns`, `uma`, `umas`.
- **Sintaxe (em uma rotina):** `Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.`
- **Inferência de Tipo (mais comum):** `Atribua <valor> para <artigo indefinido> <nome contendo o tipo>.`
- **Exemplos:**
  ```portugues-puro
  \ Declaração com inferência de tipo
  Atribua 10 para um número.
  Atribua "João" para uma string.

  \ Declaração com nome explícito
  Atribua 18 para um número denominado idade.

  \ Após declarar a variável local no escopo de uma rotina, utiliza-se artigo definido para fazer operações com a variável local declarada.
  Aloque memória para um contato.
  Acrescente o contato na agenda telefônica.
  ```

## 4. Tipos de Dados

- **Primitivos:** `byte`, `estrutura`.
- **Derivados Comuns:**
  - `número`: Inteiro de 32 bits.
  - `string`: Sequência de caracteres.
  - `fração`: Com `numerador` e `denominador`.
  - `caractere`: Um `byte`.
  - `sinalizador`: Booleano (`sim` / `não`).
  - `ponteiro`: Endereço de memória.
  - `lista`: Lista duplamente encadeada.

## 5. Estruturas de Controle

### Condicionais (`Se`)

- **Sintaxe:** `Se <condição>, <instrução 1>; <instrução 2>.`
- O bloco de código começa após a vírgula. Instruções são separadas por `;` e o bloco termina com `.`.
- Aninhamento **não** é permitido.
- **Exemplo:**
  ```portugues-puro
  Se o número for menor do que 0,
    Escreva "Número negativo." para StdOut;
    Retorne.
  ```

### Laços de Repetição (`Itere / Reitere`)

- Funciona como um loop `while(true)`.
- `Itere`: Inicia o laço (pode ser omitido se o laço começar na primeira linha da rotina).
- `Reitere`: Volta ao início do `Itere`.
- `Pare`: Interrompe o laço (equivalente a `break`). Continua o fluxo para a próxima instrução após o laço (após o último 'Reitere' do bloco).
- `Retorne`: Sai da rotina atual.
- Aninhamento **não** é permitido.
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

- **Sintaxe:** `Rotina para que se <nome da rotina com parâmetros>:`
- Parâmetros são introduzidos com artigos indefinidos (`um`, `uma`, etc.).
- Nomes de rotinas alternativos podem ser declarados nas linhas anteriores à declaração da rotina, terminando com ponto e vírgula.
- **Exemplo:**
  ```portugues-puro
  \ Definição
  Rotina para que se obtenha o fatorial de um número;
  Rotina para que se calcule o fatorial de um número:
    Se o número for menor que 2, retorne.
    \ ... lógica ...

  \ Chamada
  Calcule o fatorial de 10.
  \ou
  Obtenha o fatorial de 10.
  ```

### Funções Deliberativas (Booleanas)

- **Sintaxe:** `Função para que se determine se <nome da função com parâmetros>:`
- **Retorno:** `Diga sim.` (true) ou `Diga não.` (false).
- **Exemplo:**
  ```portugues-puro
  \ Definição
  Função para que se determine se um número é negativo:
    Se o número for menor do que 0, diga sim.
    Diga não.

  \ Chamada
  Se o número for negativo,
    Escreva "O número é negativo." para StdOut.
  ```

## 7. Operadores

- **Aritméticos:** `mais`, `menos`, `vezes`, `dividido por`. Avaliados da esquerda para a direita, sem precedência.
  ```portugues-puro
  Atribua o valor mais 10 para o resultado.
  ```
- **Concatenação de Strings:** `junto com`, `seguido de`, `acompanhado de`.
  ```portugues-puro
  Escreva "Nome: " junto com o nome do usuário para StdOut.
  ```

## 8. Estruturas (`estrutura`)

- **Definição:**
  ```portugues-puro
  Uma pessoa é uma estrutura com
    Uma string denominada nome e
    Um número denominado idade.
  ```
- **Acesso aos campos:** Use as contrações `deste`, `desta`, `destes`, `destas`.
  ```portugues-puro
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  Escreva o nome desta pessoa para StdOut.
  ```

## 9. Listas

- São listas duplamente encadeadas.
- A memória deve ser gerenciada manualmente com `Aloque memória para <lista>` e `Destrua <lista>`.
- **Definição:**
  ```portugues-puro
  Um contato é uma lista com
    Uma string denominada nome e
    Uma string denominada número de telefone.

  A agenda telefônica é uns contatos.
  ```
- **Manipulação:**
  ```portugues-puro
  Aloque memória para um contato.
  Acrescente o contato na agenda telefônica.
  Remova o contato desde a agenda telefônica.
  Destrua o contato.
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
  Se o número for menor que 2, retorne.
  Atribua 1 para o fatorial.
  Se o número for menor do que 2, retorne.
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
