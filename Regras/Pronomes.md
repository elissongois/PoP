# Pronomes - Português Puro

## Visão Geral

Pronomes são palavras que substituem ou acompanham substantivos. Em Português Puro, os pronomes têm funções específicas na sintaxe da linguagem, principalmente os **pronomes demonstrativos** que funcionam como artigos.

---

# PRONOMES DEMONSTRATIVOS

Pronomes demonstrativos indicam a posição de algo em relação às pessoas do discurso, situando-o no tempo ou no espaço. Em Português Puro, eles têm duas funções principais:

1. **Pronomes Demonstrativos Adjacentes**: Funcionam como **artigos definidos**
2. **Pronomes Demonstrativos Abrangentes**: Funcionam como **artigos indefinidos**

## Classificação por Proximidade

### Proximidade Imediata (Adjacentes)
Indicam algo próximo à pessoa que fala.

| Pronome | Gênero    | Número   | Função          | Exemplo                             |
|---------|-----------|----------|-----------------|-------------------------------------|
| `este`  | Masculino | Singular | Artigo Definido | `Este número é um contador.`        |
| `esta`  | Feminino  | Singular | Artigo Definido | `Esta string é uma mensagem.`       |
| `estes` | Masculino | Plural   | Artigo Definido | `Estes números são uns contadores.` |
| `estas` | Feminino  | Plural   | Artigo Definido | `Estas strings são umas mensagens.` |

### Proximidade Média (Abrangentes)
Indicam algo próximo à pessoa com quem se fala.

| Pronome | Gênero    | Número   | Função            | Exemplo                              |
|---------|-----------|----------|-------------------|--------------------------------------|
| `esse`  | Masculino | Singular | Artigo Indefinido | `Esse número é uma estrutura com...` |
| `essa`  | Feminino  | Singular | Artigo Indefinido | `Essa string é uma estrutura com...` |
| `esses` | Masculino | Plural   | Artigo Indefinido | `Esses números são uns tipos.`       |
| `essas` | Feminino  | Plural   | Artigo Indefinido | `Essas strings são umas estruturas.` |

### Distância (Abrangentes)
Indicam algo distante tanto de quem fala quanto de quem ouve.

| Pronome   | Gênero    | Número   | Função            | Exemplo                               |
|-----------|-----------|----------|-------------------|---------------------------------------|
| `aquele`  | Masculino | Singular | Artigo Indefinido | `Aquele tipo é uma estrutura com...`  |
| `aquela`  | Feminino  | Singular | Artigo Indefinido | `Aquela lista é uma estrutura com...` |
| `aqueles` | Masculino | Plural   | Artigo Indefinido | `Aqueles tipos são uns números.`      |
| `aquelas` | Feminino  | Plural   | Artigo Indefinido | `Aquelas listas são umas estruturas.` |

---

# PRONOMES DEMONSTRATIVOS ADJACENTES

## Função
Funcionam como **artigos definidos**, indicando variáveis globais ou referências específicas.

## Uso em Declarações Globais

```pop
\ Equivalente a: O número é um contador
Este número é um contador.

\ Equivalente a: A string é uma mensagem
Esta string é uma mensagem.

\ Equivalente a: Os números são uns contadores
Estes números são uns contadores.

\ Equivalente a: As strings são umas mensagens
Estas strings são umas mensagens.
```

## Contrações

### De + Pronome Demonstrativo Adjacente

| Contração | Formação   | Uso                      |
|-----------|------------|--------------------------|
| `deste`   | de + este  | `o nome deste arquivo`   |
| `desta`   | de + esta  | `a cor desta janela`     |
| `destes`  | de + estes | `o total destes valores` |
| `destas`  | de + estas | `a soma destas idades`   |

**Exemplos:**
```pop
\ Acessando campos de estrutura
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
Escreva o comprimento desta string para StdOut.
```

### Em + Pronome Demonstrativo Adjacente

| Contração | Formação   | Uso               |
|-----------|------------|-------------------|
| `neste`   | em + este  | `neste momento`   |
| `nesta`   | em + esta  | `nesta lista`     |
| `nestes`  | em + estes | `nestes arquivos` |
| `nestas`  | em + estas | `nestas pastas`   |

---

# PRONOMES DEMONSTRATIVOS ABRANGENTES

## Função
Funcionam como **artigos indefinidos**, usados em:
- Definição de tipos
- Declaração de variáveis locais
- Especificação de campos em estruturas

## Tipos de Pronomes Abrangentes

### 1. Proximidade Média (`esse`, `essa`, `esses`, `essas`)

**Uso em Definição de Tipos:**
```pop
Esse número é uma estrutura com 4 bytes.
Essa string é uma estrutura com um caractere inicial e um caractere final.
Esses ponteiros são umas estruturas com 4 bytes.
Essas listas são umas estruturas com uma lista inicial e uma lista final.
```

**Uso em Declaração Local:**
```pop
Rotina para que se processe dados:
  Atribua 10 para esse número denominado contador.
  Atribua "João" para essa string denominada nome.
```

### 2. Distância (`aquele`, `aquela`, `aqueles`, `aquelas`)

**Uso em Definição de Tipos:**
```pop
Aquele tipo é uma estrutura com uns campos.
Aquela estrutura é uma lista com uns elementos.
Aqueles tipos são uns números.
Aquelas estruturas são umas listas.
```

**Uso em Declaração Local:**
```pop
Rotina para que se crie variáveis:
  Atribua 20 para aquele número denominado total.
  Ative aquele sinalizador denominado status.
```

### 3. Indeterminação (`certo`, `certa`, `certos`, `certas`)

Indicam algo não especificado ou genérico.

**Uso em Definição de Tipos:**
```pop
Certo número é um contador.
Certa string é uma mensagem.
Certos números são uns contadores.
Certas strings são umas mensagens.
```

### 4. Determinação (`determinado`, `determinada`, `determinados`, `determinadas`)

Indicam algo específico mas não nomeado.

**Uso em Definição de Tipos:**
```pop
Determinado tipo é uma estrutura com uns campos.
Determinada estrutura é uma lista com uns elementos.
Determinados tipos são uns números.
Determinadas estruturas são umas listas.
```

## Contrações com Pronomes Abrangentes

### De + Pronome Demonstrativo Abrangente

| Contração  | Formação     | Uso                           |
|------------|--------------|-------------------------------|
| `desse`    | de + esse    | `o valor desse número`        |
| `dessa`    | de + essa    | `o tamanho dessa string`      |
| `desses`   | de + esses   | `a soma desses valores`       |
| `dessas`   | de + essas   | `o total dessas quantidades`  |
| `daquele`  | de + aquele  | `o nome daquele tipo`         |
| `daquela`  | de + aquela  | `a cor daquela estrutura`     |
| `daqueles` | de + aqueles | `os valores daqueles números` |
| `daquelas` | de + aquelas | `as cores daquelas listas`    |

### Em + Pronome Demonstrativo Abrangente

| Contração  | Formação     | Uso                |
|------------|--------------|--------------------|
| `nesse`    | em + esse    | `nesse caso`       |
| `nessa`    | em + essa    | `nessa situação`   |
| `nesses`   | em + esses   | `nesses momentos`  |
| `nessas`   | em + essas   | `nessas condições` |
| `naquele`  | em + aquele  | `naquele instante` |
| `naquela`  | em + aquela  | `naquela hora`     |
| `naqueles` | em + aqueles | `naqueles dias`    |
| `naquelas` | em + aquelas | `naquelas semanas` |

---

# OUTROS PRONOMES

## Pronomes Possessivos

Embora não sejam amplamente usados na sintaxe principal, pronomes possessivos podem aparecer em nomes de variáveis e tipos.

### Possessivos em Português

| Pronome          | Pessoa      | Gênero/Número | Exemplo                             |
|------------------|-------------|---------------|-------------------------------------|
<!-- 
| `meu`, `minha`   | 1ª singular | M/F           | `o meu número`, `a minha string`    |
| `teu`, `tua`     | 2ª singular | M/F           | `o teu contador`, `a tua mensagem`  |
| `seu`, `sua`     | 3ª singular | M/F           | `o seu valor`, `a sua cor`          |
| `nosso`, `nossa` | 1ª plural   | M/F           | `o nosso total`, `a nossa lista`    |
| `vosso`, `vossa` | 2ª plural   | M/F           | `o vosso resultado`, `a vossa soma` |
 -->

### Possessivos em Inglês
<!-- 
Para compatibilidade com código existente, a linguagem suporta o possessivo inglês `'s`:

```pop
\ Exemplo (uso raro)
O valor de João's é um número.
``` -->

---

# PRONOMES RELATIVOS

Pronomes relativos estabelecem relações entre orações. Em Português Puro, aparecem principalmente em preposições e locuções.

| Pronome                          | Uso                    | Exemplo                               |
|----------------------------------|------------------------|---------------------------------------|
| `que`                            | Relação geral          | `um ponteiro que aponta para um byte` |
| `qual`, `quais`                  | Interrogativo/relativo | `o qual tipo`, `os quais valores`     |
| `cujo`, `cuja`, `cujos`, `cujas` | Posse                  | `cuja cor`, `cujo valor`              |

**Exemplos:**
```pop
\ Uso de 'que' em definições
Um caractere inicial é um ponteiro que aponta para um byte.

\ Uso de 'cujo' em preposições
Próximo de cuja cor seja vermelha.
```

---

# TABELA RESUMO DE PRONOMES DEMONSTRATIVOS

| Proximidade       | Singular M    | Singular F    | Plural M       | Plural F       | Função            |
|-------------------|---------------|---------------|----------------|----------------|-------------------|
| **Imediata**      | `este`        | `esta`        | `estes`        | `estas`        | Artigo Definido   |
| **Média**         | `esse`        | `essa`        | `esses`        | `essas`        | Artigo Indefinido |
| **Distante**      | `aquele`      | `aquela`      | `aqueles`      | `aquelas`      | Artigo Indefinido |
| **Indeterminado** | `certo`       | `certa`       | `certos`       | `certas`       | Artigo Indefinido |
| **Determinado**   | `determinado` | `determinada` | `determinados` | `determinadas` | Artigo Indefinido |

---

# EXEMPLOS COMPLETOS

## Usando Pronomes Demonstrativos Adjacentes

```pop
\ Declaração de variáveis globais
Este contador é um número.
Esta mensagem é uma string.
Estes totais são uns números.
Estas cores são umas cores.

\ Acesso a campos
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

## Usando Pronomes Demonstrativos Abrangentes

```pop
\ Definição de tipos com 'esse/essa'
Esse número é uma estrutura com 4 bytes.
Essa string é uma estrutura com um caractere inicial e um caractere final.

\ Definição de tipos com 'aquele/aquela'
Aquele ponteiro é uma estrutura com 4 bytes.
Aquela lista é uma estrutura com uma lista inicial e uma lista final.

\ Definição de tipos com 'certo/certa'
Certo tipo é uma estrutura com uns campos.
Certa estrutura é uma lista com uns elementos.

\ Definição de tipos com 'determinado/determinada'
Determinado valor é um número.
Determinada quantidade é uma fração.
```

## Usando Contrações

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade e
  Uma cor denominada cor favorita.

Rotina para que se processe pessoa:
  \ Contrações com 'desta'
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  
  \ Contrações com 'dessa'
  Escreva o comprimento dessa string para StdOut.
  
  \ Contrações com 'daquela'
  Se a cor daquela pessoa for vermelha, retorne.
```

---

# MAPEAMENTO PARA LANGIUM

```langium
// ============================================================================
// PRONOMES DEMONSTRATIVOS ADJACENTES (Artigos Definidos)
// ============================================================================

PronomeDemonstrativoAdjacente returns string:
    'este' | 'esta' | 'estes' | 'estas';

// ============================================================================
// PRONOMES DEMONSTRATIVOS ABRANGENTES (Artigos Indefinidos)
// ============================================================================

PronomeDemonstrativoAbrangente returns string:
    // Proximidade média
    'esse' | 'essa' | 'esses' | 'essas' |
    
    // Distância
    'aquele' | 'aquela' | 'aqueles' | 'aquelas' |
    
    // Indeterminação
    'certo' | 'certa' | 'certos' | 'certas' |
    
    // Determinação
    'determinado' | 'determinada' | 'determinados' | 'determinadas';

// ============================================================================
// CONTRAÇÕES DE PRONOMES DEMONSTRATIVOS
// ============================================================================

// De + Pronome Demonstrativo Adjacente
ContracaoDeDemonstrativoAdjacente returns string:
    'deste' | 'desta' | 'destes' | 'destas';

// Em + Pronome Demonstrativo Adjacente
ContracaoEmDemonstrativoAdjacente returns string:
    'neste' | 'nesta' | 'nestes' | 'nestas';

// De + Pronome Demonstrativo Abrangente
ContracaoDeDemonstrativoAbrangente returns string:
    'desse' | 'dessa' | 'desses' | 'dessas' |
    'daquele' | 'daquela' | 'daqueles' | 'daquelas';

// Em + Pronome Demonstrativo Abrangente
ContracaoEmDemonstrativoAbrangente returns string:
    'nesse' | 'nessa' | 'nesses' | 'nessas' |
    'naquele' | 'naquela' | 'naqueles' | 'naquelas';

// ============================================================================
// PRONOMES POSSESSIVOS
// ============================================================================

PronomePossessivo returns string:
    'meu' | 'minha' | 'meus' | 'minhas' |
    'teu' | 'tua' | 'teus' | 'tuas' |
    'seu' | 'sua' | 'seus' | 'suas' |
    'nosso' | 'nossa' | 'nossos' | 'nossas' |
    'vosso' | 'vossa' | 'vossos' | 'vossas';

// Possessivo inglês
PossessivoIngles returns string:
    "'s" | "'";

// ============================================================================
// PRONOMES RELATIVOS
// ============================================================================

PronomeRelativo returns string:
    'que' | 'qual' | 'quais' |
    'cujo' | 'cuja' | 'cujos' | 'cujas';
```

---

# OBSERVAÇÕES FINAIS

1. **Função Sintática**: Pronomes demonstrativos funcionam como artigos em Português Puro
2. **Adjacentes = Definidos**: `este`, `esta`, `estes`, `estas` funcionam como artigos definidos
3. **Abrangentes = Indefinidos**: `esse`, `aquele`, `certo`, `determinado` (e variações) funcionam como artigos indefinidos
4. **Contrações Obrigatórias**: Use `desta`, `deste`, etc. para acessar campos de estruturas
5. **Case-Insensitive**: Todos os pronomes são case-insensitive
6. **Concordância**: Gênero e número devem concordar com o substantivo
7. **Estilo**: Pronomes demonstrativos oferecem variações estilísticas sem alterar a semântica
8. **Equivalência**: `Um tipo` = `Esse tipo` = `Aquele tipo` = `Certo tipo` = `Determinado tipo`
