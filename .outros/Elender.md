User: Quero criar um servidor de linguagem para minha linguagem de programação "Português Puro". Quero implementar as seguintes funcionalidades:
Document Symbols;
Hover Information;
Go to Definition;
Go to Type Definition;
Go to Implementation; e
Find References.

Mas antes de implementar os métodos precisamos primeiramente entender a sintaxe da linguagem, criar um parser, uma AST, tabela de símbolos, etc. 

Então vamos começar do zero. 
Português Puro possui apenas 2 tipos de dados primitivos. São eles:
"byte" (e seu termo equivalente "bytes")
"estrutura" (e seu equivalente "estruturas").
Todos os demais tipos são considerados como tipos derivados de byte ou estrutura.
A sintaxe básica para a declaração de tipos é:
```
artigo_indefinido nome_do_tipo_personalizado ('é'|'são') artigo_indefinido nome_do_tipo_base ponto_final
```
sendo que:
```
artigo_indefinido: 'um' | 'uma' | 'uns' | 'umas'
```

Exemplo de declaração de tipo simples:
```
Um caractere é um byte.
Uma pessoa é uma estrutura.
Uns clientes são umas pessoas.
Uma word é uma estrutura.
Uma word de ordem inferior é uma word. 
Uma word de ordem superior é uma word.
```
Na verdade estruturas costumam ter campos, mas por agora vamos fazer apenas o protótipo inicial cujo propósito é identificar corretamente uma declaração de tipo, de forma a catalogar tanto o nome do tipo base quanto o do tipo derivado. MUITO IMPORTANTE: Perceba que em ambos os nomes podem haver espaços! Portanto a estratégia padrão de dividir o texto em espaços pode não funcionar aqui. O que é crucial para que a estratégia dê certo é entender os pontos abaixo:

1) A linguagem é case insensitive.
2) A quantidade de espaços entre as palavras é irrelevante. Desse modo "carro branco" e "carro     branco" referem-se ao mesmo tipo/variável.
3) quebras de linha, tabulações e similares também contam como espaço em branco, isto é, devem ser completamente ignorados ao tentar catalogar ou reconhecer o nome de um tipo. 
4) o que determina o começo do nome de um tipo é o artigo indefinido que o antecede. E o que determina seu fim, é o operador de atribuição "é" ou "são" (para o nome do tipo derivado) e o ponto final (para o nome do tipo base). 
5) Os métodos GoToDefinition, OnHover e demais métodos devem levar em consideração a possibilidade de que o nome do tipo possa conter espaços. Então eles devem fazer um lookahead e um lookbehind para determinar corretamente o nome completo do tipo. Assim "carro branco" não será confundido com "carro azul", por exemplo. 
6) Como é uma linguagem totalmente nova, em caso de dúvidas, faça uma pergunta.

Copilot: Vou primeiro examinar o servidor e a estrutura do projeto para encaixar o parser e a catalogação de tipos no padrão já existente, sem antecipar comportamento além do protótipo descrito.



A gramática permite definir as fronteiras sem dividir nomes por espaços: cada frase termina no ponto final, o operador separa tipo derivado e base, e os artigos iniciais são removidos dos nomes. Vou criar essa análise como módulo reutilizável, preservando posições no texto e normalizando nomes para consulta case-insensitive; nesta etapa não vou ativar ainda os handlers LSP.


Criei a base do parser em [typeParser.ts](). Ele reconhece declarações terminadas em ponto final, extrai os nomes do tipo derivado e do tipo base — inclusive nomes com várias palavras — e mantém os intervalos originais no texto. A tabela de símbolos faz consultas sem diferenciar maiúsculas de minúsculas e reconhece `byte`/`bytes` e `estrutura`/`estruturas` como primitivos equivalentes.

Atualizei também o [README.md]() para registrar o escopo desta etapa. **Os handlers LSP ainda não foram implementados**, conforme a ideia de preparar primeiro o parser e a AST.

Validei a compilação com `npm run compile` e conferi os exemplos, nomes com espaços e quebras de linha, normalização de caixa e a distinção entre “carro branco” e “carro azul”.

User: Vi que você teve algumas dúvidas sobre a linguagem, então vamos lá:
Os operadores de atribuição "é" e "são" não podem fazer parte do nome do tipo, pois são "palavras finalizadoras". Isto é, uma vez que o tokenizador encontre elas, o nome do tipo termina. O mesmo vale para o ponto final.
Os termos "byte" e "estrutura" não são 100% reservados, na verdade é possível criar nomes parecidos. Por exemplo:
```
Um byte novo é um byte.
Um caractere é um byte novo.
```
Agora, vamos alterar o servidor de linguagem para trabalhar com arquivos com a extensão ".pop", que é a extensão dos arquivos de código da linguagem.
No momento, para simplificar a questão de espaços e todo o restante, assuma que o encoding dos arquivos fonte será o codepage windows-1252.  A extensão do servidor deverá adicionar essa configuração ao VS Code para que ele reconheça automaticamente o encoding dos arquivos .pop ao abrir e salvar os arquivos. 

Vamos tentar também implementar agora o método onDefinition.
Caso tenha alguma dúvida pode perguntar.

Copilot: Vou ajustar a extensão para identificar arquivos `.pop` com um language ID próprio e configurar o encoding como padrão desse idioma. Também vou integrar o parser ao `onDefinition`, considerando o cursor em qualquer trecho do nome composto; antes disso, estou verificando como o cliente já declara linguagens e qual API LSP está disponível.


O reconhecimento de `.pop` e o default `windows1252` já estão configurados. O servidor agora anuncia `definitionProvider`; o salto consulta as declarações do documento atual e dos demais documentos abertos, e o parser identifica a referência completa pelo intervalo original, mesmo com cursor sobre espaços internos. Vou validar compilação, lint e os casos essenciais antes de concluir.

O teste de integração confirmou o salto para tipos com nomes compostos e diferenciou nomes parecidos, mas detectou um problema importante: o default `files.encoding` definido por language override não está sendo aplicado no VS Code. Vou verificar a configuração suportada pela versão usada; não vou afirmar que o encoding automático funciona enquanto essa verificação falhar.

A validação isolou o problema: o VS Code da execução registra a language override, mas ignora defaults contribuídos pela extensão — inclusive um default simples de `editor.wordWrap`. O salto para definição está funcionando; para garantir encoding no VS Code, uma alternativa seria gravar uma configuração `[portugues-puro]` no workspace do usuário, mas isso altera arquivos do projeto. Vou deixar o teste de definição limpo e confirmar com você antes de escolher essa alteração persistente ou manter apenas o default contribuído pela extensão.

Perguntar ao Usuário
Completed with input: {
  "message": "A extensão já contribui o default de encoding por language ID, mas o teste no VS Code 1.143 ainda retorna `utf8`, então essa contribuição sozinha não garante a leitura/salvamento em Windows-1252. Para garantir o comportamento, preciso saber onde você aceita persistir a configuração de linguagem `[portugues-puro]` (isso altera configurações fora do código do servidor):",
  "requestedSchema": {
    "properties": {
      "encodingConfigLocation": {
        "type": "string",
        "title": "Onde persistir o encoding",
        "description": "Escolha onde gravar `files.encoding: windows1252` para a linguagem Português Puro.",
        "oneOf": [
          {
            "const": "workspace",
            "title": "Configuração do workspace (.vscode/settings.json)"
          },
          {
            "const": "user",
            "title": "Configuração do usuário do VS Code (vale para todos os workspaces)"
          },
          {
            "const": "contribution_only",
            "title": "Manter apenas o default contribuído pela extensão, sem gravar configurações"
          }
        ],
        "default": "workspace"
      }
    }
  }
}

Vou seguir com a opção escolhida: gravar o override de linguagem no `.vscode/settings.json` deste workspace e ajustar o teste para executá-lo com a raiz do projeto como workspace. Assim, a verificação passa a conferir o valor efetivo de encoding, além do comportamento de Go to Definition.


Implementei o **Go to Definition** e configurei o projeto para trabalhar com arquivos `.pop`.

- A extensão reconhece o language ID `portugues-puro`, associado à extensão `.pop`, em [package.json]() e [extension.ts]().
- Configurei `windows1252` para essa linguagem em [settings.json](). O teste verifica o encoding efetivo do documento.
- O servidor usa os intervalos do parser para resolver nomes compostos, inclusive quando o cursor está sobre parte de um nome como `carro branco`. Também procura declarações nos documentos `.pop` abertos, em [server.ts]().
- Adicionei testes para nomes parecidos (`carro branco`/`carro azul`) e para um tipo derivado cujo nome contém `byte`, em [definition.test.ts]().
- Atualizei o comando de testes para funcionar no Windows e revisei o [README.md]().

**Validação:** `npm test` passou com 2 testes, e `npm run lint` passou.

User: Muito bem. 
Agora vamos ampliar a definição de tipo.

A definição atual já suporta a sintaxe abaixo:

```
artigo_indefinido nome_do_tipo_personalizado ('é'|'são') artigo_indefinido nome_do_tipo_base ponto_final
```
Agora vamos aceitar também a sintaxe a seguir:

```
artigo_indefinido nome_do_tipo_personalizado ('é'|'são') artigo_indefinido nome_do_tipo_base 'para' artigo_indefinido nome_do_tipo ponto_final
```

Exemplo de código em Português Puro:
```
Um pchar é um ponteiro para um caractere.
```
No exemplo acima, "pchar" é o nome do tipo derivado, "ponteiro" é o tipo base e "caractere" é o tipo de dado para o ponteiro aponta.

Copilot: Vou ampliar a AST/parser para registrar também o tipo apontado após `para`, sem confundir esse trecho com o tipo base, e ajustar Go to Definition para resolver referências nessa nova posição. Primeiro vou conferir o estado atual do parser, servidor e testes para manter o comportamento existente.

A gramática agora aceita declarações como `Um pchar é um ponteiro para um caractere.` O parser registra `ponteiro` como tipo base e `caractere` como tipo apontado, preservando os intervalos de ambos os nomes. **Go to Definition** pode navegar a partir de qualquer um deles, inclusive quando o tipo apontado tem várias palavras.

Adicionei cobertura para a declaração de ponteiro e atualizei o [README.md](). Validação concluída: `npm test` passou com **3 testes**, e `npm run lint` passou.

User: Aparentemente ainda não está funcionando. Só para deixar claro, no exemplo anterior, a preposição "para" não faz parte do nome do tipo base, ela também deve ser considerada como uma "palavra finalizadora" de nomes de tipo. Veja novamente a sintaxe:
```
artigo_indefinido nome_do_tipo_personalizado ('é'|'são') artigo_indefinido nome_do_tipo_base 'para' artigo_indefinido nome_do_tipo ponto_final
```
então no código abaixo:
```
Um caractere é um byte.
Um ponteiro é uma estrutura.
Um pchar é um ponteiro para um caractere.
Um índice é um pchar.
```
Ao buscar a definição de "ponteiro", ou "caractere" na declaração de pchar, o caminho de identificação deveria ser basicamente o mesmo que já funcionava anteriormente.
A única inovação  introduzida de fato seria ao buscar a definição de "pchar" na declaração do tipo derivado "índice", mas mesmo esta não está funcionando.

Copilot: Vou reproduzir exatamente a cadeia de quatro declarações e verificar o parser e o handler de definição. Vou incluir testes separados para `ponteiro`, `caractere` dentro da declaração de `pchar` e `pchar` dentro da declaração de `índice`, para localizar e corrigir a falha real.


Consegui reproduzir a falha: as definições de `ponteiro` e `caractere` passam, mas a navegação de `pchar` em `Um índice é um pchar.` retorna zero resultados. Estou isolando agora se a perda ocorre no reconhecimento dessa referência ou na busca do símbolo.



Reproduzi a cadeia completa. O parser já trata `para` como finalizador do tipo base, e Go to Definition localiza `ponteiro` e `caractere` na declaração de `pchar`, além de navegar de `pchar` para sua declaração ao partir de `Um índice é um pchar.`

Encontrei um problema no teste: ele calculava posições a partir do texto de entrada, que usa `\n`, enquanto o documento aberto pelo VS Code pode usar `\r\n`. Assim, o cursor de teste acabava antes de `pchar`. Corrigi o cálculo para usar o texto real do documento em [definition.test.ts]().

Validei a cadeia com `npm test`: **3 testes passaram**. `npm run lint` também passou.

User: Os métodos estão funcionando, mas assim que movo as linhas de lugar no código, o método já não as encontra mais. Faça com que ao receber o evento onDidChangeDocument (ou qualquer outro evento que registre a alteração do documento, incluindo o ato de salvar, etc) a tabela de símbolos seja atualizada. O ideal é que o servidor mantenha alguma espécie de monitoramento para saber para onde as definições foram movidas, caso isso seja mais eficiente do que recatalogar o arquivo por completo. 

Copilot: Vou rastrear como o servidor recebe `didChange` e como a definição consulta os símbolos, depois vou adicionar um teste que reordena linhas em um documento já aberto e repete a navegação. A atualização precisa ocorrer ao editar o buffer; salvar não deve ser necessário para que as posições mudem.

Adicionei uma tabela de símbolos em cache por documento aberto. Ela é criada quando o documento abre, atualizada ao receber alterações e ao salvar, e removida quando o documento fecha. As consultas de definição agora usam essa tabela atualizada, em vez de reconstruir os símbolos a cada consulta. A atualização recataloga o documento inteiro — uma escolha simples e confiável para o parser atual.

Também adicionei um teste que consulta a definição de `pchar`, move sua declaração para outra linha no mesmo documento e confirma que a navegação aponta para a nova posição. O teste passou junto com os outros: `npm test` teve **4 testes aprovados**; `npm run lint` também passou.

As mudanças estão em [server.ts](), [definition.test.ts]() e [README.md]().

User: Ok, a sincronização está funcionando perfeitamente, conforme esperado. Porém o método onDefinition ainda está falhando em um único caso.
Caso o método seja invocado logo após o último caractere do nome do tipo, a busca falha. Por exemplo, no termo hipotético "abcde", a consulta funciona normalmente ao inserir o cursor:
1) antes e após o "a";
2) antes e após o "b";
3) antes e após o "c";
4) antes e após o "d";
5) somente antes do "e";
Este não é o comportamento normal do método em outras linguagens como javascript/typescript, por exemplo.


Copilot: Vou conferir a regra de intervalo usada para identificar a referência sob o cursor e reproduzir a posição exatamente no fim do nome. Se a falha for o limite exclusivo, vou ajustá-lo e adicionar um teste de regressão para a posição imediatamente após o último caractere.


Corrigi a detecção do cursor: o fim do intervalo do nome agora também é considerado uma posição válida. Assim, Go to Definition funciona quando o cursor está imediatamente após o último caractere do tipo.

Adicionei um teste para esse limite usando `pchar` na declaração `Um índice é um pchar.`. Validação: `npm test` passou com **5 testes**, e `npm run lint` passou.

User: Agora vamos introduzir uma novidade na sintaxe: tipos escalares.
Tipos escalares são tipos que são múltiplos de outro tipo (cujo tipo base seja, em última instância, "número").
A sintaxe para declaração de tipos escalares é a seguinte:

```
artigo_indefinido nome ('é'|são') numero_inteiro nome_do_tipo ponto final
```
Exemplo de tipos escalares em Português Puro:
```
Uma unidade é um número.
Uma dezena são 10 unidades.
Uma centena são 10 dezenas.
Um milissegundo é um número
Um segundo são 1000 milissegundos.
Um minuto são 60 segundos.
Uma hora são 60 minutos.
Um dia são 24 horas.

```
Perceba que os nomes dos tipos base estão no plural ("unidades", "dezenas", "segundos", etc).
Para que isso funcione, o catálogo de tipos precisa armazenar não somente o nome do tipo no singular, mas também o nome no plural. Para gerar o nome plural de cada tipo o parser deverá invocar a função pluralize para cada tipo encontrado. Idealmente, a escala do tipo, isto é, o fator de multiplicação também  deveria ser armazenado juntamente com a informação de cada tipo, de preferência como uma fração (por exemplo "10/1" ou "3/7"). Para tipos não escalares essa fração seria igual a "0/1".

Copilot: Vou verificar o parser, a tabela de símbolos e a função `pluralize` selecionada para integrar tipos escalares sem quebrar as declarações existentes. Também vou conferir como o parser distingue artigos e operadores para acomodar o fator numérico.


A função `pluralize` já está disponível e gera os plurais dos exemplos. Vou usá-la para criar aliases de consulta singular/plural e ampliar as declarações com fator inteiro. As escalas serão armazenadas como frações reduzidas; `número` será a unidade escalar inicial (`1/1`), e tipos não escalares terão escala `0/1`. Também vou aceitar a declaração final sem ponto do exemplo de `milissegundo`, tratando o fim do arquivo como terminador.



Implementei os tipos escalares no parser e na tabela de símbolos:

- Declarações com fator inteiro, como `Uma dezena são 10 unidades.`, agora são reconhecidas.
- A função `pluralize` gera o nome plural de cada tipo, e a tabela permite consultas pelo singular ou plural — inclusive no nome base usado por outro tipo.
- Tipos escalares armazenam sua escala como fração reduzida, calculada em cadeia a partir de `número` (`1/1`). Tipos não escalares ficam com `0/1`.
- O parser também aceita uma declaração sem ponto final quando ela termina no fim do arquivo.

Adicionei um teste de integração para resolver referências escritas no plural e atualizei o [README.md](). **Validação:** `npm test` passou com 6 testes, `npm run lint` passou, e conferi separadamente as escalas acumuladas dos exemplos, de `unidade` (`1/1`) a `dia` (`86400000/1`).

User: A declaração final sem ponto do exemplo de `milissegundo`, foi um erro de digitação. Absolutamente todas as declarações de tipo devem terminar com ponto final. COmo eu disse antes, quebras de linha são consideradas apenas como espaços em branco. 

Copilot: Vou remover o tratamento especial de fim de arquivo e acrescentar um teste garantindo que uma declaração sem ponto não seja catalogada, enquanto a quebra de linha continua funcionando apenas como espaço em branco.


Corrigi o parser: **toda declaração precisa terminar com ponto final**. O fim do arquivo não encerra mais uma declaração. Quebras de linha continuam sendo tratadas como espaços em branco dentro da declaração.

Adicionei um teste cobrindo os dois casos: uma declaração válida cujo nome atravessa uma quebra de linha e outra sem ponto, que não deve ser catalogada. `npm test` passou com **7 testes**, e `npm run lint` passou.

User: Agora vamos introduzir uma novidade na sintaxe: Estruturas com campos. 

A sintaxe básica para a declaração de estruturas com campos é:
```
artigo_indefinido nome do_tipo_derivado ('é'|'são') artigo_indefinido nome_do_tipo_base 'com' lista_de_campos ponto_final 
```
onde a lista de campos é implementada da seguinte forma:
```
lista_de_campos: campo (separador_de_campo campo)*
```
onde campo é:
```
artigo indefinido nome_do_tipo_base
('denominado' | 'denominada' | 'denominados' | 'denominadas')
nome_do_tipo_derivado 

```
e o separador_de_campo pode ser uma vírgula ou o caractere "e"

Exemplo concreto em Português Puro:
```
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte e
  Um byte denominado quarto byte.
```
Você me perguntou se o tipo "número" deveria ser considerado um tipo primitivo. Conforme demonstrado no código, isso não necessário. O tipo "número" é uma estrutura com 4 bytes (no caso de uma implementação de  32 bits). Portanto todos os tipos tem um plural. Seja os tipos primitivos (byte/bytes e estrutura/estruturas, ou os demais tipos derivados. 

Outro exemplo de código em Português Puro:
```
Uma word é uma estrutura com
  Um byte denominado byte inicial e
  Um byte denominado byte final .
```

Copilot: Vou integrar os campos à AST e à catalogação, aproveitando os intervalos de origem para que Go to Definition continue funcionando nos tipos dos campos. Também vou retirar `número` da lista de primitivos, como você esclareceu, e verificar como preservar o tratamento de escala sem classificar `número` como primitivo.


O parser já reconhece as duas listas do exemplo e mantém, para cada campo, o tipo e o nome com seus intervalos. Também removi `número` da lista de primitivos; agora ele só entra no catálogo se houver uma declaração, como a estrutura com quatro bytes. Vou validar os plurais e os marcadores de gênero/número junto com a navegação.



Implementei o parser de estruturas com campos. A AST e a tabela de símbolos agora armazenam, para cada campo, seu tipo e nome; Go to Definition também pode navegar a partir do tipo de um campo. O parser reconhece listas com vírgulas e `e`, além das formas `denominado`, `denominada`, `denominados` e `denominadas`.

Removi `número` dos tipos primitivos: ele precisa ser declarado como um tipo derivado, por exemplo, como estrutura com campos. A escala dos tipos escalares só é calculada quando essa declaração de `número` está presente.

Adicionei testes para os exemplos de estruturas, marcadores no singular e plural, consulta de nomes de tipos no plural e navegação a partir dos campos. `npm test` passou com **9 testes**, `npm run lint` passou e as verificações diretas do catálogo e das escalas também passaram.

Arquivos alterados: [typeParser.ts](), [definition.test.ts]() e [README.md]().

User: Agora vamos introduzir uma novidade na sintaxe: uniões de tipos. Elas funcionam de forma similar às unions em C e aos variant records em Pascal. 
Vamos usar nosso exemplo anterior do tipo número:

```
Uma word é uma estrutura com
  Um byte denominado byte inicial e
  Um byte denominado byte final.

Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte.
```
Para adicionar uma união de dados na estrutura 'número', basta fazer o seguinte:
```
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte,
  Uma word denominada word de ordem inferior sob o primeiro byte,
  Uma word denominada word de ordem superior sob o terceiro byte. 
```
Basicamente a sintaxe do campo que introduz a união de dados é a seguinte: 
```
artigo indefinido nome_do_tipo_base
('denominado' | 'denominada' | 'denominados' | 'denominadas')
nome_do_tipo_derivado 'sob' artigo_definido nome_do_tipo_alvo_da_união

```
onde a regra artigo_definido corresponde à "o", "a", "os", "as".


Copilot: Vou examinar a representação atual dos campos e o parser dos separadores para acrescentar o alvo da união sem alterar a análise de campos normais. Também vou testar os dois overlays do exemplo, com nomes de campo compostos e separadores por vírgula.



Implementei a sintaxe de união nos campos. A AST agora registra separadamente o nome do campo e seu alvo de união após `sob`, incluindo nomes compostos. O parser aceita os artigos definidos `o`, `a`, `os` e `as`, sem incluí-los no nome do alvo.

Adicionei testes de integração para os dois campos de união do exemplo e para as quatro formas do artigo. Verifiquei também que os tipos dos campos continuam resolvendo para suas definições. `npm test` passou com **10 testes**, `npm run lint` passou, e a validação direta da AST confirmou que os alvos foram preservados corretamente.

User: Agora vamos introduzir uma novidade na sintaxe: array de bytes
Por exemplo, se quiséssemos converter os campos do tipo número abaixo, para um array de bytes:
```
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte e
  Um byte denominado quarto byte.
```
Poderíamos optar por não atribuirmos um nome explícito para cada um dos campos. Exemplo:
```
Um número é uma estrutura com
  4 bytes.
```
A única desvantagem nesse caso é que como não podemos acessar cada byte individualmente, pois não os nomeamos. Este recurso só deve funcionar para arrays de bytes contíguos, ou seja, qualquer tipo diferente de "byte" ou "bytes" deve gerar um erro ou aviso na seção de diagnósticos. 
Resumidamente a sintaxe do campo de array de bytes é assim:
```
número literal ('byte'|'bytes')
```


Copilot: Vou acrescentar uma forma própria de campo para a contagem de bytes e validar que o tipo seja `byte`/`bytes`. Como a solicitação exige diagnóstico para outro tipo, também vou verificar o ciclo atual de publicação de diagnósticos e cobrir o aviso com teste.


O servidor já mantém o parser atualizado por documento, mas ainda não publica diagnósticos. Vou representar o array como um campo sem nome explícito, guardar sua contagem e tipo de elemento e publicar um erro quando o tipo não for `byte` nem `bytes`.


Implementei os campos de array anônimos, como `4 bytes.`. O parser registra a contagem e o tipo do elemento sem exigir um nome para cada byte. Aceita `byte` e `bytes`; para outros tipos, emite um diagnóstico de erro na faixa do tipo usado no array.

Adicionei teste de integração para `4 bytes` e `4 palavras`, além de verificar a AST para ambos os plurais válidos. `npm test` passou com **11 testes**, `npm run lint` passou.

As mudanças estão em [typeParser.ts](), [server.ts](), [definition.test.ts]() e [README.md]().

User: Agora vamos introduzir mais um recurso da linguagem: campos com nome inferido a partir do tipo.
Tomemos a estrutura abaixo como exemplo:
```
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```
Caso o programador não queira nomear explicitamente um ou mais campos da estrutura, ele pode omitir o nome, conforme código abaixo:
```
Uma pessoa é uma estrutura com
  Uma string e
  Um número.
```
Ao catalogar os campos da estrutura, o campo deve receber o mesmo nome do seu tipo, isto é, seria como se o programador tivesse feito o seguinte:
```
Uma pessoa é uma estrutura com
  Uma string denominada string e
  Um número denominado número.
```
Porém esse recurso apresenta um desafio. 
Cada campo dentro de uma estrutura deve ter um nome único. 
O código abaixo falha exatamente por esse motivo (uma mensagem de erro deve ser exibida na seção de diagnósticos para informar ao programador que existem campos com nomes iguais).
```
Um número é uma estrutura com
  Um byte,
  Um byte,
  Um byte,
  Um byte.
```
Por conta disso vamos precisar de mais um recurso da linguagem: "apelidos" para cada tipo. Por exemplo, em vez de escrevermos:
```
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte.
```
podemos escrever simplesmente:
```
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte,
  Um quarto byte.
```
Perceba que "primeiro byte", "segundo byte", "terceiro byte" e "quarto byte" não possuem tipos base distintos. 
Neste exemplo o compilador irá catalogar corretamente o tipo base de cada campo como sendo o tipo "byte" (o tipo base vai variar de acordo com o apelido). 
Apenas o nome do campo é que precisa ser único, para evitar campos com nomes iguais. 
Para que o tipo base seja catalogado corretamente o compilador deve fazer, de forma recursiva, a eliminação dos termos mais à esquerda de cada nome até encontrar o nome do tipo que corresponda. Caso o tipo base não seja encontrado, uma mensagem de erro deve ser exibida na seção de diagnósticos.
Exemplo, digamos que o compilador se depare com o apelido "word de ordem inferior" em um campo. 
A sequência de tentativas de identificação do tipo base é:
"word de ordem inferior" -> "de ordem inferior" -> "ordem inferior" -> "inferior"
Observação: Neste exemplo, mesmo que a palava "word" corresponda ao nome de um tipo, ela não deve ser identificada como o tipo base do campo. Este comportamento é intencional.
O objetivo é permitir que apelidos como "primeiro byte" sejam adequadamente identificados com o tipo base "byte".






Copilot: Vou atualizar a análise dos campos em duas etapas: primeiro capturar o nome explícito ou o apelido; depois, com a tabela de tipos completa, resolver o tipo base pelo sufixo mais longo correspondente. Essa ordem permite aliases como `primeiro byte` sem confundir o alias com o tipo. Também vou emitir diagnósticos para tipos sem correspondência e nomes de campo duplicados.



A implementação do parser e os testes de regressão estão no lugar. Vou executar agora a suíte E2E e o lint para conferir a integração, especialmente o diagnóstico de campos duplicados e a navegação por apelidos.

R

A primeira execução passou após ajustar o teste: tipos primitivos como `byte` não têm definição de origem para navegar até. Ao revisar os casos de borda, identifiquei também que um marcador `denominado` de um campo posterior poderia ser confundido com o do campo atual. Vou restringir a leitura ao campo correto e preservar offsets quando houver espaçamento irregular.


Implementei nomes de campo inferidos e resolução de apelidos no parser:

- Campos sem `denominado/a/os/as` usam o próprio nome como apelido e resolvem o tipo tentando sufixos, removendo palavras da esquerda. Isso permite `primeiro byte` ? `byte` sem confundir `palavra de ordem inferior` com o tipo inicial `palavra`.
- Os tipos são resolvidos depois que todas as declarações são catalogadas, permitindo referências a tipos declarados adiante.
- Diagnósticos apontam apelidos sem tipo correspondente e nomes de campo duplicados; arrays de bytes continuam com o comportamento anterior.
- Restrinjo a busca por marcadores ao campo atual e preservo os offsets em nomes com espaçamento irregular.
- Atualizei a documentação em [README.md]().


User: Parece que você introduziu um comportamente indesejado que não havia anteriormente. Por exemplo, na estrutura abaixo: 
```
Uma word de ordem inferior é uma word.
Uma word de ordem superior é uma word.

Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte,
  Uma word denominada word de ordem inferior sob o primeiro byte,
  Uma word denominada word de ordem superior sob o terceiro byte.
```
Ao selecionar qualquer parte do campo "word de ordem inferior" ele não reconhece o termo como um tipo só, mas como se fossem identificadores separados ("word", "de", "ordem", "inferior").
É importante notar que as palavras denominado (e suas variações) informam o início do nome do campo, que termina somente ao encontrar um token / palavra finalizadora (como ",","e", "para" e ".")

De forma similar, na estrutura abaixo:
```
Uma estrutura de exemplo é uma estrutura com
  Um número,
  Um segundo número.
```
No campo "segundo número" o sistema está identificando "segundo" e "número" como itens pertencendo a identificadores distintos. Portanto ao tentar encontrar a definição de "segundo" em "segundo número", o servidor não encontra a definição correspondente (que deveria direcionar para a definição do tipo base "número", não para a definição do tipo "segundo")

Copilot: Vou rastrear como o parser delimita referências dentro de campos nomeados e inferidos e como o servidor escolhe o tipo sob o cursor. Depois ajustarei a resolução sem alterar o reconhecimento dos apelidos.


Corrigi a navegação para tratar o nome completo do campo como uma única referência. Agora, ao posicionar o cursor em qualquer palavra de `word de ordem inferior`, o servidor resolve a expressão como um todo e encontra a definição correspondente. Para campos com nome inferido, como `segundo número`, qualquer parte do nome leva à definição do tipo base `número`, não a uma busca isolada por `segundo`.

A lógica foi ajustada em [typeParser.ts](), e os dois cenários ganharam cobertura em [definition.test.ts]().

Validação: `npm test` passou com 13 testes e `npm run lint` passou.

User: Agora vamos adicionar mais uma funcionalidade nos campos de estrutura; o marcador '(referência)'. Ele serve para indicar ao compilador que o campo se refere apenas a uma referência (um ponteiro) para o tipo especificado. Exemplo de código em Português Puro que utiliza campos com referências:

```pop
Um pdf state é uma estrutura com
  Um endereço pdf,
  Um sinalizador denominado sinalizador de documentos,
  Um sinalizador denominado sinalizador de páginas,
  Um número denominado número do objeto,
  Uns objetos pdfs denominados objetos,
  Um offset denominado deslocamento da tabela XREF,
  Um marcador do pdf denominado marcador  (referência),
  Uns marcadores pdfs denominados marcadores,
  Um objeto da raiz (referência),
  Um objeto pai (referência),
  Um conteúdos atuais (referência),
  Um objeto pdf denominado página atual (referência),
  Uma altura atual,
  Uma cor da borda atual,
  Uma cor de preenchimento atual,
  Um catálogo denominado catálogo de fontes.
```
É importante notar que assim como as demais palavras finalizadoras de final do campo, o marcador '(referência)' também se comporta como um delimitador do fim do nome do campo, e por isso, não faz parte do nome do campo. Portanto quando o cursor estiver posicionado sobre o marcador '(referência)', nenhuma ação de código deve estar disponível (assim como já acontece com a vírgula, o ponto final ou o "e".

Copilot: Vou verificar a representação e o parsing atuais dos campos, além dos testes de navegação, para introduzir o marcador sem que ele contamine o nome nem gere referência acionável sob o cursor.


Adicionei o marcador `(referência)` aos campos de estrutura. O parser o registra como indicação de referência, exclui-o do nome do campo e não o trata como referência navegável. Isso funciona tanto em campos com `denominado` quanto em campos com nome inferido.

Também atualizei a documentação em [README.md]() e incluí testes para verificar a navegação no tipo do campo e a ausência de ação de definição sobre o próprio marcador, em [definition.test.ts]().

Validação: `npm test` passou com 14 testes; `npm run lint` passou.

User: Ok. Agora vamos resolver mais um problema. 
Digamos que tenhamos as duas declarações de tipo a seguir:
```
Um dígito binário é um byte.
Uma caractere é um digito binario.
```
Ao tentar encontrar a definição de "digito binário", o servidor corretamente informa que a definição não foi encontrada. Este comportamento está correto e é esperado, já que a linguagem faz diferenciação entre palavras acentuadas. Quero que você inclua uma mensagem de erro na seção de diagnósticos para alertar ao programador que o nome do tipo base especificado está incorreto ou é inexistente.



A tabela de símbolos já está completa antes da validação dos campos, então vou aplicar a mesma verificação às referências base das declarações. O diagnóstico ficará na faixa exata do tipo escrito, preservando a sensibilidade a acentos e permitindo referências antecipadas a tipos declarados depois.



Adicionei diagnóstico para tipos base inexistentes. A validação consulta o catálogo completo, aceita referências a tipos declarados adiante e mantém a distinção entre nomes acentuados e sem acentos. No exemplo, `digito binario` agora gera um erro na faixa exata do nome.

Atualizei também a documentação em [README.md]() e adicionei um teste cobrindo o diagnóstico e a falha esperada de navegação em [definition.test.ts]().

Validação: `npm test` passou com 15 testes; `npm run lint` passou.

User: Agora vamos dar suporte à declarações de variáveis globais
Variáveis globais devem ser declaradas com os artigos definidos listados a seguir:
"O", "Os", "A", "As". Lembre-se de que a linguagem é case insensitive. 
A sintaxe para declaração de variáveis é a seguinte: 
artigo_definido nome_da_variável_global ('é'|'são') artigo_indefinido tipo_da_variável_global ponto_final
Exemplos:
```
A cor do ambiente de trabalho é uma cor.
A aba atual é uma aba.
O número identificador é um número.
```
Conforme exemplificado a sintaxe é muito similar à declaração de tipos simples.
Porém as variáveis globais devem ser registradas em um catálogo próprio, já que elas podem ter o mesmo nome dos tipos e não queremos confundir as duas coisas.
Por exemplo, no código abaixo:
```
O número é um número.
```
Estamos criando uma variável global denominada "número" cujo tipo também se chama "número". 
Esse tipo de ocorrência pode ser apenas uma coincidência, falta de criatividade do programador ou até mesmo ele pode fazer isso por qualquer necessidade que julgar conveniente. O importante é que não haja conflito na resolução de símbolos. Embora isso pareça não ser problemático, pois ao analisar uma declaração o servidor da linguagem sempre poderá saber se se trata de uma declaração variável global ou declaração de tipo, por conta do artigo que antecede o nome do identificador. Se for um artigo indefinido, sem sombra de dúvidas trata-se da declaração de um tipo, se for artigo definido então trata-se de uma declaração de variável global.

Copilot: Vou entender o parser e os testes atuais para integrar declarações globais ao catálogo sem misturá-las aos símbolos de tipos, preservando a distinção por artigo e a validação de tipos.



As declarações com artigos definidos agora são analisadas como variáveis globais e armazenadas separadamente dos tipos. Também conectei as referências ao tipo da variável à navegação já existente e acrescentei validação de tipos inexistentes; vou conferir agora com os testes e o lint.



Implementei o suporte inicial a declarações de variáveis globais:

- Artigos definidos — `o`, `os`, `a`, `as`, sem distinção de maiúsculas — identificam variáveis; artigos indefinidos continuam identificando tipos.
- Variáveis são armazenadas em um catálogo próprio, separado do catálogo de tipos. Assim, uma variável e um tipo podem ter o mesmo nome, como em `O número é um número.`
- O tipo declarado para cada variável é validado, e referências a esse tipo permitem usar a navegação existente.

A implementação está em [typeParser.ts](), com testes em [definition.test.ts]() e documentação atualizada em [README.md]().

Validação: `npm test` passou com 17 testes; `npm run lint` passou.

User: Agora vamos reconhecer a declaração de variáveis globais seguida de sua inicialização.
Mas antes vamos entender quais são os valores literais permitidos na linguagem. São eles:
Números: correspondem a números inteiros de 32 bits com sinal, cujo intervalo vai de -2147483648 a 2147483647.
Exemplos: 
```
123
-67
```
Strings: correspondem a uma sequência de caracteres imprimíveis delimitados por aspas duplas. 
Os seguintes caracteres não são permitidos em strings literais (e devem gerar um erro na seção de diagnósticos). 
São eles:
Tabulação horizontal;
Carriage return; e 
Linefeed.
Exemplo de string literal válida:
```
"Olá, meu nome é João e tenho 25 anos."
```
O caractere de escape das aspas duplas são as próprias aspas duplas.
Exemplos de string com aspas duplas escapadas:
```
"Ele disse:""Olá, meu nome é João e tenho 25 anos.""
"Erro. A palavra chave ""Function"" não foi localizada."
```
Frações: São iniciados por um número inteiro (com ou sem sinal) seguido imediatamente por uma barra vertical seguido por outro número inteiro (com ou sem sinal).
Exemplos de frações válidas:
```
11/7
-5/12
7/-1
-8/-2
+9/4
+9/+4
+9/-5
```
Números mistos:
São iniciados por m número inteiro (com ou sem sinal) seguido imediatamente pelo sinal de adição '+' seguido imediatamente por uma fração. Exemplo de números mistos aceitos:
```
2+3/5
2+7/+1
2+7/-1
2+-7/1 
2+-7/-1
-2+3/5
-2+7/+1
-2+7/-1
-2+-7/1 
-2+-7/-1  
```
Exemplo de números mistos com sintaxe incorreta e portanto não são aceitos (para evitar confusão):
```
2-7/1
2-7/-1
```
Valores hexadecimais: São iniciados pelos caractere '$' seguidos pelo valor usando dígos hexadecimais (a-f0-9).
Exemplos válidos:
```
$DEADBEEF
$DED0FEDE
$bebacafe
$BeBaC0cA
```
Há também dois literais booleanos: "sim" e "não" (usados principalmente em retornos de funções booleanas). Veremos eles apenas mais tarde. De forma simplificada o literal 'sim' tem o valor numérico 1 e o literal 'não' tem o valor numérico 0. 

Muito bem. 

A sintaxe para declaração de variáveis globais seguido de sua inicialização é a seguinte:
artigo_definido nome_da_variável_global ('é'|'são') artigo_indefinido tipo_da_variável_global 'igual a' valor literal ponto_final
Exemplo de declarações de variáveis globais seguidos de inicialização:
```
A raiz de dois é uma fração igual a 99/70.
O número pi é uma fração igual a 355/113.
O servidor SMTP é uma string igual a "localhost".
As aspas duplas são um byte igual a 34.
O texto CRLF é um texto hexadecimal igual a $0D0A.
O sinalizador de problemas é um sinalizador igual a 0. [sinalizador corresponde a um tipo booleano]
```




Incluí o reconhecimento do literal após `igual a`, com validação sintática e faixa de inteiros, além de períodos dentro de strings e aspas escapadas. Os novos testes cobrem formatos válidos e inválidos; vou executar a suíte e o lint para validar.



Implementei a inicialização de variáveis globais com `igual a`. O parser reconhece inteiros com sinal de 32 bits, frações, números mistos, valores hexadecimais e strings com aspas duplicadas como escape. Literais inválidos — como inteiros fora do intervalo, formato incorreto ou caracteres de controle em strings — geram diagnósticos.

O parser também agora ignora pontos dentro de strings ao identificar o fim de uma declaração. Os booleanos `sim` e `não` não foram incluídos, conforme indicado para uma etapa posterior.

A lógica está em [typeParser.ts](); os testes de inicializadores válidos e inválidos estão em [definition.test.ts](). Atualizei também o [README.md]().


User: O servidor deve ser capaz de inferir automaticamente o tipo de uma variável global durante sua declaração. 
Por isso, as declarações a seguir:
```
O maior número é um número igual a 2147483647.
O número pi é uma fração igual a 355/113.
O servidor SMTP é uma string igual a "localhost".
As aspas duplas são um byte igual a 34.
O texto CRLF é um texto hexadecimal igual a $0D0A.
O sinalizador de problemas é um sinalizador igual a 0. 
```
podem ser abreviadas para
```
O maior número é 2147483647.
O número pi é 355/113.
O servidor SMTP é "localhost".
As aspas duplas são 34.
O texto CRLF é $0D0A.
O sinalizador de problemas é 0.
````
A sintaxe basicamente é:
```
artigo_definido nome_da_variável_global ('é'|'são') valor_literal ponto_final
```
Perceba que essa declaração abreviada introduziu uma possível ambiguidade na inferição de tipos. 
Como o servidor não possui mais o nome do tipo para determinar seu tipo, ele deve inferir o tipo a partir do valor literal.
Porém no caso da variável global "aspas duplas" (cujo valor de inicialização é 34, mesmo formato de um número literal) e também no caso da variável global "sinalizador de problemas" (cujo valor de inicialização é 0, mesmo formato de um número literal), isso pode causar confusão (afinal de contas os tipos originais eram "byte" e "sinalizador"). Não é preciso criar nenhuma função mirabolante para resolver esse problema.
Basicamente, se o programador não especificou o tipo da variável global e a inicializou com um valor literal que corresponde exatamente à definição de número inteiro, então o tipo inferido também deverá ser "número" (assim como já ocorre com a declaração da variável global "maior número"), assim evitamos possíveis confusões futuras. 

Copilot: Vou ajustar o parser para aceitar inicializadores sem tipo explícito e representar o tipo inferido no catálogo de variáveis. Vou conferir o modelo atual das declarações e testes para reaproveitar a validação de literais e garantir a regra especial de inteiros inferidos como `número`.



O parser agora aceita declarações abreviadas de variáveis globais e registra o tipo inferido no catálogo separado das variáveis. Inteiros, incluindo `0` e valores negativos, inferem `número`; frações e números mistos inferem `fração`; strings inferem `string`; e valores hexadecimais inferem `texto hexadecimal`. Literais inválidos continuam gerando diagnósticos.

Atualizei a documentação em [README.md]() e incluí testes para os formatos em [definition.test.ts](). Validação: `npm test` passou com 20 testes e `npm run lint` passou.

User: Muito bem. Assim como nos tipos, as variáveis globais podem ser do tipo "estrutura".
Portanto seus campos obedecem exatamente as mesmas regras da declaração de tipos.
Exemplo de variável global do tipo "estrutura" em Português Puro:
```
O compilador é uma estrutura com
  Um endereço denominado endereço da pasta,
  Um temporizador,
  Um sinalizador de erros,
  Uma mensagem de erro,
  Um endereço do arquivo atual,
  Um número da linha de erro,
  Uma contagem de nomes,
  Um buffer EXE,
  Uma listagem (referência).
```
Perceba que na prática a única coisa que mudou em relação à uma declaração de tipo comum é que a declaração começa com um artigo definido. Todas as demais regras da declaração de estruturas (inferência de nomes, apelidos, denominações, referências, etc) permanecem basicamente as mesmas, então se for preciso pode reaproveitá-las ou criar uma cópia das regras se for preciso.

Copilot: Vou integrar a sintaxe `artigo definido ... é uma estrutura com ...` ao parser de variáveis globais, reaproveitando o mesmo parsing e validação de campos usado por tipos. Também vou incluir os campos globais na resolução de referências para navegação e nos diagnósticos já existentes.


Ajustei os testes para declarar o tipo composto `sinalizador de erros` usado no exemplo — a resolução de apelidos procura o nome completo e, em seguida, sufixos. Também corrigi a forma do tipo TypeScript exigida pelo lint. Vou rodar novamente a compilação, os testes E2E e o lint.


Variáveis globais declaradas como estruturas agora aceitam campos com as mesmas regras usadas nas declarações de tipos: nomes explícitos ou inferidos, apelidos e o marcador `(referência)`. Os campos também passam pelas mesmas validações e podem ser usados na navegação para a definição do tipo.

A implementação está em [typeParser.ts](), com cobertura em [definition.test.ts]() e documentação atualizada em [README.md]().

Validação: `npm test` passou com 21 testes; `npm run lint` passou.

User: Agora vamos implementar comentários na linguagem. Eles serão ignorados pelo parser.
Comentários de linha são iniciados por uma barra invertida. Exemplo:
```
A quantidade de alunos é um número. \ Isto é um comentário de linha
```
Comentário de bloco são iniciados por um colchete esquerdo '[' e finalizados com um colchete direito ']'
Os colchetes são utilizados para inserir comentários em qualquer lugar no meio das linhas. 

Exemplo:
```
Uma word é uma estrutura com
  Um byte denominado byte inicial [high byte] e
  Um byte denominado byte final [low byte].
```


Copilot: Vou mascarar comentários antes da análise, substituindo seus caracteres por espaços e preservando quebras de linha e offsets. Assim, comentários não interferem em pontos finais, operadores ou referências, e as posições de diagnóstico e navegação continuam alinhadas ao documento original.


Implementei comentários de linha com `\` e comentários de bloco entre `[` e `]`. O parser os ignora antes de analisar as declarações e preserva quebras de linha e offsets, mantendo corretas as posições de diagnóstico e navegação. Marcadores de comentário dentro de strings não são tratados como comentários.

Adicionei cobertura em [definition.test.ts]() e atualizei o [README.md]().

Validação: `npm test` passou com 22 testes; `npm run lint` passou.

User: Esqueci de avisar, mas assim como em strings literais, caracteres não imprimíveis como CR, LF e TAB não são permitidos em comentários, sejam eles de linha única ou comentários de bloco.  (na verdade, o CRLF termina o comentário de linha, obviamente)

Copilot: Vou atualizar a remoção de comentários para diagnosticar caracteres não imprimíveis em comentários de bloco, permitindo apenas os terminadores de linha necessários nos comentários de linha. Também vou adicionar testes para TAB/CR/LF em bloco e confirmar que CRLF encerra comentário de linha sem gerar erro.



Atualizei a validação dos comentários: caracteres de controle, incluindo TAB, CR e LF, agora geram diagnósticos em comentários de bloco. Em comentários de linha, CR e LF continuam sendo terminadores e não geram erro; outros caracteres de controle são diagnosticados.

A alteração está em [typeParser.ts](), com teste de regressão em [definition.test.ts]() e documentação atualizada em [README.md]().


User: Agora vamos introduzir o conceito de rotinas e funções. Abaixo temos o exemplo mais simples possível de uma função em TypeScript:
```
function Foo() {
 /*
corpo da função aqui
*/
}
````
Para deixarmos as coisas mais simples, perceba que a função acima não recebe parâmetros e nem tem um tipo de retorno definido. 
Em TypeScript, o nome da função vem imediatamente após a keyword 'function'.
O nome da função acaba assim que se iniciam os parênteses (nos quais são listados os nomes e tipos dos parâmetros da função).
O corpo da rotina inicia e acaba com as chaves '{' e '}', respectivamente.
Já em Português Puro a mesma função ficaria assim:
```
para que se Foo:
[corpo da função aqui]
```
ou

```
Rotina para que se Foo:
[corpo da função aqui]
```
ou
```
Função para que se Foo:
[corpo da função aqui]
```
os termos 'Rotina' e 'Função' são apenas totalmente opcionais, quase como um açúcar sintático. Esses termos devem ser ignorados durante o parsing do cabeçalho da rotina/função. Pense neles mais como uma espécie de annotation que ajuda na legibilidade do código.
ou seja, a sintaxe do cabeçalho de rotinas e funções é basicamente:
```
('Rotina'|'Função')? 'para que se' nome_da_rotina dois pontos
```
Perceba que a "keyword" que de fato indica o início de uma rotina/função é a sequência de palavras 'para que se'. 
Obs: No caso de função booleanas a sequência completa é 'para que se determine se'. 
Veremos mais sobre funções booleanas posteriormente.
Uma rotina também pode ter cabeçalhos alternativos. 
Exemplo:
```
para que se Baz;
para que se Bar;
para que se Foo:
[corpo da função aqui]
```
Os cabeçalhos alternativos devem ficar logo acima do cabeçalho principal e devem terminar em ';' em vez dos ':' do cabeçalho principal. Isto serve para definir qual o cabeçalho principal da rotina, que deve ser único (o ideal seria emitir um erro na seção de diagnósticos caso o programador coloque mais de um cabeçalho terminando em dois pontos na mesma rotina, pois se ele fizer isso ocasionará um erro de compilação).
Agora vamos introduzir parâmetros e tipo de retorno. 
A função Typescript  abaixo tem dois parâmetros e retorna um número:
```
function Calcule_o_IMC_do_Usuario(peso: number, altura: number): number {
 /*
corpo da função aqui
*/
}
```
Em Português Puro essa função ficaria assim:
```
Função para que se calcule o IMC do usuário usando um número denominado peso e um número denominado altura retornando um número denominado IMC:
```
Perceba que o nome da rotina/função também pode ter espaços, assim como já ocorre nos nomes dos tipos e variáveis globais.
Assim como na declaração de tipos, os parâmetros em um cabeçalho de rotina são iniciados por um artigo indefinido ('um', 'uma', 'uns', 'umas').
Assim como na declaração de campos de estruturas, os parâmetros podem ter "apelidos", isto é a seção 'denominado nome_do_parâmetro' é opcional.
Neste caso de parâmetros sem tipo explicitamente nomeado, os parâmetros funcionarão exatamente da mesma forma que nos campos de estruturas. 
O nome do parâmetro receberá o nome do tipo do parâmetro informado. 
Perceba que o nome do tipo do parâmetro  também poderá passar pelo processo de "redução dos nomes" para que seu tipo seja devidamente identificado. (Caso o tipo do parâmetro não possa ser corretamente determinado, uma mensagem de erro deve ser exibida na seção de diagnósticos)
Diferentemente dos artigos indefinidos, os artigos definidos não tem nenhuma função em cabeçalhos de rotina e devem ser tratados como parte do nome da rotina/função.
Conforme mencionado, o tipo de cada parâmetro é iniciado com um artigo indefinido. O fim do nome do tipo do parâmetro (e também do nome parâmetro) se dá com as palavras finalizadoras. A lista de palavras finalizadoras é a seguinte: 
```
conjuncoes: 'e' | 'ou' | 'nem';
preposicoes:
  | "abaixo"
  | "acerca"
  | "acima"
  | "acordo"
  | "algum"
  | "ante"
  | "antes"
  | "aproximadamente"
  | "após"
  | "através"
  | "até"
  | "cerca"
  | "com"
  | "começando"
  | "como"
  | "comprida"
  | "comprido"
  | "dada"
  | "dado"
  | "dando"
  | "debaixo"
  | "dentre"
  | "dentro"
  | "depois"
  | "desde"
  | "durante"
  | "em"
  | "enquanto"
  | "entre"
  | "então"
  | "menores"
  | "para"
  | "parde" 
  | "parecida"
  | "parecido"
  | "partindo"
  | "partir"
  | "perante"
  | "perto"
  | "por"
  | "próximo"
  | "qual"
  | "quanto"
  | "quão"
  | "regressivamente"
  | "relativa"
  | "resultando"
  | "sem"
  | "semelhante"
  | "similar"
  | "sob"
  | "sobre"
  | "somente"
  | "só"
  | "tal"
  | "tanto"
  | "tão"
  | "usando"
  | "versus"
  | "via"
  | "voltada"
  | "voltado"
  | 'abaixo'
  | 'antes'
  | 'aproximadamente'
  | 'após'
  | 'até'
  | 'cerca'
  | 'cima'
  | 'com'
  | 'como'
  | 'contendo'
  | 'depois'
  | 'desde'
  | 'embaixo'
  | 'entre'
  | 'pela'
  | 'pelo'
  | 'por'
  | 'próximo'
  | 'sob'
  | 'sobre'
  | 'usando';
denominacoes:
      'denominado'
    | 'denominada'
    | 'denominados'
    | 'denominadas'
    | 'chamado'
    | 'chamada'
    | 'chamados'
    | 'chamadas';
verbos:
	  'é'
	| 'está'
	| 'estiver'
	| 'for'
	| 'forem'
	| 'são'
	| 'estão'
	| 'estiverem'
	| 'ser'
	| 'serem'
	| 'estar'
	| 'poder'
	| 'puder'
	| 'foi'
	| 'estamos'
	| 'há'
	| 'pode'
	| 'existe'
	| 'existir'
	| 'contém'
	| 'contiver'
	| 'possui'
	| 'possuir'
	| 'retornando';
atribuidores_de_posse: 
      'dum'
	| 'duma'
	| 'duns'
	| 'dumas';

```
Essas palavras servem para dar mais legibilidade e flexibilidade à formação dos cabeçalhos de rotina, portanto são palavras reservadas, no sentido de que não podem ser usadas nos nomes dos identificadores (tipos e variáveis globais).





A análise de cabeçalhos já reconhece rotina/função, nomes alternativos e parâmetros/retorno; a primeira execução também revelou alguns testes antigos usando palavras que agora são reservadas como delimitadores. Ajustei esses identificadores de teste para evitar conflitos e vou validar o conjunto completo novamente.





Implementei o reconhecimento dos cabeçalhos de rotinas e funções: `para que se`, opcionalmente precedido por `Rotina` ou `Função`, nomes alternativos terminados em `;`, parâmetros após `usando` e retorno após `retornando`. A forma booleana `para que se determine se` também é reconhecida. Tipos de parâmetros e retorno são resolvidos no catálogo de tipos; tipos desconhecidos geram diagnósticos.

Os cabeçalhos e apelidos são catalogados em [typeParser.ts](). Também adicionei diagnósticos para palavras reservadas em nomes de tipos e variáveis globais. A cobertura está em [definition.test.ts](), e a documentação foi atualizada em [README.md]().

Validação: `npm test` passou com 26 testes; o lint dos arquivos alterados passou. O lint geral ainda aponta identificadores não utilizados em [example.ts](), que não foi alterado nesta tarefa.

User: Acho que você confundiu algumas coisas. 
O corpo de uma rotina/função em Português Puro não começa e termina com colchetes. 
O texto entre colchetes era apenas um comentário de bloco exemplificativo.
Em Português Puro, assim como em Pyhton, o corpo da rotina/função começa imediatamente após o ':' presente no final do cabeçalho da rotina.
Assim como em Python, não existe um token ou símbolo específico para indicar o fim de uma rotina.
Em Português Puro, o que indica que uma função/rotina chegou ao fim é um dos 3 elementos a seguir:
1) Uma declaração de tipo (iniciada por um artigo indefinido e terminada com '.').
2) Uma declaração de variável global (iniciada por um artigo definido e terminada com '.').
3) Um novo cabeçalho principal de rotina (iniciado com 'para que se' e terminado com ':').
Faça os ajustes necessários. 



Copilot: Vou revisar como os cabeçalhos são descobertos e associados hoje. Vou ajustar o reconhecimento para considerar o corpo como texto livre após `:` e encerrar a rotina somente nos três tipos de declaração que você definiu, sem exigir delimitadores de bloco.



Ajustei o escopo: o parser não trata mais linhas indentadas do corpo como cabeçalhos ou declarações de nível superior; o corpo passa a terminar na próxima declaração de tipo/variável ou no próximo grupo de cabeçalho de rotina. Também removi do teste a ideia de que colchetes delimitariam o corpo. Vou validar a compilação, a suíte e o lint.




Corrigi o modelo das rotinas: o corpo começa imediatamente depois de `:` e não precisa de colchetes ou outro delimitador. Registrei o intervalo do corpo até a próxima declaração de tipo, variável global ou cabeçalho principal de rotina. Cabeçalhos indentados dentro do corpo não são tratados como novas rotinas ou declarações globais.

Atualizei os testes para usar corpos sem delimitadores e verificar declarações posteriores em [definition.test.ts](), e corrigi a documentação em [README.md]().

Validação: `npm test` passou com 27 testes e o lint dos arquivos alterados passou. O `npm run lint` geral ainda aponta erros preexistentes de identificadores não utilizados em [example.ts]().

User: Outra coisa que acho que você está em dúvida:
Em Português Puro o caractere '.' tem uma função semântica muito similar ao ';' nas principais linguagens de programação.
Pontos são utilizados para:
1) Indicar o fim das declarações de tipos.
2) Indicar o fim das declarações de variáveis globais.
3) Indicar o fim de um Statement.
4) Indicar o fim de um bloco condicional (que é aberto com uma vírgula). Mais sobre isso mais tarde.
5) O caractere ';' somente é usado dentro de blocos condicionais para separar Statements.
6) O caractere ':' somente é usado para indicar o final dos cabeçalhos da rotina/função e o começo do corpo da rotina/função.
O uso destes caracteres é restrito a estes casos. Então tipos, variáveis globais e cabeçalhos de rotinas não podem conter esses caracteres no nome do identificador ou fora do uso acima estabelecido.



Copilot: Perguntar ao Usuário
Completed with input: {
  "message": "Há uma contradição com a sintaxe de cabeçalhos alternativos descrita anteriormente: eles terminam com `;` (por exemplo, `para que se Baz;`), mas agora você esclarece que `;` só pode separar Statements dentro de blocos condicionais. Qual regra deve prevalecer para cabeçalhos alternativos?",
  "requestedSchema": {
    "properties": {
      "semicolonRule": {
        "type": "string",
        "title": "Uso de `;` nos cabeçalhos alternativos",
        "description": "Escolha se a regra atual substitui a anterior ou se cabeçalhos alternativos continuam sendo uma exceção.",
        "oneOf": [
          {
            "const": "somente_condicionais",
            "title": "` ; ` só em condicionais; remover/alterar a sintaxe antiga de cabeçalhos alternativos"
          },
          {
            "const": "cabecalhos_alternativos_sao_excecao",
            "title": "Manter ` ; ` em cabeçalhos alternativos como exceção"
          }
        ],
        "default": "somente_condicionais"
      }
    }
  }
}

Obrigado pela confirmação: vou manter `;` como exceção nos cabeçalhos alternativos terminados em ponto e vírgula. Vou documentar a semântica dos três sinais e garantir que `:` e `;` sejam sinalizados quando aparecerem dentro de nomes de tipos ou variáveis, sem confundir o `:` que inicia um corpo ou o `;` alternativo.








Entendido. Mantive `;` como exceção para cabeçalhos alternativos, conforme sua confirmação. Os nomes de tipos e variáveis globais agora recebem diagnóstico quando contêm `:` ou `;`; o `:` válido ao fim de um cabeçalho continua iniciando o corpo da rotina. O ponto segue funcionando como terminador de declarações e Statements.

Atualizei a documentação em [README.md]() e adicionei um teste para os diagnósticos e para a aceitação do cabeçalho alternativo em [definition.test.ts]().

Validação: `npm test` passou com 28 testes; o lint dos arquivos alterados passou.

User: Ok, Já temos cabeçalhos de rotinas funcionando. Agora vamos para o corpo.
Uma rotina contém um ou mais statements, sendo que cada statement termina com '.'.

Vamos dar um exemplo de chamada de uma sub rotina:
```
Rotina para que se Foo:
  Bar.

Rotina para que se Bar:
  Baz.

Rotina para que se Baz:
  [comentário de bloco]
```
Perceba que a última rotina ainda não possui um corpo. Neste caso o código não gera nenhum problema de compilação, mas seria bom emitir alguma dica, assim como um linter faz.
Agora vamos demonstrar invocações de rotinas com parâmetros:
```
Rotina para que se Foo:
  Bar 123.

Rotina para que se Bar um número:
  Baz o número.

Rotina para que se Baz um número:
  Escreva este número.
```
No código acima a rotina 'Foo' invoca a rotina 'Baz' passando o valor numérico literal '123' como argumento. Como a rotina espera receber um número como argumento, tudo corre perfeitamente. 
A rotina 'Bar', por sua vez chama a rotina 'Baz'. Perceba que para fazer referência ao parâmetro 'número', devemos utilizar um artigo definido ('o','a','os' e 'as). Também podemos usar 'este','esta','estes' e 'estas' no lugar dos artigos definidos.
Porém surge um problema. Veja o código abaixo: 
```
Rotina para que se Foo:
  Bar 123.

Rotina para que se Bar um número:
  Baz o número.

Rotina para que se Baz um número:
  Escreva este número para StdOut.

Rotina para que se Baz o número:
  Escreva 456 para StdOut.
```
Existem 2 rotinas com assinaturas parecidas: 
'Rotina para que se Baz o número:'
e
'Rotina para que se Baz um número:'
A diferença é que na primeira rotina os termos 'o número' não são parâmetros, apenas são palavras comuns que coincidiram de fazer com que os cabeçalhos se pareçam. Conforme já mencionado anteriormente, a única palavra-chave que de fato introduz um parâmetro em um cabeçalho de rotina é um artigo indefinido ('um','uma,'uns' e 'umas'). 
Mas isso introduz uma possível ambiguidade. Na invocação do corpo da rotina 'Baz', temos o statement:
'Baz o número.'
E agora? Qual das duas rotinas deveria ser invocada? 
A resposta é:
'Rotina para que se Baz o número:'
(a rotina sem o parâmetro).
Ou seja, ao tentarfazer a resolução de invocaçãoes de chamada de funções o servidor deve sempre inicialmente os artigos definidos apenas como palavras comuns. Caso a rotina não seja ecnontrada, ele vai procurando as variações no catálogo de rotinas e funções, (lembrando de "transformar" os artigos definidos presentes no Statement em artigos indefinidos para corresponder à assinatura da função e assim conseguir encontrá-la no catálogo). 




Vou implementar a resolução nos corpos como chamadas candidatas, priorizando primeiro a correspondência exata de uma rotina sem parâmetros. Só depois tentarei casar chamadas com parâmetros, normalizando artigos definidos para a assinatura da rotina; também vou emitir uma dica quando um corpo não contiver Statements.



Vou concluir a integração da navegação e dos diagnósticos de rotinas, depois validar a resolução de chamadas com testes focados.





A compilação e os novos testes passaram. Um teste anterior de pontuação agora também recebe corretamente a dica de corpo vazio; vou ajustar sua asserção para contar apenas erros e repetir a suíte.







Implementei a resolução de chamadas de rotina e a navegação para suas definições em [server.ts]() e [typeParser.ts](). A busca prioriza uma assinatura sem parâmetros cujo nome corresponda exatamente à chamada; se não encontrar, tenta associar os argumentos aos parâmetros, incluindo referências como “o número” e “este número”. Também corrigi a publicação de diagnósticos para exibir como dica rotinas sem statements.

Adicionei testes para essas regras e documentei o comportamento em [README.md](). **Validação:** `npm test` passou com 30 testes, e o lint dos arquivos alterados passou.

User: Ok. Preciso que você implemente algumas mensagens de diagnósticos para garantir que tudo funciona adequadamente:
A primeira mensagem de diagnóstico é para quando o cabeçalho alternativo da rotina for semanticamente equivalente ao cabeçalho principal da rotina
Exemplo:
```
Rotina para que se foo um número denominado quantidade;
Rotina para que se foo um número denominado contagem:
```
Embora o nome dos parâmetros seja diferente, a assinatura da função continua sendo equivalente a uma espécie de 'foo(number)' em ambos os casos. A intenção dos cabeçalhos alternativos é proporcionar formas diferentes de expressar a mesma coisa. Exemplo válido:
```
Rotina para que se defina uma string como uma outra string;
Rotina para que se coloque uma outra string em uma string;
Rotina para que se substitua uma string por uma outra string;
Rotina para que se troque uma string para uma outra string;
Rotina para que se altere uma string para uma outra string;
Rotina para que se modifique uma string para uma outra string;
Rotina para que se mude uma string para uma outra string:
```
Perceba que no exemplo acima de fato houve uma alteração no nome da rotina em si, embora os tipos base e a quantidade dos parâmetros sejam os mesmos (o que não é estritamente necessário, mas recomendável).
Outro diagnóstico que eu quero que apareça é caso algum dos cabeçalhos alternativos seja finalizado com ':' em vez de ';'. Por exemplo, o código abaixo pode ser levar a comportamentos inesperados, então é bom exibir uma dica para o programador corrigir o código:
```
Rotina para que se defina uma string como uma outra string;
Rotina para que se coloque uma outra string em uma string;
Rotina para que se substitua uma string por uma outra string:
Rotina para que se troque uma string para uma outra string;
Rotina para que se altere uma string para uma outra string:
Rotina para que se modifique uma string para uma outra string;
Rotina para que se mude uma string para uma outra string:
```

Copilot: Vou verificar como cabeçalhos alternativos são agrupados e diagnosticados hoje, para adicionar essas duas verificações sem alterar a resolução existente.






Implementei os dois diagnósticos:

- Cabeçalho alternativo com o mesmo nome de rotina e os mesmos tipos e quantidade de parâmetros do principal — mesmo que os nomes dos parâmetros sejam diferentes — gera um erro. Cabeçalhos com nomes de rotina diferentes não são sinalizados por essa regra.
- Cabeçalho terminado em `:` e imediatamente seguido por outro cabeçalho gera uma dica para usar `;` no cabeçalho alternativo.

As alterações estão em [typeParser.ts](). Adicionei testes em [definition.test.ts]() e documentei as regras no [README.md]().

**Validação:** `npm test` passou com 31 testes, e o lint dos arquivos alterados passou.

User: A implementação funcionou, mas parcialmente. Caso os nomes dos cabeçalhos terminem em ':' a dica ainda não é exibida na seção de diagnósticos. Exemplo:
```
Rotina para que se baz;
Rotina para que se bar:
Rotina para que se foo:
```
Aqui o usuário deveria ser informado que existem dois cabeçalhos de rotina terminados por ':', um em seguida do outro e que isso pode levar a comportamentos indefinidos (pois o compilador irá acreditar que tratam-se de duas rotinas diferentes, cujo corpo não foi ainda preenchido).

A reprodução do exemplo no parser já identifica a sequência, mas o caso não estava distinguindo explicitamente dois cabeçalhos principais consecutivos do aviso geral para cabeçalhos alternativos. Vou tornar esse caso explícito e cobri-lo com a sequência que você mostrou, incluindo o alias anterior.





Ajustei o diagnóstico para identificar explicitamente dois cabeçalhos principais consecutivos terminados em `:`, quando o primeiro não tem corpo antes do próximo cabeçalho. A dica aponta para os dois-pontos do primeiro cabeçalho e alerta que ele pode ficar sem corpo.

Adicionei um teste com o cenário exato `baz;`, `bar:`, `foo:`. **Validação:** `npm test` passou com 32 testes e o lint dos arquivos alterados passou.

User: Muito bem. Vamos aprender mais sobre alguns aspectos da linguagem.
A linguagem permite a execução direta de instruções hexadecimais dentro do corpo de rotinas. Isto é feito através da instrução "Decodifique" seguido de um valor hexadecimal literal.
Exemplo:
```
Rotina para que se subtraia um byte desde um segundo byte:
  Decodifique $8B8508000000.
  Decodifique $0FB600.
  Decodifique $8B9D0C000000.
  Decodifique $2803. 
```
Embora seu uso seja recomendado em rotinas onde se deseja otimizar o desempenho, é importante notar que isso faz com que a palavra "Decodifique" seja uma espécie de palavra-chave reservada.
Por isso não é recomendado criar nomes de rotinas que utilizem essa palavra chave, pois elas não poderão ser invocadas devidamente.
Exemplo de rotina inválidas:
```
Rotina para que se decodifique a letra:
  Escreva "letra" para StdOut.

Rotina para que se decodifique um número:
  Escreva o número para StdOut.

Rotina para que se decodifique uma string:
  Escreva a string para StdOut.
```
Essas rotinas irão falhar, porque ao tentar invocá-las com Statements do tipo:
```
Decodifique a letra.
Decodifique 123.
Decodifique "oi".
```
O compilador irá emitir um alerta informando que esperava receber um valor hexadecimal logo em seguida à palavra 'Decodifique'. 







Implementei a validação de `Decodifique`: a instrução agora aceita apenas um literal hexadecimal após a palavra-chave. Se vier outro valor ou nenhum valor, o parser emite um diagnóstico de erro. Assim, chamadas como `Decodifique a letra` são sinalizadas em vez de resolvidas como chamadas normais de rotina.

Adicionei testes para literais hexadecimais válidos e casos inválidos, incluindo número, string e argumento ausente. Também atualizei o [README.md]().

**Validação:** `npm test` passou com 33 testes e o lint dos arquivos alterados passou.

User: Em Português Puro, assim como em Python, não é necessário finalizar uma rotina com uma keyword de retorno. 
Porém ela existe, embora não seja capaz de retornar valores.
Eis um exemplo:
```
Rotina para que se foo bar baz:
  Retorne.
```
Não é possível acrescentar variáveis ou valores após a keyword 'retorne'.
Então Statements como:
'Retorne 0.',
'Retorne o número.' e
'Retorne falso.'
são inválidos. 
A única função da keyword retorne é devolver o controle do fluxo de execução à rotina chamadora. 
E, da mesma forma que a instrução 'Decodifique', ela não deve ser utilizada no nome/cabeçalho de uma rotina.


Copilot: Vou integrar `Retorne` à validação de Statements e dos nomes dos cabeçalhos, preservando o uso distinto de `retornando` para declarar retorno no cabeçalho.




Implementei `Retorne` como uma instrução sem valor: `Retorne.` é aceita, enquanto `Retorne 0.`, `Retorne o número.` e `Retorne falso.` geram erros. O uso de `retorne` no nome de uma rotina também é diagnosticado para evitar conflito com a palavra-chave.

Atualizei a documentação em [README.md]() e acrescentei testes. **Validação:** `npm test` passou com 34 testes, e o lint dos arquivos alterados passou.

User: Em Português Puro, todos os parâmetros são passados por referência. 
Assim como FORTRAN, Perl e Visual Basic, a passagem de argumentos é feita SEMPRE por referência. Isto é, os argumentos podem ter seu valores alterados diretamente no corpo da função, eliminando a necessidade da maior parte das instruções de retorno.
Então na rotina abaixo:
```
Rotina para que se execute o programa:
  Atribua 10 para um número denominado quantidade.
  Dobre a quantidade.
  Escreva a quantidade em StdOut.

Rotina para que se dobre um número:
  Multiplique o número por 2.
```
Perceba que não houve a necessidade alguma de definir um tipo de retorno no cabeçalho da rotina "para que se dobre um número". Afinal de contas ela recebeu o argumento "quantidade" e o modificou diretamente. 
Entretanto ainda assim existe um tipo de função em portugês puro que obrigatoriamente deve conter uma instrução de retorno: as funções booleanas (chamadas de funções decisoras).
Exemplo de função decisora:
```
Função para que se determine se um número é positivo:
  Se o número for maior do que 0, diga sim.
  [caso contrário]
  Diga não.
```
Conforme mencionado anteriormente, funções booleanas em português puro são iniciadas pela sequência de palavras 'para que se determine se'.
A palavra-chave 'diga' é a nossa instrução de retorno booleano, onde o valor literal 'sim' é equivalente a 1 (ou true em TypeScript) e o valor literal 'não' é equivalente a 0 (ou false em TypeScript).



Vou acrescentar validação do `Diga` nos corpos: aceitar apenas `sim` ou `não`, exigir uma resposta válida em funções booleanas e impedir seu uso como parte do nome da rotina. Também vou registrar na documentação que parâmetros são passados por referência.






Implementei o suporte de diagnósticos para funções decisoras: elas precisam conter um `Diga sim.` ou `Diga não.` válido. O uso de `Diga` com outro valor, fora de uma função booleana ou no nome de uma rotina também gera diagnóstico.

Registrei na documentação que os parâmetros são passados por referência, permitindo que a rotina modifique os argumentos do chamador sem retornar um valor, em [README.md]().

**Validação:** `npm test` passou com 36 testes, e o lint dos arquivos alterados passou.

User: Conforme informado, os parâmetros são passados por referência, por padrão. Mas podem existir situações onde não se deseja alterar diretamente o argumento recebido, apenas utilizá-lo para um cálculo auxiliar.
Para isso existe a instrução "Preserve".
Exemplo:
```
Rotina para que se subdivida um número em uma word e uma segunda word:
  Preserve o número.
  Desloque o número 16 bits para a direita.
  Atribua o número ao word.
  Atribua o número original à segunda word.
```
Aqui, antes de de fazer o deslocamento de bits, nós utilizamos a instrução 'Preserve o número', para que o  argumento original não seja modificado.
Isso faz com que o compilador crie uma cópia do parâmetro (esta cópia é a que iremos manipular à vontade). Os nomes do parâmetro original e da cópia são alterados, da seguinte forma:
O nome da cópia recebe o mesmo nome do parâmetro original.
Acrescenta-se a palavra 'original' ao final do nome do parâmetro original.
Então agora temos 2 variáveis na rotina:
A variável "número". (que é a cópia)
E a variável "número original". (que se refere ao argumento originalmente recebido)
Da mesma forma que as instruções "Decodifique", "Retorne" e "Diga", não se deve utilizar a instrução "Preserve" em nomes de rotinas. 

Copilot: Vou verificar como o parser representa parâmetros e Statements, para integrar `Preserve` como instrução de rotina e registrar qual parâmetro passa a ter uma cópia preservada.



Implementei `Preserve` como instrução que identifica um parâmetro pelo nome, precedido de artigo definido. O parser registra a cópia com o nome original do parâmetro e a variável recebida com ` original` acrescentado — por exemplo, `valor` e `valor original`. Usos sem artigo ou com um nome que não corresponde a um parâmetro geram diagnóstico. A palavra também é proibida em nomes de rotinas.

Atualizei a documentação em [README.md]() e adicionei testes em [definition.test.ts]().

**Validação:** `npm test` passou com 38 testes; o lint passou. Também confirmei no AST do parser os nomes gerados para os parâmetros preservados.

User: Agora vamos introduzir operadores aritméticos.
são eles:
'mais',
'menos',
'vezes' e
'dividido por'
Exemplo de código:
```
Para que se faça algo com um número e um segundo número:
  Atribua o número mais 2 menos 1 vezes o número dividido por 2 para o segundo número. 
```
Não existem tokens para definir a ordem de precedência. A avaliação é feita estritamente da esquerda para a direita, exatamente da forma e na ordem em que aparecem no código.


Copilot: Vou verificar como os Statements e os operandos já são representados, para acrescentar uma AST de expressões aritméticas com associação estrita da esquerda para a direita sem interferir nas chamadas e instruções existentes.







Implementei uma AST para expressões aritméticas em Statements `Atribua ... para ...`. Ela reconhece `mais`, `menos`, `vezes` e `dividido por`, agrupando as operações estritamente da esquerda para a direita, sem precedência. Por exemplo, no código apresentado, a operação mais externa é `dividido por`, encadeada sobre os resultados anteriores.

Documentei a regra no [README.md]() e adicionei um teste para o exemplo. **Validação:** `npm test` passou com 39 testes, o lint passou e verifiquei no AST a ordem dos operadores.

User: Agora vamos introduzir operadores de concatenação de strings.
são eles:
'junto com' e
'seguido de'
Exemplo de código:
```
Para que se faça algo:
  Atribua "José" para uma string denominada nome.
  Atribua "Silva" para uma string denominada sobrenome.
  Escreva "Olá, " junto com o nome junto com o sobrenome seguido de "!" para StdOut.
```
Estes dois operadores de concatenação de strings funcionam exatamente da mesma forma, a escolha fica a cargo da preferência do programador.


Implementei os operadores de concatenação `junto com` e `seguido de` em expressões de saída `Escreva ... para ...`. Eles podem ser combinados e são agrupados da esquerda para a direita; palavras iguais dentro de strings literais não são interpretadas como operadores.

Atualizei o [README.md]() e adicionei testes para o exemplo e para operadores mencionados dentro de strings. **Validação:** `npm test` passou com 40 testes, o lint passou e confirmei a ordem dos operadores na AST.

User: Conforme explicado anteriormente, sub-rotinas podem ser invocadas dentro do bloco de escopo de uma rotina.
Exemplo:
```
para que se foo:
  bar.

para que se bar:
  baz.

para que se baz:
  retorne.
```
Também sabemos que é possível passar argumentos para a rotina, se a assinatura dela assim permitir:
Exemplo:
```
para que se foo:
  bar 42.

para que se bar um número:
  incremente o número.

para que se incremente um número:
  adicione 1 para o número.
```
Perceba que na invocação de rotinas com parâmetros podemos passar como argumento: 
1) um valor literal que seja compatível com o tipo esperado pelo parâmetro (como o valor '42' no exemplo informado)
2) uma variável/parâmetro (cujo tipo também deve ser compatível com o tipo esperado.
Vamos agora entender a criação e inicialização de variáveis locais.
Variáveis locais somente podem ser declaradas ao se realizar uma chamada de uma função que recebe algum parâmetro. 
Exemplo:
A sintaxe geral é:
1) Nome da função
2) artigo indefinido ('um','uma','uns' e 'umas' seguido do tipo da variável local (o artigo indefinido indica que estamos declarando uma nova variável local, começando a declaração pelo seu tipo, por exemplo, 'número', 'string', etc)
4) A palavra 'denominado' (e suas variações) seguido do nome da variável local. 
Esta última parte é opcional, pois a atribuição do nome da variável local funciona exatamente da mesma forma que das declarações de campos de estruturas ou de parâmetros no cabeçalho de rotina, isto é, o programador pode usar apelidos para definir automaticamente o nome da variável com base no nome do tipo fornecido e o sistema irá efetuar a redução do nome do tipo automaticamente quando necessário.
Exemplo:
```
para que se foo:
  bar um número denominado contagem.
  baz a contagem.
  bar um segundo número.
  baz o segundo número.

para que se bar um número:
  baz o número.

para que se baz um número:
  adicione 1 para o número.
```
Também podemos fazer a declaração da variável local juntamente com sua inicialização. Exemplo:
```
para que se foo:
  Atribua 123 para um número denominado valor de exemplo.
```
No corpo da rotina acima, temos a invocação da rotina 'para que se atribua um número para um segundo número:'.
Perceba que temos os seguintes componentes:
1) o nome da rotina ('Atribua').
2) o valor numérico literal '123'.
3) o tipo da variável local ('número').
4) o nome da variável local ('valor de exemplo')


Então, recapitulando tudo:
Variáveis locais devem ser declaradas e inicializadas dentro do corpo de rotinas e funções. Para declarar uma variável local, é necessário utilizar algum dos artigos indefinidos a seguir dentro do corpo de uma rotina:
'um', 'uns', 'uma' e 'umas'.
A sintaxe geral para é a seguinte:
<nome da rotina invocada> <valor literal - quando houver inicialização> <artigo indefinido><tipo da variável><denominado><nome da variável>.
Exemplos:
```
Atribua 18 para um número denominado idade.
Atribua "João" para uma string denominada nome.
Ative um sinalizador denominado indicador de erro.
Converta o byte para uma cifra hexadecimal denominada LineFeed.
```

Copilot: Vou mapear a resolução atual de chamadas e o tratamento de aliases de tipos para integrar declarações locais e conferir tipos dos argumentos sem confundir artigos indefinidos dentro do nome da rotina.




A criação de locais e o exemplo com inicialização agora passam nos testes, incluindo a associação com as rotinas corretas. Vou acrescentar uma verificação de que uma variável existente com tipo incompatível não resolve a chamada, e fazer a validação final.





Implementei declarações de variáveis locais em chamadas de rotina. O parser reconhece o tipo após artigo indefinido, aceita nomes explícitos com `denominado` e infere o nome de aliases como “segundo número”. As variáveis locais ficam disponíveis para chamadas posteriores; inicializadores como `Atribua 123 para um número denominado valor de exemplo.` também são reconhecidos como chamadas que declaram um local.

A resolução agora confere se argumentos literais, parâmetros, variáveis locais e variáveis globais têm tipo compatível com o parâmetro esperado. Chamadas com tipos incompatíveis não são resolvidas. Também ajustei a leitura de cabeçalhos para separar parâmetros ligados por `para`.

Documentei a sintaxe no [README.md]() e adicionei testes em [definition.test.ts](). **Validação:** `npm test` passou com 42 testes e o lint dos arquivos alterados passou.

User: Agora vamos falar de Variable Shadowing.
Em Português Puro o sombreamento de variáveis acontece quando você declara uma variável local dentro de uma rotina/função com o mesmo nome de outra variável global.
Como funciona: A variável interna "sombra" a externa, fazendo com que o nome passe a valer apenas para o valor interno naquele trecho específico
Exemplo:
```
O nome da pessoa é uma string igual a "José".

Rotina para que se execute o programa:
  Defina "console" como o tipo da aplicação.
  Atribua "João" para uma string denominada nome. [O shadowing acontece aqui]
  Escreva o nome para StdOut. \ O output é "João" em vez de José
  Feche o programa.

```
Em Português Puro, o shadowing é sempre o comportamento padrão e desejado. 

Copilot: Vou rastrear a resolução de variáveis em chamadas, parâmetros e declarações locais/globais para confirmar se já há algum fallback que dê prioridade incorreta ao símbolo global.



Ajustei a resolução de variáveis para dar prioridade explícita a parâmetros e variáveis locais antes de consultar as globais. Assim, um local sombreia uma variável global de mesmo nome durante a resolução de argumentos de chamadas.

Adicionei um teste em [definition.test.ts]() que confirma esse comportamento com tipos diferentes para o local e o global, e documentei a regra no [README.md]().

**Validação:** `npm test` passou com 43 testes e o lint dos arquivos alterados passou.

User: Agora vamos adicionar uns diagnósticos:
No código abaixo:
```
para que se bar:
  Baz a string.

para que se baz:
  Foo.
```
Como já sabemos, o statement 'Baz a string' na rotina 'para que se bar' poderia ser avaliado de 2 maneiras:
1) Uma chamada de função para a função 'para que se baz a string', ou
2) Uma chamada de função para a função 'para que se baz uma string' em que 'uma string' se refere ao parâmetro aceito pela função.
O problema é que nenhuma das 2 funções existe no código. 
O programador está tentando invocar uma rotina inválida.
Deveria haver alguma mensagem de diagnóstico informando que a função não foi encontrada.
Agora, vamos supor que o programador corrija o nome da função 'baz', assim:
```
para que se bar:
  Baz a string.

para que se baz a string:
  Foo.
```
Isto resolveria o problema. As assinaturas são compatíveis e não há o que reclamar. 
Mas e se em vez de corrigir o nome da função o programador resolver corrigir o problema adicionando um parâmetro no cabeçalho da função 'baz'?
Por exemplo, assim:
```
para que se bar:
  Baz a string.

para que se baz uma string:
  Foo.
```
Nesse caso o nosso problema é outro: O programador está tentanto repassar uma string como um argumento sem tê-la definido antes.
Isto também deveria causar uma mensagem de diagnóstico.
Existem 2 formas que o programador poderia usar para resolver então esse novo problema:
1) criando uma variável global, conforme o exemplo abaixo:
```
A string é uma string igual a "teste".

para que se bar:
  Baz a string.

para que se baz uma string:
  Foo.
```
Aqui a variável global de nome "string" é repassada como argumento e não temos maiores problemas.
Outra abordagem seria declarar uma variável local:
para que se bar:
  Baz uma string.

para que se baz uma string:
  Foo.
```
Aqui o programador optou por enviar uma string (cujo nome também é string, por conta dos apelidos). EMbora a string inicialmente esteja vazia, este comportamento pode ser desejado pelo programador então não devemos gerar mensagens de diagnósticos nesse caso.

Copilot: Vou ajustar a resolução para distinguir chamadas inexistentes de argumentos que referenciam variáveis inexistentes, preservando a resolução atual de nomes exatos e variáveis locais/globais.

A resolução existente já prioriza uma rotina sem parâmetros cujo nome corresponda exatamente, e reconhece locais declarados por artigo indefinido. Vou complementar o caminho de falha: reportar chamada sem rotina compatível e, quando a assinatura existe mas o argumento nomeia uma variável ausente, reportar essa variável.







Adicionei diagnósticos para os dois casos: chamadas sem uma rotina compatível e argumentos que parecem referenciar uma variável inexistente. A resolução continua priorizando a correspondência exata com uma rotina sem parâmetros; se houver uma variável global ou local com o nome informado, a chamada pode ser resolvida. Declarações locais como `Baz uma string.` também são aceitas como argumentos.

Documentei as regras no [README.md]() e cobri chamadas ausentes, variáveis indefinidas, globais e locais nos testes de [definition.test.ts]().

**Validação:** `npm test` passou com 44 testes e o lint dos arquivos alterados passou.

User: Está funcionando parcialmente. No código abaixo:
```
Rotina para que se foo:
  Baz a string.

Rotina para que se baz:
  Bar.

Rotina para que se Bar:
  Retorne.

````
Aparece corretamente a mensagem 'No compatible routine found for "Baz a string"'.
De forma semelhante, se retirarmos a última rotina declarada, como no código abaixo:
```
Rotina para que se foo:
  Baz uma string.

Rotina para que se baz:
  Bar.

```
Aparece corretamente a mensagem 'No compatible routine found for "Bar"'.

Mas no código abaixo:
```
Rotina para que se foo:
  Baz uma string.

Rotina para que se baz:
  Retorne.
````
Não existe uma rotina 'para que se baz uma string'.
Apenas existe uma rotina 'para que se baz', mas ela não recebe argumentos, então a assinatura é diferente. Por favor corrija.

Copilot: Vou ajustar a detecção de chamadas para considerar o nome de uma rotina já declarada mesmo quando o restante contém apenas um artigo indefinido. Assim, `Baz uma string` será reconhecida como uma tentativa de chamada incompatível se só existir `Baz` sem parâmetros.



Corrigi a resolução para diagnosticar uma chamada que tem argumentos quando só existe uma rotina com aquele nome, mas sem parâmetros. Assim, `Baz uma string.` agora gera “No compatible routine found” se o código declara apenas `baz` sem argumentos.

O cenário foi adicionado aos testes. **Validação:** `npm test` passou com 44 testes e o lint dos arquivos alterados passou.

User: Ok, tudo funciona, mas agora precisamos melhorar a análise da cadeia de redução de tipos.
Por exemplo, o código abaixo funciona normalmente, conforme esperado:
```
Rotina para que se foo:
  Baz um número.

Rotina para que se baz um número:
  Retorne.
```
Mas o código abaixo emite um diagnóstico:
```
Uma contagem é um número.

Rotina para que se foo:
  Baz uma contagem.

Rotina para que se baz um número:
  Retorne.
```
'No compatible routine found for "Baz uma contagem"'.
Português Puro permite que criem tipos derivados de um tipo base.
Por exemplo:
```
Uma contagem é um número.
Uma quantidade é um número.
Um contador é uma contagem.
```
Perceba que todos os tipos acima acabam sendo reduzidos para o tipo 'número':
contagem -> número.
quantidade -> número.
contador -> contagem -> número.
Então nossa rotina 'para que se baz um número' deveria aceitar como parâmetro todos os tipos derivados de número 
(incluindo o tipo 'contador', embora seja derivado do tipo 'contagem', em última instância também acaba chegando no tipo número).
Apesar disso, o servidor sempre deve tentar encontrar primeiramente a definição mais específica.
Então no exemplo abaixo:
```
Uma contagem é um número.
Uma quantidade é um número.
Um contador é uma contagem.


Rotina para que se foo:
  Baz um  contador.

Rotina para que se baz uma contagem:
  Retorne.


Rotina para que se baz um número:
  Retorne.
```
O servidor ao encontrar a chamada de função 'Baz um contador' primeiramente deveria procurar a rotina 'para que se baz um contador'. 
Ao não encontrá-la, verifica o tipo base do tipo 'contador' (que é 'contagem'). 
O servidor então procura a rotina 'para que se baz uma contagem'. 
Se achá-la, como é o caso do código, então a correspondência termina por aí.
Caso ele não ache, a sequência de identificação do tipo base continua.

Copilot: Vou examinar a resolução atual das chamadas e a cadeia de tipos derivados para implementar a busca progressiva pelo tipo mais específico, com fallback pelos tipos base.





Corrigi a compatibilidade entre tipos para aceitar parâmetros que recebem tipos derivados, inclusive quando a cadeia tem vários níveis, como `contador ? contagem ? número`.

Quando há várias sobrecargas compatíveis, a resolução agora escolhe a mais específica e só recorre a um tipo mais geral se não encontrar uma correspondência mais próxima. Adicionei testes para a preferência por `contagem` em vez de `número` e para o fallback até `número`. Documentei a regra no [README.md]().

**Validação:** `npm test` passou com 45 testes e o lint passou.

User: Agora vamos introduzir blocos condicionais.
Em Português Puro, a sintaxe para blocos condicionais é:
```
'Se' <condição> ','
  <Statement> '.'
```
Perceba que a vírgula é que abre o bloco condicional e o ponto final encerra o bloco condicional.
Se houver mais de um statement dentro de um bloco condicional, os statements intermediários devem ser separados por um ';'.
O último statement encerra o bloco condicional com o ponto final.
Exemplo:
```
'Se' <condição> ','
  <Statement1>;
  <Statement2>;
  <Statement3>;
  <Último Statement> '.'
```
É importante notar que Português Puro não possui uma cláusula 'else' ou 'elseif'.
Também não é permitido aninhamento de blocos condicionais.
(Ou seja, não é permitido colocar um 'Se' dentro de outro 'Se'.)
Vamos passar para a parte da avaliação das condições após o 'Se':
Em Português Puro, toda <condição> é uma chamada de função booleana.
Por exemplo, o código abaixo:
```
Se foo,
  Bar;
  Retorne.
```
Vai invocar a função booleana 'para que se determine se foo' para avaliar se a expressão é verdadeira ou falsa.
```
Função para que se determine se foo:
  Diga sim.
```
Então se a função booleana não existir, uma mensagem de diagnóstico deverá ser exibida (lembre-se, funções booleanas sempre começam com 'para que se determine se' + o restante do cabeçalho da função boolena).

Copilot: Vou verificar como o parser delimita Statements por ponto e já reconhece `Se`, para integrar blocos condicionais sem confundir suas vírgulas e ponto e vírgula com as chamadas existentes.




Implementei blocos condicionais no formato `Se <condição>, ... .`: a vírgula abre o bloco, o ponto final o encerra e ponto e vírgula separa Statements intermediários. A condição precisa corresponder a uma função booleana sem parâmetros; se não houver uma correspondente, o servidor emite um diagnóstico. Blocos `Se` aninhados também são diagnosticados.

Documentei as regras no [README.md]() e adicionei testes para condições válidas, funções booleanas ausentes e aninhamento. **Validação:** `npm test` passou com 47 testes e o lint dos arquivos alterados passou.

User: Você disse que a condição precisa corresponder a uma função booleana sem parâmetros.
Na verdade a função booleana pode ter um ou mais parâmetros, conforme necessário. 
Por exemplo, a expressão condicional abaixo:
```
Se o número é 2,
  Retorne.
```
Invoca a função booleana abaixo:
```
Função para que se determine se um número é um segundo número:
  Decodifique $C7C001000000. \ mov eax,1 \ presume que sim
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] \ armazena o número
  Decodifique $8B1B. \ mov ebx,[ebx]
  Decodifique $8B8D0C000000. \ mov ecx,[ebp+12] \ armazena o segundo número
  Decodifique $3B19. \ cmp ebx,[ecx] \ efetua a comparação
  Decodifique $0F8406000000. \ je se for igual, ignora o próximo statement
  Decodifique $C7C000000000. \ mov eax,0 \ retorna não (falso)
```
A função booleana recebe 2 argumentos do tipo 'número' e devolve um valor.

Copilot: Vou adaptar a resolução da condição para tratar o texto após `Se` como uma chamada: primeiro tentar o nome exato e, em seguida, associar argumentos pelos tipos e artigos, como nas chamadas normais de rotina.


O exemplo usa a palavra “é” como nome do predicado entre os dois argumentos (`o número` e `2`). Vou ajustar o parsing de cabeçalhos decisores para separar esses parâmetros e a resolução da condição para associá-los à função booleana correspondente.



Vou concluir a integração: ajustar a leitura do cabeçalho decisor, verificar a resolução do bloco condicional contra os helpers já existentes e então adicionar testes e documentação.


A resolução de cabeçalhos agora trata `é` como o nome do predicado e captura os argumentos antes e depois dele, validando seus tipos pela cadeia de herança. Vou executar a suíte E2E e o lint focado para identificar regressões ou ajustes necessários.




A suíte passou (48 testes) e o lint também. Vou reforçar o teste novo para cobrir a compatibilidade de uma variável de tipo derivado com o parâmetro-base da função decisora, que é parte importante da regra de resolução.





Implementei o suporte a condições com argumentos em [typeParser.ts](). O cabeçalho `Função para que se determine se um número é um segundo número:` agora é interpretado como uma função decisora chamada `é`, com dois parâmetros. Assim, `Se o número é 2,` resolve os argumentos e considera a compatibilidade entre tipos derivados e tipos-base. A navegação para a definição da função também funciona sobre o predicado.

Atualizei a documentação em [README.md]() e adicionei um teste E2E em [definition.test.ts](), cobrindo a resolução com um tipo derivado.


User: Não entendi bem o que você quis dizer com 
"a resolução de cabeçalhos agora trata 'é' como o nome do predicado".
De qualquer forma iremos precisar efetuar o tratamento de verbos, preposições e contrações de forma adequada.
Por exemplo, na invocação da função booleana abaixo:
```
para que se foo:
Se o número for 2, retorne.

Função para que se determine se um número é um segundo número:
  Decodifique $C7C001000000.
  Decodifique $8B9D08000000. 
  Decodifique $8B1B. 
  Decodifique $8B8D0C000000. 
  Decodifique $3B19. 
  Decodifique $0F8406000000.
  Decodifique $C7C000000000. 

```
O servidor não irá encontrar a função 'para que se determine se um número for um segundo número'.
Porém temos a função 'para que se determine se um número é um segundo número', que faz exatamente o esperado.
A diferença é que o programador usou a palavra 'for' que corresponde ao modo subjuntivo do verso 'ser'. Isto não deveria causar um erro, pois o programador usou a gramática corretamente.
Por isso o servidor deve efetuar a "tradução" dos principais verbos usados, conforme lista abaixo:
```
"é"->"é" ; (sem alteração)
"for"->"é" ;
"foi"->"é" ;
"foram"->"é" ;
"forem"->"é" ;
"seja"->"é" ;
"sejam"->"é" ;
"são"->"é" ;
"forem"->"é" ;
"está"->"é" ;
"estão"->"é" ;
"estiver"->"é" ;
"estiverem"->"é" ;
"estamos"->"é" ;
"tiver"->"tem" ;
"houver"->"há" ;
"existir"->"existe" ;
"começar"->"começa" ;
"começa"->"começa" ;
"termina"->"termina" ;
"terminar"->"termina" ;
"puder"->"pode" ;
"puderem"->"pode" ;
"possuir"->"possui" ;
"cabe"->"cabe" ;
"couber"->"cabe" ;
"desde"->"usando" ;
"dada"->"usando" ;
"dado"->"usando" ;
"dadas"->"usando" ;
"dados"->"usando" ;
"com"->"usando" ;
"usando"->"usando" ;
"contendo"->"usando" ;
```
Ou seja, se na chamada da função houver a palavra "contendo", o servidor deve transformar/interpretar o "contendo" como se fosse a palavra "usando". Isto permite que a linguagem seja mais flexível e que menos cabeçalhos alternativos de rotina precisem ser criados. De forma semelhante, as preposições na lista abaixo precisam passar pelo mesmo processo:
```
"sob"->"sobre" ;
"sobre"->"sobre";
"em" -> "para";
```
A última etapa envolve a decomposição das contrações da língua portuguesa. As contrações devem ser decompostas exatamente conforme lista abaixo, mesmo que algumas decomposições pareçam incorretas:
```
 "ao"->"a o"
 "à"->"a a"
 "aos"->"a os"
 "às"->"a as"
 "dum"->"de esse" 
 "duma"->"de essa"
 "dumas"->"de esses"
 "duns"->"de esses"
 "desse"->"de o"
 "dessa"->"de a"
 "desses"->"de os"
 "dessas"->"de as"
 "deste"->"de este"
 "desta"->"de esta"
 "destes"->"de estes"
 "destas"->"de estas"
 "nesse"->"em esse"
 "nesses"->"em esses"
 "neste"->"em este"
 "nestes"->"em estes"
 "nessa"->"em essa"
 "nessas"->"em essas"
 "nesta"->"em esta"
```
Nos casos em que a palavra 'a' atua como uma preposição (como sinônimo de 'para'), a transformação também deve acontecer. Felizmente esta transformação só acontece antes de um artigo. Exemplos em que a conversão é necessária:
```
"a um"->"para um" ; 
"a uma"->"para uma" ; 
"a uns"->"para uns" ; 
"a umas"->"para umas" ; 
"a o"->"para o" ; 
"a a"->"para a" ; 
"a os"->"para os" ; 
"a as"->"para as" ; 
```

Copilot: Vou rastrear onde os nomes e as chamadas são normalizados, para aplicar as equivalências linguísticas de forma uniforme sem alterar o texto-fonte nem os intervalos usados pela navegação. Depois acrescentarei testes para verbos, preposições e contrações.




A regra está isolada à normalização de nomes de rotinas, então nomes de tipos e variáveis continuam preservando sua semântica atual. Também ampliei o reconhecimento das variantes de `usando` em cabeçalhos e das formas verbais que equivalem a `é`; agora vou validar o caso `for` e a contração `ao` ponta a ponta.








A expressão “`é` como nome do predicado” ficou confusa. Eu me referia à palavra que separa os argumentos da condição — por exemplo, `o número | é | 2` — e que o parser usa para localizar a função decisora correspondente. **Não** quis dizer que a função se chama apenas `é`: a resolução considera o predicado e a assinatura dos argumentos.

Implementei a normalização pedida para a correspondência entre chamadas e cabeçalhos, sem mudar os nomes de tipos ou variáveis. Ela contempla as formas verbais, preposições e contrações listadas; também reconhece as variantes de `usando` e as formas verbais equivalentes a `é` ao analisar cabeçalhos decisores. Por isso, `Se o número for 2,` agora encontra a função declarada com `é`.

Atualizei a documentação em [README.md]() e acrescentei testes em [definition.test.ts](). **Validação:** 49 testes passaram e o lint dos arquivos alterados foi aprovado.

User: Agora que eu percebi que seria mais eficiente traduzir "ao" diretamente para "para o" em vez de "a o" e depois como "para o".
Então caso você não tenha feito essa otimização, pode considerar essa nova lista abaixo:
 "ao"->"para o"
 "à"->"para a"
 "aos"->"para os"
 "às"->"para as"

Copilot: 

Atualizei a normalização para expandir diretamente `ao`, `à`, `aos` e `às` como `para o`, `para a`, `para os` e `para as` em [typeParser.ts](). O lint do arquivo passou.

User: Ótimo agora vamos implementar o operador de acesso a campos de estruturas.
O acesso a campos de estruturas é feito com o operador "deste" (que atualmente é decomposto como "de este") e também com suas variações como "desta", "destes" e "destas".

Exemplo de acesso a campo de estrutura:
```
Uma pessoa é uma estrutura com
  Uma string denominada nome.

O cliente é uma pessoa.

para que se foo:
  Bar o nome deste cliente.
```
Então a sintaxe básica é <artigo> <nome do campo da estrutura> 'deste/desta/destes/destas' <nome da estrutura>.
O acesso a campos de estruturas filho seguem a mesma lógica, conforme exemplo abaixo
Exemplo de acesso a campo de estrutura filho:
```
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um endereço.

Um endereço é uma estrutura com
  Uma string denominada logradouro,
  Um número denominado número da casa,
  Um número denominado código postal.

O cliente é uma pessoa.

para que se foo:
  Bar o logradouro deste endereço deste cliente.
```


Copilot: Vou seguir o caminho de resolução de argumentos/campos e da navegação já existente, para integrar acessos encadeados sem tratar o nome composto do campo como uma variável simples. Depois adicionarei cobertura de teste para acesso direto e aninhado.



Acesso direto e encadeado agora resolve o tipo final do campo, o que permite verificar compatibilidade com o parâmetro da rotina. Também registrei os campos atravessados na chamada para que “Ir para definição” leve ao campo correspondente. Vou validar esses fluxos com testes e lint.




Implementei o acesso a campos de estruturas em argumentos de rotina, incluindo encadeamento, como `o logradouro deste endereço deste cliente`. O servidor resolve o tipo do campo final para verificar compatibilidade com os parâmetros e permite navegar até a definição do campo. Também são considerados campos herdados.

Atualizei a documentação em [README.md]() e adicionei um teste E2E para os casos direto e aninhado em [definition.test.ts](). A resolução está em [typeParser.ts](), e a navegação foi integrada em [server.ts]().

**Validação:** 50 testes passaram; lint dos arquivos TypeScript alterados aprovado.

User: Vamos corrigir a formação do plural dos tipos.
O código abaixo exibe a seguinte mensagem de diagnóstico 'Unknown base type "pontos osmosianos'.
```
Um ponto osmosiano é um número.

Uns extra pontos osmosianos são uns pontos osmosianos.
````
Ao formal o nome plural de um tipo, todas as palavras constantes no nome do tipo devem ser pluralizadas (com exceção das palavras 'de' e as que vierem após ela no nome do tipo).
Exemplos:
"casa do pato" -> "casas dos patos"
"casa da Maria" -> "casas das Marias"
"escova de dente" -> "escovas de dente"
"caixa de texto" -> "caixas de texto"

Copilot: Vou verificar a lógica atual de pluralização e como o catálogo associa nomes singulares/plurais. Em seguida ajusto a regra para pluralizar todas as palavras antes de `de` e testo os exemplos com `do/da` e `de`.


A regra agora gera plurais palavra por palavra e para de pluralizar a partir de `de`, conforme os exemplos. Incluí cobertura para `pontos osmosianos`, `casas dos patos`, `casas das Marias` e `escovas de dente`; vou rodar a suíte completa e o lint direcionado.




Encontrei e corrigi um problema no teste: ele consultava `casas dos patos` sem que essa forma aparecesse no código-fonte, então não havia um intervalo para navegar. Agora a forma plural está presente como tipo-base, permitindo verificar tanto o reconhecimento quanto a navegação. Vou rodar a validação final.




Corrigi a formação do plural dos nomes compostos em [typeParser.ts](): agora cada palavra é pluralizada, exceto `de` e as palavras que vêm depois. Isso permite reconhecer, por exemplo, `pontos osmosianos`, `casas dos patos`, `casas das Marias` e `escovas de dente`.

Atualizei a documentação em [README.md]() e adicionei testes E2E em [definition.test.ts](). **Validação:** 51 testes passaram; lint aprovado.

User: Agora vamos corrigir um erro no método onDefinition.
O método atualmente está falhando (o que não acontecia anteriormente). Exemplo de código:
```
Um caractere é um byte.

para que se foo:
  bar um caractere.

para que se bar um byte:
  retorne.
```
Ao invocar o recurso Go To Definition em "bar um caractere", temos dois comportamentos:
caso a palavra sob o cursor seja "bar", ele navega corretamente para a rotina "para que se bar um byte" (embora esta funcionalidade deveria ser atendida pelo recurso "Go To Implementation", mas este não é o problema agora).
O problema é que caso a palavra  sob o cursor seja "caractere" ele tenta encontrar a definição de "caractere", mas por algum motivo esta invocação falha com a mensagem "Nenhuma definição encontrada para 'caractere'." O que é estranho pois este recurso funcionava normalmente anteriormente.

Copilot: Vou rastrear como o provedor identifica referências de tipos dentro dos argumentos de chamadas. Como a navegação funciona sobre `bar`, mas falha sobre `caractere`, o provável problema está na prioridade entre a resolução da chamada e a resolução do tipo do argumento.

A causa é que declarações locais inferidas durante chamadas (`um caractere`) eram registradas na chamada, mas o provedor de definição não consultava o tipo dessa variável local ao posicionar o cursor sobre o tipo. Adicionei essa busca e um teste que verifica tanto a definição da rotina quanto a definição de `caractere`; vou validar agora.


Corrigi o Go to Definition para argumentos que declaram uma variável local, como `um caractere`. O servidor agora também consulta o tipo dessa variável ao resolver a posição do cursor, permitindo navegar de `caractere` até sua declaração. A navegação sobre `bar` continua levando à rotina.

Adicionei um teste de regressão em [definition.test.ts](). **Validação:** 52 testes passaram e o lint dos arquivos alterados foi aprovado.

Início da Declaração de Tipo = `Artigo Indefinido`
Delimitador de Início = Caractere relevante seguinte ao `Artigo Indefinido`
Nome designado ao novo tipo de dado = `Delimitador de Início` até `Delimitador de Fim`
`Delimitador de Fim` =
`Símbolo de Definição` = `é` ou `são`
Nome do tipo base = Caractere relevante seguinte ao `Caractere de Definição` até o 
Fim da Declaração de Tipo = `.`
