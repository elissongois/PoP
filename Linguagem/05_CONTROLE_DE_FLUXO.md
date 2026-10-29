# 05: Controle de Fluxo, Condicionais & Laços

O `Português Puro` fornece construtos de controle de fluxo estruturados e intuitivos sem exigir parênteses, chaves ou instruções `goto`.

---

## 1. Condicionais (`Se`)

### 1.1 Condicionais de Linha Única
Uma instrução condicional verifica uma expressão ou chama uma função deliberativa:
```pop
Se o número for maior do que 10, adicione 1 para a contagem.
Se o sinalizador estiver ativo, retorne.
```

### 1.2 Condicionais de Múltiplas Linhas
Quando múltiplas ações dependem de uma condição, separe as ações com ponto e vírgula ou as indente:
```pop
Se a vida deste jogador for menor do que ou igual a 0,
  Toque o som de fim de jogo;
  Mostre a tela de fim de jogo;
  Retorne.
```

### 1.3 Condições Negativas
Você pode inverter condições usando palavras negativas naturais do português:
```pop
Se a string não estiver em branco,
  Escreva a string no console.

Se o arquivo não existir,
  Crie o arquivo.
```

---

## 2. Laços (`Itere` / `Reitere`)

Em `Português Puro`, laços começam com `Itere.` e concluem com `Reitere.`. Dentro do laço, você usa `pare`, `reitere` (como continue), ou `retorne` para controlar a execução.

### 2.1 Laço Básico com Contador
```pop
Atribua 1 para um número contador.
Itere.
  Se o contador for maior do que 5, pare.
  Escreva a string deste contador então "... " no console.
  Adicione 1 para o contador.
Reitere.
```

### 2.2 Iterando através de Listas Encadeadas ("Listas")
Iterar sobre uma coleção de `listas` é limpo e idiomaticamente em português:
```pop
Itere.
  Obtenha um monstro dos monstros.
  Se o monstro for inexistente, pare.
  Se a vida deste monstro for 0, reitere. \ Pula monstros mortos (como 'continue' em C)
  Desenhe o monstro.
Reitere.
```

### 2.3 Iterando através de Strings Caractere por Caractere
```pop
Lance um subtexto sobre o texto.
Itere.
  Se o subtexto estiver em branco, retorne.
  Obtenha um byte desde o subtexto.
  Escreva o byte no console.
Reitere.
```

---

## 3. Controlando a Execução

- **`pare`**: Sai imediatamente do bloco `Itere ... Reitere` mais interno.
- **`reitere`**: Pula o restante da iteração atual do laço e inicia o próximo ciclo (idêntico a `continue` em C/Java/Python).
- **`retorne`**: Retorna imediatamente da rotina atual.

Exemplo:
```pop
Rotina para que se encontre um aluno dado um nome retornando um aluno:
  Atribua inexistente para o aluno.
  Itere.
    Obtenha um aluno atual dos alunos.
    Se o aluno atual for inexistente, retorne.
    Se o nome deste aluno atual for o nome,
      Atribua o aluno atual para o aluno;
      Retorne.
  Reitere.
```

---

## 4. Cláusulas de Guarda & Retornos Antecipados

Escrever `Português Puro` limpo favorece cláusulas de guarda no início das rotinas:
```pop
Rotina para que se processe um pedido:
  Se o pedido for inexistente, retorne.
  Se os itens deste pedido estiverem vazios, retorne.
  Se o cliente não pagou,
    Alerte "Pedido não pode ser processado até pagamento ser recebido.";
    Retorne.
   
  \ Prossiga com cumprimento do pedido...
  Envie o pedido.
```

---

## Próximo Guia
Continue para [06: Gerenciamento de Memória e Strings](./06_MEMÓRIA_E_STRINGS.md).