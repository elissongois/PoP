# Operadores - Revisão

## Resumo do arquivo original
- **4 categorias de operadores**: Aritméticos, Comparação, Concatenação, Lógicos
- **Características importantes**:
  - Sem precedência de operadores (avaliação da esquerda para direita)
  - `2 mais 3 vezes 4 = 20` (não 14)
  - Duas formas: comandos imperativos e expressões
  - Case-insensitive

- **Operadores Aritméticos**:
  - Comandos: `Adicione`, `Subtraia`, `Multiplique`, `Divida`
  - Expressões: `mais`, `menos`, `vezes`, `multiplicado por`, `dividido por`

- **Operadores de Comparação**:
  - Igualdade: `for`, `é`, `está` + `igual a`
  - Desigualdade: `não for`, `não é`, `não está`
  - Numéricos: `maior do que`, `menor do que`, `maior ou igual a`, `menor ou igual a`, `excede`, `supera`
  - Estado: `for nulo`, `estiver em branco`, `existe`

- **Operadores de Concatenação**:
  - Comandos: `Acrescente`, `Anteponha`
  - Expressões: `junto com`, `seguido de`, `acompanhado de`

- **Operadores Lógicos**:
  - `não` (inversão)
  - `e`, `ou`, `nem` (simuláveis via funções)

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa expressões aritméticas como `100 mais 50` corretamente
- Usa `junto com` para concatenação de strings
- Usa `é` para atribuição: `Atribua o valor para X.`
- Não há divergências significativas com a documentação

## Correções / Ajustes propostos
- Verificar se `é` é usado como operador de igualdade em condições (`Se o valor é 0`)
- Garantir consistência entre `para` e `em` em comandos imperativos
- Validar se `com` é operador de concatenação válido (mencionado em exemplos)

## Decisões de design para futuro mapeamento Langium
- Não há precedência de operadores (tudo é sequencial)
- Comandos e expressões devem ser tratados como regras separadas
- Operadores lógicos `e`, `ou`, `nem` são simulados via funções (não operadores nativos)
- Case-insensitivity deve ser aplicado a todos os operadores

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Aritmética
Atribua 100 mais 50 para uma soma.
Atribua a largura menos 10 para a nova largura.

\ Concatenação
Atribua o texto junto com "!" para a saudação.
Escreva "Bem-vindo" junto com o nome para StdOut.

\ Comparação
Se a largura for maior do que 100, ajuste.
Se o nome estiver em branco, solicite entrada.
```

(Arquivo de revisão criado em `Revisão/Operadores - Revisão.md`)