# Preposições - Revisão

## Resumo do arquivo original
- Lista extensa de preposições em Português Puro (~120+ preposições em 16 categorias)
- Categorias: Conectivas (a, de, para, em, com, por), Posição (acima, abaixo, sob, etc.), Temporais (antes, depois, após, etc.), Modo (como, segundo, mediante, etc.), Compostas (a partir de, dentro de, etc.), Relação (referente, pertencente, etc.), Orientação (aproado, orientado, etc.), Comparação (tal, como, etc.), Restrição (sem, só, somente, etc.), Especiais (ante, perante, etc.), Dimensão (alta, alto, etc.), Resultado (gerando, resultando, etc.), Início (começando, iniciando, etc.), Pronominais (cujo, cuja, etc.)
- Uso em expressões e contrações com artigos
- Observações sobre duplicações e preposições comentadas

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa preposições como `para` (em `Atribua 10 para um número`), `com` (em `Processe "user32.dll" "GetMessageA" com`), `de` (em `o nome de João`), `em` (em `em branco`).
- Não há uso de preposições de posição, temporais, modo, etc. no algoritmo.
- Preposições conectivas (a, de, para, em, com, por) são consistentes com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a categorização clara das preposições.
- Garantir que preposições compostas (a partir de, dentro de, etc.) sejam reconhecidas como unidade única.

## Decisões de design para futuro mapeamento Langium
- Mapear `Preposicao` com todas as categorias listadas.
- Preposições compostas devem ser tratadas como sequências de palavras que formam uma unidade léxica.
- Contrações com artigos (do, da, no, na, etc.) devem ser mapeadas como tokens separados ou como regras composicionais.
- Preposições pronominais (cujo, cuja, etc.) devem ser consideradas como parte do sistema de pronomes.
- Garantir case-insensitive para todas as preposições.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Atribua 10 para um contador.
Processe "user32.dll" "GetMessageA" com 0 Retornando um número.
```

(Arquivo de revisão criado em `Revisão/Preposições - Revisão.md`)