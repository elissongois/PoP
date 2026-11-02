# Tipos de dados

Português Puro possui apenas 2 tipos de dados primitivos. São eles:&#x20;

* byte
* estrutura

Todos os demais tipos são tipos derivados, por exemplo:

```
Um ponteiro é uma estrutura com 4 bytes. 

Uma word é uma estrutura com
  Um byte denominado byte inicial [high byte] e
  Um byte denominado byte final [low byte].

Uma word de ordem inferior é uma word.
Uma word de ordem superior é uma word.

Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte. 
  
Um caractere é um byte.
Um caractere inicial é um ponteiro para um byte.
Um caractere final é um ponteiro para um byte.
Um endereço de byte é um ponteiro para um byte.

Uma string é uma estrutura com
  Um caractere inicial e
  Um caractere final.

Uma lista é um ponteiro para uma lista estruturada.

Uma lista estrutura é uma lista estruturada.

Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.

Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.

Uma fração é uma estrutura com
  Um número denominado numerador e
  Um número denominado denominador.
```