# Documentação Português Puro
## Índice de Capítulos

Toda a documentação de regras e sintaxe está reunida em `Regras/`. Os antigos capítulos numerados de `Sintaxe/` e as notas finais de `Final/` foram fundidos nestes arquivos.

---

## Parte I: Fundamentos da Linguagem

### 1. [Visão Geral](Regras/Visão%20Geral.md)
Paradigma, tipos, convenções de escrita, estrutura de um programa e índice por assunto.

### 2. [Comentários](Regras/Comentários.md)
Como documentar e desabilitar código temporariamente.

### 3. [Símbolos](Regras/Símbolos.md)
Caracteres permitidos, reservados e especiais da linguagem.

### 4. [Valores Literais](Regras/Valores%20Literais.md)
Números inteiros, frações, strings, booleanos e hexadecimais.

### 5. [Strings Literais](Regras/Strings%20Literais.md)
Detalhamento de strings e escape de caracteres.

---

## Parte II: Elementos Gramaticais Básicos

### 6. [Artigos](Regras/Artigos.md)
Artigos definidos e indefinidos (base para declarações).

### 7. [Pronomes](Regras/Pronomes.md)
Pronomes demonstrativos, possessivos e relativos.

### 8. [Preposições](Regras/Preposições.md)
Categorias de preposições e contrações.

### 9. [Conjunções](Regras/Conjunções.md)
Conjunções lógicas: `e`, `ou`, `nem`.

### 10. [Advérbios](Regras/Advérbios.md)
Advérbios de negação e tempo: `não`, `já`, `ainda`.

### 11. [Verbos](Regras/Verbos.md)
Lista completa e uso dos verbos da linguagem.

### 12. [Palavras-Chave](Regras/Palavras-Chave.md)
Palavras de designação, complementação e referenciamento.

### 13. [Qualificadores](Regras/Qualificadores.md)
Qualificadores de referência `(ref)` e documentais.

---

## Parte III: Tipos e Variáveis

### 14. [Tipos](Regras/Tipos.md)
Definição de tipos, estruturas, listas, escalares e ponteiros, com a tabela resumo dos tipos da biblioteca padrão.

### 15. [Estruturas e Uniões](Regras/Estruturas%20e%20Uniões.md)
Campos nomeados, inferidos e sobrepostos (`sob`), e uniões de dados.

### 16. [Listas](Regras/Listas.md)
Listas duplamente encadeadas, estrutura interna e manipulação.

### 17. [Conversão de Tipos](Regras/Conversão%20de%20Tipos.md)
Conversão automática, `Converta` e conversão forçada.

### 18. [Variáveis Globais](Regras/Variáveis%20Globais.md)
Declaração e uso de variáveis globais.

### 19. [Variáveis Locais](Regras/Variáveis%20Locais.md)
Escopo de variáveis e parâmetros.

### 20. [Possessivos](Regras/Possessivos.md)
Acesso a membros e possessivos abrangentes.

### 21. [Campos Calculados](Regras/Campos%20Calculados.md)
Definição e uso de campos virtuais.

### 22. [Gerenciamento de Memória](Regras/Gerenciamento%20de%20Memória.md)
`Aloque`, `Desaloque`, `Destrua`, `Preserve` e `Reaponte`.

---

## Parte IV: Expressões e Operações

### 23. [Operadores](Regras/Operadores.md)
Operadores aritméticos, lógicos e de comparação.

### 24. [Expressões](Regras/Expressões.md)
Avaliação de expressões, concatenação e precedência.

---

## Parte V: Controle de Fluxo

### 25. [Instruções](Regras/Instruções.md)
Instruções de atribuição, entrada/saída e memória.

### 26. [Condicionais](Regras/Condicionais.md)
Estruturas condicionais: `Se`, `Quando`.

### 27. [Laços](Regras/Laços.md)
Estruturas de repetição: `Itere`, `Reitere`, `Pare`.

---

## Parte VI: Modularização

### 28. [Funções](Regras/Funções.md)
Declaração de funções e retorno de valores.

### 29. [Rotinas](Regras/Rotinas.md)
Declaração e uso de rotinas (procedimentos).

### 30. [Callbacks](Regras/Callbacks.md)
Funções de callback e ponteiros para funções.

---

## Parte VII: Recursos Avançados

### 31. [Processe](Regras/Processe.md)
Chamadas externas para bibliotecas DLL e API Windows.

### 32. [Instruções de Máquina](Regras/Instruções%20de%20Máquina.md)
Assembly inline com `Decodifique`.

### 33. [Subtextos e Percorredores](Regras/Subtextos%20e%20Percorredores.md)
Subtextos e iteração sobre strings com o comando `Lance`.

---

## Controle de Progresso

- [Índice de Elementos Léxicos](Regras/Índice%20de%20Elementos%20Léxicos.md) — o que já foi formalizado nas regras e o que ainda falta.
- [Revisão/](Revisão/) — uma revisão por arquivo, com as decisões de design tomadas.

## Documentação em Prosa (`Documentação/`)

Cada assunto tem um único arquivo; não há mais cópias embutidas uns nos outros.

| Arquivo | Assunto |
|---------|---------|
| [Características da Linguagem.md](Documentação/Características%20da%20Linguagem.md) | Paradigmas, sistema de tipos, recursos e ferramentas da linguagem |
| [Guia Sintático.md](Documentação/Guia%20Sint%C3%A1tico.md) | Referência rápida de sintaxe (reúne o antigo cheat sheet) |
| [Palavras-chave.md](Documentação/Palavras-chave.md) | Lista das palavras da linguagem, por categoria léxica |
| [Respostas de Perguntas Frequentes.md](Documentação/Respostas%20de%20Perguntas%20Frequentes.md) | Dúvidas comuns de quem começa a programar |
| [Sobre o compilador.md](Documentação/Sobre%20o%20compilador.md) | Como o compilador analisa sintaxe, semântica e percorredores |
| [Documentação do Compilador.md](Documentação/Documenta%C3%A7%C3%A3o%20do%20Compilador.md) | Estruturas internas, etapas de compilação e análises léxica e sintática |
| [Documentação Português Puro.md](Documentação/Documenta%C3%A7%C3%A3o%20Portugu%C3%AAs%20Puro.md) | Tutorial longo, com exemplos completos |
| [Wiki Português Puro.wiki/](Documentação/Wiki%20Portugu%C3%AAs%20Puro.wiki) | Exportação da wiki do projeto |

---

## Sobre Esta Documentação

Esta documentação está organizada em ordem pedagógica, do mais simples ao mais complexo, agrupando assuntos correlatos para facilitar o aprendizado progressivo da linguagem **Português Puro**.

Cada capítulo constrói sobre o conhecimento dos anteriores, permitindo que você desenvolva uma compreensão sólida da linguagem passo a passo.

---

**Total de Capítulos:** 33
**Última Atualização:** 2026-10-31
