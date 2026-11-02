# Relatório de integração cirúrgica do parser

## Finalidade e ponto de partida

Este relatório registra decisões, correções e validações da integração dos recursos descritos em [`Leia-me.md`](./Leia-me.md) e [`Parser do Português Puro.md`](./Parser%20do%20Portugu%C3%AAs%20Puro.md) ao parser ativo [`typeParser.ts`](../LSP/server/src/typeParser.ts) e ao servidor ativo [`server.ts`](../LSP/server/src/server.ts).

O documento também preserva o contexto útil de uma versão anterior do relatório, recuperada do commit `fe72412` depois que a versão atual foi encontrada vazia. A versão anterior não estava no estado atual do Git, mas ainda existia naquele commit.

## Requisitos fornecidos pelo usuário

| Recurso | Cursor sobre | Destino |
|---|---|---|
| Ir para Definição | variável, campo, parâmetro ou tipo | declaração da variável/campo/parâmetro/tipo |
| Ir para Definição de Tipo | variável, campo, parâmetro ou tipo | declaração do tipo base ou do tipo do símbolo |
| Ir para Implementação | chamada de rotina ou função | declaração correspondente da rotina/função |

Outras regras esclarecidas:

- Um artigo indefinido (`um`, `uma`, `uns`, `umas`) no cabeçalho introduz um parâmetro. Preposições delimitam o tipo e o nome/alias do parâmetro, exceto `de`, que também pode integrar o nome de um tipo.
- Tipos declarados em arquivos irmãos devem ser resolvidos na análise e exibidos corretamente na Outline.
- Qualificadores parentéticos, observações entre colchetes e strings não podem conter quebras de linha.
- Ponto em observação `[ ... ]` ou após `\` na mesma linha não encerra uma declaração.
- `Retorne` não pode ser usado em função booleana.
- `Reitere` sem `Itere` anterior implica `Itere` no início do corpo.
- Consulte [`Documentação/Índice.md`](../Documentação/Índice.md) para as fontes normativas. As regras consultadas para esta integração incluem comentários, preposições, rotinas, funções e laços.

## Estado da implementação

### Já existente antes desta integração

- O parser ativo já aceitava declarações externas de tipos, variáveis globais e rotinas.
- O servidor já indexava arquivos `.pop` vizinhos, decodificando-os como Windows-1252.
- Os provedores de definição, definição de tipo e implementação já estavam anunciados.
- O modelo semântico já representava tipos, campos, parâmetros, variáveis e chamadas.
- A cópia em `Parser/` é material de referência; o parser ativo não deve ser substituído em bloco por ela.

### Alterações integradas

- [`typeParser.ts`](../LSP/server/src/typeParser.ts):
  - aceita tipos, variáveis globais e rotinas externas e oferece modo de indexação sem diagnósticos de corpo;
  - resolve tipos dos parâmetros procurando o tipo conhecido mais longo e separando preposições, preservando `de`;
  - reconhece preposições e conjunções como separadores de parâmetros;
  - diagnostica quebras de linha em qualificadores, observações e strings;
  - ignora pontos dentro de strings, observações e comentários de linha ao localizar o fim de declarações;
  - rejeita `Retorne` em funções booleanas;
  - registra um `Itere` implícito antes da primeira instrução se um `Reitere` ocorrer sem `Itere` anterior;
  - preserva intervalos de comentários e strings para impedir navegação em texto que não é código;
  - expõe consultas de referência para chamadas, campos declarados e campos calculados.
- [`server.ts`](../LSP/server/src/server.ts):
  - registra Outline e símbolos do workspace;
  - exibe tipos base resolvidos mesmo quando declarados em arquivo irmão;
  - separa a navegação para a declaração do campo da navegação para seu tipo;
  - resolve chamada de rotina/função com candidatos dos arquivos irmãos para Definição e Implementação;
  - inclui os qualificadores dos nomes alternativos nas conclusões.
- [`definition.test.ts`](../LSP/client/src/test/definition.test.ts):
  - verifica tipos externos no Outline, tipos de parâmetros/campos, navegação para campo e tipo, comentários e quebras de linha proibidas;
  - ajusta expectativas para que Definição em um campo vá ao campo e Definição de Tipo vá ao tipo;
  - explicita nomes distintos no teste de sombreamento, que antes gerava um diagnóstico de parâmetros duplicados não relacionado ao caso testado.

O repositório já possuía alterações não relacionadas antes desta integração. Elas foram preservadas. Compilações também atualizam arquivos `tsconfig.tsbuildinfo`.

## Decisões e problemas encontrados

### Preservar a arquitetura ativa

Uma substituição ampla do parser ativo pela cópia em `Parser/` produziu regressões: a implementação ativa tinha resolução de referências externas e comportamento que não correspondia integralmente à cópia. A solução é portar recursos pontualmente, comparando dependências e fluxo antes de integrar.

### Parâmetros e preposições

O cabeçalho separa nome da rotina, parâmetros, retorno e qualificador. A assinatura deve começar no delimitador de parâmetros mais próximo antes do primeiro artigo indefinido. Dentro dos parâmetros, vírgulas, conjunções e preposições seguidas de novo artigo separam declarações. `de` não separa, pois pode compor um nome como “número de ordem”.

Para tipos/aliases sem marcador explícito, o resolvedor escolhe a correspondência de tipo conhecida mais longa, sem absorver preposições posteriores. Para declarações com `denominado`/`chamado`, o nome explícito é mantido à parte do tipo.

### Tipos externos e Outline

As tabelas de símbolos são construídas com declarações locais e externas. A Outline usa essa tabela para exibir nomes resolvidos e identificar tipos derivados de `estrutura`. O parser de arquivo irmão funciona em `navigationOnly` para evitar análise de corpos que dependam de contexto local ausente.

### Navegação de campos e chamadas

Referências de tipo podem se sobrepor ao texto usado como alias de campo. Para “Ir para Definição”, o nome de campo declarado ou acessado deve ser resolvido antes do tipo. Para chamadas externas, `resolveRoutineLocation` deve usar os candidatos indexados de todos os arquivos, não apenas os objetos locais do documento. A ausência dessa resolução fazia a localização apontar para o arquivo atual com offsets pertencentes ao arquivo da rotina.

### Fim de declaração e comentários

`findDeclarationPeriod` considera os intervalos de strings, observações aninhadas e comentários de linha. Um ponto em comentário não é terminador; depois da barra invertida, a busca recomeça após a quebra de linha. O parser mantém o mesmo comprimento do texto-fonte para preservar offsets LSP.

Na regra normativa, comentário de linha usa `\` até o final da linha e observações `[...]` são curtas e em linha. A proibição explícita do usuário foi aplicada também como diagnóstico, sem alterar offsets.

### `Retorne` e laço implícito

`validateReturnStatement` recebe a rotina atual para rejeitar `Retorne` em função booleana, mantendo a validação de argumento em rotinas comuns. Quando há `Reitere` sem `Itere` anterior, é inserido um `Itere` sintético no início do corpo. Uma instrução `Itere` posterior não satisfaz o requisito temporal.

## Histórico de validação

- A compilação inicial anterior a estas alterações falhava porque o servidor chamava APIs/opções que o parser não exportava. Depois da integração, `cd LSP && npm run compile` passou.
- `cd LSP && npm run lint` passou.
- Testes E2E focados passaram para:
  - tipos externos no Outline e navegação entre arquivos irmãos;
  - parâmetros, chamadas qualificadas e singular/plural;
  - Definição e Definição de Tipo em campos;
  - comentários, strings, qualificadores e pontos de encerramento;
  - `Retorne`, funções booleanas e corpo vazio de rotina.
- A suíte E2E completa, executada por `cd LSP && npm test`, passou: **61 testes aprovados**.

## Conclusão

Os recursos descritos em `Leia-me.md` foram integrados ao parser ativo e ao servidor LSP sem substituir a arquitetura local pela cópia de referência. Compilação, lint e suíte E2E completa passaram.

## Arquivos relevantes

- Implementação ativa do parser: [`LSP/server/src/typeParser.ts`](../LSP/server/src/typeParser.ts)
- Implementação ativa do servidor LSP: [`LSP/server/src/server.ts`](../LSP/server/src/server.ts)
- Testes E2E: [`LSP/client/src/test/definition.test.ts`](../LSP/client/src/test/definition.test.ts)
- Instruções do usuário: [`Leia-me.md`](./Leia-me.md)
- Guia técnico de referência: [`Parser do Português Puro.md`](./Parser%20do%20Portugu%C3%AAs%20Puro.md)