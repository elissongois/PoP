# Índices do código-fonte

Use estes índices para localizar rotinas e funções sem abrir todos os arquivos do compilador. Eles são auxiliares de navegação: o arquivo `.pop` indicado continua sendo a fonte do código.

| Índice | Quando consultar |
|---|---|
| [Índice de Rotinas](./Índice%20de%20Rotinas.md) | Procurar cabeçalhos de rotinas da biblioteca padrão. |
| [Índice de Funções](./Índice%20de%20Fun%C3%A7%C3%B5es%20.md) | Procurar cabeçalhos de funções da biblioteca padrão. |
| [Funções Léxicas](./Fun%C3%A7%C3%B5es%20L%C3%A9xicas.md) | Localizar funções lexicais por arquivo e número de linha. |
| [Resumo do Código-Fonte](./Índice%20Resumo%20do%20C%C3%B3digo%20Fonte.md) | Entender o propósito geral de cada etapa do compilador. |
| [Índice de códigos de erro](./Índice%20de%20c%C3%B3digos%20de%20erro.code-search) | Pesquisar ocorrências de mensagens/códigos de erro nos arquivos indexados. |

## Como usar e manter

1. Pesquise neste diretório pelo nome da rotina, função, símbolo ou código de erro.
2. Siga o caminho relativo para o arquivo `.pop` de origem.
3. Use o número de linha como ponto inicial; ele pode ficar desatualizado quando a fonte mudar.
4. Edite a fonte original, nunca o trecho copiado para um índice.
5. Ao adicionar ou mover código, regenere/atualize os índices relacionados e confira seus caminhos e linhas.

Os índices de cabeçalhos contêm assinaturas e números de linha; o índice de resumo descreve as etapas. Eles não substituem a leitura do contexto da rotina nem garantem que uma entrada continue atualizada.
