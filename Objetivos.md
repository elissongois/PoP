# Português Puro - Projeto de Desenvolvimento

## 📋 Objetivo Principal

Desenvolver uma gramática completa para a linguagem de programação chamada **Português Puro**.

A gramática e o servidor de linguagem são implementados de maneira **tradicional**: as regras são escritas em prosa e notação formal próprias, e o analisador léxico e sintático é um parser escrito à mão, sem depender de geradores de parser ou frameworks de engenharia de linguagens.

## 🎯 Objetivos Específicos

### Gramática e Sintaxe
- [ ] Definir a gramática formal da linguagem em documentação própria (`Regras/`)
- [ ] Implementar o parser à mão no servidor de linguagem (`LSP/server/src/`)
- [ ] Validar sintaxe completa
- [ ] Criar suporte para autocomplete

### Documentação
- [x] Características da linguagem
- [x] Guia sintático completo (referência rápida única; reúne também o antigo cheat sheet)
- [x] FAQ e documentação técnica
- [ ] Tutoriais para iniciantes

### Exemplos e Validação
- [x] Agenda Telefônica (sistema CRUD)
- [x] Basteroides (jogo gráfico)
- [x] Janela (interface gráfica)
- [x] Sudoku (algoritmos complexos)
- [x] Se necessário, há mais outros 100 algoritmos funcionais (compilados) em outra pasta

### Servidor de Linguagem e Extensão
- [x] Extensão VS Code com realce TextMate, snippets e codificação Windows-1252
- [x] Parser próprio para tipos, variáveis, rotinas e funções
- [x] Navegação: Ir para Definição, Definição de Tipo, Implementação, Referências e Renomear
- [ ] Hover, sugestões e diagnósticos cobrindo todo o vocabulário documentado
- [ ] Testes automatizados de realce, snippets e diagnósticos

### Publicação
- [ ] Extensão VSCode funcional
- [ ] Package para npm
- [ ] Documentação online
- [ ] Comunidade de desenvolvedores

## 🛠️ Ferramentas e Tecnologias

### Engenharia de Linguagens
- **Parser artesanal**: análise léxica e sintática escritas à mão em TypeScript
- **Gramática TextMate**: realce de sintaxe no VS Code
- **Language Server Protocol**: servidor de linguagem próprio comunicando via LSP
- **TypeScript**: Linguagem base para desenvolvimento
- **Node.js**: Ambiente de execução

### Estrutura do Projeto
```
POP/
├── Regras/              # Regras e sintaxe — documentação única, fonte de verdade
├── LSP/                 # Extensão VS Code e servidor de linguagem (código executável)
├── Código-Fonte/        # Implementação do compilador (16 etapas em `.pop`)
├── Definições/          # Tipos e variáveis globais de suporte do compilador
├── Implementações/      # Funções e rotinas de suporte do compilador
├── Algoritmos/          # Programas de exemplo em `.pop`
├── Documentação/        # Documentação completa em prosa
├── Índices/             # Referências cruzadas
├── Mensagens de Erro/   # Guia de mensagens de erro
├── Revisão/             # Revisão e correção dos arquivos de `Regras/`
├── Linguagem/           # Especificação da linguagem por capítulos
├── Final/               # Transcrição da sessão que originou o servidor de linguagem
├── GitBook/             # Capítulos publicados da documentação
└── Gramática/           # Rascunho de gramática em Langium — marcado para exclusão
```

## 📌 Decisão Registrada

Foi decidido implementar a gramática da linguagem e o LSP de maneira tradicional, com parser e analisador léxico escritos à mão. Geradores de parser e frameworks de engenharia de linguagens não fazem parte do projeto: as referências a Langium e ANTLR foram removidas da documentação, e o workspace `Gramática/`, que ainda contém o experimento com Langium, está marcado para exclusão futura. A implementação ativa do servidor de linguagem é `LSP/`, e o estado dela é acompanhado em [`LSP - Estado e Próximos Passos.md`](./LSP%20-%20Estado%20e%20Próximos%20Passos.md).
