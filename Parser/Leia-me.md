Aqui está a cópia do arquivo da implementação que meu irmão está fazendo.
Ele é o autor inicial do projeto e da documentação, então pode dar credibilidade às regras definidas por ele (exceto quando eu informar o contrário)
Aproveite o progresso dele. Implemente os recursos e métodos que ele usa.
Ele optou por implementar apenas `Ir pra Definição` para Variáveis, Tipos, Rotinas e Funções. Eu não desejo esse comportamento.
Eu quero:

| Recurso                   | Condição                                      | Comportamento                                                                                        |
| ------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `Ir pra Definição`        | Cursor sobre um variável/campo/parâmetro/tipo | Navega para onde a variável global/local, tipo/parâmetro de rotina/função foi declarado.             |
| `Ir pra Definição de Tipo`| Cursor sobre um variável/campo/parâmetro/tipo | Navega para onde o tipo da variável global/local, tipo base/parâmetro de rotina/função foi declarado.|
| `Ir pra Implementação`    | Cursor sobre uma chamada de rotina/função     | Navega para onde a rotina ou função foi declarada.                                                   |

Fiz um teste, e nem tudo está perfeito ainda na extensão dele, então use o material dele que já funciona, junto com as observações que eu fornecer abaixo.
Na aba `Estrutura do Código`/`Outline View` a árvore de símbolos não está identificando o corretamente o tipo base dos símbolos se o tipo tiver sido declarado em outro arquivo, embora o recurso `Ir pra Definição` funcione para encontrar definições em outros arquivos.
O tipo base/nome alternativo dos parâmetros no cabeçalho de uma rotina não estão sendo identificados, fazendo com que o `nome` do tipo do parâmetro e o `nome alternativo` do tipo do parâmetro fiquem idênticos. Além disso, parece que algumas preposições estão sendo identificadas como se também fizessem parte do `nome` do tipo do parâmetro. Preposições (exceto `de`) delimitam o início e o fim do `nome` do tipo do parâmetro.
A `Ir pra Definição` não está funcionando corretamente para rotinas e funções.
A função `findRoutineParameterSeparator` não está reconhecendo outras preposições como delimitador.
Não pode haver quebra de linha na área dos `Qualificadores` (área entre parênteses).
Não pode haver quebra de linha na área dos `Comentários de Bloco` [área entre colchetes].
Não pode haver quebra de linha na área das `Strings literais` "área entre aspas".
Então a função `findDeclarationPeriod` deve na verdade checar se há `colchetes` ao invés de `parênteses`, a fim de ignorar o caractere `.` caso ele esteja dentro de colchetes [Observação/Comentário de Bloco]. Também deve verificar se há um caractere `\` pois se houver, deve ignorar o caractere `.` caso ele esteja na mesma linha após a `\`. Nessa situação, deve continuar procurando o próximo caractere `.` que representa o encerramento de uma declaração.
A função `validateReturnStatement` também deveria verificar se a instrução `Retorne` está inserida dentro do corpo de uma `Rotina`, pois a instrução `Retorne` não pode ser incluída na implementação/declaração de uma função booleana.
A função `parseLoopInstruction` pode receber uma melhoria para se comportar de maneira similar ao compilador. Se o comando de repetição `Reitere` for encontrado no corpo de uma rotina ou função, e inexista o comando de repetição `Itere` na rotina ou função (em alguma linha após o cabeçalho mas antes do comando de repetição `Reitere`), então o compilador entende que o comando de repetição `Itere` está implícito logo antes da primeira instrução.