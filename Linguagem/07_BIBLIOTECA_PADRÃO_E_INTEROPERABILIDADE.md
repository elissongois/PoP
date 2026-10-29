# 07: Biblioteca Padrão, Gráficos & Interoperabilidade Win32

Uma das maiores forças do `Português Puro` é seu runtime embutido e biblioteca padrão abrangente implementada em `Biblioteca Padrão.pop`. Ela fornece desenho 2D nativo, gráficos de tartaruga, gerenciamento de cores, manipulação de janelas, e chamadas transparentes à API Windows.

---

## 1. Gráficos 2D e Geometria

A biblioteca padrão modela espaço visual usando primitivas geométricas de alto nível:
- **`local`**: Um ponto 2D com `coordenada X` e `coordenada Y`.
- **`caixa`**: Um retângulo com coordenadas `esquerda`, `topo`, `direita`, e `baixo`.
- **`twip`**: Unidade padrão de medida (1/20 de ponto tipográfico; 1440 twips = 1 polegada).

### 1.1 Desenhando Formas
```pop
Rotina para que se execute o programa:
  Inicialize os componentes.
  Limpe a tela com a cor branca.
  
  \ Crie um quadrado centralizado de 4 polegadas
  Crie uma caixa 4 polegadas por 4 polegadas.
  Centralize a caixa na tela.
  
  \ Desenhe com cor e borda
  Desenhe a caixa com a cor azul claro.
  Trace a caixa com a cor azul marinho e 3 twips.
  
  \ Desenhe uma elipse dentro da caixa
  Desenhe uma elipse na caixa com a cor dourada.
  
  Atualize a tela.
  Aguarde a tecla escape.
  Feche o programa.
```

### 1.2 Tipografia & Renderização de Texto
Você pode renderizar texto com fontes, cores e alinhamentos personalizados diretamente em qualquer caixa:
```pop
Desenhe "Bem-vindo ao `Português Puro`" na caixa com a cor cinza escuro e "Arial" e 24 pontos.
```

---

## 2. Cores e o Espaço de Cor HSL

Em vez de forçar desenvolvedores a memorizar valores hexadecimais RGB (`#FF8800`), o `Português Puro` representa cores com `matiz`, `saturação` e `luminosidade`:

```pop
Uma cor é uma estrutura com
  Um matiz,
  Uma saturação,
  Uma luminosidade, e
  Um brilho na luminosidade.
```

Apelidos de cores predefinidos incluem:
- `a cor vermelha`, `a cor verde`, `a cor azul`
- `a cor azul claro`, `a cor vermelho escuro`, `a cor verde pastel`
- `a cor dourada`, `a cor prateada`, `a cor carvão`

Você pode mesclar ou ajustar cores naturalmente:
```pop
Aclare a cor por 10 porcento.
Escureça a cor por 20 porcento.
Misture a cor vermelha com a cor azul em uma cor roxa.
```

---

## 3. Geometria de Tartaruga

O `Português Puro` tem gráficos de tartaruga nativos para arte algorítmica, geração de fractais e diagramas:
```pop
Comece no meio da tela.
Olhe para o norte.
Itere 4 vezes.
  Mova 2 polegadas.
  Vire à direita 90 graus.
Reitere.
```

---

## 4. E/S de Arquivo & Operações de Disco

Operações de arquivo são diretas:
```pop
\ Leia um arquivo inteiro em um buffer
Carregue "C:\dados\entrada.txt" para um buffer.

\ Escreva texto em disco
Atribua "Entrada de log: OK" para uma string.
Escreva a string para "C:\dados\log.txt".

\ Verifique se arquivo ou diretório existe
Se "C:\MinhaPasta\" estiver no sistema de arquivos,
  Escreva "Pasta existe!" no console.
```

---

## 5. Interoperabilidade Nativa com API Windows Win32

Programas em `Português Puro` podem chamar qualquer DLL Windows diretamente usando a sintaxe `Processe [dll] [função]`.

### 5.1 Chamando uma API Win32
```pop
Processe "kernel32.dll" "GetTickCount" retornando um número denominado ticks.

Processe "user32.dll" "MessageBoxA" com
  0 e
  "Operação concluída com sucesso." e
  "Aviso" e
  $00000040 [MB_ICONINFORMATION]
  retornando um número denominado resultado.
```

### 5.2 Como o Compilador Lida com Chamadas Externas
1. **Resolução de Bairro de Importação**: O compilador registra automaticamente o nome da DLL e função exportada no Diretório de Importação (`.idata`) do binário.
2. **Geração de IAT**: Cria uma entrada na Tabela de Endereços de Importação para a função externa.
3. **Emissão de Chamada Indireta**: A instrução de chamada compila para uma instrução x86 direta `CALL DWORD PTR [IAT_Entry]` (`FF 15 <endereço>`).

---

## 6. Assembly Inline (`Decodifique`)

Para programação de nível de hardware, operações SIMD, ou manipulação de bytes de alta performance, o `Português Puro` permite opcodes de máquina x86 inline:

```pop
Rotina para que se limpe o registrador eax:
  Decodifique $31C0. \ xor eax, eax

Rotina para que se pare o processador:
  Decodifique $F4.   \ hlt
```

---

## Resumo do Guia do Usuário

Parabéns! Você agora tem uma compreensão abrangente do `Português Puro`:
1. **Estrutura baseada em frases** com artigos e possessivos intuitivos.
2. **Modelagem de tipos limpa** com estruturas, unidades, e listas duplamente encadeadas automáticas (`listas`).
3. **Rotinas expressivas**, funções deliberativas, e cabeçalhos sinônimos.
4. **Compilação rápida e auto-contida** em executáveis Windows nativos de 32 bits.