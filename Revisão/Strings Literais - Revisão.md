# Strings Literais - Revisão

## Resumo do arquivo original
- Descrição detalhada de strings literais em Português Puro:
  - Delimitadas por aspas duplas (`"`)
  - Escape de aspas duplas usando `""` (duas aspas)
  - Técnicas para incluir aspas: escape direto, concatenação com variável global `as aspas duplas`, função auxiliar, rotinas da biblioteca padrão
  - Caracteres permitidos: todos exceto quebra de linha e aspas duplas (que requerem escape)
  - Strings não suportam quebras de linha diretas; usar concatenação com `texto CRLF`
  - Mapeamento para Langium usando regex: `'"' ( '""' | !'"' )* '"'`

## Divergências encontradas vs Algoritmo Janela
- O algoritmo utiliza strings com aspas duplas e escape com `""` (ex.: `"&Ajuda"` é uma string simples, mas também há uso de aspas em contextos de menu como `"&Ajuda"`).
- Não há exemplo de strings que contenham aspas duplas internas, mas a sintaxe de escape `""` está presente no documento e esperada.
- Não há divergência encontrada; o algoritmo segue as regras documentadas.

## Correções / Ajustes propostos
- Nenhuma correção necessária.
- Manter a documentação das quatro técnicas para lidar com aspas duplas.
- Confirmar que a variável global `as aspas duplas` (definida em Caracteres Especiais) seja reconhecida como contendo o caractere `"`.

## Decisões de design para futuro mapeamento Langium
- Mapear string literal com regex: `" ( "" | [^"] )* "` (ou equivalente Langium).
- Garantir que o escape `""` seja interpretado como um único caractere `"` no valor final.
- Implementar validação para que quebras de linha não apareçam dentro de strings literais.

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
```pop
O &Ajuda é uma string igual a "&Ajuda".
O Sobre é uma string igual a "Sobre".
O Documentação é uma string igual a "Documentação".
```

```pop
Escreva "O comando é: ""Compilador.exe"" ""C:\projeto\""" para StdOut.
```

(Arquivo de revisão criado em `Revisão/Strings Literais - Revisão.md`)