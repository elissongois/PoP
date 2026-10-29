# Subtextos e Percorredores

## Visão Geral

Subtextos e percorredores são mecanismos para **navegar e manipular strings** caractere por caractere em Português Puro. O comando `Lance` cria um subtexto (substring) ou percorredor sobre uma string, permitindo iteração e acesso a caracteres individuais.

---

## Comando `Lance`

### Sintaxe Básica

```pop
Lance um subtexto sobre <string>.
Lance um percorredor sobre <string>.
```

### Função

Cria uma **visão** sobre uma string existente que permite:
- Acessar o caractere inicial (`caractere inicial deste subtexto`)
- Avançar para o próximo caractere (`Adicione 1 para o caractere inicial deste subtexto`)
- Verificar se chegou ao fim (`Se o subtexto estiver em branco`)

---

## Estrutura do Subtexto

Um subtexto possui os seguintes componentes acessíveis via possessivos:

| Componente | Acesso | Descrição |
|------------|--------|-----------|
| Caractere inicial | `o caractere inicial deste subtexto` | Primeiro caractere do subtexto |
| Conteúdo do caractere | `o conteúdo deste caractere inicial deste subtexto` | Valor do caractere (byte) |
| Subtexto restante | (implícito ao avançar) | Resto da string após o caractere inicial |

---

## Iteração sobre Strings

### Padrão Básico

```pop
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  \\ Processa o caractere inicial deste subtexto
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### Exemplo Completo: Contar Vogais

```pop
Rotina para que se conte vogais em uma string:
  Atribua 0 para uma contagem.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
      Adicione 1 para a contagem.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Escreva "Vogais: " junto com a contagem no console.
```

---

## Acesso a Caracteres

### Obter Valor do Caractere

```pop
\\ O conteúdo deste caractere inicial deste subtexto
Atribua o conteúdo deste caractere inicial deste subtexto para um byte.
```

### Comparar Caractere

```pop
Se o conteúdo deste caractere inicial deste subtexto for "A",
  \\ É a letra A

Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
  \\ É espaço

Se o conteúdo deste caractere inicial deste subtexto for alguma vogal,
  \\ É vogal (a, e, i, o, u, A, E, I, O, U)
```

### Verificar Fim da String

```pop
Se o subtexto estiver em branco, pare.
\\ Ou equivalentemente:
Se o caractere inicial deste subtexto estiver em branco, pare.
```

---

## Exemplos Práticos

### 1. Inverter String

```pop
Rotina para que se inverta uma string:
  Preserve a string.
  Limpe a string original.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Obtenha um caractere desde a string (regressivamente).
    Acrescente o caractere para a string original.
  Reitere.
```

### 2. Processar Linha por Linha

```pop
Rotina para que se processe linhas:
  Lance um subtexto sobre o texto.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for o caractere de nova linha,
      \\ Fim da linha - processa linha acumulada
      Processe a linha atual.
      Limpe a linha atual.
    Senão,
      Acrescente o conteúdo deste caractere inicial deste subtexto para a linha atual.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### 3. Buscar Substring

```pop
Rotina para que se encontre substring:
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, retorne não.
    Se o conteúdo deste caractere inicial deste subtexto for o primeiro caractere da busca,
      \\ Verifica se os próximos caracteres batem
      Se a substring coincide a partir daqui, retorne sim.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### 4. Remover Caracteres

```pop
Rotina para que se remova espaços extras:
  Atribua "" para uma string resultado.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto não for o caractere de espaço,
      Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
  Atribua o resultado para a string.
```

---

## Percorredor vs Subtexto

| Aspecto | Subtexto | Percorredor |
|---------|----------|-------------|
| Sintaxe | `Lance um subtexto sobre` | `Lance um percorredor sobre` |
| Comportamento | Igual | Igual (sinônimo) |
| Uso | Preferido | Alternativo |

**Nota:** `subtexto` e `percorredor` são tratados como sinônimos pelo compilador.

---

## Características Importantes

1. **Não Modifica Original**: O subtexto é uma visão; a string original não é alterada
2. **Avanço Manual**: Use `Adicione 1 para o caractere inicial deste subtexto` para avançar
3. **Fim da String**: Detectado por `Se o subtexto estiver em branco`
4. **Caractere Atual**: Acessado via `o conteúdo deste caractere inicial deste subtexto`
5. **Compatível com Laços**: Projetado para uso dentro de `Itere`/`Reitere`
6. **Case-Sensitive**: Comparações de caracteres distinguem maiúsculas/minúsculas

---

## Variáveis Auxiliares Comuns

```pop
\\ Para acumular resultado
Atribua "" para uma string resultado.

\\ Para contar
Atribua 0 para um contador.

\\ Para guardar caractere atual
Atribua o conteúdo deste caractere inicial deste subtexto para um caractere atual.
```

---

## Mapeamento para Langium

```langium
// ============================================================================
// SUBTEXTOS E PERCORREDORES
// ============================================================================

ComandoLance:
    'Lance' 'um' tipo=('subtexto'|'percorredor') 'sobre' string=Expressao '.';

// Acesso a componentes do subtexto
SubtextoAcesso:
    'o' 'caractere' 'inicial' 'deste' tipo=('subtexto'|'percorredor')
    | 'o' 'conteúdo' 'deste' 'caractere' 'inicial' 'deste' tipo=('subtexto'|'percorredor')
    | 'o' tipo=('subtexto'|'percorredor');

// Verificação de fim
SubtextoVazio:
    tipo=('subtexto'|'percorredor') 'estiver' 'em' 'branco';

// Avanço do subtexto
AvancaSubtexto:
    'Adicione' '1' 'para' 'o' 'caractere' 'inicial' 'deste' tipo=('subtexto'|'percorredor') '.';
```

---

## Observações Importantes

1. **Sempre Inicialize**: Use `Lance` antes de iterar
2. **Sempre Avance**: Esquecer `Adicione 1` causa loop infinito
3. **Verifique Fim**: Sempre teste `Se o subtexto estiver em branco` no início do laço
4. **Não Modifica Original**: A string original permanece intacta
5. **Use `Preserve`**: Se precisar modificar a string original enquanto itera
6. **Bytes Ignoráveis**: Caracteres como `#`, `&`, `_`, `-`, `+`, `/`, `£` podem aparecer em nomes

---

## Boas Práticas

1. **Estrutura Padrão**: Sempre use o padrão `Lance` → `Itere` → `Se vazio pare` → `Processa` → `Avança` → `Reitere`
2. **Nomes Descritivos**: Use nomes claros para variáveis de controle
3. **Comentários**: Documente o que cada iteração faz
4. **Validação**: Verifique string não vazia antes de `Lance`
5. **Performance**: Para strings muito grandes, considere processar em blocos
6. **Limpeza**: Variáveis de subtexto persistem no escopo da rotina

---

## Erros Comuns

### ❌ Esquecer de Avançar

```pop
\\ RUIM - Loop infinito
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  \\ FALTA: Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### ❌ Não Verificar Fim

```pop
\\ RUIM - Acessa além do fim
Lance um subtexto sobre a string.
Itere.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Processa caractere.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

### ❌ Modificar String Original Durante Iteração

```pop
\\ RUIM - Comportamento indefinido
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Remova o caractere inicial deste subtexto da string. \\ Modifica original!
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.

\\ BOM - Use Preserve ou string auxiliar
Preserve a string.
Lance um subtexto sobre a string.
Itere.
  Se o subtexto estiver em branco, pare.
  Acrescente o conteúdo deste caractere inicial deste subtexto para o resultado.
  Adicione 1 para o caractere inicial deste subtexto.
Reitere.
```

---

## Exemplos Avançados

### Parser Simples

```pop
Rotina para que se parseie números em uma string:
  Atribua 0 para um número atual.
  Atribua não para um em número.
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco,
      Se o em número, processe o número atual.
      Pare.
    Se o conteúdo deste caractere inicial deste subtexto for um dígito,
      Multiplique o número atual por 10.
      Adicione o conteúdo deste caractere inicial deste subtexto menos '0' ao número atual.
      Atribua sim ao em número.
    Senão,
      Se o em número,
        Processe o número atual.
        Atribua 0 para o número atual.
        Atribua não ao em número.
    Adicione 1 para o caractere inicial deste subtexto.
  Reitere.
```

### Tokenizador

```pop
Rotina para que se tokenize string:
  Lance um subtexto sobre a string.
  Itere.
    Se o subtexto estiver em branco, pare.
    Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
      \\ Pula espaços
      Adicione 1 para o caractere inicial deste subtexto.
      Reitere.
    \\ Início de token
    Atribua "" para um token.
    Itere.
      Se o subtexto estiver em branco, pare.
      Se o conteúdo deste caractere inicial deste subtexto for o caractere de espaço,
        Pare. \\ Fim do token
      Acrescente o conteúdo deste caractere inicial deste subtexto para o token.
      Adicione 1 para o caractere inicial deste subtexto.
    Reitere.
    Processa o token.
  Reitere.
```

---

## Estatísticas

- **Comando principal**: `Lance`
- **Tipos**: `subtexto`, `percorredor` (sinônimos)
- **Avanço**: `Adicione 1 para o caractere inicial deste subtexto`
- **Fim**: `Se o subtexto estiver em branco`
- **Acesso a caractere**: `o conteúdo deste caractere inicial deste subtexto`
- **Uso típico**: Dentro de laços `Itere`/`Reitere`
- **Não modifica**: String original