# Conjunções - Revisão

## Resumo do arquivo original
- Conjunções em Português Puro conectam elementos, expressões ou instruções
- 3 conjunções principais: `e` (aditiva), `ou` (alternativa), `nem` (negativa)
- Conjunções inglesas `neither` e `nor` são reconhecidas mas deprecated
- Usos: separação de campos em estruturas, parâmetros em rotinas, argumentos em chamadas
- Vírgula (`,`) e ponto-e-vírgula (`;`) funcionam como conjunções/separadores equivalentes
- `e` também funciona como operador de continuidade em expressões

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa `e` para separar campos em estruturas:
  ```pop
  Uma pessoa é uma estrutura com
    Uma string denominada nome e
    Um número denominado idade.
  ```
- Também usa `e` como separador em chamadas externas:
  ```pop
  Processe "user32.dll" "GetMessageA" com
    0 e
    "Mensagem" e
    "Título" e
    0
    Retornando o resultado.
  ```
- Uso consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a equivalência entre `e`, `ou`, vírgula e ponto-e-vírgula como separadores.
- Confirmar que conjunções inglesas sejam efetivamente deprecated.

## Decisões de design para futuro mapeamento Langium
- Mapear `Conjuncao` como `'e' | 'ou' | 'nem'`.
- Mapear `Separador` como `Conjuncao | ',' | ';'`.
- `e` deve ser reconhecido também como operador de continuidade quando usado em contexto de sequência de comandos.
- Garantir que `ou` seja tratado como alternativa semântica em definições.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Processe "user32.dll" "GetMessageA" com
  0 e
  "Mensagem" e
  "Título" e
  0
  Retornando o resultado.
```

(Arquivo de revisão criado em `Revisão/Conjunções - Revisão.md`)