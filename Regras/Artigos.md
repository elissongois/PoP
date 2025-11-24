# Artigos - Português Puro

## Visão Geral

Artigos são palavras que precedem substantivos (nomes de tipos e variáveis) e determinam seu escopo e especificidade. Em Português Puro, os artigos têm função **sintática fundamental**, pois determinam se uma variável é **global** ou **local**.

## Categorias de Artigos

### 1. Artigos Definidos
Indicam **variáveis globais** (escopo do módulo).

### 2. Artigos Indefinidos
Indicam **variáveis locais** (escopo da rotina) ou **definição de tipos**.

---

# ARTIGOS DEFINIDOS

## Função

- Declaram **variáveis globais**
- Referenciam variáveis já declaradas (locais ou globais)
- Acessam campos de estruturas

## Formas

| Artigo | Gênero    | Número   | Uso                              |
|--------|-----------|----------|----------------------------------|
| `a`    | Feminino  | Singular | `A mensagem é uma string.`       |
| `o`    | Masculino | Singular | `O contador é um número.`        |
| `os`   | Masculino | Plural   | `Os contadores são uns números.` |
| `as`   | Feminino  | Plural   | `As mensagens são umas strings.` |

## Pronomes Demonstrativos Adjacentes

Funcionam como artigos definidos, indicando proximidade ou referência específica.

| Pronome | Gênero    | Número   | Uso                                 |
|---------|-----------|----------|-------------------------------------|
| `este`  | Masculino | Singular | `Este número é um contador.`        |
| `esta`  | Feminino  | Singular | `Esta string é uma mensagem.`       |
| `estes` | Masculino | Plural   | `Estes números são uns contadores.` |
| `estas` | Feminino  | Plural   | `Estas strings são umas mensagens.` |

## Sintaxe

### Declaração de Variável Global
```
<Artigo Definido> <nome> <é|   são> <Artigo Indefinido> <tipo> [igual a <valor>].
```

**Exemplos:**
```pop
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

\ Com inicialização
O número pi é uma fração igual a 355/113.
A cor de fundo é uma cor igual a #FFFFFF.
```

### Referência a Variável
```pop
\ Após declaração local
Atribua 10 para um contador.
\ Referência com artigo definido
Adicione 5 para o contador.
```

### Acesso a Campos de Estrutura
```pop
\ Usando contrações deste, desta, destes, destas
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
```

## Observações Importantes

1. **Escopo Global**: Artigos definidos **sempre** indicam variáveis globais quando usados em declarações fora de rotinas
2. **Referência**: Dentro de rotinas, artigos definidos referenciam variáveis já declaradas
3. **Case-Insensitive**: `O`, `o`, `A`, `a` são equivalentes
4. **Concordância**: Deve haver concordância de gênero e número com o tipo

---

# ARTIGOS INDEFINIDOS

## Função

- Declaram **variáveis locais** (dentro de rotinas)
- Definem **novos tipos** (estruturas, listas, ponteiros)
- Especificam **tipos em campos** de estruturas

## Formas Básicas

| Artigo | Gênero    | Número   | Uso                           |
|--------|-----------|----------|-------------------------------|
| `um`   | Masculino | Singular | `um número`, `um ponteiro`    |
| `uma`  | Feminino  | Singular | `uma string`, `uma estrutura` |
| `uns`  | Masculino | Plural   | `uns números`, `uns bytes`    |
| `umas` | Feminino  | Plural   | `umas strings`, `umas cores`  |

## Pronomes Demonstrativos Abrangentes

Funcionam como artigos indefinidos, oferecendo variações estilísticas.

### Proximidade Média (`esse`, `essa`)
| Pronome | Gênero    | Número   | Uso                                  |
|---------|-----------|----------|--------------------------------------|
| `esse`  | Masculino | Singular | `Esse número é uma estrutura com...` |
| `essa`  | Feminino  | Singular | `Essa string é uma estrutura com...` |
| `esses` | Masculino | Plural   | `Esses números são uns contadores.`  |
| `essas` | Feminino  | Plural   | `Essas strings são umas mensagens.`  |

### Distância (`aquele`, `aquela`)
| Pronome   | Gênero    | Número   | Uso                                       |
|-----------|-----------|----------|-------------------------------------------|
| `aquele`  | Masculino | Singular | `Aquele tipo é uma estrutura com...`      |
| `aquela`  | Feminino  | Singular | `Aquela estrutura é uma estrutura com...` |
| `aqueles` | Masculino | Plural   | `Aqueles tipos são uns números.`          |
| `aquelas` | Feminino  | Plural   | `Aquelas estruturas são umas listas.`     |

### Indeterminação (`certo`, `certa`)
| Pronome  | Gênero    | Número   | Uso                                  |
|----------|-----------|----------|--------------------------------------|
| `certo`  | Masculino | Singular | `Certo número é um contador.`        |
| `certa`  | Feminino  | Singular | `Certa string é uma mensagem.`       |
| `certos` | Masculino | Plural   | `Certos números são uns contadores.` |
| `certas` | Feminino  | Plural   | `Certas strings são umas mensagens.` |

### Determinação (`determinado`, `determinada`)
| Pronome        | Gênero    | Número   | Uso                                        |
|----------------|-----------|----------|--------------------------------------------|
| `determinado`  | Masculino | Singular | `Determinado tipo é uma estrutura...`      |
| `determinada`  | Feminino  | Singular | `Determinada estrutura é uma lista...`     |
| `determinados` | Masculino | Plural   | `Determinados tipos são uns números.`      |
| `determinadas` | Feminino  | Plural   | `Determinadas estruturas são umas listas.` |

## Sintaxe

### Definição de Tipo
```
<Artigo Indefinido> <nome do tipo> <é | são> <definição>.
```

**Exemplos:**
```pop
Um número é uma estrutura com 4 bytes.
Uma string é uma estrutura com um caractere inicial e um caractere final.
Uns pixels são 15 twips.
```

### Declaração de Variável Local
```
<Comando> <valor> para <Artigo Indefinido> <tipo> [denominado <nome>].
```

**Exemplos:**
```pop
Atribua 10 para um número.
Atribua "João" para uma string denominada nome.
Ative um sinalizador denominado status.
```

### Campo de Estrutura
```
<Artigo Indefinido> <tipo> [denominado <nome>]
```

**Exemplos:**
```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

## Observações Importantes

1. **Escopo Local**: Artigos indefinidos em comandos de atribuição criam variáveis locais através de um tipo definido
2. **Definição de Tipos**: Artigos indefinidos fora de rotinas definem novos tipos
3. **Inferência de nomes**: O compilador atribui o nome do tipo à variável local quando `denominado` é omitido
4. **Inferência de tipos**: O compilador infere o tipo da variável local se o nome da variável local (tipo) for igual ao nome de um tipo definido (se não encontrar um tipo com nome idêntico, ele faz a regressão até corresponder o último nome. Exemplo: `Primeiro nome`, `novo número` `terceira linha`. Não faz correspondência se o último nome não coresponder. Exemplo: `Cor azul` (Não existe um tipo denominado `azul`, embora existe o tipo denominado `cor`).
5. **Pronomes**: Todos os pronomes demonstrativos abrangentes são equivalentes aos artigos básicos
6. **Concordância**:
   * Em variáveis, deve haver concordância de gênero e número (`Uma garota` é diferente de `Um garoto`). 
   * Concordância em número dispensada em tipos, por conta da plurazlização não precisa haver concordância de número. 
   * Concordância verbal dispensada. Verbos são tratados de maneira igual, independentemente da variação de tempo verbal, ou de pessoa.
   * Concordância nominal dispensada. Pronomes são tratados de maneira igual, independentemente do gênero e número.

---

# DIFERENÇAS ENTRE ARTIGOS DEFINIDOS E INDEFINIDOS

| Aspecto            | Artigos Definidos                                      | Artigos Indefinidos                                  |
|--------------------|--------------------------------------------------------|------------------------------------------------------|
| **Formas**         | `o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas` | `um`, `uma`, `uns`, `umas` + pronomes demonstrativos |
| **Escopo**         | Variáveis globais                                      | Variáveis locais ou tipos                            |
| **Declaração**     | Fora de rotinas                                        | Dentro de rotinas ou definição de tipos              |
| **Referência**     | Variável já existente                                  | Nova variável ou tipo                                |
| **Exemplo Global** | `O contador é um número.`                              | -                                                    |
| **Exemplo Local**  | `Adicione 5 para o contador.`                          | `Atribua 10 para um contador.`                       |
| **Exemplo Tipo**   | -                                                      | `Um número é uma estrutura com 4 bytes.`             |

---

# CONTRAÇÕES

Contrações são formas combinadas de preposições com artigos, usadas para acessar campos de estruturas.

## Contrações com Artigo Definido

### De + Artigo Definido

| Contração | Formação | Uso                   |
|-----------|----------|-----------------------|
| `do`      | de + o   | `o nome do arquivo`   |
| `da`      | de + a   | `a cor da janela`     |
| `dos`     | de + os  | `o total dos valores` |
| `das`     | de + as  | `a soma das idades`   |

### Em + Artigo Definido

| Contração | Formação | Uso            |
|-----------|----------|----------------|
| `no`      | em + o   | `no início`    |
| `na`      | em + a   | `na lista`     |
| `nos`     | em + os  | `nos arquivos` |
| `nas`     | em + as  | `nas pastas`   |

## Contrações Demonstrativas

### De + Pronome Demonstrativo

| Contração | Formação   | Uso                      |
|-----------|------------|--------------------------|
| `deste`   | de + este  | `o nome deste arquivo`   |
| `desta`   | de + esta  | `a cor desta janela`     |
| `destes`  | de + estes | `o total destes valores` |
| `destas`  | de + estas | `a soma destas idades`   |

**Exemplos de Uso:**
```pop
\ Acessando campos de estrutura
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
Escreva o nome desta pessoa para StdOut.

\ Com outras contrações
Atribua a cor da janela para uma cor.
Adicione o valor do campo para o total.
```

---

# EXEMPLOS COMPLETOS

## Declaração de Variáveis Globais

```pop
\ Com artigos definidos básicos
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

\ Com pronomes demonstrativos adjacentes
Este número é um contador.
Esta string é uma mensagem.
Estes números são uns totais.
Estas strings são umas mensagens.

\ Com inicialização
O número pi é uma fração igual a 355/113.
A cor de fundo é uma cor igual a #FFFFFF.
```

## Definição de Tipos

```pop
\ Com artigos indefinidos básicos
Um número é uma estrutura com 4 bytes.
Uma string é uma estrutura com um caractere inicial e um caractere final.

\ Com pronomes demonstrativos abrangentes
Esse ponteiro é uma estrutura com 4 bytes.
Aquela lista é uma estrutura com uma lista inicial e uma lista final.
Certo tipo é uma estrutura com uns campos.
Determinada estrutura é uma lista com uns elementos.
```

## Declaração de Variáveis Locais

```pop
Rotina para que se processe dados:
  \ Com artigos indefinidos básicos
  Atribua 10 para um contador.
  Atribua "João" para uma string denominada nome.
  
  \ Com pronomes demonstrativos
  Atribua 20 para esse número denominado total.
  Ative aquele sinalizador denominado status.
  
  \ Referência com artigos definidos
  Adicione 5 para o contador.
  Escreva o nome para StdOut.
```

## Acesso a Campos

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se crie uma pessoa:
  Aloque memória para uma pessoa.
  
  \ Usando contrações demonstrativas
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  
  \ Lendo campos
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

---

# MAPEAMENTO PARA LANGIUM

```langium
// ============================================================================
// ARTIGOS DEFINIDOS
// ============================================================================

ArtigoDefinido returns string:
    'o' |    'os' |    'a' |    'as' |    
    'este' |    'esta' |    'estes' |    'estas';

// ============================================================================
// ARTIGOS INDEFINIDOS
// ============================================================================

ArtigoIndefinido returns string:
    // Formas básicas
    'um' |    'uns' |    'uma' |    'umas' |   
    
    // Pronomes demonstrativos abrangentes - proximidade média
    'esse' |    'essa' |    'esses' |    'essas' |   
    
    // Pronomes demonstrativos abrangentes - distância
    'aquele' |    'aquela' |    'aqueles' |    'aquelas' |   
    
    // Pronomes demonstrativos abrangentes - indeterminação
    'certo' |    'certa' |    'certos' |    'certas' |   
    
    // Pronomes demonstrativos abrangentes - determinação
    'determinado' |    'determinada' |    'determinados' |    'determinadas';

// ============================================================================
// CONTRAÇÕES
// ============================================================================

// De + Artigo Definido
ContracaoDeDefinido returns string:
    'do' |    'da' |    'dos' |    'das';

// Em + Artigo Definido
ContracaoEmDefinido returns string:
    'no' |    'na' |    'nos' |    'nas';

// De + Pronome Demonstrativo
ContracaoDeDemonstrativo returns string:
    'deste' |    'desta' |    'destes' |    'destas' |   
    'desse' |    'dessa' |    'desses' |    'dessas' |   
    'daquele' |    'daquela' |    'daqueles' |    'daquelas';

// Em + Pronome Demonstrativo
ContracaoEmDemonstrativo returns string:
    'neste' |    'nesta' |    'nestes' |    'nestas' |   
    'nesse' |    'nessa' |    'nesses' |    'nessas' |   
    'naquele' |    'naquela' |    'naqueles' |    'naquelas';
```

---

# OBSERVAÇÕES FINAIS

1. **Case-Insensitive**: Todos os artigos são case-insensitive (`O` = `o`, `UM` = `um`)
2. **Concordância Obrigatória**: Gênero e número devem concordar com o tipo
3. **Função Sintática**: Artigos determinam escopo (global vs local)
4. **Pronomes como Artigos**: Pronomes demonstrativos funcionam como artigos
5. **Contrações**: Usadas principalmente para acesso a campos de estruturas
6. **Inferência**: O compilador usa artigos para determinar escopo e tipo de declaração

```pop
Função para que se determine se uma string é algum artigo indefinido:
  \PAL
  Se a string for "um", diga sim.
  Se a string for "uma", diga sim.
  Se a string for "uns", diga sim.
  Se a string for "umas", diga sim.
  \Se a string for "outro", diga sim.
  \Se a string for "outra", diga sim.
  \Se a string for "algum", diga sim.
  \Se a string for "alguma", diga sim.
  \Se a string for "alguns", diga sim.
  \Se a string for "algumas", diga sim.
  Se a string for algum pronome demonstrativo abrangente, diga sim. \ para funcionamento dos possessivos - local correto
  Diga não.

Função para que se determine se uma string é algum pronome demonstrativo abrangente:
  Se a string for "esse", diga sim.
  Se a string for "essa", diga sim.
  Se a string for "aquele", diga sim.
  Se a string for "aquela", diga sim.
  Se a string for "esses", diga sim.
  Se a string for "essas", diga sim.
  Se a string for "aqueles", diga sim.
  Se a string for "aquelas", diga sim.
  Se a string for "certo", diga sim.
  Se a string for "certa", diga sim.
  Se a string for "certos", diga sim.
  Se a string for "certas", diga sim.
  Se a string for "determinado", diga sim.
  Se a string for "determinada", diga sim.
  Se a string for "determinados", diga sim.
  Se a string for "determinadas", diga sim.
  Diga não.
```