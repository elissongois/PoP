# Processe - Revisão

## Resumo do arquivo original
- `Processe` é a instrução para chamadas externas (APIs Windows/DLLs)
- **Sintaxe**: `Processe "<dll>" "<função>" com <argumentos> retornando <variável>.`
- **Obrigatório**: Nome da DLL e nome da função entre aspas
- **Opcional**:
  - Argumentos após `com`, separados por `e`
  - Comentários inline `[...]` após argumentos
  - Retorno com `retornando` seguido do parâmetro
- **Chamada indireta**: Sem aspas, a dll e função são expressões
- **Argumento único**: Não usa delimitador `e`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa `Processe` corretamente para APIs Windows
- Usa sintaxe conforme documentação
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que sintaxe de `Processe` seja seguida corretamente
- Validar suporte a chamadas indiretas
- Verificar se comentários inline `[...]` funcionam

## Decisões de design para futuro mapeamento Langium
- `Processe` é palavra-chave para chamadas externas
- DLL e função podem ser literais string ou expressões
- Argumentos separados por `e`
- Retorno é opcional e sempre o último parâmetro

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Chamada simples
Processe "user32.dll" "CloseClipboard".

\ Com retorno
Processe "kernel32.dll" "GetLastError" retornando o status.

\ Com múltiplos argumentos
Processe "gdi32.dll" "CreateFontA" com
  A altura desta fonte vezes 3 dividido por 4 [cHeight] e
  0 [cWidth] e
  0 [cEscapement]
  Retornando o número da fonte.

\ Chamada indireta
Processe o release deste VTable deste istream com o istream.
```

(Arquivo de revisão criado em `Revisão/Processe - Revisão.md`)