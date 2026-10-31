# Animação de sprites

A Biblioteca padrão do Português Puro contém diversas rotinas para manipulação de imagens.

{% hint style="warning" %}
Aviso: para que este código seja executado corretamente, salve a imagem abaixo no mesmo diretório do projeto ou atualize o endereço contido na 5ª linha.
{% endhint %}

<figure><img src="https://803735286-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FW9DLU1YMdC8rZiJDCRdo%2Fuploads%2F8Yu2B3zJ5yJbpnXzxFGn%2Fsprite%20sheet.png?alt=media&token=2e199e3d-2183-494f-83ed-0be25e2b94a9" alt=""><figcaption></figcaption></figure>

{% code overflow="wrap" lineNumbers="true" %}

```
Um sprite é uma imagem.

Rotina para que se execute o programa:
  Carregue as bibliotecas padrão do sistema.
  Atribua "sprite sheet.png" para um nome do arquivo. \ ajuste conforme necessário
  Crie uma lista de sprites usando o nome do arquivo.
  Pinte a tela usando a cor branca.
  Itere.
    Se a Tecla Esc estiver sendo pressionada, 
      Pare.
    Pegue um sprite dessa lista de sprites.
    Se o sprite for inexistente,
      Atribua o primeiro sprite desta lista de sprites ao sprite.
    Pinte a caixa deste sprite usando a cor branca e a cor branca.
    Pinte o sprite.
    Aguarde 1/15 segundo.
    Atualize a tela.
  Reitere.
  Destrua a lista de sprites.
  Feche o programa.

Rotina para que se crie uma lista de sprites usando um nome do arquivo:
  Atribua o endereço da pasta deste módulo junto com o nome do arquivo para um endereço completo.
  Leia o endereço completo em um trecho.
  Crie uma imagem denominada folha de sprites usando o trecho.
  Pinte a folha de sprites.
  Faça uma caixa denominada caixa grande 720 pixels por 288 pixels.
  Faça uma caixa denominada quadro 144 pixels por 144 pixels.
  Itere.
    Extraia uma imagem denominada sprite usando o quadro.
    Centralize o sprite no meio da tela.
    Acrescente o sprite para a lista de sprites.
    Mova o quadro 144 pixels para a direita.
    Se o quadro estiver na caixa grande,
      Reitere.
    Mova o quadro para o lado esquerdo dessa caixa grande.
    Mova o quadro 144 pixels para baixo.
    Se o quadro estiver na caixa grande,
      Reitere.
  Destrua a folha de sprites.
```

{% endcode %}