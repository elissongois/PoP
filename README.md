# Português Puro

Uma linguagem de programação em português brasileiro, projetada para ser natural, expressiva e acessível.

## 📖 Sobre o Projeto

Português Puro é uma linguagem de programação imperativa que utiliza sintaxe em português brasileiro natural. O projeto visa tornar a programação mais acessível para falantes nativos de português, permitindo que escrevam código usando sua língua materna de forma fluida e intuitiva.

### Características Principais

- **Sintaxe Natural**: Código que se lê como português escrito
- **Tipagem Forte**: Sistema de tipos robusto com estruturas, listas e ponteiros
- **Expressões Naturais**: Operadores em português (`mais`, `menos`, `vezes`, `multiplicado por`, `dividido por`)
- **Controle de Fluxo Intuitivo**: Estruturas condicionais e de repetição em linguagem natural
- **Extensível**: Suporte para bibliotecas externas e chamadas de sistema

## 🗂️ Estrutura do Repositório

```tree
PoP/
├── LSP/                       # Extensão VS Code e servidor de linguagem (código executável)
├── Código/                    # Fontes, bibliotecas, exemplos, índices e mensagens de erro
│   ├── Índice.md              # Navegação pelo código e bibliotecas
│   ├── Algoritmos/            # Algoritmos de exemplo em `.pop`
│   ├── Código-Fonte/          # Compilador real: 16 estágios escritos em `.pop`
│   ├── Bibliotecas/
│   │   ├── Padrão/            # Fonte da Biblioteca Padrão
│   │   ├── Matemática/        # Bibliotecas matemáticas
│   │   ├── Definições/        # Recortes de tipos e variáveis globais
│   │   └── Implementações/    # Recortes de rotinas e funções
│   ├── Índices/               # Índices de referência cruzada
│   └── Mensagens de Erro/     # Guia e catálogo de diagnósticos
├── Documentação/              # Regras, guia do usuário, referências e documentação do compilador
│   ├── Índice.md              # Ponto de entrada da documentação
│   ├── Regras/                 # Referência normativa da linguagem
│   ├── Guia do Usuário/        # Conteúdo didático
│   ├── Referência/             # Guia sintático, FAQ e características
│   ├── Compilador/             # Documentação técnica do compilador
│   ├── GitBook/                # Backup da documentação online
│   └── Wiki/                   # Repositório desatualizado, aguardando revisão
├── IDE/                       # Outro repositório; assistentes não devem ler/indexar
├── Objetivos.md               # Estado e pendências do projeto
└── Índice.md                  # Navegação geral do repositório
```

## 🚀 Começando

### Pré-requisitos

- Node.js 20.x ou superior
- npm 10.x ou superior

### Extensão VS Code e servidor de linguagem

A extensão VS Code com suporte LSP fica na pasta [`LSP/`](./LSP/). O analisador léxico e o analisador sintático são escritos à mão em TypeScript, sem gerador de parser. O estado e os próximos passos do projeto são acompanhados em [`Objetivos.md`](./Objetivos.md).

```cmd
cd LSP
npm install
npm run compile
```

O realce de sintaxe usa uma gramática TextMate (`LSP/client/syntaxes/pop.tmLanguage.json`) e os trechos de código estão em `LSP/client/snippets/`.

## 📚 Documentação

A documentação está organizada em [`Documentação/Índice.md`](./Documentação/Índice.md):

- **[Regras](./Documentação/Regras/)**: referência normativa da linguagem
- **[Guia do Usuário](./Documentação/Guia%20do%20Usu%C3%A1rio/LEIA-ME.md)**: percurso didático por módulos
- **[Referência](./Documentação/Refer%C3%AAncia/)**: guia sintático, FAQ e características
- **[Compilador](./Documentação/Compilador/)**: documentação técnica

O código e as bibliotecas estão organizados em [`Código/Índice.md`](./Código/Índice.md). Para navegar pelo repositório inteiro, consulte [`Índice.md`](./Índice.md).

> **Atenção a assistentes de código:** `IDE/` contém outro repositório e não deve ser lida, pesquisada nem indexada até autorização expressa. `Documentação/Wiki/` também deve permanecer sem leitura, indexação ou alterações até a revisão da documentação ser concluída.

## 💡 Exemplo de Código

```portugues-puro
\\ Declaração de tipo
Um Ponto Cartesiano é um par de números com um número denominado X e um número denominado Y.

\\ Declaração de variável global
O x é um número igual a 0.
O y é um número igual a 0.

\\ Rotina
Rotina para que se calcule a distância entre dois pontos:
    Atribua o X deste primeiro ponto menos o X deste segundo ponto para um número denominado deltaX.
    Atribua o Y deste primeiro ponto menos o Y deste segundo ponto para um número denominado deltaY.

    Atribua deltaX vezes deltaX mais deltaY vezes deltaY para um número denominado somaQuadrados.

    \\ Retorna a raiz quadrada
    Retorne a raiz quadrada de somaQuadrados.
```

## 🛠️ Tecnologias

- **Parser artesanal**: análise léxica e sintática escritas à mão em TypeScript, sem gerador de parser
- **Gramática TextMate**: realce de sintaxe no editor
- **Language Server Protocol**: servidor de linguagem próprio
- **TypeScript**: Implementação da gramática e ferramentas
- **VS Code Extension API**: Extensão com Language Server Protocol

## 🔗 Links Externos

### Documentação

- **[GitBook - Documentação Oficial](https://portugues-puro.gitbook.io/documentacao)**: Documentação completa e organizada
- **[Documentação no GitHub](https://github.com/elenderg/Documentacao-Portugues-Puro)**: Repositório da documentação

### Wiki RosettaCode

- **[Categoria Português Puro](https://rosettacode.org/wiki/Category:Portugu%C3%AAs_Puro)**: Página wiki da categoria, onde serão listados os exemplos algoritmos escritos em Português Puro e referenciados demais páginas
- **[Wiki da Linguagem](https://rosettacode.org/wiki/Portugu%C3%AAs_Puro)**: Página wiki da linguagem em inglês
- **[Wiki da IDE PAL-1000](https://rosettacode.org/wiki/PAL-1000)**: Página wiki da IDE escrita em Português Puro
- **[Wiki do Compilador](https://rosettacode.org/wiki/Compilador_em_Portugu%C3%AAs_Puro)**: Página wiki com detalhes de implementação do compilador

## 📦 Repositórios Relacionados

### em Português Puro

- **[Compilador CLI](https://github.com/elenderg/Portugues-Puro)**: Compilador para CLI escrito em `Português Puro`
- **[PAL-1000](https://github.com/elenderg/PAL-1000/)**: IDE escrita em `Português Puro`
- **[CEL](https://github.com/elenderg/CEL)**: Versão anterior do PAL-1000
- **[Extensão VS Code](https://github.com/elenderg/Extensao-Portugues-Puro-VS-Code)**: Extensão de realce de sintaxe `Português Puro` para VS Code
- **[Servidor de Linguagem](https://github.com/elenderg/Servidor-de-Linguagem)**: LSP (Language Server Protocol) para `Português Puro`
- **[POP-LSP](https://github.com/elenderg/POP-LSP)**: Implementação de LSP de `Português Puro`

### Projetos Relacionados em Outras Línguas

- **[CAL](https://github.com/elenderg/CAL)**: IDE escrita em Plain English
- **[Plain English Compiler](https://github.com/elenderg/Plain-English-Compiler)**: Compilador escrito em em Plain English
- **[Plain English Syntax Highlighter](https://github.com/elenderg/Plain-English-Extension-for-VS-Code)**: Extensão de realce de sintaxe Plain English para VS Code
- **[SAL-PAL](https://github.com/elenderg/SAL-PAL)**: Projeto de conversão do `SAL` para o `PAL`

## 🤝 Contribuindo

Contribuições são bem-vindas! Este projeto está em desenvolvimento ativo. Áreas que precisam de contribuição:

- [x] Implementação do compilador/interpretador
- [x] Bibliotecas padrão
- [x] Algoritmos de exemplo
- [x] IDE dedicada
- [x] Guias de solução de erros
- [x] Documentação adicional
- [ ] Testes e validação da gramática

## 📄 Licença

Sem licença

## 👤 Autor

**Elender Góis Gallas** e **Élisson Góis Gallas**

## 🎯 Status do Projeto

Em Desenvolvimento Ativo

### Componentes Concluídos

- ✅ Documentação das regras da linguagem
- ✅ Gramática e sintaxe documentadas em `Documentação/Regras/` (índice em `Documentação/Índice.md`)
- ✅ Definição de tipos e estruturas
- ✅ Sistema de expressões
- ✅ Guia de solução de erros
- ✅ Binários de distribuição
- ✅ GitHub Pages
- ✅ UDL para Notepad++
- ✅ Compilador/Interpretador
- ✅ Biblioteca padrão
- ✅ Bibliotecas adicionais
- ✅ IDE dedicada
- ✅ Algoritmos de exemplo
- ✅ Página no Rosetta Code

### Em Desenvolvimento

- 🚧 Extensão de servidor de linguagem de `Português Puro` para VS Code, em `LSP/`, com:
  - [x] Parser próprio e tabela de símbolos de tipos, variáveis e rotinas
  - [x] Realce TextMate, snippets e codificação Windows-1252
  - [x] Navegação: definição, definição de tipo, implementação, referências e renomear
  - [ ] Expansão da cobertura da gramática pelo parser
  - [ ] Hover, sugestões e diagnósticos para todo o vocabulário documentado
  - [ ] Testes automatizados de realce, snippets e diagnósticos

### Decisão de Implementação

A gramática e o LSP são feitos de maneira tradicional: regras documentadas em prosa e parser escrito à mão, sem frameworks de engenharia de linguagens nem geradores de parser. O workspace `Gramática/`, resultado de um experimento anterior, está marcado para exclusão futura.

### Planejado

- 📋 Exemplos no Rosetta Code

---

**Nota**: Este é um projeto em desenvolvimento. A sintaxe e as funcionalidades podem mudar conforme o projeto evolui.
