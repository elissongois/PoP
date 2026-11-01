Crie ou atualize o `AGENTS.md` deste repositório.

O objetivo é um arquivo compacto de instruções que ajude futuras sessões OpenCode a evitar erros e a ganharem ritmo rapidamente. Cada linha deve responder: "Um agente provavelmente deixaria isso passar sem ajuda?" Se não, deixe de fora.

Foco ou restrições indicados pelo usuário (cumpra-os):


## Como investigar

Leia primeiro as fontes de maior valor:
- `README*`, manifests da raiz, configuração de workspace, lockfiles
- configuração de build, test, lint, formatter, typecheck e codegen
- CI workflows e configuração de pre-commit / task runner
- arquivos de instrução existentes (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.cursorrules`, `.github/copilot-instructions.md`)
- configuração OpenCode local do repositório, como `opencode.json`

Se a arquitetura ainda estiver pouco clara depois de ler a configuração e a documentação, inspecione um pequeno número de arquivos de código representativos para encontrar os reais pontos de entrada, os limites entre pacotes e o fluxo de execução. Prefira ler os arquivos que explicam como o sistema é conectado a ler arquivos folha aleatórios.

Prefira fontes executáveis de verdade à documentação em prosa. Se os docs conflitarem com configuração ou scripts, confie na fonte executável e mantenha apenas o que você consegue verificar.

## O que extrair

Procure os fatos de maior sinal para um agente que trabalhe neste repositório:
- comandos exatos de desenvolvimento, sobretudo os não óbvios
- como executar um teste único, um pacote único ou uma etapa focada de verificação
- ordem obrigatória de comandos quando ela importa, como `lint -> typecheck -> test`
- limites de monorepo ou de múltiplos pacotes, a titularidade dos diretórios principais e os reais pontos de entrada de app/biblioteca
- peculiaridades de framework ou toolchain: código gerado, migrations, codegen, artefatos de build, carregamento especial de ambiente, servidores de desenvolvimento, fluxo de deploy de infraestrutura
- convenções de estilo ou de fluxo de trabalho do repositório que diferem dos padrões
- peculiaridades de testes: fixtures, pré-requisitos de testes de integração, fluxos de snapshot, serviços necessários, suítes flaky ou caras
- restrições importantes de arquivos de instrução existentes que valem preservar

Bom conteúdo de `AGENTS.md` costuma ser contexto difícil de obter, que exigiu ler vários arquivos para ser inferido.

## Perguntas

Só faça perguntas ao usuário se o repositório não puder responder algo importante. Use a ferramenta `question` para no máximo um lote curto de perguntas.

Boas perguntas:
- convenções de equipe não documentadas
- expectativas de branch / PR / release
- pré-requisitos de setup ou de testes que são conhecidos, mas não estão escritos

Não pergunte nada que o repositório já deixe claro.

## Regras de redação

Inclua apenas orientação de alto sinal e específica do repositório, como:
- comandos e atalhos exatos que o agente, de outra forma, estimaria errado
- notas de arquitetura que não são óbvias pelos nomes dos arquivos
- convenções que diferem dos padrões da linguagem ou do framework
- requisitos de setup, peculiaridades de ambiente e armadilhas operacionais
- referências a fontes de instrução existentes que importam

Exclua:
- conselhos genéricos de software
- tutoriais longos ou árvores de arquivos exaustivas
- convenções óbvias de linguagem
- afirmações especulativas ou qualquer coisa que você não tenha conseguido verificar
- conteúdo melhor armazenado em outro arquivo referenciado via `opencode.json` `instructions`

Na dúvida, omita.

Prefira seções e itens curtos. Se o repositório é simples, mantenha o arquivo simples. Se o repositório é grande, resuma os poucos fatos estruturais que de fato mudam como um agente deve trabalhar.

Se já existe um `AGENTS.md` na raiz `/home/elisson/Projetos/Pop`, melhore-o no próprio lugar em vez de reescrevê-lo às cegas. Preserve a orientação útil verificada, elimine enfeites e afirmações desatualizadas, e reconcilie o arquivo com o codebase atual.