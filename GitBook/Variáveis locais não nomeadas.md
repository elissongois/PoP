# Variáveis locais não nomeadas

É possível criar uma variável local sem definir um nome para a mesma.&#x20;

Exemplo:

```
Atribua "João" para uma string.
```

Ao se deparar com a linha acima, o compilador executa as seguintes ações:

1. O compilador busca o tipo no catálogo de tipos (neste caso o tipo é denominado "string").
2. Ao encotrar o tipo, atribui o nome do tipo (string, neste caso) para o nome da variável.
3. Inicializa  a variável com o valor informado.

{% hint style="info" %}
Este recurso funciona mesmo quando o nome do tipo é derivado a partir de um tipo pré-existente. Veja os exemplos abaixo:
{% endhint %}

```
Atribua "José" para uma segunda string.
Atribua "Maria" para uma nova string.
Atribua "Paulo" para uma outra string.
Atribua "Marcos" para uma quinta string.
```

O processo funciona de forma similar:

1. O compilador busca o tipo  (neste caso o tipo procurado foi "segunda string").
2. Ao não encontrar o tipo "segunda string" no catálogo de tipos, o compilador tenta efetuar a "redução" do nome, (neste caso, o nome é reduzido para "string".
3. O compilador busca novamente o tipo no catálogo de tipos.
4. Ao encotrar o tipo, atribui o nome do tipo (string, neste caso) para o nome da variável.
5. Inicializa  a variável com o valor informado.
