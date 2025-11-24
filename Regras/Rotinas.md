# Rotinas - Português Puro

## Visão Geral

Rotinas em Português Puro são **procedimentos** ou **sub-rotinas** que executam ações específicas. Diferentemente das funções, rotinas **não retornam valores booleanos** e podem ser chamadas diretamente em qualquer parte do código.

---

## Características das Rotinas

### Capacidades

✅ **Executam ações e procedimentos**  
✅ **Podem chamar outras rotinas**  
✅ **Podem chamar funções** (através de condicionais `Se`)  
✅ **Podem conter laços** (`Itere`/`Reitere`)  
✅ **Podem receber parâmetros**  
✅ **Suportam sobrecarga de métodos** (nomes alternativos)  
✅ **Podem usar `Processe`** para chamadas externas (APIs)  
✅ **Podem conter instruções de máquina** (`Decodifique`)  
✅ **Podem usar `Preserve`** para proteger parâmetros  
✅ **Podem usar `Retorne`** para sair antecipadamente

### Restrições

❌ **Não retornam valores** (sem `return value`)  
❌ **Não podem usar** `Diga sim` **ou** `Diga não`  
❌ **Não podem ser chamadas na expressão condicional** (antes da vírgula do `Se`)

> [!IMPORTANT]
> **Expressão condicional vs Bloco condicional**
>
> - **Expressão condicional** (`Se X,`): A parte **antes da vírgula** só aceita **funções**
> - **Bloco condicional** (`Se X, Y.`): A parte **após a vírgula** pode conter **rotinas**
>
> ```pop
> \\ ❌ ERRADO - Rotina na expressão condicional
> Se limpe a string, continue.
> 
> \\ ✅ CORRETO - Função na expressão, rotina no bloco
> Se a string estiver em branco, limpe a string; retorne.
> ```

---

## Sintaxe

### Declaração Básica

```pop
Rotina para que se <nome da rotina>:
  <corpo da rotina>
```

### Estrutura

1. **Cabeçalho**: `Rotina para que se` + nome + parâmetros
2. **Corpo**: Instruções da rotina (indentadas)
3. **Término**: Fim do corpo ou `Retorne`

---

## Parâmetros

Parâmetros são indicados por **artigos indefinidos**:

| Artigo | Gênero/Número      | Exemplo       |
|--------|--------------------|---------------|
| `um`   | Masculino singular | `um número`   |
| `uma`  | Feminino singular  | `uma string`  |
| `uns`  | Masculino plural   | `uns twips`   |
| `umas` | Feminino plural    | `umas listas` |

### Exemplos de Parâmetros

```pop
\\ Sem parâmetros
Rotina para que se execute o programa:

\\ Um parâmetro
Rotina para que se limpe uma string:

\\ Dois parâmetros
Rotina para que se atribua um número para um segundo número:

\\ Três parâmetros
Rotina para que se ajuste uma caixa usando um número e um segundo número e um terceiro número:

\\ Múltiplos parâmetros com preposições
Rotina para que se adicione uma cor e um rótulo para um menu:
```

---

## Sobrecarga de Métodos (Nomes Alternativos)

Rotinas podem ter **múltiplos nomes** separados por **ponto e vírgula** (`;`):

```pop
Rotina para que se defina uma string como uma outra string;
Rotina para que se coloque uma outra string em uma string;
Rotina para que se substitua uma string por uma outra string;
Rotina para que se troque uma string para uma outra string;
Rotina para que se altere uma string para uma outra string;
Rotina para que se modifique uma string para uma outra string;
Rotina para que se mude uma string para uma outra string:
  Atribua a outra string para a string.
```

**Benefícios:**

- Flexibilidade na chamada
- Linguagem mais natural
- Compatibilidade com diferentes estilos de escrita

---

## Chamando Rotinas

Rotinas podem ser chamadas **diretamente** usando o nome (sem `Rotina para que se`):

### Declaração vs Chamada

**Declaração:**

```pop
Rotina para que se limpe uma string:
  Atribua "" para a string.
```

**Chamada:**

```pop
Limpe a string.
```

### Exemplos de Chamadas

```pop
\\ Declaração
Rotina para que se adicione um número para um segundo número:
  Atribua o número mais o segundo número ao segundo número.

\\ Chamadas
Adicione 5 para o total.
Adicione a largura para a coordenada X.
Adicione 1 para o contador.
```

---

## Preposições e Conjunções

Rotinas usam **preposições** e **conjunções** para conectar parâmetros de forma natural:

### Preposições Comuns

| Preposição     | Uso         | Exemplo               |
|----------------|-------------|-----------------------|
| `para`         | Destino     | `Atribua X para Y`    |
| `em`           | Localização | `Insira X em Y`       |
| `de` / `desde` | Origem      | `Remova X de Y`       |
| `com`          | Instrumento | `Faça X com Y`        |
| `usando`       | Meio        | `Crie X usando Y`     |
| `por`          | Agente      | `Multiplique X por Y` |

### Conjunções Comuns

| Conjunção | Uso         | Exemplo     |
|-----------|-------------|-------------|
| `e`       | Adição      | `X e Y e Z` |
| `ou`      | Alternativa | `X ou Y`    |

### Sinônimos de Preposições

As seguintes preposições são tratadas como **sinônimas**:

- `com` / `contendo` / `dado` / `desde` / `usando`
- `em` / `para` / `por`

```pop
\\ Declaração
Rotina para que se crie uma imagem usando uma URL:
  \\ Implementação...

\\ Chamadas equivalentes
Crie a imagem usando a URL.
Crie a imagem dada a URL.
Crie a imagem com a URL.
Crie a imagem desde a URL.
```

---

## Contrações

A linguagem suporta **contrações** para tornar o código mais natural:

| Contração | Expansão  | Exemplo                |
|-----------|-----------|------------------------|
| `à`       | `para a`  | `Atribua X à variável` |
| `ao`      | `para o`  | `Atribua X ao número`  |
| `deste`   | `de este` | `O valor deste campo`  |
| `desta`   | `de esta` | `O nome desta pessoa`  |
| `na`      | `em a`    | `Insira X na lista`    |
| `no`      | `em o`    | `Coloque X no arquivo` |
| `pelo`    | `por o`   | `Multiplique X pelo Y` |
| `pela`    | `por a`   | `Divida X pela Y`      |

---

## Comando `Retorne`

O comando `Retorne` **sai da rotina** imediatamente:

```pop
Rotina para que se processe um número:
  Se o número for menor do que 0, retorne. \\ Sai da rotina
  \\ Continua processando...
```

**Equivalente a:** `return;` em outras linguagens

---

## Comando `Preserve`

O comando `Preserve` cria uma **cópia** do parâmetro para evitar modificações indesejadas:

```pop
Rotina para que se inverta uma string:
  Preserve a string. \\ Cria cópia
  Limpe a string original. \\ Acessa a variável original
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### Palavra-chave `original`

Após `Preserve`, use `original` para acessar a variável original:

```pop
Preserve a contagem.
Subtraia 1 desde a contagem. \\ Modifica a cópia
Escreva a contagem original. \\ Acessa o valor original
```

---

## Exemplos Completos

### 1. Rotina Simples (Sem Parâmetros)

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Mostre a janela principal.
  Processe eventos.
  Feche o programa.
```

**Chamada:**

```pop
Execute o programa.
```

---

### 2. Rotina com Um Parâmetro

```pop
Rotina para que se limpe uma string:
  Atribua "" para a string.
```

**Chamada:**

```pop
Limpe o nome.
Limpe a mensagem de erro.
```

---

### 3. Rotina com Dois Parâmetros

```pop
Rotina para que se atribua um número para um segundo número:
  Atribua o número ao segundo número.
```

**Chamada:**

```pop
Atribua 10 para o contador.
Atribua a largura para a coordenada X.
```

---

### 4. Rotina com Sobrecarga

```pop
Rotina para que se defina um byte como um outro byte;
Rotina para que se coloque um outro byte em um byte;
Rotina para que se substitua um byte por um outro byte;
Rotina para que se troque um byte para um outro byte;
Rotina para que se altere um byte para um outro byte;
Rotina para que se modifique um byte para um outro byte;
Rotina para que se mude um byte para um outro byte:
  Atribua o outro byte para o byte.
```

**Chamadas (todas equivalentes):**

```pop
Defina o byte como 65.
Coloque 65 no byte.
Substitua o byte por 65.
Troque o byte para 65.
Altere o byte para 65.
Modifique o byte para 65.
Mude o byte para 65.
```

---

### 5. Rotina com Múltiplos Parâmetros

```pop
Rotina para que se ajuste uma caixa usando um número e um segundo número e um terceiro número e um quarto número:
  Adicione o número para a coordenada X1 desta caixa.
  Adicione o segundo número para a coordenada Y1 desta caixa.
  Adicione o terceiro número para a coordenada X2 desta caixa.
  Adicione o quarto número para a coordenada Y2 desta caixa.
```

**Chamada:**

```pop
Ajuste a caixa usando 10 e 20 e 30 e 40.
```

---

### 6. Rotina com Laço

```pop
Rotina para que se acrescente um byte para uma string usando uma contagem:
  Preserve a contagem.
  Itere.
    Se a contagem for menor do que 1, retorne.
    Acrescente o byte para a string.
    Subtraia 1 desde a contagem.
  Reitere.
```

**Chamada:**

```pop
Acrescente o caractere de espaço para a linha usando 10.
```

---

### 7. Rotina com Condicional

```pop
Rotina para que se simplifique uma fração:
  Obtenha um máximo divisor comum usando o numerador desta fração e o denominador desta fração.
  Divida o numerador desta fração pelo máximo divisor comum.
  Divida o denominador desta fração pelo máximo divisor comum.
```

**Chamada:**

```pop
Simplifique a fração.
```

---

### 8. Rotina com Chamada Externa (API)

```pop
Rotina para que se obtenha o modo do console:
  Processe "kernel32.dll" "GetConsoleMode" com
    O número identificador do fluxo de entrada padrão e
    O endereçamento dum número denominado modo do console
    Retornando um status de erro.
  Se o status de erro for 0,
    Escreva "Erro ao obter o modo do Console." no console.
```

**Chamada:**

```pop
Obtenha o modo do console.
```

---

### 9. Rotina com `Preserve` e `original`

```pop
Rotina para que se inverta uma string:
  Preserve a string.
  Limpe a string original.
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

**Chamada:**

```pop
Inverta o texto.
```

---

### 10. Rotina com Instruções de Máquina

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \\ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \\ mov [eax],0 - zera o ponteiro
```

**Chamada:**

```pop
Esvazie o ponteiro.
```

---

## Rotinas Chamando Rotinas

Rotinas podem chamar outras rotinas normalmente:

```pop
Rotina para que se prepare o console:
  Inicialize os componentes. \\ Chamada de rotina
  Obtenha o número identificador do fluxo de entrada padrão. \\ Chamada de rotina
  Defina o CodePage do console. \\ Chamada de rotina
  Obtenha o modo do console. \\ Chamada de rotina
```

---

## Rotinas Chamando Funções

Rotinas podem chamar funções através de condicionais:

```pop
Rotina para que se processe um arquivo:
  Se o arquivo não existe, retorne. \\ Chama função
  Se o arquivo está protegido contra gravação, exiba erro; retorne. \\ Chama função
  \\ Processa o arquivo...
```

---

## Variáveis Locais em Rotinas

Variáveis locais são declaradas com **artigos indefinidos**:

```pop
Rotina para que se calcule o fatorial de um número:
  Atribua 1 para um resultado. \\ Variável local
  Atribua 1 para um contador. \\ Variável local
  Itere.
    Se o contador for maior do que o número, pare.
    Multiplique o resultado pelo contador.
    Adicione 1 para o contador.
  Reitere.
  Atribua o resultado ao número.
```

---

## Rotina Principal (`Main`)

A rotina principal do programa é:

```pop
Rotina para que se execute o programa:
  \\ Código principal...
```

**Equivalente a:** `int main()` em C

---

## Callbacks

Para passar o endereço de uma rotina como callback, use `Aponte`:

```pop
Aponte um ponteiro para a rotina manipule um evento.
```

### Rotinas Compatíveis com Windows

Use `compativelmente` para rotinas que serão chamadas pelo Windows:

```pop
Rotina para que se compativelmente manipule um evento:
  \\ Implementação...
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// ROTINAS (Procedimentos)
// ============================================================================

Rotina:
    cabecalhos+=CabecalhoRotina+ ':'
    corpo=CorpoRotina;

CabecalhoRotina:
    'Rotina' 'para' 'que' 'se' ('compativelmente')? expressao=ExpressaoRotina ';'?;

ExpressaoRotina:
    // Nome da rotina + parâmetros + preposições
    elementos+=(PalavraChave | ArtigoIndefinido | Tipo | Preposicao | Conjuncao)+;

CorpoRotina:
    instrucoes+=Instrucao+;

// ============================================================================
// INSTRUÇÕES
// ============================================================================

Instrucao:
    ChamadaRotina | CondicionalSe | Itere | Retorne | Atribuicao | 
    Decodifique | Processe | Preserve | /* outras instruções */;

ChamadaRotina:
    // Usa a expressão da rotina sem "Rotina para que se"
    elementos+=(PalavraChave | Artigo | Variavel | Preposicao | Valor)+ '.';

Retorne:
    'Retorne' '.';

Preserve:
    'Preserve' variavel=Variavel '.';
```

---

## Observações Importantes

1. **Nomenclatura**: O nome da rotina começa após `Rotina para que se`
2. **Sem Retorno de Valor**: Rotinas não retornam valores (use funções para isso)
3. **Chamada Direta**: Rotinas podem ser chamadas diretamente (sem `Se`)
4. **Passagem por Referência**: Parâmetros são passados por referência (use `Preserve` para cópias)
5. **Sobrecarga**: Múltiplos nomes separados por `;` permitem flexibilidade
6. **Preposições Sinônimas**: `com`, `usando`, `dado`, `desde` são equivalentes
7. **Contrações**: Suportadas para naturalidade (`à`, `ao`, `deste`, `desta`, etc.)
8. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
9. **Laços**: Podem conter `Itere`/`Reitere` normalmente
10. **Chamadas Externas**: Podem usar `Processe` para APIs
11. **Assembly**: Podem incluir instruções de máquina com `Decodifique`
12. **Callbacks**: Use `compativelmente` para rotinas chamadas pelo Windows

---

## Comparação: Rotina vs Função

| Característica | Rotina                    | Função                            |
|----------------|---------------------------|-----------------------------------|
| **Retorno**    | Sem retorno               | Booleano (`sim`/`não`)            |
| **Declaração** | `Rotina para que se`      | `Função para que se determine se` |
| **Chamada**    | Diretamente               | Apenas em `Se`                    |
| **Término**    | Fim do corpo ou `Retorne` | `Diga sim`/`Diga não`             |
| **Uso**        | Ações e procedimentos     | Condições lógicas                 |

---

## Exemplos de Uso Prático

### Manipulação de Strings

```pop
Rotina para que se cite uma string:
  Atribua as aspas duplas para uma segunda string.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Acrescente o conteúdo deste caractere inicial deste subtexto para a segunda string.
    Se o conteúdo deste caractere inicial deste subtexto for as aspas duplas,
      Acrescente as aspas duplas para a segunda string.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Acrescente as aspas duplas para a segunda string.
  Atribua a segunda string à string.
```

### Operações Matemáticas

```pop
Rotina para que se eleve um número para um segundo número:
  Se o segundo número for 0,
    Atribua 1 ao número;
    Retorne.
  Se o segundo número for menor do que 0,
    Atribua 0 ao número;
    Retorne.
  Atribua 1 para um número resultante.
  Itere.
    Se um contador estiver ultrapassando o segundo número, pare.
    Multiplique o número resultante pelo número.
  Reitere.
  Atribua o número resultante ao número.
```

### Manipulação de Estruturas

```pop
Rotina para que se atribua um par de números para um segundo par de números:
  Atribua o número X deste par de números ao número X deste segundo par de números.
  Atribua o número Y deste par de números ao número Y deste segundo par de números.
```

### Gerenciamento de Memória

```pop
Rotina para que se associe um ponteiro usando uma quantidade de bytes:
  Se a quantidade de bytes for 0,
    Esvazie o ponteiro;
    Retorne.
  Preserve a quantidade de bytes.
  Arredonde a quantidade de bytes para cima usando a próxima potência de dois.
  Processe "kernel32.dll" "HeapAlloc" com
    O endereço heap e
    8 e \\ HEAP_ZERO_MEMORY
    A quantidade de bytes
  Retornando o ponteiro.
  Se o ponteiro não for inexistente,
    Adicione 1 para a contagem do heap;
    Retorne.
```

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes que descrevam claramente a ação
2. **Sobrecarga Útil**: Forneça variações naturais do nome
3. **Use `Preserve`**: Quando não quiser modificar parâmetros
4. **Retorno Antecipado**: Use `Retorne` para validações no início
5. **Comentários**: Documente lógica complexa
6. **Rotinas Simples**: Mantenha rotinas focadas em uma única responsabilidade
7. **Reutilização**: Chame outras rotinas quando apropriado
8. **Validação**: Verifique parâmetros antes de processar
9. **Gerenciamento de Memória**: Sempre desaloque o que foi alocado
10. **Callbacks**: Use `compativelmente` para rotinas chamadas pelo Windows

---

## Padrões Comuns

### Padrão de Atribuição

```pop
Rotina para que se atribua X para Y:
  Atribua X ao Y.
```

### Padrão de Adição

```pop
Rotina para que se adicione X para Y:
  Adicione X para Y.
```

### Padrão de Conversão

```pop
Rotina para que se converta X para Y:
  \\ Lógica de conversão...
```

### Padrão de Criação

```pop
Rotina para que se crie X:
  Aloque memória para X.
  \\ Inicialização...
```

### Padrão de Destruição

```pop
Rotina para que se destrua X:
  \\ Limpeza...
  Desaloque memória para X.
```

---

## Estatísticas

- **Palavra-chave de declaração**: `Rotina para que se`
- **Modificador de callback**: `compativelmente`
- **Comando de saída**: `Retorne`
- **Comando de proteção**: `Preserve`
- **Sobrecarga**: Suportada (múltiplos nomes)
- **Parâmetros**: Ilimitados
- **Laços**: Suportados
- **Chamadas externas**: Suportadas
- **Assembly**: Suportado
- **Retorno de valor**: Não suportado (use funções)
