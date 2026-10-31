# Bem-vindo

Este capítulo apresenta o Português Puro e discute alguns de seus conceitos fundamentais.

### O que você já deveria saber antes de seguir em frente? <a href="#o_que_voce_realmente_ja_deveria_saber" id="o_que_voce_realmente_ja_deveria_saber"></a>

Este guia recomenda que você possua alguma experiência prévia em linguagens como C ou Pascal. Você poderá utilizar a linguagem de forma mais plena se tiver algum grau de conhecimento dos seguintes tópicos:

1. **Estruturas de Dados:** Conhecimento de estruturas de dados comuns, como arrays, listas, pilhas, filas, árvores, grafos, etc.&#x20;
2. **Complexidade de Algoritmos:** Compreensão e análise de complexidade (tempo e espaço) dos algoritmos.
3. **Gerenciamento de Memória:** Existirão situações em que o programador será responsável pelo gerenciamento de memória. Compreender alocação e liberação de memória é crucial para evitar vazamentos de memória e problemas de corrupção.
4. **Depuração e Testes:** Habilidades para depurar código, identificar erros e realizar testes para garantir a funcionalidade e a robustez do programa.
5. **Bibliotecas e APIs:** Familiaridade com o conceito de bibliotecas e APIs para realizar tarefas comuns, como entrada/saída, manipulação de arquivos, redes, etc.
6. **Segurança:** Conhecimento sobre práticas de segurança, por exemplo, vulnerabilidades relacionadas à estouro de buffer.
7. **Controle de Versão:** Familiaridade com sistemas de controle de versão e de comparação de arquivos (*diff*), como Git, para rastrear e gerenciar alterações no código-fonte.
8. **Compreensão de Arquitetura de Computadores:** Ter um entendimento básico da arquitetura x86 irá ajudar na compreensão de certos aspectos de implementação da linguagem.

## O que é Português Puro?

Português Puro é uma linguagem de programação de alto nível, ou seja é uma linguagem que permite criar programas utilizando um alto nível de abstração.

Português Puro possui uma biblioteca padrão que contém diversos tipos de dados, tais como:&#x20;

* Números inteiros;
* Números fracionários;
* Caracteres;
* Strings;
* Listas duplamente encadeadas;
* Estruturas.

Além de possuir um conjunto de elementos essenciais que compõem o cerne da linguagem, incluindo operadores, estruturas de controle e declarações. O compilador e a Biblioteca padrão do Português Puro podem ser expandidos para uma variedade de finalidades, permitindo, assim, a extensão da linguagem.

## Começando a programar com Português Puro

Para iniciar a aprendizagem da linguagem Português Puro, você precisará de um ambiente de desenvolvimento adequado.&#x20;

Aqui está uma breve introdução sobre como dar seus primeiros passos com o Português Puro:

1. Escolha um ambiente de desenvolvimento integrado (IDE) que suporte o Português Puro, como o [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/downloads/) ou o [*PAL-1000*](https://github.com/elenderg/PAL-1000).
2. Abra o IDE e crie um novo arquivo de texto.
3. Escreva o seu código no editor de texto da IDE.
4. Compile e execute o programa para ver os resultados.

O ambiente de desenvolvimento integrado pode variar dependendo da escolha do IDE, mas todos eles oferecem recursos semelhantes para escrever, compilar e executar o código.

{% hint style="info" %}
Uma ferramenta útil para explorar as capacidades o Português Puro é o [Ambiente de desenvolvimento integrado](https://pt.wikipedia.org/wiki/Ambiente_de_desenvolvimento_integrado) (ADI), denominado [PAL-1000](https://github.com/elenderg/PAL-1000) que permite escrever, compilar e executar códigos em Português Puro. Seu código-fonte foi escrito 100% em Português Puro com o objetivo de demonstrar as capacidades da linguagem, servindo assim como uma [*Prova de Conceito*](https://pt.wikipedia.org/wiki/Prova_de_conceito).
{% endhint %}

Para compilar um programa, basta invocar o compilador através da linha de comando, informando o PATH do projeto a ser compilado.

\
Exemplo:

`C:\compilador.exe D:\nome do projeto\`

{% hint style="warning" %}
Observação: Todos os arquivos que irão compilados devem possuir a extensão .pop
{% endhint %}
