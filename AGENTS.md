# AGENTS.md

Repositório do **Português Puro** (linguagem de programação em linguagem natural pt-BR). Caminhos, identificadores, documentação e sintaxe da linguagem são em português — mantenha isso.

## Layout (verificado; árvore do README raiz é aspiracional/desatualizada)

| Caminho | O que realmente é |
|---------|-------------------|
| `Regras/` | Docs de semântica da linguagem — fonte de verdade de como o Português Puro funciona |
| `Gramática/` | **Único código executável.** Workspace npm (ferramentas Langium + extensão VS Code) |
| `Código-Fonte/` | Compilador real: 16 estágios escritos em `.pop` (`00`…`16`) |
| `Implementações/`, `Definições/` | Código de suporte do compilador em `.pop` |
| `Algoritmos/` | Programas de exemplo: Agenda Telefônica, Basteroides, Janela, Sudoku |
| `Mensagens de Erro/` | Guia de mensagens de erro para diagnósticos do compilador |
| `Documentação/`, `Índices/` | Docs em prosa e índices de referência cruzada |

Diretórios como `Bibliotecas/`, `IDE/`, `Extensões/` mencionados no README **não existem** aqui. Compilador/IDE/LSP reais estão em repositórios externos (veja `README.md` raiz).

## Ferramentas — sempre execute a partir de `Gramática/`

Raiz do repositório não tem package.json. Node 20 / npm 10 (Volta fixa `node 20.19.2`, `npm 10.8.2`).

```bash
cd Gramática
npm install
npm run langium:generate   # gramática → src/generated/ + syntaxes/ (gitignored)
npm run build              # tsc -b tsconfig.build.json + builds dos workspaces
npm run langium:watch
npm test                   # vitest apenas em packages/language
```

Teste único (a partir de `Gramática/packages/language`):

```bash
npx vitest run test/parsing.test.ts
```

**Ordem que importa:** após qualquer alteração em arquivo `.langium`, execute `npm run langium:generate` **antes** de `build` ou `test`. Testes importam `../src/generated/ast.js`, e `src/generated/` + `syntaxes/` são gitignored — build/test falham em clone limpo até rodar codegen.

Não existem scripts de lint, formatter ou typecheck standalone. Typechecking só ocorre dentro de `npm run build` (`tsc -b`). Task de build padrão do VS Code é `npm run langium:generate && npm run build` (veja `Gramática/.vscode/tasks.json`).

## Pacote de gramática — ativo vs rascunho

- **Gramática ativa:** `Gramática/packages/language/src/pop.langium` — configurada no `langium-config.json` (language id `pop`, ext `.pop`, `caseInsensitive: true`). Saída do codegen: `packages/language/src/generated/` e `syntaxes/pop.tmLanguage.json`.
- **Rascunho/alternativa:** `Gramática/packages/language/src/PortuguesPuro.langium` — **não usado** pelo langium-cli. Não edite esperando mudanças no build/test.
- Case-insensitivity vem do `langium-config.json`, não de regras do lexer.
- Ambas gramáticas definem regras sobrepostas com divergências (operadores, preposições, nomes de comandos). Lacunas conhecidas estão em `TodoList.md` / `Lista de Tarefas.md` — leia antes de alterar gramática vs docs.
- `saida-node-generate.txt` em `Gramática/` é log salvo de codegen/erros de parse, não config.

Pacote da linguagem exporta nomes `PortuguesPuro*` (`createPortuguesPuroServices`, etc.) embora o arquivo ativo seja `pop.langium`.

## O que NÃO é o compilador

- `packages/cli` e `packages/extension` são **scaffolds do Langium**. CLI `generate` escreve um stub TODO; não trate como compiladores Português Puro.
- Compilador real é `Código-Fonte/*.pop` + `Implementações/` + `Definições/`. Não há script Node neste repo que compile `.pop`.
- `.vscode/tasks.json` raiz tem path Windows hardcoded (`D:\Projetos\...`) e alias `Compile` — não usável como está aqui.
- `packages/language/test-janela.mjs` está quebrado (import path stale, path de exemplo errado `Exemplos/` — exemplos estão em `Algoritmos/`). Não confie nem "corrija" sem checar `Algoritmos/Janela/Janela.pop`.

## Gramática vs exemplos vs docs

A gramática Langium está **incompleta** relative a `Regras/` e `Algoritmos/*.pop` (faltam variantes de comando como `Acrescente`/`Anteponha`, conjuntos de preposições mais estreitos, drift de nomenclatura). Quando docs, gramática e exemplos discordam:

1. `Regras/` para semântica intencional da linguagem
2. `pop.langium` para o que o parser de fato aceita
3. `Algoritmos/*.pop` para sintaxe real que a gramática deve eventualmente suportar
4. `TodoList.md` / `Lista de Tarefas.md` para drift pendente conhecido

Sintaxe de comentários difere por linguagem: `.pop` usa `\\` para linha e `[...]` para bloco; arquivos Langium usam `//`.

## Testes / validação — peculiaridades

- `npm test` roda apenas vitest do `packages/language`.
- Cobertura real hoje: um teste de parsing (`parsing.test.ts`). `linking.test.ts` e `validating.test.ts` são stubs; checks do validador em `pop-validator.ts` estão vazios.
- Sem CI workflows, sem config de pre-commit.
- `node_modules` ou código gerado podem não existir em clone fresco — sempre `npm install` + `langium:generate` primeiro.

## Convenções

- Mantenha português para caminhos, identificadores, comentários e novos docs; siga estilo existente.
- Não invente comandos — apenas os scripts de `Gramática/` acima existem.
- Prefira fontes executáveis (`langium-config.json`, scripts de package) sobre READMEs em prosa quando conflitarem.
- Licença: nenhuma declarada.