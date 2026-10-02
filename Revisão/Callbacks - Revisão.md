# Callbacks - Revisão

## Resumo do arquivo original
- Callbacks são ponteiros para rotinas passados como parâmetros para APIs externas
- **Uso**: Eventos do Windows, enumeração, notificações, hooks
- **Sintaxe**:
  1. Declarar rotina com `compativelmente`: `Rotina para que se compativelmente <nome>:`
  2. Obter ponteiro: `Aponte <ponteiro> para a rotina <nome>.`
  3. Passar para API: `Processe "<dll>" "<função>" com <parâmetros> e <ponteiro>`
- **Modificador `compativelmente`**: Garante convenção de chamada `stdcall` (Windows)
- **Convenção de chamada**: Windows usa `stdcall`; Português Puro usa `cdecl` por padrão
- **Parâmetros**: Passados na pilha, acessados via `[ebp+offset]`
- **Retorno**: Via registrador `eax`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa callbacks conforme documentação
- Usa `Rotina para que se compativelmente` corretamente
- Usa `Aponte` para obter ponteiros
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que `compativelmente` seja usado corretamente
- Validar sintaxe de `Aponte`
- Verificar se parâmetros são acessados corretamente

## Decisões de design para futuro mapeamento Langium
- `compativelmente` é modificador opcional em declarações de rotina
- `Aponte` é comando específico para callbacks
- Callbacks são rotinas com convenção de chamada especial
- Parâmetros são passados automaticamente pela API

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Callback de procedimento de janela
Rotina para que se compativelmente manipule um evento:
  \ Parâmetros passados pelo Windows
  \ Processa mensagens...
  Decodifique $C3. \ ret

\ Obter ponteiro
Aponte um ponteiro de procedimento para a rotina manipule um evento.

\ Usar em API
Processe "user32.dll" "SetWindowsHookExA" com
  o tipo de hook e
  o ponteiro e
  0 e
  0
Retornando o handle do hook.
```

(Arquivo de revisão criado em `Revisão/Callbacks - Revisão.md`)