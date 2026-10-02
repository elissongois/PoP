# Expressões - Revisão

## Resumo do arquivo original
- Combinações de valores, variáveis e operadores que produzem um resultado
- **Avaliação**: Sequencial da esquerda para direita (sem precedência)
- **Operadores**: Aritméticos (`mais`, `menos`, `vezes`, `dividido por`) e Concatenação (`junto com`, `seguido de`)
- **Restrições**: Sem parênteses, sem operadores unários
- **Operador `e`**: Usado para separar argumentos em `Processe` (não em expressões aritméticas)
- **Conversão de tipos**: Número→string automática em concatenação; string→número requer `Converta`
- **Acesso a campos**: Via possessivos (`deste`, `desta`, `desse`, `dessa`, etc.)

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa expressões corretamente com avaliação esquerda→direita
- Usa `junto com` para concatenação
- Usa possessivos para acesso a campos
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que `e` não seja usado indevidamente em expressões aritméticas
- Validar se `seguido de` e `junto com` são completamente sinônimos
- Verificar se conversão automática funciona corretamente em concatenação

## Decisões de design para futuro mapeamento Langium
- Expressões não têm precedência (tudo sequencial)
- Não suportar parênteses para agrupamento
- Operador `e` é apenas para `Processe`, não para expressões
- Possessivos seguem regras de `Possessivos.md`

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Aritmética sequencial
Atribua a largura menos 10 para a nova largura.
Atribua a posição inicial mais o deslocamento para a posição final.

\ Concatenação
Atribua o texto junto com "!" para a saudação.
Escreva "Bem-vindo" junto com o nome para StdOut.

\ Campos
Atribua a coordenada X desta janela mais a largura para o limite.
```

(Arquivo de revisão criado em `Revisão/Expressões - Revisão.md`)