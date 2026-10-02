# Advérbios - Revisão

## Resumo do arquivo original
- Advérbios em Português Puro modificam verbos, expressões e comandos
- Duas categorias principais:
  - **Advérbios de Negação**: `não` (inverte comparações e condições)
  - **Advérbios Ignoráveis**: `já`, `ainda` (podem ser omitidos sem alterar significado)
- Uso em expressões condicionais, funções deliberativas, combinação com conjunções
- Observações sobre posição, case-insensitivity, e boas práticas

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa advérbios de negação `não` em comparações como `Se o número for 0, pare.`
- Não há uso de advérbios ignoráveis (`já`, `ainda`) no algoritmo.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção clara entre advérbios de negação (afetam lógica) e ignoráveis (não afetam lógica).

## Decisões de design para futuro mapeamento Langium
- Mapear `Adverbio` como `AdverbioNegacao | AdverbioIgnoravel`.
- `AdverbioNegacao`: `'não'`.
- `AdverbioIgnoravel`: `'já' | 'ainda'`.
- `não` deve preceder o verbo em expressões condicionais.
- Advérbios ignoráveis devem ser removidos durante a compilação.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Se o número for 0, pare.
```

(Arquivo de revisão criado em `Revisão/Advérbios - Revisão.md`)