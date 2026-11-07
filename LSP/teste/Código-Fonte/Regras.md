- [Visão Geral - Português Puro](#visão-geral---português-puro)
  - [Características Fundamentais](#características-fundamentais)
  - [Estrutura de um Programa](#estrutura-de-um-programa)
  - [Convenções de Escrita](#convenções-de-escrita)
  - [Índice da Documentação](#índice-da-documentação)
  - [Compilação](#compilação)
  - [Recursos Avançados](#recursos-avançados)
  - [Próximos Passos](#próximos-passos)
- [Comentários - Português Puro](#comentários---português-puro)
  - [Visão Geral](#visão-geral)
  - [Tipos de Comentários](#tipos-de-comentários)
    - [1. Comentários](#1-comentários)
    - [2. Observações](#2-observações)
  - [1. Comentários](#1-comentários-1)
    - [Sintaxe](#sintaxe)
    - [Características](#características)
    - [Exemplos Básicos](#exemplos-básicos)
    - [Desabilitando Código](#desabilitando-código)
    - [Comentários de Documentação](#comentários-de-documentação)
    - [Comentários Multilinha](#comentários-multilinha)
  - [2. Observações](#2-observações-1)
    - [Sintaxe](#sintaxe-1)
    - [Características](#características-1)
    - [Exemplos em Definições de Tipos](#exemplos-em-definições-de-tipos)
    - [Exemplos em Campos de Estrutura](#exemplos-em-campos-de-estrutura)
    - [Exemplos em Variáveis Globais](#exemplos-em-variáveis-globais)
    - [Combinando Comentários](#combinando-comentários)
  - [Diferença entre Comentários e Qualificadores](#diferença-entre-comentários-e-qualificadores)
    - [Comentários `[]`](#comentários-)
    - [Referenciadores `()`](#referenciadores-)
  - [Validação de Observações](#validação-de-observações)
    - [Rotinas de Processamento](#rotinas-de-processamento)
      - [1. Ignorar Comentários](#1-ignorar-comentários)
      - [2. Ignorar Observações (Observações)](#2-ignorar-observações-observações)
    - [Validação e Códigos de Erro](#validação-e-códigos-de-erro)
    - [Códigos de Erro](#códigos-de-erro)
    - [Regras de Balanceamento](#regras-de-balanceamento)
  - [Observações Importantes](#observações-importantes)
  - [Boas Práticas](#boas-práticas)
  - [Exemplos Práticos](#exemplos-práticos)
    - [Documentação de Estrutura Complexa](#documentação-de-estrutura-complexa)
    - [Comentários em Rotinas](#comentários-em-rotinas)
    - [Comentários Explicativos](#comentários-explicativos)
    - [Código Desabilitado](#código-desabilitado)
    - [Aliases e Notas Técnicas](#aliases-e-notas-técnicas)
    - [Fragmentos com Anotações](#fragmentos-com-anotações)
  - [Diferenças com Outras Linguagens](#diferenças-com-outras-linguagens)
  - [Antipadrões (Evitar)](#antipadrões-evitar)
    - [❌ Comentários Redundantes](#-comentários-redundantes)
    - [❌ Comentários Desatualizados](#-comentários-desatualizados)
    - [❌ Código Comentado Permanentemente](#-código-comentado-permanentemente)
    - [❌ Colchetes Não Balanceados](#-colchetes-não-balanceados)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
    - [1. Documentação de APIs Externas](#1-documentação-de-apis-externas)
    - [2. Explicação de Lógica Complexa](#2-explicação-de-lógica-complexa)
    - [3. Notas de Implementação](#3-notas-de-implementação)
    - [4. Referências de Campos](#4-referências-de-campos)
    - [5. Aliases e Constantes](#5-aliases-e-constantes)
  - [Estatísticas](#estatísticas)
  - [Resumo](#resumo)
    - [Comentários `\`](#comentários--1)
    - [Observações `[]`](#observações-)
    - [Recomendação Geral](#recomendação-geral)
- [Caracteres](#caracteres)
- [Caracteres reservados](#caracteres-reservados)
  - [Caracteres limitados](#caracteres-limitados)
  - [Caracteres permitidos](#caracteres-permitidos)
- [Caracteres numéricos:](#caracteres-numéricos)
- [Caracteres especiais:](#caracteres-especiais)
  - [Caracteres não permitidos](#caracteres-não-permitidos)
- [Valores Literais - Português Puro](#valores-literais---português-puro)
  - [Visão Geral](#visão-geral-1)
  - [Categorias de Valores Literais](#categorias-de-valores-literais)
    - [1. Números Inteiros](#1-números-inteiros)
    - [2. Frações](#2-frações)
    - [3. Strings](#3-strings)
    - [4. Hexadecimais](#4-hexadecimais)
    - [5. Booleanos](#5-booleanos)
    - [6. Valores Especiais](#6-valores-especiais)
  - [1. Números Inteiros](#1-números-inteiros-1)
    - [Sintaxe](#sintaxe-2)
    - [Exemplos](#exemplos)
    - [Limites](#limites)
  - [2. Frações](#2-frações-1)
    - [Sintaxe](#sintaxe-3)
    - [Características](#características-2)
    - [Exemplos](#exemplos-1)
    - [Conversão](#conversão)
  - [3. Strings](#3-strings-1)
    - [Sintaxe Básica](#sintaxe-básica)
    - [Características](#características-3)
    - [Exemplos](#exemplos-2)
    - [Escape de Aspas](#escape-de-aspas)
    - [Strings Multilinha](#strings-multilinha)
  - [4. Hexadecimais](#4-hexadecimais-1)
    - [Sintaxe](#sintaxe-4)
    - [Características](#características-4)
    - [Exemplos Curtos](#exemplos-curtos)
    - [Exemplos Longos](#exemplos-longos)
  - [5. Booleanos](#5-booleanos-1)
    - [Valores](#valores)
    - [Exemplos](#exemplos-3)
  - [6. Valores Especiais](#6-valores-especiais-1)
    - [`inexistente`](#inexistente)
  - [Caracteres Especiais](#caracteres-especiais-1)
    - [Variáveis Globais Predefinidas](#variáveis-globais-predefinidas)
    - [Uso](#uso)
  - [Comentários em Valores](#comentários-em-valores)
    - [Comentários Inline](#comentários-inline)
  - [Observações Importantes](#observações-importantes-1)
  - [Boas Práticas](#boas-práticas-1)
  - [Exemplos Completos](#exemplos-completos)
    - [Inicialização de Variáveis](#inicialização-de-variáveis)
    - [Valores em Estruturas](#valores-em-estruturas)
    - [Valores em Comparações](#valores-em-comparações)
    - [Valores em Operações](#valores-em-operações)
  - [Tabela de Referência Rápida](#tabela-de-referência-rápida)
  - [Estatísticas](#estatísticas-1)
- [Strings Literais - Português Puro](#strings-literais---português-puro)
  - [Definição](#definição)
  - [Sintaxe Básica](#sintaxe-básica-1)
  - [Delimitadores](#delimitadores)
  - [Técnicas para Incluir Aspas Duplas](#técnicas-para-incluir-aspas-duplas)
    - [Técnica 1: Escape Direto (Concisa)](#técnica-1-escape-direto-concisa)
    - [Técnica 2: Concatenação com Variável Global (Verbosa)](#técnica-2-concatenação-com-variável-global-verbosa)
    - [Técnica 3: Função Auxiliar (Programática)](#técnica-3-função-auxiliar-programática)
    - [Técnica 4: Rotinas da Biblioteca Padrão (Idiomática)](#técnica-4-rotinas-da-biblioteca-padrão-idiomática)
      - [Sinônimos Disponíveis](#sinônimos-disponíveis)
      - [Variações Sintáticas](#variações-sintáticas)
      - [Exemplo com Contagem](#exemplo-com-contagem)
    - [Comparação das Técnicas](#comparação-das-técnicas)
      - [Exemplo: Mensagem de Aviso com Comando](#exemplo-mensagem-de-aviso-com-comando)
    - [Exemplos](#exemplos-4)
      - [Exemplo 1: Texto com aspas](#exemplo-1-texto-com-aspas)
      - [Exemplo 2: Chamada de API com strings](#exemplo-2-chamada-de-api-com-strings)
      - [Exemplo 3: Aspas duplas consecutivas](#exemplo-3-aspas-duplas-consecutivas)
    - [Caso Especial: Seis Aspas Duplas (`""""""`)](#caso-especial-seis-aspas-duplas-)
  - [Caracteres Permitidos](#caracteres-permitidos-1)
    - [Permitidos SEM Escape](#permitidos-sem-escape)
    - [Exemplos de Caracteres Livres](#exemplos-de-caracteres-livres)
  - [Limitações](#limitações)
    - [Quebras de Linha](#quebras-de-linha)
  - [Detecção pelo Compilador](#detecção-pelo-compilador)
    - [Início de String Literal](#início-de-string-literal)
    - [Aspas Duplas Aninhadas](#aspas-duplas-aninhadas)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens)
  - [Exemplos Completos](#exemplos-completos-1)
    - [Exemplo 1: Declaração de Variável](#exemplo-1-declaração-de-variável)
    - [Exemplo 2: Comando de Escrita](#exemplo-2-comando-de-escrita)
    - [Exemplo 3: Chamada Externa](#exemplo-3-chamada-externa)
    - [Exemplo 4: Construção Dinâmica de Código](#exemplo-4-construção-dinâmica-de-código)
  - [Observações Importantes](#observações-importantes-2)
  - [Erros Comuns](#erros-comuns)
    - [❌ Erro 1: Usar barra invertida para escape](#-erro-1-usar-barra-invertida-para-escape)
    - [❌ Erro 2: Quebra de linha direta](#-erro-2-quebra-de-linha-direta)
    - [❌ Erro 3: Aspas simples como delimitador](#-erro-3-aspas-simples-como-delimitador)
- [Artigos - Português Puro](#artigos---português-puro)
  - [Visão Geral](#visão-geral-2)
  - [Categorias de Artigos](#categorias-de-artigos)
    - [1. Artigos Definidos](#1-artigos-definidos)
    - [2. Artigos Indefinidos](#2-artigos-indefinidos)
- [ARTIGOS DEFINIDOS](#artigos-definidos)
  - [Função](#função)
  - [Formas](#formas)
  - [Pronomes Demonstrativos Adjacentes](#pronomes-demonstrativos-adjacentes)
  - [Sintaxe](#sintaxe-5)
    - [Declaração de Variável Global](#declaração-de-variável-global)
    - [Referência a Variável](#referência-a-variável)
    - [Acesso a Campos de Estrutura](#acesso-a-campos-de-estrutura)
  - [Observações Importantes](#observações-importantes-3)
- [ARTIGOS INDEFINIDOS](#artigos-indefinidos)
  - [Função](#função-1)
  - [Formas Básicas](#formas-básicas)
  - [Pronomes Demonstrativos Abrangentes](#pronomes-demonstrativos-abrangentes)
    - [Proximidade Média (`esse`, `essa`)](#proximidade-média-esse-essa)
    - [~~Distância (`aquele`, `aquela`)~~](#distância-aquele-aquela)
    - [~~Indeterminação (`certo`, `certa`)~~](#indeterminação-certo-certa)
    - [~~Determinação (`determinado`, `determinada`)~~](#determinação-determinado-determinada)
  - [Sintaxe](#sintaxe-6)
    - [Definição de Tipo](#definição-de-tipo)
    - [Declaração de Variável Local](#declaração-de-variável-local)
    - [Campo de Estrutura](#campo-de-estrutura)
  - [Observações Importantes](#observações-importantes-4)
- [DIFERENÇAS ENTRE ARTIGOS DEFINIDOS E INDEFINIDOS](#diferenças-entre-artigos-definidos-e-indefinidos)
- [CONTRAÇÕES](#contrações)
  - [Contrações com Artigo Definido](#contrações-com-artigo-definido)
    - [De + Artigo Definido](#de--artigo-definido)
    - [Em + Artigo Definido](#em--artigo-definido)
  - [Contrações Demonstrativas](#contrações-demonstrativas)
    - [De + Pronome Demonstrativo](#de--pronome-demonstrativo)
- [EXEMPLOS COMPLETOS](#exemplos-completos-2)
  - [Declaração de Variáveis Globais](#declaração-de-variáveis-globais)
  - [Definição de Tipos](#definição-de-tipos)
  - [Declaração de Variáveis Locais](#declaração-de-variáveis-locais)
  - [Acesso a Campos](#acesso-a-campos)
- [OBSERVAÇÕES FINAIS](#observações-finais)
- [Pronomes - Português Puro](#pronomes---português-puro)
  - [Visão Geral](#visão-geral-3)
- [PRONOMES DEMONSTRATIVOS](#pronomes-demonstrativos)
  - [Classificação por Proximidade](#classificação-por-proximidade)
    - [Proximidade Imediata (Adjacentes)](#proximidade-imediata-adjacentes)
    - [Proximidade Média (Abrangentes)](#proximidade-média-abrangentes)
    - [Distância (Abrangentes)](#distância-abrangentes)
- [PRONOMES DEMONSTRATIVOS ADJACENTES](#pronomes-demonstrativos-adjacentes-1)
  - [Função](#função-2)
  - [Uso em Declarações Globais](#uso-em-declarações-globais)
  - [Contrações](#contrações-1)
    - [De + Pronome Demonstrativo Adjacente](#de--pronome-demonstrativo-adjacente)
    - [Em + Pronome Demonstrativo Adjacente](#em--pronome-demonstrativo-adjacente)
- [PRONOMES DEMONSTRATIVOS ABRANGENTES](#pronomes-demonstrativos-abrangentes-1)
  - [Função](#função-3)
  - [Tipos de Pronomes Abrangentes](#tipos-de-pronomes-abrangentes)
    - [1. Proximidade Média (`esse`, `essa`, `esses`, `essas`)](#1-proximidade-média-esse-essa-esses-essas)
    - [2. Distância (`aquele`, `aquela`, `aqueles`, `aquelas`)](#2-distância-aquele-aquela-aqueles-aquelas)
    - [3. Indeterminação (`certo`, `certa`, `certos`, `certas`)](#3-indeterminação-certo-certa-certos-certas)
    - [4. Determinação (`determinado`, `determinada`, `determinados`, `determinadas`)](#4-determinação-determinado-determinada-determinados-determinadas)
  - [Contrações com Pronomes Abrangentes](#contrações-com-pronomes-abrangentes)
    - [De + Pronome Demonstrativo Abrangente](#de--pronome-demonstrativo-abrangente)
    - [Em + Pronome Demonstrativo Abrangente](#em--pronome-demonstrativo-abrangente)
- [OUTROS PRONOMES](#outros-pronomes)
  - [Pronomes Possessivos](#pronomes-possessivos)
    - [Possessivos em Português](#possessivos-em-português)
    - [Possessivos em Inglês](#possessivos-em-inglês)
- [PRONOMES RELATIVOS](#pronomes-relativos)
- [TABELA RESUMO DE PRONOMES DEMONSTRATIVOS](#tabela-resumo-de-pronomes-demonstrativos)
- [EXEMPLOS COMPLETOS](#exemplos-completos-3)
  - [Usando Pronomes Demonstrativos Adjacentes](#usando-pronomes-demonstrativos-adjacentes)
  - [Usando Pronomes Demonstrativos Abrangentes](#usando-pronomes-demonstrativos-abrangentes)
  - [Usando Contrações](#usando-contrações)
- [OBSERVAÇÕES FINAIS](#observações-finais-1)
- [Preposições - Português Puro](#preposições---português-puro)
  - [Visão Geral](#visão-geral-4)
  - [Categorias de Preposições](#categorias-de-preposições)
    - [1. Preposições Conectivas](#1-preposições-conectivas)
    - [2. Preposições de Posição](#2-preposições-de-posição)
    - [3. Preposições Temporais](#3-preposições-temporais)
    - [4. Preposições de Modo](#4-preposições-de-modo)
    - [5. Preposições Compostas](#5-preposições-compostas)
    - [6. Preposições de Relação](#6-preposições-de-relação)
    - [7. Preposições de Orientação](#7-preposições-de-orientação)
    - [8. Preposições de Comparação](#8-preposições-de-comparação)
    - [9. Preposições de Restrição](#9-preposições-de-restrição)
    - [10. Preposições Especiais](#10-preposições-especiais)
    - [11. Preposições de Dimensão](#11-preposições-de-dimensão)
    - [12. Preposições de Resultado](#12-preposições-de-resultado)
    - [13. Preposições de Início](#13-preposições-de-início)
    - [14. Preposições Pronominais](#14-preposições-pronominais)
    - [15. Contrações Especiais](#15-contrações-especiais)
  - [Observações Importantes](#observações-importantes-5)
  - [Uso em Expressões](#uso-em-expressões)
    - [Acesso a Campos (com Contrações)](#acesso-a-campos-com-contrações)
    - [Direção e Destino](#direção-e-destino)
    - [Localização](#localização)
    - [Modo e Instrumento](#modo-e-instrumento)
    - [Comparação](#comparação)
  - [Estatísticas](#estatísticas-2)
  - [Observações Finais](#observações-finais-2)
- [Conjunções - Português Puro](#conjunções---português-puro)
  - [Visão Geral](#visão-geral-5)
  - [Lista de Conjunções](#lista-de-conjunções)
  - [Uso de Conjunções](#uso-de-conjunções)
    - [1. Separação de Campos em Estruturas](#1-separação-de-campos-em-estruturas)
    - [2. Separação de Parâmetros em Rotinas](#2-separação-de-parâmetros-em-rotinas)
    - [3. Chamadas de Rotinas com Múltiplos Argumentos](#3-chamadas-de-rotinas-com-múltiplos-argumentos)
    - [4. Chamadas Externas (DLLs)](#4-chamadas-externas-dlls)
    - [5. Operador de Continuidade](#5-operador-de-continuidade)
  - [Vírgula como Conjunção](#vírgula-como-conjunção)
  - [Ponto-e-Vírgula como Separador](#ponto-e-vírgula-como-separador)
  - [Conjunção `nem`](#conjunção-nem)
  - [Diferença entre `e` e `ou`](#diferença-entre-e-e-ou)
    - [Conjunção `e` (Aditiva)](#conjunção-e-aditiva)
    - [Conjunção `ou` (Alternativa)](#conjunção-ou-alternativa)
  - [Observações Importantes](#observações-importantes-6)
  - [Boas Práticas](#boas-práticas-2)
  - [Exemplos Completos](#exemplos-completos-4)
    - [Estrutura com Vírgulas](#estrutura-com-vírgulas)
    - [Estrutura com `e`](#estrutura-com-e)
    - [Rotina com Múltiplos Parâmetros](#rotina-com-múltiplos-parâmetros)
    - [Chamada com Conjunções](#chamada-com-conjunções)
    - [Operador de Continuidade](#operador-de-continuidade)
    - [Chamada Externa com Conjunções](#chamada-externa-com-conjunções)
  - [Comparação de Estilos](#comparação-de-estilos)
    - [Estilo 1: Vírgulas (Recomendado para estruturas)](#estilo-1-vírgulas-recomendado-para-estruturas)
    - [Estilo 2: Conjunção `e` (Mais natural)](#estilo-2-conjunção-e-mais-natural)
    - [Estilo 3: Misto (Evitar)](#estilo-3-misto-evitar)
  - [Estatísticas](#estatísticas-3)
- [Advérbios - Português Puro](#advérbios---português-puro)
  - [Visão Geral](#visão-geral-6)
  - [Categorias de Advérbios](#categorias-de-advérbios)
    - [1. Advérbios de Negação](#1-advérbios-de-negação)
    - [2. Advérbios Ignoráveis](#2-advérbios-ignoráveis)
  - [1. Advérbios de Negação](#1-advérbios-de-negação-1)
    - [Função](#função-4)
    - [Lista](#lista)
    - [Sintaxe](#sintaxe-7)
  - [Uso em Expressões Condicionais](#uso-em-expressões-condicionais)
    - [Negação de Igualdade](#negação-de-igualdade)
    - [Negação de Comparação](#negação-de-comparação)
    - [Negação de Posse/Conteúdo](#negação-de-posseconteúdo)
  - [Uso em Funções Deliberativas](#uso-em-funções-deliberativas)
  - [Combinação com Outros Operadores](#combinação-com-outros-operadores)
    - [Negação + Conjunções](#negação--conjunções)
    - [Negação Dupla](#negação-dupla)
  - [2. Advérbios Ignoráveis](#2-advérbios-ignoráveis-1)
    - [Função](#função-5)
    - [Lista](#lista-1)
  - [Uso de Advérbios Ignoráveis](#uso-de-advérbios-ignoráveis)
    - [Com `já`](#com-já)
    - [Com `ainda`](#com-ainda)
    - [Combinação de Ignoráveis](#combinação-de-ignoráveis)
  - [Observações Importantes](#observações-importantes-7)
  - [Boas Práticas](#boas-práticas-3)
  - [Exemplos Práticos](#exemplos-práticos-1)
    - [Validação de Entrada](#validação-de-entrada)
    - [Verificação de Estado](#verificação-de-estado)
    - [Controle de Fluxo](#controle-de-fluxo)
    - [Lógica Complexa](#lógica-complexa)
    - [Comparação: Com e Sem Ignoráveis](#comparação-com-e-sem-ignoráveis)
  - [Diferenças com Outras Linguagens](#diferenças-com-outras-linguagens-1)
  - [Exemplos de Negação em Diferentes Contextos](#exemplos-de-negação-em-diferentes-contextos)
    - [Negação de Igualdade](#negação-de-igualdade-1)
    - [Negação de Comparação Numérica](#negação-de-comparação-numérica)
    - [Negação de Estado](#negação-de-estado)
    - [Negação de Posse](#negação-de-posse)
  - [Antipadrões (Evitar)](#antipadrões-evitar-1)
    - [❌ Negação Tripla](#-negação-tripla)
    - [❌ Excesso de Ignoráveis](#-excesso-de-ignoráveis)
    - [❌ Negação Ambígua](#-negação-ambígua)
  - [Estatísticas](#estatísticas-4)
  - [Resumo](#resumo-1)
    - [Advérbio de Negação (`não`)](#advérbio-de-negação-não)
    - [Advérbios Ignoráveis (`já`, `ainda`)](#advérbios-ignoráveis-já-ainda)
    - [Recomendação Geral](#recomendação-geral-1)
- [Verbos - Português Puro](#verbos---português-puro)
  - [Visão Geral](#visão-geral-7)
  - [Função dos Verbos](#função-dos-verbos)
    - [Uso Principal](#uso-principal)
    - [Normalização](#normalização)
  - [Lista Completa de Verbos](#lista-completa-de-verbos)
    - [1. Ser/Estar (Equivalência)](#1-serestar-equivalência)
    - [2. Ter/Haver (Posse/Existência)](#2-terhaver-posseexistência)
    - [3. Conter (Inclusão)](#3-conter-inclusão)
    - [4. Possuir (Posse)](#4-possuir-posse)
    - [5. Poder (Capacidade)](#5-poder-capacidade)
    - [6. Dever (Obrigação)](#6-dever-obrigação)
    - [7. Existir (Existência)](#7-existir-existência)
    - [8. Caber (Capacidade)](#8-caber-capacidade)
    - [9. Começar/Iniciar (Início)](#9-começariniciar-início)
    - [10. Finalizar/Terminar (Fim)](#10-finalizarterminar-fim)
    - [11. Outros Verbos](#11-outros-verbos)
  - [Uso em Expressões Condicionais](#uso-em-expressões-condicionais-1)
    - [Sintaxe](#sintaxe-8)
    - [Exemplos](#exemplos-5)
  - [Uso em Funções Deliberativas](#uso-em-funções-deliberativas-1)
    - [Sintaxe](#sintaxe-9)
    - [Exemplos](#exemplos-6)
  - [Uso em Cabeçalhos de Rotinas](#uso-em-cabeçalhos-de-rotinas)
  - [Normalização de Verbos](#normalização-de-verbos)
    - [Exemplo de Normalização](#exemplo-de-normalização)
    - [Tabela de Normalização](#tabela-de-normalização)
  - [Observações Importantes](#observações-importantes-8)
  - [Boas Práticas](#boas-práticas-4)
  - [Exemplos Práticos](#exemplos-práticos-2)
    - [Validação de Dados](#validação-de-dados)
    - [Verificação de Estado](#verificação-de-estado-1)
    - [Controle de Fluxo](#controle-de-fluxo-1)
  - [Estatísticas](#estatísticas-5)
- [Palavras-Chave - Português Puro](#palavras-chave---português-puro)
  - [Visão Geral](#visão-geral-8)
  - [Categorias de Palavras-Chave](#categorias-de-palavras-chave)
    - [1. Designação (Nomeação)](#1-designação-nomeação)
    - [2. Complementação (Estruturas)](#2-complementação-estruturas)
    - [3. Referenciamento (Ponteiros)](#3-referenciamento-ponteiros)
    - [4. Devolução (Retorno)](#4-devolução-retorno)
    - [5. Comandos de Controle](#5-comandos-de-controle)
    - [6. Operadores Especiais](#6-operadores-especiais)
  - [1. Palavras-Chave de Designação](#1-palavras-chave-de-designação)
    - [Função](#função-6)
    - [Lista](#lista-2)
    - [Sintaxe](#sintaxe-10)
    - [Exemplos](#exemplos-7)
  - [2. Palavras-Chave de Complementação](#2-palavras-chave-de-complementação)
    - [Função](#função-7)
    - [Lista](#lista-3)
    - [Sintaxe](#sintaxe-11)
    - [Exemplos](#exemplos-8)
  - [3. Palavras-Chave de Referenciamento](#3-palavras-chave-de-referenciamento)
    - [Função](#função-8)
    - [Lista](#lista-4)
    - [Sintaxe](#sintaxe-12)
    - [Exemplos](#exemplos-9)
  - [4. Palavras-Chave de Devolução](#4-palavras-chave-de-devolução)
    - [Função](#função-9)
    - [Lista](#lista-5)
    - [Sintaxe](#sintaxe-13)
    - [Exemplos](#exemplos-10)
  - [5. Comandos de Controle](#5-comandos-de-controle-1)
    - [5.1 Controle de Fluxo](#51-controle-de-fluxo)
    - [5.2 Funções Deliberativas](#52-funções-deliberativas)
    - [5.3 Gerenciamento de Memória](#53-gerenciamento-de-memória)
    - [5.4 Chamadas Externas](#54-chamadas-externas)
    - [5.5 Ponteiros](#55-ponteiros)
  - [6. Operadores Especiais](#6-operadores-especiais-1)
    - [6.1 Atribuição](#61-atribuição)
    - [6.2 Estruturas Especiais](#62-estruturas-especiais)
    - [6.3 Reutilização](#63-reutilização)
  - [7. Açúcar Sintático](#7-açúcar-sintático)
    - [Exemplos](#exemplos-11)
  - [Observações Importantes](#observações-importantes-9)
  - [Boas Práticas](#boas-práticas-5)
  - [Exemplos Completos](#exemplos-completos-5)
    - [Declaração de Variáveis](#declaração-de-variáveis)
    - [Estrutura com Referências](#estrutura-com-referências)
    - [Chamada Externa com Devolução](#chamada-externa-com-devolução)
    - [Uso de Preserve](#uso-de-preserve)
    - [Estrutura Completa](#estrutura-completa)
  - [Estatísticas](#estatísticas-6)
- [Qualificadores - Português Puro](#qualificadores---português-puro)
  - [Visão Geral](#visão-geral-9)
  - [Características Principais](#características-principais)
    - [Vantagens](#vantagens)
  - [Exemplos](#exemplos-12)
- [Tipos](#tipos)
  - [Forma geral de uma declaração](#forma-geral-de-uma-declaração)
    - [O que é a definição](#o-que-é-a-definição)
  - [Nomes de tipos](#nomes-de-tipos)
  - [Tipos primitivos e derivação](#tipos-primitivos-e-derivação)
  - [Estruturas](#estruturas)
    - [Campos nomeados e nomes inferidos](#campos-nomeados-e-nomes-inferidos)
    - [Apelidos de tipos em campos](#apelidos-de-tipos-em-campos)
    - [Campos de tamanho em bytes](#campos-de-tamanho-em-bytes)
    - [Campos sobrepostos](#campos-sobrepostos)
    - [Referência em campos](#referência-em-campos)
  - [Observações e comentários em campos](#observações-e-comentários-em-campos)
    - [Observações entre colchetes](#observações-entre-colchetes)
    - [Parênteses](#parênteses)
    - [Comentários](#comentários)
  - [Ponteiros](#ponteiros)
  - [Listas](#listas)
  - [Tipos escalares e unidades de medida](#tipos-escalares-e-unidades-de-medida)
  - [Plural dos tipos](#plural-dos-tipos)
  - [Conversão explícita de tipos](#conversão-explícita-de-tipos)
  - [Exemplos reunidos](#exemplos-reunidos)
    - [Tipos derivados](#tipos-derivados)
    - [Tipos compostos e campos](#tipos-compostos-e-campos)
    - [Estrutura com campos nomeados, inferidos e sobrepostos](#estrutura-com-campos-nomeados-inferidos-e-sobrepostos)
    - [Estrutura com bytes reservados](#estrutura-com-bytes-reservados)
    - [Tipo escalar](#tipo-escalar)
  - [Resumo dos tipos da biblioteca padrão](#resumo-dos-tipos-da-biblioteca-padrão)
- [Estruturas e Uniões](#estruturas-e-uniões)
  - [Visão Geral](#visão-geral-10)
  - [Definição de Tipos](#definição-de-tipos-1)
    - [Sintaxe Básica](#sintaxe-básica-2)
    - [Componentes Obrigatórios](#componentes-obrigatórios)
  - [Hierarquia de Tipos](#hierarquia-de-tipos)
    - [Tipos Primitivos](#tipos-primitivos)
    - [Tipo Base](#tipo-base)
    - [Tipo Derivado](#tipo-derivado)
  - [Derivação de Tipos](#derivação-de-tipos)
    - [Derivação de `byte`](#derivação-de-byte)
    - [Derivação de `estrutura`](#derivação-de-estrutura)
    - [Cadeia de Derivação (Múltiplos Níveis)](#cadeia-de-derivação-múltiplos-níveis)
    - [Derivação de Estruturas com Herança de Campos](#derivação-de-estruturas-com-herança-de-campos)
  - [Estruturas](#estruturas-1)
    - [Sintaxe Básica](#sintaxe-básica-3)
    - [Campos](#campos)
    - [Campos Sobrepostos (`sob`)](#campos-sobrepostos-sob)
    - [Estruturas Delimitadas por Tamanho](#estruturas-delimitadas-por-tamanho)
    - [Campos Numéricos (Arrays de Bytes)](#campos-numéricos-arrays-de-bytes)
    - [Observações de Tipo](#observações-de-tipo)
    - [Comentários Inline em Campos](#comentários-inline-em-campos)
  - [Ponteiros](#ponteiros-1)
    - [Ponteiro Genérico](#ponteiro-genérico)
    - [Ponteiro Tipado](#ponteiro-tipado)
    - [Sintaxe Opcional](#sintaxe-opcional)
    - [Ponteiros em Campos](#ponteiros-em-campos)
  - [Tipos Escalares (Unidades de Medida)](#tipos-escalares-unidades-de-medida)
  - [Listas](#listas-1)
  - [Pluralização Automática](#pluralização-automática)
    - [Regras de Pluralização](#regras-de-pluralização)
      - [1. Exceções Conhecidas](#1-exceções-conhecidas)
      - [2. Advérbios Invariáveis](#2-advérbios-invariáveis)
      - [3. Terminações Especiais](#3-terminações-especiais)
      - [4. Regra Padrão](#4-regra-padrão)
      - [5. Nomes Compostos](#5-nomes-compostos)
  - [Conversão de Tipos (Casting)](#conversão-de-tipos-casting)
    - [Operadores de Casting](#operadores-de-casting)
    - [Sintaxe](#sintaxe-14)
    - [Exemplos](#exemplos-13)
    - [Regras](#regras)
  - [Exemplos Completos](#exemplos-completos-6)
    - [Tipo Derivado](#tipo-derivado-1)
    - [Tipos Derivados de Ponteiros](#tipos-derivados-de-ponteiros)
    - [Estrutura Delimitada](#estrutura-delimitada)
    - [Estrutura Simples](#estrutura-simples)
    - [Estrutura com Declaração no Campo](#estrutura-com-declaração-no-campo)
    - [Estrutura Composta (com `sob`)](#estrutura-composta-com-sob)
    - [Estrutura com Observações e Comentários](#estrutura-com-observações-e-comentários)
    - [Estrutura com Arrays de Bytes](#estrutura-com-arrays-de-bytes)
    - [Estrutura com Padding](#estrutura-com-padding)
    - [Estrutura Complexa (In\_Addr / SOCKADDR)](#estrutura-complexa-in_addr--sockaddr)
    - [Lista](#lista-6)
    - [Tipo Escalar \[Unidade de Medida\]](#tipo-escalar-unidade-de-medida)
    - [Tipo Complexo (Referência)](#tipo-complexo-referência)
  - [Observações Importantes](#observações-importantes-10)
  - [Estatísticas](#estatísticas-7)
- [Listas](#listas-2)
  - [Visão Geral](#visão-geral-11)
  - [Definição de Listas](#definição-de-listas)
    - [Sintaxe Básica](#sintaxe-básica-4)
    - [Características](#características-5)
  - [Exemplos de Definição](#exemplos-de-definição)
    - [Lista Simples](#lista-simples)
    - [Lista com Múltiplos Campos](#lista-com-múltiplos-campos)
    - [Lista de Números](#lista-de-números)
  - [Estrutura Interna (Automática)](#estrutura-interna-automática)
  - [Manipulação de Listas](#manipulação-de-listas)
    - [Cabeçalha (Âncora)](#cabeçalha-âncora)
    - [Declaração de Variável de Lista](#declaração-de-variável-de-lista)
    - [Percorrendo a Lista](#percorrendo-a-lista)
  - [Acesso a Membros (Possessivos)](#acesso-a-membros-possessivos)
  - [Operações Comuns](#operações-comuns)
    - [Adicionar Item (Append)](#adicionar-item-append)
    - [Remover Item](#remover-item)
    - [Acrescentar Elemento](#acrescentar-elemento)
  - [Padrões Comuns](#padrões-comuns)
    - [Padrão 1: Iteração Simples](#padrão-1-iteração-simples)
    - [Padrão 2: Busca em Lista](#padrão-2-busca-em-lista)
    - [Padrão 3: Destruição de Lista](#padrão-3-destruição-de-lista)
  - [Gerenciamento de Memória](#gerenciamento-de-memória)
  - [Exemplos Práticos](#exemplos-práticos-3)
    - [Agenda Telefônica](#agenda-telefônica)
    - [Processamento de Polígonos](#processamento-de-polígonos)
  - [Observações Importantes](#observações-importantes-11)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-1)
  - [Estatísticas](#estatísticas-8)
- [Conversão de Tipos](#conversão-de-tipos)
  - [Visão Geral](#visão-geral-12)
  - [1. Conversão Automática](#1-conversão-automática)
    - [Número → String (em Concatenações)](#número--string-em-concatenações)
    - [Fração → String](#fração--string)
    - [Número → Fração](#número--fração)
  - [2. Conversão Explícita (`Converta`)](#2-conversão-explícita-converta)
    - [Sintaxe Básica](#sintaxe-básica-5)
    - [Conversões Comuns](#conversões-comuns)
    - [Regras Importantes](#regras-importantes)
  - [3. Conversão Forçada / Casting](#3-conversão-forçada--casting)
    - [3.1 Operadores `tal como` / `tal qual`](#31-operadores-tal-como--tal-qual)
    - [3.2 Operadores `like` / `as` (Casting de Tipos)](#32-operadores-like--as-casting-de-tipos)
  - [4. Tabela Resumo de Conversões](#4-tabela-resumo-de-conversões)
  - [5. Conversão em Diferentes Contextos](#5-conversão-em-diferentes-contextos)
    - [Em Atribuições](#em-atribuições)
    - [Em Expressões](#em-expressões)
    - [Em Operações](#em-operações)
    - [Em Condicionais](#em-condicionais)
    - [Em Chamadas Externas (API)](#em-chamadas-externas-api)
  - [6. Observações Importantes](#6-observações-importantes)
  - [7. Boas Práticas](#7-boas-práticas)
  - [8. Erros Comuns](#8-erros-comuns)
    - [❌ Conversão Implícita Inválida](#-conversão-implícita-inválida)
    - [❌ Cast Incompatível](#-cast-incompatível)
    - [❌ Uso Incorreto de `as`](#-uso-incorreto-de-as)
  - [10. Estatísticas](#10-estatísticas)
- [Variáveis Globais - Português Puro](#variáveis-globais---português-puro)
  - [Início](#início)
  - [Obrigatório](#obrigatório)
  - [Opcional](#opcional)
  - [Artigo Definido](#artigo-definido)
  - [Nome da variável](#nome-da-variável)
  - [Sintaxe](#sintaxe-15)
    - [Forma básica](#forma-básica)
    - [Com inicialização](#com-inicialização)
    - [Com comentário](#com-comentário)
    - [Forma estruturada](#forma-estruturada)
  - [Exemplos](#exemplos-14)
    - [Variável simples sem inicialização](#variável-simples-sem-inicialização)
    - [Variável com inicialização](#variável-com-inicialização)
    - [Variáveis com nomes compostos](#variáveis-com-nomes-compostos)
    - [Variáveis com símbolos especiais](#variáveis-com-símbolos-especiais)
    - [Variáveis com aspas simples (palavras reservadas)](#variáveis-com-aspas-simples-palavras-reservadas)
    - [Variáveis com números no nome](#variáveis-com-números-no-nome)
    - [Variáveis estruturada com campos](#variáveis-estruturada-com-campos)
    - [Variáveis com valores hexadecimais longos](#variáveis-com-valores-hexadecimais-longos)
    - [Variáveis com frações como valores](#variáveis-com-frações-como-valores)
    - [Variáveis com sintaxe opcional](#variáveis-com-sintaxe-opcional)
  - [Observações Importantes](#observações-importantes-12)
- [Variáveis Locais - Português Puro](#variáveis-locais---português-puro)
  - [Início](#início-1)
  - [Obrigatório](#obrigatório-1)
  - [Opcional](#opcional-1)
  - [Artigo Indefinido](#artigo-indefinido)
  - [Nome da variável](#nome-da-variável-1)
  - [Escopo](#escopo)
  - [Formas de Declaração](#formas-de-declaração)
    - [1. Com Inferência de Tipo (mais comum)](#1-com-inferência-de-tipo-mais-comum)
    - [2. Com Nome Explícito](#2-com-nome-explícito)
    - [3. Com Alocação de Memória](#3-com-alocação-de-memória)
  - [Uso Posterior](#uso-posterior)
  - [Sintaxe](#sintaxe-16)
    - [Forma com inferência de tipo](#forma-com-inferência-de-tipo)
    - [Forma com nome explícito](#forma-com-nome-explícito)
    - [Forma com alocação](#forma-com-alocação)
  - [Exemplos](#exemplos-15)
    - [Variável com inferência de tipo](#variável-com-inferência-de-tipo)
    - [Variável com nome explícito](#variável-com-nome-explícito)
    - [Variável com alocação de memória](#variável-com-alocação-de-memória)
    - [Uso posterior com artigo definido](#uso-posterior-com-artigo-definido)
    - [Variáveis em laços](#variáveis-em-laços)
    - [Variáveis com tipos complexos](#variáveis-com-tipos-complexos)
  - [Observações Importantes](#observações-importantes-13)
  - [Diferenças entre Variáveis Locais e Globais](#diferenças-entre-variáveis-locais-e-globais)
- [Possessivos (Operadores de Acesso a Membros) - Português Puro](#possessivos-operadores-de-acesso-a-membros---português-puro)
  - [Definição](#definição-1)
  - [Sintaxe](#sintaxe-17)
  - [Formas](#formas-1)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-2)
  - [Razão de Ser](#razão-de-ser)
    - [Problema: Ambiguidade com Preposições](#problema-ambiguidade-com-preposições)
    - [Solução: Possessivos Demonstrativos](#solução-possessivos-demonstrativos)
  - [Invariância de Gênero e Número](#invariância-de-gênero-e-número)
  - [Exemplos](#exemplos-16)
    - [Exemplo 1: Acesso a Campo de Estrutura](#exemplo-1-acesso-a-campo-de-estrutura)
    - [Exemplo 2: Atribuição a Campo](#exemplo-2-atribuição-a-campo)
    - [Exemplo 3: Estruturas Aninhadas](#exemplo-3-estruturas-aninhadas)
    - [Exemplo 4: Listas (Também São Estruturas)](#exemplo-4-listas-também-são-estruturas)
  - [Sintaxe Completa](#sintaxe-completa)
    - [Forma Básica](#forma-básica-1)
    - [Com Múltiplos Níveis](#com-múltiplos-níveis)
    - [Exemplos de Sintaxe](#exemplos-de-sintaxe)
  - [Detecção pelo Compilador](#detecção-pelo-compilador-1)
  - [Diferença: Possessivo vs Preposição](#diferença-possessivo-vs-preposição)
    - [Exemplos Comparativos](#exemplos-comparativos)
  - [Observações Importantes](#observações-importantes-14)
  - [Exemplos Completos](#exemplos-completos-7)
    - [Exemplo Completo 1: Cadastro de Pessoa](#exemplo-completo-1-cadastro-de-pessoa)
    - [Exemplo Completo 2: Lista Encadeada](#exemplo-completo-2-lista-encadeada)
  - [Erros Comuns](#erros-comuns-1)
    - [❌ Erro 1: Usar `de` em vez de `desta`](#-erro-1-usar-de-em-vez-de-desta)
    - [❌ Erro 2: Confundir nome de variável com acesso a membro](#-erro-2-confundir-nome-de-variável-com-acesso-a-membro)
    - [❌ Erro 3: Usar ponto (`.`) como em outras linguagens](#-erro-3-usar-ponto--como-em-outras-linguagens)
- [Campos Calculados - Português Puro](#campos-calculados---português-puro)
  - [Definição](#definição-2)
  - [Conceito](#conceito)
  - [Como Funciona](#como-funciona)
    - [1. Definir a Rotina do Campo Calculado](#1-definir-a-rotina-do-campo-calculado)
    - [Uso do Campo Calculado](#uso-do-campo-calculado)
  - [Pronomes Demonstrativos em Campos Calculados](#pronomes-demonstrativos-em-campos-calculados)
    - [Possessivos Adjacentes (`desta`, `deste`)](#possessivos-adjacentes-desta-deste)
    - [Possessivos Abrangentes (`duma`, `dum`, `dessa`, `desse`)](#possessivos-abrangentes-duma-dum-dessa-desse)
  - [Diferença: Campo Real vs Campo Calculado](#diferença-campo-real-vs-campo-calculado)
    - [Exemplo Comparativo](#exemplo-comparativo)
  - [Vantagens dos Campos Calculados](#vantagens-dos-campos-calculados)
  - [Escopo e Emprego](#escopo-e-emprego)
    - [Emprego Explícito](#emprego-explícito)
    - [Emprego Implícito](#emprego-implícito)
  - [Exemplos Adicionais](#exemplos-adicionais)
    - [Exemplo 1: Área de Retângulo](#exemplo-1-área-de-retângulo)
    - [Exemplo 2: Nome Completo de Pessoa](#exemplo-2-nome-completo-de-pessoa)
    - [Exemplo 3: Distância entre Pontos](#exemplo-3-distância-entre-pontos)
  - [Limitações](#limitações-1)
  - [Observações Importantes](#observações-importantes-15)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-3)
  - [Resumo](#resumo-2)
- [Gerenciamento de Memória](#gerenciamento-de-memória-1)
  - [Visão Geral](#visão-geral-13)
  - [Comandos Principais](#comandos-principais)
    - [1. `Aloque` - Alocação de Memória](#1-aloque---alocação-de-memória)
    - [2. `Desaloque` - Liberação de Memória](#2-desaloque---liberação-de-memória)
    - [3. `Reaponte` - Realocação de Memória](#3-reaponte---realocação-de-memória)
    - [4. `Preserve` - Proteção de Parâmetros](#4-preserve---proteção-de-parâmetros)
  - [Gerenciamento Automático vs Manual](#gerenciamento-automático-vs-manual)
    - [Automático (Strings)](#automático-strings)
    - [Manual (Estruturas, Listas, Ponteiros, Buffers)](#manual-estruturas-listas-ponteiros-buffers)
  - [Padrões de Uso](#padrões-de-uso)
    - [Padrão 1: Alocação Simples](#padrão-1-alocação-simples)
    - [Padrão 2: Alocação com Verificação](#padrão-2-alocação-com-verificação)
    - [Padrão 3: Lista com Alocação por Nó](#padrão-3-lista-com-alocação-por-nó)
    - [Padrão 4: Destruição de Lista Completa](#padrão-4-destruição-de-lista-completa)
    - [Padrão 5: Buffer com Realocação](#padrão-5-buffer-com-realocação)
  - [Gerenciamento em Rotinas](#gerenciamento-em-rotinas)
    - [Parâmetros (Passagem por Referência)](#parâmetros-passagem-por-referência)
    - [Variáveis Locais com Alocação](#variáveis-locais-com-alocação)
  - [Estruturas com Ponteiros](#estruturas-com-ponteiros)
    - [Ponteiro Genérico](#ponteiro-genérico-1)
    - [Ponteiro Tipado](#ponteiro-tipado-1)
    - [Estrutura com Ponteiros](#estrutura-com-ponteiros)
  - [Gerenciamento em Listas](#gerenciamento-em-listas)
    - [Cabeçalha (Âncora)](#cabeçalha-âncora-1)
    - [Alocação de Nós](#alocação-de-nós)
    - [Remoção e Desalocação](#remoção-e-desalocação)
    - [Destruição Completa](#destruição-completa)
  - [Boas Práticas](#boas-práticas-6)
  - [Erros Comuns](#erros-comuns-2)
    - [❌ Esquecer `Desaloque`](#-esquecer-desaloque)
    - [❌ Acessar Após `Desaloque`](#-acessar-após-desaloque)
    - [❌ Não Verificar Falha de Alocação](#-não-verificar-falha-de-alocação)
    - [❌ `Preserve` Ausente](#-preserve-ausente)
    - [❌ Desalocação em Ordem Errada](#-desalocação-em-ordem-errada)
  - [Observações Importantes](#observações-importantes-16)
  - [Exemplos Completos](#exemplos-completos-8)
    - [Buffer de Arquivo](#buffer-de-arquivo)
    - [Estrutura Aninhada](#estrutura-aninhada)
    - [Lista com Dados Complexos](#lista-com-dados-complexos)
  - [Estatísticas](#estatísticas-9)
- [Operadores, Comparadores e Concatenadores - Português Puro](#operadores-comparadores-e-concatenadores---português-puro)
  - [Visão Geral](#visão-geral-14)
  - [Características Importantes](#características-importantes)
    - [Precedência e Associatividade](#precedência-e-associatividade)
    - [Duas Formas de Operação](#duas-formas-de-operação)
- [1. OPERADORES ARITMÉTICOS](#1-operadores-aritméticos)
  - [Comandos Imperativos](#comandos-imperativos)
    - [Sintaxe](#sintaxe-18)
    - [Comandos Disponíveis](#comandos-disponíveis)
      - [Adição](#adição)
      - [Subtração](#subtração)
      - [Multiplicação](#multiplicação)
      - [Divisão](#divisão)
  - [Operadores em Expressões](#operadores-em-expressões)
    - [Sintaxe](#sintaxe-19)
    - [Operadores Disponíveis](#operadores-disponíveis)
    - [Exemplos Completos](#exemplos-completos-9)
- [2. OPERADORES DE COMPARAÇÃO](#2-operadores-de-comparação)
  - [Sintaxe](#sintaxe-20)
  - [Operadores Disponíveis](#operadores-disponíveis-1)
    - [Igualdade](#igualdade)
    - [Desigualdade](#desigualdade)
    - [Comparação Numérica](#comparação-numérica)
    - [Comparação de Estado](#comparação-de-estado)
- [3. OPERADORES DE CONCATENAÇÃO](#3-operadores-de-concatenação)
  - [Comandos Imperativos](#comandos-imperativos-1)
    - [Acrescentar (Append)](#acrescentar-append)
    - [Antepor (Prepend)](#antepor-prepend)
  - [Operadores em Expressões](#operadores-em-expressões-1)
    - [Sintaxe](#sintaxe-21)
    - [Operadores Disponíveis](#operadores-disponíveis-2)
- [4. OPERADORES LÓGICOS](#4-operadores-lógicos)
  - [Operadores Disponíveis](#operadores-disponíveis-3)
  - [Operadores sem lógica](#operadores-sem-lógica)
- [5. OBSERVAÇÕES IMPORTANTES](#5-observações-importantes)
  - [Avaliação da Esquerda para Direita](#avaliação-da-esquerda-para-direita)
  - [Case-Insensitive](#case-insensitive)
- [7. EXEMPLOS COMPLETOS](#7-exemplos-completos)
  - [Calculadora Simples](#calculadora-simples)
  - [Validação com Comparadores](#validação-com-comparadores)
  - [Concatenação de Strings](#concatenação-de-strings)
  - [Observações Finais](#observações-finais-3)
- [Expressões - Português Puro](#expressões---português-puro)
  - [Visão Geral](#visão-geral-15)
  - [Características das Expressões](#características-das-expressões)
    - [Capacidades](#capacidades)
    - [Restrições](#restrições)
  - [Avaliação Esquerda→Direita](#avaliação-esquerdadireita)
    - [Exemplo](#exemplo)
  - [Operadores Aritméticos](#operadores-aritméticos)
    - [Adição (`mais`)](#adição-mais)
    - [Subtração (`menos`)](#subtração-menos)
    - [Multiplicação (`vezes`)](#multiplicação-vezes)
    - [Divisão (`dividido por` / `dividido pelo`)](#divisão-dividido-por--dividido-pelo)
  - [Operadores de Concatenação](#operadores-de-concatenação)
    - [`junto com`](#junto-com)
    - [`seguido de`](#seguido-de)
    - [Operador Variático `e`](#operador-variático-e)
  - [Expressões Complexas](#expressões-complexas)
    - [Múltiplos Operadores](#múltiplos-operadores)
    - [Expressões com Campos](#expressões-com-campos)
    - [Expressões com Frações](#expressões-com-frações)
  - [Acesso a Membros](#acesso-a-membros)
    - [Possessivos Adjacentes](#possessivos-adjacentes)
  - [Expressões em Atribuições](#expressões-em-atribuições)
    - [Atribuição Simples](#atribuição-simples)
    - [Atribuição com Expressão](#atribuição-com-expressão)
  - [Expressões em Operações](#expressões-em-operações)
    - [Adicione](#adicione)
    - [Subtraia](#subtraia)
    - [Multiplique](#multiplique)
    - [Divida](#divida)
  - [Expressões Condicionais](#expressões-condicionais)
  - [Exemplos Práticos](#exemplos-práticos-4)
    - [Cálculo de Área](#cálculo-de-área)
    - [Manipulação de Ponteiros](#manipulação-de-ponteiros)
    - [Cálculo com Frações](#cálculo-com-frações)
    - [Concatenação de Strings](#concatenação-de-strings-1)
    - [Expressão com Múltiplos Campos](#expressão-com-múltiplos-campos)
  - [Conversão de Tipos](#conversão-de-tipos-1)
    - [Conversão Automática: Números para Strings](#conversão-automática-números-para-strings)
    - [Conversão Explícita: Strings para Números](#conversão-explícita-strings-para-números)
    - [Outros Tipos de Conversão](#outros-tipos-de-conversão)
  - [Observações Importantes](#observações-importantes-17)
  - [Boas Práticas](#boas-práticas-7)
  - [Erros Comuns](#erros-comuns-3)
    - [❌ Assumir Precedência](#-assumir-precedência)
    - [❌ Tentar Usar Parênteses](#-tentar-usar-parênteses)
    - [❌ Conversão Implícita](#-conversão-implícita)
  - [Tabela de Operadores](#tabela-de-operadores)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-4)
  - [Estatísticas](#estatísticas-10)
- [Instruções - Português Puro](#instruções---português-puro)
  - [Visão Geral](#visão-geral-16)
  - [Categorias de Instruções](#categorias-de-instruções)
    - [1. Atribuição e Manipulação](#1-atribuição-e-manipulação)
    - [2. Conversão de Tipos](#2-conversão-de-tipos)
    - [3. Controle de Fluxo](#3-controle-de-fluxo)
    - [4. Entrada/Saída](#4-entradasaída)
    - [5. Memória](#5-memória)
    - [6. Chamadas](#6-chamadas)
  - [1. Atribuição (`Atribua`)](#1-atribuição-atribua)
    - [Sintaxe](#sintaxe-22)
    - [Preposições Aceitas](#preposições-aceitas)
    - [Exemplos](#exemplos-17)
  - [2. Operações Aritméticas](#2-operações-aritméticas)
    - [`Adicione`](#adicione-1)
    - [`Subtraia`](#subtraia-1)
    - [`Multiplique`](#multiplique-1)
    - [`Divida`](#divida-1)
  - [3. Concatenação e Adição](#3-concatenação-e-adição)
    - [`Acrescente`](#acrescente)
  - [4. Remoção](#4-remoção)
    - [`Remova`](#remova)
  - [5. Conversão de Tipos (`Converta`)](#5-conversão-de-tipos-converta)
    - [Sintaxe Básica](#sintaxe-básica-6)
    - [Conversões Comuns](#conversões-comuns-1)
  - [6. Conversão Forçada (`tal como` / `tal qual`)](#6-conversão-forçada-tal-como--tal-qual)
    - [Função](#função-10)
    - [Sintaxe](#sintaxe-23)
    - [Exemplos](#exemplos-18)
  - [7. Entrada/Saída](#7-entradasaída)
    - [`Escreva`](#escreva)
    - [`Leia`](#leia)
  - [8. Gerenciamento de Memória](#8-gerenciamento-de-memória)
    - [`Aloque`](#aloque)
    - [`Desaloque`](#desaloque)
    - [`Reaponte`](#reaponte)
    - [`Preserve`](#preserve)
  - [9. Chamadas Externas (`Processe`)](#9-chamadas-externas-processe)
    - [Sintaxe](#sintaxe-24)
    - [Exemplos](#exemplos-19)
  - [10. Instruções de Máquina (`Decodifique`)](#10-instruções-de-máquina-decodifique)
    - [Sintaxe](#sintaxe-25)
    - [Exemplos](#exemplos-20)
  - [11. Outras Instruções Comuns](#11-outras-instruções-comuns)
    - [`Limpe`](#limpe)
    - [`Lance`](#lance)
    - [`Obtenha`](#obtenha)
    - [`Crie`](#crie)
    - [`Destrua`](#destrua)
    - [`Esvazie`](#esvazie)
  - [Separadores de Instruções](#separadores-de-instruções)
    - [Ponto e Vírgula (`;`)](#ponto-e-vírgula-)
    - [Ponto (`.`)](#ponto-)
  - [Observações Importantes](#observações-importantes-18)
  - [Boas Práticas](#boas-práticas-8)
  - [Exemplos Completos](#exemplos-completos-10)
    - [Manipulação de Strings](#manipulação-de-strings)
    - [Cálculos Matemáticos](#cálculos-matemáticos)
    - [Gerenciamento de Memória](#gerenciamento-de-memória-2)
    - [Chamada Externa](#chamada-externa)
  - [Estatísticas](#estatísticas-11)
- [Condicionais - Português Puro](#condicionais---português-puro)
  - [Visão Geral](#visão-geral-17)
  - [Características dos Condicionais](#características-dos-condicionais)
    - [Capacidades](#capacidades-1)
    - [Restrições](#restrições-1)
  - [Sintaxe](#sintaxe-26)
    - [Estrutura Básica](#estrutura-básica)
    - [Componentes](#componentes)
  - [Expressão Condicional](#expressão-condicional)
    - [O que Pode Ser Usado](#o-que-pode-ser-usado)
    - [Verbos Comuns](#verbos-comuns)
  - [Bloco de Instruções](#bloco-de-instruções)
    - [Separadores](#separadores)
    - [Estrutura](#estrutura)
  - [Exemplos Básicos](#exemplos-básicos-1)
    - [1. Condicional Simples (Uma Instrução)](#1-condicional-simples-uma-instrução)
    - [2. Condicional com Múltiplas Instruções](#2-condicional-com-múltiplas-instruções)
    - [3. Condicional com Negação](#3-condicional-com-negação)
    - [4. Condicional com Comparação](#4-condicional-com-comparação)
    - [5. Condicional com Estado](#5-condicional-com-estado)
  - [Declaração de Variáveis na Expressão](#declaração-de-variáveis-na-expressão)
  - [Condicionais em Laços](#condicionais-em-laços)
  - [Aninhamento NÃO É Permitido](#aninhamento-não-é-permitido)
    - [❌ ERRADO - Condicionais Aninhados](#-errado---condicionais-aninhados)
    - [✅ CORRETO - Use Múltiplas Condições](#-correto---use-múltiplas-condições)
    - [✅ CORRETO - Use Rotinas Auxiliares](#-correto---use-rotinas-auxiliares)
  - [Exemplos Avançados](#exemplos-avançados)
    - [6. Condicional com Chamada de Rotina](#6-condicional-com-chamada-de-rotina)
    - [7. Condicional com Múltiplas Ações](#7-condicional-com-múltiplas-ações)
    - [8. Condicional com Validação](#8-condicional-com-validação)
    - [9. Condicional com Comparação de Strings](#9-condicional-com-comparação-de-strings)
    - [10. Condicional com Verificação de Ponteiro](#10-condicional-com-verificação-de-ponteiro)
  - [Padrões Comuns](#padrões-comuns-1)
    - [Padrão 1: Validação e Retorno](#padrão-1-validação-e-retorno)
    - [Padrão 2: Validação com Mensagem](#padrão-2-validação-com-mensagem)
    - [Padrão 3: Processamento Condicional](#padrão-3-processamento-condicional)
    - [Padrão 4: Flag Setting](#padrão-4-flag-setting)
    - [Padrão 5: Saída de Laço](#padrão-5-saída-de-laço)
  - [Verbos e Funções Deliberativas](#verbos-e-funções-deliberativas)
    - [Funções Comuns](#funções-comuns)
  - [Observações Importantes](#observações-importantes-19)
  - [Boas Práticas](#boas-práticas-9)
  - [Erros Comuns](#erros-comuns-4)
    - [❌ Esquecer Separadores](#-esquecer-separadores)
    - [❌ Vírgula Errada](#-vírgula-errada)
    - [❌ Tentar Aninhar](#-tentar-aninhar)
    - [❌ Expressão Não-Booleana](#-expressão-não-booleana)
    - [✅ Soluções Corretas](#-soluções-corretas)
  - [Exemplos de Uso Prático](#exemplos-de-uso-prático)
    - [Validação de Entrada](#validação-de-entrada-1)
    - [Controle de Fluxo em Laço](#controle-de-fluxo-em-laço)
    - [Verificação de Estado](#verificação-de-estado-2)
    - [Processamento Condicional](#processamento-condicional)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-5)
  - [Estatísticas](#estatísticas-12)
- [Laços - Português Puro](#laços---português-puro)
  - [Visão Geral](#visão-geral-18)
  - [Características dos Laços](#características-dos-laços)
    - [Capacidades](#capacidades-2)
    - [Restrições](#restrições-2)
  - [Palavras-Chave](#palavras-chave)
    - [1. `Itere` - Início do Laço](#1-itere---início-do-laço)
    - [2. `Reitere` - Volta ao Início](#2-reitere---volta-ao-início)
    - [3. `Pare` - Sai do Laço](#3-pare---sai-do-laço)
    - [4. `Retorne` - Sai da Rotina](#4-retorne---sai-da-rotina)
  - [Sintaxe Completa](#sintaxe-completa-1)
    - [Estrutura Básica](#estrutura-básica-1)
    - [Estrutura com Omissão de `Itere`](#estrutura-com-omissão-de-itere)
  - [Exemplos Básicos](#exemplos-básicos-2)
    - [1. Laço Simples com Contador](#1-laço-simples-com-contador)
    - [2. Laço com `Itere` Omitido](#2-laço-com-itere-omitido)
    - [3. Laço com `Reitere` (Continue)](#3-laço-com-reitere-continue)
    - [4. Laço com `Retorne`](#4-laço-com-retorne)
  - [Exemplos Avançados](#exemplos-avançados-1)
    - [5. Laço com Múltiplas Condições de Saída](#5-laço-com-múltiplas-condições-de-saída)
    - [6. Laço com Variável Local](#6-laço-com-variável-local)
    - [7. Laço Processando String Caractere por Caractere](#7-laço-processando-string-caractere-por-caractere)
    - [8. Laço Processando Lista](#8-laço-processando-lista)
    - [9. Laço com Chamada de Rotina](#9-laço-com-chamada-de-rotina)
    - [10. Laço com Validação](#10-laço-com-validação)
  - [Escopo de Variáveis em Laços](#escopo-de-variáveis-em-laços)
    - [Variáveis Persistem Após o Laço](#variáveis-persistem-após-o-laço)
    - [Declaração em Expressão Condicional](#declaração-em-expressão-condicional)
  - [Padrões Comuns](#padrões-comuns-2)
    - [Padrão 1: Contador Simples](#padrão-1-contador-simples)
    - [Padrão 2: Processamento de Lista](#padrão-2-processamento-de-lista)
    - [Padrão 3: Leitura até Condição](#padrão-3-leitura-até-condição)
    - [Padrão 4: Loop Infinito com Saída Condicional](#padrão-4-loop-infinito-com-saída-condicional)
    - [Padrão 5: Percorrendo String](#padrão-5-percorrendo-string)
  - [Comparação com Outras Linguagens](#comparação-com-outras-linguagens-6)
  - [Aninhamento NÃO É Permitido](#aninhamento-não-é-permitido-1)
    - [❌ ERRADO - Laços Aninhados](#-errado---laços-aninhados)
    - [✅ CORRETO - Use Rotinas Auxiliares](#-correto---use-rotinas-auxiliares-1)
  - [Observações Importantes](#observações-importantes-20)
  - [Boas Práticas](#boas-práticas-10)
  - [Erros Comuns](#erros-comuns-5)
    - [❌ Esquecer `Reitere`](#-esquecer-reitere)
    - [❌ Laço Infinito Sem Saída](#-laço-infinito-sem-saída)
    - [❌ Tentar Aninhar Laços](#-tentar-aninhar-laços)
    - [✅ Soluções Corretas](#-soluções-corretas-1)
  - [Exemplos de Uso Prático](#exemplos-de-uso-prático-1)
    - [Processamento de Arquivo](#processamento-de-arquivo)
    - [Loop de Eventos](#loop-de-eventos)
    - [Busca em Lista](#busca-em-lista)
    - [Validação de Entrada](#validação-de-entrada-2)
  - [Estatísticas](#estatísticas-13)
- [Funções - Português Puro](#funções---português-puro)
  - [Visão Geral](#visão-geral-19)
  - [Características das Funções](#características-das-funções)
    - [Capacidades](#capacidades-3)
    - [Restrições](#restrições-3)
  - [Sintaxe](#sintaxe-27)
    - [Declaração Básica](#declaração-básica)
    - [Estrutura](#estrutura-1)
  - [Parâmetros](#parâmetros)
    - [Exemplos de Parâmetros](#exemplos-de-parâmetros)
  - [Sobrecarga de Métodos (Nomes Alternativos)](#sobrecarga-de-métodos-nomes-alternativos)
  - [Retorno Booleano](#retorno-booleano)
    - [Comandos de Retorno](#comandos-de-retorno)
    - [Regras](#regras-1)
    - [Exemplos de Retorno](#exemplos-de-retorno)
  - [Chamando Funções](#chamando-funções)
    - [Uso em Condicionais](#uso-em-condicionais)
    - [Sintaxe de Chamada](#sintaxe-de-chamada)
  - [Exemplos Completos](#exemplos-completos-11)
    - [1. Função Simples (Sem Parâmetros)](#1-função-simples-sem-parâmetros)
    - [2. Função com Comparação](#2-função-com-comparação)
    - [3. Função com Proteção de Parâmetros](#3-função-com-proteção-de-parâmetros)
    - [4. Função com Chamada Externa (API)](#4-função-com-chamada-externa-api)
    - [5. Função com Sobrecarga](#5-função-com-sobrecarga)
    - [6. Função com Laço](#6-função-com-laço)
    - [7. Função com Múltiplos Parâmetros](#7-função-com-múltiplos-parâmetros)
    - [8. Função Complexa com Cálculos](#8-função-complexa-com-cálculos)
  - [Funções Chamando Rotinas](#funções-chamando-rotinas)
  - [Funções Chamando Funções](#funções-chamando-funções)
  - [Comando `Preserve` em Funções](#comando-preserve-em-funções)
  - [Instruções de Máquina em Funções](#instruções-de-máquina-em-funções)
  - [Observações Importantes](#observações-importantes-21)
  - [Comparação: Função vs Rotina](#comparação-função-vs-rotina)
  - [Exemplos de Uso Prático](#exemplos-de-uso-prático-2)
    - [Validação de Entrada](#validação-de-entrada-3)
    - [Verificação de Estado](#verificação-de-estado-3)
    - [Controle de Fluxo](#controle-de-fluxo-2)
  - [Boas Práticas](#boas-práticas-11)
  - [Estatísticas](#estatísticas-14)
- [Rotinas - Português Puro](#rotinas---português-puro)
  - [Visão Geral](#visão-geral-20)
  - [Características das Rotinas](#características-das-rotinas)
    - [Capacidades](#capacidades-4)
    - [Restrições](#restrições-4)
  - [Sintaxe](#sintaxe-28)
    - [Declaração Básica](#declaração-básica-1)
    - [Estrutura](#estrutura-2)
  - [Parâmetros](#parâmetros-1)
    - [Exemplos de Parâmetros](#exemplos-de-parâmetros-1)
  - [Sobrecarga de Métodos (Nomes Alternativos)](#sobrecarga-de-métodos-nomes-alternativos-1)
  - [Chamando Rotinas](#chamando-rotinas)
    - [Declaração vs Chamada](#declaração-vs-chamada)
    - [Exemplos de Chamadas](#exemplos-de-chamadas)
  - [Preposições e Conjunções](#preposições-e-conjunções)
    - [Preposições Comuns](#preposições-comuns)
    - [Conjunções Comuns](#conjunções-comuns)
    - [Sinônimos de Preposições](#sinônimos-de-preposições)
  - [Contrações](#contrações-2)
  - [Comando `Retorne`](#comando-retorne)
  - [Comando `Preserve`](#comando-preserve)
    - [Palavra-chave `original`](#palavra-chave-original)
  - [Exemplos Completos](#exemplos-completos-12)
    - [1. Rotina Simples (Sem Parâmetros)](#1-rotina-simples-sem-parâmetros)
    - [2. Rotina com Um Parâmetro](#2-rotina-com-um-parâmetro)
    - [3. Rotina com Dois Parâmetros](#3-rotina-com-dois-parâmetros)
    - [4. Rotina com Sobrecarga](#4-rotina-com-sobrecarga)
    - [5. Rotina com Múltiplos Parâmetros](#5-rotina-com-múltiplos-parâmetros)
    - [6. Rotina com Laço](#6-rotina-com-laço)
    - [7. Rotina com Condicional](#7-rotina-com-condicional)
    - [8. Rotina com Chamada Externa (API)](#8-rotina-com-chamada-externa-api)
    - [9. Rotina com `Preserve` e `original`](#9-rotina-com-preserve-e-original)
    - [10. Rotina com Instruções de Máquina](#10-rotina-com-instruções-de-máquina)
  - [Rotinas Chamando Rotinas](#rotinas-chamando-rotinas)
  - [Rotinas Chamando Funções](#rotinas-chamando-funções)
  - [Variáveis Locais em Rotinas](#variáveis-locais-em-rotinas)
  - [Rotina Principal (`Main`)](#rotina-principal-main)
  - [Callbacks](#callbacks)
    - [Rotinas Compatíveis com Windows](#rotinas-compatíveis-com-windows)
  - [Observações Importantes](#observações-importantes-22)
  - [Comparação: Rotina vs Função](#comparação-rotina-vs-função)
  - [Exemplos de Uso Prático](#exemplos-de-uso-prático-3)
    - [Manipulação de Strings](#manipulação-de-strings-1)
    - [Operações Matemáticas](#operações-matemáticas)
    - [Manipulação de Estruturas](#manipulação-de-estruturas)
    - [Gerenciamento de Memória](#gerenciamento-de-memória-3)
  - [Boas Práticas](#boas-práticas-12)
  - [Padrões Comuns](#padrões-comuns-3)
    - [Padrão de Atribuição](#padrão-de-atribuição)
    - [Padrão de Adição](#padrão-de-adição)
    - [Padrão de Conversão](#padrão-de-conversão)
    - [Padrão de Criação](#padrão-de-criação)
    - [Padrão de Destruição](#padrão-de-destruição)
  - [Estatísticas](#estatísticas-15)
- [Callbacks - Português Puro](#callbacks---português-puro)
  - [Visão Geral](#visão-geral-21)
  - [Função dos Callbacks](#função-dos-callbacks)
    - [Uso Principal](#uso-principal-1)
  - [Sintaxe](#sintaxe-29)
    - [1. Declarar Rotina Compatível](#1-declarar-rotina-compatível)
    - [2. Obter Ponteiro para a Rotina](#2-obter-ponteiro-para-a-rotina)
    - [3. Passar para API Externa](#3-passar-para-api-externa)
  - [Modificador `compativelmente`](#modificador-compativelmente)
    - [Função](#função-11)
    - [Sintaxe](#sintaxe-30)
    - [Por Que É Necessário?](#por-que-é-necessário)
  - [Exemplos Práticos](#exemplos-práticos-5)
    - [1. Callback de Enumeração de Janelas](#1-callback-de-enumeração-de-janelas)
    - [2. Callback de Procedimento de Janela (Window Procedure)](#2-callback-de-procedimento-de-janela-window-procedure)
    - [3. Callback de Timer](#3-callback-de-timer)
    - [4. Callback de Enumeração de Arquivos](#4-callback-de-enumeração-de-arquivos)
  - [Comando `Aponte`](#comando-aponte)
    - [Sintaxe](#sintaxe-31)
    - [Função](#função-12)
    - [Exemplos](#exemplos-21)
  - [Estrutura Típica de Callback](#estrutura-típica-de-callback)
    - [Padrão Geral](#padrão-geral)
  - [Convenções de Chamada](#convenções-de-chamada)
    - [`stdcall` (Windows)](#stdcall-windows)
    - [`cdecl` (Padrão Português Puro)](#cdecl-padrão-português-puro)
  - [Parâmetros de Callbacks](#parâmetros-de-callbacks)
    - [Acesso aos Parâmetros](#acesso-aos-parâmetros)
    - [Exemplo](#exemplo-1)
  - [Valores de Retorno](#valores-de-retorno)
    - [Retornar Valor Inteiro](#retornar-valor-inteiro)
  - [APIs Comuns que Usam Callbacks](#apis-comuns-que-usam-callbacks)
    - [Enumeração](#enumeração)
    - [Hooks](#hooks)
    - [Timers](#timers)
    - [Threads](#threads)
  - [Observações Importantes](#observações-importantes-23)
  - [Boas Práticas](#boas-práticas-13)
  - [Exemplos Completos](#exemplos-completos-13)
    - [Aplicação com Janela](#aplicação-com-janela)
  - [Antipadrões (Evitar)](#antipadrões-evitar-2)
    - [❌ Esquecer `compativelmente`](#-esquecer-compativelmente)
    - [❌ Não Retornar Valor](#-não-retornar-valor)
    - [❌ Acessar Parâmetros Incorretamente](#-acessar-parâmetros-incorretamente)
  - [Estatísticas](#estatísticas-16)
  - [Resumo](#resumo-3)
    - [Declaração](#declaração)
    - [Obter Ponteiro](#obter-ponteiro)
    - [Usar em API](#usar-em-api)
    - [Recomendação Geral](#recomendação-geral-2)
- [Processe — Chamadas Externas (API Windows)](#processe--chamadas-externas-api-windows)
  - [Visão Geral](#visão-geral-22)
  - [1. Chamada Externa (API Windows)](#1-chamada-externa-api-windows)
    - [Início](#início-2)
    - [Obrigatório](#obrigatório-2)
    - [Opcional (definidos pela API, dependem da implementação da dll e da função)](#opcional-definidos-pela-api-dependem-da-implementação-da-dll-e-da-função)
    - [Fim](#fim)
    - [Componentes](#componentes-1)
  - [2. Tipos de Chamada](#2-tipos-de-chamada)
    - [Chamada Direta (Com Aspas)](#chamada-direta-com-aspas)
    - [Chamada Indireta (Sem Aspas)](#chamada-indireta-sem-aspas)
  - [3. Exemplos](#3-exemplos)
    - [Exemplo simples - sem argumentos](#exemplo-simples---sem-argumentos)
    - [Exemplo com retorno](#exemplo-com-retorno)
    - [Exemplo com múltiplos argumentos](#exemplo-com-múltiplos-argumentos)
    - [Exemplo completo da biblioteca padrão](#exemplo-completo-da-biblioteca-padrão)
  - [4. Argumentos](#4-argumentos)
  - [5. Retorno](#5-retorno)
  - [6. Tratamento de Erros](#6-tratamento-de-erros)
    - [Verificação Pós-Chamada](#verificação-pós-chamada)
    - [GetLastError](#getlasterror)
  - [Observações Importantes](#observações-importantes-24)
  - [Boas Práticas](#boas-práticas-14)
  - [DLLs Comuns](#dlls-comuns)
- [Instruções de Máquina](#instruções-de-máquina)
  - [Visão Geral](#visão-geral-23)
  - [Sintaxe](#sintaxe-32)
    - [Básica](#básica)
    - [Com Comentário](#com-comentário-1)
  - [Características](#características-6)
  - [Exemplos Básicos](#exemplos-básicos-3)
    - [Zerar Ponteiro](#zerar-ponteiro)
    - [Comparação de Bytes](#comparação-de-bytes)
  - [Uso em Rotinas](#uso-em-rotinas)
    - [Exemplo: Esvaziar Ponteiro](#exemplo-esvaziar-ponteiro)
  - [Uso em Funções](#uso-em-funções)
    - [Exemplo: Comparação de Bytes](#exemplo-comparação-de-bytes)
  - [Uso em Callbacks](#uso-em-callbacks)
    - [Exemplo: Window Procedure](#exemplo-window-procedure)
    - [Exemplo: Retorno de Valores](#exemplo-retorno-de-valores)
  - [Acesso a Parâmetros (Convencão stdcall)](#acesso-a-parâmetros-convencão-stdcall)
    - [Exemplos de Acesso](#exemplos-de-acesso)
  - [Instruções Comuns (Referência Rápida)](#instruções-comuns-referência-rápida)
  - [Observações Importantes](#observações-importantes-25)
  - [Boas Práticas](#boas-práticas-15)
  - [Erros Comuns](#erros-comuns-6)
    - [❌ Offset Errado](#-offset-errado)
    - [❌ Esquecer `ret`](#-esquecer-ret)
    - [❌ Convenção Errada](#-convenção-errada)
    - [❌ Não Preservar Registradores](#-não-preservar-registradores)
  - [Exemplos Completos](#exemplos-completos-14)
    - [Comparação de Frações (Assembly Otimizado)](#comparação-de-frações-assembly-otimizado)
    - [Manipulação de Bits](#manipulação-de-bits)
  - [Estatísticas](#estatísticas-17)
- [Subtextos e Percorredores](#subtextos-e-percorredores)
  - [Visão Geral](#visão-geral-24)
  - [Comando `Lance`](#comando-lance)
    - [Sintaxe Básica](#sintaxe-básica-7)
    - [Função](#função-13)
  - [Estrutura do Subtexto](#estrutura-do-subtexto)
  - [Iteração sobre Strings](#iteração-sobre-strings)
    - [Padrão Básico](#padrão-básico)
    - [Exemplo Completo: Contar Vogais](#exemplo-completo-contar-vogais)
  - [Acesso a Caracteres](#acesso-a-caracteres)
    - [Obter Valor do Caractere](#obter-valor-do-caractere)
    - [Comparar Caractere](#comparar-caractere)
    - [Verificar Fim da String](#verificar-fim-da-string)
  - [Exemplos Práticos](#exemplos-práticos-6)
    - [1. Inverter String](#1-inverter-string)
    - [2. Processar Linha por Linha](#2-processar-linha-por-linha)
    - [3. Buscar Substring](#3-buscar-substring)
    - [4. Remover Caracteres](#4-remover-caracteres)
  - [Percorredor vs Subtexto](#percorredor-vs-subtexto)
  - [Características Importantes](#características-importantes-1)
  - [Variáveis Auxiliares Comuns](#variáveis-auxiliares-comuns)
  - [Observações Importantes](#observações-importantes-26)
  - [Boas Práticas](#boas-práticas-16)
  - [Erros Comuns](#erros-comuns-7)
    - [❌ Esquecer de Avançar](#-esquecer-de-avançar)
    - [❌ Não Verificar Fim](#-não-verificar-fim)
    - [❌ Modificar String Original Durante Iteração](#-modificar-string-original-durante-iteração)
  - [Exemplos Avançados](#exemplos-avançados-2)
    - [Parser Simples](#parser-simples)
    - [Tokenizador](#tokenizador)
  - [Estatísticas](#estatísticas-18)
- [Índice de Elementos Léxicos - Português Puro](#índice-de-elementos-léxicos---português-puro)
  - [Controle de Progresso das Definições](#controle-de-progresso-das-definições)
  - [✅ Já Documentado em Regras Estruturadas](#-já-documentado-em-regras-estruturadas)
  - [📝 Pendente de Documentação Estruturada](#-pendente-de-documentação-estruturada)
    - [1. Detalhes de Implementação e Compilador](#1-detalhes-de-implementação-e-compilador)
    - [2. Elementos Específicos](#2-elementos-específicos)
  - [🔄 Divergências Identificadas](#-divergências-identificadas)
    - [✅ RESOLVIDO: Pronomes Demonstrativos como Artigos Indefinidos](#-resolvido-pronomes-demonstrativos-como-artigos-indefinidos)
  - [📊 Estatísticas de Progresso](#-estatísticas-de-progresso)
    - [Arquivos de Documentação Criados](#arquivos-de-documentação-criados)
  - [🎯 Próximos Passos Sugeridos](#-próximos-passos-sugeridos)
    - [Alta Prioridade](#alta-prioridade)
    - [Média Prioridade](#média-prioridade)
    - [Baixa Prioridade](#baixa-prioridade)
# Visão Geral - Português Puro

> **Visão Geral da Linguagem**
> 
> Português Puro é uma linguagem de programação de alto nível, projetada para permitir a criação de programas utilizando um alto nível de abstração, com sintaxe em português natural (pt-BR).

---

## Características Fundamentais

| Característica | Descrição |
|----------------|-----------|
| **Paradigma** | Estruturada, Imperativa |
| **Tipagem** | Estática e forte |
| **Inferência de Tipos** | Baseada no nome da variável |
| **Conversão de Tipos** | Explícita |
| **Sensibilidade a Caixa** | **Não** (case-insensitive) |
| **Acentos** | Ignorados |
| **Espaços/Quebras de Linha** | Livres (identação opcional) |
| **Tipos Primitivos** | `byte`, `estrutura` |
| **Sistema Operacional** | Windows (API Win32) |
| **Arquitetura** | x86 (32 bits) |
| **Codepage** | Windows 1252 (ISO-8859-1) |

---

## Estrutura de um Programa

Todo programa em Português Puro deve conter:

1. **Rotina Principal** (obrigatória):
   ```
   Rotina para que se execute o programa:
     \ Seu código aqui
   ```

2. **Biblioteca Padrão**: O arquivo `Biblioteca padrão.pop` deve estar na mesma pasta do programa.

3. **Extensão de Arquivo**: `.pop`

---

## Convenções de Escrita

- **Nomes descritivos**: Português Puro incentiva nomes longos e descritivos em linguagem natural
- **Case-insensitive**: `Variavel`, `variavel`, `VARIAVEL` são equivalentes
- **Indentação livre**: Use para legibilidade, não é obrigatória

---

## Índice da Documentação

A documentação de regras e sintaxe vive em `Documentação/Regras/`. A ordem pedagógica dos capítulos está em [../Índice.md](../Índice.md); esta tabela agrupa os assuntos por arquivo.

| Assunto | Arquivo |
|---------|---------|
| Elementos léxicos e progresso das definições | [Índice de Elementos Léxicos.md](<Índice%20de%20Elementos%20Léxicos.md>) |
| Comentários e observações | [Comentários.md](Comentários.md) |
| Caracteres permitidos, limitados, reservados | [Símbolos.md](Símbolos.md) |
| Artigos definidos e indefinidos | [Artigos.md](Artigos.md) |
| Pronomes demonstrativos, possessivos, relativos | [Pronomes.md](Pronomes.md) |
| Preposições e contrações | [Preposições.md](Preposições.md) |
| Conjunções lógicas | [Conjunções.md](Conjunções.md) |
| Advérbios | [Advérbios.md](Advérbios.md) |
| Verbos | [Verbos.md](Verbos.md) |
| Palavras-chave | [Palavras-Chave.md](Palavras-Chave.md) |
| Qualificadores `(ref)` | [Qualificadores.md](Qualificadores.md) |
| Tipos, estruturas, listas, ponteiros, escalares | [Tipos.md](Tipos.md) |
| Estruturas, uniões e campos sobrepostos | [Estruturas e Uniões.md](<Estruturas%20e%20Uniões.md>) |
| Listas duplamente encadeadas e manipulação | [Listas.md](Listas.md) |
| Conversão de tipos (`Converta`, `tal como`/`tal qual`) | [Conversão de Tipos.md](<Conversão%20de%20Tipos.md>) |
| Gerenciamento de memória (`Aloque`, `Desaloque`, `Preserve`) | [Gerenciamento de Memória.md](<Gerenciamento%20de%20Memória.md>) |
| Variáveis globais | [Variáveis Globais.md](<Variáveis%20Globais.md>) |
| Variáveis locais | [Variáveis Locais.md](<Variáveis%20Locais.md>) |
| Possessivos e acesso a membros | [Possessivos.md](Possessivos.md) |
| Campos calculados | [Campos Calculados.md](<Campos%20Calculados.md>) |
| Valores literais | [Valores Literais.md](<Valores%20Literais.md>) |
| Strings literais e escapes | [Strings Literais.md](<Strings%20Literais.md>) |
| Subtextos e percorredores | [Subtextos e Percorredores.md](<Subtextos%20e%20Percorredores.md>) |
| Operadores aritméticos, de comparação, concatenação e lógicos | [Operadores.md](Operadores.md) |
| Expressões e precedência | [Expressões.md](Expressões.md) |
| Instruções (atribuição, E/S, memória) | [Instruções.md](Instruções.md) |
| Condicionais (`Se`, `Quando`) | [Condicionais.md](Condicionais.md) |
| Laços (`Itere`, `Reitere`, `Pare`) | [Laços.md](Laços.md) |
| Rotinas | [Rotinas.md](Rotinas.md) |
| Funções | [Funções.md](Funções.md) |
| Callbacks | [Callbacks.md](Callbacks.md) |
| Chamadas externas a DLLs (`Processe`) | [Processe.md](Processe.md) |
| Instruções de máquina (`Decodifique`) | [Instruções de Máquina.md](<Instruções%20de%20Máquina.md>) |

---

## Compilação

```bash
# Linha de comando
compilador.exe caminho/do/projeto/

# Requisitos
- Arquivo .pop na pasta do projeto
- Biblioteca padrão.pop na mesma pasta
- Gera executável .exe
```

---

## Recursos Avançados

- **Trigonometria Racional**: Biblioteca padrão inclui operações trigonométricas exatas
- **Gráficos de Tartaruga**: Logo-style graphics
- **Interface Gráfica (GDI)**: Janelas, controles, desenho
- **Rede**: WinHTTP, Winsock
- **Criptografia**: API Crypto do Windows
- **PDF e E-mail**: Suporte nativo
- **Assembly Inline**: `Decodifique $HEX`
- **Gerenciamento Manual de Memória**: Ponteiros, alocação/desalocação

---

## Próximos Passos

Comece pela [seção de comentários](Comentários.md) ou vá direto para [variáveis globais](<Variáveis Globais.md>) para entender a estrutura básica de declarações.

---

# Comentários - Português Puro

## Visão Geral

Comentários em Português Puro são **anotações** que servem para:

1. **Documentar** código com explicações
2. **Desabilitar** temporariamente trechos de código
3. **Adicionar** notas técnicas e referências
4. **Clarificar** lógica complexa

---

## Tipos de Comentários

### 1. Comentários
### 2. Observações

---

## 1. Comentários

### Sintaxe

Comentários usam **barra invertida** `\`:

```pop
\ Isto é um comentário
```

### Características

- **Delimitador de início**: `\` (uma barra invertida)
- **Escopo**: Da barra invertida até o **fim da linha**
- **Efeito**: Todo texto após `\` é ignorado pelo compilador
- **Uso**: Comentários longos, desabilitar código, notas técnicas
- **Estilo**: Usar `\\` (dupla) é comum para dar **mais destaque** ao comentário. A extensão de realce destaca mais comentários de duas barras.
- **Delimitador de fim**: `CRLF` (quebra de linha `CRLF`)

---

### Exemplos Básicos

```pop
\ Comentário no início da linha (uma barra)
Um número denominado contador.  \ Comentário no final da linha

\\ Comentário com mais destaque (duas barras)
Rotina para que se processe dados:
  \ Inicializa variáveis
  Atribua 0 para o contador.
  Atribua "" para a string.
  
  \\ Processa cada item (destaque)
  Itere.
    \ Verifica condição de parada
    Se o contador for maior que 100, pare.
    Adicione 1 para o contador.
  Reitere.
```

---

### Desabilitando Código

```pop
Rotina para que se teste funcionalidade:
  Escreva "Teste ativo" no console.
  \\ Escreva "Teste desabilitado" no console.
  \\ Atribua 0 para o contador.
  \\ Pare.
```

---

### Comentários de Documentação

```pop
\\ Documentação: https://learn.microsoft.com/pt-br/windows/win32/debug/pe-format
Um Cabeçalho DOS é uma estrutura com
  Uma word denominada Signature,
  Uma word denominada NumberOfBytesOnLastPage.

\\ Consulte https://en.wikipedia.org/wiki/Thunk
Um endereço thunk é um endereço.
```

---

### Comentários Multilinha

Para comentários que ocupam várias linhas, use `\` em cada linha:

```pop
\ Este é um comentário longo que explica
\ o funcionamento detalhado desta rotina.
\ Cada linha precisa começar com \.
Rotina para que se calcule resultado:
  \\ Implementação importante (com destaque)
```

---

## 2. Observações

### Sintaxe

Observações usam **colchetes** `[]`:

```pop
Um número [comentário em linha] denominado contador.
```

### Características

- **Delimitadores**: `[` e `]`
- **Escopo**: Entre os colchetes
- **Efeito**: Ignorado pelo compilador (apenas documentação)
- **Uso**: Anotações curtas, aliases, notas técnicas
- **Posição**: Após tipos ou nomes de campos

---

### Exemplos em Definições de Tipos

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado ImageBase,
  Um número denominado MemoryAlignment, [SectionAlignment]
  Um número denominado FileAlignment,
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion]
  Uma word denominada OS_MinorVersion. [MinorOperatingSystemVersion]
```

---

### Exemplos em Campos de Estrutura

```pop
Um fragmento é uma lista com
  Uma etiqueta,
  Uma variável (referência) [Demanda Indireta, redirecionamento],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Um número [increment],
  Um sinalizador [load eax], \\ SAL
  Um endereço.
```

---

### Exemplos em Variáveis Globais

```pop
\\ Aliases e siglas
O caractere SOH é um byte igual a 1 [SOH].
O caractere NULL é um byte igual a 0 [NULL].

\\ Notas técnicas
Uma coordenada é um número [em pixels].
Um ângulo é uma fração [em radianos].
```

---

### Combinando Comentários

É possível combinar Observações `[]` com comentários de linha `\\`:

```pop
Um Cabeçalho PE é uma estrutura com
  Um número denominado MemoryAlignment, [SectionAlignment] \\ Alinhamento de seção
  Um número denominado FileAlignment, [FileAlignment] \\ Alinhamento de arquivo
  Uma word denominada OS_MajorVersion, [MajorOperatingSystemVersion] \\ Versão do SO
  Um número denominado SizeOfImageInMemory, [SizeOfImage] \\ Tamanho em memória
  Um número denominado CheckSum. [Checksum] \\ Soma de verificação
```

---

## Diferença entre Comentários e Qualificadores

### Comentários `[]`

- **Função**: Documentação em linha
- **Efeito**: Sempre ignorados
- **Uso**: Aliases, notas, referências

```pop
Um número [em pixels] denominado largura.
```

### Referenciadores `()`

- **Função**: Marcar referências ou documentar
- **Efeito**: `(referência)` afeta compilação
- **Uso**: Ponteiros, documentação semântica

```pop
Um nó denominado próximo (referência).
Um número (unsigned) denominado contador.
```

---

## Validação de Observações

> **Nota**: No código-fonte do compilador, Observações `[]` são referidos como **"observações"**.

### Rotinas de Processamento

O compilador possui rotinas específicas para processar comentários:

#### 1. Ignorar Comentários

```pop
Rotina para que se mova um percorredor (ignorando os comentários):
  [Itere.]
    Avance o percorredor.
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor não for o retorno de carro, reitere.
```

#### 2. Ignorar Observações (Observações)

```pop
\\ Essa rotina é chamada quando o percorredor encontra um colchete esquerdo ou direito
Rotina para que se mova um percorredor (ignorando as observações):
  [Itere.]
    Se o segmento final deste percorredor estiver em branco, retorne.
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o retorno de carro, pare.
    
    \\ Balanceamento de colchetes aninhados
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o colchete esquerdo,
      Adicione 1 para uma contagem.
    
    \\ Um colchete dentro de colchete só é válido se tiver seu par oposto correspondente
    Se o conteúdo deste caractere inicial deste segmento final deste percorredor for o colchete direito,
      Subtraia 1 desde a contagem.
    
    Avance o percorredor.
    Se a contagem for 0, pare.
  Reitere.
```

---

### Validação e Códigos de Erro

```pop
Rotina para que se mova um percorredor retornando uma string de erro (validação de comentários de bloco):
  Se a quantidade de caracteres deste segmento inicial deste percorredor for menor do que 2,
    Atribua "Código de Erro #005. Observações devem terminar com um colchete direito ']'." para a string de erro;
    Retorne.
  Se o conteúdo deste caractere final deste segmento inicial deste percorredor não for o colchete direito,
    Atribua "Código de Erro #006. Observações precisam iniciar com um colchete esquerdo '['." para a string de erro;
    Retorne.
```

### Códigos de Erro

| Código   | Mensagem                                                  | Causa                   |
|----------|-----------------------------------------------------------|-------------------------|
| **#005** | Observações devem terminar com um colchete direito `]`    | Falta `]` de fechamento |
| **#006** | Observações precisam iniciar com um colchete esquerdo `[` | Falta `[` de abertura   |

---

### Regras de Balanceamento

1. **Todo `[` deve ter um `]` correspondente**
2. **Comentários devem estar completos** (não podem atravessar linhas)
3. **Suporte a colchetes aninhados**: O compilador implementa lógica de balanceamento para permitir `[texto [aninhado] aqui]`
4. **Parada em quebra de linha**: Observações não podem abranger múltiplas linhas


---

## Observações Importantes

1. **Comentários**: Usam `\` (uma barra invertida, ou `\\` para destaque)
2. **Observações**: Usam `[]` (colchetes), também chamados de **"observações"** no código-fonte
3. **Ignorados**: Ambos são completamente ignorados pelo compilador
4. **Balanceamento**: Colchetes devem estar balanceados
5. **Aninhamento**: Suportado através de lógica de balanceamento de colchetes
6. **Multilinha**: Use `\` em cada linha para comentários longos
7. **Observações não atravessam linhas**: Comentários `[]` param em quebra de linha
8. **Combinação**: Pode usar `\` e `[]` juntos
9. **Documentação**: Preferir comentários para URLs e referências
10. **Clareza**: Comentários devem agregar valor, não repetir código
11. **Manutenção**: Atualizar comentários quando código mudar

---
---

## Boas Práticas

1. **Use Comentários com Moderação**: Código claro é melhor que comentários
2. **Explique o "Porquê"**: Não o "O Quê" (código já mostra isso)
3. **Mantenha Atualizados**: Comentários desatualizados são piores que nenhum
4. **URLs e Referências**: Use comentários para links de documentação
5. **Desabilitar Código**: Use `\` temporariamente, depois remova
6. **Aliases**: Use `[]` para indicar nomes alternativos
7. **Notas Técnicas**: Use `[]` para unidades, limites, restrições
8. **Seja Conciso**: Comentários curtos e diretos
9. **Evite Redundância**: Não repita informação óbvia
10. **Consistência**: Use mesmo estilo em todo projeto

---

## Exemplos Práticos

### Documentação de Estrutura Complexa

```pop
\\ Formato Portable Executable (PE) baseado em COFF
\\ Referência: https://learn.microsoft.com/pt-br/windows/win32/debug/pe-format
Um Cabeçalho PE é uma estrutura com
  Um número denominado Signature,
  Uma word denominada MachineType,
  Uma word denominada NumberOfSections,
  Um número denominado TimeStamp,
  
  \\ PARTE OPCIONAL - _IMAGE_OPTIONAL_HEADER64
  Uma word denominada MagicNumber,
  Um byte denominado MajorLinkerVersion,
  Um byte denominado MinorLinkerVersion,
  Um número denominado SizeOfCodeInFile, \\ SizeOfCode
  Um número denominado AddressOfEntryPointInMemory, \\ AddressOfEntryPoint
  Um número denominado ImageBase.
```

---

### Comentários em Rotinas

```pop
Rotina para que se compile um endereço da pasta:
  Compile o endereço da pasta (inicialização). \\ #001
  Compile o endereço da pasta (arquivos de código fonte). \\ #002
  Compile o endereço da pasta (análise dos arquivos fornecidos). \\ #003
  Compile o endereço da pasta (identificação dos tipos das variáveis). \\ #004
  Compile o endereço da pasta (identificação de variáveis globais). \\ #005
  Compile o endereço da pasta (cabeçalhos de rotinas). \\ #006
  Compile o endereço da pasta (cálculo de tamanhos e deslocamentos). \\ #007
  Compile o endereço da pasta (transmutação). \\ #014
  Compile o endereço da pasta (vinculação). \\ #015
  Compile o endereço da pasta (etapa final). \\ #016
```

---

### Comentários Explicativos

```pop
\\ Strings são implementadas como uma struct que contém 2 membros:
\\ 1. O endereço do byte inicial
\\ 2. O endereço do byte final
\\ Desta forma é possível trocar o primeiro e o último bytes de uma string

\\ Parâmetros são passados por referência

\\ Os registradores EBP (ponteiro base) e ESP (ponteiro de pilha) 
\\ são usados para manipular a PILHA que é uma área da memória
\\ que você pode imaginar como uma pilha de pratos
```

---

### Código Desabilitado

```pop
Rotina para que se obtenha string desde argumentos:
  \\ Versão antiga - removida
  \\ Processe "kernel32.dll" "GetCommandLineW"
  \\   Retornando um endereço do caractere.
  
  \\ Nova versão - usando ANSI
  Processe "kernel32.dll" "GetCommandLineA"
    Retornando um endereço do caractere.
```

---

### Aliases e Notas Técnicas

```pop
\\ Caracteres de controle ASCII
O caractere SOH é um byte igual a 1 [SOH].
O caractere STX é um byte igual a 2 [STX].
O caractere ETX é um byte igual a 3 [ETX].
O caractere NULL é um byte igual a 0 [NULL].

\\ Constantes do sistema
A image base é um endereço igual a 4194304 [$00400000].
O tamanho máximo do caminho é um número igual a 260 [MAX_PATH].
```

---

### Fragmentos com Anotações

```pop
\\ O compilador gera 3 listas durante o processo de compilação:
\\ 1. Uma lista de tipos,
\\ 2. Uma lista de variáveis, e
\\ 3. Uma lista de rotinas
\\ Cada rotina consiste em um conjunto de instruções lógicas.
\\ Essas instruções lógicas são chamadas de "fragmentos"
\\ O compilador trabalha com apenas 22 tipos de instruções lógicas:

Um fragmento é uma lista com
  Uma etiqueta,
  Uma variável (referência) [Demanda Indireta, redirecionamento, increment],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Uma função (referência) [Demanda Externa],
  Um número [increment],
  Um sinalizador [load eax], \\ SAL
  Um endereço,
  Um texto hexadecimal denominado código.
```

---

## Diferenças com Outras Linguagens

| Aspecto        | Português Puro     | C/C++        | Python        | Java         |
|----------------|--------------------|--------------|---------------|--------------|
| Linha única    | `\`                | `//`         | `#`           | `//`         |
| Multilinha     | `\` em cada linha | `/* ... */`  | `""" ... """` | `/* ... */`  |
| em linha       | `[...]`            | Não tem      | Não tem       | Não tem      |
| Documentação   | `\\` + `[]`        | `/** ... */` | `""" ... """` | `/** ... */` |
| Balanceamento  | Sim (colchetes)    | Sim (bloco)  | Não           | Sim (bloco)  |
| Case-sensitive | Não                | Sim          | Sim           | Sim          |

---

## Antipadrões (Evitar)

### ❌ Comentários Redundantes

```pop
\\ RUIM: Óbvio demais
Atribua 0 para o contador.  \\ Atribui 0 para o contador

\\ BOM: Explica o porquê
Atribua 0 para o contador.  \\ Reinicia contagem para nova iteração
```

---

### ❌ Comentários Desatualizados

```pop
\\ RUIM: Comentário não reflete código
\\ Adiciona 10 ao contador
Adicione 1 para o contador.

\\ BOM: Comentário correto
\\ Incrementa contador
Adicione 1 para o contador.
```

---

### ❌ Código Comentado Permanentemente

```pop
\\ RUIM: Código morto acumulado
Rotina para que se processe dados:
  \\ Atribua 0 para o contador.
  \\ Limpe a string.
  \\ Escreva "Debug" no console.
  Processe os dados.

\\ BOM: Código limpo
Rotina para que se processe dados:
  Processe os dados.
```

---

### ❌ Colchetes Não Balanceados

```pop
\\ RUIM: Falta fechar colchete
Um número [em pixels denominado largura.

\\ BOM: Balanceado
Um número [em pixels] denominado largura.
```

---

## Casos de Uso Comuns

### 1. Documentação de APIs Externas

```pop
\\ Consulte https://en.wikipedia.org/wiki/Thunk
\\ Thunks são as partes definitivas dos códigos em um sistema operacional
\\ que manipula as transições entre o código de 16 e 32 bits
Um endereço thunk é um endereço.
```

---

### 2. Explicação de Lógica Complexa

```pop
\\ Como é típico do Windows, a pilha cresce inversamente.
\\ Ou seja, o endereço do "topo" da pilha é sempre menor que o endereço da base.
\\ O registrador ESP sempre contém o endereço do "topo" da pilha.
\\ O registrador EBP contém o endereço da "base" da pilha da rotina atual.
```

---

### 3. Notas de Implementação

```pop
\\ Representação interna de um nome de rotina (moniker):
\\ • Não há artigos precedendo os tipos dos parâmetros
\\ • Os tipos dos parâmetros estão rodeados por colchetes
\\ • As preposições são expandidas para incluir seus sinônimos
Uma representação interna da rotina é uma string.
```

---

### 4. Referências de Campos

```pop
Um fragmento é uma lista com
  Uma variável (referência) [Demanda Indireta, redirecionamento, increment, load address],
  Uma segunda variável (referência) [load address],
  Uma rotina (referência) [Demanda Interna, rotina address],
  Uma função (referência) [Demanda Externa].
```

---

### 5. Aliases e Constantes

```pop
\\ Etiquetas de fragmentos
A etiqueta de interrupção é uma etiqueta igual a 1.
A etiqueta de demanda externa é uma etiqueta igual a 2.
A etiqueta de demanda indireta é uma etiqueta igual a 3.
A etiqueta de demanda interna é uma etiqueta igual a 4.
```

---

## Estatísticas

- **Tipos de comentários**: 2 (linha e em linha)
- **Delimitador de linha**: `\` (ou `\\` para destaque)
- **Delimitadores em linha**: `[` e `]`
- **Nome no código-fonte**: "Observações" (para Observações)
- **Efeito na compilação**: Nenhum (sempre ignorados)
- **Validação**: Balanceamento de colchetes (códigos de erro #005 e #006)
- **Aninhamento**: Suportado através de lógica de balanceamento
- **Multilinha**: `\` em cada linha (comentários sempre terminam na quebra de linha)
- **Uso mais comum**: Documentação de APIs e estruturas complexas

---

## Resumo

### Comentários `\`

- **Função**: Comentários longos, desabilitar código
- **Escopo**: Até o fim da linha
- **Uso**: Documentação, notas técnicas, URLs

### Observações `[]`

- **Função**: Anotações curtas, aliases
- **Escopo**: Entre colchetes
- **Uso**: Notas de campo, unidades, referências

### Recomendação Geral

Use comentários para explicar **por que** o código faz algo, não **o que** ele faz. Prefira código claro e autoexplicativo a comentários excessivos. Mantenha comentários atualizados e remova código comentado permanentemente.

---

# Caracteres
Em uma string literal, todos os caracteres abaixo são permitidos.

|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|   ‘ ’   |     32    |  U+0020   |
|    !    |     33    |  U+0021   |
|    "    |     34    |  U+0022   |
|    #    |     35    |  U+0023   |
|    $    |     36    |  U+0024   |
|    %    |     37    |  U+0025   |
|    &    |     38    |  U+0026   |
|    '    |     39    |  U+0027   |
|    (    |     40    |  U+0028   |
|    )    |     41    |  U+0029   |
|    *    |     42    |  U+002A   |
|    +    |     43    |  U+002B   |
|    ,    |     44    |  U+002C   |
|    -    |     45    |  U+002D   |
|    .    |     46    |  U+002E   |
|    /    |     47    |  U+002F   |
|    0    |     48    |  U+0030   |
|    1    |     49    |  U+0031   |
|    2    |     50    |  U+0032   |
|    3    |     51    |  U+0033   |
|    4    |     52    |  U+0034   |
|    5    |     53    |  U+0035   |
|    6    |     54    |  U+0036   |
|    7    |     55    |  U+0037   |
|    8    |     56    |  U+0038   |
|    9    |     57    |  U+0039   |
|    :    |     58    |  U+003A   |
|    ;    |     59    |  U+003B   |
|    <    |     60    |  U+003C   |
|    =    |     61    |  U+003D   |
|    >    |     62    |  U+003E   |
|    ?    |     63    |  U+003F   |
|    @    |     64    |  U+0040   |
|    A    |     65    |  U+0041   |
|    B    |     66    |  U+0042   |
|    C    |     67    |  U+0043   |
|    D    |     68    |  U+0044   |
|    E    |     69    |  U+0045   |
|    F    |     70    |  U+0046   |
|    G    |     71    |  U+0047   |
|    H    |     72    |  U+0048   |
|    I    |     73    |  U+0049   |
|    J    |     74    |  U+004A   |
|    K    |     75    |  U+004B   |
|    L    |     76    |  U+004C   |
|    M    |     77    |  U+004D   |
|    N    |     78    |  U+004E   |
|    O    |     79    |  U+004F   |
|    P    |     80    |  U+0050   |
|    Q    |     81    |  U+0051   |
|    R    |     82    |  U+0052   |
|    S    |     83    |  U+0053   |
|    T    |     84    |  U+0054   |
|    U    |     85    |  U+0055   |
|    V    |     86    |  U+0056   |
|    W    |     87    |  U+0057   |
|    X    |     88    |  U+0058   |
|    Y    |     89    |  U+0059   |
|    Z    |     90    |  U+005A   |
|    [    |     91    |  U+005B   |
|    \    |     92    |  U+005C   |
|    ]    |     93    |  U+005D   |
|    ^    |     94    |  U+005E   |
|    _    |     95    |  U+005F   |
|    `    |     96    |  U+0060   |
|    a    |     97    |  U+0061   |
|    b    |     98    |  U+0062   |
|    c    |     99    |  U+0063   |
|    d    |    100    |  U+0064   |
|    e    |    101    |  U+0065   |
|    f    |    102    |  U+0066   |
|    g    |    103    |  U+0067   |
|    h    |    104    |  U+0068   |
|    i    |    105    |  U+0069   |
|    j    |    106    |  U+006A   |
|    k    |    107    |  U+006B   |
|    l    |    108    |  U+006C   |
|    m    |    109    |  U+006D   |
|    n    |    110    |  U+006E   |
|    o    |    111    |  U+006F   |
|    p    |    112    |  U+0070   |
|    q    |    113    |  U+0071   |
|    r    |    114    |  U+0072   |
|    s    |    115    |  U+0073   |
|    t    |    116    |  U+0074   |
|    u    |    117    |  U+0075   |
|    v    |    118    |  U+0076   |
|    w    |    119    |  U+0077   |
|    x    |    120    |  U+0078   |
|    y    |    121    |  U+0079   |
|    z    |    122    |  U+007A   |
|    {    |    123    |  U+007B   |
|    |    |    124    |  U+007C   |
|    }    |    125    |  U+007D   |
|    ~    |    126    |  U+007E   |
|    €    |    128    |  U+20AC   |
|    ‚    |    130    |  U+201A   |
|    ƒ    |    131    |  U+0192   |
|    „    |    132    |  U+201E   |
|    …    |    133    |  U+2026   |
|    †    |    134    |  U+2020   |
|    ‡    |    135    |  U+2021   |
|    ˆ    |    136    |  U+02C6   |
|    ‰    |    137    |  U+2030   |
|    Š    |    138    |  U+0160   |
|    ‹    |    139    |  U+2039   |
|    Œ    |    140    |  U+0152   |
|    Ž    |    142    |  U+017D   |
|    ‘    |    145    |  U+2018   |
|    ’    |    146    |  U+2019   |
|    “    |    147    |  U+201C   |
|    ”    |    148    |  U+201D   |
|    •    |    149    |  U+2022   |
|    –    |    150    |  U+2013   |
|    —    |    151    |  U+2014   |
|    ˜    |    152    |  U+02DC   |
|    ™    |    153    |  U+2122   |
|    š    |    154    |  U+0161   |
|    ›    |    155    |  U+203A   |
|    œ    |    156    |  U+0153   |
|    ž    |    158    |  U+017E   |
|    Ÿ    |    159    |  U+0178   |
|    ¡    |    161    |  U+00A1   |
|    ¢    |    162    |  U+00A2   |
|    £    |    163    |  U+00A3   |
|    ¤    |    164    |  U+00A4   |
|    ¥    |    165    |  U+00A5   |
|    ¦    |    166    |  U+00A6   |
|    §    |    167    |  U+00A7   |
|    ¨    |    168    |  U+00A8   |
|    ©    |    169    |  U+00A9   |
|    ª    |    170    |  U+00AA   |
|    «    |    171    |  U+00AB   |
|    ¬    |    172    |  U+00AC   |
|    ­     |    173    |  U+00AD   |
|    ®    |    174    |  U+00AE   |
|    ¯    |    175    |  U+00AF   |
|    °    |    176    |  U+00B0   |
|    ±    |    177    |  U+00B1   |
|    ²    |    178    |  U+00B2   |
|    ³    |    179    |  U+00B3   |
|    ´    |    180    |  U+00B4   |
|    µ    |    181    |  U+00B5   |
|    ¶    |    182    |  U+00B6   |
|    ·    |    183    |  U+00B7   |
|    ¸    |    184    |  U+00B8   |
|    ¹    |    185    |  U+00B9   |
|    º    |    186    |  U+00BA   |
|    »    |    187    |  U+00BB   |
|    ¼    |    188    |  U+00BC   |
|    ½    |    189    |  U+00BD   |
|    ¾    |    190    |  U+00BE   |
|    ¿    |    191    |  U+00BF   |
|    À    |    192    |  U+00C0   |
|    Á    |    193    |  U+00C1   |
|    Â    |    194    |  U+00C2   |
|    Ã    |    195    |  U+00C3   |
|    Ä    |    196    |  U+00C4   |
|    Å    |    197    |  U+00C5   |
|    Æ    |    198    |  U+00C6   |
|    Ç    |    199    |  U+00C7   |
|    È    |    200    |  U+00C8   |
|    É    |    201    |  U+00C9   |
|    Ê    |    202    |  U+00CA   |
|    Ë    |    203    |  U+00CB   |
|    Ì    |    204    |  U+00CC   |
|    Í    |    205    |  U+00CD   |
|    Î    |    206    |  U+00CE   |
|    Ï    |    207    |  U+00CF   |
|    Ð    |    208    |  U+00D0   |
|    Ñ    |    209    |  U+00D1   |
|    Ò    |    210    |  U+00D2   |
|    Ó    |    211    |  U+00D3   |
|    Ô    |    212    |  U+00D4   |
|    Õ    |    213    |  U+00D5   |
|    Ö    |    214    |  U+00D6   |
|    ×    |    215    |  U+00D7   |
|    Ø    |    216    |  U+00D8   |
|    Ù    |    217    |  U+00D9   |
|    Ú    |    218    |  U+00DA   |
|    Û    |    219    |  U+00DB   |
|    Ü    |    220    |  U+00DC   |
|    Ý    |    221    |  U+00DD   |
|    Þ    |    222    |  U+00DE   |
|    ß    |    223    |  U+00DF   |
|    à    |    224    |  U+00E0   |
|    á    |    225    |  U+00E1   |
|    â    |    226    |  U+00E2   |
|    ã    |    227    |  U+00E3   |
|    ä    |    228    |  U+00E4   |
|    å    |    229    |  U+00E5   |
|    æ    |    230    |  U+00E6   |
|    ç    |    231    |  U+00E7   |
|    è    |    232    |  U+00E8   |
|    é    |    233    |  U+00E9   |
|    ê    |    234    |  U+00EA   |
|    ë    |    235    |  U+00EB   |
|    ì    |    236    |  U+00EC   |
|    í    |    237    |  U+00ED   |
|    î    |    238    |  U+00EE   |
|    ï    |    239    |  U+00EF   |
|    ð    |    240    |  U+00F0   |
|    ñ    |    241    |  U+00F1   |
|    ò    |    242    |  U+00F2   |
|    ó    |    243    |  U+00F3   |
|    ô    |    244    |  U+00F4   |
|    õ    |    245    |  U+00F5   |
|    ö    |    246    |  U+00F6   |
|    ÷    |    247    |  U+00F7   |
|    ø    |    248    |  U+00F8   |
|    ù    |    249    |  U+00F9   |
|    ú    |    250    |  U+00FA   |
|    û    |    251    |  U+00FB   |
|    ü    |    252    |  U+00FC   |
|    ý    |    253    |  U+00FD   |
|    þ    |    254    |  U+00FE   |
|    ÿ    |    255    |  U+00FF   |

# Caracteres reservados
Os caracteres abaixo são reservados e não podem ser usados em nomes de variáveis.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|    "    |     34    |  U+0022   |
|    $    |     36    |  U+0024   |
|    (    |     40    |  U+0028   |
|    )    |     41    |  U+0029   |
|    :    |     58    |  U+003A   |
|    ;    |     59    |  U+003B   |
|    ,    |     44    |  U+002C   |
|    .    |     46    |  U+002E   |
|    +    |     43    |  U+002B   |
|    -    |     45    |  U+002D   |
|    [    |     91    |  U+005B   |
|    \    |     92    |  U+005C   |
|    ]    |     93    |  U+005D   |
|    '    |     39    |  U+0027   |

## Caracteres limitados
Possuem função sintática quando estão isolados, mas podem ser aglutinados com outros caracteres para formar identificadores.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|    A    |     65    |  U+0041   |
|    E    |     69    |  U+0045   |
|    O    |     79    |  U+004F   |
|    a    |     97    |  U+0061   |
|    e    |    101    |  U+0065   |
|    o    |    111    |  U+006F   |
|    À    |    192    |  U+00C0   |
|    É    |    201    |  U+00C9   |
|    é    |    233    |  U+00E9   |
|    à    |    224    |  U+00E0   |

## Caracteres permitidos
Em nomes de variáveis, os caracteres abaixo são permitidos, isolados ou aglutinados.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|    #    |     35    |  U+0023   |
|    %    |     37    |  U+0025   |
|    &    |     38    |  U+0026   |
|    @    |     64    |  U+0040   |
|    B    |     66    |  U+0042   |
|    C    |     67    |  U+0043   |
|    D    |     68    |  U+0044   |
|    F    |     70    |  U+0046   |
|    G    |     71    |  U+0047   |
|    H    |     72    |  U+0048   |
|    I    |     73    |  U+0049   |
|    J    |     74    |  U+004A   |
|    K    |     75    |  U+004B   |
|    L    |     76    |  U+004C   |
|    M    |     77    |  U+004D   |
|    N    |     78    |  U+004E   |
|    P    |     80    |  U+0050   |
|    Q    |     81    |  U+0051   |
|    R    |     82    |  U+0052   |
|    S    |     83    |  U+0053   |
|    T    |     84    |  U+0054   |
|    U    |     85    |  U+0055   |
|    V    |     86    |  U+0056   |
|    W    |     87    |  U+0057   |
|    X    |     88    |  U+0058   |
|    Y    |     89    |  U+0059   |
|    Z    |     90    |  U+005A   |
|    _    |     95    |  U+005F   |
|    `    |     96    |  U+0060   |
|    b    |     98    |  U+0062   |
|    c    |     99    |  U+0063   |
|    d    |    100    |  U+0064   |
|    f    |    102    |  U+0066   |
|    g    |    103    |  U+0067   |
|    h    |    104    |  U+0068   |
|    i    |    105    |  U+0069   |
|    j    |    106    |  U+006A   |
|    k    |    107    |  U+006B   |
|    l    |    108    |  U+006C   |
|    m    |    109    |  U+006D   |
|    n    |    110    |  U+006E   |
|    p    |    112    |  U+0070   |
|    q    |    113    |  U+0071   |
|    r    |    114    |  U+0072   |
|    s    |    115    |  U+0073   |
|    t    |    116    |  U+0074   |
|    u    |    117    |  U+0075   |
|    v    |    118    |  U+0076   |
|    w    |    119    |  U+0077   |
|    x    |    120    |  U+0078   |
|    y    |    121    |  U+0079   |
|    z    |    122    |  U+007A   |
|    ~    |    126    |  U+007E   |
|    ƒ    |    131    |  U+0192   |
|    Š    |    138    |  U+0160   |
|    Œ    |    140    |  U+0152   |
|    Ž    |    142    |  U+017D   |
|    œ    |    156    |  U+0153   |
|    ž    |    158    |  U+017E   |
|    Ÿ    |    159    |  U+0178   |
|    µ    |    181    |  U+00B5   |
|    ¶    |    182    |  U+00B6   |
|    Á    |    193    |  U+00C1   |
|    Â    |    194    |  U+00C2   |
|    Ã    |    195    |  U+00C3   |
|    Ä    |    196    |  U+00C4   |
|    Å    |    197    |  U+00C5   |
|    Æ    |    198    |  U+00C6   |
|    Ç    |    199    |  U+00C7   |
|    È    |    200    |  U+00C8   |
|    Ê    |    202    |  U+00CA   |
|    Ë    |    203    |  U+00CB   |
|    Ì    |    204    |  U+00CC   |
|    Í    |    205    |  U+00CD   |
|    Î    |    206    |  U+00CE   |
|    Ï    |    207    |  U+00CF   |
|    Ð    |    208    |  U+00D0   |
|    Ñ    |    209    |  U+00D1   |
|    Ò    |    210    |  U+00D2   |
|    Ó    |    211    |  U+00D3   |
|    Ô    |    212    |  U+00D4   |
|    Õ    |    213    |  U+00D5   |
|    Ö    |    214    |  U+00D6   |
|    Ø    |    216    |  U+00D8   |
|    Ù    |    217    |  U+00D9   |
|    Ú    |    218    |  U+00DA   |
|    Û    |    219    |  U+00DB   |
|    Ü    |    220    |  U+00DC   |
|    Ý    |    221    |  U+00DD   |
|    Þ    |    222    |  U+00DE   |
|    ß    |    223    |  U+00DF   |
|    á    |    225    |  U+00E1   |
|    â    |    226    |  U+00E2   |
|    ã    |    227    |  U+00E3   |
|    ä    |    228    |  U+00E4   |
|    å    |    229    |  U+00E5   |
|    æ    |    230    |  U+00E6   |
|    ç    |    231    |  U+00E7   |
|    è    |    232    |  U+00E8   |
|    ê    |    234    |  U+00EA   |
|    ë    |    235    |  U+00EB   |
|    ì    |    236    |  U+00EC   |
|    í    |    237    |  U+00ED   |
|    î    |    238    |  U+00EE   |
|    ï    |    239    |  U+00EF   |
|    ð    |    240    |  U+00F0   |
|    ñ    |    241    |  U+00F1   |
|    ò    |    242    |  U+00F2   |
|    ó    |    243    |  U+00F3   |
|    ô    |    244    |  U+00F4   |
|    õ    |    245    |  U+00F5   |
|    ö    |    246    |  U+00F6   |
|    ø    |    248    |  U+00F8   |
|    ù    |    249    |  U+00F9   |
|    ú    |    250    |  U+00FA   |
|    û    |    251    |  U+00FB   |
|    ü    |    252    |  U+00FC   |
|    ý    |    253    |  U+00FD   |
|    þ    |    254    |  U+00FE   |
|    ÿ    |    255    |  U+00FF   |

# Caracteres numéricos:
Em nomes de variáveis, os caracteres abaixo são permitidos em qualquer posição, desde que estejam entre outros caracteres permitidos ou limitados.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|         |     32    |  U+0020   |
|    -    |     45    |  U+002D   |
|    /    |     47    |  U+002F   |
|    0    |     48    |  U+0030   |
|    1    |     49    |  U+0031   |
|    2    |     50    |  U+0032   |
|    3    |     51    |  U+0033   |
|    4    |     52    |  U+0034   |
|    5    |     53    |  U+0035   |
|    6    |     54    |  U+0036   |
|    7    |     55    |  U+0037   |
|    8    |     56    |  U+0038   |
|    9    |     57    |  U+0039   |

# Caracteres especiais:
Em nomes de variáveis, os caracteres abaixo são permitidos em qualquer posição, desde que não sejam precedidos ou sucedidos por outros caracteres especiais.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|    <    |     60    |  U+003C   |
|    =    |     61    |  U+003D   |
|    >    |     62    |  U+003E   |
|    ^    |     94    |  U+005E   |
|    |    |    124    |  U+007C   |
|    €    |    128    |  U+20AC   |
|    ‚    |    130    |  U+201A   |
|    „    |    132    |  U+201E   |
|    …    |    133    |  U+2026   |
|    †    |    134    |  U+2020   |  
|    ‡    |    135    |  U+2021   |
|    ˆ    |    136    |  U+02C6   |
|    ‰    |    137    |  U+2030   |
|    ‹    |    139    |  U+2039   |
|    ‘    |    145    |  U+2018   |
|    ’    |    146    |  U+2019   |
|    “    |    147    |  U+201C   |
|    ”    |    148    |  U+201D   |
|    ˜    |    152    |  U+02DC   |
|    •    |    149    |  U+2022   |
|    –    |    150    |  U+2013   |
|    —    |    151    |  U+2014   |
|    ™    |    153    |  U+2122   |
|    š    |    154    |  U+0161   |
|    ›    |    155    |  U+203A   |
|    ¡    |    161    |  U+00A1   |
|    ¢    |    162    |  U+00A2   |
|    £    |    163    |  U+00A3   |
|    ¤    |    164    |  U+00A4   |
|    ¥    |    165    |  U+00A5   |
|    ¦    |    166    |  U+00A6   |
|    «    |    171    |  U+00AB   |
|    ¬    |    172    |  U+00AC   |
|    ­     |    173    |  U+00AD   |
|    ®    |    174    |  U+00AE   |
|    ¯    |    175    |  U+00AF   |
|    °    |    176    |  U+00B0   |
|    ±    |    177    |  U+00B1   |
|    ²    |    178    |  U+00B2   |
|    ³    |    179    |  U+00B3   |
|    ´    |    180    |  U+00B4   |
|    ·    |    183    |  U+00B7   |
|    ¸    |    184    |  U+00B8   |
|    ¹    |    185    |  U+00B9   |
|    »    |    187    |  U+00BB   |
|    ¼    |    188    |  U+00BC   |
|    ½    |    189    |  U+00BD   |
|    ¾    |    190    |  U+00BE   |
|    ¿    |    191    |  U+00BF   |
|    §    |    167    |  U+00A7   |
|    ¨    |    168    |  U+00A8   |
|    ©    |    169    |  U+00A9   |
|    ×    |    215    |  U+00D7   |
|    ÷    |    247    |  U+00F7   |

## Caracteres não permitidos
Em nomes de variáveis, os caracteres abaixo não são permitidos. Só podem estar presentes em strings literais ou em comentários.
|Character|ANSI Number|Unicode Hex|
|---------|-----------|-----------|
|    !    |     33    |  U+0021   |
|    *    |     42    |  U+002A   |
|    ?    |     63    |  U+003F   |
|    {    |    123    |  U+007B   |
|    }    |    125    |  U+007D   |
|    ª    |    170    |  U+00AA   |
|    º    |    186    |  U+00BA   |

---

# Valores Literais - Português Puro

## Visão Geral

Valores literais são **constantes** escritas diretamente no código-fonte. Português Puro suporta diversos tipos de valores literais: números inteiros, frações, strings, hexadecimais, booleanos e caracteres especiais.

---

## Categorias de Valores Literais

### 1. Números Inteiros
- Decimais: `0`, `10`, `255`, `-1`
- Negativos: `-10`, `-255`

### 2. Frações
- Formato: `numerador/denominador`
- Exemplos: `1/2`, `3/4`, `2147483647/1518500249`

### 3. Strings
- Delimitadas por aspas duplas: `"texto"`
- Escape de aspas: `""` dentro da string

### 4. Hexadecimais
- Prefixo `$`: `$00`, `$FF`, `$0D0A`
- Longos: Milhares de caracteres

### 5. Booleanos
- `sim` (verdadeiro)
- `não` (falso)

### 6. Valores Especiais
- `inexistente` (NULL/nulo)

---

## 1. Números Inteiros

### Sintaxe

```pop
<dígitos>
-<dígitos>
```

### Exemplos

```pop
\\ Inteiros positivos
Atribua 0 para o contador.
Atribua 10 para o número.
Atribua 255 para o byte.
Atribua 2147483647 para o máximo.

\\ Inteiros negativos
Atribua -1 para o resultado.
Atribua -10 para a diferença.

\\ Zero
Atribua 0 para o total.
```

### Limites

- **Byte**: 0 a 255 (8 bits, unsigned)
- **Número**: -2147483648 a 2147483647 (32 bits, signed)

---

## 2. Frações

### Sintaxe

```pop
<numerador>/<denominador>
```

### Características

- Representam números racionais
- Armazenados como par de inteiros (numerador/denominador)
- Podem ser simplificados automaticamente

### Exemplos

```pop
\\ Frações simples
Atribua 1/2 para a metade.
Atribua 3/4 para três quartos.
Atribua 2/3 para dois terços.

\\ Frações complexas
Atribua 2147483647/1518500249 para a raiz de dois.

\\ Frações em operações
Adicione 1/4 para a fração.
Multiplique a largura por 3/4.
```

### Conversão

```pop
\\ Fração para string
Converta a fração para uma string.
\\ Resultado: "1/2" ou "1+1/2" (numeral misto)

\\ Número para fração
Atribua o número para uma fração.
\\ Resultado: número/1
```

---

## 3. Strings

### Sintaxe Básica

```pop
"<texto>"
```

### Características

- Delimitadas por **aspas duplas** (`"`)
- Codificação: Windows-1252 (ISO-8859-1)
- Suportam caracteres acentuados

### Exemplos

```pop
\\ Strings simples
Atribua "Olá, Mundo!" para a mensagem.
Atribua "João" para o nome.
Atribua "" para a string vazia.

\\ Strings com acentos
Atribua "São Paulo" para a cidade.
Atribua "Programação" para o curso.

\\ Strings com espaços
Atribua "Português Puro" para o nome da linguagem.
```

---

### Escape de Aspas

Para incluir aspas duplas **dentro** de uma string, use **duas aspas** (`""`):

```pop
\\ Escape de aspas
Atribua "Ele disse ""Olá""!" para a frase.
\\ Resultado: Ele disse "Olá"!

\\ Múltiplas aspas
Atribua """""" para as aspas duplas.
\\ Resultado: ""
```

**Regra:** Cada `""` dentro da string representa uma aspa `"`

---

### Strings Multilinha

**Não suportadas diretamente**. Use concatenação:

```pop
Atribua "Linha 1" para o texto.
Acrescente o texto CRLF para o texto.
Acrescente "Linha 2" para o texto.
```

---

## 4. Hexadecimais

### Sintaxe

```pop
$<dígitos hexadecimais>
```

### Características

- Prefixo obrigatório: `$`
- Dígitos: `0-9`, `A-F` (case-insensitive)
- Podem ter **milhares de caracteres**
- Usados para: tabelas, fontes, sons, imagens embutidas

### Exemplos Curtos

```pop
\\ Bytes hexadecimais
Atribua $00 para o byte nulo.
Atribua $FF para o byte máximo.
Atribua $0D para o carriage return.
Atribua $0A para o line feed.

\\ Valores combinados
O texto CRLF é uma string igual a $0D0A.

\\ Cores
Atribua $FF0000 para a cor vermelha. \\ RGB: Red=FF, Green=00, Blue=00
```

---

### Exemplos Longos

```pop
\\ Tabela ASCII (256 bytes)
A tabela ascii é uma tabela de tradução igual a $000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A6B6C6D6E6F707172737475767778797A7B7C7D7E7F808182838485868788898A8B8C8D8E8F909192939495969798999A9B9C9D9E9FA0A1A2A3A4A5A6A7A8A9AAABACADAEAFB0B1B2B3B4B5B6B7B8B9BABBBCBDBEBFC0C1C2C3C4C5C6C7C8C9CACBCCCDCECFD0D1D2D3D4D5D6D7D8D9DADBDCDDDEDFE0E1E2E3E4E5E6E7E8E9EAEBECEDEEEFF0F1F2F3F4F5F6F7F8F9FAFBFCFDFEFF.

\\ Som embutido (wave file)
O som de aviso é uma wave igual a $524946463A02000057415645666D74201200000001000100401F0000401F000001000800000066616374040000000702000064617461070200007F7F807F7F807F7F808080807F807F7F80817F81817E7E827E7D847C79877D5F6D99B2A25D608269A5979869667F7D8D738C7D8C5E7E878F767A75868D84797278829A7D7E857A73929271657492907D7E7D787E8B887C758388827E817F7C7B89897C7A7E84838183827E7A8488877D7E8181808484817C7F84838181807E7F8283807E8081808182807F7F81818081807F7F8081818080807F7F808180807F80808080807F8080807F8080808080807F7F7F7F7F8080807F7F7F7C7B8182817C7B7D7E8082807D7D7C7F8281807F7C7D808082807E7E7E7D7E807D7B7C7B7D7D7B7A7979797875727269797A490F4571FFF4FF0C001297FBF492525BB0F5B26A001C69BEE5BA76476F9EBD953C3757BAC9BB705C7F9AA883645D7897AA9B806977959588696976999B83766F828C907F7375828E91877B757D868B837A757C858D8880787B8187847B7A7D8788807B79808486817D7C7F8384817D7C7F8484817B7B7D83847F7C7B7E8182827D7C7C8082817D7C7D7F81807F7D7D7F82817F7B7B7E8081807E7D7D7F80807E7D7D7E80807E7D7D7E7F807F7D7D7E7F807F7E7D7E7E80807F7E7D7E80807F7E7E7E7F7F7E7E7E7F7F7F7F7E7E7F7F807F7F7E7E7E7F8080807E7E7E80807F7E7E7F8081807F7F7E7F7F80807F7E7F8081807F7E7E7E80808080807F807F7F7F7F7F7F7F80808080807F7F7F808080807F80808180807F80808100.
```

**Uso:** Embutir dados binários diretamente no código

---

## 5. Booleanos

### Valores

- `sim` - Verdadeiro (true)
- `não` - Falso (false)

### Exemplos

```pop
\\ Atribuição
Atribua sim ao sinalizador.
Atribua não ao flag de erro.

\\ Retorno de função
Diga sim.
Diga não.

\\ Comparação
Se o sinalizador for sim, processe.
Se o flag for não, retorne.
```

---

## 6. Valores Especiais

### `inexistente`

Representa um **ponteiro nulo** (NULL):

```pop
\\ Verificação
Se o ponteiro for inexistente, retorne.
Se a lista não for inexistente, processe.

\\ Atribuição (implícita ao criar ponteiro)
Aloque memória para um ponteiro.
Se o ponteiro for inexistente,
  Escreva "Erro de alocação!" no console.
```

---

## Caracteres Especiais

### Variáveis Globais Predefinidas

```pop
\\ Quebra de linha (CRLF)
O texto CRLF é uma string igual a $0D0A.

\\ Aspas duplas
As aspas duplas são uma string igual a """".

\\ Caracteres de controle
O caractere de espaço é um byte igual a 32.
O caractere de tabulação é um byte igual a 9.
```

### Uso

```pop
\\ Quebra de linha
Escreva "Linha 1" junto com o texto CRLF no console.

\\ Aspas em strings
Acrescente as aspas duplas para a string.
```

---

## Comentários em Valores

### Comentários Inline

Use `[...]` para comentários **dentro** de valores:

```pop
Atribua 2147483648 [0x80000000] para o valor máximo.
Atribua 8 [HEAP_ZERO_MEMORY] para as flags.
```

---

## Observações Importantes

1. **Números Inteiros**: Sem separadores de milhares
2. **Frações**: Formato `numerador/denominador` (sem espaços)
3. **Strings**: Aspas duplas obrigatórias, escape com `""`
4. **Hexadecimais**: Prefixo `$` obrigatório
5. **Case-Insensitive**: Hexadecimais aceitam `A-F` ou `a-f`
6. **Sem Notação Científica**: Use valores completos
7. **Sem Ponto Flutuante**: Use frações para números racionais
8. **Caracteres Especiais**: Use variáveis globais predefinidas
9. **Comentários Inline**: `[...]` para anotações
10. **Valores Longos**: Hexadecimais podem ter milhares de caracteres

---

## Boas Práticas

1. **Use Frações**: Para valores racionais exatos (evite aproximações)
2. **Nomes Descritivos**: Para valores hexadecimais longos
3. **Comentários**: Anote valores mágicos com `[...]`
4. **Constantes Globais**: Para valores reutilizados
5. **Escape Correto**: Sempre use `""` para aspas em strings
6. **Validação**: Verifique limites de bytes e números
7. **Legibilidade**: Quebre hexadecimais longos em múltiplas linhas (se necessário)
8. **Documentação**: Comente o significado de valores especiais
9. **Consistência**: Use o mesmo formato para valores similares
10. **Teste**: Verifique valores extremos (0, máximo, mínimo)

---

## Exemplos Completos

### Inicialização de Variáveis

```pop
\\ Números
Atribua 0 para o contador.
Atribua -1 para o resultado de erro.
Atribua 255 para o byte máximo.

\\ Frações
Atribua 1/2 para a metade.
Atribua 3/4 para a proporção.

\\ Strings
Atribua "Português Puro" para o nome da linguagem.
Atribua "" para a string vazia.

\\ Booleanos
Atribua sim ao sinalizador de debug.
Atribua não ao flag de erro.

\\ Hexadecimais
Atribua $0D0A para a quebra de linha.
Atribua $FF para o byte máximo.
```

---

### Valores em Estruturas

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome igual a "João",
  Um número denominado idade igual a 30,
  Um sinalizador denominado ativo igual a sim.
```

---

### Valores em Comparações

```pop
Se o contador for 0, retorne.
Se a string for "", limpe o buffer.
Se o sinalizador for sim, processe.
Se o ponteiro for inexistente, aloque memória.
```

---

### Valores em Operações

```pop
\\ Aritméticas
Adicione 1 para o contador.
Multiplique o número por 2.
Divida a largura por 3.

\\ Frações
Adicione 1/4 para a fração.
Multiplique a largura por 3/4.

\\ Strings
Acrescente "!" para a mensagem.
Acrescente o texto CRLF para a linha.
```

---

## Tabela de Referência Rápida

| Tipo            | Exemplo         | Uso                         |
|-----------------|-----------------|-----------------------------|
| **Inteiro**     | `10`, `-5`, `0` | Contadores, índices         |
| **Fração**      | `1/2`, `3/4`    | Proporções, cálculos exatos |
| **String**      | `"texto"`       | Mensagens, nomes            |
| **Hexadecimal** | `$FF`, `$0D0A`  | Bytes, dados binários       |
| **Booleano**    | `sim`, `não`    | Flags, estados              |
| **Especial**    | `inexistente`   | Ponteiros nulos             |

---

## Estatísticas

- **Tipos de literais**: 6
- **Formatos numéricos**: 3 (inteiro, fração, hexadecimal)
- **Booleanos**: 2 (`sim`, `não`)
- **Valores especiais**: 1 (`inexistente`)
- **Escape de aspas**: `""` → `"`
- **Prefixo hexadecimal**: `$`
- **Separador de fração**: `/`
- **Delimitador de string**: `"`

---

# Strings Literais - Português Puro

## Definição

Strings literais são sequências de caracteres delimitadas por aspas duplas (`"`). Representam valores textuais constantes no código-fonte.

## Sintaxe Básica

```
"texto aqui"
```

## Delimitadores

- **Início**: Aspas duplas (`"`)
- **Fim**: Aspas duplas (`"`)
- **Caractere de escape**: Aspas duplas (`"`)

## Técnicas para Incluir Aspas Duplas

### Técnica 1: Escape Direto (Concisa)

Usar `""` dentro da string literal:

```pop
Escreva "O comando é: ""Compilador.exe"" ""C:\projeto\""" para StdOut.
```

**Vantagens**:
- Conciso
- Direto
- Ideal para texto fixo

**Desvantagens**:
- Menos legível com muitas aspas
- Dificulta manutenção em textos complexos

### Técnica 2: Concatenação com Variável Global (Verbosa)

Usar a variável global `as aspas duplas` com operadores de concatenação:

```pop
Escreva "O comando é: " 
junto com as aspas duplas junto com "Compilador.exe" 
junto com as aspas duplas junto com " " 
junto com as aspas duplas junto com "C:\projeto\" 
junto com as aspas duplas para StdOut.
```

**Vantagens**:
- Mais legível
- Facilita manutenção
- Ideal para construção dinâmica

**Desvantagens**:
- Mais verboso
- Requer mais linhas de código

### Técnica 3: Função Auxiliar (Programática)

Criar uma rotina para adicionar aspas automaticamente:

```pop
Rotina para que se cite uma string:
  Atribua as aspas duplas para uma segunda string.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Acrescente o conteúdo deste caractere inicial deste subtexto para a segunda string.
    Se o conteúdo deste caractere inicial deste subtexto for as aspas duplas,
      Acrescente as aspas duplas para a segunda string.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Acrescente as aspas duplas para a segunda string.
  Atribua a segunda string à string.
```

**Uso**:
```pop
Atribua "Compilador.exe" para uma string.
Cite a string.
Escreva a string para StdOut.  \\ Resultado: "Compilador.exe"
```

**Vantagens**:
- Reutilizável
- Escapa aspas automaticamente
- Ideal para processamento de texto

### Técnica 4: Rotinas da Biblioteca Padrão (Idiomática)

A biblioteca padrão oferece rotinas para manipular strings, incluindo inserção de caracteres:

```pop
\\ Adicionar no final
Acrescente as aspas duplas para o relatório.
Posponha as aspas duplas para a string.
Adicione as aspas duplas para a string.

\\ Adicionar no início
Anteponha as aspas duplas para o relatório.

\\ Atribuir
Atribua as aspas duplas para uma segunda string.
```

**Vantagens**:
- Idiomática (natural em Português Puro)
- Múltiplos sinônimos disponíveis
- Suporta qualquer byte, não apenas aspas
- Pode usar contagem para repetição

**Desvantagens**:
- Requer conhecimento da biblioteca padrão
- Limitado a operações byte a byte

#### Sinônimos Disponíveis

A biblioteca padrão oferece **múltiplos sinônimos** para a mesma operação:

| Operação            | Sinônimos                                                                   |
|---------------------|-----------------------------------------------------------------------------|
| Adicionar no fim    | `acrescente`, `adicione`, `anexe`, `coloque`, `ponha`, `insira`, `posponha` |
| Adicionar no início | `anteponha`, `preponha`                                                     |

#### Variações Sintáticas

Cada sinônimo aceita **variações sintáticas** equivalentes:

```pop
\\ Todas equivalentes - adicionar no fim
Acrescente um byte para uma string.
Acrescente um byte para o final de uma string.
Acrescente um byte para o fim de uma string.
Acrescente um byte no fim de uma string.
Acrescente um byte no final de uma string.
```

#### Exemplo com Contagem

Repetir a inserção N vezes:

```pop
\\ Adicionar 5 aspas duplas
Acrescente as aspas duplas para a string usando 5.
```

**Implementação**:
```pop
Rotina para que se acrescente um byte para uma string usando uma contagem:
  Preserve a contagem.
  Itere.
    Se a contagem for menor do que 1, retorne.
    Acrescente o byte para a string.
    Subtraia 1 desde a contagem.
  Reitere.
```

### Comparação das Técnicas

#### Exemplo: Mensagem de Aviso com Comando

**Técnica 1 - Escape Direto**:
```pop
Escreva "|                 ""Compilador.exe"" ""D:\pasta_do_projeto_atual\""                                                     |" 
junto com o texto CRLF para StdOut.
```

**Técnica 2 - Concatenação**:
```pop
Escreva "|                 " 
junto com as aspas duplas junto com "Compilador.exe" 
junto com as aspas duplas junto com " " 
junto com as aspas duplas junto com "D:\pasta_do_projeto_atual\" 
junto com as aspas duplas junto com "                                                     |" 
junto com o texto CRLF para StdOut.
```

**Técnica 3 - Função Auxiliar**:
```pop
Atribua "Compilador.exe" para uma string.
Cite a string.
Atribua "D:\pasta_do_projeto_atual\" para uma segunda string.
Cite a segunda string.
- `""` dentro de uma string literal = uma aspa dupla (`"`) no valor final
```

### Exemplos

#### Exemplo 1: Texto com aspas
```pop
"Ele disse ""olá"" para mim."
```
**Resultado**: `Ele disse "olá" para mim.`

#### Exemplo 2: Chamada de API com strings
```pop
Acrescente "Processe ""kernel32.dll"" ""ExitProcess"" com 0." para a string.
```
**Resultado**: `Processe "kernel32.dll" "ExitProcess" com 0.`

#### Exemplo 3: Aspas duplas consecutivas
```pop
"texto com """" aspas duplas"
```
**Resultado**: `texto com "" aspas duplas`

### Caso Especial: Seis Aspas Duplas (`""""""`)

Este é o caso que aparece no código-fonte do compilador:

```pop
Se o segmento final deste percorredor começa com """""", diga sim.
```

**Análise**:
1. `"` - Início da string literal
2. `""` - Primeira aspa dupla escapada → representa `"`
3. `""` - Segunda aspa dupla escapada → representa `"`
4. `"` - Fim da string literal

**Resultado**: A string contém literalmente duas aspas duplas: `""`

**Propósito**: Detectar quando o parser encontra duas aspas duplas consecutivas no código-fonte (indicando aspas aninhadas).

## Caracteres Permitidos

### Permitidos SEM Escape
Todos os caracteres exceto:
- Quebra de linha (LF, CR, CRLF)
- Aspas duplas (requer escape: `""`)

### Exemplos de Caracteres Livres

```pop
"Aspas simples: ' são permitidas"
"Barra invertida: \ é permitida"
"Colchetes: [texto] são permitidos"
"Comentários: \\ são permitidos"
"Símbolos: @#$%&*+-/=<>!? são permitidos"
```

## Limitações

### Quebras de Linha
Strings literais **não podem** conter quebras de linha diretas:

❌ **Inválido**:
```pop
"texto com
quebra de linha"
```

✅ **Alternativa**: Concatenar strings
```pop
"texto com" junto com o texto CRLF junto com "quebra de linha"
```

## Detecção pelo Compilador

### Início de String Literal
```pop
Função para que se determine se uma string é algum string literal:
  Se a string estiver em branco, diga não.
  Se o conteúdo deste caractere inicial desta string for as aspas duplas, diga sim.
  Diga não.
```

### Aspas Duplas Aninhadas
```pop
Função para que se determine se um percorredor está sobre múltiplas aspas duplas aninhadas:
  Se o segmento final deste percorredor começa com """""", diga sim.
  Diga não.
```

## Comparação com Outras Linguagens

| Linguagem      | Delimitador | Escape de Aspas | Exemplo                  |
|----------------|-------------|-----------------|--------------------------|
| Português Puro | `"`         | `""`            | `"texto ""aspas"" aqui"` |
| C/C++          | `"`         | `\"`            | `"texto \"aspas\" aqui"` |
| Python         | `"` ou `'`  | `\"` ou `\'`    | `"texto \"aspas\" aqui"` |
| SQL            | `'`         | `''`            | `'texto ''aspas'' aqui'` |
| Pascal         | `'`         | `''`            | `'texto ''aspas'' aqui'` |

**Nota**: Português Puro usa a mesma convenção que SQL e Pascal (duplicação do delimitador).

## Exemplos Completos

### Exemplo 1: Declaração de Variável
```pop
A mensagem de boas-vindas é uma string igual a "Bem-vindo ao ""Português Puro""!".
```

### Exemplo 2: Comando de Escrita
```pop
Escreva "O resultado é: ""sucesso""" para StdOut.
```

### Exemplo 3: Chamada Externa
```pop
Processe "user32.dll" "MessageBoxA" com
  0 [hWnd] e
  "Clique em ""OK"" para continuar." [lpText] e
  "Aviso" [lpCaption] e
  0 [uType].
```

### Exemplo 4: Construção Dinâmica de Código
```pop
Acrescente "Escreva ""Olá, mundo!"" para StdOut." para o corpo da rotina.
```

## Observações Importantes

1. **Case-Sensitive**: O conteúdo das strings é sensível a maiúsculas/minúsculas
2. **Encoding**: Strings usam codificação Windows-1252 (ANSI estendido)
3. **Sem Interpolação**: Não há interpolação de variáveis dentro de strings
4. **Concatenação**: Use operadores `junto`, `seguido`, `acompanhado` para concatenar
5. **Aspas Simples**: Não são delimitadores de string, são caracteres normais
6. **Variável Global `as aspas duplas`**: Contém o caractere `"` e pode ser usada para construção dinâmica de strings com aspas

## Erros Comuns

### ❌ Erro 1: Usar barra invertida para escape
```pop
"texto \"com aspas\" aqui"  \\ ERRADO!
```
✅ **Correto**:
```pop
"texto ""com aspas"" aqui"
```

### ❌ Erro 2: Quebra de linha direta
```pop
"linha 1
linha 2"  \\ ERRADO!
```
✅ **Correto**:
```pop
"linha 1" junto com o texto CRLF junto com "linha 2"
```

### ❌ Erro 3: Aspas simples como delimitador
```pop
'texto aqui'  \\ ERRADO! Aspas simples não delimitam strings
```
✅ **Correto**:
```pop
"texto aqui"
```

---

# Artigos - Português Puro

## Visão Geral

Artigos são palavras que precedem substantivos (nomes de tipos e variáveis) e determinam seu escopo e especificidade. Em Português Puro, os artigos têm função **sintática fundamental**, pois determinam se uma variável é **global** ou **local**.

## Categorias de Artigos

### 1. Artigos Definidos
Indicam **variáveis globais** (escopo do módulo).

### 2. Artigos Indefinidos
Indicam **variáveis locais** (escopo da rotina) ou **definição de tipos**.

---

# ARTIGOS DEFINIDOS

## Função

- Declaram **variáveis globais**
- Referenciam variáveis já declaradas (locais ou globais)
- Acessam campos de estruturas

## Formas

| Artigo | Gênero    | Número   | Uso                              |
|--------|-----------|----------|----------------------------------|
| `a`    | Feminino  | Singular | `A mensagem é uma string.`       |
| `o`    | Masculino | Singular | `O contador é um número.`        |
| `os`   | Masculino | Plural   | `Os contadores são uns números.` |
| `as`   | Feminino  | Plural   | `As mensagens são umas strings.` |

## Pronomes Demonstrativos Adjacentes

Funcionam como artigos definidos, indicando proximidade ou referência específica.

| Pronome | Gênero    | Número   | Uso                                 |
|---------|-----------|----------|-------------------------------------|
| `este`  | Masculino | Singular | `Este número é um contador.`        |
| `esta`  | Feminino  | Singular | `Esta string é uma mensagem.`       |
| `estes` | Masculino | Plural   | `Estes números são uns contadores.` |
| `estas` | Feminino  | Plural   | `Estas strings são umas mensagens.` |

## Sintaxe

### Declaração de Variável Global
```
<Artigo Definido> <nome> <é|   são> <Artigo Indefinido> <tipo> [igual a <valor>].
```

**Exemplos:**
```pop
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

\ Com inicialização
O número pi é uma fração igual a 355/113.
A cor de fundo é uma cor igual a #FFFFFF.
```

### Referência a Variável
```pop
\ Após declaração local
Atribua 10 para um contador.
\ Referência com artigo definido
Adicione 5 para o contador.
```

### Acesso a Campos de Estrutura
```pop
\ Usando contrações deste, desta, destes, destas
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
```

## Observações Importantes

1. **Escopo Global**: Artigos definidos **sempre** indicam variáveis globais quando usados em declarações fora de rotinas
2. **Referência**: Dentro de rotinas, artigos definidos referenciam variáveis já declaradas
3. **Case-Insensitive**: `O`, `o`, `A`, `a` são equivalentes
4. **Concordância**: Deve haver concordância de gênero e número com o tipo

---

# ARTIGOS INDEFINIDOS

## Função

- Declaram **variáveis locais** (dentro de rotinas)
- Definem **novos tipos** (estruturas, listas, ponteiros)
- Especificam **tipos em campos** de estruturas

## Formas Básicas

| Artigo | Gênero    | Número   | Uso                           |
|--------|-----------|----------|-------------------------------|
| `um`   | Masculino | Singular | `um número`, `um ponteiro`    |
| `uma`  | Feminino  | Singular | `uma string`, `uma estrutura` |
| `uns`  | Masculino | Plural   | `uns números`, `uns bytes`    |
| `umas` | Feminino  | Plural   | `umas strings`, `umas cores`  |

## Pronomes Demonstrativos Abrangentes

Funcionam como artigos indefinidos, oferecendo variações estilísticas.

### Proximidade Média (`esse`, `essa`)
| Pronome | Gênero    | Número   | Uso                                  |
|---------|-----------|----------|--------------------------------------|
| `esse`  | Masculino | Singular | `Esse número é uma estrutura com...` |
| `essa`  | Feminino  | Singular | `Essa string é uma estrutura com...` |
| `esses` | Masculino | Plural   | `Esses números são uns contadores.`  |
| `essas` | Feminino  | Plural   | `Essas strings são umas mensagens.`  |

### ~~Distância (`aquele`, `aquela`)~~
| Pronome   | Gênero    | Número   | Uso                                       |
|-----------|-----------|----------|-------------------------------------------|
| `aquele`  | Masculino | Singular | `Aquele tipo é uma estrutura com...`      |
| `aquela`  | Feminino  | Singular | `Aquela estrutura é uma estrutura com...` |
| `aqueles` | Masculino | Plural   | `Aqueles tipos são uns números.`          |
| `aquelas` | Feminino  | Plural   | `Aquelas estruturas são umas listas.`     |

### ~~Indeterminação (`certo`, `certa`)~~
| Pronome  | Gênero    | Número   | Uso                                  |
|----------|-----------|----------|--------------------------------------|
| `certo`  | Masculino | Singular | `Certo número é um contador.`        |
| `certa`  | Feminino  | Singular | `Certa string é uma mensagem.`       |
| `certos` | Masculino | Plural   | `Certos números são uns contadores.` |
| `certas` | Feminino  | Plural   | `Certas strings são umas mensagens.` |

### ~~Determinação (`determinado`, `determinada`)~~
| Pronome        | Gênero    | Número   | Uso                                        |
|----------------|-----------|----------|--------------------------------------------|
| `determinado`  | Masculino | Singular | `Determinado tipo é uma estrutura...`      |
| `determinada`  | Feminino  | Singular | `Determinada estrutura é uma lista...`     |
| `determinados` | Masculino | Plural   | `Determinados tipos são uns números.`      |
| `determinadas` | Feminino  | Plural   | `Determinadas estruturas são umas listas.` |

## Sintaxe

### Definição de Tipo
```
<Artigo Indefinido> <nome do tipo> <é | são> <definição>.
```

**Exemplos:**
```pop
Um número é uma estrutura com 4 bytes.
Uma string é uma estrutura com um caractere inicial e um caractere final.
Uns pixels são 15 twips.
```

### Declaração de Variável Local
```
<Comando> <valor> para <Artigo Indefinido> <tipo> [denominado <nome>].
```

**Exemplos:**
```pop
Atribua 10 para um número.
Atribua "João" para uma string denominada nome.
Ative um sinalizador denominado status.
```

### Campo de Estrutura
```
<Artigo Indefinido> <tipo> [denominado <nome>]
```

**Exemplos:**
```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

## Observações Importantes

1. **Escopo Local**: Artigos indefinidos em comandos de atribuição criam variáveis locais através de um tipo definido
2. **Definição de Tipos**: Artigos indefinidos fora de rotinas definem novos tipos
3. **Inferência de nomes**: O compilador atribui o nome do tipo à variável local quando `denominado` é omitido
4. **Inferência de tipos**: O compilador infere o tipo da variável local se o nome da variável local (tipo) for igual ao nome de um tipo definido (se não encontrar um tipo com nome idêntico, ele faz a regressão até corresponder o último nome. Exemplo: `Primeiro nome`, `novo número` `terceira linha`. Não faz correspondência se o último nome não coresponder. Exemplo: `Cor azul` (Não existe um tipo denominado `azul`, embora existe o tipo denominado `cor`).
5. **Pronomes**: Todos os pronomes demonstrativos abrangentes são equivalentes aos artigos básicos
6. **Concordância**:
   * Em variáveis, deve haver concordância de gênero e número (`Uma garota` é diferente de `Um garoto`). 
   * Concordância em número dispensada em tipos, por conta da plurazlização não precisa haver concordância de número. 
   * Concordância verbal dispensada. Verbos são tratados de maneira igual, independentemente da variação de tempo verbal, ou de pessoa.
   * Concordância nominal dispensada. Pronomes são tratados de maneira igual, independentemente do gênero e número.

---

# DIFERENÇAS ENTRE ARTIGOS DEFINIDOS E INDEFINIDOS

| Aspecto            | Artigos Definidos                                      | Artigos Indefinidos                                  |
|--------------------|--------------------------------------------------------|------------------------------------------------------|
| **Formas**         | `o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas` | `um`, `uma`, `uns`, `umas` + pronomes demonstrativos |
| **Escopo**         | Variáveis globais                                      | Variáveis locais ou tipos                            |
| **Declaração**     | Fora de rotinas                                        | Dentro de rotinas ou definição de tipos              |
| **Referência**     | Variável já existente                                  | Nova variável ou tipo                                |
| **Exemplo Global** | `O contador é um número.`                              | -                                                    |
| **Exemplo Local**  | `Adicione 5 para o contador.`                          | `Atribua 10 para um contador.`                       |
| **Exemplo Tipo**   | -                                                      | `Um número é uma estrutura com 4 bytes.`             |

---

# CONTRAÇÕES

Contrações são formas combinadas de preposições com artigos, usadas para acessar campos de estruturas.

## Contrações com Artigo Definido

### De + Artigo Definido

| Contração | Formação | Uso                   |
|-----------|----------|-----------------------|
| `do`      | de + o   | `o nome do arquivo`   |
| `da`      | de + a   | `a cor da janela`     |
| `dos`     | de + os  | `o total dos valores` |
| `das`     | de + as  | `a soma das idades`   |

### Em + Artigo Definido

| Contração | Formação | Uso            |
|-----------|----------|----------------|
| `no`      | em + o   | `no início`    |
| `na`      | em + a   | `na lista`     |
| `nos`     | em + os  | `nos arquivos` |
| `nas`     | em + as  | `nas pastas`   |

## Contrações Demonstrativas

### De + Pronome Demonstrativo

| Contração | Formação   | Uso                      |
|-----------|------------|--------------------------|
| `deste`   | de + este  | `o nome deste arquivo`   |
| `desta`   | de + esta  | `a cor desta janela`     |
| `destes`  | de + estes | `o total destes valores` |
| `destas`  | de + estas | `a soma destas idades`   |

**Exemplos de Uso:**
```pop
\ Acessando campos de estrutura
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
Escreva o nome desta pessoa para StdOut.

\ Com outras contrações
Atribua a cor da janela para uma cor.
Adicione o valor do campo para o total.
```

---

# EXEMPLOS COMPLETOS

## Declaração de Variáveis Globais

```pop
\ Com artigos definidos básicos
O contador é um número.
A mensagem é uma string.
Os totais são uns números.
As cores são umas cores.

\ Com pronomes demonstrativos adjacentes
Este número é um contador.
Esta string é uma mensagem.
Estes números são uns totais.
Estas strings são umas mensagens.

\ Com inicialização
O número pi é uma fração igual a 355/113.
A cor de fundo é uma cor igual a #FFFFFF.
```

## Definição de Tipos

```pop
\ Com artigos indefinidos básicos
Um número é uma estrutura com 4 bytes.
Uma string é uma estrutura com um caractere inicial e um caractere final.

\ Com pronomes demonstrativos abrangentes
Esse ponteiro é uma estrutura com 4 bytes.
Aquela lista é uma estrutura com uma lista inicial e uma lista final.
Certo tipo é uma estrutura com uns campos.
Determinada estrutura é uma lista com uns elementos.
```

## Declaração de Variáveis Locais

```pop
Rotina para que se processe dados:
  \ Com artigos indefinidos básicos
  Atribua 10 para um contador.
  Atribua "João" para uma string denominada nome.
  
  \ Com pronomes demonstrativos
  Atribua 20 para esse número denominado total.
  Ative aquele sinalizador denominado status.
  
  \ Referência com artigos definidos
  Adicione 5 para o contador.
  Escreva o nome para StdOut.
```

## Acesso a Campos

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se crie uma pessoa:
  Aloque memória para uma pessoa.
  
  \ Usando contrações demonstrativas
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  
  \ Lendo campos
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

---

# OBSERVAÇÕES FINAIS

1. **Case-Insensitive**: Todos os artigos são case-insensitive (`O` = `o`, `UM` = `um`)
2. **Concordância Obrigatória**: Gênero e número devem concordar com o tipo
3. **Função Sintática**: Artigos determinam escopo (global vs local)
4. **Pronomes como Artigos**: Pronomes demonstrativos funcionam como artigos
5. **Contrações**: Usadas principalmente para acesso a campos de estruturas
6. **Inferência**: O compilador usa artigos para determinar escopo e tipo de declaração

```pop
Função para que se determine se uma string é algum artigo indefinido:
  \PAL
  Se a string for "um", diga sim.
  Se a string for "uma", diga sim.
  Se a string for "uns", diga sim.
  Se a string for "umas", diga sim.
  \Se a string for "outro", diga sim.
  \Se a string for "outra", diga sim.
  \Se a string for "algum", diga sim.
  \Se a string for "alguma", diga sim.
  \Se a string for "alguns", diga sim.
  \Se a string for "algumas", diga sim.
  Se a string for algum pronome demonstrativo abrangente, diga sim. \ para funcionamento dos possessivos - local correto
  Diga não.

Função para que se determine se uma string é algum pronome demonstrativo abrangente:
  Se a string for "esse", diga sim.
  Se a string for "essa", diga sim.
  Se a string for "aquele", diga sim.
  Se a string for "aquela", diga sim.
  Se a string for "esses", diga sim.
  Se a string for "essas", diga sim.
  Se a string for "aqueles", diga sim.
  Se a string for "aquelas", diga sim.
  Se a string for "certo", diga sim.
  Se a string for "certa", diga sim.
  Se a string for "certos", diga sim.
  Se a string for "certas", diga sim.
  Se a string for "determinado", diga sim.
  Se a string for "determinada", diga sim.
  Se a string for "determinados", diga sim.
  Se a string for "determinadas", diga sim.
  Diga não.
```

---

# Pronomes - Português Puro

## Visão Geral

Pronomes são palavras que substituem ou acompanham substantivos. Em Português Puro, os pronomes têm funções específicas na sintaxe da linguagem, principalmente os **pronomes demonstrativos** que funcionam como artigos.

---

# PRONOMES DEMONSTRATIVOS

Pronomes demonstrativos indicam a posição de algo em relação às pessoas do discurso, situando-o no tempo ou no espaço. Em Português Puro, eles têm duas funções principais:

1. **Pronomes Demonstrativos Adjacentes**: Funcionam como **artigos definidos**
2. **Pronomes Demonstrativos Abrangentes**: Funcionam como **artigos indefinidos**

## Classificação por Proximidade

### Proximidade Imediata (Adjacentes)
Indicam algo próximo à pessoa que fala.

| Pronome | Gênero    | Número   | Função          | Exemplo                             |
|---------|-----------|----------|-----------------|-------------------------------------|
| `este`  | Masculino | Singular | Artigo Definido | `Este número é um contador.`        |
| `esta`  | Feminino  | Singular | Artigo Definido | `Esta string é uma mensagem.`       |
| `estes` | Masculino | Plural   | Artigo Definido | `Estes números são uns contadores.` |
| `estas` | Feminino  | Plural   | Artigo Definido | `Estas strings são umas mensagens.` |

### Proximidade Média (Abrangentes)
Indicam algo próximo à pessoa com quem se fala.

| Pronome | Gênero    | Número   | Função            | Exemplo                              |
|---------|-----------|----------|-------------------|--------------------------------------|
| `esse`  | Masculino | Singular | Artigo Indefinido | `Esse número é uma estrutura com...` |
| `essa`  | Feminino  | Singular | Artigo Indefinido | `Essa string é uma estrutura com...` |
| `esses` | Masculino | Plural   | Artigo Indefinido | `Esses números são uns tipos.`       |
| `essas` | Feminino  | Plural   | Artigo Indefinido | `Essas strings são umas estruturas.` |

### Distância (Abrangentes)
Indicam algo distante tanto de quem fala quanto de quem ouve.

| Pronome   | Gênero    | Número   | Função            | Exemplo                               |
|-----------|-----------|----------|-------------------|---------------------------------------|
| `aquele`  | Masculino | Singular | Artigo Indefinido | `Aquele tipo é uma estrutura com...`  |
| `aquela`  | Feminino  | Singular | Artigo Indefinido | `Aquela lista é uma estrutura com...` |
| `aqueles` | Masculino | Plural   | Artigo Indefinido | `Aqueles tipos são uns números.`      |
| `aquelas` | Feminino  | Plural   | Artigo Indefinido | `Aquelas listas são umas estruturas.` |

---

# PRONOMES DEMONSTRATIVOS ADJACENTES

## Função
Funcionam como **artigos definidos**, indicando variáveis globais ou referências específicas.

## Uso em Declarações Globais

```pop
\ Equivalente a: O número é um contador
Este número é um contador.

\ Equivalente a: A string é uma mensagem
Esta string é uma mensagem.

\ Equivalente a: Os números são uns contadores
Estes números são uns contadores.

\ Equivalente a: As strings são umas mensagens
Estas strings são umas mensagens.
```

## Contrações

### De + Pronome Demonstrativo Adjacente

| Contração | Formação   | Uso                      |
|-----------|------------|--------------------------|
| `deste`   | de + este  | `o nome deste arquivo`   |
| `desta`   | de + esta  | `a cor desta janela`     |
| `destes`  | de + estes | `o total destes valores` |
| `destas`  | de + estas | `a soma destas idades`   |

**Exemplos:**
```pop
\ Acessando campos de estrutura
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
Escreva o comprimento desta string para StdOut.
```

### Em + Pronome Demonstrativo Adjacente

| Contração | Formação   | Uso               |
|-----------|------------|-------------------|
| `neste`   | em + este  | `neste momento`   |
| `nesta`   | em + esta  | `nesta lista`     |
| `nestes`  | em + estes | `nestes arquivos` |
| `nestas`  | em + estas | `nestas pastas`   |

---

# PRONOMES DEMONSTRATIVOS ABRANGENTES

## Função
Funcionam como **artigos indefinidos**, usados em:
- Definição de tipos
- Declaração de variáveis locais
- Especificação de campos em estruturas

## Tipos de Pronomes Abrangentes

### 1. Proximidade Média (`esse`, `essa`, `esses`, `essas`)

**Uso em Definição de Tipos:**
```pop
Esse número é uma estrutura com 4 bytes.
Essa string é uma estrutura com um caractere inicial e um caractere final.
Esses ponteiros são umas estruturas com 4 bytes.
Essas listas são umas estruturas com uma lista inicial e uma lista final.
```

**Uso em Declaração Local:**
```pop
Rotina para que se processe dados:
  Atribua 10 para esse número denominado contador.
  Atribua "João" para essa string denominada nome.
```

### 2. Distância (`aquele`, `aquela`, `aqueles`, `aquelas`)

**Uso em Definição de Tipos:**
```pop
Aquele tipo é uma estrutura com uns campos.
Aquela estrutura é uma lista com uns elementos.
Aqueles tipos são uns números.
Aquelas estruturas são umas listas.
```

**Uso em Declaração Local:**
```pop
Rotina para que se crie variáveis:
  Atribua 20 para aquele número denominado total.
  Ative aquele sinalizador denominado status.
```

### 3. Indeterminação (`certo`, `certa`, `certos`, `certas`)

Indicam algo não especificado ou genérico.

**Uso em Definição de Tipos:**
```pop
Certo número é um contador.
Certa string é uma mensagem.
Certos números são uns contadores.
Certas strings são umas mensagens.
```

### 4. Determinação (`determinado`, `determinada`, `determinados`, `determinadas`)

Indicam algo específico mas não nomeado.

**Uso em Definição de Tipos:**
```pop
Determinado tipo é uma estrutura com uns campos.
Determinada estrutura é uma lista com uns elementos.
Determinados tipos são uns números.
Determinadas estruturas são umas listas.
```

## Contrações com Pronomes Abrangentes

### De + Pronome Demonstrativo Abrangente

| Contração  | Formação     | Uso                           |
|------------|--------------|-------------------------------|
| `desse`    | de + esse    | `o valor desse número`        |
| `dessa`    | de + essa    | `o tamanho dessa string`      |
| `desses`   | de + esses   | `a soma desses valores`       |
| `dessas`   | de + essas   | `o total dessas quantidades`  |
| `daquele`  | de + aquele  | `o nome daquele tipo`         |
| `daquela`  | de + aquela  | `a cor daquela estrutura`     |
| `daqueles` | de + aqueles | `os valores daqueles números` |
| `daquelas` | de + aquelas | `as cores daquelas listas`    |

### Em + Pronome Demonstrativo Abrangente

| Contração  | Formação     | Uso                |
|------------|--------------|--------------------|
| `nesse`    | em + esse    | `nesse caso`       |
| `nessa`    | em + essa    | `nessa situação`   |
| `nesses`   | em + esses   | `nesses momentos`  |
| `nessas`   | em + essas   | `nessas condições` |
| `naquele`  | em + aquele  | `naquele instante` |
| `naquela`  | em + aquela  | `naquela hora`     |
| `naqueles` | em + aqueles | `naqueles dias`    |
| `naquelas` | em + aquelas | `naquelas semanas` |

---

# OUTROS PRONOMES

## Pronomes Possessivos

Embora não sejam amplamente usados na sintaxe principal, pronomes possessivos podem aparecer em nomes de variáveis e tipos.

### Possessivos em Português

| Pronome          | Pessoa      | Gênero/Número | Exemplo                             |
|------------------|-------------|---------------|-------------------------------------|
<!-- 
| `meu`, `minha`   | 1ª singular | M/F           | `o meu número`, `a minha string`    |
| `teu`, `tua`     | 2ª singular | M/F           | `o teu contador`, `a tua mensagem`  |
| `seu`, `sua`     | 3ª singular | M/F           | `o seu valor`, `a sua cor`          |
| `nosso`, `nossa` | 1ª plural   | M/F           | `o nosso total`, `a nossa lista`    |
| `vosso`, `vossa` | 2ª plural   | M/F           | `o vosso resultado`, `a vossa soma` |
 -->

### Possessivos em Inglês
<!-- 
Para compatibilidade com código existente, a linguagem suporta o possessivo inglês `'s`:

```pop
\ Exemplo (uso raro)
O valor de João's é um número.
``` -->

---

# PRONOMES RELATIVOS

Pronomes relativos estabelecem relações entre orações. Em Português Puro, aparecem principalmente em preposições e locuções.

| Pronome                          | Uso                    | Exemplo                               |
|----------------------------------|------------------------|---------------------------------------|
| `que`                            | Relação geral          | `um ponteiro que aponta para um byte` |
| `qual`, `quais`                  | Interrogativo/relativo | `o qual tipo`, `os quais valores`     |
| `cujo`, `cuja`, `cujos`, `cujas` | Posse                  | `cuja cor`, `cujo valor`              |

**Exemplos:**
```pop
\ Uso de 'que' em definições
Um caractere inicial é um ponteiro que aponta para um byte.

\ Uso de 'cujo' em preposições
Próximo de cuja cor seja vermelha.
```

---

# TABELA RESUMO DE PRONOMES DEMONSTRATIVOS

| Proximidade       | Singular M    | Singular F    | Plural M       | Plural F       | Função            |
|-------------------|---------------|---------------|----------------|----------------|-------------------|
| **Imediata**      | `este`        | `esta`        | `estes`        | `estas`        | Artigo Definido   |
| **Média**         | `esse`        | `essa`        | `esses`        | `essas`        | Artigo Indefinido |
| **Distante**      | `aquele`      | `aquela`      | `aqueles`      | `aquelas`      | Artigo Indefinido |
| **Indeterminado** | `certo`       | `certa`       | `certos`       | `certas`       | Artigo Indefinido |
| **Determinado**   | `determinado` | `determinada` | `determinados` | `determinadas` | Artigo Indefinido |

---

# EXEMPLOS COMPLETOS

## Usando Pronomes Demonstrativos Adjacentes

```pop
\ Declaração de variáveis globais
Este contador é um número.
Esta mensagem é uma string.
Estes totais são uns números.
Estas cores são umas cores.

\ Acesso a campos
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

## Usando Pronomes Demonstrativos Abrangentes

```pop
\ Definição de tipos com 'esse/essa'
Esse número é uma estrutura com 4 bytes.
Essa string é uma estrutura com um caractere inicial e um caractere final.

\ Definição de tipos com 'aquele/aquela'
Aquele ponteiro é uma estrutura com 4 bytes.
Aquela lista é uma estrutura com uma lista inicial e uma lista final.

\ Definição de tipos com 'certo/certa'
Certo tipo é uma estrutura com uns campos.
Certa estrutura é uma lista com uns elementos.

\ Definição de tipos com 'determinado/determinada'
Determinado valor é um número.
Determinada quantidade é uma fração.
```

## Usando Contrações

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade e
  Uma cor denominada cor favorita.

Rotina para que se processe pessoa:
  \ Contrações com 'desta'
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  
  \ Contrações com 'dessa'
  Escreva o comprimento dessa string para StdOut.
  
  \ Contrações com 'daquela'
  Se a cor daquela pessoa for vermelha, retorne.
```

---

# OBSERVAÇÕES FINAIS

1. **Função Sintática**: Pronomes demonstrativos funcionam como artigos em Português Puro
2. **Adjacentes = Definidos**: `este`, `esta`, `estes`, `estas` funcionam como artigos definidos
3. **Abrangentes = Indefinidos**: `esse`, `aquele`, `certo`, `determinado` (e variações) funcionam como artigos indefinidos
4. **Contrações Obrigatórias**: Use `desta`, `deste`, etc. para acessar campos de estruturas
5. **Case-Insensitive**: Todos os pronomes são case-insensitive
6. **Concordância**: Gênero e número devem concordar com o substantivo
7. **Estilo**: Pronomes demonstrativos oferecem variações estilísticas sem alterar a semântica
8. **Equivalência**: `Um tipo` = `Esse tipo` = `Aquele tipo` = `Certo tipo` = `Determinado tipo`

---

# Preposições - Português Puro

## Visão Geral

Preposições são palavras invariáveis que estabelecem relações entre termos de uma oração. Em Português Puro, as preposições têm funções sintáticas importantes, conectando variáveis, expressões e comandos.

---

## Categorias de Preposições

### 1. Preposições Conectivas
Preposições essenciais que conectam termos.

| Preposição | Uso                                  | Exemplo                         |
|------------|--------------------------------------|---------------------------------|
| `a`        | Direção, destino (sentido de "para") | `Atribua 10 a um número`        |
| `de`       | Origem, posse, relação               | `o nome de João`, `partir de 0` |
| `para`     | Destino, finalidade                  | `Atribua 10 para um número`     |
| `em`       | Localização, estado                  | `em branco`, `na lista`         |
| `com`      | Companhia, instrumento               | `com 4 bytes`, `com o valor`    |
| `por`      | Meio, agente                         | `por extenso`, `dividido por 2` |

### 2. Preposições de Posição

| Preposição | Significado               | Exemplo               |
|------------|---------------------------|-----------------------|
| `acima`    | Posição superior          | `acima de 10`         |
| `abaixo`   | Posição inferior          | `abaixo de 100`       |
| `sob`      | Embaixo, subordinação     | `sob o primeiro byte` |
| `debaixo`  | Posição inferior          | `debaixo da linha`    |
| `sobre`    | Posição superior, assunto | `sobre a tabela`      |
| `entre`    | Posição intermediária     | `entre 0 e 10`        |
| `dentre`   | Dentre vários             | `dentre os valores`   |
| `perto`    | Proximidade               | `perto do centro`     |
| `próximo`  | Proximidade               | `próximo ao valor`    |

### 3. Preposições Temporais

| Preposição | Significado              | Exemplo              |
|------------|--------------------------|----------------------|
| `antes`    | Anterioridade            | `antes de processar` |
| `depois`   | Posterioridade           | `depois de calcular` |
| `após`     | Posterioridade           | `após a validação`   |
| `desde`    | Ponto inicial            | `desde o início`     |
| `durante`  | Duração                  | `durante a execução` |
| `até`      | Limite temporal/espacial | `até o fim`          |
| `enquanto` | Simultaneidade           | `enquanto processa`  |

### 4. Preposições de Modo

| Preposição | Significado          | Exemplo                |
|------------|----------------------|------------------------|
| `como`     | Modo, comparação     | `como uma string`      |
| `segundo`  | Conformidade         | `segundo a regra`      |
| `mediante` | Por meio de          | `mediante validação`   |
| `via`      | Por meio de, através | `via API`              |
| `usando`   | Instrumento          | `usando o percorredor` |
| `através`  | Por meio de          | `através da função`    |

### 5. Preposições Compostas

| Preposição       | Formação         | Exemplo                 |
|------------------|------------------|-------------------------|
| `a partir de`    | a + partir + de  | `a partir de 0`         |
| `partindo de`    | partindo + de    | `partindo de zero`      |
| `dentro de`      | dentro + de      | `dentro de 10 segundos` |
| `acerca de`      | acerca + de      | `acerca do valor`       |
| `em comprimento` | em + comprimento | `em comprimento igual`  |

### 6. Preposições de Relação

| Preposição    | Significado  | Exemplo               |
|---------------|--------------|-----------------------|
| `referente`   | Relativo a   | `referente ao campo`  |
| `pertencente` | Que pertence | `pertencente à lista` |
| `pertinente`  | Relativo a   | `pertinente ao caso`  |
| `relativo`    | Relativo a   | `relativo ao valor`   |
| `relativa`    | Relativa a   | `relativa à posição`  |
| `concernente` | Que concerne | `concernente ao tipo` |
| `atinente`    | Relativo a   | `atinente ao campo`   |

### 7. Preposições de Orientação

| Preposição   | Significado     | Exemplo                     |
|--------------|-----------------|-----------------------------|
| `aproado`    | Orientado para  | `aproado ao norte`          |
| `aproada`    | Orientada para  | `aproada ao sul`            |
| `aproando`   | Orientando para | `aproando ao leste`         |
| `orientado`  | Direcionado     | `orientado para cima`       |
| `orientada`  | Direcionada     | `orientada para baixo`      |
| `orientando` | Direcionando    | `orientando para a direita` |
| `voltado`    | Virado para     | `voltado para frente`       |
| `voltada`    | Virada para     | `voltada para trás`         |
| `virado`     | Voltado para    | `virado para a esquerda`    |
| `virada`     | Voltada para    | `virada para a direita`     |
| `virando`    | Voltando para   | `virando para o norte`      |

### 8. Preposições de Comparação

| Preposição   | Significado   | Exemplo                 |
|--------------|---------------|-------------------------|
| `tal`        | Tal como      | `tal como o exemplo`    |
| `como`       | Comparação    | `como um número`        |
| `tão`        | Intensidade   | `tão grande quanto`     |
| `tanto`      | Quantidade    | `tanto quanto possível` |
| `quanto`     | Quantidade    | `quanto maior`          |
| `quão`       | Intensidade   | `quão grande`           |
| `qual`       | Interrogativo | `qual valor`            |
| `parecido`   | Semelhante    | `parecido com`          |
| `parecida`   | Semelhante    | `parecida com`          |
| `semelhante` | Similar       | `semelhante a`          |
| `similar`    | Parecido      | `similar ao`            |

### 9. Preposições de Restrição

| Preposição       | Significado | Exemplo                  |
|------------------|-------------|--------------------------|
| `sem`            | Ausência    | `sem valor`              |
| `só`             | Apenas      | `só números`             |
| `somente`        | Apenas      | `somente letras`         |
| `unicamente`     | Apenas      | `unicamente bytes`       |
| `exclusivamente` | Apenas      | `exclusivamente strings` |
| `apenas`         | Somente     | `apenas positivos`       |

### 10. Preposições Especiais

| Preposição        | Significado         | Exemplo                |
|-------------------|---------------------|------------------------|
| `ante`            | Diante de           | `ante o problema`      |
| `perante`         | Diante de           | `perante o compilador` |
| `contra`          | Oposição            | `contra a regra`       |
| `versus`          | Contra, em oposição | `A versus B`           |
| `cerca`           | Aproximadamente     | `cerca de 100`         |
| `aproximadamente` | Cerca de            | `aproximadamente 50`   |
| `algum`           | Indeterminação      | `algum valor`          |
| `fora`            | Exterior            | `fora do intervalo`    |
| `menores`         | Comparação          | `menores que 10`       |

### 11. Preposições de Dimensão

| Preposição | Significado             | Exemplo               |
|------------|-------------------------|-----------------------|
| `alta`     | Altura (feminino)       | `de altura alta`      |
| `alto`     | Altura (masculino)      | `de alto valor`       |
| `comprido` | Comprimento (masculino) | `de tamanho comprido` |
| `comprida` | Comprimento (feminino)  | `de linha comprida`   |
| `largo`    | Largura (masculino)     | `de espaço largo`     |
| `larga`    | Largura (feminino)      | `de margem larga`     |

### 12. Preposições de Resultado

| Preposição   | Significado | Exemplo                |
|--------------|-------------|------------------------|
| `gerando`    | Produzindo  | `gerando um resultado` |
| `resultando` | Produzindo  | `resultando em erro`   |
| `retornando` | Devolvendo  | `retornando um valor`  |
| `dando`      | Fornecendo  | `dando um nome`        |
| `dado`       | Fornecido   | `dado o valor`         |
| `dada`       | Fornecida   | `dada a condição`      |

### 13. Preposições de Início

| Preposição  | Significado      | Exemplo                |
|-------------|------------------|------------------------|
| `começando` | Iniciando        | `começando de zero`    |
| `iniciando` | Começando        | `iniciando o processo` |
| `partir`    | Ponto de partida | `a partir de`          |
| `partindo`  | Saindo de        | `partindo de zero`     |

### 14. Preposições Pronominais

| Preposição | Significado              | Exemplo         |
|------------|--------------------------|-----------------|
| `cujo`     | Posse (masculino)        | `cujo valor`    |
| `cuja`     | Posse (feminino)         | `cuja cor`      |
| `cujos`    | Posse (plural masculino) | `cujos valores` |
| `cujas`    | Posse (plural feminino)  | `cujas cores`   |

### 15. Contrações Especiais

| Contração | Formação   | Uso               |
|-----------|------------|-------------------|
| `acordo`  | de acordo  | `de acordo com`   |

---

## Observações Importantes

1. **Preposições Conectivas Essenciais**: `a`, `de`, `para`, `em`, `com`, `por`
2. **Contrações**: Preposições podem se contrair com artigos (ex: `de + o = do`)
3. **Contexto**: O significado pode variar conforme o contexto
4. **Case-Insensitive**: Todas as preposições são case-insensitive
5. **Duplicações**: Algumas preposições aparecem duplicadas no código-fonte (ex: `usando`, `via`, `com`)
6. **Comentadas**: Algumas preposições estão comentadas no código-fonte (ex: `baixo`, `contendo`, `que`, `esquerda`)

---

## Uso em Expressões

### Acesso a Campos (com Contrações)

**Importante**: Preposições são usadas através de **contrações com pronomes adjacentes** para acessar campos de estruturas.

```pop
\\ Definição de estrutura
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

\\ Acesso a campos usando contrações (de + este/esta = deste/desta)
Atribua "João" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.
Escreva o nome desta pessoa para StdOut.

\\ Mais exemplos de contrações
o comprimento desta string
a cor desta janela
o valor deste campo
a largura deste retângulo
```

### Direção e Destino
```pop
Atribua 10 para um número.
Mova para a direita.
Vá até o fim.
```

### Localização
```pop
Se o valor estiver entre 0 e 10...
Se a posição for acima de 100...
Se o número estiver abaixo de zero...
```

### Modo e Instrumento
```pop
Processe usando o percorredor.
Calcule via API.
Opere segundo a regra.
```

### Comparação
```pop
Se o valor for tal como o exemplo...
Se for tão grande quanto possível...
Se for semelhante ao padrão...
```

---

## Estatísticas

- **Total de preposições identificadas**: ~120+
- **Categorias**: 16
- **Preposições essenciais**: 6
- **Preposições compostas**: 5+
- **Duplicações no código-fonte**: ~10
- **Preposições comentadas**: 4

---

## Observações Finais

1. **Naturalidade**: Grande variedade permite expressões naturais em português
2. **Redundância**: Algumas preposições aparecem duplicadas no código-fonte
3. **Flexibilidade**: Múltiplas formas para expressar a mesma relação
4. **Contexto**: Significado determinado pelo contexto de uso
5. **Compatibilidade**: Mantém `after` em inglês para compatibilidade
6. **Comentadas**: `baixo`, `contendo`, `que`, `esquerda` estão comentadas (possivelmente ambíguas)

---

# Conjunções - Português Puro

## Visão Geral

Conjunções em Português Puro são palavras que **conectam** elementos, expressões ou instruções. Elas são usadas para separar campos em estruturas, parâmetros em rotinas, e elementos em listas.

---

## Lista de Conjunções

Português Puro possui **3 conjunções principais**:

| Conjunção | Tipo        | Uso                |
|-----------|-------------|--------------------|
| `e`       | Aditiva     | Adiciona elementos |
| `ou`      | Alternativa | Indica alternância |
| `nem`     | Negativa    | Negação aditiva    |

**Nota:** As conjunções inglesas `neither` e `nor` também são reconhecidas, mas devem ser removidas em versões futuras.

---

## Uso de Conjunções

### 1. Separação de Campos em Estruturas

Conjunções são usadas para **separar campos** em definições de tipos estruturados:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade e
  Uma string denominada email.
```

**Alternativas válidas:**

```pop
\\ Usando vírgula
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email.

\\ Usando "ou"
Uma pessoa é uma estrutura com
  Uma string denominada nome ou
  Um número denominado idade ou
  Uma string denominada email.
```

---

### 2. Separação de Parâmetros em Rotinas

Conjunções separam parâmetros em cabeçalhos de rotinas e funções:

```pop
Rotina para que se processe um nome e um sobrenome e uma idade:
  Escreva o nome junto com " " junto com o sobrenome no console.
  Escreva "Idade: " junto com a idade no console.
```

**Com vírgula:**

```pop
Rotina para que se processe um nome, um sobrenome, uma idade:
  \\ Implementação...
```

---

### 3. Chamadas de Rotinas com Múltiplos Argumentos

Conjunções separam argumentos em chamadas de rotinas:

```pop
Processe "João" e "Silva" e 30.
```

**Alternativas:**

```pop
\\ Usando vírgula
Processe "João", "Silva", 30.

\\ Usando "ou"
Processe "João" ou "Silva" ou 30.
```

---

### 4. Chamadas Externas (DLLs)

Conjunções separam parâmetros em chamadas de bibliotecas externas:

```pop
Processe "user32.dll" "MessageBoxA" com
  0 e
  "Mensagem" e
  "Título" e
  0
retornando o resultado.
```

---

### 5. Operador de Continuidade

A conjunção `e` também funciona como **operador de continuidade** em expressões:

```pop
\\ Múltiplas operações
Adicione 1 para o contador e
Multiplique o total por 2 e
Escreva o resultado no console.
```

---

## Vírgula como Conjunção

A **vírgula** (`,`) funciona como uma conjunção implícita:

```pop
\\ Equivalente a usar "e"
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X1,
  Uma coordenada denominada coordenada Y1,
  Uma coordenada denominada coordenada X2,
  Uma coordenada denominada coordenada Y2.
```

---

## Ponto-e-Vírgula como Separador

O **ponto-e-vírgula** (`;`) também pode ser usado como separador:

```pop
\\ Separando instruções
Atribua 0 para o contador; Atribua "" para a string; Retorne.
```

---

## Conjunção `nem`

A conjunção `nem` é usada para **negação aditiva**:

```pop
\\ Em condicionais (uso raro)
Se o número não for 0 nem for 1, processe.

\\ Equivalente a:
Se o número não for 0,
  Se o número não for 1, processe.
```

**Nota:** O uso de `nem` é menos comum e geralmente substituído por múltiplas condições.

---

## Diferença entre `e` e `ou`

### Conjunção `e` (Aditiva)

Indica que **todos** os elementos são incluídos:

```pop
\\ Todos os campos são obrigatórios
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade e
  Uma string denominada email.
```

### Conjunção `ou` (Alternativa)

Indica **alternância** ou **opções**:

```pop
\\ Campos alternativos (menos comum em definições)
Rotina para que se processe um número ou uma string:
  \\ Pode receber número OU string
```

**Importante:** Na prática, `e` e `ou` são tratados de forma similar pelo compilador em definições de estruturas e listas de parâmetros. A diferença é mais semântica do que sintática.

---

## Observações Importantes

1. **Equivalência**: `e`, `ou` e `,` são tratados de forma similar
2. **Ponto final**: O último elemento sempre termina com `.`
3. **Flexibilidade**: Escolha a conjunção que torna o código mais legível
4. **Vírgula**: Mais comum em listas longas de campos
5. **`e`**: Mais natural em português, preferido em textos
6. **`ou`**: Indica alternância semântica
7. **`nem`**: Uso raro, principalmente em condicionais
8. **Case-insensitive**: Não diferencia maiúsculas de minúsculas
9. **Ponto-e-vírgula**: Usado para separar instruções na mesma linha
10. **Conjunções inglesas**: Devem ser evitadas (deprecated)

---

## Boas Práticas

1. **Use vírgulas** para listas longas de campos (mais limpo)
2. **Use `e`** para listas curtas (mais natural em português)
3. **Seja consistente** dentro do mesmo arquivo
4. **Evite `ou`** em definições de estruturas (pode causar confusão)
5. **Use `e`** como operador de continuidade
6. **Evite `nem`** (use múltiplas condições)
7. **Não misture** estilos no mesmo bloco
8. **Prefira vírgulas** em definições de tipos
9. **Prefira `e`** em chamadas de rotinas
10. **Evite conjunções inglesas** (deprecated)

---

## Exemplos Completos

### Estrutura com Vírgulas

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email,
  Uma string denominada telefone.
```

---

### Estrutura com `e`

```pop
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.
```

---

### Rotina com Múltiplos Parâmetros

```pop
Rotina para que se calcule área usando uma largura e uma altura:
  Atribua a largura vezes a altura para uma área.
  Escreva "Área: " junto com a área no console.
```

---

### Chamada com Conjunções

```pop
\\ Chamada com "e"
Calcule área usando 10 e 20.

\\ Chamada com vírgula
Calcule área usando 10, 20.
```

---

### Operador de Continuidade

```pop
Rotina para que se processe dados:
  Atribua 0 para o contador e
  Atribua "" para a string e
  Limpe o buffer e
  Retorne.
```

---

### Chamada Externa com Conjunções

```pop
Processe "kernel32.dll" "HeapAlloc" com
  o heap e
  8 e
  o tamanho
retornando o ponteiro.
```

---

## Comparação de Estilos

### Estilo 1: Vírgulas (Recomendado para estruturas)

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada X1,
  Uma coordenada denominada Y1,
  Uma coordenada denominada X2,
  Uma coordenada denominada Y2.
```

### Estilo 2: Conjunção `e` (Mais natural)

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada X1 e
  Uma coordenada denominada Y1 e
  Uma coordenada denominada X2 e
  Uma coordenada denominada Y2.
```

### Estilo 3: Misto (Evitar)

```pop
\\ ❌ NÃO RECOMENDADO - Inconsistente
Uma caixa é uma estrutura com
  Uma coordenada denominada X1,
  Uma coordenada denominada Y1 e
  Uma coordenada denominada X2,
  Uma coordenada denominada Y2.
```

---

## Estatísticas

- **Conjunções principais**: 3 (`e`, `ou`, `nem`)
- **Conjunções inglesas**: 2 (`neither`, `nor`) - deprecated
- **Separadores equivalentes**: 2 (`,`, `;`)
- **Uso mais comum**: `e` e `,`
- **Uso raro**: `nem`, `ou`
- **Case-insensitive**: Sim
- **Operador de continuidade**: `e`

---

# Advérbios - Português Puro

## Visão Geral

Advérbios em Português Puro são palavras que modificam ou complementam o significado de verbos, expressões e comandos. A linguagem possui duas categorias principais de advérbios:

1. **Advérbios de Negação**: Invertem o significado de comparações e condições
2. **Advérbios Ignoráveis**: Podem ser omitidos sem alterar o significado

---

## Categorias de Advérbios

### 1. Advérbios de Negação
### 2. Advérbios Ignoráveis

---

## 1. Advérbios de Negação

### Função

O advérbio de negação **inverte** o significado de comparações e expressões condicionais.

### Lista

| Advérbio | Função           | Uso                 |
|----------|------------------|---------------------|
| `não`    | Negação/Inversão | Inverte comparações |

### Sintaxe

```pop
Se <sujeito> não <verbo> <complemento>, <ação>.
```

---

## Uso em Expressões Condicionais

### Negação de Igualdade

```pop
\\ Negação simples
Se o número não for 0, continue.
Se a string não for "vazio", processe.
Se o valor não é igual a 10, retorne.

\\ Com verbos diferentes
Se o contador não está zerado, decremente.
Se o ponteiro não for nulo, desaloque.
```

---

### Negação de Comparação

```pop
\\ Comparações numéricas negadas
Se o valor não for maior que 10, incremente.
Se a idade não for menor que 18, permita acesso.

\\ Estados negados
Se o arquivo não existe, crie.
Se a lista não estiver vazia, processe.
Se o buffer não estiver em branco, limpe.
```

---

### Negação de Posse/Conteúdo

```pop
\\ Ter/Conter negado
Se a lista não tem elementos, retorne.
Se a string não contém espaços, valide.
Se o objeto não possui nome, atribua um padrão.
```

---

## Uso em Funções Deliberativas

```pop
\\ Validação com negação
Função para que se determine se um número não é zero:
  Se o número for 0, diga não.
  Diga sim.

\\ Verificação de estado
Função para que se determine se uma string não está vazia:
  Se a quantidade de caracteres desta string for 0, diga não.
  Diga sim.

\\ Múltiplas negações
Função para que se determine se um valor é válido:
  Se o valor não for nulo e não for negativo, diga sim.
  Diga não.
```

---

## Combinação com Outros Operadores

### Negação + Conjunções

```pop
\\ E lógico com negação
Se o nome não estiver em branco e a idade não for 0, valide.

\\ OU lógico com negação
Se o status não for "ativo" ou não for "pendente", alerte.

\\ NEM
Se o valor não for "A" nem for "B", rejeite.
```

---

### Negação Dupla

```pop
\\ Duas negações (afirmação)
Se não é verdade que o número não é positivo, continue.
\\ Equivalente a: Se o número é positivo, continue.
```

**Nota**: Evite negações duplas para manter clareza.

---

## 2. Advérbios Ignoráveis

### Função

Advérbios que podem ser **omitidos** sem alterar o significado da instrução. São usados apenas para tornar o código mais natural e legível.

### Lista

| Advérbio | Função                 | Uso                           |
|----------|------------------------|-------------------------------|
| `já`     | Ênfase temporal        | Opcional em qualquer contexto |
| `ainda`  | Ênfase de continuidade | Opcional em qualquer contexto |

---

## Uso de Advérbios Ignoráveis

### Com `já`

```pop
\\ Com "já"
Se o arquivo já existe, abra.
Se o contador já for 10, pare.

\\ Sem "já" (equivalente)
Se o arquivo existe, abra.
Se o contador for 10, pare.
```

---

### Com `ainda`

```pop
\\ Com "ainda"
Se o processo ainda está executando, aguarde.
Se ainda há elementos na lista, continue.

\\ Sem "ainda" (equivalente)
Se o processo está executando, aguarde.
Se há elementos na lista, continue.
```

---

### Combinação de Ignoráveis

```pop
\\ Com ambos
Se o sistema já está pronto e ainda tem recursos, inicie.

\\ Sem ambos (equivalente)
Se o sistema está pronto e tem recursos, inicie.
```

---

## Observações Importantes

1. **Negação Única**: `não` é o único advérbio de negação
2. **Case-Insensitive**: `não`, `NÃO`, `Não` são equivalentes
3. **Posição**: `não` sempre precede o verbo
4. **Ignoráveis**: `já` e `ainda` podem aparecer em qualquer posição
5. **Clareza**: Evite negações duplas ou triplas
6. **Naturalidade**: Use ignoráveis para tornar código mais legível
7. **Opcional**: Ignoráveis nunca são obrigatórios
8. **Sem Efeito**: Ignoráveis não afetam a lógica do programa
9. **Estilo**: Use ignoráveis consistentemente no projeto
10. **Compilação**: Ignoráveis são descartados durante compilação

---

## Boas Práticas

1. **Use `não` para Negação**: É claro e direto
2. **Evite Negações Múltiplas**: Prefira afirmações positivas
3. **Ignoráveis com Moderação**: Use apenas quando melhorar legibilidade
4. **Consistência**: Se usar ignoráveis, use em todo o projeto
5. **Clareza sobre Estilo**: Priorize código claro sobre natural
6. **Documentação**: Comente lógicas com negações complexas
7. **Testes**: Teste especialmente condições negadas
8. **Refatoração**: Considere funções auxiliares para negações complexas
9. **Leitura**: Leia em voz alta para verificar naturalidade
10. **Simplicidade**: Prefira lógica simples e direta

---

## Exemplos Práticos

### Validação de Entrada

```pop
Rotina para que se valide entrada:
  \\ Com negação
  Se o nome não estiver em branco e a idade não for 0,
    Processe os dados;
    Retorne.
  
  \\ Mensagem de erro
  Escreva "Dados inválidos!" no console.
```

---

### Verificação de Estado

```pop
Função para que se determine se o sistema está pronto:
  \\ Com ignoráveis e negação
  Se o banco já está conectado e o cache ainda não está inicializado,
    Diga não.
  
  \\ Sem ignoráveis (equivalente)
  Se o banco está conectado e o cache não está inicializado,
    Diga não.
  
  Diga sim.
```

---

### Controle de Fluxo

```pop
Rotina para que se processe lista:
  Itere.
    \\ Negação em condição de parada
    Se a lista não tem mais elementos, pare.
    
    \\ Com ignorável
    Se o item já foi processado, reitere.
    
    Processe o próximo item.
  Reitere.
```

---

### Lógica Complexa

```pop
Função para que se determine se pode prosseguir:
  \\ Múltiplas negações
  Se o usuário não está autenticado, diga não.
  Se o recurso não está disponível, diga não.
  Se a permissão não foi concedida, diga não.
  
  \\ Tudo OK
  Diga sim.
```

---

### Comparação: Com e Sem Ignoráveis

```pop
\\ VERSÃO 1: Com ignoráveis (mais natural)
Rotina para que se inicie aplicação:
  Se o sistema já está configurado e ainda tem memória disponível,
    Inicie os serviços;
    Retorne.
  
  Escreva "Sistema não está pronto" no console.

\\ VERSÃO 2: Sem ignoráveis (mais concisa)
Rotina para que se inicie aplicação:
  Se o sistema está configurado e tem memória disponível,
    Inicie os serviores;
    Retorne.
  
  Escreva "Sistema não está pronto" no console.

\\ Ambas são equivalentes!
```

---

## Diferenças com Outras Linguagens

| Aspecto              | Português Puro        | Outras Linguagens      |
|----------------------|-----------------------|------------------------|
| Negação              | `não`                 | `!`, `not`, `NOT`      |
| Posição da negação   | Antes do verbo        | Antes da expressão     |
| Advérbios ignoráveis | `já`, `ainda`         | Não existem            |
| Negação dupla        | Possível (evitar)     | `!!` (double negation) |
| Case-sensitive       | Não                   | Geralmente sim         |
| Naturalidade         | Alta (português real) | Baixa (sintaxe formal) |

---

## Exemplos de Negação em Diferentes Contextos

### Negação de Igualdade

```pop
Se o valor não for 0, ...
Se a string não é "vazio", ...
Se o ponteiro não está nulo, ...
```

---

### Negação de Comparação Numérica

```pop
Se o número não for maior que 10, ...
Se a idade não for menor que 18, ...
Se o total não excede o limite, ...
```

---

### Negação de Estado

```pop
Se o arquivo não existe, ...
Se a variável não estiver em branco, ...
Se o sistema não está pronto, ...
```

---

### Negação de Posse

```pop
Se a lista não tem elementos, ...
Se a string não contém espaços, ...
Se o objeto não possui nome, ...
```

---

## Antipadrões (Evitar)

### ❌ Negação Tripla

```pop
\\ RUIM: Muito confuso
Se não é verdade que o número não é não-positivo, ...

\\ BOM: Direto e claro
Se o número for positivo, ...
```

---

### ❌ Excesso de Ignoráveis

```pop
\\ RUIM: Poluído
Se o sistema já ainda está pronto, ...

\\ BOM: Moderado
Se o sistema já está pronto, ...
\\ ou
Se o sistema está pronto, ...
```

---

### ❌ Negação Ambígua

```pop
\\ RUIM: Ambíguo
Se o valor não for maior que 10 ou menor que 0, ...

\\ BOM: Claro com parênteses (se suportado) ou função auxiliar
Função para que se determine se o valor está fora do intervalo:
  Se o valor for maior que 10, diga sim.
  Se o valor for menor que 0, diga sim.
  Diga não.

Se o valor está fora do intervalo, ...
```

---

## Estatísticas

- **Total de advérbios**: 3
- **Advérbios de negação**: 1 (`não`)
- **Advérbios ignoráveis**: 2 (`já`, `ainda`)
- **Uso mais comum**: `não` (negação)
- **Frequência de ignoráveis**: Baixa (opcional)
- **Case-insensitive**: Sim
- **Posição**: Variável (exceto `não` que precede verbo)
- **Efeito na compilação**: Ignoráveis são removidos
- **Impacto na lógica**: Apenas `não` afeta lógica

---

## Resumo

### Advérbio de Negação (`não`)

- **Função**: Inverte comparações e condições
- **Posição**: Sempre antes do verbo
- **Obrigatório**: Quando negação é necessária
- **Efeito**: Altera a lógica do programa

### Advérbios Ignoráveis (`já`, `ainda`)

- **Função**: Tornar código mais natural
- **Posição**: Flexível
- **Obrigatório**: Nunca
- **Efeito**: Nenhum (removidos na compilação)

### Recomendação Geral

Use `não` quando precisar negar condições. Use `já` e `ainda` com moderação, apenas quando melhorarem significativamente a legibilidade do código.

---

# Verbos - Português Puro

## Visão Geral

Verbos em Português Puro são palavras-chave usadas principalmente em **expressões condicionais** e **cabeçalhos de funções/rotinas**. Eles permitem que a linguagem mantenha uma sintaxe natural em português, especialmente em funções deliberativas.

---

## Função dos Verbos

### Uso Principal

Verbos são usados em:

1. **Expressões Condicionais** (`Se`)
2. **Cabeçalhos de Funções** (`Função para que se determine se`)
3. **Cabeçalhos de Rotinas** (nomes naturais)

### Normalização

O compilador **normaliza** verbos para formas canônicas:
- `for`, `foi`, `foram`, `forem` → `é`
- `estiver`, `estiverem`, `estava`, `estavam` → `está`
- `tiver`, `têm` → `tem`
- `puder`, `puderem`, `poderia` → `pode`

---

## Lista Completa de Verbos

### 1. Ser/Estar (Equivalência)

| Verbo       | Forma Canônica | Uso                           |
|-------------|----------------|-------------------------------|
| `é`         | `é`            | Singular presente             |
| `são`       | `é`            | Plural presente               |
| `for`       | `é`            | Singular futuro do subjuntivo |
| `forem`     | `é`            | Plural futuro do subjuntivo   |
| `foi`       | `é`            | Singular pretérito            |
| `foram`     | `é`            | Plural pretérito              |
| `será`      | `é`            | Singular futuro               |
| `serão`     | `é`            | Plural futuro                 |
| `ser`       | `é`            | Infinitivo                    |
| `está`      | `está`         | Singular presente             |
| `estão`     | `está`         | Plural presente               |
| `estiver`   | `está`         | Singular subjuntivo           |
| `estiverem` | `está`         | Plural subjuntivo             |
| `estava`    | `está`         | Singular pretérito            |
| `estavam`   | `está`         | Plural pretérito              |
| `estará`    | `está`         | Singular futuro               |
| `estarão`   | `está`         | Plural futuro                 |
| `estamos`   | `está`         | Primeira pessoa plural        |
| `estar`     | `está`         | Infinitivo                    |

---

### 2. Ter/Haver (Posse/Existência)

| Verbo    | Forma Canônica | Uso                 |
|----------|----------------|---------------------|
| `tem`    | `tem`          | Singular presente   |
| `têm`    | `tem`          | Plural presente     |
| `ter`    | `tem`          | Infinitivo          |
| `tiver`  | `tem`          | Subjuntivo          |
| `há`     | `há`           | Impessoal (existir) |
| `houver` | `há`           | Subjuntivo          |

---

### 3. Conter (Inclusão)

| Verbo      | Forma Canônica | Uso               |
|------------|----------------|-------------------|
| `contém`   | `contém`       | Singular presente |
| `conter`   | `contém`       | Infinitivo        |
| `contiver` | `contém`       | Subjuntivo        |

---

### 4. Possuir (Posse)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `possui`  | `possui`       | Singular presente |
| `possuem` | `possui`       | Plural presente   |
| `possuir` | `possui`       | Infinitivo        |

---

### 5. Poder (Capacidade)

| Verbo     | Forma Canônica | Uso                    |
|-----------|----------------|------------------------|
| `pode`    | `pode`         | Singular presente      |
| `podem`   | `pode`         | Plural presente        |
| `podemos` | `pode`         | Primeira pessoa plural |
| `poderia` | `pode`         | Condicional            |
| `puder`   | `pode`         | Subjuntivo singular    |
| `puderem` | `pode`         | Subjuntivo plural      |

---

### 6. Dever (Obrigação)

| Verbo      | Forma Canônica | Uso                  |
|------------|----------------|----------------------|
| `deve`     | `deve`         | Singular presente    |
| `devem`    | `deve`         | Plural presente      |
| `deveria`  | `deve`         | Condicional singular |
| `deveriam` | `deve`         | Condicional plural   |

---

### 7. Existir (Existência)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `existe`  | `existe`       | Singular presente |
| `existem` | `existe`       | Plural presente   |
| `existir` | `existe`       | Infinitivo        |

---

### 8. Caber (Capacidade)

| Verbo    | Forma Canônica | Uso               |
|----------|----------------|-------------------|
| `cabe`   | `cabe`         | Singular presente |
| `couber` | `cabe`         | Subjuntivo        |

---

### 9. Começar/Iniciar (Início)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `começa`  | `começa`       | Singular presente |
| `começar` | `começa`       | Infinitivo        |
| `inicia`  | `inicia`       | Singular presente |
| `iniciar` | `inicia`       | Infinitivo        |

---

### 10. Finalizar/Terminar (Fim)

| Verbo       | Forma Canônica | Uso               |
|-------------|----------------|-------------------|
| `finaliza`  | `finaliza`     | Singular presente |
| `finalizar` | `finaliza`     | Infinitivo        |
| `termina`   | `termina`      | Singular presente |
| `terminar`  | `termina`      | Infinitivo        |

---

### 11. Outros Verbos

| Verbo        | Uso                    |
|--------------|------------------------|
| `excede`     | Singular (ultrapassar) |
| `excedem`    | Plural (ultrapassar)   |
| `necessita`  | Singular (precisar)    |
| `necessitar` | Infinitivo (precisar)  |
| `parece`     | Singular (aparentar)   |
| `requer`     | Singular (requerer)    |
| `supera`     | Singular (exceder)     |
| `superam`    | Plural (exceder)       |
| `superar`    | Infinitivo (exceder)   |

---

## Uso em Expressões Condicionais

### Sintaxe

```pop
Se <sujeito> <verbo> <complemento>, <ação>.
```

### Exemplos

```pop
\\ Ser/Estar
Se o número for 0, retorne.
Se a string estiver em branco, limpe o buffer.
Se o ponteiro for inexistente, aloque memória.

\\ Ter/Haver
Se o arquivo tem erros, corrija.
Se há problemas, reporte.

\\ Conter
Se a lista contém o item, remova.
Se a string contiver espaços, normalize.

\\ Possuir
Se o objeto possui nome, exiba.

\\ Poder
Se o usuário pode editar, habilite.
Se a operação puder falhar, valide.

\\ Dever
Se o valor deve ser positivo, verifique.

\\ Existir
Se o arquivo existe, abra.
Se a variável existir, use.

\\ Começar/Terminar
Se a string começa com "http", processe.
Se o processo termina, finalize.

\\ Exceder
Se o contador excede o limite, pare.
```

---

## Uso em Funções Deliberativas

### Sintaxe

```pop
Função para que se determine se <parâmetro|tipo> <verbo> <complemento>:
  \\ Corpo da função
  Diga sim|não.
```

### Exemplos

```pop
\\ Ser
Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Estar
Função para que se determine se uma string está em branco:
  Se a quantidade de caracteres desta string for 0, diga sim.
  Diga não.

\\ Ter
Função para que se determine se uma lista tem elementos:
  Se a lista inicial destas listas for inexistente, diga não.
  Diga sim.

\\ Conter
Função para que se determine se uma string contém vogais:
  \\ Implementação...
  Diga sim.

\\ Poder
Função para que se determine se um usuário pode acessar:
  \\ Verifica permissões...
  Diga sim.

\\ Existir
Função para que se determine se um arquivo existe:
  \\ Verifica sistema de arquivos...
  Diga sim.

\\ Começar
Função para que se determine se uma string começa com prefixo:
  \\ Compara início...
  Diga sim.
```

---

## Uso em Cabeçalhos de Rotinas

Verbos tornam os nomes de rotinas mais naturais:

```pop
\\ Ser/Estar
Rotina para que se defina uma string como o tipo da aplicação:
  Atribua a string para o tipo da aplicação.

\\ Ter
Rotina para que se obtenha o que tem na lista:
  \\ Processa lista...

\\ Começar
Rotina para que se inicie o que começa o processo:
  \\ Inicia processo...
```

---

## Normalização de Verbos

O compilador normaliza verbos para simplificar o processamento:

### Exemplo de Normalização

```pop
\\ Todas estas expressões são equivalentes:
Se o número for 0, ...
Se o número é 0, ...
Se o número foi 0, ...
Se o número será 0, ...

\\ Todas normalizam para:
Se o número é 0, ...
```

### Tabela de Normalização

| Verbos Originais                                                          | Forma Normalizada |
|---------------------------------------------------------------------------|-------------------|
| `for`, `foi`, `foram`, `forem`, `será`, `serão`, `ser`                    | `é`               |
| `estiver`, `estiverem`, `estava`, `estavam`, `estará`, `estarão`, `estar` | `está`            |
| `tiver`, `têm`, `ter`                                                     | `tem`             |
| `puder`, `puderem`, `poderia`                                             | `pode`            |
| `deveria`, `deveriam`                                                     | `deve`            |
| `couber`                                                                  | `cabe`            |
| `começar`                                                                 | `começa`          |
| `terminar`                                                                | `termina`         |
| `iniciar`                                                                 | `inicia`          |
| `finalizar`                                                               | `finaliza`        |

---

## Observações Importantes

1. **Normalização Automática**: O compilador normaliza verbos para formas canônicas
2. **Sinônimos**: `ser` e `estar` são tratados como equivalentes
3. **Flexão**: Verbos flexionam em número (singular/plural)
4. **Tempo Verbal**: Diferentes tempos são aceitos mas normalizados
5. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
6. **Uso em Condicionais**: Verbos são essenciais em expressões `Se`
7. **Funções Deliberativas**: Verbos definem o nome da função
8. **Naturalidade**: Permitem sintaxe natural em português
9. **Conjugação**: Aceita várias conjugações do mesmo verbo
10. **Contexto**: O significado depende do contexto (sujeito + complemento)

---

## Boas Práticas

1. **Use Verbos Naturais**: Escolha o verbo que soa mais natural
2. **Consistência**: Use o mesmo verbo para situações similares
3. **Clareza**: Prefira verbos que deixam a intenção clara
4. **Tempo Verbal**: Use presente para condições atuais
5. **Plural/Singular**: Concorde com o sujeito
6. **Sinônimos**: `ser` e `estar` são intercambiáveis
7. **Normalização**: Confie na normalização do compilador
8. **Documentação**: Comente funções com verbos complexos
9. **Legibilidade**: Priorize a leitura natural
10. **Padrões**: Siga padrões da biblioteca padrão

---

## Exemplos Práticos

### Validação de Dados

```pop
Função para que se determine se um email é válido:
  Se o email estiver em branco, diga não.
  Se o email não contiver "@", diga não.
  Diga sim.

Rotina para que se valide entrada:
  Se o email não for válido, retorne.
  Processe o email.
```

---

### Verificação de Estado

```pop
Função para que se determine se o sistema está pronto:
  Se o banco de dados não estiver conectado, diga não.
  Se o cache não estiver inicializado, diga não.
  Diga sim.

Rotina para que se inicie aplicação:
  Se o sistema estiver pronto, continue.
  Escreva "Sistema não está pronto!" no console.
```

---

### Controle de Fluxo

```pop
Função para que se determine se deve continuar:
  Se o contador excede o limite, diga não.
  Se a lista não tem mais elementos, diga não.
  Diga sim.

Rotina para que se processe itens:
  Itere.
    Se não deve continuar, pare.
    Processe o próximo item.
  Reitere.
```

---

## Estatísticas

- **Total de verbos**: ~70
- **Verbos canônicos**: ~20
- **Grupos principais**: 11
- **Mais comum**: `for` (normalizado para `é`)
- **Uso principal**: Expressões condicionais
- **Normalização**: Automática pelo compilador
- **Flexões**: Singular, plural, tempos verbais
- **Sinônimos**: `ser` ≈ `estar`

---

# Palavras-Chave - Português Puro

## Visão Geral

Palavras-chave em Português Puro são termos reservados que têm **significados especiais** para o compilador. Elas são usadas para declarar variáveis, definir estruturas, controlar fluxo e realizar operações específicas.

---

## Categorias de Palavras-Chave

### 1. Designação (Nomeação)
### 2. Complementação (Estruturas)
### 3. Referenciamento (Ponteiros)
### 4. Devolução (Retorno)
### 5. Comandos de Controle
### 6. Operadores Especiais

---

## 1. Palavras-Chave de Designação

### Função

Usadas para **nomear** variáveis locais ao declará-las.

### Lista

| Palavra-Chave | Gênero/Número      | Exemplo                          |
|---------------|--------------------|----------------------------------|
| `denominado`  | Masculino singular | `um número denominado contador`  |
| `denominada`  | Feminino singular  | `uma string denominada mensagem` |
| `denominados` | Masculino plural   | `uns bytes denominados buffer`   |
| `denominadas` | Feminino plural    | `umas listas denominadas itens`  |
| `chamado`     | Masculino singular | `um ponteiro chamado endereço`   |
| `chamada`     | Feminino singular  | `uma fração chamada proporção`   |
| `chamados`    | Masculino plural   | `uns números chamados valores`   |
| `chamadas`    | Feminino plural    | `umas strings chamadas nomes`    |

### Sintaxe

```pop
<artigo indefinido> <tipo> <palavra-chave> <nome>
```

### Exemplos

```pop
\\ Denominado/Denominada
Atribua 0 para um número denominado contador.
Atribua "" para uma string denominada mensagem.
Atribua 1/2 para uma fração denominada metade.

\\ Chamado/Chamada
Aloque memória para um ponteiro chamado buffer.
Crie uma lista chamada itens.

\\ Plural
Atribua 0 para uns bytes denominados dados.
Crie umas strings denominadas linhas.
```

---

## 2. Palavras-Chave de Complementação

### Função

Usadas para definir **campos de estruturas** (equivalente a `with` em outras linguagens).

### Lista

| Palavra-Chave | Uso                        |
|---------------|----------------------------|
| `com`         | Define campos de estrutura |
| `contendo`    | Sinônimo de `com`          |

### Sintaxe

```pop
<tipo> é uma estrutura <palavra-chave>
  <campo 1>,
  <campo 2>,
  <campo N>.
```

### Exemplos

```pop
\\ Com
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email.

\\ Contendo
Um retângulo é uma estrutura contendo
  Um número denominado largura,
  Um número denominado altura.
```

---

## 3. Palavras-Chave de Referenciamento

### Função

Indica que um campo é um **ponteiro** (referência) e não deve ser desalocado automaticamente.

### Lista

| Palavra-Chave  | Uso                       |
|----------------|---------------------------|
| `(referência)` | Marca campo como ponteiro |

### Sintaxe

```pop
<tipo> é uma estrutura com
  <campo> (referência),
  <outros campos>.
```

### Exemplos

```pop
\\ Campo de referência
Um nó é uma estrutura com
  Um número denominado valor,
  Um nó denominado próximo (referência),
  Um nó denominado anterior (referência).

\\ Múltiplas referências
Uma árvore é uma estrutura com
  Um número denominado chave,
  Uma árvore denominada esquerda (referência),
  Uma árvore denominada direita (referência).
```

**Importante:** Campos marcados com `(referência)` **não são desalocados** automaticamente quando a estrutura é destruída.

---

## 4. Palavras-Chave de Devolução

### Função

Usadas para **receber valores de retorno** de chamadas externas (DLLs).

### Lista

| Palavra-Chave | Uso                      |
|---------------|--------------------------|
| `retornando`  | Recebe valor de retorno  |
| `recebendo`   | Sinônimo de `retornando` |
| `obtendo`     | Sinônimo de `retornando` |

### Sintaxe

```pop
Processe "<dll>" "<função>" com
  <parâmetros>
<palavra-chave> <variável>.
```

### Exemplos

```pop
\\ Retornando
Processe "kernel32.dll" "GetLastError" retornando o código de erro.

\\ Recebendo
Processe "user32.dll" "MessageBoxA" com
  0 e
  "Mensagem" e
  "Título" e
  0
recebendo o resultado.

\\ Obtendo
Processe "kernel32.dll" "HeapAlloc" com
  o heap e
  8 e
  o tamanho
obtendo o ponteiro.
```

---

## 5. Comandos de Controle

### 5.1 Controle de Fluxo

| Comando   | Função                  | Exemplo               |
|-----------|-------------------------|-----------------------|
| `Se`      | Condicional             | `Se X for Y, ...`     |
| `Itere`   | Início de laço          | `Itere. ... Reitere.` |
| `Reitere` | Volta ao início do laço | `Reitere.`            |
| `Pare`    | Sai do laço             | `Se condição, pare.`  |
| `Retorne` | Sai da rotina           | `Se erro, retorne.`   |

---

### 5.2 Funções Deliberativas

| Comando     | Função           | Exemplo                               |
|-------------|------------------|---------------------------------------|
| `determine` | Declara função   | `Função para que se determine se ...` |
| `Diga`      | Retorno booleano | `Diga sim.` / `Diga não.`             |
| `sim`       | Verdadeiro       | `Diga sim.`                           |
| `não`       | Falso            | `Diga não.`                           |

---

### 5.3 Gerenciamento de Memória

| Comando    | Função                  | Exemplo              |
|------------|-------------------------|----------------------|
| `Preserve` | Cria cópia de parâmetro | `Preserve a string.` |
| `isole`    | Sinônimo de `Preserve`  | `isole o número.`    |
| `conserve` | Sinônimo de `Preserve`  | `conserve a fração.` |

---

### 5.4 Chamadas Externas

| Comando    | Função                 | Exemplo                       |
|------------|------------------------|-------------------------------|
| `Processe` | Chama DLL              | `Processe "kernel32.dll" ...` |
| `invoque`  | Sinônimo de `Processe` | `invoque "user32.dll" ...`    |

---

### 5.5 Ponteiros

| Comando       | Função               | Exemplo                           |
|---------------|----------------------|-----------------------------------|
| `aponte`      | Define ponteiro      | `aponte o ponteiro para ...`      |
| `direcione`   | Sinônimo de `aponte` | `direcione o ponteiro para ...`   |
| `redirecione` | Sinônimo de `aponte` | `redirecione o ponteiro para ...` |

---

## 6. Operadores Especiais

### 6.1 Atribuição

| Operador | Função             | Exemplo               |
|----------|--------------------|-----------------------|
| `igual`  | Atribuição com `=` | `Atribua X igual a Y` |
| `a`      | Equivalência       | `igual a 10`          |
| `para`   | Equivalência       | `igual para 10`       |

---

### 6.2 Estruturas Especiais

| Operador        | Função               | Exemplo                          |
|-----------------|----------------------|----------------------------------|
| `magnitude`     | Tamanho de variável  | `a magnitude desta string`       |
| `conteúdo`      | Conteúdo de byte     | `o conteúdo deste byte`          |
| `endereçamento` | Endereço de variável | `o endereçamento desta variável` |

---

### 6.3 Reutilização

| Operador   | Função           | Exemplo             |
|------------|------------------|---------------------|
| `empregue` | Reutiliza rotina | `empregue a rotina` |

---

## 7. Açúcar Sintático

Palavras opcionais que tornam o código mais legível:

| Palavra        | Uso                                       |
|----------------|-------------------------------------------|
| `Rotina`       | Opcional antes de `para que se`           |
| `Função`       | Opcional antes de `para que se determine` |
| `Procedimento` | Sinônimo de `Rotina`                      |

### Exemplos

```pop
\\ Com açúcar sintático
Rotina para que se processe dados:
  \\ Código...

Função para que se determine se X é Y:
  \\ Código...

\\ Sem açúcar sintático (também válido)
Para que se processe dados:
  \\ Código...
```

---

## Observações Importantes

1. **Case-Insensitive**: Palavras-chave não diferenciam maiúsculas de minúsculas
2. **Sinônimos**: Várias palavras-chave têm sinônimos (`denominado`/`chamado`)
3. **Gênero/Número**: Palavras de designação concordam com o tipo
4. **Referência**: `(referência)` evita desalocação automática
5. **Devolução**: Usada apenas em chamadas externas
6. **Preserve**: Cria cópia para proteger parâmetros
7. **Açúcar Sintático**: Opcional, melhora legibilidade
8. **Magnitude**: Retorna tamanho em bytes
9. **Conteúdo**: Acessa valor de byte
10. **Endereçamento**: Retorna ponteiro para variável

---

## Boas Práticas

1. **Use Nomes Descritivos**: Aproveite a flexibilidade da linguagem
2. **Consistência**: Use sempre a mesma palavra-chave para situações similares
3. **Referências**: Marque explicitamente campos que são ponteiros
4. **Preserve**: Use quando precisar modificar parâmetros sem afetar o original
5. **Açúcar Sintático**: Use para melhorar legibilidade
6. **Gênero/Número**: Sempre concorde com o tipo
7. **Documentação**: Comente o uso de `(referência)`
8. **Devolução**: Sempre capture retornos de APIs
9. **Magnitude**: Use para obter tamanhos dinamicamente
10. **Clareza**: Prefira sinônimos mais claros

---

## Exemplos Completos

### Declaração de Variáveis

```pop
Rotina para que se processe dados:
  Atribua 0 para um número denominado contador.
  Atribua "" para uma string denominada resultado.
  Atribua 1/2 para uma fração denominada proporção.
  Aloque memória para um ponteiro chamado buffer.
```

---

### Estrutura com Referências

```pop
Uma lista é uma estrutura com
  Uma string denominada nome,
  Um número denominado valor,
  Uma lista denominada próxima (referência),
  Uma lista denominada anterior (referência).
```

---

### Chamada Externa com Devolução

```pop
Rotina para que se obtenha erro do sistema:
  Processe "kernel32.dll" "GetLastError" retornando o código.
  Se o código não for 0,
    Converta o código para uma mensagem;
    Escreva "Erro: " junto com a mensagem no console.
```

---

### Uso de Preserve

```pop
Rotina para que se normalize uma string:
  Preserve a string.
  Converta a string para letras minúsculas.
  Remova espaços extras desde a string.
  \\ A string original permanece intacta
```

---

### Estrutura Completa

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma string denominada email,
  Uma pessoa denominada supervisor (referência).

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa denominada nova.
  Atribua "João" ao nome desta nova pessoa.
  Atribua 30 à idade desta nova pessoa.
  Atribua "joao@email.com" ao email desta nova pessoa.
  Atribua inexistente ao supervisor desta nova pessoa.
```

---

## Estatísticas

- **Categorias**: 6 principais
- **Designação**: 8 palavras (`denominado`, `chamado` + variações)
- **Complementação**: 2 palavras (`com`, `contendo`)
- **Referenciamento**: 1 palavra (`(referência)`)
- **Devolução**: 3 palavras (`retornando`, `recebendo`, `obtendo`)
- **Comandos de controle**: ~15 palavras
- **Operadores especiais**: ~10 palavras
- **Sinônimos**: Muitas palavras têm alternativas
- **Case-insensitive**: Sim
- **Flexão**: Gênero e número (quando aplicável)

---

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

---

# Tipos

Este documento reúne a sintaxe para declarar tipos, estruturas, listas, ponteiros e unidades de medida, além das regras de campos e das exceções de identificação. Os nomes de tipos seguem as regras gerais de identificadores descritas em [Símbolos.md](Símbolos.md).

## Forma geral de uma declaração

Uma declaração de tipo começa com um artigo indefinido, seguido pelo nome do tipo, por `é` ou `são`, pela definição e por um ponto final:

```pop
<artigo> <nome do tipo> é <definição>.
<artigo> <nome do tipo> são <definição>.
```

Os artigos são `um`, `uma`, `uns` e `umas`. Formas abrangentes de pronomes demonstrativos também podem ocupar essa posição conforme as regras gerais de determinantes da linguagem.

`é` e `são` introduzem a definição. A forma usada depende da construção e da expressão de escala; por exemplo, uma definição simples usa `é`, enquanto uma razão de escala pode usar `são`.

O ponto final encerra a declaração, inclusive quando a definição ocupa várias linhas:

```pop
Um nome é uma string.

Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

Palavras-chave e identificadores não diferenciam maiúsculas de minúsculas, exceto dentro de strings e comentários.

### O que é a definição

A `definição` é a parte da declaração que vem depois de `é` ou `são`. Ela informa qual tipo existente serve de base ou descreve a forma, o conteúdo ou a escala do novo tipo. Não é o nome do tipo que está sendo declarado.

As definições podem assumir estas formas:

| Forma da definição | O que declara | Exemplo |
|--------------------|---------------|---------|
| Tipo base | Deriva o novo tipo de um tipo já definido | `Um caractere é um byte.` |
| Estrutura | Agrupa campos ou reserva um tamanho fixo | `Uma pessoa é uma estrutura com ...` / `Um ponteiro é uma estrutura com 4 bytes.` |
| Lista | Declara uma lista de elementos ou campos | `Um polígono é uma lista com uns vértices.` |
| Ponteiro | Declara um ponteiro genérico ou o tipo apontado | `Um endereço de byte é um ponteiro para um byte.` |
| Escala | Relaciona uma unidade a um tipo base por uma razão | `Um pixel são 15 twips.` |

Por exemplo, em `Um caractere é um byte.`, `caractere` é o nome declarado e `um byte` é sua definição (o tipo base). Em `Uma pessoa é uma estrutura com ...`, a definição começa em `uma estrutura com` e inclui os campos até o ponto final. As regras específicas de cada forma estão nas seções correspondentes abaixo.

## Nomes de tipos

O nome do tipo pode ser simples ou composto. Espaços e alguns símbolos fazem parte de nomes compostos:

```pop
Uns bytes# são um número.
Um grupo data/hora de criação é uma string.
Uma word big-endian unsigned é uma estrutura com 2 bytes.
Um In_Addr é uma estrutura com 4 bytes.
```

Os caracteres permitidos, limitados, reservados e não permitidos seguem [Símbolos.md](Símbolos.md). Em resumo:

- Os caracteres reservados listados são `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]` e `'`.
- As vogais `A`, `E`, `O`, `a`, `e`, `o`, `À`, `É`, `é` e `à` têm função sintática quando isoladas, mas podem aparecer em nomes compostos.
- Espaços, números, `/` e hífen aparecem em nomes como `data/hora`, `ponto 3D` e `big-endian`.
- Símbolos como `#`, `&`, `_` e `@` podem fazer parte de identificadores, como em `bytes#`, `ponto&vírgula` e `In_Addr`.
- Os caracteres reservados não podem ser usados livremente dentro de nomes; pontuação como `.` encerra a declaração, e vírgulas separam campos.
- Caracteres especiais permitidos não podem ficar diretamente adjacentes a outros caracteres especiais.
- Alguns caracteres, como `!`, `*`, `?`, `{` e `}`, não são permitidos em identificadores.
- Números podem compor nomes, inclusive no início conforme a regra de nomes de tipos. Em uma declaração de campo, porém, uma expressão como `3 bytes` é reconhecida como uma quantidade de bytes, não como um nome de campo.

O hífen aparece tanto na lista de reservados quanto na regra de caracteres numéricos de [Símbolos.md](Símbolos.md); os exemplos de nomes compostos, como `big-endian`, demonstram seu uso nesse contexto.

Aspas simples podem delimitar palavras reservadas ou trechos que precisam ser lidos literalmente, como em `'A' maiúscula` e `'número um'`. Aspas simples não são um caractere comum de identificador.

## Tipos primitivos e derivação

Há dois tipos primitivos:

| Tipo | Natureza |
|---|---|
| `byte` | Escalar de 8 bits |
| `estrutura` | Tipo composto |

Os demais tipos são derivados de um tipo primitivo ou de outro tipo já definido. A definição simples usa o artigo indefinido antes do tipo base:

```pop
Um caractere é um byte.
Uma letra é um caractere.
```

Uma cadeia de derivações pode ter vários níveis. Uma estrutura derivada herda os campos do tipo base e pode adicionar campos:

```pop
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.

Um ponto 3D é um ponto com
  Um número denominado Z.
```

O tipo base precisa estar definido antes de ser usado. Tipos primitivos não são redefinidos. Tipos derivados podem servir de base para novos tipos; tipos derivados de estruturas herdam sua estrutura. Campos herdados não devem ser redefinidos com outro nome ou tipo.

## Estruturas

Uma estrutura pode ser declarada com campos ou somente com um tamanho em bytes:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Um ponteiro é uma estrutura com 4 bytes.
```

Uma declaração com campos tem a forma geral:

```pop
<artigo> <nome> é uma estrutura com
  <campo>,
  <campo> e
  <campo>.
```

Os campos podem ser separados por `e`, `ou` ou vírgula. O último campo termina com ponto final. As palavras `e` e `ou` funcionam como separadores, não como parte dos nomes.

### Campos nomeados e nomes inferidos

Um campo pode declarar seu nome com `denominado`:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

Se `denominado <nome>` for omitido, o campo recebe como nome a expressão de tipo declarada:

```pop
Uma pessoa é uma estrutura com
  Uma string e
  Um número.
```

Isso equivale, para fins de nomeação, a:

```pop
Uma pessoa é uma estrutura com
  Uma string denominada string e
  Um número denominado número.
```

Os nomes dos campos de uma estrutura precisam ser únicos, sejam explícitos ou inferidos. Portanto, campos repetidos com o mesmo tipo e sem nome explícito geram nomes repetidos e devem produzir um diagnóstico:

```pop
Um número é uma estrutura com
  Um byte,
  Um byte,
  Um byte e
  Um byte.
```

Nesse exemplo, todos os campos seriam inferidos como `byte`. Para evitar a colisão, use nomes explícitos ou apelidos distintos.

### Apelidos de tipos em campos

Uma expressão de tipo usada como apelido pode incluir palavras antes do nome do tipo base. O campo mantém o nome/apelido usado na declaração, enquanto o tipo base é identificado pela parte final da expressão:

```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte e
  Um quarto byte.
```

`primeiro byte`, `segundo byte`, `terceiro byte` e `quarto byte` são nomes/apelidos distintos; o tipo base de cada campo é `byte`.

Para identificar o tipo base, o compilador testa a expressão completa e, se não encontrar um tipo correspondente, remove recursivamente os termos mais à esquerda até encontrar um nome de tipo:

```text
primeiro byte
→ byte
```

O primeiro termo não é tratado automaticamente como tipo base. Por exemplo, para `word de ordem inferior`, as tentativas são:

```text
word de ordem inferior
→ de ordem inferior
→ ordem inferior
→ inferior
```

Mesmo que `word` seja um tipo conhecido, ele não é selecionado apenas por aparecer no início da expressão. Se nenhuma tentativa corresponder a um tipo definido, a declaração deve gerar um diagnóstico.

### Campos de tamanho em bytes

Uma quantidade seguida de `bytes` pode declarar um campo de tamanho fixo:

- Sem nome, reserva espaço sem associá-lo a um campo (preenchimento/padding).
- Com `denominado <nome>`, declara uma sequência de bytes com esse nome.

```pop
Um bloco é uma estrutura com
  3 bytes,
  32 bytes denominados nome do dispositivo e
  260 bytes denominados nome do arquivo.
```

Uma estrutura inteira também pode ser delimitada por tamanho, sem listar campos:

```pop
Um ponteiro é uma estrutura com 4 bytes.
Uma word é uma estrutura com 2 bytes.
```

### Campos sobrepostos

`sob <campo>` indica que o campo compartilha a posição de memória do campo indicado. O campo de referência precisa ser nomeado:

```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte e
  Um quarto byte,
  Uma word de ordem inferior sob o primeiro byte e
  Uma word de ordem superior sob o terceiro byte.
```

Isso permite representar uma união: os bytes e as words ocupam regiões sobrepostas. `sob` não é um separador; faz parte da declaração do campo que vem antes dele.

### Referência em campos

A palavra chave de referenciamento  `(referência)` marca o campo como ponteiro em vez de valor incorporado. Em listas, esse campo não é desalocado automaticamente junto com a estrutura; o gerenciamento da memória fica a cargo do programador:

```pop
Uma árvore é uma estrutura com
  Um número denominado chave,
  Uma árvore denominada esquerda (referência) e
  Uma árvore denominada direita (referência).
```

Sem `(referência)`, o campo é incorporado à estrutura e segue o gerenciamento automático aplicável ao tipo.

## Observações e comentários em campos

### Observações entre colchetes

Trechos entre colchetes podem acompanhar um tipo ou um campo para documentação, restrições ou detalhes de implementação. São ignorados pelo compilador:

```pop
Uma word [unsigned] denominada valor.
Uma coordenada denominada coordenada X, [left]
```

Os colchetes podem também indicar uma observação final após a declaração do campo:

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X, [left] e
  Uma coordenada denominada coordenada Y. [top]
```

Não confunda essas observações com `sob`, que altera a sobreposição de memória, nem com `(referência)`, que tem efeito semântico.

### Parênteses

`(referência)` é o único qualificador parentético com efeito semântico descrito aqui. Outros conteúdos entre parênteses são documentais e ignorados:

```pop
Um retângulo é uma estrutura com
  Um número (em pixels) denominado largura e
  Um número (em pixels) denominado altura.
```

Os parênteses devem estar balanceados e qualificadores parentéticos não podem ser aninhados. As validações documentadas apontam:

- Código de erro `#009`: falta o parêntese de fechamento `)`.
- Código de erro `#010`: falta o parêntese de abertura `(`.

### Comentários

Comentários de linha usam `\\`. Comentários de bloco e observações inline podem usar colchetes, conforme as convenções gerais de comentários da linguagem:

```pop
Uma word é uma estrutura com 2 bytes. \\ comentário de linha
```

## Ponteiros

Uma declaração de ponteiro pode ser genérica ou indicar o tipo apontado:

```pop
Um ponteiro genérico é um ponteiro.
Um endereço de byte é um ponteiro para um byte.
```

`que aponta` pode aparecer opcionalmente entre `ponteiro` e `para`:

```pop
Um caractere inicial é um ponteiro que aponta para um byte.
```

Em campos de estrutura, `(referência)` indica o campo ponteiro; não substitui a definição de um tipo de ponteiro:

```pop
Uma lista encadeada é uma estrutura com
  Um número denominado valor e
  Uma lista encadeada denominada próxima (referência).
```

## Listas

Uma lista com campos declara o conteúdo dos elementos e segue as regras de campos das estruturas:

```pop
Um polígono é uma lista com uns vértices.

Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.
```

Uma lista estruturada é duplamente encadeada; sua representação usa referências anterior e posterior. Também é possível declarar um tipo como ponteiro para uma lista estruturada:

```pop
Uma lista é um ponteiro para uma lista estruturada.

Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.
```

O plural do tipo pode ser usado para declarar o cabeçalho/conjunto da lista:

```pop
Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.
```

## Tipos escalares e unidades de medida

Um tipo escalar associa uma escala numérica a um tipo base numérico. A escala pode ser um número inteiro ou uma fração:

```pop
Um pixel são 15 twips.
Um centímetro são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

As formas `é` e `são` são usadas conforme a expressão de escala. A expressão `[composto de]` ou `[composta de]` pode ser incluída como explicação:

```pop
Uma altura é [composta de] uns twips.
Um ângulo é [composto de] uns graus.
```

Razões e escalas destinam-se a tipos numéricos:

```pop
Um milissegundo é um número.
Um segundo são 1000 milissegundos.
Um minuto são 60 segundos.
```

## Plural dos tipos

O plural do nome de um tipo é formado automaticamente palavra por palavra. Preposições e palavras invariáveis permanecem inalteradas; assim, após definir `Um contato`, pode-se usar `uns contatos`.

As regras e exceções documentadas são:

| Forma singular | Formação do plural | Exemplos |
|---|---|---|
| Exceções | Forma especial | `caráter` → `carateres`; `júnior` → `juniores`; `sênior` → `seniores` |
| Advérbios invariáveis | Não varia, ressalvada a exceção explícita de `mal` | `muito`, `pouco`, `mais`, `menos`, `bastante`, `quase`, `demais`, `bem`, `mal`, `melhor`, `pior`; `mal` → `males` |
| Terminação `-ão` | Em geral `-ões`; algumas `-ãos` ou `-ães` | `opinião` → `opiniões`; `órgão` → `órgãos`; `pão` → `pães` |
| Terminação `-m` | `-ns` | `homem` → `homens` |
| Terminação `-al` | `-ais` | `animal` → `animais` |
| Terminação `-el` | `-eis` ou `-éis`, conforme a acentuação | `nível` → `níveis`; `papel` → `papéis` |
| Terminação `-il` | `-is` nas oxítonas; `-eis` nas paroxítonas | `fuzil` → `fuzis`; `fóssil` → `fósseis` |
| Terminação `-ol` | `-ois` ou `-óis`, conforme a acentuação | `álcool` → `álcoois`; `lençol` → `lençóis` |
| Terminação `-ul` | `-uis`; exceção indicada | `azul` → `azuis`; `cônsul` → `cônsules` |
| Terminação `-r`, `-s` ou `-z` | Acrescenta `-es` | `flor` → `flores`; `país` → `países`; `luz` → `luzes` |
| Demais terminações | Acrescenta `-s` | regra padrão |

Embora `mal` conste na lista de advérbios invariáveis, a exceção documentada para essa palavra é `mal` → `males`.

Em nomes compostos, pluralize palavra por palavra, preservando a palavra que vier após a preposição `de`:

```text
número de telefone → números de telefone
```

## Conversão explícita de tipos

Os operadores `like` e `as` introduzem uma conversão explícita:

```pop
valor like um byte
valor as número
```

`like` pode ser seguido por um artigo indefinido e pelo tipo. `as` não deve ser seguido por um artigo indefinido; prefira `like` quando a forma desejada for `um`, `uma`, `uns` ou `umas`. A conversão deve respeitar compatibilidade de tamanho ou estrutura.

```pop
Se o valor like um byte for maior que 10, ...
```

Em Português Puro a conversão também se expressa com o verbo `Converta` e com os sinônimos `tal como` / `tal qual`, que forçam o compilador a tratar um valor como outro tipo:

```pop
Converta o número para uma string denominada valor.
Converta a string para um número denominado quantidade.

Atribua o byte à cifra binária tal como um byte.
Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
Destrinche o campo tal como uma variável.
```

Essas formas de conversão em instruções estão detalhadas em [Instruções.md](Instruções.md) (seções de conversão explícita e conversão forçada).

## Exemplos reunidos

### Tipos derivados

```pop
Um caractere é um byte.
Uma letra é um caractere.
Um nome é uma string.
Um grupo data/hora de criação é uma string.
```

### Tipos compostos e campos

```pop
Uma string é uma estrutura com
  Um caractere inicial e
  Um caractere final.

Uma palavra é uma estrutura com
  Um byte inicial e
  Um byte final.

Uma fração é uma estrutura com
  Um número denominado numerador e
  Um número denominado denominador.

Um numeral misto é uma estrutura com
  Um número inteiro e
  Uma proporção e
  Uma fração sob a proporção.

Um sinalizador é uma estrutura com 4 bytes.
```

### Estrutura com campos nomeados, inferidos e sobrepostos

```pop
Um número é uma estrutura com
  Um primeiro byte,
  Um segundo byte,
  Um terceiro byte e
  Um quarto byte,
  Uma word de ordem inferior sob o primeiro byte e
  Uma word de ordem superior sob o terceiro byte.
```

### Estrutura com bytes reservados

```pop
Um UUID é uma estrutura com
  Um número denominado Data1,
  Uma word denominada Data2,
  Uma word denominada Data3 e
  8 bytes denominados Data4.

Um bloco de texto é uma estrutura com
  Um número denominado tamanho,
  3 bytes e
  Um byte denominado preenchimento.
```

### Tipo escalar

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um kb são 1024 bytes#.
Um megabyte são 1024 kb.
```

## Resumo dos tipos da biblioteca padrão

| Tipo | Base | Tamanho | Intervalo / Notas |
|------|------|---------|-------------------|
| `byte` | Primitivo | 8 bits | 0 a 255 (sem sinal) |
| `caractere` | `byte` | 8 bits | Codepage Windows-1252 |
| `estrutura` | Primitivo | - | Base das declarações compostas |
| `ponteiro` | `estrutura` | 4 bytes | Endereço de 32 bits; 0 é `nulo`/`inexistente` |
| `string` | `estrutura` | 2 ponteiros | `caractere inicial` + `caractere final`; alocação automática |
| `lista` | `ponteiro` | 4 bytes | Ponteiro para uma `lista estruturada` |
| `lista estruturada` | `estrutura` | 2 ponteiros | `lista posterior` + `lista anterior` |
| `umas listas` | `estrutura` | 2 ponteiros | `lista inicial` + `lista final` (âncora do conjunto) |
| `número` | `estrutura` | 4 bytes | -2.147.483.648 a +2.147.483.647; acesso por `word` com `sob` |
| `word` | `estrutura` | 2 bytes | `byte inicial` + `byte final` |
| `fração` | `estrutura` | 2 números | `numerador` + `denominador`; racional exato, sem ponto flutuante |
| `numeral misto` | `estrutura` | número + fração | Parte inteira sob uma fração, por exemplo `1+1/2` |
| `sinalizador` | `estrutura` | 4 bytes | `sim` (1) ou `não` (0) |
| `texto hexadecimal` | - | variável | Literal com prefixo `$`, por exemplo `$DEADBEEF` |

Os escalas derivadas (`Um pixel são 15 twips.`) não têm tamanho próprio: ocupam o espaço do tipo base numérico e guardam a escala como fração de `número`.

---

# Estruturas e Uniões

## Visão Geral

Português Puro possui **apenas dois tipos primitivos**, dos quais todos os demais tipos derivam:

- **`byte`** - Tipo primitivo escalar (8 bits)
- **`estrutura`** - Tipo primitivo composto

**Importante:** Todos os tipos em Português Puro são derivados de um destes dois tipos primitivos.

---

## Definição de Tipos

### Sintaxe Básica

```
<Artigo> <nome do tipo> <é|são> <definição>.
```

### Componentes Obrigatórios

1. **Artigo indefinido**: `um`, `uma`, `uns`, `umas`
2. **Nome do tipo**: Identificador após o artigo
3. **Palavra-chave `é` ou `são`**: Conecta o nome à definição
4. **Tipo de definição**: `tipo derivado`, `uma estrutura`, `uma lista`
5. **Fim**: Ponto final (`.`)

---

## Hierarquia de Tipos

### Tipos Primitivos

| Tipo | Descrição |
|------|-----------|
| `byte` | 8 bits, valor 0-255 (unsigned) |
| `estrutura` | Tipo composto, base para estruturas |

### Tipo Base

É o tipo utilizado como **referência** para a definição de um tipo derivado. Pode ser:
- Um **tipo primitivo** (`byte` ou `estrutura`)
- Um **tipo derivado** já definido anteriormente

### Tipo Derivado

Definido a partir de um **tipo base** (primitivo ou derivado).

**Sintaxe:**
```pop
Um <nome_tipo_derivado> é <tipo_base>.
```

---

## Derivação de Tipos

### Derivação de `byte`

```pop
\ Tipo derivado diretamente do tipo primitivo 'byte'
Um caractere é um byte.

\ Hierarquia: caractere → byte (primitivo)
```

### Derivação de `estrutura`

```pop
\ Tipo derivado diretamente do tipo primitivo 'estrutura'
Um par de números é uma estrutura com
  Um número denominado número X e
  Um número denominado número Y.

\ Hierarquia: par de números → estrutura (primitivo)
```

### Cadeia de Derivação (Múltiplos Níveis)

```pop
\ Nível 0: Tipo primitivo
\\ (byte é primitivo)

\ Nível 1: Primeira derivação
Um caractere é um byte.

\ Nível 2: Segunda derivação
Uma letra é um caractere.

\ Nível 3: Terceira derivação
Uma vogal é uma letra.

\ Hierarquia: vogal → letra → caractere → byte (primitivo)
```

### Derivação de Estruturas com Herança de Campos

```pop
\ Nível 0: Tipo primitivo (estrutura)

\ Nível 1: Estrutura básica
Um ponto é uma estrutura com
  Um número denominado X e
  Um número denominado Y.

\ Nível 2: Adiciona campo
Um ponto 3D é um ponto com
  Um número denominado X,
  Um número denominado Y e
  Um número denominado Z.

\ Nível 3: Adiciona cor
Um vértice é um ponto 3D com
  Um número denominado X,
  Um número denominado Y,
  Um número denominado Z e
  Uma cor denominada cor.

\ Hierarquia: vértice → ponto 3D → ponto → estrutura (primitivo)
```

**Observação:** No segundo nível, `localização` **herda** os campos de `par de números` e pode adicionar novos campos.

---

## Estruturas

### Sintaxe Básica

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

### Campos

- Cada campo é declarado com **artigo indefinido + tipo + palavra `denominado` + nome do campo**
- Campos são separados por `e`, `ou` ou `,` (vírgula)
- O último campo termina com `.` (ponto final)

### Campos Sobrepostos (`sob`)

Usar `sob` para indicar que um campo compartilha a mesma posição de memória de outro:

```pop
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte.
```

### Estruturas Delimitadas por Tamanho

Podem ser definidas apenas com o tamanho em bytes:

```pop
Um ponteiro é uma estrutura com 4 bytes. \ 32 bits
Uma word big-endian unsigned é uma estrutura com 2 bytes.
```

### Campos Numéricos (Arrays de Bytes)

**Sem nome (padding):**
```pop
3 bytes, \ padding de 3 bytes sem nome
```

**Com nome:**
```pop
32 bytes denominados dmDeviceName,
260 bytes denominados cFileName,
```

### Observações de Tipo

Informações opcionais entre colchetes após o tipo (ignoradas pelo compilador, servem para documentação):

```pop
Uma word [unsigned] denominada s_word1
Um ponteiro [que aponta] para um byte
```

### Comentários Inline em Campos

Podem aparecer após campos entre `[...]`:

```pop
Uma coordenada denominada coordenada X1, [left]
Um grau é um número [cujos valores vão de 0 até 3599]
```

---

## Ponteiros

### Ponteiro Genérico

```pop
Um tipo é um ponteiro.
```

### Ponteiro Tipado

```pop
Um tipo é um ponteiro para outro_tipo.
```

### Sintaxe Opcional

A palavra `que aponta` pode aparecer entre `ponteiro` e `para`:

```pop
Um caractere inicial é um ponteiro [que aponta] para um byte.
```

### Ponteiros em Campos

Marcados com `(referência)` após o tipo:

```pop
Um tipo base (referência)
```

---

## Tipos Escalares (Unidades de Medida)

Definidos com razão de conversão usando `são` ou `é`:

**Sintaxe:**
```
Um tipo são N tipo_base
Um tipo é fração tipo_base
```

**Exemplos:**

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
Uma altura é [composta de] uns twips.
Um ângulo é [composto de] uns graus.
```

**Uso:** Permite conversões automáticas entre unidades.

---

## Listas

Definidas com `uma lista com` seguido dos campos. Seguem as mesmas regras de campos das estruturas. Automaticamente criam estrutura de lista duplamente encadeada com ponteiros `anterior` e `posterior`.

```pop
Um polígono é uma lista com uns vértices.
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

---

## Pluralização Automática

**Regra fundamental:** O compilador automaticamente gera o nome plural a partir do nome singular.

**Processo:**
1. Analisa o nome do tipo palavra por palavra
2. Aplica regras de pluralização do português para cada palavra
3. Preserva palavras invariáveis (advérbios, preposições)
4. Trata exceções conhecidas

### Regras de Pluralização

#### 1. Exceções Conhecidas

- `caráter` → `carateres`
- `júnior` → `juniores`
- `sênior` → `seniores`

#### 2. Advérbios Invariáveis

`muito`, `pouco`, `mais`, `menos`, `bastante`, `quase`, `demais`, `bem`, `mal`, `melhor`, `pior`

#### 3. Terminações Especiais

**Palavras terminadas em `-ão`:**
- Maioria: `-ão` → `-ões` (opinião → opiniões)
- Paroxítonas: `-ão` → `-ãos` (órgão → órgãos)
- Algumas: `-ão` → `-ães` (pão → pães)

**Palavras terminadas em `-m`:**
- `-m` → `-ns` (homem → homens)

**Palavras terminadas em `-al`:**
- `-al` → `-ais` (animal → animais)
- Exceção: `mal` → `males`

**Palavras terminadas em `-el`:**
- Com acento na sílaba anterior: `-el` → `-eis` (nível → níveis)
- Sem acento: `-el` → `-éis` (papel → papéis)

**Palavras terminadas em `-il`:**
- Oxítonas: `-il` → `-is` (fuzil → fuzis)
- Paroxítonas: `-il` → `-eis` (fóssil → fósseis)

**Palavras terminadas em `-ol`:**
- Com acento: `-ol` → `-ois` (álcool → álcoois)
- Sem acento: `-ol` → `-óis` (lençol → lençóis)

**Palavras terminadas em `-ul`:**
- `-ul` → `-uis` (azul → azuis)
- Exceção: `cônsul` → `cônsules`

**Palavras terminadas em `-r`, `-s`, `-z`:**
- Acrescenta `-es` (flor → flores, país → países, luz → luzes)

#### 4. Regra Padrão

Acrescenta `-s` ao final da palavra.

#### 5. Nomes Compostos

Pluraliza palavra por palavra, exceto após preposição `de`.

**Exemplo:** `número de telefone` → `números de telefone`

---

## Conversão de Tipos (Casting)

O Português Puro permite a conversão explícita de tipos (casting) utilizando conjunções modificadoras.

### Operadores de Casting

- **`like`**: Converte o valor anterior para o tipo especificado.
- **`as`**: Funciona de forma idêntica ao `like`, mas **não pode** ser seguido por um artigo indefinido (para evitar ambiguidade com "as" artigo definido plural).

### Sintaxe

```pop
valor like um <tipo>
valor as um <tipo>
```

### Exemplos

```pop
\ Conversão de ponteiro genérico para ponteiro tipado
Atribua o ponteiro genérico like um ponteiro para byte para o ponteiro específico.

\ Conversão de estrutura
Atribua a estrutura A as uma estrutura B para a variável.

\ Uso em expressões
Se o valor like um byte for maior que 10...
```

### Regras

1. **Compatibilidade**: A conversão deve ser entre tipos compatíveis em tamanho ou estrutura.
2. **Restrição do `as`**: O operador `as` não deve ser usado se a próxima palavra for um artigo indefinido que possa ser confundido. Na prática, prefira `like` quando seguido de `um`/`uma`.
3. **Uso comum**: Muito utilizado para tratar ponteiros genéricos ou reinterpretar dados em memória.

---

## Exemplos Completos

### Tipo Derivado

```pop
Um nome é uma string.
Um nome plural é um nome.
Uns bytes# são um número.
Um grupo data/hora de criação é uma string.
Umas x-twips são uns twips.
```

### Tipos Derivados de Ponteiros

```pop
Um caractere inicial é um ponteiro [que aponta] para um byte.
Um caractere final é um ponteiro para um byte.
Um endereço de byte é um ponteiro para um byte.
Uma lista é um ponteiro [que aponta] para uma lista estruturada.
Um série de vértices é um ponteiro [que aponta] para uma série de vértices conjunto.
Um GpImageAttributes é um ponteiro.
```

### Estrutura Delimitada

```pop
Um ponteiro é uma estrutura com 4 bytes. \ 32 bits
Uma word big-endian unsigned é uma estrutura com 2 bytes.
```

### Estrutura Simples

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.
```

### Estrutura com Declaração no Campo

```pop
Um array é uma estrutura com
  Um ponteiro denominado endereço,
  Um número denominado tamanho.
```

### Estrutura Composta (com `sob`)

```pop
Um número é uma estrutura com
  Um byte denominado primeiro byte,
  Um byte denominado segundo byte,
  Um byte denominado terceiro byte,
  Um byte denominado quarto byte, \ 4 bytes = 32 bits
  Uma word de ordem inferior sob o primeiro byte,
  Uma word de ordem superior sob o terceiro byte. \ A word de ordem superior vem depois devido à extremidade (ordenação) dos processadores x86
```

### Estrutura com Observações e Comentários

```pop
Uma caixa é uma estrutura com
  Uma coordenada denominada coordenada X1, [left]
  Uma coordenada denominada coordenada Y1, [top]
  Uma coordenada denominada coordenada X2, [right]
  Uma coordenada denominada coordenada Y2, [bottom]
  Uma localização denominada canto superior esquerdo sob a coordenada X1, [left-top]
  Uma localização denominada canto inferior direito sob a coordenada X2. [right-bottom]
```

### Estrutura com Arrays de Bytes

```pop
Um UUID é uma estrutura com
  Um número denominado Data1,
  Uma word denominada Data2,
  Uma word denominada Data3,
  8 bytes denominados Data4.
```

### Estrutura com Padding

```pop
Um OUTLINETEXTMETRIC é uma estrutura com
  Um número denominado otmSize,
  Um TEXTMETRIC denominado otmTextMetrics,
  3 bytes,  \ padding de 3 bytes
  Um byte denominado otmFiller.
```

### Estrutura Complexa (In_Addr / SOCKADDR)

```pop
Um In_Addr é uma estrutura com \ representa um endereço IPv4. -> Internet Adress
  Um byte denominado s_byte1,
  Um byte denominado s_byte2,
  Um byte denominado s_byte3,
  Um byte denominado s_byte4,
  Uma word [unsigned] denominado s_word1 sob o s_byte1,
  Uma word [unsigned] denominado s_word2 sob o s_byte3,
  Um número denominado s_addr sob o s_byte1. 

Um SOCKADDR é uma estrutura com
  Uma word denominada SIn_family,
  Um word big-endian unsigned denominado SIn_Port,
  Um In_Addr denominado SIn_addr,
  8 bytes denominados SIn_zero.
```

### Lista

```pop
Um polígono é uma lista com uns vértices.
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

### Tipo Escalar [Unidade de Medida]

```pop
Um pixel são 15 twips.
Uma polegada são 1440 twips.
Um kb são 1024 bytes#.
Um megabyte são 1024 kb.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Tipo Complexo (Referência)

```pop
Um tipo é uma lista com
  Um endereço local (referência),
  Um nome,
  Um nome plural,
  Um cabeçalho compactado,
  Uma quantidade de caracteres,
  Um nome do tipo primitivo,
  Um tipo base (referência),
  Um nome do conteúdo,
  Um tipo do conteúdo (referência) [aplicável somente a ponteiros],
  Uma razão de escala,
  Uns campos [aplicável somente a estruturas],
  Um sinalizador de recursividade,
  Um sinalizador de informações complementares.
```

---

## Observações Importantes

1. **Referências**: Campos podem ter `(referência)` para indicar ponteiros.
2. **Comentários inline**: Podem aparecer após campos entre `[...]` para documentação, restrições ou notas técnicas.
3. **Observações opcionais**: Informações entre colchetes após tipos (ex: `[unsigned]`, `[que aponta]`) são ignoradas pelo compilador.
4. **Sintaxe opcional para escalares**: `[composto de]` ou `[composta de]` pode ser usado para legibilidade em tipos escalares.
5. **Campos numéricos**: `N bytes` (sem nome) para padding, `N bytes denominados nome` para arrays.
6. **Uso automático**: Uma vez definido `Um contato`, pode-se usar `uns contatos` automaticamente.
7. **Tipo primitivo**: O compilador trata os tipos derivados como tipo base. Isso permite que os tipos derivados sejam utilizados como tipos base. Exemplo: `Um número inteiro é um número.` Em uma rotina que receba um `número`, pode-se receber um `número inteiro`.
8. **Pluralização automática**: O compilador automaticamente gera o nome plural a partir do nome singular.
9. **Campos sobrepostos**: Usando `sob`, múltiplos campos podem compartilhar a mesma posição de memória (útil para unions/variantes).
10. **Símbolos em nomes**: Nomes podem conter `#`, `/`, `-`, `_` para maior expressividade.
11. **Aspas simples**: Usadas para delimitar palavras reservadas ou letras isoladas em nomes de variáveis.
12. **Palavra-chave `são` vs `é`**: Use `são` para plural e razões de escala, `é` para singular e definições simples.
13. **Bytes Ignoráveis**: Caracteres como `#`, `&`, `_`, `-`, `+`, `/`, `£` são considerados "bytes ignoráveis" na formação de identificadores, permitindo flexibilidade na nomenclatura (ex: `data/hora`, `big-endian`).

---

## Estatísticas

- **Tipos primitivos**: 2 (`byte`, `estrutura`)
- **Formas de definição**: 4 (`tipo base`, `uma estrutura`, `uma lista`, `tipo escalar`)
- **Separadores de campos**: 3 (`e`, `ou`, `,`)
- **Operadores de casting**: 2 (`like`, `as`)
- **Pluralização**: Automática com regras do português
- **Campos sobrepostos**: Suportados via `sob`
- **Qualificadores**: Entre colchetes `[]`
- **Comentários inline**: Entre colchetes `[]`

---

# Listas

## Visão Geral

Listas em Português Puro são **estruturas de dados duplamente encadeadas** definidas como um tipo especial. Elas são definidas com a palavra-chave `uma lista com` e automaticamente criam a estrutura com ponteiros `anterior` e `posterior`.

---

## Definição de Listas

### Sintaxe Básica

```pop
Um <nome da lista> é uma lista com <campos>.
```

### Características

- **Estrutura interna**: Automaticamente cria ponteiros `anterior` e `posterior` (lista duplamente encadeada)
- **Campos**: Seguem as mesmas regras das estruturas (artigo indefinido + tipo + `denominado` + nome)
- **Separadores**: `e`, `ou` ou `,` entre campos; ponto (`.`) no final
- **Cabeçalha**: Para manipular listas, usa-se uma estrutura âncora (`umas listas`) com ponteiros `inicial` e `final`

---

## Exemplos de Definição

### Lista Simples

```pop
Um polígono é uma lista com uns vértices.
```

### Lista com Múltiplos Campos

```pop
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.
```

### Lista de Números

```pop
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima.
```

---

## Estrutura Interna (Automática)

Quando você define uma lista, o compilador cria internamente:

```
Uma lista estruturada é uma estrutura com
  Uma lista denominada lista posterior e
  Uma lista denominada lista anterior.

Umas listas são uma estrutura com
  Uma lista denominada lista inicial e
  Uma lista denominada lista final.
```

---

## Manipulação de Listas

### Cabeçalha (Âncora)

Para trabalhar com uma lista, use `umas listas` (plural) como cabeçalha:

```pop
A agenda telefônica é uns contatos.
```

### Declaração de Variável de Lista

```pop
Atribua a lista inicial destas listas para uma lista.
```

### Percorrendo a Lista

```pop
Rotina para que se processe lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, pare.
    \ Processa a lista...
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

---

## Acesso a Membros (Possessivos)

Listas usam **possessivos** (`deste`, `desta`, `destes`, `destas`) para acessar campos, igual a estruturas:

```pop
\ Definição
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima.

\ Uso
Rotina para que se percorra lista:
  Itere.
    Se a lista estiver em branco, pare.
    Escreva o valor desta lista para StdOut.
    Atribua a próxima desta lista para a lista.
  Reitere.
```

**Exemplo completo:**

```pop
Uma lista de nomes é uma lista com
  Uma string denominada nome e
  Uma lista de nomes denominada próxima.

Rotina para que se adicione nome para uma lista de nomes usando uma string:
  Aloque memória para uma segunda lista de nomes.
  Atribua a string para o nome desta segunda lista de nomes.
  Atribua a lista de nomes para a próxima desta segunda lista de nomes.
  Atribua a segunda lista de nomes para a lista de nomes.

Rotina para que se exiba lista de nomes:
  Itere.
    Se a lista de nomes estiver em branco, pare.
    Escreva o nome desta lista de nomes para StdOut.
    Atribua a próxima desta lista de nomes para a lista de nomes.
  Reitere.
```

---

## Operações Comuns

### Adicionar Item (Append)

```pop
Rotina para que se adicione item para uma lista usando um valor:
  Aloque memória para uma nova lista.
  Atribua o valor para o valor desta nova lista.
  Atribua a lista para a posterior desta nova lista.
  Atribua a nova lista para a lista.
```

### Remover Item

```pop
Remova o item desde a lista.
Remova a lista desde as listas.
```

### Acrescentar Elemento

```pop
Acrescente o item para a lista.
Acrescente o vértice para os vértices deste polígono.
```

---

## Padrões Comuns

### Padrão 1: Iteração Simples

```pop
Atribua a lista inicial destas listas para uma lista.
Itere.
  Se a lista for inexistente, pare.
  \ Processa a lista...
  Atribua a lista posterior desta lista à lista.
Reitere.
```

### Padrão 2: Busca em Lista

```pop
Rotina para que se encontre item por nome:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \ Encontrou
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Padrão 3: Destruição de Lista

```pop
Rotina para que se destrua todos os itens de uma lista:
  Itere.
    Atribua a lista inicial destas listas para uma lista.
    Se a lista for inexistente, pare.
    Remova a lista desde as listas.
    Destrua a lista.
  Reitere.
```

---

## Gerenciamento de Memória

**Importante:** Listas requerem gerenciamento manual de memória:

- **Aloque**: Para criar novos nós
- **Desaloque**: Para liberar memória (após remover da lista)
- **Destrua**: Para destruir estrutura completa

```pop
Rotina para que se crie item:
  Aloque memória para uma nova lista.
  Se a nova lista for inexistente, retorne.
  \ Inicializa campos...
  Retorne.
```

---

## Exemplos Práticos

### Agenda Telefônica

```pop
Um contato é uma lista com
  Uma string denominada nome e
  Uma string denominada número de telefone.

A agenda telefônica é uns contatos.

Rotina para que se adicione contato:
  Aloque memória para um novo contato.
  Se o novo contato for inexistente, retorne.
  Atribua o nome para o nome deste novo contato.
  Atribua o telefone para o telefone deste novo contato.
  Acrescente o novo contato para a agenda telefônica.

Rotina para que se liste contatos:
  Atribua a lista inicial desta agenda telefônica para um contato.
  Itere.
    Se o contato for inexistente, pare.
    Escreva o nome deste contato seguido de ": " junto com o telefone deste contato para StdOut.
    Atribua a próxima deste contato para o contato.
  Reitere.
```

### Processamento de Polígonos

```pop
Um vértice é uma estrutura com
  Um número denominado x e
  Um número denominado y.

Um polígono é uma lista com uns vértices.

Rotina para que se calcule perímetro:
  Atribua 0 para um perímetro.
  Atribua o primeiro vértice deste polígono para um vértice atual.
  Atribua o primeiro vértice deste polígono para um vértice anterior.
  Itere.
    Se o vértice atual for inexistente, pare.
    \ Calcula distância...
    Atribua o próximo deste vértice atual para o vértice atual.
  Reitere.
```

---

## Observações Importantes

1. **Lista vs Estrutura**: Listas são estruturas especiais com ponteiros automáticos `anterior`/`posterior`
2. **Cabeçalha**: Use o plural (`uns contatos`, `uma agenda telefônica`) como âncora
3. **Variável de Iteração**: Declare uma variável do tipo singular para iterar (`um contato`, `uma lista`)
4. **Memória Manual**: Sempre aloque antes de usar e desaloque após remover
5. **Possessivos**: Use `desta`, `deste`, etc. para acessar campos da lista
6. **Terminação**: Lista vazia = ponteiro `inicial` inexistente OU `final` < `inicial`
7. **Pluralização**: O compilador gera automaticamente o plural (`contato` → `contatos`)

---

## Comparação com Outras Linguagens

| Conceito              | Português Puro              | C/C++                          |
|-----------------------|----------------------------|--------------------------------|
| Definição             | `uma lista com ...`        | `struct Node { ... };`         |
| Ponteiro próximo      | Automático (`posterior`)   | `Node* next;`                  |
| Ponteiro anterior     | Automático (`anterior`)    | `Node* prev;`                  |
| Cabeçalha             | `uns <tipo>`               | `Node* head; Node* tail;`      |
| Iteração              | `Itere` + `posterior`      | `for(Node* p=head; p; p=p->next)` |
| Acesso a campo        | `campo desta lista`        | `p->campo`                     |
| Alocação              | `Aloque memória`           | `malloc()`                     |
| Desalocação           | `Desaloque memória`        | `free()`                       |

---

## Estatísticas

- **Tipo de lista**: Duplamente encadeada (automático)
- **Palavras-chave**: `uma lista com`, `uns` (plural para cabeçalha)
- **Campos automáticos**: 2 (`anterior`, `posterior`)
- **Cabeçalha**: 2 ponteiros (`inicial`, `final`)
- **Gerenciamento de memória**: Manual (`Aloque`/`Desaloque`/`Destrua`)
- **Acesso a membros**: Via possessivos (`deste`, `desta`, etc.)

---

# Conversão de Tipos

## Visão Geral

Português Puro suporta três modalidades de conversão de tipos:

1. **Conversão Automática** (implícita) - Apenas número → string em concatenações
2. **Conversão Explícita** - Via comando `Converta`
3. **Conversão Forçada (Casting)** - Via `tal como` / `tal qual` ou `like` / `as`

---

## 1. Conversão Automática

### Número → String (em Concatenações)

Em **concatenações**, números são **convertidos automaticamente** para strings:

```pop
Atribua "Total: " junto com o número para a mensagem.
\ Se número = 42, resultado: "Total: 42"

Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
\ Conversão automática do código numérico

Escreva "Resultado: " junto com 10 mais 5 no console.
\ Saída: "Resultado: 15"
```

### Fração → String

```pop
Converta a fração para uma string.
\ Resultado: "1/2" ou "1+1/2" (numeral misto)
```

### Número → Fração

```pop
Atribua o número para uma fração.
\ Resultado: número/1
```

---

## 2. Conversão Explícita (`Converta`)

### Sintaxe Básica

```pop
Converta <origem> para <destino>.
```

### Conversões Comuns

```pop
\ Para String
Converta o número para uma string.
Converta a fração para uma string denominada texto.
Converta o sinalizador para uma segunda string.
Converta o ponteiro para uma string.

\ Para Número
Converta a string para um número.
Converta a string para o número.

\ Para Fração
Converta a fração para um numeral misto.
Converta o número para uma fração.

\ Conversões Especiais
Converta o byte para uma cifra hexadecimal.
Converta a cor para um código da cor.
Converta a URL para uma URL simplificada.
```

### Regras Importantes

**Não há conversão automática** de strings para números. Use `Converta`:

```pop
\ ❌ ERRADO - Erro de compilação
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\ ✅ CORRETO - Conversão explícita
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

---

## 3. Conversão Forçada / Casting

### 3.1 Operadores `tal como` / `tal qual`

Forçam o compilador a **tratar** um tipo como outro tipo (cast).

**Sintaxe:**

```pop
<operação> <valor> tal como <tipo>
<operação> <valor> tal qual <tipo>
```

**Exemplos:**

```pop
\ Cast em atribuição
Atribua o byte à cifra binária tal como um byte.

\ Cast em conversão
Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
Converta o ponteiro para uma string tal qual uma cifra hexadecimal.

\ Cast em operações
Disjuncione logicamente o ponteiro tal como um número com o número.

\ Cast em chamadas
Destrinche a variável global tal como uma variável.
Redimensione a caixa arredondada tal como uma caixa usando a fração.
```

**Nota:** `tal como` e `tal qual` são sinônimos.

---

### 3.2 Operadores `like` / `as` (Casting de Tipos)

Conversão explícita de tipos (casting) utilizando conjunções modificadoras.

**Operadores:**
- **`like`**: Converte o valor anterior para o tipo especificado.
- **`as`**: Funciona de forma idêntica ao `like`, mas **não pode** ser seguido por um artigo indefinido (para evitar ambiguidade com "as" artigo definido plural).

**Sintaxe:**

```pop
valor like um <tipo>
valor as um <tipo>
```

**Exemplos:**

```pop
\ Conversão de ponteiro genérico para ponteiro tipado
Atribua o ponteiro genérico like um ponteiro para byte para o ponteiro específico.

\ Conversão de estrutura
Atribua a estrutura A as uma estrutura B para a variável.

\ Uso em expressões
Se o valor like um byte for maior que 10...
```

**Regras:**
1. **Compatibilidade**: A conversão deve ser entre tipos compatíveis em tamanho ou estrutura.
2. **Restrição do `as`**: O operador `as` não deve ser usado se a próxima palavra for um artigo indefinido que possa ser confundido. Na prática, prefira `like` quando seguido de `um`/`uma`.
3. **Uso comum**: Muito utilizado para tratar ponteiros genéricos ou reinterpretar dados em memória.

---

## 4. Tabela Resumo de Conversões

| Origem → Destino | Tipo | Comando/Operador | Exemplo |
|------------------|------|------------------|---------|
| Número → String | Automática | `junto com` | `"Total: " junto com 42` |
| Fração → String | Explícita | `Converta` | `Converta a fração para uma string` |
| Número → Fração | Explícita | `Atribua` | `Atribua o número para uma fração` |
| String → Número | Explícita | `Converta` | `Converta "123" para o número` |
| Byte → Hexadecimal | Explícita | `Converta` | `Converta $FF para um byte` |
| Número → Hexadecimal | Explícita | `Converta` | `Converta o byte para uma string hexadecimal` |
| Ponteiro genérico → tipado | Casting | `like` / `tal como` | `ponteiro like um ponteiro para byte` |
| Estrutura A → Estrutura B | Casting | `as` / `tal qual` | `estrutura A as uma estrutura B` |
| Qualquer → tipo específico | Casting | `tal como` / `tal qual` | `valor tal como um tipo` |

---

## 5. Conversão em Diferentes Contextos

### Em Atribuições

```pop
Atribua 10 para o número.
Atribua "texto" para a string.
Atribua sim ao sinalizador.
```

### Em Expressões

```pop
\ Aritmética
Atribua o número X mais o número Y ao total.

\ Concatenação
Atribua "Total: " junto com o número ao texto.

\ Com campos
Atribua a coordenada Y1 desta caixa mais a altura à coordenada Y2.
```

### Em Operações

```pop
Adicione 1 para o contador.
Multiplique a largura pelo fator.
Divida o total pelo contador.
```

### Em Condicionais

```pop
Se o número for maior do que 10, pare.
Se a string não estiver em branco, processe.
Se o ponteiro for inexistente, retorne.
```

### Em Chamadas Externas (API)

```pop
Processe "kernel32.dll" "GetConsoleMode" com
  O número identificador do fluxo de entrada padrão e
  O endereçamento dum número denominado modo do console
Retornando um status de erro.
```

---

## 6. Observações Importantes

1. **Apenas Automática**: Número → String em concatenações
2. **String → Número**: Sempre explícita via `Converta`
3. **Frações**: Podem ser usadas diretamente em expressões (`3/4`)
4. **Hexadecimais**: Podem ser usados como valores (`$FF`)
5. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
6. **Compatibilidade**: Casting exige tipos compatíveis em tamanho/estrutura
7. **`tal como` vs `tal qual`**: Sinônimos
8. **`like` vs `as`**: Prefira `like` quando seguido de artigo indefinido
9. **Qualificadores**: `[unsigned]`, `[que aponta]` são ignorados pelo compilador
10. **Conversão de ponteiros**: Comum para reinterpretar memória

---

## 7. Boas Práticas

1. **Use `Converta` explicitamente** para string → número
2. **Prefira frações** para valores racionais exatos (evite aproximações)
4. **Documente casts** complexos com comentários `[...]`
5. **Valide antes de converter** (ex: string numérica válida)
6. **Use `Preserve`** ao converter parâmetros que não devem ser modificados
7. **Teste conversões** de borda (0, máximo, mínimo, strings vazias)
8. **Evite `as`** quando seguido de `um`/`uma` (use `like`)

---

## 8. Erros Comuns

### ❌ Conversão Implícita Inválida

```pop
\ ❌ ERRADO
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\ ✅ CORRETO
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

### ❌ Cast Incompatível

```pop
\ ❌ ERRADO - Tipos incompatíveis
Atribua a string tal como um número para o valor.

\ ✅ CORRETO - Conversão explícita
Converta a string para um número.
Atribua o número para o valor.
```

### ❌ Uso Incorreto de `as`

```pop
\ ❌ AMBÍGUO - 'as' seguido de artigo indefinido
Atribua o ponteiro as um ponteiro para byte para o ptr.

\ ✅ CORRETO - Use 'like'
Atribua o ponteiro like um ponteiro para byte para o ptr.
```

---

## 10. Estatísticas

- **Conversão automática**: 1 direção (número → string)
- **Comando explícito**: `Converta`
- **Operadores de casting**: 4 (`tal como`, `tal qual`, `like`, `as`)
- **Frações**: Suportadas nativamente (`numerador/denominador`)
- **Hexadecimais**: Prefixo `$`, usados como valores
- **Conversão de ponteiros**: Comum via `like`/`as`/`tal como`

---

# Variáveis Globais - Português Puro

## Início
* A instrução se inicia com um artigo definido (`O`, `A`, `Os`, `As`).

## Obrigatório
* **Artigo definido**: Indica que é uma variável global (não local).
* **Nome da variável**: Identificador que segue o artigo definido.
* **Palavra-chave `é` ou `são`**: Conecta o nome ao tipo/valor.
* **Tipo**: Um artigo indefinido seguido do tipo da variável.
* **Fim**: Ponto final `.`

## Opcional
* **Inicialização**: Pode incluir `igual a` ou `iguais a` seguido do valor inicial.
* **Comentários inline**: Entre `[...]` após o nome ou valor.

## Artigo Definido
* Pode ser `o`, `a`, `os` ou `as`. Atualmente, pronomes demonstrativos determinados são considerados artigos definidos. Veja a seção [Pronomes demonstrativos](#pronomes-demonstrativos). [colocar um link aqui quando o arquivo sobre pronomes demonstrativos estiver pronto  ]

## Nome da variável
* **Caracteres**: Consulte o arquivo [Símbolos.md](Símbolos.md) para a lista completa e detalhada de todos os caracteres.
  * **Caracteres permitidos**: Podem ser usados isolados ou aglutinados em qualquer posição. Exemplos comuns:
    * Letras (B-Z, b-z) com ou sem acentos (exceto vogais limitadas)
    * `#` (cardinal) - ex: `bytes#`
    * `&` (e comercial) - ex: `& comercial`, `ponto&vírgula`
    * `_` (underscore) - ex: `s_byte1`
    * `@` (arroba)
  * **Caracteres limitados**: Permitidos em qualquer posição, desde que estejam entre outros caracteres permitidos ou limitados.
  * **Vogais**: Têm função sintática quando isolados, mas podem ser usados junto a outros caracteres. Exemplos:
    * `A`, `E`, `O`, `a`, `e`, `o` (vogais que podem ser artigos (`A`, `O`) ou conjunções (`E`) quando isoladas)
    * `À`, `É`, `é`, `à` (vogais acentuadas com função sintática reservada (preposição, verbo))
  * **Caracteres numéricos**: Exemplos:
    * Espaço (para nomes compostos) - ex: `data hora`
    * Números `0-9` - podem aparecer em qualquer posição
    * `/` (barra) - ex: `data/hora`
    * `-` (hífen) - ex: `big-endian`, `Shift-Out`
  * **Caracteres especiais**: Permitidos em qualquer posição, mas não podem ser precedidos ou sucedidos por outros caracteres especiais. Exemplos: `<`, `=`, `>`, `^`, `|`, `€`, `×`, `÷`
  * **Caracteres reservados**: Não podem ser usados em nomes de variáveis. Exemplos: `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, `'`
  * **Caracteres não permitidos**: Só podem estar presentes em strings literais ou comentários. Exemplos: `!`, `*`, `?`, `{`, `}`, `ª`, `º`
* **Primeiro caractere**: Qualquer letra (com ou sem acento) ou símbolo permitido (exceto espaço).
* **Case sensitivity**: Insensitive (exceto em strings e comentários).
* **Nomes entre aspas simples**: Usados para delimitar palavras reservadas.
* **Nomes entre colchetes**: Usados para abreviações/siglas - ex: `[SOH]`, `[NULL]`, `[CR]`
* **Palavras reservadas**: Não podem ser usadas por delimitarem o fim de do nome uma variável.
   * **Advérbio de negação**
   * **Artigo**
   * **Conjunção**
   * **Operador aritmético**
   * **Operador de atribuição composto**
   * **Palavra-chave de designação**
   * **Preposição**
   * **Qualificador**
   * **Símbolo**
   * **Sinal de pontuação**
   * **Valor literal**
   * **Verbo**

## Sintaxe

### Forma básica
```
<Artigo Definido> <nome da variável> <é|são> <Artigo Indefinido> <nome do tipo><.>
```

### Com inicialização
```
<Artigo Definido> <nome da variável> <é|são> <Artigo Indefinido> <nome do tipo> <igual a> <valor><.>
```

### Com comentário
```
<Artigo Definido> <nome da variável> <[comentário]> <é|são> <Artigo Indefinido> <nome do tipo> <igual a> <valor><.> <\comentário de linha>
```

### Forma estruturada
```
<Artigo Definido> <nome da variável> <é|são> <Artigo Indefinido> <estrutura> <com><lista de campos><.>
```


## Exemplos

### Variável simples sem inicialização
```pop
O contador é um número.
A mensagem é uma string.
```

### Variável com inicialização
```pop
O caractere NULL [NULL] é um byte igual a 0. \Null
O sinal de adição é um byte igual a 43.
A próxima letra é uma letra igual a 65.\ Letra A maiúscula, por ser esta a primeira letra.
```

### Variáveis com nomes compostos
```pop
O caractere de início de cabeçalho [SOH] é um byte igual a 1. \Start of Header
O ponto de exclamação é um byte igual a 33.
O número de telefone é uma string.
```

### Variáveis com símbolos especiais
```pop
Uns bytes# são um número.
O grupo data/hora de criação é uma string.
O caractere Shift-Out [SO] é um byte igual a 14.
O & comercial é um byte igual a 38.
O ponto&vírgula é um byte igual a 59.
```

### Variáveis com aspas simples (palavras reservadas)
```pop
A letra 'A' maiúscula é um byte igual a 65.
O 'A' maiúsculo é um byte igual a 65.
O número 'um' é um byte igual a 49.
O 'número um' é um byte igual a 49.
A letra 'E' maiúscula é um byte igual a 69.
O 'e' minúsculo é um byte igual a 101.
```

### Variáveis com números no nome
```pop
O número zero é um byte igual a 48.
O número dois é um byte igual a 50.
O s_byte1 é um byte.
```

### Variáveis estruturada com campos
```pop
O mouse é uma estrutura com
  Uma tecla denominado botão esquerdo,
  Uma tecla denominado botão direito.

O módulo é uma estrutura com
  Um número identificador,
  Um endereço completo,
  Um endereço da pasta,
  Um root endereço da pasta,
  Um nome do arquivo s/ extensão denominado nome.

A tela é uma estrutura com
  Uma caixa,
  Uma altura denominada altura do pixel e
  Uma largura denominada largura do pixel.
```

### Variáveis com valores hexadecimais longos
```pop
A tabela ascii é uma tabela de tradução igual a $000102030405060708090A0B0C0D0E0F...FDFEFF.
O som de aviso é uma wave igual a $524946463A02000057415645666D74201200000001000100....
A fonte osmosiana é um texto hexadecimal igual a $00010000000B0080000300304F532F32BB41B2760000013800000056....
```

### Variáveis com frações como valores
```pop
A raiz de dois é uma fração igual a 2147483647/1518500249.
A raiz de três é uma fração igual a 2147483647/1239850262.
O número pi é uma fração igual a 2147483647/683565275.
A proporção dourada é uma fração igual a 1618033988/1000000000.
Um cm são 254/100 polegadas.
Um milímetro é 1/10 centímetros.
```

### Variáveis com sintaxe opcional
```pop
O tpi [quantidade de twips por polegada] é [composta de] uns twips igual a 1440.
Uma coordenada é [composta de] uns twips.
O tamanho do quadrado é [igual a] uns twips.
A stack é [composta de] uns elementos das stacks.
```

## Observações Importantes

1. **Artigo definido vs indefinido**: 
   * Artigo **definido** (`O`, `A`, `Os`, `As`) = variável **global**
   * Artigo **indefinido** (`Um`, `Uma`, `Uns`, `Umas`) = tipo ou variável **local**

2. **Abreviações entre colchetes**: Usadas para siglas e códigos (ex: `[NULL]`, `[SOH]`, `[CR]`)

3. **Comentários**:
   * Em Linha: entre `[...]`. Não aceita quebra de linhas. Também é chamado de `Observação` no Código-Fonte do Compilador.
   * Fim de Linha: após `\` até a quebra de linha.

4. **Símbolos em nomes**: Permitem maior expressividade e clareza (ex: `&`, `/`, `-`, `#`)

5. **Aspas simples**: Delimitam palavras que seriam reservadas ou ambíguas (ex: `'A'`, `'um'`, `número 'um'`)

6. **Inicialização**: Opcional, mas comum para constantes e valores padrão

7. **Nomes descritivos**: Português Puro incentiva nomes longos e descritivos em linguagem natural

8. **Estruturas inline**: Variáveis globais podem ser definidas como estruturas sem que seja preciso declarar o tipo separadamente
   * Sintaxe: `O nome é uma estrutura com campos...`
   * Útil para variáveis únicas que não precisam de reutilização de tipo

9. **Valores hexadecimais**: Podem ser extremamente longos (milhares de caracteres)
    * Prefixo: `$` indica valor hexadecimal
    * Uso: tabelas de tradução, fontes, sons, imagens embutidas
    * Exemplo: `$000102030405...FDFEFF`

10. **Frações como valores**: Expressas diretamente com `/`
    * Sintaxe: `numerador/denominador`
    * Uso: constantes matemáticas, razões de conversão
    * Exemplo: `2147483647/1518500249` (raiz de dois)

11. **Sintaxe opcional**: `[composto de]`, `[composta de]`, `[igual a]` podem ser usados para legibilidade
    * Exemplo: `é [composta de] uns twips`
    * Equivalente a: `são uns twips`


12. Permitido antes de início de variável:
 * **Artigo**: não;
 * **Conjunção**: sim;
 * **Verbo**: sim;
 * **Operador aritmético**: sim;
 * **Operador de atribuição composto**: sim;
 * **Palavra-chave de designação**: sim;
 * **Preposição**: sim;
 * **Possessivo**: não;
 * **Qualificador**: não;
 * **Símbolo**: não;
 * **Sinal de pontuação**: não;
 * **Valor literal**: não;

13. Permitido depois de fim de variável:
 * **Advérbio de negação**: sim;
 * **Artigo**: sim;
 * **Conjunção**: sim;
 * **Operador aritmético**: sim;
 * **Operador de atribuição composto**: sim;
 * **Palavra-chave de designação**: sim;
 * **Preposição**: sim;
 * **Qualificador**: sim;
 * **Símbolo**: sim;
 * **Sinal de pontuação**: sim;
 * **Valor literal**: sim;
 * **Verbo**: sim;

---

# Variáveis Locais - Português Puro
Variáveis locais são declaradas após um artigo indefinido dentro de rotinas ou funções.

Exemplos:
```pop
Ative um sinalizador denominado status.
Limpe uma string denominada nome.
Esvazie um ponteiro denominado endereço.
Pinte um número denominado valor.
Imprima uma folha denominada impressão.
Desenhe uma linha denominada traço.
```

Caso a palavra-chave "denominado" e suas variações sejam omitidas, o nome da variável será inferido a partir do tipo fornecido.

Exemplos:
```pop
Ative um sinalizador. // nome da variável: sinalizador
Limpe uma string. // nome da variável: string
Esvazie um ponteiro. // nome da variável: ponteiro
Pinte um número. // nome da variável: número
Imprima uma folha. // nome da variável: folha
Desenhe uma linha. // nome da variável: linha
```

Também é possível inicializar a variável com um valor

Exemplos:
```pop
Atribua 10 para um número denominado contagem.
Atribua "João" para uma string denominada nome.
Atribua 355/113 para uma fração denominada pi.
Atribua 1 para um sinalizador denominado status.
```

Caso a palavra-chave "denominado" e suas variações sejam omitidas, o nome da variável será inferido a partir do tipo fornecido.

Exemplos:
```pop
Atribua 10 para um número.
Atribua "João" para uma string.
Atribua 355/113 para uma fração.
Atribua 1 para um sinalizador.
```

## Início
* A instrução se inicia com um comando de atribuição ou alocação.

## Obrigatório
* **Comando**: `Atribua` ou `Aloque memória`
* **Valor ou ação**: O valor a ser atribuído ou a ação de alocação
* **Preposição**: `para` ou `em`
* **Artigo indefinido**: Indica que é uma variável local (não global)
* **Tipo ou nome**: Identificador do tipo ou nome da variável
* **Fim**: Ponto final `.`

## Opcional
* **Palavra-chave `denominado`**: Permite nomear explicitamente a variável
* **Nome da variável**: Identificador personalizado quando usado `denominado`

## Artigo Indefinido
* Pode ser `um`, `uma`, `uns` ou `umas`. Atualmente, pronomes demonstrativos indeterminados [abrangentes] são considerados artigos indefinidos. Veja a seção [Pronomes demonstrativos](#pronomes-demonstrativos). [colocar um link aqui quando o arquivo sobre pronomes demonstrativos estiver pronto]

## Nome da variável
* **Caracteres**: Consulte o arquivo [Símbolos.md](Símbolos.md) para a lista completa e detalhada de todos os caracteres.
  * **Caracteres reservados**: Não podem ser usados em nomes de variáveis. Exemplos: `"`, `$`, `(`, `)`, `:`, `;`, `,`, `.`, `+`, `-`, `[`, `\`, `]`, `'`
  * **Caracteres limitados**: Têm função sintática quando isolados, mas podem ser aglutinados com outros caracteres. Exemplos:
    * `A`, `E`, `O`, `a`, `e`, `o` (vogais que podem ser artigos ou conjunções quando isoladas)
    * `À`, `É`, `é`, `à` (vogais acentuadas com função sintática)
  * **Caracteres permitidos**: Podem ser usados isolados ou aglutinados em qualquer posição. Exemplos comuns:
    * `#` (cardinal) - ex: `bytes#`
    * `&` (e comercial) - ex: `& comercial`, `ponto&vírgula`
    * `_` (underscore) - ex: `s_byte1`
    * `@` (arroba)
    * Letras (B-Z, b-z exceto vogais limitadas) com ou sem acentos
  * **Caracteres numéricos**: Permitidos em qualquer posição, desde que estejam entre outros caracteres permitidos ou limitados. Exemplos:
    * Espaço (para nomes compostos) - ex: `data hora`
    * `/` (barra) - ex: `data/hora`
    * `-` (hífen) - ex: `big-endian`, `Shift-Out`
    * Números `0-9` - podem aparecer em qualquer posição
  * **Caracteres especiais**: Permitidos em qualquer posição, mas não podem ser precedidos ou sucedidos por outros caracteres especiais. Exemplos: `<`, `=`, `>`, `^`, `|`, `€`, `×`, `÷`
  * **Caracteres não permitidos**: Só podem estar presentes em strings literais ou comentários. Exemplos: `!`, `*`, `?`, `{`, `}`, `ª`, `º`
* **Primeiro caractere**: Qualquer letra (com ou sem acento) ou símbolo permitido (exceto espaço).
* **Case sensitivity**: Insensitive (exceto em strings e comentários).
* **Nomes entre aspas simples**: Usados para delimitar palavras reservadas.

## Escopo
* Variáveis locais são declaradas dentro de rotinas
* São acessíveis apenas dentro do escopo da rotina onde foram declaradas
* A declaração ocorre no momento da primeira atribuição ou alocação

## Formas de Declaração

### 1. Com Inferência de Tipo (mais comum)
* O tipo é inferido a partir de uma palavra-chave no nome da variável
* **Sintaxe**: `Atribua <valor> para <artigo indefinido> <nome-com-tipo>.`
* **Tipos inferíveis**: `número`, `string`, `fração`, `sinalizador`, `caractere`, `byte`, etc.

### 2. Com Nome Explícito
* O tipo é definido explicitamente e a variável é nomeada
* **Sintaxe**: `Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.`

### 3. Com Alocação de Memória
* Usada para tipos complexos (estruturas, listas)
* **Sintaxe**: `Aloque memória para <artigo indefinido> <tipo>.`

## Uso Posterior
* Após a declaração, a variável local é referenciada usando um **artigo definido** (`o`, `a`, `os`, `as`)
* Exemplo: Após `Atribua 10 para um número`, usa-se `o número`

## Sintaxe

### Forma com inferência de tipo
```
Atribua <valor> para <artigo indefinido> <nome-com-tipo>.
```

### Forma com nome explícito
```
Atribua <valor> para <artigo indefinido> <tipo> denominado <nome>.
```

### Forma com alocação
```
Aloque memória para <artigo indefinido> <tipo>.
```

## Exemplos

### Variável com inferência de tipo
```pop
\ O tipo 'número' é inferido da palavra "número"
Atribua 10 para um número.

\ O tipo 'string' é inferido da palavra "string"
Atribua "João" para uma string.

\ O tipo 'fração' é inferido da palavra "fração"
Atribua 355/113 para uma fração.

\ O tipo 'sinalizador' é inferido da palavra "sinalizador"
Atribua sim para um sinalizador.
```

### Variável com nome explícito
```pop
Atribua 18 para um número denominado idade.
Atribua "Maria" para uma string denominada nome.
Atribua 3/4 para uma fração denominada proporção.
```

### Variável com alocação de memória
```pop
\ Para estruturas
Aloque memória para uma pessoa.
Atribua "João" para o nome desta pessoa.

\ Para listas
Aloque memória para um contato.
Acrescente o contato na agenda telefônica.
```

### Uso posterior com artigo definido
```pop
\ Declaração
Atribua 10 para um contador.

\ Uso posterior
Adicione 5 para o contador.
Se o contador for maior do que 10, pare.
```

### Variáveis em laços
```pop
Atribua 1 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que 10, pare.
Reitere.
```

### Variáveis com tipos complexos
```pop
\ Declaração de uma estrutura local
Aloque memória para uma pessoa.
Atribua "João Silva" para o nome desta pessoa.
Atribua 30 para a idade desta pessoa.

\ Declaração de uma lista local
Atribua nulo para um contato.
Itere.
  Obtenha um contato desde a agenda telefônica.
  Se o contato for nulo, pare.
  Escreva o nome deste contato para StdOut.
Reitere.
```

## Observações Importantes

1. **Artigo indefinido vs definido**: 
   * Artigo **indefinido** (`um`, `uma`, `uns`, `umas`) = declaração de variável **local**
   * Artigo **definido** (`o`, `a`, `os`, `as`) = referência a variável já declarada

2. **Inferência de tipo**: 
   * A linguagem identifica o tipo pela presença de palavras-chave no nome
   * Palavras como `número`, `string`, `fração`, `sinalizador` indicam o tipo
   * Exemplo: `um número total` é do tipo `número`

3. **Escopo limitado**: 
   * Variáveis locais existem apenas dentro da rotina onde foram declaradas
   * Não são acessíveis fora da rotina

4. **Primeira atribuição**: 
   * A declaração ocorre na primeira vez que a variável é mencionada com artigo indefinido
   * Não é necessário declarar separadamente antes de usar

5. **Passagem por referência**: 
   * Todos os parâmetros em rotinas são passados por referência
   * Alterar um parâmetro dentro de uma rotina **altera a variável original**
   * Use `Preserve` para criar uma cópia local e evitar modificação

6. **Nomes descritivos**: 
   * Português Puro incentiva nomes longos e descritivos em linguagem natural
   * Exemplo: `um número de tentativas`, `uma string de boas-vindas`

## Diferenças entre Variáveis Locais e Globais

| Aspecto              | Variáveis Locais             | Variáveis Globais          |
|----------------------|------------------------------|----------------------------|
| **Artigo**           | Indefinido (`um`, `uma`)     | Definido (`o`, `a`)        |
| **Escopo**           | Dentro da rotina             | Todo o módulo              |
| **Declaração**       | Na primeira atribuição       | Fora de rotinas            |
| **Sintaxe**          | `Atribua valor para um tipo` | `O nome é um tipo`         |
| **Acesso posterior** | Com artigo definido          | Sempre com artigo definido |

---

# Possessivos (Operadores de Acesso a Membros) - Português Puro

## Definição

Possessivos são os **operadores de acesso a membros** de estruturas e listas em Português Puro. Equivalem ao operador `.` (ponto) em outras linguagens como C, Pascal, ou JavaScript.

## Sintaxe

```
<campo> <possessivo> <estrutura>
```

## Formas

| Possessivo | Formação   | Equivalente | Exemplo                       |
|------------|------------|-------------|-------------------------------|
| `deste`    | de + este  | `.`         | `o nome deste arquivo`        |
| `desta`    | de + esta  | `.`         | `a cor desta janela`          |
| `destes`   | de + estes | `.`         | `os valores destes registros` |
| `destas`   | de + estas   | `as idades destas pessoas`       |

## Comparação com Outras Linguagens

| Linguagem      | Operador | Exemplo                   | Português Puro               |
|----------------|----------|---------------------------|------------------------------|
| C/C++          | `.`      | `struct.field`            | `o campo desta estrutura`    |
| JavaScript     | `.`      | `object.property`         | `a propriedade deste objeto` |
| Python         | `.`      | `instance.attribute`      | `o atributo desta instância` |
| Pascal         | `.`      | `record.field`            | `o campo deste registro`     |
| Português Puro | `desta`  | `o campo desta estrutura` | `o campo desta estrutura`    |

## Razão de Ser

### Problema: Ambiguidade com Preposições

Nomes de variáveis em Português Puro podem conter as preposições `de`, `do`, `da`, `dos`, `das`:

```pop
\\ Variáveis válidas
O número de telefone é uma string.
A data de nascimento é uma data.
O endereço do cliente é uma string.
```

Se usássemos `de`, `do`, `da`, etc. como operadores de acesso, haveria **ambiguidade**:

```pop
\\ AMBÍGUO: "número de telefone" é o nome da variável ou "número" é campo de "telefone"?
Escreva o número de telefone para StdOut.
```

### Solução: Possessivos Demonstrativos

Usar `deste`, `desta`, `destes`, `destas` elimina a ambiguidade:

```pop
\\ CLARO: "nome" é um campo de "esta pessoa"
Escreva o nome desta pessoa para StdOut.

\\ CLARO: "número de telefone" é o nome completo da variável
Escreva o número de telefone para StdOut.
```

## Invariância de Gênero e Número

**Importante**: Em Português Puro, **não há distinção** entre as formas de possessivos em termos de funcionalidade. Todas são equivalentes:

```pop
\\ Todas as formas abaixo são EQUIVALENTES
o nome deste arquivo
o nome desta arquivo
o nome destes arquivo
o nome destas arquivo
```

A escolha da forma é **estilística**, para concordância natural com o português, mas o compilador trata todas igualmente.

## Exemplos

### Exemplo 1: Acesso a Campo de Estrutura

```pop
\\ Definição de tipo
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

\\ Uso
Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.
  Escreva a idade desta pessoa para StdOut.
```

**Equivalente em C**:
```c
struct Pessoa {
  char* nome;
  int idade;
};

void exibaPessoa(Pessoa* pessoa) {
  printf("%s\n", pessoa->nome);
  printf("%d\n", pessoa->idade);
}
```

### Exemplo 2: Atribuição a Campo

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um número denominado idade.

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa.
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
```

**Equivalente em JavaScript**:
```javascript
class Pessoa {
  constructor() {
    this.nome = "João";
    this.idade = 30;
  }
}
```

### Exemplo 3: Estruturas Aninhadas

```pop
Um endereço é uma estrutura com
  Uma string denominada rua e
  Um número denominado número.

Uma pessoa é uma estrutura com
  Uma string denominada nome e
  Um endereço denominado endereço.

Rotina para que se exiba endereço:
  Escreva a rua deste endereço desta pessoa para StdOut.
  Escreva o número deste endereço desta pessoa para StdOut.
```

**Equivalente em C**:
```c
pessoa->endereco.rua
pessoa->endereco.numero
```

### Exemplo 4: Listas (Também São Estruturas)

```pop
Uma lista de números é uma lista com
  Um número denominado valor e
  Uma lista de números denominada próxima. \verificar a disponibilidade da palavra próxima para uso como nome de variável

Rotina para que se percorra lista:
  Itere.
    Se a lista estiver em branco, pare.
    Escreva o valor desta lista para StdOut.
    Atribua a próxima desta lista para a lista.
  Reitere.
```

## Sintaxe Completa

### Forma Básica
```
<artigo> <nome_do_campo> <possessivo> <nome_da_estrutura>
```

### Com Múltiplos Níveis
```
<campo_nível_1> <possessivo> <campo_nível_2> <possessivo> <estrutura>
```

### Exemplos de Sintaxe
```pop
\\ Nível único
o nome desta pessoa
a idade deste registro
os valores destas listas

\\ Múltiplos níveis
a rua deste endereço desta pessoa
o valor desta próxima desta lista
o nome deste pai desta pessoa
```

## Detecção pelo Compilador

```pop
Função para que se determine se um percorredor está sobre algum possessivo reverso:
  Preserve o percorredor.
  Se o segmento inicial deste percorredor não for "de", diga não.
  Mova o percorredor (usando diretrizes de compilação).
  Se o segmento inicial deste percorredor for algum pronome demonstrativo, diga sim.
  Diga não.
```

**Nota**: O compilador detecta `de` + pronome demonstrativo (`este`, `esta`, `estes`, `estas`) como possessivo.

## Diferença: Possessivo vs Preposição

| Contexto         | Forma   | Significado              |
|------------------|---------|--------------------------|
| Nome de variável | `de`    | Parte do nome            |
| Acesso a membro  | `desta` | Operador de acesso (`.`) |
| Preposição comum | `de`    | Relação entre palavras   |

### Exemplos Comparativos

```pop
\\ "de" como parte do nome
O número de telefone é uma string.
Escreva o número de telefone para StdOut.

\\ "desta" como operador de acesso
Uma pessoa é uma estrutura com uma string denominada telefone.
Escreva o telefone desta pessoa para StdOut.

\\ "de" como preposição comum
Atribua o valor de 10 para um número. \ verificar as regras de preposição antes de literais
\ Já que o "de" pode fazer parte do nome da variável, ele precisa ser distinguido de preposição. Na verdade o de só atua como preposição quando não é seguido por um pronome demonstrativo. Fora disso, ou ele faz parte de um nome de variável, ou ele é apenas açúcar sintático, ou seja, ele não tem significado e não está ao lado de um parâmetro ou variável. Requer uma preposição entre o nome da variável ou parâmetro e o `de`
```

## Observações Importantes

1. **Invariância**: `deste`, `desta`, `destes`, `destas` são **funcionalmente idênticos**
2. **Concordância Estilística**: Use a forma que melhor concorda com o português natural
3. **Ambiguidade Resolvida**: Possessivos evitam confusão com nomes de variáveis compostos
4. **Estruturas e Listas**: Ambas usam possessivos para acesso a membros
5. **Aninhamento**: Possessivos podem ser encadeados para estruturas aninhadas
6. **Case-Insensitive**: Como toda a linguagem, possessivos são case-insensitive

## Exemplos Completos

### Exemplo Completo 1: Cadastro de Pessoa

```pop
\\ Definição de tipos
Um endereço é uma estrutura com
  Uma string denominada rua,
  Um número denominado número e
  Uma string denominada cidade.

Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade e
  Um endereço denominado endereço.

\\ Uso
Rotina para que se cadastre uma pessoa:
  Aloque memória para uma pessoa.
  
  \\ Acesso direto
  Atribua "João Silva" para o nome desta pessoa.
  Atribua 35 para a idade desta pessoa.
  
  \\ Acesso aninhado
  Atribua "Rua das Flores" para a rua deste endereço desta pessoa.
  Atribua 123 para o número deste endereço desta pessoa.
  Atribua "São Paulo" para a cidade deste endereço desta pessoa.
  
  \\ Exibição
  Escreva "Nome: " junto com o nome desta pessoa para StdOut.
  Escreva "Idade: " junto com a idade desta pessoa para StdOut.
  Escreva "Endereço: " junto com a rua deste endereço desta pessoa para StdOut.
```

### Exemplo Completo 2: Lista Encadeada

```pop
Uma lista de nomes é uma lista com
  Uma string denominada nome e
  Uma lista de nomes denominada próxima.

Rotina para que se adicione nome para uma lista de nomes usando uma string:
  Aloque memória para uma segunda lista de nomes.
  Atribua a string para o nome desta segunda lista de nomes.
  Atribua a lista de nomes para a próxima desta segunda lista de nomes.
  Atribua a segunda lista de nomes para a lista de nomes.

Rotina para que se exiba lista de nomes:
  Itere.
    Se a lista de nomes estiver em branco, pare.
    Escreva o nome desta lista de nomes para StdOut.
    Atribua a próxima desta lista de nomes para a lista de nomes.
  Reitere.
```

## Erros Comuns

### ❌ Erro 1: Usar `de` em vez de `desta`
```pop
\\ ERRADO: Ambíguo
Escreva o nome de pessoa para StdOut.
```
✅ **Correto**:
```pop
Escreva o nome desta pessoa para StdOut.
```

### ❌ Erro 2: Confundir nome de variável com acesso a membro
```pop
\\ Se "número de telefone" é o nome da variável:
O número de telefone é uma string.
Escreva o número de telefone para StdOut.  \\ Correto

\\ Se "telefone" é um campo de "pessoa":
Escreva o telefone desta pessoa para StdOut.  \\ Correto
```

### ❌ Erro 3: Usar ponto (`.`) como em outras linguagens
```pop
\\ ERRADO: Sintaxe inválida
Escreva pessoa.nome para StdOut.
```
✅ **Correto**:
```pop
Escreva o nome desta pessoa para StdOut.
```

---

# Campos Calculados - Português Puro

## Definição

**Campos calculados** são "campos virtuais" que não existem fisicamente na estrutura, mas cujo valor é calculado dinamicamente por uma rotina. Eles permitem acessar valores derivados como se fossem campos reais da estrutura.

## Conceito

Imagine uma estrutura `linha` que possui apenas dois campos:
- `localização inicial`
- `localização final`

Mas você quer acessar o **centro** da linha sem armazená-lo explicitamente. Um **campo calculado** permite fazer isso:

```pop
\\ Acessa como se 'centro' fosse um campo real
Atribua o centro desta linha para uma localização.
```

## Como Funciona

### 1. Definir a Rotina do Campo Calculado

A rotina que define um campo calculado usa o verbo **`atribua`** em sua assinatura:

```pop
Rotina para que se atribua <nome_do_campo> <possessivo> <tipo> para <tipo_retorno>:
```

**Estrutura**:
- `atribua` = verbo que indica campo calculado
- `<nome_do_campo>` = nome do campo virtual
\\ A estrutura 'linha' só tem 'inicial' e 'final'
Uma linha é uma estrutura com
  Uma localização denominada inicial e
  Uma localização denominada final.
```

### Definição do Campo Calculado

```pop
\\ Rotina que define o campo calculado 'centro' para a estrutura 'linha'
Rotina para que se atribua o centro duma linha para uma localização:
  \\ Calcula o ponto central
  Atribua a localização inicial desta linha mais a localização final desta linha à localização.
  Divida a localização por 2.
```

**Análise**:
- `atribua` = indica campo calculado
- `o centro` = nome do campo virtual
- `duma linha` = tipo que terá o campo (`linha`)
- `para uma localização` = tipo de retorno

### Uso do Campo Calculado

```pop
Rotina para que se rotacione uma linha:
  \\ O valor de 'centro desta linha' é obtido pela rotina do campo calculado
  Atribua o centro desta linha para um centro localização.
  Rotacione a localização inicial desta linha em direção ao centro.
```

**Nota**: `o centro desta linha` é acessado como se fosse um campo real, mas o valor é calculado pela rotina.

## Pronomes Demonstrativos em Campos Calculados

### Possessivos Adjacentes (`desta`, `deste`)

Usados quando o campo calculado é acessado de uma **variável local**:

```pop
Rotina para que se processe uma linha:
  \\ 'linha' é uma variável local (parâmetro)
  Atribua o centro desta linha para uma localização.
```

### Possessivos Abrangentes (`duma`, `dum`, `dessa`, `desse`)

Usados na **definição** do campo calculado, pois se refere ao **tipo**, não a uma variável específica:

```pop
\\ Definição: usa 'duma' (abrangente) pois se refere ao tipo 'linha'
Rotina para que se atribua o centro duma linha para uma localização:
  \\ Implementação usa 'desta' (adjacente) pois se refere à instância
  Atribua a localização inicial desta linha para uma localização.
```

**Regra**:
- **Definição do campo calculado**: `duma`, `dum` (tipo genérico)
- **Implementação/Uso**: `desta`, `deste` (instância específica)

## Diferença: Campo Real vs Campo Calculado

| Aspecto       | Campo Real                 | Campo Calculado       |
|---------------|----------------------------|-----------------------|
| Armazenamento | Ocupa memória na estrutura | Não ocupa memória     |
| Acesso        | Leitura e escrita          | Somente leitura       |
| Definição     | Na declaração da estrutura | Em rotina separada    |
| Valor         | Armazenado                 | Calculado sob demanda |

### Exemplo Comparativo

```pop
\\ Campo REAL
Uma pessoa é uma estrutura com
  Uma string denominada nome e  \\ Campo real: armazenado
  Um número denominado idade.    \\ Campo real: armazenado

\\ Campo CALCULADO
Rotina para que se atribua a idade em meses duma pessoa para um número:
  Atribua a idade desta pessoa vezes 12 para o número.

\\ Uso
Rotina para que se exiba pessoa:
  Escreva o nome desta pessoa para StdOut.        \\ Campo real
  Escreva a idade desta pessoa para StdOut.       \\ Campo real
  Escreva a idade em meses desta pessoa para StdOut.  \\ Campo calculado!
```

## Vantagens dos Campos Calculados

1. **Economia de Memória**: Valores derivados não precisam ser armazenados
2. **Consistência**: O valor é sempre recalculado, garantindo atualização
3. **Encapsulamento**: Lógica de cálculo fica separada da estrutura
4. **Naturalidade**: Acesso transparente como se fosse campo real

## Escopo e Emprego

### Emprego Explícito

A rotina do campo calculado pode ser empregada explicitamente:

```pop
Rotina para que se processe uma linha:
  \\ Emprega a rotina do campo calculado
  Empregue a rotina para que se atribua o centro duma linha para uma localização.
  
  \\ Agora 'centro' está disponível neste escopo
  Atribua o centro desta linha para uma localização.
```

### Emprego Implícito

Se a rotina do campo calculado estiver definida no mesmo módulo, ela pode ser empregada automaticamente:

```pop
Rotina para que se processe uma linha:
  \\ A rotina do campo calculado é encontrada automaticamente
  Atribua o centro desta linha para uma localização.
```

## Exemplos Adicionais

### Exemplo 1: Área de Retângulo

```pop
\\ Estrutura
Um retângulo é uma estrutura com
  Um número denominado largura e
  Um número denominado altura.

\\ Campo calculado
Rotina para que se atribua a área dum retângulo para um número:
  Atribua a largura deste retângulo vezes a altura deste retângulo para o número.

\\ Uso
Rotina para que se calcule área:
  Aloque memória para um retângulo.
  Atribua 10 para a largura deste retângulo.
  Atribua 5 para a altura deste retângulo.
  
  \\ Acessa o campo calculado
  Escreva "Área: " junto com a área deste retângulo para StdOut.  \\ Imprime: Área: 50
```

### Exemplo 2: Nome Completo de Pessoa

```pop
\\ Estrutura
Uma pessoa é uma estrutura com
  Uma string denominada primeiro nome e
  Uma string denominada sobrenome.

\\ Campo calculado
Rotina para que se atribua o nome completo duma pessoa para uma string:
  Atribua o primeiro nome desta pessoa junto com " " junto com o sobrenome desta pessoa para a string.

\\ Uso
Rotina para que se exiba pessoa:
  Aloque memória para uma pessoa.
  Atribua "João" para o primeiro nome desta pessoa.
  Atribua "Silva" para o sobrenome desta pessoa.
  
  \\ Acessa o campo calculado
  Escreva o nome completo desta pessoa para StdOut.  \\ Imprime: João Silva
```

### Exemplo 3: Distância entre Pontos

```pop
\\ Estrutura
Um ponto é uma estrutura com
  Um número denominado x e
  Um número denominado y.

Uma linha é uma estrutura com
  Um ponto denominado início e
  Um ponto denominado fim.

\\ Campo calculado
Rotina para que se atribua o comprimento duma linha para um número:
  \\ Calcula distância euclidiana
  Atribua o x do fim desta linha menos o x do início desta linha para um delta x.
  Atribua o y do fim desta linha menos o y do início desta linha para um delta y.
  Atribua o delta x vezes o delta x mais o delta y vezes o delta y para um quadrado.
  Extraia a raiz quadrada do quadrado para o número.

\\ Uso
Rotina para que se meça linha:
  Escreva "Comprimento: " junto com o comprimento desta linha para StdOut.
```

## Limitações

1. **Somente Leitura**: Campos calculados não podem ser modificados diretamente
2. **Custo Computacional**: O valor é recalculado a cada acesso
3. **Escopo**: Requer que a rotina do campo calculado esteja disponível no escopo

## Observações Importantes

1. **Assinatura Especial**: A rotina usa `atribua` em vez de verbos comuns
2. **Possessivos Abrangentes**: Definição usa `duma`, `dum` (tipo genérico)
3. **Possessivos Adjacentes**: Uso usa `desta`, `deste` (instância)
4. **Transparência**: Acesso idêntico a campos reais
5. **Emprego**: Pode ser explícito (`Empregue`) ou implícito

## Comparação com Outras Linguagens

| Linguagem      | Recurso Equivalente | Sintaxe                                                          |
|----------------|---------------------|------------------------------------------------------------------|
| C#             | Property (get)      | `public int Area { get { return width * height; } }`             |
| Python         | Property            | `@property def area(self): return self.width * self.height`      |
| JavaScript     | Getter              | `get area() { return this.width * this.height; }`                |
| Kotlin         | Computed Property   | `val area: Int get() = width * height`                           |
| Português Puro | Campo Calculado     | `Rotina para que se atribua a área dum retângulo para um número` |

## Resumo

**Campos calculados** são uma feature poderosa que permite:
- Criar "campos virtuais" sem ocupar memória
- Manter lógica de cálculo separada da estrutura
- Acessar valores derivados de forma natural e transparente
- Usar possessivos abrangentes (`duma`, `dum`) na definição
- Usar possessivos adjacentes (`desta`, `deste`) no uso

São especialmente úteis para:
- Valores derivados (área, perímetro, comprimento)
- Formatação (nome completo, endereço formatado)
- Conversões (idade em meses, temperatura em Fahrenheit)
- Cálculos complexos (distância, média, total)

---

# Gerenciamento de Memória

## Visão Geral

Português Puro utiliza **gerenciamento de memória manual** para estruturas complexas (listas, ponteiros, buffers). Strings têm gerenciamento automático pelo compilador.

---

## Comandos Principais

### 1. `Aloque` - Alocação de Memória

**Sintaxe:**

```pop
Aloque memória para <ponteiro>.
Aloque memória para <estrutura>.
```

**Exemplos:**

```pop
Aloque memória para um item.
Aloque memória para uma alternativa.
Aloque memória para o buffer.
Aloque memória para uma pessoa.
Aloque memória para um contato.
Aloque memória para uma segunda lista de nomes.
```

**Com Declaração Inline:**

```pop
Aloque memória para uma pessoa denominada nova.
Aloque memória para um endereço denominado local.
Aloque memória para uma lista denominada novo.
```

---

### 2. `Desaloque` - Liberação de Memória

**Sintaxe:**

```pop
Desaloque memória para <ponteiro>.
```

**Exemplos:**

```pop
Desaloque memória para o item.
Desaloque memória para o buffer.
Desaloque memória para a pessoa.
```

---

### 3. `Reaponte` - Realocação de Memória

**Função:** Equivalente a `realloc` - redimensiona bloco de memória alocado

**Sintaxe:**

```pop
Reaponte <ponteiro> usando <tamanho>.
```

**Exemplos:**

```pop
Reaponte o caractere inicial desta string usando a quantidade de caracteres desta string mais 1.
Reaponte o buffer usando o novo tamanho.
```

---

### 4. `Preserve` - Proteção de Parâmetros

**Função:** Cria uma **cópia** do parâmetro para evitar modificações indesejadas

**Sintaxe:**

```pop
Preserve <variável>.
```

**Exemplos:**

```pop
Preserve a string.
Preserve a contagem.
Preserve a fração.
```

**Acesso ao Original:**

```pop
Preserve a string.
Limpe a string original. \ Acessa a variável original
```

---

## Gerenciamento Automático vs Manual

### Automático (Strings)

- **Strings**: Alocação/desalocação automática pelo compilador
- **Não precisa** de `Aloque`/`Desaloque` para strings

```pop
\ Strings - gerenciamento automático
Atribua "Olá" para a mensagem.
Acrescente " Mundo" para a mensagem.
\ Compilador gerencia memória internamente
```

### Manual (Estruturas, Listas, Ponteiros, Buffers)

- **Estruturas complexas**: Requerem `Aloque`/`Desaloque`
- **Listas**: Cada nó deve ser alocado/desalocado manualmente
- **Ponteiros**: Alocação explícita
- **Buffers**: Alocação explícita para I/O

---

## Padrões de Uso

### Padrão 1: Alocação Simples

```pop
Rotina para que se crie buffer:
  Aloque memória para um buffer.
  Se o buffer for inexistente, retorne.
  \ Usa o buffer...
  Desaloque memória para o buffer.
```

### Padrão 2: Alocação com Verificação

```pop
Aloque memória para um ponteiro.
Se o ponteiro for inexistente,
  Escreva "Erro de alocação!" no console.
  Retorne.
\ Usa o ponteiro...
```

### Padrão 3: Lista com Alocação por Nó

```pop
Rotina para que se adicione item para uma lista usando um valor:
  Aloque memória para uma nova lista.
  Se a nova lista for inexistente, retorne.
  Atribua o valor para o valor desta nova lista.
  Atribua a lista para a posterior desta nova lista.
  Atribua a nova lista para a lista.
```

### Padrão 4: Destruição de Lista Completa

```pop
Rotina para que se destrua todos os itens de uma lista:
  Itere.
    Atribua a lista inicial destas listas para uma lista.
    Se a lista for inexistente, pare.
    Remova a lista desde as listas.
    Destrua a lista.
  Reitere.
```

### Padrão 5: Buffer com Realocação

```pop
Rotina para que se redimensione buffer:
  Reaponte o buffer usando o novo tamanho.
  Se o buffer for inexistente,
    Escreva "Erro de realocação!" no console;
    Retorne.
```

---

## Gerenciamento em Rotinas

### Parâmetros (Passagem por Referência)

Parâmetros são passados **por referência**. Use `Preserve` para criar cópia:

```pop
Rotina para que se inverta uma string:
  Preserve a string. \ Cria cópia
  Limpe a string original. \ Acessa a variável original
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### Variáveis Locais com Alocação

```pop
Rotina para que se processe pessoa:
  Aloque memória para uma pessoa.
  Se a pessoa for inexistente, retorne.
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
  \ Processa...
  Desaloque memória para a pessoa.
```

---

## Estruturas com Ponteiros

### Ponteiro Genérico

```pop
Um tipo é um ponteiro.
Aloque memória para o tipo.
```

### Ponteiro Tipado

```pop
Um caractere inicial é um ponteiro para um byte.
Aloque memória para um caractere inicial.
```

### Estrutura com Ponteiros

```pop
Uma pessoa é uma estrutura com
  Um ponteiro denominado nome e \ ponteiro para string
  Um número denominado idade.

Rotina para que se crie pessoa:
  Aloque memória para uma pessoa.
  Aloque memória para o nome desta pessoa. \ Aloca string
  Atribua "João" para o nome desta pessoa.
  Atribua 30 para a idade desta pessoa.
```

---

## Gerenciamento em Listas

### Cabeçalha (Âncora)

```pop
A agenda telefônica é uns contatos. \ Cabeçalha (plural)
```

### Alocação de Nós

```pop
Rotina para que se adicione contato:
  Aloque memória para um novo contato.
  Se o novo contato for inexistente, retorne.
  Atribua o nome para o nome deste novo contato.
  Atribua o telefone para o telefone deste novo contato.
  Acrescente o novo contato para a agenda telefônica.
```

### Remoção e Desalocação

```pop
Rotina para que se remova contato:
  Remova o contato desde a agenda telefônica.
  Desaloque memória para o contato.
```

### Destruição Completa

```pop
Rotina para que se destrua agenda:
  Itere.
    Atribua a lista inicial desta agenda telefônica para um contato.
    Se o contato for inexistente, pare.
    Remova o contato desde a agenda telefônica.
    Desaloque memória para o contato.
  Reitere.
```

---

## Boas Práticas

1. **Sempre Verifique Alocação**: Teste se ponteiro é `inexistente` após `Aloque`
2. **Desaloque o que Alocou**: Cada `Aloque` deve ter `Desaloque` correspondente
3. **Use `Preserve`** em parâmetros que não devem ser modificados
4. **Ordem LIFO**: Desaloque na ordem inversa da alocação (para estruturas aninhadas)
5. **Limpe Referências**: Após `Desaloque`, evite acessar o ponteiro
6. **Use `Destrua`** para estruturas complexas (libera recursivamente)
7. **Strings**: Não aloque/desaloque manualmente (automático)
8. **Buffers de I/O**: Aloque antes de usar, desaloque após terminar
9. **Realocação**: Use `Reaponte` para redimensionar buffers
10. **Teste Falha de Memória**: Simule `inexistente` para testar tratamento de erro

---

## Erros Comuns

### ❌ Esquecer `Desaloque`

```pop
\ ❌ VAZAMENTO DE MEMÓRIA
Aloque memória para um buffer.
\ Usa buffer...
\ Falta Desaloque memória para o buffer.
```

### ❌ Acessar Após `Desaloque`

```pop
\ ❌ ACESSO INVÁLIDO
Desaloque memória para o ponteiro.
Escreva o valor deste ponteiro para StdOut. \ Erro!
```

### ❌ Não Verificar Falha de Alocação

```pop
\ ❌ PERIGOSO
Aloque memória para um item.
Atribua 10 para o valor deste item. \ Pode falhar se item for inexistente

\ ✅ SEGURO
Aloque memória para um item.
Se o item for inexistente, retorne.
Atribua 10 para o valor deste item.
```

### ❌ `Preserve` Ausente

```pop
\ ❌ MODIFICA PARÂMETRO ORIGINAL
Rotina para que se processe string:
  Limpe a string. \ Modifica o parâmetro original!
  \ ...

\ ✅ PROTEGIDO
Rotina para que se processe string:
  Preserve a string.
  Limpe a string original. \ Modifica a cópia
  \ ...
```

### ❌ Desalocação em Ordem Errada

```pop
\ ❌ ORDEM ERRADA (estrutura aninhada)
Desaloque memória para a pessoa.
Desaloque memória para o nome desta pessoa. \ Acessa memória já liberada!

\ ✅ ORDEM CORRETA (LIFO)
Desaloque memória para o nome desta pessoa.
Desaloque memória para a pessoa.
```

---

## Observações Importantes

1. **Strings**: Gerenciamento automático (não use `Aloque`/`Desaloque`)
2. **Estruturas/Lista/Ponteiros**: Gerenciamento manual obrigatório
3. **Passagem por Referência**: Parâmetros modificam original (use `Preserve`)
4. **`Destrua`**: Libera estrutura e subestruturas recursivamente
5. **`Reaponte`**: Apenas para buffers/ponteiros já alocados
6. **`inexistente`**: Ponteiro nulo após falha de alocação
7. **Escopo**: Variáveis locais persistem após laços/condicionais
8. **Case-Insensitive**: Todos os comandos são case-insensitive

---

## Exemplos Completos

### Buffer de Arquivo

```pop
Rotina para que se leia arquivo completo:
  Abra o arquivo.
  Aloque memória para um buffer.
  Se o buffer for inexistente,
    Feche o arquivo;
    Retorne.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Processe a linha.
  Reitere.
  Desaloque memória para o buffer.
  Feche o arquivo.
```

### Estrutura Aninhada

```pop
Um endereço é uma estrutura com
  Uma string denominada rua,
  Uma string denominada cidade.

Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um endereço denominado endereço.

Rotina para que se crie pessoa completa:
  Aloque memória para uma pessoa.
  Se a pessoa for inexistente, retorne.
  Aloque memória para o endereço desta pessoa.
  Se o endereço desta pessoa for inexistente,
    Desaloque memória para a pessoa;
    Retorne.
  Aloque memória para a rua deste endereço desta pessoa.
  Aloque memória para a cidade deste endereço desta pessoa.
  \ Inicializa...
  
Rotina para que se destrua pessoa completa:
  Desaloque memória para a rua deste endereço desta pessoa.
  Desaloque memória para a cidade deste endereço desta pessoa.
  Desaloque memória para o endereço desta pessoa.
  Desaloque memória para a pessoa.
```

### Lista com Dados Complexos

```pop
Um item de dados é uma lista com
  Um ponteiro denominado dados e
  Um número denominado tamanho.

Rotina para que se adicione dados:
  Aloque memória para um novo item de dados.
  Aloque memória para os dados deste novo item de dados.
  \ Preenche dados...
  Acrescente o novo item de dados para a lista de dados.

Rotina para que se limpe lista de dados:
  Itere.
    Atribua a lista inicial desta lista de dados para um item.
    Se o item for inexistente, pare.
    Desaloque memória para os dados deste item.
    Remova o item desde a lista de dados.
    Desaloque memória para o item.
  Reitere.
```

---

## Estatísticas

- **Comandos de memória**: 5 (`Aloque`, `Desaloque`, `Reaponte`, `Preserve`, `Destrua`)
- **Strings**: Automático
- **Estruturas/Lista/Ponteiros**: Manual
- **Verificação de falha**: `Se <ponteiro> for inexistente`
- **Passagem de parâmetros**: Por referência (use `Preserve` para cópia)
- **Ordem de desalocação**: LIFO (último a entrar, primeiro a sair)

---

# Operadores, Comparadores e Concatenadores - Português Puro

## Visão Geral

A linguagem Português Puro possui 4 categorias principais de operadores:

1. [**Operadores Aritméticos**](#1-operadores-aritméticos): Para cálculos matemáticos
2. [**Operadores de Comparação**](#2-operadores-de-comparação): Para comparações lógicas
3. [**Operadores de Concatenação**](#3-operadores-de-concatenação): Para junção de strings e valores
4. [**Operadores Lógicos**](#4-operadores-lógicos): Para inversão dos operadores de comparação
5. [**Observações Importantes**](#5-observações-importantes): Avaliação, conversão, case-insensitive

## Características Importantes

### Precedência e Associatividade
- **Sem precedência de operadores**: As expressões são avaliadas **da esquerda para a direita**
- **Exemplo**: `2 mais 3 vezes 4` resulta em `20` (não `14`)
  - Cálculo: `(2 + 3) * 4 = 5 * 4 = 20`

### Duas Formas de Operação
1. **Comandos Imperativos**: Modificam variável existente
2. **Expressões**: Calculam novo valor para atribuição

---

# 1. OPERADORES ARITMÉTICOS

## Comandos Imperativos

Modificam o valor de uma variável existente.

### Sintaxe
```
<Comando> <valor> <preposição> <variável>.
```

### Comandos Disponíveis

#### Adição
```pop
Adicione <valor> para <variável>.
Adicione <valor> em <variável>.
```

**Exemplos:**
```pop
Adicione 5 para o total.
Adicione 10 em o contador.
Adicione a idade para o total de anos.
```

#### Subtração
```pop
Subtraia <valor> de <variável>.
Subtraia <valor> desde <variável>.
```

**Exemplos:**
```pop
Subtraia 3 de o total.
Subtraia 10 desde o saldo.
Subtraia o desconto de o preço.
```

#### Multiplicação
```pop
Multiplique <variável> por <valor>.
Multiplique <variável> pelo <valor>.
```

**Exemplos:**
```pop
Multiplique o total por 2.
Multiplique a quantidade pelo preço.
Multiplique o valor por 1+1/5.
Multiplique o valor por 3.2.
```

#### Divisão
```pop
Divida <variável> por <valor>.
Divida <variável> pelo <valor>.
```

**Exemplos:**
```pop
Divida o total por 2.
Divida a soma pelo contador.
Divida o valor por 100.
```

## Operadores em Expressões

Usados para calcular um novo valor a ser atribuído.

### Sintaxe
```
<valor1> <operador> <valor2> [<operador> <valor3>...]
```

### Operadores Disponíveis

| Operador           | Operação      | Exemplo                        |
|--------------------|---------------|--------------------------------|
| `mais`             | Adição        | `10 mais 5` → `15`             |
| `menos`            | Subtração     | `10 menos 5` → `5`             |
| `vezes`            | Multiplicação | `10 vezes 5` → `50`            |
| `multiplicado por` | Multiplicação | `10 multiplicado por 5` → `50` |
| `dividido por`     | Divisão       | `10 dividido por 5` → `2`      |

### Exemplos Completos

```pop
\ Operações simples
Atribua 10 mais 5 para um resultado.           \ resultado = 15
Atribua 20 menos 8 para uma diferença.         \ diferença = 12
Atribua 7 vezes 6 para um produto.             \ produto = 42
Atribua 100 dividido por 4 para um quociente.  \ quociente = 25

\ Operações encadeadas (avaliadas da esquerda para direita)
Atribua 2 mais 3 vezes 4 para um valor.        \ valor = 20 ((2+3)*4)
Atribua 100 menos 20 dividido por 2 para um resultado.  \ resultado = 40 ((100-20)/2)

\ Com variáveis
Atribua a base vezes a altura dividido por 2 para uma área.
Atribua o preço mais o imposto menos o desconto para o total.
```

---

# 2. OPERADORES DE COMPARAÇÃO

Usados em expressões condicionais para comparar valores.

## Sintaxe
```
<valor1> <operador> <valor2>
```

## Operadores Disponíveis

### Igualdade

| Operador | Variações      | Significado | Exemplo                      |
|----------|----------------|-------------|------------------------------|
| `for`    | `for igual a`  | É igual a   | `Se o número for 10`         |
| `for`    | `for igual`    | É igual a   | `Se a letra for igual a "A"` |
| `é`      | `é igual a`    | É igual a   | `Se o valor é 0`             |
| `está`   | `está igual a` | É igual a   | `Se o status está ativo`     |

**Exemplos:**
```pop
Se o contador for 10, pare.
Se a letra for igual a "A", diga sim.
Se o valor for 0, retorne.
Se o nome for igual a "João", continue. \ou
Se o nome for "João", continue.
```

### Desigualdade

| Operador | Verbo | Operador | Significado   | Exemplo                         |
|----------|-------|----------|---------------|---------------------------------|
| `não`    | `for` | `igual`  | Não é igual a | `Se o número não for igual a 8` |
| `não`    | `é`   | `igual`  | Não é igual a | `Se o valor não é igual a 10`   |
| `não`    | `é`   | -        | Não é         | `Se o valor não é 0`            |
| `não`    | `for` | -        | Não é         | `Se o status não for ativo`     |

**Exemplos:**
```pop
Se o contador não for 0, continue.
Se a letra não for "A", retorne.
Se o status não estiver ativo, ative o sinalizador.
```

### Comparação Numérica

| Operador           | Variações   | Significado    | Exemplo                               |
|--------------------|-------------|----------------|---------------------------------------|
| `maior do que`     | `maior que` | Maior que      | `Se o número for maior do que 10`     |
| `menor do que`     | `menor que` | Menor que      | `Se o valor for menor do que 0`       |
| `maior ou igual a` | -           | Maior ou igual | `Se a idade for maior ou igual a 18`  |
| `menor ou igual a` | -           | Menor ou igual | `Se o total for menor ou igual a 100` |
| `excede`           | `exceder`   | Maior que      | `Se o valor excede o limite`          |
| `supera`           | `superar`   | Maior que      | `Se a quantidade supera o máximo`     |

**Exemplos:**
```pop
Se o contador for maior do que 10, pare.
Se a idade for menor que 18, retorne.
Se o total for maior ou igual a 100, diga sim.
Se o saldo for menor ou igual a 0, alerte.
Se o valor excede o limite, ajuste.
Se a temperatura supera 40, desligue.
```

### Comparação de Estado

| Operador            | Variações      | Significado     | Exemplo                       |
|---------------------|----------------|-----------------|-------------------------------|
| `for nulo`          | `for nula`     | É nulo/vazio    | `Se o ponteiro for nulo`      |
| `não for nulo`      | `não for nula` | Não é nulo      | `Se a string não for nula`    |
| `estiver em branco` | -              | String vazia    | `Se o nome estiver em branco` |
| `existe`            | `existir`      | Existe/não-nulo | `Se o arquivo existe`         |
| `não existe`        | `não existir`  | Não existe      | `Se o registro não existe`    |

**Exemplos:**
```pop
Se o ponteiro for nulo, retorne.
Se a string não for nula, processe.
Se o nome estiver em branco, solicite.
Se o arquivo existe, leia.
Se o contato não existe, crie.
```

---

# 3. OPERADORES DE CONCATENAÇÃO

Usados para juntar strings e valores.

## Comandos Imperativos

### Acrescentar (Append)
```pop
Acrescente <valor> para <string>.
Acrescente <valor> em <string>.
```

**Exemplos:**
```pop
Acrescente ", Mundo!" para a saudação.
Acrescente o sobrenome em o nome completo.
Acrescente uma quebra de linha para o texto.
```

### Antepor (Prepend)
```pop
Anteponha <valor> para <string>.
```

**Exemplos:**
```pop
Anteponha "Sr. " para o nome.
Anteponha o prefixo para a mensagem.
```

## Operadores em Expressões

### Sintaxe
```
<valor1> <operador> <valor2> [<operador> <valor3>...]
```

### Operadores Disponíveis

| Operador         | Variações        | Significado | Exemplo                         |
|------------------|------------------|-------------|---------------------------------|
| `junto com`      | `juntamente com` | Concatenar  | `"Olá" junto com " Mundo"`      |
| `seguido de`     | `seguida de`     | Concatenar  | `o nome seguido de " Silva"`    |
| `acompanhado de` | `acompanhada de` | Concatenar  | `a saudação acompanhada de "!"` |

**Exemplos:**
```pop
\ Concatenação simples
Atribua "Olá" junto com ", Mundo!" para uma saudação.
Atribua o nome seguido de " Silva" para o nome completo.
Atribua "Bem-vindo" com "!" para uma mensagem.

\ Concatenação múltipla
Atribua "Sr. " junto com o nome seguido de " " junto com o sobrenome para o nome completo.
Atribua "Total: " com o valor junto com " reais" para a mensagem.

\ Em comandos
Escreva "Olá" junto com ", Mundo!" para StdOut.
Escreva o nome seguido de ": " junto com a mensagem para StdOut.
```

---

# 4. OPERADORES LÓGICOS

Usados para inverter os operadores de comparação.

## Operadores Disponíveis

| Operador | Significado | Exemplo                          | Equivalência                              |
|----------|-------------|----------------------------------|-------------------------------------------|
| `não`    | NÃO         | `Se o valor não for outro valor` | `Se o valor for diferente de outro valor` |

## Operadores sem lógica

| Operador | Significado | Exemplo                                     |
|----------|-------------|---------------------------------------------|
| `e`      | -           | `Se o valor for maior que 0 e menor que 10` |
| `ou`     | -           | `Se a letra for "A" ou for "B"`             |
| `nem`    | -           | `Se nem for "A" nem for "B"`                |

**Exemplos:**
```pop
\ E lógico
Se o contador for maior que 0 e menor que 10, continue.
Se o nome não estiver em branco e a idade for maior que 18, processe.

\ OU lógico
Se a tecla for "S" ou for "s", envie o comando de confirmação.
Se o status for "ativo" ou for "pendente", exiba o status.

\ NEM
Se a letra não for "A" nem for "B", retorne.

\ Combinações
Se o denominador for menor ou igual a 0 e o sinalizador de binário estiver ativo ou o sinalizador de fração estiver inativo, pare.
```
Esses lexemas na verdade não possuem função de operador, mas podem simular operadores lógicos, desde que uma função seja previamente definida com a lógica, parâmetros e o tipo de operador adequados.
Exemplos:
```pop
[Simulador de Operador Lógico `E`]
Função para que se determine se um número é um segundo número e uma string é uma segunda string:
  Se o número não for o segundo número, diga não.
  Se a string não for a segunda string, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um número está entre um segundo número e um terceiro número:
  Se o número for menor do que o segundo número, diga não.
  Se o número for maior do que o terceiro número, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um byte está entre um segundo byte e um terceiro byte:
  Se o byte for menor do que o segundo byte, diga não.
  Se o byte for maior do que o terceiro byte, diga não.
  Diga sim.

[Simulador de Operador Lógico `E`]
Função para que se determine se um byte está entre um número e um segundo número:
  Se o byte for menor do que o número, diga não.
  Se o byte for maior do que o segundo número, diga não.
  Diga sim.

[Simulador de Operador Lógico `OU`]
Função para que se determine se um byte é um segundo byte ou um terceiro byte:
  Se o byte for o segundo byte, diga sim.
  Se o byte for o terceiro byte, diga sim.
  Diga não.

[Simulador de Operador Lógico `OU`]
Função para que se determine se um byte é igual a um número ou para um segundo número;
Função para que se determine se um byte é um número ou um segundo número:
  Se o byte for o número, diga sim.
  Se o byte for o segundo número, diga sim.
  Diga não.

[Exemplo de Operador Lógico simulado sendo empregado]
Função para que se determine se um byte é algum letra:

  [Aqui o operador lógico `E` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte está entre um segundo byte e um terceiro byte:] 
  Se o byte estiver entre o 'A' maiúsculo e o Z maiúsculo, diga sim.
  Se o byte estiver entre o 'a' minúsculo e o z minúsculo, diga sim.

  [Aqui o operador lógico `OU` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte é um segundo byte ou um terceiro byte:]
  Se o byte for 131 ou 138, diga sim.
  Se o byte for 140 ou 142, diga sim.
  Se o byte for 154 ou 156, diga sim.

  [Aqui o operador lógico `E` apenas está na chamada por fazer parte do nome da função definida.]
  [Função para que se determine se um byte está entre um número e um segundo número:] 
  Se o byte estiver entre 158 e 159, diga sim.
  Se o byte estiver entre 192 e 214, diga sim.
  Se o byte estiver entre 216 e 246, diga sim.
  Se o byte estiver entre 248 e 255, diga sim.
  Diga não.

[Exemplo de Operador Lógico `E` simulado com 4 parâmetros]
Função para que se determine se um primeiro número é um segundo número e um terceiro número é um quarto número:
  Se o primeiro número não for o segundo número, diga não.
  Se o terceiro número não for o quarto número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `OU` simulado com 4 parâmetros]
Função para que se determine se um primeiro número é um segundo número ou um terceiro número é um quarto número:
  Se o primeiro número for o segundo número, diga sim.
  Se o terceiro número for o quarto número, diga sim.
  Diga não.

[Exemplo de Operador Lógico `NEM` simulado com 3 parâmetros]
Função para que se determine se um primeiro número nem é um segundo número nem é um terceiro número:
  Se o primeiro número for o segundo número, diga não.
  Se o primeiro número for o terceiro número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `NEM` simulado com 4 parâmetros]
Função para que se determine se nem um primeiro número é um segundo número nem um terceiro número é um quarto número:
  Se o primeiro número for o segundo número, diga não.
  Se o terceiro número for o quarto número, diga não.
  Diga sim.

[Exemplo de Operador Lógico `OU OU` simulado com 4 parâmetros]
Função para que se determine se ou um primeiro número é um segundo número ou um terceiro número é um quarto número:
  Atribua o primeiro número menos o segundo número para um número denominado primeira comparação.
  Atribua o terceiro número menos o quarto número para um número denominado segunda comparação.
  Se a primeira comparação for 0 e a segunda comparação for 0, diga não.
  Diga sim.


```
---

# 5. OBSERVAÇÕES IMPORTANTES

## Avaliação da Esquerda para Direita

A linguagem **não possui precedência de operadores**. Todas as expressões são avaliadas sequencialmente da esquerda para a direita.

**Exemplos:**
```pop
\ 2 + 3 * 4 = (2 + 3) * 4 = 20 (não 14!)
Atribua 2 mais 3 vezes 4 para um resultado.  \ resultado = 20

\ 10 - 5 + 3 = (10 - 5) + 3 = 8
Atribua 10 menos 5 mais 3 para um valor.     \ valor = 8

\ 100 / 2 * 5 = (100 / 2) * 5 = 250
Atribua 100 dividido por 2 vezes 5 para um total.  \ total = 250
```

<!-- ## Conversão Automática de Tipos

A linguagem realiza conversões automáticas quando necessário:

```pop
\ Número para string (em concatenação)
Atribua "Total: " junto com 100 para uma mensagem.  \ "Total: 100"

\ String para número (em operações aritméticas, quando possível)
Atribua "10" mais 5 para um resultado.  \ resultado = 15
``` -->

## Case-Insensitive

Todos os operadores são **case-insensitive** (não diferenciam maiúsculas de minúsculas):

```pop
Adicione 5 para o total.
ADICIONE 5 PARA O TOTAL.
adicione 5 para o total.
\ Todos são equivalentes
```

---

# 7. EXEMPLOS COMPLETOS

## Calculadora Simples

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  
  \ Operações básicas
  Atribua 10 para um número a.
  Atribua 5 para um número b.
  
  \ Adição
  Atribua o número a mais o número b para uma soma.
  Escreva "Soma: " junto com a soma para StdOut.
  
  \ Subtração
  Atribua o número a menos o número b para uma diferença.
  Escreva "Diferença: " junto com a diferença para StdOut.
  
  \ Multiplicação
  Atribua o número a vezes o número b para um produto.
  Escreva "Produto: " junto com o produto para StdOut.
  
  \ Divisão
  Atribua o número a dividido por o número b para um quociente.
  Escreva "Quociente: " junto com o quociente para StdOut.
  
  Feche o programa.
```

## Validação com Comparadores

```pop
Rotina para que se valide uma idade:
  Se a idade for menor que 0,
    Escreva "Idade inválida!" para StdOut;
    Retorne.
  
  Se a idade for maior ou igual a 18,
    Escreva "Maior de idade" para StdOut.
  
  Se a idade for menor que 18 e maior que 0,
    Escreva "Menor de idade" para StdOut.
```

## Concatenação de Strings

```pop
Rotina para que se formate um nome completo:
  Atribua "João" para um nome.
  Atribua "Silva" para um sobrenome.
  
  \ Concatenação simples
  Atribua o nome junto com " " junto com o sobrenome para um nome completo.
  Escreva o nome completo para StdOut.  \ "João Silva"
  
  \ Com prefixo
  Atribua "Sr. " junto com o nome completo para uma saudação formal.
  Escreva a saudação formal para StdOut.  \ "Sr. João Silva"
```

---

## Observações Finais

1. **Naturalidade**: Múltiplas formas para expressar a mesma operação
2. **Flexibilidade**: Comandos imperativos vs expressões
3. **Simplicidade**: Avaliação linear (esquerda→direita)
4. **Clareza**: Operadores em português natural
5. **Consistência**: Case-insensitive em todos os operadores

---


```pop
Função para que se determine se uma string é algum operador aritmético:
  Se a string for "mais", diga sim.
  Se a string for "menos", diga sim.
  Se a string for "vezes", diga sim.
  Se a string for "multiplicado", diga sim.
  Se a string for "dividido", diga sim.
  \Se a string for "depois", diga sim.
  Se a string for "seguido", diga sim.
  Se a string for "juntamente", diga sim.
  Se a string for "junto", diga sim.
  Se a string for "acompanhado", diga sim.
  Diga não.

Função para que se determine se uma string é algum operador de multiplicação:
  Se a string for "vezes", diga sim.
  Se a string for "multiplicado", diga sim.
  Diga não.

Função para que se determine se uma string é o início de alguma expressão matemática:
  Se a string for algum sinal aritmético, diga sim.
  Se a string for algum artigo indefinido, diga sim.
  Se a string for algum artigo definido, diga sim.
  Se a string for algum valor literal, diga sim.
  Diga não.

Função para que se determine se uma string é alguma preposição de atribuição:
  Se a string for "em", diga sim.
  Se a string for "para", diga sim.
  Diga não.
```

---

# Expressões - Português Puro

## Visão Geral

Expressões em Português Puro são **combinações de valores, variáveis e operadores** que produzem um resultado. 
A linguagem usa **palavras em português** para operadores aritméticos e lógicos, mantendo a naturalidade da sintaxe.

---

## Características das Expressões

### Capacidades

✅ **Operadores aritméticos** em português (`mais`, `menos`, `vezes`, `dividido por`)  
✅ **Avaliação esquerda→direita** (sem precedência de operadores)  
✅ **Concatenação** (`junto com`, `seguido de`)  
✅ **Acesso a campos** (possessivos: `deste`, `desta`)  
✅ **Chamadas de função** (em condicionais)  
✅ **Valores literais** (números, strings, frações, hexadecimais)

### Restrições

❌ **Sem precedência de operadores** (avaliação sequencial)  
❌ **Sem parênteses** para agrupar expressões  
❌ **Sem operadores unários** (exceto negação em literais)

---

## Avaliação Esquerda→Direita

**Regra Fundamental:** Expressões são avaliadas **sequencialmente**, da **esquerda para a direita**, **sem precedência** de operadores.

### Exemplo

```pop
\\ Expressão: 2 + 3 * 4
Atribua 2 mais 3 vezes 4 para o resultado.
\\ Resultado: 20 (não 14!)
\\ Avaliação: (2 + 3) * 4 = 5 * 4 = 20
```

**Importante:** Não há precedência como em outras linguagens (`*` antes de `+`)

---

## Operadores Aritméticos

### Adição (`mais`)

```pop
Atribua o X mais o Y para o resultado.
Atribua 10 mais 5 para o total.
Atribua a largura mais a margem para o tamanho.
```

---

### Subtração (`menos`)

```pop
Atribua o X menos o Y para o resultado.
Atribua 10 menos 5 para a diferença.
Atribua a largura menos a margem para o espaço.
```

---

### Multiplicação (`vezes`)

```pop
Atribua o X vezes o Y para o resultado.
Atribua 10 vezes 5 para o produto.
Atribua a largura vezes a altura para a área.
```

---

### Divisão (`dividido por` / `dividido pelo`)

```pop
Atribua o X dividido pelo Y para o resultado.
Atribua 10 dividido por 5 para o quociente.
Atribua a área dividida pela largura para a altura.
```

---

## Operadores de Concatenação

### `junto com`

Concatena valores (strings, números, etc.):

```pop
Atribua "Olá" junto com " " junto com "Mundo" para a mensagem.
\\ Resultado: "Olá Mundo"

Atribua "Erro #" junto com o código junto com "!" para a mensagem.
\\ Resultado: "Erro #404!"
```

---

### `seguido de`

Sinônimo de `junto com`:

```pop
Atribua o nome seguido de " " seguido do sobrenome para o nome completo.
Escreva "Erro #" junto com o número seguido de "." no console.
```

```pop
\\ Múltiplos argumentos em chamadas
Escreva "Linha 1" junto com "Linha 2" junto com  "Linha 3" no console.
Acrescente "texto1" junto com  "texto2" junto com  "texto3" para a string.

\\ Concatenação de múltiplos valores
Atribua "Primeira parte" junto com " segunda parte" junto com" terceira parte" para a mensagem.
```
---

### Operador Variático `e`

O operador `e` é usado para **separar argumentos** na invocação de funções internas/externas com número variável de parâmetros.
Somente pode ser usado na instrução `Processe` conforme demonstrado abaixo:

```
\\ Invocação de função interna/externa com múltiplos parâmetros
Processe o ponteiro com o argumento1 e o argumento2 e o argumento3 [...] retornando um resultado.
Processe "NomeDaBiblioteca" "NomeDaFunção" com o argumento1 e o argumento2 e o argumento3 [...] retornando um resultado.
```

**Importante**: Não é permitido usar `e` logo após um `mais`, `menos`, `vezes` ou `dividido`:

```pop
\\ ❌ ERRADO - Concatenação de operadores não permitida
Atribua o X e mais o Y e menos o Z para o resultado.
Atribua a coordenada X1 e mais a largura e dividido por 2 para o centro.

\\ ✅ CORRETO - Remova o 'e'
Atribua o X mais o Y menos o Z para o resultado.
Atribua a coordenada X1 mais a largura dividido por 2 para o centro.
```

**Nota**: O operador `e` é documentado em detalhes em `Conjunções.md`.

---

## Expressões Complexas

### Múltiplos Operadores

```pop
\\ Avaliação esquerda→direita
Atribua 10 mais 5 menos 3 vezes 2 para o resultado.
\\ Passo 1: 10 + 5 = 15
\\ Passo 2: 15 - 3 = 12
\\ Passo 3: 12 * 2 = 24
\\ Resultado: 24
```

---

### Expressões com Campos

```pop
\\ Acesso a campos de estruturas
Atribua o número X deste par mais o número Y deste par para o total.

\\ Campos calculados
Atribua a largura desta caixa vezes a altura desta caixa para a área.

\\ Expressões aninhadas
Atribua o caractere inicial desta string mais a quantidade menos 1 ao caractere final.
```

---

### Expressões com Frações

```pop
\\ Frações em expressões
Atribua a largura vezes 3/4 para a nova largura.
Adicione 1/2 para a fração.
Multiplique o número por 2/3.
```

---

## Acesso a Membros

### Possessivos Adjacentes

Use `deste`, `desta`, `destes`, `destas` para acessar campos:

```pop
\\ Campo simples
o nome desta pessoa
a idade deste usuário

\\ Campos aninhados
o número X deste par de números
a coordenada Y1 desta caixa desta imagem

\\ Em expressões
Atribua a coordenada X1 desta caixa mais a largura à coordenada X2.
```

---

## Expressões em Atribuições

### Atribuição Simples

```pop
Atribua 10 para o número.
Atribua "texto" para a string.
Atribua sim ao sinalizador.
```

---

### Atribuição com Expressão

```pop
\\ Aritmética
Atribua o número X mais o número Y ao total.
Atribua a largura vezes a altura à área.

\\ Concatenação
Atribua o nome junto com " " junto com o sobrenome ao nome completo.

\\ Campos
Atribua a coordenada Y1 desta caixa mais a altura à coordenada Y2.
```

---

## Expressões em Operações

### Adicione

```pop
Adicione 1 para o contador.
Adicione a margem para a largura.
Adicione o número X mais o número Y para o total.
```

---

### Subtraia

```pop
Subtraia 1 desde o contador.
Subtraia a margem desde a largura.
Subtraia o número X menos o número Y desde o total.
```

---

### Multiplique

```pop
Multiplique o número por 2.
Multiplique a largura pelo fator.
Multiplique o total por 3/4.
```

---

### Divida

```pop
Divida o número por 2.
Divida a largura pela quantidade.
Divida o total pelo contador.
```

---

## Expressões Condicionais

Expressões em condicionais **devem ser funções deliberativas**:

```pop
\\ Comparação
Se o número for maior do que 10, ...
Se X for igual a Y, ...

\\ Estado
Se a string estiver em branco, ...
Se o ponteiro for inexistente, ...

\\ Negação
Se o número não for 0, ...
Se a string não estiver em branco, ...
```

---

## Exemplos Práticos

### Cálculo de Área

```pop
Rotina para que se calcule área:
  Atribua a largura vezes a altura para a área.
  Escreva "Área: " junto com a área no console.
```

---

### Manipulação de Ponteiros

```pop
\\ Aritmética de ponteiros
Atribua o caractere inicial desta string mais a quantidade para o caractere final.
Atribua o caractere inicial mais o offset menos 1 ao caractere inicial dum subtexto.
```

---

### Cálculo com Frações

```pop
Rotina para que se calcule proporção:
  Atribua a largura vezes 3/4 para a nova largura.
  Atribua a altura vezes 3/4 para a nova altura.
```

---

### Concatenação de Strings

```pop
Rotina para que se formate mensagem:
  Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
  Escreva a mensagem no console.
```

---

### Expressão com Múltiplos Campos

```pop
\\ Cálculo de centro
Atribua a coordenada X1 mais a coordenada X2 dividido por 2 ao centro X.
Atribua a coordenada Y1 mais a coordenada Y2 dividido por 2 ao centro Y.
```

---

## Conversão de Tipos

### Conversão Automática: Números para Strings

Em **concatenações**, números são **convertidos automaticamente** para strings:

```pop
Atribua "Total: " junto com o número para a mensagem.
\\ Se número = 42, resultado: "Total: 42"

Atribua "Erro #" junto com o código junto com ": " junto com a descrição para a mensagem.
\\ Conversão automática do código numérico

Escreva "Resultado: " junto com 10 mais 5 no console.
\\ Saída: "Resultado: 15"
```

---

### Conversão Explícita: Strings para Números

**Não há conversão automática** de strings para números. Use `Converta`:

```pop
\\ ❌ ERRADO - Erro de compilação
Atribua "123" para o número.
Atribua a string mais 10 para o resultado.

\\ ✅ CORRETO - Conversão explícita
Converta "123" para o número.
Converta a entrada para um valor.
Atribua o valor mais 10 para o resultado.
```

---

### Outros Tipos de Conversão

```pop
\\ Fração para número
Converta 3/4 para uma fração decimal.

\\ Hexadecimal para número
Converta $FF para um byte.

\\ Número para hexadecimal
Converta o byte para uma string hexadecimal.
```

---

## Observações Importantes

1. **Avaliação Sequencial**: Esquerda→direita, **sem precedência** de operadores
2. **Sem Parênteses**: Não há como agrupar sub-expressões
3. **Operadores em Português**: `mais`, `menos`, `vezes`, `dividido`
4. **Concatenação**: `junto com` e `seguido de` são sinônimos
5. **Operador de Continuidade**: `e` permite expressões em múltiplas linhas
6. **Conversão Automática**: Apenas em concatenações (número→string)
7. **Conversão Explícita**: Use `Converta` para string→número
8. **Acesso a Campos**: Use possessivos (`deste`, `desta`)
9. **Frações**: Podem ser usadas diretamente em expressões (`3/4`)
10. **Hexadecimais**: Podem ser usados como valores (`$FF`)
11. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
12. **Espaços**: Operadores são palavras separadas por espaços
13. **Divisão por Zero**: Não há verificação automática, programe defensivamente
14. **Overflow**: Cuidado com valores que excedem limites de tipo

---

## Boas Práticas

1. **Clareza**: Quebre expressões complexas em múltiplas linhas
2. **Ordem**: Lembre-se da avaliação esquerda→direita
3. **Conversões**: Use `Converta` explicitamente quando necessário
4. **Nomes Descritivos**: Use variáveis intermediárias para clareza
5. **Comentários**: Documente cálculos complexos
6. **Frações**: Use para valores exatos (evite aproximações)
7. **Validação**: Verifique divisão por zero
8. **Overflow**: Cuidado com valores muito grandes
9. **Concatenação**: Prefira `junto com` para legibilidade
10. **Campos**: Use possessivos corretos (adjacentes vs abrangentes)

---

## Erros Comuns

### ❌ Assumir Precedência

```pop
\\ CUIDADO: Não funciona como em outras linguagens
Atribua 2 mais 3 vezes 4 para o resultado.
\\ Resultado: 20 (não 14!)
\\ Avaliação: (2 + 3) * 4 = 20
```

**Solução:** Use variáveis intermediárias:

```pop
Atribua 3 vezes 4 para um produto.
Atribua 2 mais o produto para o resultado.
\\ Resultado: 14
```

---

### ❌ Tentar Usar Parênteses

```pop
\\ ❌ ERRADO - Parênteses não são suportados
Atribua (2 mais 3) vezes 4 para o resultado.
```

---

### ❌ Conversão Implícita

```pop
\\ ❌ ERRADO
Atribua "123" para o número.

\\ ✅ CORRETO
Converta "123" para o número.
```

---

## Tabela de Operadores

| Operador       | Tipo         | Exemplo              | Resultado |
|----------------|--------------|----------------------|-----------|
| `mais`         | Aritmético   | `10 mais 5`          | `15`      |
| `menos`        | Aritmético   | `10 menos 5`         | `5`       |
| `vezes`        | Aritmético   | `10 vezes 5`         | `50`      |
| `dividido por` | Aritmético   | `10 dividido por 5`  | `2`       |
| `junto com`    | Concatenação | `"A" junto com "B"`  | `"AB"`    |
| `seguido de`   | Concatenação | `"A" seguido de "B"` | `"AB"`    |

---

## Comparação com Outras Linguagens

| Português Puro     | C/Java/JavaScript | Python        |
|--------------------|-------------------|---------------|
| `X mais Y`         | `X + Y`           | `X + Y`       |
| `X menos Y`        | `X - Y`           | `X - Y`       |
| `X vezes Y`        | `X * Y`           | `X * Y`       |
| `X dividido por Y` | `X / Y`           | `X / Y`       |
| `X junto com Y`    | `X + Y` (strings) | `X + Y`       |
| (esquerda→direita) | (precedência)     | (precedência) |
| (sem parênteses)   | `(X + Y) * Z`     | `(X + Y) * Z` |

---

## Estatísticas

- **Operadores aritméticos**: 4 (`mais`, `menos`, `vezes`, `dividido`)
- **Operadores de concatenação**: 2 (`junto com`, `seguido de`)
- **Avaliação**: Esquerda→direita (sem precedência)
- **Parênteses**: Não suportados
- **Conversão automática**: Apenas número→string em concatenações
- **Acesso a campos**: Via possessivos
- **Tipos suportados**: Números, strings, frações, hexadecimais, booleanos

---

# Instruções - Português Puro

## Visão Geral

Instruções são **comandos** que executam ações específicas em Português Puro. Elas formam o corpo de rotinas e funções, manipulando dados, controlando fluxo e interagindo com o sistema.

---

## Categorias de Instruções

### 1. Atribuição e Manipulação
- `Atribua` - Atribuição de valores
- `Adicione` / `Subtraia` / `Multiplique` / `Divida` - Operações aritméticas
- `Acrescente` - Concatenação/adição ao final
- `Remova` - Remoção de elementos

### 2. Conversão de Tipos
- `Converta` - Conversão explícita de tipos
- `tal como` / `tal qual` - Conversão forçada (cast)

### 3. Controle de Fluxo
- `Se` - Condicional
- `Itere` / `Reitere` / `Pare` - Laços
- `Retorne` - Saída de rotina

### 4. Entrada/Saída
- `Escreva` - Saída para console/arquivo
- `Leia` - Entrada de dados

### 5. Memória
- `Aloque` / `Desaloque` - Gerenciamento de memória
- `Preserve` - Cópia de parâmetros
- `Reaponte` - Realocação de memória

### 6. Chamadas
- `Processe` - Chamada externa (API)
- `Decodifique` - Instruções de máquina

---

## 1. Atribuição (`Atribua`)

### Sintaxe

```pop
Atribua <valor> para <variável>.
Atribua <valor> ao <campo>.
Atribua <valor> à <variável>.
```

### Preposições Aceitas

- `para` / `ao` / `à` - Destino da atribuição

### Exemplos

```pop
\\ Atribuição simples
Atribua 10 para o contador.
Atribua "João" ao nome.
Atribua sim à flag.

\\ Atribuição com expressão
Atribua o número X mais o número Y ao total.
Atribua a largura vezes a altura à área.

\\ Atribuição de campos
Atribua "Vermelho" à cor desta caixa.
Atribua 100 ao número X deste par de números.

\\ Atribuição com declaração
Atribua 0 para um contador. \\ Declara e atribui
Atribua "" para uma string denominada resultado.
```

---

## 2. Operações Aritméticas

### `Adicione`

**Sintaxe:**

```pop
Adicione <valor> para <variável>.
Adicione <valor> ao <campo>.
```

**Exemplos:**

```pop
Adicione 1 para o contador.
Adicione a largura para a coordenada X.
Adicione 10 ao total.
```

---

### `Subtraia`

**Sintaxe:**

```pop
Subtraia <valor> desde a <variável>.
Subtraia <valor> de a <variável>.
```

**Exemplos:**

```pop
Subtraia 1 desde a variável contador.
Subtraia a margem desde a largura.
Subtraia 10 do total.
```

---

### `Multiplique`

**Sintaxe:**

```pop
Multiplique <variável> por <valor>.
Multiplique <variável> pelo <valor>.
```

**Exemplos:**

```pop
Multiplique o número por 2.
Multiplique a largura pelo fator.
Multiplique o total por -1.
```

---

### `Divida`

**Sintaxe:**

```pop
Divida <variável> por <valor>.
Divida <variável> pelo <valor>.
```

**Exemplos:**

```pop
Divida o número por 2.
Divida a largura pela quantidade.
Divida o total pelo contador.
```

---

## 3. Concatenação e Adição

### `Acrescente`

**Função:** Adiciona ao **final** de uma string ou lista

**Sintaxe:**

```pop
Acrescente <valor> para <string>.
Acrescente <elemento> para <lista>.
```

**Exemplos:**

```pop
\\ Strings
Acrescente "!" para a mensagem.
Acrescente o nome para o resultado.
Acrescente o caractere de espaço para a linha.

\\ Listas
Acrescente o item para a lista.
Acrescente o vértice para os vértices deste polígono.
```

---

## 4. Remoção

### `Remova`

**Sintaxe:**

```pop
Remova <elemento> desde a <lista>.
Remova <elemento> da <lista>.
Remova os caracteres finais desde a <string> usando <quantidade>.
```

**Exemplos:**

```pop
\\ Listas
Remova o item desde a lista.
Remova a lista desde as listas.

\\ Strings
Remova os caracteres finais desde o resultado usando 1.
Remova o último caractere desde a string.
```

---

## 5. Conversão de Tipos (`Converta`)

### Sintaxe Básica

```pop
Converta <origem> para <destino>.
```

### Conversões Comuns

```pop
\\ Para String
Converta o número para uma string.
Converta a fração para uma string denominada texto.
Converta o sinalizador para uma segunda string.
Converta o ponteiro para uma string.

\\ Para Número
Converta a string para um número.
Converta a string para o número.

\\ Para Fração
Converta a fração para um numeral misto.
Converta o número para uma fração.

\\ Conversões Especiais
Converta o byte para uma cifra hexadecimal.
Converta a cor para um código da cor.
Converta a URL para uma URL simplificada.
```

---

## 6. Conversão Forçada (`tal como` / `tal qual`)

### Função

Força o compilador a **tratar** um tipo como outro tipo (cast)

### Sintaxe

```pop
<operação> <valor> tal como <tipo>
<operação> <valor> tal qual <tipo>
```

### Exemplos

```pop
\\ Cast em atribuição
Atribua o byte à cifra binária tal como um byte.

\\ Cast em conversão
Converta a string tal qual uma cifra hexadecimal para um texto hexadecimal.
Converta o ponteiro para uma string tal qual uma cifra hexadecimal.

\\ Cast em operações
Disjuncione logicamente o ponteiro tal como um número com o número.

\\ Cast em chamadas
Destrinche a variável global tal como uma variável.
Redimensione a caixa arredondada tal como uma caixa usando a fração.
```

**Nota:** `tal como` e `tal qual` são sinônimos

---

## 7. Entrada/Saída

### `Escreva`

**Sintaxe:**

```pop
Escreva <valor> para <destino>.
Escreva <valor> no <destino>.
Escreva <valor> junto com <outro valor> para <destino>.
```

**Destinos Comuns:**

- `StdOut` / `console` - Saída padrão
- `StdErr` - Saída de erro
- `arquivo` - Arquivo aberto

**Exemplos:**

```pop
\\ Console
Escreva "Olá, Mundo!" no console.
Escreva o contador para StdOut.
Escreva "Total: " junto com o total no console.
Escreva "Erro!" junto com o texto CRLF para StdOut.

\\ Arquivo
Escreva a linha para o arquivo.
```

---

### `Leia`

**Sintaxe:**

```pop
Leia <variável> desde <origem>.
Leia uma linha desde <origem>.
```

**Origens Comuns:**

- `console` / `StdIn` - Entrada padrão
- `arquivo` - Arquivo aberto

**Exemplos:**

```pop
\\ Console
Leia uma linha desde o console.
Leia um número desde StdIn.
Leia uma senha desde o console.

\\ Arquivo
Leia uma linha desde o arquivo.
```

---

## 8. Gerenciamento de Memória

### `Aloque`

**Sintaxe:**

```pop
Aloque memória para <ponteiro>.
Aloque memória para <estrutura>.
```

**Exemplos:**

```pop
Aloque memória para um item.
Aloque memória para uma alternativa.
Aloque memória para o buffer.
```

---

### `Desaloque`

**Sintaxe:**

```pop
Desaloque memória para <ponteiro>.
```

**Exemplos:**

```pop
Desaloque memória para o item.
Desaloque memória para o buffer.
```

---

### `Reaponte`

**Função:** Realoca memória (equivalente a `realloc`)

**Sintaxe:**

```pop
Reaponte <ponteiro> usando <tamanho>.
```

**Exemplos:**

```pop
Reaponte o caractere inicial desta string usando a quantidade de caracteres desta string mais 1.
Reaponte o buffer usando o novo tamanho.
```

---

### `Preserve`

**Função:** Cria uma **cópia** do parâmetro

**Sintaxe:**

```pop
Preserve <variável>.
```

**Exemplos:**

```pop
Preserve a string.
Preserve a contagem.
Preserve a fração.
```

**Acesso ao Original:**

```pop
Preserve a string.
Limpe a string original. \\ Acessa a variável original
```

---

## 9. Chamadas Externas (`Processe`)

### Sintaxe

```pop
Processe "<dll>" "<função>" com
  <parâmetro1> e
  <parâmetro2> e
  <parâmetro3>
Retornando <variável>.
```

### Exemplos

```pop
\\ Chamada simples
Processe "kernel32.dll" "GetLastError" retornando o status de erro.

\\ Chamada com parâmetros
Processe "kernel32.dll" "HeapAlloc" com
  O endereço heap e
  8 e \\ HEAP_ZERO_MEMORY
  A quantidade de bytes
Retornando o ponteiro.

\\ Chamada complexa
Processe "gdi32.dll" "SetTextCharacterExtra" com
  A área de impressão [hDC]
  e 0 [extra]
  Retornando um número denominado status de erro.
```

---

## 10. Instruções de Máquina (`Decodifique`)

### Sintaxe

```pop
Decodifique $<hexadecimal>.
```

### Exemplos

```pop
\\ Assembly inline
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \\ mov eax,[ebp+8]
  Decodifique $C70000000000. \\ mov [eax],0
```

---

## 11. Outras Instruções Comuns

### `Limpe`

**Função:** Esvazia uma string ou estrutura

**Sintaxe:**

```pop
Limpe <variável>.
```

**Exemplos:**

```pop
Limpe a string.
Limpe o buffer.
```

---

### `Lance`

**Função:** Cria um **subtexto** (substring) sobre uma string

**Sintaxe:**

```pop
Lance um subtexto sobre <string>.
```

**Exemplos:**

```pop
Lance um subtexto sobre a string.
Lance um percorredor sobre a string.
```

---

### `Obtenha`

**Função:** Obtém um valor ou executa uma operação

**Sintaxe:**

```pop
Obtenha <resultado> usando <parâmetros>.
Obtenha <resultado> desde <origem>.
```

**Exemplos:**

```pop
Obtenha um máximo divisor comum usando o numerador e o denominador.
Obtenha uma largura usando a string e o contexto de dispositivo.
Obtenha o item (novamente).
```

---

### `Crie`

**Função:** Cria uma estrutura ou objeto

**Sintaxe:**

```pop
Crie <objeto>.
Crie <objeto> usando <parâmetros>.
```

**Exemplos:**

```pop
Crie a figura geométrica.
Crie um vértice usando a localização.
Crie um conjunto de texto usando a string.
```

---

### `Destrua`

**Função:** Destrói uma estrutura e libera memória

**Sintaxe:**

```pop
Destrua <objeto>.
```

**Exemplos:**

```pop
Destrua a lista.
Destrua o item.
Destrua o quora descartável.
```

---

### `Esvazie`

**Função:** Zera um ponteiro ou variável

**Sintaxe:**

```pop
Esvazie <variável>.
```

**Exemplos:**

```pop
Esvazie o ponteiro.
Esvazie o buffer.
```

---

## Separadores de Instruções

### Ponto e Vírgula (`;`)

**Função:** Separa instruções **dentro do bloco condicional**

**Uso:**

```pop
Se condição,
  Instrução 1;
  Instrução 2;
  Instrução 3.
```

**Importante:** A **última instrução** termina com **ponto** (`.`)

---

### Ponto (`.`)

**Função:** Termina uma instrução ou bloco

**Uso:**

```pop
\\ Instrução simples
Atribua 10 para o contador.

\\ Última instrução do bloco
Se condição,
  Instrução 1;
  Instrução 2.
```

---

## Observações Importantes

1. **Separadores**: Use `;` entre instruções e `.` na última
2. **Preposições**: Várias preposições são sinônimas (`para`/`ao`/`à`)
3. **Contrações**: Suportadas (`à` = `para a`, `ao` = `para o`)
4. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
5. **Ordem Natural**: Instruções seguem ordem natural do português
6. **Declaração Inline**: Pode declarar variáveis em instruções
7. **Expressões**: Instruções podem conter expressões complexas
8. **Comentários**: Use `\\` para comentários de linha
9. **Indentação**: Recomendada para legibilidade (não obrigatória)
10. **Verbos Sinônimos**: Muitas instruções têm verbos alternativos

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes claros para variáveis
2. **Uma Instrução por Linha**: Facilita leitura
3. **Indentação Consistente**: Use 2 espaços
4. **Comentários**: Documente lógica complexa
5. **Validação**: Verifique valores antes de usar
6. **Gerenciamento de Memória**: Sempre desaloque o que alocou
7. **Conversões Explícitas**: Prefira `Converta` a `tal como`
8. **Separadores Corretos**: Use `;` e `.` adequadamente
9. **Preserve Quando Necessário**: Proteja parâmetros
10. **Teste Chamadas Externas**: Verifique retornos de APIs

---

## Exemplos Completos

### Manipulação de Strings

```pop
Rotina para que se processe texto:
  Atribua "" para um resultado.
  Lance um subtexto sobre o texto.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com o resultado no console.
```

### Cálculos Matemáticos

```pop
Rotina para que se calcule área:
  Atribua a largura vezes a altura para uma área.
  Converta a área para uma string denominada texto.
  Escreva "Área: " junto com o texto no console.
```

### Gerenciamento de Memória

```pop
Rotina para que se crie buffer:
  Aloque memória para um buffer.
  Se o buffer for inexistente, retorne.
  \\ Usa o buffer...
  Desaloque memória para o buffer.
```

### Chamada Externa

```pop
Rotina para que se obtenha erro:
  Processe "kernel32.dll" "GetLastError" retornando o código de erro.
  Se o código de erro não for 0,
    Converta o código de erro para uma mensagem;
    Escreva "Erro: " junto com a mensagem para StdErr.
```

---

## Estatísticas

- **Categorias de instruções**: 6 principais
- **Instruções básicas**: ~15
- **Separadores**: 2 (`;` e `.`)
- **Preposições comuns**: ~10
- **Conversões suportadas**: Ilimitadas
- **Chamadas externas**: Suportadas (DLLs)
- **Assembly**: Suportado (`Decodifique`)

---

# Condicionais - Português Puro

## Visão Geral

Condicionais em Português Puro permitem **execução condicional** de código baseada em expressões booleanas. A palavra-chave `Se` inicia uma estrutura condicional que avalia uma **função deliberativa** e executa um bloco de instruções se o resultado for `sim` (verdadeiro).

---

## Características dos Condicionais

### Capacidades

✅ **Avaliação de funções** (retorno booleano)  
✅ **Bloco de instruções** após a vírgula  
✅ **Múltiplas instruções** no bloco  
✅ **Declaração de variáveis** na expressão condicional  
✅ **Instruções inline** (uma linha)

### Restrições

❌ **Não permite aninhamento** (condicionais dentro de condicionais)  
❌ **Não há `else`** ou `else if`  
❌ **Apenas funções** na expressão condicional (não expressões arbitrárias)  
❌ **Uma vírgula** separa expressão do bloco

---

## Sintaxe

### Estrutura Básica

```pop
Se <expressão condicional>,
  <instrução 1>;
  <instrução 2>;
  <instrução N>.
```

### Componentes

1. **Palavra-chave**: `Se`
2. **Expressão condicional**: Chamada de função deliberativa
3. **Vírgula**: Separa expressão do bloco
4. **Bloco de instruções**: Uma ou mais instruções
5. **Separadores**: `;` entre instruções, `.` na última

---

## Expressão Condicional

### O que Pode Ser Usado

A expressão condicional **deve ser uma função deliberativa** que retorna `sim` ou `não`:

```pop
Se <variável> <verbo> <valor>, ...
```

### Verbos Comuns

| Verbo                         | Significado       | Exemplo                              |
|-------------------------------|-------------------|--------------------------------------|
| `for`                         | Igualdade         | `Se o número for 10`                 |
| `estiver`                     | Estado            | `Se a string estiver em branco`      |
| `for maior do que`            | Comparação        | `Se X for maior do que Y`            |
| `for menor do que`            | Comparação        | `Se X for menor do que Y`            |
| `for maior do que ou igual a` | Comparação        | `Se X for maior do que ou igual a Y` |
| `for menor do que ou igual a` | Comparação        | `Se X for menor do que ou igual a Y` |
| `não for`                     | Negação           | `Se o número não for 0`              |
| `não estiver`                 | Negação de estado | `Se a string não estiver em branco`  |

---

## Bloco de Instruções

### Separadores

- **Ponto e vírgula** (`;`): Separa instruções **dentro do bloco**
- **Ponto** (`.`): Termina a **última instrução** do bloco

### Estrutura

```pop
Se condição,
  Instrução 1;  \\ Separador ;
  Instrução 2;  \\ Separador ;
  Instrução 3.  \\ Termina com .
```

---

## Exemplos Básicos

### 1. Condicional Simples (Uma Instrução)

```pop
Se o número for 0, retorne.
```

---

### 2. Condicional com Múltiplas Instruções

```pop
Se o número for maior do que 10,
  Escreva "Número grande!" no console;
  Atribua 0 ao número;
  Retorne.
```

---

### 3. Condicional com Negação

```pop
Se a string não estiver em branco,
  Processe a string;
  Limpe a string.
```

---

### 4. Condicional com Comparação

```pop
Se o contador for maior do que ou igual a 10,
  Escreva "Limite atingido!" no console;
  Pare.
```

---

### 5. Condicional com Estado

```pop
Se o arquivo estiver aberto,
  Feche o arquivo;
  Limpe o buffer.
```

---

## Declaração de Variáveis na Expressão

É possível **declarar variáveis locais** diretamente na expressão condicional:

```pop
Se um número for maior que 10, pare.
\\ 'número' é declarado aqui
Adicione 1 ao número.
```

**Importante:** A variável declarada **persiste** no escopo da rotina após o condicional.

---

## Condicionais em Laços

Condicionais são frequentemente usados dentro de laços:

```pop
Itere.
  Se o contador for maior do que 10, pare.
  Adicione 1 para o contador.
Reitere.
```

---

## Aninhamento NÃO É Permitido

### ❌ ERRADO - Condicionais Aninhados

```pop
\\ ISTO NÃO É PERMITIDO
Se condição1,
  Se condição2,  \\ ❌ Aninhamento
    Faça algo.
```

### ✅ CORRETO - Use Múltiplas Condições

```pop
\\ Opção 1: Múltiplos Se sequenciais
Se condição1, atribua sim ao flag1.
Se condição2, atribua sim ao flag2.
Se o flag1 e o flag2 estiverem ativos, faça algo.

\\ Opção 2: Função composta
Se condição1 e condição2, faça algo.
```

### ✅ CORRETO - Use Rotinas Auxiliares

```pop
Se condição1, processe caso especial.

Rotina para que se processe caso especial:
  Se condição2, faça algo.
```

---

## Exemplos Avançados

### 6. Condicional com Chamada de Rotina

```pop
Se o arquivo não existe,
  Escreva "Arquivo não encontrado!" no console;
  Crie o arquivo;
  Retorne.
```

---

### 7. Condicional com Múltiplas Ações

```pop
Se o tipo da aplicação for "console",
  Prepare o console;
  Obtenha o número identificador do fluxo de entrada padrão;
  Defina o CodePage do console.
```

---

### 8. Condicional com Validação

```pop
Se o denominador desta fração for 0, retorne.
```

---

### 9. Condicional com Comparação de Strings

```pop
Se o nome for "João",
  Escreva "Olá, João!" no console;
  Atribua sim ao encontrado.
```

---

### 10. Condicional com Verificação de Ponteiro

```pop
Se o ponteiro for inexistente,
  Escreva "Erro: ponteiro nulo!" no console;
  Retorne.
```

---

## Padrões Comuns

### Padrão 1: Validação e Retorno

```pop
Se <condição de erro>, retorne.
\\ Continua processamento...
```

---

### Padrão 2: Validação com Mensagem

```pop
Se <condição de erro>,
  Escreva <mensagem de erro> no console;
  Retorne.
```

---

### Padrão 3: Processamento Condicional

```pop
Se <condição>,
  Processe <algo>;
  Atualize <estado>.
```

---

### Padrão 4: Flag Setting

```pop
Se <condição>, atribua sim ao flag.
```

---

### Padrão 5: Saída de Laço

```pop
Itere.
  Se <condição de saída>, pare.
  \\ Processa...
Reitere.
```

---

## Verbos e Funções Deliberativas

### Funções Comuns

```pop
\\ Igualdade
Se X for Y, ...
Se X for igual a Y, ...

\\ Comparação numérica
Se X for maior do que Y, ...
Se X for menor do que Y, ...
Se X for maior do que ou igual a Y, ...
Se X for menor do que ou igual a Y, ...

\\ Estado
Se X estiver em branco, ...
Se X estiver ativo, ...
Se X estiver aberto, ...

\\ Existência
Se X for inexistente, ...
Se X não for inexistente, ...

\\ Negação
Se X não for Y, ...
Se X não estiver em branco, ...
```

---

## Observações Importantes

1. **Apenas Funções**: A expressão condicional deve ser uma função deliberativa
2. **Sem Aninhamento**: Condicionais aninhados não são permitidos
3. **Separadores Obrigatórios**: Use `;` e `.` corretamente
4. **Vírgula Única**: Apenas uma vírgula separa expressão do bloco
5. **Declaração Inline**: Variáveis podem ser declaradas na expressão
6. **Escopo Persistente**: Variáveis declaradas persistem após o condicional
7. **Sem `else`**: Não há cláusula `else` ou `else if`
8. **Instruções Múltiplas**: Bloco pode conter várias instruções
9. **Verbos Sinônimos**: Vários verbos expressam a mesma condição
10. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas

---

## Boas Práticas

1. **Validação Primeiro**: Coloque validações no início da rotina
2. **Retorno Antecipado**: Use `retorne` para sair cedo em caso de erro
3. **Mensagens Claras**: Escreva mensagens de erro descritivas
4. **Uma Responsabilidade**: Cada condicional deve verificar uma coisa
5. **Evite Complexidade**: Use rotinas auxiliares em vez de aninhar
6. **Nomes Descritivos**: Use nomes claros para variáveis e funções
7. **Comentários**: Documente condições complexas
8. **Separadores Corretos**: Sempre use `;` e `.` adequadamente
9. **Indentação**: Indente o bloco para legibilidade
10. **Teste Condições de Borda**: Verifique valores extremos

---

## Erros Comuns

### ❌ Esquecer Separadores

```pop
Se condição,
  Instrução 1  \\ ❌ Falta ;
  Instrução 2.
```

### ❌ Vírgula Errada

```pop
Se condição  \\ ❌ Falta vírgula
  Instrução.
```

### ❌ Tentar Aninhar

```pop
Se condição1,
  Se condição2,  \\ ❌ Não permitido
    Instrução.
```

### ❌ Expressão Não-Booleana

```pop
Se o número,  \\ ❌ Não é uma função deliberativa
  Instrução.
```

### ✅ Soluções Corretas

```pop
\\ ✅ Separadores corretos
Se condição,
  Instrução 1;
  Instrução 2.

\\ ✅ Vírgula presente
Se condição,
  Instrução.

\\ ✅ Sem aninhamento
Se condição1, processe caso1.
Se condição2, processe caso2.

\\ ✅ Função deliberativa
Se o número for maior do que 0,
  Instrução.
```

---

## Exemplos de Uso Prático

### Validação de Entrada

```pop
Rotina para que se processe entrada:
  Se a entrada estiver em branco,
    Escreva "Erro: entrada vazia!" no console;
    Retorne.
  Se o comprimento desta entrada for maior do que 100,
    Escreva "Erro: entrada muito longa!" no console;
    Retorne.
  \\ Processa entrada válida...
```

### Controle de Fluxo em Laço

```pop
Rotina para que se processe lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, pare.
    Se o nome desta lista estiver em branco, reitere.
    Processe a lista.
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Verificação de Estado

```pop
Rotina para que se feche arquivo:
  Se o arquivo não estiver aberto, retorne.
  Escreva os dados pendentes para o arquivo.
  Feche o arquivo.
  Limpe o buffer.
```

### Processamento Condicional

```pop
Rotina para que se processe número:
  Se o número for 0,
    Escreva "Zero" no console;
    Retorne.
  Se o número for menor do que 0,
    Escreva "Negativo" no console;
    Inverta o número.
  Processe o número positivo.
```

---

## Comparação com Outras Linguagens

| Português Puro    | C/Java/JavaScript       | Python              |
|-------------------|-------------------------|---------------------|
| `Se X for Y,`     | `if (X == Y) {`         | `if X == Y:`        |
| `Instrução;`      | `statement;`            | `statement`         |
| `Última.`         | `last; }`               | `last` (desindenta) |
| (sem aninhamento) | `if (...) { if (...) }` | `if ...: if ...:`   |
| (sem else)        | `else { }`              | `else:`             |

---

## Estatísticas

- **Palavra-chave**: 1 (`Se`)
- **Separadores**: 2 (`,` vírgula, `;` ponto e vírgula, `.` ponto)
- **Aninhamento**: Não suportado
- **Cláusula else**: Não suportada
- **Declaração inline**: Suportada
- **Múltiplas instruções**: Suportadas
- **Verbos condicionais**: ~20+

---

# Laços - Português Puro

## Visão Geral

Português Puro possui **um único tipo de laço** de repetição, que funciona de forma similar a um **`while(true)`** em outras linguagens. O laço é controlado por três palavras-chave principais: `Itere`, `Reitere` e `Pare`.

---

## Características dos Laços

### Capacidades

✅ **Laço infinito por padrão** (`while(true)`)  
✅ **Controle explícito de fluxo** (`Pare`, `Retorne`)  
✅ **Pode conter condicionais** (`Se`)  
✅ **Pode chamar rotinas e funções**  
✅ **Pode declarar variáveis locais**  
✅ **Variáveis persistem após o laço** (escopo da rotina)  
✅ **`Itere` pode ser omitido** no início da rotina

### Restrições

❌ **Não permite aninhamento** (laços dentro de laços)  
❌ **Apenas um tipo de laço** (não há `for`, `while`, `do-while`)  
❌ **Não há iteradores automáticos** (use contadores manuais)

---

## Palavras-Chave

### 1. `Itere` - Início do Laço

**Função:** Marca o **início** do bloco de repetição

**Sintaxe:**

```pop
Itere.
  \\ Código do laço...
Reitere.
```

**Omissão:** Quando o laço começa na **primeira linha** da rotina, `Itere` pode ser omitido:

```pop
Rotina para que se processe eventos:
  \\ Itere está implícito aqui
  Desenfileire um evento.
  Se o evento for inexistente, pare.
  Processe o evento.
Reitere.
```

---

### 2. `Reitere` - Volta ao Início

**Função:** Retorna o fluxo de execução para o **início do laço**

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, reitere. \\ Volta ao início
  \\ Mais código...
Reitere. \\ Fim do laço
```

**Equivalente a:** `continue` em outras linguagens

---

### 3. `Pare` - Sai do Laço

**Função:** **Interrompe** o laço e salta para a linha após `Reitere`

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, pare. \\ Sai do laço
  \\ Mais código...
Reitere.
\\ Execução continua aqui após Pare
```

**Equivalente a:** `break` em outras linguagens

---

### 4. `Retorne` - Sai da Rotina

**Função:** **Abandona** a rotina atual (e consequentemente o laço)

**Sintaxe:**

```pop
Itere.
  \\ Código...
  Se alguma condição, retorne. \\ Sai da rotina inteira
  \\ Mais código...
Reitere.
```

**Equivalente a:** `return` em outras linguagens

---

## Sintaxe Completa

### Estrutura Básica

```pop
Itere.
  <instruções>
Reitere.
```

### Estrutura com Omissão de `Itere`

```pop
Rotina para que se faça algo:
  <instruções> \\ Itere implícito
Reitere.
```

---

## Exemplos Básicos

### 1. Laço Simples com Contador

```pop
Rotina para que se conte até dez:
  Atribua 0 para um contador.
  Itere.
    Adicione 1 para o contador.
    Escreva o contador no console.
    Se o contador for maior do que ou igual a 10, pare.
  Reitere.
```

**Saída:**

```pwsh
1
2
3
...
10
```

---

### 2. Laço com `Itere` Omitido

```pop
Rotina para que se processe eventos:
  \\ Itere está implícito
  Desenfileire um evento.
  Se o evento for inexistente, pare.
  Processe o evento.
Reitere.
```

---

### 3. Laço com `Reitere` (Continue)

```pop
Rotina para que se processe números pares:
  Atribua 0 para um contador.
  Itere.
    Adicione 1 para o contador.
    Se o contador for maior do que 10, pare.
    Se o contador for ímpar, reitere. \\ Pula números ímpares
    Escreva o contador no console. \\ Só executa para pares
  Reitere.
```

**Saída:**

```cmd
2
4
6
8
10
```

---

### 4. Laço com `Retorne`

```pop
Rotina para que se encontre um item em uma lista:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \\ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \\ Encontrou e sai da rotina
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

---

## Exemplos Avançados

### 5. Laço com Múltiplas Condições de Saída

```pop
Rotina para que se leia entrada do usuário:
  Itere.
    Leia uma linha desde o console.
    Se a linha estiver em branco, pare. \\ Entrada vazia
    Se a linha for "sair", pare. \\ Comando de saída
    Se a linha for "ajuda", mostre a ajuda; reitere. \\ Continua
    Processe a linha.
  Reitere.
```

---

### 6. Laço com Variável Local

```pop
Rotina para que se some números:
  Atribua 0 para um total.
  Itere.
    Leia um número desde o console.
    Se o número for 0, pare.
    Adicione o número para o total.
  Reitere.
  Escreva "Total: " junto com o total no console.
```

---

### 7. Laço Processando String Caractere por Caractere

```pop
Rotina para que se conte vogais em uma string:
  Atribua 0 para uma contagem.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Adicione 1 para a contagem.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com a contagem no console.
```

---

### 8. Laço Processando Lista

```pop
Rotina para que se destrua todos os itens de uma lista:
  Itere.
    Atribua a lista inicial destas listas para uma lista.
    Se a lista for inexistente, pare.
    Remova a lista desde as listas.
    Destrua a lista.
  Reitere.
```

---

### 9. Laço com Chamada de Rotina

```pop
Rotina para que se processe arquivo linha por linha:
  Abra o arquivo.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Processe a linha. \\ Chamada de rotina
  Reitere.
  Feche o arquivo.
```

---

### 10. Laço com Validação

```pop
Rotina para que se obtenha entrada válida:
  Itere.
    Escreva "Digite um número entre 1 e 10: " no console.
    Leia um número desde o console.
    Se o número for menor do que 1, reitere.
    Se o número for maior do que 10, reitere.
    Pare. \\ Entrada válida
  Reitere.
  Escreva "Você digitou: " junto com o número no console.
```

---

## Escopo de Variáveis em Laços

### Variáveis Persistem Após o Laço

Variáveis locais declaradas **dentro do laço** continuam existindo no **escopo da rotina**:

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Atribua "João" para uma string denominada nome. \\ Declarada no laço
    Se o nome for "João", pare.
  Reitere.
  Escreva o nome para StdOut. \\ Ainda acessível aqui
  Feche o programa.
```

**Importante:** A variável `nome` **não é destruída** ao sair do laço.

---

### Declaração em Expressão Condicional

É possível declarar variáveis diretamente na **expressão condicional**:

```pop
Itere.
  Se um número for maior que 10, pare. \\ Declara 'número' aqui
  Adicione 1 ao número.
Reitere.
```

---

## Padrões Comuns

### Padrão 1: Contador Simples

```pop
Atribua 0 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que N, pare.
  \\ Processa...
Reitere.
```

---

### Padrão 2: Processamento de Lista

```pop
Atribua a lista inicial destas listas para uma lista.
Itere.
  Se a lista for inexistente, pare.
  \\ Processa a lista...
  Atribua a lista posterior desta lista à lista.
Reitere.
```

---

### Padrão 3: Leitura até Condição

```pop
Itere.
  Leia algo.
  Se algo atende condição, pare.
  \\ Processa algo...
Reitere.
```

---

### Padrão 4: Loop Infinito com Saída Condicional

```pop
Itere.
  Processe evento.
  Se deve sair, pare.
Reitere.
```

---

### Padrão 5: Percorrendo String

```pop
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  \\ Processa caractere...
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

---

## Comparação com Outras Linguagens

| Português Puro     | C/Java/JavaScript  | Python        |
|--------------------|--------------------|---------------|
| `Itere`            | `while(true) {`    | `while True:` |
| `Reitere` (fim)    | `}` (fim do while) | (desindenta)  |
| `Reitere` (dentro) | `continue`         | `continue`    |
| `Pare`             | `break`            | `break`       |
| `Retorne`          | `return`           | `return`      |

**Nota:** `Reitere` tem **dois usos**:

- **No final do bloco**: Marca o fim do laço (equivalente a `}` em C)
- **Dentro do bloco**: Volta ao início do laço (equivalente a `continue`)

---

## Aninhamento NÃO É Permitido

### ❌ ERRADO - Laços Aninhados

```pop
\\ ISTO NÃO É PERMITIDO
Itere.
  Itere. \\ ❌ Laço dentro de laço
    \\ ...
  Reitere.
Reitere.
```

### ✅ CORRETO - Use Rotinas Auxiliares

```pop
Rotina para que se processe matriz:
  Atribua 0 para uma linha.
  Itere.
    Se a linha for maior do que 10, pare.
    Processe a linha. \\ Chama rotina auxiliar
    Adicione 1 para a linha.
  Reitere.

Rotina para que se processe uma linha:
  Atribua 0 para uma coluna.
  Itere.
    Se a coluna for maior do que 10, pare.
    \\ Processa célula...
    Adicione 1 para a coluna.
  Reitere.
```

---

## Observações Importantes

1. **Tipo Único**: Apenas um tipo de laço (`while(true)`)
2. **Sem Aninhamento**: Laços aninhados não são permitidos
3. **`Itere` Opcional**: Pode ser omitido no início da rotina
4. **Escopo de Variáveis**: Variáveis do laço persistem na rotina
5. **Controle Explícito**: Use `Pare` ou `Retorne` para sair
6. **`Reitere` Obrigatório**: Sempre termine o laço com `Reitere`
7. **Sem Iteradores**: Não há `for(i=0; i<10; i++)` - use contadores manuais
8. **Condicionais Permitidos**: Pode usar `Se` dentro do laço
9. **Chamadas Permitidas**: Pode chamar rotinas e funções
10. **Laços Infinitos**: Por padrão, o laço é infinito (use `Pare` ou `Retorne`)

---

## Boas Práticas

1. **Sempre Tenha Condição de Saída**: Use `Pare` ou `Retorne` para evitar loops infinitos
2. **Use `Reitere` para Pular**: Quando quiser pular para a próxima iteração
3. **Declare Variáveis Fora do Laço**: Quando precisar do valor após o laço
4. **Use Rotinas Auxiliares**: Para simular laços aninhados
5. **Validação no Início**: Coloque validações no início do laço
6. **Comentários**: Documente condições de saída complexas
7. **Evite Laços Infinitos Acidentais**: Sempre verifique se há condição de saída
8. **Use Contadores**: Para limitar iterações
9. **Teste Condições de Borda**: Verifique lista vazia, string vazia, etc.
10. **Limpe Recursos**: Sempre desaloque memória alocada no laço

---

## Erros Comuns

### ❌ Esquecer `Reitere`

```pop
Itere.
  \\ Código...
  Se condição, pare.
\\ ❌ Falta Reitere
```

### ❌ Laço Infinito Sem Saída

```pop
Itere.
  \\ Código sem Pare ou Retorne
Reitere. \\ ❌ Loop infinito
```

### ❌ Tentar Aninhar Laços

```pop
Itere.
  Itere. \\ ❌ Não permitido
    \\ ...
  Reitere.
Reitere.
```

### ✅ Soluções Corretas

```pop
\\ ✅ Sempre termine com Reitere
Itere.
  \\ Código...
  Se condição, pare.
Reitere.

\\ ✅ Sempre tenha condição de saída
Itere.
  Se condição, pare. \\ ou retorne
  \\ Código...
Reitere.

\\ ✅ Use rotinas para simular aninhamento
Rotina para que se processe linhas:
  Itere.
    Processe colunas. \\ Chama rotina com laço
  Reitere.
```

---

## Exemplos de Uso Prático

### Processamento de Arquivo

```pop
Rotina para que se processe um arquivo:
  Abra o arquivo.
  Itere.
    Leia uma linha desde o arquivo.
    Se a linha for inexistente, pare.
    Se a linha estiver em branco, reitere.
    Processe a linha.
  Reitere.
  Feche o arquivo.
```

### Loop de Eventos

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Desenfileire um evento.
    Se o evento for inexistente, pare.
    Se a categoria deste evento for "clique", processe clique.
    Se a categoria deste evento for "tecla", processe tecla.
  Reitere.
  Feche o programa.
```

### Busca em Lista

```pop
Rotina para que se encontre um item por nome:
  Atribua a lista inicial destas listas para uma lista.
  Itere.
    Se a lista for inexistente, retorne. \\ Não encontrou
    Se o nome desta lista for o nome procurado,
      Atribua a lista ao item encontrado;
      Retorne. \\ Encontrou
    Atribua a lista posterior desta lista à lista.
  Reitere.
```

### Validação de Entrada

```pop
Rotina para que se obtenha senha válida:
  Itere.
    Escreva "Digite a senha: " no console.
    Leia uma senha desde o console.
    Se a senha estiver em branco, reitere.
    Se o comprimento desta senha for menor do que 8, reitere.
    Se a senha não contiver números, reitere.
    Pare. \\ Senha válida
  Reitere.
  Escreva "Senha aceita." no console.
```

---

## Estatísticas

- **Tipos de laço**: 1 (`while(true)`)
- **Palavras-chave**: 3 (`Itere`, `Reitere`, `Pare`)
- **Aninhamento**: Não suportado
- **`Itere` opcional**: Sim (no início da rotina)
- **Escopo de variáveis**: Rotina (não apenas laço)
- **Iteradores automáticos**: Não (use contadores manuais)
- **Controle de fluxo**: `Pare`, `Retorne`, `Reitere`

---

# Funções - Português Puro

## Visão Geral

Funções em Português Puro são rotinas especiais que **retornam valores booleanos** (`sim` ou `não`). Elas são chamadas de **funções deliberativas** e são usadas exclusivamente em **expressões condicionais**.

---

## Características das Funções

### Capacidades

✅ **Retornam booleano** (`sim` ou `não`)  
✅ **Podem chamar rotinas**  
✅ **Podem chamar outras funções** (através de condicionais `Se`)  
✅ **Podem conter laços** (`Itere`/`Reitere`)  
✅ **Podem receber parâmetros**  
✅ **Suportam sobrecarga de métodos** (nomes alternativos)  
✅ **Chamadas Externas**: Podem usar `Processe` para APIs
✅ **Podem conter instruções de máquina** (`Decodifique`)

### Restrições

❌ **Devem sempre terminar com** `Diga sim` **ou** `Diga não`  
❌ **Só podem ser chamadas em expressões condicionais** (`Se`)  
❌ **Não podem ser chamadas diretamente como rotinas**

---

## Sintaxe

### Declaração Básica

```pop
Função para que se determine se <expressão a ser avaliada>:
  <corpo da função>
  Diga sim|não.
```

### Estrutura

1. **Cabeçalho**: `Função para que se determine se` + expressão
2. **Corpo**: Instruções da função (indentadas)
3. **Retorno**: `Diga sim` ou `Diga não` (obrigatório)

---

## Parâmetros

Parâmetros são indicados por **artigos indefinidos**:

| Artigo | Gênero/Número      | Exemplo       |
|--------|--------------------|---------------|
| `um`   | Masculino singular | `um número`   |
| `uma`  | Feminino singular  | `uma string`  |
| `uns`  | Masculino plural   | `uns bytes`   |
| `umas` | Feminino plural    | `umas listas` |

### Exemplos de Parâmetros

```pop
\\ Sem parâmetros
Função para que se determine se estamos com sorte:

\\ Um parâmetro
Função para que se determine se um número é negativo:

\\ Dois parâmetros
Função para que se determine se um byte é maior do que um segundo byte:

\\ Três parâmetros
Função para que se determine se uma tecla com um lParam é alguma tecla de cancelamento:
```

---

## Sobrecarga de Métodos (Nomes Alternativos)

Funções podem ter **múltiplos nomes** separados por **ponto e vírgula** (`;`):

```pop
Função para que se determine se um byte é maior do que ou igual a um segundo byte;
Função para que se determine se um byte é maior que ou igual a um segundo byte;
Função para que se determine se um byte é maior ou igual a um segundo byte:
  \\ Implementação única para todos os nomes
  Diga sim.
```

**Benefícios:**
- Flexibilidade na chamada
- Linguagem mais natural
- Compatibilidade com diferentes estilos

---

## Retorno Booleano

### Comandos de Retorno

| Comando    | Significado        | Equivalente    |
|------------|--------------------|----------------|
| `Diga sim` | Retorna verdadeiro | `return true`  |
| `Diga não` | Retorna falso      | `return false` |

### Regras

1. **Toda função DEVE terminar** com `Diga sim` ou `Diga não`
2. **Múltiplos retornos** são permitidos (em diferentes caminhos)
3. **Retorno condicional** é comum

### Exemplos de Retorno

```pop
\\ Retorno simples
Função para que se determine se um ponteiro existe:
  Se o ponteiro for inexistente, diga não.
  Diga sim.

\\ Retorno condicional
Função para que se determine se um número é positivo:
  Se o número for maior do que 0, diga sim.
  Diga não.

\\ Múltiplos retornos
Função para que se determine se uma linha de texto está em branco:
  Se a linha de texto for inexistente, diga sim.
  Lance um subtexto sobre a string desta linha de texto.
  Itere.
    Se o subtexto estiver em branco, diga sim.
    Se o conteúdo deste caractere inicial deste subtexto não for irrelevante, diga não.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

---

## Chamando Funções

### Uso em Condicionais

Funções **só podem ser chamadas** dentro de expressões condicionais (`Se`):

```pop
\\ Declaração da função
Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Chamada da função (sem "Função para que se determine")
Rotina para que se processe um valor:
  Se o número for negativo, retorne.
  \\ Processa o número...
```

### Sintaxe de Chamada

**Declaração:**
```
Função para que se determine se <expressão>:
```

**Chamada:**
```
Se <expressão>, <ação>.
```

**Exemplo:**

```pop
\\ Declaração
Função para que se determine se uma tecla está para baixo:
  Processe "user32.dll" "GetKeyState" com a tecla retornando um word.
  Atribua a word para um número.
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Chamada
Se a tecla está para baixo, processe o evento.
```

---

## Exemplos Completos

### 1. Função Simples (Sem Parâmetros)

```pop
Função para que se determine se estamos com sorte:
  Escolha aleatoriamente um número entre 1 e 100.
  Se o número for menor do que 51, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se estivermos com sorte, exiba a mensagem de vitória.
```

---

### 2. Função com Comparação

```pop
Função para que se determine se um byte é menor que um segundo byte;
Função para que se determine se um byte é menor do que um segundo byte:
  Decodifique $C7C001000000. \\ mov eax,1 - assume true
  Decodifique $8B9D08000000. \\ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B. \\ mov bl,[ebx]
  Decodifique $8B8D0C000000. \\ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19. \\ cmp bl,[ecx]
  Decodifique $0F8206000000. \\ jb sobre o próximo 1 statement
  Decodifique $C7C000000000. \\ mov eax,0 - now it is false
```

**Chamada:**
```pop
Se o byte for menor que o segundo byte, continue.
```

---

### 3. Função com Proteção de Parâmetros

```pop
Função para que se determine se uma fração é uma segunda fração:
  Preserve a fração. \\ Comando de Proteção
  Preserve a segunda fração. \\ Comando de Proteção
  Normalize a fração e a segunda fração. \\ chamada de rotina
  Se o numerador desta fração é o numerador desta segunda fração, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se a fração for a segunda fração, retorne.
```

---

### 4. Função com Chamada Externa (API)

```pop
Função para que se determine se um endereço completo está no sistema de arquivos:
  Preserve o endereço completo.
  Anexe o caractere NULL após o endereço completo.
  Processe "kernel32.dll" "GetFileAttributesA" com
    O caractere inicial deste endereço completo [lpFileName]
  Retornando um número.
  Se o número for menor do que 0, diga não.
  Diga sim.
```

**Chamada:**
```pop
Se o endereço completo está no sistema de arquivos, leia o arquivo.
```

---

### 5. Função com Sobrecarga

```pop
Função para que se determine se uma tecla está ligada;
Função para que se determine se uma tecla está alternada;
Função para que se determine se uma tecla está ativada:
  Processe "user32.dll" "GetKeyState" com a tecla retornando um word.
  Atribua a word para um número.
  Conjuncione logicamente o número com 1.
  Se o número for 1, diga sim.
  Diga não.
```

**Chamadas (todas equivalentes):**
```pop
Se a tecla está ligada, processe.
Se a tecla está alternada, processe.
Se a tecla está ativada, processe.
```

---

### 6. Função com Laço

```pop
Função para que se determine se uma linha de texto está em branco:
  Se a linha de texto for inexistente, diga sim.
  Lance um subtexto sobre a string desta linha de texto.
  Itere.
    Se o subtexto estiver em branco, diga sim.
    Se o conteúdo deste caractere inicial deste subtexto não for irrelevante, diga não.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

**Chamada:**
```pop
Se a linha de texto está em branco, pule para a próxima.
```

---

### 7. Função com Múltiplos Parâmetros

```pop
Função para que se determine se uma tecla com um lParam é alguma tecla de cancelamento ou tecla modificadora:
  Atribua o lParam para um número.
  Conjuncione logicamente o número com 1073741824 [0x40000000].
  Se o número for 0, diga não.
  Se a tecla for a tecla Esc, diga sim.
  Se a tecla for algum tecla modificadora, diga sim.
  Diga não.
```

**Chamada:**
```pop
Se a tecla com o lParam é alguma tecla de cancelamento ou tecla modificadora, ignore.
```

---

### 8. Função Complexa com Cálculos

```pop
Função para que se determine se uma localização está sobre uma linha reta:
  Preserve a linha reta.
  Atribua 3 vezes a quantidade de twips/pixel para um número.
  Itere.
    Obtenha uma distância entre a localização e o centro desta linha reta (trigonometria racional).
    Se a distância for menor do que ou igual ao número, diga sim.
    Obtenha a distância entre a localização inicial desta linha reta e a localização final desta linha reta (trigonometria racional).
    Se a distância for menor do que ou igual à quantidade de twips/pixel, diga não.
    Subdivida a linha reta em a linha reta e uma segunda linha reta.
    Obtenha a distância entre a localização e o centro desta linha reta (trigonometria racional).
    Obtenha uma segunda distância entre a localização e o centro desta segunda linha reta (trigonometria racional).
    Se a distância for maior do que a segunda distância,
      Atribua a segunda linha reta ao linha reta.
  Reitere.
```

**Chamada:**
```pop
Se a localização está sobre a linha reta, selecione a linha.
```

---

## Funções Chamando Rotinas

Funções podem chamar rotinas normalmente:

```pop
Função para que se determine se uma fração é válida:
  Normalize a fração. \\ Chamada de rotina
  Se o denominador desta fração for 0, diga não.
  Diga sim.
```

---

## Funções Chamando Funções

Funções podem chamar outras funções através de condicionais:

```pop
Função para que se determine se um número é válido:
  Se o número for negativo, diga não. \\ Chama outra função
  Se o número for zero, diga não.
  Diga sim.

Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.
```

---

## Comando `Preserve` em Funções

O comando `Preserve` cria uma **cópia** do parâmetro para evitar modificações indesejadas:

```pop
Função para que se determine se uma string possui alguma vogal acentuada:
  Preserve a string. \\ Cria cópia
  Itere.
    Se a string estiver em branco, diga não.
    Se o conteúdo deste caractere final desta string for alguma vogal acentuada, diga sim.
    Subtraia 1 desde o caractere final desta string. \\ Modifica a cópia
  Reitere.
```

**Sem `Preserve`:** A string original seria modificada  
**Com `Preserve`:** Apenas a cópia é modificada

---

## Instruções de Máquina em Funções

Funções podem conter código assembly através do comando `Decodifique`:

```pop
Função para que se determine se um byte é maior ou igual a um segundo byte:
  Decodifique $C7C001000000. \\ mov eax,1 - assume true
  Decodifique $8B9D08000000. \\ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B. \\ mov bl,[ebx]
  Decodifique $8B8D0C000000. \\ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19. \\ cmp bl,[ecx]
  Decodifique $0F8306000000. \\ ja sobre o próximo 1 statement
  Decodifique $C7C000000000. \\ mov eax,0 - now it is false
```

---

## Observações Importantes

1. **Nomenclatura**: O nome da função começa após `Função para que se determine se`
2. **Retorno Obrigatório**: Toda função DEVE terminar com `Diga sim` ou `Diga não`
3. **Uso Exclusivo em Condicionais**: Funções só podem ser chamadas em expressões `Se`
4. **Passagem por Referência**: Parâmetros são passados por referência (use `Preserve` para cópias)
5. **Sobrecarga**: Múltiplos nomes separados por `;` permitem flexibilidade
6. **Verbos Sinônimos**: `é`, `está`, `for`, `estiver` são tratados como equivalentes
7. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
8. **Laços**: Podem conter `Itere`/`Reitere` normalmente
9. **Chamadas Externas**: Podem usar `Processe` para APIs
10. **Assembly**: Podem incluir instruções de máquina com `Decodifique`

---

## Comparação: Função vs Rotina

| Característica | Função                            | Rotina                |
|----------------|-----------------------------------|-----------------------|
| **Retorno**    | Booleano (`sim`/`não`)            | Sem retorno           |
| **Declaração** | `Função para que se determine se` | `Rotina para que se`  |
| **Chamada**    | Apenas em `Se`                    | Diretamente           |
| **Término**    | `Diga sim`/`Diga não`             | Fim do corpo          |
| **Uso**        | Condições lógicas                 | Ações e procedimentos |

---

## Exemplos de Uso Prático

### Validação de Entrada

```pop
Função para que se determine se uma idade é válida:
  Se a idade for menor do que 0, diga não.
  Se a idade for maior do que 150, diga não.
  Diga sim.

Rotina para que se processe uma pessoa:
  Se a idade não for válida, retorne.
  \\ Processa a pessoa...
```

### Verificação de Estado

```pop
Função para que se determine se o arquivo pode ser salvo:
  Se o endereço completo estiver em branco, diga não.
  Se o endereço completo está protegido contra gravação, diga não.
  Diga sim.

Rotina para que se salve o documento:
  Se o arquivo não pode ser salvo, exiba um erro; retorne.
  \\ Salva o arquivo...
```

### Controle de Fluxo

```pop
Função para que se determine se devemos continuar:
  Se a tecla Esc está para baixo, diga não.
  Se o tempo excedeu o limite, diga não.
  Diga sim.

Rotina para que se processe eventos:
  Itere.
    Se não devemos continuar, pare.
    Processe o próximo evento.
  Reitere.
```

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes que descrevam claramente a condição
2. **Retorno Explícito**: Sempre termine com `Diga sim` ou `Diga não`
3. **Use `Preserve`**: Quando não quiser modificar parâmetros
4. **Sobrecarga Útil**: Forneça variações naturais do nome
5. **Validação Cedo**: Retorne `não` cedo para casos inválidos
6. **Comentários**: Documente lógica complexa
7. **Funções Simples**: Mantenha funções focadas em uma única verificação
8. **Reutilização**: Chame outras funções quando apropriado

---

## Estatísticas

- **Palavra-chave de declaração**: `Função para que se determine se`
- **Comandos de retorno**: 2 (`Diga sim`, `Diga não`)
- **Uso**: Exclusivo em expressões condicionais
- **Sobrecarga**: Suportada (múltiplos nomes)
- **Parâmetros**: Ilimitados
- **Laços**: Suportados
- **Chamadas externas**: Suportadas
- **Assembly**: Suportado

---

# Rotinas - Português Puro

## Visão Geral

Rotinas em Português Puro são **procedimentos** ou **sub-rotinas** que executam ações específicas. Diferentemente das funções, rotinas **não retornam valores booleanos** e podem ser chamadas diretamente em qualquer parte do código.

---

## Características das Rotinas

### Capacidades

✅ **Executam ações e procedimentos**  
✅ **Podem chamar outras rotinas**  
✅ **Podem chamar funções** (através de condicionais `Se`)  
✅ **Podem conter laços** (`Itere`/`Reitere`)  
✅ **Podem receber parâmetros**  
✅ **Suportam sobrecarga de métodos** (nomes alternativos)  
✅ **Podem usar `Processe`** para chamadas externas (APIs)  
✅ **Podem conter instruções de máquina** (`Decodifique`)  
✅ **Podem usar `Preserve`** para proteger parâmetros  
✅ **Podem usar `Retorne`** para sair antecipadamente

### Restrições

❌ **Não retornam valores** (sem `return value`)  
❌ **Não podem usar** `Diga sim` **ou** `Diga não`  
❌ **Não podem ser chamadas na expressão condicional** (antes da vírgula do `Se`)

> [!IMPORTANT]
> **Expressão condicional vs Bloco condicional**
>
> - **Expressão condicional** (`Se X,`): A parte **antes da vírgula** só aceita **funções**
> - **Bloco condicional** (`Se X, Y.`): A parte **após a vírgula** pode conter **rotinas**
>
> ```pop
> \\ ❌ ERRADO - Rotina na expressão condicional
> Se limpe a string, continue.
> 
> \\ ✅ CORRETO - Função na expressão, rotina no bloco
> Se a string estiver em branco, limpe a string; retorne.
> ```

---

## Sintaxe

### Declaração Básica

```pop
Rotina para que se <nome da rotina>:
  <corpo da rotina>
```

### Estrutura

1. **Cabeçalho**: `Rotina para que se` + nome + parâmetros
2. **Corpo**: Instruções da rotina (indentadas)
3. **Término**: Fim do corpo ou `Retorne`

---

## Parâmetros

Parâmetros são indicados por **artigos indefinidos**:

| Artigo | Gênero/Número      | Exemplo       |
|--------|--------------------|---------------|
| `um`   | Masculino singular | `um número`   |
| `uma`  | Feminino singular  | `uma string`  |
| `uns`  | Masculino plural   | `uns twips`   |
| `umas` | Feminino plural    | `umas listas` |

### Exemplos de Parâmetros

```pop
\\ Sem parâmetros
Rotina para que se execute o programa:

\\ Um parâmetro
Rotina para que se limpe uma string:

\\ Dois parâmetros
Rotina para que se atribua um número para um segundo número:

\\ Três parâmetros
Rotina para que se ajuste uma caixa usando um número e um segundo número e um terceiro número:

\\ Múltiplos parâmetros com preposições
Rotina para que se adicione uma cor e um rótulo para um menu:
```

---

## Sobrecarga de Métodos (Nomes Alternativos)

Rotinas podem ter **múltiplos nomes** separados por **ponto e vírgula** (`;`):

```pop
Rotina para que se defina uma string como uma outra string;
Rotina para que se coloque uma outra string em uma string;
Rotina para que se substitua uma string por uma outra string;
Rotina para que se troque uma string para uma outra string;
Rotina para que se altere uma string para uma outra string;
Rotina para que se modifique uma string para uma outra string;
Rotina para que se mude uma string para uma outra string:
  Atribua a outra string para a string.
```

**Benefícios:**

- Flexibilidade na chamada
- Linguagem mais natural
- Compatibilidade com diferentes estilos de escrita

---

## Chamando Rotinas

Rotinas podem ser chamadas **diretamente** usando o nome (sem `Rotina para que se`):

### Declaração vs Chamada

**Declaração:**

```pop
Rotina para que se limpe uma string:
  Atribua "" para a string.
```

**Chamada:**

```pop
Limpe a string.
```

### Exemplos de Chamadas

```pop
\\ Declaração
Rotina para que se adicione um número para um segundo número:
  Atribua o número mais o segundo número ao segundo número.

\\ Chamadas
Adicione 5 para o total.
Adicione a largura para a coordenada X.
Adicione 1 para o contador.
```

---

## Preposições e Conjunções

Rotinas usam **preposições** e **conjunções** para conectar parâmetros de forma natural:

### Preposições Comuns

| Preposição     | Uso         | Exemplo               |
|----------------|-------------|-----------------------|
| `para`         | Destino     | `Atribua X para Y`    |
| `em`           | Localização | `Insira X em Y`       |
| `de` / `desde` | Origem      | `Remova X de Y`       |
| `com`          | Instrumento | `Faça X com Y`        |
| `usando`       | Meio        | `Crie X usando Y`     |
| `por`          | Agente      | `Multiplique X por Y` |

### Conjunções Comuns

| Conjunção | Uso         | Exemplo     |
|-----------|-------------|-------------|
| `e`       | Adição      | `X e Y e Z` |
| `ou`      | Alternativa | `X ou Y`    |

### Sinônimos de Preposições

As seguintes preposições são tratadas como **sinônimas**:

- `com` / `contendo` / `dado` / `desde` / `usando`
- `em` / `para` / `por`

```pop
\\ Declaração
Rotina para que se crie uma imagem usando uma URL:
  \\ Implementação...

\\ Chamadas equivalentes
Crie a imagem usando a URL.
Crie a imagem dada a URL.
Crie a imagem com a URL.
Crie a imagem desde a URL.
```

---

## Contrações

A linguagem suporta **contrações** para tornar o código mais natural:

| Contração | Expansão  | Exemplo                |
|-----------|-----------|------------------------|
| `à`       | `para a`  | `Atribua X à variável` |
| `ao`      | `para o`  | `Atribua X ao número`  |
| `deste`   | `de este` | `O valor deste campo`  |
| `desta`   | `de esta` | `O nome desta pessoa`  |
| `na`      | `em a`    | `Insira X na lista`    |
| `no`      | `em o`    | `Coloque X no arquivo` |
| `pelo`    | `por o`   | `Multiplique X pelo Y` |
| `pela`    | `por a`   | `Divida X pela Y`      |

---

## Comando `Retorne`

O comando `Retorne` **sai da rotina** imediatamente:

```pop
Rotina para que se processe um número:
  Se o número for menor do que 0, retorne. \\ Sai da rotina
  \\ Continua processando...
```

**Equivalente a:** `return;` em outras linguagens

---

## Comando `Preserve`

O comando `Preserve` cria uma **cópia** do parâmetro para evitar modificações indesejadas:

```pop
Rotina para que se inverta uma string:
  Preserve a string. \\ Cria cópia
  Limpe a string original. \\ Acessa a variável original
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### Palavra-chave `original`

Após `Preserve`, use `original` para acessar a variável original:

```pop
Preserve a contagem.
Subtraia 1 desde a contagem. \\ Modifica a cópia
Escreva a contagem original. \\ Acessa o valor original
```

---

## Exemplos Completos

### 1. Rotina Simples (Sem Parâmetros)

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Mostre a janela principal.
  Processe eventos.
  Feche o programa.
```

**Chamada:**

```pop
Execute o programa.
```

---

### 2. Rotina com Um Parâmetro

```pop
Rotina para que se limpe uma string:
  Atribua "" para a string.
```

**Chamada:**

```pop
Limpe o nome.
Limpe a mensagem de erro.
```

---

### 3. Rotina com Dois Parâmetros

```pop
Rotina para que se atribua um número para um segundo número:
  Atribua o número ao segundo número.
```

**Chamada:**

```pop
Atribua 10 para o contador.
Atribua a largura para a coordenada X.
```

---

### 4. Rotina com Sobrecarga

```pop
Rotina para que se defina um byte como um outro byte;
Rotina para que se coloque um outro byte em um byte;
Rotina para que se substitua um byte por um outro byte;
Rotina para que se troque um byte para um outro byte;
Rotina para que se altere um byte para um outro byte;
Rotina para que se modifique um byte para um outro byte;
Rotina para que se mude um byte para um outro byte:
  Atribua o outro byte para o byte.
```

**Chamadas (todas equivalentes):**

```pop
Defina o byte como 65.
Coloque 65 no byte.
Substitua o byte por 65.
Troque o byte para 65.
Altere o byte para 65.
Modifique o byte para 65.
Mude o byte para 65.
```

---

### 5. Rotina com Múltiplos Parâmetros

```pop
Rotina para que se ajuste uma caixa usando um número e um segundo número e um terceiro número e um quarto número:
  Adicione o número para a coordenada X1 desta caixa.
  Adicione o segundo número para a coordenada Y1 desta caixa.
  Adicione o terceiro número para a coordenada X2 desta caixa.
  Adicione o quarto número para a coordenada Y2 desta caixa.
```

**Chamada:**

```pop
Ajuste a caixa usando 10 e 20 e 30 e 40.
```

---

### 6. Rotina com Laço

```pop
Rotina para que se acrescente um byte para uma string usando uma contagem:
  Preserve a contagem.
  Itere.
    Se a contagem for menor do que 1, retorne.
    Acrescente o byte para a string.
    Subtraia 1 desde a contagem.
  Reitere.
```

**Chamada:**

```pop
Acrescente o caractere de espaço para a linha usando 10.
```

---

### 7. Rotina com Condicional

```pop
Rotina para que se simplifique uma fração:
  Obtenha um máximo divisor comum usando o numerador desta fração e o denominador desta fração.
  Divida o numerador desta fração pelo máximo divisor comum.
  Divida o denominador desta fração pelo máximo divisor comum.
```

**Chamada:**

```pop
Simplifique a fração.
```

---

### 8. Rotina com Chamada Externa (API)

```pop
Rotina para que se obtenha o modo do console:
  Processe "kernel32.dll" "GetConsoleMode" com
    O número identificador do fluxo de entrada padrão e
    O endereçamento dum número denominado modo do console
    Retornando um status de erro.
  Se o status de erro for 0,
    Escreva "Erro ao obter o modo do Console." no console.
```

**Chamada:**

```pop
Obtenha o modo do console.
```

---

### 9. Rotina com `Preserve` e `original`

```pop
Rotina para que se inverta uma string:
  Preserve a string.
  Limpe a string original.
  Itere.
    Se a string estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

**Chamada:**

```pop
Inverta o texto.
```

---

### 10. Rotina com Instruções de Máquina

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \\ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \\ mov [eax],0 - zera o ponteiro
```

**Chamada:**

```pop
Esvazie o ponteiro.
```

---

## Rotinas Chamando Rotinas

Rotinas podem chamar outras rotinas normalmente:

```pop
Rotina para que se prepare o console:
  Inicialize os componentes. \\ Chamada de rotina
  Obtenha o número identificador do fluxo de entrada padrão. \\ Chamada de rotina
  Defina o CodePage do console. \\ Chamada de rotina
  Obtenha o modo do console. \\ Chamada de rotina
```

---

## Rotinas Chamando Funções

Rotinas podem chamar funções através de condicionais:

```pop
Rotina para que se processe um arquivo:
  Se o arquivo não existe, retorne. \\ Chama função
  Se o arquivo está protegido contra gravação, exiba erro; retorne. \\ Chama função
  \\ Processa o arquivo...
```

---

## Variáveis Locais em Rotinas

Variáveis locais são declaradas com **artigos indefinidos**:

```pop
Rotina para que se calcule o fatorial de um número:
  Atribua 1 para um resultado. \\ Variável local
  Atribua 1 para um contador. \\ Variável local
  Itere.
    Se o contador for maior do que o número, pare.
    Multiplique o resultado pelo contador.
    Adicione 1 para o contador.
  Reitere.
  Atribua o resultado ao número.
```

---

## Rotina Principal (`Main`)

A rotina principal do programa é:

```pop
Rotina para que se execute o programa:
  \\ Código principal...
```

**Equivalente a:** `int main()` em C

---

## Callbacks

Para passar o endereço de uma rotina como callback, use `Aponte`:

```pop
Aponte um ponteiro para a rotina manipule um evento.
```

### Rotinas Compatíveis com Windows

Use `compativelmente` para rotinas que serão chamadas pelo Windows:

```pop
Rotina para que se compativelmente manipule um evento:
  \\ Implementação...
```

---

## Observações Importantes

1. **Nomenclatura**: O nome da rotina começa após `Rotina para que se`
2. **Sem Retorno de Valor**: Rotinas não retornam valores (use funções para isso)
3. **Chamada Direta**: Rotinas podem ser chamadas diretamente (sem `Se`)
4. **Passagem por Referência**: Parâmetros são passados por referência (use `Preserve` para cópias)
5. **Sobrecarga**: Múltiplos nomes separados por `;` permitem flexibilidade
6. **Preposições Sinônimas**: `com`, `usando`, `dado`, `desde` são equivalentes
7. **Contrações**: Suportadas para naturalidade (`à`, `ao`, `deste`, `desta`, etc.)
8. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
9. **Laços**: Podem conter `Itere`/`Reitere` normalmente
10. **Chamadas Externas**: Podem usar `Processe` para APIs
11. **Assembly**: Podem incluir instruções de máquina com `Decodifique`
12. **Callbacks**: Use `compativelmente` para rotinas chamadas pelo Windows

---

## Comparação: Rotina vs Função

| Característica | Rotina                    | Função                            |
|----------------|---------------------------|-----------------------------------|
| **Retorno**    | Sem retorno               | Booleano (`sim`/`não`)            |
| **Declaração** | `Rotina para que se`      | `Função para que se determine se` |
| **Chamada**    | Diretamente               | Apenas em `Se`                    |
| **Término**    | Fim do corpo ou `Retorne` | `Diga sim`/`Diga não`             |
| **Uso**        | Ações e procedimentos     | Condições lógicas                 |

---

## Exemplos de Uso Prático

### Manipulação de Strings

```pop
Rotina para que se cite uma string:
  Atribua as aspas duplas para uma segunda string.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Acrescente o conteúdo deste caractere inicial deste subtexto para a segunda string.
    Se o conteúdo deste caractere inicial deste subtexto for as aspas duplas,
      Acrescente as aspas duplas para a segunda string.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Acrescente as aspas duplas para a segunda string.
  Atribua a segunda string à string.
```

### Operações Matemáticas

```pop
Rotina para que se eleve um número para um segundo número:
  Se o segundo número for 0,
    Atribua 1 ao número;
    Retorne.
  Se o segundo número for menor do que 0,
    Atribua 0 ao número;
    Retorne.
  Atribua 1 para um número resultante.
  Itere.
    Se um contador estiver ultrapassando o segundo número, pare.
    Multiplique o número resultante pelo número.
  Reitere.
  Atribua o número resultante ao número.
```

### Manipulação de Estruturas

```pop
Rotina para que se atribua um par de números para um segundo par de números:
  Atribua o número X deste par de números ao número X deste segundo par de números.
  Atribua o número Y deste par de números ao número Y deste segundo par de números.
```

### Gerenciamento de Memória

```pop
Rotina para que se associe um ponteiro usando uma quantidade de bytes:
  Se a quantidade de bytes for 0,
    Esvazie o ponteiro;
    Retorne.
  Preserve a quantidade de bytes.
  Arredonde a quantidade de bytes para cima usando a próxima potência de dois.
  Processe "kernel32.dll" "HeapAlloc" com
    O endereço heap e
    8 e \\ HEAP_ZERO_MEMORY
    A quantidade de bytes
  Retornando o ponteiro.
  Se o ponteiro não for inexistente,
    Adicione 1 para a contagem do heap;
    Retorne.
```

---

## Boas Práticas

1. **Nomes Descritivos**: Use nomes que descrevam claramente a ação
2. **Sobrecarga Útil**: Forneça variações naturais do nome
3. **Use `Preserve`**: Quando não quiser modificar parâmetros
4. **Retorno Antecipado**: Use `Retorne` para validações no início
5. **Comentários**: Documente lógica complexa
6. **Rotinas Simples**: Mantenha rotinas focadas em uma única responsabilidade
7. **Reutilização**: Chame outras rotinas quando apropriado
8. **Validação**: Verifique parâmetros antes de processar
9. **Gerenciamento de Memória**: Sempre desaloque o que foi alocado
10. **Callbacks**: Use `compativelmente` para rotinas chamadas pelo Windows

---

## Padrões Comuns

### Padrão de Atribuição

```pop
Rotina para que se atribua X para Y:
  Atribua X ao Y.
```

### Padrão de Adição

```pop
Rotina para que se adicione X para Y:
  Adicione X para Y.
```

### Padrão de Conversão

```pop
Rotina para que se converta X para Y:
  \\ Lógica de conversão...
```

### Padrão de Criação

```pop
Rotina para que se crie X:
  Aloque memória para X.
  \\ Inicialização...
```

### Padrão de Destruição

```pop
Rotina para que se destrua X:
  \\ Limpeza...
  Desaloque memória para X.
```

---

## Estatísticas

- **Palavra-chave de declaração**: `Rotina para que se`
- **Modificador de callback**: `compativelmente`
- **Comando de saída**: `Retorne`
- **Comando de proteção**: `Preserve`
- **Sobrecarga**: Suportada (múltiplos nomes)
- **Parâmetros**: Ilimitados
- **Laços**: Suportados
- **Chamadas externas**: Suportadas
- **Assembly**: Suportado
- **Retorno de valor**: Não suportado (use funções)

---

# Callbacks - Português Puro

## Visão Geral

Callbacks em Português Puro são **ponteiros para rotinas** que podem ser passados como parâmetros para funções externas (APIs do Windows, DLLs). Eles permitem que código externo "chame de volta" (callback) rotinas definidas no programa.

---

## Função dos Callbacks

### Uso Principal

Callbacks são usados para:

1. **Eventos do Windows**: Manipular mensagens de janelas, botões, menus
2. **Enumeração**: Processar cada item de uma lista (arquivos, janelas, etc.)
3. **Notificações**: Receber avisos de eventos assíncronos
4. **Hooks**: Interceptar eventos do sistema

---

## Sintaxe

### 1. Declarar Rotina Compatível

Use o modificador `compativelmente` para rotinas que serão chamadas pelo Windows:

```pop
Rotina para que se compativelmente <nome da rotina>:
  \\ Implementação...
```

### 2. Obter Ponteiro para a Rotina

Use `Aponte` para obter o endereço da rotina:

```pop
Aponte <variável ponteiro> para a rotina <nome da rotina>.
```

### 3. Passar para API Externa

Passe o ponteiro como parâmetro em `Processe`:

```pop
Processe "<dll>" "<função>" com
  <parâmetros> e
  <ponteiro callback>
  Retornando <resultado>.
```

---

## Modificador `compativelmente`

### Função

O modificador `compativelmente` garante que a rotina use a **convenção de chamada correta** (stdcall) esperada pelas APIs do Windows.

### Sintaxe

```pop
Rotina para que se compativelmente <nome>:
  \\ Corpo da rotina
```

### Por Que É Necessário?

- **Convenção de Chamada**: Windows usa `stdcall`, Português Puro usa `cdecl` por padrão
- **Limpeza da Pilha**: `stdcall` limpa a pilha dentro da função
- **Compatibilidade**: Sem `compativelmente`, callbacks causarão crashes

---

## Exemplos Práticos

### 1. Callback de Enumeração de Janelas

```pop
\\ Declarar rotina compatível
Rotina para que se compativelmente enumere uma janela:
  \\ Obter título da janela
  Processe "user32.dll" "GetWindowTextA" com
    a janela e
    o endereçamento duma string denominada título e
    256
    Retornando um comprimento.
  
  \\ Exibir título
  Se o comprimento for maior que 0,
    Escreva o título no console.
  
  \\ Continuar enumeração (retornar 1)
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.           \\ ret

\\ Obter ponteiro para callback
Aponte um ponteiro para a rotina enumere uma janela.

\\ Chamar API com callback
Processe "user32.dll" "EnumWindows" com
  o ponteiro e
  0
  Retornando um resultado.
```

---

### 2. Callback de Procedimento de Janela (Window Procedure)

```pop
\\ Declarar procedimento de janela
Rotina para que se compativelmente manipule um evento:
  \\ Parâmetros: hwnd, msg, wParam, lParam
  \\ Estes são passados automaticamente pelo Windows
  
  \\ Obter mensagem
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12] - pega msg
  
  \\ Verificar se é WM_DESTROY (0x0002)
  Decodifique $83F902. \\ cmp ecx,2
  Decodifique $7508.   \\ jne +8
  
  \\ Se for WM_DESTROY, chamar PostQuitMessage(0)
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \\ xor eax,eax - retornar 0
  Decodifique $C3.     \\ ret
  
  \\ Caso contrário, chamar DefWindowProc
  Decodifique $FF7514. \\ push [ebp+20] - lParam
  Decodifique $FF7510. \\ push [ebp+16] - wParam
  Decodifique $FF750C. \\ push [ebp+12] - msg
  Decodifique $FF7508. \\ push [ebp+8]  - hwnd
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \\ ret

\\ Obter ponteiro
Aponte um ponteiro de procedimento para a rotina manipule um evento.

\\ Registrar classe de janela
\\ ... (usar ponteiro de procedimento na estrutura WNDCLASS)
```

---

### 3. Callback de Timer

```pop
\\ Declarar callback de timer
Rotina para que se compativelmente processe timer:
  \\ Executar ação periódica
  Escreva "Timer disparado!" no console.
  
  \\ Retornar (sem valor de retorno necessário)
  Decodifique $C3. \\ ret

\\ Obter ponteiro
Aponte um ponteiro de timer para a rotina processe timer.

\\ Criar timer
Processe "user32.dll" "SetTimer" com
  0 e              \\ hwnd (NULL)
  1 e              \\ timer ID
  1000 e           \\ intervalo em ms (1 segundo)
  o ponteiro de timer
  Retornando um identificador de timer.
```

---

### 4. Callback de Enumeração de Arquivos

```pop
\\ Declarar callback
Rotina para que se compativelmente processe arquivo encontrado:
  \\ Parâmetros passados pelo FindFirstFile/FindNextFile
  \\ WIN32_FIND_DATA está em [ebp+8]
  
  \\ Obter nome do arquivo (offset 44 na estrutura)
  Decodifique $8B4508.     \\ mov eax,[ebp+8]
  Decodifique $83C02C.     \\ add eax,44
  Decodifique $50.         \\ push eax
  
  \\ Criar string para o nome
  Aloque memória para uma string denominada nome.
  
  \\ Copiar nome (simplificado)
  \\ ... lógica de cópia ...
  
  \\ Exibir nome
  Escreva o nome no console.
  
  \\ Continuar (retornar 1)
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.         \\ ret

\\ Usar callback
Aponte um ponteiro para a rotina processe arquivo encontrado.
```

---

## Comando `Aponte`

### Sintaxe

```pop
Aponte <ponteiro> para a rotina <nome da rotina>.
```

### Função

Obtém o **endereço de memória** da rotina e armazena em um ponteiro.

### Exemplos

```pop
\\ Declarar ponteiro
Um ponteiro denominado callback.

\\ Apontar para rotina
Aponte o callback para a rotina manipule evento.

\\ Usar em API
Processe "user32.dll" "SetWindowsHookEx" com
  1 e              \\ WH_KEYBOARD
  o callback e
  0 e
  0
  Retornando um hook.
```

---

## Estrutura Típica de Callback

### Padrão Geral

```pop
Rotina para que se compativelmente <nome>:
  \\ 1. Obter parâmetros da pilha (se necessário)
  Decodifique $8B4508. \\ mov eax,[ebp+8] - primeiro parâmetro
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12] - segundo parâmetro
  
  \\ 2. Processar lógica
  \\ ... código da rotina ...
  
  \\ 3. Retornar valor (se necessário)
  Decodifique $B8<valor>. \\ mov eax,<valor>
  Decodifique $C3.        \\ ret
```

---

## Convenções de Chamada

### `stdcall` (Windows)

- **Usado por**: APIs do Windows
- **Limpeza da pilha**: Função chamada limpa a pilha
- **Modificador**: `compativelmente`
- **Decoração de nome**: `_FunctionName@bytes`

### `cdecl` (Padrão Português Puro)

- **Usado por**: Rotinas normais
- **Limpeza da pilha**: Chamador limpa a pilha
- **Modificador**: Nenhum
- **Decoração de nome**: `_FunctionName`

---

## Parâmetros de Callbacks

### Acesso aos Parâmetros

Parâmetros são passados na pilha e acessados via `[ebp+offset]`:

| Parâmetro | Offset | Instrução Assembly |
|-----------|--------|--------------------|
| 1º        | `+8`   | `mov eax,[ebp+8]`  |
| 2º        | `+12`  | `mov ecx,[ebp+12]` |
| 3º        | `+16`  | `mov edx,[ebp+16]` |
| 4º        | `+20`  | `mov ebx,[ebp+20]` |

### Exemplo

```pop
Rotina para que se compativelmente processe mensagem:
  \\ Parâmetros: hwnd, msg, wParam, lParam
  
  \\ Obter hwnd (1º parâmetro)
  Decodifique $8B4508. \\ mov eax,[ebp+8]
  
  \\ Obter msg (2º parâmetro)
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12]
  
  \\ Obter wParam (3º parâmetro)
  Decodifique $8B5510. \\ mov edx,[ebp+16]
  
  \\ Obter lParam (4º parâmetro)
  Decodifique $8B5D14. \\ mov ebx,[ebp+20]
  
  \\ ... processar ...
```

---

## Valores de Retorno

### Retornar Valor Inteiro

```pop
\\ Retornar 0
Decodifique $33C0. \\ xor eax,eax
Decodifique $C3.   \\ ret

\\ Retornar 1
Decodifique $B801000000. \\ mov eax,1
Decodifique $C3.         \\ ret

\\ Retornar valor específico
Decodifique $B8<valor>. \\ mov eax,<valor>
Decodifique $C3.        \\ ret
```

---

## APIs Comuns que Usam Callbacks

### Enumeração

```pop
\\ EnumWindows - enumerar janelas
Processe "user32.dll" "EnumWindows" com
  o callback e
  0.

\\ EnumChildWindows - enumerar janelas filhas
Processe "user32.dll" "EnumChildWindows" com
  a janela pai e
  o callback e
  0.
```

### Hooks

```pop
\\ SetWindowsHookEx - instalar hook
Processe "user32.dll" "SetWindowsHookExA" com
  o tipo de hook e
  o callback e
  0 e
  0
  Retornando o handle do hook.
```

### Timers

```pop
\\ SetTimer - criar timer
Processe "user32.dll" "SetTimer" com
  0 e
  o id do timer e
  o intervalo e
  o callback
  Retornando o id do timer.
```

### Threads

```pop
\\ CreateThread - criar thread
Processe "kernel32.dll" "CreateThread" com
  0 e
  0 e
  o callback e
  o parâmetro e
  0 e
  o endereçamento dum id de thread
  Retornando o handle da thread.
```

---

## Observações Importantes

1. **Sempre Use `compativelmente`**: Callbacks para Windows **devem** usar este modificador
2. **Convenção stdcall**: Windows espera que callbacks usem stdcall
3. **Limpeza da Pilha**: A rotina callback limpa seus próprios parâmetros
4. **Valores de Retorno**: Muitos callbacks retornam valores específicos
5. **Assembly Necessário**: Callbacks frequentemente precisam de código assembly
6. **Ponteiros**: Use `Aponte` para obter endereço da rotina
7. **Parâmetros Automáticos**: Windows passa parâmetros automaticamente
8. **Acesso à Pilha**: Use `[ebp+offset]` para acessar parâmetros
9. **Retorno**: Use `mov eax,valor` e `ret` para retornar
10. **Crashes**: Callback sem `compativelmente` causará crash

---

## Boas Práticas

1. **Sempre `compativelmente`**: Use para todos os callbacks do Windows
2. **Teste Cuidadosamente**: Callbacks incorretos causam crashes
3. **Documente Parâmetros**: Comente quais parâmetros são esperados
4. **Retornos Corretos**: Retorne valores esperados pela API
5. **Tratamento de Erros**: Valide parâmetros antes de usar
6. **Assembly Mínimo**: Use apenas o assembly necessário
7. **Ponteiros Válidos**: Verifique ponteiros antes de desreferenciar
8. **Memória**: Não aloque/desaloque memória desnecessariamente
9. **Thread-Safe**: Callbacks podem ser chamados de threads diferentes
10. **Debugging**: Use logs para depurar callbacks

---

## Exemplos Completos

### Aplicação com Janela

```pop
\\ Callback de procedimento de janela
Rotina para que se compativelmente manipule mensagem:
  \\ Obter mensagem
  Decodifique $8B4D0C. \\ mov ecx,[ebp+12]
  
  \\ WM_DESTROY?
  Decodifique $83F902. \\ cmp ecx,2
  Decodifique $7508.   \\ jne +8
  
  \\ Sim - sair
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \\ xor eax,eax
  Decodifique $C3.     \\ ret
  
  \\ Não - processar padrão
  Decodifique $FF7514. \\ push [ebp+20]
  Decodifique $FF7510. \\ push [ebp+16]
  Decodifique $FF750C. \\ push [ebp+12]
  Decodifique $FF7508. \\ push [ebp+8]
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \\ ret

Rotina para que se crie janela:
  \\ Obter ponteiro para callback
  Aponte um ponteiro de procedimento para a rotina manipule mensagem.
  
  \\ Registrar classe
  \\ ... (usar ponteiro de procedimento)
  
  \\ Criar janela
  \\ ... (usar classe registrada)
```

---

## Antipadrões (Evitar)

### ❌ Esquecer `compativelmente`

```pop
\\ RUIM - Causará crash
Rotina para que se manipule evento:
  \\ ... código ...

\\ BOM - Funciona corretamente
Rotina para que se compativelmente manipule evento:
  \\ ... código ...
```

### ❌ Não Retornar Valor

```pop
\\ RUIM - Valor de retorno indefinido
Rotina para que se compativelmente processe item:
  \\ ... código ...
  \\ (sem retorno)

\\ BOM - Retorna valor explícito
Rotina para que se compativelmente processe item:
  \\ ... código ...
  Decodifique $B801000000. \\ mov eax,1
  Decodifique $C3.         \\ ret
```

### ❌ Acessar Parâmetros Incorretamente

```pop
\\ RUIM - Offset errado
Decodifique $8B4504. \\ mov eax,[ebp+4] - ERRADO!

\\ BOM - Offset correto
Decodifique $8B4508. \\ mov eax,[ebp+8] - primeiro parâmetro
```

---

## Estatísticas

- **Modificador**: `compativelmente`
- **Comando de ponteiro**: `Aponte`
- **Convenção de chamada**: `stdcall`
- **Uso principal**: APIs do Windows
- **Parâmetros**: Passados na pilha
- **Retorno**: Via registrador `eax`
- **Assembly**: Frequentemente necessário
- **Crashes**: Comuns se mal implementados

---

## Resumo

### Declaração

```pop
Rotina para que se compativelmente <nome>:
  \\ Implementação com assembly
```

### Obter Ponteiro

```pop
Aponte <ponteiro> para a rotina <nome>.
```

### Usar em API

```pop
Processe "<dll>" "<função>" com
  <parâmetros> e
  <ponteiro callback>.
```

### Recomendação Geral

Callbacks são recursos avançados que requerem conhecimento de assembly x86 e convenções de chamada do Windows. Use com cuidado e sempre teste extensivamente.

---

# Processe — Chamadas Externas (API Windows)

## Visão Geral

O comando `Processe` permite chamar **funções de DLLs externas** (API Windows, bibliotecas C etc.) diretamente do código em Português Puro. É a principal forma de interagir com o sistema operacional e com bibliotecas nativas.

## 1. Chamada Externa (API Windows)

### Início
* A instrução se inicia com `Processe`.

### Obrigatório
* A instrução requer no mínimo dois parâmetros (exceto na indireta), nessa ordem:
  * O nome da dll entre aspas; e
  * O nome da função entre aspas (Sensível a caixa);

### Opcional (definidos pela API, dependem da implementação da dll e da função)
* **Argumentos**:
  * A lista de argumentos começa após `com`;
  * Os argumentos de entrada devem ser separados por `e`;
  * Cada argumento pode ter um comentário inline `[...]` após ele.
* **Retorno**:
  * O parâmetro de retorno sempre é o último argumento da instrução;
  * O parâmetro de retorno é definido escrevendo `retornando` seguido do nome do parâmetro.

### Fim
* A instrução se encerra com `.` (ponto final) após o último parâmetro.

### Componentes

| Componente      | Obrigatório | Descrição                               |
|-----------------|-------------|-----------------------------------------|
| `Processe`      | Sim         | Palavra-chave que inicia a chamada      |
| `"<dll>"`       | Sim         | Nome da DLL (ex: `"kernel32.dll"`)      |
| `"<função>"`    | Sim         | Nome da função (sensível a caixa)       |
| `com`           | Não         | Inicia a lista de argumentos            |
| `e`             | Não         | Separador entre argumentos (múltiplos)  |
| `Retornando`    | Não         | Define o variável que recebe o retorno  |
| `.`             | Sim         | Termina a instrução                     |

## 2. Tipos de Chamada

### Chamada Direta (Com Aspas)

A dll e a função são literais de string.

```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### Chamada Indireta (Sem Aspas)

A dll e a função são expressões (variáveis, ponteiros, entradas de VTable).

```pop
Processe o release deste VTable deste istream com o istream.
```

## 3. Exemplos

### Exemplo simples - sem argumentos
```pop
Processe "user32.dll" "CloseClipboard".
```

### Exemplo com retorno
```pop
Processe "kernel32.dll" "GetLastError" retornando o número.
```

### Exemplo com múltiplos argumentos
```pop
Processe "gdi32.dll" "CreateFontA" com
  A altura desta fonte vezes 3 dividido por 4 [cHeight] e
  0 [cWidth] e
  0 [cEscapement] e
  0 [cOrientation] e
  0 [cWeight] e
  0 [bItalic] e
  0 [bUnderline] e
  0 [bStrikeOut] e
  1 [iCharSet = DEFAULT_CHARSET] e
  0 [iOutPrecision] e
  0 [iClipPrecision] e
  5 [iQuality = CLEARTYPE_QUALITY] e
  4 [iPitchAndFamily = TRUETYPE_FONTTYPE] e
  O caractere inicial deste nome desta fonte [pszFaceName]
  retornando o número da fonte.
```

### Exemplo completo da biblioteca padrão
```pop
Rotina para que se crie um gpBitmap usando um trecho:
  Limpe o erro do fluxo de entrada/saída.
  
  \ exemplo com 2 argumentos (há delimitador `e` entre os argumentos) com retorno
  Processe "kernel32.dll" "GlobalAlloc" com 
    2 [uFlags GMEM_MOVEABLE] e 
    A quantidade de caracteres deste trecho [dwBytes]
    Retornando um número identificador.
    
  \ exemplo com apenas um argumento (não há delimitador `e`) com retorno 
  Processe "kernel32.dll" "GlobalLock" com
    O número identificador [hMem]  
    Retornando um ponteiro.
    
  Copie bytes desde o caractere inicial deste trecho para o ponteiro pelo quantidade de caracteres deste trecho.
  
  \ exemplo com apenas um argumento (não há delimitador `e`) sem retorno
  Processe "kernel32.dll" "GlobalUnlock" com 
    O número identificador. [hMem] 
    
  \ exemplo com 3 argumentos (há delimitador `e` entre os argumentos) sem retorno
  Processe "ole32.dll" "CreateStreamOnHGlobal" com
    O número identificador [hGlobal] e
    1 [fDeleteOnRelease = TRUE] e
    O endereçamento dum istream. [*ppstm]  
    
  \ exemplo com 2 argumentos (há delimitador `e` entre os argumentos) com retorno
  Processe "gdiplus.dll" "GdipCreateBitmapFromStream" com
    O istream [stream] e
    O endereçamento deste gpBitmap [**bitmap] 
    Retornando um número.
    
  Se o número não for 0,
    Atribua "Não sei como processar este tipo de imagem." ao erro do fluxo de entrada/saída;
    Escreva o erro do fluxo de entrada/saída junto com o texto CRLF para StdOut;
    Esvazie o gpBitmap.
    
  \ Exemplo de chamada indireta (não usa aspas)
  Processe o release deste VTable deste istream com o istream. 
```

## 4. Argumentos

O separador `e` é obrigatório quando há dois ou mais argumentos e é omitido quando há apenas um.

```pop
\\ Um argumento (sem `e`)
Processe "kernel32.dll" "GlobalLock" com
  O número identificador [hMem]
  Retornando um ponteiro.

\\ Dois argumentos (com `e`)
Processe "kernel32.dll" "GlobalAlloc" com
  2 [uFlags GMEM_MOVEABLE] e
  A quantidade de caracteres deste trecho [dwBytes]
  Retornando um número identificador.

\\ Três argumentos
Processe "ole32.dll" "CreateStreamOnHGlobal" com
  O número identificador [hGlobal] e
  1 [fDeleteOnRelease = TRUE] e
  O endereçamento dum istream [*ppstm]
```

Os comentários inline `[...]` vêm depois de cada argumento e servem para documentar o parâmetro correspondente da API.

## 5. Retorno

```pop
Retornando <variável>.
```

```pop
\\ Retorno simples
Processe "kernel32.dll" "GetLastError" retornando o código de erro.

\\ Retorno com tipo
Processe "user32.dll" "GetKeyState" com a tecla retornando um word.

\\ Retorno de ponteiro
Processe "kernel32.dll" "HeapAlloc" com
  O endereço heap e
  8 e
  A quantidade de bytes
  Retornando o ponteiro.
```

Se `Retornando` for omitido, o valor de retorno da função é descartado.

## 6. Tratamento de Erros

### Verificação Pós-Chamada

```pop
Processe "gdiplus.dll" "GdipCreateBitmapFromStream" com
  O istream [stream] e
  O endereçamento deste gpBitmap [**bitmap] 
  Retornando um número.

Se o número não for 0,
  Atribua "Erro ao criar bitmap." ao erro;
  Escreva o erro junto com o texto CRLF para StdOut;
  Esvazie o gpBitmap.
```

### GetLastError

```pop
Processe "kernel32.dll" "GetLastError" retornando o código de erro.
Se o código de erro não for 0,
  Converta o código de erro para uma mensagem;
  Escreva "Erro: " junto com a mensagem para StdErr.
```

## Observações Importantes

1. **Chamada Indireta**: Quando não usa aspas, a dll e função são expressões (ex: `o release deste VTable deste istream`)
2. **Argumento Único**: Quando há apenas um argumento, não há delimitador `e`
3. **Múltiplos Argumentos**: Separados por `e`
4. **Comentários Inline**: Podem aparecer após cada argumento entre `[...]`
5. **Sensibilidade a caixa**: O nome da função entre aspas distingue maiúsculas de minúsculas
6. **Tipos de Argumentos**: Devem corresponder à assinatura da API (ponteiros, números, words etc.)
7. **Retorno**: Opcional; se omitido, o valor de retorno é ignorado
8. **Convenção de chamada**: stdcall (padrão da API Windows), em que a ordem dos argumentos é invertida e os tipos simples são passados por valor

## Boas Práticas

1. **Sempre verifique o retorno**: as APIs Windows retornam 0/NULL em caso de falha.
2. **Use comentários `[...]`**: documente cada parâmetro conforme a documentação da API.
3. **`GetLastError` imediato**: chame logo após a falha, pois outras chamadas podem sobrescrever o código de erro.
4. **Tipos corretos**: use `um ponteiro`, `um número`, `um word` etc. conforme a assinatura.
5. **Constantes**: passe flags como valores numéricos ou hexadecimais (`8`, `$00000008`).
6. **Ponteiros de saída**: use `O endereçamento dum <tipo>` para parâmetros de saída.
7. **Strings**: passe `O caractere inicial desta string` para `LPSTR`/`LPCSTR`.
8. **Estruturas**: passe os campos individualmente ou use `Decodifique` para assembly inline.
9. **Limpeza**: libere recursos (handles, memória) após o uso.
10. **Teste em isolamento**: verifique cada chamada separadamente.

## DLLs Comuns

| DLL            | Uso Comum                               |
|----------------|-----------------------------------------|
| `kernel32.dll` | Memória, processos, threads, arquivos   |
| `user32.dll`   | Janelas, mensagens, input, clipboard    |
| `gdi32.dll`    | Gráficos 2D, fontes, bitmaps            |
| `gdiplus.dll`  | Gráficos avançados (GDI+)               |
| `ole32.dll`    | COM, streams, armazenamento estruturado |
| `shell32.dll`  | Shell, arquivos, pastas, atalhos        |
| `advapi32.dll` | Registro, segurança, serviços           |
| `ws2_32.dll`   | Sockets (Winsock)                       |
| `winmm.dll`    | Multimídia, timers                      |
| `comctl32.dll` | Controles comuns                        |

---

# Instruções de Máquina

## Visão Geral

O comando `Decodifique` permite incluir **código de máquina (assembly x86)** diretamente no código Português Puro. É usado para operações de baixo nível, otimizações, callbacks e interoperabilidade com APIs que exigem convenções específicas.

---

## Sintaxe

### Básica

```pop
Decodifique $<hexadecimal>.
```

### Com Comentário

```pop
Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
```

---

## Características

- **Prefixo obrigatório**: `$`
- **Formato**: Hexadecimal (bytes da instrução x86)
- **Comentários**: Use `\` após o ponto para explicar a instrução
- **Case-insensitive**: `$8b85...` equivale a `$8B85...`
- **Múltiplas instruções**: Cada `Decodifique` contém uma instrução (ou sequência)

---

## Exemplos Básicos

### Zerar Ponteiro

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \ mov [eax],0 - zera o ponteiro
```

### Comparação de Bytes

```pop
Função para que se determine se um byte é maior que um segundo byte:
  Decodifique $C7C001000000. \ mov eax,1 - assume true
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B.         \ mov bl,[ebx]
  Decodifique $8B8D0C000000. \ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19.         \ cmp bl,[ecx]
  Decodifique $0F8206000000. \ jb sobre o próximo 1 statement
  Decodifique $C7C000000000. \ mov eax,0 - now it is false
```

---

## Uso em Rotinas

### Exemplo: Esvaziar Ponteiro

```pop
Rotina para que se esvazie um ponteiro:
  Decodifique $8B8508000000. \ mov eax,[ebp+8] - salva o ponteiro
  Decodifique $C70000000000. \ mov [eax],0 - zera o ponteiro
```

**Chamada:**
```pop
Esvazie o ponteiro.
```

---

## Uso em Funções

### Exemplo: Comparação de Bytes

```pop
Função para que se determine se um byte é maior ou igual a um segundo byte:
  Decodifique $C7C001000000. \ mov eax,1 - assume true
  Decodifique $8B9D08000000. \ mov ebx,[ebp+8] - o byte
  Decodifique $8A1B.         \ mov bl,[ebx]
  Decodifique $8B8D0C000000. \ mov ecx,[ebp+12] - o segundo byte
  Decodifique $3A19.         \ cmp bl,[ecx]
  Decodifique $0F8306000000. \ ja sobre o próximo 1 statement
  Decodifique $C7C000000000. \ mov eax,0 - now it is false
```

---

## Uso em Callbacks

Callbacks **frequentemente requerem assembly** para:
- Acessar parâmetros da pilha (`[ebp+offset]`)
- Retornar valores via registrador `eax`
- Manipular ponteiros e estruturas
- Controlar fluxo de retorno

### Exemplo: Window Procedure

```pop
Rotina para que se compativelmente manipule um evento:
  \ Parâmetros: hwnd, msg, wParam, lParam
  \ Estes são passados automaticamente pelo Windows
  
  \ Obter mensagem
  Decodifique $8B4D0C. \ mov ecx,[ebp+12] - pega msg
  
  \ Verificar se é WM_DESTROY (0x0002)
  Decodifique $83F902. \ cmp ecx,2
  Decodifique $7508.   \ jne +8
  
  \ Se for WM_DESTROY, chamar PostQuitMessage(0)
  Processe "user32.dll" "PostQuitMessage" com 0.
  Decodifique $33C0.   \ xor eax,eax - retornar 0
  Decodifique $C3.     \ ret
  
  \ Caso contrário, chamar DefWindowProc
  Decodifique $FF7514. \ push [ebp+20] - lParam
  Decodifique $FF7510. \ push [ebp+16] - wParam
  Decodifique $FF750C. \ push [ebp+12] - msg
  Decodifique $FF7508. \ push [ebp+8]  - hwnd
  Processe "user32.dll" "DefWindowProcA" retornando um resultado.
  Decodifique $C3.     \ ret
```

### Exemplo: Retorno de Valores

```pop
\ Retornar 0
Decodifique $33C0. \ xor eax,eax
Decodifique $C3.   \ ret

\ Retornar 1
Decodifique $B801000000. \ mov eax,1
Decodifique $C3.         \ ret

\ Retornar valor específico
Decodifique $B8<valor>. \ mov eax,<valor>
Decodifique $C3.        \ ret
```

---

## Acesso a Parâmetros (Convencão stdcall)

Parâmetros são acessados via offsets do registrador `ebp`:

| Parâmetro | Offset | Assembly |
|-----------|--------|----------|
| 1º        | `+8`   | `mov eax,[ebp+8]`  (`$8B4508`) |
| 2º        | `+12`  | `mov ecx,[ebp+12]` (`$8B4D0C`) |
| 3º        | `+16`  | `mov edx,[ebp+16]` (`$8B5510`) |
| 4º        | `+20`  | `mov ebx,[ebp+20]` (`$8B5D14`) |

### Exemplos de Acesso

```pop
\ 1º parâmetro
Decodifique $8B4508. \ mov eax,[ebp+8]

\ 2º parâmetro
Decodifique $8B4D0C. \ mov ecx,[ebp+12]

\ 3º parâmetro
Decodifique $8B5510. \ mov edx,[ebp+16]

\ 4º parâmetro
Decodifique $8B5D14. \ mov ebx,[ebp+20]
```

---

## Instruções Comuns (Referência Rápida)

| Assembly | Hex (Little Endian) | Descrição |
|----------|---------------------|-----------|
| `mov eax, [ebp+8]` | `$8B4508` | Carrega 1º parâmetro |
| `mov ecx, [ebp+12]` | `$8B4D0C` | Carrega 2º parâmetro |
| `mov edx, [ebp+16]` | `$8B5510` | Carrega 3º parâmetro |
| `mov ebx, [ebp+20]` | `$8B5D14` | Carrega 4º parâmetro |
| `mov eax, 1` | `$B801000000` | Retorna true (1) |
| `xor eax, eax` | `$33C0` | Retorna false (0) |
| `ret` | `$C3` | Retorno da função |
| `cmp ecx, 2` | `$83F902` | Compara com 2 |
| `jne +8` | `$7508` | Pula se não igual |
| `jb +6` | `$7206` | Pula se abaixo (unsigned) |
| `ja +6` | `$7706` | Pula se acima (unsigned) |
| `push [ebp+20]` | `$FF7514` | Push lParam |
| `push [ebp+16]` | `$FF7510` | Push wParam |
| `push [ebp+12]` | `$FF750C` | Push msg |
| `push [ebp+8]` | `$FF7508` | Push hwnd |
| `mov [eax], 0` | `$C70000000000` | Zera ponteiro |

---

## Observações Importantes

1. **Arquitetura**: x86 (32-bit) - little endian
2. **Convenção**: `stdcall` para callbacks (`compativelmente`), `cdecl` para rotinas normais
3. **Registradores**: `eax`, `ecx`, `edx`, `ebx` são voláteis (caller-saved)
3. **Pilha**: Alinhada a 4 bytes; parâmetros em `[ebp+8]`, `[ebp+12]`, etc.
4. **Retorno**: Valor inteiro em `eax`; ponteiros também em `eax`
5. **Limpeza**: `stdcall` = função limpa pilha; `cdecl` = chamador limpa
6. **Segurança**: Assembly mal escrito causa crashes; teste extensivamente
7. **Portabilidade**: Código assembly não é portável entre arquiteturas
8. **Debugging**: Use debugger para verificar instruções
9. **Comentários**: **Sempre** documente cada `Decodifique` com `\`
10. **Alternativas**: Prefira comandos nativos quando possível

---

## Boas Práticas

1. **Documente Sempre**: Cada `Decodifique` deve ter comentário `\` explicando
2. **Use com Moderação**: Prefira comandos nativos (`Atribua`, `Se`, `Processe`)
3. **Teste Isoladamente**: Verifique cada bloco assembly separadamente
4. **Valide Registradores**: Preserve `ebx`, `esi`, `edi`, `ebp` se necessário
5. **Alinhamento**: Garanta alinhamento de pilha (4 bytes)
6. **Retorno Explícito**: Sempre retorne valor em `eax` para callbacks
7. **Evite Saltos Longos**: Prefira lógica em Português Puro
8. **Verifique Offsets**: Parâmetros em `[ebp+8]`, `[ebp+12]`, etc.
9. **Use Constantes**: Defina valores mágicos como hexadecimais nomeados
10. **Assembly Mínimo**: Apenas o estritamente necessário

---

## Erros Comuns

### ❌ Offset Errado

```pop
\ RUIM - Acessa endereço errado
Decodifique $8B4504. \ mov eax,[ebp+4] - ERRADO!

\ BOM - Offset correto para 1º parâmetro
Decodifique $8B4508. \ mov eax,[ebp+8] - primeiro parâmetro
```

### ❌ Esquecer `ret`

```pop
\ RUIM - Falta retorno
Decodifique $B801000000. \ mov eax,1

\ BOM - Com retorno
Decodifique $B801000000. \ mov eax,1
Decodifique $C3.         \ ret
```

### ❌ Convenção Errada

```pop
\ RUIM - Callback sem compativelmente (usa cdecl)
Rotina para que se manipule evento:
  Decodifique $C3. \ ret

\ BOM - Callback com stdcall
Rotina para que se compativelmente manipule evento:
  Decodifique $C3. \ ret
```

### ❌ Não Preservar Registradores

```pop
\ RUIM - Corrompe registradores salvos
Decodifique $53. \ push ebx
\ ... usa ebx ...
Decodifique $5B. \ pop ebx

\ BOM - Preserva registradores não-voláteis
```

---

## Exemplos Completos

### Comparação de Frações (Assembly Otimizado)

```pop
Função para que se determine se uma fração é uma segunda fração:
  Preserve a fração.
  Preserve a segunda fração.
  Normalize a fração e a segunda fração.
  Se o numerador desta fração é o numerador desta segunda fração, diga sim.
  Diga não.
```
*Nota: Esta versão usa rotinas nativas; versão assembly acessaria numeradores/denominadores diretamente.*

---

### Manipulação de Bits

```pop
Rotina para que se defina bit:
  \ Parâmetros: ponteiro para byte, índice do bit (0-7)
  Decodifique $8B4508.       \ mov eax,[ebp+8] - ponteiro
  Decodifique $8B4D0C.       \ mov ecx,[ebp+12] - índice
  Decodifique $B301.         \ mov bl,1
  Decodifique $D2E3.         \ shl bl,cl - cria máscara
  Decodifique $0818.         \ or [eax],bl - define bit
  Decodifique $C3.           \ ret
```

---

## Estatísticas

- **Comando**: `Decodifique`
- **Formato**: Hexadecimal prefixado com `$`
- **Arquitetura**: x86 32-bit (little endian)
- **Convenções**: `cdecl` (padrão), `stdcall` (`compativelmente`)
- **Registradores de retorno**: `eax` (inteiro/ponteiro)
- **Parâmetros**: Pilha (`[ebp+8]`, `[ebp+12]`, `[ebp+16]`, `[ebp+20]`)
- **Uso principal**: Callbacks, otimizações, interoperabilidade
- **Risco**: Alto (crashes, não-portabilidade)
- **Alternativa**: Comandos nativos, `Processe`

---

# Subtextos e Percorredores

## Visão Geral

Subtextos e percorredores são mecanismos para **navegar e manipular strings** caractere por caractere em `Português Puro`. O comando `Lance` cria um subtexto (substring) ou percorredor sobre uma string, permitindo iteração e acesso a caracteres individuais.

---

## Comando `Lance`

### Sintaxe Básica

```pop
Lance um subtexto sobre <string>.
Lance um percorredor sobre <string>.
```

### Função

Cria uma **visão** sobre uma string existente que permite:
- Acessar o caractere inicial (`caractere inicial deste subtexto`)
- Avançar para o próximo caractere (`Adicione 1 para o caractere inicial deste subtexto`)
- Verificar se chegou ao fim (`Se o subtexto estiver em branco`)

---

## Estrutura do Subtexto

Um subtexto possui os seguintes componentes acessíveis via possessivos:

| Componente | Acesso | Descrição |
|------------|--------|-----------|
| Caractere inicial | `o caractere inicial deste subtexto` | Primeiro caractere do subtexto |
| Conteúdo do caractere | `o conteúdo deste caractere inicial deste subtexto` | Valor do caractere (byte) |
| Subtexto restante | (implícito ao avançar) | Resto da string após o caractere inicial |

---

## Iteração sobre Strings

### Padrão Básico

```pop
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  \\ Processa o caractere inicial deste subtexto
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### Exemplo Completo: Contar Vogais

```pop
Rotina para que se conte vogais em uma string:
  Atribua 0 para uma contagem.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Adicione 1 para a contagem.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com a contagem no console.
```

---

## Acesso a Caracteres

### Obter Valor do Caractere

```pop
\\ O conteúdo deste caractere inicial deste subtexto
Atribua o conteúdo deste caractere inicial deste subtexto para um byte.
```

### Comparar Caractere

```pop
Se o conteúdo deste caractere inicial deste subtexto for "A",
  \\ É a letra A

Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
  \\ É espaço

Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
  \\ É vogal (a, e, i, o, u, A, E, I, O, U)
```

### Verificar Fim da String

```pop
Se o subtexto estiver em branco, pare.
\\ Ou equivalentemente:
Se o caractere inicial deste subtexto estiver em branco, pare.
```

---

## Exemplos Práticos

### 1. Inverter String

```pop
Rotina para que se inverta uma string:
  Preserve a string.
  Limpe a string original.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### 2. Processar Linha por Linha

```pop
Rotina para que se processe linhas:
  Lance um subtexto sobre o texto.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for o caractere de nova linha,
      \\ Fim da linha - processa linha acumulada
      Processe a linha atual.
      Limpe a linha atual.
    Senão,
      Acrescente o conteúdo deste caractere inicial deste subtexto para a linha atual.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### 3. Buscar Substring

```pop
Rotina para que se encontre substring:
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, retorne não.
    Se o conteúdo deste caractere inicial deste subtexto for o primeiro caractere da busca,
      \\ Verifica se os próximos caracteres batem
      Se a substring coincide a partir daqui, retorne sim.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### 4. Remover Caracteres

```pop
Rotina para que se remova espaços extras:
  Atribua "" para uma string resultado.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto não for o caractere de espaço,
      Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Atribua o resultado para a string.
```

---

## Percorredor vs Subtexto

| Aspecto | Subtexto | Percorredor |
|---------|----------|-------------|
| Sintaxe | `Lance um subtexto sobre` | `Lance um percorredor sobre` |
| Comportamento | Igual | Igual (sinônimo) |
| Uso | Preferido | Alternativo |

**Nota:** `subtexto` e `percorredor` são tratados como sinônimos pelo compilador.

---

## Características Importantes

1. **Não Modifica Original**: O subtexto é uma visão; a string original não é alterada
2. **Avanço Manual**: Use `Adicione 1 para o caractere inicial deste subtexto` para avançar
3. **Fim da String**: Detectado por `Se o subtexto estiver em branco`
4. **Caractere Atual**: Acessado via `o conteúdo deste caractere inicial deste subtexto`
5. **Compatível com Laços**: Projetado para uso dentro de `Itere`/`Reitere`
6. **Case-Sensitive**: Comparações de caracteres distinguem maiúsculas/minúsculas

---

## Variáveis Auxiliares Comuns

```pop
\\ Para acumular resultado
Atribua "" para uma string resultado.

\\ Para contar
Atribua 0 para um contador.

\\ Para guardar caractere atual
Atribua o conteúdo deste caractere inicial deste subtexto para um caractere atual.
```

---

## Observações Importantes

1. **Sempre Inicialize**: Use `Lance` antes de iterar
2. **Sempre Avance**: Esquecer `Adicione 1` causa loop infinito
3. **Verifique Fim**: Sempre teste `Se o subtexto estiver em branco` no início do laço
4. **Não Modifica Original**: A string original permanece intacta
5. **Use `Preserve`**: Se precisar modificar a string original enquanto itera
6. **Bytes Ignoráveis**: Caracteres como `#`, `&`, `_`, `-`, `+`, `/`, `£` podem aparecer em nomes

---

## Boas Práticas

1. **Estrutura Padrão**: Sempre use o padrão `Lance` → `Itere` → `Se vazio pare` → `Processa` → `Avança` → `Reitere`
2. **Nomes Descritivos**: Use nomes claros para variáveis de controle
3. **Comentários**: Documente o que cada iteração faz
4. **Validação**: Verifique string não vazia antes de `Lance`
5. **Performance**: Para strings muito grandes, considere processar em blocos
6. **Limpeza**: Variáveis de subtexto persistem no escopo da rotina

---

## Erros Comuns

### ❌ Esquecer de Avançar

```pop
\\ RUIM - Loop infinito
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  \\ FALTA: Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### ❌ Não Verificar Fim

```pop
\\ RUIM - Acessa além do fim
Lance um subtexto sobre a string.
Itere.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### ❌ Modificar String Original Durante Iteração

```pop
\\ RUIM - Comportamento indefinido
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Remova o caractere inicial deste subtexto da string. \\ Modifica original!
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM - Use Preserve ou string auxiliar
Preserve a string.
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

---

## Exemplos Avançados

### Parser Simples

```pop
Rotina para que se parseie números em uma string:
  Atribua 0 para um número atual.
  Atribua não para um em número.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco,
      Se o em número, processe o número atual.
      Pare.
    Se o conteúdo deste caractere inicial deste subtexto for um dígito,
      Multiplique o número atual por 10.
      Adicione o conteúdo deste caractere inicial deste subtexto menos '0' ao número atual.
      Atribua sim ao em número.
    Senão,
      Se o em número,
        Processe o número atual.
        Atribua 0 para o número atual.
        Atribua não ao em número.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### Tokenizador

```pop
Rotina para que se tokenize string:
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
      \\ Pula espaços
      Adicione 1 para o caractere inicial deste subtexto.
      Reitere.
    \\ Início de token
    Atribua "" para um token.
    Itere.
      Se o subtexto estiver em branco, pare.
      Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
        Pare. \\ Fim do token
      Acrescente o conteúdo deste caractere inicial deste subtexto para o token.
      Adicione 1 para o caractere inicial deste subtexto.
    Reitere.
    Processa o token.
  Reitere.
```

---

## Estatísticas

- **Comando principal**: `Lance`
- **Tipos**: `subtexto`, `percorredor` (sinônimos)
- **Avanço**: `Adicione 1 para o caractere inicial deste subtexto`
- **Fim**: `Se o subtexto estiver em branco`
- **Acesso a caractere**: `o conteúdo deste caractere inicial deste subtexto`
- **Uso típico**: Dentro de laços `Itere`/`Reitere`
- **Não modifica**: String original

---

# Índice de Elementos Léxicos - Português Puro
## Controle de Progresso das Definições

Este arquivo consolida informações do índice de funções léxicas que ainda não foram formalmente documentadas nas regras estruturadas.
- [Índice de Elementos Léxicos - Português Puro](#índice-de-elementos-léxicos---português-puro)
  - [Controle de Progresso das Definições](#controle-de-progresso-das-definições)
  - [✅ Já Documentado em Regras Estruturadas](#-já-documentado-em-regras-estruturadas)
  - [📝 Pendente de Documentação Estruturada](#-pendente-de-documentação-estruturada)
    - [1. Detalhes de Implementação e Compilador](#1-detalhes-de-implementação-e-compilador)
    - [2. Elementos Específicos](#2-elementos-específicos)
  - [🔄 Divergências Identificadas](#-divergências-identificadas)
    - [✅ RESOLVIDO: Pronomes Demonstrativos como Artigos Indefinidos](#-resolvido-pronomes-demonstrativos-como-artigos-indefinidos)
  - [📊 Estatísticas de Progresso](#-estatísticas-de-progresso)
    - [Arquivos de Documentação Criados](#arquivos-de-documentação-criados)
  - [🎯 Próximos Passos Sugeridos](#-próximos-passos-sugeridos)
    - [Alta Prioridade](#alta-prioridade)
    - [Média Prioridade](#média-prioridade)
    - [Baixa Prioridade](#baixa-prioridade)

---

## ✅ Já Documentado em Regras Estruturadas

- **Artigos** (definidos e indefinidos) → [Artigos.md](Artigos.md) ✅
- **Pronomes** (demonstrativos, possessivos, relativos) → [Pronomes.md](Pronomes.md) ✅
- **Tipos** (definição, estruturas, listas, ponteiros, escalares) → [Tipos.md](Tipos.md) ✅
- **Variáveis Globais** (declaração) → [Variáveis Globais.md](<Variáveis Globais.md>) ✅
- **Variáveis Locais** (escopo, parâmetros) → [Variáveis Locais.md](<Variáveis Locais.md>) ✅
- **Strings Literais** (escape, inclusão) → [Strings Literais.md](<Strings Literais.md>) ✅
- **Possessivos** (acesso a membros, abrangentes) → [Possessivos.md](Possessivos.md) ✅
- **Campos Calculados** (virtuais) → [Campos Calculados.md](<Campos Calculados.md>) ✅
- **Chamada Externa** (`Processe`) → [Processe.md](Processe.md) ✅
- **Preposições** (categorias, contrações) → [Preposições.md](<Preposições.md>) ✅
- **Operadores** (aritméticos, lógicos, comparação) → [Operadores.md](Operadores.md) ✅
- **Expressões** (avaliação, concatenação, precedência) → [Expressões.md](Expressões.md) ✅
- **Instruções** (atribuição, I/O, memória) → [Instruções.md](Instruções.md) ✅
- **Condicionais** (`Se`, `Quando`) → [Condicionais.md](Condicionais.md) ✅
- **Laços** (`Itere`, `Reitere`, `Pare`) → [Laços.md](Laços.md) ✅
- **Funções e Rotinas** (declaração, retorno) → [Funções.md](Funções.md), [Rotinas.md](Rotinas.md) ✅
- **Verbos** (lista e uso) → [Verbos.md](Verbos.md) ✅
- **Palavras-Chave** (designação, complementação, referenciamento) → [Palavras-Chave.md](<Palavras-Chave.md>) ✅
- **Valores Literais** (numéricos, booleanos, nulos) → [Valores Literais.md](<Valores Literais.md>) ✅
- **Conjunções** (`e`, `ou`, `nem`) → [Conjunções.md](Conjunções.md) ✅
- **Advérbios** (`não`, `já`, `ainda`) → [Advérbios.md](Advérbios.md) ✅
- **Qualificadores** (`(ref)`, documentais) → [Qualificadores.md](Qualificadores.md) ✅
- **Comentários** (linha, bloco/observações) → [Comentários.md](Comentários.md) ✅
- **Símbolos** (pontuação, caracteres permitidos) → [Símbolos.md](Símbolos.md) ✅
- **Casting** (`like`, `as`) → [Tipos.md](Tipos.md) ✅
- **Bytes Ignoráveis** (em identificadores) → [Símbolos.md](Símbolos.md) ✅

---

## 📝 Pendente de Documentação Estruturada

### 1. Detalhes de Implementação e Compilador

- **Indicadores de Início/Fim de Variável**: Regras léxicas precisas para parsing
- **Análise de Termos Compostos**: Expansão de termos e decomposição
- **Unidades de Medida**: Conversão automática entre unidades escalares (mencionado em Tipos, mas detalhar regras)
- **Vogais Acentuadas**: Regras de normalização e pluralização

### 2. Elementos Específicos

- **Termos de Equivalência**: `a`, `para` (após `igual`)
- **Pausas**: Uso de `,`, `;` como separadores de campos (detalhar regras de parsing)
- **Funções Possessivas Reversas**: Sintaxe `o valor de este campo`
- **Objeto Indireto**: `via`, `por`
- **Palavras de Concatenação**: `com`, `de`, `a`, `seguida` (revisar se coberto em Expressões)

---

## 🔄 Divergências Identificadas

### ✅ RESOLVIDO: Pronomes Demonstrativos como Artigos Indefinidos

**Fonte**: Índice de Funções Léxicas
- Pronomes demonstrativos **abrangentes** são considerados artigos indefinidos

**Status**: ✅ Documentado em `Artigos.md` e `Pronomes.md`
- Pronomes adjacentes (`este`, `esta`) = Artigos definidos
- Pronomes abrangentes (`esse`, `aquele`, `certo`, `determinado`) = Artigos indefinidos

---

## 📊 Estatísticas de Progresso

- **Total de categorias léxicas identificadas**: ~30
- **Categorias documentadas estruturadamente**: 24
- **Categorias pendentes**: ~6 (detalhes menores)
- **Progresso estimado**: 80%

### Arquivos de Documentação Criados

Lista completa de arquivos na pasta `Regras`:
1. `Advérbios.md`
2. `Artigos.md`
3. `Callbacks.md`
4. `Campos Calculados.md`
5. `Comentários.md`
6. `Condicionais.md`
7. `Conjunções.md`
8. `Expressões.md`
9. `Funções.md`
10. `Instruções.md`
11. `Laços.md`
12. `Operadores.md`
13. `Palavras-Chave.md`
14. `Possessivos.md`
15. `Preposições.md`
16. `Processe.md`
17. `Pronomes.md`
18. `Qualificadores.md`
19. `Rotinas.md`
20. `Strings Literais.md`
21. `Símbolos.md`
22. `Tipos.md`
23. `Valores Literais.md`
24. `Variáveis Globais.md`
25. `Variáveis Locais.md`
26. `Verbos.md`

**Total de arquivos**: 26

---

## 🎯 Próximos Passos Sugeridos

### Baixa Prioridade
1. ⏳ Otimizações do Compilador
2. ⏳ Detalhes de implementação (Análise de Termos Compostos)