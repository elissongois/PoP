# 00 - Etapa Inicial
[00 - Etapa Inicial](<../Código-Fonte/00 - Etapa Inicial.pop> "00 - Etapa Inicial")

**Resumo:** Definições fundamentais do compilador, incluindo estruturas de dados principais (tipos, variáveis, rotinas, fragmentos), constantes do sistema (endereços base, etiquetas), headers DOS/PE, e inicialização básica do compilador.

# 01 - Inicialização
[01 - Inicialização](<../Código-Fonte/01 - Inicialização.pop> "01 - Inicialização")

**Resumo:** Rotinas de inicialização do compilador, configuração de catálogos (tipos, variáveis globais, rotinas), definição de tipos primitivos (byte, estrutura), e preparação do ambiente de compilação.

# 02 - Carregamento do código fonte
[02 - Carregamento do código fonte](<../Código-Fonte/02 - Carregamento do código fonte.pop> "02 - Carregamento do código fonte")

**Resumo:** Carregamento e parsing dos arquivos .pop, incluindo a biblioteca padrão, expansão de contrações linguísticas, tratamento de comentários, strings literais, e preparação do código para análise.

# 03 - Validação do código fonte
[03 - Validação do código fonte](<../Código-Fonte/03 - Validação do código fonte.pop> "03 - Validação do código fonte")

**Resumo:** Análise sintática detalhada do código fonte, validação de tipos (estruturas, arrays, ponteiros), variáveis globais, cabeçalhos de rotinas, tratamento de erros de compilação com localização precisa de erros.

# 04 - Identificação de tipos
[04 - Identificação de tipos](<../Código-Fonte/04 - Identificação de tipos.pop> "04 - Identificação de tipos")

**Resumo:** Resolução e categorização de tipos de dados, tratamento de listas encadeadas, estruturas, ponteiros, tipos fracionários, eliminação de ambiguidades e verificação de definições recursivas.

# 05 - Identificação de variáveis globais
[05 - Identificação de variáveis globais](<../Código-Fonte/05 - Identificação de variáveis globais.pop> "05 - Identificação de variáveis globais")

**Resumo:** Processamento e catalogação de variáveis globais, análise de inicialização, verificação de conflitos de nomes, e preparação para alocação de memória estática.

# 06 - Compilação dos cabeçalhos de rotina
[06 - Compilação dos cabeçalhos de rotina](<../Código-Fonte/06 - Compilação dos cabeçalhos de rotina.pop> "06 - Compilação dos cabeçalhos de rotina")

**Resumo:** Análise detalhada dos cabeçalhos de funções e procedimentos, parsing de parâmetros, identificação de tipos de retorno, e preparação para compilação do corpo das rotinas.

# 07 - Cálculo de tamanhos e deslocamentos
[07 - Cálculo de tamanhos e deslocamentos](<../Código-Fonte/07 - Cálculo de tamanhos e deslocamentos.pop> "07 - Cálculo de tamanhos e deslocamentos")

**Resumo:** Cálculos de memória necessários para tipos, variáveis e rotinas, determinação de deslocamentos na stack, alinhamento de dados, e preparação para alocação de memória.

# 08 - Gerenciamento de memória
[08 - Gerenciamento de memória](<../Código-Fonte/08 - Gerenciamento de memória.pop> "08 - Gerenciamento de memória")

**Resumo:** Alocação dinâmica de memória para estruturas de dados do compilador, gerenciamento de heaps, buffers temporários, e controle de recursos de memória durante a compilação.

# 09 - Identificação de rotinas
[09 - Identificação de rotinas](<../Código-Fonte/09 - Identificação de rotinas.pop> "09 - Identificação de rotinas")

**Resumo:** Análise completa de rotinas definidas pelo usuário, categorização por tipo (função, procedimento), análise de dependências, e catalogação para compilação posterior.

# 10 - Rotinas pré e pós execução
[10 - Rotinas pré e pós execução](<../Código-Fonte/10 - Rotinas pré e pós execução.pop> "10 - Rotinas pré e pós execução")

**Resumo:** Rotinas auxiliares de suporte à execução, manipulação de stack, chamadas de sistema, tratamento de interrupções, e funcionalidades de suporte ao runtime.

# 11 - Rotina de inicialização
[11 - Rotina de inicialização](<../Código-Fonte/11 - Rotina de inicialização.pop> "11 - Rotina de inicialização")

**Resumo:** Geração e compilação da rotina de inicialização do programa, configuração do ambiente de execução, inicialização de variáveis globais, e preparação do ponto de entrada.

# 12 - Parâmetros e variáveis
[12 - Parâmetros e variáveis](<../Código-Fonte/12 - Parâmetros e variáveis.pop> "12 - Parâmetros e variáveis")

**Resumo:** Processamento detalhado de parâmetros de rotinas e variáveis locais, cálculo de deslocamentos na stack, determinação de métodos de passagem (por valor/referência), e alocação de espaço local.

# 13 - Endereçamento de itens
[13 - Endereçamento de itens](<../Código-Fonte/13 - Endereçamento de itens.pop> "13 - Endereçamento de itens")

**Resumo:** Cálculo preciso de endereços de memória para todas as entidades (variáveis, rotinas, tipos), resolução de referências, e preparação para geração de código final.

# 14 - Transmutação
[14 - Transmutação](<../Código-Fonte/14 - Transmutação.pop> "14 - Transmutação")

**Resumo:** Conversão do código intermediate para linguagem assembly/x86, geração de instruções de máquina, otimizações de código, e produção do código binário final.

# 15 - Vinculação
[15 - Vinculação](<../Código-Fonte/15 - Vinculação.pop> "15 - Vinculação")

**Resumo:** Linking final do programa, resolução de símbolos externos, vinculação com DLLs, ajustamento de endereços absolutos, e produção do arquivo objeto final.

# 16 - Etapa Final
[16 - Etapa Final](<../Código-Fonte/16 - Etapa Final.pop> "16 - Etapa Final")

**Resumo:** Finalização do processo de compilação, geração do arquivo executável (.exe), escrita no sistema de arquivos, relatórios de compilação, listagens detalhadas, e limpeza de recursos.
