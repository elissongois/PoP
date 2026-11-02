# Instruções do repositório — Português Puro

Português Puro é uma linguagem de programação em pt-BR. Mantenha em português os novos caminhos, identificadores, comentários e documentos.

## Arquitetura e fontes de verdade

- `Documentação/` organiza o conteúdo em `Regras/` (normativa), `Guia do Usuário/` (didático), `Referência/` e `Compilador/`; consulte `Documentação/Índice.md` como entrada. Ainda há redundâncias entre documentos.
- `Documentação/GitBook/` é um backup da documentação online. **Não modifique seu conteúdo sem ordem expressa do usuário.**
- `Documentação/Wiki/` contém um repositório desatualizado, reservado para atualização após a revisão da documentação. **Não leia, indexe nem altere seu conteúdo antes dessa revisão e de uma solicitação expressa.**
- `Código/` reúne algoritmos, fontes do compilador, bibliotecas, índices e mensagens de erro; consulte `Código/Índice.md` para navegar.
- `Código/Índices/` contém referências cruzadas para localizar rotinas sem abrir muitos arquivos; consulte-os antes de buscas amplas no código-fonte.
- `Código/Bibliotecas/Padrão/Biblioteca padrão.pop` é a fonte da Biblioteca Padrão. A maioria dos arquivos em `Código/Bibliotecas/Definições/` e `Código/Bibliotecas/Implementações/` são trechos dessa fonte; `Funções Léxicas.pop` é a exceção.
- `IDE/` contém outro repositório com muitos arquivos. **Não leia, indexe nem pesquise seu conteúdo** enquanto o usuário não autorizar expressamente.
- `LSP/` contém a extensão VS Code e o servidor ativo: TypeScript, parser escrito à mão, gramática TextMate e snippets.
- O compilador real é escrito em Português Puro. Não existe compilador Node neste repositório.
- O parser `LSP/server/src/typeParser.ts` oferece análise incremental para recursos do editor; não substitui o compilador.
- Ao resolver divergências, use `Documentação/Regras/` para a semântica pretendida; `LSP/server/src/` para o que o parser aceita atualmente; `Código/Algoritmos/*.pop` para sintaxe real ainda não coberta; `Objetivos.md` para estado e pendências. Verifique a documentação redundante antes de inferir que há uma única versão.
- Prefira manifests, configurações e scripts executáveis a descrições conflitantes em prosa.

## Desenvolvimento e validação

A raiz não tem `package.json`. Execute os comandos do LSP no diretório do pacote:

```bash
cd LSP
npm install
npm run compile
npm run watch
npm run lint
npm test
```

`npm install` executa o postinstall que instala dependências de `client/` e `server/`. `npm test` compila e executa testes E2E do VS Code; eles podem baixar uma instalação de teste para `LSP/.vscode-test/`. Se `node_modules` ou `out/` estiverem ausentes, instale dependências antes de validar.

Abra `LSP/` como workspace do VS Code e use F5 (“Launch Client”) para iniciar o Extension Development Host.

## Limites e armadilhas conhecidas

- O compilador standalone é Windows 32-bit; não há script Node que compile `.pop`. Não presuma que compilação nativa esteja disponível em Linux.
- A configuração `.vscode/tasks.json` da raiz contém caminho Windows hardcoded e não é utilizável como está neste ambiente.
- A documentação em `Documentação/Regras/` ainda pode divergir de `Código/Algoritmos/*.pop`; variantes como `Acrescente`/`Anteponha` e diferenças de preposições são pendências, não as “corrija” por suposição.
- Comentários `.pop`: `\\` inicia comentário de linha e `[...]` delimita comentário de bloco. Comentários TypeScript usam `//`.
- Não há CI nem configuração de pre-commit conhecida. A suíte E2E do LSP fica em `LSP/client/src/test/`, com fixtures em `LSP/client/testFixture/` e exemplos em `LSP/teste/`.

## Manutenção destas instruções

Mantenha este arquivo curto e específico do repositório. Inclua apenas fatos de alto valor que possam ser verificados; prefira apontar para documentação existente em vez de duplicá-la. Ao atualizar, confira primeiro manifests, scripts e código ativo, remova orientações obsoletas e valide referências e comandos.

O estado da extensão e as tarefas do projeto estão reunidos em [`Objetivos.md`](./Objetivos.md).
