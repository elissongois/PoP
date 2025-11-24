# Comentários - Português Puro

## Visão Geral

Comentários em Português Puro são **anotações** que servem para:

1. **Documentar** código com explicações
2. **Desabilitar** temporariamente trechos de código
3. **Adicionar** notas técnicas e referências
4. **Clarificar** lógica complexa

---

## Tipos de Comentários

### 1. Comentários de Linha
### 2. Comentários Em Linha (Observações)

---

## 1. Comentários de Linha

### Sintaxe

Comentários de linha usam **barra invertida** `\`:

```pop
\ Isto é um comentário de linha
```

### Características

- **Delimitador de início**: `\` (uma barra invertida)
- **Escopo**: Da barra invertida até o **fim da linha**
- **Efeito**: Todo texto após `\` é ignorado pelo compilador
- **Uso**: Comentários longos, desabilitar código, notas técnicas
- **Estilo**: Usar `\\` (dupla) é comum para dar **mais destaque** ao comentário
- **Delimitador de fim**: `\` (quebra de linha `CRLF`)

---

### Exemplos Básicos

```pop
\ Comentário no início da linha (uma barra)
Um número denominado contador.  \ Comentário no final da linha

\\ Comentário com mais destaque (duas barras)
Rotina para que se processe dados:
  \ Inicializa variáveis
  Atribua 0 para o contador.
  Atribua "" para a string.
  
  \\ Processa cada item (destaque)
  Itere.
    \ Verifica condição de parada
    Se o contador for maior que 100, pare.
    Adicione 1 para o contador.
  Reitere.
```

---

### Desabilitando Código

```pop
Rotina para que se teste funcionalidade:
  Escreva "Teste ativo" no console.
  \\ Escreva "Teste desabilitado" no console.
  \\ Atribua 0 para o contador.
  \\ Pare.
```

---

### Comentários de Documentação

```pop
\\ Documentação: https://learn.microsoft.com/pt-br/windows/win32/debug/pe-format
Um Cabeçalho DOS é uma estrutura com
  Uma word denominada Signature,
  Uma word denominada NumberOfBytesOnLastPage.

\\ Consulte https://en.wikipedia.org/wiki/Thunk
Um endereço thunk é um endereço.
```

---

### Comentários Multilinha

Para comentários que ocupam várias linhas, use `\` em cada linha:

```pop
\ Este é um comentário longo que explica
\ o funcionamento detalhado desta rotina.
\ Cada linha precisa começar com \.
Rotina para que se calcule resultado:
  \\ Implementação importante (com destaque)
```

---

## 2. Comentários Em Linha (Observações)

### Sintaxe

Comentários em linha usam **colchetes** `[]`:

```pop
Um número [comentário em linha] denominado contador.
```

### Características

- **Delimitadores**: `[` e `]`
- **Escopo**: Entre os colchetes
- **Efeito**: Ignorado pelo compilador (apenas documentação)
- **Uso**: Anotações curtas, aliases, notas técnicas
- **Posição**: Após tipos ou nomes de campos

---

### Exemplos em Definições de Tipos

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado ImageBase,
  Um número denominado MemoryAlignment, [SectionAlignment]
  Um número denominado FileAlignment,
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion]
  Uma word denominada OS_MinorVersion. [MinorOperatingSystemVersion]
```

---

### Exemplos em Campos de Estrutura

```pop
Um fragmento é uma lista com
  Uma etiqueta,
  Uma variável (referência) [Demanda Indireta, redirecionamento],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Um número [increment],
  Um sinalizador [load eax], \\ SAL
  Um endereço.
```

---

### Exemplos em Variáveis Globais

```pop
\\ Aliases e siglas
O caractere SOH é um byte igual a 1 [SOH].
O caractere NULL é um byte igual a 0 [NULL].

\\ Notas técnicas
Uma coordenada é um número [em pixels].
Um ângulo é uma fração [em radianos].
```

---

### Combinando Comentários

É possível combinar comentários em linha `[]` com comentários de linha `\\`:

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado MemoryAlignment, [SectionAlignment] \\ Alinhamento de seção
  Um número denominado FileAlignment, [FileAlignment] \\ Alinhamento de arquivo
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion] \\ Versão do SO
  Um número denominado SizeOfImageInMemory, [SizeOfImage] \\ Tamanho em memória
  Um número denominado CheckSum. [Checksum] \\ Soma de verificação
```

---

## Diferença entre Comentários e Qualificadores

### Comentários `[]`

- **Função**: Documentação em linha
- **Efeito**: Sempre ignorados
- **Uso**: Aliases, notas, referências

```pop
Um número [em pixels] denominado largura.
```

### Qualificadores `()`

- **Função**: Marcar referências ou documentar
- **Efeito**: `(referência)` afeta compilação
- **Uso**: Ponteiros, documentação semântica

```pop
Um nó denominado próximo (referência).
Um número (unsigned) denominado contador.
```

---

## Validação de Comentários em Linha

> **Nota**: No código-fonte do compilador, comentários em linha `[]` são referidos como **"observações"**.

### Rotinas de Processamento

O compilador possui rotinas específicas para processar comentários:

#### 1. Ignorar Comentários de Linha

```pop
Rotina para que se mova um percorredor (ignorando os comentários):
  [Itere.]
    Avance o percorredor.
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor não for o retorno de carro, reitere.
```

#### 2. Ignorar Observações (Comentários em Linha)

```pop
\\ Essa rotina é chamada quando o percorredor encontra um colchete esquerdo ou direito
Rotina para que se mova um percorredor (ignorando as observações):
  [Itere.]
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o retorno de carro, pare.
    
    \\ Balanceamento de colchetes aninhados
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o colchete esquerdo,
      Adicione 1 para uma contagem.
    
    \\ Um colchete dentro de colchete só é válido se tiver seu par oposto correspondente
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o colchete direito,
      Subtraia 1 desde a contagem.
    
    Avance o percorredor.
    Se a contagem for 0, pare.
  Reitere.
```

---

### Validação e Códigos de Erro

```pop
Rotina para que se mova um percorredor retornando uma string de erro (validação de comentários de bloco):
  Se a quantidade de caracteres deste segmento inicial deste percorredor for menor do que 2,
    Atribua "Código de Erro #005. Observações devem terminar com um colchete direito ']'." para a string de erro;
    Retorne.
  Se o conteúdo deste caractere final deste segmento inicial deste percorredor não for o colchete direito,
    Atribua "Código de Erro #006. Observações precisam iniciar com um colchete esquerdo '['." para a string de erro;
    Retorne.
```

### Códigos de Erro

| Código   | Mensagem                                                  | Causa                   |
|----------|-----------------------------------------------------------|-------------------------|
| **#005** | Observações devem terminar com um colchete direito `]`    | Falta `]` de fechamento |
| **#006** | Observações precisam iniciar com um colchete esquerdo `[` | Falta `[` de abertura   |

---

### Regras de Balanceamento

1. **Todo `[` deve ter um `]` correspondente**
2. **Comentários devem estar completos** (não podem atravessar linhas)
3. **Suporte a colchetes aninhados**: O compilador implementa lógica de balanceamento para permitir `[texto [aninhado] aqui]`
4. **Parada em quebra de linha**: Observações não podem abranger múltiplas linhas


---

## Observações Importantes

1. **Comentários de Linha**: Usam `\` (uma barra invertida, ou `\\` para destaque)
2. **Comentários em linha**: Usam `[]` (colchetes), também chamados de **"observações"** no código-fonte
3. **Ignorados**: Ambos são completamente ignorados pelo compilador
4. **Balanceamento**: Colchetes devem estar balanceados
5. **Aninhamento**: Suportado através de lógica de balanceamento de colchetes
6. **Multilinha**: Use `\` em cada linha para comentários longos
7. **Observações não atravessam linhas**: Comentários `[]` param em quebra de linha
8. **Combinação**: Pode usar `\` e `[]` juntos
9. **Documentação**: Preferir comentários para URLs e referências
10. **Clareza**: Comentários devem agregar valor, não repetir código
11. **Manutenção**: Atualizar comentários quando código mudar

---

## Mapeamento para Langium

```langium
// ============================================================================
// COMENTÁRIOS
// ============================================================================

// Comentário de Linha (aceita uma ou mais barras)
ComentarioLinha:
    /\\+/ conteudo=/[^\r\n]*/;

// Comentário em linha (Colchetes)
Comentarioem linha:
    '[' conteudo=/[^\]]+/ ']';

// Uso em Definições
CampoComComentario:
    tipo=Tipo comentario=Comentarioem linha? 'denominado' nome=ID comentario2=Comentarioem linha?;

// Terminal para ignorar comentários
hidden terminal COMMENT_LINE:
    /\\+/ !('\r' | '\n')*;

hidden terminal COMMENT_em linha:
    '[' (!']')* ']';
```

---

## Boas Práticas

1. **Use Comentários com Moderação**: Código claro é melhor que comentários
2. **Explique o "Porquê"**: Não o "O Quê" (código já mostra isso)
3. **Mantenha Atualizados**: Comentários desatualizados são piores que nenhum
4. **URLs e Referências**: Use comentários para links de documentação
5. **Desabilitar Código**: Use `\` temporariamente, depois remova
6. **Aliases**: Use `[]` para indicar nomes alternativos
7. **Notas Técnicas**: Use `[]` para unidades, limites, restrições
8. **Seja Conciso**: Comentários curtos e diretos
9. **Evite Redundância**: Não repita informação óbvia
10. **Consistência**: Use mesmo estilo em todo projeto

---

## Exemplos Práticos

### Documentação de Estrutura Complexa

```pop
\\ Formato Portable Executable (PE) baseado em COFF
\\ Referência: https://learn.microsoft.com/pt-br/windows/win32/debug/pe-format
Um Cabeçalho PE é uma estrutura com
  Um número denominado Signature,
  Uma word denominada MachineType,
  Uma word denominada NumberOfSections,
  Um número denominado TimeStamp,
  
  \\ PARTE OPCIONAL - _IMAGE_OPTIONAL_HEADER64
  Uma word denominada MagicNumber,
  Um byte denominado MajorLinkerVersion,
  Um byte denominado MinorLinkerVersion,
  Um número denominado SizeOfCodeInFile, \\ SizeOfCode
  Um número denominado AddressOfEntryPointInMemory, \\ AddressOfEntryPoint
  Um número denominado ImageBase.
```

---

### Comentários em Rotinas

```pop
Rotina para que se compile um endereço da pasta:
  Compile o endereço da pasta (inicialização). \\ #001
  Compile o endereço da pasta (arquivos de código fonte). \\ #002
  Compile o endereço da pasta (análise dos arquivos fornecidos). \\ #003
  Compile o endereço da pasta (identificação dos tipos das variáveis). \\ #004
  Compile o endereço da pasta (identificação de variáveis globais). \\ #005
  Compile o endereço da pasta (cabeçalhos de rotinas). \\ #006
  Compile o endereço da pasta (cálculo de tamanhos e deslocamentos). \\ #007
  Compile o endereço da pasta (transmutação). \\ #014
  Compile o endereço da pasta (vinculação). \\ #015
  Compile o endereço da pasta (etapa final). \\ #016
```

---

### Comentários Explicativos

```pop
\\ Strings são implementadas como uma struct que contém 2 membros:
\\ 1. O endereço do byte inicial
\\ 2. O endereço do byte final
\\ Desta forma é possível trocar o primeiro e o último bytes de uma string

\\ Parâmetros são passados por referência

\\ Os registradores EBP (ponteiro base) e ESP (ponteiro de pilha) 
\\ são usados para manipular a PILHA que é uma área da memória
\\ que você pode imaginar como uma pilha de pratos
```

---

### Código Desabilitado

```pop
Rotina para que se obtenha string desde argumentos:
  \\ Versão antiga - removida
  \\ Processe "kernel32.dll" "GetCommandLineW"
  \\   Retornando um endereço do caractere.
  
  \\ Nova versão - usando ANSI
  Processe "kernel32.dll" "GetCommandLineA"
    Retornando um endereço do caractere.
```

---

### Aliases e Notas Técnicas

```pop
\\ Caracteres de controle ASCII
O caractere SOH é um byte igual a 1 [SOH].
O caractere STX é um byte igual a 2 [STX].
O caractere ETX é um byte igual a 3 [ETX].
O caractere NULL é um byte igual a 0 [NULL].

\\ Constantes do sistema
A image base é um endereço igual a 4194304 [$00400000].
O tamanho máximo do caminho é um número igual a 260 [MAX_PATH].
```

---

### Fragmentos com Anotações

```pop
\\ O compilador gera 3 listas durante o processo de compilação:
\\ 1. Uma lista de tipos,
\\ 2. Uma lista de variáveis, e
\\ 3. Uma lista de rotinas
\\ Cada rotina consiste em um conjunto de instruções lógicas.
\\ Essas instruções lógicas são chamadas de "fragmentos"
\\ O compilador trabalha com apenas 22 tipos de instruções lógicas:

Um fragmento é uma lista com
  Uma etiqueta,
  Uma variável (referência) [Demanda Indireta, redirecionamento, increment],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Uma função (referência) [Demanda Externa],
  Um número [increment],
  Um sinalizador [load eax], \\ SAL
  Um endereço,
  Um texto hexadecimal denominado código.
```

---

## Diferenças com Outras Linguagens

| Aspecto        | Português Puro     | C/C++        | Python        | Java         |
|----------------|--------------------|--------------|---------------|--------------|
| Linha única    | `\`                | `//`         | `#`           | `//`         |
| Multilinha     | `\\` em cada linha | `/* ... */`  | `""" ... """` | `/* ... */`  |
| em linha       | `[...]`            | Não tem      | Não tem       | Não tem      |
| Documentação   | `\\` + `[]`        | `/** ... */` | `""" ... """` | `/** ... */` |
| Balanceamento  | Sim (colchetes)    | Sim (bloco)  | Não           | Sim (bloco)  |
| Case-sensitive | Não                | Sim          | Sim           | Sim          |

---

## Antipadrões (Evitar)

### ❌ Comentários Redundantes

```pop
\\ RUIM: Óbvio demais
Atribua 0 para o contador.  \\ Atribui 0 para o contador

\\ BOM: Explica o porquê
Atribua 0 para o contador.  \\ Reinicia contagem para nova iteração
```

---

### ❌ Comentários Desatualizados

```pop
\\ RUIM: Comentário não reflete código
\\ Adiciona 10 ao contador
Adicione 1 para o contador.

\\ BOM: Comentário correto
\\ Incrementa contador
Adicione 1 para o contador.
```

---

### ❌ Código Comentado Permanentemente

```pop
\\ RUIM: Código morto acumulado
Rotina para que se processe dados:
  \\ Atribua 0 para o contador.
  \\ Limpe a string.
  \\ Escreva "Debug" no console.
  Processe os dados.

\\ BOM: Código limpo
Rotina para que se processe dados:
  Processe os dados.
```

---

### ❌ Colchetes Não Balanceados

```pop
\\ RUIM: Falta fechar colchete
Um número [em pixels denominado largura.

\\ BOM: Balanceado
Um número [em pixels] denominado largura.
```

---

## Casos de Uso Comuns

### 1. Documentação de APIs Externas

```pop
\\ Consulte https://en.wikipedia.org/wiki/Thunk
\\ Thunks são as partes definitivas dos códigos em um sistema operacional
\\ que manipula as transições entre o código de 16 e 32 bits
Um endereço thunk é um endereço.
```

---

### 2. Explicação de Lógica Complexa

```pop
\\ Como é típico do Windows, a pilha cresce inversamente.
\\ Ou seja, o endereço do "topo" da pilha é sempre menor que o endereço da base.
\\ O registrador ESP sempre contém o endereço do "topo" da pilha.
\\ O registrador EBP contém o endereço da "base" da pilha da rotina atual.
```

---

### 3. Notas de Implementação

```pop
\\ Representação interna de um nome de rotina (moniker):
\\ • Não há artigos precedendo os tipos dos parâmetros
\\ • Os tipos dos parâmetros estão rodeados por colchetes
\\ • As preposições são expandidas para incluir seus sinônimos
Uma representação interna da rotina é uma string.
```

---

### 4. Referências de Campos

```pop
Um fragmento é uma lista com
  Uma variável (referência) [Demanda Indireta, redirecionamento, increment, load address],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Uma função (referência) [Demanda Externa].
```

---

### 5. Aliases e Constantes

```pop
\\ Etiquetas de fragmentos
A etiqueta de interrupção é uma etiqueta igual a 1.
A etiqueta de demanda externa é uma etiqueta igual a 2.
A etiqueta de demanda indireta é uma etiqueta igual a 3.
A etiqueta de demanda interna é uma etiqueta igual a 4.
```

---

## Estatísticas

- **Tipos de comentários**: 2 (linha e em linha)
- **Delimitador de linha**: `\` (ou `\\` para destaque)
- **Delimitadores em linha**: `[` e `]`
- **Nome no código-fonte**: "Observações" (para comentários em linha)
- **Efeito na compilação**: Nenhum (sempre ignorados)
- **Validação**: Balanceamento de colchetes (códigos de erro #005 e #006)
- **Aninhamento**: Suportado através de lógica de balanceamento
- **Multilinha**: `\` em cada linha (observações param em quebra de linha)
- **Uso mais comum**: Documentação de APIs e estruturas complexas

---

## Resumo

### Comentários de Linha `\`

- **Função**: Comentários longos, desabilitar código
- **Escopo**: Até o fim da linha
- **Uso**: Documentação, notas técnicas, URLs

### Comentários em linha `[]`

- **Função**: Anotações curtas, aliases
- **Escopo**: Entre colchetes
- **Uso**: Notas de campo, unidades, referências

### Recomendação Geral

Use comentários para explicar **por que** o código faz algo, não **o que** ele faz. Prefira código claro e autoexplicativo a comentários excessivos. Mantenha comentários atualizados e remova código comentado permanentemente.
