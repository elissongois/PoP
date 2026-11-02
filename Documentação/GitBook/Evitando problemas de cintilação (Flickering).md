# Evitando problemas de cintilação (Flickering)

Na maioria das vezes, uma exibição de tela completa consiste em vários objetos distintos e sobrepostos, desenhados de trás para frente.

Resolvemos esse problema da mesma forma que um artista faria. Trabalhamos em uma tela na memória (chamada de Contexto de Dispositivo - DC). Esta tela é como se fosse uma tela virtual. Funciona mais ou menos assim: Primeiramente devemos selecionar a área a ser pintada (neste caso queremos pintar em toda a tela, para isso usamos o comando "Exponha tudo". Depois você "pinta" ou "desenha" todas as coisas que deseja nesta tela virtual, e depois disso exibe-a de uma só vez (usando o comando "Atualize a tela").

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}

```
Rotina para que se execute o programa:
  Carregue as bibliotecas padrão.
  Limpe a tela usando a cor laranja claríssimo.
  Atribua "http://osmosian.com/page01.png" para uma URL denominada caminho.
  Crie uma imagem usando o caminho.
  Pinte a imagem.
  Atualize a tela.
  Itere.  
    Adicione 1 para um contador.
    Mova a imagem 10 pixels para a direita.
    Aguarde 3 milissegundos. 
    Exponha tudo. \ -> Seleciona a tela inteira para ser pintada
    Pinte a caixa desta tela com a cor laranja claríssimo e a cor laranja claríssimo.
    Pinte a imagem.
    Atualize a tela.
    Atribua a caixa desta tela à caixa deste contexto.
    Se o contador for 20, pare.
  Reitere.
  Aguarde pela tecla Esc.
  Desmanche todos os eventos.
  Destrua a imagem.
  Feche o programa.

```

{% endcode %}