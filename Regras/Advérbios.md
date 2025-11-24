# Advérbios - Português Puro

## Visão Geral

Advérbios em Português Puro são palavras que modificam ou complementam o significado de verbos, expressões e comandos. A linguagem possui duas categorias principais de advérbios:

1. **Advérbios de Negação**: Invertem o significado de comparações e condições
2. **Advérbios Ignoráveis**: Podem ser omitidos sem alterar o significado

---

## Categorias de Advérbios

### 1. Advérbios de Negação
### 2. Advérbios Ignoráveis

---

## 1. Advérbios de Negação

### Função

O advérbio de negação **inverte** o significado de comparações e expressões condicionais.

### Lista

| Advérbio | Função           | Uso                 |
|----------|------------------|---------------------|
| `não`    | Negação/Inversão | Inverte comparações |

### Sintaxe

```pop
Se <sujeito> não <verbo> <complemento>, <ação>.
```

---

## Uso em Expressões Condicionais

### Negação de Igualdade

```pop
\\ Negação simples
Se o número não for 0, continue.
Se a string não for "vazio", processe.
Se o valor não é igual a 10, retorne.

\\ Com verbos diferentes
Se o contador não está zerado, decremente.
Se o ponteiro não for nulo, desaloque.
```

---

### Negação de Comparação

```pop
\\ Comparações numéricas negadas
Se o valor não for maior que 10, incremente.
Se a idade não for menor que 18, permita acesso.

\\ Estados negados
Se o arquivo não existe, crie.
Se a lista não estiver vazia, processe.
Se o buffer não estiver em branco, limpe.
```

---

### Negação de Posse/Conteúdo

```pop
\\ Ter/Conter negado
Se a lista não tem elementos, retorne.
Se a string não contém espaços, valide.
Se o objeto não possui nome, atribua um padrão.
```

---

## Uso em Funções Deliberativas

```pop
\\ Validação com negação
Função para que se determine se um número não é zero:
  Se o número for 0, diga não.
  Diga sim.

\\ Verificação de estado
Função para que se determine se uma string não está vazia:
  Se a quantidade de caracteres desta string for 0, diga não.
  Diga sim.

\\ Múltiplas negações
Função para que se determine se um valor é válido:
  Se o valor não for nulo e não for negativo, diga sim.
  Diga não.
```

---

## Combinação com Outros Operadores

### Negação + Conjunções

```pop
\\ E lógico com negação
Se o nome não estiver em branco e a idade não for 0, valide.

\\ OU lógico com negação
Se o status não for "ativo" ou não for "pendente", alerte.

\\ NEM
Se o valor não for "A" nem for "B", rejeite.
```

---

### Negação Dupla

```pop
\\ Duas negações (afirmação)
Se não é verdade que o número não é positivo, continue.
\\ Equivalente a: Se o número é positivo, continue.
```

**Nota**: Evite negações duplas para manter clareza.

---

## 2. Advérbios Ignoráveis

### Função

Advérbios que podem ser **omitidos** sem alterar o significado da instrução. São usados apenas para tornar o código mais natural e legível.

### Lista

| Advérbio | Função                 | Uso                           |
|----------|------------------------|-------------------------------|
| `já`     | Ênfase temporal        | Opcional em qualquer contexto |
| `ainda`  | Ênfase de continuidade | Opcional em qualquer contexto |

---

## Uso de Advérbios Ignoráveis

### Com `já`

```pop
\\ Com "já"
Se o arquivo já existe, abra.
Se o contador já for 10, pare.

\\ Sem "já" (equivalente)
Se o arquivo existe, abra.
Se o contador for 10, pare.
```

---

### Com `ainda`

```pop
\\ Com "ainda"
Se o processo ainda está executando, aguarde.
Se ainda há elementos na lista, continue.

\\ Sem "ainda" (equivalente)
Se o processo está executando, aguarde.
Se há elementos na lista, continue.
```

---

### Combinação de Ignoráveis

```pop
\\ Com ambos
Se o sistema já está pronto e ainda tem recursos, inicie.

\\ Sem ambos (equivalente)
Se o sistema está pronto e tem recursos, inicie.
```

---

## Observações Importantes

1. **Negação Única**: `não` é o único advérbio de negação
2. **Case-Insensitive**: `não`, `NÃO`, `Não` são equivalentes
3. **Posição**: `não` sempre precede o verbo
4. **Ignoráveis**: `já` e `ainda` podem aparecer em qualquer posição
5. **Clareza**: Evite negações duplas ou triplas
6. **Naturalidade**: Use ignoráveis para tornar código mais legível
7. **Opcional**: Ignoráveis nunca são obrigatórios
8. **Sem Efeito**: Ignoráveis não afetam a lógica do programa
9. **Estilo**: Use ignoráveis consistentemente no projeto
10. **Compilação**: Ignoráveis são descartados durante compilação

---

## Mapeamento para Langium

```langium
// ============================================================================
// ADVÉRBIOS
// ============================================================================

Adverbio:
    AdverbioNegacao | AdverbioIgnoravel;

// Advérbio de Negação
AdverbioNegacao:
    'não';

// Advérbios Ignoráveis
AdverbioIgnoravel:
    'já' | 'ainda';

// Uso em Expressões Condicionais
ExpressaoCondicional:
    'Se' sujeito=Termo negacao=AdverbioNegacao? verbo=Verbo complemento=Termo ',' acao=Comando '.';

// Uso em Funções Deliberativas
FuncaoDeliberativa:
    'Função' 'para' 'que' 'se' 'determine' 'se' 
    sujeito=Termo negacao=AdverbioNegacao? verbo=Verbo complemento=Termo ':' 
    corpo=Bloco;
```

---

## Boas Práticas

1. **Use `não` para Negação**: É claro e direto
2. **Evite Negações Múltiplas**: Prefira afirmações positivas
3. **Ignoráveis com Moderação**: Use apenas quando melhorar legibilidade
4. **Consistência**: Se usar ignoráveis, use em todo o projeto
5. **Clareza sobre Estilo**: Priorize código claro sobre natural
6. **Documentação**: Comente lógicas com negações complexas
7. **Testes**: Teste especialmente condições negadas
8. **Refatoração**: Considere funções auxiliares para negações complexas
9. **Leitura**: Leia em voz alta para verificar naturalidade
10. **Simplicidade**: Prefira lógica simples e direta

---

## Exemplos Práticos

### Validação de Entrada

```pop
Rotina para que se valide entrada:
  \\ Com negação
  Se o nome não estiver em branco e a idade não for 0,
    Processe os dados;
    Retorne.
  
  \\ Mensagem de erro
  Escreva "Dados inválidos!" no console.
```

---

### Verificação de Estado

```pop
Função para que se determine se o sistema está pronto:
  \\ Com ignoráveis e negação
  Se o banco já está conectado e o cache ainda não está inicializado,
    Diga não.
  
  \\ Sem ignoráveis (equivalente)
  Se o banco está conectado e o cache não está inicializado,
    Diga não.
  
  Diga sim.
```

---

### Controle de Fluxo

```pop
Rotina para que se processe lista:
  Itere.
    \\ Negação em condição de parada
    Se a lista não tem mais elementos, pare.
    
    \\ Com ignorável
    Se o item já foi processado, reitere.
    
    Processe o próximo item.
  Reitere.
```

---

### Lógica Complexa

```pop
Função para que se determine se pode prosseguir:
  \\ Múltiplas negações
  Se o usuário não está autenticado, diga não.
  Se o recurso não está disponível, diga não.
  Se a permissão não foi concedida, diga não.
  
  \\ Tudo OK
  Diga sim.
```

---

### Comparação: Com e Sem Ignoráveis

```pop
\\ VERSÃO 1: Com ignoráveis (mais natural)
Rotina para que se inicie aplicação:
  Se o sistema já está configurado e ainda tem memória disponível,
    Inicie os serviços;
    Retorne.
  
  Escreva "Sistema não está pronto" no console.

\\ VERSÃO 2: Sem ignoráveis (mais concisa)
Rotina para que se inicie aplicação:
  Se o sistema está configurado e tem memória disponível,
    Inicie os serviores;
    Retorne.
  
  Escreva "Sistema não está pronto" no console.

\\ Ambas são equivalentes!
```

---

## Diferenças com Outras Linguagens

| Aspecto              | Português Puro        | Outras Linguagens      |
|----------------------|-----------------------|------------------------|
| Negação              | `não`                 | `!`, `not`, `NOT`      |
| Posição da negação   | Antes do verbo        | Antes da expressão     |
| Advérbios ignoráveis | `já`, `ainda`         | Não existem            |
| Negação dupla        | Possível (evitar)     | `!!` (double negation) |
| Case-sensitive       | Não                   | Geralmente sim         |
| Naturalidade         | Alta (português real) | Baixa (sintaxe formal) |

---

## Exemplos de Negação em Diferentes Contextos

### Negação de Igualdade

```pop
Se o valor não for 0, ...
Se a string não é "vazio", ...
Se o ponteiro não está nulo, ...
```

---

### Negação de Comparação Numérica

```pop
Se o número não for maior que 10, ...
Se a idade não for menor que 18, ...
Se o total não excede o limite, ...
```

---

### Negação de Estado

```pop
Se o arquivo não existe, ...
Se a variável não estiver em branco, ...
Se o sistema não está pronto, ...
```

---

### Negação de Posse

```pop
Se a lista não tem elementos, ...
Se a string não contém espaços, ...
Se o objeto não possui nome, ...
```

---

## Antipadrões (Evitar)

### ❌ Negação Tripla

```pop
\\ RUIM: Muito confuso
Se não é verdade que o número não é não-positivo, ...

\\ BOM: Direto e claro
Se o número for positivo, ...
```

---

### ❌ Excesso de Ignoráveis

```pop
\\ RUIM: Poluído
Se o sistema já ainda está pronto, ...

\\ BOM: Moderado
Se o sistema já está pronto, ...
\\ ou
Se o sistema está pronto, ...
```

---

### ❌ Negação Ambígua

```pop
\\ RUIM: Ambíguo
Se o valor não for maior que 10 ou menor que 0, ...

\\ BOM: Claro com parênteses (se suportado) ou função auxiliar
Função para que se determine se o valor está fora do intervalo:
  Se o valor for maior que 10, diga sim.
  Se o valor for menor que 0, diga sim.
  Diga não.

Se o valor está fora do intervalo, ...
```

---

## Estatísticas

- **Total de advérbios**: 3
- **Advérbios de negação**: 1 (`não`)
- **Advérbios ignoráveis**: 2 (`já`, `ainda`)
- **Uso mais comum**: `não` (negação)
- **Frequência de ignoráveis**: Baixa (opcional)
- **Case-insensitive**: Sim
- **Posição**: Variável (exceto `não` que precede verbo)
- **Efeito na compilação**: Ignoráveis são removidos
- **Impacto na lógica**: Apenas `não` afeta lógica

---

## Resumo

### Advérbio de Negação (`não`)

- **Função**: Inverte comparações e condições
- **Posição**: Sempre antes do verbo
- **Obrigatório**: Quando negação é necessária
- **Efeito**: Altera a lógica do programa

### Advérbios Ignoráveis (`já`, `ainda`)

- **Função**: Tornar código mais natural
- **Posição**: Flexível
- **Obrigatório**: Nunca
- **Efeito**: Nenhum (removidos na compilação)

### Recomendação Geral

Use `não` quando precisar negar condições. Use `já` e `ainda` com moderação, apenas quando melhorarem significativamente a legibilidade do código.
