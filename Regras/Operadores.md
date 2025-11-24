# Operadores, Comparadores e Concatenadores - Português Puro

## Visão Geral

A linguagem Português Puro possui 4 categorias principais de operadores:

1. [**Operadores Aritméticos**](#1-operadores-aritméticos): Para cálculos matemáticos
2. [**Operadores de Comparação**](#2-operadores-de-comparação): Para comparações lógicas
3. [**Operadores de Concatenação**](#3-operadores-de-concatenação): Para junção de strings e valores
4. [**Operadores Lógicos**](#4-operadores-lógicos): Para inversão dos operadores de comparação
5. [**Observações Importantes**](#5-observações-importantes): Avaliação, conversão, case-insensitive
6. [**Mapeamento para Langium**](#6-mapeamento-para-langium): Regras gramaticais

## Características Importantes

### Precedência e Associatividade
- **Sem precedência de operadores**: As expressões são avaliadas **da esquerda para a direita**
- **Exemplo**: `2 mais 3 vezes 4` resulta em `20` (não `14`)
  - Cálculo: `(2 + 3) * 4 = 5 * 4 = 20`

### Duas Formas de Operação
1. **Comandos Imperativos**: Modificam variável existente
2. **Expressões**: Calculam novo valor para atribuição

---

# 1. OPERADORES ARITMÉTICOS

## Comandos Imperativos

Modificam o valor de uma variável existente.

### Sintaxe
```
<Comando> <valor> <preposição> <variável>.
```

### Comandos Disponíveis

#### Adição
```pop
Adicione <valor> para <variável>.
Adicione <valor> em <variável>.
```

**Exemplos:**
```pop
Adicione 5 para o total.
Adicione 10 em o contador.
Adicione a idade para o total de anos.
```

#### Subtração
```pop
Subtraia <valor> de <variável>.
Subtraia <valor> desde <variável>.
```

**Exemplos:**
```pop
Subtraia 3 de o total.
Subtraia 10 desde o saldo.
Subtraia o desconto de o preço.
```

#### Multiplicação
```pop
Multiplique <variável> por <valor>.
Multiplique <variável> pelo <valor>.
```

**Exemplos:**
```pop
Multiplique o total por 2.
Multiplique a quantidade pelo preço.
Multiplique o valor por 1+1/5.
Multiplique o valor por 3.2.
```

#### Divisão
```pop
Divida <variável> por <valor>.
Divida <variável> pelo <valor>.
```

**Exemplos:**
```pop
Divida o total por 2.
Divida a soma pelo contador.
Divida o valor por 100.
```

## Operadores em Expressões

Usados para calcular um novo valor a ser atribuído.

### Sintaxe
```
<valor1> <operador> <valor2> [<operador> <valor3>...]
```

### Operadores Disponíveis

| Operador           | Operação      | Exemplo                        |
|--------------------|---------------|--------------------------------|
| `mais`             | Adição        | `10 mais 5` → `15`             |
| `menos`            | Subtração     | `10 menos 5` → `5`             |
| `vezes`            | Multiplicação | `10 vezes 5` → `50`            |
| `multiplicado por` | Multiplicação | `10 multiplicado por 5` → `50` |
| `dividido por`     | Divisão       | `10 dividido por 5` → `2`      |

### Exemplos Completos

```pop
\ Operações simples
Atribua 10 mais 5 para um resultado.           \ resultado = 15
Atribua 20 menos 8 para uma diferença.         \ diferença = 12
Atribua 7 vezes 6 para um produto.             \ produto = 42
Atribua 100 dividido por 4 para um quociente.  \ quociente = 25

\ Operações encadeadas (avaliadas da esquerda para direita)
Atribua 2 mais 3 vezes 4 para um valor.        \ valor = 20 ((2+3)*4)
Atribua 100 menos 20 dividido por 2 para um resultado.  \ resultado = 40 ((100-20)/2)

\ Com variáveis
Atribua a base vezes a altura dividido por 2 para uma área.
Atribua o preço mais o imposto menos o desconto para o total.
```

---

# 2. OPERADORES DE COMPARAÇÃO

Usados em expressões condicionais para comparar valores.

## Sintaxe
```
<valor1> <operador> <valor2>
```

## Operadores Disponíveis

### Igualdade

| Operador | Variações      | Significado | Exemplo                      |
|----------|----------------|-------------|------------------------------|
| `for`    | `for igual a`  | É igual a   | `Se o número for 10`         |
| `for`    | `for igual`    | É igual a   | `Se a letra for igual a "A"` |
| `é`      | `é igual a`    | É igual a   | `Se o valor é 0`             |
| `está`   | `está igual a` | É igual a   | `Se o status está ativo`     |

**Exemplos:**
```pop
Se o contador for 10, pare.
Se a letra for igual a "A", diga sim.
Se o valor for 0, retorne.
Se o nome for igual a "João", continue. \ou
Se o nome for "João", continue.
```

### Desigualdade

| Operador | Verbo | Operador | Significado   | Exemplo                         |
|----------|-------|----------|---------------|---------------------------------|
| `não`    | `for` | `igual`  | Não é igual a | `Se o número não for igual a 8` |
| `não`    | `é`   | `igual`  | Não é igual a | `Se o valor não é igual a 10`   |
| `não`    | `é`   | -        | Não é         | `Se o valor não é 0`            |
| `não`    | `for` | -        | Não é         | `Se o status não for ativo`     |

**Exemplos:**
```pop
Se o contador não for 0, continue.
Se a letra não for "A", retorne.
Se o status não estiver ativo, ative o sinalizador.
```

### Comparação Numérica

| Operador           | Variações   | Significado    | Exemplo                               |
|--------------------|-------------|----------------|---------------------------------------|
| `maior do que`     | `maior que` | Maior que      | `Se o número for maior do que 10`     |
| `menor do que`     | `menor que` | Menor que      | `Se o valor for menor do que 0`       |
| `maior ou igual a` | -           | Maior ou igual | `Se a idade for maior ou igual a 18`  |
| `menor ou igual a` | -           | Menor ou igual | `Se o total for menor ou igual a 100` |
| `excede`           | `exceder`   | Maior que      | `Se o valor excede o limite`          |
| `supera`           | `superar`   | Maior que      | `Se a quantidade supera o máximo`     |

**Exemplos:**
```pop
Se o contador for maior do que 10, pare.
Se a idade for menor que 18, retorne.
Se o total for maior ou igual a 100, diga sim.
Se o saldo for menor ou igual a 0, alerte.
Se o valor excede o limite, ajuste.
Se a temperatura supera 40, desligue.
```

### Comparação de Estado

| Operador            | Variações      | Significado     | Exemplo                       |
|---------------------|----------------|-----------------|-------------------------------|
| `for nulo`          | `for nula`     | É nulo/vazio    | `Se o ponteiro for nulo`      |
| `não for nulo`      | `não for nula` | Não é nulo      | `Se a string não for nula`    |
| `estiver em branco` | -              | String vazia    | `Se o nome estiver em branco` |
| `existe`            | `existir`      | Existe/não-nulo | `Se o arquivo existe`         |
| `não existe`        | `não existir`  | Não existe      | `Se o registro não existe`    |

**Exemplos:**
```pop
Se o ponteiro for nulo, retorne.
Se a string não for nula, processe.
Se o nome estiver em branco, solicite.
Se o arquivo existe, leia.
Se o contato não existe, crie.
```

---

# 3. OPERADORES DE CONCATENAÇÃO

Usados para juntar strings e valores.

## Comandos Imperativos

### Acrescentar (Append)
```pop
Acrescente <valor> para <string>.
Acrescente <valor> em <string>.
```

**Exemplos:**
```pop
Acrescente ", Mundo!" para a saudação.
Acrescente o sobrenome em o nome completo.
Acrescente uma quebra de linha para o texto.
```

### Antepor (Prepend)
```pop
Anteponha <valor> para <string>.
```

**Exemplos:**
```pop
Anteponha "Sr. " para o nome.
Anteponha o prefixo para a mensagem.
```

## Operadores em Expressões

### Sintaxe
```
<valor1> <operador> <valor2> [<operador> <valor3>...]
```

### Operadores Disponíveis

| Operador         | Variações        | Significado | Exemplo                         |
|------------------|------------------|-------------|---------------------------------|
| `junto com`      | `juntamente com` | Concatenar  | `"Olá" junto com " Mundo"`      |
| `seguido de`     | `seguida de`     | Concatenar  | `o nome seguido de " Silva"`    |
| `acompanhado de` | `acompanhada de` | Concatenar  | `a saudação acompanhada de "!"` |

**Exemplos:**
```pop
\ Concatenação simples
Atribua "Olá" junto com ", Mundo!" para uma saudação.
Atribua o nome seguido de " Silva" para o nome completo.
Atribua "Bem-vindo" com "!" para uma mensagem.

\ Concatenação múltipla
Atribua "Sr. " junto com o nome seguido de " " junto com o sobrenome para o nome completo.
Atribua "Total: " com o valor junto com " reais" para a mensagem.

\ Em comandos
Escreva "Olá" junto com ", Mundo!" para StdOut.
Escreva o nome seguido de ": " junto com a mensagem para StdOut.
```

---

# 4. OPERADORES LÓGICOS

Usados para inverter os operadores de comparação.

## Operadores Disponíveis

| Operador | Significado | Exemplo                          | Equivalência                              |
|----------|-------------|----------------------------------|-------------------------------------------|
| `não`    | NÃO         | `Se o valor não for outro valor` | `Se o valor for diferente de outro valor` |

## Operadores sem lógica

| Operador | Significado | Exemplo                                     |
|----------|-------------|---------------------------------------------|
| `e`      | -           | `Se o valor for maior que 0 e menor que 10` |
| `ou`     | -           | `Se a letra for "A" ou for "B"`             |
| `nem`    | -           | `Se nem for "A" nem for "B"`                |

**Exemplos:**
```pop
\ E lógico
Se o contador for maior que 0 e menor que 10, continue.
Se o nome não estiver em branco e a idade for maior que 18, processe.

\ OU lógico
Se a tecla for "S" ou for "s", envie o comando de confirmação.
Se o status for "ativo" ou for "pendente", exiba o status.

\ NEM
Se a letra não for "A" nem for "B", retorne.

\ Combinações
Se o denominador for menor ou igual a 0 e o sinalizador de binário estiver ativo ou o sinalizador de fração estiver inativo, pare.
```
Esses lexemas na verdade não possuem função de operador, mas podem simular operadores lógicos, desde que uma função seja previamente definida com a lógica, parâmetros e o tipo de operador adequados.
Exemplos:
```pop
[Simulador de Operador Lógico `E`]
Função para que se determine se um número é um segundo número e uma string é uma segunda string:
  Se o número não for o segundo número, diga não.
  Se a string não for a segunda string, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um número está entre um segundo número e um terceiro número:
  Se o número for menor do que o segundo número, diga não.
  Se o número for maior do que o terceiro número, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um byte está entre um segundo byte e um terceiro byte:
  Se o byte for menor do que o segundo byte, diga não.
  Se o byte for maior do que o terceiro byte, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um byte está entre um número e um segundo número:
  Se o byte for menor do que o número, diga não.
  Se o byte for maior do que o segundo número, diga não.
  Diga sim.

[Simulador de Operador Lógico `OU`]
Função para que se determine se um byte é um segundo byte ou um terceiro byte:
  Se o byte for o segundo byte, diga sim.
  Se o byte for o terceiro byte, diga sim.
  Diga não.

[Simulador de Operador Lógico `OU`]
Função para que se determine se um byte é igual a um número ou para um segundo número;
Função para que se determine se um byte é um número ou um segundo número:
  Se o byte for o número, diga sim.
  Se o byte for o segundo número, diga sim.
  Diga não.

[Exemplo de Operador Lógico simulado sendo empregado]
Função para que se determine se um byte é algum letra:

  [Aqui o operador lógico `E` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte está entre um segundo byte e um terceiro byte:] 
  Se o byte estiver entre o 'A' maiúsculo e o Z maiúsculo, diga sim.
  Se o byte estiver entre o 'a' minúsculo e o z minúsculo, diga sim.

  [Aqui o operador lógico `OU` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte é um segundo byte ou um terceiro byte:]
  Se o byte for 131 ou 138, diga sim.
  Se o byte for 140 ou 142, diga sim.
  Se o byte for 154 ou 156, diga sim.

  [Aqui o operador lógico `E` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte está entre um número e um segundo número:] 
  Se o byte estiver entre 158 e 159, diga sim.
  Se o byte estiver entre 192 e 214, diga sim.
  Se o byte estiver entre 216 e 246, diga sim.
  Se o byte estiver entre 248 e 255, diga sim.
  Diga não.

[Exemplo de Operador Lógico `E` simulado com 4 parâmetros]
Função para que se determine se um primeiro número é um segundo número e um terceiro número é um quarto número:
  Se o primeiro número não for o segundo número, diga não.
  Se o terceiro número não for o quarto número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `OU` simulado com 4 parâmetros]
Função para que se determine se um primeiro número é um segundo número ou um terceiro número é um quarto número:
  Se o primeiro número for o segundo número, diga sim.
  Se o terceiro número for o quarto número, diga sim.
  Diga não.

[Exemplo de Operador Lógico `NEM` simulado com 3 parâmetros]
Função para que se determine se um primeiro número nem é um segundo número nem é um terceiro número:
  Se o primeiro número for o segundo número, diga não.
  Se o primeiro número for o terceiro número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `NEM` simulado com 4 parâmetros]
Função para que se determine se nem um primeiro número é um segundo número nem um terceiro número é um quarto número:
  Se o primeiro número for o segundo número, diga não.
  Se o terceiro número for o quarto número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `OU OU` simulado com 4 parâmetros]
Função para que se determine se ou um primeiro número é um segundo número ou um terceiro número é um quarto número:
  Atribua o primeiro número menos o segundo número para um número denominado primeira comparação.
  Atribua o terceiro número menos o quarto número para um número denominado segunda comparação.
  Se a primeira comparação for 0 e a segunda comparação for 0, diga não.
  Diga sim.


```
---

# 5. OBSERVAÇÕES IMPORTANTES

## Avaliação da Esquerda para Direita

A linguagem **não possui precedência de operadores**. Todas as expressões são avaliadas sequencialmente da esquerda para a direita.

**Exemplos:**
```pop
\ 2 + 3 * 4 = (2 + 3) * 4 = 20 (não 14!)
Atribua 2 mais 3 vezes 4 para um resultado.  \ resultado = 20

\ 10 - 5 + 3 = (10 - 5) + 3 = 8
Atribua 10 menos 5 mais 3 para um valor.     \ valor = 8

\ 100 / 2 * 5 = (100 / 2) * 5 = 250
Atribua 100 dividido por 2 vezes 5 para um total.  \ total = 250
```

<!-- ## Conversão Automática de Tipos

A linguagem realiza conversões automáticas quando necessário:

```pop
\ Número para string (em concatenação)
Atribua "Total: " junto com 100 para uma mensagem.  \ "Total: 100"

\ String para número (em operações aritméticas, quando possível)
Atribua "10" mais 5 para um resultado.  \ resultado = 15
``` -->

## Case-Insensitive

Todos os operadores são **case-insensitive** (não diferenciam maiúsculas de minúsculas):

```pop
Adicione 5 para o total.
ADICIONE 5 PARA O TOTAL.
adicione 5 para o total.
\ Todos são equivalentes
```

---

# 6. MAPEAMENTO PARA LANGIUM

```langium
// ============================================================================
// OPERADORES ARITMÉTICOS
// ============================================================================

ComandoAritmetico:
    ComandoAdicao | ComandoSubtracao | ComandoMultiplicacao | ComandoDivisao;

ComandoAdicao:
    'Adicione' valor=Expressao preposicao=('para'|'em') variavel=IDVariavel '.';

ComandoSubtracao:
    'Subtraia' valor=Expressao preposicao=('de'|'desde') variavel=IDVariavel '.';

ComandoMultiplicacao:
    'Multiplique' variavel=IDVariavel preposicao=('por'|'pelo') valor=Expressao '.';

ComandoDivisao:
    'Divida' variavel=IDVariavel preposicao=('por'|'pelo') valor=Expressao '.';

// Operadores em expressões
OperadorAritmetico returns string:
    'mais' | 'menos' | 'vezes' | 
    'multiplicado' ('por')? | 
    'dividido' ('por')?;

// ============================================================================
// OPERADORES DE COMPARAÇÃO
// ============================================================================

ExpressaoComparacao:
    esquerda=Termo operador=OperadorComparacao direita=Termo;

OperadorComparacao returns string:
    'for' ('igual' ('a')?)? |
    'é' ('igual' ('a')?)? |
    'está' ('igual' ('a')?)? |
    'não' 'for' ('igual' ('a')?)? |
    'não' 'é' ('igual' ('a')?)? |
    'não' 'está' |
    'for' 'maior' ('do')? 'que' |
    'for' 'menor' ('do')? 'que' |
    'for' 'maior' 'ou' 'igual' 'a' |
    'for' 'menor' 'ou' 'igual' 'a' |
    'excede' | 'exceder' |
    'supera' | 'superar' |
    'for' ('nulo'|'nula') |
    'não' 'for' ('nulo'|'nula') |
    'estiver' 'em' 'branco' |
    'existe' | 'existir' |
    'não' ('existe'|'existir');

// ============================================================================
// OPERADORES DE CONCATENAÇÃO
// ============================================================================

ComandoConcatenacao:
    ComandoAcrescentar | ComandoAntepor;

ComandoAcrescentar:
    'Acrescente' valor=Expressao preposicao=('para'|'em') variavel=IDVariavel '.';

ComandoAntepor:
    'Anteponha' valor=Expressao 'para' variavel=IDVariavel '.';

OperadorConcatenacao returns string:
    'junto' 'com' |
    'juntamente' 'com' |
    'seguido' 'de' |
    'seguida' 'de' |
    'acompanhado' 'de' |
    'acompanhada' 'de' |
    'com';

// ============================================================================
// OPERADORES LÓGICOS
// ============================================================================

OperadorLogico returns string:
    'e' | 'ou' | 'nem' | 'não';
```

---

# 7. EXEMPLOS COMPLETOS

## Calculadora Simples

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  
  \ Operações básicas
  Atribua 10 para um número a.
  Atribua 5 para um número b.
  
  \ Adição
  Atribua o número a mais o número b para uma soma.
  Escreva "Soma: " junto com a soma para StdOut.
  
  \ Subtração
  Atribua o número a menos o número b para uma diferença.
  Escreva "Diferença: " junto com a diferença para StdOut.
  
  \ Multiplicação
  Atribua o número a vezes o número b para um produto.
  Escreva "Produto: " junto com o produto para StdOut.
  
  \ Divisão
  Atribua o número a dividido por o número b para um quociente.
  Escreva "Quociente: " junto com o quociente para StdOut.
  
  Feche o programa.
```

## Validação com Comparadores

```pop
Rotina para que se valide uma idade:
  Se a idade for menor que 0,
    Escreva "Idade inválida!" para StdOut;
    Retorne.
  
  Se a idade for maior ou igual a 18,
    Escreva "Maior de idade" para StdOut.
  
  Se a idade for menor que 18 e maior que 0,
    Escreva "Menor de idade" para StdOut.
```

## Concatenação de Strings

```pop
Rotina para que se formate um nome completo:
  Atribua "João" para um nome.
  Atribua "Silva" para um sobrenome.
  
  \ Concatenação simples
  Atribua o nome junto com " " junto com o sobrenome para um nome completo.
  Escreva o nome completo para StdOut.  \ "João Silva"
  
  \ Com prefixo
  Atribua "Sr. " junto com o nome completo para uma saudação formal.
  Escreva a saudação formal para StdOut.  \ "Sr. João Silva"
```

---

## Observações Finais

1. **Naturalidade**: Múltiplas formas para expressar a mesma operação
2. **Flexibilidade**: Comandos imperativos vs expressões
3. **Simplicidade**: Avaliação linear (esquerda→direita)
4. **Clareza**: Operadores em português natural
5. **Consistência**: Case-insensitive em todos os operadores

---


```pop
Função para que se determine se uma string é algum operador aritmético:
  Se a string for "mais", diga sim.
  Se a string for "menos", diga sim.
  Se a string for "vezes", diga sim.
  Se a string for "multiplicado", diga sim.
  Se a string for "dividido", diga sim.
  \Se a string for "depois", diga sim.
  Se a string for "seguido", diga sim.
  Se a string for "juntamente", diga sim.
  Se a string for "junto", diga sim.
  Se a string for "acompanhado", diga sim.
  Diga não.

Função para que se determine se uma string é algum operador de multiplicação:
  Se a string for "vezes", diga sim.
  Se a string for "multiplicado", diga sim.
  Diga não.

Função para que se determine se uma string é o início de alguma expressão matemática:
  Se a string for algum sinal aritmético, diga sim.
  Se a string for algum artigo indefinido, diga sim.
  Se a string for algum artigo definido, diga sim.
  Se a string for algum valor literal, diga sim.
  Diga não.

Função para que se determine se uma string é alguma preposição de atribuição:
  Se a string for "em", diga sim.
  Se a string for "para", diga sim.
  Diga não.
```
