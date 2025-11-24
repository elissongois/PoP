### Perguntas Frequentes sobre Português Puro

#### *Como compilo um projeto em Português Puro?*

Para compilar um projeto em Português Puro, você deve invocar o compilador através da linha de comando, fornecendo o *endereço da pasta do projeto atual* como argumento . Por exemplo: c:\endereço_do_compilador.exe\ c:\pasta_do_projeto_atual\ .

É crucial que o arquivo Biblioteca Padrão.pop esteja *na mesma pasta do programa a ser compilado*, pois ele contém diversas definições necessárias para a correta execução .

O processo de compilação envolve várias etapas que são executadas em sequência, incluindo inicialização, carregamento de arquivos-fonte, análise, identificação de tipos e variáveis, cálculo de tamanhos, adição de rotinas de memória incorporadas, catalogação de rotinas, compilação do conteúdo das rotinas, deslocamento de parâmetros e variáveis, endereçamento, transmutação para código hexadecimal e vinculação .

Se você estiver utilizando uma IDE como o *PAL-1000*, existe um comando execute compile que pode ser acionado para compilar o projeto .

#### *Como se faz operações matemáticas usando Português Puro?*

Português Puro suporta diversas operações aritméticas através de operadores como **mais**, **menos**, **vezes**, **multiplicado por**, e **dividido por** .

A linguagem trabalha com os seguintes tipos de valores numéricos para estas operações :
*   *Bytes* (8 bits, de 0 a 255) .
*   *Números inteiros* (32 bits, de -2147483648 a 2147483647) .
*   *Números fracionários* (representados como frações com numerador e denominador) .
*   *Números mistos* (estruturas com um número inteiro e uma proporção/fração) .
*   *Valores hexadecimais* (prefixados com $, por exemplo, $DEADBEEF) .
*   *Ponteiros* (4 bytes, 32 bits, funcionando de forma similar a números) .
*   *Valores booleanos* (sim para 1, não para 0, usando apenas 1 bit dos 32 alocados) .

A Biblioteca Padrão contém rotinas para realizar operações aritméticas comuns em todos esses tipos numéricos .

#### *Como chamar DLLs e cabeçalhos de funções de API do Windows em Português Puro?*

Para interagir com bibliotecas externas e funções da API do Windows, você utiliza a palavra-chave **Processe** . A sintaxe básica é a seguinte:
*   Processe "<nome da biblioteca.dll>" "<nome da função>" .
*   Para passar argumentos, utilize a palavra-chave **com**: Processe "<nome da biblioteca.dll>" "<nome da função>" com <argumentos> . Os parâmetros passados para DLLs usam a convenção C (a ordem é invertida e tipos "simples" são passados por valor) .
*   Para obter um valor de retorno, utilize a palavra-chave **retornando**: Processe "<nome da biblioteca.dll>" "<nome da função>" retornando <variável de retorno> .

Exemplos de chamadas a DLLs e suas funções:
*   Processe "user32.dll" "CloseClipboard" .
*   Processe "user32.dll" "OpenClipboard" com a janela principal do programa .
*   Processe "user32.dll" "GetClipboardData" com o formato de texto retornando um número identificador .

Se você precisar que uma de suas rotinas seja invocada pelo Windows como um *callback*, o cabeçalho dessa rotina deve incluir a palavra-chave **compativelmente** logo após o para que se . Por exemplo: Rotina para que se compativelmente manipule uma variável qualquer: .

#### *Como incluir instruções Assembly em Português Puro?*

É possível incorporar código de máquina diretamente no seu programa em Português Puro utilizando a palavra-chave **Decodifique**, seguida dos valores em hexadecimal que representam os opcodes e operandos da instrução .

O código de máquina consiste em uma sequência de bytes que correspondem a instruções a serem executadas pelo processador . Embora as instruções do processador (opcodes) sejam representadas por valores hexadecimais, linguagens como Assembly utilizam códigos mnemônicos para expressar essas instruções . Em Português Puro, você pode usar a representação hexadecimal diretamente.

Exemplo de uso: Decodifique $C7C000000000. .

#### *Devo usar valores decimais ou hexadecimais em Português Puro?*

A escolha entre valores decimais (inteiros ou fracionários) e hexadecimais depende do contexto de programação.
*   *Valores decimais* (números) são utilizados para a maioria das operações aritméticas e lógicas gerais .
*   *Valores hexadecimais*, que são prefixados com o caractere $, como $0010A0, são particularmente úteis para operações de baixo nível, como *manipulação de bits* ou inserção de *código de máquina* (opcodes) . O compilador mantém um "catálogo de variáveis hexadecimais" para esses valores .

Para a maioria das necessidades de programação cotidiana, valores decimais são mais legíveis e diretos. Valores hexadecimais são preferíveis quando você precisa trabalhar diretamente com a representação binária dos dados, endereços de memória ou instruções de processador.

#### *Qual é o codepage utilizado em Português Puro?*

Português Puro utiliza o *codepage Windows 1252 (ISO-8859-1)* .

O compilador define a página de código de saída do console para 1252 . Esta página de código inclui 256 caracteres, englobando caracteres de controle, símbolos e caracteres alfabéticos comuns, incluindo os acentuados e especiais presentes na língua portuguesa .

#### *Há suporte a inteiros de 64 bits (Long Int) em Português Puro?*

De acordo com as definições nos fontes, os tipos numéricos em Português Puro parecem ser predominantemente de 32 bits ou menores:
*   Um **byte** tem 8 bits .
*   Uma **word** é uma estrutura com 2 bytes (16 bits) .
*   Um **ponteiro** é uma estrutura com 4 bytes (32 bits) .
*   Um **sinalizador** é uma estrutura com 4 bytes (32 bits) .
*   Um **número** tem um intervalo de valores de -2147483648 a 2147483647 , o que corresponde a um inteiro assinado de 32 bits.

Não há menção explícita nos fontes sobre um tipo de dado para inteiros de 64 bits (Long Int). Assim, parece que o tipo número padrão é de 32 bits.

#### *Como uso valores decimais (floating point) em Português Puro?*

Português Puro não utiliza valores decimais de ponto flutuante (floating point) no sentido tradicional de linguagens como C ou Python. Em vez disso, a linguagem lida com **números fracionários** .

Esses números são representados por uma **fração**, que é uma estrutura com um **numerador** e um **denominador** . Uma **proporção** também é definida como uma fração .

Para números que combinam uma parte inteira com uma fracionária, existe o tipo **numeral misto**, que é uma estrutura contendo um número inteiro e uma proporção (que, por sua vez, contém uma fração) .

Isso indica que a linguagem implementa aritmética racional para precisão, em vez de aproximações de ponto flutuante.

#### *Qual a diferença entre Rotina e Função em Português Puro?*

Em Português Puro, o termo **Rotina** é o conceito mais abrangente para um bloco de código executável, similar a um procedimento ou sub-rotina em outras linguagens . O termo Rotina é, inclusive, opcional na declaração .

Já o termo **Função** é usado para tipos específicos de rotinas que, por convenção ou comportamento interno do compilador, possuem características adicionais:
*   *Funções Deliberativas*: São rotinas que retornam um valor booleano (sim ou não) e são declaradas com "para que se determine se" .
*   *Funções de Atribuição/Retorno*: Embora a documentação afirme que se usa para que se no lugar de function , o compilador categoriza certas rotinas com o "sinalizador de função" ativado . Isso ocorre em casos como o "possessivo reverso" ou quando uma rotina "atribua" um valor .
*   *Callbacks*: Funções passadas para o Windows como ponteiros, exigem a palavra-chave compativelmente no cabeçalho .

Em resumo, Rotina é o termo geral, enquanto Função em Português Puro parece se referir a rotinas com um propósito de retorno ou um mecanismo de interação específico, muitas vezes envolvendo flags internos do compilador.

#### *Como definir tipos escalares (unidades de medida) em Português Puro?*

Português Puro permite a definição de tipos de dados que incorporam unidades de medida, utilizando o conceito de **razão de escala** .

*   Uma razão de escala é uma proporção  (que é uma fração ) e é usada em formas geométricas .
*   Tipos numéricos podem ter uma razão de escala associada a eles . Por exemplo, twip é um número , e unidades como raio, tamanho, largura, altura, quantidade de caracteres e tamanho da letra são expressas em twips .
*   A altura da fonte é composta de twips .
*   Durante a compilação, se um tipo tem uma razão de escala, ela é multiplicada pela razão de escala de seu tipo base, permitindo a criação de unidades derivadas .
*   É importante notar que "proporções e escalas de medida só devem ser utilizadas em tipos de dados numéricos" .
*   A IDE (PAL-1000) oferece comandos para mudar o tamanho usando valores em pixels ou polegadas, sugerindo conversões de unidades internas .

#### *Qual a diferença entre uma lista, uma lista estruturada e uma estrutura com campos em Português Puro?*

Estes termos se referem a diferentes aspectos da organização de dados em Português Puro:
*   *Estrutura (com campos)*: É o tipo de dado fundamental e mais genérico para agrupar itens relacionados . Uma estrutura permite definir um novo tipo de dado personalizado que contém um conjunto de campos (ou membros), cada um podendo ter um tipo de dado diferente . Seu tamanho é a soma do tamanho de seus campos . Por exemplo: Uma string é uma estrutura com Um caractere inicial e Um caractere final. .
*   *Lista*: No contexto de Português Puro, uma lista é essencialmente um **ponteiro** . Este ponteiro aponta para uma lista estruturada . A declaração de uma lista (ex: Um verso é uma lista com uma string.) é internamente convertida pelo compilador para um ponteiro para uma estrutura de versos .
*   *Lista Estruturada: Esta é a estrutura subjacente que representa um **nó individual* em uma lista duplamente encadeada . Uma lista estruturada é uma estrutura que contém **Uma lista denominada lista posterior** e **Uma lista denominada lista anterior** . No exemplo de Um verso é uma lista com uma string, a estrutura de versos que o ponteiro Um verso aponta seria o equivalente à lista estruturada, contendo próximo verso, verso anterior e a string .
*   *Umas Listas*: É uma estrutura para gerenciar uma coleção de listas. Umas listas é uma estrutura que possui **Uma lista denominada lista inicial** e **Uma lista denominada lista final** . Ela serve como um cabeçalho ou "âncora" para acessar o primeiro e o último elementos de uma lista duplamente encadeada .

Em resumo, uma *estrutura* é um agrupamento de dados heterogêneos. Uma *lista* é um ponteiro para um nó de lista. Uma *lista estruturada* é a definição desse nó de lista (com ponteiros para o próximo e anterior). E *umas listas* é uma estrutura que contém ponteiros para o início e o fim de uma coleção de nós de lista, facilitando a navegação.

#### *Quais são os tipos primitivos em Português Puro?*

Português Puro possui apenas dois tipos de dados primitivos, a partir dos quais todos os outros tipos são construídos :
*   **byte**: Um valor numérico que ocupa 8 bits de memória, com valores que variam de 0 a 255 .
*   **estrutura**: Um tipo de dado altamente estruturado que permite agrupar itens relacionados de diferentes tipos . Uma estrutura vazia ocupa 0 bytes .

#### *Como são definidos e declarados novos tipos de dados?*

A sintaxe para declarar uma nova estrutura (que é a base para a maioria dos tipos complexos) em Português Puro é :

**<artigo> <nome do tipo> é uma estrutura com <lista de campos>.**

Exemplos:
*   Uma string é uma estrutura com Um caractere inicial e Um caractere final. .
*   Para definir os campos dentro da estrutura, a sintaxe geral é: **<artigo indefinido> <tipo> denominado <nome>.** .
*   Exemplo de um campo específico: Um número denominado dmDitherType dentro de um DEVMODE .

#### *Como são declaradas e inicializadas variáveis globais e locais?*

*1. Variáveis Globais:*
*   São declaradas fora de qualquer rotina ou função e são visíveis em todo o programa .
*   Utilizam os *artigos definidos* (O, Os, A, As) .
*   Sintaxe: **<artigo definido> <nome da variável> <é|são> <artigo indefinido> <tipo da variável>.** .
*   Inicialização: Podem ser inicializadas no momento da declaração com **igual a <valor literal>** .
    *   Exemplos: A raiz de dois é uma fração igual a 99/70. ou O servidor SMTP é uma string igual a "localhost". .

*2. Variáveis Locais:*
*   São declaradas e inicializadas dentro de rotinas e funções, e só são visíveis dentro dessas .
*   Utilizam os *artigos indefinidos* (um, uns, uma, umas) .
*   Exemplos: Atribua 0 para um número. ou Ative um sinalizador. .
*   Após a primeira introdução com um artigo indefinido, as variáveis são referenciadas com um artigo definido .

#### *Como funciona o gerenciamento de memória em Português Puro?*

Em Português Puro, o programador é responsável pelo gerenciamento de memória em certas situações . A linguagem oferece rotinas e mecanismos para isso:
*   *Alocação*: Rotinas como **Aloque memória para um <tipo>** são geradas automaticamente pelo compilador para ponteiros, que reservam espaço para o conteúdo apontado .
*   *Desalocação*: Rotinas como **Desaloque um <tipo>** são geradas para liberar a memória alocada, especialmente para ponteiros .
*   *Finalização e Destruição*: O compilador gera rotinas de finalização (~Finalize um <tipo>) e destruição (Destrua um <tipo>) para tipos que necessitam, como strings ou estruturas, para liberar recursos ou memória alocada dinamicamente .
*   *Ponteiros*: Endereços de memória são armazenados em ponteiros de 32 bits. O endereço 0 é inválido e é denominado nulo ou inexistente .
*   *Stack*: A pilha (stack) é uma área de memória utilizada para salvar valores e endereços. Ela cresce inversamente (o endereço do topo é menor que o da base). Os registradores ESP (ponteiro de pilha) e EBP (ponteiro base) são usados para manipulá-la. Parâmetros de rotinas são acessados via EBP + 8, EBP + 12, etc. .

#### *O que são uniões de dados e como são usadas?*

Uma **união de dados** em Português Puro permite que um valor tenha múltiplas representações ou formatos dentro da mesma posição na memória . Ela é criada utilizando a palavra-chave **sob** na declaração de uma estrutura .

Isso significa que diferentes campos da estrutura podem compartilhar o mesmo espaço de memória, embora sejam acessados com nomes de tipos diferentes.

Exemplo:

Um número é uma estrutura com
Um primeiro byte,
Um segundo byte,
Um terceiro byte,
Um quarto byte,
Uma word de ordem inferior sob o primeiro byte,
Uma word de ordem superior sob o terceiro byte.

Neste exemplo, word de ordem inferior e word de ordem superior compartilham bytes com primeiro byte, segundo byte, terceiro byte e quarto byte, permitindo diferentes "visões" dos mesmos dados .

#### *Como são passados os argumentos para rotinas/funções?*

A estratégia de avaliação de argumentos em Português Puro é **por referência** . Isso significa que, ao passar uma variável para uma rotina ou função, a rotina trabalha diretamente com a variável original na memória, e quaisquer alterações feitas dentro da rotina afetarão a variável original .

Para situações onde a alteração do valor do parâmetro é indesejada, você pode usar o comando **Preserve**. Este comando cria uma cópia da variável original, permitindo que você a modifique sem afetar a original .

Entretanto, parâmetros passados para DLLs (bibliotecas externas) utilizam a convenção de chamada C, o que significa que a ordem é invertida e tipos "simples" são passados por valor .

Internamente, a pilha (STACK) é utilizada para a passagem de parâmetros. O primeiro parâmetro de uma rotina estará no endereço EBP + 8, o segundo em EBP + 12, e assim por diante .

#### *Como são definidos comentários em Português Puro?*

Português Puro suporta dois tipos de comentários:
*   *Comentários de linha única*: Iniciados por uma **barra invertida (\)** . Exemplo: \ Este é um comentário que ocupa uma linha inteira. .
*   *Comentários de bloco*: Utilizam **colchetes ([...])** para indicar comentários no meio das linhas. Exemplo: Pinte a caixa usando a cor preta [na borda] e a cor branca [como preenchimento].

#### *A linguagem Português Puro é case-sensitive?*

Não, a linguagem Português Puro *não é sensível a maiúsculas e minúsculas* . Isso significa que Variavel, variavel, e VARIAVEL seriam tratadas como o mesmo identificador pelo compilador.