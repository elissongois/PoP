# Qualificadores - Português Puro

## Visão Geral

Qualificadores em Português Puro são **descrições adicionais** colocadas entre **parênteses** que servem para diferenciar rotinas com mesmo nome e parâmetros:


## Características Principais

### Vantagens

Liberdade textual:

O conteúdo dentro do qualificador não será lido como se tivesse significado semântico. Isso permite que `Artigos Indefinidos` sejam usados dentro do qualificador sem que o texto seguinte seja tratado como `parâmetro` da `rotina`/`função`.


Caracteres permitidos:

Há palavras e caracteres que normalmente não podem estar presentes no cabeçalho da declaração de uma Rotina ou Função
Exemplo:

`,`, `não`, `Se`,  etc. 

Dentro dos qualificadores, qualquer caractere (exceto `RETORNO DE CARRO`) é permitido.


## Exemplos

No Código-Fonte do Compilador, há 9 rotinas para mover um percorredor.

```pop
Rotina para que se Mova um percorredor (englobando tudo):
Rotina para que se Mova um percorredor (ignorando os caracteres irrelevantes):
Rotina para que se Mova um percorredor (ignorando os comentários):
Rotina para que se Mova um percorredor (ignorando as observações):
Rotina para que se Mova um percorredor (strings literais):
Rotina para que se Mova um percorredor (qualificadores):
Rotina para que se Mova um percorredor (sinais de pontuação):
Rotina para que se Mova um percorredor (possessivo inglês):
Rotina para que se Mova um percorredor (símbolos conectivos):
```

Essa é uma situação que mostra como os qualificadores são ótimos para manter a legibilidade e compreensão do algoritmo. Observe como mesmo com nome similar, a implementação de uma rotina difere das outras com mesmo nome:

```pop
Rotina para que se mova um percorredor (englobando tudo):
  Posicione o segmento inicial deste percorredor sobre o segmento final deste percorredor.
  Se o segmento final deste percorredor estiver em branco, retorne.
  \Se o conteúdo deste caractere inicial deste segmento final deste percorredor for "a",
  \ Avance o percorredor.
  \ Se o conteúdo deste caractere inicial deste segmento final deste percorredor for algum artigo indefinido,
  \ Recue o percorredor; atribua "para" para o percorredor.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for irrelevante,
    Mova o percorredor (ignorando os caracteres irrelevantes);
    Retorne.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for a barra invertida,
    Mova o percorredor (ignorando os comentários);
    Retorne.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o colchete esquerdo,
    Mova o percorredor (ignorando as observações);
    Retorne.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for as aspas duplas,
    Mova o percorredor (strings literais);
    Retorne.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o parênteses esquerdo,
    Mova o percorredor (qualificadores);
    Retorne.
  Se o conteúdo deste caractere inicial deste segmento final deste percorredor for algum sinal de pontuação,
    Mova o percorredor (sinais de pontuação);
    Retorne.
  Se o percorredor estiver sobre algum possessivo inglês,
    Mova o percorredor (possessivo inglês);
    Retorne.
  Mova o percorredor (símbolos conectivos).

Rotina para que se mova um percorredor (ignorando os caracteres irrelevantes):
  \Itere.
    Avance o percorredor.
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for irrelevante, reitere.

Rotina para que se mova um percorredor (ignorando os comentários):
  [Itere.]
    Avance o percorredor.
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor não for o retorno de carro, reitere.
```
