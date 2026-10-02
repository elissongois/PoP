# Possessivos - Revisão

## Resumo do arquivo original
- Possessivos são operadores de acesso a membros (equivalentes ao ponto `.` em outras linguagens)
- **Formas**: `deste`, `desta`, `destes`, `destas` (formas adjacentes)
- **Formas ambangentes**: `desse`, `dessa`, `desses`, `dessas`, `daquele`, `daquela`, `daqueles`, `daquelas` (acesso a campos calculados de tipos ou variáveis locais inicializadas em invocação de rotina)
- **Sintaxe**: `<campo> <possessivo> <estrutura>` ou encadeado para múltiplos níveis
- **Razão de ser**: Evitar ambiguidade com preposições `de`, `do`, `da`, `dos`, `das` que podem fazer parte de nomes de variáveis
- **Invariância**: As formas não afetam funcionalidade, apenas concordância estilística
- **Estruturas e listas**: Ambas usam possessivos para acesso a membros
- **Case-insensitive**: Como toda a linguagem

## Divergências encontradas vs Algoritmo Janela
- O algoritmo Janela não usa possessivos diretamente — a linguagem usa `compartilhe` e `use`
- Não há exemplos de uso de possessivos em Algoritmos/
- A documentação de compilador menciona que `desta` é usada para acesso a membros em estruturas
- Possível necessidade de validar exemplos com estruturas aninhadas

## Correções / Ajustes propostos
- Adicionar exemplos de estruturas aninhadas para melhor referência
- Verificar se `próxima` (usada em listas) é palavra reservada ou pode ser nome de variável
- Garantir que possessivos ambangentes (`desse`, `dessa`, etc.) sejam devidamente documentados

## Decisões de design para futuro mapeamento Langium
- Possessivos devem ser um único terminal com múltiplas alternativas
- Distinguir entre formas adjacentes (acesso direto) e ambangentes (campos calculados)
- `AcessoMembro`: campo=Identificador possessivo=Possessivo estrutura=Expressao
- Permitir encadeamento para estruturas aninhadas

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
*(Nenhum exemplo direto de possessivos no algoritmo Janela)*

Referência da documentação de compilador:
```pop
Atribua o valor para o nome desta pessoa.
Escreva o nome deste arquivo para StdOut.
```

(Arquivo de revisão criado em `Revisão/Possessivos - Revisão.md`)