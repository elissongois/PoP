# Laços - Português Puro

## Visão Geral

Português Puro possui **um único tipo de laço** de repetição, que funciona de forma similar a um **`while(true)`** em outras linguagens. O laço é controlado por três palavras-chave principais: `Itere`, `Reitere` e `Pare`.

---

## Características dos Laços

### Capacidades

✅ **Laço infinito por padrão** (`while(true)`)  
✅ **Controle explícito de fluxo** (`Pare`, `Retorne`)  
✅ **Pode conter condicionais** (`Se`)  
✅ **Pode chamar rotinas e funções**  
✅ **Pode declarar variáveis locais**  
✅ **Variáveis persistem após o laço** (escopo da rotina)  
✅ **`Itere` pode ser omitido** no início da rotina

### Restrições

❌ **Não permite aninhamento** (laços dentro de laços)  
❌ **Apenas um tipo de laço** (não há `for`, `while`, `do-while`)  
❌ **Não há iteradores automáticos** (use contadores manuais)

---

## Palavras-Chave

### 1. `Itere` - Início do Laço

**Função:** Marca o **início** do bloco de repetição

**Sintaxe:**

```pop
Itere.
  \\ Código do laço...
Reitere.
```

**Omissão:** Quando o laço começa na **primeira linha** da rotina, `Itere` pode ser omitido:

```pop
Rotina para que se processe eventos:
  \\ Itere está implícito aqui
  Desenfileire um evento.
  Se o evento for inexistente, pare.
  Processe o evento.
Reitere.
```

---

### 2. `Reitere` - Volta ao Início

**Função:** Retorna o fluxo de execução para o **início do laço**

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, reitere. \\ Volta ao início
  \\ Mais código...
Reitere. \\ Fim do laço
```

**Equivalente a:** `continue` em outras linguagens

---

### 3. `Pare` - Sai do Laço

**Função:** **Interrompe** o laço e salta para a linha após `Reitere`

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, pare. \\ Sai do laço
  \\ Mais código...
Reitere.
\\ Execução continua aqui após Pare
```

**Equivalente a:** `break` em outras linguagens

---

### 4. `Retorne` - Sai da Rotina

**Função:** **Abandona** a rotina atual (e consequentemente o laço)

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, retorne. \\ Sai da rotina inteira
  \\ Mais código...
Reitere.
```

**Equivalente a:** `return` em outras linguagens

---

## Sintaxe Completa

### Estrutura Básica

```pop
Itere.
  <instruções>
Reitere.
```

### Estrutura com Omissão de `Itere`

```pop
Rotina para que se faça algo:
  <instruções> \\ Itere implícito
Reitere.
```

---

## Exemplos Básicos

### 1. Laço Simples com Contador

```pop
Rotina para que se conte até dez:
  Atribua 0 para um contador.
  Itere.
    Adicione 1 para o contador.
    Escreva o contador no console.
    Se o contador for maior do que ou igual a 10, pare.
  Reitere.
```

**Saída:**

```pwsh
1
2
3
...
10
```

---

### 2. Laço com `Itere` Omitido

```pop
Rotina para que se processe eventos:
  \\ Itere está implícito
  Desenfileire um evento.
  Se o evento for inexistente, pare.
  Processe o evento.
Reitere.
```

---

### 3. Laço com `Reitere` (Continue)

```pop
Rotina para que se processe números pares:
  Atribua 0 para um contador.
  Itere.
    Adicione 1 para o contador.
    Se o contador for maior do que 10, pare.
    Se o contador for ímpar, reitere. \\ Pula números ímpares
    Escreva o contador no console. \\ Só executa para pares
  Reitere.
```

**Saída:**

```cmd
2
4
6
8
10
```

---

### 4. Laço com `Retorne`

```pop
Rotina para que se encontre um item em uma lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \\ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \\ Encontrou e sai da rotina
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

---

## Exemplos Avançados

### 5. Laço com Múltiplas Condições de Saída

```pop
Rotina para que se leia entrada do usuário:
  Itere.
    Leia uma linha desde o console.
    Se a linha estiver em branco, pare. \\ Entrada vazia
    Se a linha for "sair", pare. \\ Comando de saída
    Se a linha for "ajuda", mostre a ajuda; reitere. \\ Continua
    Processe a linha.
  Reitere.
```

---

### 6. Laço com Variável Local

```pop
Rotina para que se some números:
  Atribua 0 para um total.
  Itere.
    Leia um número desde o console.
    Se o número for 0, pare.
    Adicione o número para o total.
  Reitere.
  Escreva "Total: " junto com o total no console.
```

---

### 7. Laço Processando String Caractere por Caractere

```pop
Rotina para que se conte vogais em uma string:
  Atribua 0 para uma contagem.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Adicione 1 para a contagem.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com a contagem no console.
```

---

### 8. Laço Processando Lista

```pop
Rotina para que se destrua todos os itens de uma lista:
  Itere.
    Atribua a lista inicial destas listas para uma lista.
    Se a lista for inexistente, pare.
    Remova a lista desde as listas.
    Destrua a lista.
  Reitere.
```

---

### 9. Laço com Chamada de Rotina

```pop
Rotina para que se processe arquivo linha por linha:
  Abra o arquivo.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Processe a linha. \\ Chamada de rotina
  Reitere.
  Feche o arquivo.
```

---

### 10. Laço com Validação

```pop
Rotina para que se obtenha entrada válida:
  Itere.
    Escreva "Digite um número entre 1 e 10: " no console.
    Leia um número desde o console.
    Se o número for menor do que 1, reitere.
    Se o número for maior do que 10, reitere.
    Pare. \\ Entrada válida
  Reitere.
  Escreva "Você digitou: " junto com o número no console.
```

---

## Escopo de Variáveis em Laços

### Variáveis Persistem Após o Laço

Variáveis locais declaradas **dentro do laço** continuam existindo no **escopo da rotina**:

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Atribua "João" para uma string denominada nome. \\ Declarada no laço
    Se o nome for "João", pare.
  Reitere.
  Escreva o nome para StdOut. \\ Ainda acessível aqui
  Feche o programa.
```

**Importante:** A variável `nome` **não é destruída** ao sair do laço.

---

### Declaração em Expressão Condicional

É possível declarar variáveis diretamente na **expressão condicional**:

```pop
Itere.
  Se um número for maior que 10, pare. \\ Declara 'número' aqui
  Adicione 1 ao número.
Reitere.
```

---

## Padrões Comuns

### Padrão 1: Contador Simples

```pop
Atribua 0 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que N, pare.
  \\ Processa...
Reitere.
```

---

### Padrão 2: Processamento de Lista

```pop
Atribua a lista inicial destas listas para uma lista.
Itere.
  Se a lista for inexistente, pare.
  \\ Processa a lista...
  Atribua a lista posterior desta lista à lista.
Reitere.
```

---

### Padrão 3: Leitura até Condição

```pop
Itere.
  Leia algo.
  Se algo atende condição, pare.
  \\ Processa algo...
Reitere.
```

---

### Padrão 4: Loop Infinito com Saída Condicional

```pop
Itere.
  Processe evento.
  Se deve sair, pare.
Reitere.
```

---

### Padrão 5: Percorrendo String

```pop
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  \\ Processa caractere...
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

---

## Comparação com Outras Linguagens

| Português Puro     | C/Java/JavaScript  | Python        |
|--------------------|--------------------|---------------|
| `Itere`            | `while(true) {`    | `while True:` |
| `Reitere` (fim)    | `}` (fim do while) | (desindenta)  |
| `Reitere` (dentro) | `continue`         | `continue`    |
| `Pare`             | `break`            | `break`       |
| `Retorne`          | `return`           | `return`      |

**Nota:** `Reitere` tem **dois usos**:

- **No final do bloco**: Marca o fim do laço (equivalente a `}` em C)
- **Dentro do bloco**: Volta ao início do laço (equivalente a `continue`)

---

## Aninhamento NÃO É Permitido

### ❌ ERRADO - Laços Aninhados

```pop
\\ ISTO NÃO É PERMITIDO
Itere.
  Itere. \\ ❌ Laço dentro de laço
    \\ ...
  Reitere.
Reitere.
```

### ✅ CORRETO - Use Rotinas Auxiliares

```pop
Rotina para que se processe matriz:
  Atribua 0 para uma linha.
  Itere.
    Se a linha for maior do que 10, pare.
    Processe a linha. \\ Chama rotina auxiliar
    Adicione 1 para a linha.
  Reitere.

Rotina para que se processe uma linha:
  Atribua 0 para uma coluna.
  Itere.
    Se a coluna for maior do que 10, pare.
    \\ Processa célula...
    Adicione 1 para a coluna.
  Reitere.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// LAÇOS
// ============================================================================

Laco:
    inicio=InicioLaco
    corpo=CorpoLaco
    fim=FimLaco;

InicioLaco:
    'Itere' '.';

CorpoLaco:
    instrucoes+=InstrucaoLaco+;

InstrucaoLaco:
    ChamadaRotina | CondicionalSe | Pare | Retorne | Reitere | 
    Atribuicao | /* outras instruções */;

FimLaco:
    'Reitere' '.';

Pare:
    'Pare' '.';

Reitere:
    'Reitere' '.';

// ============================================================================
// LAÇO COM ITERE IMPLÍCITO (início da rotina)
// ============================================================================

CorpoRotina:
    (laco=LacoImplicito | instrucoes+=Instrucao+);

LacoImplicito:
    instrucoes+=InstrucaoLaco+
    fim='Reitere' '.';
```

---

## Observações Importantes

1. **Tipo Único**: Apenas um tipo de laço (`while(true)`)
2. **Sem Aninhamento**: Laços aninhados não são permitidos
3. **`Itere` Opcional**: Pode ser omitido no início da rotina
4. **Escopo de Variáveis**: Variáveis do laço persistem na rotina
5. **Controle Explícito**: Use `Pare` ou `Retorne` para sair
6. **`Reitere` Obrigatório**: Sempre termine o laço com `Reitere`
7. **Sem Iteradores**: Não há `for(i=0; i<10; i++)` - use contadores manuais
8. **Condicionais Permitidos**: Pode usar `Se` dentro do laço
9. **Chamadas Permitidas**: Pode chamar rotinas e funções
10. **Laços Infinitos**: Por padrão, o laço é infinito (use `Pare` ou `Retorne`)

---

## Boas Práticas

1. **Sempre Tenha Condição de Saída**: Use `Pare` ou `Retorne` para evitar loops infinitos
2. **Use `Reitere` para Pular**: Quando quiser pular para a próxima iteração
3. **Declare Variáveis Fora do Laço**: Quando precisar do valor após o laço
4. **Use Rotinas Auxiliares**: Para simular laços aninhados
5. **Validação no Início**: Coloque validações no início do laço
6. **Comentários**: Documente condições de saída complexas
7. **Evite Laços Infinitos Acidentais**: Sempre verifique se há condição de saída
8. **Use Contadores**: Para limitar iterações
9. **Teste Condições de Borda**: Verifique lista vazia, string vazia, etc.
10. **Limpe Recursos**: Sempre desaloque memória alocada no laço

---

## Erros Comuns

### ❌ Esquecer `Reitere`

```pop
Itere.
  \\ Código...
  Se condição, pare.
\\ ❌ Falta Reitere
```

### ❌ Laço Infinito Sem Saída

```pop
Itere.
  \\ Código sem Pare ou Retorne
Reitere. \\ ❌ Loop infinito
```

### ❌ Tentar Aninhar Laços

```pop
Itere.
  Itere. \\ ❌ Não permitido
    \\ ...
  Reitere.
Reitere.
```

### ✅ Soluções Corretas

```pop
\\ ✅ Sempre termine com Reitere
Itere.
  \\ Código...
  Se condição, pare.
Reitere.

\\ ✅ Sempre tenha condição de saída
Itere.
  Se condição, pare. \\ ou retorne
  \\ Código...
Reitere.

\\ ✅ Use rotinas para simular aninhamento
Rotina para que se processe linhas:
  Itere.
    Processe colunas. \\ Chama rotina com laço
  Reitere.
```

---

## Exemplos de Uso Prático

### Processamento de Arquivo

```pop
Rotina para que se processe um arquivo:
  Abra o arquivo.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Se a linha estiver em branco, reitere.
    Processe a linha.
  Reitere.
  Feche o arquivo.
```

### Loop de Eventos

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Desenfileire um evento.
    Se o evento for inexistente, pare.
    Se a categoria deste evento for "clique", processe clique.
    Se a categoria deste evento for "tecla", processe tecla.
  Reitere.
  Feche o programa.
```

### Busca em Lista

```pop
Rotina para que se encontre um item por nome:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \\ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \\ Encontrou
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Validação de Entrada

```pop
Rotina para que se obtenha senha válida:
  Itere.
    Escreva "Digite a senha: " no console.
    Leia uma senha desde o console.
    Se a senha estiver em branco, reitere.
    Se o comprimento desta senha for menor do que 8, reitere.
    Se a senha não contiver números, reitere.
    Pare. \\ Senha válida
  Reitere.
  Escreva "Senha aceita." no console.
```

---

## Estatísticas

- **Tipos de laço**: 1 (`while(true)`)
- **Palavras-chave**: 3 (`Itere`, `Reitere`, `Pare`)
- **Aninhamento**: Não suportado
- **`Itere` opcional**: Sim (no início da rotina)
- **Escopo de variáveis**: Rotina (não apenas laço)
- **Iteradores automáticos**: Não (use contadores manuais)
- **Controle de fluxo**: `Pare`, `Retorne`, `Reitere`
