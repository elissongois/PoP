# 06: Gerenciamento de Memória, Strings & Buffers

O `Português Puro` entrega a velocidade e eficiência de memória de linguagens de sistemas de baixo nível sem o ônus de desalocação manual ou pausas de coleta de lixo.

---

## 1. O Modelo de Memória

### 1.1 Síntese Automática de Rotinas de Ciclo de Vida
Sempre que você declara uma estrutura personalizada, ponteiro ou `lista`, o compilador gera automaticamente quatro rotinas de memória para aquele tipo:
- `Aloque memória para um [tipo]`
- `Desaloque um [tipo]`
- `~Finalize um [tipo]`
- `Destrua [tipo]`

Quando uma estrutura contendo strings ou sub-objetos dinâmicos é desalocada, sua rotina `~Finalize` automaticamente percorre todos os campos e libera buffers dinâmicos aninhados.

### 1.2 A Palavra-chave `Preserve`
Quando uma rotina recebe um ponteiro ou string e precisa modificá-lo localmente sem alterar a cópia do chamador, use `Preserve`:
```pop
Rotina para que se inverta uma string:
  Preserve a string.
  ...
```
`Preserve` aloca uma cópia local dos dados na pilha atual ou frame de heap local, garantindo isolamento de parâmetros.

---

## 2. Strings & Substrings

Em `Português Puro`, strings não são simples arrays de caracteres terminados em nulo (como C `char*`). Uma string é representada por dois ponteiros:

```pop
Uma string é uma estrutura com
  Um ponteiro para caractere inicial e
  Um ponteiro para caractere final.
```

### 2.1 Benefícios de Strings de Dois Ponteiros
1. **Cálculo de Tamanho O(1)**: Tamanho é calculado instantaneamente como:
   $$\text{Tamanho} = \text{ponteiro para caractere final} - \text{ponteiro para caractere inicial} + 1$$
2. **Substrings de Cópia Zero (`subtexto`)**: Fatiar ou obter uma substring não aloca memória nem copia caracteres. Simplesmente cria um novo par de ponteiros `inicial`/`final` referenciando um segmento do buffer original.
3. **Binariamente Seguro**: Strings podem conter bytes nulos embutidos (`0x00`) sem truncamento.

### 2.2 Operações Comuns de Strings

#### Criando e Acrescentando
```pop
Atribua "Português" para uma string.
Acrescente " Puro" para a string.
\ Resultado: "`Português Puro`"
```

#### Concatenação com `então`
```pop
Escreva "Pontuação: " então a pontuação deste jogador então " pontos." no console.
```

#### Removendo Espaços em Branco
```pop
Apare a string de entrada.
Remova ruído inicial desde a string de entrada.
```

#### Dividindo Palavras
```pop
Lance um subtexto sobre a sentença.
Itere.
  Se o subtexto estiver em branco, retorne.
  Obtenha uma palavra desde o subtexto.
  Escreva a palavra no console.
Reitere.
```

---

## 3. Buffers e Dados Binários

Um `buffer` em `Português Puro` representa memória contígua bruta:
- **Carregando Arquivos**: `Carregue o caminho para o buffer.`
- **Gravando Arquivos**: `Grave o buffer para o caminho.`
- **Conversões Hexadecimais**:
  ```pop
  Converta o número para uma string hexadecimal.
  Converta a string hexadecimal para um buffer binário.
  ```

---

## 4. A Abstração Percorredor

Ao analisar texto, escanear tokens, ou ler buffers estruturados, `Português Puro` usa um **Percorredor**:

```pop
Um percorredor é uma estrutura com
  Um subtexto de origem e
  Um subtexto de token.
```

Um percorredor permite caminhar através de texto mantendo visões de cópia zero do token atual e da origem restante.

Exemplo:
```pop
Lance um percorredor sobre o buffer do documento.
Mova o percorredor.
Itere.
  Se o subtexto de token deste percorredor estiver em branco, pare.
  Escreva "Token: " então o subtexto de token deste percorredor no console.
  Mova o percorredor.
Reitere.
```

---

## Próximo Guia
Continue para [07: Biblioteca Padrão, Gráficos e API do Windows](./07_BIBLIOTECA_PADRÃO_E_INTEROPERABILIDADE.md).