# Comentários - Português Puro

## Visão Geral

Português Puro suporta **dois tipos de comentários** para documentação e anotações no código.

---

## 1. Comentários de Linha (`\`)

### Sintaxe

```
\ Comentário até o fim da linha
```

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Delimitador** | Barra invertida `\` (uma ou mais) |
| **Escopo** | Da barra até o fim da linha (CRLF) |
| **Efeito** | Ignorado pelo compilador |
| **Estilo recomendado** | `\\` (duas barras) para mais destaque |

### Exemplos

```pop
\ Comentário no início da linha
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

### Desabilitando Código

```pop
Rotina para que se teste funcionalidade:
  Escreva "Teste ativo" no console.
  \\ Escreva "Teste desabilitado" no console.
  \\ Atribua 0 para o contador.
  \\ Pare.
```

### Comentários Multilinha

Use `\` em cada linha:

```pop
\ Este é um comentário longo que explica
\ o funcionamento detalhado desta rotina.
\ Cada linha precisa começar com \.
Rotina para que se calcule resultado:
  \\ Implementação importante (com destaque)
```

### Documentação com URLs

```pop
\\ Documentação: https://learn.microsoft.com/pt-br/windows/win32/debug/pe-format
Um Cabeçalho DOS é uma estrutura com
  Uma word denominada Signature,
  Uma word denominada NumberOfBytesOnLastPage.

\\ Consulte https://en.wikipedia.org/wiki/Thunk
Um endereço thunk é um endereço.
```

---

## 2. Comentários em Linha / Observações (`[...]`)

### Sintaxe

```
Um tipo [comentário em linha] denominado nome.
```

### Características

| Aspecto | Descrição |
|---------|-----------|
| **Delimitadores** | Colchetes `[` e `]` |
| **Escopo** | Entre os colchetes (não atravessa linhas) |
| **Efeito** | Ignorado pelo compilador (apenas documentação) |
| **Nome no compilador** | "Observações" |
| **Posição** | Após tipos ou nomes de campos |

### Exemplos em Definições de Tipos

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado ImageBase,
  Um número denominado MemoryAlignment, [SectionAlignment]
  Um número denominado FileAlignment,
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion]
  Uma word denominada OS_MinorVersion. [MinorOperatingSystemVersion]
```

### Exemplos em Campos de Estrutura

```pop
Um fragmento é uma lista com
  Uma etiqueta,
  Uma variável (referência) [Demanda Indireta, redirecionamento],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Um número [increment],
  Um sinalizador [load eax], \ SAL
  Um endereço.
```

### Exemplos em Variáveis Globais

```pop
\ Aliases e siglas
O caractere SOH é um byte igual a 1 [SOH].
O caractere NULL é um byte igual a 0 [NULL].

\ Notas técnicas
Uma coordenada é um número [em pixels].
Um ângulo é uma fração [em radianos].
```

### Combinando Ambos os Tipos

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado MemoryAlignment, [SectionAlignment] \ Alinhamento de seção
  Um número denominado FileAlignment, [FileAlignment] \ Alinhamento de arquivo
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion] \ Versão do SO
  Um número denominado SizeOfImageInMemory, [SizeOfImage] \ Tamanho em memória
  Um número denominado CheckSum. [Checksum] \ Soma de verificação
```

---

## Diferença: Comentários vs Qualificadores

### Comentários `[]`
- **Função**: Documentação em linha
- **Efeito**: Sempre ignorados
- **Uso**: Aliases, notas, referências

```pop
Um número [em pixels] denominado largura.
```

### Qualificadores `()`
- **Função**: Marcar referências ou documentar semanticamente
- **Efeito**: `(referência)` afeta compilação (indica ponteiro)
- **Uso**: Ponteiros, documentação semântica

```pop
Um nó denominado próximo (referência).
Um número (unsigned) denominado contador.
```

---

## Validação de Comentários em Linha

O compilador valida o balanceamento de colchetes:

| Código | Mensagem | Causa |
|--------|----------|-------|
| **#005** | Observações devem terminar com um colchete direito `]` | Falta `]` de fechamento |
| **#006** | Observações precisam iniciar com um colchete esquerdo `[` | Falta `[` de abertura |

### Regras de Balanceamento

1. Todo `[` deve ter um `]` correspondente
2. Comentários devem estar completos (não podem atravessar linhas)
3. **Suporte a colchetes aninhados**: `[texto [aninhado] aqui]`
4. Observações não podem abranger múltiplas linhas

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

## Antipadrões (Evitar)

### ❌ Comentários Redundantes

```pop
\ RUIM: Óbvio demais
Atribua 0 para o contador.  \ Atribui 0 para o contador

\ BOM: Explica o porquê
Atribua 0 para o contador.  \ Reinicia contagem para nova iteração
```

### ❌ Comentários Desatualizados

```pop
\ RUIM: Comentário não reflete código
\ Adiciona 10 ao contador
Adicione 1 para o contador.

\ BOM: Comentário correto
\ Incrementa contador
Adicione 1 para o contador.
```

### ❌ Código Comentado Permanentemente

```pop
\ RUIM: Código morto acumulado
Rotina para que se processe dados:
  \ Atribua 0 para o contador.
  \ Limpe a string.
  \ Escreva "Debug" no console.
  Processe os dados.

\ BOM: Código limpo
Rotina para que se processe dados:
  Processe os dados.
```

### ❌ Colchetes Não Balanceados

```pop
\ RUIM: Falta fechar colchete
Um número [em pixels denominado largura.

\ BOM: Balanceado
Um número [em pixels] denominado largura.
```

---

## Mapeamento para Langium

```langium
// Comentário (aceita uma ou mais barras)
Comentario:
    /\\+/ conteudo=/[^\r\n]*/;

// Comentário em linha (Colchetes)
Comentarioemlinha:
    '[' conteudo=/[^\]]+/ ']';

// Terminal para ignorar comentários
hidden terminal COMMENT_LINE:
    /\\+/ !('\r' | '\n')*;

hidden terminal COMMENT_emlinha:
    '[' (!']')* ']';
```

---

## Resumo Rápido

| Tipo | Delimitador | Escopo | Uso Principal |
|------|-------------|--------|---------------|
| **Linha** | `\` ou `\\` | Até fim da linha | Documentação, desabilitar código, notas longas |
| **Em linha** | `[...]` | Entre colchetes | Aliases, unidades, referências curtas |

> **Recomendação**: Use comentários para explicar **por que** o código faz algo, não **o que** ele faz. Prefira código claro e autoexplicativo a comentários excessivos.