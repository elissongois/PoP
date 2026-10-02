# Artigos - Revisão

## Resumo do arquivo original
- Descrição detalhada dos artigos em Português Puro:
  - Artigos determinam escopo (global vs local)
  - Categorias: Artigos Definidos (o, a, os, as, este, esta, estes, estas) e Artigos Indefinidos (um, uma, uns,umas + pronomes demonstrativos abrangentes)
  - Exemplos de declaração de variáveis globais e locais
  - Sintaxe para declaração de tipos e variáveis locais
  - Observações sobre escopo, concordância, case-insensitive
  - Contrações (de + artigo, em + artigo)
  - Exemplos completos de declaração globais, locais, tipos e acesso a campos

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa artigos definidos em declarações como `O contador é um número.` e `A mensagem é uma string.`.
- Também usa artigos indefinidos como `Atribua 10 para um contador.` e `Atribua "João" para uma string denominada nome.`.
- Sintaxe está consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a clara distinção entre artigos definidos (escopo global) e indefinidos (local/tipo).
- Confirmar que pronomes demonstrativos abrangentes (esse, aquele, certo, determinado) são tratados como artigos indefinidos.

## Decisões de design para futuro mapeamento Langium
- Mapear `ArtigoDefinido` como `'o' | 'os' | 'a' | 'as' | 'este' | 'esta' | 'estes' | 'estas'`.
- Mapear `ArtigoIndefinido` incluindo formas básicas `'um' | 'uns' | 'uma' | 'umas'` e pronomes abrangentes `'esse' | 'essa' | 'aqueles' | 'esses' | 'certo' | 'certos' | 'determinado' | 'determinados'`.
- Mapear contrações: `ContracaoDeDefinido` (`'do' | 'da' | 'dos' | 'das'`), `ContracaoEmDefinido` (`'no' | 'na' | 'nos' | 'nas'`).
- Mapear contrações com pronomes demonstrativos (`deste`, `destes`, `desse`, `nesses`, etc.).
- Garantir case-insensitive em toda a implementação.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

Atribua 10 para um contador.
Atribua "João" para uma string denominada nome.
```

(Arquivo de revisão criado em `Revisão/Artigos - Revisão.md`)