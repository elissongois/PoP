# Palavras-Chave - Revisão

## Resumo do arquivo original
- Palavras-chave em Português Puro são termos reservados com significados especiais para o compilador
- 6 categorias principais:
  - **Designação**: `denominado`, `chamado` + variações de gênero/número
  - **Complementação**: `com`, `contendo` (define campos de estrutura)
  - **Referenciamento**: `(referência)` (marca campo como ponteiro)
  - **Devolução**: `retornando`, `recebendo`, `obtendo` (recebe retorno de chamadas externas)
  - **Comandos de Controle**: `Se`, `quando`, `Itere`, `Reitere`, `Pare`, `Retorne`, `determine`, `Diga`, `Preserve`, `Processe`, `aponte`, etc.
  - **Operadores Especiais**: `igual`, `magnitude`, `conteúdo`, `endereçamento`, `empregue`
- Açúcar sintático: `Rotina`, `Função`, `Procedimento` (opcionais antes de `para que se`)

## Divergências encontradas vs Algoritmo Janela
- O algoritmo usa palavras-chave como `denominado` (em `um número denominado contador`), `com` (em `Uma pessoa é uma estrutura com`), `(referência)` (em `Um nó denominado próximo (referência)`), `retornando` (em `Processe "kernel32.dll" "GetLastError" retornando o código`), `Preserve` (em `Preserve a string`).
- Palavras-chave são consistentes com a documentação.
- Não há divergências significativas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a distinção entre palavras-chave obrigatórias e opcionais (açúcar sintático).
- Garantir que sinônimos sejam tratados de forma equivalente.

## Decisões de design para futuro mapeamento Langium
- Mapear cada categoria de palavra-chave como regras separadas.
- `PalavraChaveDesignacao`: `'denominado' | 'denominada' | 'denominados' | 'denominadas' | 'chamado' | 'chamada' | 'chamados' | 'chamadas'`.
- `PalavraChaveComplementacao`: `'com' | 'contendo'`.
- `PalavraChaveReferenciamento`: `'(referência)'`.
- `PalavraChaveDevolucao`: `'retornando' | 'recebendo' | 'obtendo'`.
- Comandos de controle: `'Se' | 'quando' | 'Itere' | 'Reitere' | 'Pare' | 'Retorne' | 'determine' | 'Diga' | 'Preserve' | 'Processe' | 'aponte' | etc.`.
- Operadores especiais: `'igual' | 'magnitude' | 'conteúdo' | 'endereçamento' | 'empregue'`.
- Açúcar sintático: `'Rotina' | 'Função' | 'Procedimento'`.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
Rotina para que se processe dados:
  Atribua 0 para um número denominado contador.
  Atribua "" para uma string denominada mensagem.
  Atribua 1/2 para uma fração denominada metade.
  Aloque memória para um ponteiro chamado buffer.
```

```pop
Uma pessoa é uma estrutura com
  Uma string denominada nome,
  Um número denominado idade,
  Uma pessoa denominada supervisor (referência).
```

```pop
Rotina para que se normalize uma string:
  Preserve a string.
  Converta a string para letras minúsculas.
  Remova espaços extras desde a string.
```

(Arquivo de revisão criado em `Revisão/Palavras-Chave - Revisão.md`)