# Variáveis Globais - Revisão

## Resumo do arquivo original
- Declaração de variáveis globais em Português Puro:
  - **Sintaxe**: `<Artigo_Definido> <nome> <é|são> <Artigo_Indefinido> <tipo> [igual a <valor>].`
  - **Artigos definidos**: `O`, `A`, `Os`, `As` (indicam variável global)
  - **Artigos indefinidos**: `um`, `uma`, `uns`, `umas` (indicam tipo)
  - **Inicialização**: Opcional com `igual a` ou `iguais a`
  - **Comentários inline**: Entre `[...]` após o nome ou valor
  - **Abreviações**: Entre colchetes para siglas (ex: `[SOH]`, `[NULL]`)
- Nomes podem conter símbolos especiais (`#`, `/`, `-`, `_`, `&`)
- Aspas simples delimitam palavras reservadas (ex: `'A'`, `'um'`)
- Pluralização automática pelo compilador
- Estruturas inline podem ser definidas diretamente

## Divergências encontradas vs Algoritmo Janela
- O algoritmo declara variáveis globais como:
  ```pop
  O contador é um número.
  A mensagem é uma string.
  Os totais são uns números.
  As cores são umas cores.
  ```
- Também usa inicialização com `igual a`:
  ```pop
  O número pi é uma fração igual a 355/113.
  ```
- Uso consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção entre artigos definidos (globais) e indefinidos (tipos).
- Garantir que abreviações entre colchetes sejam reconhecidas.

## Decisões de design para futuro mapeamento Langium
- Mapear `DeclaracaoGlobal` com artigo definido, nome, `é`/`são`, tipo e inicialização opcional.
- Implementar terminal `IDVariavel` que permita símbolos especiais.
- Abreviações entre `[...]` devem ser opcionais.
- `é`/`são` e `igual`/`iguais` devem ter variações singular/plural.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

O número pi é uma fração igual a 355/113.
O caractere NULL [NULL] é um byte igual a 0.
```

(Arquivo de revisão criado em `Revisão/Variáveis Globais - Revisão.md`)