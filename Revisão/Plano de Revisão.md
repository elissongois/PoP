# Plano de Revisão das Regras

## Objetivo
Revisar e corrigir cada arquivo da pasta `Regras/` comparando com:
- Exemplos reais em `Algoritmos/` (Agenda Telefônica, Basteroides, Janela, Sudoku)
- Documentação do compilador em `Documentação/`
- Índices em `Índices/` para referência cruzada

## Critérios
- Reduzir redundâncias
- Manter informações suficientes para Mapeamento para Langium posterior
- Ignorar seções "Mapeamento para Langium" (serão feitas após revisão completa)
- Corrigir divergências entre docs, gramática e exemplos
- Documentar decisões tomadas

## Ordem de Revisão (27 arquivos)

### Fase 1: Fundamentos Léxicos
- [x] 1. Símbolos.md
- [x] 2. Comentários.md
- [x] 3. Valores Literais.md
- [x] 4. Strings Literais.md
- [x] 5. Artigos.md
- [x] 6. Pronomes.md
- [x] 7. Preposições.md
- [x] 8. Conjunções.md
- [x] 9. Advérbios.md
- [x] 10. Verbos.md
- [x] 11. Palavras-Chave.md
- [x] 12. Qualificadores.md

### Fase 2: Tipos e Variáveis
- [x] 13. Tipos.md
- [x] 14. Variáveis Globais.md
- [x] 15. Variáveis Locais.md
- [x] 16. Possessivos.md
- [x] 17. Campos Calculados.md

### Fase 3: Expressões e Operações
- [x] 18. Operadores.md
- [x] 19. Expressões.md

### Fase 4: Controle de Fluxo
- [x] 20. Instruções.md
- [x] 21. Condicionais.md
- [x] 22. Laços.md

### Fase 5: Modularização
- [x] 23. Funções.md
- [x] 24. Rotinas.md
- [x] 25. Callbacks.md

### Fase 6: Recursos Avançados
- [x] 26. Processe.md

## Formato de cada revisão
Para cada arquivo, criar em `Revisão/` um arquivo `<Nome Original> - Revisão.md` contendo:
1. **Resumo do arquivo original** (pontos principais)
2. **Divergências encontradas** (vs algoritmos, docs, gramática)
3. **Correções propostas**
4. **Decisões de design** (para Langium posterior)
5. **Exemplos de uso real** (extraídos de `Algoritmos/`)

## Status
- Total: 26 arquivos (excluindo Índice de Elementos Léxicos.md)
- Concluídos: 26
- Em andamento: 0
- Pendentes: 0

## Próximos Passos
Após revisão completa, iniciar o Mapeamento para Langium usando as decisões de design documentadas em cada arquivo de revisão.
