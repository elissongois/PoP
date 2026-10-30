# Português Puro - Documentação da Sintaxe

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

| Arquivo | Conteúdo |
|---------|----------|
| [01-Comentários.md](01-Comentários.md) | Observações, Comentários de linha e multilinha |
| [02-Variáveis-Globais.md](02-Variáveis-Globais.md) | Declaração e inicialização de variáveis globais |
| [03-Variáveis-Locais.md](03-Variáveis-Locais.md) | Declaração e uso de variáveis locais |
| [04-Tipos-de-Dados.md](04-Tipos-de-Dados.md) | Tipos primitivos, derivados, estruturas, listas |
| [05-Valores-Literais.md](05-Valores-Literais.md) | Números, frações, strings, hexadecimais, booleanos |
| [06-Operadores.md](06-Operadores.md) | Aritméticos, comparação, concatenação, lógicos |
| [07-Expressões.md](07-Expressões.md) | Avaliação, precedência, acesso a campos |
| [08-Condicionais.md](08-Condicionais.md) | `Se`, blocos, separadores, restrições |
| [09-Laços.md](09-Laços.md) | `Itere`, `Reitere`, `Pare`, `Retorne` |
| [10-Rotinas.md](10-Rotinas.md) | Declaração, parâmetros, sobrecarga, chamada |
| [11-Funções.md](11-Funções.md) | Funções deliberativas (booleanas) |
| [12-Instruções.md](12-Instruções.md) | Atribuição, E/S, memória, chamadas externas |
| [13-Estruturas-e-Uniões.md](13-Estruturas-e-Uniões.md) | Definição, acesso a campos, campos calculados, uniões |
| [14-Listas.md](14-Listas.md) | Listas duplamente encadeadas, manipulação |
| [15-Conversão-de-Tipos.md](15-Conversão-de-Tipos.md) | `Converta`, `tal como`/`tal qual` |
| [16-Gerenciamento-de-Memória.md](16-Gerenciamento-de-Memória.md) | `Aloque`, `Desaloque`, `Preserve`, `Reaponte` |
| [17-Chamadas-Externas.md](17-Chamadas-Externas.md) | `Processe` para DLLs e APIs Windows |
| [18-Callbacks.md](18-Callbacks.md) | `compativelmente`, `Aponte` |
| [19-Instruções-de-Máquina.md](19-Instruções-de-Máquina.md) | `Decodifique` para assembly inline |
| [20-Subtextos-e-Percorredores.md](20-Subtextos-e-Percorredores.md) | Parsing de strings |
| [21-Cores.md](21-Cores.md) | Modelo HSL, variáveis globais de cor |
| [22-Exemplos-Completos.md](22-Exemplos-Completos.md) | Programas de exemplo anotados |

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

Comece pela [seção de comentários](01-Comentários.md) ou vá direto para [variáveis globais](02-Variáveis-Globais.md) para entender a estrutura básica de declarações.