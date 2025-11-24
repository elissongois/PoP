# Verbos - Português Puro

## Visão Geral

Verbos em Português Puro são palavras-chave usadas principalmente em **expressões condicionais** e **cabeçalhos de funções/rotinas**. Eles permitem que a linguagem mantenha uma sintaxe natural em português, especialmente em funções deliberativas.

---

## Função dos Verbos

### Uso Principal

Verbos são usados em:

1. **Expressões Condicionais** (`Se`)
2. **Cabeçalhos de Funções** (`Função para que se determine se`)
3. **Cabeçalhos de Rotinas** (nomes naturais)

### Normalização

O compilador **normaliza** verbos para formas canônicas:
- `for`, `foi`, `foram`, `forem` → `é`
- `estiver`, `estiverem`, `estava`, `estavam` → `está`
- `tiver`, `têm` → `tem`
- `puder`, `puderem`, `poderia` → `pode`

---

## Lista Completa de Verbos

### 1. Ser/Estar (Equivalência)

| Verbo       | Forma Canônica | Uso                           |
|-------------|----------------|-------------------------------|
| `é`         | `é`            | Singular presente             |
| `são`       | `é`            | Plural presente               |
| `for`       | `é`            | Singular futuro do subjuntivo |
| `forem`     | `é`            | Plural futuro do subjuntivo   |
| `foi`       | `é`            | Singular pretérito            |
| `foram`     | `é`            | Plural pretérito              |
| `será`      | `é`            | Singular futuro               |
| `serão`     | `é`            | Plural futuro                 |
| `ser`       | `é`            | Infinitivo                    |
| `está`      | `está`         | Singular presente             |
| `estão`     | `está`         | Plural presente               |
| `estiver`   | `está`         | Singular subjuntivo           |
| `estiverem` | `está`         | Plural subjuntivo             |
| `estava`    | `está`         | Singular pretérito            |
| `estavam`   | `está`         | Plural pretérito              |
| `estará`    | `está`         | Singular futuro               |
| `estarão`   | `está`         | Plural futuro                 |
| `estamos`   | `está`         | Primeira pessoa plural        |
| `estar`     | `está`         | Infinitivo                    |

---

### 2. Ter/Haver (Posse/Existência)

| Verbo    | Forma Canônica | Uso                 |
|----------|----------------|---------------------|
| `tem`    | `tem`          | Singular presente   |
| `têm`    | `tem`          | Plural presente     |
| `ter`    | `tem`          | Infinitivo          |
| `tiver`  | `tem`          | Subjuntivo          |
| `há`     | `há`           | Impessoal (existir) |
| `houver` | `há`           | Subjuntivo          |

---

### 3. Conter (Inclusão)

| Verbo      | Forma Canônica | Uso               |
|------------|----------------|-------------------|
| `contém`   | `contém`       | Singular presente |
| `conter`   | `contém`       | Infinitivo        |
| `contiver` | `contém`       | Subjuntivo        |

---

### 4. Possuir (Posse)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `possui`  | `possui`       | Singular presente |
| `possuem` | `possui`       | Plural presente   |
| `possuir` | `possui`       | Infinitivo        |

---

### 5. Poder (Capacidade)

| Verbo     | Forma Canônica | Uso                    |
|-----------|----------------|------------------------|
| `pode`    | `pode`         | Singular presente      |
| `podem`   | `pode`         | Plural presente        |
| `podemos` | `pode`         | Primeira pessoa plural |
| `poderia` | `pode`         | Condicional            |
| `puder`   | `pode`         | Subjuntivo singular    |
| `puderem` | `pode`         | Subjuntivo plural      |

---

### 6. Dever (Obrigação)

| Verbo      | Forma Canônica | Uso                  |
|------------|----------------|----------------------|
| `deve`     | `deve`         | Singular presente    |
| `devem`    | `deve`         | Plural presente      |
| `deveria`  | `deve`         | Condicional singular |
| `deveriam` | `deve`         | Condicional plural   |

---

### 7. Existir (Existência)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `existe`  | `existe`       | Singular presente |
| `existem` | `existe`       | Plural presente   |
| `existir` | `existe`       | Infinitivo        |

---

### 8. Caber (Capacidade)

| Verbo    | Forma Canônica | Uso               |
|----------|----------------|-------------------|
| `cabe`   | `cabe`         | Singular presente |
| `couber` | `cabe`         | Subjuntivo        |

---

### 9. Começar/Iniciar (Início)

| Verbo     | Forma Canônica | Uso               |
|-----------|----------------|-------------------|
| `começa`  | `começa`       | Singular presente |
| `começar` | `começa`       | Infinitivo        |
| `inicia`  | `inicia`       | Singular presente |
| `iniciar` | `inicia`       | Infinitivo        |

---

### 10. Finalizar/Terminar (Fim)

| Verbo       | Forma Canônica | Uso               |
|-------------|----------------|-------------------|
| `finaliza`  | `finaliza`     | Singular presente |
| `finalizar` | `finaliza`     | Infinitivo        |
| `termina`   | `termina`      | Singular presente |
| `terminar`  | `termina`      | Infinitivo        |

---

### 11. Outros Verbos

| Verbo        | Uso                    |
|--------------|------------------------|
| `excede`     | Singular (ultrapassar) |
| `excedem`    | Plural (ultrapassar)   |
| `necessita`  | Singular (precisar)    |
| `necessitar` | Infinitivo (precisar)  |
| `parece`     | Singular (aparentar)   |
| `requer`     | Singular (requerer)    |
| `supera`     | Singular (exceder)     |
| `superam`    | Plural (exceder)       |
| `superar`    | Infinitivo (exceder)   |

---

## Uso em Expressões Condicionais

### Sintaxe

```pop
Se <sujeito> <verbo> <complemento>, <ação>.
```

### Exemplos

```pop
\\ Ser/Estar
Se o número for 0, retorne.
Se a string estiver em branco, limpe o buffer.
Se o ponteiro for inexistente, aloque memória.

\\ Ter/Haver
Se o arquivo tem erros, corrija.
Se há problemas, reporte.

\\ Conter
Se a lista contém o item, remova.
Se a string contiver espaços, normalize.

\\ Possuir
Se o objeto possui nome, exiba.

\\ Poder
Se o usuário pode editar, habilite.
Se a operação puder falhar, valide.

\\ Dever
Se o valor deve ser positivo, verifique.

\\ Existir
Se o arquivo existe, abra.
Se a variável existir, use.

\\ Começar/Terminar
Se a string começa com "http", processe.
Se o processo termina, finalize.

\\ Exceder
Se o contador excede o limite, pare.
```

---

## Uso em Funções Deliberativas

### Sintaxe

```pop
Função para que se determine se <sujeito> <verbo> <complemento>:
  \\ Corpo da função
  Diga sim|não.
```

### Exemplos

```pop
\\ Ser
Função para que se determine se um número é negativo:
  Se o número for menor do que 0, diga sim.
  Diga não.

\\ Estar
Função para que se determine se uma string está em branco:
  Se a quantidade de caracteres desta string for 0, diga sim.
  Diga não.

\\ Ter
Função para que se determine se uma lista tem elementos:
  Se a lista inicial destas listas for inexistente, diga não.
  Diga sim.

\\ Conter
Função para que se determine se uma string contém vogais:
  \\ Implementação...
  Diga sim.

\\ Poder
Função para que se determine se um usuário pode acessar:
  \\ Verifica permissões...
  Diga sim.

\\ Existir
Função para que se determine se um arquivo existe:
  \\ Verifica sistema de arquivos...
  Diga sim.

\\ Começar
Função para que se determine se uma string começa com prefixo:
  \\ Compara início...
  Diga sim.
```

---

## Uso em Cabeçalhos de Rotinas

Verbos tornam os nomes de rotinas mais naturais:

```pop
\\ Ser/Estar
Rotina para que se defina uma string como o tipo da aplicação:
  Atribua a string para o tipo da aplicação.

\\ Ter
Rotina para que se obtenha o que tem na lista:
  \\ Processa lista...

\\ Começar
Rotina para que se inicie o que começa o processo:
  \\ Inicia processo...
```

---

## Normalização de Verbos

O compilador normaliza verbos para simplificar o processamento:

### Exemplo de Normalização

```pop
\\ Todas estas expressões são equivalentes:
Se o número for 0, ...
Se o número é 0, ...
Se o número foi 0, ...
Se o número será 0, ...

\\ Todas normalizam para:
Se o número é 0, ...
```

### Tabela de Normalização

| Verbos Originais                                                          | Forma Normalizada |
|---------------------------------------------------------------------------|-------------------|
| `for`, `foi`, `foram`, `forem`, `será`, `serão`, `ser`                    | `é`               |
| `estiver`, `estiverem`, `estava`, `estavam`, `estará`, `estarão`, `estar` | `está`            |
| `tiver`, `têm`, `ter`                                                     | `tem`             |
| `puder`, `puderem`, `poderia`                                             | `pode`            |
| `deveria`, `deveriam`                                                     | `deve`            |
| `couber`                                                                  | `cabe`            |
| `começar`                                                                 | `começa`          |
| `terminar`                                                                | `termina`         |
| `iniciar`                                                                 | `inicia`          |
| `finalizar`                                                               | `finaliza`        |

---

## Mapeamento para Langium

```langium
// ============================================================================
// VERBOS
// ============================================================================

Verbo:
    VerboSer | VerboEstar | VerboTer | VerboHaver | VerboConter |
    VerboPossuir | VerboPoder | VerboDever | VerboExistir |
    VerboCaber | VerboComecar | VerboTerminar | OutrosVerbos;

VerboSer:
    'é' | 'são' | 'for' | 'forem' | 'foi' | 'foram' | 
    'será' | 'serão' | 'ser';

VerboEstar:
    'está' | 'estão' | 'estiver' | 'estiverem' | 'estava' | 'estavam' |
    'estará' | 'estarão' | 'estamos' | 'estar';

VerboTer:
    'tem' | 'têm' | 'ter' | 'tiver';

VerboHaver:
    'há' | 'houver';

VerboConter:
    'contém' | 'conter' | 'contiver';

VerboPossuir:
    'possui' | 'possuem' | 'possuir';

VerboPoder:
    'pode' | 'podem' | 'podemos' | 'poderia' | 'puder' | 'puderem';

VerboDever:
    'deve' | 'devem' | 'deveria' | 'deveriam';

VerboExistir:
    'existe' | 'existem' | 'existir';

VerboCaber:
    'cabe' | 'couber';

VerboComecar:
    'começa' | 'começar' | 'inicia' | 'iniciar';

VerboTerminar:
    'finaliza' | 'finalizar' | 'termina' | 'terminar';

OutrosVerbos:
    'excede' | 'excedem' | 'necessita' | 'necessitar' |
    'parece' | 'requer' | 'supera' | 'superam' | 'superar';
```

---

## Observações Importantes

1. **Normalização Automática**: O compilador normaliza verbos para formas canônicas
2. **Sinônimos**: `ser` e `estar` são tratados como equivalentes
3. **Flexão**: Verbos flexionam em número (singular/plural)
4. **Tempo Verbal**: Diferentes tempos são aceitos mas normalizados
5. **Case-Insensitive**: Não diferencia maiúsculas de minúsculas
6. **Uso em Condicionais**: Verbos são essenciais em expressões `Se`
7. **Funções Deliberativas**: Verbos definem o nome da função
8. **Naturalidade**: Permitem sintaxe natural em português
9. **Conjugação**: Aceita várias conjugações do mesmo verbo
10. **Contexto**: O significado depende do contexto (sujeito + complemento)

---

## Boas Práticas

1. **Use Verbos Naturais**: Escolha o verbo que soa mais natural
2. **Consistência**: Use o mesmo verbo para situações similares
3. **Clareza**: Prefira verbos que deixam a intenção clara
4. **Tempo Verbal**: Use presente para condições atuais
5. **Plural/Singular**: Concorde com o sujeito
6. **Sinônimos**: `ser` e `estar` são intercambiáveis
7. **Normalização**: Confie na normalização do compilador
8. **Documentação**: Comente funções com verbos complexos
9. **Legibilidade**: Priorize a leitura natural
10. **Padrões**: Siga padrões da biblioteca padrão

---

## Exemplos Práticos

### Validação de Dados

```pop
Função para que se determine se um email é válido:
  Se o email estiver em branco, diga não.
  Se o email não contiver "@", diga não.
  Diga sim.

Rotina para que se valide entrada:
  Se o email não for válido, retorne.
  Processe o email.
```

---

### Verificação de Estado

```pop
Função para que se determine se o sistema está pronto:
  Se o banco de dados não estiver conectado, diga não.
  Se o cache não estiver inicializado, diga não.
  Diga sim.

Rotina para que se inicie aplicação:
  Se o sistema estiver pronto, continue.
  Escreva "Sistema não está pronto!" no console.
```

---

### Controle de Fluxo

```pop
Função para que se determine se deve continuar:
  Se o contador excede o limite, diga não.
  Se a lista não tem mais elementos, diga não.
  Diga sim.

Rotina para que se processe itens:
  Itere.
    Se não deve continuar, pare.
    Processe o próximo item.
  Reitere.
```

---

## Estatísticas

- **Total de verbos**: ~70
- **Verbos canônicos**: ~20
- **Grupos principais**: 11
- **Mais comum**: `for` (normalizado para `é`)
- **Uso principal**: Expressões condicionais
- **Normalização**: Automática pelo compilador
- **Flexões**: Singular, plural, tempos verbais
- **Sinônimos**: `ser` ≈ `estar`
