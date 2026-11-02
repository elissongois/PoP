# Acessando os valores dos campos de estruturas

Depois de definir um novo tipo de estrutura, você pode criar variáveis desse tipo e acessar seus campos. Para obter e modificar algum o valor de algum campo de uma estrutura, utiliza algumas das contrações abaixo:

* ***deste***
* ***destes***
* ***desta***
* ***destas***

Por exemplo, na estrutura a seguir:

<pre><code><strong>Uma pessoa é uma estrutura com
</strong>  Um nome,
  Um sobrenome e
  Uma idade.
</code></pre>

&#x20;Poderíamos alterar os valores dos membros individuais desta estrutura da seguinte forma:

```
Atribua "João" para o nome desta pessoa.
Atribua "da Silva" para o sobrenome desta pessoa.
Atribua 30 para a idade desta pessoa.
```

Após preencher os campos da estrutura, podemos utilizar da mesma sintaxe para acessá-los

```
Escreva o nome desta pessoa seguido de " " junto com o sobrenome desta pessoa.
```