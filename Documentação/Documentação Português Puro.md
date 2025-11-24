# **Bem-vindo**

Este capítulo apresenta o Português Puro e discute alguns de seus conceitos fundamentais.

### **O que você já deveria saber antes de seguir em frente?**

Este guia recomenda que você possua alguma experiência prévia em linguagens como C ou Pascal. Você poderá utilizar a linguagem de forma mais plena se tiver algum grau de conhecimento dos seguintes tópicos:

* **Estruturas de Dados:** Conhecimento de estruturas de dados comuns, como arrays, listas, pilhas, filas, árvores, grafos, etc.  
* **Complexidade de Algoritmos:** Compreensão e análise de complexidade (tempo e espaço) dos algoritmos.  
* **Gerenciamento de Memória:** Existirão situações em que o programador será responsável pelo gerenciamento de memória. Compreender alocação e liberação de memória é crucial para evitar vazamentos de memória e problemas de corrupção.  
* **Depuração e Testes:** Habilidades para depurar código, identificar erros e realizar testes para garantir a funcionalidade e a robustez do programa.  
* **Bibliotecas e APIs:** Familiaridade com o conceito de bibliotecas e APIs para realizar tarefas comuns, como entrada/saída, manipulação de arquivos, redes, etc.  
* **Segurança:** Conhecimento sobre práticas de segurança, por exemplo, vulnerabilidades relacionadas à estouro de buffer.  
* **Controle de Versão:** Familiaridade com sistemas de controle de versão e de comparação de arquivos (*diff*), como Git, para rastrear e gerenciar alterações no código-fonte.  
* **Compreensão de Arquitetura de Computadores:** Ter um entendimento básico da arquitetura x86 irá ajudar na compreensão de certos aspectos de implementação da linguagem.

## 

## **O que é Português Puro?**

Português Puro é uma linguagem de programação de alto nível, ou seja é uma linguagem que permite criar programas utilizando um alto nível de abstração.

Português Puro possui uma biblioteca padrão que contém diversos tipos de dados, tais como:

* Números inteiros;  
* Números fracionários;  
* Caracteres;  
* Strings;  
* Listas duplamente encadeadas;  
* Estruturas.

Além de possuir um conjunto de elementos essenciais que compõem o cerne da linguagem, incluindo operadores, estruturas de controle e declarações. O compilador e a Biblioteca padrão do Português Puro podem ser expandidos para uma variedade de finalidades, permitindo, assim, a extensão da linguagem.

## 

## **Começando a programar com Português Puro**

Para iniciar a aprendizagem da linguagem Português Puro, você precisará de um ambiente de desenvolvimento adequado.

Aqui está uma breve introdução sobre como dar seus primeiros passos com o Português Puro:

* Escolha um ambiente de desenvolvimento integrado (IDE) que suporte o Português Puro, como o [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/downloads/) ou o [*PAL-1000*](https://github.com/elenderg/PAL-1000).  
* Abra a IDE e crie um novo arquivo de texto.  
* Escreva o seu código no editor de texto da IDE.  
* Compile e execute o programa para ver os resultados.

O ambiente de desenvolvimento integrado pode variar dependendo da escolha do IDE, mas todos eles oferecem recursos semelhantes para escrever, compilar e executar o código.

Uma ferramenta útil para explorar as capacidades o Português Puro é o [Ambiente de desenvolvimento integrado](https://pt.wikipedia.org/wiki/Ambiente_de_desenvolvimento_integrado) (ADI), denominado [PAL-1000](https://github.com/elenderg/PAL-1000) que permite escrever, compilar e executar códigos em Português Puro.   
Seu código-fonte foi escrito 100% em Português Puro com o objetivo de demonstrar as capacidades da linguagem, servindo assim como uma [Prova de Conceito](https://pt.wikipedia.org/wiki/Prova_de_conceito).

Para compilar o programa, basta invocar o compilador através da linha de comando, informando o PATH do projeto a ser compilado.

Exemplo:

C:\\compilador.exe D:\\meus códigos\\meu projeto\\

Observação: Os arquivos que serão compilados devem possuir a extensão .pop

# 

# **Biblioteca Padrão**

A Biblioteca padrão contém definições de tipos, variáveis globais e rotinas de categorias diversas, tais como:

* [API Win32](https://learn.microsoft.com/pt-br/windows/win32/api/)  
  * [Cores, Canetas e Pincéis](https://learn.microsoft.com/pt-br/windows/win32/gdi/creating-colored-pens-and-brushes)  
  * [Console](https://learn.microsoft.com/pt-br/windows/console/console-reference)  
  * [Contexto de Dispositivo](https://learn.microsoft.com/pt-br/windows/win32/gdi/device-contexts)  
  * [Gerenciamento de Arquivos](https://learn.microsoft.com/pt-br/windows/win32/api/fileapi)  
  * [Criptografia](https://learn.microsoft.com/pt-br/windows/win32/seccrypto/cryptography-functions)  
  * [Fontes Tipográficas](https://learn.microsoft.com/pt-br/windows/win32/gdi/font-and-text-functions)  
  * [Interfaces Gráficas  \- Windows GDI](https://learn.microsoft.com/pt-br/windows/win32/gdi/windows-gdi)  
  * [Interação do Usuário](https://learn.microsoft.com/pt-br/windows/win32/user-interaction) (Eventos \- clique, pressionamento de tecla, etc)  
  * [Manipulação de Imagens](https://learn.microsoft.com/pt-br/windows/win32/gdi/bitmaps)  
  * [Protocolos de Rede e internet](https://learn.microsoft.com/pt-br/windows/win32/networking)  
  * Terminal  
* [Gráficos de Tartaruga](https://pt.wikipedia.org/wiki/Gr%C3%A1ficos_tartaruga) (Turtle Graphics)  
* Arquivos PDF  
* E-mail  
* Manipulação de Bits (conjunções e disjunções Lógicas)  
* Strings  
* Operações Matemáticas  
  * [Trigonometria Racional](https://pt.wikipedia.org/wiki/Trigonometria_racional)

**É necessário que o arquivo  Biblioteca padrão.pop  esteja na mesma pasta do programa a ser compilado.**

# 

# 

# **Características da linguagem**

[**Estratégia de avaliação**](https://pt.wikipedia.org/wiki/Estrat%C3%A9gia_de_avalia%C3%A7%C3%A3o)**:** A passagem de argumentos é feita [**por referência**](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference)**.**

## [**Sistema de tipos**](https://pt.wikipedia.org/wiki/Sistema_de_tipos)

[**Tipagem**](https://pt.wikipedia.org/wiki/Tipo_de_dado)**:** [Estática](https://en.wikipedia.org/wiki/Type_system#Static_type_checking), [forte](https://en.wikipedia.org/wiki/Strong_and_weak_typing).

[**Inferência de tipos**](https://en.wikipedia.org/wiki/Type_inference)**:** [Baseada no nome da variável.](https://portugues-puro.gitbook.io/documentacao/declaracao-e-inicializacao-de-variaveis/inferencia-automatica-de-tipos)

[**Conversão de tipos**](https://pt.wikipedia.org/wiki/Convers%C3%A3o_de_tipos)**:** [Explícita](https://en.wikipedia.org/wiki/Type_conversion#Explicit_type_conversion).

[**Paradigma de programação**](https://pt.wikipedia.org/wiki/Paradigma_de_programa%C3%A7%C3%A3o)**:** [Programação imperativa](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_imperativa), [Programação estruturada](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_estruturada).

[**Tipos primitivos**](https://pt.wikipedia.org/wiki/Tipo_de_dado)**:** [byte](https://pt.wikipedia.org/wiki/Byte) e [estrutura](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/estruturas-e-unioes-de-dados).

[**Tipos de dados não primitivos comumente encontrados na Biblioteca padrão**](https://pt.wikipedia.org/wiki/Tipo_de_dado)**:**

* [*caractere*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres)*;*  
* [*string*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres)*;*  
* [*lista*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/listas-duplamente-vinculadas)*;*  
* [*ponteiro*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#ponteiros)*;*  
* [*número*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#numeros-inteiros)*;*  
* [*fração*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#numeros-fracionarios)*;*  
* [*número hexadecimal*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#valores-hexadecimais)*;*  
* [*sinalizador*](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#valores-booleanos)*;*

[**Sensível a maiúsculas e minúsculas**](https://pt.wikipedia.org/wiki/Case-sensitive)**:** Não.

# 

# **Usando Comentários**

Comentários são trechos de texto inseridos no código-fonte que não são interpretados pelo compilador, sendo destinados a fornecer explicações e informações adicionais para os programadores que irão ler e manter o código no futuro.

## **Comentários de linha única**

Comentários de linha são iniciados por uma barra invertida. Exemplo:

**Inicialize os componentes. \\ Inicializa os principais componentes do programa.**

## **Comentário de bloco**

Os colchetes são utilizados para inserir comentários no meio das linhas. Exemplo:

Pinte a caixa usando a cor preta **\[na borda\]** e a cor branca. **\[como cor de preenchimento\]**

# 

# **Declaração e inicialização de variáveis**

Escopo é um termo utilizado para se referir à visibilidade de uma variável, ou seja, onde uma variável pode ser usada dentro de um programa. Existem dois principais escopos em Português Puro:

* **Escopo Global:** As variáveis declaradas fora de qualquer rotina ou função têm escopo global. Elas são visíveis em todo o programa, ou seja, podem ser acessadas de qualquer lugar.  
* **Escopo Local:** As variáveis declaradas dentro de uma rotina ou função têm escopo local. Elas só são visíveis dentro dessa rotina ou função.

## **Declaração de Variáveis Globais**

Variáveis globais devem ser declaradas com os artigos definidos listados a seguir:

* **O**  
* **Os**  
* **A**  
* **As**

A estrutura para declaração de variáveis é a seguinte: 

**\<artigo definido\> \<nome da variável\> \<é|são\> \<artigo indefinido\> \<tipo da variável\>.**

Exemplos:

**A cor do ambiente de trabalho é uma cor.**  
**A aba atual é uma aba.**  
**As aspas duplas são um caractere.**

A estrutura para declaração de variáveis seguido de sua inicialização é a seguinte:

**\<artigo definido\> \<variável\> \<é|são\> \<artigo indefinido\> \<tipo\>\<igual a\>\<valor literal\>**.

Exemplos:

**A raiz de dois é uma fração igual a 99/70.**  
**O número pi é uma fração igual a 355/113.**  
**O servidor SMTP é uma string igual a "localhost".**  
**As aspas duplas são um byte igual a 34\.**

**Observação:** Variáveis globais não podem ser declaradas dentro do corpo de uma rotina. 

## **Declaração e Inicialização de Variáveis Locais**

Variáveis locais devem ser declaradas e inicializadas dentro do corpo de rotinas e funções. Para declarar uma variável local, é necessário utilizar algum dos artigos indefinidos a seguir dentro do corpo de uma rotina:

* **um**  
* **uns**  
* **uma**  
* **umas**

A sintaxe geral para atribuição seguida de inicialização é a seguinte:

**\<artigo indefinido\>\<tipo da variável\>*\<denominado\>*\<nome da variável\>.**

Exemplos:

Atribua 18 para **um número *denominado* idade.**  
Atribua "João" para **uma string *denominada* nome.**  
Ative **um sinalizador *denominado* indicador de erro.**  
Converta o byte para **uma cifra hexadecimal *denominada* LineFeed.**

# 

# **Inferência automática de tipos**

O compilador é capaz de identificar automaticamente o tipo de uma variável local, a partir do nome da variável.

Exemplo:

**Atribua "João" para uma nova string.**

Ao se deparar com a linha acima, o compilador executa as seguintes ações:

* Cria uma variável local denominada "nova string".  
* A partir do nome da variável, infere seu tipo ("string", neste caso).  
* Inicializa  a variável "nova string" com o valor "João".

À primeira vista pode parecer que a string literal "João" foi o que ajudou o compilador a detectar o tipo da variável. Porém não é este o caso. Veja o exemplo abaixo:

**Um par de números fracionários é uma estrutura com**  
 **Uma fração e**  
 ***Uma segunda fração.***

Embora o tipo **"segunda fração"** não esteja definido em lugar algum, o compilador irá, a partir do nome da variável inferir seu tipo corretamente como **"fração"**.

# 

# **Tipos de dados**

Português Puro possui apenas 2 tipos de dados primitivos. São eles:

* byte  
* estrutura

Todos os demais tipos são considerados como tipos derivados de byte ou estrutura.

Exemplos:

Um ponteiro é uma **estrutura** com 4 bytes. 

Uma word é uma **estrutura** com  
 Um byte denominado byte inicial \[high byte\] e  
 Um byte denominado byte final \[low byte\].

Uma word de ordem inferior é uma **word**. **\\ words são estruturas**  
Uma word de ordem superior é uma **word**.

Um número é uma **estrutura** com  
 Um byte denominado primeiro byte,  
 Um byte denominado segundo byte,  
 Um byte denominado terceiro byte,  
 Um byte denominado quarto byte, \\ 4 bytes \= 32 bits  
 Uma word de ordem inferior sob o primeiro byte,  
 Uma word de ordem superior sob o terceiro byte. 

Um caractere é um **byte**.  
**\\ ponteiros são estruturas**  
Um caractere inicial é um **ponteiro** para um byte.   
Um caractere final é um **ponteiro** para um byte.  
Um endereço de byte é um **ponteiro** para um byte.

Uma string é uma **estrutura** com  
 Um caractere inicial e  
 Um caractere final.

Uma lista é um **ponteiro** para uma lista estruturada.

Uma lista estruturada é uma **estrutura** com  
 Uma lista denominada lista posterior e  
 Uma lista denominada lista anterior.

Umas listas são uma **estrutura** com  
 Uma lista denominada lista inicial e  
 Uma lista denominada lista final.

Uma fração é uma **estrutura** com  
 Um número denominado numerador e **\\ números são estruturas**  
 Um número denominado denominador.

# 

# **Valores numéricos**

A linguagem trabalha com os seguintes valores numéricos:

* [Bytes](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres#caracteres)  
* [Números inteiros;](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#numeros-inteiros)  
* [Números fracionários;](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#numeros-fracionarios)  
* [Números mistos;](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#numeros-mistos)  
* [Valores hexadecimais;](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#valores-hexadecimais)  
* [Ponteiros;](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#ponteiros)  
* [Valores booleanos.](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos#valores-booleanos)

## [**Bytes**](https://en.wikipedia.org/wiki/Byte)

Bytes são valores numéricos que ocupam 8 [bits](https://en.wikipedia.org/wiki/Bit) de memória. (*Bytes e [estruturas](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/estruturas-e-unioes-de-dados) são um [tipo de dado primitivo](https://en.wikipedia.org/wiki/Primitive_data_type) a partir do qual são construídos todos os outros tipos da linguagem*).

**Seu intervalo de valores vai de 0 a 255\.**

A Biblioteca padrão possui rotinas para efetuar operações aritméticas comuns em bytes (e também nos demais tipos numéricos abaixo), tais como soma, subtração, multiplicação e divisões inteiras.

## [**Words**](https://pt.wikipedia.org/wiki/Palavra_\(ci%C3%AAncia_da_computa%C3%A7%C3%A3o\)) **(Palavras)**

As words são compostas por 2 bytes e, consequentemente, ocupam 16 bits de espaço em memória.

Words possuem o funcionamento similar ao dos números inteiros, porém **seu intervalo de valores vai de \-32768 a \+32767.**

Devido às particularidades da arquitetura Windows/Intel x86, os bits em cada um dos bytes da word são armazenados na forma "[little-endian](https://pt.wikipedia.org/wiki/Extremidade_\(ordena%C3%A7%C3%A3o\))" (da esquerda para a direita), porém os bytes em si são armazenados de forma inversa (ou seja, na forma "[big endian](https://pt.wikipedia.org/wiki/Extremidade_\(ordena%C3%A7%C3%A3o\))").  
 
Demonstração do armazenamento Little-endian e Big-endian

## **Números inteiros**

Um "número" consiste em dígitos, que podem estar precedidos de um sinal positivo ou negativo. Exemplos:

0

123

\-2147483648

\+2147483647

A implementação de um número de 32 bits é a seguinte:

Um número é uma estrutura com   
 Um primeiro byte,  
 Um segundo byte,  
 Um terceiro byte,  
 Um quarto byte, \\ 4 bytes \= 32 bits   
 Uma word de ordem inferior sob o primeiro byte,   
 Uma word de ordem superior sob o terceiro byte.

Os números são armazenados de trás para frente (de acordo com o formato "[big-endian](https://pt.wikipedia.org/wiki/Extremidade_\(ordena%C3%A7%C3%A3o\))") devido à [extremidade (ordenação)](https://pt.wikipedia.org/wiki/Extremidade_\(ordena%C3%A7%C3%A3o\)) dos processadores x86.

O intervalo de valores do tipo número vai de  **\-2.147.483.648** até **\+2.147.483.647.**

## 

## **Números fracionários**

Uma fração é um número seguido de uma barra e um número sem sinal.

Exemplos:

335/113

25946/9545

\-19601/13860

A implementação de uma fração é a seguinte:

Uma fração é uma estrutura com  
 Um numerador e  
 Um denominador.

## **Números mistos**

Um número misto é composto de um número inteiro e um '+' acompanhado de uma fração. Exemplos:

1+1/2

\-2+2/3

3+3/4

Abaixo temos a implementação de números mistos:

Um numeral misto é uma estrutura com   
 Um número inteiro e   
 Uma proporção e   
 Uma fração sob a proporção.

## **Valores Hexadecimais**

Os valores hexadecimais são prefixados com o caractere **$**.

Exemplos:

**$DEADBEEF**

**$B0DEFE10**

**$AD0BE**

**$0CAF0F0**

## **Ponteiros**

Um ponteiro é uma estrutura com 4 bytes, funcionando de forma similar a um número, no sentido que é possível efetuar operações aritméticas comuns (soma, subtração, etc).

Os endereços de memória são armazenados em variáveis do tipo ponteiro, ocupando 32 bits, sendo armazenados "de trás para frente" (formato "[big-endian](https://pt.wikipedia.org/wiki/Extremidade_\(ordena%C3%A7%C3%A3o\))"). Eles têm o mesmo intervalo dos números, porém os valores negativos não estão disponíveis para utilização. 

**O endereço 0 representa um valor inválido** e é denominado **nulo** ou **inexistente**. 

**Você pode "anular" um ponteiro para torná-lo nulo.**

## **Valores booleanos**

Existem 2 valores booleanos:

**sim** (equivalente ao valor 1\)  e  **não** (equivalente ao valor 0).

Eles também ocupam 32 bits. O compilador interpreta 0 como "não" e 1 como "sim".  Você pode desativar um sinalizador para indicar "não" ou ativar um sinalizador para indicar "sim".

## **Valores escalares**

Imagine que você queira fazer uma caixa com 100 pixels de largura e 200 pixels de altura.

Você provavelmente invocaria a rotina usando uma sintaxe similar à abaixo:

**Faça uma caixa com 100 *pixels* por 200 *pixels*.**

Embora sintaticamente o código esteja correto, para podermos utilizar o termo *pixels* como unidade de medida (isto é, usar um termo logo após um valor numérico), primeiramente precisamos informar ao compilador que o termo “**pixels”** se refere a uma unidade de medida. Para fazer isso, precisamos criar um tipo escalar.

**A sintaxe para declaração de tipos escalares é a seguinte:**

**\<Artigo indefinido\>\<tipo escalar\>\<é|são\>\<escala numérica\>\<tipo base\>.**

Exemplo:

**Um pixel são 15 twips.**

Onde *twip* corresponde ao **\<tipo base\>** numérico definido anteriormente e \<escala numérica\> corresponde a proporção de escala desejada.

Em certas situações, pode ser necessário criar um tipo cujo valor corresponde a um múltiplo de um tipo base. Quando não existir uma unidade de medida correspondente, você pode criar uma variável numérica, por exemplo:

**Um milissegundo é um número.**

Na linha acima criamos um novo tipo (denominado **milissegundo**) este sendo um tipo derivado a partir do tipo base **número**.

A partir daí, podemos criar os demais tipos escalares derivados do tipo **milissegundo**, por Exemplo:

**Um segundo são 1000 milissegundos. \\ Este é um tipo escalar**  
**Um minuto são 60 segundos.**  
**Uma hora são 60 minutos.**  
**Um dia são 24 horas.**

Já que definimos um segundo como sendo igual a 1000 milissegundos, cada vez que criarmos uma variável do tipo segundo, o compilador automaticamente multiplicará o valor desta variável por 1000 ao realizar cálculos envolvendo milissegundos,e  assim por diante.

Voltando ao exemplo inicial, para criar uma rotina que suporte tipos escalares, basta usar os tipos base no cabeçalho da mesma. Exemplo:

Rotina para que se faça uma caixa uns *twips* por uns *outros twips*:

Como o tipo pixel é um tipo proporcional ao tipo base twip, o compilador irá efetuar a identificação dos tipos de forma automática.

# **Estruturas e Uniões de dados**

Uma estrutura (também chamada de registro) é um [tipo](https://wiki.freepascal.org/Type) de dados altamente estruturado. Eles são amplamente usados  para agrupar itens relacionados.

Em português Puro,  [a palavra-chave "estrutura](https://en.wikipedia.org/wiki/Record_\(computer_science\))" é utilizada para definir novas [estruturas de dados](https://pt.wikipedia.org/wiki/Estrutura_de_dados). Isto permite que você defina um novo [tipo de dados](https://pt.wikipedia.org/wiki/Tipo_de_dado) personalizado que contém um conjunto de campos (ou membros), onde cada campo pode ter um tipo de dado diferente. Essa é uma parte fundamental da linguagem, pois permite criar estruturas de dados complexas para representar informações de maneira organizada. Aqui estão alguns detalhes adicionais.

Enquanto estruturas de dados simples como [vetores](https://wiki.freepascal.org/Array) ou conjuntos consistem de elementos do mesmo tipo, uma estrutura pode consistir de elementos de diferentes tipos e pode ser muito complexo. Cada parte separada de uma estrutura é chamada de *campo*.

**Declaração de Estruturas:** A sintaxe para declarar uma estrutura em Português Puro é a seguinte:

**\<artigo\>\<nome do tipo\>*\<é uma estrutura com\>*\<lista de campos\>.**

Exemplo:

Uma string é uma estrutura com   
 Um caractere inicial e   
 Um caractere final.

Uma estrutura vazia ocupa **0 bits** na memória, mas você pode definir estruturas de qualquer comprimento adicionando "campos" ou "membros" ao protótipo da estrutura. Esses campos podem ser de qualquer tipo.

O tamanho da estrutura é, em via de regra, igual à soma do tamanho de seus campos.

A estrutura acima contém 02 membros do tipo ponteiro: o **caractere inicial** e o **caractere final**. Este tipo de declaração só funcionará se estes tipos já estiverem declarados previamente (caso contrário o compilador emitirá uma mensagem de erro informando que o tipo de dado declarado não foi reconhecido).

Não é necessário definir um novo tipo de dado para cada membro de uma estrutura. Se o tipo de dado for utilizado apenas dentro do contexto da estrutura, o ideal é utilizar a palavra-chave **"denominado"** (e suas respectivas flexões em gênero e número), conforme demonstrado no exemplo abaixo.

A sintaxe geral é:

**\<artigo indefinido\> \<tipo\> denominado \<nome\>.**

Exemplo:

Uma string é uma estrutura com   
 Um ponteiro **denominado** caractere inicial e   
 Um ponteiro **denominado** caractere final.

Um DEVMODE é uma estrutura com  
\\ Contém informações sobre a inicialização de uma impressora ou monitor de vídeo.  
 32 bytes **denominados** dmDeviceName,  
 Uma word **denominada** dmSpecVersion,  
 Uma word **denominada** dmDriverVersion,  
 Uma word **denominada** dmSize,  
 Uma word **denominada** dmDriverExtra,  
 Um número **denominado** dmFields,  
 Uma word **denominada** dmOrientation,  
 Uma word **denominada** dmPaperSize,  
 Uma word **denominada** dmPaperLength,  
 Uma word **denominada** dmPaperWidth,  
 Uma word **denominada** dmScale,  
 Uma word **denominada** dmCopies,  
 Uma word **denominada** dmDefaultSource,  
 Uma word **denominada** dmPrintQuality,  
 Uma word **denominada** dmColor,  
 Uma word **denominada** dmDuplex,  
 Uma word **denominada** dmYResolution,  
 Uma word **denominada** dmTTOption,  
 Uma word **denominada** dmCollate,  
 32 bytes **denominados** dmFormName,  
 Uma word **denominada** dmLogPixels,  
 Um número **denominado** dmBitsPerPel,  
 Um número **denominado** dmPelsWidth,  
 Um número **denominado** dmPelsHeight,  
 \[...\]

## **Uniões de dados**

Uma união é um valor que pode ter várias representações ou formatos dentro da mesma posição na memória.

**É possível criar uma "[união de dados](https://en.wikipedia.org/wiki/Union_type)" utilizando a palavra-chave sob.**

Exemplo:

Um número é uma estrutura com  
 Um primeiro byte,  
 Um segundo byte,  
 Um terceiro byte,  
 Um quarto byte,  
 Uma word de ordem inferior **sob** o primeiro byte,  
 Uma word de ordem superior **sob** o terceiro byte.

   
Uma word é uma estrutura com  
 Um byte inicial e   
 Um byte final.

A estrutura **número**, será armazenada da seguinte forma:


Sendo que cada **word** será armazenada da seguinte forma:  

# 

# **Acessando os valores dos campos de estruturas**

Depois de definir um novo tipo de estrutura, você pode criar variáveis desse tipo e acessar seus campos. Para obter e modificar algum o valor de algum campo de uma estrutura, utiliza algumas das contrações abaixo:

* ***deste***  
* ***destes***  
* ***desta***  
* ***destas***

Por exemplo, na estrutura a seguir:

Uma pessoa é uma estrutura com  
 Um nome,  
 Um sobrenome e  
 Uma idade.

Poderíamos alterar os valores dos membros individuais desta estrutura da seguinte forma:

Atribua "João" para o nome desta pessoa.  
Atribua "da Silva" para o sobrenome desta pessoa.  
Atribua 30 para a idade desta pessoa.

Após preencher os campos da estrutura, podemos utilizar da mesma sintaxe para acessá-los

Escreva o nome **desta** pessoa seguido de " " junto com o sobrenome **desta** pessoa.

# 

# **Strings e caracteres**

## **Caracteres**

O compilador trabalha com os caracteres constantes na [code page](https://en.wikipedia.org/wiki/Code_page) [Windows 1252](https://en.wikipedia.org/wiki/Windows-1252) ([ISO-8859-1](https://pt.wikipedia.org/wiki/ISO/IEC_8859-1)).

A lista é composta de 256 caracteres, incluindo [caracteres de  controle](https://pt.wikipedia.org/wiki/Caractere_de_controle).

**␀ ␁ ␂ ␃ ␄ ␅ ␆ ␇ ␈ ␉ ␊ ␋ ␌ ␍ ␎ ␏ ␐ ␑ ␒ ␓ ␔ ␕ ␖ ␗ ␘ ␙ ␚ ␛ ␜ ␝ ␞ ␟      •  \! " \# $ % & ' ( ) \* \+ , \- . / 0 1 2 3 4 5 6 7 8 9 : ; \< \= \> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] ^ \_ \` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } \~ ? € ‚ ƒ „ … † ‡ ˆ ‰ Š ‹ Œ Ž ‘ ’ “ ” • – — ˜ ™ š › œ ž Ÿ ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯ ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿ À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ**

Abaixo temos a implementação do tipo caractere:

**Um caractere é um byte. \\ 1 byte \= 8 bits**

Um byte são 8 bits sequenciais de dígitos binários. São  números sem sinal, com valores variando de 0 a 255\.

Como os caracteres são um tipo derivado do tipo base **byte**, é possível realizar operações aritméticas comuns nos caracteres (tal como operações de soma, subtração, etc).

## 

## **Strings**

Strings são delimitadas com aspas duplas.

*Exemplo:*

**O servidor SMTP é uma string igual a "localhost".**  
**Atribua "José" ao nome desta pessoa.**  
**Se o nome desta pessoa for "João", retorne.**

As aspas duplas são utilizadas como [caractere de escape](https://pt.wikipedia.org/wiki/Caractere_de_escape) quando for necessário escrever uma string com aspas.

*Exemplo:*

**Atribua "Erro. A palavra chave "*"Itere"*" não foi localizada." para a mensagem de erro.**

No código abaixo temos a implementação do tipo string:

Uma string é uma estrutura com  
 Um caractere inicial e  
 Um caractere final.

*Sendo que*

Um caractere inicial é um ponteiro para um byte.  
Um caractere final é um ponteiro para um byte.

O compilador armazena as strings em duas partes:

* Primeiramente ele cria uma **estrutura** que contém um par de ***ponteiros de bytes*** denominados **caractere inicial** e  **caractere final**, (que apontam respectivamente para o início e para o final da string) e;  
* Um array dinâmico que contém os bytes reais da string em si, de forma similar à imagem abaixo:


Observação: os números no diagrama acima correspondem a endereços fictícios.

Uma string é considerada em branco se o caractere inicial for inexistente (ou seja, nenhuma memória foi alocada ainda) ou se o endereço do caractere final for menor do que o endereço do caractere inicial (o que permite ao compilador realizar pré-alocação de memória).

As strings são alocadas dinamicamente e podem ter qualquer comprimento \- mas a memória de strings é gerenciada inteiramente pelo compilador, quase como se fossem alocadas estaticamente. Em outras palavras, você não precisa se preocupar com elas, pois o compilador gerencia a alocação e desalocação de forma automática.

## **Manipulando strings**

Na Biblioteca padrão existem diversas rotinas para manipulação de strings.

Exemplos:

**Atribua "valor literal" para uma string.**  
**Acrescente "texto" para uma string.**  
**Insira "texto" em uma string antes de um caractere.**  
**Remova o caractere inicial de uma string.**  
**Remova o caractere final de uma string.**  
**Preencha uma string com um caractere usando uma quantidade.**  
**Remova os caracteres iniciais de uma string usando um número.**  
**Remova os caracteres finais de uma string usando uma quantidade.**  
**Remova os caracteres de uma string usando uma substring.**

Você também pode alterar uma string para deixar o texto em **LETRAS MAIÚSCULAS** ou em  **letras minúsculas**. (Ou alterar apenas a primeira letra para letras maiúsculas).  
E você pode, é claro, obter o comprimento de uma string, em bytes.

Exemplo:  
**Atribua "João" para uma string.**  
**Atribua o comprimento desta string para um número.**

Além disso, você pode concatenar strings com strings — e outros tipos de dados — usando os operadores junto com ou seguido de.

Exemplo:  
**Atribua o nome junto com o sobrenome para uma string.**  
**Escreva "Erro \#" junto com o número do erro seguido de "." no console.**

# 

# **Subtextos**

Um "subtexto" faz parte de uma string. Os subtextos são implementadas como uma estrutura similar a uma string — um par de ponteiros de bytes chamados caractere inicial e caractere final — o que torna o subtexto "compatível" com o tipo string.

O comando:

**Lance um subtexto em uma string.**

Faz com que o caractere inicial do subtexto aponte para início da string e que o caractere final do subtexto passe a apontar para o final da string.

Ao incrementar o valor do endereço do caractere inicial ou reduzir o valor do endereço do caractere final do subtexto, você consegue remover os caracteres iniciais ou finais da string, respectivamente.

Você também pode usar o comando:

**Posicione um subtexto em uma string.**

O comando acima define apenas o caractere inicial do subtexto, deixando o valor do caractere final inicialmente em branco, porém pronto para ser alterado. Ao definir e incrementar o valor do caractere final, você pode ir criando a substring, ao acrescentar um byte de cada vez.

Os subtextos são utilizados principalmente de forma conjunta com "percorredores".

**Existem certas operações que não podem ser efetuadas em subtextos.**

Primeiro, vamos olhar para o exemplo.

O código abaixo funciona corretamente...

**Rotina para que se execute o programa:**  
 **Atribua "abc" para uma string.**

Já o código abaixo gera um vazamento de memória

**Rotina para que se execute o programa:**  
 **Atribua "abc" para um subtexto.**

Por quê?

Porque a segunda versão é um abuso do tipo subtexto; ela usa o subtexto de uma forma para o qual ele não foi projetado.

Os subtextos devem ser referências para partes de outras strings reais.

E já que subtextos são referências, elas nunca são desalocadas automaticamente.

O código acima "vaza", porque o subtexto é (incorretamente) tratado como uma string e a memória é alocada quando a rotina "atribua uma string para outra string" é chamada.

Mas o tipo real da variável ainda é substring, então as rotinas de desalocação automática são ignoradas.

Em resumo, nunca "atribua" nada para um subtexto. Simplesmente "lance" ou "posicione" um subtexto em uma string, quando necessário.

# 

# **Percorredores**

Um "percorredor" é uma estrutura usada para analisar strings (fazer o parsing) . Para entendê-lo, você deve estar familiarizado com o conceito "[strings](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres#strings)" e "[subtextos](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres/subtextos)".

Parsing é o ato de percorrer um bloco de texto, um pedaço de cada vez, onde um pedaço pode ser tão pequeno quanto uma letra ou tão grande quanto o bloco inteiro.

Vamos usar a string abaixo como nosso bloco de texto de exemplo:

**"The quick brown fox jumps over the lazy dog"**

Digamos que queremos extrair cada uma das palavras individuais da string acima.

As ferramentas que usaremos serão

* o subtexto, e  
* o percorredor

**Um percorredor é definido da seguinte forma:**

**Um percorredor é uma estrutura com**   
 **Uma cópia da string original,**  
 **Um segmento final e**  
 **Um segmento inicial.**

**Uma cópia da string original é um subtexto.**   
**Um segmento inicial é um subtexto.**   
**Um segmento final é um subtexto.**

Quando você "lançar" um subtexto na string acima, o compilador irá definir o caractere inicial do subtexto como **"T"** (da palavra **The**) e o caractere inicial como **"g"** (da palavra **dog**).

Ao usar o comando:

**"Lance um percorredor sobre o subtexto"**

Os membros do percorredor ficarão assim:

* cópia da string original \= "**The quick brown fox jumps over the lazy dog"**  
* segmento inicial \= ""  
* segmento final \= "**The quick brown fox jumps over the lazy dog"**

A partir daí podemos invocar a rotina

**Mova o percorredor (strings com aspas).**

Neste momento, os membros do percorredor ficarão assim:

* cópia da string original \= "**The quick brown fox jumps over the lazy dog"**  
* segmento inicial \= "**The**"  
* segmento final \= "**quick brown fox jumps over the lazy dog"**

Se repetirmos o comando, os membros do percorredor ficarão assim:

* cópia da string original \= "**The quick brown fox jumps over the lazy dog"**  
* segmento inicial \= "**quick**"  
* segmento final \= "**brown fox jumps over the lazy dog"**

Perceba que o "**The"** foi "removido" do segmento inicial.

Outra rotina útil que serve para percorrer uma string caractere a caractere é:

**Avance o percorredor.**

Digamos que o nosso percorredor esteja assim:

* cópia da string original \= "**The quick brown fox jumps over the lazy dog"**  
* segmento inicial \= ""  
* segmento final \= "**The quick brown fox jumps over the lazy dog"**

Ao usar a rotina "avance um percorredor", nosso percorredor ficará assim:

* cópia da string original \= "**The quick brown fox jumps over the lazy dog"**  
* segmento inicial \= **"T"**  
* segmento final \= "**he quick brown fox jumps over the lazy dog"**

Importante:

Subtextos contém ponteiros para os caracteres então precisamos usar a seguinte sintaxe para obter o valor de um subtexto em si:

**O conteúdo deste caractere inicial deste segmento inicial deste percorredor.**

É um tanto quanto prolixo, mas não há outra forma.

# **Listas duplamente vinculadas**

Uma lista encadeada ou lista ligada é uma [estrutura de dados](https://pt.wikipedia.org/wiki/Estrutura_de_dados) linear e dinâmica. Ela é composta por vários elementos que estão interligados através de [ponteiros](https://pt.wikipedia.org/wiki/Ponteiro_\(programa%C3%A7%C3%A3o\)), ou seja, cada elemento da lista possui um ponteiro que aponta para o [endereço de memória](https://pt.wikipedia.org/wiki/Endere%C3%A7o_\(mem%C3%B3ria\)) da próxima célula. Desse modo, os elementos da lista não precisam estar em posições contíguas na memória. Isso faz com que a estrutura se torne dinâmica, pois a qualquer momento, é possível incluir um novo elemento na lista, bastando ajustar os ponteiros das células já existentes, de modo que a nova célula seja inserida na estrutura com êxito, na posição desejada pelo programador.

Você pode declarar listas usando a seguinte sintaxe:

**A Bíblia é uma lista com uns versos.**  
**Um verso é uma lista com uma string.**

O compilador irá, internamente, converter as declarações acima, no código abaixo:

**Uns versos são uma lista com**  
 **Um verso denominado primeiro verso e**  
 **Um verso denominado último verso.**

**Um verso é um ponteiro para uma estrutura de versos.**

**Uma estrutura de versos é uma estrutura com**  
 **Um verso denominado próximo verso,**  
 **Um verso denominado verso anterior e**   
 **Uma string.**

Na Biblioteca padrão existem rotinas diversas para trabalhar com listas.

Exemplos:

**Acrescente uma lista para umas listas.**   
**Acrescente umas listas para umas outras listas.**   
**Insira uma lista em umas listas após uma outra lista.**   
**Insira umas listas em umas outras listas após uma lista.**  
**Insira uma lista em umas listas antes de uma outra lista.**   
**Insira umas listas em umas outras listas antes de uma lista.**   
**Mova uma lista de umas listas para outras listas.**   
**Mova umas listas para umas outras listas.**   
**Anteponha uma lista para umas listas.**   
**Anteponha umas listas para umas outras listas.**   
**Reverta umas listas.**  
**Remova uma lista de umas listas.**

Exemplo de utilização:

**Acrescente o verso para os versos.**  
**Insira o verso após os outros versos.**  
**Remova o verso desde os versos.**

A Biblioteca padrão também aceita o comando

"Atribua a quantidade de elementos de uma lista para uma contagem."

***Listas são alocadas dinamicamente então é necessário efetuar a alocação e desalocação de memória das listas manualmente, de forma explícita.***

Exemplo de alocação:

**Aloque memória para a Bíblia.**

Exemplo de desalocação:

**Desaloque memória para a Bíblia.**

**Perceba que ao destruir uma lista, todos os seus elementos (excluindo ponteiros) são destruídos juntamente com ela.**

Para indicar que um elemento de uma lista trata-se de um ponteiro, utilize a palavra-chave "**(referência)"** após o nome do elemento. Isto indicará ao compilador que o campo trata-se de um ponteiro apenas.

Exemplos:

**Um campo de estrutura é uma estrutura com**  
 **Um sinalizador de redirecionamento,**  
 **Um campo (referência),**  
 **Uma rotina de função (referência),**  
 **Um sinalizador de empilhamento.**

**Uma unidade semântica é uma lista com**  
 **Uma string,**  
 **Um tipo (referência),**  
 **Uma variável (referência),**  
 **Um tipo atual (referência),**  
 **Um subtexto atual.**

# **Conversão de tipos**

Ao lidar com entrada e saída de dados, muitas vezes precisamos formatá-los para que sua exibição seja efetuada corretamente.

Em Português Puro, a conversão de dados é feita de forma explícita.   
Exemplo:

**Converta o número para uma string denominada valor.**  
**Converta a string para um número denominado quantidade.**

Apesar disso, é possível forçar o compilador a tratar um tipo de dado como sendo outro tipo. Para fazer isto é necessário utilizar a expressão **tal como** ou **tal qual**. Exemplos:

**Atribua o byte à cifra binária tal como \[se ele fosse\] um byte.**  
**Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.**  
**Converta o ponteiro para uma string tal qual uma cifra hexadecimal.**  
**Converta o trecho tal como  uma cifra hexadecimal para um texto hexadecimal.**  
**Destrinche a variável global tal como \[se ela fosse\] uma variável.**  
**Destrinche o campo tal como \[se ele fosse\] uma variável.**  
**Disjuncione logicamente o ponteiro tal como \[se ele fosse\] um número com o número.**  
**Inicie a folha tal como \[se ela fosse\] uma folha no modo retrato.**  
**Redimensione a caixa arredondada tal como \[se ela fosse\] uma caixa usando a fração.**

# 

# **Laços e Desvios condicionais**

As declarações condicionais são iniciadas com a palavra-chave Se e seguem um padrão de sintaxe similar à abaixo:

**Se *\<expressão condicional\>*,**  
 Faça uma coisa**;**  
 Faça outra coisa**;**  
 Faça a última coisa**.**

O bloco de declarações é iniciado após a 1ª vírgula.

**As demais declarações devem ser separadas por ponto e vírgula, com exceção da última, *que deve terminar com um ponto*.**

Exemplo:

**Atribua 10 para um número.**  
**Se o número for maior do que 1,**  
 **Escreva "oi" no console;**  
 **Retorne.**

**O aninhamento de declarações condicionais não é permitido.**

## **Laços e iterações**

A linguagem possui apenas um tipo de laço, o qual funciona de forma similar a um laço do tipo  **while(true)**  presente em outras linguagens:

Exemplo:

**Itere.**  
 **Adicione 1 para uma contagem.**  
 **Escreva a contagem no console.**  
 **Se a contagem for maior do que 10, pare.**  
**Reitere.**

A palavra-chave **Itere** indica o início do laço de repetição. Quando o loop começa a partir da primeira linha do corpo da rotina, a keyword "Itere" pode ser omitida.

A palavra-chave **Reitere** direciona o fluxo de execução de volta ao início do loop atual.

A palavra chave **Pare** abandona o laço de repetição, interrompendo a execução do loop e saltando para a linha de código que estiver logo depois do bloco de repetição.

A palavra chave **Retorne** abandona a rotina atual e devolve o controle de execução à linha seguinte da rotina que chamou a atual.

**O aninhamento de laços não é permitido.**

## **Escopo de variáveis em loops**

Variáveis locais que forem definidas dentro de um loop continuarão existindo dentro do escopo da rotina atual . Exemplo:

Rotina para que se execute o programa:  
 Inicialize os componentes.  
 Itere.  
   Atribua "João" para uma string denominada nome.   
   \\ "nome" é a variável local inicializada dentro do escopo do loop  
   Se o nome for "João", pare.  
 Reitere.  
 Escreva o nome para StdOut.   
 \\ ^ A variável nome permanece acessível mesmo após o fim do loop  
 Feche o programa.

## **Inicialização de variáveis locais em expressões condicionais**

É possível declarar variáveis locais diretamente na expressão condicional. Observe o exemplo abaixo:

**Itere.**  
   **Se um número for maior que 10, pare.**  
   **Adicione 1 ao número.**      
**Reitere.** 

# 

# **Operadores**

## **Operadores Aritméticos**

A linguagem trabalha com os seguintes operadores aritméticos:

* **mais**  
* **menos**  
* **vezes**  
* **~~multiplicado por~~**  
* **dividido por**

TODO: Incluir multiplicado por no código fonte.

Você pode utilizar estes operadores em bytes, words, números (inteiros, mistos ou fracionários) e ponteiros.

Exemplos:

**Atribua o byte mais 32 ao segundo byte.**  
**Atribua 50 menos a word superior para a word inferior.**  
**Atribua a altura vezes 3/4 à nova altura.**  
**Atribua o comprimento multiplicado por 2 ao comprimento.**  
**Atribua o comprimento dividido por 2 ao comprimento.**  
**Atribua 1 mais o deslocamento para o ponteiro.**

Existem também rotinas auxiliares, tais como:

**Adicione \<número\> para \<segundo número\>.**  
**Subtraia \<número\> desde \<segundo número\>.**  
**Multiplique \<número\> por \<segundo número\>.**  
**Divida \<número\> por \<segundo número\>.**

## **Operadores de concatenação de strings**

Para concatenar strings você deve utilizar algum dos seguintes operadores de concatenação:

* junto com  
* seguido de  
* acompanhado de

Exemplos:

**Atribua o nome junto com o sobrenome para uma string.**  
**Atribua "José " seguido de "da Silva" para a string.**

# 

# **Precedência e Ordem de avaliação de operadores**

Todos os operadores têm precedência igual; ou seja, eles são avaliados na ordem na qual aparecem, isto é, da esquerda para a direita . A regra permanece mesmo para operações envolvendo multiplicação ou divisão.

Exemplo:

**Atribua 10 mais 15 menos 20 vezes 4 dividido por 5 para um número.**

O resultado da avaliação será **4**, devido a expressão ter sido avaliada como **((10 \+ 15 \- 20\) \* 4)) / 5** ao invés de **(10 \+ 15 \- \[20 \* ⅘\])**

# 

# 

# **Rotinas, Parâmetros e Funções**

A sintaxe básica para declaração de uma rotina é a seguinte:

**Rotina para que se \<nome da rotina\>:**

O nome da rotina começa após o **"se"**.

Parâmetros são indicados pelos artigos indefinidos:

* **um**  
* **uns**  
* **uma**  
* **umas**

Exemplos:

**Rotina para que se adicione uma cor e um rótulo para um menu:**

**Nome da rotina:** adicione

**Parâmetros:** cor, rótulo, menu

**Preposições e conjunções:** e, para.

**Rotina para que se crie uma imagem usando uma URL:**

**Nome da rotina:** crie

**Parâmetros:** imagem, URL

**Preposições e conjunções:** usando

As preposições e conjunções embora não façam parte do nome da rotina, devem ser invocadas de forma similar ao declarado no cabeçalho da rotina.

A 1ª rotina acima pode ser chamada de forma similar ao exemplo abaixo:

**Adicione a cor preta e "Abrir" para o menu.**  
**Adicione a cor vermelha e "Fechar" ao menu.**

A 2ª rotina, por exemplo poderia ser chamada das seguintes formas:

**Crie a imagem usando a URL.**

**Crie a imagem dada a URL.**  
**Crie a imagem com a URL.**  
**Crie a imagem desde a URL.**

Perceba que a linguagem suporta os seguintes itens:

**Contrações em geral\***

* à \-\> para a  
* ao \-\> para o  
* deste \-\> de este  
* destes \-\> de estes  
* desta \-\> de estas  
* destas \-\> de estas  
* desta \-\> de esta  
* na \-\> em a  
* nas \-\> em as  
* no \-\> em o  
* nos \-\> em os  
* num \-\> em um  
* nuns \-\> em uns  
* numa \-\> em uma  
* numas \-\> em umas  
* pelo \-\> por o  
* pelos \-\> por os  
* pela \-\> por a  
* pelas \-\> por as

**Sinônimos** (para as preposições).

* com / contendo / dado / desde / usando  
* em / para / por

Para um melhor entendimento da linguagem iremos converter a função Javascript abaixo para Português Puro:

**function FazAlgumaCoisa(numero) {**  
 **if(number \< 0){**  
   **return;**  
   **}**  
 **let contador \= numero \* 2;**  
 **while (true) {**  
   **contador \++;**  
   **if (contador \>= 10) {**  
     **break;**  
   **}**  
 **}**

**Dados da função**

**Nome:** FazAlgumaCoisa.

**Parâmetros:** numero.

**Variáveis locais:** contador.

**Número de linhas:** **12\***

*\*sendo que destas 12 linhas, 4 são inteiramente desperdiçadas com colchetes e espaços em branco*

**A rotina acima ficaria assim:**

**Para que se *faça alguma coisa* com um número:**

 **Se o número for menor do que 0, *retorne*.**

 **Atribua o número vezes 2 para um contador.**

 ***Itere*.**

   **Adicione 1 para o contador.**

   **Se o contador for maior do que 10, *pare*.**

 ***Reitere*.**

**Dados da rotina**

**Nome:** Faça alguma coisa

**Parâmetros:** número

**Variáveis locais:** contador.

**Número de linhas: 7**  
Ao invés da keyword ***function*** nós utilizamos ***para que se** (o termo "Rotina" é opcional).*

Note que o parâmetro **"número"** bem como a variável local **"contador"** foram referenciados com um artigo definido após serem introduzidas no código pela 1ª vez com um artigo indefinido.

## **Funções de retorno booleano**

A linguagem trabalha com o conceito de "funções deliberativas".

A sintaxe básica para declaração de uma função booleana é a seguinte:

Função para que se determine se\<expressão a ser avaliada\>:

O nome da função começa após o **"Função para que se determine se"**.

Exemplo:

**Função para que se determine se** **um** número ***é*** negativo:

 Se **o** número for menor do que 0, **diga sim.**

 \\ Caso contrário

 **Diga não.**

**"Diga sim"** equivale a um *"return true"* e **"Diga não"** é o equivalente de *"return false"*.

Toda função booleana precisa terminar com um "Diga sim" ou "Diga não".

O cabeçalho de funções booleanas devem ser iniciado da seguinte forma "**Função para que se determine se"**

As funções deliberativas devem, obrigatoriamente ser invocadas a partir de expressões condicionais.

As expressões condicionais somente podem ser incluídas dentro do escopo do corpo de uma rotina.

Para utilizar uma função de retorno booleano em uma rotina, basta usar o restante do cabeçalho da função (ou seja, o nome da função sem o trecho "**Função para que se determine").**

Exemplo:

**Rotina para que se escreva o fatorial de um número:**

 ***Se o número for negativo, retorne.***

 ***Se o número for 1, atribua 1 ao número.***

***\[...\]***

Os verbos ser/estar (e suas respectivas conjugações) são tratados como sinônimos pelo compilador.

## **Regras gerais para nomes de rotinas e funções**

* O nome da rotina começa após o *"para que se"* (ou após o *"para que se determine se"* no caso de funções deliberativas).  
* Artigos indefinidos indicam um novo parâmetro. Exemplos:  
  * *um número,*  
  * *uns vértices,*  
  * *uma string,*  
  * *umas formas*  
* Parênteses podem ser utilizados para "escapar" strings, parâmetros ou indicar rotinas de um mesmo grupo. Exemplo:  
  * *Rotina para que se execute um evento (clique \- botão direito):*  
  * *Rotina para que se execute um evento (clique \- botão esquerdo):*  
  * *Rotina para que se execute um evento (clique duplo):*  
  * *Rotina para que se execute um evento (atualização de tela):*  
* Preposições e artigos definidos são permitidos nos nomes das rotinas (porém não exercem nenhuma função especial além de tornar o nome da função mais inteligível). Exemplos:  
  * *Rotina para que se execute **o** programa:*  
  * *Rotina para que se ajuste **a** caixa de diálogo:*  
  * *Rotina para que se adicione um botão **para a** caixa de diálogo **usando** uma string:*

Perceba nas rotinas logo acima que os artigos definidos **não** indicam um parâmetro.

# 

# **Trabalhando com Bibliotecas externas**

Para utilizar bibliotecas externas, basta utilizar a palavra-chave Processe, seguido do nome da biblioteca (entre aspas duplas), juntamente com o nome da função (case-sensitive, entre aspas duplas). Caso seja necessário repassar argumentos para a função,  Exemplos:

**Processe "user32.dll" "CloseClipboard".**

Caso seja necessário repassar argumentos para a função, utilize a palavra-chave **com**.

**Processe"user32.dll" "OpenClipboard"com a janela principal do programa.**

Para obter o valor de retorno da função que foi invocada, utilize a palavra-chave **retornando**.

**Processe"user32.dll" "GetClipboardData"como formato de texto *retornando* um número identificador.**

# 

# 

# **Trabalhando com Instruções Hexadecimais**

Você pode incorporar código de máquina diretamente no código da sua aplicação, utilizando a palavra-chave Decodifique. Exemplos:

**Rotina para que se esvazie um ponteiro:**

**Decodifique$8B8508000000.\-\> salva o ponteiro (\[ebp+8\]) no registrador EAX**

**Decodifique$C70000000000. \-\> zera o registrador EAX**

As duas instruções hexadecimais acima são equivalentes ao código assembly abaixo:

**MOV EAX,\[EBP+8\] ; \-\> salva ponteiro no registrador eax**

**MOV \[EAX\],0 ; \-\> zera o registrador eax**

# 

# **Callbacks**

Em [programação de computadores](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_de_computadores), um método de callback é uma [rotina](https://pt.wikipedia.org/wiki/M%C3%A9todo_\(programa%C3%A7%C3%A3o\)) que é passada como [parâmetro](https://pt.wikipedia.org/wiki/Par%C3%A2metro) para outro método. É esperado então que o método execute o código do argumento em algum momento. A invocação do trecho pode ser imediata, como em um (callback síncrono), ou em outro momento (callback assíncrono).

Os meios em que os callbacks são suportados em diferentes linguagens de programação diferem, porém eles são normalmente implementados com sub-rotinas, [expressões lambda](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda), blocos de código ou [ponteiros](https://pt.wikipedia.org/wiki/Ponteiro_\(programa%C3%A7%C3%A3o\)) de funções.

Às vezes o Windows precisa que forneçamos o endereço de uma de nossas rotinas.

Você pode usar a seguinte sintaxe para obter o endereço de uma rotina:

**Aponte** um ponteiro **para a rotina** manipule uma variável qualquer.

Mas se você for passar o endereço para o Windows, certifique-se de que o cabeçalho da rotina inclua a palavra-chave **compativelmente** logo após o **para que se**.

Exemplo:

Rotina para que se **compativelmente** manipule uma variável qualquer:

# 

# **Introduzindo as palavras-chave "Preserve" e "original"**

Já que todos os parâmetros são passados por referência, inevitavelmente haverão situações onde a alteração do valor do parâmetro se tornará indesejada. Eis o que fazer nestes casos.

O comando "Preserve" cria uma cópia da variável original, para que você possa alterá-la sem maiores preocupações.

Exemplos:

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

Caso você deseje manipular a variável original, basta acrescentar a palavra chave "original" após o nome da variável preservada.

Exemplos de uso:

Rotina para que se inverta uma string:  
 Preserve a string.  
 Limpe a string original.  
 Itere.  
   Se a string estiver em branco, pare.  
   Obtenha um caractere desde a string (regressivamente).  
   Acrescente o caractere para a string original.  
 Reitere.

# **Usando a preposição "de"**

A preposição "de" é fundamental na língua portuguesa, pois estabelece relações de posse, origem, e especificação entre palavras, contribuindo para a clareza e coesão do discurso.

Conforme demonstrado, o compilador permite a declaração de tipos e variáveis contendo espaços. Exemplos:

\\----------------DEFINIÇÃO DE TIPOS \------------------

Uma mensagem de erro é uma string.  
Uma contagem de nomes é uma contagem.  
Um trecho de listagem é um trecho.  
Um sinalizador de erros é um sinalizador.  
Um endereço do arquivo é um endereço completo.  
Um nome da DLL é um nome.  
Um nome da função é um nome.

\\----------------VARIÁVEIS GLOBAIS \------------------

O botão do mouse é um botão.  
O texto de espaço é uma string igual a " ".

Perceba que as palavras "de", "do", "da", "dos" e "das" pudessem ser utilizadas livremente no nome dos tipos e variáveis.

Para que isso possa ser feito, tais palavras não são consideradas como preposições (pois preposições são proibidas em nomes de variáveis).

## **Introduzindo as palavras-chave "esse", "essa", "esses", "essas"**

No entanto, ainda assim é possível utilizar a preposição "de" tal como uma preposição comum. Veja os exemplos abaixo:

**Rotina para que se defina o tipo de uma unidade semântica:**

 **Se a unidade semântica for inexistente, retorne.**

 **\\\[...\]**

No cabeçalho da rotina acima, o "de" é considerado como preposição pois encontra-se antes de um artigo indefinido. Artigos indefinidos em cabeçalhos de rotina indicam a presença de um parâmetro.

Para invocar a rotina acima, poderíamos escrever:

**Defina o tipo dessa unidade semântica.**

Perceba que utilizamos a palavra "dessa" ao invés de "da".

Ao se deparar com a contração "dessa" o compilador executa algumas ações:

* Decompõe a palavra "dessa" em "de essa"  
* A palavra "de" recém criada se transforma em uma preposição, pois está acompanhada de um pronome ("essa").

Outros exemplos que seguem a mesma lógica:

Remova os caracteres ignoráveis no final dessa string.  
Remova as aspas dessa string.  
Inverta o sinal desse número.  
Troque o sinal desse número.

# 

# **Lidando com vazamentos de memória em laços**

Por convenção, usamos os verbos "criar" e "destruir" sempre que a alocação e desalocação de memória dinâmica estiverem envolvidas. É sua responsabilidade destruir o que quer que você criar antes de encerrar o seu programa. Se não fizer isso, você causará um "vazamento de memória", parecido com o da imagem abaixo:


Eis o código que gerou este aviso. Leia-o e tente identificar o erro:

Rotina para que se execute o programa:  
 Carregue as bibliotecas padrão do sistema.  
 Limpe a tela.  
 Mostre a seta do mouse.  
 Faça uma caixa 96 px por 48 px.  
 Centralize a caixa sobre a tela.  
 Itere.  
   Desenfileire um evento.  
   Se o evento for inexistente, pare.  
   Se a categoria deste evento for "movimentação de cursor",   
     Execute o evento usando a caixa (exibir cursor do mouse).  
   Se a categoria deste evento for "clique do botão esquerdo",  
     Retorne.  
 Reitere.  
 Desmanche todos os eventos.  
 Feche o programa.

Rotina para que se execute um evento usando uma caixa (exibir cursor do mouse):  
 Atribua a cor branca a uma cor.  
 Se a localização deste evento estiver na caixa,   
   Atribua a cor verde à cor.  
 Pinte e preencha a caixa com a cor.  
 Atualize a tela.

É um detalhe ínfimo, mas comum. Olhe para o código corrigido:

Rotina para que se execute o programa:  
 Carregue as bibliotecas padrão do sistema.  
 Limpe a tela.  
 Mostre a seta do mouse.  
 Faça uma caixa 96 px por 48 px.  
 Centralize a caixa sobre a tela.  
 Itere.  
   Desenfileire um evento.  
   Se o evento for inexistente, pare.  
   Se a categoria deste evento for "movimentação de cursor",   
     Execute o evento usando a caixa (exibir cursor do mouse).  
   Se a categoria deste evento for "clique do botão esquerdo",  
     Pare.  
 Reitere.  
 Desmanche todos os eventos.  
 Feche o programa.

Rotina para que se execute um evento usando uma caixa (exibir cursor do mouse):  
 Atribua a cor branca a uma cor.  
 Se a localização deste evento estiver na caixa,   
   Atribua a cor verde à cor.  
 Pinte e preencha a caixa com a cor.  
 Atualize a tela.

Perceba que a ÚNICA diferença é a linha 13, onde ao invés de "Pare", o código problemático contém a instrução "Retorne". Caso você utilize a instrução "Retorne" dentro da função Main, acabará encerrando o programa antes de efetuar a desalocação (linhas 19 e 20). Isso ocorre porque a instrução "Retorne" equivale a um "return;" de outras linguagens de programação.

# 

# **Cores**

A Biblioteca padrão implementa cores da seguinte forma:

**Uma cor tem uma matiz, uma saturação e um brilho.**

A Biblioteca padrão inclui clores claras, e escuras, incluindo tons brancos e pretos, sete tons de cinzas não saturados e mais de 80 cores totalmente saturadas com diferentes graus de luminosidade, como mostrado na imagem abaixo:  
![Paleta de cores]
A biblioteca padrão contém uma variável global para cada uma dessas cores.

Por exemplo:

**"A cor roxo claro",** 

ou

**"A cor azul escuro".**

Você deve omitir o "adjetivo" em tons de cores normais, como por exemplo em **"a cor vermelha".**

As cores são baseadas no [modelo de cor HSL](https://pt.wikipedia.org/wiki/HLS).

Você também pode criar suas próprias cores usando o comando:

**FAÇA uma cor usando uma *tonalidade* e uma *saturação* e um *brilho*.**

Exemplo:

**Faça uma cor usando 300 \[tonalidade\] e 1000 \[saturação\] e 500 \[brilho\].**

# 

# **Gráficos de Tartaruga (Turtle Graphics)**

Gráficos de tartaruga é um termo em [Computação gráfica](https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_gr%C3%A1fica) para designar um método de programar [desenhos vetoriais](https://pt.wikipedia.org/wiki/Desenho_vetorial) usando um [cursor](https://pt.wikipedia.org/wiki/Cursor) relativo (denominado "tartaruga") sob um [plano cartesiano](https://pt.wikipedia.org/wiki/Sistema_de_coordenadas_cartesiano).

A ideia de uma tartaruga virtual remonta à década de 1960\. Seymour Papert e seu grupo no MIT criaram a linguagem de programação LOGO, que podia controlar uma tartaruga robô com uma caneta física nela. As crianças dirigiam o robô, e ele desenhava enquanto se movia. Muitas linguagens de programação modernas incluem em suas bibliotecas os gráficos de tartarugas, incluindo Python.

Em Português Puro, a "tartaruga" possui três atributos:

* uma localização  
* uma orientação  
* uma caneta, sendo que esta possui atributos próprios tais como cor, espessura e estado (levantada ou abaixada).

A tartaruga se movimenta com comandos que são relativos à sua própria posição, tais como "ande 10 espaços à frente" e "gire 90 graus para a direita". A caneta transportada pela tartaruga também pode ser controlada, ao habilitá-la, configurando sua cor, ou configurando sua espessura.  

Abaixo constam alguns exemplos de gráfico de tartaruga criados com a linguagem:  
 
Hello World  
 
 
Color Wheel  
 
Rosa dos Ventos  
 
 
Triângulo de Sierpinski  
 
Retângulos  
 
Retângulos 2  
 
Floresta Fractal  
 
Floco de Neve de Koch  
 
Escargot  
 
Bloom 1  
 
Bloom 2  
 
Bloom 3  
 
Formas Geométricas  
 
Ilusão de òtica  
 
Ilusão de òtica  
 
Ilusão de Ótica  
 
Ilusão de Ótica

# 

# **Algoritmos de Exemplo**

Esta seção contém diversos algoritmos de exemplo.

### Observações

**Todo programa em Português Puro precisa conter necessariamente a rotina abaixo:**

Rotina para que se execute o programa:  
 \\ seu código aqui.  
**Certifique-se de incluir o arquivo "Biblioteca Padrão.pop" no mesmo diretório do seu projeto, já que ele contém diversas definições necessárias para a correta execução e exibição do seu programa.**

# 

# **Olá Mundo**

O código abaixo é um exemplo elaborado de um programa "Olá Mundo".

Rotina para que se execute o programa:   
 Carregue as bibliotecas padrão do sistema.   
 Limpe a tela.  
 Use letras de tamanho médio.  
 Use a canetinha grossa.   
 Itere.   
   Escolha aleatoriamente uma cor escura.  
   Comece no centro.  
   Vire 120 graus osmosiansos para a esquerda.   
   Vire à direita.   
   Mova 1 centímetro \[na diagonal\].   
   Vire à esquerda.   
   Escreva "OLÁ MUNDO\!".   
   Atualize a tela.  
   Adicione 1 para uma contagem.   
   Se a tecla Esc estiver sendo pressionada, pare.   
 Reitere.  
 Aguarde a tecla Esc.   
 Feche o programa.  

O resultado é o seguinte:  

# 

# **A \+ B**

Este algoritmo realiza a soma de 2 números inteiros, sendo que os números devem estar no intervalo de \-1000 a 1000\.

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
 Escreva "Soma \= " junto com a string para STDOUT. \\junto com o texto CRLF para STDOUT.

Rotina para que se determine se um número é válido:  
 \\Se o número for uma   
 Se o número for menor do que \-1000, diga não. \\ aprove / rejeite  
 Se o número for maior do que 1000, diga não.  
 Diga sim.

# 

# **Agenda Telefônica**

Uma agenda telefônica permite armazenar e organizar informações de contato de pessoas e empresas. Este algoritmo implementa uma agenda simples, usando listas duplamente encadeadas.

Um contato é uma lista com  
 Uma string denominada nome e  
 Uma string denominada número de telefone.

A agenda telefônica é \[composta de\] uns contatos.

O comando é um trecho.

Rotina para que se execute o programa:  
 Defina "console" como o tipo da aplicação.  
 Escreva o texto CRLF junto com "Digite um comando: " para StdOut.  
 Itere.  
   Escreva o texto CRLF junto com " \> " para StdOut.  
   Leia o comando desde a StdIn.  
   Se o comando estiver em branco,  
     Reitere.  
   Se o comando for "adicionar",   
     Adicione o contato;  
     Reitere.  
   Se o comando for "alterar",   
     Altere o contato;  
     Reitere.  
   Se o comando for "mudar",   
     Altere o contato;  
     Reitere.  
   Se o comando for "apagar",   
     Exclua o contato;  
     Reitere.  
   Se o comando for "excluir",   
     Exclua o contato;  
     Reitere.  
   Se o comando for "encontrar",   
     Encontre o contato;  
     Reitere.  
   Se o comando for "ajuda",   
     Mostre o menu de ajuda;  
     Reitere.  
   Se o comando for "listar",   
     Liste os contatos;  
     Reitere.  
   Se o comando for "fechar",   
     Destrua a agenda telefônica;  
     Pare.  
   Se o comando for "sair",  
     Destrua a agenda telefônica;  
     Pare.  
 Reitere.  
 Feche o nosso programa.

Rotina para que se mostre o menu de ajuda:  
 Escreva o texto CRLF junto com "Comandos Disponíveis:" para StdOut.  
 Escreva o texto CRLF junto com "Adicionar" para StdOut.  
 Escreva o texto CRLF junto com "Alterar" para StdOut.  
 Escreva o texto CRLF junto com "Excluir" para StdOut.  
 Escreva o texto CRLF junto com "Encontrar" para StdOut.  
 Escreva o texto CRLF junto com "Listar" para StdOut.  
 Escreva o texto CRLF junto com "Sair" para StdOut.  
 Escreva o texto CRLF junto com "Adicionar" para StdOut.

Rotina para que se adicione o contato:  
 Aloque memória para um contato.  
 Acrescente o contato na agenda telefônica.  
 Escreva "Digite o nome do contato: " junto com o texto CRLF para StdOut.  
 Leia uma string desde a StdIn.  
 Atribua a string para o nome deste contato.  
 Escreva "Digite o telefone do contato: " junto com o texto CRLF para StdOut.  
 Leia uma nova string desde a StdIn.  
 Atribua a nova string para o número de telefone deste contato.  
 Escreva "Contato adicionado." junto com o texto CRLF para StdOut.

Rotina para que se altere o contato:  
 Escreva "Digite o nome do contato a ser alterado: " junto com o texto CRLF para StdOut.  
 Leia uma string denominada nome desde a StdIn.  
 Encontre um contato usando o nome.  
 Se o contato for inexistente,  
   Escreva "Contato não encontrado." junto com o texto CRLF para StdOut;  
   Retorne.    
 Leia uma string denominada telefone desde a StdIn.  
 Atribua o telefone para o número de telefone deste contato.  
 Escreva "Contato alterado." junto com o texto CRLF para StdOut.

Rotina para que se exclua o contato:  
 Escreva "Digite o nome do contato a ser excluído: " junto com o texto CRLF para StdOut.  
 Leia uma string denominada nome desde a StdIn.  
 Encontre um contato usando o nome.  
 Se o contato for inexistente,  
   Escreva "Contato não encontrado." junto com o texto CRLF para StdOut;  
   Retorne.    
 Remova o contato desde a agenda telefônica.  
 Destrua o contato.  
 Escreva "Contato excluído." junto com o texto CRLF para StdOut.

Rotina para que se encontre o contato:  
 Escreva "Digite o nome do contato a ser encontrado: " junto com o texto CRLF para StdOut.  
 Leia uma string denominada nome desde a StdIn.  
 Encontre um contato usando o nome.  
 Se o contato for inexistente,  
   Escreva "Contato não encontrado." junto com o texto CRLF para StdOut;  
   Retorne.    
 Escreva o nome deste contato junto com a tabulação horizontal junto com "            " junto com o número de telefone deste contato junto com o texto CRLF para StdOut.

Rotina para que se liste os contatos:  
 Itere.  
   Obtenha um contato desde a agenda telefônica.  
   Se o contato for inexistente, pare.  
   Escreva o nome deste contato junto com a tabulação horizontal junto com "            " junto com o número de telefone deste contato junto com o texto CRLF para StdOut.  
 Reitere.  
 Se a contagem desta agenda telefônica for igual a 1,  
   Atribua a contagem desta agenda telefônica junto com " contato." para uma string.  
 Se a contagem desta agenda telefônica for maior do que 1,  
   Atribua a contagem desta agenda telefônica junto com " contatos." para a string.  
 Escreva o texto CRLF junto com a string junto com o texto CRLF para StdOut.

Rotina para que se encontre um contato usando uma string:  
 Atribua inexistente para o contato.  
 Itere.  
   Obtenha o contato desde a agenda telefônica.  
   Se o contato for inexistente, pare.  
   Se o nome deste contato começar com a string, pare.  
 Reitere.

# **Animação de sprites**

A Biblioteca padrão do Português Puro contém diversas rotinas para manipulação de imagens.

Aviso: para que este código seja executado corretamente, salve a imagem abaixo no mesmo diretório do projeto ou atualize o endereço contido na 5ª linha.  

Um sprite é uma imagem.

Rotina para que se execute o programa:  
 Carregue as bibliotecas padrão do sistema.  
 Atribua "sprite sheet.png" para um nome do arquivo. \\ ajuste conforme necessário  
 Crie uma lista de sprites usando o nome do arquivo.  
 Pinte a tela usando a cor branca.  
 Itere.  
   Se a Tecla Esc estiver sendo pressionada,   
     Pare.  
   Pegue um sprite dessa lista de sprites.  
   Se o sprite for inexistente,  
     Atribua o primeiro sprite desta lista de sprites ao sprite.  
   Pinte a caixa deste sprite usando a cor branca e a cor branca.  
   Pinte o sprite.  
   Aguarde 1/15 segundo.  
   Atualize a tela.  
 Reitere.  
 Destrua a lista de sprites.  
 Feche o programa.

Rotina para que se crie uma lista de sprites usando um nome do arquivo:  
 Atribua o endereço da pasta deste módulo junto com o nome do arquivo para um endereço completo.  
 Leia o endereço completo em um trecho.  
 Crie uma imagem denominada folha de sprites usando o trecho.  
 Pinte a folha de sprites.  
 Faça uma caixa denominada caixa grande 720 pixels por 288 pixels.  
 Faça uma caixa denominada quadro 144 pixels por 144 pixels.  
 Itere.  
   Extraia uma imagem denominada sprite usando o quadro.  
   Centralize o sprite no meio da tela.  
   Acrescente o sprite para a lista de sprites.  
   Mova o quadro 144 pixels para a direita.  
   Se o quadro estiver na caixa grande,  
     Reitere.  
   Mova o quadro para o lado esquerdo dessa caixa grande.  
   Mova o quadro 144 pixels para baixo.  
   Se o quadro estiver na caixa grande,  
     Reitere.  
 Destrua a folha de sprites.

# 

# **Fatorial**

O fatorial de um número natural é o produto de todos os naturais menores ou iguais a esse número.

O fatorial é um número.

Rotina para que se execute o programa:  
 Atribua "console" para o tipo da aplicação.  
 Prepare o console.  
 Atribua 0 para o fatorial.  
 Atribua 0 para um número.  
 Itere.  
   Calcule o fatorial desse número.  
   Se o fatorial for maior do que 0,  
     Escreva "O fatorial de " junto com o número junto com " é igual a " junto com o fatorial para STDOUT.  
   Adicione 1 para o número.  
   Se o número for maior do que 10, pare.  
   Escreva o texto CRLF para STDOUT.  
 Reitere.  
 Feche este programa.

Rotina para que se calcule o fatorial de um número:  
 Se o número for menor que 0, retorne.  
 Se o número for menor que 2,   
   Atribua 1 para o fatorial;  
   Retorne.  
 Atribua 1 para um número denominado resultado.  
 Atribua 1 para um número denominado índice.  
 Itere.  
   Multiplique o resultado pelo índice.  
   Adicione 1 para o índice.  
   Se o índice for maior do que o número, pare.  
 Reitere.  
 Atribua o resultado para o fatorial.

# 

# **100 Portas**

Há 100 portas em uma fileira que estão todas inicialmente fechadas. Você faz 100 passagens pelas portas.

* Na primeira vez, visite todas as portas e   *alterne*   a porta (se a porta estiver fechada, abra-a; se estiver aberta, feche-a).  
* Na segunda vez, visite apenas cada 2ª porta (porta nº 2, nº 4, nº 6, ...) e ative-a.  
* Na terceira vez, visite cada 3ª porta (porta nº 3, nº 6, nº 9, ...), etc., até visitar apenas a 100ª porta .

#### **Tarefa**

Responda à pergunta: em que estado estão as portas após a última passagem? Quais estão abertas, quais estão fechadas?

Uma passada é um número.  
Uma porta é uma lista booleana.  
Uma lista booleana é uma lista com um sinalizador.

Rotina para que se execute o programa:  
 Inicialize os componentes.  
 Passe através das portas usando 100 \[portas\] e 100 passadas.  
 Feche o programa.

Rotina para que se passe através das portas usando um contagem e umas assadas:  
 Crie umas portas usando a contagem.  
 Itere.  
   Adicione 1 para um contador.  
   Se o contador for maior do que as passadas, pare.  
   Vá através dessas portas usando o contador e as passadas.  
 Reitere.  
 Transcreva o status dessas portas.  
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
     Escreva "A porta " junto com o contador seguido de " está aberta." junto com o texto CRLF para STDOUT.\\; Reitere.  
 Reitere.

# 

# **Dó Ré Mi Fá**

O Programa abaixo toca a música Dó Ré Mi Fá:

Rotina para que se execute o programa:  
 \\ DÓ RÉ MI FÁ  
 Processe "kernel32.dll" "Beep" com 264 e 200\. \\ DÓ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Beep" com 330 e 300\. \\ MI  
 Processe "kernel32.dll" "Beep" com 349 e 500\. \\ FÁ  
 Processe "kernel32.dll" "Sleep" com 200\. \\ Pausa  
 \\ FÁ FÁ  
 Processe "kernel32.dll" "Beep" com 349 e 300\. \\ FÁ  
 Processe "kernel32.dll" "Beep" com 349 e 250\. \\ FÁ  
 Processe "kernel32.dll" "Sleep" com 50\. \\ Pausa  
 \\ DÓ RÉ DÓ RÉ  
 Processe "kernel32.dll" "Beep" com 264 e 200\. \\ DÓ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Beep" com 264 e 200\. \\ DÓ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Sleep" com 500\. \\ Pausa  
 \\ RÉ RÉ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Sleep" com 5\. \\ Pausa  
 \\ DÓ SOL FA MI  
 Processe "kernel32.dll" "Beep" com 264 e 200\. \\ DÓ  
 Processe "kernel32.dll" "Beep" com 392 e 300\. \\ SOL  
 Processe "kernel32.dll" "Beep" com 349 e 200\. \\ FÁ  
 Processe "kernel32.dll" "Beep" com 330 e 400\. \\ MI  
 Processe "kernel32.dll" "Sleep" com 200\. \\ Pausa  
 \\ MI MI  
 Processe "kernel32.dll" "Beep" com 330 e 400\. \\ MI  
 Processe "kernel32.dll" "Beep" com 330 e 450\. \\ MI  
 Processe "kernel32.dll" "Sleep" com 50\. \\ Pausa  
 \\ DÓ RÉ MI FÁ  
 Processe "kernel32.dll" "Beep" com 264 e 200\. \\ DÓ  
 Processe "kernel32.dll" "Beep" com 294 e 300\. \\ RÉ  
 Processe "kernel32.dll" "Beep" com 330 e 300\. \\ MI  
 Processe "kernel32.dll" "Beep" com 349 e 500\. \\ FÁ  
 Processe "kernel32.dll" "Sleep" com 200\. \\ Pausa  
 \\ FÁ FÁ  
 Processe "kernel32.dll" "Beep" com 349 e 300\. \\ FÁ  
 Processe "kernel32.dll" "Beep" com 349 e 250\. \\ FÁ  
 Processe "kernel32.dll" "Sleep" com 50\. \\ Pausa  
 Processe "kernel32.dll" "Sleep" com 500\. \\ Pausa

# **API Win32 \- GdipImageRotateFlip**

Observação: para executar este programa salve a imagem abaixo ( ou outra de sua escolha) e ajuste o path onde for necessário.


Rotina para que se execute o programa:  
 Carregue as bibliotecas padrão do sistema.   
 Limpe a tela usando a cor eigengrau.  
 Extraia o endereço da pasta deste módulo desde o endereço completo deste módulo.  
 Atribua o endereço da pasta deste módulo seguido de "lobo.png" para um endereço completo.  
 \\ AJUSTE O PATH CONFORME NECESSÁRIO   
 Atribua o endereço completo para uma string denominada path.  
 Carregue uma primeira imagem usando o path.   
 Carregue uma segunda imagem usando o path.  
 Carregue uma terceira imagem usando o path.  
 Carregue uma quarta imagem usando o path.  
 Carregue uma quinta imagem usando o path.  
 Carregue uma sexta imagem usando o path.  
 Carregue uma sétima imagem usando o path.  
 Carregue uma oitava imagem usando o path.  
 Mova a primeira imagem usando 50 pixels e 100 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta primeira imagem e o Rotate90FlipNone. \\ Rotate90FlipNone/Rotate270FlipXY  
 Pinte a primeira imagem. \\   
 Mova a segunda imagem usando 400 pixels e 100 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta segunda imagem e o Rotate90FlipX. \\ Rotate90FlipX/Rotate270FlipY  
 Pinte a segunda imagem.  
 Mova a terceira imagem usando 800 pixels e 100 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta terceira imagem e o RotateNoneFlipY. \\ RotateNoneFlipY/Rotate180FlipX  
 Pinte a terceira imagem.  
 Mova a quarta imagem usando 1200 pixels e 100 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta quarta imagem e o RotateNoneFlipXY. \\ RotateNoneFlipXY/Rotate180FlipNone  
 Pinte a quarta imagem.  
 Mova a quinta imagem usando 50 pixels e 500 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta quinta imagem e o Rotate90FlipY. \\ Rotate90FlipY/Rotate270FlipX  
 Pinte a quinta imagem.  
 Mova a sexta imagem usando 400 pixels e 500 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta sexta imagem e o Rotate90FlipXY. \\ Rotate90FlipXY/Rotate270FlipNone  
 Pinte a sexta imagem.  
 Mova a sétima imagem usando 800 pixels e 500 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta sétima imagem e o RotateNoneFlipNone. \\ RotateNoneFlipNone/Rotate180FlipXY  
 Pinte a sétima imagem.  
 Mova a oitava imagem usando 1200 pixels e 500 pixels.  
 Processe "gdiplus.dll" "GdipImageRotateFlip" com o gpBitmap desta oitava imagem e o RotateNoneFlipX. \\ RotateNoneFlipX/Rotate180FlipY  
 Pinte a oitava imagem.  
 Atribua 24 pixels à altura desta fonte padrão.  
 Posicione os rótulos.  
 Itere.  
   Atualize a tela.  
   Se a tecla Esc estiver sendo pressionada, pare.  
   Se a tecla Enter estiver sendo pressionada, pare.  
 Reitere.  
 Se a tecla Esc estiver sendo pressionada,   
   Destrua a primeira imagem;  
   Destrua a segunda imagem;  
   Destrua a terceira imagem;  
   Destrua a quarta imagem;  
   Destrua a quinta imagem;  
   Destrua a sexta imagem;  
   Destrua a sétima imagem;  
   Destrua a oitava imagem;  
   Feche o programa.  
 Se a tecla Enter estiver sendo pressionada,   
   Destrua a primeira imagem;  
   Destrua a segunda imagem;  
   Destrua a terceira imagem;  
   Destrua a quarta imagem;  
   Destrua a quinta imagem;  
   Destrua a sexta imagem;  
   Destrua a sétima imagem;  
   Destrua a oitava imagem;  
   Feche o programa.

Rotina para que se carregue uma imagem usando um endereço completo:  
 Leia o endereço completo para a imagem.  
 Redimensione a imagem para 300 pixels por 300 pixels.

Um rótulo é uma estrutura com  
 Uma caixa e  
 Um nome.

Rotina para que se exiba um rótulo:  
 Pinte o nome deste rótulo na caixa deste rótulo usando a cor branca.

Rotina para que se posicione os rótulos:  
 Posicione o primeiro rótulo.  
 Posicione o segundo rótulo.  
 Posicione o terceiro rótulo.  
 Posicione o quarto rótulo.  
 Posicione o quinto rótulo.  
 Posicione o sexto rótulo.  
 Posicione o sétimo rótulo.  
 Posicione o oitavo rótulo.

Rotina para que se posicione o primeiro rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 50 pixels para a coordenada X1 deste primeiro rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 170 pixels para a coordenada Y1 deste primeiro rótulo.  
 Atribua o primeiro nome ao nome deste primeiro rótulo.  
 Exiba o primeiro rótulo.

Rotina para que se posicione o segundo rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 400 pixels para a coordenada X1 deste segundo rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 170 pixels para a coordenada Y1 deste segundo rótulo.  
 Atribua o segundo nome ao nome deste segundo rótulo.  
 Exiba o segundo rótulo.

Rotina para que se posicione o terceiro rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 800 pixels para a coordenada X1 deste terceiro rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 170 pixels para a coordenada Y1 deste terceiro rótulo.  
 Atribua o terceiro nome ao nome deste terceiro rótulo.  
 Exiba o terceiro rótulo.

Rotina para que se posicione o quarto rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 1200 pixels para a coordenada X1 deste quarto rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 170 pixels para a coordenada Y1 deste quarto rótulo.  
 Atribua o quarto nome ao nome deste quarto rótulo.  
 Exiba o quarto rótulo.

Rotina para que se posicione o quinto rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 50 pixels para a coordenada X1 deste quinto rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 970 pixels para a coordenada Y1 deste quinto rótulo.  
 Atribua o quinto nome ao nome deste quinto rótulo.  
 Exiba o quinto rótulo.

Rotina para que se posicione o sexto rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 400 pixels para a coordenada X1 deste sexto rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 970 pixels para a coordenada Y1 deste sexto rótulo.  
 Atribua o sexto nome ao nome deste sexto rótulo.  
 Exiba o sexto rótulo.

Rotina para que se posicione o sétimo rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 800 pixels para a coordenada X1 deste sétimo rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 970 pixels para a coordenada Y1 deste sétimo rótulo.  
 Atribua o sétimo nome ao nome deste sétimo rótulo.  
 Exiba o sétimo rótulo.

Rotina para que se posicione o oitavo rótulo:  
 Atribua a coordenada X1 desta caixa desta tela mais 1200 pixels para a coordenada X1 deste oitavo rótulo.  
 Atribua a coordenada Y1 desta caixa desta tela mais 970 pixels para a coordenada Y1 deste oitavo rótulo.  
 Atribua o oitavo nome ao nome deste oitavo rótulo.  
 Exiba o oitavo rótulo.

O primeiro rótulo é um rótulo.  
O segundo rótulo é um rótulo.  
O terceiro rótulo é um rótulo.  
O quarto rótulo é um rótulo.  
O quinto rótulo é um rótulo.  
O sexto rótulo é um rótulo.  
O sétimo rótulo é um rótulo.  
O oitavo rótulo é um rótulo.

O RotateNoneFlipNone é um número igual a 0\.  
O Rotate180FlipXY é um número igual a 0\.  
O Rotate90FlipNone é um número igual a 1\.  
O Rotate270FlipXY é um número igual a 1\.  
O Rotate180FlipNone é um número igual a 2\.  
O RotateNoneFlipXY é um número igual a 2\.  
O Rotate270FlipNone é um número igual a 3\.  
O Rotate90FlipXY é um número igual a 3\.  
O RotateNoneFlipX é  um número igual a 4\.  
O Rotate180FlipY é um número igual a 4\.  
O Rotate90FlipX é um número igual a 5\.  
O Rotate270FlipY é um número igual a 5\.  
O Rotate180FlipX é um número igual a 6\.  
O RotateNoneFlipY é um número igual a 6\.  
O Rotate270FlipX é um número igual a 7\.  
O Rotate90FlipY é um número igual a 7\.

O primeiro nome é uma string igual a "Rotate90FlipNone/Rotate270FlipXY".  
O segundo nome é uma string igual a "Rotate90FlipX/Rotate270FlipY".  
O terceiro nome é uma string igual a "RotateNoneFlipY/Rotate180FlipX".  
O quarto nome é uma string igual a "RotateNoneFlipXY/Rotate180FlipNone".  
O quinto nome é uma string igual a "Rotate90FlipY/Rotate270FlipX".  
O sexto nome é uma string igual a "Rotate90FlipXY/Rotate270FlipNone".  
O sétimo nome é uma string igual a "RotateNoneFlipNone/Rotate180FlipXY".  
O oitavo nome é uma string igual a "RotateNoneFlipX/Rotate180FlipY".

O resultado do programa é este:


# 

# **Pintando como Claude Monet**

O programa abaixo utiliza a API do Google para transformar as thumbnails das imagens em pinturas que replicam o estilo de Claude Monet.

A caixa de status é uma estrutura com   
 Uma caixa e   
 Uma string.

O campo de texto é uma estrutura com   
 Uma caixa e   
 Uma string.

Um botão é uma estrutura com  
 Uma caixa e   
 Um nome.

O botão de imprimir é um botão.  
O botão de fechar é um botão.

Uma obra de arte é uma lista com   
 Uma URL e   
 Uma pintura.

A obra de arte atual é um obra de arte.  
As obras de arte são umas obras de arte.

Um pintura é uma imagem.  
O plano de fundo é uma imagem.

Rotina para que se execute o programa:  
 Inicialize os componentes.  
 Inicialize a interface.  
 Execute os eventos.  
 Libere os recursos alocados na memória.  
 Feche o programa.

Rotina para que se inicialize a interface:  
 Crie o plano de fundo.  
 Inicialize a caixa de status.  
 Inicialize os botões.  
 Inicialize o campo de texto.  
 Exiba "Olá Mundo\!" na caixa de status.

Rotina para que se crie o plano de fundo:  
 Pinte a caixa desta tela com a cor branca e a cor branca.  
 Itere.  
   Escolha aleatoriamente uma localização no interior dessa caixa desta tela.  
   Escolha aleatoriamente uma cor entre a cor cinza claríssimo e a cor branca.  
   Pincele a cor sobre a localização.  
   Se um contador estiver ultrapassando 80000,  
     Pare.  
   Se o contador for uniformemente divisível por 10000,   
     Atualize a tela.  
 Reitere.  
 Extraia o plano de fundo usando a caixa desta tela. \\ou Crie o plano de fundo desde o tela.

Rotina para que se pincele uma cor sobre uma localização:  
 Escolha aleatoriamente o canto superior esquerdo duma elipse dentre 6 pixels dessa localização.  
 Escolha aleatoriamente o canto inferior direito desta elipse dentre 6 pixels dessa localização.  
 Pinte a elipse com a cor.

Rotina para que se inicialize a caixa de status:  
 Atribua o centro desta tela para uma localização.  
 Atribua a coordenada X desta localização menos 400 pixels para a coordenada X1 desta caixa de status.  
 Atribua a coordenada X desta localização mais 400 pixels para a coordenada X2 desta caixa de status.  
 Atribua a coordenada Y2 desta tela menos 80 pixels para a coordenada Y1 desta caixa de status.  
 Atribua a coordenada Y2 desta tela menos 48 pixels para a coordenada Y2 desta caixa de status.

Rotina para que se inicialize os botões:  
 Atribua a coordenada Y2 desta tela menos 48 pixels para a coordenada Y duma localização.  
 Atribua a coordenada X2 desta tela menos 48 pixels para a coordenada X desta localização.  
 Faça o botão de fechar usando o localização e " Fechar ".  
  Atribua a coordenada X1 deste botão de fechar menos 48 pixels para a coordenada X desta localização.  
 Faça o botão de imprimir usando a localização e " Imprimir ".

Rotina para que se faça um botão usando uma localização e um nome:  
 Atribua a coordenada X desta localização menos a largura deste nome para a coordenada X1 deste botão.  
 Atribua a coordenada Y desta localização menos 30 pixels para a coordenada Y1 deste botão.    
 Atribua a localização para o canto inferior direito deste botão.  
 Atribua o nome para o nome deste botão.

Rotina para que se inicialize o campo de texto:  
 Atribua a coordenada X1 desta tela mais 48 pixels para a coordenada X1 deste campo de texto.  
 Atribua a coordenada X1 deste campo de texto mais 300 pixels para a coordenada X2 deste campo de texto.  
 Atribua a coordenada Y2 desta tela menos 80 pixels para a coordenada Y1 deste campo de texto.  
 Atribua a coordenada Y2 desta tela menos 48 pixels para a coordenada Y2 deste campo de texto.

Rotina para que se exiba uma string na caixa de status: \\ TODO: com uma cor  
 Atribua a string para a string desta caixa de status.  
 Exiba os componentes e atualize a tela.

Rotina para que se exiba os componentes e atualize a tela:  
 Oculte o cursor.  
 Pinte o plano de fundo.  
 Pinte a caixa de status.  
 Pinte o botão de imprimir.  
 Pinte o botão de fechar.  
 Pinte o campo de texto.  
 Pinte a obra de arte atual.  
 Atualize a tela.

Rotina para que se pinte a caixa de status:  
 Pinte a caixa desta caixa de status com a cor preta e a cor cinza claro.  
 Pinte a string desta caixa de status no centro de a caixa desta caixa de status com a cor preta.

Rotina para que se pinte uma string em uma caixa no centro:  
 Pinte a string na caixa usando "centralizado".

Rotina para que se pinte um botão:  
 Pinte a caixa deste botão com a cor preta e a cor cinza claro.  
 Pinte o nome deste botão na caixa deste botão com a cor preta.

Rotina para que se pinte o campo de texto:  
 Pinte a caixa deste campo de texto com a cor preta e a cor cinza claro.  
 Atribua a string deste campo de texto seguido de "\_" para uma string.  
 Pinte a string na caixa deste campo de texto.

Rotina para que se pinte uma obra de arte:  
 Se a obra de arte for inexistente, retorne.  
 Se a obra de arte não estiver concluída, retorne.  
 Pinte a caixa desta obra de arte com a cor branca e a cor branca.  
 Pinte a pintura desta obra de arte.

Rotina para que se execute os eventos:  
   Aguarde por um evento.  
   Se o evento for inexistente, retorne.  
   Execute o evento.  
 Reitere.

Rotina para que se execute um evento:  
 Se a categoria deste evento for "movimentação de cursor",   
   Execute o evento (movimentação de cursor);   
   Retorne.  
 Se a categoria deste evento for "atualização de tela",  
   Execute o evento (atualização de tela);   
   Retorne.  
 Se a categoria deste evento for "clique do botão esquerdo",   
   Execute o evento (clique do botão esquerdo);   
   Retorne.  
 Se a categoria deste evento for "pressionamento de tecla",   
   Execute o evento (pressionamento de tecla);   
   Retorne.

Rotina para que se execute um evento (movimentação de cursor):  
 Mostre a seta do mouse.

Rotina para que se execute um evento (atualização de tela):  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (clique do botão esquerdo):  
 Limpe a caixa de status.  
 Se a localização deste evento estiver no botão de imprimir,   
   Imprima a obra de arte.  
 Se a localização deste evento estiver no botão de fechar,   
   Saia do programa.

Rotina para que se determine se um localização está em um botão:  
 Se a localização estiver na caixa deste botão, diga sim.  
 Diga não.

Rotina para que se imprima a obra de arte:  
 Se a obra de arte atual for inexistente,   
   Avise o usuário;  
   Retorne.  
 Exiba "Imprimindo..." na caixa de status.  
 Inicie a impressão.  
 Selecione uma folha para impressão.  
 Centralize a pintura desta obra de arte atual na folha.  
 Pinte a pintura desta obra de arte atual.  
 Centralize a pintura desta obra de arte atual na caixa desta tela.  
 Salve as alterações pendentes na folha.  
 Acabe de imprimir.  
 Exiba "Impressão concluída" na caixa de status.

Rotina para que se saia do programa:  
 Delegue o controle.

Rotina para que se execute um evento (pressionamento de tecla):  
 Limpe a caixa de status.  
 Se o evento foi alterado,   
   Execute o evento (Tecla modificadora);   
   Retorne.  
 Se o byte deste evento for imprimível,   
   Execute o evento (exibição de caractere);   
   Retorne.  
 Atribua a tecla deste evento para uma tecla.  
 Se a tecla deste evento for a Tecla Esc,   
   Execute o evento (Tecla Esc);   
   Retorne.  
 Se a tecla deste evento for a Tecla Backspace,   
   Execute o evento (backspace);   
   Retorne.  
 Se a tecla deste evento for a Tecla Enter,   
   Execute o evento (Tecla Enter);   
   Retorne.  
 Se a tecla deste evento for a Tecla Home,   
   Execute o evento (Tecla Home);   
   Retorne.  
 Se a tecla deste evento for a Tecla End,   
   Execute o evento (Tecla End);   
   Retorne.  
 Se a tecla deste evento for a Tecla Page Up,   
   Execute o evento (Tecla Page Up);   
   Retorne.  
 Se a tecla deste evento for a Tecla Page Down,   
   Execute o evento (Tecla Page Down);   
   Retorne.

Rotina para que se execute um evento (Tecla modificadora):  
 Se a tecla deste evento for a tecla Q/q,   
   Saia do programa;   
   Retorne.  
 Se a tecla deste evento for a tecla P/p,   
   Imprima a obra de arte;   
   Retorne.

Rotina para que se execute um evento (exibição de caractere):  
 Acrescente o byte deste evento para a string deste campo de texto.  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (tecla Esc):  
 Limpe a string deste campo de texto.  
 Exiba os componentes e atualize a tela.

Rotina para que se limpe a caixa de status:  
 Limpe a string desta caixa de status.  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (backspace):  
 Se a string deste campo de texto estiver em branco,   
   Avise o usuário;   
   Retorne.  
 Remova o último caractere desde a string deste campo de texto.  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (tecla Enter):  
 Se a string deste campo de texto estiver em branco,   
   Avise o usuário;   
   Retorne.  
 Exiba "Aguarde..." na caixa de status.    
  Atribua "http://images.google.com/images?q=" para um URL.  
 \\Atribua "http://images.google.com/images?safe=active\&q=" para uma URL.  
 Converta a string deste campo de texto para um texto de consulta.  
 Acrescente o texto de consulta para a URL.  
 Leia a URL para um trecho.  
 Se o erro do fluxo de entrada/saída não estiver em branco,   
   Exiba o erro do fluxo de entrada/saída na caixa de status;   
   Retorne.  
 Crie as obras de arte usando o trecho.  
 Se as obras de arte estiverem vazias,   
   Exiba "Erro. Não foi possível efetuar a pintura a partir dos termos informados" na caixa de status;   
   Retorne.  
 Vá para a primeira obra de arte destas obras de arte.

Rotina para que se crie umas obras de arte usando um trecho:  
 Se a quantidade de caracteres deste trecho for 0,   
   Retorne.  
 Destrua as obras de arte.  
 Atribua inexistente para a obra de arte atual.  
 Lance um percorredor sobre o trecho.  
 Itere.  
   Mova o percorredor (utilizando as diretrizes do Google Imagens).  
   Se o segmento inicial deste percorredor estiver em branco,   
     Retorne.  
   Crie uma obra de arte usando o segmento inicial deste percorredor.  
   Acrescente a obra de arte para as obras de arte.  
 Reitere.

Rotina para que se mova um percorredor (utilizando as diretrizes do Google Imagens):  
 Limpe o segmento inicial deste percorredor.  
 Itere.  
   Se o segmento final deste percorredor estiver em branco,   
     Retorne.  
   Se o segmento final deste percorredor começar com "src=""http://t",   
     Pare.  
   Adicione 1 para o caractere inicial deste segmento final deste percorredor.  
 Reitere.  
 Atribua "src=""" para uma string.  
 Adicione 5 para o caractere inicial deste segmento final \[final\] deste percorredor.  
 Posicione o segmento inicial deste percorredor sobre o segmento final deste percorredor.  
 Mova o percorredor (usando diretrizes de elementos HTML).

Rotina para que se mova um percorredor (usando diretrizes de elementos HTML):  
   Se o segmento final deste percorredor estiver em branco, retorne.  
   Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o sinal maior do que, retorne.  
   Se o conteúdo deste caractere inicial deste segmento final deste percorredor for a aspa dupla direita, retorne.  
   Avance o percorredor.  
 Reitere.

Rotina para que se crie uma obra de arte usando um URL:  
 Aloque memória para a obra de arte.  
 Atribua o URL para a URL desta obra de arte.

Rotina para que se vá para um obra de arte:  
 Se a obra de arte for inexistente, retorne.  
 Exiba "Aguarde um momento..." na caixa de status.  
 Atribua a obra de arte para a obra de arte atual.  
 Conclua a obra de arte atual.  
 Limpe a caixa de status.  
 Exiba os componentes e atualize a tela.

Rotina para que se conclua uma obra de arte:  
 Se a obra de arte for inexistente, retorne.  
 Se a obra de arte estiver concluída, retorne.  
 Crie uma imagem usando a URL desta obra de arte.  
 Se a imagem for inexistente,   
   \\Avise o usuário;  
   Exiba "Erro ao encontrar imagem" na caixa de status;  
   Retorne.  
 Redimensione a imagem para 528 pixels por 528 pixels.  
 Centralize a imagem na caixa desta tela.  
Pinte o plano de fundo.  
 Pinte a imagem.  
 Atribua 0 para um contador.  
 Itere.  
   Escolha aleatoriamente uma localização nas proximidades dessa caixa desta imagem.  
   Misture uma cor usando o localização.  
   Pincele a cor sobre o localização.  
   Adicione 1 para o contador.  
   Se o contador for maior do que 20000, pare.  
 Reitere.  
 Extraia a pintura desta obra de arte usando a caixa desta imagem.  
 Destrua a imagem.

Rotina para que se determine se uma obra de arte está concluída:  
 Se a obra de arte for inexistente, diga sim.  
 Se a pintura desta obra de arte não for inexistente, diga sim.  
 Diga não.

Rotina para que se escolha aleatoriamente uma localização nas proximidades de uma caixa:  
 Preserve a caixa.  
 Recue a caixa usando 8 pixels.  
 Escolha aleatoriamente a localização no interior de a caixa. \\ noodle

Rotina para que se misture uma cor usando um localização:  
 Obtenha a cor usando o localização.  
 Se a cor não for alguma cor muitíssimo clara, retorne.  
 Escolha aleatoriamente a cor entre a cor cinza claríssimo e a cor branca.

Rotina para que se execute um evento (tecla Home):  
 Se a obra de arte atual for inexistente,   
   Avise o usuário;   
   Retorne.  
 Se a obra de arte atual for a primeira obra de arte destas obras de arte,   
   Avise o usuário;   
   Retorne.  
 Vá para a primeira obra de arte destas obras de arte.

Rotina para que se execute um evento (tecla End):  
 Se a obra de arte atual for inexistente,  
   Avise o usuário;   
   Retorne.  
 Se a obra de arte atual for a última obra de arte destas obras de arte,   
   Avise o usuário;   
   Retorne.  
 Vá para a última obra de arte destas obras de arte.

Rotina para que se execute um evento (Tecla Page Down):  
 Se a obra de arte atual for inexistente,   
   Avise o usuário;   
   Retorne.  
 Se a próxima obra de arte desta obra de arte atual for inexistente,   
   Avise o usuário;   
   Retorne.  
 Vá para a próxima obra de arte desta obra de arte atual.

Rotina para que se execute um evento (Tecla Page Up):  
 Se a obra de arte atual for inexistente,  
   Avise o usuário;   
   Retorne.  
 Se a obra de arte anterior desta obra de arte atual for inexistente,   
   Avise o usuário;   
   Retorne.  
 Vá para a obra de arte anterior desta obra de arte atual.

Rotina para que se libere os recursos alocados na memória:  
 Destrua o plano de fundo.  
 Destrua as obras de arte.

Outputs produzidos pelo programa:  
 
Jardim Florido  
 
Octocat  
 
Paisagem

# **Exemplo de interface**

O código abaixo demonstra a criação de botões, rótulos e campos de texto, bem como gerenciamento de input do usuário.

Rotina para que se execute o programa:  
 Inicialize os componentes.  
 Atribua "Lexend" para a fonte padrão.    
 Inicialize a interface.  
 Execute os eventos.  
 Feche o programa.

Um rótulo é uma estrutura com   
 Uma caixa e   
 Uma string.

O rótulo de e-mail é um rótulo.

Um campo textual é uma estrutura com   
 Uma caixa e   
 Uma string.

O campo de e-mail é um campo textual.

Um botão é uma estrutura com  
 Uma caixa e   
 Um nome.

O botão de fechar é um botão.  
A localização do botão de fechar é uma localização.

Rotina para que se inicialize a interface:  
 Limpe a tela com a cor cinza claríssimo.  
 Posicione o rótulo de e-mail.  
 Posicione o botão de fechar.  
 Faça o botão de fechar usando a localização do botão de fechar e " Fechar ".  
 Posicione o campo de e-mail.  
 Exiba "Digite o email:" no rótulo de e-mail.

Rotina para que se posicione o rótulo de e-mail:  
 Atribua a coordenada X1 desta tela para a coordenada X duma localização.  
 Atribua a coordenada Y1 desta tela para a coordenada Y desta localização.  
 Atribua a coordenada X desta localização   
   mais 100 pixels para a coordenada X1 deste rótulo de e-mail.  
 Atribua a coordenada Y desta localização   
   mais 50 pixels para a coordenada Y1 deste rótulo de e-mail.  
 Atribua a coordenada X desta localização   
   mais 250 pixels para a coordenada X2 deste rótulo de e-mail.  
 Atribua a coordenada Y desta localização   
   mais 100 pixels para a coordenada Y2 deste rótulo de e-mail.

Rotina para que se posicione o campo de e-mail:  
 Atribua a coordenada X1 desta tela para a coordenada X duma localização.  
 Atribua a coordenada Y1 desta tela para a coordenada Y desta localização.  
 Atribua a coordenada X desta localização   
   mais 280 pixels para a coordenada X1 deste campo de e-mail.  
 Atribua a coordenada X desta localização   
   mais 680 pixels para a coordenada X2 deste campo de e-mail.  
 Atribua a coordenada Y deste localização   
   mais 60 pixels para a coordenada Y1 deste campo de e-mail.    
 Atribua a coordenada Y desta localização   
   mais 90 pixels para a coordenada Y2 deste campo de e-mail.

Rotina para que se posicione o botão de fechar:  
 Atribua a coordenada Y2 desta tela   
   menos 48 pixels para a coordenada Y duma localização.  
 Atribua a coordenada X2 desta tela   
   menos 48 pixels para a coordenada X desta localização.  
 Atribua a localização para a localização do botão de fechar.  
 

Rotina para que se faça um botão usando uma localização e um nome:  
 Atribua a coordenada X desta localização  
   menos a largura deste nome para a coordenada X1 deste botão.  
 Atribua a coordenada Y desta localização  
   menos 30 pixels para a coordenada Y1 deste botão.    
 Atribua a localização para o canto inferior direito deste botão.  
 Atribua o nome para o nome deste botão.

Rotina para que se exiba uma string em um rótulo: \\ TODO: com uma cor  
 Atribua a string para a string deste rótulo de e-mail.  
 Exiba os componentes e atualize a tela.

Rotina para que se exiba os componentes e atualize a tela:  
 Oculte o cursor.    
 Pinte o rótulo de e-mail.  
 Pinte o botão de fechar.  
 Pinte o campo de e-mail.  
 Atualize a tela.

Rotina para que se pinte um rótulo:  
 Pinte a caixa deste rótulo com a cor cinza claríssimo e a cor cinza claríssimo.  
 Pinte a string deste rótulo no centro dessa caixa deste rótulo com a cor preta.

Rotina para que se pinte uma string em uma caixa no centro:  
 Pinte a string na caixa usando "centralizado".

Rotina para que se pinte um botão:  
 Pinte a caixa deste botão com a cor preta e a cor vermelha.  
 Pinte o nome deste botão na caixa deste botão com a cor branca.

Rotina para que se pinte o campo de e-mail:  
 Pinte a caixa deste campo de e-mail com a cor branca e a cor azul celeste.  
 Atribua a string deste campo de e-mail seguido de "\_" para uma string.  
 Pinte a string na caixa deste campo de e-mail   
 com a cor branca e a fonte padrão e "centralizado".

Rotina para que se execute os eventos:  
   Aguarde por um evento.  
   Se o evento for inexistente, retorne.  
   Execute o evento.  
 Reitere.

Rotina para que se execute um evento:  
 Se a categoria deste evento for "movimentação de cursor",   
   Execute o evento (movimentação de cursor);   
   Retorne.  
 Se a categoria deste evento for "atualização de tela",  
   Execute o evento (atualização de tela);   
   Retorne.  
 Se a categoria deste evento for "clique do botão esquerdo",   
   Execute o evento (clique do botão esquerdo);   
   Retorne.  
 Se a categoria deste evento for "pressionamento de tecla",   
   Execute o evento (pressionamento de tecla);   
   Retorne.

Rotina para que se execute um evento (movimentação de cursor):  
 Mostre a seta do mouse.

Rotina para que se execute um evento (atualização de tela):  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (clique do botão esquerdo):  
   Se a localização deste evento estiver no botão de fechar,   
     Saia do programa.

Rotina para que se determine se um localização está em um botão:  
 Se a localização estiver na caixa deste botão, diga sim.  
 Diga não.

Rotina para que se saia do programa:  
 Delegue o controle.

Rotina para que se execute um evento (pressionamento de tecla):  
 Se o byte deste evento for imprimível,   
   Execute o evento (exibição de caractere);   
   Retorne.  
 Atribua a tecla deste evento para uma tecla.  
 Se a tecla deste evento for a Tecla Esc,   
   Execute o evento (Tecla Esc);   
   Retorne.  
 Se a tecla deste evento for a Tecla Backspace,   
   Execute o evento (backspace);   
   Retorne.  
 Se a tecla deste evento for a Tecla Enter,   
   Execute o evento (Tecla Esc);   
   Retorne.

Rotina para que se execute um evento (exibição de caractere):  
 Acrescente o byte deste evento para a string deste campo de e-mail.  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (tecla Esc):  
 Delegue o controle.

Rotina para que se limpe um rótulo:  
 Limpe a string deste rótulo.  
 Exiba os componentes e atualize a tela.

Rotina para que se execute um evento (backspace):  
 Se a string deste campo de e-mail estiver em branco,   
   Avise o usuário;   
   Retorne.  
 Remova o último caractere desde a string deste campo de e-mail.  
 Exiba os componentes e atualize a tela.

# **Evitando problemas de cintilação (Flickering)**

Na maioria das vezes, uma exibição de tela completa consiste em vários objetos distintos e sobrepostos, desenhados de trás para frente.

Resolvemos esse problema da mesma forma que um artista faria. Trabalhamos em uma tela na memória (chamada de Contexto de Dispositivo \- DC). Esta tela é como se fosse uma tela virtual. Funciona mais ou menos assim: Primeiramente devemos selecionar a área a ser pintada (neste caso queremos pintar em toda a tela, para isso usamos o comando "Exponha tudo". Depois você "pinta" ou "desenha" todas as coisas que deseja nesta tela virtual, e depois disso exibe-a de uma só vez (usando o comando "Atualize a tela").

Rotina para que se execute o programa:  
 Carregue as bibliotecas padrão.  
 Limpe a tela usando a cor laranja claríssimo.  
 Atribua "http://osmosian.com/page01.png" para uma URL denominada caminho.  
 Crie uma imagem usando o caminho.  
 Pinte a imagem.  
 Atualize a tela.  
 Itere.    
   Adicione 1 para um contador.  
   Mova a imagem 10 pixels para a direita.  
   Aguarde 3 milissegundos.   
   Exponha tudo. \\ \-\> Seleciona a tela inteira para ser pintada  
   Pinte a caixa desta tela com a cor laranja claríssimo e a cor laranja claríssimo.  
   Pinte a imagem.  
   Atualize a tela.  
   Atribua a caixa desta tela à caixa deste contexto.  
   Se o contador for 20, pare.  
 Reitere.  
 Aguarde pela tecla Esc.  
 Desmanche todos os eventos.  
 Destrua a imagem.  
 Feche o programa.

# **Desenhando e pintando retângulos e caixas**

Muitas vezes iremos precisar desenhar elementos na tela. Este algoritmo cria uma espécie de ilusão de ótica ao brincar com as cores.

Rotina para que se execute o programa:  
 Inicialize os componentes.  
 Limpe a tela com a cor preta.  
 Exiba a distorção cromática.  
 Aguarde pela tecla Esc.  
 Feche o programa.

Rotina para que se exiba a distorção cromática:  
 Prepare o layout.  
 Pinte a malha quadriculada.

Um comprimento é um número.  
A largura é um número.  
A distância é um número.  
O comprimento do quadrado é um número.  
A largura da listra é um número.  
O número da linha é um número.  
O quadrado é uma caixa.  
A listra vermelha é uma caixa.  
A listra amarela é uma caixa.  
A listra azul escuro é uma caixa.  
A listra azul claro é uma caixa.

Rotina para que se prepare o layout:  
 Atribua a largura desta tela para a largura.  
 Atribua a largura dividido por 8 para a distância.  
 Atribua a largura dividido por 16 para o comprimento do quadrado.  
 Atribua o comprimento do quadrado dividido por 8 para a largura da listra.  
 Faça o quadrado \[usando\] o comprimento do quadrado pelo comprimento do quadrado.  
 Faça cada listra usando a largura da listra pelo comprimento do quadrado.  
 Posicione todas as caixas no canto superior esquerdo da tela.  
 Ajuste o posicionamento inicial das listras.

Rotina para que se faça cada listra usando uma largura por um comprimento:  
 Faça a listra vermelha \[com\] a largura pelo comprimento.  
 Faça a listra amarela \[com\] a largura pelo comprimento.  
 Faça a listra azul escuro \[com\] a largura pelo comprimento.  
 Faça a listra azul claro \[com\] a largura pelo comprimento.

Rotina para que se posicione todas as caixas no canto superior esquerdo da tela:  
 Mova o quadrado para o canto superior esquerdo dessa caixa desta tela.  
 Mova a listra vermelha para o canto superior esquerdo dessa caixa desta tela.  
 Mova a listra amarela para o canto superior esquerdo dessa caixa desta tela.  
 Mova a listra azul escuro para o canto superior esquerdo dessa caixa desta tela.  
 Mova a listra azul claro para o canto superior esquerdo dessa caixa desta tela.

Rotina para que se ajuste o posicionamento inicial das listras:  
 Mova a listra amarela para a direita \[usando\] a largura da listra.  
 Mova a listra azul escuro para a direita \[usando\] o comprimento do quadrado.  
 Mova a listra azul escuro para a esquerda \[usando\] a largura da listra.  
 Mova a listra azul claro para a direita \[usando\] o comprimento do quadrado.  
 Mova a listra azul claro para a esquerda \[usando\] a largura da listra.  
 Mova a listra azul claro para a esquerda \[usando\] a largura da listra.

Rotina para que se pinte a malha quadriculada:  
 Atribua 0 para o número da linha.  
 Itere.  
   Pinte todas as caixas.  
   Mova todas as caixas para a direita usando a distância.  
   Atualize a tela.  
   Se o quadrado estiver tocando a caixa desta tela, reitere.  
   Adicione 1 ao número da linha.  
   Mova todas as caixas para a esquerda da tela.  
   Mova todas as caixas para baixo usando o comprimento do quadrado.  
   Ajuste as listras após descer.  
   Se o número da linha for ímpar,  
     Mova todas as caixas para a direita usando o comprimento do quadrado.  
   Se o quadrado estiver tocando a caixa desta tela, reitere.

Rotina para que se pinte todas as caixas:  
 Pinte o quadrado com a cor branca e a cor branca.  
 Pinte a listra vermelha com a cor vermelho claro e a cor vermelho claro.  
 Pinte a listra amarela com a cor amarela e a cor amarela.  
 Pinte a listra azul escuro com a cor azul celeste escuro e a cor azul celeste escuro.  
 Pinte a listra azul claro com a cor azul celeste claro e a cor azul celeste claro.

Rotina para que se mova todas as caixas para a direita usando um número:  
 Mova o quadrado para a direita \[usando\] o número.  
 Mova a listra vermelha para a direita \[usando\] o número.  
 Mova a listra amarela para a direita \[usando\] o número.  
 Mova a listra azul escuro para a direita \[usando\] o número.  
 Mova a listra azul claro para a direita \[usando\] o número.

Rotina para que se mova todas as caixas para a esquerda da tela:  
 Mova o quadrado para o lado esquerdo dessa caixa desta tela.  
 Mova a listra vermelha para o lado esquerdo dessa caixa desta tela.  
 Mova a listra amarela para o lado esquerdo dessa caixa desta tela.  
 Mova a listra azul escuro para o lado esquerdo dessa caixa desta tela.  
 Mova a listra azul claro para o lado esquerdo dessa caixa desta tela.

Rotina para que se mova todas as caixas para baixo usando uma distância:  
 Mova o quadrado para baixo \[usando\] a distância.  
 Mova a listra vermelha para baixo \[usando\] a distância.  
 Mova a listra amarela para baixo \[usando\] a distância.  
 Mova a listra azul escuro para baixo \[usando\] a distância.  
 Mova a listra azul claro para baixo \[usando\] a distância.

Rotina para que se ajuste as listras após descer:  
 Mova a listra amarela para a direita \[usando\] a largura da listra.  
 Mova a listra azul escuro para a direita \[usando\] o comprimento do quadrado.  
 Mova a listra azul escuro para a esquerda \[usando\] a largura da listra.  
 Mova a listra azul claro para a direita \[usando\] o comprimento do quadrado.  
 Mova a listra azul claro para a esquerda \[usando\] a largura da listra.  
 Mova a listra azul claro para a esquerda \[usando\] a largura da listra.

 
Resultado da execução do programa

# **Cofrinho Virtual**

O código abaixo implementa um cofre virtual simples que permite ao usuário realizar operações básicas de gerenciamento de saldo, como depositar, sacar e verificar o saldo disponível. A estrutura principal do cofre é composta por um saldo, que é representado em centavos. O programa se inicia com a configuração do console e a inicialização do cofre, seguida por uma mensagem de boas-vindas. O usuário é então apresentado a opções interativas por meio de um menu, onde pode escolher entre sacar dinheiro, depositar dinheiro, exibir o saldo atual ou sair do programa. Cada operação é tratada por rotinas específicas, que garantem que o saldo não fique negativo e que os depósitos sejam válidos. O código também inclui verificações de erros para opções inválidas e valores negativos, garantindo uma experiência de uso mais robusta e amigável.

O cofrinho é uma estrutura com  
  Um número denominado saldo.

Um real é 100 centavos.  
Um centavo é um número.  
Uma opção é uma string.

Rotina para que se execute o programa:  
 Prepare o Console.  
 Inicialize o cofrinho.  
 Escreva o texto de introdução.  
 Exiba as opções do cofrinho.  
 Leia uma opção a partir do console.  
 Feche o programa.

Rotina para que se inicialize o cofrinho:  
 Atribua 0 para o saldo deste cofrinho.

Rotina para que se escreva o texto de introdução:  
 Escreva o texto CRLF para StdOut.  
 Escreva "Seja bem-vindo ao seu cofrinho virtual." junto com o texto CRLF para StdOut.

Rotina para que se exiba as opções do cofrinho:  
 Escreva o texto CRLF para StdOut.  
 Escreva "Digite o número correspondente à opção desejada:" junto com o texto CRLF para StdOut.  
 Escreva o texto CRLF para StdOut.  
 Escreva "1 \- Sacar" junto com o texto CRLF para StdOut.  
 Escreva "2 \- Depositar" junto com o texto CRLF para StdOut.  
 Escreva "3 \- Exibir Saldo" junto com o texto CRLF para StdOut.  
 Escreva "4 \- Sair." junto com o texto CRLF para StdOut.  
 Escreva o texto CRLF para StdOut.

Rotina para que se leia uma opção a partir do console:  
 Leia uma string desde a StdIn.  
 Se a string for "1",  
   Escreva o texto CRLF para StdOut;  
   Retire dinheiro do cofrinho;  
   Exiba as opções do cofrinho.  
 Se a string for "2",  
   Escreva o texto CRLF para StdOut;  
   Deposite dinheiro no cofrinho;  
   Exiba as opções do cofrinho.  
 Se a string for "3",  
   Escreva o texto CRLF para StdOut;  
   Exiba o saldo do cofrinho;  
   Exiba as opções do cofrinho.  
 Se a string for "4",  
   Retorne.  
 Se a string não for alguma opção válida,  
   Escreva o texto CRLF para StdOut;  
   Escreva "Erro. Opção inválida. Tente Novamente" junto com o texto CRLF para StdOut;  
   Exiba as opções do cofrinho.  
 Leia a opção a partir do console.

Função para que se determine se uma string é alguma opção válida:  
 Se a string for "1", diga sim.  
 Se a string for "2", diga sim.  
 Se a string for "3", diga sim.  
 Se a string for "4", diga sim.  
 Diga não.

Rotina para que se retire dinheiro do cofrinho:  
 Escreva "Digite a quantidade de centavos que deseja retirar: " para StdOut.  
 Leia uma string desde a StdIn.  
 Converta a string para um número.  
 Se o número for maior do que o saldo deste cofrinho,  
   Escreva o texto CRLF para StdOut;  
   Escreva "Erro. Saldo Insuficiente no cofrinho." para StdOut;  
   Escreva o texto CRLF para StdOut;  
   Exiba o saldo do cofrinho;  
   Retorne.  
 Subtraia o número desde o saldo deste cofrinho.  
 Escreva "Fundos retirados com sucesso" junto com o texto CRLF para StdOut.  
 Escreva o texto CRLF para StdOut.  
 Exiba o saldo do cofrinho.

Rotina para que se deposite dinheiro no cofrinho:  
 Escreva "Digite a quantidade de centavos que deseja depositar: " para StdOut.  
 Leia uma string desde a StdIn.  
 Converta a string para um número.  
 Se o número for menor do que 0,  
   Escreva "Erro. Valor negativo." para StdOut;  
   Escreva o texto CRLF para StdOut;  
   Deposite dinheiro no cofrinho.  
 Adicione o número ao saldo deste cofrinho.  
 Escreva "Fundos adicionados com sucesso" junto com o texto CRLF para StdOut.  
 Exiba o saldo do cofrinho.

Rotina para que se exiba o saldo do cofrinho:  
 Se o saldo deste cofrinho for menor do que 100,  
   Escreva o texto CRLF para StdOut;  
   Escreva "O saldo do cofrinho é de " junto com o saldo deste cofrinho junto com " centavos." para StdOut;  
   Escreva o texto CRLF para StdOut;  
   Retorne.  
 Atribua o saldo deste cofrinho dividido por 100 para um número denominado quantidade de reais.  
 Atribua a quantidade de reais vezes 100 para um número denominado reais centavizados.  
 Atribua o saldo deste cofrinho menos os reais centavizados para um número denominado quantidade de centavos.  
 Se a quantidade de centavos for maior do que 9,   
   Escreva o texto CRLF para StdOut;  
   Escreva "O saldo do cofrinho é de R$ " junto com a quantidade de reais junto com "," junto com a quantidade de centavos para StdOut.  
 Se a quantidade de centavos for menor do que 10,   
   Escreva o texto CRLF para StdOut;  
   Escreva "O saldo do cofrinho é de R$ " junto com a quantidade de reais junto com ",0" junto com a quantidade de centavos para StdOut.  
 Escreva o texto CRLF para StdOut.

