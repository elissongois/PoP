# Condicionais - Português Puro

## Visão Geral

Condicionais em Português Puro permitem **execução condicional** de código baseada em expressões booleanas. A palavra-chave `Se` inicia uma estrutura condicional que avalia uma **função deliberativa** e executa um bloco de instruções se o resultado for `sim` (verdadeiro).

---

## Características dos Condicionais

### Capacidades

✅ **Avaliação de funções** (retorno booleano)  
✅ **Bloco de instruções** após a vírgula  
✅ **Múltiplas instruções** no bloco  
✅ **Declaração de variáveis** na expressão condicional  
✅ **Instruções inline** (uma linha)

### Restrições

❌ **Não permite aninhamento** (condicionais dentro de condicionais)  
❌ **Não há `else`** ou `else if`  
❌ **Apenas funções** na expressão condicional (não expressões arbitrárias)  
❌ **Uma vírgula** separa expressão do bloco

---

## Sintaxe

### Estrutura Básica

```pop
Se <expressão condicional>,
  <instrução 1>;
  <instrução 2>;
  <instrução N>.
```

### Componentes

1. **Palavra-chave**: `Se`
2. **Expressão condicional**: Chamada de função deliberativa
3. **Vírgula**: Separa expressão do bloco
4. **Bloco de instruções**: Uma ou mais instruções
5. **Separadores**: `;` entre instruções, `.` na última

---

## Expressão Condicional

### O que Pode Ser Usado

A expressão condicional **deve ser uma função deliberativa** que retorna `sim` ou `não`:

```pop
Se <variável> <verbo> <valor>, ...
```

### Verbos Comuns

| Verbo                         | Significado       | Exemplo                              |
|-------------------------------|-------------------|--------------------------------------|
| `for`                         | Igualdade         | `Se o número for 10`                 |
| `estiver`                     | Estado            | `Se a string estiver em branco`      |
| `for maior do que`            | Comparação        | `Se X for maior do que Y`            |
| `for menor do que`            | Comparação        | `Se X for menor do que Y`            |
| `for maior do que ou igual a` | Comparação        | `Se X for maior do que ou igual a Y` |
| `for menor do que ou igual a` | Comparação        | `Se X for menor do que ou igual a Y` |
| `não for`                     | Negação           | `Se o número não for 0`              |
| `não estiver`                 | Negação de estado | `Se a string não estiver em branco`  |

---

## Bloco de Instruções

### Separadores

- **Ponto e vírgula** (`;`): Separa instruções **dentro do bloco**
- **Ponto** (`.`): Termina a **última instrução** do bloco

### Estrutura

```pop
Se condição,
  Instrução 1;  \\ Separador ;
  Instrução 2;  \\ Separador ;
  Instrução 3.  \\ Termina com .
```

---

## Exemplos Básicos

### 1. Condicional Simples (Uma Instrução)

```pop
Se o número for 0, retorne.
```

---

### 2. Condicional com Múltiplas Instruções

```pop
Se o número for maior do que 10,
  Escreva "Número grande!" no console;
  Atribua 0 ao número;
  Retorne.
```

---

### 3. Condicional com Negação

```pop
Se a string não estiver em branco,
  Processe a string;
  Limpe a string.
```

---

### 4. Condicional com Comparação

```pop
Se o contador for maior do que ou igual a 10,
  Escreva "Limite atingido!" no console;
  Pare.
```

---

### 5. Condicional com Estado

```pop
Se o arquivo estiver aberto,
  Feche o arquivo;
  Limpe o buffer.
```

---

## Declaração de Variáveis na Expressão

É possível **declarar variáveis locais** diretamente na expressão condicional:

```pop
Se um número for maior que 10, pare.
\\ 'número' é declarado aqui
Adicione 1 ao número.
```

**Importante:** A variável declarada **persiste** no escopo da rotina após o condicional.

---

## Condicionais em Laços

Condicionais são frequentemente usados dentro de laços:

```pop
Itere.
  Se o contador for maior do que 10, pare.
  Adicione 1 para o contador.
Reitere.
```

---

## Aninhamento NÃO É Permitido

### ❌ ERRADO - Condicionais Aninhados

```pop
\\ ISTO NÃO É PERMITIDO
Se condição1,
  Se condição2,  \\ ❌ Aninhamento
    Faça algo.
```

### ✅ CORRETO - Use Múltiplas Condições

```pop
\\ Opção 1: Múltiplos Se sequenciais
Se condição1, atribua sim ao flag1.
Se condição2, atribua sim ao flag2.
Se o flag1 e o flag2 estiverem ativos, faça algo.

\\ Opção 2: Função composta
Se condição1 e condição2, faça algo.
```

### ✅ CORRETO - Use Rotinas Auxiliares

```pop
Se condição1, processe caso especial.

Rotina para que se processe caso especial:
  Se condição2, faça algo.
```

---

## Exemplos Avançados

### 6. Condicional com Chamada de Rotina

```pop
Se o arquivo não existe,
  Escreva "Arquivo não encontrado!" no console;
  Crie o arquivo;
  Retorne.
```

---

### 7. Condicional com Múltiplas Ações

```pop
Se o tipo da aplicação for "console",
  Prepare o console;
  Obtenha o número identificador do fluxo de entrada padrão;
  Defina o CodePage do console.
```

---

### 8. Condicional com Validação

```pop
Se o denominador desta fração for 0, retorne.
```

---

### 9. Condicional com Comparação de Strings

```pop
Se o nome for "João",
  Escreva "Olá, João!" no console;
  Atribua sim ao encontrado.
```

---

### 10. Condicional com Verificação de Ponteiro

```pop
Se o ponteiro for inexistente,
  Escreva "Erro: ponteiro nulo!" no console;
  Retorne.
```

---

## Padrões Comuns

### Padrão 1: Validação e Retorno

```pop
Se <condição de erro>, retorne.
\\ Continua processamento...
```

---

### Padrão 2: Validação com Mensagem

```pop
Se <condição de erro>,
  Escreva <mensagem de erro> no console;
  Retorne.
```

---

### Padrão 3: Processamento Condicional

```pop
Se <condição>,
  Processe <algo>;
  Atualize <estado>.
```

---

### Padrão 4: Flag Setting

```pop
Se <condição>, atribua sim ao flag.
```

---

### Padrão 5: Saída de Laço

```pop
Itere.
  Se <condição de saída>, pare.
  \\ Processa...
Reitere.
```

---

## Verbos e Funções Deliberativas

### Funções Comuns

```pop
\\ Igualdade
Se X for Y, ...
Se X for igual a Y, ...

\\ Comparação numérica
Se X for maior do que Y, ...
Se X for menor do que Y, ...
Se X for maior do que ou igual a Y, ...
Se X for menor do que ou igual a Y, ...

\\ Estado
Se X estiver em branco, ...
Se X estiver ativo, ...
Se X estiver aberto, ...

\\ Existência
Se X for inexistente, ...
Se X não for inexistente, ...

\\ Negação
Se X não for Y, ...
Se X não estiver em branco, ...
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// CONDICIONAIS
// ============================================================================

Condicional:
    'Se' expressao=ExpressaoCondicional ','
    bloco=BlocoInstrucoes;

ExpressaoCondicional:
    // Chamada de função deliberativa
    elementos+=(Variavel | Verbo | Valor | Preposicao | Comparador)+;

BlocoInstrucoes:
    instrucoes+=InstrucaoCondicional+;

InstrucaoCondicional:
    instrucao=Instrucao separador=(';' | '.');

// ============================================================================
// VERBOS CONDICIONAIS
// ============================================================================

VerboCondicional:
    'for' | 'estiver' | 'não' 'for' | 'não' 'estiver' |
    'for' Comparador | 'estiver' Estado;

Comparador:
    'maior' 'do' 'que' ('ou' 'igual' ('a'|'ao'))? |
    'menor' 'do' 'que' ('ou' 'igual' ('a'|'ao'))? |
    'igual' ('a'|'ao');

Estado:
    'em' 'branco' | 'ativo' | 'aberto' | 'fechado' | 
    'inexistente' | /* outros estados */;
```

---

## Observações Importantes

1. **Apenas Funções**: A expressão condicional deve ser uma função deliberativa
2. **Sem Aninhamento**: Condicionais aninhados não são permitidos
3. **Separadores Obrigatórios**: Use `;` e `.` corretamente
4. **Vírgula Única**: Apenas uma vírgula separa expressão do bloco
5. **Declaração Inline**: Variáveis podem ser declaradas na expressão
6. **Escopo Persistente**: Variáveis declaradas persistem após o condicional
7. **Sem `else`**: Não há cláusula `else` ou `else if`
8. **Instruções Múltiplas**: Bloco pode conter várias instruções
9. **Verbos Sinônimos**: Vários verbos expressam a mesma condição
10. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas

---

## Boas Práticas

1. **Validação Primeiro**: Coloque validações no início da rotina
2. **Retorno Antecipado**: Use `retorne` para sair cedo em caso de erro
3. **Mensagens Claras**: Escreva mensagens de erro descritivas
4. **Uma Responsabilidade**: Cada condicional deve verificar uma coisa
5. **Evite Complexidade**: Use rotinas auxiliares em vez de aninhar
6. **Nomes Descritivos**: Use nomes claros para variáveis e funções
7. **Comentários**: Documente condições complexas
8. **Separadores Corretos**: Sempre use `;` e `.` adequadamente
9. **Indentação**: Indente o bloco para legibilidade
10. **Teste Condições de Borda**: Verifique valores extremos

---

## Erros Comuns

### ❌ Esquecer Separadores

```pop
Se condição,
  Instrução 1  \\ ❌ Falta ;
  Instrução 2.
```

### ❌ Vírgula Errada

```pop
Se condição  \\ ❌ Falta vírgula
  Instrução.
```

### ❌ Tentar Aninhar

```pop
Se condição1,
  Se condição2,  \\ ❌ Não permitido
    Instrução.
```

### ❌ Expressão Não-Booleana

```pop
Se o número,  \\ ❌ Não é uma função deliberativa
  Instrução.
```

### ✅ Soluções Corretas

```pop
\\ ✅ Separadores corretos
Se condição,
  Instrução 1;
  Instrução 2.

\\ ✅ Vírgula presente
Se condição,
  Instrução.

\\ ✅ Sem aninhamento
Se condição1, processe caso1.
Se condição2, processe caso2.

\\ ✅ Função deliberativa
Se o número for maior do que 0,
  Instrução.
```

---

## Exemplos de Uso Prático

### Validação de Entrada

```pop
Rotina para que se processe entrada:
  Se a entrada estiver em branco,
    Escreva "Erro: entrada vazia!" no console;
    Retorne.
  Se o comprimento desta entrada for maior do que 100,
    Escreva "Erro: entrada muito longa!" no console;
    Retorne.
  \\ Processa entrada válida...
```

### Controle de Fluxo em Laço

```pop
Rotina para que se processe lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, pare.
    Se o nome desta lista estiver em branco, reitere.
    Processe a lista.
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Verificação de Estado

```pop
Rotina para que se feche arquivo:
  Se o arquivo não estiver aberto, retorne.
  Escreva os dados pendentes para o arquivo.
  Feche o arquivo.
  Limpe o buffer.
```

### Processamento Condicional

```pop
Rotina para que se processe número:
  Se o número for 0,
    Escreva "Zero" no console;
    Retorne.
  Se o número for menor do que 0,
    Escreva "Negativo" no console;
    Inverta o número.
  Processe o número positivo.
```

---

## Comparação com Outras Linguagens

| Português Puro    | C/Java/JavaScript       | Python              |
|-------------------|-------------------------|---------------------|
| `Se X for Y,`     | `if (X == Y) {`         | `if X == Y:`        |
| `Instrução;`      | `statement;`            | `statement`         |
| `Última.`         | `last; }`               | `last` (desindenta) |
| (sem aninhamento) | `if (...) { if (...) }` | `if ...: if ...:`   |
| (sem else)        | `else { }`              | `else:`             |

---

## Estatísticas

- **Palavra-chave**: 1 (`Se`)
- **Separadores**: 2 (`,` vírgula, `;` ponto e vírgula, `.` ponto)
- **Aninhamento**: Não suportado
- **Cláusula else**: Não suportada
- **Declaração inline**: Suportada
- **Múltiplas instruções**: Suportadas
- **Verbos condicionais**: ~20+
