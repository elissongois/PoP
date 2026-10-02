# Campos Calculados - Revisão

## Resumo do arquivo original
- Campos calculados são "campos virtuais" não armazenados fisicamente
- Valor é calculado dinamicamente por uma rotina
- **Sintaxe de definição**: `Rotina para que se atribua <campo> <possessivo abrangente> <tipo> para <tipo_retorno>:`
- **Possessivos abrangentes**: `duma`, `dum`, `dumas`, `duns`, `dessa`, `desse`, etc.
- **Possessivos adjacentes**: `desta`, `deste`, `destes`, `destas`
- **Regra**: Definição usa possessivos abrangentes (refere-se ao tipo); uso implementação usa adjacentes (refere-se à instância)
- **Emprego**: Pode ser explícito (`Empregue a rotina`) ou implícito (se definido no mesmo módulo)
- **Vantagens**: Economia de memória, consistência, encapsulamento, naturalidade
- **Limitações**: Somente leitura, custo computacional por acesso, depende de escopo

## Divergências encontradas vs Algoritmo Janela
- O algoritmo Janela **NÃO** usa campos calculados
- A linguagem usa `compartilhe` e `use` para composição, não herança
- Documentação de compilador menciona campos calculados como feature, mas exemplos são de estruturas simples
- Não há exemplos de campos calculados em Algoritmos/

## Correções / Ajustes propostos
- Adicionar exemplos de campos calculados reais (área, comprimento, etc.)
- Verificar se possessivos abrangentes (`duma`, `dum`) são completamente especificados
- Garantir que a distinção entre possessivos adjacentes e abrangentes esteja clara

## Decisões de design para futuro mapeamento Langium
- `CampoCalculado`: regra especial com `atribua` no lugar do verbo comum
- `PossessivoAbrangente`: terminais separados de `Possessivo` adjacente
- Acesso a campo calculado usa mesmo mecanismo que campo real
- Emprego explícito vs implícito deve ter suporte sintático

## Exemplo de uso extraído de `Algoritmos/Janela/Janela.pop`
*(Nenhum exemplo de campos calculados no algoritmo Janela)*

Exemplo da documentação:
```pop
Rotina para que se atribua o centro duma linha para uma localização:
  Atribua a localização inicial desta linha mais a localização final desta linha à localização.
  Divida a localização por 2.

Uso:
Atribua o centro desta linha para uma localização.
```

(Arquivo de revisão criado em `Revisão/Campos Calculados - Revisão.md`)