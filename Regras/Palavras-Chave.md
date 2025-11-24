# Palavras-Chave - Português Puro

## Visão Geral

Palavras-chave em Português Puro são termos reservados que têm **significados especiais** para o compilador. Elas são usadas para declarar variáveis, definir estruturas, controlar fluxo e realizar operações específicas.

---

## Categorias de Palavras-Chave

### 1. Designação (Nomeação)
### 2. Complementação (Estruturas)
### 3. Referenciamento (Ponteiros)
### 4. Devolução (Retorno)
### 5. Comandos de Controle
### 6. Operadores Especiais

---

## 1. Palavras-Chave de Designação

### Função

Usadas para **nomear** variáveis locais ao declará-las.

### Lista

| Palavra-Chave | Gênero/Número      | Exemplo                          |
|---------------|--------------------|----------------------------------|
| `denominado`  | Masculino singular | `um número denominado contador`  |
| `denominada`  | Feminino singular  | `uma string denominada mensagem` |
| `denominados` | Masculino plural   | `uns bytes denominados buffer`   |
| `denominadas` | Feminino plural    | `umas listas denominadas itens`  |
| `chamado`     | Masculino singular | `um ponteiro chamado endereço`   |
| `chamada`     | Feminino singular  | `uma fração chamada proporção`   |
| `chamados`    | Masculino plural   | `uns números chamados valores`   |
| `chamadas`    | Feminino plural    | `umas strings chamadas nomes`    |

### Sintaxe

```pop
<artigo indefinido> <tipo> <palavra-chave> <nome>
```

### Exemplos

```pop
\\ Denominado/Denominada
Atribua 0 para um número denominado contador.
Atribua "" para uma string denominada mensagem.
Atribua 1/2 para uma fração denominada metade.

\\ Chamado/Chamada
Aloque memória para um ponteiro chamado buffer.
Crie uma lista chamada itens.

\\ Plural
Atribua 0 para uns bytes denominados dados.
Crie umas strings denominadas linhas.
```

---

## 2. Palavras-Chave de Complementação

### Função

Usadas para definir **campos de estruturas** (equivalente a `with` em outras linguagens).

### Lista

| Palavra-Chave | Uso                        |
|---------------|----------------------------|
| `com`         | Define campos de estrutura |
| `contendo`    | Sinônimo de `com`          |

### Sintaxe

```pop
<tipo> é uma estrutura <palavra-chave>
  <campo 1>,
  <campo 2>,
  <campo N>.
```

### Exemplos

```pop
\\ Com
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email.

\\ Contendo
Um retângulo é uma estrutura contendo
  Um número denominado largura,
  Um número denominado altura.
```

---

## 3. Palavras-Chave de Referenciamento

### Função

Indica que um campo é um **ponteiro** (referência) e não deve ser desalocado automaticamente.

### Lista

| Palavra-Chave  | Uso                       |
|----------------|---------------------------|
| `(referência)` | Marca campo como ponteiro |

### Sintaxe

```pop
<tipo> é uma estrutura com
  <campo> (referência),
  <outros campos>.
```

### Exemplos

```pop
\\ Campo de referência
Um nó é uma estrutura com
  Um número denominado valor,
  Um nó denominado próximo (referência),
  Um nó denominado anterior (referência).

\\ Múltiplas referências
Uma árvore é uma estrutura com
  Um número denominado chave,
  Uma árvore denominada esquerda (referência),
  Uma árvore denominada direita (referência).
```

**Importante:** Campos marcados com `(referência)` **não são desalocados** automaticamente quando a estrutura é destruída.

---

## 4. Palavras-Chave de Devolução

### Função

Usadas para **receber valores de retorno** de chamadas externas (DLLs).

### Lista

| Palavra-Chave | Uso                      |
|---------------|--------------------------|
| `retornando`  | Recebe valor de retorno  |
| `recebendo`   | Sinônimo de `retornando` |
| `obtendo`     | Sinônimo de `retornando` |

### Sintaxe

```pop
Processe "<dll>" "<função>" com
  <parâmetros>
<palavra-chave> <variável>.
```

### Exemplos

```pop
\\ Retornando
Processe "kernel32.dll" "GetLastError" retornando o código de erro.

\\ Recebendo
Processe "user32.dll" "MessageBoxA" com
  0 e
  "Mensagem" e
  "Título" e
  0
recebendo o resultado.

\\ Obtendo
Processe "kernel32.dll" "HeapAlloc" com
  o heap e
  8 e
  o tamanho
obtendo o ponteiro.
```

---

## 5. Comandos de Controle

### 5.1 Controle de Fluxo

| Comando   | Função                  | Exemplo               |
|-----------|-------------------------|-----------------------|
| `Se`      | Condicional             | `Se X for Y, ...`     |
| `quando`  | Sinônimo de `Se`        | `quando X for Y, ...` |
| `Itere`   | Início de laço          | `Itere. ... Reitere.` |
| `Reitere` | Volta ao início do laço | `Reitere.`            |
| `Pare`    | Sai do laço             | `Se condição, pare.`  |
| `Retorne` | Sai da rotina           | `Se erro, retorne.`   |

---

### 5.2 Funções Deliberativas

| Comando     | Função           | Exemplo                               |
|-------------|------------------|---------------------------------------|
| `determine` | Declara função   | `Função para que se determine se ...` |
| `Diga`      | Retorno booleano | `Diga sim.` / `Diga não.`             |
| `sim`       | Verdadeiro       | `Diga sim.`                           |
| `não`       | Falso            | `Diga não.`                           |

---

### 5.3 Gerenciamento de Memória

| Comando    | Função                  | Exemplo              |
|------------|-------------------------|----------------------|
| `Preserve` | Cria cópia de parâmetro | `Preserve a string.` |
| `isole`    | Sinônimo de `Preserve`  | `isole o número.`    |
| `conserve` | Sinônimo de `Preserve`  | `conserve a fração.` |

---

### 5.4 Chamadas Externas

| Comando    | Função                 | Exemplo                       |
|------------|------------------------|-------------------------------|
| `Processe` | Chama DLL              | `Processe "kernel32.dll" ...` |
| `invoque`  | Sinônimo de `Processe` | `invoque "user32.dll" ...`    |

---

### 5.5 Ponteiros

| Comando       | Função               | Exemplo                           |
|---------------|----------------------|-----------------------------------|
| `aponte`      | Define ponteiro      | `aponte o ponteiro para ...`      |
| `direcione`   | Sinônimo de `aponte` | `direcione o ponteiro para ...`   |
| `redirecione` | Sinônimo de `aponte` | `redirecione o ponteiro para ...` |

---

## 6. Operadores Especiais

### 6.1 Atribuição

| Operador | Função             | Exemplo               |
|----------|--------------------|-----------------------|
| `igual`  | Atribuição com `=` | `Atribua X igual a Y` |
| `a`      | Equivalência       | `igual a 10`          |
| `para`   | Equivalência       | `igual para 10`       |

---

### 6.2 Estruturas Especiais

| Operador        | Função               | Exemplo                          |
|-----------------|----------------------|----------------------------------|
| `magnitude`     | Tamanho de variável  | `a magnitude desta string`       |
| `conteúdo`      | Conteúdo de byte     | `o conteúdo deste byte`          |
| `endereçamento` | Endereço de variável | `o endereçamento desta variável` |

---

### 6.3 Reutilização

| Operador   | Função           | Exemplo             |
|------------|------------------|---------------------|
| `empregue` | Reutiliza rotina | `empregue a rotina` |

---

## 7. Açúcar Sintático

Palavras opcionais que tornam o código mais legível:

| Palavra        | Uso                                       |
|----------------|-------------------------------------------|
| `Rotina`       | Opcional antes de `para que se`           |
| `Função`       | Opcional antes de `para que se determine` |
| `Procedimento` | Sinônimo de `Rotina`                      |

### Exemplos

```pop
\\ Com açúcar sintático
Rotina para que se processe dados:
  \\ Código...

Função para que se determine se X é Y:
  \\ Código...

\\ Sem açúcar sintático (também válido)
Para que se processe dados:
  \\ Código...
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// PALAVRAS-CHAVE
// ============================================================================

// Designação
PalavraChaveDesignacao:
    'denominado' | 'denominada' | 'denominados' | 'denominadas' |
    'chamado' | 'chamada' | 'chamados' | 'chamadas';

// Complementação
PalavraChaveComplementacao:
    'com' | 'contendo';

// Referenciamento
PalavraChaveReferenciamento:
    '(referência)';

// Devolução
PalavraChaveDevolucao:
    'retornando' | 'recebendo' | 'obtendo';

// Comandos de Controle
ComandoCondicional:
    'Se' | 'quando';

ComandoLaco:
    'Itere' | 'Reitere' | 'Pare';

ComandoRetorno:
    'Retorne';

ComandoDeliberacao:
    'determine';

ComandoResposta:
    'Diga' ('sim' | 'não');

// Gerenciamento de Memória
ComandoProtecao:
    'Preserve' | 'isole' | 'conserve';

// Chamadas Externas
ChamadaExterna:
    'Processe' | 'invoque';

// Ponteiros
ComandoPonteiro:
    'aponte' | 'direcione' | 'redirecione';

// Operadores Especiais
OperadorEspecial:
    'magnitude' | 'conteúdo' | 'endereçamento' | 'empregue';

// Açúcar Sintático
AcucarSintatico:
    'Rotina' | 'Função' | 'Procedimento';
```

---

## Observações Importantes

1. **Case-Insensitive**: Palavras-chave não diferenciam maiúsculas de minúsculas
2. **Sinônimos**: Várias palavras-chave têm sinônimos (`denominado`/`chamado`)
3. **Gênero/Número**: Palavras de designação concordam com o tipo
4. **Referência**: `(referência)` evita desalocação automática
5. **Devolução**: Usada apenas em chamadas externas
6. **Preserve**: Cria cópia para proteger parâmetros
7. **Açúcar Sintático**: Opcional, melhora legibilidade
8. **Magnitude**: Retorna tamanho em bytes
9. **Conteúdo**: Acessa valor de byte
10. **Endereçamento**: Retorna ponteiro para variável

---

## Boas Práticas

1. **Use Nomes Descritivos**: Aproveite a flexibilidade da linguagem
2. **Consistência**: Use sempre a mesma palavra-chave para situações similares
3. **Referências**: Marque explicitamente campos que são ponteiros
4. **Preserve**: Use quando precisar modificar parâmetros sem afetar o original
5. **Açúcar Sintático**: Use para melhorar legibilidade
6. **Gênero/Número**: Sempre concorde com o tipo
7. **Documentação**: Comente o uso de `(referência)`
8. **Devolução**: Sempre capture retornos de APIs
9. **Magnitude**: Use para obter tamanhos dinamicamente
10. **Clareza**: Prefira sinônimos mais claros

---

## Exemplos Completos

### Declaração de Variáveis

```pop
Rotina para que se processe dados:
  Atribua 0 para um número denominado contador.
  Atribua "" para uma string denominada resultado.
  Atribua 1/2 para uma fração denominada proporção.
  Aloque memória para um ponteiro chamado buffer.
```

---

### Estrutura com Referências

```pop
Uma lista é uma estrutura com
  Uma string denominada nome,
  Um número denominado valor,
  Uma lista denominada próxima (referência),
  Uma lista denominada anterior (referência).
```

---

### Chamada Externa com Devolução

```pop
Rotina para que se obtenha erro do sistema:
  Processe "kernel32.dll" "GetLastError" retornando o código.
  Se o código não for 0,
    Converta o código para uma mensagem;
    Escreva "Erro: " junto com a mensagem no console.
```

---

### Uso de Preserve

```pop
Rotina para que se normalize uma string:
  Preserve a string.
  Converta a string para letras minúsculas.
  Remova espaços extras desde a string.
  \\ A string original permanece intacta
```

---

### Estrutura Completa

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email,
  Uma pessoa denominada supervisor (referência).

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa denominada nova.
  Atribua "João" ao nome desta nova pessoa.
  Atribua 30 à idade desta nova pessoa.
  Atribua "joao@email.com" ao email desta nova pessoa.
  Atribua inexistente ao supervisor desta nova pessoa.
```

---

## Estatísticas

- **Categorias**: 6 principais
- **Designação**: 8 palavras (`denominado`, `chamado` + variações)
- **Complementação**: 2 palavras (`com`, `contendo`)
- **Referenciamento**: 1 palavra (`(referência)`)
- **Devolução**: 3 palavras (`retornando`, `recebendo`, `obtendo`)
- **Comandos de controle**: ~15 palavras
- **Operadores especiais**: ~10 palavras
- **Sinônimos**: Muitas palavras têm alternativas
- **Case-insensitive**: Sim
- **Flexão**: Gênero e número (quando aplicável)
