# Qualificadores - Português Puro

## Visão Geral

Qualificadores em Português Puro são **informações adicionais** colocadas entre **parênteses** que servem para:

1. **Documentar** tipos e campos com informações extras
2. **Marcar** campos como referências (ponteiros)
3. **Adicionar** contexto sem afetar a compilação

---

## Função dos Qualificadores

### Características Principais

- **Delimitadores**: Parênteses `(` e `)`
- **Posição**: Após tipos, campos ou nomes
- **Efeito**: Maioria é **ignorada** pelo compilador (apenas documentação)
- **Exceção**: `(referência)` tem efeito semântico

---

## Tipos de Qualificadores

1. Qualificador de Referência

2. Qualificadores Documentais

---

## 1. Qualificador de Referência

Função

O qualificador `(referência)` marca um campo como **ponteiro** que **não deve ser desalocado** automaticamente quando a estrutura é destruída.

Sintaxe:

    ```pop
    <tipo> denominado <nome> (referência)
    ```

### Exemplos

    ```pop
    \\ Lista encadeada
    Um nó é uma estrutura com
      Um número denominado valor,
      Um nó denominado próximo (referência),
      Um nó denominado anterior (referência).

    \\ Árvore binária
    Uma árvore é uma estrutura com
      Um número denominado chave,
      Uma árvore denominada esquerda (referência),
      Uma árvore denominada direita (referência).

    \\ Grafo
    Um vértice é uma estrutura com
      Uma string denominada nome,
      Um vértice denominado adjacente (referência).
    ```

---

### Comportamento

**Com `(referência)`:**

- Campo é um **ponteiro**
- **Não** é desalocado automaticamente
- Programador é responsável pela memória

**Sem `(referência)`:**

- Campo é **incorporado** na estrutura
- É desalocado automaticamente
- Memória gerenciada pelo compilador

---

### Exemplo Comparativo

    ```pop
    \\ SEM referência - campo incorporado
    Uma pessoa é uma estrutura com
      Uma string denominada nome,
      Um endereço denominado residência.  \\ Incorporado

    \\ COM referência - campo é ponteiro
    Uma pessoa é uma estrutura com
      Uma string denominada nome,
      Um endereço denominado residência (referência).  \\ Ponteiro

    \\ Uso
    Rotina para que se crie pessoa:
      Aloque memória para uma pessoa denominada nova.
    
      \\ Caso 1: Incorporado - não precisa alocar
      Atribua "Rua A" ao logradouro desta residência desta nova pessoa.
    
      \\ Caso 2: Referência - precisa alocar primeiro
      Aloque memória para um endereço denominado local.
      Atribua "Rua A" ao logradouro deste local.
      Atribua o local à residência desta nova pessoa.
    ```

---

## 2. Qualificadores Documentais

Função

Qualificadores documentais servem apenas para **documentação** e são **ignorados** pelo compilador.

Sintaxe:

    ```pop
    <tipo> (qualificador documental)
    ```

Exemplos Comuns:

    ```pop
    \\ Indicar características do tipo
    Um número (unsigned) denominado contador.
    Um número (signed) denominado diferença.
    Um ponteiro (que aponta) denominado endereço.

    \\ Documentar propósito
    Uma string (nome do arquivo) denominada caminho.
    Um número (em pixels) denominado largura.
    Uma fração (percentual) denominada taxa.

    \\ Indicar unidade
    Um número (em metros) denominado distância.
    Um número (em segundos) denominado tempo.
    Uma fração (em radianos) denominado ângulo.
    ```

---

## Validação de Qualificadores

### Regras de Balanceamento

O compilador **valida** que qualificadores estejam corretamente balanceados:

1. Todo `(` deve ter um `)` correspondente
2. Qualificadores devem estar completos
3. Não podem estar aninhados (sem suporte a parênteses aninhados)

### Códigos de Erro

    ```pop
    \\ Erro #009: Falta parêntese de fechamento
    Um número (unsigned denominado contador.
    \\ Código de Erro #009. Qualificadores devem terminar com um parêntese direito ')'.

    \\ Erro #010: Falta parêntese de abertura
    Um número unsigned) denominado contador.
    \\ Código de Erro #010. Qualificadores precisam iniciar com um parêntese esquerdo '('.
    ```

---

## Detecção de Qualificadores

### Função Léxica

    ```pop
    Função para que se determine se uma string é algum qualificador:
      Se a string estiver em branco, diga não.
      Se o conteúdo deste caractere inicial desta string for o parênteses esquerdo, diga sim.
      Diga não.
    ```

### Uso em Parsing

Qualificadores são detectados como **indicadores de fim de variável**:

    ```pop
    \\ Qualificador termina uma variável
    o nome desta pessoa (referência)
               ↑              ↑
          variável      fim da variável
    ```

---

## Observações Importantes

1. **Único Qualificador Semântico**: Apenas `(referência)` afeta compilação
2. **Documentação**: Outros qualificadores são para legibilidade
3. **Balanceamento**: Parênteses devem estar balanceados
4. **Não Aninhados**: Não há suporte a parênteses aninhados
5. **Case-Insensitive**: `(Referência)` = `(referência)` = `(REFERÊNCIA)`
6. **Posição**: Após o nome do campo ou tipo
7. **Opcional**: Qualificadores documentais são sempre opcionais
8. **Ignorados**: Compilador descarta qualificadores documentais
9. **Memória**: `(referência)` afeta gerenciamento de memória
10. **Diferença de Comentários**: Qualificadores usam `()`, comentários inline usam `[]`

---

## Mapeamento para Langium

    ```langium
// ============================================================================
// QUALIFICADORES
// ============================================================================

Qualificador:
    QualificadorReferencia | QualificadorDocumental;

// Qualificador Semântico
QualificadorReferencia:
    '(' 'referência' ')';

// Qualificador Documental (ignorado)
QualificadorDocumental:
    '(' conteudo=QualificadorConteudo ')';

QualificadorConteudo:
    /[^)]+/;  // Qualquer texto até o parêntese de fechamento

// Uso em Campos
CampoEstrutura:
    tipo=Tipo 'denominado' nome=ID qualificador=Qualificador? ',';

// Validação
ValidacaoQualificador:
    inicio='(' conteudo=STRING fim=')';
    ```

---

## Boas Práticas

1. **Use `(referência)` Explicitamente**: Sempre marque ponteiros
2. **Documente Tipos**: Use qualificadores para clarificar propósito
3. **Seja Consistente**: Use mesmo estilo em todo projeto
4. **Evite Redundância**: Não repita informação óbvia
5. **Unidades**: Documente unidades de medida quando relevante
6. **Limites**: Indique limites ou restrições quando útil
7. **Propósito**: Explique uso não-óbvio de campos
8. **Balanceamento**: Sempre feche parênteses
9. **Clareza**: Prefira nomes descritivos a qualificadores longos
10. **Manutenção**: Atualize qualificadores quando código mudar

---

## Exemplos Práticos

### Estrutura de Lista Encadeada

    ```pop
    Uma lista é uma estrutura com
      Uma string denominada valor,
      Uma lista denominada próxima (referência),
      Uma lista denominada anterior (referência).

    Rotina para que se adicione item para uma lista:
      Aloque memória para uma lista denominada novo.
      Atribua o item ao valor deste novo.
      Atribua inexistente à próxima deste novo.
      Atribua inexistente à anterior deste novo.
    
      \\ Conectar na lista
      Se a lista for inexistente, retorne.
      Atribua o novo à próxima desta lista.
      Atribua a lista à anterior deste novo.
    ```

---

### Estrutura com Qualificadores Documentais

    ```pop
    Um retângulo é uma estrutura com
      Um número (em pixels) denominado largura,
      Um número (em pixels) denominado altura,
      Um número (coordenada X) denominado x,
      Um número (coordenada Y) denominado y,
      Uma cor (RGB) denominada cor de preenchimento,
      Uma cor (RGB) denominada cor de borda.

    Rotina para que se desenhe retângulo:
      \\ Os qualificadores ajudam a entender o propósito
      Se a largura for menor ou igual a 0, retorne.
      Se a altura for menor ou igual a 0, retorne.
    
      Desenhe o retângulo na tela.
    ```

---

### Árvore Binária de Busca

    ```pop
    Uma árvore é uma estrutura com
      Um número (chave de ordenação) denominado chave,
      Uma string (dados armazenados) denominada valor,
      Uma árvore (subárvore esquerda) denominada esquerda (referência),
      Uma árvore (subárvore direita) denominada direita (referência).
    
    Rotina para que se insira chave e valor em uma árvore:
      Se a árvore for inexistente,
        Aloque memória para uma árvore denominada nova;
        Atribua a chave à chave desta nova árvore;
        Atribua o valor ao valor desta nova árvore;
        Atribua inexistente à esquerda desta nova árvore;
        Atribua inexistente à direita desta nova árvore;
        Retorne.
    
      Se a chave for menor que a chave desta árvore,
        Insira a chave e o valor na esquerda desta árvore;
        Retorne.
    
      Insira a chave e o valor na direita desta árvore.
    ```

---

### Grafo com Vértices e Arestas

    ```pop
    Um vértice é uma estrutura com
      Uma string (identificador único) denominada nome,
      Um número (peso ou valor) denominado valor,
      Uma aresta (lista de conexões) denominada arestas (referência).

    Uma aresta é uma estrutura com
      Um vértice (destino) denominado destino (referência),
      Um número (custo da aresta) denominado peso,
      Uma aresta (próxima na lista) denominada próxima (referência).

    Rotina para que se conecte vértice origem para vértice destino com peso:
      Aloque memória para uma aresta denominada nova.
      Atribua o destino ao destino desta nova aresta.
      Atribua o peso ao peso desta nova aresta.
      Atribua as arestas deste origem à próxima desta nova aresta.
      Atribua a nova às arestas deste origem.
    ```

---

## Diferenças com Outras Linguagens

| Aspecto                | Português Puro                  | C/C++                    | Java                     |
|------------------------|---------------------------------|--------------------------|--------------------------|
| Ponteiros              | `(referência)`                  | `*`                      | Sempre referência        |
| Documentação inline    | `(qualificador)`                | `/* comentário */`       | `/* comentário */`       |
| Validação              | Balanceamento de parênteses     | Sintaxe de ponteiros     | Não aplicável            |
| Efeito semântico       | Apenas `(referência)`           | Todos os `*`             | Todos são referências    |
| Desalocação automática | Sim (exceto referências)        | Não                      | Sim (garbage collection) |
| Qualificadores de tipo | Ignorados (exceto `referência`) | `const`, `volatile`, etc | `final`, `volatile`, etc |

---

## Antipadrões (Evitar)

### ❌ Qualificadores Redundantes

    ```pop
    \\ RUIM: Redundante
    Uma string (que é uma string) denominada nome.

    \\ BOM: Direto
    Uma string denominada nome.
    ```

---

### ❌ Qualificadores Muito Longos

    ```pop
    \\ RUIM: Muito verboso
    Um número (este é o contador que rastreia quantos itens foram processados até agora)    denominado contador.

    \\ BOM: Conciso
    Um número (itens processados) denominado contador.
    \\ ou melhor ainda
    Um número denominado itens processados.
    ```

---

### ❌ Esquecer `(referência)` em Ponteiros

    ```pop
    \\ RUIM: Sem marcar referência
    Uma lista é uma estrutura com
      Uma string denominada valor,
      Uma lista denominada próxima.  \\ Será incorporada, não ponteiro!
    
    \\ BOM: Marcar explicitamente
    Uma lista é uma estrutura com
      Uma string denominada valor,
      Uma lista denominada próxima (referência).
    ```

---

### ❌ Parênteses Não Balanceados

    ```pop
    \\ RUIM: Falta fechar
    Um número (unsigned denominado contador.

    \\ BOM: Balanceado
    Um número (unsigned) denominado contador.
    ```

---

## Casos de Uso Comuns

### 1. Estruturas Recursivas

    ```pop
    \\ Sempre use (referência) em estruturas recursivas
    Um nó de árvore é uma estrutura com
      Um número denominado valor,
      Um nó de árvore denominado filho esquerdo (referência),
      Um nó de árvore denominado filho direito (referência).
    ```

---

### 2. Listas Ligadas

    ```pop
    \\ Ponteiros para próximo e anterior
    Uma célula é uma estrutura com
      Um número denominado dado,
      Uma célula denominada próxima (referência),
      Uma célula denominada anterior (referência).
    ```

---

### 3. Grafos e Redes

    ```pop
    \\ Múltiplas referências
    Um nó de grafo é uma estrutura com
      Uma string denominada identificador,
      Um nó de grafo denominado adjacente (referência),
      Um nó de grafo denominado pai (referência).
    ```

---

### 4. Documentação de Unidades

    ```pop
    \\ Clarificar unidades de medida
    Uma medida física é uma estrutura com
      Um número (em metros) denominado comprimento,
      Um número (em quilogramas) denominado massa,
      Um número (em segundos) denominado tempo,
      Uma fração (em metros por segundo) denominada velocidade.
    ```

---

### 5. Indicar Propósito

    ```pop
    \\ Documentar propósito de campos
    Uma configuração é uma estrutura com
      Uma string (caminho absoluto) denominada diretório,
      Um número (porta TCP) denominado porta,
      Um número (timeout em ms) denominado tempo limite,
      Um sinalizador (habilita debug) denominado modo depuração.
    ```

---

## Estatísticas

- **Tipos de qualificadores**: 2 (semântico e documental)
- **Qualificador semântico**: 1 (`(referência)`)
- **Delimitadores**: `(` e `)`
- **Efeito na compilação**: Apenas `(referência)` afeta
- **Validação**: Balanceamento de parênteses
- **Case-insensitive**: Sim
- **Aninhamento**: Não suportado
- **Uso mais comum**: `(referência)` em estruturas recursivas

---

## Resumo

### Qualificador Semântico: `(referência)`

- **Função**: Marca campo como ponteiro
- **Efeito**: Não desaloca automaticamente
- **Obrigatório**: Para estruturas recursivas
- **Uso**: Listas, árvores, grafos

### Qualificadores Documentais

- **Função**: Documentação inline
- **Efeito**: Nenhum (ignorados)
- **Obrigatório**: Nunca
- **Uso**: Clarificar propósito, unidades, limites

### Recomendação Geral

Use `(referência)` sempre que um campo for um ponteiro. Use qualificadores documentais com moderação, apenas quando agregarem valor significativo à compreensão do código.
