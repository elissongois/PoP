= Português Puro =


== Características e Paradigmas ==


=== Linguagem de Alto Nível ===
A linguagem permite a criação de programas com alto nível de abstração, aproximando a programação da linguagem natural.


=== Passagem de Argumentos ===
Os argumentos em rotinas e funções são passados por referência. Alterações feitas dentro de uma rotina refletem diretamente na variável original.


=== Sistema de Tipos ===


'''Tipagem estática e forte''': tipos definidos em tempo de compilação, sem compatibilidade implícita.


'''Inferência de tipos''': o compilador pode deduzir o tipo de variáveis a partir do nome ou do contexto inicial.


'''Conversão de tipos''': deve ser sempre explícita, sem conversões automáticas.


=== Paradigma de Programação ===
Segue os paradigmas imperativo e estruturado, com suporte a sequência, condição e repetição.


=== Sensibilidade a Maiúsculas ===
Não diferencia letras maiúsculas de minúsculas. Identificadores como ''número'', ''Número'' e ''NÚMERO'' são equivalentes.


== Tipos de Dados ==


=== Tipos Primitivos ===
Dois tipos fundamentais: ''byte'' e ''estrutura''.
Todos os outros tipos derivam deles.


=== Tipos Derivados ===
Entre os tipos derivados mais comuns estão: ''caractere'', ''string'', ''lista'', ''ponteiro'', ''número'', ''fração'', ''número hexadecimal'', ''sinalizador'' (booleano).


== Sintaxe e Estrutura ==


=== Comentários ===


'''Linha única''': iniciados com barra invertida.
Exemplo: <code>Inicialize os componentes. \ comentário</code>


'''Bloco''': delimitados por colchetes, podendo ser usados no meio da linha.
Exemplo: <code>Pinte a caixa [na borda] e a cor branca [como preenchimento].</code>


=== Declaração de Variáveis ===


'''Globais''': declaradas com artigos definidos.
<code>A raiz de dois é uma fração igual a 99/70.</code>


'''Locais''': declaradas dentro de rotinas com artigos indefinidos e opcionalmente nomeadas com ''denominado''.
Exemplo:
<code>Atribua 18 para um número denominado idade.</code>
<code>Some 1 ao número.</code>


=== Estruturas (Registros) ===
Sintaxe:


<code><artigo> <nome do tipo> é uma estrutura com <lista de campos>.</code>
Exemplo:


<code>Uma string é uma estrutura com um caractere inicial e um caractere final.</code>


Estruturas vazias ocupam 0 bits. O tamanho equivale à soma de seus campos.


=== Laços e Iterações ===


<code>Itere.</code> ? Inicia um laço infinito.


<code>Reitere.</code> ? Retorna ao início do laço.


<code>Pare.</code> ? Interrompe o laço.


Observação: não é permitido aninhar laços.


=== Operadores ===


'''Aritméticos''': ''mais'', ''menos'', ''vezes'', ''dividido por''.
Todos possuem a mesma precedência, avaliados da esquerda para a direita.


'''Concatenação de strings''': ''junto com'', ''seguido de'', ''acompanhado de''. Variações como ''junto'' e ''juntamente'' também são aceitas.


=== Rotinas, Parâmetros e Funções ===


Declaração:
<code> Rotina para que se <nome>:</code>
ou
<code> Para que se <nome>:</code>


Parâmetros: declarados com artigos indefinidos.


Preposições do cabeçalho (''com'', ''para'', ''usando'') devem ser mantidas.


Verbos ''ser'' e ''estar'' são sinônimos para o compilador.


==== Funções Booleanas ====
Chamadas de '''funções deliberativas'''.
Sintaxe:


<code>Função para que se determine se <condição>:</code>


Exemplo:


<code>Função para que se determine se um número é negativo:<br>  Se o número for menor que 0, diga sim.<br>  Diga não.</code>


O retorno é feito com ''diga sim'' ou ''diga não''.


=== Callbacks ===
O cabeçalho pode incluir a palavra-chave ''compativelmente'', permitindo que o endereço da rotina seja passado externamente.
Exemplo:
<code>Aponte um ponteiro para a rotina <nome>.</code>


=== Retorno ===
Usa-se <code> Retorne.</code>.
Funções booleanas retornam com ''diga sim'' ou ''diga não''.


=== Manipulação de Strings ===


Strings são estruturas com ponteiros para o caractere inicial e final.


A biblioteca padrão fornece rotinas como ''Atribua'', ''Acrescente'' e ''Remova''.


A alocação e desalocação são automáticas.


É possível obter o comprimento em bytes.


=== Integração com DLLs ===
Chamadas externas:
<code>Processe "dll" "função" com <argumentos> retornando <valor></code>


Os parâmetros seguem a convenção C: ordem inversa e tipos simples por valor.


=== Injeção de Código de Máquina ===
Trechos em hexadecimal podem ser incluídos com:
<code> Decodifique <texto hexadecimal></code>


== Compilador e Memória ==


=== Compilação ===
A compilação pode ser efetuada via linha de comando ou através da IDE. O compilador está programado para incluir todos os arquivos com extensão '''.pop''' que estiverem dentro da pasta definida. O comando para compilação deve conter a estrutura a seguir:


<code><Endereço do binário do Compilador> <Endereço da pasta do projeto a ser compilada></code>


Exemplo:


Suponhamos que o usuário está dentro de um terminal no diretório C:\Compilador\. Nesta pasta oo nome do binário do compilador do Português Puro é Compile.exe. A pasta com os arquivos de código para compilação é C:\Projeto\. Então o comando para compilar o projeto seria:


<code> Compile C:\Projeto\</code>


=== Estrutura de Strings ===
Internamente, uma string é representada por uma estrutura que contém ponteiros para o byte inicial e final. Isso permite manipulação direta em memória.


=== Pilha (Stack) ===
Os registradores '''EBP''' (base pointer) e '''ESP''' (stack pointer) são usados para gerenciar variáveis e parâmetros.
O compilador gera código x86 usando registradores:


Primeiro argumento: <code>ebp+8</code>


Segundo argumento: <code>ebp+12</code>


Variáveis locais: <code>ebp-4</code>, <code>ebp-8</code>, etc.


O compilador lida automaticamente com valores de 4 bytes. Para tamanhos maiores, o acesso deve ser feito diretamente via ESP


=== Processo de Compilação ===


O processo de compilação inclui:


Identificação de tipos.
Registro de variáveis globais.
Análise de cabeçalhos de rotinas.
Cálculo de tamanhos e deslocamentos.
Geração de código em hexadecimal.
Vinculação e montagem final do executável.


=== Compilador ===


Caso queira efetuar o download do [[Compilador em Português Puro]] para linha de comando, ele está disponível nesta página:


[https://github.com/elenderg/Portugues-Puro Compilador]


=== IDE ===


Existe uma IDE ou ADI ([[Ambientes de Desenvolvimento Integrado]]) minimalista feita escrita e compilada completamente em Português Puro. Atualmente o nome do projeto deste ADI é [[PAL-1000]].


Caso queira efetuar o download do PAL-1000, ele está disponível nesta página:


[https://github.com/elenderg/PAL-1000 PAL-1000]


=== Extensões ===


Para quem prefere usar um editor de código mais popular, existe extensões de realce publicada para o VSCode:


[https://github.com/elenderg/Extensao-Portugues-Puro-VS-Code Extensão de Realce de Sintaxe]


Alternativamente, uma extensão para um LSP para o Português Puro está sendo desenvolvido:


[https://github.com/elenderg/POP-LSP LSP para Português Puro]


Caso você utilize o Notepad++ para editar código, no repositório do compilador para português puro encontra-se um pacote de configurações para realce de sintaxe e compilação de projeto utilizando o terminal do próprio editor Notepad++.


=== Documentação ===


A documentação da linguagem está disponível em:


[https://portugues-puro.gitbook.io/documentacao Documentação do Português puro no GitBook]


[https://github.com/elenderg/Documentacao-Portugues-Puro Documentação do Português puro no GitHub]


# Introdução
O compilador da linguagem Português Puro, sendo uma ferramenta embutida, sem depender de lexers, parsers ou linkers externos, realiza uma análise aprofundada do código fonte, permitindo inclusive compilar sistemas com modificações ou recursos específicos. Baseado nas informações fornecidas nas fontes, a seguir estão os detalhes sobre como ele executa essas funções:


## Análise Sintática e Semântica de Código


O compilador de Português Puro realiza a análise sintática e semântica através de uma série de *etapas de compilação bem definidas*, cada uma focada em aspectos específicos do código :


*   *Análise dos Arquivos Fornecidos (#003):* Esta fase é responsável por "Analisar código fonte dos arquivos..." . Ela envolve a *identificação e exame de tipos, variáveis globais e rotinas* presentes no código . O compilador utiliza *percorredores* para iterar sobre o trecho do arquivo fonte, movendo-se de acordo com as diretrizes de compilação .
*   *Identificação dos Tipos das Variáveis (#004):* Nesta etapa, o compilador se dedica a "Identificar os tipos das variáveis..." . Ele "destrincha" os tipos, realizando a expansão de listas, registro de plurais, identificação de tipos de dados primitivos e processamento de dados complementares .
*   *Identificação de Variáveis Globais (#005):* Foca na "Identificação de variáveis globais..." .
*   *Cabeçalhos de Rotinas (#006):* Esta fase se ocupa de "Agrupar os nomes das rotinas..." e compilar os cabeçalhos próprios para as rotinas .


### Verificação de Erros
O compilador possui mecanismos robustos para *relatar erros sintáticos e semânticos*:
*   Ele utiliza um **sinalizador de erros** e uma **mensagem de erro** para indicar e armazenar problemas de compilação .
*   Ao detectar um erro, o sinalizador é ativado e uma mensagem de erro é atribuída, contendo um **Código de Erro** e a localização exata do problema (endereço do arquivo atual e número da linha) .
*   Apresenta mensagens de erro detalhadas, indicando o que era esperado versus o que foi encontrado .


### Checagens Sintáticas e Semânticas
Muitas rotinas do compilador incluem *verificações explícitas* para garantir a correção sintática e semântica:
*   *Sintaxe:* Verifica a presença de operadores de atribuição (é, são) , pontos finais em declarações de tipos  e rotinas , artigos indefinidos , entre outros.
*   *Semântica:* Realiza verificações como:
    *   *Conflitos de variáveis globais:* Função para que se determine se uma variável global está causando conflitos .
    *   *Uso correto de palavras-chave:* Por exemplo, a palavra-chave "para" só pode ser utilizada com variáveis do tipo ponteiro .
    *   *Validação de tipos em atribuições:* Garante que variáveis globais tenham tipos válidos e valores literais compatíveis .
    *   *Unicidade de parâmetros:* Impede que o mesmo identificador seja declarado mais de uma vez como parâmetro em uma rotina .
    *   *Restrições de funções deliberativas:* Garante que funções booleanas retornem apenas 'sim' ou 'não' .


## Organização da Lista de Rotinas, Funções, Tipos e Variáveis


O compilador organiza os elementos do programa através de *listas e catálogos* (estruturas que funcionam como tabelas hash para busca eficiente) :


*   **Tipos (Tipos):**
    *   São armazenados em uma *lista de tipos* (descrita como uma lista duplamente encadeada) e em um **catálogo de tipos** .
    *   Cada tipo é uma **lista** que contém seu nome, nome plural, tipo base, quantidade de caracteres (tamanho em bytes), campos (para estruturas), e sinalizadores de recursividade e informações complementares .
    *   A rotina Catalogue o tipo  insere o tipo no catálogo de tipos usando seu nome.
*   **Variáveis (Variáveis):**
    *   *Variáveis globais:* São gerenciadas na lista variáveis globais e no **catálogo de variáveis globais** . Uma variável é uma **lista** que inclui sua categoria (global, local, parâmetro, etc.), nome, tipo, endereço ou deslocamento, e sinalizadores .
    *   *Variáveis locais e parâmetros:* São partes integrantes da estrutura de uma rotina .
    *   *Valores literais:* São armazenados na lista valores literais e no **catálogo de variáveis hexadecimais** , incluindo seus dados (conteúdo) e nome do tipo.
*   **Rotinas (Rotinas):**
    *   São armazenadas na lista rotinas e no **catálogo geral de rotinas** .
    *   Uma rotina é uma **lista** abrangente com seu cabeçalho, unidades semânticas (uma representação interna da rotina), parâmetros, variáveis locais, instruções (corpo da rotina), e sinalizadores diversos (função, deliberação, compatibilidade) .
    *   O compilador também mantém um **catálogo de rotinas úteis** para otimização .
    *   A rotina Catalogue a rotina  insere a rotina no catálogo geral de rotinas usando suas unidades semânticas.
*   **Funções de DLLs (Funções):**
    *   São armazenadas dentro de estruturas de **DLLs**, que por sua vez contêm uma lista de funções . Cada função tem seu nome, endereço, e um endereço thunk .


## Diferenciação Interna de Variável Global e Variável Local com o Mesmo Nome


A linguagem Português Puro diferencia variáveis globais e locais, mesmo que possuam o mesmo nome, através de um *sistema de escopo e uma ordem de resolução de nomes prioritária* :


*   *Declaração:*
    *   Variáveis globais são declaradas com artigos definidos ("O", "Os", "A", "As") e têm visibilidade em todo o programa .
    *   Variáveis locais e parâmetros são declarados com artigos indefinidos ("um", "uns", "uma", "umas") e são visíveis apenas dentro de sua rotina ou função .
*   *Ordem de Busca (Resolução de Escopo):* Quando o compilador precisa resolver o nome de uma variável (Encontre uma variável usando o nome ), ele segue uma hierarquia:
    1.  Primeiro, ele busca entre as **variáveis locais** da rotina utilizada atualmente (a rotina em que o código está sendo compilado) .
    2.  Em seguida, ele busca entre os **parâmetros** da rotina utilizada atualmente .
    3.  Somente se a variável não for encontrada nos escopos local ou de parâmetro, ele busca no **catálogo de variáveis globais** .
    4.  Por último, ele busca no catálogo de variáveis hexadecimais (para valores literais) .
*   Essa ordem de busca garante que uma variável local ou um parâmetro sempre terá *precedência* sobre uma variável global com o mesmo nome, resolvendo ambiguidades de forma clara e consistente com o princípio de encapsulamento local.


## Inferência de Tipo Baseada no Nome da Variável


A linguagem Português Puro adota uma *inferência de tipo estática e forte, baseada no nome da variável* . Isso significa que o nome escolhido para uma variável ou tipo é crucial para o compilador determinar seu tipo:


*   *Definição de Tipos:* Ao declarar um novo tipo, ele recebe um nome e um nome plural . Esses nomes são então registrados no catálogo de tipos .
*   *Mecanismo de Busca:* Durante a compilação, quando o compilador encontra um nome que pode ser de um tipo (por exemplo, ao examinar um campo de estrutura  ou uma unidade de medida ), ele utiliza rotinas como Encontre um tipo usando o nome e o catálogo de tipos . O nome é comparado com os nomes de tipos já catalogados para inferir o tipo.
*   *Pluralização:* O processo de destrinche uns tipos (registro de plurais)  registra tanto o nome singular quanto o plural de um tipo no catálogo, permitindo que o compilador reconheça o tipo mesmo quando referido em sua forma plural (Ex: "umas linhas de texto" ).
*   *Estruturas e Campos:* Para estruturas, a declaração de campos pode usar a palavra-chave "denominado" . O compilador infere o tipo do campo com base no nome do tipo que o precede, como em "32 bytes denominados dmDeviceName" onde "byte" é o tipo  ou "Um ponteiro denominado caractere inicial" onde "ponteiro" é o tipo . Se o tipo não for explicitado, o compilador pode usar o próprio nome do campo como nome do tipo e tentar inferir a partir dele .
*   *Redução de Tipo:* O compilador pode determinar se um tipo "pode ser reduzido para" uma string ou outro tipo primitivo . Essa capacidade, que envolve recursividade na cadeia de tipo base , é um aspecto da inferência que permite ao compilador compreender a natureza fundamental de tipos derivados.
*   *Exemplo Prático:* Se o compilador encontra "um número", ele infere que é do tipo número. Se encontra "uma string", infere que é do tipo string. No contexto de estruturas, "Um sinalizador de quebra de texto é um sinalizador"  define sinalizador de quebra de texto como sendo do tipo sinalizador.


## Como Implementar uma Rotina que Depende de Várias Avaliações Condicionais Conjuntas sem Usar Alinhamentos de "Se"


A linguagem Português Puro oferece um mecanismo para lidar com avaliações condicionais complexas, especialmente em funções deliberativas, que evita o aninhamento excessivo de comandos "Se" no código-fonte do usuário:


*   *Rotinas Deliberativas:* Funções que "determinam se" algo é verdadeiro ou falso são marcadas com um sinalizador de deliberação  e devem retornar explicitamente "sim" ou "não" .
*   *Geração de Fragmentos Lógicos:* O compilador não traduz diretamente cada "Se" em um salto condicional simples no código de máquina. Em vez disso, ele utiliza **fragmentos** (instruções lógicas de baixo nível)  para construir a lógica condicional complexa. Por exemplo:
    *   etiqueta de negação lógica: Para inverter o resultado de uma condição .
    *   etiqueta de desvio falso: Para pular um bloco de código se uma condição for falsa .
*   *Encadeamento de Condições:* Ao invés de Se condição1 e condição2 e condição3, então..., o compilador pode gerar uma sequência de fragmentos que avaliam cada condição. Se uma falha, os fragmentos subsequentes são ignorados via desvios condicionais. Por exemplo, Se o sinalizador estiver ativo, Adicione um segundo fragmento usando a etiqueta de negação lógica. Adicione um terceiro fragmento usando a etiqueta de desvio falso. .
*   *Delegação para Funções Booleanas:* Para evitar alinhamentos de "Se" no código principal, a abordagem consiste em criar múltiplas *funções deliberativas auxiliares*, cada uma responsável por avaliar uma parte da condição complexa. O resultado de cada uma dessas funções (que retorna "sim" ou "não") é então usado sequencialmente na rotina principal, utilizando os fragmentos de negação e desvio. Isso modulariza a lógica e simplifica a leitura do código de alto nível.
*   *Limitação do Aninhamento:* O compilador explicitamente proíbe o aninhamento de condicionais no código-fonte, forçando a adoção de abordagens mais lineares ou baseadas em funções auxiliares: Apresente uma mensagem de erro contendo "Código de Erro #131. O aninhamento de condicionais não é permitido." . Isso reforça a necessidade de expressar lógicas complexas de forma mais estruturada, possivelmente através da combinação de resultados de funções deliberativas.


Em resumo, a complexidade das avaliações condicionais é gerenciada pelo compilador através da geração de uma sequência de *fragmentos lógicos* e pela modularização das condições em *funções deliberativas dedicadas*, em vez de depender de uma sintaxe de aninhamento profunda no código de alto nível do usuário.


## Percorredores, Trecho e Subtrecho


Estes são conceitos fundamentais na manipulação de texto e código dentro do compilador e da biblioteca padrão:


*   **Trecho (Trecho):**
    *   É uma *lista que contém um bloco de texto ou código* .
    *   Representa o *conteúdo de um arquivo fonte* (arquivo fonte é uma lista com um endereço completo e um trecho) .
    *   É usado para carregar o conteúdo de arquivos , converter código para formatos como hexadecimal , ou para armazenar listagens de compilação (trecho de listagem) .
    *   Pode ser preenchido com caracteres (Preencha o trecho EXE deste compilador com o caractere null ) ou ter strings adicionadas a ele (Acrescente a segunda string para o trecho ).
*   **Subtrecho (Subtexto):**
    *   É uma **string que representa um segmento ou porção de uma string maior ou de um trecho** .
    *   É definido por um caractere inicial e um caractere final, que são endereços de byte dentro da string original .
    *   É usado principalmente para *iterar e manipular partes de uma string* ou trecho sem a necessidade de copiar os dados subjacentes .
    *   As operações de avanço (Adicione 1 para o caractere inicial deste subtexto ) e recuo (Subtraia 1 desde o caractere final deste subtexto ) são aplicadas a subtextos para navegar pelo texto.
    *   Um subtexto pode ser subdividido em outros subtextos, como subtexto numérico e subtexto fracionário .
*   **Percorredor (Percorredor):**
    *   É uma *estrutura que atua como um iterador ou cursor de texto* para strings ou trechos .
    *   Contém dois subtextos: segmento inicial e segmento final .
        *   O **segmento inicial** representa a porção do texto que está sendo processada ou o "token" atual.
        *   O **segmento final** representa o restante do texto a ser processado .
    *   A rotina **Mova o percorredor**  é a operação principal, que avança o percorredor para a próxima unidade semântica (palavra, símbolo, etc.), atualizando o segmento inicial e o segmento final.
    *   A rotina **recue um percorredor**  permite mover-se para trás, indicando que o percorredor mantém o estado da sua posição.
    *   É amplamente utilizado na *análise lexical e sintática* do compilador para desmembrar o código-fonte em unidades menores e identificar elementos da linguagem, como tipos, variáveis e instruções .


# Seções e Estruturas


## **Seção 1: Estruturas de Dados Principais**


Esta seção detalha as estruturas de dados fundamentais que o compilador da linguagem "Português Puro" utiliza. A compreensão destas estruturas é crucial para entender como o código-fonte é analisado, processado e, finalmente, transformado em um arquivo executável.


### **1. `Compilador`**
- **Definição:** É a estrutura central que encapsula todo o estado do processo de compilação.
- **Campos Notáveis:**
    - `endereço da pasta`: O diretório raiz do projeto a ser compilado.
    - `sinalizador de erros`: Indica se ocorreu algum erro durante a compilação.
    - `mensagem de erro`: Armazena a descrição do erro, caso ocorra.
    - `trecho exe`: Armazena o código binário do executável que está sendo construído.
- **Propósito:** Atua como o contêiner global para todas as informações e dados que o compilador manipula, gerenciando o fluxo de compilação do início ao fim.


### **2. `Tipo`**
- **Definição:** Representa um tipo de dado na linguagem.
- **Campos Notáveis:**
    - `nome` e `nome plural`: As formas singular e plural do nome do tipo (ex: "número", "números").
    - `tipo base`: Referência a outro tipo do qual ele deriva (ex: um tipo `contagem` pode ter `número` como seu tipo base).
    - `campos`: Uma lista de `campo de estrutura` para tipos que são `estrutura`.
    - `quantidade de caracteres`: O tamanho do tipo em bytes.
- **Propósito:** Define as características de cada tipo de dado, permitindo que o compilador realize a verificação de tipos, alocação de memória e outras operações relacionadas.


### **3. `Variável`**
- **Definição:** Representa uma variável declarada no código-fonte.
- **Campos Notáveis:**
    - `categoria`: Classifica a variável como `valor literal`, `variável global`, `variável local`, `parâmetro`, etc.
    - `nome`: O identificador da variável.
    - `tipo`: Uma referência à estrutura `Tipo` que define o tipo desta variável.
    - `endereço` ou `deslocamento`: Armazena a localização da variável na memória (um endereço absoluto para globais ou um deslocamento na pilha para locais).
- **Propósito:** Manter todas as informações sobre uma variável, desde seu tipo e nome até sua localização na memória, para que o compilador possa referenciá-la e manipulá-la corretamente.


### **4. `Rotina`**
- **Definição:** Representa uma rotina (função ou procedimento) no código.
- **Campos Notáveis:**
    - `representação interna da rotina`: Uma forma "canonizada" do nome da rotina, usada para busca e resolução.
    - `parâmetros`: A lista de variáveis que a rotina aceita como entrada.
    - `variáveis locais`: A lista de variáveis declaradas dentro do escopo da rotina.
    - `fragmentos`: Uma lista de instruções lógicas que compõem o corpo da rotina.
- **Propósito:** Estruturar o código executável. Cada rotina declarada no código-fonte é convertida em uma estrutura `Rotina`, que contém tudo o que o compilador precisa saber para gerar o código de máquina correspondente.


### **5. `Fragmento`**
- **Definição:** É a unidade mais básica de instrução lógica para o compilador. O código em Português Puro é traduzido para uma sequência de fragmentos.
- **Campos Notáveis:**
    - `etiqueta`: Um número que identifica o tipo de instrução (ex: `etiqueta de demanda interna`, `etiqueta de carregamento de registrador EAX`). Existem 22 tipos de etiquetas.
    - `variável`, `rotina`, `função`: Referências a outras estruturas de dados sobre as quais o fragmento opera.
- **Propósito:** Servir como uma linguagem intermediária de baixo nível. Em vez de traduzir o texto diretamente para código de máquina, o compilador primeiro o converte para essa lista de fragmentos, simplificando a fase final de geração de código.


### **6. Estruturas do Executável (`Cabeçalho DOS`, `Cabeçalho PE`)**
- **Definição:** São estruturas que espelham o formato de um arquivo executável (PE - *Portable Executable*) no Windows.
- **Campos Notáveis:**
    - `Signature`: Assinaturas mágicas como "MZ" para o cabeçalho DOS e "PE\0\0" para o cabeçalho PE.
    - `AddressOfEntryPointInMemory`: O endereço da primeira instrução a ser executada.
    - `SizeOfCodeInFile`, `SizeOfInitializedDataInFile`: Tamanhos das diferentes seções do programa.
- **Propósito:** Construir o arquivo `.exe` final. O compilador preenche essas estruturas com os metadados necessários para que o sistema operacional Windows possa carregar e executar o programa corretamente.


---


## **Seção 2: Fase 1: Inicialização e Carregamento dos Arquivos**


Esta é a primeira fase ativa do processo de compilação. O objetivo aqui é preparar o ambiente do compilador e carregar todo o código-fonte escrito em "Português Puro" a partir dos arquivos do projeto, realizando um pré-processamento essencial.


### **2.1. Inicialização do Compilador (Etapa `#001`)**


Antes de qualquer análise de código, o compilador executa uma rotina de inicialização (`Rotina para que se compile um endereço da pasta (inicialização)`) que realiza três tarefas principais:


1.  **Limpeza do Ambiente:** A rotina `Finalize o compilador` é chamada para garantir que qualquer dado de uma compilação anterior seja liberado da memória. Isso assegura que cada compilação comece em um estado limpo e previsível.


2.  **Criação dos Catálogos:** Em seguida, `Inicialize o compilador` aloca memória para as estruturas de dados centrais, com destaque para os `catálogos`. Esses catálogos (`catálogo de tipos`, `catálogo de variáveis globais`, `catálogo geral de rotinas`, etc.) são essencialmente tabelas de hash que armazenarão todas as informações sobre tipos, variáveis e rotinas que o compilador encontrar durante a análise do código.


3.  **Definição dos Tipos Primitivos:** Por fim, a rotina `Adicione os tipos primitivos` é chamada. Ela popula o `catálogo de tipos` com os dois tipos mais fundamentais da linguagem:
    - **`byte`**: O bloco de construção básico para dados.
    - **`estrutura`**: O tipo usado para criar tipos de dados compostos.
    Esses tipos primitivos formam a base sobre a qual todos os outros tipos definidos pelo usuário serão construídos.


### **2.2. Carregamento dos Arquivos Fonte (Etapa `#002`)**


Uma vez que o ambiente está pronto, o compilador começa a ler os arquivos do projeto através da rotina `Rotina para que se compile um endereço da pasta (arquivos de código fonte)`.


1.  **Busca por Arquivos `.pop`:** O compilador varre o diretório do projeto especificado na linha de comando em busca de todos os arquivos que terminam com a extensão `.pop`.


2.  **Leitura e Pré-processamento:** Para cada arquivo `.pop` encontrado, seu conteúdo é carregado na memória. Imediatamente após a leitura, uma etapa crucial de pré-processamento é executada: a **expansão de contrações**.


    - **Expansão de Contrações:** A rotina `Parse a string para ... (para expandir contrações)` analisa o texto e substitui as contrações da língua portuguesa por suas formas expandidas. O objetivo é simplificar drasticamente a gramática que o compilador precisará entender na próxima fase.
    - **Exemplos de Expansão:**
        - `ao` se torna `a o`
        - `neste` se torna `em este`
        - `duma` se torna `de uma`
        - `pela` se torna `por a`


    Após essa expansão, o texto de todos os arquivos fonte está carregado e pré-processado na memória, pronto para a fase de análise sintática.


---


## **Seção 3: Fase 2: Análise Sintática do Código-Fonte (Etapa `#003`)**


Esta é a fase onde o compilador efetivamente "lê" e "entende" o código-fonte que foi previamente carregado e pré-processado. O objetivo principal da análise sintática (ou *parsing*) é validar se o código segue as regras gramaticais da linguagem e, ao mesmo tempo, transformar as declarações textuais em representações de dados estruturadas dentro dos catálogos do compilador.


A rotina de entrada para esta fase é `Rotina para que se compile um endereço da pasta (análise dos arquivos fornecidos)`.


### **3.1. O "Percorredor": Navegando pelo Código**


O compilador não lê o arquivo caractere por caractere. Em vez disso, ele utiliza um mecanismo chamado **`percorredor`**. Pense no percorredor como um cursor inteligente que avança pelo texto "pulando" de uma unidade semântica (token) para outra, ignorando automaticamente espaços em branco, quebras de linha e comentários (delimitados por `\` ).


A rotina principal desta fase, `Examine o arquivo fonte`, entra em um laço que, a cada iteração, avança o percorredor e tenta identificar a estrutura que está sendo declarada com base em palavras-chave.


### **3.2. Identificação e Análise de Estruturas**


O processo de análise é *top-down*. O compilador identifica o tipo de declaração principal e, em seguida, chama rotinas especializadas para analisar os detalhes dessa declaração. As principais estruturas que ele procura no nível mais alto do arquivo são:


1.  **Definição de Tipos:** Identificada por palavras-chave como `um`, `uma`, `uns`, `umas`. Quando encontra uma dessas palavras, ele assume que uma nova estrutura de `Tipo` está sendo definida e chama a rotina `Examine um tipo usando o percorredor` para extrair seu nome, tipo base, campos (se for uma estrutura), etc.


2.  **Definição de Variáveis Globais:** A lógica é similar à de tipos. Ao identificar um padrão que indica a declaração de uma variável global, a rotina `Examine uma variável global usando o percorredor` é acionada para capturar o nome da variável, seu tipo e seu valor inicial (se houver).


3.  **Definição de Rotinas:** Identificada pelas palavras-chave `Rotina` ou `Função`. Ao encontrá-las, o compilador invoca `Examine uma rotina usando o percorredor`. Esta é uma das rotinas de análise mais complexas, pois precisa extrair o nome da rotina, seus parâmetros, suas variáveis locais e o corpo do código.


### **3.3. Validação de Sintaxe e Tratamento de Erros**


Enquanto percorre o código, o compilador também realiza validações sintáticas básicas. A rotina `mova um percorredor retornando uma string de erro` verifica a integridade de construções como:
- Comentários de bloco, que devem ser balanceados com `[` e `]`.
- Strings literais, que devem começar e terminar com aspas duplas (`"`).
- Qualificadores, que devem ser balanceados com `(` e `)`.


Se o compilador encontra uma construção que não reconhece (que não é um tipo, variável global ou rotina válida) ou se uma das validações de sintaxe falha, ele:
1. Ativa o `sinalizador de erros` na estrutura principal do `Compilador`.
2. Gera uma `mensagem de erro` descritiva, incluindo o trecho do código problemático e o número da linha.
3. Interrompe o processo de compilação.


Ao final desta fase, se nenhum erro foi encontrado, os catálogos do compilador (`catálogo de tipos`, `catálogo de variáveis globais`, `catálogo geral de rotinas`) estão populados com todas as declarações encontradas nos arquivos `.pop`.


---


## **Seção 4: Fase 3: Resolução de Tipos e Variáveis (Etapas `#004` e `#005`)**


Com as estruturas de dados (`Tipo`, `Variável`, `Rotina`) criadas e catalogadas na fase anterior, o compilador agora precisa conectar as referências entre elas. Nesta fase, nomes que eram apenas texto (como o nome de um tipo em uma declaração de variável) são resolvidos para apontar para as estruturas de dados reais correspondentes.


### **4.1. Resolução dos Tipos das Variáveis (Etapa `#004`)**


Até este ponto, uma estrutura `Variável` continha o nome do seu tipo como uma simples string (no campo `nome do tipo`). A rotina `Rotina para que se compile um endereço da pasta (identificação dos tipos das variáveis)` tem o objetivo de transformar essa string em um vínculo concreto.


1.  **O Processo:** A rotina `Resolva os tipos das variáveis` é chamada, e ela itera sobre todas as variáveis que foram parseadas:
    - Variáveis globais.
    - Parâmetros de cada rotina.
    - Variáveis locais de cada rotina.


2.  **A "Mágica" da Resolução:** Para cada `Variável`, o compilador pega o texto do seu `nome do tipo` e busca no `catálogo de tipos` pela estrutura `Tipo` que corresponde àquele nome.


3.  **O Vínculo:** Uma vez que a estrutura `Tipo` é encontrada, o compilador armazena uma **referência** (um ponteiro) para ela dentro do campo `tipo (referência)` da `Variável`.


Ao final desta etapa, cada variável no programa está diretamente ligada à sua definição de tipo. Isso é fundamental, pois agora o compilador pode consultar instantaneamente o tamanho, a estrutura e outras propriedades de qualquer variável, informações essenciais para as fases de cálculo de memória e geração de código.


### **4.2. Resolução das Variáveis Globais (Etapa `#005`)**


Esta etapa, executada pela rotina `Rotina para que se compile um endereço da pasta (identificação de variáveis globais)`, foca especificamente em processar os valores iniciais das variáveis globais.


1.  **Análise do Valor Inicial:** A rotina `Resolva as variáveis globais` percorre a lista de variáveis globais. Para cada uma, ela analisa o campo `texto inicializador`.


2.  **Criação de Literais:** Se o valor inicial for um literal (por exemplo, um número como `10`, uma string como `"Olá, mundo!"`, ou um ponteiro como `nulo`), o compilador:
    - Cria (ou reutiliza, se já existir) uma `Variável` especial com a categoria `valor literal`.
    - Armazena o valor literal em um formato binário pronto para ser escrito no arquivo executável.
    - Vincula essa variável literal à variável global que está sendo inicializada.


Esta etapa garante que todas as constantes e valores pré-definidos do programa sejam corretamente processados e preparados para serem incluídos na seção de dados do executável final.


---


## **Seção 5: Fase 4: Análise dos Cabeçalhos de Rotinas (Etapa `#006`)**


Nesta fase, o compilador se concentra em analisar apenas a **assinatura** de cada rotina, não o seu corpo (as instruções dentro dela). O objetivo é criar uma "identidade" única para cada rotina, permitindo que o compilador encontre a rotina certa quando ela for chamada em outra parte do código.


A rotina principal aqui é `Rotina para que se compile um endereço da pasta (cabeçalhos de rotinas)`.


### **5.1. O "Moniker": A Representação Interna da Rotina**


O conceito mais importante desta fase é a `representação interna da rotina`, também chamada de *moniker*. Esta é uma versão padronizada e inequívoca do nome de uma rotina.


- **Exemplo:**
  - **Nome no código:** `Rotina para que se adicione um número para uma contagem`
  - **Moniker (Representação Interna):** `adicione [número] para [contagem]`


- **Características do Moniker:**
  - **Sem artigos:** Artigos como "um", "uma" são removidos.
  - **Tipos entre colchetes:** Os nomes dos tipos dos parâmetros são colocados entre colchetes.
  - **Preposições expandidas:** Preposições podem ser expandidas para incluir sinônimos, garantindo que diferentes formas de escrever a mesma coisa sejam tratadas da mesma maneira.


### **5.2. O Processo de Análise do Cabeçalho**


1.  **Extração do Cabeçalho:** Para cada `Rotina` parseada na fase anterior, o compilador isola o texto do seu cabeçalho (a parte que contém seu nome e parâmetros).


2.  **Geração do Moniker:** O compilador analisa o texto do cabeçalho e o converte no formato de *moniker*. Durante este processo, ele valida se os tipos de dados mencionados nos parâmetros existem de fato no `catálogo de tipos`.


3.  **Armazenamento:** O *moniker* gerado é armazenado no campo `representação interna da rotina` da estrutura `Rotina`.


Ao final desta fase, cada rotina possui uma assinatura única e padronizada. Isso é crucial para a fase de compilação do corpo das rotinas, pois quando o código encontrar uma chamada de rotina (ex: `adicione 5 para minha contagem`), o compilador irá gerar um *moniker* para essa chamada e usá-lo para buscar a rotina correspondente no `catálogo geral de rotinas`.


---


## **Seção 6: Fase 5: Cálculo de Tamanhos e Deslocamentos (Etapa `#007`)**


Após as fases de análise e resolução, o compilador tem uma visão clara de *quais* estruturas de dados existem, mas ainda não sabe *onde* elas ficarão na memória. Esta fase é dedicada a calcular o tamanho de cada tipo de dado e determinar os deslocamentos (*offsets*) de memória para os campos dentro das estruturas e para as variáveis locais dentro das rotinas.


A rotina de entrada é `Rotina para que se compile um endereço da pasta (cálculo de tamanhos e deslocamentos)`.


### **6.1. Cálculo do Tamanho dos Tipos**


O compilador percorre todos os `Tipos` que foram definidos.


- **Tipos Primitivos:** Para tipos como `byte`, o tamanho já é conhecido (1 byte).
- **Estruturas:** Para os tipos `estrutura`, o compilador calcula o tamanho total somando os tamanhos de todos os seus campos. Esta é uma operação que pode ser recursiva, caso uma estrutura contenha outra.
- **Ponteiros:** Tipos que são ponteiros para outros tipos recebem um tamanho padrão (geralmente 4 bytes em uma arquitetura de 32 bits).


Ao final, o campo `quantidade de caracteres` de cada estrutura `Tipo` é preenchido com seu tamanho total em bytes.


### **6.2. Cálculo dos Deslocamentos (Offsets)**


Com o tamanho de cada tipo conhecido, o compilador pode determinar a posição relativa das variáveis na memória.


- **Campos de Estruturas:** Para cada `estrutura`, o compilador calcula o deslocamento de cada campo em relação ao início da estrutura. O primeiro campo tem deslocamento 0, o segundo tem um deslocamento igual ao tamanho do primeiro, e assim por diante.


- **Parâmetros e Variáveis Locais:** O compilador calcula o tamanho total que os parâmetros e as variáveis locais de uma rotina ocuparão na pilha (*stack*). Ele então atribui a cada parâmetro e variável local um `deslocamento` relativo ao ponteiro base da pilha (o registrador EBP).
  - Por convenção, os parâmetros têm deslocamentos positivos (`EBP+8`, `EBP+12`, ...).
  - As variáveis locais têm deslocamentos negativos (`EBP-4`, `EBP-8`, ...).


Esta etapa é puramente de cálculo e planejamento. Nenhum código é gerado, mas as informações de tamanho e deslocamento são armazenadas nas estruturas `Tipo` e `Variável` e serão vitais para a fase de geração de código, que precisará saber exatamente em quais endereços de memória ler e escrever.


---


## **Seção 7: Fase 6: Compilação do Corpo das Rotinas (Etapas `#008` a `#011`)**


Esta é a fase mais complexa e crucial do compilador. Aqui, o código em linguagem natural dentro de cada rotina é traduzido para a representação intermediária do compilador: a lista de `Fragmentos`. Estas etapas preparam o terreno e executam a tradução.


### **7.1. Adição de Rotinas Internas (Etapa `#008`)**


O compilador primeiro injeta rotinas pré-definidas que são essenciais para operações de baixo nível, como alocação e manipulação de memória. A rotina `Rotina para que se compile um endereço da pasta (adição de rotinas de memória incorporadas)` adiciona essas "ferramentas" internas ao `catálogo geral de rotinas`, tornando-as disponíveis para serem usadas pelo código do programador.


### **7.2. Análise de Uso das Rotinas (Etapa `#009`)**


Antes de compilar, o compilador faz uma análise para descobrir quais rotinas são realmente utilizadas no programa. Isso pode ser usado para otimizações, como remover rotinas não utilizadas do executável final.


### **7.3. Compilação do Conteúdo (Etapa `#010`)**


Esta é a etapa principal, governada pela rotina `Rotina para que se compile um endereço da pasta (conteúdo das rotinas)`. O compilador itera sobre cada rotina que foi parseada e executa os seguintes passos:


1.  **Análise do Corpo:** Ele utiliza o `percorredor` para ler o corpo da rotina, instrução por instrução (geralmente separadas por ponto final ou quebra de linha).


2.  **Tradução para Fragmentos:** Para cada instrução em Português Puro (ex: `Atribua 10 para uma variável`, `Se a variável for maior do que 5`, `Chame a rotina de cálculo`), o compilador a traduz para um ou mais `Fragmentos`.
    - **Exemplo:** Uma instrução `Incremente uma variável` é traduzida para um `Fragmento` com a `etiqueta de acréscimo`. Uma chamada de rotina é traduzida para um `Fragmento` com a `etiqueta de demanda interna`.
    - O compilador possui uma lógica extensa para reconhecer os diferentes padrões de frases da linguagem e mapeá-los para os 22 tipos de fragmentos existentes.


3.  **Armazenamento:** A sequência de fragmentos gerada é armazenada no campo `fragmentos` da estrutura `Rotina` correspondente.


### **7.4. Adição da Rotina de Inicialização (Etapa `#011`)**


Finalmente, o compilador cria e compila uma rotina sintética especial: a rotina de inicialização. Esta rotina não é escrita pelo programador, mas é gerada pelo compilador para realizar tarefas essenciais antes que o código principal do programa comece a rodar, como a inicialização de variáveis globais. O corpo desta rotina também é convertido em fragmentos.


Ao final desta fase, todas as rotinas (as do programador e as internas do compilador) tiveram seu corpo traduzido para a linguagem de `Fragmentos`, a representação intermediária que será usada para gerar o código de máquina final.


---


## **Seção 8: Fase 7: Geração de Código (Etapas `#012` a `#015`)**


Nesta fase, o compilador traduz a representação abstrata e intermediária do programa (as listas de `Fragmentos`) em código de máquina real (opcodes da arquitetura x86). É aqui que o programa começa a tomar sua forma binária final.


### **8.1. Otimização e Endereçamento Final (Etapas `#012` e `#013`)**


- **Deslocamentos Finais (`#012`):** A rotina `Compile o endereço da pasta (deslocamento de parâmetros e variáveis)` realiza uma última passagem para ajustar os deslocamentos de memória de parâmetros e variáveis, garantindo que o layout da pilha (*stack*) para cada rotina esteja correto.
- **Endereçamento (`#013`):** A rotina `Compile o endereço da pasta (endereço)` define os endereços virtuais para as diferentes seções do programa (código, dados, etc.). Ela calcula onde cada rotina e cada variável global irá residir na memória quando o programa for executado. Esses endereços são cruciais para resolver saltos (`jumps`) e chamadas (`calls`).


### **8.2. Transmutação: De Fragmentos para Código de Máquina (Etapa `#014`)**


Esta é a etapa de tradução principal, executada pela rotina `Compile o endereço da pasta (transmutação)`. O compilador itera sobre a lista de `Fragmentos` de cada rotina e os converte em sequências de bytes que correspondem a instruções da CPU (opcodes x86).


- **Mapeamento Direto:** Cada um dos 22 tipos de `Fragmento` tem uma lógica de tradução correspondente.
  - Um `Fragmento` com `etiqueta de acréscimo` é traduzido para a instrução `INC` do assembly.
  - Um `Fragmento` com `etiqueta de carregamento de registrador EAX` é traduzido para uma instrução `MOV EAX, ...`.
  - Um `Fragmento` com `etiqueta de desvio falso` (usado em condicionais `Se`) é traduzido para uma instrução de salto condicional como `JNZ` ou `JZ`.
- **Resolução de Endereços:** Durante a transmutação, os endereços simbólicos (referências a variáveis e rotinas) são substituídos pelos endereços de memória reais calculados na etapa anterior. Por exemplo, uma chamada a uma rotina se torna uma instrução `CALL` para um endereço de memória específico.


O resultado desta etapa é o preenchimento do `trecho exe` na estrutura do `Compilador` com o código de máquina de todas as rotinas.


### **8.3. Vinculação (Linking) (Etapa `#015`)**


A etapa de vinculação, executada por `Compile o endereço da pasta (vinculação)`, lida com as dependências externas do programa, principalmente as funções de DLLs do Windows (como `kernel32.dll`).


- **Tabela de Importação:** O compilador constrói a Tabela de Endereços de Importação (IAT) no arquivo PE. Esta tabela lista todas as funções externas que o programa chama.
- **Thunks:** Para cada função importada, o compilador gera um pequeno código de "salto" (um *thunk*) que o sistema operacional preencherá com o endereço real da função quando o programa for carregado na memória.


Esta fase garante que o programa saiba como chamar funções do sistema operacional, como `GetCommandLineA` para ler argumentos da linha de comando ou `SetConsoleOutputCP` para ajustar a página de código do console.


# Análise Léxica e Sintática em Português Puro


Este documento detalha as duas primeiras e mais cruciais fases do compilador da linguagem "Português Puro": a **Análise Léxica** (ou *lexing*) e a **Análise Sintática** (ou *parsing*). Juntas, essas fases transformam o código-fonte textual em uma estrutura organizada que o compilador pode entender e processar.


## Fase 1: Análise Léxica (Tokenização)


A análise léxica é o primeiro passo do compilador ao encontrar o código-fonte. Sua principal responsabilidade é ler o fluxo de caracteres do código e agrupá-los em unidades lógicas chamadas **tokens** (ou "unidades semânticas").


O analisador léxico, muitas vezes chamado de *lexer* ou *scanner*, opera com base em um conjunto de regras para identificar o que constitui um "token". Ele também é responsável por descartar elementos que não têm significado para a estrutura do programa, como espaços em branco e comentários.


### O Processo de Tokenização


O processo pode ser visto como "fatiar" o código. Por exemplo, a linha:


```portugues-puro
\ Declara uma variável
Atribua 10 para um número.
```


É transformada de uma sequência de caracteres em uma lista de tokens como:


`[ATRIBUA]`, `[VALOR_NUMERICO: "10"]`, `[PREPOSICAO: "para"]`, `[ARTIGO_INDEFINIDO: "um"]`, `[IDENTIFICADOR: "número"]`, `[PONTO_FINAL: "."]`


O comentário `\ Declara uma variável` é completamente ignorado e descartado nesta fase.


### Caracteres Permitidos e Ignoráveis


A linguagem define um conjunto específico de caracteres que podem compor os identificadores (nomes de variáveis, tipos, etc.). A função `Função para que se determine se um byte é um byte ignorável` no código-fonte do compilador define essa regra.


- **Caracteres que formam palavras (tokens):**
    - Letras (maiúsculas e minúsculas, incluindo acentuadas como `á`, `ç`, `õ`).
    - Dígitos (`0`-`9`).
    - Símbolos especiais que podem fazer parte de nomes: `_` (underline), `'` (apóstrofo), `-` (hífen), `+` (sinal de adição), `/` (barra inclinada), `~` (til), `@` (arroba), `#` (cardinal), `%` (porcentagem), `&` (e comercial), `£` (libra esterlina).


- **Caracteres Ignorados (Espaço em Branco):**
    - Espaços, tabulações (`\t`), e quebras de linha (`CRLF`) são considerados "espaço em branco irrelevante". O lexer os utiliza para separar tokens, mas os descarta em seguida. Isso torna a linguagem *case-insensitive* e com formatação livre.


- **Comentários:**
    - **Comentários de linha (`\`):** Tudo desde a barra invertida até o final da linha é descartado.
    - **Comentários de bloco (`[]`):** Todo o conteúdo entre colchetes é descartado.


### O Papel dos Caracteres de Pontuação


Os caracteres de pontuação desempenham um papel fundamental como **delimitadores**. Eles sinalizam o fim de uma instrução ou a separação entre partes de uma mesma instrução.


- **`.` (Ponto Final):** É um dos delimitadores mais importantes. Geralmente marca o fim de uma declaração completa (seja de tipo, variável ou rotina) ou de um bloco de controle de fluxo (como o fim de um `Se`).
- **`,` (Vírgula):** Usada para separar elementos em uma lista ou para introduzir o bloco de código em uma estrutura condicional `Se`.
- **`;` (Ponto e Vírgula):** Usado para separar múltiplas instruções dentro de um mesmo bloco de código, como em um condicional `Se`.
- **`:` (Dois Pontos):** Usado para separar o nome de uma rotina do seu corpo de instruções.


Esses caracteres são transformados em tokens próprios (ex: `TOKEN_PONTO_FINAL`, `TOKEN_VIRGULA`), pois são essenciais para que o analisador sintático (a próxima fase) entenda a estrutura da frase.


## Fase 2: Análise Sintática (Parsing)


Após a análise léxica transformar o código-fonte em uma sequência de tokens, a **Análise Sintática** (ou *parsing*) entra em ação. A responsabilidade desta fase é pegar essa sequência de tokens e verificar se ela segue as regras gramaticais da linguagem.


O analisador sintático, ou *parser*, essencialmente "entende a frase". Ele agrupa os tokens para formar estruturas hierárquicas, como declarações de variáveis, chamadas de rotinas e estruturas de controle de fluxo. O resultado desse processo é geralmente uma árvore de sintaxe abstrata (AST - Abstract Syntax Tree), que representa a estrutura lógica do código.


### O Papel Central dos Artigos na Sintaxe


Uma das características mais distintivas da sintaxe do "Português Puro" é o uso de **artigos definidos e indefinidos** para gerenciar o ciclo de vida das variáveis (declaração, inferência e uso).


#### Artigos Indefinidos (`um`, `uma`, `uns`, `umas`)


Os artigos indefinidos são a principal ferramenta para **declaração e inferência de tipo**. Quando o parser encontra um artigo indefinido, ele sabe que uma nova entidade (seja um tipo ou uma variável) está sendo introduzida.


1.  **Declaração de Tipos:**
    - **Padrão:** `Um <nome-do-tipo> é um <tipo-base>.`
    - **Exemplo:** `Uma contagem é um número.`
    - **Interpretação do Parser:** Ao ver `Uma contagem...`, o parser sabe que está definindo um novo `Tipo`. Ele cria uma nova entrada no `catálogo de tipos` com o nome "contagem" e a vincula ao tipo base "número".


2.  **Declaração e Inferência de Variáveis Locais:**
    - **Padrão:** `Atribua <valor> para um/uma <nome-com-palavra-chave-de-tipo>.`
    - **Exemplo:** `Atribua 10 para um número de itens.`
    - **Interpretação do Parser:** O artigo `um` sinaliza a declaração de uma nova variável local. O parser então analisa o nome "número de itens", identifica a palavra-chave "número" e **infere** que o tipo da variável é `número`. Ele cria a variável `número de itens` no escopo da rotina atual.


#### Artigos Definidos (`o`, `a`, `os`, `as`)


Os artigos definidos são usados para **referenciar variáveis que já foram declaradas**. Eles informam ao parser que você está utilizando uma variável existente, e não criando uma nova.


1.  **Uso de Variáveis:**
    - **Padrão:** `<Ação> <artigo definido> <nome-da-variável>.`
    - **Exemplo:**
      ```portugues-puro
      \ Declaração com artigo indefinido
      Atribua 10 para um total.


      \ Uso com artigo definido
      Adicione 5 para o total.
      Escreva o total para StdOut.
      ```
    - **Interpretação do Parser:** Quando o parser encontra `... para o total`, ele sabe que não deve criar uma nova variável. Em vez disso, ele busca no escopo atual (primeiro variáveis locais, depois globais) por uma variável já existente chamada "total" para aplicar a operação.


2.  **Declaração de Variáveis Globais:**
    - **Padrão:** `O/A <nome-da-variável> é um/uma <tipo>.`
    - **Exemplo:** `A cor de fundo é uma cor.`
    - **Interpretação do Parser:** A combinação de um artigo definido no início da declaração (fora de uma rotina) sinaliza a criação de uma **variável global**. O parser cria a variável "cor de fundo" no escopo global do módulo.


Essa distinção clara entre artigos definidos e indefinidos é o que permite que a linguagem tenha uma sintaxe fluida e natural, ao mesmo tempo que mantém um sistema de tipos estático e rigoroso nos bastidores.


# Folha de Consulta


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
    <instrução 2>.
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
  - **Sintaxe:** `Um/Uma <nome> é uma estrutura com <campo 1> e <campo 2>...`
  - **Exemplos:**
    ```portugues-puro
    \ Estrutura com múltiplos campos
    Uma pessoa é uma estrutura com
      Uma string denominada nome e
      Um número denominado idade.


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
  - Um mecanismo para criar "campos virtuais" cujo valor é calculado por uma rotina, permitindo que sejam acessados como se fossem campos reais da estrutura.
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
  - **Iterar:** Uma rotina de obtenção é usada dentro de um laço para percorrer os itens.
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
### Palavras Chave


#### Artigo
`um`, `uma`, `uns`, `umas`, `esse`, `essa`, `aquele`, `aquela`, `esses`, `essas`, `aqueles`, `aquelas`, `certo`, `certa`, `certos`, `certas`, `determinado`, `determinada`, `determinados`, `determinadas`, `o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas`
---
#### Artigo Definido
`o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas`
---
#### Artigo Indefinido
`um`, `uma`, `uns`, `umas`, `esse`, `essa`, `aquele`, `aquela`, `esses`, `essas`, `aqueles`, `aquelas`, `certo`, `certa`, `certos`, `certas`, `determinado`, `determinada`, `determinados`, `determinadas`
---
#### Pronome Demonstrativo Adjacente
`este`, `esta`, `estes`, `estas`
---
#### Pronome Demonstrativo Abrangente
`esse`, `essa`, `aquele`, `aquela`, `esses`, `essas`, `aqueles`, `aquelas`, `certo`, `certa`, `certos`, `certas`, `determinado`, `determinada`, `determinados`, `determinadas`
---
#### Pronome Demonstrativo
`este`, `esta`, `estes`, `estas`, `esse`, `essa`, `aquele`, `aquela`, `esses`, `essas`, `aqueles`, `aquelas`, `certo`, `certa`, `certos`, `certas`, `determinado`, `determinada`, `determinados`, `determinadas`
---
#### Possessivo Reverso
`de`
---
#### Preposição
`parde`, `partir`, `partindo`, `abaixo`, `acima`, `ante`, `perante`, `antes`, `debaixo`, `sob`, `acerca`, `cerca`, `cuja`, `cujo`, `cujas`, `cujos`, `próximo`, `perto`, `com`, `tal`, `como`, `contra`, `dada`, `dado`, `dando`, `gerando`, `resultando`, `retornando`, `desde`, `depois`, `após`, `durante`, `em`, `entre`, `dentre`, `até`, `mediante`, `para`, `via`, `segundo`, `acordo`, `sem`, `então`, `sobre`, `usando`, `versus`, `enquanto`, `aproximadamente`, `através`, `algum`, `debaixo`, `por`, `referente`, `pertencente`, `pertinente`, `relativo`, `relativa`, `concernente`, `atinente`, `começando`, `iniciando`, `aproada`, `aproado`, `aproando`, `orientada`, `orientado`, `orientando`, `orientando-se`, `voltada`, `voltado`, `virada`, `virado`, `virando`, `virando-se`, `tão`, `tanto`, `quanto`, `quão`, `qual`, `after`, `regressivamente`, `dentro de`, `dentro`, `parecida`, `parecido`, `semelhante`, `similar`, `em comprimento`, `d'`, `só`, `somente`, `unicamente`, `exclusivamente`, `apenas`, `fora`, `menores`, `alta`, `alto`, `comprido`, `comprida`, `largo`, `larga`
---
#### Preposição Especial
`a`, `de`
---
#### Preposição de Atribuição
`em`, `para`
---
#### Locução Prepositiva
`parde`, `partir`, `partindo`, `abaixo`, `acima`, `ante`, `perante`, `antes`, `debaixo`, `sob`, `acerca`, `cerca`, `cuja`, `cujo`, `cujas`, `cujos`, `próximo`, `perto`, `com`, `tal`, `como`, `contra`, `dada`, `dado`, `dando`, `gerando`, `resultando`, `retornando`, `desde`, `depois`, `após`, `durante`, `em`, `entre`, `dentre`, `até`, `mediante`, `para`, `via`, `segundo`, `acordo`, `sem`, `então`, `sobre`, `usando`, `versus`, `enquanto`, `aproximadamente`, `através`, `algum`, `debaixo`, `por`, `referente`, `pertencente`, `pertinente`, `relativo`, `relativa`, `concernente`, `atinente`, `começando`, `iniciando`, `aproada`, `aproado`, `aproando`, `orientada`, `orientado`, `orientando`, `orientando-se`, `voltada`, `voltado`, `virada`, `virado`, `virando`, `virando-se`, `tão`, `tanto`, `quanto`, `quão`, `qual`, `after`, `regressivamente`, `dentro de`, `dentro`, `parecida`, `parecido`, `semelhante`, `similar`, `em comprimento`, `d'`, `só`, `somente`, `unicamente`, `exclusivamente`, `apenas`, `fora`, `menores`, `alta`, `alto`, `comprido`, `comprida`, `largo`, `larga`
---
#### Sinal de Pontuação
`ponto final`, `vírgula`, `ponto&vírgula`, `sinal de dois pontos`, `ponto de exclamação`, `ponto de interrogação`
---
#### Símbolo
`acento circunflexo`, `barra vertical`, `asterisco`, `sinal de adição`, `hífen`, `barra inclinada`, `símbolo menor do que`, `símbolo maior do que`, `chave esquerda`, `chave direita`, `sinal de igualdade`, `128`, `130`, `132`, `133`, `134`, `135`, `136`, `137`, `139`, `145`, `146`, `147`, `148`, `149`, `150`, `151`, `152`, `153`, `155`, `161`, `162`, `163`, `164`, `165`, `166`, `167`, `168`, `169`, `170`, `171`, `172`, `173`, `174`, `175`, `176`, `177`, `178`, `179`, `180`, `183`, `184`, `185`, `186`, `187`, `188`, `189`, `190`, `191`, `215`, `247`
---
#### Conjunção
`e`, `ou`, `nem`, `neither`, `nor`
---
#### Possessivo Inglês
`'s`, `'`
---
#### Verbo
`cabe`, `couber`, `começa`, `começar`, `conter`, `contiver`, `contém`, `deve`, `devem`, `deveria`, `deveriam`, `estamos`, `estar`, `estará`, `estarão`, `estava`, `estavam`, `estiver`, `estiverem`, `está`, `estão`, `excede`, `excedem`, `existe`, `existem`, `existir`, `finaliza`, `finalizar`, `é`, `foi`, `for`, `foram`, `forem`, `há`, `houver`, `inicia`, `iniciar`, `necessita`, `necessitar`, `parece`, `pode`, `podem`, `podemos`, `poderia`, `possuem`, `possui`, `possuir`, `puder`, `puderem`, `requer`, `ser`, `será`, `serão`, `supera`, `superam`, `superar`, `são`, `tem`, `ter`, `termina`, `terminar`, `tiver`, `têm`
---
#### Operador Aritmético
`mais`, `menos`, `vezes`, `multiplicado`, `dividido`, `seguido`, `juntamente`, `junto`, `acompanhado`
---
#### Qualificador
`(`
---
#### Valor Literal
`nulo`, `nula`, `nulos`, `nulas`, `inexistente`, `inexistentes`, `zerado`, `nil`, `número`, `texto entre aspas`, `valor hexadecimal`
---
#### Ponteiro Literal
`nulo`, `nula`, `nulos`, `nulas`, `inexistente`, `inexistentes`, `zerado`, `nil`
---
#### Valor Numérico Literal
`número inteiro`, `fração literal`, `numeral misto literal`
---
#### String Literal
`texto entre aspas`
---
#### Valor Hexadecimal Literal
`valor hexadecimal`
---
#### Palavra-chave de Designação
`chamado`, `chamados`, `chamada`, `chamadas`, `denominado`, `denominados`, `denominada`, `denominadas`
---
#### Operador de Atribuição Composto
`igual`
---
#### Advérbio de Negação
`não`
---
#### Operador de Atribuição de Estruturas Compostas
`tem`, `têm`, `contém`, `contêm`
---
#### Palavra-chave de Referenciamento
`(referência)`
---
#### Pausa
`e`, `ou`, `,`, `;`
---
#### Operador de Atribuição Simples
`é`, `está`, `são`, `estão`, `estamos`, `for`, `forem`, `estiverem`, `estarem`, `possui`
---
#### Palavra-chave de Complementação
`com`, `contendo`
---
#### Termo de Equivalência
`a`, `para`
---
#### Açúcar Sintático
`Procedimento`, `Rotina`, `Função`
---
#### Comando de Deliberação
`determine`
---
#### Comando Condicional
`se`, `quando`
---
#### Comando de Saída de Rotina
`Retorne`
---
#### Comando de Repetição
`reitere`
---
#### Comando de Interrupção de Repetições
`pare`
---
#### Comando de Decisão (Confirmação ou Negação)
`diga`
---
#### Decisor Literal Afirmativo
`sim`
---
#### Decisor Literal Negativo
`não`, `negativo`, `negativamente`
---
#### Chamada de Biblioteca Externa
`invoque`, `processe`
---
#### Point
`aponte`, `direcione`, `redirecione`
---
#### Comando de Proteção
`isole`, `conserve`, `preserve`
---
#### Comando de Percorrimento
`itere`
---
#### Palavra-chave de Reutilização de Rotina
`empregue`
---
#### Palavra-chave de Obtenção de Tamanho de Variável
`magnitude`
---
#### Conteúdo
`conteúdo`
---
#### Endereçamento
`endereçamento`
---
#### Objeto Indireto
`via`, `por`
---
#### Operador de Adição
`mais`
---
#### Operador de Subtração
`menos`
---
#### Operador de Divisão
`dividido`
---
#### Palavra de Concatenação
`com`, `de`, `a`, `seguida`
---
#### Operador de Multiplicação
`vezes`, `multiplicado`
---
#### Operador de Continuidade
`e`
---
#### Palavra-chave de Devolução
`retornando`, `recebendo`, `obtendo`
---
#### Número Ordinal
`número ordinal`
---
#### Palavra Ignorável
`já`, `ainda`
---
#### Vogal Acentuada
`á`, `ã`, `â`, `à`, `é`, `è`, `ê`, `ë`, `í`, `î`, `ì`, `ï`, `ó`, `õ`, `ô`, `ö`, `ú`, `ù`, `ü`, `û`, `ý`
---


# Perguntas Frequentes sobre Português Puro


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



