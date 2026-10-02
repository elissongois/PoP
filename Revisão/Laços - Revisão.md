# Laços - Revisão

## Resumo do arquivo original
- **Tipo único de laço**: Equivalente a `while(true)` em outras linguagens
- **Palavras-chave**:
  - `Itere`: Início do laço (opcional se for a primeira instrução da rotina)
  - `Reitere`: Fim do laço OU volta ao início (continue)
  - `Pare`: Sai do laço (break)
  - `Retorne`: Sai da rotina (return)
- **Restrições**:
  - Não permite aninhamento (laços dentro de laços)
  - Não há iteradores automáticos
- **Escopo**: Variáveis declaradas no laço persistem no escopo da rotina
- **Omissão**: `Itere` pode ser omitido no início da rotina

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa laços conforme documentação
- Usa `Itere`, `Reitere`, `Pare`, `Retorne` corretamente
- Não há divergências significativas

## Correções / Ajustes propostos
- Garantir que aninhamento seja realmente proibido
- Validar que `Itere` pode ser omitido corretamente
- Verificar se `Reitere` funciona como `continue` e como fim de laço

## Decisões de design para futuro mapeamento Langium
- Apenas um tipo de laço (`while(true)`)
- `Itere` opcional no início da rotina
- `Reitere` tem dois usos: fim de laço e continue
- Sem suporte a `for`, `while`, `do-while`

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
\ Laço com contador
Atribua 0 para um contador.
Itere.
  Adicione 1 para o contador.
  Se o contador for maior do que 100, pare.
  \ processa...
Reitere.

\ Laço de eventos
Rotina para que se execute o programa:
  Inicialize os componentes.
  Itere.
    Desenfileire um evento.
    Se o evento for inexistente, pare.
    Processe o evento.
  Reitere.
  Feche o programa.
```

(Arquivo de revisão criado em `Revisão/Laços - Revisão.md`)