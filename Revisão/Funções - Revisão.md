# Funções - Revisão

## Resumo do arquivo original
- Funções retornam valores booleanos (`sim` ou `não`)
- **Sintaxe de declaração**: `Função para que se determine se <expressão>:` com retorno `Diga sim` ou `Diga não`
- **Uso**: Exclusivamente em expressões condicionais (`Se`)
- **Parâmetros**: Indicados por artigos indefinidos (`um`, `uma`, `uns`, `umas`)
- **Sobrecarga**: Múltiplos nomes separados por `;`
- **Restrições**: Só podem ser chamadas em condicionais; não podem ser chamadas diretamente como rotinas
- **Preserve**: Comando para criar cópias de parâmetros

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa funções conforme documentação
- Usa `Função para que se determine se` corretamente
- Retorna `sim`/`não` com `Diga sim`/`Diga não`
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que funções só sejam chamadas em condicionais
- Validar que retorno é sempre booleano
- Verificar se sobrecarga funciona corretamente

## Decisões de design para futuro mapeamento Langium
- `Função para que se determine se` é a palavra-chave de declaração
- Retorno obrigatório: `Diga sim` ou `Diga não`
- Parâmetros usam artigos indefinidos
- Sobrecarga suportada via múltiplos nomes

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Declaração de função
Função para que se determine se um ponteiro existe:
  Se o ponteiro for inexistente, diga não.
  Diga sim.

\ Chamada em condicional
Se o ponteiro existe, processe o dado.

\ Função com laço
Função para que se determine se uma string está vazia:
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, diga sim.
    Diga não.
  Reitere.
```

(Arquivo de revisão criado em `Revisão/Funções - Revisão.md`)