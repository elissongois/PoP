# Documentação do Compilador

Este arquivo documenta apenas o compilador de Português Puro: suas estruturas internas, as etapas de compilação e como ele faz as análises léxica e sintática. O compilador é uma ferramenta embutida, sem depender de lexers, parsers ou linkers externos, e é ele próprio escrito em Português Puro (veja `Código/Código-Fonte/` e `Código/Bibliotecas/`).

A linguagem em si não está descrita aqui. Consulte os documentos organizados em [`../Referência/`](../Referência/) e [`../Regras/`](../Regras/):

- **Características e paradigmas da linguagem** → [`../Referência/Características da Linguagem.md`](../Referência/Características%20da%20Linguagem.md)
- **Referência rápida de sintaxe** → [`../Referência/Guia Sintático.md`](../Referência/Guia%20Sintático.md)
- **Palavras-chave da linguagem** → [`../Referência/Palavras-chave.md`](../Referência/Palavras-chave.md)
- **Perguntas frequentes** → [`../Referência/Respostas de Perguntas Frequentes.md`](../Referência/Respostas%20de%20Perguntas%20Frequentes.md)
- **Análise sintática e semântica vista pelo usuário** → [`Sobre o compilador.md`](./Sobre%20o%20compilador.md)
- **Regras detalhadas, por assunto** → [`../Regras/`](../Regras/)

## Compilação e memória

### Compilação

A compilação pode ser efetuada via linha de comando ou através da IDE. O compilador inclui todos os arquivos com extensão `.pop` que estiverem dentro da pasta definida. O comando deve ter a estrutura:

```
<Endereço do binário do Compilador> <Endereço da pasta do projeto a ser compilada>
```

Exemplo: a partir de um terminal no diretório `C:\Compilador\`, com o binário `Compile.exe` e o projeto em `C:\Projeto\`:

```
Compile C:\Projeto\
```

### Estrutura de strings

Internamente, uma string é uma estrutura que contém ponteiros para o byte inicial e o byte final, o que permite manipulação direta da memória.

### Pilha (stack)

Os registradores `EBP` (base pointer) e `ESP` (stack pointer) gerenciam variáveis e parâmetros. O compilador gera código x86 usando:

- Primeiro argumento: `ebp+8`
- Segundo argumento: `ebp+12`
- Variáveis locais: `ebp-4`, `ebp-8` e assim por diante

O compilador lida automaticamente com valores de 4 bytes; para tamanhos maiores, o acesso deve ser feito diretamente via `ESP`.

### Processo de compilação

O processo inclui identificação de tipos, registro de variáveis globais, análise de cabeçalhos de rotinas, cálculo de tamanhos e deslocamentos, geração de código em hexadecimal e vinculação e montagem final do executável.

---

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
