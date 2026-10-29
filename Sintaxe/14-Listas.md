# Listas

## Visão Geral

Listas em Português Puro são **estruturas de dados duplamente encadeadas** definidas como um tipo especial. Elas são definidas com a palavra-chave `uma lista com` e automaticamente criam a estrutura com ponteiros `anterior` e `posterior`.

---

## Definição de Listas

### Sintaxe Básica

```pop
Um <nome da lista> é uma lista com <campos>.
```

### Características

- **Estrutura interna**: Automaticamente cria ponteiros `anterior` e `posterior` (lista duplamente encadeada)
- **Campos**: Seguem as mesmas regras das estruturas (artigo indefinido + tipo + `denominado` + nome)
- **Separadores**: `e`, `ou` ou `,` entre campos; ponto (`.`) no final
- **Cabeçalha**: Para manipular listas, usa-se uma estrutura âncora (`umas listas`) com ponteiros `inicial` e `final`

---

## Exemplos de Definição

### Lista Simples

```pop
Um polígono é uma lista com uns vértices.
```

### Lista com Múltiplos Campos

```pop
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

### Lista de Números

```pop
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima.
```

---

## Estrutura Interna (Automática)

Quando você define uma lista, o compilador cria internamente:

```
Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.

Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.
```

---

## Manipulação de Listas

### Cabeçalha (Âncora)

Para trabalhar com uma lista, use `umas listas` (plural) como cabeçalha:

```pop
A agenda telefônica é uns contatos.
```

### Declaração de Variável de Lista

```pop
Atribua a lista inicial destas listas para uma lista.
```

### Percorrendo a Lista

```pop
Rotina para que se processe lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, pare.
    \ Processa a lista...
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

---

## Acesso a Membros (Possessivos)

Listas usam **possessivos** (`deste`, `desta`, `destes`, `destas`) para acessar campos, igual a estruturas:

```pop
\ Definição
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima.

\ Uso
Rotina para que se percorra lista:
  Itere.
    Se a lista estiver em branco, pare.
    Escreva o valor desta lista para StdOut.
    Atribua a próxima desta lista para a lista.
  Reitere.
```

**Exemplo completo:**

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

---

## Operações Comuns

### Adicionar Item (Append)

```pop
Rotina para que se adicione item para uma lista usando um valor:
  Aloque memória para uma nova lista.
  Atribua o valor para o valor desta nova lista.
  Atribua a lista para a posterior desta nova lista.
  Atribua a nova lista para a lista.
```

### Remover Item

```pop
Remova o item desde a lista.
Remova a lista desde as listas.
```

### Acrescentar Elemento

```pop
Acrescente o item para a lista.
Acrescente o vértice para os vértices deste polígono.
```

---

## Padrões Comuns

### Padrão 1: Iteração Simples

```pop
Atribua a lista inicial destas listas para uma lista.
Itere.
  Se a lista for inexistente, pare.
  \ Processa a lista...
  Atribua a lista posterior desta lista à lista.
Reitere.
```

### Padrão 2: Busca em Lista

```pop
Rotina para que se encontre item por nome:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \ Encontrou
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Padrão 3: Destruição de Lista

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

## Gerenciamento de Memória

**Importante:** Listas requerem gerenciamento manual de memória:

- **Aloque**: Para criar novos nós
- **Desaloque**: Para liberar memória (após remover da lista)
- **Destrua**: Para destruir estrutura completa

```pop
Rotina para que se crie item:
  Aloque memória para uma nova lista.
  Se a nova lista for inexistente, retorne.
  \ Inicializa campos...
  Retorne.
```

---

## Exemplos Práticos

### Agenda Telefônica

```pop
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.

Rotina para que se adicione contato:
  Aloque memória para um novo contato.
  Se o novo contato for inexistente, retorne.
  Atribua o nome para o nome deste novo contato.
  Atribua o telefone para o telefone deste novo contato.
  Acrescente o novo contato para a agenda telefônica.

Rotina para que se liste contatos:
  Atribua a lista inicial desta agenda telefônica para um contato.
  Itere.
    Se o contato for inexistente, pare.
    Escreva o nome deste contato seguido de ": " junto com o telefone deste contato para StdOut.
    Atribua a próxima deste contato para o contato.
  Reitere.
```

### Processamento de Polígonos

```pop
Um vértice é uma estrutura com
  Um número denominado x e
  Um número denominado y.

Um polígono é uma lista com uns vértices.

Rotina para que se calcule perímetro:
  Atribua 0 para um perímetro.
  Atribua o primeiro vértice deste polígono para um vértice atual.
  Atribua o primeiro vértice deste polígono para um vértice anterior.
  Itere.
    Se o vértice atual for inexistente, pare.
    \ Calcula distância...
    Atribua o próximo deste vértice atual para o vértice atual.
  Reitere.
```

---

## Observações Importantes

1. **Lista vs Estrutura**: Listas são estruturas especiais com ponteiros automáticos `anterior`/`posterior`
2. **Cabeçalha**: Use o plural (`uns contatos`, `uma agenda telefônica`) como âncora
3. **Variável de Iteração**: Declare uma variável do tipo singular para iterar (`um contato`, `uma lista`)
4. **Memória Manual**: Sempre aloque antes de usar e desaloque após remover
5. **Possessivos**: Use `desta`, `deste`, etc. para acessar campos da lista
6. **Terminação**: Lista vazia = ponteiro `inicial` inexistente OU `final` < `inicial`
7. **Pluralização**: O compilador gera automaticamente o plural (`contato` → `contatos`)

---

## Mapeamento para Langium

```langium
DefinicaoLista:
    'uma' 'lista' 'com' campos+=CampoEstrutura (separador=('e'|'ou'|',') campos+=CampoEstrutura)*;

CampoEstrutura:
    artigo=ArtigoIndefinido tipo+=IDTipo+ ('denominado' nome+=IDTipo+)? referencia?='(referência)'? ('sob' campoBase+=IDTipo+)?;

// Estrutura interna gerada automaticamente
ListaEstruturada:
    'uma' 'lista' 'estruturada' 'é' 'uma' 'estrutura' 'com'
    'uma' 'lista' 'denominada' 'lista' 'posterior' 'e'
    'uma' 'lista' 'denominada' 'lista' 'anterior' '.';

UmasListas:
    'umas' 'listas' 'são' 'uma' 'estrutura' 'com'
    'uma' 'lista' 'denominada' 'lista' 'inicial' 'e'
    'uma' 'lista' 'denominada' 'lista' 'final' '.';
```

---

## Comparação com Outras Linguagens

| Conceito              | Português Puro              | C/C++                          |
|-----------------------|----------------------------|--------------------------------|
| Definição             | `uma lista com ...`        | `struct Node { ... };`         |
| Ponteiro próximo      | Automático (`posterior`)   | `Node* next;`                  |
| Ponteiro anterior     | Automático (`anterior`)    | `Node* prev;`                  |
| Cabeçalha             | `uns <tipo>`               | `Node* head; Node* tail;`      |
| Iteração              | `Itere` + `posterior`      | `for(Node* p=head; p; p=p->next)` |
| Acesso a campo        | `campo desta lista`        | `p->campo`                     |
| Alocação              | `Aloque memória`           | `malloc()`                     |
| Desalocação           | `Desaloque memória`        | `free()`                       |

---

## Estatísticas

- **Tipo de lista**: Duplamente encadeada (automático)
- **Palavras-chave**: `uma lista com`, `uns` (plural para cabeçalha)
- **Campos automáticos**: 2 (`anterior`, `posterior`)
- **Cabeçalha**: 2 ponteiros (`inicial`, `final`)
- **Gerenciamento de memória**: Manual (`Aloque`/`Desaloque`/`Destrua`)
- **Acesso a membros**: Via possessivos (`deste`, `desta`, etc.)