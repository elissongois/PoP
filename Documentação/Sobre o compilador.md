O compilador da linguagem Português Puro, é um único binário completo contendo lexer, parser ou linker e assembler, realiza uma análise aprofundada do código fonte, permitindo inclusive compilar sistemas com modificações ou recursos específicos. Baseado nas informações fornecidas nas fontes, a seguir estão os detalhes sobre como ele executa essas funções:

### Análise Sintática e Semântica de Código

O compilador de Português Puro realiza a análise sintática e semântica através de uma série de *etapas de compilação bem definidas*, cada uma focada em aspectos específicos do código :

*   *Análise dos Arquivos Fornecidos (#003):* Esta fase é responsável por "Analisar código fonte dos arquivos..." . Ela envolve a *identificação e exame de tipos, variáveis globais e rotinas* presentes no código . O compilador utiliza *percorredores* para iterar sobre o trecho do arquivo fonte, movendo-se de acordo com as diretrizes de compilação .
*   *Identificação dos Tipos das Variáveis (#004):* Nesta etapa, o compilador se dedica a "Identificar os tipos das variáveis..." . Ele "destrincha" os tipos, realizando a expansão de listas, registro de plurais, identificação de tipos de dados primitivos e processamento de dados complementares .
*   *Identificação de Variáveis Globais (#005):* Foca na "Identificação de variáveis globais..." .
*   *Cabeçalhos de Rotinas (#006):* Esta fase se ocupa de "Agrupar os nomes das rotinas..." e compilar os cabeçalhos próprios para as rotinas .

#### Verificação de Erros
O compilador possui mecanismos robustos para *relatar erros sintáticos e semânticos*:
*   Ele utiliza um **sinalizador de erros** e uma **mensagem de erro** para indicar e armazenar problemas de compilação .
*   Ao detectar um erro, o sinalizador é ativado e uma mensagem de erro é atribuída, contendo um **Código de Erro** e a localização exata do problema (endereço do arquivo atual e número da linha) .
*   Apresenta mensagens de erro detalhadas, indicando o que era esperado versus o que foi encontrado .

#### Checagens Sintáticas e Semânticas
Muitas rotinas do compilador incluem *verificações explícitas* para garantir a correção sintática e semântica:
*   *Sintaxe:* Verifica a presença de operadores de atribuição (é, são) , pontos finais em declarações de tipos  e rotinas , artigos indefinidos , entre outros.
*   *Semântica:* Realiza verificações como:
    *   *Conflitos de variáveis globais:* Função para que se determine se uma variável global está causando conflitos .
    *   *Uso correto de palavras-chave:* Por exemplo, a palavra-chave "para" só pode ser utilizada com variáveis do tipo ponteiro .
    *   *Validação de tipos em atribuições:* Garante que variáveis globais tenham tipos válidos e valores literais compatíveis .
    *   *Unicidade de parâmetros:* Impede que o mesmo identificador seja declarado mais de uma vez como parâmetro em uma rotina .
    *   *Restrições de funções deliberativas:* Garante que funções booleanas retornem apenas 'sim' ou 'não' .

### Organização da Lista de Rotinas, Funções, Tipos e Variáveis

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

### Diferenciação Interna de Variável Global e Variável Local com o Mesmo Nome

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

### Inferência de Tipo Baseada no Nome da Variável

A linguagem Português Puro adota uma *inferência de tipo estática e forte, baseada no nome da variável* . Isso significa que o nome escolhido para uma variável ou tipo é crucial para o compilador determinar seu tipo:

*   *Definição de Tipos:* Ao declarar um novo tipo, ele recebe um nome e um nome plural . Esses nomes são então registrados no catálogo de tipos .
*   *Mecanismo de Busca:* Durante a compilação, quando o compilador encontra um nome que pode ser de um tipo (por exemplo, ao examinar um campo de estrutura  ou uma unidade de medida ), ele utiliza rotinas como Encontre um tipo usando o nome e o catálogo de tipos . O nome é comparado com os nomes de tipos já catalogados para inferir o tipo.
*   *Pluralização:* O processo de destrinche uns tipos (registro de plurais)  registra tanto o nome singular quanto o plural de um tipo no catálogo, permitindo que o compilador reconheça o tipo mesmo quando referido em sua forma plural (Ex: "umas linhas de texto" ).
*   *Estruturas e Campos:* Para estruturas, a declaração de campos pode usar a palavra-chave "denominado" . O compilador infere o tipo do campo com base no nome do tipo que o precede, como em "32 bytes denominados dmDeviceName" onde "byte" é o tipo  ou "Um ponteiro denominado caractere inicial" onde "ponteiro" é o tipo . Se o tipo não for explicitado, o compilador pode usar o próprio nome do campo como nome do tipo e tentar inferir a partir dele .
*   *Redução de Tipo:* O compilador pode determinar se um tipo "pode ser reduzido para" uma string ou outro tipo primitivo . Essa capacidade, que envolve recursividade na cadeia de tipo base , é um aspecto da inferência que permite ao compilador compreender a natureza fundamental de tipos derivados.
*   *Exemplo Prático:* Se o compilador encontra "um número", ele infere que é do tipo número. Se encontra "uma string", infere que é do tipo string. No contexto de estruturas, "Um sinalizador de quebra de texto é um sinalizador"  define sinalizador de quebra de texto como sendo do tipo sinalizador.

### Como Implementar uma Rotina que Depende de Várias Avaliações Condicionais Conjuntas sem Usar Alinhamentos de "Se"

A linguagem Português Puro oferece um mecanismo para lidar com avaliações condicionais complexas, especialmente em funções deliberativas, que evita o aninhamento excessivo de comandos "Se" no código-fonte do usuário:

*   *Rotinas Deliberativas:* Funções que "determinam se" algo é verdadeiro ou falso são marcadas com um sinalizador de deliberação  e devem retornar explicitamente "sim" ou "não" .
*   *Geração de Fragmentos Lógicos:* O compilador não traduz diretamente cada "Se" em um salto condicional simples no código de máquina. Em vez disso, ele utiliza **fragmentos** (instruções lógicas de baixo nível)  para construir a lógica condicional complexa. Por exemplo:
    *   etiqueta de negação lógica: Para inverter o resultado de uma condição .
    *   etiqueta de desvio falso: Para pular um bloco de código se uma condição for falsa .
*   *Encadeamento de Condições:* Ao invés de Se condição1 e condição2 e condição3, então..., o compilador pode gerar uma sequência de fragmentos que avaliam cada condição. Se uma falha, os fragmentos subsequentes são ignorados via desvios condicionais. Por exemplo, Se o sinalizador estiver ativo, Adicione um segundo fragmento usando a etiqueta de negação lógica. Adicione um terceiro fragmento usando a etiqueta de desvio falso. .
*   *Delegação para Funções Booleanas:* Para evitar alinhamentos de "Se" no código principal, a abordagem consiste em criar múltiplas *funções deliberativas auxiliares*, cada uma responsável por avaliar uma parte da condição complexa. O resultado de cada uma dessas funções (que retorna "sim" ou "não") é então usado sequencialmente na rotina principal, utilizando os fragmentos de negação e desvio. Isso modulariza a lógica e simplifica a leitura do código de alto nível.
*   *Limitação do Aninhamento:* O compilador explicitamente proíbe o aninhamento de condicionais no código-fonte, forçando a adoção de abordagens mais lineares ou baseadas em funções auxiliares: Apresente uma mensagem de erro contendo "Código de Erro #131. O aninhamento de condicionais não é permitido." . Isso reforça a necessidade de expressar lógicas complexas de forma mais estruturada, possivelmente através da combinação de resultados de funções deliberativas.

Em resumo, a complexidade das avaliações condicionais é gerenciada pelo compilador através da geração de uma sequência de *fragmentos lógicos* e pela modularização das condições em *funções deliberativas dedicadas*, em vez de depender de uma sintaxe de aninhamento profunda no código de alto nível do usuário.

### Percorredores, Trecho e Subtrecho

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