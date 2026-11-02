# 02: Sintaxe, Regras Léxicas e Convenções

O `Português Puro` substitui símbolos convencionais de programação pela gramática portuguesa. Entender como o compilador processa palavras, pontuação e maiúsculas/minúsculas é fundamental para escrever código limpo e idiomático em `Português Puro`.

---

## 1. Pontuação e Instruções

### 1.1 O Ponto (`.`)
Toda instrução executável em `Português Puro` deve terminar com um ponto:
```pop
Adicione 1 para a contagem.
Atribua "Bem-vindo" para a saudação.
```
Se você esquecer um ponto, o compilador alertará:
`"Parece que você esqueceu um ponto por aqui."`

### 1.2 Os Dois-Pontos (`:`)
Dois-pontos são usados no final de definições:
- **Declarações de rotina**: `Rotina para que se desenhe um círculo dado um raio:`
- **Definições de tipo**: `Um monstro é uma lista com:`

### 1.3 O Ponto e Vírgula (`;`) para Nomes Alternativos
O `Português Puro` permite dar múltiplos nomes ou cabeçalhos sinônimos para uma rotina usando pontos e vírgula:
```pop
Rotina para que se escreva uma string com uma cor;
Rotina para que se trace uma string com uma cor:
  Atribua a cor para a cor deste contexto.
  Trace a string.
```
Agora o código chamador pode dizer tanto `Escreva "Olá" com a cor vermelha.` quanto `Trace "Olá" com a cor vermelha.`

---

## 2. Comentários e Observações

### 2.1 Comentários de Linha Única (`\`)
A barra invertida (`\`) inicia um comentário que vai até o fim da linha:
```pop
\ Este é um comentário de linha única. O compilador ignora tudo após a barra invertida.
Atribua 10 para a pontuação. \ Define pontuação inicial do jogador
```

### 2.2 Observações Inline (`[...]`)
Colchetes envolvem observações ou anotações que podem ser colocadas em qualquer lugar, até no meio de instruções:
```pop
A base da imagem é um endereço igual a 4194304. [$00400000]
Um grau é um número [0 a 359].
```

---

## 3. Artigos: Definidos vs. Indefinidos

O `Português Puro` usa artigos para distinguir entre **criar** variáveis e **referenciar** as existentes:

| Artigo | Propósito | Exemplo |
| :--- | :--- | :--- |
| `um`, `uma`, `uns`, `umas`, `outro`, `outra`, `alguns`, `algumas` | **Indefinido**: Declara uma nova variável local ou slot de parâmetro | `Atribua 5 para um número.` |
| `o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas` | **Definido**: Referencia uma variável já existente | `Adicione 1 para o número.` |

Exemplo:
```pop
Atribua "Alice" para uma string denominada nome.       \ Cria uma nova variável local chamada 'nome'
Acrescente " Silva" para o nome.   \ Referencia a variável local existente
```

---

## 4. Possessivos e Acesso a Campos (`'s`)

Para acessar campos de uma estrutura ou propriedades de um objeto, use o possessivo natural em português `'s` (ou `'` à esquerda para plurais):
```pop
Atribua a largura desta caixa para uma largura.
Atribua o primeiro nome desta pessoa para uma string.
Desenhe o olho esquerdo deste monstro.
```
Isto substitui a notação de ponto (`caixa.largura`, `pessoa.primeiroNome`) de outras linguagens.

---

## 5. Literais

O `Português Puro` suporta vários formatos de dados literais:

### Números
- Decimal padrão: `0`, `42`, `-100`, `1000`
- Frações: `1/2`, `3/4`, `20/1`

### Hexadecimal
Prefixado com cifrão (`$`):
```pop
Atribua $00400000 para o endereço.
Atribua $5A4D para a assinatura.
```

### Strings
Envolvidas por aspas duplas (`"`):
```pop
Atribua "`Português Puro`" para o título.
```
Para incluir aspas dentro de uma string, escape-as com aspas duplas (`""`):
```pop
Escreva 'Ele disse, ""Olá!""" no console.
```

### Sinalizadores (Booleanos)
Os literais `sim` e `não` representam valores de verdade booleanos:
```pop
Ative o sinalizador.        \ Define como sim (verdadeiro)
Desative o sinalizador.      \ Define como não (falso)
```

---

## 6. Sensibilidade a Maiúsculas/Minúsculas e Formatação

- **Insensibilidade a Maiúsculas/Minúsculas**: O `Português Puro` é completamente case-insensitive. `A Caixa`, `a caixa` e `A CAIXA` referenciam o mesmo identificador.
- **Indentação**: Indentação (geralmente dois espaços) indica aninhamento de código dentro de corpos de rotinas, laços e ramificações condicionais, mas é totalmente opcional.

---

## Próximo Guia
Continue para [03: Sistema de Tipos e Estruturas de Dados](./03_TIPOS.md).