# Visão Geral - Português Puro

> **Visão Geral da Linguagem**
> 
> Português Puro é uma linguagem de programação de alto nível, projetada para permitir a criação de programas utilizando um alto nível de abstração, com sintaxe em português natural (pt-BR).

---

## Características Fundamentais

| Característica | Descrição |
|----------------|-----------|
| **Paradigma** | Estruturada, Imperativa |
| **Tipagem** | Estática e forte |
| **Inferência de Tipos** | Baseada no nome da variável |
| **Conversão de Tipos** | Explícita |
| **Sensibilidade a Caixa** | **Não** (case-insensitive) |
| **Acentos** | Ignorados |
| **Espaços/Quebras de Linha** | Livres (identação opcional) |
| **Tipos Primitivos** | `byte`, `estrutura` |
| **Sistema Operacional** | Windows (API Win32) |
| **Arquitetura** | x86 (32 bits) |
| **Codepage** | Windows 1252 (ISO-8859-1) |

---

## Estrutura de um Programa

Todo programa em Português Puro deve conter:

1. **Rotina Principal** (obrigatória):
   ```
   Rotina para que se execute o programa:
     \ Seu código aqui
   ```

2. **Biblioteca Padrão**: O arquivo `Biblioteca padrão.pop` deve estar na mesma pasta do programa.

3. **Extensão de Arquivo**: `.pop`

---

## Convenções de Escrita

- **Nomes descritivos**: Português Puro incentiva nomes longos e descritivos em linguagem natural
- **Case-insensitive**: `Variavel`, `variavel`, `VARIAVEL` são equivalentes
- **Indentação livre**: Use para legibilidade, não é obrigatória

---

## Índice da Documentação

A documentação de regras e sintaxe vive em `Documentação/Regras/`. A ordem pedagógica dos capítulos está em [../Índice.md](../Índice.md); esta tabela agrupa os assuntos por arquivo.

| Assunto | Arquivo |
|---------|---------|
| Elementos léxicos e progresso das definições | [Índice de Elementos Léxicos.md](<Índice%20de%20Elementos%20Léxicos.md>) |
| Comentários e observações | [Comentários.md](Comentários.md) |
| Caracteres permitidos, limitados, reservados | [Símbolos.md](Símbolos.md) |
| Artigos definidos e indefinidos | [Artigos.md](Artigos.md) |
| Pronomes demonstrativos, possessivos, relativos | [Pronomes.md](Pronomes.md) |
| Preposições e contrações | [Preposições.md](Preposições.md) |
| Conjunções lógicas | [Conjunções.md](Conjunções.md) |
| Advérbios | [Advérbios.md](Advérbios.md) |
| Verbos | [Verbos.md](Verbos.md) |
| Palavras-chave | [Palavras-Chave.md](Palavras-Chave.md) |
| Qualificadores `(ref)` | [Qualificadores.md](Qualificadores.md) |
| Tipos, estruturas, listas, ponteiros, escalares | [Tipos.md](Tipos.md) |
| Estruturas, uniões e campos sobrepostos | [Estruturas e Uniões.md](<Estruturas%20e%20Uniões.md>) |
| Listas duplamente encadeadas e manipulação | [Listas.md](Listas.md) |
| Conversão de tipos (`Converta`, `tal como`/`tal qual`) | [Conversão de Tipos.md](<Conversão%20de%20Tipos.md>) |
| Gerenciamento de memória (`Aloque`, `Desaloque`, `Preserve`) | [Gerenciamento de Memória.md](<Gerenciamento%20de%20Memória.md>) |
| Variáveis globais | [Variáveis Globais.md](<Variáveis%20Globais.md>) |
| Variáveis locais | [Variáveis Locais.md](<Variáveis%20Locais.md>) |
| Possessivos e acesso a membros | [Possessivos.md](Possessivos.md) |
| Campos calculados | [Campos Calculados.md](<Campos%20Calculados.md>) |
| Valores literais | [Valores Literais.md](<Valores%20Literais.md>) |
| Strings literais e escapes | [Strings Literais.md](<Strings%20Literais.md>) |
| Subtextos e percorredores | [Subtextos e Percorredores.md](<Subtextos%20e%20Percorredores.md>) |
| Operadores aritméticos, de comparação, concatenação e lógicos | [Operadores.md](Operadores.md) |
| Expressões e precedência | [Expressões.md](Expressões.md) |
| Instruções (atribuição, E/S, memória) | [Instruções.md](Instruções.md) |
| Condicionais (`Se`, `Quando`) | [Condicionais.md](Condicionais.md) |
| Laços (`Itere`, `Reitere`, `Pare`) | [Laços.md](Laços.md) |
| Rotinas | [Rotinas.md](Rotinas.md) |
| Funções | [Funções.md](Funções.md) |
| Callbacks | [Callbacks.md](Callbacks.md) |
| Chamadas externas a DLLs (`Processe`) | [Processe.md](Processe.md) |
| Instruções de máquina (`Decodifique`) | [Instruções de Máquina.md](<Instruções%20de%20Máquina.md>) |

---

## Compilação

```bash
# Linha de comando
compilador.exe caminho/do/projeto/

# Requisitos
- Arquivo .pop na pasta do projeto
- Biblioteca padrão.pop na mesma pasta
- Gera executável .exe
```

---

## Recursos Avançados

- **Trigonometria Racional**: Biblioteca padrão inclui operações trigonométricas exatas
- **Gráficos de Tartaruga**: Logo-style graphics
- **Interface Gráfica (GDI)**: Janelas, controles, desenho
- **Rede**: WinHTTP, Winsock
- **Criptografia**: API Crypto do Windows
- **PDF e E-mail**: Suporte nativo
- **Assembly Inline**: `Decodifique $HEX`
- **Gerenciamento Manual de Memória**: Ponteiros, alocação/desalocação

---

## Próximos Passos

Comece pela [seção de comentários](Comentários.md) ou vá direto para [variáveis globais](<Variáveis Globais.md>) para entender a estrutura básica de declarações.