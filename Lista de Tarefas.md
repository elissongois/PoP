# Lista de Tarefas – Alinhamento entre Parser, Regras e Exemplos

## Visão Geral

Esta lista reúne as melhorias e correções necessárias na documentação de regras (`Regras/`) e no parser da linguagem, para garantir consistência em todo o projeto, especialmente com os arquivos `.pop` de `Algoritmos/`. A gramática e o LSP são implementados de maneira tradicional (parser escrito à mão em `LSP/server/src/`), então o alinhamento é feito entre documentação, parser e exemplos.

---

## ✅ Documentação de Regras (`Regras/`)

- [ ] **Consistência do mapeamento de operadores** – Verifique se as tabelas de operadores em `Operadores.md` correspondem exatamente aos literais reconhecidos pelo parser (por exemplo, `mais`, `menos`, `vezes`, `multiplicado por`). Atualize a documentação ou o parser para resolver as inconsistências.
- [ ] **Completude de `Preposições.md`** – Garanta que todas as preposições usadas nos arquivos `.pop` de `Algoritmos/` (`para`, `em`, `de`, `a`, `com` etc.) estejam listadas em `Preposições.md` e sejam reconhecidas pelo parser.
- [ ] **Alinhamento da documentação de comandos** – As seções de comandos em `Instruções.md` devem refletir as regras realmente aceitas pelo parser (atribuição, retorno, `Pare` etc.). Ajuste a documentação onde houver divergências.
- [ ] **Erros tipográficos** – Revise todos os arquivos markdown de regras em busca de títulos duplicados, tabelas quebradas ou crases de fechamento ausentes.
- [ ] **Consistência das formas verbais** – A documentação lista formas verbais (`Adicione`, `Subtraia`, `Multiplique`, `Divida`) que precisam bater com as formas reconhecidas na análise léxica. Certifique-se de que as listas de verbos sejam exaustivas.
- [ ] **Definições de operadores lógicos** – `Operadores.md` inclui operadores lógicos (`e`, `ou`, `nem`, `não`). Verifique se todas essas formas são reconhecidas e se a insensibilidade a maiúsculas e minúsculas é aplicada.

---

## ✅ Algoritmos de Exemplo (`Algoritmos/`)

- [ ] **Validar sintaxe em relação às regras** – Abra cada arquivo `.pop` (`Agenda Telefônica`, `Basteroides`, `Janela`, `Sudoku`) com a extensão de `LSP/` e registre os erros de análise. Ajuste o parser ou os arquivos conforme o caso.
- [ ] **Auditoria de uso de operadores** – Certifique-se de que cada operador usado nos exemplos (por exemplo, `Adicione`, `Subtraia`, `Multiplique`, `Divida`, `junto com`, `acompanhado de`) seja aceito pelo parser e documentado em `Operadores.md`.
- [ ] **Consistência de preposições** – Verifique se todas as preposições (`para`, `em`, `de`, `a`, `com` etc.) usadas nos algoritmos estão presentes em `Preposições.md` e são reconhecidas pelo parser.
- [ ] **Nomenclatura de comandos** – Alinhe os nomes dos comandos nos algoritmos (`Adicione`, `Acrescente`, `Anteponha`, `Escreva`, `Leia`) com o que o parser e a documentação reconhecem.
- [ ] **Formatação de literais** – Os exemplos usam `texto CRLF` e literais de string com aspas escapadas. Garanta que a análise léxica trate esses padrões ou documente a regra correspondente.

---

## ✅ Documentação em Prosa (`Documentação/` e `GitBook/`)

- [ ] **Duplicação entre o tutorial único e o GitBook** – `Documentação/Documentação Português Puro.md` (~2 900 linhas) contém quase por inteiro 17 páginas publicadas em `GitBook/` (exemplos como Fatorial, Oláh Mundo, 100 Portas, Animação de sprites, Pintando como Claude Monet, Agenda Telefônica, Cofrinho Virtual, Lidando com vazamentos de memória em laços). Nenhuma das duas é exportação exata da outra. Decidir qual vira fonte única e reduzir a outra a um índice de links.
- [ ] **Redundância residual com `Regras/`** – O mesmo tutorial reapresenta regras elementais (tipos, rotinas, controle de fluxo) que já têm capítulo próprio em `Regras/`. Enxugar essas seções em favor de links.

---

## Próximos Passos

1. Priorizar a unificação das definições de operadores entre `Regras/Operadores.md` e o parser.
2. Cobrir no parser as variantes de comando e preposições que faltam (`Acrescente`, `Anteponha` e as preposições de atribuição).
3. Atualizar a documentação de regras para refletir a gramática finalizada.
4. Executar o parser sobre todos os arquivos dos algoritmos de exemplo e corrigir as divergências restantes.
5. Rodar a suíte de testes da extensão (`npm test` em `LSP/`) depois de cada conjunto de mudanças.

---

## Nota sobre o Histórico

Esta lista era originalmente dedicada aos arquivos de gramática do experimento com Langium (`pop.langium` e `PortuguesPuro.langium`), que foram descartados com a decisão de implementar a gramática e o LSP de maneira tradicional. O workspace `Gramática/` permanece no repositório apenas como legado, marcado para exclusão. Os itens foram reescritos para o parser artesanal de `LSP/`.

Havia uma cópia em inglês deste arquivo (`TodoList.md`); ela foi fundida aqui e removida. Esta é a única lista de tarefas pendentes do repositório.
