# AGENTS.md

Repo for **Português Puro** (pt-BR natural-language programming language). Paths, identifiers, docs, and language syntax are Portuguese — preserve that.

## Layout (verified; root README tree is aspirational/stale)

| Path | What it actually is |
|------|---------------------|
| `Regras/` | Language semantics docs — source of truth for how Português Puro works |
| `Gramática/` | **Only runnable code.** npm workspace (Langium tooling + VS Code extension) |
| `Código-Fonte/` | Real compiler: 16 stages written in `.pop` (`00`…`16`) |
| `Implementações/`, `Definições/` | Compiler support code in `.pop` |
| `Algoritmos/` | Example programs: Agenda Telefônica, Basteroides, Janela, Sudoku |
| `Mensagens de Erro/` | Error-message guide for compiler diagnostics |
| `Documentação/`, `Índices/` | Prose docs and cross-reference indexes |

Directories like `Bibliotecas/`, `IDE/`, `Extensões/` mentioned in README do **not** exist here. Real compiler/IDE/LSP are external repos (see root `README.md`).

## Tooling — always run from `Gramática/`

Root of the repo has no package.json. Node 20 / npm 10 (Volta pins `node 20.19.2`, `npm 10.8.2`).

```bash
cd Gramática
npm install
npm run langium:generate   # grammar → src/generated/ + syntaxes/ (gitignored)
npm run build              # tsc -b tsconfig.build.json + workspace builds
npm run langium:watch
npm test                   # vitest in packages/language only
```

Single test (from `Gramática/packages/language`):

```bash
npx vitest run test/parsing.test.ts
```

**Order that matters:** after any change to a `.langium` file, run `npm run langium:generate` **before** `build` or `test`. Tests import `../src/generated/ast.js`, and `src/generated/` + `syntaxes/` are gitignored — build/test fail on a clean clone until codegen runs.

No lint, formatter, or standalone typecheck scripts exist. Typechecking only happens inside `npm run build` (`tsc -b`). VS Code default build task is `npm run langium:generate && npm run build` (see `Gramática/.vscode/tasks.json`).

## Grammar package — active vs draft

- **Active grammar:** `Gramática/packages/language/src/pop.langium` — wired in `langium-config.json` (language id `pop`, ext `.pop`, `caseInsensitive: true`). Codegen output: `packages/language/src/generated/` and `syntaxes/pop.tmLanguage.json`.
- **Draft/alternate:** `Gramática/packages/language/src/PortuguesPuro.langium` — **not used** by langium-cli. Do not edit it expecting build/test changes.
- Case-insensitivity comes from `langium-config.json`, not lexer rules.
- Both grammars define overlapping rules with divergences (operators, prepositions, command names). Known gaps are tracked in `TodoList.md` / `Lista de Tarefas.md` — read them before changing grammar vs docs.
- `said a-node-generate.txt` at `Gramática/` is a saved codegen/parse-error log, not config.

Language package exports `PortuguesPuro*` names (`createPortuguesPuroServices`, etc.) even though the active file is `pop.langium`.

## What is NOT the compiler

- `packages/cli` and `packages/extension` are **Langium scaffolds**. CLI `generate` writes a TODO stub; do not treat them as Português Puro compilers.
- The real compiler is `Código-Fonte/*.pop` + `Implementações/` + `Definições/`. There is no Node script in this repo that compiles `.pop`.
- Root `.vscode/tasks.json` hardcodes a Windows path (`D:\Projetos\...`) and a `Compile` alias — not usable as-is here.
- `packages/language/test-janela.mjs` is broken (stale import path, wrong example path `Exemplos/` — examples live in `Algoritmos/`). Do not trust or "fix" it without checking `Algoritmos/Janela/Janela.pop`.

## Grammar vs examples vs docs

The Langium grammar is **incomplete** relative to `Regras/` and `Algoritmos/*.pop` (missing command variants like `Acrescente`/`Anteponha`, narrower preposition sets, naming drift). When docs, grammar, and examples disagree:

1. `Regras/` for intended language semantics
2. `pop.langium` for what the parser actually accepts
3. `Algoritmos/*.pop` for real-world syntax the grammar must eventually handle
4. `TodoList.md` / `Lista de Tarefas.md` for known outstanding drift

Comment syntax differs by language: `.pop` uses `\\` for line comments and `[...]` for block comments; Langium files use `//`.

## Tests / validation quirks

- `npm test` only runs `packages/language` vitest.
- Real coverage today: one parsing test (`parsing.test.ts`). `linking.test.ts` and `validating.test.ts` are stubs; validator checks in `pop-validator.ts` are empty.
- No CI workflows, no pre-commit config.
- No `node_modules` or generated code may be present on a fresh clone — always `npm install` + `langium:generate` first.

## Conventions

- Keep Portuguese for paths, identifiers, comments, and new docs; match existing style.
- Do not invent commands — only the `Gramática/` scripts above exist.
- Prefer executable sources (`langium-config.json`, package scripts) over prose READMEs when they conflict.
- License: none declared.
