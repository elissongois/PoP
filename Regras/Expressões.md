# Expressões - Português Puro

## Visão Geral

Expressões em Português Puro são **combinações de valores, variáveis e operadores** que produzem um resultado. 
A linguagem usa **palavras em português** para operadores aritméticos e lógicos, mantendo a naturalidade da sintaxe.

---

## Características das Expressões

### Capacidades

✅ **Operadores aritméticos** em português (`mais`, `menos`, `vezes`, `dividido por`)  
✅ **Avaliação esquerda→direita** (sem precedência de operadores)  
✅ **Concatenação** (`junto com`, `seguido de`)  
✅ **Acesso a campos** (possessivos: `deste`, `desta`)  
✅ **Chamadas de função** (em condicionais)  
✅ **Valores literais** (números, strings, frações, hexadecimais)

### Restrições

❌ **Sem precedência de operadores** (avaliação sequencial)  
❌ **Sem parênteses** para agrupar expressões  
❌ **Sem operadores unários** (exceto negação em literais)

---

## Avaliação Esquerda→Direita

**Regra Fundamental:** Expressões são avaliadas **sequencialmente**, da **esquerda para a direita**, **sem precedência** de operadores.

### Exemplo

```pop
\\ Expressão: 2 + 3 * 4
Atribua 2 mais 3 vezes 4 para o resultado.
\\ Resultado: 20 (não 14!)
\\ Avaliação: (2 + 3) * 4 = 5 * 4 = 20
```

**Importante:** Não há precedência como em outras linguagens (`*` antes de `+`)

---

## Operadores Aritméticos

### Adição (`mais`)

```pop
Atribua o X mais o Y para o resultado.
Atribua 10 mais 5 para o total.
Atribua a largura mais a margem para o tamanho.
```

---

### Subtração (`menos`)

```pop
Atribua o X menos o Y para o resultado.
Atribua 10 menos 5 para a diferença.
Atribua a largura menos a margem para o espaço.
```

---

### Multiplicação (`vezes`)

```pop
Atribua o X vezes o Y para o resultado.
Atribua 10 vezes 5 para o produto.
Atribua a largura vezes a altura para a área.
```

---

### Divisão (`dividido por` / `dividido pelo`)

```pop
Atribua o X dividido pelo Y para o resultado.
Atribua 10 dividido por 5 para o quociente.
Atribua a área dividida pela largura para a altura.
```

---

## Operadores de Concatenação

### `junto com`

Concatena valores (strings, números, etc.):

```pop
Atribua "Olá" junto com " " junto com "Mundo" para a mensagem.
\\ Resultado: "Olá Mundo"

Atribua "Erro #" junto com o código junto com "!" para a mensagem.
\\ Resultado: "Erro #404!"
```

---

### `seguido de`

Sinônimo de `junto com`:

```pop
Atribua o nome seguido de " " seguido do sobrenome para o nome completo.
Escreva "Erro #" junto com o número seguido de "." no console.
```

```pop
\\ Múltiplos argumentos em chamadas
Escreva "Linha 1" junto com "Linha 2" junto com  "Linha 3" no console.
Acrescente "texto1" junto com  "texto2" junto com  "texto3" para a string.

\\ Concatenação de múltiplos valores
Atribua "Primeira parte" junto com " segunda parte" junto com" terceira parte" para a mensagem.
```
---

### Operador Variático `e`

O operador `e` é usado para **separar argumentos** na invocação de funções internas/externas com número variável de parâmetros.
Somente pode ser usado na instrução `Processe` conforme demonstrado abaixo:

```
\\ Invocação de função interna/externa com múltiplos parâmetros
Processe o ponteiro com o argumento1 e o argumento2 e o argumento3 [...] retornando um resultado.
Processe "NomeDaBiblioteca" "NomeDaFunção" com o argumento1 e o argumento2 e o argumento3 [...] retornando um resultado.
```

**Importante**: Não é permitido usar `e` logo após um `mais`, `menos`, `vezes` ou `dividido`:

```pop
\\ ❌ ERRADO - Concatenação de operadores não permitida
Atribua o X e mais o Y e menos o Z para o resultado.
Atribua a coordenada X1 e mais a largura e dividido por 2 para o centro.

\\ ✅ CORRETO - Remova o 'e'
Atribua o X mais o Y menos o Z para o resultado.
Atribua a coordenada X1 mais a largura dividido por 2 para o centro.
```

**Nota**: O operador `e` é documentado em detalhes em `Conjunções.md`.

---

## Expressões Complexas

### Múltiplos Operadores

```pop
\\ Avaliação esquerda→direita
Atribua 10 mais 5 menos 3 vezes 2 para o resultado.
\\ Passo 1: 10 + 5 = 15
\\ Passo 2: 15 - 3 = 12
\\ Passo 3: 12 * 2 = 24
\\ Resultado: 24
```

---

### Expressões com Campos

```pop
\\ Acesso a campos de estruturas
Atribua o número X deste par mais o número Y deste par para o total.

\\ Campos calculados
Atribua a largura desta caixa vezes a altura desta caixa para a área.

\\ Expressões aninhadas
Atribua o caractere inicial desta string mais a quantidade menos 1 ao caractere final.
```

---

### Expressões com Frações

```pop
\\ Frações em expressões
Atribua a largura vezes 3/4 para a nova largura.
Adicione 1/2 para a fração.
Multiplique o número por 2/3.
```

---

## Acesso a Membros

### Possessivos Adjacentes

Use `deste`, `desta`, `destes`, `destas` para acessar campos:

```pop
\\ Campo simples
o nome desta pessoa
a idade deste usuário

\\ Campos aninhados
o número X deste par de números
a coordenada Y1 desta caixa desta imagem

\\ Em expressões
Atribua a coordenada X1 desta caixa mais a largura à coordenada X2.
```

---

## Expressões em Atribuições

### Atribuição Simples

```pop
Atribua 10 para o número.
Atribua "texto" para a string.
Atribua sim ao sinalizador.
```

---

### Atribuição com Expressão

```pop
\\ Aritmética
Atribua o número X mais o número Y ao total.
Atribua a largura vezes a altura à área.

\\ Concatenação
Atribua o nome junto com " " junto com o sobrenome ao nome completo.

\\ Campos
Atribua a coordenada Y1 desta caixa mais a altura à coordenada Y2.
```

---

## Expressões em Operações

### Adicione

```pop
Adicione 1 para o contador.
Adicione a margem para a largura.
Adicione o número X mais o número Y para o total.
```

---

### Subtraia

```pop
Subtraia 1 desde o contador.
Subtraia a margem desde a largura.
Subtraia o número X menos o número Y desde o total.
```

---

### Multiplique

```pop
Multiplique o número por 2.
Multiplique a largura pelo fator.
Multiplique o total por 3/4.
```

---

### Divida

```pop
Divida o número por 2.
Divida a largura pela quantidade.
Divida o total pelo contador.
```

---

## Expressões Condicionais

Expressões em condicionais **devem ser funções deliberativas**:

```pop
\\ Comparação
Se o número for maior do que 10, ...
Se X for igual a Y, ...

\\ Estado
Se a string estiver em branco, ...
Se o ponteiro for inexistente, ...

\\ Negação
Se o número não for 0, ...
Se a string não estiver em branco, ...
```

---

## Exemplos Práticos

### Cálculo de Área

```pop
Rotina para que se calcule área:
  Atribua a largura vezes a altura para a área.
  Escreva "Área: " junto com a área no console.
```

---

### Manipulação de Ponteiros

```pop
\\ Aritmética de ponteiros
Atribua o caractere inicial desta string mais a quantidade para o caractere final.
Atribua o caractere inicial mais o offset menos 1 ao caractere inicial dum subtexto.
```

---

### Cálculo com Frações

```pop
Rotina para que se calcule proporção:
  Atribua a largura vezes 3/4 para a nova largura.
  Atribua a altura vezes 3/4 para a nova altura.
```

---

### Concatenação de Strings

```pop
Rotina para que se formate mensagem:
  Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
  Escreva a mensagem no console.
```

---

### Expressão com Múltiplos Campos

```pop
\\ Cálculo de centro
Atribua a coordenada X1 mais a coordenada X2 dividido por 2 ao centro X.
Atribua a coordenada Y1 mais a coordenada Y2 dividido por 2 ao centro Y.
```

---

## Conversão de Tipos

### Conversão Automática: Números para Strings

Em **concatenações**, números são **convertidos automaticamente** para strings:

```pop
Atribua "Total: " junto com o número para a mensagem.
\\ Se número = 42, resultado: "Total: 42"

Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
\\ Conversão automática do código numérico

Escreva "Resultado: " junto com 10 mais 5 no console.
\\ Saída: "Resultado: 15"
```

---

### Conversão Explícita: Strings para Números

**Não há conversão automática** de strings para números. Use `Converta`:

```pop
\\ ❌ ERRADO - Erro de compilação
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\\ ✅ CORRETO - Conversão explícita
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

---

### Outros Tipos de Conversão

```pop
\\ Fração para número
Converta 3/4 para uma fração decimal.

\\ Hexadecimal para número
Converta $FF para um byte.

\\ Número para hexadecimal
Converta o byte para uma string hexadecimal.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// EXPRESSÕES
// ============================================================================

Expressao:
    ExpressaoSimples | ExpressaoComposta;

ExpressaoSimples:
    ValorLiteral | Variavel | CampoAcesso;

ExpressaoComposta:
    esquerda=Expressao operador=Operador direita=Expressao;

// ============================================================================
// OPERADORES
// ============================================================================

Operador:
    OperadorAritmetico | OperadorConcatenacao;

OperadorAritmetico:
    'mais' | 'menos' | 'vezes' | 'dividido' ('por'|'pelo'|'pela');

OperadorConcatenacao:
    'junto' 'com' | 'seguido' 'de';

// ============================================================================
// ACESSO A CAMPOS
// ============================================================================

CampoAcesso:
    campo=ID possessivo=Possessivo estrutura=Variavel;

Possessivo:
    'deste' | 'desta' | 'destes' | 'destas' |
    'desse' | 'dessa' | 'desses' | 'dessas' |
    'daquele' | 'daquela' | 'daqueles' | 'daquelas';
```

---

## Observações Importantes

1. **Avaliação Sequencial**: Esquerda→direita, **sem precedência** de operadores
2. **Sem Parênteses**: Não há como agrupar sub-expressões
3. **Operadores em Português**: `mais`, `menos`, `vezes`, `dividido`
4. **Concatenação**: `junto com` e `seguido de` são sinônimos
5. **Operador de Continuidade**: `e` permite expressões em múltiplas linhas
6. **Conversão Automática**: Apenas em concatenações (número→string)
7. **Conversão Explícita**: Use `Converta` para string→número
8. **Acesso a Campos**: Use possessivos (`deste`, `desta`)
9. **Frações**: Podem ser usadas diretamente em expressões (`3/4`)
10. **Hexadecimais**: Podem ser usados como valores (`$FF`)
11. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
12. **Espaços**: Operadores são palavras separadas por espaços
13. **Divisão por Zero**: Não há verificação automática, programe defensivamente
14. **Overflow**: Cuidado com valores que excedem limites de tipo

---

## Boas Práticas

1. **Clareza**: Quebre expressões complexas em múltiplas linhas
2. **Ordem**: Lembre-se da avaliação esquerda→direita
3. **Conversões**: Use `Converta` explicitamente quando necessário
4. **Nomes Descritivos**: Use variáveis intermediárias para clareza
5. **Comentários**: Documente cálculos complexos
6. **Frações**: Use para valores exatos (evite aproximações)
7. **Validação**: Verifique divisão por zero
8. **Overflow**: Cuidado com valores muito grandes
9. **Concatenação**: Prefira `junto com` para legibilidade
10. **Campos**: Use possessivos corretos (adjacentes vs abrangentes)

---

## Erros Comuns

### ❌ Assumir Precedência

```pop
\\ CUIDADO: Não funciona como em outras linguagens
Atribua 2 mais 3 vezes 4 para o resultado.
\\ Resultado: 20 (não 14!)
\\ Avaliação: (2 + 3) * 4 = 20
```

**Solução:** Use variáveis intermediárias:

```pop
Atribua 3 vezes 4 para um produto.
Atribua 2 mais o produto para o resultado.
\\ Resultado: 14
```

---

### ❌ Tentar Usar Parênteses

```pop
\\ ❌ ERRADO - Parênteses não são suportados
Atribua (2 mais 3) vezes 4 para o resultado.
```

---

### ❌ Conversão Implícita

```pop
\\ ❌ ERRADO
Atribua "123" para o número.

\\ ✅ CORRETO
Converta "123" para o número.
```

---

## Tabela de Operadores

| Operador       | Tipo         | Exemplo              | Resultado |
|----------------|--------------|----------------------|-----------|
| `mais`         | Aritmético   | `10 mais 5`          | `15`      |
| `menos`        | Aritmético   | `10 menos 5`         | `5`       |
| `vezes`        | Aritmético   | `10 vezes 5`         | `50`      |
| `dividido por` | Aritmético   | `10 dividido por 5`  | `2`       |
| `junto com`    | Concatenação | `"A" junto com "B"`  | `"AB"`    |
| `seguido de`   | Concatenação | `"A" seguido de "B"` | `"AB"`    |

---

## Comparação com Outras Linguagens

| Português Puro     | C/Java/JavaScript | Python        |
|--------------------|-------------------|---------------|
| `X mais Y`         | `X + Y`           | `X + Y`       |
| `X menos Y`        | `X - Y`           | `X - Y`       |
| `X vezes Y`        | `X * Y`           | `X * Y`       |
| `X dividido por Y` | `X / Y`           | `X / Y`       |
| `X junto com Y`    | `X + Y` (strings) | `X + Y`       |
| (esquerda→direita) | (precedência)     | (precedência) |
| (sem parênteses)   | `(X + Y) * Z`     | `(X + Y) * Z` |

---

## Estatísticas

- **Operadores aritméticos**: 4 (`mais`, `menos`, `vezes`, `dividido`)
- **Operadores de concatenação**: 2 (`junto com`, `seguido de`)
- **Avaliação**: Esquerda→direita (sem precedência)
- **Parênteses**: Não suportados
- **Conversão automática**: Apenas número→string em concatenações
- **Acesso a campos**: Via possessivos
- **Tipos suportados**: Números, strings, frações, hexadecimais, booleanos
