# Gerenciamento de Memória

## Visão Geral

Português Puro utiliza **gerenciamento de memória manual** para estruturas complexas (listas, ponteiros, buffers). Strings têm gerenciamento automático pelo compilador.

---

## Comandos Principais

### 1. `Aloque` - Alocação de Memória

**Sintaxe:**

```pop
Aloque memória para <ponteiro>.
Aloque memória para <estrutura>.
```

**Exemplos:**

```pop
Aloque memória para um item.
Aloque memória para uma alternativa.
Aloque memória para o buffer.
Aloque memória para uma pessoa.
Aloque memória para um contato.
Aloque memória para uma segunda lista de nomes.
```

**Com Declaração Inline:**

```pop
Aloque memória para uma pessoa denominada nova.
Aloque memória para um endereço denominado local.
Aloque memória para uma lista denominada novo.
```

---

### 2. `Desaloque` - Liberação de Memória

**Sintaxe:**

```pop
Desaloque memória para <ponteiro>.
```

**Exemplos:**

```pop
Desaloque memória para o item.
Desaloque memória para o buffer.
Desaloque memória para a pessoa.
```

---

### 3. `Reaponte` - Realocação de Memória

**Função:** Equivalente a `realloc` - redimensiona bloco de memória alocado

**Sintaxe:**

```pop
Reaponte <ponteiro> usando <tamanho>.
```

**Exemplos:**

```pop
Reaponte o caractere inicial desta string usando a quantidade de caracteres desta string mais 1.
Reaponte o buffer usando o novo tamanho.
```

---

### 4. `Preserve` - Proteção de Parâmetros

**Função:** Cria uma **cópia** do parâmetro para evitar modificações indesejadas

**Sintaxe:**

```pop
Preserve <variável>.
```

**Exemplos:**

```pop
Preserve a string.
Preserve a contagem.
Preserve a fração.
```

**Acesso ao Original:**

```pop
Preserve a string.
Limpe a string original. \ Acessa a variável original
```

---

## Gerenciamento Automático vs Manual

### Automático (Strings)

- **Strings**: Alocação/desalocação automática pelo compilador
- **Não precisa** de `Aloque`/`Desaloque` para strings

```pop
\ Strings - gerenciamento automático
Atribua "Olá" para a mensagem.
Acrescente " Mundo" para a mensagem.
\ Compilador gerencia memória internamente
```

### Manual (Estruturas, Listas, Ponteiros, Buffers)

- **Estruturas complexas**: Requerem `Aloque`/`Desaloque`
- **Listas**: Cada nó deve ser alocado/desalocado manualmente
- **Ponteiros**: Alocação explícita
- **Buffers**: Alocação explícita para I/O

---

## Padrões de Uso

### Padrão 1: Alocação Simples

```pop
Rotina para que se crie buffer:
  Aloque memória para um buffer.
  Se o buffer for inexistente, retorne.
  \ Usa o buffer...
  Desaloque memória para o buffer.
```

### Padrão 2: Alocação com Verificação

```pop
Aloque memória para um ponteiro.
Se o ponteiro for inexistente,
  Escreva "Erro de alocação!" no console.
  Retorne.
\ Usa o ponteiro...
```

### Padrão 3: Lista com Alocação por Nó

```pop
Rotina para que se adicione item para uma lista usando um valor:
  Aloque memória para uma nova lista.
  Se a nova lista for inexistente, retorne.
  Atribua o valor para o valor desta nova lista.
  Atribua a lista para a posterior desta nova lista.
  Atribua a nova lista para a lista.
```

### Padrão 4: Destruição de Lista Completa

```pop
Rotina para que se destrua todos os itens de uma lista:
  Itere.
    Atribua a lista inicial destas listas para uma lista.
    Se a lista for inexistente, pare.
    Remova a lista desde as listas.
    Destrua a lista.
  Reitere.
```

### Padrão 5: Buffer com Realocação

```pop
Rotina para que se redimensione buffer:
  Reaponte o buffer usando o novo tamanho.
  Se o buffer for inexistente,
    Escreva "Erro de realocação!" no console;
    Retorne.
```

---

## Gerenciamento em Rotinas

### Parâmetros (Passagem por Referência)

Parâmetros são passados **por referência**. Use `Preserve` para criar cópia:

```pop
Rotina para que se inverta uma string:
  Preserve a string. \ Cria cópia
  Limpe a string original. \ Acessa a variável original
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### Variáveis Locais com Alocação

```pop
Rotina para que se processe pessoa:
  Aloque memória para uma pessoa.
  Se a pessoa for inexistente, retorne.
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  \ Processa...
  Desaloque memória para a pessoa.
```

---

## Estruturas com Ponteiros

### Ponteiro Genérico

```pop
Um tipo é um ponteiro.
Aloque memória para o tipo.
```

### Ponteiro Tipado

```pop
Um caractere inicial é um ponteiro para um byte.
Aloque memória para um caractere inicial.
```

### Estrutura com Ponteiros

```pop
Uma pessoa é uma estrutura com
  Um ponteiro denominado nome e \ ponteiro para string
  Um número denominado idade.

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa.
  Aloque memória para o nome desta pessoa. \ Aloca string
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
```

---

## Gerenciamento em Listas

### Cabeçalha (Âncora)

```pop
A agenda telefônica é uns contatos. \ Cabeçalha (plural)
```

### Alocação de Nós

```pop
Rotina para que se adicione contato:
  Aloque memória para um novo contato.
  Se o novo contato for inexistente, retorne.
  Atribua o nome para o nome deste novo contato.
  Atribua o telefone para o telefone deste novo contato.
  Acrescente o novo contato para a agenda telefônica.
```

### Remoção e Desalocação

```pop
Rotina para que se remova contato:
  Remova o contato desde a agenda telefônica.
  Desaloque memória para o contato.
```

### Destruição Completa

```pop
Rotina para que se destrua agenda:
  Itere.
    Atribua a lista inicial desta agenda telefônica para um contato.
    Se o contato for inexistente, pare.
    Remova o contato desde a agenda telefônica.
    Desaloque memória para o contato.
  Reitere.
```

---

## Boas Práticas

1. **Sempre Verifique Alocação**: Teste se ponteiro é `inexistente` após `Aloque`
2. **Desaloque o que Alocou**: Cada `Aloque` deve ter `Desaloque` correspondente
3. **Use `Preserve`** em parâmetros que não devem ser modificados
4. **Ordem LIFO**: Desaloque na ordem inversa da alocação (para estruturas aninhadas)
5. **Limpe Referências**: Após `Desaloque`, evite acessar o ponteiro
6. **Use `Destrua`** para estruturas complexas (libera recursivamente)
7. **Strings**: Não aloque/desaloque manualmente (automático)
8. **Buffers de I/O**: Aloque antes de usar, desaloque após terminar
9. **Realocação**: Use `Reaponte` para redimensionar buffers
10. **Teste Falha de Memória**: Simule `inexistente` para testar tratamento de erro

---

## Erros Comuns

### ❌ Esquecer `Desaloque`

```pop
\ ❌ VAZAMENTO DE MEMÓRIA
Aloque memória para um buffer.
\ Usa buffer...
\ Falta Desaloque memória para o buffer.
```

### ❌ Acessar Após `Desaloque`

```pop
\ ❌ ACESSO INVÁLIDO
Desaloque memória para o ponteiro.
Escreva o valor deste ponteiro para StdOut. \ Erro!
```

### ❌ Não Verificar Falha de Alocação

```pop
\ ❌ PERIGOSO
Aloque memória para um item.
Atribua 10 para o valor deste item. \ Pode falhar se item for inexistente

\ ✅ SEGURO
Aloque memória para um item.
Se o item for inexistente, retorne.
Atribua 10 para o valor deste item.
```

### ❌ `Preserve` Ausente

```pop
\ ❌ MODIFICA PARÂMETRO ORIGINAL
Rotina para que se processe string:
  Limpe a string. \ Modifica o parâmetro original!
  \ ...

\ ✅ PROTEGIDO
Rotina para que se processe string:
  Preserve a string.
  Limpe a string original. \ Modifica a cópia
  \ ...
```

### ❌ Desalocação em Ordem Errada

```pop
\ ❌ ORDEM ERRADA (estrutura aninhada)
Desaloque memória para a pessoa.
Desaloque memória para o nome desta pessoa. \ Acessa memória já liberada!

\ ✅ ORDEM CORRETA (LIFO)
Desaloque memória para o nome desta pessoa.
Desaloque memória para a pessoa.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// GERENCIAMENTO DE MEMÓRIA
// ============================================================================

Aloque:
    'Aloque' 'memória' 'para' variavel=Variavel '.';

Desaloque:
    'Desaloque' 'memória' 'para' variavel=Variavel '.';

Reaponte:
    'Reaponte' variavel=Variavel 'usando' tamanho=Expressao '.';

Preserve:
    'Preserve' variavel=Variavel '.';

Destrua:
    'Destrua' variavel=Variavel '.';
```

---

## Observações Importantes

1. **Strings**: Gerenciamento automático (não use `Aloque`/`Desaloque`)
2. **Estruturas/Lista/Ponteiros**: Gerenciamento manual obrigatório
3. **Passagem por Referência**: Parâmetros modificam original (use `Preserve`)
4. **`Destrua`**: Libera estrutura e subestruturas recursivamente
5. **`Reaponte`**: Apenas para buffers/ponteiros já alocados
6. **`inexistente`**: Ponteiro nulo após falha de alocação
7. **Escopo**: Variáveis locais persistem após laços/condicionais
8. **Case-Insensitive**: Todos os comandos são case-insensitive

---

## Exemplos Completos

### Buffer de Arquivo

```pop
Rotina para que se leia arquivo completo:
  Abra o arquivo.
  Aloque memória para um buffer.
  Se o buffer for inexistente,
    Feche o arquivo;
    Retorne.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Processe a linha.
  Reitere.
  Desaloque memória para o buffer.
  Feche o arquivo.
```

### Estrutura Aninhada

```pop
Um endereço é uma estrutura com
  Uma string denominada rua,
  Uma string denominada cidade.

Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um endereço denominado endereço.

Rotina para que se crie pessoa completa:
  Aloque memória para uma pessoa.
  Se a pessoa for inexistente, retorne.
  Aloque memória para o endereço desta pessoa.
  Se o endereço desta pessoa for inexistente,
    Desaloque memória para a pessoa;
    Retorne.
  Aloque memória para a rua deste endereço desta pessoa.
  Aloque memória para a cidade deste endereço desta pessoa.
  \ Inicializa...
  
Rotina para que se destrua pessoa completa:
  Desaloque memória para a rua deste endereço desta pessoa.
  Desaloque memória para a cidade deste endereço desta pessoa.
  Desaloque memória para o endereço desta pessoa.
  Desaloque memória para a pessoa.
```

### Lista com Dados Complexos

```pop
Um item de dados é uma lista com
  Um ponteiro denominado dados e
  Um número denominado tamanho.

Rotina para que se adicione dados:
  Aloque memória para um novo item de dados.
  Aloque memória para os dados deste novo item de dados.
  \ Preenche dados...
  Acrescente o novo item de dados para a lista de dados.

Rotina para que se limpe lista de dados:
  Itere.
    Atribua a lista inicial desta lista de dados para um item.
    Se o item for inexistente, pare.
    Desaloque memória para os dados deste item.
    Remova o item desde a lista de dados.
    Desaloque memória para o item.
  Reitere.
```

---

## Estatísticas

- **Comandos de memória**: 5 (`Aloque`, `Desaloque`, `Reaponte`, `Preserve`, `Destrua`)
- **Strings**: Automático
- **Estruturas/Lista/Ponteiros**: Manual
- **Verificação de falha**: `Se <ponteiro> for inexistente`
- **Passagem de parâmetros**: Por referência (use `Preserve` para cópia)
- **Ordem de desalocação**: LIFO (último a entrar, primeiro a sair)