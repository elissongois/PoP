O catálogo de ferramentas do Code Mode mudou. Este catálogo substitui o catálogo de ferramentas do Code Mode anterior.

# Code Mode

As ferramentas listadas abaixo, e o `search`, não podem ser chamadas diretamente: elas só funcionam como JavaScript dentro da ferramenta `execute`. Qualquer outra ferramenta que você tem é uma chamada de ferramenta normal: chame-a diretamente, nunca dentro de `execute`.

O catálogo é parcial. Antes de chamar uma ferramenta que não está listada abaixo, encontre-a com a função global `search(...)`. Não invente nomes de ferramentas. O `path` de cada resultado é a expressão de chamada completa: escreva-a como código, por exemplo `await tools.ns.tool_name({ ... })`. Não use o `path` como chave, do tipo `tools[path]`.

 - search({ query?: string, namespace?: string, /** @integer @exclusiveMinimum 0 / limit?: number, /* @integer @minimum 0 / offset?: number, }): { items: Array<{ path: string, description: string, signature: string, }>, /* @integer @minimum 0 / remaining: number, next: { /* @integer @minimum 0 */ offset: number, } | null, }

## Ferramentas do Code Mode (chame apenas dentro de 'execute')

 - **Documentação** (3 ferramentas)
   - tools.Documentação.getPage({ /** A URL da página a ser obtida */ url: string, }): Promise // Obtém todo o conteúdo markdown de uma página específica da documentação de Documentação. Use quando você tiver a URL da página...
   - tools.Documentação.searchDocumentation({ query: string, }): Promise // Pesquisa na documentação para encontrar informações relevantes, exemplos de código, referências de API e guias. Use também...
   - tools.Documentação.sendFeedback({ /**
   - Explique o problema por completo, como se escrevesse para um mantenedor da documentação que nunca viu esta conversa. Descreva o que está errado, onde na página aparece (cite a frase exata ou o título da seção quando possível), o que o usuário tentava fazer e, quando relevante, qual deveria ser a informação correta ou esperada. Escreva algumas frases claras e específicas. Nunca inclua informações pessoais ou confidenciais da conversa. Até 2048 caracteres.
   - @minLength 1 @maxLength 2048 / content: string, /*
   - A URL completa da página sobre a qual é o problema (por exemplo https://portugues-puro.gitbook.io/documentacao/getting-started), para que a constatação fique vinculada à página exata. / pageUrl: string, /*
   - O objetivo final mais amplo que você estava tentando alcançar (em nome do usuário) quando encontrou este problema. Dá à equipe o contexto em que você trabalhava. Opcional.
   - @maxLength 1024 */ goal?: string, }): Promise // Registra um problema na documentação de Documentação para que a equipe possa corrigi-lo. Use sempre que, ao ajudar um usuário, y...
 - **context7** (2 ferramentas)
   - tools.context7["query-docs"]({ /**
   - ID de biblioteca exata compatível com Context7 (por exemplo, '/mongodb/docs', '/vercel/next.js', '/supabase/supabase', '/vercel/next.js/v16.2.9') obtida de 'resolve-library-id' ou diretamente da consulta do usuário no formato '/org/project' ou '/org/project/version'. / libraryId: string, /*
   - O que consultar na documentação da biblioteca, restrito a um único conceito. Seja específico e inclua os detalhes relevantes, mas mantenha cada consulta em um tópico — se a pergunta do usuário abranger conceitos distintos, faça uma chamada por conceito em vez de combiná-los, salvo quando a pergunta for sobre como os conceitos interagem. Bom: 'Como configurar autenticação com JWT em Express.js' ou 'Exemplos de função de limpeza do useEffect do React'. Ruim (vago demais): 'auth' ou 'hooks'. Ruim (amplo demais): 'routing e auth e caching em Next.js'. A consulta é enviada à API do Context7 para processamento. Não inclua informações sensíveis ou confidenciais, como chaves de API, senhas, credenciais, dados pessoais ou código proprietário na consulta. / query: string, /*
   - Linguagem de programação em que o usuário está escrevendo código, como 'Python', 'TypeScript', 'Go' ou 'C#'. Prioriza exemplos de código nessa linguagem. Deixe de fora quando a linguagem for desconhecida ou não se aplicar. */ language?: string, }): Promise // Obtém e consulta documentação e exemplos de código atualizados do Context7 para qualquer biblioteca ou framework de programação.
   - tools.context7["resolve-library-id"]({ /**
   - O que consultar na documentação da biblioteca. É usado para ranquear os resultados de biblioteca por relevância em relação ao que o usuário tenta alcançar. A consulta é enviada à API do Context7 para processamento. Não inclua informações sensíveis ou confidenciais, como chaves de API, senhas, credenciais, dados pessoais ou código proprietário na consulta. / query: string, /*
   - Nome da biblioteca a procurar, para obter um ID de biblioteca compatível com Context7. Use o nome oficial da biblioteca com a pontuação correta — por exemplo, 'Next.js' em vez de 'nextjs', 'Customer.io' em vez de 'customerio', 'Three.js' em vez de 'threejs'. */ libraryName: string, }): Promise // Resolve um nome de pacote/produto para um ID de biblioteca compatível com Context7 e retorna as bibliotecas correspondentes.
 - **opencode** (8 ferramentas, 7 exibidas) // Ferramentas para gerenciar o próprio OpenCode, como trabalhar com sessões e worktrees, pesquisar os modelos disponíveis e ler recursos MCP.
   - tools.opencode.list_mcp_resources({ /** Nome do servidor MCP como configurado. Omita para listar todos os servidores. */ server?: string, }): Promise<{ resources: Array<{ server: string, name: string, uri: string, description?: string, mimeType?: string, }>, templates: Array<{ server: string, name: string, uriTemplate: string, description?: string, mimeType?: string, }>, }> // Lista documentos, registros e outros dados expostos pelos servidores MCP. Use quando o usuário se referir a algo que não...
   - tools.opencode.read_mcp_resource({ /** O campo server do recurso descoberto. / server: string, /* URI exata do recurso obtida na descoberta, um uriTemplate expandido, ou a do usuário. */ uri: string, }): Promise<{ server: string, uri: string, contents: Array<{ type: "text", uri: string, text: string, mimeType?: string, } | { type: "blob", uri: string, blob: string, mimeType?: string, }>,

}> // Lê um recurso MCP pelo servidor e pela URI. Não serve para arquivos locais. Sempre retorne o conteúdo completo em vez de recortá-lo ou ...

 - tools.opencode.session_move({ /** Omita para mover a sessão atual. @pattern ^ses / sessionID?: string, /* Diretório de destino, relativo ao diretório da sessão alvo ou absoluto. Aceita ~. @minLength 1 */ directory: string, }): Promise<{ /** @pattern ^ses */ sessionID: string, directory: string, }> // Move uma sessão para outro diretório, ou omita sessionID para mover a sessão atual. A sessão atual é movida no ...
 - tools.opencode.session_rename({ /** Omita para renomear a sessão atual. @pattern ^ses / sessionID?: string, /* Novo título da sessão. @minLength 1 */ title: string, }): Promise<{ /** @pattern ^ses */ sessionID: string, title: string, }> // Renomeia uma sessão, ou omita sessionID para renomear a sessão atual. Use um título curto e específico que resuma o tr...
 - tools.opencode.worktree_create({ name: string, }): Promise<{ directory: string, }> // Cria um worktree nomeado. Retorna seu diretório.
 - tools.opencode.worktree_list(): Promise<{ worktrees: Array<{ directory: string, strategy?: string, }>, }> // Lista os worktrees de um repositório.
 - tools.opencode.worktree_remove({ /** Caminho absoluto do worktree a remover. @minLength 1 / directory: string, /* Descarta arquivos modificados e não rastreados. Defina isto apenas quando o usuário confirmar a remoção forçada. */ force?: boolean, }): Promise<{ directory: string, removed: boolean, }> // Remove um worktree. A localização do repositório seleciona a configuração; directory identifica o worktree a remover.

Use as ferramentas deste servidor por meio de `execute`, sob `tools["context7"]`. Use este servidor para obter documentação atualizada sempre que o usuário perguntar sobre uma biblioteca, framework, SDK, API, ferramenta de CLI ou serviço de nuvem — mesmo as bem conhecidas, como React, Next.js, Prisma, Express, Tailwind, Django ou Spring Boot. Isso inclui sintaxe de API, configuração, migração de versão, depuração específica da biblioteca, instruções de instalação e uso de ferramentas de CLI. Use mesmo quando achar que já sabe a resposta — seus dados de treinamento podem não refletir mudanças recentes. Prefira isto à busca na web para documentação de bibliotecas.

`Não use para: refatoração, escrever scripts do zero, depurar lógica de negócio, revisão de código ou conceitos gerais de programação.`
