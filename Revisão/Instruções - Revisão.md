# Instruções - Revisão

## Resumo do arquivo original
- Instruções são comandos que executam ações específicas
- **Categorias principais**:
  - Atribuição e Manipulação: `Atribua`, `Adicione`, `Subtraia`, `Multiplique`, `Divida`, `Acrescente`, `Remova`
  - Conversão de Tipos: `Converta`, `tal como`/`tal qual`
  - Controle de Fluxo: `Se`, `Itere`, `Reitere`, `Pare`, `Retorne`
  - Entrada/Saída: `Escreva`, `Leia`
  - Memória: `Aloque`, `Desaloque`, `Preserve`, `Reaponte`
  - Chamadas: `Processe`, `Decodifique`

- **Separadores**: `;` entre instruções no bloco, `.` na última
- **Preposições**: `para`/`ao`/`à` são sinônimas
- **Contrações**: `à` = `para a`, `ao` = `para o`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa instruções corretamente conforme documentação
- Usa `Atribua`, `Escreva`, `Processe`, `Aloque`, `Desaloque`
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que `tal como` e `tal qual` sejam completamente sinônimos
- Validar sintaxe de `Processe` com múltiplos parâmetros
- Verificar se `Remova` funciona corretamente para strings e listas

## Decisões de design para futuro mapeamento Langium
- Instruções são regras separadas para cada tipo
- Preposições sinônimas devem ser agrupadas
- `Processe` precisa de suporte para argumentos variáveis com `e`
- `Decodifique` aceita literais hexadecimais

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Atribuição
Atribua 0 para um contador.
Atribua "texto" para a mensagem.

\ Entrada/Saída
Escreva "Resultado: " junto com o valor para StdOut.

\ Memória
Aloque memória para uma estrutura.
Desaloque memória para a estrutura.

\ Chamada externa
Processe "user32.dll" "MessageBoxA" com
  0 e
  "Olá" e
  "Título" e
  0
Retornando o status.
```

(Arquivo de revisão criado em `Revisão/Instruções - Revisão.md`)