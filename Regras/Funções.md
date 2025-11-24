# Funções - Português Puro

## Visão Geral

Funções em Português Puro são rotinas especiais que **retornam valores booleanos** (`sim` ou `não`). Elas são chamadas de **funções deliberativas** e são usadas exclusivamente em **expressões condicionais**.

---

## Características das Funções

### Capacidades

✅ **Retornam booleano** (`sim` ou `não`)  
✅ **Podem chamar rotinas**  
✅ **Podem chamar outras funções** (através de condicionais `Se`)  
✅ **Podem conter laços** (`Itere`/`Reitere`)  
✅ **Podem receber parâmetros**  
✅ **Suportam sobrecarga de métodos** (nomes alternativos)  
✅ **Chamadas Externas**: Podem usar `Processe` para APIs
✅ **Podem conter instruções de máquina** (`Decodifique`)

### Restrições

❌ **Devem sempre terminar com** `Diga sim` **ou** `Diga não`  
❌ **Só podem ser chamadas em expressões condicionais** (`Se`)  
❌ **Não podem ser chamadas diretamente como rotinas**

---

## Sintaxe

### Declaração Básica

```pop
Função para que se determine se <expressão a ser avaliada>:
  <corpo da função>
  Diga sim|não.
```

### Estrutura

1. **Cabeçalho**: `Função para que se determine se` + expressão
2. **Corpo**: Instruções da função (indentadas)
3. **Retorno**: `Diga sim` ou `Diga não` (obrigatório)

---

## Parâmetros

Parâmetros são indicados por **artigos indefinidos**:

| Artigo | Gênero/Número      | Exemplo       |
|--------|--------------------|---------------|
| `um`   | Masculino singular | `um número`   |
| `uma`  | Feminino singular  | `uma string`  |
| `uns`  | Masculino plural   | `uns bytes`   |
| `umas` | Feminino plural    | `umas listas` |

### Exemplos de Parâmetros

```pop
\\ Sem parâmetros
Função para que se determine se estamos com sorte:

\\ Um parâmetro
Função para que se determine se um número é negativo:

\\ Dois parâmetros
Função para que se determine se um byte é maior do que um segundo byte:

\\ Três parâmetros
Função para que se determine se uma tecla com um lParam é alguma tecla de cancelamento:
```

---

## Sobrecarga de Métodos (Nomes Alternativos)

Funções podem ter **múltiplos nomes** separados por **ponto e vírgula** (`;`):

```pop
Função para que se determine se um byte é maior do que ou igual a um segundo byte;
Função para que se determine se um byte é maior que ou igual a um segundo byte;
Função para que se determine se um byte é maior ou igual a um segundo byte:
  \\ Implementação única para todos os nomes
  Diga sim.
```

**Benefícios:**
- Flexibilidade na chamada
- Linguagem mais natural
- Compatibilidade com diferentes estilos

---

## Retorno Booleano

### Comandos de Retorno

| Comando    | Significado        | Equivalente    |
|------------|--------------------|----------------|
| `Diga sim` | Retorna verdadeiro | `return true`  |
| `Diga não` | Retorna falso      | `return false` |

### Regras

1. **Toda função DEVE terminar** com `Diga sim` ou `Diga não`
2. **Múltiplos retornos** são permitidos (em diferentes caminhos)
3. **Retorno condicional** é comum

### Exemplos de Retorno

```pop
\\ Retorno simples
Função para que se determine se um ponteiro existe:
  Se o ponteiro for inexistente, diga não.
  Diga sim.

\\ Retorno condicional
Função para que se determine se um número é positivo:
  Se o número for maior do que 0, diga sim.
  Diga não.

\\ Múltiplos retornos
Função para que se determine se uma linha de texto está em branco:
  Se a linha de texto for inexistente, diga sim.
  Lance um subtexto sobre a string desta linha de texto.
  Itere.
    Se o subtexto estiver em branco, diga sim.
    Se o conteúdo deste caractere inicial deste subtexto não for irrelevante, diga não.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

---

## Chamando Funções

### Uso em Condicionais

Funções **só podem ser chamadas** dentro de expressões condicionais (`Se`):

```pop
\\ Declaração da função
Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Chamada da função (sem "Função para que se determine")
Rotina para que se processe um valor:
  Se o número for negativo, retorne.
  \\ Processa o número...
```

### Sintaxe de Chamada

**Declaração:**
```
Função para que se determine se <expressão>:
```

**Chamada:**
```
Se <expressão>, <ação>.
```

**Exemplo:**

```pop
\\ Declaração
Função para que se determine se uma tecla está para baixo:
  Processe "user32.dll" "GetKeyState" com a tecla retornando um word.
  Atribua a word para um número.
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Chamada
Se a tecla está para baixo, processe o evento.
```

---

## Exemplos Completos

### 1. Função Simples (Sem Parâmetros)

```pop
Função para que se determine se estamos com sorte:
  Escolha aleatoriamente um número entre 1 e 100.
  Se o número for menor do que 51, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se estivermos com sorte, exiba a mensagem de vitória.
```

---

### 2. Função com Comparação

```pop
Função para que se determine se um byte é menor que um segundo byte;
Função para que se determine se um byte é menor do que um segundo byte:
  Decodifique $C7C001000000. \\ mov eax,1 - assume true
  Decodifique $8B9D08000000. \\ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B. \\ mov bl,[ebx]
  Decodifique $8B8D0C000000. \\ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19. \\ cmp bl,[ecx]
  Decodifique $0F8206000000. \\ jb sobre o próximo 1 statement
  Decodifique $C7C000000000. \\ mov eax,0 - now it is false
```

**Chamada:**
```pop
Se o byte for menor que o segundo byte, continue.
```

---

### 3. Função com Proteção de Parâmetros

```pop
Função para que se determine se uma fração é uma segunda fração:
  Preserve a fração. \\ Comando de Proteção
  Preserve a segunda fração. \\ Comando de Proteção
  Normalize a fração e a segunda fração. \\ chamada de rotina
  Se o numerador desta fração é o numerador desta segunda fração, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se a fração for a segunda fração, retorne.
```

---

### 4. Função com Chamada Externa (API)

```pop
Função para que se determine se um endereço completo está no sistema de arquivos:
  Preserve o endereço completo.
  Anexe o caractere NULL após o endereço completo.
  Processe "kernel32.dll" "GetFileAttributesA" com
    O caractere inicial deste endereço completo [lpFileName]
  Retornando um número.
  Se o número for menor do que 0, diga não.
  Diga sim.
```

**Chamada:**
```pop
Se o endereço completo está no sistema de arquivos, leia o arquivo.
```

---

### 5. Função com Sobrecarga

```pop
Função para que se determine se uma tecla está ligada;
Função para que se determine se uma tecla está alternada;
Função para que se determine se uma tecla está ativada:
  Processe "user32.dll" "GetKeyState" com a tecla retornando um word.
  Atribua a word para um número.
  Conjuncione logicamente o número com 1.
  Se o número for 1, diga sim.
  Diga não.
```

**Chamadas (todas equivalentes):**
```pop
Se a tecla está ligada, processe.
Se a tecla está alternada, processe.
Se a tecla está ativada, processe.
```

---

### 6. Função com Laço

```pop
Função para que se determine se uma linha de texto está em branco:
  Se a linha de texto for inexistente, diga sim.
  Lance um subtexto sobre a string desta linha de texto.
  Itere.
    Se o subtexto estiver em branco, diga sim.
    Se o conteúdo deste caractere inicial deste subtexto não for irrelevante, diga não.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

**Chamada:**
```pop
Se a linha de texto está em branco, pule para a próxima.
```

---

### 7. Função com Múltiplos Parâmetros

```pop
Função para que se determine se uma tecla com um lParam é alguma tecla de cancelamento ou tecla modificadora:
  Atribua o lParam para um número.
  Conjuncione logicamente o número com 1073741824 [0x40000000].
  Se o número for 0, diga não.
  Se a tecla for a tecla Esc, diga sim.
  Se a tecla for algum tecla modificadora, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se a tecla com o lParam é alguma tecla de cancelamento ou tecla modificadora, ignore.
```

---

### 8. Função Complexa com Cálculos

```pop
Função para que se determine se uma localização está sobre uma linha reta:
  Preserve a linha reta.
  Atribua 3 vezes a quantidade de twips/pixel para um número.
  Itere.
    Obtenha uma distância entre a localização e o centro desta linha reta (trigonometria racional).
    Se a distância for menor do que ou igual ao número, diga sim.
    Obtenha a distância entre a localização inicial desta linha reta e a localização final desta linha reta (trigonometria racional).
    Se a distância for menor do que ou igual à quantidade de twips/pixel, diga não.
    Subdivida a linha reta em a linha reta e uma segunda linha reta.
    Obtenha a distância entre a localização e o centro desta linha reta (trigonometria racional).
    Obtenha uma segunda distância entre a localização e o centro desta segunda linha reta (trigonometria racional).
    Se a distância for maior do que a segunda distância,
      Atribua a segunda linha reta ao linha reta.
  Reitere.
```

**Chamada:**
```pop
Se a localização está sobre a linha reta, selecione a linha.
```

---

## Funções Chamando Rotinas

Funções podem chamar rotinas normalmente:

```pop
Função para que se determine se uma fração é válida:
  Normalize a fração. \\ Chamada de rotina
  Se o denominador desta fração for 0, diga não.
  Diga sim.
```

---

## Funções Chamando Funções

Funções podem chamar outras funções através de condicionais:

```pop
Função para que se determine se um número é válido:
  Se o número for negativo, diga não. \\ Chama outra função
  Se o número for zero, diga não.
  Diga sim.

Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.
```

---

## Comando `Preserve` em Funções

O comando `Preserve` cria uma **cópia** do parâmetro para evitar modificações indesejadas:

```pop
Função para que se determine se uma string possui alguma vogal acentuada:
  Preserve a string. \\ Cria cópia
  Itere.
    Se a string estiver em branco, diga não.
    Se o conteúdo deste caractere final desta string for alguma vogal acentuada, diga sim.
    Subtraia 1 desde o caractere final desta string. \\ Modifica a cópia
  Reitere.
```

**Sem `Preserve`:** A string original seria modificada  
**Com `Preserve`:** Apenas a cópia é modificada

---

## Instruções de Máquina em Funções

Funções podem conter código assembly através do comando `Decodifique`:

```pop
Função para que se determine se um byte é maior ou igual a um segundo byte:
  Decodifique $C7C001000000. \\ mov eax,1 - assume true
  Decodifique $8B9D08000000. \\ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B. \\ mov bl,[ebx]
  Decodifique $8B8D0C000000. \\ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19. \\ cmp bl,[ecx]
  Decodifique $0F8306000000. \\ ja sobre o próximo 1 statement
  Decodifique $C7C000000000. \\ mov eax,0 - now it is false
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// FUNÇÕES DELIBERATIVAS (Retorno Booleano)
// ============================================================================

FuncaoDeliberativa:
    cabecalhos+=CabecalhoFuncao+ ':'
    corpo=CorpoFuncao;

CabecalhoFuncao:
    'Função' 'para' 'que' 'se' 'determine' 'se' expressao=ExpressaoFuncao ';'?;

ExpressaoFuncao:
    // Nome da função + parâmetros
    elementos+=(PalavraChave | ArtigoIndefinido | Tipo | Preposicao)+;

CorpoFuncao:
    instrucoes+=Instrucao+
    retorno=RetornoBooleano;

RetornoBooleano:
    'Diga' valor=('sim' | 'não') '.';

// ============================================================================
// CHAMADA DE FUNÇÃO (em expressões condicionais)
// ============================================================================

ExpressaoCondicional:
    'Se' condicao=CondicaoFuncao ',' acoes=BlocoAcoes '.';

CondicaoFuncao:
    // Usa a expressão da função sem "Função para que se determine"
    elementos+=(PalavraChave | Artigo | Variavel | Preposicao)+;
```

---

## Observações Importantes

1. **Nomenclatura**: O nome da função começa após `Função para que se determine se`
2. **Retorno Obrigatório**: Toda função DEVE terminar com `Diga sim` ou `Diga não`
3. **Uso Exclusivo em Condicionais**: Funções só podem ser chamadas em expressões `Se`
4. **Passagem por Referência**: Parâmetros são passados por referência (use `Preserve` para cópias)
5. **Sobrecarga**: Múltiplos nomes separados por `;` permitem flexibilidade
6. **Verbos Sinônimos**: `é`, `está`, `for`, `estiver` são tratados como equivalentes
7. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
8. **Laços**: Podem conter `Itere`/`Reitere` normalmente
9. **Chamadas Externas**: Podem usar `Processe` para APIs
10. **Assembly**: Podem incluir instruções de máquina com `Decodifique`

---

## Comparação: Função vs Rotina

| Característica | Função                            | Rotina                |
|----------------|-----------------------------------|-----------------------|
| **Retorno**    | Booleano (`sim`/`não`)            | Sem retorno           |
| **Declaração** | `Função para que se determine se` | `Rotina para que se`  |
| **Chamada**    | Apenas em `Se`                    | Diretamente           |
| **Término**    | `Diga sim`/`Diga não`             | Fim do corpo          |
| **Uso**        | Condições lógicas                 | Ações e procedimentos |

---

## Exemplos de Uso Prático

### Validação de Entrada

```pop
Função para que se determine se uma idade é válida:
  Se a idade for menor do que 0, diga não.
  Se a idade for maior do que 150, diga não.
  Diga sim.

Rotina para que se processe uma pessoa:
  Se a idade não for válida, retorne.
  \\ Processa a pessoa...
```

### Verificação de Estado

```pop
Função para que se determine se o arquivo pode ser salvo:
  Se o endereço completo estiver em branco, diga não.
  Se o endereço completo está protegido contra gravação, diga não.
  Diga sim.

Rotina para que se salve o documento:
  Se o arquivo não pode ser salvo, exiba um erro; retorne.
  \\ Salva o arquivo...
```

### Controle de Fluxo

```pop
Função para que se determine se devemos continuar:
  Se a tecla Esc está para baixo, diga não.
  Se o tempo excedeu o limite, diga não.
  Diga sim.

Rotina para que se processe eventos:
  Itere.
    Se não devemos continuar, pare.
    Processe o próximo evento.
  Reitere.
```

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes que descrevam claramente a condição
2. **Retorno Explícito**: Sempre termine com `Diga sim` ou `Diga não`
3. **Use `Preserve`**: Quando não quiser modificar parâmetros
4. **Sobrecarga Útil**: Forneça variações naturais do nome
5. **Validação Cedo**: Retorne `não` cedo para casos inválidos
6. **Comentários**: Documente lógica complexa
7. **Funções Simples**: Mantenha funções focadas em uma única verificação
8. **Reutilização**: Chame outras funções quando apropriado

---

## Estatísticas

- **Palavra-chave de declaração**: `Função para que se determine se`
- **Comandos de retorno**: 2 (`Diga sim`, `Diga não`)
- **Uso**: Exclusivo em expressões condicionais
- **Sobrecarga**: Suportada (múltiplos nomes)
- **Parâmetros**: Ilimitados
- **Laços**: Suportados
- **Chamadas externas**: Suportadas
- **Assembly**: Suportado
