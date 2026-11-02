# 04: Rotinas, Funções e Funções Deliberativas

Em `Português Puro`, funções e procedimentos são chamados de **Rotinas**. Em vez de exigir parênteses rígidos e listas de parâmetros (ex: `fazerAlgo(a, b)`), assinaturas de rotinas são escritas como frases completas.

---

## 1. Definindo Rotinas (Procedimentos)

Uma rotina executa ações e efeitos colaterais. Sua definição começa com `Rotina para que se`:

```pop
Rotina para que se cumprimente uma pessoa:
  Escreva "Olá, " então o nome desta pessoa então "!" no console.
```

### Slots de Parâmetros
Parâmetros são definidos no cabeçalho usando **artigos indefinidos** (`um`, `uma`, `outro`, `outra`, `alguns`, `algumas`):
```pop
Rotina para que se desenhe uma caixa dada uma cor e uma largura:
  Atribua a cor para a cor deste contexto.
  Trace a caixa dada a largura.
```

Ao chamar esta rotina, instruções do chamador podem usar qualquer sinônimo de preposição reconhecido pela linguagem:
```pop
Desenhe a caixa da tela com a cor azul e 5.
Desenhe a caixa da tela dada a cor azul e 5.
```
Ambas instruções correspondem à mesma rotina exata.

---

## 2. Funções Deliberativas (Predicados)

Uma **Função Deliberativa** é uma rotina que responde uma pergunta sim/não. Cabeçalhos de funções deliberativas começam com `Função para que se determine se`:

```pop
Função para que se determine se um número é ímpar:
  Preserve o número.
  E bitwise o número com 1.
  Se o número for 0, diga não.
  Diga sim.

Função para que se determine se um número é par:
  Se o número for ímpar, diga não.
  Diga sim.

Função para que se determine se uma string está em branco:
  \ assuma verdadeiro
  Decodifique $B801000000. \ mov eax,1
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] \ a string
  \ se primeiro é 0, saia
  Decodifique $833B00. \ cmp [ebx],0
  Decodifique $0F8410000000. \ je fim
  \ se último é menor que primeiro, saia
  Decodifique $8B5304. \ mov edx,[ebx+4] \ ponteiro último
  Decodifique $3B13. \ cmp edx,[ebx]
  Decodifique $0F8C05000000. \ jl fim
  \ DIGA NÃO:
  Decodifique $B800000000. \ mov eax,0
  \ FIM:
```

### Chamando Funções Deliberativas em Condicionais
Funções deliberativas integram diretamente em instruções `Se` naturais:
```pop
Se a pontuação for par,
  Escreva "Pontuação par!" no console.

Se a string de entrada estiver em branco,
  Escreva "Por favor, insira seu nome." no console;
  Retorne.
```

No nível de máquina, funções deliberativas retornam resultados de verdade diretamente através de flags de condição da CPU (`ZF` ou `CF`), permitindo instruções `JZ`/`JNZ` para ramificar sem alocar variáveis booleanas intermediárias na pilha.

---

## 3. Funções (Retornando Valores)

Funções retornam um valor computado. Em `Português Puro`, funções tipicamente usam o padrão `Rotina para que se atribua [tipo] para [variável]:` ou `Rotina para que se obtenha [tipo] desde [fonte]:`:

```pop
Rotina para que se atribua o dobro de um número para um outro número:
  Atribua o número vezes 2 para o outro número.
```

Uso:
```pop
Atribua 21 para um número original.
Dobre o número original.
\ Ou usando retorno funcional:
Atribua o dobro de 21 para um número resultado.
```

---

## 4. Nomes Alternativos & Sinônimos

O `Português Puro` permite que um desenvolvedor forneça múltiplos cabeçalhos para uma única rotina usando pontos e vírgula (`;`):

```pop
Rotina para que se adicione um número para um outro número;
Rotina para que se some um número com um outro número;
Rotina para que se incremente um número por um outro número:
  Adicione o outro número para o número.
```

Chamadores agora podem usar qualquer frase que leia melhor no contexto:
- `Adicione 5 para o total.`
- `Incremente o total por 5.`
- `Some 5 com o total.`

---

## 5. Instruções `Empregue`

Se você quer que uma rotina sirva como alias ou delegue inteiramente a outra rotina, use a palavra-chave `empregue`:

```pop
Rotina para que se imprima uma string:
  Empregue escreva a string no console.
```

---

## 6. Rotinas de Callback (Integração com API Windows)

Quando o Windows requer uma função de callback (como um Procedimento de Janela `WndProc` ou gancho de timer), use a palavra-chave `compativelmente`:

```pop
Rotina para que se compativelmente manipule uma mensagem de janela dada uma janela e um número de mensagem e um w-param e um l-param:
  ...
```
Rotinas declaradas com `compativelmente` seguem convenções de chamada padrão Win32 `stdcall` de limpeza pelo chamado e passam argumentos por valor.

---

## Próximo Guia
Continue para [05: Controle de Fluxo e Laços](./05_CONTROLE_DE_FLUXO.md).