# Contexto atual

## História

Tive um problema com o computador em que este projeto estava sendo desenvolvido. Não fiz commit das últimas modificações então perdi muito progresso. O compilador de `Português Puro` é um binário standalone de arquitetura de 32 bits para Windows. Não existe versão para Linux. Atualmente estou usando o Kubuntu e por isso, testes de compilação de códigos em `Português Puro` só poderão ser realizados via wine, mas provavelmente essa tarefa não será possível para um modelo de IA.

## Revisão e Correção das Regras

O conteúdo dos arquivos contidos na pasta ./Regras/ foi totalmente gerado por assistentes de IA. Muita coisa havia sido corrigida, mas o progresso foi perdido e será necessário um novo trabalho de revisão e correção para se adequarem às verdadeiras regras da linguagem. Só com as regras corrigidas prosseguiremos para a criação da gramática e do LSP.

## Diretórios ausentes

Os diretórios citados serão incorporados após a revisão, para reduzir o tamanho do conteúdo a ser indexado.

## Decisão sobre gramática e LSP

Foi decidido implementar a gramática da linguagem e o LSP de maneira tradicional: regras escritas em documentação própria e parser escrito à mão, sem geradores de parser nem frameworks de engenharia de linguagens. As referências a essas ferramentas foram removidas dos documentos, incluindo os antigos blocos de "Mapeamento para Langium".

## Consolidação da documentação

Os markdowns que tratavam do mesmo assunto foram reunidos em um único arquivo cada:

- `Regras/` é agora a **árvore única** de regras e sintaxe. Os capítulos numerados de `Sintaxe/` e as notas duplicadas de `Final/` (comentários, tipos, qualificadores) foram fundidos ali, e `Sintaxe/17-Chamadas-Externas.md` foi fundido em `Regras/Processe.md`. O índice com a nova ordem dos 33 capítulos está em `Índice da Documentação.md`.
- `Lista de Tarefas.md` é a única lista de pendências (a cópia em inglês `TodoList.md` foi fundida nela).
- `Revisão/Plano de Revisão.md` é o único plano de revisão (a snapshot `Plano de Revisão modificado.md` foi removida).
- `LSP/README.md` é o único README da extensão (o `LSP/client/README.md`, que repetia o mesmo texto, foi fundido nele).
- `Documentação/Guia Sintático.md` reúne a referência rápida que antes existia também em `Documentação/CheatSheet Português Puro.md`; o cheat sheet foi fundido nele e apagado.
- `Documentação/Documentação do Compilador.md` era um agregado que repetia por inteiro outros documentos. Agora contém apenas o que é específico do compilador (estruturas internas, etapas de compilação e análise léxica/sintática). As cópias embutidas de `Sobre o compilador.md`, `Palavras-chave.md`, `Respostas de Perguntas Frequentes.md` e do guia sintático foram removidas em favor dos arquivos próprios, e o bloco de características foi reunido em `Documentação/Características da Linguagem.md`.
- Pendência conhecida: `Documentação/Documentação Português Puro.md` (tutorial de cerca de 2 900 linhas) ainda repete 17 páginas publicadas em `GitBook/`. Nenhuma das duas é cópia exata da outra, então ambas foram mantidas; decidir qual delas passa a ser a fonte única fica para um próximo passo.

## Pacote de gramática — rascunho marcado para exclusão

O diretório `Gramática/` ainda contém o experimento anterior com Langium (workspace npm, gramática `.langium` e scaffolds de CLI e extensão). Ele **não** é a implementação escolhida e está sinalizado para exclusão futura; enquanto existir, não o use como referência para regras da linguagem. A implementação ativa do servidor de linguagem é `LSP/`.

## Dúvidas

Se houver alguma dúvida, ou precisar de mais alguma informação, pergunte.