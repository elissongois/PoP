# Tipos de Dados - Português Puro

## Visão Geral

Português Puro possui **apenas 2 tipos primitivos**, a partir dos quais todos os outros tipos são construídos.

---

## Tipos Primitivos

| Tipo | Tamanho | Descrição |
|------|---------|-----------|
| `byte` | 8 bits (1 byte) | Valor numérico 0 a 255 (unsigned) |
| `estrutura` | Variável | Agrupamento de campos de diferentes tipos |

> **Todos os demais tipos são derivados** de `byte` ou `estrutura`.

---

## Tipos Derivados Comuns (Biblioteca Padrão)

### 1. `caractere` (Byte)
```pop
Um caractere é um byte.  \ 1 byte = 8 bits
```
- Representa um único caractere da codepage Windows 1252
- Permite operações aritméticas (soma, subtração, etc.)

### 2. `ponteiro` (Estrutura - 4 bytes)
```pop
Um ponteiro é uma estrutura com 4 bytes.
```
- Armazena endereço de memória (32 bits)
- Formato big-endian (devido à arquitetura x86)
- Permite operações aritméticas comuns
- **Endereço 0 = `nulo` ou `inexistente` (inválido)**

### 3. `string` (Estrutura - 2 ponteiros)
```pop
Uma string é uma estrutura com
  Um caractere inicial e
  Um caractere final.

\ Sendo que:
Um caractere inicial é um ponteiro para um byte.
Um caractere final é um ponteiro para um byte.
```
- Par de ponteiros (início e fim da string)
- Alocação dinâmica gerenciada automaticamente pelo compilador
- String vazia: caractere inicial inexistente OU final < inicial

### 4. `lista` (Ponteiro para Lista Estruturada)
```pop
Uma lista é um ponteiro para uma lista estruturada.

Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.

Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.
```
- Lista duplamente encadeada
- `Umas listas` = cabeçalho (âncora) com primeiro e último
- **Requer gerenciamento manual de memória** (`Aloque`/`Desaloque`/`Destrua`)

### 5. `número` (Estrutura - 4 bytes = 32 bits)
```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte,
  Um quarto byte,  \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte.
```
- **Intervalo**: -2.147.483.648 a +2.147.483.647 (int32 signed)
- Armazenado big-endian (x86)
- União (`sob`) permite acesso como words

### 6. `word` (Estrutura - 2 bytes = 16 bits)
```pop
Uma word é uma estrutura com
  Um byte inicial e   \ high byte
  Um byte final.      \ low byte
```
- **Intervalo**: -32.768 a +32.767
- Little-endian nos bits, big-endian nos bytes (x86)

### 7. `fração` (Estrutura - 2 números)
```pop
Uma fração é uma estrutura com
  Um número denominado numerador e
  Um número denominado denominador.
```
- Representa números racionais exatos
- Usada para precisão (evita ponto flutuante)

### 8. `numeral misto` (Estrutura - número + fração)
```pop
Um numeral misto é uma estrutura com
  Um número inteiro e
  Uma proporção e
  Uma fração sob a proporção.
```
- Combina parte inteira + fracionária
- Exemplo: `1+1/2`, `-2+2/3`

### 9. `sinalizador` (Estrutura - 4 bytes)
```pop
Um sinalizador é uma estrutura com 4 bytes.
```
- **Valores**: `sim` (1) ou `não` (0)
- Ocupa 32 bits (usa apenas 1 bit efetivamente)
- Comandos: `Ative um sinalizador`, `Desative um sinalizador`

### 10. `hexadecimal` / `cifra hexadecimal` / `texto hexadecimal`
```pop
\ Prefixados com $
$DEADBEEF
$B0DEFE10
```
- Usados para baixo nível: bits, opcodes, dados binários
- Catálogo de variáveis hexadecimais no compilador

---

## Tipos Escalares (Unidades de Medida)

Permitem associar unidades a valores numéricos:

### Sintaxe
```
<Artigo indefinido> <tipo escalar> <é|são> <escala numérica> <tipo base>.
```

### Exemplos

```pop
\ Escala simples
Um pixel são 15 twips.  \ twip = tipo base, 15 = escala

\ Tipos derivados em cadeia
Um milissegundo é um número.
Um segundo são 1000 milissegundos.  \ Tipo escalar
Um minuto são 60 segundos.
Uma hora são 60 minutos.
Um dia são 24 horas.
```

### Uso em Rotinas
```pop
Rotina para que se faça uma caixa uns twips por uns outros twips:
  \ Como pixel é proporcional a twip, o compilador converte automaticamente
```

> **Regra**: Proporções e escalas só devem ser usadas em tipos numéricos.

---

## Declaração de Novos Tipos (Estruturas)

### Sintaxe Básica
```
<Artigo> <nome do tipo> é uma estrutura com <lista de campos>.
```

### Exemplos

```pop
\ Estrutura simples
Uma string é uma estrutura com
  Um caractere inicial e
  Um caractere final.

\ Estrutura com campos denominados
Uma string é uma estrutura com
  Um ponteiro denominado caractere inicial e
  Um ponteiro denominado caractere final.

\ Estrutura complexa (DEVMODE)
Um DEVMODE é uma estrutura com
  32 bytes denominados dmDeviceName,
  Uma word denominada dmSpecVersion,
  Uma word denominada dmDriverVersion,
  Uma word denominada dmSize,
  Um número denominado dmFields,
  Uma word denominada dmOrientation,
  \ ... mais campos ...
```

### Delimitadores de Campos
- Entre campos: `e`, `ou`, `,` (qualquer um)
- Último campo: termina com ponto `.`

---

## Uniões de Dados (`sob`)

Permitem múltiplas representações no mesmo espaço de memória:

```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte,
  Um quarto byte,
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte.
```

### Word
```pop
Uma word é uma estrutura com
  Um byte inicial e
  Um byte final.
```

**Resultado**: `word de ordem inferior` compartilha bytes com `primeiro byte` + `segundo byte`, `word de ordem superior` compartilha com `terceiro byte` + `quarto byte`.

---

## Acessando Campos de Estruturas

Use **possessivos adjacentes** (`deste`, `desta`, `destes`, `destas`):

```pop
Uma pessoa é uma estrutura com
  Um nome,
  Um sobrenome e
  Uma idade.

Atribua "João" para o nome desta pessoa.
Atribua "da Silva" para o sobrenome desta pessoa.
Atribua 30 para a idade desta pessoa.

Escreva o nome desta pessoa seguido de " " junto com o sobrenome desta pessoa.
```

---

## Campos Calculados

Mecanismo para "campos virtuais" calculados por rotina:

### Declaração da Rotina de Campo
```pop
\ A estrutura 'linha' só tem 'inicial' e 'final'
Uma linha é uma estrutura com uma localização inicial e uma localização final.

\ Rotina define campo calculado 'centro' para 'linha'
Rotina para que se atribua o centro duma linha para uma localização:
  Atribua a localização inicial desta linha mais a localização final desta linha à localização.
  Divida a localização por 2.
```

### Uso (como se fosse campo real)
```pop
Rotina para que se rotacione uma linha:
  Atribua o centro desta linha para um centro localização.  \ Chama rotina do campo calculado
  Rotacione a localização inicial desta linha em direção ao centro.
```

> **Regra**: A rotina deve usar o verbo `atribua` na assinatura. Ao ser empregada no corpo de qualquer rotina, o campo calculado passa a ser tratado como campo real naquele escopo.

---

## Tabela Resumo de Tipos

| Tipo | Base | Tamanho | Intervalo / Notas |
|------|------|---------|-------------------|
| `byte` | Primitivo | 8 bits | 0 a 255 |
| `caractere` | `byte` | 8 bits | Windows-1252 |
| `ponteiro` | `estrutura` | 32 bits | Endereço memória, 0 = nulo |
| `string` | `estrutura` | 2 ponteiros | Início + fim, alocação auto |
| `lista` | `ponteiro` | 32 bits | Ponteiro para nó |
| `lista estruturada` | `estrutura` | 3 ponteiros | posterior, anterior, dados |
| `umas listas` | `estrutura` | 2 ponteiros | inicial, final (âncora) |
| `número` | `estrutura` | 32 bits | -2.147.483.648 a +2.147.483.647 |
| `word` | `estrutura` | 16 bits | -32.768 a +32.767 |
| `fração` | `estrutura` | 2 números | Racional exato |
| `numeral misto` | `estrutura` | número + fração | Inteiro + fração |
| `sinalizador` | `estrutura` | 32 bits | `sim`/`não` (1/0) |
| `hexadecimal` | - | Variável | Prefixo `$` |

---

## Mapeamento para Langium (Estruturas)

```langium
Estrutura:
    artigo=Artigo nome=IDVariavel 'é' 'uma' 'estrutura' 'com' 
    campos+=CampoEstrutura (('e'|'ou'|',') campos+=CampoEstrutura)* '.';

CampoEstrutura:
    artigo=ArtigoIndefinido tipo=Tipo 
    ('denominado'|'denominada'|'denominados'|'denominadas')? nome=IDVariavel? 
    ('sob' base=IDVariavel)?;

UniãoDeDados:
    'sob' campoBase=IDVariavel;
```

---

> **Próximo**: [Valores Literais](05-Valores-Literais.md)