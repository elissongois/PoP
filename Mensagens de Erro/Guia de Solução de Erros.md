# Guia de Solução de Erros

Este guia tem como objetivo auxiliar na identificação e correção dos erros emitidos pelo compilador. Abaixo, você encontrará uma lista dos códigos de erro, suas possíveis causas e sugestões de solução, com links para a documentação oficial quando aplicável.

## Sumário de Tópicos

- [Guia de Solução de Erros](#guia-de-solução-de-erros)
  - [Dicas Gerais](#dicas-gerais)
    - [Erros Internos](#erros-internos)
    - [Erros de Sintaxe e Posicionamento](#erros-de-sintaxe-e-posicionamento)
  - [Referência de Erros](#referência-de-erros)
    - [Ambiente e Arquivos (#001 - #003)](#ambiente-e-arquivos-001---003)
    - [Sintaxe Básica e Comentários (#004 - #006)](#sintaxe-básica-e-comentários-004---006)
    - [Strings e Qualificadores (#007 - #010)](#strings-e-qualificadores-007---010)
    - [Variáveis e Tipos (#011 - #023)](#variáveis-e-tipos-011---023)
    - [Ponteiros e Variáveis Globais (#024 - #032)](#ponteiros-e-variáveis-globais-024---032)
    - [Rotinas e Estruturas (#033 - #046)](#rotinas-e-estruturas-033---046)
    - [Variáveis Globais e Inicialização (#047 - #056)](#variáveis-globais-e-inicialização-047---056)
    - [Definição de Rotinas (#057 - #072)](#definição-de-rotinas-057---072)
    - [Estruturas e Chamadas (#073 - #082)](#estruturas-e-chamadas-073---082)
    - [Pontuação e Comandos (#083 - #108)](#pontuação-e-comandos-083---108)
    - [Parâmetros e Operações Matemáticas (#109 - #130)](#parâmetros-e-operações-matemáticas-109---130)
    - [Condicionais e Funções (#131 - #139)](#condicionais-e-funções-131---139)
    - [Pilha e Expressões (#140 - #151)](#pilha-e-expressões-140---151)
    - [Ponteiros e Sintaxe Avançada (#152 - #170)](#ponteiros-e-sintaxe-avançada-152---170)
    - [Erros Internos e Diversos (#171 - #194)](#erros-internos-e-diversos-171---194)
    - [Índice de Erros](#índice-de-erros)

## Dicas Gerais

### Erros Internos

Erros marcados como "Erro Interno" ou que mencionam falhas na compilação do próprio compilador geralmente indicam que a versão do compilador que você está usando pode ter sido gerada com problemas ou há uma incompatibilidade inesperada.
**Solução:** Tente utilizar uma versão estável do compilador ou baixe a versão mais recente.

### Erros de Sintaxe e Posicionamento

Muitos erros ocorrem devido ao posicionamento incorreto de caracteres ou falta de pontuação. O compilador espera uma estrutura rígida em alguns casos.
**Solução:** Consulte a seção de [Símbolos](../Regras/Símbolos.md "Símbolos") e [Instruções](../Regras/Instruções.md "Instruções") para verificar a sintaxe correta.

---

## Referência de Erros

### Ambiente e Arquivos (#001 - #003)

| Código   | Descrição                        | Solução                                                           |
|:---------|:---------------------------------|:------------------------------------------------------------------|
| **#001** | Falha no CodePage do Console.    | Verifique se o terminal suporta a codificação e se há permissões. |
| **#002** | Diretório não encontrado.        | Confirme se o caminho da pasta existe.                            |
| **#003** | Falha ao carregar arquivo fonte. | Verifique o caminho do arquivo e permissões de leitura.           |

### Sintaxe Básica e Comentários (#004 - #006)

| Código   | Descrição                  | Solução                              | Documentação                                          |
|:---------|:---------------------------|:-------------------------------------|:------------------------------------------------------|
| **#004** | Sintaxe não reconhecida.   | Verifique a grafia do comando.       | [Instruções](../Regras/Instruções.md "Instruções")    |
| **#005** | Observação não finalizada. | Insira `]` para fechar o comentário. | [Comentários](../Regras/Comentários.md "Comentários") |
| **#006** | Observação mal formada.    | Inicie com `[`.                      | [Comentários](../Regras/Comentários.md "Comentários") |

### Strings e Qualificadores (#007 - #010)

| Código   | Descrição                    | Solução                | Documentação                                                           |
|:---------|:-----------------------------|:-----------------------|:-----------------------------------------------------------------------|****
| **#007** | String sem aspas finais.     | Adicione `"` no final. | [Strings Literais](<../Regras/Strings Literais.md> "Strings Literais") |
| **#008** | String sem aspas iniciais.   | Inicie com `"`.        | [Strings Literais](<../Regras/Strings Literais.md> "Strings Literais") |
| **#009** | Qualificador não finalizado. | Adicione `)` no final. | [Qualificadores](../Regras/Qualificadores.md "Qualificadores")         |
| **#010** | Qualificador mal formado.    | Inicie com `(`.        | [Qualificadores](../Regras/Qualificadores.md "Qualificadores")         |

### Variáveis e Tipos (#011 - #023)

| Código   | Descrição                   | Solução                             | Documentação                                                           |
|:---------|:----------------------------|:------------------------------------|:-----------------------------------------------------------------------|
| **#011** | Idioma não detectado.       | Verifique a declaração da variável. | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#012** | Atribuição incorreta.       | Use `é` ou `são`.                   | [Verbos](../Regras/Verbos.md "Verbos")                                 |
| **#013** | Artigo indefinido esperado. | Use `um` ou `uma`.                  | [Artigos](../Regras/Artigos.md "Artigos")                              |
| **#014** | Falta de ponto final.       | Insira `.` após o tipo.             | [Símbolos](../Regras/Símbolos.md "Símbolos")                           |
| **#015** | Variável não declarada.     | Declare a variável antes de usar.   | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#016** | Estrutura não finalizada.   | Insira `.` ao fim da estrutura.     | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#017** | Bytes inválidos.            | Use apenas números inteiros.        | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#018** | Falta 'bytes'.              | Especifique `bytes` após o número.  | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#019** | Artigo indefinido ausente.  | Insira `um` ou `uma`.               | [Artigos](../Regras/Artigos.md "Artigos")                              |
| **#020** | Artigo definido esperado.   | Use `o` ou `a`.                     | [Artigos](../Regras/Artigos.md "Artigos")                              |
| **#021** | Conflito de nomes.          | Escolha um nome único.              | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#022** | Escala zero.                | A razão de escala deve ser > 0.     | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#023** | Falta ponto em medida.      | Insira `.` após a unidade.          | [Tipos](../Regras/Tipos.md "Tipos")                                    |

### Ponteiros e Variáveis Globais (#024 - #032)

| Código   | Descrição                  | Solução                               | Documentação                                                              |
|:---------|:---------------------------|:--------------------------------------|:--------------------------------------------------------------------------|
| **#024** | Sintaxe de ponteiro.       | Use `Aponte para um/uma`.             | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#025** | Verbo de ligação.          | Use `é` ou `está`.                    | [Verbos](../Regras/Verbos.md "Verbos")                                    |
| **#026** | Declaração global aberta.  | Finalize com `.`.                     | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#027** | Falta ponto final.         | Finalize com `.`.                     | [Símbolos](../Regras/Símbolos.md "Símbolos")                              |
| **#028** | Nome global duplicado.     | Escolha outro nome.                   | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#029** | Inicialização mal formada. | Insira `.` após inicializar.          | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#030** | Falta ponto.               | Insira `.` após dados complementares. | [Símbolos](../Regras/Símbolos.md "Símbolos")                              |
| **#031** | Falta 'igual a'.           | Use `igual a` na atribuição.          | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#032** | Declaração incompleta.     | Finalize com `.`.                     | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |

### Rotinas e Estruturas (#033 - #046)

| Código   | Descrição               | Solução                             | Documentação                                          |
|:---------|:------------------------|:------------------------------------|:------------------------------------------------------|
| **#033** | Falta 'para'.           | Use `para` no comando.              | [Preposições](../Regras/Preposições.md "Preposições") |
| **#034** | Cabeçalho inválido.     | Insira `:` corretamente.            | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#035** | Sintaxe de rotina.      | Use `para` após `;`.                | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#036** | Posição de ':'.         | Mova `:` para o final do cabeçalho. | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#037** | Tipo base inválido.     | Defina o tipo base antes de usar.   | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#038** | Recursividade de tipo.  | Evite definições circulares.        | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#039** | 'Aponte para' inválido. | Use apenas com ponteiros.           | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#040** | Uso de 'com'.           | Use apenas em estruturas/listas.    | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#041** | Proporções inválidas.   | Use tipos numéricos.                | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#042** | Ponteiro sem tipo.      | Defina o tipo apontado.             | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#043** | Campo duplicado.        | Use nomes únicos na estrutura.      | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#044** | Recursividade de campo. | Evite ciclos na estrutura.          | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#045** | Campo não é ponteiro.   | Declare como ponteiro.              | [Tipos](../Regras/Tipos.md "Tipos")                   |
| **#046** | Nome de campo inválido. | Corrija o identificador.            | [Tipos](../Regras/Tipos.md "Tipos")                   |

### Variáveis Globais e Inicialização (#047 - #056)

| Código   | Descrição               | Solução                         | Documentação                                                              |
|:---------|:------------------------|:--------------------------------|:--------------------------------------------------------------------------|
| **#047** | Tipo inválido.          | Declare o tipo corretamente.    | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#048** | Valor literal esperado. | Atribua um valor literal.       | [Valores Literais](<../Regras/Valores Literais.md> "Valores Literais")    |
| **#049** | Falta ponto.            | Insira `.` após declaração.     | [Símbolos](../Regras/Símbolos.md "Símbolos")                              |
| **#050** | Erro no literal.        | Verifique a sintaxe do valor.   | [Valores Literais](<../Regras/Valores Literais.md> "Valores Literais")    |
| **#051** | Tipo indeterminado.     | Especifique o tipo.             | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#052** | Tipo não encontrado.    | Defina o tipo antes.            | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#053** | Unidade inexistente.    | Use unidade válida.             | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#054** | Tipo não numérico.      | Use tipo numérico.              | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#055** | Divisão por zero.       | Ajuste a unidade/escala.        | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#056** | Já inicializada.        | Remova inicialização duplicada. | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |

### Definição de Rotinas (#057 - #072)

| Código   | Descrição              | Solução                         | Documentação                                          |
|:---------|:-----------------------|:--------------------------------|:------------------------------------------------------|
| **#057** | Sintaxe de cabeçalho.  | Use `para que se determine se`. | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#058** | 'Não' em booleano.     | Evite negações no nome.         | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#059** | Rotina duplicada.      | Renomeie a rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#060** | Rotina não localizada. | Verifique o nome.               | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#061** | Parâmetro duplicado.   | Use nomes únicos.               | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#062** | Preposição incorreta.  | Use `em` ou `para`.             | [Preposições](../Regras/Preposições.md "Preposições") |
| **#063** | Rotina duplicada.      | Renomeie a rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#064** | Falta artigo.          | Insira `um` ou `uma`.           | [Artigos](../Regras/Artigos.md "Artigos")             |
| **#065** | Instruções inválidas.  | Verifique o fim da rotina.      | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#066** | Atribuição incorreta.  | Use `'s` (apóstrofo s).         | [Possessivos](../Regras/Possessivos.md "Possessivos") |
| **#067** | Falta 'para'.          | Insira `para`.                  | [Preposições](../Regras/Preposições.md "Preposições") |
| **#068** | Rotina duplicada.      | Renomeie a rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#069** | Falta artigo.          | Insira `um` ou `uma`.           | [Artigos](../Regras/Artigos.md "Artigos")             |
| **#070** | Instruções inválidas.  | Verifique o fim da rotina.      | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#071** | Rotina duplicada.      | Renomeie a rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")             |
| **#072** | Rotina duplicada.      | Renomeie a rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")             |

### Estruturas e Chamadas (#073 - #082)

| Código   | Descrição               | Solução                         | Documentação                              |
|:---------|:------------------------|:--------------------------------|:------------------------------------------|
| **#073** | Campo não encontrado.   | Verifique o nome do campo.      | [Tipos](../Regras/Tipos.md "Tipos")       |
| **#074** | Campo inválido.         | Verifique a definição.          | [Tipos](../Regras/Tipos.md "Tipos")       |
| **#075** | Tipo de campo inválido. | Verifique o tipo.               | [Tipos](../Regras/Tipos.md "Tipos")       |
| **#076** | Rotina não encontrada.  | Verifique a grafia.             | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#077** | Rotina não encontrada.  | Verifique a grafia.             | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#078** | Cabeçalho alternativo.  | Verifique definições.           | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#079** | Invocação esperada.     | Corrija a sintaxe de chamada.   | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#080** | Invocação inválida.     | Verifique o comando.            | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#081** | Rotina inexistente.     | Defina a rotina `determine se`. | [Rotinas](../Regras/Rotinas.md "Rotinas") |
| **#082** | Decisor necessário.     | Inclua `determine se`.          | [Rotinas](../Regras/Rotinas.md "Rotinas") |

### Pontuação e Comandos (#083 - #108)

| Código   | Descrição                  | Solução                   | Documentação                                                              |
|:---------|:---------------------------|:--------------------------|:--------------------------------------------------------------------------|
| **#083** | Falta vírgula.             | Insira `,`.               | [Símbolos](../Regras/Símbolos.md "Símbolos")                              |
| **#084** | Falta pontuação.           | Insira `.` ou `;`.        | [Símbolos](../Regras/Símbolos.md "Símbolos")                              |
| **#085** | Termo ausente.             | Verifique argumentos.     | [Instruções](../Regras/Instruções.md "Instruções")                        |
| **#086** | 'Inverta' inválido.        | Verifique a variável.     | [Instruções](../Regras/Instruções.md "Instruções")                        |
| **#087** | Rotina não encontrada.     | Defina a rotina.          | [Rotinas](../Regras/Rotinas.md "Rotinas")                                 |
| **#088** | Tipo incompatível.         | Verifique tipo global.    | [Variáveis Globais](<../Regras/Variáveis Globais.md> "Variáveis Globais") |
| **#089** | Rotina não definida.       | Defina a rotina.          | [Rotinas](../Regras/Rotinas.md "Rotinas")                                 |
| **#090** | Comando '+' incorreto.     | Verifique a variável.     | [Operadores](../Regras/Operadores.md "Operadores")                        |
| **#091** | Rotina inexistente.        | Verifique a chamada.      | [Rotinas](../Regras/Rotinas.md "Rotinas")                                 |
| **#092** | Falta artigo após 'de'.    | Insira artigo.            | [Artigos](../Regras/Artigos.md "Artigos")                                 |
| **#093** | Estrutura não encontrada.  | Verifique o nome.         | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#094** | Conflito (parâmetro).      | Escolha outro nome.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais")    |
| **#095** | Conflito (variável).       | Escolha outro nome.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais")    |
| **#096** | Falha na stack.            | Verifique chamadas.       | [Rotinas](../Regras/Rotinas.md "Rotinas")                                 |
| **#097** | Conflito (parâmetro).      | Escolha outro nome.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais")    |
| **#098** | Variável duplicada.        | Escolha outro nome.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais")    |
| **#099** | 'Magnitude' inválido.      | Verifique a variável.     | [Instruções](../Regras/Instruções.md "Instruções")                        |
| **#100** | 'Conteúdo' mal definido.   | Verifique o termo.        | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#101** | Uso de 'conteúdo'.         | Use apenas com ponteiros. | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#102** | Redirecionamento inválido. | Verifique o termo.        | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#103** | Ponteiro sem tipo.         | Associe a um tipo.        | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#104** | Termo não encontrado.      | Verifique a estrutura.    | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#105** | 'Endereçamento' inválido.  | Verifique a variável.     | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#106** | Variável não localizada.   | Declare a variável.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais")    |
| **#107** | Tipo não localizado.       | Verifique estrutura.      | [Tipos](../Regras/Tipos.md "Tipos")                                       |
| **#108** | Campo não localizado.      | Verifique estrutura.      | [Tipos](../Regras/Tipos.md "Tipos")                                       |

### Parâmetros e Operações Matemáticas (#109 - #130)

| Código   | Descrição                 | Solução                   | Documentação                                                           |
|:---------|:--------------------------|:--------------------------|:-----------------------------------------------------------------------|
| **#109** | Parâmetro nulo.           | Forneça parâmetro válido. | [Rotinas](../Regras/Rotinas.md "Rotinas")                              |
| **#110** | Tipo nulo.                | Verifique o tipo.         | [Rotinas](../Regras/Rotinas.md "Rotinas")                              |
| **#111** | 'Tal como' inválido.      | Verifique a variável.     | [Condicionais](../Regras/Condicionais.md "Condicionais")               |
| **#112** | Falta artigo.             | Insira `um` ou `uma`.     | [Artigos](../Regras/Artigos.md "Artigos")                              |
| **#113** | Tipo nulo.                | Verifique o tipo.         | [Tipos](../Regras/Tipos.md "Tipos")                                    |
| **#114** | Numerador nulo.           | Verifique o valor.        | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#115** | Denominador nulo.         | Verifique o valor.        | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#116** | Rotina não localizada.    | Verifique o nome.         | [Rotinas](../Regras/Rotinas.md "Rotinas")                              |
| **#117** | Sintaxe de divisão.       | Use `dividido POR`.       | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#118** | 'Dividido por' inválido.  | Verifique a variável.     | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#119** | Divisão impossível.       | Verifique divisor.        | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#120** | Subtração impossível.     | Verifique operandos.      | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#121** | Subtração impossível.     | Verifique termos.         | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#122** | Soma impossível.          | Verifique operandos.      | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#123** | Adição impossível.        | Verifique termos.         | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#124** | Sintaxe incorreta.        | Use `junto DE/COM`.       | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#125** | Variável nula.            | Inicialize a variável.    | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#126** | Variável nula.            | Verifique existência.     | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#127** | Rotina 'junto com'.       | Implemente a rotina.      | [Rotinas](../Regras/Rotinas.md "Rotinas")                              |
| **#128** | Variável não definida.    | Declare a variável.       | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#129** | Multiplicação impossível. | Verifique operandos.      | [Operadores](../Regras/Operadores.md "Operadores")                     |
| **#130** | Multiplicação impossível. | Verifique termos.         | [Operadores](../Regras/Operadores.md "Operadores")                     |

### Condicionais e Funções (#131 - #139)

| Código   | Descrição                | Solução                         | Documentação                                                           |
|:---------|:-------------------------|:--------------------------------|:-----------------------------------------------------------------------|
| **#131** | Aninhamento condicional. | Evite condições aninhadas.      | [Condicionais](../Regras/Condicionais.md "Condicionais")               |
| **#132** | Uso de 'Preserve'.       | Não use em nomes de rotina.     | [Palavras-Chave](../Regras/Palavras-Chave.md "Palavras-Chave")         |
| **#133** | Loops em condicionais.   | Mova o loop para fora.          | [Laços](../Regras/Laços.md "Laços")                                    |
| **#134** | Uso de 'Empregue'.       | Deve ser comando único.         | [Instruções](../Regras/Instruções.md "Instruções")                     |
| **#135** | Retorno booleano.        | Retorne `sim` ou `não`.         | [Funções](../Regras/Funções.md "Funções")                              |
| **#136** | Término booleano.        | Encerre com `sim` ou `não`.     | [Funções](../Regras/Funções.md "Funções")                              |
| **#137** | Falta ponto.             | Insira `.`.                     | [Símbolos](../Regras/Símbolos.md "Símbolos")                           |
| **#138** | Rotina não localizada.   | Verifique existência.           | [Rotinas](../Regras/Rotinas.md "Rotinas")                              |
| **#139** | Hexadecimal esperado.    | Use formato `$DEAD` ou `&C0DE`. | [Valores Literais](<../Regras/Valores Literais.md> "Valores Literais") |

### Pilha e Expressões (#140 - #151)

| Código   | Descrição                  | Solução                 | Documentação                                                           |
|:---------|:---------------------------|:------------------------|:-----------------------------------------------------------------------|
| **#140** | Empilhamento inválido.     | Verifique a variável.   | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#141** | Tipo não empilhável.       | Verifique o tipo.       | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#142** | Biblioteca sem aspas.      | Use aspas no nome.      | [Instruções](../Regras/Instruções.md "Instruções")                     |
| **#143** | Variável não localizada.   | Declare a variável.     | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#144** | Variável inexistente.      | Verifique termos.       | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#145** | Tipo não empilhável.       | Verifique o tipo.       | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#146** | Variável inexistente.      | Verifique existência.   | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#147** | Tamanho de retorno.        | Use 1, 2 ou 4 bytes.    | [Funções](../Regras/Funções.md "Funções")                              |
| **#148** | Variável inexistente.      | Verifique termos.       | [Expressões](../Regras/Expressões.md "Expressões")                     |
| **#149** | 'Processe' exige ponteiro. | Use ponteiro no 1º arg. | [Processe](../Regras/Processe.md "Processe")                           |
| **#150** | Variável inexistente.      | Declare a variável.     | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |
| **#151** | Variável inexistente.      | Declare a variável.     | [Variáveis Locais](<../Regras/Variáveis Locais.md> "Variáveis Locais") |

### Ponteiros e Sintaxe Avançada (#152 - #170)

| Código   | Descrição                   | Solução                         | Documentação                                                   |
|:---------|:----------------------------|:--------------------------------|:---------------------------------------------------------------|
| **#152** | Literal em ponteiro.        | Use endereço/variável.          | [Tipos](../Regras/Tipos.md "Tipos")                            |
| **#153** | Tamanho inválido.           | Ponteiro deve ser 32 bits.      | [Tipos](../Regras/Tipos.md "Tipos")                            |
| **#154** | Falta 'para'.               | Complete com `para`.            | [Preposições](../Regras/Preposições.md "Preposições")          |
| **#155** | Sintaxe de apontamento.     | Use `Aponte para a rotina`.     | [Tipos](../Regras/Tipos.md "Tipos")                            |
| **#156** | Rotina inexistente.         | Verifique alvo.                 | [Rotinas](../Regras/Rotinas.md "Rotinas")                      |
| **#157** | Sintaxe incorreta.          | Verifique termo.                | [Instruções](../Regras/Instruções.md "Instruções")             |
| **#158** | Falta 's.                   | Insira `'s`.                    | [Possessivos](../Regras/Possessivos.md "Possessivos")          |
| **#159** | Falta 'para'.               | Insira `para`.                  | [Preposições](../Regras/Preposições.md "Preposições")          |
| **#160** | Falta artigo.               | Insira `um` ou `uma`.           | [Artigos](../Regras/Artigos.md "Artigos")                      |
| **#161** | Sintaxe incorreta.          | Revise o comando.               | [Instruções](../Regras/Instruções.md "Instruções")             |
| **#162** | Sintaxe de determinação.    | Use `Para que se determine SE`. | [Condicionais](../Regras/Condicionais.md "Condicionais")       |
| **#163** | Falta ponto em loop.        | Insira `.` após comandos.       | [Laços](../Regras/Laços.md "Laços")                            |
| **#164** | 'Preserve' inválido.        | Verifique a variável.           | [Palavras-Chave](../Regras/Palavras-Chave.md "Palavras-Chave") |
| **#165** | Alvo do 'Preserve'.         | Deve ser variável.              | [Palavras-Chave](../Regras/Palavras-Chave.md "Palavras-Chave") |
| **#166** | Falta ponto final.          | Insira `.`.                     | [Símbolos](../Regras/Símbolos.md "Símbolos")                   |
| **#167** | Finalização não encontrada. | Implemente rotina.              | [Rotinas](../Regras/Rotinas.md "Rotinas")                      |
| **#168** | 'Empregue' sem ponto.       | Insira `.`.                     | [Instruções](../Regras/Instruções.md "Instruções")             |
| **#169** | Reutilização múltipla.      | Use apenas uma.                 | [Rotinas](../Regras/Rotinas.md "Rotinas")                      |
| **#170** | Rotina não encontrada.      | Verifique referência.           | [Rotinas](../Regras/Rotinas.md "Rotinas")                      |

### Erros Internos e Diversos (#171 - #194)

Os erros abaixo (#171 a #194) geralmente indicam inconsistências internas no processo de compilação ou falhas em encontrar referências esperadas durante a geração de código.

| Código            | Descrição                              | Solução                                                 |
|:------------------|:---------------------------------------|:--------------------------------------------------------|
| **#171 - #176** | Variável/Tipo inexistente ou inválido. | Verifique declarações e tamanhos (8/16/32 bits).        |
| **#177**          | Categoria inválida.                    | Variável deve ser parâmetro.                            |
| **#178**          | Emprego não encontrado.                | Verifique referência da rotina.                         |
| **#179**          | Referência recursiva.                  | Evite ciclos em `Empregue`.                             |
| **#180 - #192** | Erros Internos de Compilação.          | Contate suporte ou verifique integridade do compilador. |
| **#193**          | Rotina não encontrada.                 | Verifique existência.                                   |
| **#194**          | Erro Interno (PE).                     | Verifique instalação do compilador.                     |

## Índice de Erros

- [Guia de Solução de Erros](#guia-de-solução-de-erros)
  - [Sumário de Tópicos](#sumário-de-tópicos)
  - [Dicas Gerais](#dicas-gerais)
    - [Erros Internos](#erros-internos)
    - [Erros de Sintaxe e Posicionamento](#erros-de-sintaxe-e-posicionamento)
  - [Referência de Erros](#referência-de-erros)
    - [Ambiente e Arquivos (#001 - #003)](#ambiente-e-arquivos-001---003)
    - [Sintaxe Básica e Comentários (#004 - #006)](#sintaxe-básica-e-comentários-004---006)
    - [Strings e Qualificadores (#007 - #010)](#strings-e-qualificadores-007---010)
    - [Variáveis e Tipos (#011 - #023)](#variáveis-e-tipos-011---023)
    - [Ponteiros e Variáveis Globais (#024 - #032)](#ponteiros-e-variáveis-globais-024---032)
    - [Rotinas e Estruturas (#033 - #046)](#rotinas-e-estruturas-033---046)
    - [Variáveis Globais e Inicialização (#047 - #056)](#variáveis-globais-e-inicialização-047---056)
    - [Definição de Rotinas (#057 - #072)](#definição-de-rotinas-057---072)
    - [Estruturas e Chamadas (#073 - #082)](#estruturas-e-chamadas-073---082)
    - [Pontuação e Comandos (#083 - #108)](#pontuação-e-comandos-083---108)
    - [Parâmetros e Operações Matemáticas (#109 - #130)](#parâmetros-e-operações-matemáticas-109---130)
    - [Condicionais e Funções (#131 - #139)](#condicionais-e-funções-131---139)
    - [Pilha e Expressões (#140 - #151)](#pilha-e-expressões-140---151)
    - [Ponteiros e Sintaxe Avançada (#152 - #170)](#ponteiros-e-sintaxe-avançada-152---170)
    - [Erros Internos e Diversos (#171 - #194)](#erros-internos-e-diversos-171---194)
  - [Índice de Erros](#índice-de-erros)
    - [Código de Erro #001](#código-de-erro-001)
    - [Código de Erro #002](#código-de-erro-002)
    - [Código de Erro #003](#código-de-erro-003)
    - [Código de Erro #004](#código-de-erro-004)
    - [Código de Erro #005](#código-de-erro-005)
    - [Código de Erro #006](#código-de-erro-006)
    - [Código de Erro #007](#código-de-erro-007)
    - [Código de Erro #008](#código-de-erro-008)
    - [Código de Erro #009](#código-de-erro-009)
    - [Código de Erro #010](#código-de-erro-010)
    - [Código de Erro #011](#código-de-erro-011)
    - [Código de Erro #012](#código-de-erro-012)
    - [Código de Erro #013](#código-de-erro-013)
    - [Código de Erro #014](#código-de-erro-014)
    - [Código de Erro #015](#código-de-erro-015)
    - [Código de Erro #016](#código-de-erro-016)
    - [Código de Erro #017](#código-de-erro-017)
    - [Código de Erro #018](#código-de-erro-018)
    - [Código de Erro #019](#código-de-erro-019)
    - [Código de Erro #020](#código-de-erro-020)
    - [Código de Erro #021](#código-de-erro-021)
    - [Código de Erro #022](#código-de-erro-022)
    - [Código de Erro #023](#código-de-erro-023)
    - [Código de Erro #024](#código-de-erro-024)
    - [Código de Erro #025](#código-de-erro-025)
    - [Código de Erro #026](#código-de-erro-026)
    - [Código de Erro #027](#código-de-erro-027)
    - [Código de Erro #028](#código-de-erro-028)
    - [Código de Erro #029](#código-de-erro-029)
    - [Código de Erro #030](#código-de-erro-030)
    - [Código de Erro #031](#código-de-erro-031)
    - [Código de Erro #032](#código-de-erro-032)
    - [Código de Erro #033](#código-de-erro-033)
    - [Código de Erro #034](#código-de-erro-034)
    - [Código de Erro #035](#código-de-erro-035)
    - [Código de Erro #036](#código-de-erro-036)
    - [Código de Erro #037](#código-de-erro-037)
    - [Código de Erro #038](#código-de-erro-038)
    - [Código de Erro #039](#código-de-erro-039)
    - [Código de Erro #040](#código-de-erro-040)
    - [Código de Erro #041](#código-de-erro-041)
    - [Código de Erro #042](#código-de-erro-042)
    - [Código de Erro #043](#código-de-erro-043)
    - [Código de Erro #044](#código-de-erro-044)
    - [Código de Erro #045](#código-de-erro-045)
    - [Código de Erro #046](#código-de-erro-046)
    - [Código de Erro #047](#código-de-erro-047)
    - [Código de Erro #048](#código-de-erro-048)
    - [Código de Erro #049](#código-de-erro-049)
    - [Código de Erro #050](#código-de-erro-050)
    - [Código de Erro #051](#código-de-erro-051)
    - [Código de Erro #052](#código-de-erro-052)
    - [Código de Erro #053](#código-de-erro-053)
    - [Código de Erro #054](#código-de-erro-054)
    - [Código de Erro #055](#código-de-erro-055)
    - [Código de Erro #056](#código-de-erro-056)
    - [Código de Erro #057](#código-de-erro-057)
    - [Código de Erro #058](#código-de-erro-058)
    - [Código de Erro #059](#código-de-erro-059)
    - [Código de Erro #060](#código-de-erro-060)
    - [Código de Erro #061](#código-de-erro-061)
    - [Código de Erro #062](#código-de-erro-062)
    - [Código de Erro #063](#código-de-erro-063)
    - [Código de Erro #064](#código-de-erro-064)
    - [Código de Erro #065](#código-de-erro-065)
    - [Código de Erro #066](#código-de-erro-066)
    - [Código de Erro #067](#código-de-erro-067)
    - [Código de Erro #068](#código-de-erro-068)
    - [Código de Erro #069](#código-de-erro-069)
    - [Código de Erro #070](#código-de-erro-070)
    - [Código de Erro #071](#código-de-erro-071)
    - [Código de Erro #072](#código-de-erro-072)
    - [Código de Erro #073](#código-de-erro-073)
    - [Código de Erro #074](#código-de-erro-074)
    - [Código de Erro #075](#código-de-erro-075)
    - [Código de Erro #076](#código-de-erro-076)
    - [Código de Erro #077](#código-de-erro-077)
    - [Código de Erro #078](#código-de-erro-078)
    - [Código de Erro #079](#código-de-erro-079)
    - [Código de Erro #080](#código-de-erro-080)
    - [Código de Erro #081](#código-de-erro-081)
    - [Código de Erro #082](#código-de-erro-082)
    - [Código de Erro #083](#código-de-erro-083)
    - [Código de Erro #084](#código-de-erro-084)
    - [Código de Erro #085](#código-de-erro-085)
    - [Código de Erro #086](#código-de-erro-086)
    - [Código de Erro #087](#código-de-erro-087)
    - [Código de Erro #088](#código-de-erro-088)
    - [Código de Erro #089](#código-de-erro-089)
    - [Código de Erro #090](#código-de-erro-090)
    - [Código de Erro #091](#código-de-erro-091)
    - [Código de Erro #092](#código-de-erro-092)
    - [Código de Erro #093](#código-de-erro-093)
    - [Código de Erro #094](#código-de-erro-094)
    - [Código de Erro #095](#código-de-erro-095)
    - [Código de Erro #096](#código-de-erro-096)
    - [Código de Erro #097](#código-de-erro-097)
    - [Código de Erro #098](#código-de-erro-098)
    - [Código de Erro #099](#código-de-erro-099)
    - [Código de Erro #100](#código-de-erro-100)
    - [Código de Erro #101](#código-de-erro-101)
    - [Código de Erro #102](#código-de-erro-102)
    - [Código de Erro #103](#código-de-erro-103)
    - [Código de Erro #104](#código-de-erro-104)
    - [Código de Erro #105](#código-de-erro-105)
    - [Código de Erro #106](#código-de-erro-106)
    - [Código de Erro #107](#código-de-erro-107)
    - [Código de Erro #108](#código-de-erro-108)
    - [Código de Erro #109](#código-de-erro-109)
    - [Código de Erro #110](#código-de-erro-110)
    - [Código de Erro #111](#código-de-erro-111)
    - [Código de Erro #112](#código-de-erro-112)
    - [Código de Erro #113](#código-de-erro-113)
    - [Código de Erro #114](#código-de-erro-114)
    - [Código de Erro #115](#código-de-erro-115)
    - [Código de Erro #116](#código-de-erro-116)
    - [Código de Erro #117](#código-de-erro-117)
    - [Código de Erro #118](#código-de-erro-118)
    - [Código de Erro #119](#código-de-erro-119)
    - [Código de Erro #120](#código-de-erro-120)
    - [Código de Erro #121](#código-de-erro-121)
    - [Código de Erro #122](#código-de-erro-122)
    - [Código de Erro #123](#código-de-erro-123)
    - [Código de Erro #124](#código-de-erro-124)
    - [Código de Erro #125](#código-de-erro-125)
    - [Código de Erro #126](#código-de-erro-126)
    - [Código de Erro #127](#código-de-erro-127)
    - [Código de Erro #128](#código-de-erro-128)
    - [Código de Erro #129](#código-de-erro-129)
    - [Código de Erro #130](#código-de-erro-130)
    - [Código de Erro #131](#código-de-erro-131)
    - [Código de Erro #132](#código-de-erro-132)
    - [Código de Erro #133](#código-de-erro-133)
    - [Código de Erro #134](#código-de-erro-134)
    - [Código de Erro #135](#código-de-erro-135)
    - [Código de Erro #136](#código-de-erro-136)
    - [Código de Erro #137](#código-de-erro-137)
    - [Código de Erro #138](#código-de-erro-138)
    - [Código de Erro #139](#código-de-erro-139)
    - [Código de Erro #140](#código-de-erro-140)
    - [Código de Erro #141](#código-de-erro-141)
    - [Código de Erro #142](#código-de-erro-142)
    - [Código de Erro #143](#código-de-erro-143)
    - [Código de Erro #144](#código-de-erro-144)
    - [Código de Erro #145](#código-de-erro-145)
    - [Código de Erro #146](#código-de-erro-146)
    - [Código de Erro #147](#código-de-erro-147)
    - [Código de Erro #148](#código-de-erro-148)
    - [Código de Erro #149](#código-de-erro-149)
    - [Código de Erro #150](#código-de-erro-150)
    - [Código de Erro #151](#código-de-erro-151)
    - [Código de Erro #152](#código-de-erro-152)
    - [Código de Erro #153](#código-de-erro-153)
    - [Código de Erro #154](#código-de-erro-154)
    - [Código de Erro #155](#código-de-erro-155)
    - [Código de Erro #156](#código-de-erro-156)
    - [Código de Erro #157](#código-de-erro-157)
    - [Código de Erro #158](#código-de-erro-158)
    - [Código de Erro #159](#código-de-erro-159)
    - [Código de Erro #160](#código-de-erro-160)
    - [Código de Erro #161](#código-de-erro-161)
    - [Código de Erro #162](#código-de-erro-162)
    - [Código de Erro #163](#código-de-erro-163)
    - [Código de Erro #164](#código-de-erro-164)
    - [Código de Erro #165](#código-de-erro-165)
    - [Código de Erro #166](#código-de-erro-166)
    - [Código de Erro #167](#código-de-erro-167)
    - [Código de Erro #168](#código-de-erro-168)
    - [Código de Erro #169](#código-de-erro-169)
    - [Código de Erro #170](#código-de-erro-170)
    - [Código de Erro #171](#código-de-erro-171)
    - [Código de Erro #172](#código-de-erro-172)
    - [Código de Erro #173](#código-de-erro-173)
    - [Código de Erro #174](#código-de-erro-174)
    - [Código de Erro #175](#código-de-erro-175)
    - [Código de Erro #176](#código-de-erro-176)
    - [Código de Erro #177](#código-de-erro-177)
    - [Código de Erro #178](#código-de-erro-178)
    - [Código de Erro #179](#código-de-erro-179)
    - [Código de Erro #180](#código-de-erro-180)
    - [Código de Erro #181](#código-de-erro-181)
    - [Código de Erro #182](#código-de-erro-182)
    - [Código de Erro #183](#código-de-erro-183)
    - [Código de Erro #184](#código-de-erro-184)
    - [Código de Erro #185](#código-de-erro-185)
    - [Código de Erro #186](#código-de-erro-186)
    - [Código de Erro #187](#código-de-erro-187)
    - [Código de Erro #188](#código-de-erro-188)
    - [Código de Erro #189](#código-de-erro-189)
    - [Código de Erro #190](#código-de-erro-190)
    - [Código de Erro #191](#código-de-erro-191)
    - [Código de Erro #192](#código-de-erro-192)
    - [Código de Erro #193](#código-de-erro-193)
    - [Código de Erro #194](#código-de-erro-194)

### Código de Erro #001

- Falha ao definir a página de código do console para saída padrão (STDOUT). Verifique se o terminal suporta a codificação necessária e se possui permissões adequadas.

### Código de Erro #002

- O diretório especificado não foi encontrado. Verifique se o caminho está correto e se a pasta realmente existe.

### Código de Erro #003

- Não foi possível carregar o arquivo fonte. Verifique se o arquivo existe, se o caminho está correto e se você possui permissão de leitura.

### Código de Erro #004

- Sintaxe não reconhecida pelo compilador. Verifique a grafia do comando e consulte a documentação para confirmar a estrutura correta.

### Código de Erro #005

- Bloco de observação não finalizado. Insira um colchete direito ']' para encerrar o comentário.

### Código de Erro #006

- Bloco de observação mal formado. Inicie seus comentários com um colchete esquerdo '['.

### Código de Erro #007

- String literal não finalizada. Adicione aspas duplas '"' no final da string.

### Código de Erro #008

- String literal mal formada. Inicie suas strings com aspas duplas '"'.

### Código de Erro #009

- Qualificador não finalizado. Adicione um parêntese direito ')' para fechar o qualificador.

### Código de Erro #010

- Qualificador mal formado. Inicie seus qualificadores com um parêntese esquerdo '('.

### Código de Erro #011

- Não foi possível detectar o idioma da variável. Verifique se a variável foi declarada corretamente e se o idioma é suportado.

### Código de Erro #012

- Operador de atribuição ausente ou incorreto. Utilize 'é' ou 'são' para realizar atribuições.

### Código de Erro #013

- Artigo indefinido esperado. Utilize 'um' ou 'uma' antes da declaração do tipo.

### Código de Erro #014

- Pontuação ausente após declaração de tipo. Insira um ponto final '.' para concluir a declaração.

### Código de Erro #015

- Variável não declarada. Certifique-se de definir a variável antes de utilizá-la.

### Código de Erro #016

- Estrutura não finalizada. Insira um ponto final '.' para encerrar a definição da estrutura.

### Código de Erro #017

- Declaração de bytes inválida. Utilize apenas números inteiros para definir sequências de bytes.

### Código de Erro #018

- Identificador 'bytes' ausente. Especifique a palavra 'bytes' após o número na declaração.

### Código de Erro #019

- Artigo indefinido ausente. Insira 'um' ou 'uma' onde esperado na frase.

### Código de Erro #020

- Artigo definido esperado. Utilize 'o' ou 'a' conforme a concordância necessária.

### Código de Erro #021

- Conflito de nomes. O identificador já foi utilizado para outro tipo. Escolha um nome diferente e único para este tipo.

### Código de Erro #022

- Escala inválida. A razão de escala não pode ser zero. Defina um valor de escala maior que zero.

### Código de Erro #023

- Pontuação ausente após unidade de medida. Insira um ponto final '.' para concluir a declaração.

### Código de Erro #024

- Sintaxe de ponteiro incorreta. Use a forma 'Aponte para um' ou 'Aponte para uma'.

### Código de Erro #025

- Verbo de ligação esperado. Utilize 'é' ou 'está' na declaração.

### Código de Erro #026

- Declaração global não finalizada. Insira um ponto final '.' ao fim da declaração da variável global.

### Código de Erro #027

- Pontuação final ausente. Encerre a declaração com um ponto final '.'.

### Código de Erro #028

- Nome de variável global duplicado. Escolha um nome único para a variável global, pois este já está em uso.

### Código de Erro #029

- Inicialização mal formada. Insira um ponto final '.' após a inicialização da variável.

### Código de Erro #030

- Pontuação ausente após dados complementares. Insira um ponto final '.' para concluir.

### Código de Erro #031

- Termo de igualdade ausente. Utilize a expressão 'igual a' para comparações ou atribuições.

### Código de Erro #032

- Declaração incompleta. Insira um ponto final '.' para terminar a declaração da variável.

### Código de Erro #033

- Preposição 'para' ausente. Verifique a estrutura do comando e certifique-se de incluir 'para'.

### Código de Erro #034

- Cabeçalho de rotina inválido. Insira o caractere ':' na posição correta do cabeçalho.

### Código de Erro #035

- Sintaxe de rotina incorreta. Certifique-se de usar 'para' após o ponto e vírgula.

### Código de Erro #036

- Posicionamento incorreto de ':'. Mova os dois pontos ':' para o final do cabeçalho da rotina.

### Código de Erro #037

- Tipo base inválido ou desconhecido. Verifique se o tipo base foi definido corretamente antes de usá-lo.

### Código de Erro #038

- Recursividade de tipos detectada. Evite definições circulares onde um tipo depende dele mesmo.

### Código de Erro #039

- Uso inválido de 'Aponte para'. Utilize este comando apenas com variáveis do tipo ponteiro.

### Código de Erro #040

- Uso incorreto de 'com'. A palavra-chave 'com' deve ser usada apenas em definições de estruturas e listas.

### Código de Erro #041

- Tipo de dado incompatível com proporções. Utilize tipos numéricos para definir escalas e medidas.

### Código de Erro #042

- Ponteiro sem tipo de conteúdo definido. Especifique claramente o tipo de dado para o qual o ponteiro aponta.

### Código de Erro #043

- Nome de campo duplicado. Use nomes distintos para cada campo dentro da mesma estrutura.

### Código de Erro #044

- Recursividade de campo detectada. Verifique a estrutura para evitar ciclos infinitos na definição dos campos.

### Código de Erro #045

- Tipo de campo incompatível. Certifique-se de que o campo seja declarado como um ponteiro.

### Código de Erro #046

- Nome de campo inválido. Verifique a grafia e a validade do identificador usado para o campo.

### Código de Erro #047

- Tipo inválido na variável global. Declare o tipo corretamente antes de usá-lo na variável global.

### Código de Erro #048

- Valor literal esperado. Atribua um valor literal válido correspondente ao tipo declarado.

### Código de Erro #049

- Pontuação ausente após declaração. Insira um ponto final '.' após a declaração da variável.

### Código de Erro #050

- Erro no valor literal. Verifique a sintaxe e o formato do valor literal fornecido.

### Código de Erro #051

- Tipo da variável indeterminado. Certifique-se de que o tipo da variável foi especificado claramente.

### Código de Erro #052

- Tipo da variável não encontrado. Verifique se o tipo foi definido anteriormente no código.

### Código de Erro #053

- Unidade de medida inexistente. Utilize uma unidade de medida válida e previamente declarada.

### Código de Erro #054

- Tipo não numérico. Utilize um tipo numérico válido para esta operação.

### Código de Erro #055

- Proporção inválida (divisão por zero). Ajuste a unidade de medida para evitar denominadores iguais a zero.

### Código de Erro #056

- Variável já inicializada. Remova a inicialização duplicada ou verifique se está redefinindo uma constante.

### Código de Erro #057

- Sintaxe incorreta no cabeçalho. Utilize a expressão 'para que se determine se' no início.

### Código de Erro #058

- Uso proibido de 'não' em cabeçalhos booleanos. Evite negações no nome da função; use lógica positiva.

### Código de Erro #059

- Rotina já definida anteriormente. Verifique se há duplicidade de nomes e remova ou renomeie a rotina.

### Código de Erro #060

- Rotina não localizada. Verifique se o nome da rotina está correto e se ela foi definida.

### Código de Erro #061

- Parâmetro duplicado. Utilize nomes diferentes para cada parâmetro da rotina.

### Código de Erro #062

- Preposição incorreta. Utilize 'em' ou 'para' conforme a regência do comando.

### Código de Erro #063

- Rotina já definida. Escolha um nome único para a nova rotina ou remova a duplicata.

### Código de Erro #064

- Artigo indefinido esperado. Insira 'um' ou 'uma' na posição apropriada.

### Código de Erro #065

- Instruções inválidas no final da rotina. Verifique se há comandos soltos ou mal formados no fim do bloco.

### Código de Erro #066

- Sintaxe de atribuição incorreta. Utilize apóstrofo seguido de 's' ('s) para indicar posse ou atribuição.

### Código de Erro #067

- Esperado 'para' após identificador. Insira a preposição 'para' para completar a sintaxe.

### Código de Erro #068

- Rotina já definida. Verifique se o nome da rotina é único no contexto.

### Código de Erro #069

- Artigo indefinido esperado. Insira 'um' ou 'uma' onde necessário.

### Código de Erro #070

- Instruções inválidas no final da rotina. Revise o final do bloco de código em busca de erros de sintaxe.

### Código de Erro #071

- Rotina já definida. Renomeie a rotina para evitar conflitos de nomes.

### Código de Erro #072

- Rotina já definida. Garanta que cada rotina tenha uma assinatura única.

### Código de Erro #073

- Campo não encontrado na estrutura. Verifique se o nome do campo está correto e pertence à estrutura indicada.

### Código de Erro #074

- Campo inválido na lista. Certifique-se de que o campo foi definido corretamente na estrutura.

### Código de Erro #075

- Tipo de campo inválido. Verifique se o tipo do campo é válido e foi declarado.

### Código de Erro #076

- Rotina não encontrada no catálogo. Verifique a grafia e se a rotina foi devidamente compilada.

### Código de Erro #077

- Rotina não encontrada. Confirme se a rotina existe e se o nome está escrito corretamente.

### Código de Erro #078

- Cabeçalho alternativo não encontrado. Verifique as definições de cabeçalho da rotina.

### Código de Erro #079

- Esperada invocação de rotina. Verifique se a sintaxe corresponde a uma chamada de função válida.

### Código de Erro #080

- Invocação de rotina inexistente ou palavra reservada. Verifique se o comando é válido e se a rotina existe.

### Código de Erro #081

- Rotina de determinação inexistente. Verifique se a rotina 'para que se determine se...' foi definida.

### Código de Erro #082

- Decisor necessário. Inclua 'determine se' no cabeçalho da rotina para funções condicionais.

### Código de Erro #083

- Vírgula necessária. Substitua o termo encontrado por uma vírgula.

### Código de Erro #084

- Pontuação final necessária. Utilize um ponto final '.' ou ponto e vírgula ';' para encerrar.

### Código de Erro #085

- Termo esperado não encontrado. Verifique se faltou algum argumento ou variável no comando.

### Código de Erro #086

- Comando 'inverta' inválido. Variável não encontrada. Verifique se a variável existe e foi escrita corretamente.

### Código de Erro #087

- Rotina não encontrada. Certifique-se de que a rotina foi definida antes de ser chamada.

### Código de Erro #088

- Incompatibilidade de tipo na variável global. Verifique se o tipo da variável corresponde ao esperado na rotina.

### Código de Erro #089

- Rotina ainda não definida. Defina a rotina antes de tentar utilizá-la.

### Código de Erro #090

- Comando '+' incorreto. Variável não localizada. Verifique se a variável envolvida na soma existe.

### Código de Erro #091

- Rotina inexistente. Verifique se você está chamando a rotina correta e se ela foi implementada.

### Código de Erro #092

- Artigo esperado após 'de'. Insira um artigo (o, a, um, uma) após a preposição 'de'.

### Código de Erro #093

- Estrutura não encontrada. Verifique se o nome da estrutura está correto e se ela foi definida.

### Código de Erro #094

- Conflito de nomes (parâmetro). O nome já é usado como parâmetro. Escolha outro nome.

### Código de Erro #095

- Conflito de nomes (variável local). O nome já é usado como variável local. Escolha outro nome.

### Código de Erro #096

- Falha ao desempilhar item. Rotina não localizada. Verifique a integridade da pilha e das chamadas de rotina.

### Código de Erro #097

- Conflito de nomes (parâmetro). O nome escolhido já está em uso como parâmetro.

### Código de Erro #098

- Variável local duplicada. Utilize um nome diferente para esta variável local.

### Código de Erro #099

- Comando 'magnitude' inválido. Variável não localizada. Verifique se a variável existe.

### Código de Erro #100

- Termo 'conteúdo' mal definido. Verifique a definição do termo ao qual 'conteúdo' se refere.

### Código de Erro #101

- Uso incorreto de 'conteúdo'. A palavra-chave 'conteúdo' só se aplica a variáveis do tipo ponteiro.

### Código de Erro #102

- Redirecionamento inválido. Termo não encontrado. Verifique se o termo de redirecionamento existe.

### Código de Erro #103

- Ponteiro sem tipo definido. Associe o ponteiro a um tipo válido (ex: 'x é um ponteiro para um número').

### Código de Erro #104

- Termo não encontrado na estrutura. Verifique se o campo existe na estrutura especificada.

### Código de Erro #105

- Comando 'endereçamento' inválido. Variável não localizada. Verifique se a variável existe.

### Código de Erro #106

- Variável não localizada. Certifique-se de que a variável foi declarada corretamente.

### Código de Erro #107

- Tipo não localizado na estrutura. Verifique se o tipo faz parte da estrutura.

### Código de Erro #108

- Campo não localizado na estrutura. Verifique o nome do campo e a definição da estrutura.

### Código de Erro #109

- Parâmetro nulo. Forneça um parâmetro válido para a operação.

### Código de Erro #110

- Tipo de parâmetro nulo ou inexistente. Verifique o tipo do parâmetro passado.

### Código de Erro #111

- Comando 'tal como' incorreto. Variável nula. Verifique a variável usada na comparação.

### Código de Erro #112

- Artigo indefinido esperado após 'tal como'. Insira 'um' ou 'uma' após o comando.

### Código de Erro #113

- Tipo nulo. Verifique se o tipo foi corretamente identificado.

### Código de Erro #114

- Numerador da fração nulo. Verifique o valor ou variável usada como numerador.

### Código de Erro #115

- Denominador da fração nulo. Verifique o valor ou variável usada como denominador.

### Código de Erro #116

- Rotina não localizada. Verifique se a rotina foi definida e o nome está correto.

### Código de Erro #117

- Sintaxe incorreta de divisão. Utilize a expressão 'dividido POR'.

### Código de Erro #118

- Comando 'dividido por' inválido. Erro na variável. Verifique a variável envolvida na divisão.

### Código de Erro #119

- Divisão impossível. Verifique se o divisor é válido e compatível.

### Código de Erro #120

- Subtração impossível. Verifique os operandos da subtração.

### Código de Erro #121

- Subtração impossível. Verifique os termos da operação.

### Código de Erro #122

- Soma impossível. Verifique os operandos da soma.

### Código de Erro #123

- Adição impossível. Verifique os termos da adição.

### Código de Erro #124

- Sintaxe incorreta. Utilize 'junto DE' ou 'junto COM'.

### Código de Erro #125

- Variável da expressão matemática nula. Verifique se a variável foi inicializada.

### Código de Erro #126

- Variável do termo nula. Certifique-se de que a variável existe e tem valor.

### Código de Erro #127

- Rotina 'junto com' não definida. Implemente a rotina necessária para essa operação.

### Código de Erro #128

- Variável não definida. Declare a variável antes de usá-la.

### Código de Erro #129

- Multiplicação impossível. Verifique os operandos da multiplicação.

### Código de Erro #130

- Multiplicação impossível. Verifique os termos da operação.

### Código de Erro #131

- Aninhamento de condicionais não permitido. Reestruture o código para evitar condições dentro de condições.

### Código de Erro #132

- Uso inválido de 'Preserve'. Não utilize 'Preserve' em nomes de rotinas.

### Código de Erro #133

- Loops em condicionais proibidos. Mova o loop para fora da expressão condicional.

### Código de Erro #134

- Uso exclusivo de 'Empregue'. Se usar 'Empregue', ele deve ser o único comando da rotina.

### Código de Erro #135

- Retorno booleano inválido. Funções booleanas devem retornar explicitamente 'sim' ou 'não'.

### Código de Erro #136

- Término booleano inválido. Encerre funções booleanas com 'sim' ou 'não'.

### Código de Erro #137

- Esperado ponto final. Insira um '.' onde esperado.

### Código de Erro #138

- Rotina não localizada. Verifique se a rotina existe.

### Código de Erro #139

- Valor hexadecimal esperado. Forneça um valor no formato $DEADCODE ou &C0C0FEDE.

### Código de Erro #140

- Empilhamento inválido. Variável inexistente. Verifique se a variável a ser empilhada existe.

### Código de Erro #141

- Tipo não empilhável. Apenas certos tipos podem ser colocados na pilha (stack).

### Código de Erro #142

- Nome de biblioteca sem aspas. Coloque o nome da biblioteca dinâmica entre aspas.

### Código de Erro #143

- Variável não localizada. Verifique se a variável foi declarada.

### Código de Erro #144

- Variável de expressão inexistente. Verifique os termos da expressão matemática.

### Código de Erro #145

- Tipo não empilhável em expressão. O tipo resultante não pode ser empilhado.

### Código de Erro #146

- Variável inexistente. Verifique a existência da variável.

### Código de Erro #147

- Tamanho de variável inválido para retorno. Utilize variáveis de 1, 2 ou 4 bytes no retorno.

### Código de Erro #148

- Variável de expressão inexistente. Verifique os termos da expressão.

### Código de Erro #149

- 'Processe' exige ponteiro. O primeiro argumento de 'Processe' deve ser um ponteiro.

### Código de Erro #150

- Variável inexistente. Verifique se a variável foi declarada.

### Código de Erro #151

- Variável inexistente. Verifique se a variável foi declarada.

### Código de Erro #152

- Literal inválido para apontar rotina. Use um endereço ou variável válida, não um literal.

### Código de Erro #153

- Tamanho de ponteiro inválido. Ponteiros para rotinas devem ter 32 bits.

### Código de Erro #154

- Esperado 'para' após 'aponte'. Complete o comando com 'para'.

### Código de Erro #155

- Sintaxe incorreta de apontamento. Use 'Aponte para a rotina'.

### Código de Erro #156

- Rotina inexistente. Verifique se a rotina alvo existe.

### Código de Erro #157

- Sintaxe incorreta. Verifique a estrutura do termo.

### Código de Erro #158

- Esperado 's. Insira o apóstrofo seguido de s ('s) onde necessário.

### Código de Erro #159

- Esperado 'para'. Insira a palavra 'para' no local indicado.

### Código de Erro #160

- Artigo indefinido esperado. Insira 'um' ou 'uma'.

### Código de Erro #161

- Sintaxe incorreta no comando. Revise o comando para corrigir erros de sintaxe.

### Código de Erro #162

- Sintaxe de determinação incorreta. Use 'Para que se determine SE ...'.

### Código de Erro #163

- Ponto final necessário em repetição. Insira um '.' após os comandos no bloco de repetição.

### Código de Erro #164

- Comando 'Preserve' inválido. Variável inexistente. Verifique se a variável a ser preservada existe.

### Código de Erro #165

- Apenas variáveis podem ser preservadas. Certifique-se de que o alvo do 'Preserve' é uma variável.

### Código de Erro #166

- Ponto final necessário. Encerre o comando com um ponto final '.'.

### Código de Erro #167

- Rotina de finalização não encontrada. Implemente a rotina para finalizar o tipo especificado.

### Código de Erro #168

- 'Empregue' deve terminar com ponto. Insira um '.' ao final do comando 'Empregue'.

### Código de Erro #169

- Múltiplas cláusulas de reutilização. Use apenas uma cláusula de reutilização por rotina.

### Código de Erro #170

- Rotina de emprego não encontrada. Verifique se a rotina referenciada existe.

### Código de Erro #171

- Variável não encontrada. Verifique se a variável foi declarada.

### Código de Erro #172

- Tipo inexistente. Verifique se o tipo da variável é válido.

### Código de Erro #173

- Tamanho de tipo inválido para pilha. Use tipos de 8, 16 ou 32 bits.

### Código de Erro #174

- Variável inexistente. Verifique se a variável foi declarada.

### Código de Erro #175

- Tipo inexistente. Verifique se o tipo da variável é válido.

### Código de Erro #176

- Tamanho de tipo inválido. Use tipos de 8, 16 ou 32 bits.

### Código de Erro #177

- Categoria de variável inválida. A variável deve ser um parâmetro.

### Código de Erro #178

- Emprego de rotina não encontrado. Verifique a referência da rotina.

### Código de Erro #179

- Referência recursiva em 'Empregue'. Evite ciclos ao usar 'Empregue' .

### Código de Erro #180

- Erro interno: Variável inexistente em 'Transforme um fragmento em código hexadecimal (increment)'.

### Código de Erro #181

- Erro interno: Categoria da variável temporária de compilação inválida em 'Transforme um fragmento em código hexadecimal (increment)'.

### Código de Erro #182

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (desvio caso resultado negativo)'.

### Código de Erro #183

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (cláusula de retorno)'.

### Código de Erro #184

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (cláusula de repetição)'.

### Código de Erro #185

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (cláusula de interrupção)'.

### Código de Erro #186

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (cláusula de interrupção)'.

### Código de Erro #187

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (empilhamento de valor)'.

### Código de Erro #188

- Erro interno: Tipo não encontrado em 'Transforme um fragmento em código hexadecimal (empilhamento de valor)'.

### Código de Erro #189

- Erro interno: Tamanho inválido em 'Transforme um fragmento em código hexadecimal (empilhamento de valor)'.

### Código de Erro #190

- Erro interno: Variável não localizada em 'Transforme um fragmento em código hexadecimal (registrador EAX)'.

### Código de Erro #191

- Erro interno: Tipo não localizado em 'Transforme um fragmento em código hexadecimal (registrador EAX)'.

### Código de Erro #192

- Erro interno: Tamanho inválido em 'Transforme um fragmento em código hexadecimal (registrador EAX)'.

### Código de Erro #193

- Erro interno: Rotina não encontrada em 'Transforme um fragmento em código hexadecimal (endereço de rotina)'.

### Código de Erro #194

- Erro interno: Rotina de inicialização PE não encontrada em 'Inicialize um Cabeçalho PE (cabeçalho opcional)'.
