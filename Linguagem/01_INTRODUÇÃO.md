# 01: Introdução ao Português Puro

Bem-vindo ao **Português Puro**, uma linguagem de programação única, de propósito geral, projetada para parecer e ser lida como prosa natural em português. Diferentemente de linguagens de programação convencionais repletas de chaves (`{}`), parênteses, ponto e vírgula e sigilos simbólicos, programas em `Português Puro` são escritos em frases completas e limpas.

---

## 1. A Filosofia Central

### 1.1 Legibilidade em Primeiro Lugar
Código é lido muito mais vezes do que é escrito. O `Português Puro` é projetado para que um não programador, especialista de domínio ou observador casual possa ler um programa e entender imediatamente sua intenção sem precisar decifrar sintaxe esotérica.

Compare este código procedural típico em C/JavaScript:
```c
int count = 0;
for (int i = 0; i < len; i++) {
    if (items[i].active && items[i].price > 100) {
        count++;
    }
}
```
Com `Português Puro`:
```pop
Atribua 0 para uma contagem.
Itere.
  Obtenha um item dos itens.
  Se o item for inexistente, pare.
  Se o item não estiver ativo, reitere.
  Se o preço deste item for maior do que 100, adicione 1 para a contagem.
Reitere.
```

### 1.2 Multi-Paradigma & Auto-Hospedado
O `Português Puro` não é uma camada de script de brinquedo ou um pré-processador de macros; é uma **linguagem de programação de sistemas totalmente auto-hospedada e compilada**. O compilador do `Português Puro` é escrito inteiramente em `Português Puro` e compila diretamente para instruções de máquina nativas x86 de 32 bits para Windows sem toolchains ou linkers externos.

---

## 2. Características Principais da Linguagem

1. **Gramática Baseada em Frases**:
   - Instruções terminam com ponto (`.`).
   - Cabeçalhos de rotinas e tipos terminam com dois-pontos (`:`).
   - Indentação indica agrupamento de instruções dentro de laços e rotinas.

2. **Independência de Ordem**:
   - Tipos, variáveis globais e rotinas podem ser declarados em qualquer lugar nos arquivos de fonte em qualquer ordem. Não há arquivos de cabeçalho (`.h`), declarações antecipadas ou diretivas `#include`.

3. **Plurais e Artigos Naturais**:
   - A linguagem entende a gramática portuguesa: artigos indefinidos (`um`, `uma`, `uns`, `umas`, `outro`, `outra`, `alguns`, `algumas`) introduzem novas instâncias ou slots de parâmetros, enquanto artigos definidos (`o`, `a`, `os`, `as`, `este`, `esta`, `estes`, `estas`) referenciam variáveis existentes.
   - Formas plurais (ex: `caixa` → `caixas`, `monstro` → `monstros`) são indexadas e conectadas automaticamente.

4. **Coleções Embutidas ("Listas")**:
   - Definir um tipo como `Uma [nome] é uma lista com...` o equipa automaticamente com nós de lista duplamente encadeada (`anterior`, `posterior`) e cadeias de cabeçalho de lista (`inicial`, `final`).

5. **Gráficos de Primeira Classe e Integração Nativa Win32**:
   - A biblioteca padrão do `Português Puro` inclui primitivas gráficas 2D integradas (desenho de caixas, elipses, tipografia, geometria de tartaruga, espaços de cores) e interoperabilidade transparente com API Win32.

---

## 3. "Olá Mundo" em `Português Puro`

Todo programa executável em `Português Puro` começa na rotina `Rotina para que se execute o programa:`:

```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Escreva "Olá, Mundo!" no console.
  Aguarde a tecla enter.
  Feche o programa.
```

Para desenhar uma caixa colorida na tela:
```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Limpe a tela com a cor preta.
  Crie uma caixa 2 polegadas por 2 polegadas.
  Centralize a caixa na tela.
  Desenhe a caixa com a cor dourada.
  Atualize a tela.
  Aguarde a tecla escape.
  Feche o programa.
```

---

## 4. Próximos Passos

Explore o restante deste guia do usuário para dominar o Português Puro:
- [02: Sintaxe e Regras Fundamentais](./02_SYNTAXE_E_REGRAS.md)
- [03: Sistema de Tipos e Estruturas de Dados](./03_TIPOS.md)
- [04: Rotinas, Funções e Funções Deliberativas](./04_ROTINAS_E_FUNÇÕES.md)
- [05: Controle de Fluxo e Laços](./05_CONTROLE_DE_FLUXO.md)
- [06: Gerenciamento de Memória e Strings](./06_MEMÓRIA_E_STRINGS.md)
- [07: Biblioteca Padrão, Gráficos e API do Windows](./07_BIBLIOTECA_PADRÃO_E_INTEROPERABILIDADE.md)