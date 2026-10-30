# LSP de Português Puro — estado e próximos passos

Este documento registra o estado da extensão VS Code mantida em [`LSP/`](./LSP/), os desafios de oferecer recursos de linguagem para Português Puro e uma lista de controle para acompanhar a evolução. A Documentação MCP é a fonte normativa prioritária; os documentos locais em [`Regras/`](./Regras/) servem como referência complementar e não devem contradizê-la.

## Recursos que já funcionam

### Edição e navegação

- [x] Reconhecimento de arquivos `.pop` com o identificador de linguagem `portugues-puro`.
- [x] Codificação padrão Windows-1252 para arquivos da linguagem.
- [x] Realce TextMate inicial para comentários de linha (`\`), comentários entre colchetes, strings, números, literais booleanos, palavras-chave, artigos, conjunções e preposições.
- [x] Realce dos cabeçalhos de rotinas e funções deliberativas, parâmetros, qualificadores entre parênteses e separadores `;` de nomes alternativos.
- [x] Hover para palavras documentadas, tipos, variáveis e declarações de rotinas, com informações de parâmetros e nomes alternativos.
- [x] Sugestões de palavras da linguagem e de tipos, variáveis globais, rotinas e nomes alternativos declarados em arquivos `.pop` da mesma pasta.
- [x] Snippets para rotinas, funções deliberativas, estruturas, variáveis globais e locais e laços `Itere`/`Reitere`.
- [x] Ir para Definição para tipos, variáveis globais, rotinas e funções.
- [x] Ir para Definição de Tipo para tipos e variáveis globais ou locais tipadas.
- [x] Ir para Implementação para chamadas de rotinas e funções.
- [x] Resolução de referências em nomes compostos e escritos em mais de uma linha.
- [x] Busca por arquivos `.pop` irmãos, inclusive quando não estão abertos; arquivos em pastas pai ou subpastas não entram nessa busca.
- [x] Atualização da tabela de símbolos quando um documento abre, muda ou é salvo; cache de documentos irmãos em disco.

### Análise e diagnósticos existentes

O servidor tem um parser próprio em [`LSP/server/src/typeParser.ts`](./LSP/server/src/typeParser.ts). Ele não substitui o compilador: oferece uma análise incremental voltada aos recursos do editor.

- [x] Declarações de tipos derivados, tipos primitivos, estruturas, campos, uniões, ponteiros, arrays contíguos de bytes e unidades escalares.
- [x] Nomes de tipos sem distinção entre maiúsculas e minúsculas, pluralização de tipos e normalização de espaços.
- [x] Declarações de variáveis globais com artigos definidos e, quando possível, inferência de tipo a partir de literais.
- [x] Cabeçalhos de rotinas e funções, parâmetros, nomes alternativos, valores de retorno declarados e resolução de chamadas.
- [x] Variáveis locais criadas em chamadas, resolução de argumentos, precedência de variáveis locais sobre globais e preservação de parâmetros.
- [x] Comentários removidos da entrada do parser sem alterar os deslocamentos usados para diagnósticos e navegação.
- [x] Diagnósticos para alguns tipos desconhecidos, declarações de campos, chamadas incompatíveis e usos inválidos de instruções como `Retorne`, `Diga` e `Decodifique`.

## Desafios trazidos pela linguagem

- **Sintaxe em linguagem natural:** palavras que indicam estrutura também podem aparecer em nomes, expressões e texto comum. A análise não pode tratar toda ocorrência de um termo como palavra-chave.
- **Identificadores compostos e flexíveis:** nomes podem conter várias palavras, espaços e quebras de linha. Encontrar o início e o fim de um símbolo exige mais do que identificar uma única palavra.
- **Artigos com múltiplos papéis:** artigos indefinidos podem introduzir tipos, campos, parâmetros ou variáveis locais; artigos definidos podem declarar variáveis globais ou referenciar símbolos já existentes.
- **Variações morfológicas e ortográficas:** plural, gênero, acentos e diferenças de caixa precisam ser considerados sem confundir identificadores semelhantes.
- **Cabeçalhos expressivos:** qualificadores entre parênteses são descrições literais; nomes alternativos são separados por `;`; parâmetros são introduzidos por artigos indefinidos e podem se misturar com preposições e conjunções.
- **Comentários e strings com delimitadores próprios:** `\` inicia comentários de linha e `[ ... ]` delimita comentários no código. Colchetes, aspas e pontuação podem ocorrer em posições que mudam a interpretação.
- **Escopo definido por declarações e convenções:** corpos de rotinas e visibilidade de variáveis não dependem apenas de chaves ou indentação convencional.
- **Semântica distribuída:** a documentação da linguagem, exemplos do compilador e subconjuntos aceitos pelo parser podem divergir. A extensão precisa explicitar o que implementa e evitar apresentar suposições como regras da linguagem.
- **Encoding legado:** arquivos existentes podem usar Windows-1252; leitura, navegação e edição devem preservar os caracteres acentuados corretamente.

## Obstáculos já superados

- O parser preserva os offsets originais ao mascarar comentários, permitindo que diagnósticos e destinos de navegação continuem apontando para o texto correto.
- A resolução de tipos e símbolos atravessa arquivos irmãos sem exigir que todos estejam abertos; arquivos externos são armazenados em cache e decodificados em Windows-1252.
- Nomes com várias palavras, pluralização e espaços ou quebras de linha foram incorporados à busca por símbolos e à navegação.
- Tipos, variáveis globais e rotinas têm catálogos próprios, evitando tratar toda declaração como a mesma espécie de símbolo.
- Cabeçalhos alternativos são associados à declaração principal, e parâmetros/argumentos podem ser reconhecidos apesar de artigos, preposições e variações de número.
- Os recursos novos de edição foram conectados à contribuição da extensão, e não apenas ao servidor: gramática TextMate e snippets fazem parte do manifesto do VS Code.
- Uma expressão incorreta, `Caso contrário`, foi removida das sugestões, do realce e do snippet após revisão da regra documentada; a suíte ganhou uma verificação para impedir seu retorno.

## Inventário do vocabulário documentado no MCP e complementos normativos

O MCP é a fonte normativa prioritária. Este inventário separa o que as páginas consultadas afirmam ou exemplificam dos complementos normativos fornecidos para este projeto, para não atribuir ao MCP conteúdo que ainda não aparece nas páginas verificadas. **Não é uma lista completa de palavras reservadas.** O MCP consultado não apresenta um catálogo normativo único de palavras-chave, formas verbais, preposições, conjunções ou qualificadores. Portanto, termos de exemplos e nomes de tipos não devem ser classificados automaticamente como reservados.

### Vocabulário lexical auxiliar dos arquivos do projeto

As categorias abaixo foram extraídas de [`Documentação/Palavras-chave.md`](./Documentação/Palavras-chave.md), usando [`Regras/Palavras-Chave.md`](./Regras/Palavras-Chave.md) como catálogo amplo complementar. Elas ajudam a guiar a próxima implementação do LSP, mas **não anulam nem ampliam por si só a especificação MCP**. Uma palavra dessa lista não deve ser marcada como reservada, oferecida como completion normativa ou tratada como sinônimo válido até sua confirmação no MCP ou em documentação normativa que o MCP adote.

| Categoria lexical local | Itens listados nos arquivos |
|---|---|
| Artigos indefinidos e demonstrativos abrangentes | `um`, `uma`, `uns`, `umas`, `esse`, `essa`, `esses`, `essas`, `aquele`, `aquela`, `aqueles`, `aquelas`, `certo`, `certa`, `certos`, `certas`, `determinado`, `determinada`, `determinados`, `determinadas`. |
| Artigos definidos / demonstrativos adjacentes | `o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas`. A classificação dos demonstrativos como artigos é local; manter a distinção MCP entre os quatro artigos definidos e as demais formas até confirmação. |
| Conjunções | `e`, `ou`, `nem`; a lista local também registra `neither` e `nor`, mas observa que são formas inglesas a remover futuramente. Não sugerir como formas normativas sem confirmação MCP. |
| Verbos e formas flexionadas | `cabe`, `couber`, `começa`, `começar`, `conter`, `contiver`, `contém`, `deve`, `devem`, `deveria`, `deveriam`, `estamos`, `estar`, `estará`, `estarão`, `estava`, `estavam`, `estiver`, `estiverem`, `está`, `estão`, `excede`, `excedem`, `existe`, `existem`, `existir`, `finaliza`, `finalizar`, `é`, `foi`, `for`, `foram`, `forem`, `há`, `houver`, `inicia`, `iniciar`, `necessita`, `necessitar`, `parece`, `pode`, `podem`, `podemos`, `poderia`, `possuem`, `possui`, `possuir`, `puder`, `puderem`, `requer`, `ser`, `será`, `serão`, `são`, `tem`, `ter`, `termina`, `terminar`, `tiver`, `têm`. |
| Operadores aritméticos e concatenação | `mais`, `menos`, `vezes`, `multiplicado`, `dividido`, `seguido`, `juntamente`, `junto`, `acompanhado`; a documentação MCP confirma as locuções `multiplicado por`, `dividido por`, `junto com`, `seguido de` e `acompanhado de`. A lista local é de radicais/formas, não especifica todas as combinações. |
| Preposições e locuções prepositivas | `parde`, `partir`, `partindo`, `abaixo`, `acima`, `ante`, `perante`, `antes`, `debaixo`, `sob`, `acerca`, `cerca`, `cuja`, `cujo`, `cujas`, `cujos`, `próximo`, `perto`, `com`, `tal`, `como`, `contra`, `dada`, `dado`, `dando`, `gerando`, `resultando`, `retornando`, `desde`, `depois`, `após`, `durante`, `em`, `entre`, `dentre`, `até`, `mediante`, `para`, `via`, `segundo`, `acordo`, `sem`, `então`, `sobre`, `usando`, `versus`, `enquanto`, `aproximadamente`, `através`, `algum`, `por`, `referente`, `pertencente`, `pertinente`, `relativo`, `relativa`, `concernente`, `atinente`, `começando`, `iniciando`, `aproada`, `aproado`, `aproando`, `orientada`, `orientado`, `orientando`, `orientando-se`, `voltada`, `voltado`, `virada`, `virado`, `virando`, `virando-se`, `tão`, `tanto`, `quanto`, `quão`, `qual`, `after`, `dentro de`, `dentro`, `parecida`, `parecido`, `semelhante`, `similar`, `em comprimento`, `d'`, `só`, `somente`, `unicamente`, `exclusivamente`, `apenas`, `fora`, `menores`, `alta`, `alto`, `comprido`, `comprida`, `largo`, `larga`. A lista contém duplicação de `debaixo`; foi normalizada aqui sem duplicar o item. |
| Designação / nomeação | `chamado`, `chamados`, `chamada`, `chamadas`, `denominado`, `denominados`, `denominada`, `denominadas`. |
| Complementação / campos | `com`, `contendo`. |
| Devolução de chamadas externas | `retornando`, `recebendo`, `obtendo`. |
| Referenciamento | `(referência)`. |
| Açúcar sintático de cabeçalho | `Procedimento`, `Rotina`, `Função`. MCP confirma `Rotina` como opcional e apresenta `Função`; `Procedimento` precisa de confirmação. |
| Controle e deliberação | `determine`, `se`, `quando`, `Retorne`, `reitere`, `pare`, `diga`, `itere`. MCP confirma formas como `Se`, `Itere`, `Reitere`, `Pare`, `Retorne`, `Diga sim/não` e `determine` no cabeçalho deliberativo; `quando` precisa de confirmação. |
| Proteção e chamadas externas | `isole`, `conserve`, `preserve`, `invoque`, `processe`. MCP confirma `Preserve` e `Processe`; os demais sinônimos precisam de confirmação. |
| Ponteiros e endereçamento | `aponte`, `direcione`, `redirecione`, `magnitude`, `conteúdo`, `endereçamento`, `empregue`. O catálogo local atribui esses usos; verificar no MCP antes de implementá-los como palavras-chave. |
| Atribuição e equivalência | `igual`, `a`, `para`; atribuição simples listada localmente: `é`, `está`, `são`, `estão`, `estamos`, `for`, `forem`, `estiverem`, `estarem`, `possui`; atribuição de estruturas compostas: `tem`, `têm`, `contém`, `contêm`. A semântica de cada forma precisa ser confirmada no MCP/contexto antes de classificar. |
| Literais nulos / inexistentes | `nulo`, `nula`, `nulos`, `nulas`, `inexistente`, `inexistentes`, `zerado`, `nil`. A lista local também os separa como literais de ponteiro. |
| Valores literais descritos por categoria | `número`, `texto entre aspas`, `valor hexadecimal`, `número inteiro`, `fração literal`, `numeral misto literal`, `número ordinal`. Estes nomes de categoria não são necessariamente lexemas escritos no código. |
| Negação e decisores | `não`, `sim`, `negativo`, `negativamente`. MCP confirma os literais booleanos `sim` e `não`; os outros valores são candidatos locais. |
| Outras classes auxiliares | `a` e `de` como preposições especiais/possessivo reverso; `em` e `para` como preposições de atribuição; `via` e `por` como objeto indireto; `com`, `de`, `a`, `seguida` como concatenação; `e` como continuidade; `já`, `ainda` como palavras ignoráveis. Tratar como pistas lexicais contextuais, não como keywords universais. |
| Pontuação nomeada | `ponto final`, `vírgula`, `ponto-e-vírgula`, `sinal de dois pontos`, `ponto de exclamação`, `ponto de interrogação`. São nomes de sinais, não os próprios caracteres. |
| Símbolos descritos por nome | `acento circunflexo`, `barra vertical`, `asterisco`, `sinal de adição`, `hífen`, `barra inclinada`, `símbolo menor do que`, `símbolo maior do que`, `chave esquerda`, `chave direita`, `sinal de igualdade`. São descrições textuais de símbolos. |
| Marcadores de aspas e qualificador | `'s`, `'`, `(` e `(referência)`. Os apóstrofos aparecem na lista local de possessivos ingleses; o MCP precisa confirmar suporte antes de lhes atribuir semântica no LSP. |
| Vogais acentuadas | `á`, `ã`, `â`, `à`, `é`, `è`, `ê`, `ë`, `í`, `î`, `ì`, `ï`, `ó`, `õ`, `ô`, `ö`, `ú`, `ù`, `ü`, `û`, `ý`. Esta categoria auxilia reconhecimento lexical/ortográfico e não representa palavras reservadas. |

**Números na categoria “Símbolo”:** `Documentação/Palavras-chave.md` lista `128`, `130`, `132`, `133`, `134`, `135`, `136`, `137`, `139`, `145`, `146`, `147`, `148`, `149`, `150`, `151`, `152`, `153`, `155`, `161`, `162`, `163`, `164`, `165`, `166`, `167`, `168`, `169`, `170`, `171`, `172`, `173`, `174`, `175`, `176`, `177`, `178`, `179`, `180`, `183`, `184`, `185`, `186`, `187`, `188`, `189`, `190`, `191`, `215` e `247`. Como o arquivo os classifica como números associados a símbolos/caracteres, não os incluo como palavras, completions ou keywords do LSP. Só devem receber tratamento lexical específico se uma regra MCP definir o contexto e a interpretação desses códigos.

**Vocabulário amplo de Regras:** [`Regras/Palavras-Chave.md`](./Regras/Palavras-Chave.md) acrescenta exemplos/candidatos como `isole`, `conserve`, `invoque`, `aponte`, `direcione`, `redirecione`, `empregue` e `magnitude`. Como essa fonte não tem prioridade sobre o MCP, eles permanecem candidatos a confirmar e não são automaticamente incorporados ao realce ou às sugestões.

### Formas e marcadores sintáticos

| Grupo | Formas documentadas | Papel descrito no MCP |
|---|---|---|
| Cabeçalho de rotina | `Rotina` (opcional), `para que se` | Declara rotina; o nome começa depois de `se`. |
| Cabeçalho de função deliberativa | `Função para que se determine se` | Declara função booleana; sua expressão/nome vem depois do prefixo. |
| Artigos definidos | `o`, `os`, `a`, `as` | MCP: iniciam declarações globais e podem aparecer em nomes de rotina sem indicar parâmetro. Complemento do projeto: normalmente também referenciam variáveis declaradas; em `de` + artigo definido, o artigo integra o nome do identificador de variável ou tipo. |
| Artigos indefinidos | `um`, `uns`, `uma`, `umas` | MCP: iniciam declarações locais e indicam parâmetros em cabeçalhos. Complemento do projeto: sempre precedem um tipo; o nome da variável pode ser baseado no tipo, em vez de inferir o tipo a partir do nome da variável. |
| Verbos de declaração | `é`, `são` | Conectam nome e definição de tipo ou variável. A concordância/forma depende da declaração. |
| Inicialização | `igual a` | Introduz um valor literal em declaração global; há exemplos com `igual a`. |
| Nomeação | `denominado`, `denominada`, `denominados` | Dá nome explícito a variável local ou campo; as formas aparecem em exemplos. Não há inventário MCP indicando que esta enumeração seja exaustiva. |
| Estruturas | `com` | Introduz campos de estrutura e também argumentos em chamadas externas. |
| Uniões | `sob` | Introduz sobreposição/união de campo, conforme os exemplos de estruturas. |
| Verbos ser/estar | `é`, `são`, `for`, `está`, `estiver` (formas atestadas) | A página de rotinas afirma que ser/estar e suas conjugações são tratados como sinônimos, mas não enumera todas as conjugações. |

### Controle de fluxo e instruções nomeadas

| Forma | Evidência e papel MCP |
|---|---|
| `Se` | Inicia expressão condicional. A documentação de laços e desvios mostra vírgula após a condição, `;` entre instruções do bloco e `.` na última. |
| `Itere` | Inicia o laço; pode ser omitido quando o laço começa na primeira linha do corpo da rotina. |
| `Reitere` | Retorna ao início do laço atual. |
| `Pare` | Abandona o laço atual. |
| `Retorne` | Sai da rotina atual e devolve o controle à rotina chamadora. |
| `Diga sim`, `Diga não` | Retornos verdadeiro/falso de função deliberativa; a documentação diz que a função termina com uma dessas formas. |
| `Preserve`, `original` | `Preserve` cria uma cópia do parâmetro; `original` referencia a variável original preservada. |
| `Processe`, `com`, `retornando` | Chamada de biblioteca externa, argumentos opcionais e captura do retorno, respectivamente. |
| `Decodifique` | Introduz instrução de máquina expressa como literal hexadecimal. |
| `compativelmente` | Qualificador especial documentado para cabeçalho de rotina callback, imediatamente depois de `para que se`. |
| `Aloque memória`, `Desaloque memória` | Formas mostradas para alocar e desalocar memória de listas. |

As páginas MCP consultadas não definem uma lista fechada de todas as instruções verbais da biblioteca padrão. Formas como `Atribua`, `Escreva`, `Converta`, `Acrescente`, `Insira`, `Remova`, `Pinte` e `Crie` aparecem em exemplos; devem ser catalogadas como palavras de instrução usadas nos exemplos, não declaradas palavras reservadas globais sem confirmação adicional.

`Caso contrário` aparece na página de rotinas somente em um exemplo como comentário iniciado por `\`; o texto comentado explica o retorno condicional. Não é uma instrução de controle de fluxo documentada.

### Preposições, conjunções e contrações

| Grupo | Formas explicitamente citadas |
|---|---|
| Sinônimos de preposição | `com`, `contendo`, `dado`, `desde`, `usando`; e `em`, `para`, `por`. |
| Conjunção/preposição em cabeçalho | `e` e `para` são identificados no exemplo de parâmetros; a documentação diz que preposições/conjunções do cabeçalho devem ser usadas de forma similar na chamada. |
| Preposição `de` | É descrita em página própria; antes de artigo/pronome indefinido em cabeçalho, pode separar o nome da rotina do parâmetro. |
| Contrações listadas | `à` → `para a`; `ao` → `para o`; `deste` → `de este`; `destes` → `de estes`; `desta` → `de estas` **e** `de esta` (conflito na página); `destas` → `de estas`; `na`/`nas`/`no`/`nos` → `em a`/`em as`/`em o`/`em os`; `num`/`nuns`/`numa`/`numas` → `em um`/`em uns`/`em uma`/`em umas`; `pelo`/`pelos`/`pela`/`pelas` → `por o`/`por os`/`por a`/`por as`. |

**Pendência documental:** a lista de contrações da página “Rotinas, Parâmetros e Funções” repete `desta` com duas expansões (`de estas` e `de esta`), além de listar `destas` como `de estas`. O caso foi reportado à manutenção da Documentação MCP; até confirmação, a extensão não deve escolher silenciosamente uma regra para esse item.

O MCP consultado não oferece uma lista completa de conjunções, preposições ou pronomes demonstrativos. As formas acima são apenas as explicitamente citadas nas páginas de rotinas e uso de `de`.

### Operadores, literais e delimitadores

| Grupo | Formas documentadas |
|---|---|
| Operadores aritméticos | `mais`, `menos`, `vezes`, `multiplicado por`, `dividido por`. |
| Concatenação de strings | `junto com`, `seguido de`, `acompanhado de`. |
| Valores booleanos | `sim`, `não`. |
| Valores numéricos | Inteiro com sinal; fração; misto; hexadecimal prefixado por `$`. |
| Strings | Aspas duplas; aspas duplas duplicadas (`""`) são usadas como escape. |
| Comentários | `\` inicia comentário de linha; `[ ... ]` delimita comentário no meio da linha. |
| Pontuação estrutural | MCP: `,` inicia o bloco condicional após a condição; `;` separa instruções nesse bloco; `.` termina a última instrução e declarações. Complemento do projeto: `:` termina o cabeçalho principal de rotina/função e inicia o corpo; `;` também termina cada cabeçalho alternativo. |

A documentação de operadores afirma que todos têm a mesma precedência e são avaliados da esquerda para a direita.

### Nomes, qualificadores e formas alternativas

- O nome de rotina começa após `para que se`; em função deliberativa, após `Função para que se determine se`.
- **Nomes alternativos — complemento normativo do projeto:** rotinas e funções podem ter mais de um cabeçalho/nome para invocar a mesma implementação. Cada cabeçalho alternativo termina com `;`; o último cabeçalho, que precede o corpo compartilhado, termina com `:`. A página MCP consultada não detalha essa sintaxe; a solicitação para documentá-la foi enviada à manutenção do MCP.
- **Corpo e retorno implícito — complemento normativo do projeto:** o corpo pode estar vazio; ao final de toda rotina ou função, `Retorne` é implicitamente chamado. A página MCP consultada não explicita essa regra; a solicitação para incluí-la também foi enviada à manutenção do MCP.
- **Funções deliberativas:** diferentemente de rotinas, devem conter ao menos uma instrução `Diga sim` ou `Diga não`, que fornece o resultado booleano.
- **Qualificadores:** parênteses distinguem rotinas/funções com nomes semelhantes; não criam um nome alternativo. Exemplos MCP: `(clique - botão direito)`, `(clique - botão esquerdo)`, `(clique duplo)` e `(atualização de tela)`. A diferença entre qualificador e nome alternativo é complemento normativo do projeto.
- Artigos indefinidos indicam parâmetros em cabeçalhos e sempre precedem um tipo. Artigos definidos podem integrar o identificador do cabeçalho sem indicar parâmetro.
- Na combinação de preposição `de` com artigo definido, o artigo deixa de referenciar uma variável e passa a compor o identificador de uma variável ou tipo.
- `compativelmente` é o único qualificador especial identificado nas páginas MCP consultadas; sua posição é explicitamente descrita para callbacks.
- O `;` tem papel dependente do contexto: termina cabeçalho alternativo de rotina/função; dentro de bloco condicional, separa instruções.

O parser atual do LSP ainda emite uma dica quando encontra corpo vazio de rotina. Isso diverge do complemento normativo acima e deve ser corrigido; funções deliberativas continuam obrigadas a conter `Diga sim` ou `Diga não`.

### Tipos e nomes que não são palavras reservadas

A página MCP de características da linguagem enumera como tipos primitivos `byte` e `estrutura`, e como tipos comuns `caractere`, `string`, `lista`, `ponteiro`, `número`, `fração`, `número hexadecimal` e `sinalizador`. São nomes de tipos, não uma lista de palavras reservadas. Tipos adicionais podem ser declarados pelo programa.

### Limites deste inventário

- [x] Registrar as formas explicitamente listadas nas páginas MCP consultadas e seu papel documentado.
- [x] Incorporar o vocabulário categorizado de `Documentação/Palavras-chave.md` e usar `Regras/Palavras-Chave.md` como catálogo auxiliar.
- [x] Separar candidatos não confirmados, descrições de categorias literais, nomes de símbolos e códigos numéricos de byte/caractere das palavras de código.
- [x] Distinguir instruções documentadas de exemplos da biblioteca padrão e de nomes de tipos.
- [x] Registrar que a documentação consultada não publica catálogo completo de palavras reservadas/qualificadores.
- [x] Reportar à Documentação MCP a contração `desta` com expansões conflitantes.
- [x] Incorporar a regra de cabeçalhos alternativos: `;` em cada nome alternativo e `:` no cabeçalho que introduz o corpo compartilhado.
- [x] Registrar a diferença entre nomes alternativos e qualificadores, além dos papéis dos artigos em identificadores compostos.
- [x] Registrar corpo vazio e `Retorne` implícito para rotinas/funções, e retorno booleano explícito para funções deliberativas.
- [ ] Completar o inventário depois de confirmar a lista normativa de palavras reservadas com a documentação MCP.
- [ ] Conferir cada candidato local com páginas MCP antes de habilitá-lo em realce, Hover ou completions.
- [ ] Corrigir o diagnóstico de corpo vazio: permitir rotina vazia sem dica, mantendo a validação de retorno das funções deliberativas.
- [ ] Expandir as formas verbais, conjunções, pronomes e contrações somente quando houver fonte MCP explícita.

## Próximas implementações

Ordem sugerida; cada item deve ser validado com a documentação do MCP e exemplos reais antes de ser considerado concluído.

1. [ ] **Concluir o inventário normativo:** fechar as lacunas assinaladas acima com confirmação MCP, sem transformar exemplos em regras gerais.
2. [ ] **Completar o realce de sintaxe:** refletir o inventário confirmado na gramática TextMate; testar conflitos com strings, identificadores e texto entre colchetes.
3. [ ] **Aprimorar sugestões:** incluir as formas documentadas que faltam e, progressivamente, sugerir parâmetros, variáveis locais e símbolos conforme o contexto. Distinguir sugestões de palavras da linguagem das sugestões de símbolos.
4. [ ] **Aprimorar Hover:** apresentar definições mais úteis para palavras reservadas e qualificadores e, quando possível, exemplos e links para a página correspondente da documentação.
5. [ ] **Expandir snippets:** cobrir padrões comuns de declaração, chamadas, estruturas, comentários e controle de fluxo; conferir se cada exemplo é válido segundo a documentação.
6. [ ] **Cobrir recursos com testes:** validar conteúdo de completions e hovers, escopos do realce TextMate e expansão dos snippets, inclusive com acentos, plurais, comentários e identificadores compostos.
7. [ ] **Revisar diagnósticos semânticos:** comparar cada regra já implementada com a documentação e marcar explicitamente as limitações do parser que não podem ser diagnosticadas com segurança.
8. [ ] **Avaliar alcance dos símbolos:** decidir e testar se completions e navegação devem permanecer limitadas à mesma pasta ou incluir arquivos do workspace, bibliotecas e múltiplas pastas.
9. [ ] **Conferir a experiência em arquivos reais:** testar algoritmos e fontes do compilador, registrar falsos positivos e falsos negativos e ajustar sem alterar a navegação que já funciona.
10. [ ] **Documentar a instalação e a manutenção:** manter a descrição dos recursos sincronizada com o código e documentar como validar e empacotar a extensão.

## Melhorias possíveis

- **Uma fonte única para o vocabulário:** compartilhar listas tipadas entre realce, Hover e completions, reduzindo divergências entre arquivos.
- **Sugestões contextuais:** priorizar tipos após artigos indefinidos, nomes de variáveis após artigos definidos, e completar chamadas com base nos parâmetros e nos nomes alternativos.
- **Hover orientado à documentação:** explicar claramente se o termo é palavra-chave, qualificador ou símbolo do programa, com exemplos pequenos e links estáveis.
- **Testes de gramática independentes:** verificar os escopos TextMate em linhas representativas de arquivos `.pop`, em vez de validar apenas a presença da contribuição no manifesto.
- **Testes de snippets:** verificar os prefixes e o texto expandido para impedir exemplos incompatíveis com a sintaxe real.
- **Compatibilidade com encoding explícita:** testar arquivos Windows-1252 e UTF-8, documentando como o VS Code deve abrir cada caso sem corromper acentos.
- **Mensagens e documentação consistentes em português:** os recursos visíveis ao usuário e a documentação do projeto devem seguir as convenções do repositório.
- **Limites bem definidos do parser:** evitar que a extensão declare código inválido quando a implementação apenas não reconhece uma construção documentada.

## Lista de controle de progresso

### Base já disponível

- [x] Preservar Go to Definition, Go to Type Definition e Go to Implementation.
- [x] Acrescentar uma gramática TextMate inicial.
- [x] Acrescentar snippets iniciais.
- [x] Acrescentar completions de palavras e símbolos de arquivos irmãos.
- [x] Acrescentar Hover de palavras e símbolos indexados.
- [x] Testar a primeira fatia de Hover, completions e contribuições da extensão.
- [x] Remover a sugestão de uma construção que não existe na linguagem.

### Em andamento

- [x] Inventariar as formas explicitamente documentadas no MCP e registrar lacunas normativas.
- [ ] Obter/confirmar um catálogo MCP completo de palavras-chave e palavras reservadas.
- [ ] Enumerar os qualificadores permitidos e suas diferenças semânticas.
- [x] Registrar o formato de cabeçalhos alternativos e sua distinção de qualificadores.
- [ ] Completar o realce, o Hover e as sugestões com base nesse inventário.
- [ ] Criar testes específicos de realce e expansão de snippets.

### Ainda por fazer

- [ ] Tornar completions sensíveis ao contexto sintático.
- [ ] Incluir símbolos locais e parâmetros nas sugestões.
- [ ] Vincular Hovers às páginas correspondentes da documentação.
- [ ] Revisar diagnósticos com exemplos do compilador e da documentação.
- [ ] Alinhar a dica de corpo vazio do parser com a regra de `Retorne` implícito.
- [ ] Decidir a estratégia de indexação além dos arquivos irmãos.
- [ ] Executar a suíte completa após cada conjunto de mudanças.
- [ ] Atualizar a documentação de recursos após cada entrega.

## Referências

- [`LSP/README.md`](./LSP/README.md) — recursos e desenvolvimento da extensão.
- [`Regras/Palavras-Chave.md`](./Regras/Palavras-Chave.md) — categorias e exemplos de palavras-chave.
- [`Regras/Qualificadores.md`](./Regras/Qualificadores.md) — qualificadores de rotinas e funções.
- [`Regras/Rotinas.md`](./Regras/Rotinas.md) — cabeçalhos, parâmetros, nomes alternativos e chamadas.
- [`Regras/Artigos.md`](./Regras/Artigos.md) — papéis dos artigos na linguagem.
- [`Regras/Comentários.md`](./Regras/Comentários.md) — sintaxe e comportamento de comentários.
- Documentação MCP: [índice](https://portugues-puro.gitbook.io/documentacao/llms.txt), páginas [Características da linguagem](https://portugues-puro.gitbook.io/documentacao/manual-da-linguagem), [Declaração e inicialização de variáveis](https://portugues-puro.gitbook.io/documentacao/declaracao-e-inicializacao-de-variaveis), [Rotinas, Parâmetros e Funções](https://portugues-puro.gitbook.io/documentacao/rotinas-parametros-e-funcoes), [Laços e Desvios condicionais](https://portugues-puro.gitbook.io/documentacao/lacos-e-desvios-condicionais), [Operadores](https://portugues-puro.gitbook.io/documentacao/operadores), [Comentários](https://portugues-puro.gitbook.io/documentacao/comentarios), [Estruturas e Uniões de dados](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/estruturas-e-unioes-de-dados), [Conversão de tipos](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/conversao-de-tipos), [Trabalhando com Bibliotecas externas](https://portugues-puro.gitbook.io/documentacao/trabalhando-com-bibliotecas-externas), [Trabalhando com Instruções Hexadecimais](https://portugues-puro.gitbook.io/documentacao/trabalhando-com-instrucoes-hexadecimais), [Callbacks](https://portugues-puro.gitbook.io/documentacao/callbacks), [valores numéricos](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/valores-numericos), [strings e caracteres](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/strings-e-caracteres) e [uso da preposição “de”](https://portugues-puro.gitbook.io/documentacao/usando-a-preposicao-de).
