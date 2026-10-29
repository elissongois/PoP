# Instruções de Máquina

## Visão Geral

O comando `Decodifique` permite incluir **código de máquina (assembly x86)** diretamente no código Português Puro. É usado para operações de baixo nível, otimizações, callbacks e interoperabilidade com APIs que exigem convenções específicas.

---

## Sintaxe

### Básica

```pop
Decodifique $<hexadecimal>.
```

### Com Comentário

```pop
Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
```

---

## Características

- **Prefixo obrigatório**: `$`
- **Formato**: Hexadecimal (bytes da instrução x86)
- **Comentários**: Use `\` após o ponto para explicar a instrução
- **Case-insensitive**: `$8b85...` equivale a `$8B85...`
- **Múltiplas instruções**: Cada `Decodifique` contém uma instrução (ou sequência)

---

## Exemplos Básicos

### Zerar Ponteiro

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \ mov [eax],0 - zera o ponteiro
```

### Comparação de Bytes

```pop
Função para que se determine se um byte é maior que um segundo byte:
  Decodifique $C7C001000000. \ mov eax,1 - assume true
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B.         \ mov bl,[ebx]
  Decodifique $8B8D0C000000. \ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19.         \ cmp bl,[ecx]
  Decodifique $0F8206000000. \ jb sobre o próximo 1 statement
  Decodifique $C7C000000000. \ mov eax,0 - now it is false
```

---

## Uso em Rotinas

### Exemplo: Esvaziar Ponteiro

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \ mov [eax],0 - zera o ponteiro
```

**Chamada:**
```pop
Esvazie o ponteiro.
```

---

## Uso em Funções

### Exemplo: Comparação de Bytes

```pop
Função para que se determine se um byte é maior ou igual a um segundo byte:
  Decodifique $C7C001000000. \ mov eax,1 - assume true
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B.         \ mov bl,[ebx]
  Decodifique $8B8D0C000000. \ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19.         \ cmp bl,[ecx]
  Decodifique $0F8306000000. \ ja sobre o próximo 1 statement
  Decodifique $C7C000000000. \ mov eax,0 - now it is false
```

---

## Uso em Callbacks

Callbacks **frequentemente requerem assembly** para:
- Acessar parâmetros da pilha (`[ebp+offset]`)
- Retornar valores via registrador `eax`
- Manipular ponteiros e estruturas
- Controlar fluxo de retorno

### Exemplo: Window Procedure

```pop
Rotina para que se compativelmente manipule um evento:
  \ Parâmetros: hwnd, msg, wParam, lParam
  \ Estes são passados automaticamente pelo Windows
  
  \ Obter mensagem
  Decodifique $8B4D0C. \ mov ecx,[ebp+12] - pega msg
  
  \ Verificar se é WM_DESTROY (0x0002)
  Decodifique $83F902. \ cmp ecx,2
  Decodifique $7508.   \ jne +8
  
  \ Se for WM_DESTROY, chamar PostQuitMessage(0)
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \ xor eax,eax - retornar 0
  Decodifique $C3.     \ ret
  
  \ Caso contrário, chamar DefWindowProc
  Decodifique $FF7514. \ push [ebp+20] - lParam
  Decodifique $FF7510. \ push [ebp+16] - wParam
  Decodifique $FF750C. \ push [ebp+12] - msg
  Decodifique $FF7508. \ push [ebp+8]  - hwnd
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \ ret
```

### Exemplo: Retorno de Valores

```pop
\ Retornar 0
Decodifique $33C0. \ xor eax,eax
Decodifique $C3.   \ ret

\ Retornar 1
Decodifique $B801000000. \ mov eax,1
Decodifique $C3.         \ ret

\ Retornar valor específico
Decodifique $B8<valor>. \ mov eax,<valor>
Decodifique $C3.        \ ret
```

---

## Acesso a Parâmetros (Convencão stdcall)

Parâmetros são acessados via offsets do registrador `ebp`:

| Parâmetro | Offset | Assembly |
|-----------|--------|----------|
| 1º        | `+8`   | `mov eax,[ebp+8]`  (`$8B4508`) |
| 2º        | `+12`  | `mov ecx,[ebp+12]` (`$8B4D0C`) |
| 3º        | `+16`  | `mov edx,[ebp+16]` (`$8B5510`) |
| 4º        | `+20`  | `mov ebx,[ebp+20]` (`$8B5D14`) |

### Exemplos de Acesso

```pop
\ 1º parâmetro
Decodifique $8B4508. \ mov eax,[ebp+8]

\ 2º parâmetro
Decodifique $8B4D0C. \ mov ecx,[ebp+12]

\ 3º parâmetro
Decodifique $8B5510. \ mov edx,[ebp+16]

\ 4º parâmetro
Decodifique $8B5D14. \ mov ebx,[ebp+20]
```

---

## Instruções Comuns (Referência Rápida)

| Assembly | Hex (Little Endian) | Descrição |
|----------|---------------------|-----------|
| `mov eax, [ebp+8]` | `$8B4508` | Carrega 1º parâmetro |
| `mov ecx, [ebp+12]` | `$8B4D0C` | Carrega 2º parâmetro |
| `mov edx, [ebp+16]` | `$8B5510` | Carrega 3º parâmetro |
| `mov ebx, [ebp+20]` | `$8B5D14` | Carrega 4º parâmetro |
| `mov eax, 1` | `$B801000000` | Retorna true (1) |
| `xor eax, eax` | `$33C0` | Retorna false (0) |
| `ret` | `$C3` | Retorno da função |
| `cmp ecx, 2` | `$83F902` | Compara com 2 |
| `jne +8` | `$7508` | Pula se não igual |
| `jb +6` | `$7206` | Pula se abaixo (unsigned) |
| `ja +6` | `$7706` | Pula se acima (unsigned) |
| `push [ebp+20]` | `$FF7514` | Push lParam |
| `push [ebp+16]` | `$FF7510` | Push wParam |
| `push [ebp+12]` | `$FF750C` | Push msg |
| `push [ebp+8]` | `$FF7508` | Push hwnd |
| `mov [eax], 0` | `$C70000000000` | Zera ponteiro |

---

## Observações Importantes

1. **Arquitetura**: x86 (32-bit) - little endian
2. **Convenção**: `stdcall` para callbacks (`compativelmente`), `cdecl` para rotinas normais
3. **Registradores**: `eax`, `ecx`, `edx`, `ebx` são voláteis (caller-saved)
3. **Pilha**: Alinhada a 4 bytes; parâmetros em `[ebp+8]`, `[ebp+12]`, etc.
4. **Retorno**: Valor inteiro em `eax`; ponteiros também em `eax`
5. **Limpeza**: `stdcall` = função limpa pilha; `cdecl` = chamador limpa
6. **Segurança**: Assembly mal escrito causa crashes; teste extensivamente
7. **Portabilidade**: Código assembly não é portável entre arquiteturas
8. **Debugging**: Use debugger para verificar instruções
9. **Comentários**: **Sempre** documente cada `Decodifique` com `\`
10. **Alternativas**: Prefira comandos nativos quando possível

---

## Mapeamento para Langium

```langium
// ============================================================================
// INSTRUÇÃO DE MÁQUINA
// ============================================================================

InstrucaoMaquina:
    'Decodifique' codigo=HEXADECIMAL '.';

HEXADECIMAL:
    '$' digitos=HEX+;

HEX:
    /[0-9A-Fa-f]/;
```

---

## Boas Práticas

1. **Documente Sempre**: Cada `Decodifique` deve ter comentário `\` explicando
2. **Use com Moderação**: Prefira comandos nativos (`Atribua`, `Se`, `Processe`)
3. **Teste Isoladamente**: Verifique cada bloco assembly separadamente
4. **Valide Registradores**: Preserve `ebx`, `esi`, `edi`, `ebp` se necessário
5. **Alinhamento**: Garanta alinhamento de pilha (4 bytes)
6. **Retorno Explícito**: Sempre retorne valor em `eax` para callbacks
7. **Evite Saltos Longos**: Prefira lógica em Português Puro
8. **Verifique Offsets**: Parâmetros em `[ebp+8]`, `[ebp+12]`, etc.
9. **Use Constantes**: Defina valores mágicos como hexadecimais nomeados
10. **Assembly Mínimo**: Apenas o estritamente necessário

---

## Erros Comuns

### ❌ Offset Errado

```pop
\ RUIM - Acessa endereço errado
Decodifique $8B4504. \ mov eax,[ebp+4] - ERRADO!

\ BOM - Offset correto para 1º parâmetro
Decodifique $8B4508. \ mov eax,[ebp+8] - primeiro parâmetro
```

### ❌ Esquecer `ret`

```pop
\ RUIM - Falta retorno
Decodifique $B801000000. \ mov eax,1

\ BOM - Com retorno
Decodifique $B801000000. \ mov eax,1
Decodifique $C3.         \ ret
```

### ❌ Convenção Errada

```pop
\ RUIM - Callback sem compativelmente (usa cdecl)
Rotina para que se manipule evento:
  Decodifique $C3. \ ret

\ BOM - Callback com stdcall
Rotina para que se compativelmente manipule evento:
  Decodifique $C3. \ ret
```

### ❌ Não Preservar Registradores

```pop
\ RUIM - Corrompe registradores salvos
Decodifique $53. \ push ebx
\ ... usa ebx ...
Decodifique $5B. \ pop ebx

\ BOM - Preserva registradores não-voláteis
```

---

## Exemplos Completos

### Comparação de Frações (Assembly Otimizado)

```pop
Função para que se determine se uma fração é uma segunda fração:
  Preserve a fração.
  Preserve a segunda fração.
  Normalize a fração e a segunda fração.
  Se o numerador desta fração é o numerador desta segunda fração, diga sim.
  Diga não.
```
*Nota: Esta versão usa rotinas nativas; versão assembly acessaria numeradores/denominadores diretamente.*

---

### Manipulação de Bits

```pop
Rotina para que se defina bit:
  \ Parâmetros: ponteiro para byte, índice do bit (0-7)
  Decodifique $8B4508.       \ mov eax,[ebp+8] - ponteiro
  Decodifique $8B4D0C.       \ mov ecx,[ebp+12] - índice
  Decodifique $B301.         \ mov bl,1
  Decodifique $D2E3.         \ shl bl,cl - cria máscara
  Decodifique $0818.         \ or [eax],bl - define bit
  Decodifique $C3.           \ ret
```

---

## Estatísticas

- **Comando**: `Decodifique`
- **Formato**: Hexadecimal prefixado com `$`
- **Arquitetura**: x86 32-bit (little endian)
- **Convenções**: `cdecl` (padrão), `stdcall` (`compativelmente`)
- **Registradores de retorno**: `eax` (inteiro/ponteiro)
- **Parâmetros**: Pilha (`[ebp+8]`, `[ebp+12]`, `[ebp+16]`, `[ebp+20]`)
- **Uso principal**: Callbacks, otimizações, interoperabilidade
- **Risco**: Alto (crashes, não-portabilidade)
- **Alternativa**: Comandos nativos, `Processe`