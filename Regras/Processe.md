# Regras Gramaticais - Português Puro
## Guia para Implementação em Langium

---

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

### Exemplos

#### Exemplo simples - sem argumentos
```pop
Processe "user32.dll" "CloseClipboard".
```

#### Exemplo com retorno
```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

#### Exemplo com múltiplos argumentos
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

#### Exemplo completo da biblioteca padrão
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

### Observações Importantes

1. **Chamada Indireta**: Quando não usa aspas, a dll e função são expressões (ex: `o release deste VTable deste istream`)
2. **Argumento Único**: Quando há apenas um argumento, não há delimitador `e`
3. **Múltiplos Argumentos**: Separados por `e`
4. **Comentários Inline**: Podem aparecer após cada argumento entre `[...]`

### Mapeamento para Langium (Atualizado)
```
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

