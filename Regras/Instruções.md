# Instruções - Português Puro

## Visão Geral

Instruções são **comandos** que executam ações específicas em Português Puro. Elas formam o corpo de rotinas e funções, manipulando dados, controlando fluxo e interagindo com o sistema.

---

## Categorias de Instruções

### 1. Atribuição e Manipulação
- `Atribua` - Atribuição de valores
- `Adicione` / `Subtraia` / `Multiplique` / `Divida` - Operações aritméticas
- `Acrescente` - Concatenação/adição ao final
- `Remova` - Remoção de elementos

### 2. Conversão de Tipos
- `Converta` - Conversão explícita de tipos
- `tal como` / `tal qual` - Conversão forçada (cast)

### 3. Controle de Fluxo
- `Se` - Condicional
- `Itere` / `Reitere` / `Pare` - Laços
- `Retorne` - Saída de rotina

### 4. Entrada/Saída
- `Escreva` - Saída para console/arquivo
- `Leia` - Entrada de dados

### 5. Memória
- `Aloque` / `Desaloque` - Gerenciamento de memória
- `Preserve` - Cópia de parâmetros
- `Reaponte` - Realocação de memória

### 6. Chamadas
- `Processe` - Chamada externa (API)
- `Decodifique` - Instruções de máquina

---

## 1. Atribuição (`Atribua`)

### Sintaxe

```pop
Atribua <valor> para <variável>.
Atribua <valor> ao <campo>.
Atribua <valor> à <variável>.
```

### Preposições Aceitas

- `para` / `ao` / `à` - Destino da atribuição

### Exemplos

```pop
\\ Atribuição simples
Atribua 10 para o contador.
Atribua "João" ao nome.
Atribua sim à flag.

\\ Atribuição com expressão
Atribua o número X mais o número Y ao total.
Atribua a largura vezes a altura à área.

\\ Atribuição de campos
Atribua "Vermelho" à cor desta caixa.
Atribua 100 ao número X deste par de números.

\\ Atribuição com declaração
Atribua 0 para um contador. \\ Declara e atribui
Atribua "" para uma string denominada resultado.
```

---

## 2. Operações Aritméticas

### `Adicione`

**Sintaxe:**

```pop
Adicione <valor> para <variável>.
Adicione <valor> ao <campo>.
```

**Exemplos:**

```pop
Adicione 1 para o contador.
Adicione a largura para a coordenada X.
Adicione 10 ao total.
```

---

### `Subtraia`

**Sintaxe:**

```pop
Subtraia <valor> desde a <variável>.
Subtraia <valor> de a <variável>.
```

**Exemplos:**

```pop
Subtraia 1 desde a variável contador.
Subtraia a margem desde a largura.
Subtraia 10 do total.
```

---

### `Multiplique`

**Sintaxe:**

```pop
Multiplique <variável> por <valor>.
Multiplique <variável> pelo <valor>.
```

**Exemplos:**

```pop
Multiplique o número por 2.
Multiplique a largura pelo fator.
Multiplique o total por -1.
```

---

### `Divida`

**Sintaxe:**

```pop
Divida <variável> por <valor>.
Divida <variável> pelo <valor>.
```

**Exemplos:**

```pop
Divida o número por 2.
Divida a largura pela quantidade.
Divida o total pelo contador.
```

---

## 3. Concatenação e Adição

### `Acrescente`

**Função:** Adiciona ao **final** de uma string ou lista

**Sintaxe:**

```pop
Acrescente <valor> para <string>.
Acrescente <elemento> para <lista>.
```

**Exemplos:**

```pop
\\ Strings
Acrescente "!" para a mensagem.
Acrescente o nome para o resultado.
Acrescente o caractere de espaço para a linha.

\\ Listas
Acrescente o item para a lista.
Acrescente o vértice para os vértices deste polígono.
```

---

## 4. Remoção

### `Remova`

**Sintaxe:**

```pop
Remova <elemento> desde a <lista>.
Remova <elemento> da <lista>.
Remova os caracteres finais desde a <string> usando <quantidade>.
```

**Exemplos:**

```pop
\\ Listas
Remova o item desde a lista.
Remova a lista desde as listas.

\\ Strings
Remova os caracteres finais desde o resultado usando 1.
Remova o último caractere desde a string.
```

---

## 5. Conversão de Tipos (`Converta`)

### Sintaxe Básica

```pop
Converta <origem> para <destino>.
```

### Conversões Comuns

```pop
\\ Para String
Converta o número para uma string.
Converta a fração para uma string denominada texto.
Converta o sinalizador para uma segunda string.
Converta o ponteiro para uma string.

\\ Para Número
Converta a string para um número.
Converta a string para o número.

\\ Para Fração
Converta a fração para um numeral misto.
Converta o número para uma fração.

\\ Conversões Especiais
Converta o byte para uma cifra hexadecimal.
Converta a cor para um código da cor.
Converta a URL para uma URL simplificada.
```

---

## 6. Conversão Forçada (`tal como` / `tal qual`)

### Função

Força o compilador a **tratar** um tipo como outro tipo (cast)

### Sintaxe

```pop
<operação> <valor> tal como <tipo>
<operação> <valor> tal qual <tipo>
```

### Exemplos

```pop
\\ Cast em atribuição
Atribua o byte à cifra binária tal como um byte.

\\ Cast em conversão
Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
Converta o ponteiro para uma string tal qual uma cifra hexadecimal.

\\ Cast em operações
Disjuncione logicamente o ponteiro tal como um número com o número.

\\ Cast em chamadas
Destrinche a variável global tal como uma variável.
Redimensione a caixa arredondada tal como uma caixa usando a fração.
```

**Nota:** `tal como` e `tal qual` são sinônimos

---

## 7. Entrada/Saída

### `Escreva`

**Sintaxe:**

```pop
Escreva <valor> para <destino>.
Escreva <valor> no <destino>.
Escreva <valor> junto com <outro valor> para <destino>.
```

**Destinos Comuns:**

- `StdOut` / `console` - Saída padrão
- `StdErr` - Saída de erro
- `arquivo` - Arquivo aberto

**Exemplos:**

```pop
\\ Console
Escreva "Olá, Mundo!" no console.
Escreva o contador para StdOut.
Escreva "Total: " junto com o total no console.
Escreva "Erro!" junto com o texto CRLF para StdOut.

\\ Arquivo
Escreva a linha para o arquivo.
```

---

### `Leia`

**Sintaxe:**

```pop
Leia <variável> desde <origem>.
Leia uma linha desde <origem>.
```

**Origens Comuns:**

- `console` / `StdIn` - Entrada padrão
- `arquivo` - Arquivo aberto

**Exemplos:**

```pop
\\ Console
Leia uma linha desde o console.
Leia um número desde StdIn.
Leia uma senha desde o console.

\\ Arquivo
Leia uma linha desde o arquivo.
```

---

## 8. Gerenciamento de Memória

### `Aloque`

**Sintaxe:**

```pop
Aloque memória para <ponteiro>.
Aloque memória para <estrutura>.
```

**Exemplos:**

```pop
Aloque memória para um item.
Aloque memória para uma alternativa.
Aloque memória para o buffer.
```

---

### `Desaloque`

**Sintaxe:**

```pop
Desaloque memória para <ponteiro>.
```

**Exemplos:**

```pop
Desaloque memória para o item.
Desaloque memória para o buffer.
```

---

### `Reaponte`

**Função:** Realoca memória (equivalente a `realloc`)

**Sintaxe:**

```pop
Reaponte <ponteiro> usando <tamanho>.
```

**Exemplos:**

```pop
Reaponte o caractere inicial desta string usando a quantidade de caracteres desta string mais 1.
Reaponte o buffer usando o novo tamanho.
```

---

### `Preserve`

**Função:** Cria uma **cópia** do parâmetro

**Sintaxe:**

```pop
Preserve <variável>.
```

**Exemplos:**

```pop
Preserve a string.
Preserve a contagem.
Preserve a fração.
```

**Acesso ao Original:**

```pop
Preserve a string.
Limpe a string original. \\ Acessa a variável original
```

---

## 9. Chamadas Externas (`Processe`)

### Sintaxe

```pop
Processe "<dll>" "<função>" com
  <parâmetro1> e
  <parâmetro2> e
  <parâmetro3>
Retornando <variável>.
```

### Exemplos

```pop
\\ Chamada simples
Processe "kernel32.dll" "GetLastError" retornando o status de erro.

\\ Chamada com parâmetros
Processe "kernel32.dll" "HeapAlloc" com
  O endereço heap e
  8 e \\ HEAP_ZERO_MEMORY
  A quantidade de bytes
Retornando o ponteiro.

\\ Chamada complexa
Processe "gdi32.dll" "SetTextCharacterExtra" com
  A área de impressão [hDC]
  e 0 [extra]
  Retornando um número denominado status de erro.
```

---

## 10. Instruções de Máquina (`Decodifique`)

### Sintaxe

```pop
Decodifique $<hexadecimal>.
```

### Exemplos

```pop
\\ Assembly inline
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \\ mov eax,[ebp+8]
  Decodifique $C70000000000. \\ mov [eax],0
```

---

## 11. Outras Instruções Comuns

### `Limpe`

**Função:** Esvazia uma string ou estrutura

**Sintaxe:**

```pop
Limpe <variável>.
```

**Exemplos:**

```pop
Limpe a string.
Limpe o buffer.
```

---

### `Lance`

**Função:** Cria um **subtexto** (substring) sobre uma string

**Sintaxe:**

```pop
Lance um subtexto sobre <string>.
```

**Exemplos:**

```pop
Lance um subtexto sobre a string.
Lance um percorredor sobre a string.
```

---

### `Obtenha`

**Função:** Obtém um valor ou executa uma operação

**Sintaxe:**

```pop
Obtenha <resultado> usando <parâmetros>.
Obtenha <resultado> desde <origem>.
```

**Exemplos:**

```pop
Obtenha um máximo divisor comum usando o numerador e o denominador.
Obtenha uma largura usando a string e o contexto de dispositivo.
Obtenha o item (novamente).
```

---

### `Crie`

**Função:** Cria uma estrutura ou objeto

**Sintaxe:**

```pop
Crie <objeto>.
Crie <objeto> usando <parâmetros>.
```

**Exemplos:**

```pop
Crie a figura geométrica.
Crie um vértice usando a localização.
Crie um conjunto de texto usando a string.
```

---

### `Destrua`

**Função:** Destrói uma estrutura e libera memória

**Sintaxe:**

```pop
Destrua <objeto>.
```

**Exemplos:**

```pop
Destrua a lista.
Destrua o item.
Destrua o quora descartável.
```

---

### `Esvazie`

**Função:** Zera um ponteiro ou variável

**Sintaxe:**

```pop
Esvazie <variável>.
```

**Exemplos:**

```pop
Esvazie o ponteiro.
Esvazie o buffer.
```

---

## Separadores de Instruções

### Ponto e Vírgula (`;`)

**Função:** Separa instruções **dentro do bloco condicional**

**Uso:**

```pop
Se condição,
  Instrução 1;
  Instrução 2;
  Instrução 3.
```

**Importante:** A **última instrução** termina com **ponto** (`.`)

---

### Ponto (`.`)

**Função:** Termina uma instrução ou bloco

**Uso:**

```pop
\\ Instrução simples
Atribua 10 para o contador.

\\ Última instrução do bloco
Se condição,
  Instrução 1;
  Instrução 2.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// INSTRUÇÕES
// ============================================================================

Instrucao:
    Atribuicao | OperacaoAritmetica | Conversao | EntradaSaida |
    Gerenciamento Memoria | ChamadaExterna | InstrucaoMaquina |
    Condicional | Laco | Retorne | Pare | Reitere | Preserve |
    OutrasInstrucoes;

// ============================================================================
// ATRIBUIÇÃO
// ============================================================================

Atribuicao:
    'Atribua' valor=Expressao preposicao=('para'|'ao'|'à') destino=Variavel '.';

// ============================================================================
// OPERAÇÕES ARITMÉTICAS
// ============================================================================

OperacaoAritmetica:
    Adicao | Subtracao | Multiplicacao | Divisao;

Adicao:
    'Adicione' valor=Expressao preposicao=('para'|'ao'|'à') destino=Variavel '.';

Subtracao:
    'Subtraia' valor=Expressao preposicao=('desde'|'de') origem=Variavel '.';

Multiplicacao:
    'Multiplique' variavel=Variavel 'por' | 'pelo' valor=Expressao '.';

Divisao:
    'Divida' variavel=Variavel 'por' | 'pelo' valor=Expressao '.';

// ============================================================================
// CONVERSÃO
// ============================================================================

Conversao:
    'Converta' origem=Expressao ('tal' ('como'|'qual') tipo=Tipo)? 'para' destino=Variavel '.';

// ============================================================================
// ENTRADA/SAÍDA
// ============================================================================

Escreva:
    'Escreva' valores+=Expressao ('junto' 'com' valores+=Expressao)* 
    preposicao=('para'|'no'|'em') destino=Destino '.';

Leia:
    'Leia' variavel=Variavel 'desde' origem=Origem '.';

// ============================================================================
// GERENCIAMENTO DE MEMÓRIA
// ============================================================================

Aloque:
    'Aloque' 'memória' 'para' variavel=Variavel '.';

Desaloque:
    'Desaloque' 'memória' 'para' variavel=Variavel '.';

Reaponte:
    'Reaponte' variavel=Variavel 'usando' tamanho=Expressao '.';

Preserve:
    'Preserve' variavel=Variavel '.';

// ============================================================================
// CHAMADA EXTERNA
// ============================================================================

ChamadaExterna:
    'Processe' dll=STRING funcao=STRING 
    ('com' parametros+=Expressao ('e' parametros+=Expressao)*)?
    ('Retornando' retorno=Variavel)? '.';

// ============================================================================
// INSTRUÇÃO DE MÁQUINA
// ============================================================================

InstrucaoMaquina:
    'Decodifique' codigo=HEXADECIMAL '.';
```

---

## Observações Importantes

1. **Separadores**: Use `;` entre instruções e `.` na última
2. **Preposições**: Várias preposições são sinônimas (`para`/`ao`/`à`)
3. **Contrações**: Suportadas (`à` = `para a`, `ao` = `para o`)
4. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
5. **Ordem Natural**: Instruções seguem ordem natural do português
6. **Declaração Inline**: Pode declarar variáveis em instruções
7. **Expressões**: Instruções podem conter expressões complexas
8. **Comentários**: Use `\\` para comentários de linha
9. **Indentação**: Recomendada para legibilidade (não obrigatória)
10. **Verbos Sinônimos**: Muitas instruções têm verbos alternativos

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes claros para variáveis
2. **Uma Instrução por Linha**: Facilita leitura
3. **Indentação Consistente**: Use 2 espaços
4. **Comentários**: Documente lógica complexa
5. **Validação**: Verifique valores antes de usar
6. **Gerenciamento de Memória**: Sempre desaloque o que alocou
7. **Conversões Explícitas**: Prefira `Converta` a `tal como`
8. **Separadores Corretos**: Use `;` e `.` adequadamente
9. **Preserve Quando Necessário**: Proteja parâmetros
10. **Teste Chamadas Externas**: Verifique retornos de APIs

---

## Exemplos Completos

### Manipulação de Strings

```pop
Rotina para que se processe texto:
  Atribua "" para um resultado.
  Lance um subtexto sobre o texto.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com o resultado no console.
```

### Cálculos Matemáticos

```pop
Rotina para que se calcule área:
  Atribua a largura vezes a altura para uma área.
  Converta a área para uma string denominada texto.
  Escreva "Área: " junto com o texto no console.
```

### Gerenciamento de Memória

```pop
Rotina para que se crie buffer:
  Aloque memória para um buffer.
  Se o buffer for inexistente, retorne.
  \\ Usa o buffer...
  Desaloque memória para o buffer.
```

### Chamada Externa

```pop
Rotina para que se obtenha erro:
  Processe "kernel32.dll" "GetLastError" retornando o código de erro.
  Se o código de erro não for 0,
    Converta o código de erro para uma mensagem;
    Escreva "Erro: " junto com a mensagem para StdErr.
```

---

## Estatísticas

- **Categorias de instruções**: 6 principais
- **Instruções básicas**: ~15
- **Separadores**: 2 (`;` e `.`)
- **Preposições comuns**: ~10
- **Conversões suportadas**: Ilimitadas
- **Chamadas externas**: Suportadas (DLLs)
- **Assembly**: Suportado (`Decodifique`)
