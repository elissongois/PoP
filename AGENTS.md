# AGENTS.md

Repositório do **Português Puro** (linguagem de programação em linguagem natural pt-BR). Caminhos, identificadores, documentação e sintaxe da linguagem são em português — mantenha isso.

**Decisão de arquitetura:** a gramática da linguagem e o LSP são implementados de maneira **tradicional** — regras documentadas em prosa/notação própria e parser escrito à mão. Não use nem reintroduza geradores de parser ou frameworks de engenharia de linguagens. As seções de "Mapeamento para Langium" foram removidas dos docs, e a documentação de regras e sintaxe está **reunida num único lugar: `Regras/`** (os antigos capítulos numerados de `Sintaxe/` e as notas duplicadas de `Final/` foram fundidos ali).

## Layout (verificado; árvore do README raiz era aspiracional)

| Caminho | O que realmente é |
|---------|-------------------|
| `Regras/` | **Documentação única de regras e sintaxe** — fonte de verdade de como o Português Puro funciona. Índice de capítulos em `Índice da Documentação.md` |
| `LSP/` | **Código executável do servidor de linguagem.** Extensão VS Code em TypeScript, parser à mão, gramática TextMate e snippets |
| `Código-Fonte/` | Compilador real: 16 estágios escritos em `.pop` (`00`…`16`) |
| `Implementações/`, `Definições/` | Código de suporte do compilador em `.pop` |
| `Algoritmos/` | Programas de exemplo: Agenda Telefônica, Basteroides, Janela, Sudoku |
| `Mensagens de Erro/` | Guia de mensagens de erro para diagnósticos do compilador |
| `Documentação/`, `Índices/` | Docs em prosa — um assunto por arquivo (características, guia sintático, FAQ, notas do compilador, palavras-chave) e índices de referência cruzada |
| `Revisão/`, `Linguagem/`, `GitBook/` | Revisão das regras (um arquivo por capítulo de `Regras/`), guia de usuário em módulos e documentação publicada |
| `Final/` | Apenas `Elender.md`; as notas de comentários, tipos e qualificadores que estavam aqui foram fundidas em `Regras/` |
| `Gramática/` | **Legado marcado para exclusão.** Workspace npm do experimento com Langium; não é a implementação escolhida |

Diretórios como `Bibliotecas/`, `IDE/`, `Extensões/` não existem aqui. Compilador e IDE dedicadas também vivem em repositórios externos (veja `README.md` raiz). A pasta `Sintaxe/` ainda existe, mas vazia de documentação (sobrou apenas um `Teste.pop`); os capítulos que ela tinha foram movidos para `Regras/`.

## Ferramentas — sempre execute a partir do diretório do pacote

Raiz do repositório não tem package.json. Node 20 / npm 10 (Volta fixa `node 20.19.2`, `npm 10.8.2`).

Extensão e servidor de linguagem (o trabalho ativo):

```bash
cd LSP
npm install      # postinstall instala client/ e server/
npm run compile  # tsc -b
npm run watch    # tsc -b -w
npm run lint     # eslint
npm test         # compila e roda os testes fim a fim do VS Code
```

Abra `LSP/` como workspace do VS Code (não a pasta pai) e use F5 ("Launch Client") para o Extension Development Host. Os testes fim a fim baixam um VS Code em `LSP/.vscode-test/` (gitignored).

O workspace legado `Gramática/` ainda compila e tem scripts próprios (`npm run langium:generate`, `npm run build`, `npm test` com vitest). **Não** estenda esse pacote: ele está marcado para exclusão. Se precisar mexer ali por causa de remoção, não presuma que ele reflete as regras da linguagem.

## O que NÃO é o compilador

- Compilador real é `Código-Fonte/*.pop` + `Implementações/` + `Definições/`. Não há script Node neste repo que compile `.pop`.
- O parser em `LSP/server/src/typeParser.ts` **não** substitui o compilador: é análise incremental para recursos de editor (navegação, diagnósticos, sugestões).
- `Gramática/packages/cli` e `Gramática/packages/extension` são scaffolds do experimento; a CLI `generate` escreve stub TODO.
- `.vscode/tasks.json` raiz tem path Windows hardcoded (`D:\Projetos\...`) e alias `Compile` — não usável como está aqui.
- `Gramática/packages/language/test-janela.mjs` está quebrado (import path stale, path de exemplo errado `Exemplos/` — exemplos estão em `Algoritmos/`). Não confie nem "corrija" sem checar `Algoritmos/Janela/Janela.pop`.

## Gramática vs exemplos vs docs

A documentação está **incompleta** em relação a `Algoritmos/*.pop` (faltam variantes de comando como `Acrescente`/`Anteponha`, conjuntos de preposições mais estreitos, drift de nomenclatura). Quando docs, parser e exemplos discordam:

1. `Regras/` para semântica intencional da linguagem
2. `LSP/server/src/` para o que o parser de fato aceita hoje
3. `Algoritmos/*.pop` para sintaxe real que a gramática deve eventualmente suportar
4. `Lista de Tarefas.md` para drift pendente conhecido, e `LSP - Estado e Próximos Passos.md` para o estado da extensão

Sintaxe de comentários difere por linguagem: `.pop` usa `\\` para linha e `[...]` para bloco; TypeScript do LSP usa `//`.

## Testes / validação — peculiaridades

- Não existe CI nem config de pre-commit.
- Cobertura do LSP: testes fim a fim do VS Code em `LSP/client/src/test/` (executados por `npm test` em `LSP/`), com fixtures em `LSP/client/testFixture/` e arquivos reais de exemplo em `LSP/teste/`.
- `npm test` em `Gramática/` roda apenas vitest do `packages/language`; `linking.test.ts` e `validating.test.ts` são stubs.
- `node_modules` e `out/` podem não existir em clone fresco — sempre `npm install` primeiro.

## Convenções

- Mantenha português para caminhos, identificadores, comentários e novos docs; siga estilo existente.
- Não invente comandos — apenas os scripts de `LSP/` e do legado `Gramática/` acima existem.
- Prefira fontes executáveis (`package.json`, `LSP/package.json` e seu `contributes`) sobre READMEs em prosa quando conflitarem.
- Licença: nenhuma declarada no repo principal (`LSP/package.json` declara MIT).
