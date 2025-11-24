# Callbacks - Português Puro

## Visão Geral

Callbacks em Português Puro são **ponteiros para rotinas** que podem ser passados como parâmetros para funções externas (APIs do Windows, DLLs). Eles permitem que código externo "chame de volta" (callback) rotinas definidas no programa.

---

## Função dos Callbacks

### Uso Principal

Callbacks são usados para:

1. **Eventos do Windows**: Manipular mensagens de janelas, botões, menus
2. **Enumeração**: Processar cada item de uma lista (arquivos, janelas, etc.)
3. **Notificações**: Receber avisos de eventos assíncronos
4. **Hooks**: Interceptar eventos do sistema

---

## Sintaxe

### 1. Declarar Rotina Compatível

Use o modificador `compativelmente` para rotinas que serão chamadas pelo Windows:

```pop
Rotina para que se compativelmente <nome da rotina>:
  \\ Implementação...
```

### 2. Obter Ponteiro para a Rotina

Use `Aponte` para obter o endereço da rotina:

```pop
Aponte <variável ponteiro> para a rotina <nome da rotina>.
```

### 3. Passar para API Externa

Passe o ponteiro como parâmetro em `Processe`:

```pop
Processe "<dll>" "<função>" com
  <parâmetros> e
  <ponteiro callback>
  Retornando <resultado>.
```

---

## Modificador `compativelmente`

### Função

O modificador `compativelmente` garante que a rotina use a **convenção de chamada correta** (stdcall) esperada pelas APIs do Windows.

### Sintaxe

```pop
Rotina para que se compativelmente <nome>:
  \\ Corpo da rotina
```

### Por Que É Necessário?

- **Convenção de Chamada**: Windows usa `stdcall`, Português Puro usa `cdecl` por padrão
- **Limpeza da Pilha**: `stdcall` limpa a pilha dentro da função
- **Compatibilidade**: Sem `compativelmente`, callbacks causarão crashes

---

## Exemplos Práticos

### 1. Callback de Enumeração de Janelas

```pop
\\ Declarar rotina compatível
Rotina para que se compativelmente enumere uma janela:
  \\ Obter título da janela
  Processe "user32.dll" "GetWindowTextA" com
    a janela e
    o endereçamento duma string denominada título e
    256
    Retornando um comprimento.
  
  \\ Exibir título
  Se o comprimento for maior que 0,
    Escreva o título no console.
  
  \\ Continuar enumeração (retornar 1)
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.           \\ ret

\\ Obter ponteiro para callback
Aponte um ponteiro para a rotina enumere uma janela.

\\ Chamar API com callback
Processe "user32.dll" "EnumWindows" com
  o ponteiro e
  0
  Retornando um resultado.
```

---

### 2. Callback de Procedimento de Janela (Window Procedure)

```pop
\\ Declarar procedimento de janela
Rotina para que se compativelmente manipule um evento:
  \\ Parâmetros: hwnd, msg, wParam, lParam
  \\ Estes são passados automaticamente pelo Windows
  
  \\ Obter mensagem
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12] - pega msg
  
  \\ Verificar se é WM_DESTROY (0x0002)
  Decodifique $83F902. \\ cmp ecx,2
  Decodifique $7508.   \\ jne +8
  
  \\ Se for WM_DESTROY, chamar PostQuitMessage(0)
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \\ xor eax,eax - retornar 0
  Decodifique $C3.     \\ ret
  
  \\ Caso contrário, chamar DefWindowProc
  Decodifique $FF7514. \\ push [ebp+20] - lParam
  Decodifique $FF7510. \\ push [ebp+16] - wParam
  Decodifique $FF750C. \\ push [ebp+12] - msg
  Decodifique $FF7508. \\ push [ebp+8]  - hwnd
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \\ ret

\\ Obter ponteiro
Aponte um ponteiro de procedimento para a rotina manipule um evento.

\\ Registrar classe de janela
\\ ... (usar ponteiro de procedimento na estrutura WNDCLASS)
```

---

### 3. Callback de Timer

```pop
\\ Declarar callback de timer
Rotina para que se compativelmente processe timer:
  \\ Executar ação periódica
  Escreva "Timer disparado!" no console.
  
  \\ Retornar (sem valor de retorno necessário)
  Decodifique $C3. \\ ret

\\ Obter ponteiro
Aponte um ponteiro de timer para a rotina processe timer.

\\ Criar timer
Processe "user32.dll" "SetTimer" com
  0 e              \\ hwnd (NULL)
  1 e              \\ timer ID
  1000 e           \\ intervalo em ms (1 segundo)
  o ponteiro de timer
  Retornando um identificador de timer.
```

---

### 4. Callback de Enumeração de Arquivos

```pop
\\ Declarar callback
Rotina para que se compativelmente processe arquivo encontrado:
  \\ Parâmetros passados pelo FindFirstFile/FindNextFile
  \\ WIN32_FIND_DATA está em [ebp+8]
  
  \\ Obter nome do arquivo (offset 44 na estrutura)
  Decodifique $8B4508.     \\ mov eax,[ebp+8]
  Decodifique $83C02C.     \\ add eax,44
  Decodifique $50.         \\ push eax
  
  \\ Criar string para o nome
  Aloque memória para uma string denominada nome.
  
  \\ Copiar nome (simplificado)
  \\ ... lógica de cópia ...
  
  \\ Exibir nome
  Escreva o nome no console.
  
  \\ Continuar (retornar 1)
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.         \\ ret

\\ Usar callback
Aponte um ponteiro para a rotina processe arquivo encontrado.
```

---

## Comando `Aponte`

### Sintaxe

```pop
Aponte <ponteiro> para a rotina <nome da rotina>.
```

### Função

Obtém o **endereço de memória** da rotina e armazena em um ponteiro.

### Exemplos

```pop
\\ Declarar ponteiro
Um ponteiro denominado callback.

\\ Apontar para rotina
Aponte o callback para a rotina manipule evento.

\\ Usar em API
Processe "user32.dll" "SetWindowsHookEx" com
  1 e              \\ WH_KEYBOARD
  o callback e
  0 e
  0
  Retornando um hook.
```

---

## Estrutura Típica de Callback

### Padrão Geral

```pop
Rotina para que se compativelmente <nome>:
  \\ 1. Obter parâmetros da pilha (se necessário)
  Decodifique $8B4508. \\ mov eax,[ebp+8] - primeiro parâmetro
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12] - segundo parâmetro
  
  \\ 2. Processar lógica
  \\ ... código da rotina ...
  
  \\ 3. Retornar valor (se necessário)
  Decodifique $B8<valor>. \\ mov eax,<valor>
  Decodifique $C3.        \\ ret
```

---

## Convenções de Chamada

### `stdcall` (Windows)

- **Usado por**: APIs do Windows
- **Limpeza da pilha**: Função chamada limpa a pilha
- **Modificador**: `compativelmente`
- **Decoração de nome**: `_FunctionName@bytes`

### `cdecl` (Padrão Português Puro)

- **Usado por**: Rotinas normais
- **Limpeza da pilha**: Chamador limpa a pilha
- **Modificador**: Nenhum
- **Decoração de nome**: `_FunctionName`

---

## Parâmetros de Callbacks

### Acesso aos Parâmetros

Parâmetros são passados na pilha e acessados via `[ebp+offset]`:

| Parâmetro | Offset | Instrução Assembly |
|-----------|--------|--------------------|
| 1º        | `+8`   | `mov eax,[ebp+8]`  |
| 2º        | `+12`  | `mov ecx,[ebp+12]` |
| 3º        | `+16`  | `mov edx,[ebp+16]` |
| 4º        | `+20`  | `mov ebx,[ebp+20]` |

### Exemplo

```pop
Rotina para que se compativelmente processe mensagem:
  \\ Parâmetros: hwnd, msg, wParam, lParam
  
  \\ Obter hwnd (1º parâmetro)
  Decodifique $8B4508. \\ mov eax,[ebp+8]
  
  \\ Obter msg (2º parâmetro)
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12]
  
  \\ Obter wParam (3º parâmetro)
  Decodifique $8B5510. \\ mov edx,[ebp+16]
  
  \\ Obter lParam (4º parâmetro)
  Decodifique $8B5D14. \\ mov ebx,[ebp+20]
  
  \\ ... processar ...
```

---

## Valores de Retorno

### Retornar Valor Inteiro

```pop
\\ Retornar 0
Decodifique $33C0. \\ xor eax,eax
Decodifique $C3.   \\ ret

\\ Retornar 1
Decodifique $B801000000. \\ mov eax,1
Decodifique $C3.         \\ ret

\\ Retornar valor específico
Decodifique $B8<valor>. \\ mov eax,<valor>
Decodifique $C3.        \\ ret
```

---

## APIs Comuns que Usam Callbacks

### Enumeração

```pop
\\ EnumWindows - enumerar janelas
Processe "user32.dll" "EnumWindows" com
  o callback e
  0.

\\ EnumChildWindows - enumerar janelas filhas
Processe "user32.dll" "EnumChildWindows" com
  a janela pai e
  o callback e
  0.
```

### Hooks

```pop
\\ SetWindowsHookEx - instalar hook
Processe "user32.dll" "SetWindowsHookExA" com
  o tipo de hook e
  o callback e
  0 e
  0
  Retornando o handle do hook.
```

### Timers

```pop
\\ SetTimer - criar timer
Processe "user32.dll" "SetTimer" com
  0 e
  o id do timer e
  o intervalo e
  o callback
  Retornando o id do timer.
```

### Threads

```pop
\\ CreateThread - criar thread
Processe "kernel32.dll" "CreateThread" com
  0 e
  0 e
  o callback e
  o parâmetro e
  0 e
  o endereçamento dum id de thread
  Retornando o handle da thread.
```

---

## Observações Importantes

1. **Sempre Use `compativelmente`**: Callbacks para Windows **devem** usar este modificador
2. **Convenção stdcall**: Windows espera que callbacks usem stdcall
3. **Limpeza da Pilha**: A rotina callback limpa seus próprios parâmetros
4. **Valores de Retorno**: Muitos callbacks retornam valores específicos
5. **Assembly Necessário**: Callbacks frequentemente precisam de código assembly
6. **Ponteiros**: Use `Aponte` para obter endereço da rotina
7. **Parâmetros Automáticos**: Windows passa parâmetros automaticamente
8. **Acesso à Pilha**: Use `[ebp+offset]` para acessar parâmetros
9. **Retorno**: Use `mov eax,valor` e `ret` para retornar
10. **Crashes**: Callback sem `compativelmente` causará crash

---

## Mapeamento para Langium

```langium
// ============================================================================
// CALLBACKS
// ============================================================================

RotinaCallback:
    'Rotina' 'para' 'que' 'se' 'compativelmente' nome=ExpressaoRotina ':' 
    corpo=CorpoRotina;

ComandoAponte:
    'Aponte' ponteiro=Variavel 'para' 'a' 'rotina' rotina=NomeRotina '.';

NomeRotina:
    // Nome da rotina sem "Rotina para que se"
    palavras+=PALAVRA+;

// Uso em Processe
ChamadaExternaComCallback:
    'Processe' dll=STRING funcao=STRING 'com'
    parametros+=Parametro ('e' parametros+=Parametro)*
    ('retornando' retorno=Variavel)? '.';

Parametro:
    Variavel | Literal | PonteiroCallback;

PonteiroCallback:
    'o' 'ponteiro' | 'o' 'callback';
```

---

## Boas Práticas

1. **Sempre `compativelmente`**: Use para todos os callbacks do Windows
2. **Teste Cuidadosamente**: Callbacks incorretos causam crashes
3. **Documente Parâmetros**: Comente quais parâmetros são esperados
4. **Retornos Corretos**: Retorne valores esperados pela API
5. **Tratamento de Erros**: Valide parâmetros antes de usar
6. **Assembly Mínimo**: Use apenas o assembly necessário
7. **Ponteiros Válidos**: Verifique ponteiros antes de desreferenciar
8. **Memória**: Não aloque/desaloque memória desnecessariamente
9. **Thread-Safe**: Callbacks podem ser chamados de threads diferentes
10. **Debugging**: Use logs para depurar callbacks

---

## Exemplos Completos

### Aplicação com Janela

```pop
\\ Callback de procedimento de janela
Rotina para que se compativelmente manipule mensagem:
  \\ Obter mensagem
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12]
  
  \\ WM_DESTROY?
  Decodifique $83F902. \\ cmp ecx,2
  Decodifique $7508.   \\ jne +8
  
  \\ Sim - sair
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \\ xor eax,eax
  Decodifique $C3.     \\ ret
  
  \\ Não - processar padrão
  Decodifique $FF7514. \\ push [ebp+20]
  Decodifique $FF7510. \\ push [ebp+16]
  Decodifique $FF750C. \\ push [ebp+12]
  Decodifique $FF7508. \\ push [ebp+8]
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \\ ret

Rotina para que se crie janela:
  \\ Obter ponteiro para callback
  Aponte um ponteiro de procedimento para a rotina manipule mensagem.
  
  \\ Registrar classe
  \\ ... (usar ponteiro de procedimento)
  
  \\ Criar janela
  \\ ... (usar classe registrada)
```

---

## Antipadrões (Evitar)

### ❌ Esquecer `compativelmente`

```pop
\\ RUIM - Causará crash
Rotina para que se manipule evento:
  \\ ... código ...

\\ BOM - Funciona corretamente
Rotina para que se compativelmente manipule evento:
  \\ ... código ...
```

### ❌ Não Retornar Valor

```pop
\\ RUIM - Valor de retorno indefinido
Rotina para que se compativelmente processe item:
  \\ ... código ...
  \\ (sem retorno)

\\ BOM - Retorna valor explícito
Rotina para que se compativelmente processe item:
  \\ ... código ...
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.         \\ ret
```

### ❌ Acessar Parâmetros Incorretamente

```pop
\\ RUIM - Offset errado
Decodifique $8B4504. \\ mov eax,[ebp+4] - ERRADO!

\\ BOM - Offset correto
Decodifique $8B4508. \\ mov eax,[ebp+8] - primeiro parâmetro
```

---

## Estatísticas

- **Modificador**: `compativelmente`
- **Comando de ponteiro**: `Aponte`
- **Convenção de chamada**: `stdcall`
- **Uso principal**: APIs do Windows
- **Parâmetros**: Passados na pilha
- **Retorno**: Via registrador `eax`
- **Assembly**: Frequentemente necessário
- **Crashes**: Comuns se mal implementados

---

## Resumo

### Declaração

```pop
Rotina para que se compativelmente <nome>:
  \\ Implementação com assembly
```

### Obter Ponteiro

```pop
Aponte <ponteiro> para a rotina <nome>.
```

### Usar em API

```pop
Processe "<dll>" "<função>" com
  <parâmetros> e
  <ponteiro callback>.
```

### Recomendação Geral

Callbacks são recursos avançados que requerem conhecimento de assembly x86 e convenções de chamada do Windows. Use com cuidado e sempre teste extensivamente.
