# Documentação do Português Puro

Este índice é a entrada para a documentação local do projeto. As pastas estão agrupadas por finalidade:

| Pasta | Conteúdo |
|---|---|
| [`Regras/`](./Regras/) | Referência normativa da linguagem, organizada por assunto. |
| [`Guia do Usuário/`](./Guia%20do%20Usu%C3%A1rio/LEIA-ME.md) | Percurso didático dividido em módulos. |
| [`Referência/`](./Refer%C3%AAncia/) | Características, guia sintático, FAQ, palavras-chave e arquivos de consulta arquivados. |
| [`Compilador/`](./Compilador/) | Documentação técnica sobre a implementação do compilador. |
| [`GitBook/`](./GitBook/) | Backup da documentação online; não editar sem ordem expressa. |
| [`Wiki/`](./Wiki/) | Repositório desatualizado, aguardando atualização após a revisão da documentação. |

O [`Inventário do vocabulário documentado`](./Invent%C3%A1rio%20do%20vocabul%C3%A1rio%20documentado.md) registra categorias lexicais consultadas e lacunas conhecidas.

Há conteúdos redundantes entre as áreas didática, normativa e de referência. Para semântica da linguagem, consulte primeiro `Regras/`; os outros materiais servem como introdução, consulta rápida ou contexto técnico. `GitBook/` é um backup e não deve ser editado sem ordem expressa. `Wiki/` está desatualizada e seu conteúdo não deve ser lido, indexado ou alterado até a revisão da documentação ser concluída.

## Regras da linguagem

Os 33 capítulos da referência normativa estão em [`Regras/`](./Regras/):

### Parte I — Fundamentos

1. [Visão Geral](./Regras/Vis%C3%A3o%20Geral.md)
2. [Comentários](./Regras/Coment%C3%A1rios.md)
3. [Símbolos](./Regras/S%C3%ADmbolos.md)
4. [Valores Literais](./Regras/Valores%20Literais.md)
5. [Strings Literais](./Regras/Strings%20Literais.md)

### Parte II — Elementos gramaticais

6. [Artigos](./Regras/Artigos.md)
7. [Pronomes](./Regras/Pronomes.md)
8. [Preposições](./Regras/Preposi%C3%A7%C3%B5es.md)
9. [Conjunções](./Regras/Conjun%C3%A7%C3%B5es.md)
10. [Advérbios](./Regras/Adv%C3%A9rbios.md)
11. [Verbos](./Regras/Verbos.md)
12. [Palavras-chave](./Regras/Palavras-Chave.md)
13. [Qualificadores](./Regras/Qualificadores.md)

### Parte III — Tipos e variáveis

14. [Tipos](./Regras/Tipos.md)
15. [Estruturas e Uniões](./Regras/Estruturas%20e%20Uni%C3%B5es.md)
16. [Listas](./Regras/Listas.md)
17. [Conversão de Tipos](./Regras/Convers%C3%A3o%20de%20Tipos.md)
18. [Variáveis Globais](./Regras/Vari%C3%A1veis%20Globais.md)
19. [Variáveis Locais](./Regras/Vari%C3%A1veis%20Locais.md)
20. [Possessivos](./Regras/Possessivos.md)
21. [Campos Calculados](./Regras/Campos%20Calculados.md)
22. [Gerenciamento de Memória](./Regras/Gerenciamento%20de%20Mem%C3%B3ria.md)

### Parte IV — Expressões e operações

23. [Operadores](./Regras/Operadores.md)
24. [Expressões](./Regras/Express%C3%B5es.md)

### Parte V — Controle de fluxo

25. [Instruções](./Regras/Instru%C3%A7%C3%B5es.md)
26. [Condicionais](./Regras/Condicionais.md)
27. [Laços](./Regras/La%C3%A7os.md)

### Parte VI — Modularização

28. [Funções](./Regras/Fun%C3%A7%C3%B5es.md)
29. [Rotinas](./Regras/Rotinas.md)
30. [Callbacks](./Regras/Callbacks.md)

### Parte VII — Recursos avançados

31. [Processe](./Regras/Processe.md)
32. [Instruções de Máquina](./Regras/Instru%C3%A7%C3%B5es%20de%20M%C3%A1quina.md)
33. [Subtextos e Percorredores](./Regras/Subtextos%20e%20Percorredores.md)

O [Índice de Elementos Léxicos](./Regras/%C3%8Dndice%20de%20Elementos%20L%C3%A9xicos.md) registra categorias já formalizadas e lacunas de documentação.

## Guia do usuário

Comece pelo [índice do guia](./Guia%20do%20Usu%C3%A1rio/LEIA-ME.md), que organiza os módulos:

1. [Introdução](./Guia%20do%20Usu%C3%A1rio/01_INTRODU%C3%87%C3%83O.md)
2. [Sintaxe e regras](./Guia%20do%20Usu%C3%A1rio/02_SINTAXE_E_REGRAS.md)
3. [Tipos](./Guia%20do%20Usu%C3%A1rio/03_TIPOS.md)
4. [Rotinas e funções](./Guia%20do%20Usu%C3%A1rio/04_ROTINAS_E_FUN%C3%87%C3%95ES.md)
5. [Controle de fluxo](./Guia%20do%20Usu%C3%A1rio/05_CONTROLE_DE_FLUXO.md)
6. [Memória e strings](./Guia%20do%20Usu%C3%A1rio/06_MEM%C3%93RIA_E_STRINGS.md)
7. [Biblioteca padrão e interoperabilidade](./Guia%20do%20Usu%C3%A1rio/07_BIBLIOTECA_PADR%C3%83O_E_INTEROPERABILIDADE.md)

## Referência

- [Características da Linguagem](./Refer%C3%AAncia/Caracter%C3%ADsticas%20da%20Linguagem.md)
- [Guia Sintático](./Refer%C3%AAncia/Guia%20Sint%C3%A1tico.md)
- [Palavras-chave](./Refer%C3%AAncia/Palavras-chave.md)
- [Respostas de Perguntas Frequentes](./Refer%C3%AAncia/Respostas%20de%20Perguntas%20Frequentes.md)
- [GitBook Compilado — cópia local de consulta](./Refer%C3%AAncia/GitBook%20Compilado.md)
- [Wiki Português Puro — exportação local](./Refer%C3%AAncia/Wiki%20Portugu%C3%AAs%20Puro.wiki)

Os dois últimos arquivos são materiais arquivados; `GitBook/` é o backup separado e não deve ser modificado sem autorização.

## Compilador

- [Documentação do Compilador](./Compilador/Documenta%C3%A7%C3%A3o%20do%20Compilador.md) — etapas e estruturas internas.
- [Sobre o compilador](./Compilador/Sobre%20o%20compilador.md) — análise e funcionamento geral.

## Documentação e estado do projeto

- [`Objetivos.md`](../Objetivos.md) — metas, estado do LSP e tarefas pendentes.
- [`Código/Índice.md`](../C%C3%B3digo/%C3%8Dndice.md) — navegação pelo código, bibliotecas, exemplos e índices.
