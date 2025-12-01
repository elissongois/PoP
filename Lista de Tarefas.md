# Lista de Tarefas – Alinhamento de Gramática e Regras

## Visão Geral

Esta lista reúne as melhorias e correções necessárias para os arquivos de gramática do Langium e a documentação de regras, a fim de garantir consistência em todo o projeto, especialmente com os arquivos `.pop` em `D:\POP\Algoritmos`.

---

## ✅ Arquivos de Gramática (`pop.langium` vs `PortuguesPuro.langium`)

- [ ] **Unificar definições de operadores** – `OperadorAritmetico`, `OperadorLogico`, `OperadorComparacao` e `OperadorConcatenacao` são definidos em ambas as gramáticas com pequenas variações (por exemplo, preposições extras em `PortuguesPuro`). Consolidá-los em uma definição compartilhada ou garantir que ambas as gramáticas exponham o mesmo conjunto de literais.

- [ ] **Tratamento de Preposição** – `pop.langium` define `Preposição` como `PreposiçãoSemA | 'a'`. `PortuguesPuro` usa apenas `PreposicaoSemA`. Adicione `'a'` a este último ou ajuste o analisador léxico para aceitar ambas as formas.
- [ ] **Consistência na nomenclatura da interface** – `ComandoRetorno` (pop) vs `ComandoDeRetorno` (PortuguesPuro) e `ComandoPare` vs `ComandoDeParada`. Alinhe os nomes ou forneça aliases para evitar definições de regras duplicadas.
- [ ] **Divergência na sintaxe dos comandos** – `pop.langium` usa `ComandoAtribuicao` com as preposições `para`, `a`, `ao`. `PortuguesPuro` restringe-se a `para`/`em`. Estenda `PortuguesPuro` para aceitar todas as preposições usadas nos exemplos.
- [ ] **Variantes de comando ausentes** – `Acrescente` / `Anteponha` (comandos de concatenação) existem na documentação das regras, mas estão ausentes em `PortuguesPuro.langium`. Adicione os equivalentes `ComandoAcrescentar` e `ComandoAntepor`.
- [x] **Entradas duplicadas de `ArtigoDefinido`** – `PortuguesPuro.langium` repete a mesma linha (linhas 248-251). Remova a duplicata para manter a gramática limpa.
- [ ] **Sintaxe de declaração de variáveis** – `DeclaracaoGlobal` em `PortuguesPuro` permite duas formas alternativas com `|`. Certifique-se de que ambas as formas sejam refletidas no analisador sintático e que os exemplos na pasta Algoritmos usem a sintaxe suportada.
- [x] **Insensibilidade a maiúsculas e minúsculas** – As gramáticas atualmente dependem de strings literais. Adicione uma regra ou transformador do analisador léxico para tornar todas as palavras-chave insensíveis a maiúsculas e minúsculas, conforme a documentação da regra.
- [-] **Tratamento de literais para `texto CRLF`** – Vários arquivos `.pop` concatenam `texto CRLF`. Defina uma regra terminal ou auxiliar para reconhecer `texto CRLF` como um literal de string com tratamento de quebra de linha.
- [ ] **Variações de PreposicaoAtribuicao** – A documentação da regra lista muitas preposições (`para`, `ao`, `à`, `às`, `em`, `na`, `no`, etc.). Estenda `PreposicaoAtribuicao` em ambas as gramáticas para incluir a lista completa.

---

## ✅ Documentação de Regras (`D:\POP\Regras`)

- [ ] **Consistência do mapeamento de operadores** – Verifique se as tabelas de operadores em `Operadores.md` correspondem exatamente aos literais definidos nas gramáticas (por exemplo, `mais`, `menos`, `vezes`, `multiplicado por`). Atualize a documentação ou a gramática para resolver as inconsistências.

- [ ] **Completude de Preposicoes.md** – Garanta que todas as preposições usadas nos arquivos `.pop` do Algoritmos (`para`, `em`, `de`, `a`, `com`, etc.) estejam listadas em `Preposicoes.md` e mapeadas para a regra Langium apropriada.

- [ ] **Alinhamento da documentação de comandos** – As seções de comandos em `Instruções.md` e `Comandos.md` devem refletir as regras gramaticais reais (`ComandoAtribuição`, `ComandoRetorno`, `ComandoPare`, etc.). Ajuste a documentação onde houver divergências.
- [ ] **Erros tipográficos** – Verifique todos os arquivos markdown de regras em busca de títulos duplicados, tabelas quebradas ou crases de fechamento ausentes que possam causar confusão ao gerar a documentação.
- [ ] **Consistência das formas verbais** – A documentação lista formas verbais (`Adicione`, `Subtraia`, `Multiplique`, `Divida`), enquanto a gramática usa `Adicione`/`Subtraia`, etc. Certifique-se de que as listas de verbos sejam exaustivas e correspondam às definições do analisador léxico.
- [ ] **Definições de operadores lógicos** – `Operadores.md` inclui operadores lógicos (`e`, `ou`, `nem`, `não`). Verifique se `OperadorLogico` nas gramáticas inclui todas essas formas e se a distinção entre maiúsculas e minúsculas é aplicada.

---

## ✅ Subpastas de Algoritmos (`D:\POP\Algoritmos`)

- [ ] **Validar sintaxe em relação à gramática** – Execute o analisador sintático Langium em cada arquivo `.pop` (`Agenda Telefônica.pop`, `Basteroides.pop`, `Janela.pop`, `Sudoku.pop`) e registre quaisquer erros de análise. Atualize as gramáticas ou os arquivos de acordo.

- [ ] **Auditoria de uso de operadores** – Certifique-se de que cada operador usado nos exemplos (por exemplo, `Adicione`, `Subtraia`, `Multiplique`, `Divida`, `junto com`, `acompanhado de`) esteja definido na gramática e documentado em `Operadores.md`.

- [ ] **Consistência de preposições** – Verifique se todas as preposições (`para`, `em`, `de`, `a`, `com`, etc.) usadas nos algoritmos estão presentes em `Preposicoes.md` e na gramática.
- [ ] **Nomenclatura de comandos** – Alinhe os nomes dos comandos nos algoritmos (`Adicione`, `Acrescente`, `Anteponha`, `Escrever`, `Leia`) com os nomes das interfaces nas gramáticas.
- [ ] **Formatação de literais** – Os exemplos usam `texto CRLF` e literais de string com aspas escapadas. Certifique-se de que o analisador léxico possa lidar com esses padrões ou adicione regras explícitas.

---

## Próximos passos

1. Priorizar a unificação das operações
