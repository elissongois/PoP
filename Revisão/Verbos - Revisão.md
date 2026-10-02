# Verbos - Revisão

## Resumo do arquivo original
- Verbos em Português Puro são palavras-chave usadas em expressões condicionais e cabeçalhos de funções/rotinas
- ~70 verbos em 11 grupos principais, com ~20 formas canônicas
- Normalização automática: `for`, `foi`, `foram`, `forem`, `será`, `serão`, `ser` → `é`; `estiver`, `estiverem`, `estava`, `estavam` → `está`; `tiver`, `têm` → `tem`; `puder`, `puderem`, `poderia` → `pode`
- Grupos: Ser/Estar, Ter/Haver, Conter, Possuir, Poder, Dever, Existir, Caber, Começar/Iniciar, Finalizar/Terminar, Outros Verbos
- Uso em expressões condicionais (`Se`), funções deliberativas (`Função para que se determine se`), cabeçalhos de rotinas

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa verbos como `é` (em `O contador é um número`), `for` (em `Se o número for 0, pare`), `tem` (em `Se a lista tem elementos, retorne`).
- Verbos são consistentes com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a normalização automática de verbos para formas canônicas.
- Garantir que `ser` e `estar` sejam tratados como equivalentes.

## Decisões de design para futuro mapeamento Langium
- Mapear `Verbo` como união de todos os grupos de verbos.
- Implementar normalização automática para formas canônicas (`é`, `está`, `tem`, `pode`, etc.).
- Verbos flexionam em número (singular/plural) e tempo verbal, mas são normalizados.
- Case-insensitive para todos os verbos.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O contador é um número.
A mensagem é uma string.
Se o número for 0, pare.
Se a lista tem elementos, retorne.
```

(Arquivo de revisão criado em `Revisão/Verbos - Revisão.md`)