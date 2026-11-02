# Objetivos e tarefas — Português Puro

Este é o documento único de acompanhamento de objetivos, estado e tarefas pendentes do projeto. Reúne o conteúdo anteriormente mantido em `Objetivos.md`, `Lista de Tarefas.md`, `Plano de Melhorias do LSP.md` e `LSP - Estado e Próximos Passos.md`.

O foco ativo é o parser artesanal e a extensão/servidor em [`LSP/`](./LSP/). A gramática não usa geradores ou frameworks. O parser do LSP é uma análise incremental para recursos do editor; não substitui o compilador implementado em `.pop`.

## Como acompanhar

- [x] Concluído e confirmado no código/testes atuais.
- [~] Parcial, limitado ou aguardando cobertura/validação adicional.
- [ ] Pendente.

As marcações descrevem o estado observado nos arquivos executáveis e testes, não apenas o histórico de conversas. Ao implementar uma tarefa, atualizar este documento e executar a validação pertinente a partir de [`LSP/`](./LSP/).

## Visão geral do estado

### Objetivos centrais

- [x] Manter a documentação organizada em `Documentação/Regras/`, com entrada em `Documentação/Índice.md`.
- [x] Implementar a análise da linguagem e o LSP de forma tradicional, com parser escrito à mão em TypeScript.
- [~] Ampliar e validar a cobertura do parser em relação às regras normativas e aos programas `.pop` reais.
- [ ] Publicar uma extensão VS Code funcional e estável.
- [ ] Preparar e publicar um pacote npm.
- [ ] Completar a documentação online e os materiais para novos usuários.
- [ ] Incentivar a formação de uma comunidade de desenvolvedores.

### Recursos do editor por recurso LSP

| Recurso | Estado atual |
|---|---|
| Document Symbols | [ ] O servidor não anuncia nem implementa `DocumentSymbolProvider`. |
| Hover | [~] Apresenta palavras-chave, símbolos e informações de rotinas; ampliar conteúdo e testes para todos os símbolos/contextos. |
| Go to Definition | [x] Tipos, campos, variáveis, rotinas e referências compostas nos casos cobertos; acompanha edições e busca arquivos `.pop` irmãos. |
| Go to Type Definition | [x] O handler resolve tipos, variáveis, parâmetros, locais e argumentos; [~] ampliar a cobertura E2E desses contextos. |
| Go to Implementation | [~] Navegação para rotinas implementadas nos casos cobertos; consolidar a seleção por assinatura e compatibilidade de argumentos. |
| Find References | [x] Referências de tipos, variáveis e rotinas nos contextos cobertos, incluindo arquivos irmãos. |
| Rename | [x] Renomeação de tipos, variáveis e rotinas com referências no mesmo arquivo e em arquivos irmãos; pluralização de tipos coberta. |
| Completion | [~] Palavras-chave e símbolos declarados; falta contexto sintático e cobertura completa de parâmetros, locais e campos. |
| Diagnósticos | [~] Vários erros e dicas já são publicados; ainda não cobrem integralmente as regras e construções documentadas. |
| Realce TextMate | [~] Gramática inicial para construções comuns; precisa alinhar-se ao inventário confirmado e ter testes próprios. |
| Snippets | [~] Há snippets para construções comuns; falta testar expansões e ampliar padrões sem sugerir sintaxe inválida. |

## Estado implementado

### Extensão, sincronização e indexação

- [x] Reconhecer arquivos `.pop` com o identificador `portugues-puro`.
- [x] Contribuir o default `files.encoding: windows1252` e testar a configuração do idioma.
- [~] Validar a leitura e a gravação reais de arquivos Windows-1252 em diferentes versões/ambientes do VS Code, preservando acentos.
- [x] Atualizar a análise quando documentos abrem, mudam, são salvos ou fecham.
- [x] Indexar arquivos `.pop` irmãos, inclusive quando não estão abertos; arquivos em pastas pai/subpastas não entram nessa busca atual.
- [x] Manter gramática TextMate e snippets no manifesto da extensão.

### Parser e características reconhecidas

- [x] Manter catálogos separados para tipos, variáveis globais e rotinas.
- [x] Reconhecer nomes compostos, espaços/quebras de linha, insensibilidade a caixa e distinção entre acentos.
- [x] Analisar tipos derivados, formas plurais, escalares, tipos apontadores e referências a tipos-base/apontados.
- [x] Analisar estruturas, campos explícitos/inferidos, apelidos, uniões, referências e arrays anônimos de bytes.
- [x] Analisar variáveis globais explícitas ou inferidas, inicializadores e tipos de estrutura.
- [x] Analisar rotinas/funções, parâmetros e retornos declarados, nomes alternativos, instruções e resolução de chamadas nos casos cobertos.
- [x] Criar variáveis locais por chamadas, inferir seus nomes/tipos, dar prioridade a locais sobre globais e suportar `Preserve`.
- [x] Normalizar formas verbais, preposições e contrações para corresponder chamadas a cabeçalhos equivalentes.
- [x] Analisar atribuições aritméticas da esquerda para a direita e concatenação de strings nos contextos implementados.
- [x] Mascarar comentários para análise sem deslocar os intervalos usados por diagnósticos e navegação.
- [x] Publicar diagnósticos para vários erros de tipos, campos, literais, chamadas, variáveis e instruções.
- [ ] Analisar os blocos condicionais `Se ... , ... .`, com `;` entre Statements, sem `else`/`elseif` nem aninhamento, resolvendo a condição como chamada booleana.

> **Condição dos blocos condicionais:** o histórico registra uma etapa que os considerou implementados, mas o código ativo do parser percorre Statements por ponto e não contém análise de blocos `Se`; os testes E2E atuais também não comprovam o recurso. Portanto, permanece pendente.

### Características da linguagem e documentação

- [x] Documentar características da linguagem, guia sintático e referências técnicas.
- [x] Manter exemplos de programas principais (Agenda Telefônica, Basteroides, Janela e Sudoku).
- [~] Criar tutoriais introdutórios e manter as descrições sincronizadas com as regras e a implementação.

## Pendências priorizadas

### 1. Completar recursos do LSP

- [ ] Implementar `Document Symbols` para tipos, campos, variáveis globais, rotinas, parâmetros e variáveis locais.
- [ ] Completar e testar Hover para palavras reservadas, qualificadores e símbolos; incluir exemplos ou links estáveis para a documentação quando apropriado.
- [ ] Ampliar testes de Go to Type Definition para variáveis globais, parâmetros, variáveis locais e argumentos de chamadas.
- [ ] Aprimorar Go to Implementation: distinguir parâmetros introduzidos por artigo indefinido de argumentos de chamada com artigo definido e selecionar implementações pela compatibilidade/tipo derivado mais específico.
- [ ] Tornar completions sensíveis ao contexto sintático; sugerir parâmetros, variáveis locais e campos quando aplicável.
- [ ] Criar testes específicos para realce TextMate e expansão de snippets, incluindo acentos, plurais, comentários, strings e identificadores compostos.
- [ ] Revisar diagnósticos semânticos com regras normativas e exemplos reais; evitar falsos positivos em construções que o parser ainda não cobre.
- [ ] Decidir se indexação e navegação devem continuar restritas a arquivos irmãos ou incluir pastas do workspace/bibliotecas.

### 2. Completar o inventário e alinhar o parser à linguagem

- [ ] Concluir o inventário normativo de palavras-chave, palavras reservadas, verbos, preposições, conjunções e qualificadores com a documentação oficial.
- [ ] Confirmar as categorias lexicais incompletas e diferenças semânticas de qualificadores; não tratar automaticamente palavras de exemplos/nomenclaturas como reservadas.
- [ ] Comparar operadores de [`Documentação/Regras/Operadores.md`](./Documentação/Regras/Operadores.md) com os literais reconhecidos pelo parser, incluindo operadores aritméticos, lógicos e concatenação.
- [ ] Verificar a completude de [`Documentação/Regras/Preposições.md`](./Documentação/Regras/Preposições.md) contra usos normativos e exemplos `.pop`.
- [ ] Alinhar [`Documentação/Regras/Instruções.md`](./Documentação/Regras/Instruções.md), as formas verbais e a análise executável, incluindo variantes como `Acrescente`, `Anteponha`, `Escreva` e `Leia`.
- [ ] Rever se os literais usados em exemplos (incluindo texto CRLF e strings com aspas duplicadas) estão adequadamente documentados e analisados.
- [ ] Revisar os arquivos de `Documentação/Regras/` em busca de erros tipográficos, títulos duplicados, tabelas quebradas e marcação Markdown inválida.
- [ ] Completar a implementação de blocos condicionais, incluindo argumentos em chamadas booleanas, ausência de aninhamento e diagnósticos apropriados.

O catálogo auxiliar e as lacunas conhecidas estão em [`Inventário do vocabulário documentado.md`](./Documenta%C3%A7%C3%A3o/Invent%C3%A1rio%20do%20vocabul%C3%A1rio%20documentado.md). Ele é uma referência lexical, não um segundo backlog.

### 3. Validar com programas reais

- [ ] Abrir/analisar os programas representativos em `Código/Algoritmos/` (Agenda Telefônica, Basteroides, Janela, Sudoku) e fontes do compilador; registrar falsos positivos e falsos negativos.
- [ ] Auditar operadores e preposições usados nesses programas; corrigir o parser ou esclarecer as regras conforme a fonte normativa.
- [ ] Preservar os recursos de navegação existentes ao ampliar a cobertura de sintaxe e semântica.
- [ ] Executar a suíte E2E da extensão após cada conjunto coerente de mudanças e o lint direcionado.

### 4. Organizar documentação e publicação

- [ ] Decidir como eliminar a duplicação entre [`GitBook Compilado.md`](./Documenta%C3%A7%C3%A3o/Refer%C3%AAncia/GitBook%20Compilado.md) e as páginas de `Documentação/GitBook/`; definir uma fonte principal e transformar a outra em índice/referência.
- [ ] Reduzir redundâncias entre tutoriais e capítulos normativos em `Documentação/Regras/`, favorecendo links para a fonte única.
- [ ] Criar tutoriais para iniciantes e manter a documentação de recursos da extensão atualizada.
- [ ] Documentar instalação, validação, empacotamento e publicação da extensão.
- [ ] Preparar o pacote npm e a documentação online quando a extensão estiver pronta para distribuição.

## Próximos passos sugeridos

1. Fechar o inventário normativo consultando a documentação oficial; usar o inventário auxiliar apenas como mapa de lacunas.
2. Implementar e testar os blocos condicionais, recurso já descrito nas regras, mas não comprovado no parser atual.
3. Implementar `Document Symbols` e ampliar testes dos recursos existentes de navegação, completions e Hover.
4. Auditar os exemplos reais para medir a cobertura do parser, sem alterar regras normativas com base somente em ocorrências nos exemplos.
5. Resolver os itens de consistência documental e publicação.

## Premissas e desafios de implementação

- A sintaxe é linguagem natural: termos estruturais também podem ocorrer em nomes e expressões; identificar uma palavra-chave depende do contexto.
- Identificadores podem ter várias palavras e cruzar quebras de linha; limites de símbolos precisam preservar o texto e os offsets originais.
- Artigos podem introduzir tipos, campos, parâmetros, variáveis locais ou globais, ou referenciar símbolos.
- Plural, gênero, acentos e caixa devem ser tratados sem confundir identificadores semelhantes.
- Cabeçalhos, qualificadores, nomes alternativos e parâmetros têm delimitadores próprios; comentários e strings também podem conter pontuação relevante.
- Escopo de rotinas e variáveis não é definido por chaves convencionais.
- A documentação normativa, exemplos do compilador e subconjunto aceito pelo parser podem divergir; registrar explicitamente limitações e não apresentar hipóteses como regras.
- O compilador real está em `.pop`; o servidor em `LSP/server/src/` oferece recursos incrementais para o editor, não compilação.

## Referências

- [`LSP/README.md`](./LSP/README.md) — desenvolvimento e recursos da extensão.
- [`Documentação/Índice.md`](./Documentação/Índice.md) — entrada da documentação organizada.
- [`Documentação/Regras/`](./Documentação/Regras/) — regras e sintaxe.
- [`Documentação/Regras/Palavras-Chave.md`](./Documentação/Regras/Palavras-Chave.md), [`Documentação/Regras/Qualificadores.md`](./Documentação/Regras/Qualificadores.md), [`Documentação/Regras/Rotinas.md`](./Documentação/Regras/Rotinas.md), [`Documentação/Regras/Artigos.md`](./Documentação/Regras/Artigos.md) e [`Documentação/Regras/Comentários.md`](./Documentação/Regras/Comentários.md).
- Histórico das solicitações originais: arquivo temporariamente arquivado durante a reorganização; verificar sua localização antes de depender dele.
- Documentação oficial: [índice](https://portugues-puro.gitbook.io/documentacao/llms.txt), [Características da linguagem](https://portugues-puro.gitbook.io/documentacao/manual-da-linguagem), [Rotinas, Parâmetros e Funções](https://portugues-puro.gitbook.io/documentacao/rotinas-parametros-e-funcoes), [Laços e Desvios condicionais](https://portugues-puro.gitbook.io/documentacao/lacos-e-desvios-condicionais), [Operadores](https://portugues-puro.gitbook.io/documentacao/operadores), [Comentários](https://portugues-puro.gitbook.io/documentacao/comentarios), [Estruturas e Uniões](https://portugues-puro.gitbook.io/documentacao/tipos-de-dados/estruturas-e-unioes-de-dados) e [Declaração e inicialização de variáveis](https://portugues-puro.gitbook.io/documentacao/declaracao-e-inicializacao-de-variaveis).
