Português Puro é uma *linguagem de programação de alto nível*, projetada para permitir a criação de programas com um alto nível de abstração . Seu compilador e biblioteca padrão são expansíveis .

Aqui estão as principais características da linguagem:

*   *Paradigma de Programação: É uma linguagem de **programação estruturada* .
*   *Sistema de Tipos*:
    *   *Tipagem: É **estática* e *forte* .
    *   *Inferência de Tipos: Baseada no **nome da variável* .
    *   *Conversão de Tipos: É **explícita* .
    *   *Tipos Primitivos*: Os tipos definidos pelo compilador são BYTE e RECORD . Estes são estendidos para suportar BYTE, WYRD, POINTER, FLAG e RECORD .
    *   *Outros Tipos Comuns*: Incluem caractere, string, lista (listas duplamente encadeadas), ponteiro, número (inteiros, fracionários, mistos, hexadecimais), e sinalizador (valores booleanos) .
*   *Estratégia de Avaliação (Passagem de Argumentos): A passagem de argumentos para rotinas é feita **por referência*. No entanto, ao passar parâmetros para DLLs, usa-se a convenção C, onde a ordem é invertida e tipos "simples" são passados por valor .
*   *Sensibilidade a Maiúsculas e Minúsculas: A linguagem **não é sensível a maiúsculas e minúsculas* .
*   *Tipo de Compilação: É uma **linguagem compilada*. O "Código-fonte do compilador" detalha diversas etapas de compilação que resultam na geração de um arquivo executável (.exe) .
*   *Sistema Operacional Compatível: A linguagem é projetada para o ambiente **Windows*, fazendo uso extensivo da API Win32. Há referências a kernel32.dll, user32.dll, gdi32.dll, WinHTTP, winsock, e a arquitetura x86 .
*   *Recursos e Elementos Essenciais*:
    *   *Biblioteca Padrão*: Contém definições de tipos, variáveis globais e rotinas para API Win32, cores, console, gerenciamento de arquivos, criptografia, fontes, interfaces gráficas, interação do usuário, manipulação de imagens, protocolos de rede, terminal, gráficos de tartaruga, arquivos PDF e e-mail .
    *   *Gerenciamento de Memória*: Em certas situações, o programador é responsável pela alocação e liberação de memória .
    *   *Comentários: Suporta **comentários de linha única* (iniciados por \) e *comentários de bloco* (entre colchetes ) .
    *   *Escopo de Variáveis: Define escopo **global* (visível em todo o programa) e *local* (visível apenas dentro da rotina/função) .
    *   *Estruturas*: Permitem definir novos tipos de dados personalizados com campos de diferentes tipos, sendo fundamentais para organizar informações complexas .
    *   *Controle de Fluxo*: Inclui declarações condicionais com a palavra-chave Se e laços de repetição com Itere, Reitere e Pare .
    *   *Strings e Caracteres*: Trabalha com caracteres da code page Windows 1252 (ISO-8859-1) e utiliza aspas duplas (") como caractere de escape . Strings são representadas por um par de ponteiros de bytes (caractere inicial e caractere final) .
    *   *Operadores de Concatenação de Strings*: junto com, seguido de, acompanhado de .
    *   *Rotinas e Funções*: A sintaxe básica para declaração de rotinas começa com Rotina para que se, e parâmetros são indicados por artigos indefinidos (um, uns, uma, umas) . Preposições e artigos definidos podem ser usados nos nomes das rotinas para maior clareza .
    *   *Verbos "ser/estar"*: São tratados como sinônimos pelo compilador .
    *   *Preposição "de"*: Pode ser utilizada livremente em nomes de tipos e variáveis. Contratações como "dessa" são decompostas e a palavra "de" é tratada como preposição se acompanhada de um pronome ou artigo indefinido .
    *   *Interoperabilidade*: Pode utilizar bibliotecas externas (DLLs) através da palavra-chave Processe, e suporta o uso de endereços de rotinas para callbacks, com a palavra-chave compativelmente para APIs do Windows .
    *   *Ferramentas: O Ambiente de Desenvolvimento Integrado (ADI) **PAL-1000* foi escrito 100% em Português Puro, servindo como prova de conceito da linguagem .