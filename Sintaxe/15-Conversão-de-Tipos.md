# Conversão de Tipos

## Visão Geral

Português Puro suporta três modalidades de conversão de tipos:

1. **Conversão Automática** (implícita) - Apenas número → string em concatenações
2. **Conversão Explícita** - Via comando `Converta`
3. **Conversão Forçada (Casting)** - Via `tal como` / `tal qual` ou `like` / `as`

---

## 1. Conversão Automática

### Número → String (em Concatenações)

Em **concatenações**, números são **convertidos automaticamente** para strings:

```pop
Atribua "Total: " junto com o número para a mensagem.
\ Se número = 42, resultado: "Total: 42"

Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
\ Conversão automática do código numérico

Escreva "Resultado: " junto com 10 mais 5 no console.
\ Saída: "Resultado: 15"
```

### Fração → String

```pop
Converta a fração para uma string.
\ Resultado: "1/2" ou "1+1/2" (numeral misto)
```

### Número → Fração

```pop
Atribua o número para uma fração.
\ Resultado: número/1
```

---

## 2. Conversão Explícita (`Converta`)

### Sintaxe Básica

```pop
Converta <origem> para <destino>.
```

### Conversões Comuns

```pop
\ Para String
Converta o número para uma string.
Converta a fração para uma string denominada texto.
Converta o sinalizador para uma segunda string.
Converta o ponteiro para uma string.

\ Para Número
Converta a string para um número.
Converta a string para o número.

\ Para Fração
Converta a fração para um numeral misto.
Converta o número para uma fração.

\ Conversões Especiais
Converta o byte para uma cifra hexadecimal.
Converta a cor para um código da cor.
Converta a URL para uma URL simplificada.
```

### Regras Importantes

**Não há conversão automática** de strings para números. Use `Converta`:

```pop
\ ❌ ERRADO - Erro de compilação
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\ ✅ CORRETO - Conversão explícita
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

---

## 3. Conversão Forçada / Casting

### 3.1 Operadores `tal como` / `tal qual`

Forçam o compilador a **tratar** um tipo como outro tipo (cast).

**Sintaxe:**

```pop
<operação> <valor> tal como <tipo>
<operação> <valor> tal qual <tipo>
```

**Exemplos:**

```pop
\ Cast em atribuição
Atribua o byte à cifra binária tal como um byte.

\ Cast em conversão
Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
Converta o ponteiro para uma string tal qual uma cifra hexadecimal.

\ Cast em operações
Disjuncione logicamente o ponteiro tal como um número com o número.

\ Cast em chamadas
Destrinche a variável global tal como uma variável.
Redimensione a caixa arredondada tal como uma caixa usando a fração.
```

**Nota:** `tal como` e `tal qual` são sinônimos.

---

### 3.2 Operadores `like` / `as` (Casting de Tipos)

Conversão explícita de tipos (casting) utilizando conjunções modificadoras.

**Operadores:**
- **`like`**: Converte o valor anterior para o tipo especificado.
- **`as`**: Funciona de forma idêntica ao `like`, mas **não pode** ser seguido por um artigo indefinido (para evitar ambiguidade com "as" artigo definido plural).

**Sintaxe:**

```pop
valor like um <tipo>
valor as um <tipo>
```

**Exemplos:**

```pop
\ Conversão de ponteiro genérico para ponteiro tipado
Atribua o ponteiro genérico like um ponteiro para byte para o ponteiro específico.

\ Conversão de estrutura
Atribua a estrutura A as uma estrutura B para a variável.

\ Uso em expressões
Se o valor like um byte for maior que 10...
```

**Regras:**
1. **Compatibilidade**: A conversão deve ser entre tipos compatíveis em tamanho ou estrutura.
2. **Restrição do `as`**: O operador `as` não deve ser usado se a próxima palavra for um artigo indefinido que possa ser confundido. Na prática, prefira `like` quando seguido de `um`/`uma`.
3. **Uso comum**: Muito utilizado para tratar ponteiros genéricos ou reinterpretar dados em memória.

---

## 4. Tabela Resumo de Conversões

| Origem → Destino | Tipo | Comando/Operador | Exemplo |
|------------------|------|------------------|---------|
| Número → String | Automática | `junto com` | `"Total: " junto com 42` |
| Fração → String | Explícita | `Converta` | `Converta a fração para uma string` |
| Número → Fração | Explícita | `Atribua` | `Atribua o número para uma fração` |
| String → Número | Explícita | `Converta` | `Converta "123" para o número` |
| Byte → Hexadecimal | Explícita | `Converta` | `Converta $FF para um byte` |
| Número → Hexadecimal | Explícita | `Converta` | `Converta o byte para uma string hexadecimal` |
| Ponteiro genérico → tipado | Casting | `like` / `tal como` | `ponteiro like um ponteiro para byte` |
| Estrutura A → Estrutura B | Casting | `as` / `tal qual` | `estrutura A as uma estrutura B` |
| Qualquer → tipo específico | Casting | `tal como` / `tal qual` | `valor tal como um tipo` |

---

## 5. Conversão em Diferentes Contextos

### Em Atribuições

```pop
Atribua 10 para o número.
Atribua "texto" para a string.
Atribua sim ao sinalizador.
```

### Em Expressões

```pop
\ Aritmética
Atribua o número X mais o número Y ao total.

\ Concatenação
Atribua "Total: " junto com o número ao texto.

\ Com campos
Atribua a coordenada Y1 desta caixa mais a altura à coordenada Y2.
```

### Em Operações

```pop
Adicione 1 para o contador.
Multiplique a largura pelo fator.
Divida o total pelo contador.
```

### Em Condicionais

```pop
Se o número for maior do que 10, pare.
Se a string não estiver em branco, processe.
Se o ponteiro for inexistente, retorne.
```

### Em Chamadas Externas (API)

```pop
Processe "kernel32.dll" "GetConsoleMode" com
  O número identificador do fluxo de entrada padrão e
  O endereçamento dum número denominado modo do console
Retornando um status de erro.
```

---

## 6. Observações Importantes

1. **Apenas Automática**: Número → String em concatenações
2. **String → Número**: Sempre explícita via `Converta`
3. **Frações**: Podem ser usadas diretamente em expressões (`3/4`)
4. **Hexadecimais**: Podem ser usados como valores (`$FF`)
5. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
6. **Compatibilidade**: Casting exige tipos compatíveis em tamanho/estrutura
7. **`tal como` vs `tal qual`**: Sinônimos
8. **`like` vs `as`**: Prefira `like` quando seguido de artigo indefinido
9. **Qualificadores**: `[unsigned]`, `[que aponta]` são ignorados pelo compilador
10. **Conversão de ponteiros**: Comum para reinterpretar memória

---

## 7. Boas Práticas

1. **Use `Converta` explicitamente** para string → número
2. **Prefira frações** para valores racionais exatos (evite aproximações)
4. **Documente casts** complexos com comentários `[...]`
5. **Valide antes de converter** (ex: string numérica válida)
6. **Use `Preserve`** ao converter parâmetros que não devem ser modificados
7. **Teste conversões** de borda (0, máximo, mínimo, strings vazias)
8. **Evite `as`** quando seguido de `um`/`uma` (use `like`)

---

## 8. Erros Comuns

### ❌ Conversão Implícita Inválida

```pop
\ ❌ ERRADO
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\ ✅ CORRETO
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

### ❌ Cast Incompatível

```pop
\ ❌ ERRADO - Tipos incompatíveis
Atribua a string tal como um número para o valor.

\ ✅ CORRETO - Conversão explícita
Converta a string para um número.
Atribua o número para o valor.
```

### ❌ Uso Incorreto de `as`

```pop
\ ❌ AMBÍGUO - 'as' seguido de artigo indefinido
Atribua o ponteiro as um ponteiro para byte para o ptr.

\ ✅ CORRETO - Use 'like'
Atribua o ponteiro like um ponteiro para byte para o ptr.
```

---

## 9. Mapeamento para Langium

```langium
// ============================================================================
// CONVERSÃO
// ============================================================================

Conversao:
    'Converta' origem=Expressao ('tal' ('como'|'qual') tipo=Tipo)? 'para' destino=Variavel '.';

// ============================================================================
// OPERADORES DE CASTING
// ============================================================================

OperadorCasting:
    'like' | 'as' | 'tal' ('como' | 'qual');

// ============================================================================
// EXPRESSÕES COM CONVERSÃO
// ============================================================================

ExpressaoComCasting:
    esquerda=Expressao operador=OperadorCasting tipo=Tipo;
```

---

## 10. Estatísticas

- **Conversão automática**: 1 direção (número → string)
- **Comando explícito**: `Converta`
- **Operadores de casting**: 4 (`tal como`, `tal qual`, `like`, `as`)
- **Frações**: Suportadas nativamente (`numerador/denominador`)
- **Hexadecimais**: Prefixo `$`, usados como valores
- **Conversão de ponteiros**: Comum via `like`/`as`/`tal como`