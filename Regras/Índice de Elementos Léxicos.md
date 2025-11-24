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

### Alta Prioridade
1. ⏳ Documentar **Casting** (`like`, `as`) - Adicionar em `Tipos.md` ou `Expressões.md`
2. ⏳ Revisar **Símbolos** para garantir cobertura de "Bytes Ignoráveis"

### Média Prioridade
3. ⏳ Documentar regras de **Unidades de Medida** (conversão automática)
4. ⏳ Detalhar **Indicadores de Início/Fim de Variável** (regras de parsing)

### Baixa Prioridade
5. ⏳ Otimizações do Compilador
6. ⏳ Detalhes de implementação (Análise de Termos Compostos)
