# Campos Calculados - Português Puro

## Definição

**Campos calculados** são "campos virtuais" que não existem fisicamente na estrutura, mas cujo valor é calculado dinamicamente por uma rotina. Eles permitem acessar valores derivados como se fossem campos reais da estrutura.

## Conceito

Imagine uma estrutura `linha` que possui apenas dois campos:
- `localização inicial`
- `localização final`

Mas você quer acessar o **centro** da linha sem armazená-lo explicitamente. Um **campo calculado** permite fazer isso:

```pop
\\ Acessa como se 'centro' fosse um campo real
Atribua o centro desta linha para uma localização.
```

## Como Funciona

### 1. Definir a Rotina do Campo Calculado

A rotina que define um campo calculado usa o verbo **`atribua`** em sua assinatura:

```pop
Rotina para que se atribua <nome_do_campo> <possessivo> <tipo> para <tipo_retorno>:
```

**Estrutura**:
- `atribua` = verbo que indica campo calculado
- `<nome_do_campo>` = nome do campo virtual
\\ A estrutura 'linha' só tem 'inicial' e 'final'
Uma linha é uma estrutura com
  Uma localização denominada inicial e
  Uma localização denominada final.
```

### Definição do Campo Calculado

```pop
\\ Rotina que define o campo calculado 'centro' para a estrutura 'linha'
Rotina para que se atribua o centro duma linha para uma localização:
  \\ Calcula o ponto central
  Atribua a localização inicial desta linha mais a localização final desta linha à localização.
  Divida a localização por 2.
```

**Análise**:
- `atribua` = indica campo calculado
- `o centro` = nome do campo virtual
- `duma linha` = tipo que terá o campo (`linha`)
- `para uma localização` = tipo de retorno

### Uso do Campo Calculado

```pop
Rotina para que se rotacione uma linha:
  \\ O valor de 'centro desta linha' é obtido pela rotina do campo calculado
  Atribua o centro desta linha para um centro localização.
  Rotacione a localização inicial desta linha em direção ao centro.
```

**Nota**: `o centro desta linha` é acessado como se fosse um campo real, mas o valor é calculado pela rotina.

## Pronomes Demonstrativos em Campos Calculados

### Possessivos Adjacentes (`desta`, `deste`)

Usados quando o campo calculado é acessado de uma **variável local**:

```pop
Rotina para que se processe uma linha:
  \\ 'linha' é uma variável local (parâmetro)
  Atribua o centro desta linha para uma localização.
```

### Possessivos Abrangentes (`duma`, `dum`, `dessa`, `desse`)

Usados na **definição** do campo calculado, pois se refere ao **tipo**, não a uma variável específica:

```pop
\\ Definição: usa 'duma' (abrangente) pois se refere ao tipo 'linha'
Rotina para que se atribua o centro duma linha para uma localização:
  \\ Implementação usa 'desta' (adjacente) pois se refere à instância
  Atribua a localização inicial desta linha para uma localização.
```

**Regra**:
- **Definição do campo calculado**: `duma`, `dum` (tipo genérico)
- **Implementação/Uso**: `desta`, `deste` (instância específica)

## Diferença: Campo Real vs Campo Calculado

| Aspecto       | Campo Real                 | Campo Calculado       |
|---------------|----------------------------|-----------------------|
| Armazenamento | Ocupa memória na estrutura | Não ocupa memória     |
| Acesso        | Leitura e escrita          | Somente leitura       |
| Definição     | Na declaração da estrutura | Em rotina separada    |
| Valor         | Armazenado                 | Calculado sob demanda |

### Exemplo Comparativo

```pop
\\ Campo REAL
Uma pessoa é uma estrutura com
  Uma string denominada nome e  \\ Campo real: armazenado
  Um número denominado idade.    \\ Campo real: armazenado

\\ Campo CALCULADO
Rotina para que se atribua a idade em meses duma pessoa para um número:
  Atribua a idade desta pessoa vezes 12 para o número.

\\ Uso
Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.        \\ Campo real
  Escreva a idade desta pessoa para StdOut.       \\ Campo real
  Escreva a idade em meses desta pessoa para StdOut.  \\ Campo calculado!
```

## Vantagens dos Campos Calculados

1. **Economia de Memória**: Valores derivados não precisam ser armazenados
2. **Consistência**: O valor é sempre recalculado, garantindo atualização
3. **Encapsulamento**: Lógica de cálculo fica separada da estrutura
4. **Naturalidade**: Acesso transparente como se fosse campo real

## Escopo e Emprego

### Emprego Explícito

A rotina do campo calculado pode ser empregada explicitamente:

```pop
Rotina para que se processe uma linha:
  \\ Emprega a rotina do campo calculado
  Empregue a rotina para que se atribua o centro duma linha para uma localização.
  
  \\ Agora 'centro' está disponível neste escopo
  Atribua o centro desta linha para uma localização.
```

### Emprego Implícito

Se a rotina do campo calculado estiver definida no mesmo módulo, ela pode ser empregada automaticamente:

```pop
Rotina para que se processe uma linha:
  \\ A rotina do campo calculado é encontrada automaticamente
  Atribua o centro desta linha para uma localização.
```

## Exemplos Adicionais

### Exemplo 1: Área de Retângulo

```pop
\\ Estrutura
Um retângulo é uma estrutura com
  Um número denominado largura e
  Um número denominado altura.

\\ Campo calculado
Rotina para que se atribua a área dum retângulo para um número:
  Atribua a largura deste retângulo vezes a altura deste retângulo para o número.

\\ Uso
Rotina para que se calcule área:
  Aloque memória para um retângulo.
  Atribua 10 para a largura deste retângulo.
  Atribua 5 para a altura deste retângulo.
  
  \\ Acessa o campo calculado
  Escreva "Área: " junto com a área deste retângulo para StdOut.  \\ Imprime: Área: 50
```

### Exemplo 2: Nome Completo de Pessoa

```pop
\\ Estrutura
Uma pessoa é uma estrutura com
  Uma string denominada primeiro nome e
  Uma string denominada sobrenome.

\\ Campo calculado
Rotina para que se atribua o nome completo duma pessoa para uma string:
  Atribua o primeiro nome desta pessoa junto com " " junto com o sobrenome desta pessoa para a string.

\\ Uso
Rotina para que se exiba pessoa:
  Aloque memória para uma pessoa.
  Atribua "João" para o primeiro nome desta pessoa.
  Atribua "Silva" para o sobrenome desta pessoa.
  
  \\ Acessa o campo calculado
  Escreva o nome completo desta pessoa para StdOut.  \\ Imprime: João Silva
```

### Exemplo 3: Distância entre Pontos

```pop
\\ Estrutura
Um ponto é uma estrutura com
  Um número denominado x e
  Um número denominado y.

Uma linha é uma estrutura com
  Um ponto denominado início e
  Um ponto denominado fim.

\\ Campo calculado
Rotina para que se atribua o comprimento duma linha para um número:
  \\ Calcula distância euclidiana
  Atribua o x do fim desta linha menos o x do início desta linha para um delta x.
  Atribua o y do fim desta linha menos o y do início desta linha para um delta y.
  Atribua o delta x vezes o delta x mais o delta y vezes o delta y para um quadrado.
  Extraia a raiz quadrada do quadrado para o número.

\\ Uso
Rotina para que se meça linha:
  Escreva "Comprimento: " junto com o comprimento desta linha para StdOut.
```

## Limitações

1. **Somente Leitura**: Campos calculados não podem ser modificados diretamente
2. **Custo Computacional**: O valor é recalculado a cada acesso
3. **Escopo**: Requer que a rotina do campo calculado esteja disponível no escopo

## Mapeamento para Langium

```langium
// Definição de campo calculado
CampoCalculado:
    'Rotina' 'para' 'que' 'se' 'atribua' 
    campo=Identificador 
    possessivo=PossessivoAbrangente 
    tipo=TipoReferencia 
    'para' tipoRetorno=TipoReferencia ':' 
    corpo=CorpoRotina;

// Possessivos abrangentes para definição
PossessivoAbrangente:
    'duma' | 'dum' | 'dumas' | 'duns' |
    'dessa' | 'desse' | 'dessas' | 'desses' |
    'daquela' | 'daquele' | 'daquelas' | 'daqueles';

// Acesso a campo calculado (igual a campo normal)
AcessoCampo:
    campo=Identificador possessivo=Possessivo estrutura=Expressao;
```

## Observações Importantes

1. **Assinatura Especial**: A rotina usa `atribua` em vez de verbos comuns
2. **Possessivos Abrangentes**: Definição usa `duma`, `dum` (tipo genérico)
3. **Possessivos Adjacentes**: Uso usa `desta`, `deste` (instância)
4. **Transparência**: Acesso idêntico a campos reais
5. **Emprego**: Pode ser explícito (`Empregue`) ou implícito

## Comparação com Outras Linguagens

| Linguagem      | Recurso Equivalente | Sintaxe                                                          |
|----------------|---------------------|------------------------------------------------------------------|
| C#             | Property (get)      | `public int Area { get { return width * height; } }`             |
| Python         | Property            | `@property def area(self): return self.width * self.height`      |
| JavaScript     | Getter              | `get area() { return this.width * this.height; }`                |
| Kotlin         | Computed Property   | `val area: Int get() = width * height`                           |
| Português Puro | Campo Calculado     | `Rotina para que se atribua a área dum retângulo para um número` |

## Resumo

**Campos calculados** são uma feature poderosa que permite:
- Criar "campos virtuais" sem ocupar memória
- Manter lógica de cálculo separada da estrutura
- Acessar valores derivados de forma natural e transparente
- Usar possessivos abrangentes (`duma`, `dum`) na definição
- Usar possessivos adjacentes (`desta`, `deste`) no uso

São especialmente úteis para:
- Valores derivados (área, perímetro, comprimento)
- Formatação (nome completo, endereço formatado)
- Conversões (idade em meses, temperatura em Fahrenheit)
- Cálculos complexos (distância, média, total)
