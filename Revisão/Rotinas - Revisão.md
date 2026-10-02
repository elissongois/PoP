# Rotinas - Revisão

## Resumo do arquivo original
- Rotinas são procedimentos que executam ações específicas
- **Sintaxe de declaração**: `Rotina para que se <nome>:` com corpo indentado
- **Chamada**: Diretamente pelo nome (sem `Rotina para que se`)
- **Parâmetros**: Indicados por artigos indefinidos (`um`, `uma`, `uns`, `umas`)
- **Sobrecarga**: Múltiplos nomes separados por `;`
- **Restrições**: Não retornam valores; não podem usar `Diga sim`/`Diga não`
- **Comandos**: `Retorne` (sai da rotina), `Preserve` (cópia de parâmetro)
- **Callbacks**: `compativelmente` para rotinas chamadas pelo Windows
- **Rotina principal**: `Rotina para que se execute o programa:`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa rotinas conforme documentação
- Usa `Rotina para que se execute o programa:` corretamente
- Chama rotinas diretamente pelo nome
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que rotinas não retornem valores
- Validar que `Preserve` e `original` funcionam corretamente
- Verificar se sobrecarga funciona em rotinas

## Decisões de design para futuro mapeamento Langium
- `Rotina para que se` é a palavra-chave de declaração
- Rotinas são chamadas diretamente pelo nome
- `compativelmente` é modificador para callbacks Windows
- Sobrecarga suportada via múltiplos nomes

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Rotina principal
Rotina para que se execute o programa:
  Inicialize os componentes.
  Mostre a janela principal.
  Processe eventos.
  Feche o programa.

\ Rotina com parâmetros
Rotina para que se desenhe uma janela usando uma cor e um texto:
  \ Implementação...

\ Chamada
Execute o programa.
Desenhe a janela usando a cor e o texto.

\ Rotina com Preserve
Rotina para que se processe um texto:
  Preserve o texto.
  \ Modifica apenas a cópia...
```

(Arquivo de revisão criado em `Revisão/Rotinas - Revisão.md`)