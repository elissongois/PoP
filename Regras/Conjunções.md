# Conjunções - Português Puro

## Visão Geral

Conjunções em Português Puro são palavras que **conectam** elementos, expressões ou instruções. Elas são usadas para separar campos em estruturas, parâmetros em rotinas, e elementos em listas.

---

## Lista de Conjunções

Português Puro possui **3 conjunções principais**:

| Conjunção | Tipo        | Uso                |
|-----------|-------------|--------------------|
| `e`       | Aditiva     | Adiciona elementos |
| `ou`      | Alternativa | Indica alternância |
| `nem`     | Negativa    | Negação aditiva    |

**Nota:** As conjunções inglesas `neither` e `nor` também são reconhecidas, mas devem ser removidas em versões futuras.

---

## Uso de Conjunções

### 1. Separação de Campos em Estruturas

Conjunções são usadas para **separar campos** em definições de tipos estruturados:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade e
  Uma string denominada email.
```

**Alternativas válidas:**

```pop
\\ Usando vírgula
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email.

\\ Usando "ou"
Uma pessoa é uma estrutura com
  Uma string denominada nome ou
  Um número denominado idade ou
  Uma string denominada email.
```

---

### 2. Separação de Parâmetros em Rotinas

Conjunções separam parâmetros em cabeçalhos de rotinas e funções:

```pop
Rotina para que se processe um nome e um sobrenome e uma idade:
  Escreva o nome junto com " " junto com o sobrenome no console.
  Escreva "Idade: " junto com a idade no console.
```

**Com vírgula:**

```pop
Rotina para que se processe um nome, um sobrenome, uma idade:
  \\ Implementação...
```

---

### 3. Chamadas de Rotinas com Múltiplos Argumentos

Conjunções separam argumentos em chamadas de rotinas:

```pop
Processe "João" e "Silva" e 30.
```

**Alternativas:**

```pop
\\ Usando vírgula
Processe "João", "Silva", 30.

\\ Usando "ou"
Processe "João" ou "Silva" ou 30.
```

---

### 4. Chamadas Externas (DLLs)

Conjunções separam parâmetros em chamadas de bibliotecas externas:

```pop
Processe "user32.dll" "MessageBoxA" com
  0 e
  "Mensagem" e
  "Título" e
  0
retornando o resultado.
```

---

### 5. Operador de Continuidade

A conjunção `e` também funciona como **operador de continuidade** em expressões:

```pop
\\ Múltiplas operações
Adicione 1 para o contador e
Multiplique o total por 2 e
Escreva o resultado no console.
```

---

## Vírgula como Conjunção

A **vírgula** (`,`) funciona como uma conjunção implícita:

```pop
\\ Equivalente a usar "e"
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X1,
  Uma coordenada denominada coordenada Y1,
  Uma coordenada denominada coordenada X2,
  Uma coordenada denominada coordenada Y2.
```

---

## Ponto-e-Vírgula como Separador

O **ponto-e-vírgula** (`;`) também pode ser usado como separador:

```pop
\\ Separando instruções
Atribua 0 para o contador; Atribua "" para a string; Retorne.
```

---

## Conjunção `nem`

A conjunção `nem` é usada para **negação aditiva**:

```pop
\\ Em condicionais (uso raro)
Se o número não for 0 nem for 1, processe.

\\ Equivalente a:
Se o número não for 0,
  Se o número não for 1, processe.
```

**Nota:** O uso de `nem` é menos comum e geralmente substituído por múltiplas condições.

---

## Diferença entre `e` e `ou`

### Conjunção `e` (Aditiva)

Indica que **todos** os elementos são incluídos:

```pop
\\ Todos os campos são obrigatórios
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade e
  Uma string denominada email.
```

### Conjunção `ou` (Alternativa)

Indica **alternância** ou **opções**:

```pop
\\ Campos alternativos (menos comum em definições)
Rotina para que se processe um número ou uma string:
  \\ Pode receber número OU string
```

**Importante:** Na prática, `e` e `ou` são tratados de forma similar pelo compilador em definições de estruturas e listas de parâmetros. A diferença é mais semântica do que sintática.

---

## Mapeamento para Langium

```langium
// ============================================================================
// CONJUNÇÕES
// ============================================================================

Conjuncao:
    'e' | 'ou' | 'nem';

// Conjunções inglesas (deprecated)
ConjuncaoInglesa:
    'neither' | 'nor';

// Separadores equivalentes
Separador:
    Conjuncao | ',' | ';';

// ============================================================================
// USO EM ESTRUTURAS
// ============================================================================

CamposEstrutura:
    campo+=Campo (separador=Separador campo+=Campo)* '.';

Campo:
    artigo=ArtigoIndefinido tipo=Tipo palavra='denominado' nome=ID;

// ============================================================================
// USO EM PARÂMETROS
// ============================================================================

Parametros:
    parametro+=Parametro (separador=Separador parametro+=Parametro)*;

Parametro:
    artigo=ArtigoIndefinido tipo=Tipo;

// ============================================================================
// OPERADOR DE CONTINUIDADE
// ============================================================================

OperadorContinuidade:
    'e';
```

---

## Observações Importantes

1. **Equivalência**: `e`, `ou` e `,` são tratados de forma similar
2. **Ponto final**: O último elemento sempre termina com `.`
3. **Flexibilidade**: Escolha a conjunção que torna o código mais legível
4. **Vírgula**: Mais comum em listas longas de campos
5. **`e`**: Mais natural em português, preferido em textos
6. **`ou`**: Indica alternância semântica
7. **`nem`**: Uso raro, principalmente em condicionais
8. **Case-insensitive**: Não diferencia maiúsculas de minúsculas
9. **Ponto-e-vírgula**: Usado para separar instruções na mesma linha
10. **Conjunções inglesas**: Devem ser evitadas (deprecated)

---

## Boas Práticas

1. **Use vírgulas** para listas longas de campos (mais limpo)
2. **Use `e`** para listas curtas (mais natural em português)
3. **Seja consistente** dentro do mesmo arquivo
4. **Evite `ou`** em definições de estruturas (pode causar confusão)
5. **Use `e`** como operador de continuidade
6. **Evite `nem`** (use múltiplas condições)
7. **Não misture** estilos no mesmo bloco
8. **Prefira vírgulas** em definições de tipos
9. **Prefira `e`** em chamadas de rotinas
10. **Evite conjunções inglesas** (deprecated)

---

## Exemplos Completos

### Estrutura com Vírgulas

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email,
  Uma string denominada telefone.
```

---

### Estrutura com `e`

```pop
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.
```

---

### Rotina com Múltiplos Parâmetros

```pop
Rotina para que se calcule área usando uma largura e uma altura:
  Atribua a largura vezes a altura para uma área.
  Escreva "Área: " junto com a área no console.
```

---

### Chamada com Conjunções

```pop
\\ Chamada com "e"
Calcule área usando 10 e 20.

\\ Chamada com vírgula
Calcule área usando 10, 20.
```

---

### Operador de Continuidade

```pop
Rotina para que se processe dados:
  Atribua 0 para o contador e
  Atribua "" para a string e
  Limpe o buffer e
  Retorne.
```

---

### Chamada Externa com Conjunções

```pop
Processe "kernel32.dll" "HeapAlloc" com
  o heap e
  8 e
  o tamanho
retornando o ponteiro.
```

---

## Comparação de Estilos

### Estilo 1: Vírgulas (Recomendado para estruturas)

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada X1,
  Uma coordenada denominada Y1,
  Uma coordenada denominada X2,
  Uma coordenada denominada Y2.
```

### Estilo 2: Conjunção `e` (Mais natural)

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada X1 e
  Uma coordenada denominada Y1 e
  Uma coordenada denominada X2 e
  Uma coordenada denominada Y2.
```

### Estilo 3: Misto (Evitar)

```pop
\\ ❌ NÃO RECOMENDADO - Inconsistente
Uma caixa é uma estrutura com
  Uma coordenada denominada X1,
  Uma coordenada denominada Y1 e
  Uma coordenada denominada X2,
  Uma coordenada denominada Y2.
```

---

## Estatísticas

- **Conjunções principais**: 3 (`e`, `ou`, `nem`)
- **Conjunções inglesas**: 2 (`neither`, `nor`) - deprecated
- **Separadores equivalentes**: 2 (`,`, `;`)
- **Uso mais comum**: `e` e `,`
- **Uso raro**: `nem`, `ou`
- **Case-insensitive**: Sim
- **Operador de continuidade**: `e`
