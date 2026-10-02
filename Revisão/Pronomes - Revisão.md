# Pronomes - Revisão

## Resumo do arquivo original
- Descrição detalhada dos pronomes em Português Puro:
  - Pronomes demonstrativos (Adjacentes e Abrangentes)
  - Classificação por proximidade: Imediata (este, esta, estes, estas), Média (esse, essa, esses, essas), Distante (aquele, aquela, aqueles, aquelas), Indeterminação (certo, certa, certos, certas), Determinação (determinado, determinada, determinados, determinadas)
  - Pronomes possessivos (não amplamente usados na sintaxe principal)
  - Pronomes relativos (que, qual, quais, cujo, cuja, cujos, cujas)
  - Contrações com pronomes demonstrativos
  - Tabela resumo de pronomes demonstrativos
  - Exemplos completos de uso

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa pronomes demonstrativos em declarações como `Este número é um contador.` (artigo definido) e `Atribua 20 para esse número denominado total.` (artigo indefinido).
- Uso consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção clara entre pronomes demonstrativos adjacentes (artigos definidos) e abrangentes (artigos indefinidos).
- Garantir que possessivos sejam tratados como opcionais e não obrigatórios na sintaxe principal.

## Decisões de design para futuro mapeamento Langium
- Mapear `PronomeDemonstrativoAdjacente` como `'este' | 'esta' | 'estes' | 'estas'`.
- Mapear `PronomeDemonstrativoAbrangente` incluindo todas as variações de proximidade e determinação.
- Mapear contrações: `ContracaoDeDemonstrativoAdjacente` (`'deste' | 'desta' | 'destes' | 'destas'`), `ContracaoEmDemonstrativoAdjacente` (`'neste' | 'nesta' | 'nestes' | 'nestas'`).
- Mapear pronomes relativos: `'que' | 'qual' | 'quais' | 'cujo' | 'cuja' | 'cujos' | 'cujas'`.
- Garantir case-insensitive em todos os pronomes.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Pronomes demonstrativos adjacentes (artigos definidos)
Este número é um contador.
Esta string é uma mensagem.
Estes números são uns contadores.
Estas strings são umas mensagens.

\ Pronomes demonstrativos abrangentes (artigos indefinidos)
Atribua 10 para esse número denominado contador.
Atribua "João" para essa string denominada nome.
```

(Arquivo de revisão criado em `Revisão/Pronomes - Revisão.md`)