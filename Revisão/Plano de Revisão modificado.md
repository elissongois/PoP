# Plano de Revisão das Regras
[](<..//> "")
## Objetivo
Revisar e corrigir cada arquivo da pasta [Regras](<../Regras/> "Regras") comparando com:
- Exemplos reais em [Algoritmos](<../Algoritmos/> "Algoritmos") (Agenda Telefônica, Basteroides, Janela, Sudoku) 
- Documentação do compilador em [Documentação](<../Documentação/> "Documentação")
- Índices em [Índices](<../Índices/> "Índices") para referência cruzada

## Critérios
- Reduzir redundâncias
- Manter informações suficientes para `Mapeamento para Langium` posterior
- Ignorar seções "Mapeamento para Langium" (serão feitas após revisão completa)
- Corrigir divergências entre docs, gramática e exemplos
- Documentar decisões tomadas

## Ordem de Revisão (27 arquivos)

### Fase 1: Fundamentos Léxicos
- [ ] 1. Símbolos.md
- [ ] 2. Comentários.md
- [ ] 3. Valores Literais.md
- [ ] 4. Strings Literais.md
- [ ] 5. Artigos.md
- [ ] 6. Pronomes.md
- [ ] 7. Preposições.md
- [ ] 8. Conjunções.md
- [ ] 9. Advérbios.md
- [ ] 10. Verbos.md
- [ ] 11. Palavras-Chave.md
- [ ] 12. Qualificadores.md

### Fase 2: Tipos e Variáveis
- [ ] 13. Tipos.md
- [ ] 14. Variáveis Globais.md
- [ ] 15. Variáveis Locais.md
- [ ] 16. Possessivos.md
- [ ] 17. Campos Calculados.md

### Fase 3: Expressões e Operações
- [ ] 18. Operadores.md
- [ ] 19. Expressões.md

### Fase 4: Controle de Fluxo
- [ ] 20. Instruções.md
- [ ] 21. Condicionais.md
- [ ] 22. Laços.md

### Fase 5: Modularização
- [ ] 23. Funções.md
- [ ] 24. Rotinas.md
- [ ] 25. Callbacks.md

### Fase 6: Recursos Avançados
- [ ] 26. Processe.md

## Formato de cada revisão
Para cada arquivo da pasta [Regras](<../Regras/> "Regras"), criar em [Revisão](<../Revisão/> "Revisão") um arquivo `<Nome Original> - Revisão.md` contendo:
1. **Resumo do arquivo original** (pontos principais)
2. **Divergências encontradas** (vs algoritmos, docs, gramática)
3. **Correções propostas**
4. **Decisões de design** (para Langium posterior)
5. **Exemplos de uso real** (extraídos de [Algoritmos](<../Algoritmos/> "Algoritmos"))

## Status
- Total: 27 arquivos
- Concluídos: 0
- Em andamento: 0
- Pendentes: 27