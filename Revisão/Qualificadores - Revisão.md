# Qualificadores - Revisão

## Resumo do arquivo original
- Qualificadores em Português Puro são informações adicionais entre parênteses `()`
- 2 tipos:
  - **Qualificador de Referência**: `(referência)` - marca campo como ponteiro (não desalocado automaticamente)
  - **Qualificadores Documentais**: Qualquer texto entre parênteses (ignorados pelo compilador)
- Delimitadores: `(` e `)`
- Posição: Após tipos, campos ou nomes
- Validação: Balanceamento de parênteses (códigos de erro #009 e #010)
- Não há suporte a parênteses aninhados
- Case-insensitive: `(Referência)` = `(referência)` = `(REFERÊNCIA)`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa qualificadores `(referência)` em estruturas como:
  ```pop
  Um nó é uma estrutura com
    Um número denominado valor,
    Um nó denominado próximo (referência),
    Um nó denominado anterior (referência).
  ```
- Também usa qualificadores documentais para documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção clara entre qualificador semântico (`referência`) e documentais.
- Garantir que `(referência)` seja reconhecido e afete gerenciamento de memória.

## Decisões de design para futuro mapeamento Langium
- Mapear `Qualificador` como `QualificadorReferencia | QualificadorDocumental`.
- `QualificadorReferencia`: `'(' 'referência' ')'`.
- `QualificadorDocumental`: `'(' conteudo=QualificadorConteudo ')'`.
- Validar balanceamento de parênteses e rejeitar parênteses aninhados.
- Garantir que qualificadores documentais sejam ignorados durante compilação.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Uma lista é uma estrutura com
  Uma string denominada valor,
  Uma lista denominada próxima (referência),
  Uma lista denominada anterior (referência).

Rotina para que se adicione item para uma lista:
  Aloque memória para uma lista denominada novo.
  Atribua o item ao valor deste novo.
  Atribua inexistente à próxima deste novo.
  Atribua inexistente à anterior deste novo.
```

(Arquivo de revisão criado em `Revisão/Qualificadores - Revisão.md`)