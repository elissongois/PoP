# Possessivos (Operadores de Acesso a Membros) - Português Puro

## Definição

Possessivos são os **operadores de acesso a membros** de estruturas e listas em Português Puro. Equivalem ao operador `.` (ponto) em outras linguagens como C, Pascal, ou JavaScript.

## Sintaxe

```
<campo> <possessivo> <estrutura>
```

## Formas

| Possessivo | Formação   | Equivalente | Exemplo                       |
|------------|------------|-------------|-------------------------------|
| `deste`    | de + este  | `.`         | `o nome deste arquivo`        |
| `desta`    | de + esta  | `.`         | `a cor desta janela`          |
| `destes`   | de + estes | `.`         | `os valores destes registros` |
| `destas`   | de + estas   | `as idades destas pessoas`       |

## Comparação com Outras Linguagens

| Linguagem      | Operador | Exemplo                   | Português Puro               |
|----------------|----------|---------------------------|------------------------------|
| C/C++          | `.`      | `struct.field`            | `o campo desta estrutura`    |
| JavaScript     | `.`      | `object.property`         | `a propriedade deste objeto` |
| Python         | `.`      | `instance.attribute`      | `o atributo desta instância` |
| Pascal         | `.`      | `record.field`            | `o campo deste registro`     |
| Português Puro | `desta`  | `o campo desta estrutura` | `o campo desta estrutura`    |

## Razão de Ser

### Problema: Ambiguidade com Preposições

Nomes de variáveis em Português Puro podem conter as preposições `de`, `do`, `da`, `dos`, `das`:

```pop
\\ Variáveis válidas
O número de telefone é uma string.
A data de nascimento é uma data.
O endereço do cliente é uma string.
```

Se usássemos `de`, `do`, `da`, etc. como operadores de acesso, haveria **ambiguidade**:

```pop
\\ AMBÍGUO: "número de telefone" é o nome da variável ou "número" é campo de "telefone"?
Escreva o número de telefone para StdOut.
```

### Solução: Possessivos Demonstrativos

Usar `deste`, `desta`, `destes`, `destas` elimina a ambiguidade:

```pop
\\ CLARO: "nome" é um campo de "esta pessoa"
Escreva o nome desta pessoa para StdOut.

\\ CLARO: "número de telefone" é o nome completo da variável
Escreva o número de telefone para StdOut.
```

## Invariância de Gênero e Número

**Importante**: Em Português Puro, **não há distinção** entre as formas de possessivos em termos de funcionalidade. Todas são equivalentes:

```pop
\\ Todas as formas abaixo são EQUIVALENTES
o nome deste arquivo
o nome desta arquivo
o nome destes arquivo
o nome destas arquivo
```

A escolha da forma é **estilística**, para concordância natural com o português, mas o compilador trata todas igualmente.

## Exemplos

### Exemplo 1: Acesso a Campo de Estrutura

```pop
\\ Definição de tipo
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

\\ Uso
Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

**Equivalente em C**:
```c
struct Pessoa {
  char* nome;
  int idade;
};

void exibaPessoa(Pessoa* pessoa) {
  printf("%s\n", pessoa->nome);
  printf("%d\n", pessoa->idade);
}
```

### Exemplo 2: Atribuição a Campo

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa.
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
```

**Equivalente em JavaScript**:
```javascript
class Pessoa {
  constructor() {
    this.nome = "João";
    this.idade = 30;
  }
}
```

### Exemplo 3: Estruturas Aninhadas

```pop
Um endereço é uma estrutura com
  Uma string denominada rua e
  Um número denominado número.

Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um endereço denominado endereço.

Rotina para que se exiba endereço:
  Escreva a rua deste endereço desta pessoa para StdOut.
  Escreva o número deste endereço desta pessoa para StdOut.
```

**Equivalente em C**:
```c
pessoa->endereco.rua
pessoa->endereco.numero
```

### Exemplo 4: Listas (Também São Estruturas)

```pop
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima. \verificar a disponibilidade da palavra próxima para uso como nome de variável

Rotina para que se percorra lista:
  Itere.
    Se a lista estiver em branco, pare.
    Escreva o valor desta lista para StdOut.
    Atribua a próxima desta lista para a lista.
  Reitere.
```

## Sintaxe Completa

### Forma Básica
```
<artigo> <nome_do_campo> <possessivo> <nome_da_estrutura>
```

### Com Múltiplos Níveis
```
<campo_nível_1> <possessivo> <campo_nível_2> <possessivo> <estrutura>
```

### Exemplos de Sintaxe
```pop
\\ Nível único
o nome desta pessoa
a idade deste registro
os valores destas listas

\\ Múltiplos níveis
a rua deste endereço desta pessoa
o valor desta próxima desta lista
o nome deste pai desta pessoa
```

## Detecção pelo Compilador

```pop
Função para que se determine se um percorredor está sobre algum possessivo reverso:
  Preserve o percorredor.
  Se o segmento inicial deste percorredor não for "de", diga não.
  Mova o percorredor (usando diretrizes de compilação).
  Se o segmento inicial deste percorredor for algum pronome demonstrativo, diga sim.
  Diga não.
```

**Nota**: O compilador detecta `de` + pronome demonstrativo (`este`, `esta`, `estes`, `estas`) como possessivo.

## Diferença: Possessivo vs Preposição

| Contexto         | Forma   | Significado              |
|------------------|---------|--------------------------|
| Nome de variável | `de`    | Parte do nome            |
| Acesso a membro  | `desta` | Operador de acesso (`.`) |
| Preposição comum | `de`    | Relação entre palavras   |

### Exemplos Comparativos

```pop
\\ "de" como parte do nome
O número de telefone é uma string.
Escreva o número de telefone para StdOut.

\\ "desta" como operador de acesso
Uma pessoa é uma estrutura com uma string denominada telefone.
Escreva o telefone desta pessoa para StdOut.

\\ "de" como preposição comum
Atribua o valor de 10 para um número. \ verificar as regras de preposição antes de literais
\ Já que o "de" pode fazer parte do nome da variável, ele precisa ser distinguido de preposição. Na verdade o de só atua como preposição quando não é seguido por um pronome demonstrativo. Fora disso, ou ele faz parte de um nome de variável, ou ele é apenas açúcar sintático, ou seja, ele não tem significado e não está ao lado de um parâmetro ou variável. Requer uma preposição entre o nome da variável ou parâmetro e o `de`
```

## Mapeamento para Langium

```langium
// Possessivos (contrações de de + pronome demonstrativo)
Possessivo returns string:
    'deste' | 'desta' | 'destes' | 'destas' | //adjacentes - acesso a campo/variável global/variável local de um tipo definido
    'desse' | 'dessa' | 'desses' | 'dessas' | //ambrangentes - acesso a campos calculados de tipos ou variáveis locais inicializadas em invocação de rotina
    'daquele' | 'daquela' | 'daqueles' | 'daquelas'; //ambrangentes - acesso a campos calculados de tipos ou variáveis locais inicializadas em invocação de rotina

// Acesso a membro
AcessoMembro:
    campo=Identificador possessivo=Possessivo estrutura=Expressao;

// Exemplo de uso em expressão
ExpressaoPrimaria:
    AcessoMembro |
    Identificador |
    Literal |
    '(' Expressao ')';
```

## Observações Importantes

1. **Invariância**: `deste`, `desta`, `destes`, `destas` são **funcionalmente idênticos**
2. **Concordância Estilística**: Use a forma que melhor concorda com o português natural
3. **Ambiguidade Resolvida**: Possessivos evitam confusão com nomes de variáveis compostos
4. **Estruturas e Listas**: Ambas usam possessivos para acesso a membros
5. **Aninhamento**: Possessivos podem ser encadeados para estruturas aninhadas
6. **Case-Insensitive**: Como toda a linguagem, possessivos são case-insensitive

## Exemplos Completos

### Exemplo Completo 1: Cadastro de Pessoa

```pop
\\ Definição de tipos
Um endereço é uma estrutura com
  Uma string denominada rua,
  Um número denominado número e
  Uma string denominada cidade.

Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade e
  Um endereço denominado endereço.

\\ Uso
Rotina para que se cadastre uma pessoa:
  Aloque memória para uma pessoa.
  
  \\ Acesso direto
  Atribua "João Silva" para o nome desta pessoa.
  Atribua 35 para a idade desta pessoa.
  
  \\ Acesso aninhado
  Atribua "Rua das Flores" para a rua deste endereço desta pessoa.
  Atribua 123 para o número deste endereço desta pessoa.
  Atribua "São Paulo" para a cidade deste endereço desta pessoa.
  
  \\ Exibição
  Escreva "Nome: " junto com o nome desta pessoa para StdOut.
  Escreva "Idade: " junto com a idade desta pessoa para StdOut.
  Escreva "Endereço: " junto com a rua deste endereço desta pessoa para StdOut.
```

### Exemplo Completo 2: Lista Encadeada

```pop
Uma lista de nomes é uma lista com
  Uma string denominada nome e
  Uma lista de nomes denominada próxima.

Rotina para que se adicione nome para uma lista de nomes usando uma string:
  Aloque memória para uma segunda lista de nomes.
  Atribua a string para o nome desta segunda lista de nomes.
  Atribua a lista de nomes para a próxima desta segunda lista de nomes.
  Atribua a segunda lista de nomes para a lista de nomes.

Rotina para que se exiba lista de nomes:
  Itere.
    Se a lista de nomes estiver em branco, pare.
    Escreva o nome desta lista de nomes para StdOut.
    Atribua a próxima desta lista de nomes para a lista de nomes.
  Reitere.
```

## Erros Comuns

### ❌ Erro 1: Usar `de` em vez de `desta`
```pop
\\ ERRADO: Ambíguo
Escreva o nome de pessoa para StdOut.
```
✅ **Correto**:
```pop
Escreva o nome desta pessoa para StdOut.
```

### ❌ Erro 2: Confundir nome de variável com acesso a membro
```pop
\\ Se "número de telefone" é o nome da variável:
O número de telefone é uma string.
Escreva o número de telefone para StdOut.  \\ Correto

\\ Se "telefone" é um campo de "pessoa":
Escreva o telefone desta pessoa para StdOut.  \\ Correto
```

### ❌ Erro 3: Usar ponto (`.`) como em outras linguagens
```pop
\\ ERRADO: Sintaxe inválida
Escreva pessoa.nome para StdOut.
```
✅ **Correto**:
```pop
Escreva o nome desta pessoa para StdOut.
```
