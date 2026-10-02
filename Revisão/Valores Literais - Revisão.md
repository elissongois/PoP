# Valores Literais - Revisão

## Resumo do arquivo original
- Lista de categorias de valores literais em Português Puro:
  - Números inteiros (positivos e negativos)
  - Frações (numerador/denominador)
  - Strings (aspas duplas, escape com `""`)
  - Hexadecimais (prefixo `$`)
  - Booleanos (`sim`, `não`)
  - Valores especiais (`inexistente`)

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa valores literais como `0`, `10`, `255`, `-1`, `"Olá, Mundo!"`, `$0D0A`, `sim`, `não`, `inexistente`.
- Todos os tipos de literais são suportados e usados no exemplo.
- Não há divergências significativas encontradas.

## Correções / Ajustes propostos
- Nenhuma correção necessária para este arquivo.
- Garantir que o compilador reconheça os tipos de literais conforme a documentação.
- Manter a documentação de escape de aspas (`""`) clara.
- Confirmar que valores especiais como `inexistente` sejam tratados como ponteiros nulos.

## Decisões de design para futuro mapeamento Langium
- Mapear `NumeroInteiro`, `Fracao`, `String`, `Hexadecimal`, `Booleano`, `ValorEspecial` no lexer.
- Garantir que `sinal` para números inteiros seja opcional (`'-'`).
- Definir `digitos` como sequência de caracteres numéricos.
- Definir `StringConteudo` para aceitar `CaractereNormal` e `""` (aspas escapadas).
- Definir `Hexadecimal` com prefixo `$` e dígitos `0-9A-Fa-f`.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Atribua 0 para o contador.
Atribua 10 para o número.
Atribua 255 para o byte.
Atribua 2147483647 para o máximo.
Atribua -1 para o resultado.
Atribua -10 para a diferença.
Atribua 1/2 para a metade.
Atribua 3/4 para três quartos.
Atribua 2/3 para dois terços.
```

(Arquivo de revisão criado em `Revisão/Valores Literais - Revisão.md`)