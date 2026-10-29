# Chamadas Externas (API)

## Visão Geral

O comando `Processe` permite chamar **funções de DLLs externas** (API Windows, bibliotecas C, etc.) diretamente do código Português Puro. É a principal forma de interagir com o sistema operacional e bibliotecas nativas.

---

## Sintaxe

### Estrutura Básica

```pop
Processe "<dll>" "<função>" com
  <argumento1> e
  <argumento2> e
  <argumento3>
Retornando <variável>.
```

### Componentes

| Componente      | Obrigatório | Descrição                              |
|----------------|-------------|----------------------------------------|
| `Processe`     | Sim         | Palavra-chave que inicia a chamada     |
| `"<dll>"`      | Sim         | Nome da DLL (ex: `"kernel32.dll"`)    |
| `"<função>"`   | Sim         | Nome da função (case-sensitive)        |
| `com`          | Não         | Inicia lista de argumentos             |
| `e`            | Não         | Separador entre argumentos (múltiplos) |
| `Retornando`   | Não         | Define variável para receber retorno   |
| `.`            | Sim         | Termina a instrução                    |

---

## Tipos de Chamada

### 1. Chamada Direta (Com Aspas)

DLL e função são literais de string.

```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### 2. Chamada Indireta (Sem Aspas)

DLL e função são expressões (variáveis/ponteiros).

```pop
Processe o release deste VTable deste istream com o istream.
```

---

## Argumentos

### Separador `e`

- **Obrigatório** quando há **2 ou mais argumentos**
- **Omitido** quando há **apenas 1 argumento**

```pop
\ Um argumento (sem 'e')
Processe "kernel32.dll" "GlobalLock" com
  O número identificador [hMem]
  Retornando um ponteiro.

\ Dois argumentos (com 'e')
Processe "kernel32.dll" "GlobalAlloc" com
  2 [uFlags GMEM_MOVEABLE] e
  A quantidade de caracteres deste trecho [dwBytes]
  Retornando um número identificador.

\ Três argumentos
Processe "ole32.dll" "CreateStreamOnHGlobal" com
  O número identificador [hGlobal] e
  1 [fDeleteOnRelease = TRUE] e
  O endereçamento dum istream [*ppstm]
```

### Comentários Inline `[...]`

Podem aparecer **após cada argumento** para documentação:

```pop
Processe "gdi32.dll" "CreateFontA" com
  A altura desta fonte vezes 3 dividido por 4 [cHeight] e
  0 [cWidth] e
  0 [cEscapement] e
  1 [iCharSet = DEFAULT_CHARSET] e
  5 [iQuality = CLEARTYPE_QUALITY] e
  O caractere inicial deste nome desta fonte [pszFaceName]
  retornando o número da fonte.
```

---

## Retorno

### Sintaxe

```pop
Retornando <variável>.
```

### Exemplos

```pop
\ Retorno simples
Processe "kernel32.dll" "GetLastError" retornando o código de erro.

\ Retorno com tipo
Processe "user32.dll" "GetKeyState" com a tecla retornando um word.

\ Retorno de ponteiro
Processe "kernel32.dll" "HeapAlloc" com
  O endereço heap e
  8 e
  A quantidade de bytes
  Retornando o ponteiro.
```

---

## Exemplos Completos

### Chamada Simples (Sem Argumentos)

```pop
Processe "user32.dll" "CloseClipboard".
```

### Chamada com Retorno

```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### Múltiplos Argumentos com Retorno

```pop
Processe "gdi32.dll" "CreateFontA" com
  A altura desta fonte vezes 3 dividido por 4 [cHeight] e
  0 [cWidth] e
  0 [cEscapement] e
  0 [cOrientation] e
  0 [cWeight] e
  0 [bItalic] e
  0 [bUnderline] e
  0 [bStrikeOut] e
  1 [iCharSet = DEFAULT_CHARSET] e
  0 [iOutPrecision] e
  0 [iClipPrecision] e
  5 [iQuality = CLEARTYPE_QUALITY] e
  4 [iPitchAndFamily = TRUETYPE_FONTTYPE] e
  O caractere inicial deste nome desta fonte [pszFaceName]
  retornando o número da fonte.
```

### Exemplo da Biblioteca Padrão

```pop
Rotina para que se crie um gpBitmap usando um trecho:
  Limpe o erro do fluxo de entrada/saída.
  
  \ 2 argumentos com retorno
  Processe "kernel32.dll" "GlobalAlloc" com 
    2 [uFlags GMEM_MOVEABLE] e 
    A quantidade de caracteres deste trecho [dwBytes]
    Retornando um número identificador.
    
  \ 1 argumento com retorno
  Processe "kernel32.dll" "GlobalLock" com
    O número identificador [hMem]  
    Retornando um ponteiro.
    
  Copie bytes desde o caractere inicial deste trecho para o ponteiro pelo quantidade de caracteres deste trecho.
  
  \ 1 argumento sem retorno
  Processe "kernel32.dll" "GlobalUnlock" com 
    O número identificador. [hMem] 
    
  \ 3 argumentos sem retorno
  Processe "ole32.dll" "CreateStreamOnHGlobal" com
    O número identificador [hGlobal] e
    1 [fDeleteOnRelease = TRUE] e
    O endereçamento dum istream [*ppstm]  
    
  \ 2 argumentos com retorno
  Processe "gdiplus.dll" "GdipCreateBitmapFromStream" com
    O istream [stream] e
    O endereçamento deste gpBitmap [**bitmap] 
    Retornando um número.
    
  Se o número não for 0,
    Atribua "Não sei como processar este tipo de imagem." ao erro do fluxo de entrada/saída;
    Escreva o erro do fluxo de entrada/saída junto com o texto CRLF para StdOut;
    Esvazie o gpBitmap.
    
  \ Chamada indireta
  Processe o release deste VTable deste istream com o istream.
```

---

## Tratamento de Erros

### Verificação Pós-Chamada

```pop
Processe "gdiplus.dll" "GdipCreateBitmapFromStream" com
  O istream [stream] e
  O endereçamento deste gpBitmap [**bitmap] 
  Retornando um número.

Se o número não for 0,
  Atribua "Erro ao criar bitmap." ao erro;
  Escreva o erro junto com o texto CRLF para StdOut;
  Esvazie o gpBitmap.
```

### GetLastError

```pop
Processe "kernel32.dll" "GetLastError" retornando o código de erro.
Se o código de erro não for 0,
  Converta o código de erro para uma mensagem;
  Escreva "Erro: " junto com a mensagem para StdErr.
```

---

## Observações Importantes

1. **Chamada Indireta**: Quando não usa aspas, a dll e função são expressões (ex: `o release deste VTable deste istream`)
2. **Argumento Único**: Quando há apenas um argumento, **não há delimitador `e`**
3. **Múltiplos Argumentos**: Separados por `e`
4. **Comentários Inline**: Podem aparecer após cada argumento entre `[...]`
5. **Case-Sensitive**: Nome da função entre aspas **distingue maiúsculas/minúsculas**
6. **Tipos de Argumentos**: Devem corresponder à assinatura da API (ponteiros, números, etc.)
7. **Retorno**: Opcional; se omitido, o valor de retorno é ignorado
7. **Convencao de Chamada**: Stdcall (padrão Windows API)

---

## Mapeamento para Langium

```langium
ComandoProcessar:
    'Processe' 
    (biblioteca=STRING funcao=STRING | bibliotecaExpr=Expressao)
    ('com' argumentos+=ArgumentoProcessar ('e' argumentos+=ArgumentoProcessar)*)?
    ('retornando' retorno=Expressao)?
    '.';

ArgumentoProcessar:
    valor=Expressao;
```

---

## Boas Práticas

1. **Sempre Verifique Retorno**: APIs Windows retornam 0/NULL em falha
2. **Use Comentários `[...]`**: Documente parâmetros conforme documentação da API
3. **GetLastError Imediato**: Chame logo após falha (outras APIs podem sobrescrever)
4. **Tipos Corretos**: Use `um ponteiro`, `um número`, `um word`, etc. conforme API
5. **Constantes**: Use valores numéricos ou hexadecimais para flags (`8`, `$00000008`)
6. **Ponteiros de Saída**: Use `O endereçamento dum <tipo>` para parâmetros de saída
7. **Strings**: Passe `O caractere inicial desta string` para `LPSTR`/`LPCSTR`
8. **Estruturas**: Passe campos individualmente ou use `Decodifique` para assembly
9. **Limpeza**: Libere recursos (handles, memória) após uso
10. **Teste em Isolamento**: Verifique cada chamada separadamente

---

## DLLs Comuns

| DLL           | Uso Comum                              |
|---------------|----------------------------------------|
| `kernel32.dll`| Memória, processos, threads, arquivos  |
| `user32.dll`  | Janelas, mensagens, input, clipboard   |
| `gdi32.dll`   | Gráficos 2D, fontes, bitmaps           |
| `gdiplus.dll` | Gráficos avançados (GDI+)              |
| `ole32.dll`   | COM, streams, armazenamento estruturado|
| `shell32.dll` | Shell, arquivos, pastas, atalhos       |
| `advapi32.dll`| Registro, segurança, serviços          |
| `ws2_32.dll`  | Sockets (Winsock)                      |
| `winmm.dll`   | Multimídia, timers                     |
| `comctl32.dll`| Controles comuns                       |

---

## Estatísticas

- **Palavra-chave**: `Processe`
- **Separador de argumentos**: `e`
- **Início de argumentos**: `com`
- **Retorno**: `Retornando`
- **Chamada indireta**: Suportada (expressões sem aspas)
- **Comentários inline**: `[...]` após argumentos
- **Case-sensitive**: Nome da função entre aspas
- **Convenção**: stdcall (Windows API)