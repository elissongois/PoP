# Comentários - Revisão

## Resumo do arquivo original
- Descrição detalhada dos tipos de comentários em Português Puro:
  - Comentários (linha única, delimitados por `\` até o fim da linha)
  - Comentários em linha (observações, delimitados por `[]`)
  - Comentários multilinha (usam `\` em cada linha)
- Exemplos de sintaxe, uso e boas práticas.
- Comparação entre comentários e qualificadores.
- Códigos de erro específicos para comentários (`#005`, `#006`).
- Validação de balanceamento de colchetes e aninhamento.

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa **comentários em linha** `[]` (ex.: `\\ Comentário no final da linha`).
- Comentários multilinha são representados por `\` em cada linha (ex.: `\\ Comentário com mais destaque`).
- A sintaxe está totalmente
- **Correspondência**: Sintaxe de comentário em linha (`[]`) e de linha (`\`) está alinhada com a documentação.
- **Não há** uso de comentários multilinha (`\` em cada linha) no algoritmo, mas? Verificamos no arquivo: Sim, existem exemplos como `\\ Comentário com mais destaque (duas barras)` (linha 48) e `\\ Comentário no final da linha` (linha 46). Portanto, o algoritmo segue as regras documentadas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção clara entre comentários de linha (`\`) e comentários em linha (`[]`).
- Garantir que o compilador ignore comentários de linha (`[]`) como observações e não os trate como comentários de bloco.

## Decisões de design para futuro mapeamento Langium
- **Comentário de linha**: Mapear como `//` no Langium (ou equivalente).
- **Comentário em linha**: Mapear como `[]` no Langium, com validação de balanceamento de colchetes.
- **Comentário multilinha**: Mapear como `\\` em cada linha, com suporte a aninhamento de colchetes se necessário.
- **Códigos de erro**: `#005` e `#006` devem ser replicados no parser para garantir consistência.

## Exemplos de uso extraídos de `Algoritmos/Janela/Janela.pop`
```pop
\\ Comentário no final da linha
\\ Processa cada item (destaque)
   \ Verifica condição de parada
   Se o contador for maior que 100, pare.
   Adicione 1 para o contador.
```
```pop
Rotina para que se teste funcionalidade:
   Escreva "Teste ativo" no console.
   \\ Escreva "Teste desabilitado" no console.
   \\ Atribua 0 para o contador.
   \\ Pare.
```

(Arquivo de revisão criado em `Revisão/Comentários - Revisão.md`)