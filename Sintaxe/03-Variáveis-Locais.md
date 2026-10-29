# Variáveis Locais - Português Puro

## Visão Geral

Variáveis locais são declaradas **dentro de rotinas** e são acessíveis apenas naquele escopo. A declaração ocorre no momento da primeira atribuição ou alocação, usando **artigos indefinidos** (`um`, `uma`, `uns`, `umas`).

---

## Sintaxe

### Forma com Inferência de Tipo (mais comum)
```
Atribua <valor> para <artigo indefinido> <nome-com-tipo>.
```

### Forma com Nome Explícito
```
Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.
```

### Forma com Alocação de Memória (para tipos complexos)
```
Aloque memória para <artigo indefinido> <tipo>.
```

---

## Artigos Indefinidos

| Artigo | Gênero/Número | Exemplo |
|--------|---------------|---------|
| `um` | Masculino singular | `um número` |
| `uma` | Feminino singular | `uma string` |
| `uns` | Masculino plural | `uns bytes` |
| `umas` | Feminino plural | `umas listas` |

> **Nota**: Pronomes demonstrativos abrangentes (`esse`, `essa`, `aquele`, `aquela`, `certos`, `certas`, `determinado`, `determinada`, etc.) também funcionam como artigos indefinidos.

---

## Tipos Inferíveis (por palavra-chave no nome)

| Palavra-chave | Tipo Inferido |
|---------------|---------------|
| `número` | `número` (inteiro 32 bits) |
| `string` | `string` |
| `fração` | `fração` |
| `sinalizador` | `sinalizador` (booleano) |
| `caractere` | `caractere` (byte) |
| `byte` | `byte` |
| `ponteiro` | `ponteiro` |
| `estrutura` | `estrutura` |
| `lista` | `lista` |

---

## Exemplos

### Inferência de Tipo (nome contém o tipo)

```pop
\ O tipo 'número' é inferido da palavra "número"
Atribua 10 para um número.

\ O tipo 'string' é inferido da palavra "string"
Atribua "João" para uma string.

\ O tipo 'fração' é inferido da palavra "fração"
Atribua 355/113 para uma fração.

\ O tipo 'sinalizador' é inferido da palavra "sinalizador"
Atribua sim para um sinalizador.
```

### Nome Explícito (com `denominado`)

```pop
Atribua 18 para um número denominado idade.
Atribua "Maria" para uma string denominada nome.
Atribua 3/4 para uma fração denominada proporção.
```

### Alocação de Memória (estruturas, listas)

```pop
\ Para estruturas
Aloque memória para uma pessoa.
Atribua "João" para o nome desta pessoa.

\ Para listas
Aloque memória para um contato.
Acrescente o contato na agenda telefônica.
```

### Uso Posterior (após declaração, use artigo definido)

```pop
\ Declaração
Atribua 10 para um contador.

\ Uso posterior
Adicione 5 para o contador.
Se o contador for maior do que 10, pare.
```

### Variáveis em Laços (persistem após o laço)

```pop
Atribua 1 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que 10, pare.
Reitere.
\ 'contador' ainda acessível aqui
```

### Declaração em Expressão Condicional

```pop
Itere.
  Se um número for maior que 10, pare.  \ Declara 'número' aqui
  Adicione 1 ao número.
Reitere.
```

### Variáveis com Tipos Complexos

```pop
\ Declaração de uma estrutura local
Aloque memória para uma pessoa.
Atribua "João Silva" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.

\ Declaração de uma lista local
Atribua nulo para um contato.
Itere.
  Obtenha um contato desde a agenda telefônica.
  Se o contato for nulo, pare.
  Escreva o nome deste contato para StdOut.
Reitere.
```

---

## Observações Importantes

1. **Artigo indefinido vs definido**:
   - Artigo **indefinido** (`um`, `uma`, `uns`, `umas`) = declaração de variável **local**
   - Artigo **definido** (`o`, `a`, `os`, `as`) = referência a variável já declarada

2. **Inferência de tipo**: 
   - A linguagem identifica o tipo pela presença de palavras-chave no nome
   - Palavras como `número`, `string`, `fração`, `sinalizador` indicam o tipo
   - Exemplo: `um número total` é do tipo `número`

3. **Escopo limitado**: 
   - Variáveis locais existem apenas dentro da rotina onde foram declaradas
   - Não são acessíveis fora da rotina

4. **Primeira atribuição**: 
   - A declaração ocorre na primeira vez que a variável é mencionada com artigo indefinido
   - Não é necessário declarar separadamente antes de usar

5. **Passagem por referência**: 
   - Todos os parâmetros em rotinas são passados por referência
   - Alterar um parâmetro dentro de uma rotina **altera a variável original**
   - Use `Preserve` para criar uma cópia local e evitar modificação

6. **Nomes descritivos**: 
   - Português Puro incentiva nomes longos e descritivos em linguagem natural
   - Exemplo: `um número de tentativas`, `uma string de boas-vindas`

7. **Pluralização automática**: 
   - O compilador gera automaticamente o plural
   - `um contador` → `os contadores`
   - `uma pessoa` → `as pessoas`

---

## Mapeamento para Langium

```langium
DeclaracaoLocal:
    comando=ComandoDeclaracao valor=Expressao preposicao=('para'|'em') 
    artigo=ArtigoIndefinido tipo=TipoOuNome 
    (denominacao?='denominado' nome+=IDVariavel+)? 
    '.';

ComandoDeclaracao:
    'Atribua' | 'Aloque' 'memória';

TipoOuNome:
    tipo+=IDVariavel+;

ArtigoIndefinido:
    'um' | 'uma' | 'uns' | 'umas' | 
    'esse' | 'essa' | 'esses' | 'essas' |
    'aquele' | 'aquela' | 'aqueles' | 'aquelas' |
    'certo' | 'certa' | 'certos' | 'certas' |
    'determinado' | 'determinada' | 'determinados' | 'determinadas';

// Terminal para identificadores de variáveis (permite símbolos especiais)
terminal IDVariavel:
    /[_a-zA-Zà-úÀ-Ú#\/'&][_\w_à-úÀ-Ú#\/-&]*/;
```

---

## Diferença: Variáveis Locais vs Globais

| Aspecto | Variáveis Locais | Variáveis Globais |
|---------|------------------|-------------------|
| **Artigo** | Indefinido (`um`, `uma`) | Definido (`o`, `a`) |
| **Escopo** | Dentro da rotina | Todo o módulo |
| **Declaração** | Na primeira atribuição | Fora de rotinas |
| **Sintaxe** | `Atribua valor para um tipo` | `O nome é um tipo` |
| **Acesso posterior** | Com artigo definido | Sempre com artigo definido |

> **Próximo**: [Tipos de Dados](04-Tipos-de-Dados.md)