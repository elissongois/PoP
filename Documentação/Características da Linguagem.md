# Características da Linguagem

Português Puro é uma *linguagem de programação de alto nível*, projetada para permitir a criação de programas com alto grau de abstração, aproximando o código da linguagem natural. Seu compilador e sua biblioteca padrão são expansíveis.

## Características e paradigmas

- **Linguagem de alto nível:** a sintaxe em português natural permite escrever código que se lê como prosa.
- **Paradigma de programação:** imperativa e estruturada, com suporte a sequência, condição e repetição.
- **Sensibilidade a maiúsculas:** a linguagem **não** diferencia maiúsculas de minúsculas — `número`, `Número` e `NÚMERO` são equivalentes. Acentos, espaços, quebras de linha e tabulação também não alteram o significado.
- **Passagem de argumentos:** os argumentos de rotinas e funções são passados **por referência**; alterações feitas dentro da rotina refletem na variável original. Ao chamar uma DLL, porém, usa-se a convenção C: ordem invertida e tipos "simples" passados por valor.
- **Tipo de compilação:** linguagem compilada. O compilador gera um executável `.exe` a partir dos arquivos `.pop` do projeto.
- **Sistema operacional:** projetada para Windows, com uso extensivo da API Win32 (`kernel32`, `user32`, `gdi32`, WinHTTP, Winsock) e arquitetura x86.

## Sistema de tipos

- **Tipagem:** estática e forte — os tipos são definidos em tempo de compilação, sem compatibilidade implícita.
- **Inferência de tipos:** o compilador deduz o tipo a partir do nome da variável ou do contexto inicial.
- **Conversão de tipos:** sempre explícita, sem conversões automáticas.
- **Tipos primitivos:** `byte` e `estrutura`. Todos os demais tipos derivam deles.
- **Tipos derivados comuns:** `caractere`, `string`, `lista` (duplamente encadeada), `ponteiro`, `número` (inteiro), `fração`, `número hexadecimal` e `sinalizador` (booleano).

## Sintaxe e estrutura

- **Comentários:**
  - *Linha única*, iniciados por barra invertida: `Inicialize os componentes. \ comentário`
  - *Bloco inline*, entre colchetes, inclusive no meio de uma instrução: `Pinte a caixa [na borda] e a cor branca [como preenchimento].`
- **Declaração de variáveis:**
  - *Globais*, com artigo definido: `A raiz de dois é uma fração igual a 99/70.`
  - *Locais*, dentro de rotinas, com artigo indefinido e nome opcional: `Atribua 18 para um número denominado idade.`
  - O escopo é **global** (todo o módulo) ou **local** (apenas a rotina).
- **Estruturas (registros):** `<artigo> <nome do tipo> é uma estrutura com <lista de campos>.`, por exemplo `Uma string é uma estrutura com um caractere inicial e um caractere final.` Estruturas vazias ocupam 0 bits; o tamanho equivale à soma dos campos.
- **Laços e iterações:** `Itere.` abre um laço infinito, `Reitere.` retorna ao início e `Pare.` interrompe. Não é permitido aninhar laços.
- **Condicionais:** abrem com `Se` (e há `Quando` para deliberação por casos).
- **Operadores:**
  - *Aritméticos:* `mais`, `menos`, `vezes`, `dividido por` — todos com a mesma precedência, avaliados da esquerda para a direita.
  - *Concatenação de strings:* `junto com`, `seguido de`, `acompanhado de` (variações como `junto` e `juntamente` também são aceitas).
- **Rotinas, parâmetros e funções:**
  - Declaração: `Rotina para que se <nome>:` (ou `Para que se <nome>:`), com parâmetros introduzidos por artigos indefinidos.
  - As preposições do cabeçalho (`com`, `para`, `usando`) fazem parte do nome da rotina e devem ser mantidas nas chamadas.
  - Os verbos `ser` e `estar` são tratados como sinônimos pelo compilador.
  - A preposição `de` pode ser usada livremente em nomes de tipos e variáveis; contrações como `dessa` são decompostas, e `de` é tratado como preposição quando acompanhado de pronome ou artigo indefinido.
- **Funções deliberativas (booleanas):** `Função para que se determine se <condição>:`, com retorno por `Diga sim.` ou `Diga não.`.
- **Callbacks:** o cabeçalho admite a palavra-chave `compativelmente`, permitindo que o endereço da rotina seja passado para chamadas externas; `Aponte um ponteiro para a rotina <nome>.` obtém esse endereço.
- **Retorno de rotina:** `Retorne.`
- **Strings e caracteres:** os caracteres vêm da code page Windows 1252 (ISO-8859-1) e a aspa dupla (`"`) é o caractere de escape. Uma string é uma estrutura com ponteiros para o byte inicial e o byte final, o que permite manipulação direta da memória; para strings comuns, a alocação e a desalocação são automáticas. A biblioteca padrão oferece `Atribua`, `Acrescente` e `Remova`, além de rotinas para obter o comprimento em bytes.

## Compilador, memória e interoperabilidade

- **Gerenciamento de memória:** em várias situações o programador é responsável por alocar e liberar memória; a linguagem expõe ponteiros e deslocamentos diretos.
- **Interoperabilidade:** chamadas externas com `Processe "dll" "função" com <argumentos> retornando <valor>` e injeção de código de máquina com `Decodifique <texto hexadecimal>`.
- **Biblioteca padrão:** contém tipos, variáveis globais e rotinas para API Win32, cores, console, gerenciamento de arquivos, criptografia, fontes, interfaces gráficas, interação com o usuário, manipulação de imagens, protocolos de rede, terminal, gráficos de tartaruga, arquivos PDF e e-mail.

## Ferramentas

- O compilador de linha de comando e a IDE minimalista **PAL-1000** foram escritos e compilados 100% em Português Puro, servindo como prova de conceito da linguagem.
- Extensões de realce e de servidor de linguagem para editores populares (VS Code, Notepad++) complementam o fluxo de trabalho.

---

Para a sintaxe de cada construção, consulte a árvore de regras em `../Regras/`; para referência rápida, `Guia Sintático.md`.
