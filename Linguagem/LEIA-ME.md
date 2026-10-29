# Linguagem de Programação Português Puro: Guia Completo do Usuário

Bem-vindo à documentação introdutória completa do usuário para a linguagem de programação **Português Puro**. Este guia é organizado em módulos de tópicos dedicados no diretório [`Linguagem/`](.) .

---

## Módulos da Documentação

| # | Módulo do Guia | Tópicos Principais Cobertos |
| :---: | :--- | :--- |
| **01** | [Introdução ao Português Puro](./01_INTRODUÇÃO.md) | Filosofia de design, programação em prosa natural portuguesa, compilador auto-hospedado, Olá Mundo. |
| **02** | [Sintaxe, Regras e Convenções](./02_SYNTAXE_E_REGRAS.md) | Pontos, dois-pontos, observações (`[...]`), comentários de linha única (`\`), artigos definidos vs indefinidos, possessivos (`'s`), literais, e insensibilidade a maiúsculas/minúsculas. |
| **03** | [Sistema de Tipos & Estruturas de Dados](./03_TIPOS.md) | Estruturas personalizadas, unidades de medida escaladas, listas duplamente encadeadas automáticas (`listas`), uniões/redefinições de campos, e ponteiros. |
| **04** | [Rotinas, Funções e Funções Deliberativas](./04_ROTINAS_E_FUNÇÕES.md) | Procedimentos em forma de frase, funções deliberativas (`Função para que se determine se...`), retorno de funções, sinônimos de preposições, e callbacks Win32 (`compativelmente`). |
| **05** | [Controle de Fluxo, Condicionais & Laços](./05_CONTROLE_DE_FLUXO.md) | Condições `Se`, `Itere ... Reitere`, iterando através de coleções encadeadas (`listas`) e strings, `pare`, `reitere`, e cláusulas de guarda. |
| **06** | [Gerenciamento de Memória, Strings & Buffers](./06_MEMÓRIA_E_STRINGS.md) | Síntese automática de ciclo de vida RAII (`Aloque`/`Desaloque`/`~Finalize`), isolamento de parâmetros via `Preserve`, strings de dois ponteiros, substrings, e o cursor de texto `percorredor`. |
| **07** | [Biblioteca Padrão, Gráficos & Interop Win32](./07_BIBLIOTECA_PADRÃO_E_INTEROPERABILIDADE.md) | Desenho 2D (`local`, `caixa`, `twip`), espaço de cor HSL, geometria de tartaruga, E/S de arquivo, chamada direta de DLL Windows (`kernel32`, `user32`), e assembly inline (`Decodifique $...`). |

---

## Exemplo Rápido: Criando e Processando Dados

```pop
Um aluno é uma lista com
  Uma string denominada nome,
  Um número denominado nota.

Os alunos são uns alunos.

Rotina para que se matricule um aluno dado um nome e uma nota:
  Aloque memória para o aluno.
  Atribua o nome para o nome deste aluno.
  Atribua a nota para a nota deste aluno.
  Anexe o aluno para os alunos.

Rotina para que se execute o programa:
  Inicialize os componentes.
  Matricule um aluno dado "Alice" e 95.
  Matricule um aluno dado "Bob" e 82.
  Matricule um aluno dado "Carlos" e 90.
  Escreva "--- Alunos da Lista de Honra ---" no console.
  Itere.
    Obtenha um aluno dos alunos.
    Se o aluno for inexistente, pare.
    Se a nota deste aluno for maior do que ou igual a 90,
      Escreva o nome deste aluno então " - Nota: " então a nota deste aluno no console.
  Reitere.
  Aguarde a tecla enter.
  Feche o programa.
```