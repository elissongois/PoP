# Tipos - Revisão

## Resumo do arquivo original
- Definição de tipos em Português Puro:
  - Sintaxe: `<artigo indefinido> <nome> <é|são> <definição>.`
  - **Tipos primitivos**: `byte` (8 bits) e `estrutura` (composto)
  - **Tipos derivados**: Definidos a partir de tipos base (primitivos ou derivados)
  - **Estruturas**: `uma estrutura com <campos>.`
  - **Ponteiros**: `um ponteiro [que aponta] para <tipo>.`
  - **Tipos escalares**: Unidades de medida com razão de conversão (`Um pixel são 15 twips.`)
  - **Listas**: `uma lista com <campos>.`
- Pluralização automática pelo compilador
- Conversão de tipos (casting) com `like` e `as`
- Hierarquia de tipos e herança de campos

## Divergências encontradas vs Algoritmo Janela
- O algoritmo define tipos como `O contador é um número.` e `A mensagem é uma string.`
- Também define estruturas como `Uma pessoa é uma estrutura com...`
- Uso consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a hierarquia de tipos (primitivos → derivados → derivados de derivados).
- Garantir que pluralização automática funcione corretamente.

## Decisões de design para futuro mapeamento Langium
- Mapear `DeclaracaoTipo` com artigo indefinido, nome, `é`/`são` e definição.
- Mapear `DefinicaoTipo` como `DefinicaoEstrutura | DefinicaoLista | DefinicaoPonteiro | TipoEscalar | TipoBase`.
- Implementar terminal `IDTipo` que permita símbolos especiais (`#`, `/`, `-`, `_`, `'`).
- Garantir que campos estruturados suportem `denominado`, `(referência)` e `sob`.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O contador é um número.
A mensagem é uma string.

Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Um pixel são 15 twips.
```

(Arquivo de revisão criado em `Revisão/Tipos - Revisão.md`)