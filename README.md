# Português Puro

Uma linguagem de programação em português brasileiro, projetada para ser natural, expressiva e acessível.

## 📖 Sobre o Projeto

Português Puro é uma linguagem de programação imperativa que utiliza sintaxe em português brasileiro natural. O projeto visa tornar a programação mais acessível para falantes nativos de português, permitindo que escrevam código usando sua língua materna de forma fluida e intuitiva.

### Características Principais

- **Sintaxe Natural**: Código que se lê como português escrito
- **Tipagem Forte**: Sistema de tipos robusto com estruturas, listas e ponteiros
- **Expressões Naturais**: Operadores em português (`mais`, `menos`, `vezes`, `dividido por`)
- **Controle de Fluxo Intuitivo**: Estruturas condicionais e de repetição em linguagem natural
- **Extensível**: Suporte para bibliotecas externas e chamadas de sistema

## 🗂️ Estrutura do Repositório

```
PoP/
├── Regras/                    # Documentação completa das regras da linguagem
├── Gramática/                 # Gramática Langium e ferramentas LSP
├── Implementações/            # Código-fonte de exemplo em Português Puro
├── Bibliotecas/               # Bibliotecas adicionais (em desenvolvimento)
├── IDE/                       # Código-fonte da IDE (em desenvolvimento)
├── Binários/                  # Compilador e executáveis (em desenvolvimento)
├── Extensões/                 # Extensões para editores
│   ├── VSCode/                # Extensão VS Code com LSP
│   └── NotePadPlusPlus/       # UDL para Notepad++
├── Algoritmos/                # Algoritmos de exemplo (em desenvolvimento)
└── Guias/                     # Guias de solução de erros (em desenvolvimento)
```

## 🚀 Começando

### Pré-requisitos

- Node.js 20.x ou superior
- npm 10.x ou superior

### Instalação da Gramática Langium

```bash
cd Gramática
npm install
npm run build
```

### Extensão VS Code

A extensão VS Code com suporte LSP está em desenvolvimento na pasta `Gramática/packages/extension`.

## 📚 Documentação

A documentação completa das regras da linguagem está disponível em [`Regras/`](./Regras/):

- **[Índice de Elementos Léxicos](./Regras/Índice%20de%20Elementos%20Léxicos.md)**: Visão geral de todos os elementos da linguagem
- **[Símbolos](./Regras/Símbolos.md)**: Caracteres permitidos, reservados e especiais
- **[Tipos](./Regras/Tipos.md)**: Sistema de tipos, estruturas, listas e conversões
- **[Expressões](./Regras/Expressões.md)**: Operadores e avaliação de expressões
- **[Operadores](./Regras/Operadores.md)**: Operadores aritméticos, lógicos e de concatenação
- **[Comparadores](./Regras/Comparadores.md)**: Operadores de comparação

## 💡 Exemplo de Código

```portugues-puro
\\ Declaração de tipo
Um Ponto é uma estrutura com um número denominado X e um número denominado Y.

\\ Declaração de variável global
O Origem é um Ponto igual a 0.

\\ Rotina
Rotina para que se calcule a distância entre dois pontos:
    Atribua o X deste primeiro ponto menos o X deste segundo ponto para um número denominado deltaX.
    Atribua o Y deste primeiro ponto menos o Y deste segundo ponto para um número denominado deltaY.
    
    Atribua deltaX vezes deltaX mais deltaY vezes deltaY para um número denominado somaQuadrados.
    
    \\ Retorna a raiz quadrada
    Retorne a raiz quadrada de somaQuadrados.
```

## 🛠️ Tecnologias

- **[Langium](https://langium.org/)**: Framework para desenvolvimento de linguagens
- **TypeScript**: Implementação da gramática e ferramentas
- **VS Code Extension API**: Extensão com Language Server Protocol

## 🔗 Links Externos

- **GitHub Pages**: [elissongois.github.io/PoP](https://elissongois.github.io/PoP) *(em desenvolvimento)*
- **Rosetta Code**: Exemplos comparativos *(em desenvolvimento)*

## 📦 Repositórios Relacionados

- **Gramática Langium**: Incluído neste repositório em `Gramática/`
- **Extensão VS Code**: Incluído neste repositório em `Gramática/packages/extension/`

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

*A definir*

## 👤 Autor

**Elisson Gois**

## 🎯 Status do Projeto

**Em Desenvolvimento Ativo**

### Componentes Concluídos
- ✅ Documentação das regras da linguagem
- ✅ Gramática Langium básica
- ✅ Definição de tipos e estruturas
- ✅ Sistema de expressões

### Em Desenvolvimento
- 🚧 Extensão VS Code com LSP
- 🚧 Compilador/Interpretador
- 🚧 Bibliotecas padrão
- 🚧 IDE dedicada
- 🚧 Algoritmos de exemplo

### Planejado
- 📋 Guia de solução de erros
- 📋 Binários de distribuição
- 📋 GitHub Pages
- 📋 Exemplos no Rosetta Code
- 📋 UDL para Notepad++

---

**Nota**: Este é um projeto em desenvolvimento. A sintaxe e as funcionalidades podem mudar conforme o projeto evolui.
