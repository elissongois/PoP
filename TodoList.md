# TODO List – Grammar and Rules Alignment

## Overview

This list captures the identified improvements and corrections needed for the Langium grammar files and the rule documentation to ensure consistency across the project, especially with the `.pop` files in `D:\POP\Algoritmos`.

---

## ✅ Grammar Files (`pop.langium` vs `PortuguesPuro.langium`)

- [ ] **Unify operator definitions** – `OperadorAritmetico`, `OperadorLogico`, `OperadorComparacao` and `OperadorConcatenacao` are defined in both grammars with slight variations (e.g., extra prepositions in `PortuguesPuro`). Consolidate them into a shared definition or ensure both grammars expose the same set of literals.
- [ ] **Preposicao handling** – `pop.langium` defines `Preposicao` as `PreposicaoSemA | 'a'`. `PortuguesPuro` only uses `PreposicaoSemA`. Add `'a'` to the latter or adjust the lexer to accept both forms.
- [ ] **Interface naming consistency** – `ComandoRetorno` (pop) vs `ComandoDeRetorno` (PortuguesPuro) and `ComandoPare` vs `ComandoDeParada`. Align the names or provide aliases to avoid duplicate rule definitions.
- [ ] **Command syntax divergence** – `pop.langium` uses `ComandoAtribuicao` with prepositions `para`, `a`, `ao`. `PortuguesPuro` restricts to `para`/`em`. Extend `PortuguesPuro` to accept all prepositions used in the examples.
- [ ] **Missing command variants** – `Acrescente` / `Anteponha` (concatenation commands) exist in the rule docs but are absent in `PortuguesPuro.langium`. Add `ComandoAcrescentar` and `ComandoAntepor` equivalents.
- [ ] **Duplicate `ArtigoDefinido` entries** – `PortuguesPuro.langium` repeats the same line (lines 248‑251). Remove the duplicate to keep the grammar clean.
- [ ] **Variable declaration syntax** – `DeclaracaoGlobal` in `PortuguesPuro` allows two alternative forms with `|`. Ensure both forms are reflected in the parser and that the examples in the Algoritmos folder use the supported syntax.
- [ ] **Case‑insensitivity** – The grammars currently rely on literal strings. Add a lexer rule or transformer to make all keywords case‑insensitive, matching the rule documentation.
- [ ] **Literal handling for `texto CRLF`** – Several `.pop` files concatenate `texto CRLF`. Define a terminal or helper rule to recognize `texto CRLF` as a string literal with line‑break handling.
- [ ] **PreposicaoAtribuicao variations** – The rule docs list many prepositions (`para`, `ao`, `à`, `às`, `em`, `na`, `no`, etc.). Extend `PreposicaoAtribuicao` in both grammars to include the full list.

---

## ✅ Rule Documentation (`D:\POP\Regras`)

- [ ] **Operator mapping consistency** – Verify that the operator tables in `Operadores.md` exactly match the literals defined in the grammars (e.g., `mais`, `menos`, `vezes`, `multiplicado por`). Update either the docs or the grammar to resolve mismatches.
- [ ] **Preposicoes.md completeness** – Ensure all prepositions used in the Algoritmos `.pop` files (`para`, `em`, `de`, `a`, `com`, etc.) are listed in `Preposicoes.md` and mapped to the appropriate Langium rule.
- [ ] **Command documentation alignment** – The command sections in `Instruções.md` and `Comandos.md` should reflect the actual grammar rules (`ComandoAtribuicao`, `ComandoRetorno`, `ComandoPare`, etc.). Adjust the docs where they diverge.
- [ ] **Typographical errors** – Scan all rule markdown files for duplicated headings, broken tables, or missing closing backticks that could cause confusion when generating documentation.
- [ ] **Consistency of verb forms** – The docs list verb forms (`Adicione`, `Subtraia`, `Multiplique`, `Divida`) while the grammar uses `Adicione`/`Subtraia` etc. Ensure the verb lists are exhaustive and match the lexer definitions.
- [ ] **Logical operator definitions** – `Operadores.md` includes logical operators (`e`, `ou`, `nem`, `não`). Verify that `OperadorLogico` in the grammars includes all these forms and that case‑insensitivity is applied.

---

## ✅ Algoritmos Subfolders (`D:\POP\Algoritmos`)

- [ ] **Validate syntax against grammar** – Run the Langium parser on each `.pop` file (`Agenda Telefônica.pop`, `Basteroides.pop`, `Janela.pop`, `Sudoku.pop`) and record any parsing errors. Update the grammars or the files accordingly.
- [ ] **Operator usage audit** – Ensure every operator used in the examples (e.g., `Adicione`, `Subtraia`, `Multiplique`, `Divida`, `junto com`, `acompanhado de`) is defined in the grammar and documented in `Operadores.md`.
- [ ] **Preposition consistency** – Check that all prepositions (`para`, `em`, `de`, `a`, `com`, etc.) used in the algorithms are present in `Preposicoes.md` and the grammar.
- [ ] **Command naming** – Align command names in the algorithms (`Adicione`, `Acrescente`, `Anteponha`, `Escreva`, `Leia`) with the interface names in the grammars.
- [ ] **Literal formatting** – The examples use `texto CRLF` and string literals with escaped quotes. Ensure the lexer can handle these patterns or add explicit rules.

---

## Next Steps

1. Prioritize unifying the operator definitions across both grammar files.
2. Extend `PortuguesPuro.langium` with missing command variants and preposition options.
3. Update the rule documentation to reflect the finalized grammar.
4. Run the parser against all algorithm files and fix any remaining mismatches.
5. Regenerate the Langium parser (`npm run langium:generate`) and verify the build passes.

---

*Generated by Antigravity – your AI coding assistant.*
