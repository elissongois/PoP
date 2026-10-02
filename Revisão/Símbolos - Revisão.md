# Símbolos - Revisão

## Resumo do arquivo original
- Lista completa de caracteres permitidos, reservados, limitados e não permitidos em nomes de variáveis e literais.
- Tabelas detalhadas com ANSI e Unicode.

## Divergências encontradas vs Algoritmo Janela
- O algoritmo utiliza o caractere **\u0026** em strings de menu (ex.: `"&Ajuda"`).
- `&` está listado como **permitido** em "Caracteres permitidos" e não aparece na lista de "Caracteres reservados". Consistente.
- Não há uso de símbolos marcados como "não permitidos" (`!`, `*`, `?`, `{`, `}` etc.) no exemplo.

## Correções / Ajustes propostos
- Nenhuma correção necessária para este arquivo.
- Manter a separação clara entre "permitidos" e "reservados".
- Poderia adicionar nota explicativa de que o `&` em strings de menu funciona como marcador de atalho e não interfere na semântica de variáveis.

## Decisões de design para futuro mapeamento Langium
- Quando gerar a gramática, garantir que `&` seja reconhecido como parte de literais de string e não como identificador.
- Confirmar que os símbolos listados como "não permitidos" sejam rejeitados pelo lexer.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O &Ajuda é uma string.
```
