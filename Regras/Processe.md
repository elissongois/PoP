# Processe — Chamadas Externas (API Windows)

## Visão Geral

O comando `Processe` permite chamar **funções de DLLs externas** (API Windows, bibliotecas C etc.) diretamente do código em Português Puro. É a principal forma de interagir com o sistema operacional e com bibliotecas nativas.

## 1. Chamada Externa (API Windows)

### Início
* A instrução se inicia com `Processe`.

### Obrigatório
* A instrução requer no mínimo dois parâmetros (exceto na indireta), nessa ordem:
  * O nome da dll entre aspas; e
  * O nome da função entre aspas (Sensível a caixa);

### Opcional (definidos pela API, dependem da implementação da dll e da função)
* **Argumentos**:
  * A lista de argumentos começa após `com`;
  * Os argumentos de entrada devem ser separados por `e`;
  * Cada argumento pode ter um comentário inline `[...]` após ele.
* **Retorno**:
  * O parâmetro de retorno sempre é o último argumento da instrução;
  * O parâmetro de retorno é definido escrevendo `retornando` seguido do nome do parâmetro.

### Fim
* A instrução se encerra com `.` (ponto final) após o último parâmetro.

### Componentes

| Componente      | Obrigatório | Descrição                               |
|-----------------|-------------|-----------------------------------------|
| `Processe`      | Sim         | Palavra-chave que inicia a chamada      |
| `"<dll>"`       | Sim         | Nome da DLL (ex: `"kernel32.dll"`)      |
| `"<função>"`    | Sim         | Nome da função (sensível a caixa)       |
| `com`           | Não         | Inicia a lista de argumentos            |
| `e`             | Não         | Separador entre argumentos (múltiplos)  |
| `Retornando`    | Não         | Define o variável que recebe o retorno  |
| `.`             | Sim         | Termina a instrução                     |

## 2. Tipos de Chamada

### Chamada Direta (Com Aspas)

A dll e a função são literais de string.

```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### Chamada Indireta (Sem Aspas)

A dll e a função são expressões (variáveis, ponteiros, entradas de VTable).

```pop
Processe o release deste VTable deste istream com o istream.
```

## 3. Exemplos

### Exemplo simples - sem argumentos
```pop
Processe "user32.dll" "CloseClipboard".
```

### Exemplo com retorno
```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### Exemplo com múltiplos argumentos
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

### Exemplo completo da biblioteca padrão
```pop
Rotina para que se crie um gpBitmap usando um trecho:
  Limpe o erro do fluxo de entrada/saída.
  
  \ exemplo com 2 argumentos (há delimitador `e` entre os argumentos) com retorno
  Processe "kernel32.dll" "GlobalAlloc" com 
    2 [uFlags GMEM_MOVEABLE] e 
    A quantidade de caracteres deste trecho [dwBytes]
    Retornando um número identificador.
    
  \ exemplo com apenas um argumento (não há delimitador `e`) com retorno 
  Processe "kernel32.dll" "GlobalLock" com
    O número identificador [hMem]  
    Retornando um ponteiro.
    
  Copie bytes desde o caractere inicial deste trecho para o ponteiro pelo quantidade de caracteres deste trecho.
  
  \ exemplo com apenas um argumento (não há delimitador `e`) sem retorno
  Processe "kernel32.dll" "GlobalUnlock" com 
    O número identificador. [hMem] 
    
  \ exemplo com 3 argumentos (há delimitador `e` entre os argumentos) sem retorno
  Processe "ole32.dll" "CreateStreamOnHGlobal" com
    O número identificador [hGlobal] e
    1 [fDeleteOnRelease = TRUE] e
    O endereçamento dum istream. [*ppstm]  
    
  \ exemplo com 2 argumentos (há delimitador `e` entre os argumentos) com retorno
  Processe "gdiplus.dll" "GdipCreateBitmapFromStream" com
    O istream [stream] e
    O endereçamento deste gpBitmap [**bitmap] 
    Retornando um número.
    
  Se o número não for 0,
    Atribua "Não sei como processar este tipo de imagem." ao erro do fluxo de entrada/saída;
    Escreva o erro do fluxo de entrada/saída junto com o texto CRLF para StdOut;
    Esvazie o gpBitmap.
    
  \ Exemplo de chamada indireta (não usa aspas)
  Processe o release deste VTable deste istream com o istream. 
```

## 4. Argumentos

O separador `e` é obrigatório quando há dois ou mais argumentos e é omitido quando há apenas um.

```pop
\\ Um argumento (sem `e`)
Processe "kernel32.dll" "GlobalLock" com
  O número identificador [hMem]
  Retornando um ponteiro.

\\ Dois argumentos (com `e`)
Processe "kernel32.dll" "GlobalAlloc" com
  2 [uFlags GMEM_MOVEABLE] e
  A quantidade de caracteres deste trecho [dwBytes]
  Retornando um número identificador.

\\ Três argumentos
Processe "ole32.dll" "CreateStreamOnHGlobal" com
  O número identificador [hGlobal] e
  1 [fDeleteOnRelease = TRUE] e
  O endereçamento dum istream [*ppstm]
```

Os comentários inline `[...]` vêm depois de cada argumento e servem para documentar o parâmetro correspondente da API.

## 5. Retorno

```pop
Retornando <variável>.
```

```pop
\\ Retorno simples
Processe "kernel32.dll" "GetLastError" retornando o código de erro.

\\ Retorno com tipo
Processe "user32.dll" "GetKeyState" com a tecla retornando um word.

\\ Retorno de ponteiro
Processe "kernel32.dll" "HeapAlloc" com
  O endereço heap e
  8 e
  A quantidade de bytes
  Retornando o ponteiro.
```

Se `Retornando` for omitido, o valor de retorno da função é descartado.

## 6. Tratamento de Erros

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

## Observações Importantes

1. **Chamada Indireta**: Quando não usa aspas, a dll e função são expressões (ex: `o release deste VTable deste istream`)
2. **Argumento Único**: Quando há apenas um argumento, não há delimitador `e`
3. **Múltiplos Argumentos**: Separados por `e`
4. **Comentários Inline**: Podem aparecer após cada argumento entre `[...]`
5. **Sensibilidade a caixa**: O nome da função entre aspas distingue maiúsculas de minúsculas
6. **Tipos de Argumentos**: Devem corresponder à assinatura da API (ponteiros, números, words etc.)
7. **Retorno**: Opcional; se omitido, o valor de retorno é ignorado
8. **Convenção de chamada**: stdcall (padrão da API Windows), em que a ordem dos argumentos é invertida e os tipos simples são passados por valor

## Boas Práticas

1. **Sempre verifique o retorno**: as APIs Windows retornam 0/NULL em caso de falha.
2. **Use comentários `[...]`**: documente cada parâmetro conforme a documentação da API.
3. **`GetLastError` imediato**: chame logo após a falha, pois outras chamadas podem sobrescrever o código de erro.
4. **Tipos corretos**: use `um ponteiro`, `um número`, `um word` etc. conforme a assinatura.
5. **Constantes**: passe flags como valores numéricos ou hexadecimais (`8`, `$00000008`).
6. **Ponteiros de saída**: use `O endereçamento dum <tipo>` para parâmetros de saída.
7. **Strings**: passe `O caractere inicial desta string` para `LPSTR`/`LPCSTR`.
8. **Estruturas**: passe os campos individualmente ou use `Decodifique` para assembly inline.
9. **Limpeza**: libere recursos (handles, memória) após o uso.
10. **Teste em isolamento**: verifique cada chamada separadamente.

## DLLs Comuns

| DLL            | Uso Comum                               |
|----------------|-----------------------------------------|
| `kernel32.dll` | Memória, processos, threads, arquivos   |
| `user32.dll`   | Janelas, mensagens, input, clipboard    |
| `gdi32.dll`    | Gráficos 2D, fontes, bitmaps            |
| `gdiplus.dll`  | Gráficos avançados (GDI+)               |
| `ole32.dll`    | COM, streams, armazenamento estruturado |
| `shell32.dll`  | Shell, arquivos, pastas, atalhos        |
| `advapi32.dll` | Registro, segurança, serviços           |
| `ws2_32.dll`   | Sockets (Winsock)                       |
| `winmm.dll`    | Multimídia, timers                      |
| `comctl32.dll` | Controles comuns                        |
