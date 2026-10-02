# Resumo da Revisão das Regras

## Visão Geral
Foram revisados 26 arquivos da pasta `Regras/`, criando arquivos de revisão em `Revisão/` para cada um.

## Arquivos Revisados

### Fase 1: Fundamentos Léxicos (12 arquivos)
1. **Símbolos** - Operadores e símbolos da linguagem
2. **Comentários** - Comentários de linha `\\` e bloco `[...]`
3. **Valores Literais** - Números, frações, hexadecimais
4. **Strings Literais** - Aspas duplas e simples
5. **Artigos** - Definidos e indefinidos
6. **Pronomes** - Demonstrativos e possessivos
7. **Preposições** - `para`, `em`, `de`, `desde`, etc.
8. **Conjunções** - `e`, `ou`, `nem`
9. **Advérbios** - `talvez`, `sempre`, etc.
10. **Verbos** - Infinitivos, participios
11. **Palavras-Chave** - Termos reservados
12. **Qualificadores** - `denominado`, `chamado`, etc.

### Fase 2: Tipos e Variáveis (5 arquivos)
13. **Tipos** - Número, string, fração, byte, booleano, estruturas
14. **Variáveis Globais** - Acessíveis em todo o programa
15. **Variáveis Locais** - Escopo de rotina
16. **Possessivos** - Acesso a membros (`desta`, `deste`)
17. **Campos Calculados** - Campos virtuais calculados por rotinas

### Fase 3: Expressões e Operações (2 arquivos)
18. **Operadores** - Aritméticos, comparação, concatenação, lógicos
19. **Expressões** - Combinações de valores com operadores

### Fase 4: Controle de Fluxo (3 arquivos)
20. **Instruções** - Comandos básicos (`Atribua`, `Escreva`, etc.)
21. **Condicionais** - `Se` com expressões booleanas
22. **Laços** - `Itere`, `Reitere`, `Pare`

### Fase 5: Modularização (3 arquivos)
23. **Funções** - Retornam booleanos (`Diga sim`/`Diga não`)
24. **Rotinas** - Procedimentos sem retorno
25. **Callbacks** - Ponteiros para rotinas (`compativelmente`, `Aponte`)

### Fase 6: Recursos Avançados (1 arquivo)
26. **Processe** - Chamadas externas (APIs Windows)

## Principais Constatações

### Divergências Encontradas
- **Mínimas divergências** entre documentação, exemplos e regras
- Algoritmos usam a linguagem conforme documentado
- Necessidade de validar possessivos ambangentes em estruturas aninhadas

### Decisões de Design para Langium
1. **Sem precedência de operadores** - Avaliação sequencial esquerda→direita
2. **Condicionais sem aninhamento** - Apenas `Se`, sem `else`
3. **Laços únicos** - `while(true)` com `Itere`, `Reitere`, `Pare`
4. **Funções deliberativas** - Retornam booleanos, usadas apenas em `Se`
5. **Rotinas diretas** - Chamadas sem `Rotina para que se`
6. **Callbacks** - `compativelmente` para stdcall Windows
7. **Possessivos** - Adjacentes para campos, abrangentes para tipos

### Padrões Confirmados nos Algoritmos
- Janela usa rotinas, laços, condicionais corretamente
- Usa `Processe` para APIs Windows
- Usa possessivos para acesso a campos
- Sintaxe consistente com documentação

## Próximos Passos
1. **Mapeamento para Langium** - Usar decisões de design documentadas
2. **Validação com exemplos** - Testar gramática com algoritmos reais
3. **Correção de divergências** - Ajustar `Regras/` conforme necessidade
4. **Documentação final** - Consolidar decisões tomadas

## Conclusão
A revisão foi concluída com sucesso. Os arquivos de `Regras/` estão consistentes com os exemplos em `Algoritmos/` e a documentação do compilador. As decisões de design documentadas servirão como base para o mapeamento Langium.
