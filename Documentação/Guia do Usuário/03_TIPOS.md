# 03: Sistema de Tipos & Estruturas de Dados

O `Português Puro` possui um sistema de tipos nominal rico com suporte para estruturas personalizadas, unidades de medida escaladas, listas duplamente encadeadas automáticas (`listas`), e referências de ponteiros.

---

## 1. Definindo Tipos

Tipos são definidos usando sentenças declarativas em português:

### 1.1 Apelido de Tipo & Subtipagem
Você pode derivar novos tipos específicos de domínio a partir de tipos existentes:
```pop
Um caminho é uma string.
Um identificador é um número.
Um endereço é um número.
Um caractere é um byte.
```
Isto melhora a clareza do código enquanto permite que rotinas escritas para o tipo base (ex: rotinas que operam em `string`) aceitem o tipo derivado (`caminho`) automaticamente via redução de utilidade em tempo de compilação.

### 1.2 Unidades de Medida Escaladas
Você pode declarar unidades físicas ou matemáticas personalizadas com fatores de escala explícitos:
```pop
Uma polegada são 12 polegadas.
Um segundo são 1000 milissegundos.
Um grão são 10 milissegundos.
Um twip é 1/20 de um ponto.
Uma centena são 100 unidades.
```
Operações aritméticas respeitam automaticamente as definições de unidade.

---

## 2. Estruturas (Registros)

Uma estrutura é uma estrutura de dados composta contendo campos nomeados:

```pop
Um ponto é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade, e
  Um endereço.
```

### 2.1 Redefinição de Campos (Uniões / Apelidos)
Campos podem redefinir campos existentes, compartilhando o mesmo deslocamento de memória:
```pop
Um local é um par com
  Um número denominado número X,
  Um número denominado número Y,
  Um número denominado esquerda sob o número X, e
  Um número denominado topo sob o número Y.
```
Neste exemplo, acessar `local's left` acessa o mesmo slot de 32 bits que `local's x coord`.

---

## 3. Listas Duplamente Encadeadas ("Listas")

Na maioria das linguagens, quando você quer uma coleção de itens, instancia um contêiner externo de lista ou array (`List<Item>`). Em `Português Puro`, você declara o item como uma **`lista`**:

```pop
Um monstro é uma lista com
  Uma string denominada nome,
  Um número denominado vida, e
  Um número denominado nível.
```

Quando você escreve `Um [tipo] é uma lista com...`, o compilador gera automaticamente três elementos distintos para você:
1. **O Registro do Nó (`registro do monstro`)**: Contém os campos declarados mais ponteiros intrínsecos `monstro posterior` e `monstro anterior`.
2. **O Tipo Ponteiro (`monstro`)**: Uma referência de 4 bytes apontando para um `registro do monstro`.
3. **A Cadeia de Cabeçalho da Lista (`monstros`)**: Um registro de cabeçalho contendo ponteiros para `monstro inicial` e `monstro final`.

### Trabalhando com Listas
Agora você pode criar e manipular suas listas naturalmente:
```pop
Os monstros são uns monstros.

Rotina para que se crie o goblin:
  Aloque memória para um monstro.
  Atribua "Goblin" para o nome deste monstro.
  Atribua 50 para a vida deste monstro.
  Anexe o monstro para os monstros.
```

Iterando através de uma lista:
```pop
Itere.
  Obtenha um monstro dos monstros.
  Se o monstro for inexistente, pare.
  Escreva o nome deste monstro no console.
Reitere.
```

---

## 4. Ponteiros & Referências

Ponteiros são endereços de memória de 32 bits que referenciam outro bloco de memória tipado:
```pop
Um ponteiro para monstro é um ponteiro para um monstro.
Um ponteiro para byte é um ponteiro para um byte.
```

Literais especiais e desreferenciamento:
- `inexistente`: Representa um ponteiro nulo (`0x00000000`).
- Verificar se válido: `Se o ponteiro for inexistente, retorne.`
- Acesso ao alvo: `Atribua o alvo deste ponteiro para um byte.`

---

## 5. Tipos Base Embutidos

O ambiente de execução do `Português Puro` predefine tipos essenciais do sistema:
- `byte`: Unidade de armazenamento de 8 bits sem sinal (`0` a `255`).
- `número`: Inteiro com sinal de 32 bits (`complemento de dois`).
- `sinalizador`: Valor de verdade booleano (`sim` ou `não`).
- `string`: Composta por um `ponteiro para caractere inicial` e `ponteiro para caractere final`.
- `subtexto`: Fatia não proprietária apontando para um buffer de string.
- `caixa`: Estrutura de geometria representando região retangular (`esquerda`, `topo`, `direita`, `baixo`).
- `cor`: Representação de cor de alto nível com `matiz`, `saturação` e `luminosidade`.

---

## Próximo Guia
Continue para [04: Rotinas, Funções e Funções Deliberativas](./04_ROTINAS_E_FUNÇÕES.md).