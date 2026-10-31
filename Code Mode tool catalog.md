The Code Mode tool catalog has changed. This catalog supersedes the previous Code Mode tool catalog.

# Code Mode

The tools listed below, and `search`, cannot be called directly: they only work as JavaScript inside the `execute` tool. Every other tool you have is a normal tool call: call it directly, never inside `execute`.

The catalog is partial. Before calling a tool that is not listed below, find it with the global `search(...)` function. Do not guess tool names. Each result's `path` is the complete call expression: write it out as code, for example `await tools.ns.tool_name({ ... })`. Do not use it as a key such as `tools[path]`.

 - search({ query?: string, namespace?: string, /** @integer @exclusiveMinimum 0 / limit?: number, /* @integer @minimum 0 / offset?: number, }): { items: Array<{ path: string, description: string, signature: string, }>, /* @integer @minimum 0 / remaining: number, next: { /* @integer @minimum 0 */ offset: number, } | null, }

## Code Mode tools (call only inside 'execute')

 - **Documentação** (3 tools)
   - tools.Documentação.getPage({ /** The URL of the page to fetch */ url: string, }): Promise // Fetch the full markdown content of a specific documentation page from Documentação. Use this when you have a page URL...
   - tools.Documentação.searchDocumentation({ query: string, }): Promise // Search across the documentation to find relevant information, code examples, API references, and guides. Use this too...
   - tools.Documentação.sendFeedback({ /**
   - Explain the issue in full, as if writing to a documentation maintainer who never saw this conversation. Describe what is wrong, where on the page it appears (quote the exact sentence or section title when possible), what the user was trying to do, and, when relevant, what the correct or expected information should be. Write a few clear, specific sentences in English. Never include personal or confidential information from the conversation. Up to 2048 characters.
   - @minLength 1 @maxLength 2048 / content: string, /*
   - The full URL of the page the issue is about (e.g. https://portugues-puro.gitbook.io/documentacao/getting-started), so the finding is linked to the exact page. / pageUrl: string, /*
   - The broader end goal you were ultimately trying to accomplish (as/on behalf of the user) when you hit this issue. Gives the team the context you were working towards. Optional.
   - @maxLength 1024 */ goal?: string, }): Promise // Report an issue in the documentation of Documentação so the team can fix it. Use it whenever, while helping a user, y...
 - **context7** (2 tools)
   - tools.context7["query-docs"]({ /**
   - Exact Context7-compatible library ID (e.g., '/mongodb/docs', '/vercel/next.js', '/supabase/supabase', '/vercel/next.js/v16.2.9') retrieved from 'resolve-library-id' or directly from user query in the format '/org/project' or '/org/project/version'. / libraryId: string, /*
   - What to look up in the library's documentation, scoped to a single concept. Be specific and include relevant details, but keep each query to one topic — if the user's question spans multiple distinct concepts, make a separate call per concept instead of combining them, unless the question is about how the concepts interact. Good: 'How to set up authentication with JWT in Express.js' or 'React useEffect cleanup function examples'. Bad (too vague): 'auth' or 'hooks'. Bad (too broad): 'routing and auth and caching in Next.js'. The query is sent to the Context7 API for processing. Do not include any sensitive or confidential information such as API keys, passwords, credentials, personal data, or proprietary code in your query. / query: string, /*
   - Programming language the user is writing code in, such as 'Python', 'TypeScript', 'Go', or 'C#'. Ranks code examples in that language first. Leave it out when the language is unknown or does not apply. */ language?: string, }): Promise // Retrieves and queries up-to-date documentation and code examples from Context7 for any programming library or framework.
   - tools.context7["resolve-library-id"]({ /**
   - What to look up in the library's documentation. This is used to rank library results by relevance to what the user is trying to accomplish. The query is sent to the Context7 API for processing. Do not include any sensitive or confidential information such as API keys, passwords, credentials, personal data, or proprietary code in your query. / query: string, /*
   - Library name to search for and retrieve a Context7-compatible library ID. Use the official library name with proper punctuation — e.g., 'Next.js' instead of 'nextjs', 'Customer.io' instead of 'customerio', 'Three.js' instead of 'threejs'. */ libraryName: string, }): Promise // Resolves a package/product name to a Context7-compatible library ID and returns matching libraries.
 - **opencode** (8 tools, 7 shown) // Tools for managing OpenCode itself, such as working with sessions and worktrees, searching the available models, and reading MCP resources.
   - tools.opencode.list_mcp_resources({ /** MCP server name as configured. Omit to list every server. */ server?: string, }): Promise<{ resources: Array<{ server: string, name: string, uri: string, description?: string, mimeType?: string, }>, templates: Array<{ server: string, name: string, uriTemplate: string, description?: string, mimeType?: string, }>, }> // List documents, records, and other data exposed by MCP servers. Use this when the user refers to something that is no...
   - tools.opencode.read_mcp_resource({ /** The server field of the discovered resource. / server: string, /* Exact resource URI from discovery, an expanded uriTemplate, or the user. */ uri: string, }): Promise<{ server: string, uri: string, contents: Array<{ type: "text", uri: string, text: string, mimeType?: string, } | { type: "blob", uri: string, blob: string, mimeType?: string, }>,

}> // Read one MCP resource by server and URI. Not for local files. Always return the full contents rather than slicing or ...

 - tools.opencode.session_move({ /** Omit to move the current session. @pattern ^ses / sessionID?: string, /* Destination directory, relative to the target session's directory or absolute. Supports ~. @minLength 1 */ directory: string, }): Promise<{ /** @pattern ^ses */ sessionID: string, directory: string, }> // Move a session to another directory, or omit sessionID to move the current session. The current session moves at the ...
 - tools.opencode.session_rename({ /** Omit to rename the current session. @pattern ^ses / sessionID?: string, /* New session title. @minLength 1 */ title: string, }): Promise<{ /** @pattern ^ses */ sessionID: string, title: string, }> // Rename a session, or omit sessionID to rename the current session. Use a short, specific title that summarizes the wo...
 - tools.opencode.worktree_create({ name: string, }): Promise<{ directory: string, }> // Create a named worktree. Returns its directory.
 - tools.opencode.worktree_list(): Promise<{ worktrees: Array<{ directory: string, strategy?: string, }>, }> // List a repository's worktrees.
 - tools.opencode.worktree_remove({ /** Absolute path of the worktree to remove. @minLength 1 / directory: string, /* Discard modified and untracked files. Only set this when the user has confirmed forced removal. */ force?: boolean, }): Promise<{ directory: string, removed: boolean, }> // Remove a worktree. The repository location selects configuration; directory identifies the worktree to remove.

Use tools from this server through `execute` under `tools["context7"]`. Use this server to fetch current documentation whenever the user asks about a library, framework, SDK, API, CLI tool, or cloud service — even well-known ones like React, Next.js, Prisma, Express, Tailwind, Django, or Spring Boot. This includes API syntax, configuration, version migration, library-specific debugging, setup instructions, and CLI tool usage. Use even when you think you know the answer — your training data may not reflect recent changes. Prefer this over web search for library docs.

`Do not use for: refactoring, writing scripts from scratch, debugging business logic, code review, or general programming concepts.`
