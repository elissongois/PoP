# Condicionais - Revisão

## Resumo do arquivo original
- Condicionais permitem execução condicional baseada em expressões booleanas
- **Sintaxe**: `Se <expressão>, <instruções>` com `;` entre instruções e `.` na última
- **Restrições**:
  - Não permite aninhamento (condicionais dentro de condicionais)
  - Não há `else` ou `else if`
  - Apenas funções deliberativas na expressão condicional
- **Verbos comuns**: `for`, `estiver`, `não for`, `não estiver`, `maior do que`, `menor do que`, etc.
- **Declaração inline**: Variáveis podem ser declaradas na expressão e persistem no escopo

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa condicionais conforme documentação
- Usa `Se condição, instruções.` corretamente
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que aninhamento seja realmente proibido
- Validar que `else` não é suportado
- Verificar se verbos condicionais cobrem todos os casos necessários

## Decisões de design para futuro mapeamento Langium
- `Se` é a única palavra-chave condicional
- Vírgula é obrigatória após expressão
- Bloco de instruções usa `;` e `.`
- Sem suporte a `else` ou aninhamento

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Validação
Se a largura for menor do que 1, retorne.
Se o nome estiver em branco, solicite entrada.

\ Controle de fluxo
Se o ponteiro for inexistente, retorne.
Se o arquivo não existe, crie-o.

\ Comparação
Se o contador for maior do que 100, pare.
Se o número não for 0, processe.
```

(Arquivo de revisão criado em `Revisão/Condicionais - Revisão.md`)