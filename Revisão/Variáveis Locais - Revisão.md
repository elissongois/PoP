# Variáveis Locais - Revisão

## Resumo do arquivo original
- Variáveis locais em Português Puro são declaradas dentro de rotinas
- **Sintaxe**: `Atribua <valor> para <artigo indefinido> <tipo> [denominado <nome>].`
- **Comandos de declaração**: `Atribua` ou `Aloque memória`
- **Preposições aceitas**: `para` ou `em`
- **Artigos indefinidos**: `um`, `uma`, `uns`, `umas` + pronomes demonstrativos abrangentes
- **Inferência de tipo**: Quando `denominado` é omitido, o tipo é inferido do nome
- **Escopo**: Acessível apenas dentro da rotina onde foi declarada
- **Passagem por referência**: Parâmetros são passados por referência; use `Preserve` para cópia local

## Divergências encontradas vs Algoritmo Janela
- O algoritmo declara variáveis locais como:
  ```pop
  Atribua 10 para um contador.
  Atribua "João" para uma string denominada nome.
  Atribua 355/113 para uma fração denominada pi.
  ```
- Também usa alocação de memória para estruturas:
  ```pop
  Aloque memória para uma pessoa.
  ```
- Uso consistente com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a inferência de tipo quando `denominado` é omitido.
- Garantir que passagem por referência funcione corretamente.

## Decisões de design para futuro mapeamento Langium
- Mapear `DeclaracaoLocal` com comando, valor, preposição, artigo indefinido e nome opcional.
- `ComandoDeclaracao`: `'Atribua' | 'Aloque' 'memória'`.
- `ArtigoIndefinido` deve incluir pronomes demonstrativos abrangentes.
- `denominado` deve ser opcional.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Atribua 10 para um contador.
Atribua "João" para uma string denominada nome.
Atribua 355/113 para uma fração denominada pi.

Aloque memória para uma pessoa.
```

(Arquivo de revisão criado em `Revisão/Variáveis Locais - Revisão.md`)