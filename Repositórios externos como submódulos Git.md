# Repositórios externos como submódulos Git

Este guia explica como manter um repositório Git dentro de outro repositório sem misturar o histórico dos dois. O mecanismo recomendado para isso é o **submódulo**.

## O que aconteceu

As pastas `Documentação/Wiki/` e `IDE/` são repositórios Git independentes: cada uma tem seu próprio histórico e um remoto próprio. O repositório principal `PoP` não as acompanha automaticamente.

Por isso, o Git mostrou as duas pastas como *untracked* (não rastreadas). Isso não significa que os arquivos foram perdidos: significa apenas que o repositório principal ainda não registra essas pastas.

Adicionar uma pasta que contém outro repositório com um `git add` comum não é suficiente para documentar a relação entre eles. O repositório principal poderia acabar registrando apenas um ponteiro para um commit, sem registrar de forma apropriada de onde obter o repositório. Um submódulo registra tanto o endereço do repositório quanto o commit específico que o projeto principal espera encontrar.

## O que é um submódulo

Um submódulo mantém o histórico e o remoto de cada repositório separados. No repositório principal, o Git registra:

- o endereço do repositório, no arquivo `.gitmodules`;
- um ponteiro para um commit específico do submódulo.

O repositório principal **não passa a rastrear individualmente os arquivos internos** do submódulo. Cada submódulo precisa ter seus próprios commits enviados ao seu remoto antes que o repositório principal possa apontar para eles.

## Repositórios deste projeto

As duas pastas já existentes correspondem a estes repositórios:

| Caminho no projeto | Remoto | Branch verificada |
|---|---|---|
| `Documentação/Wiki/` | `https://github.com/elenderg/Portugues-Puro.wiki.git` | `master` |
| `IDE/` | `https://github.com/elenderg/PAL-1000.git` | `main` |

Na verificação que motivou este guia, as duas pastas já tinham metadados Git, seus remotos apontavam para esses endereços e não havia alterações locais pendentes. Por isso, é possível registrá-las como submódulos **reaproveitando as cópias existentes**.

## Registrar as pastas existentes como submódulos

Execute os comandos a partir da raiz do repositório `PoP`.

### 1. Confira as cópias existentes

Antes de registrá-las, confirme que os remotos estão corretos e que não há alterações locais que precisem ser preservadas ou enviadas:

```bash
git -C "Documentação/Wiki" status --short --branch
git -C "Documentação/Wiki" remote -v

git -C "IDE" status --short --branch
git -C "IDE" remote -v
```

Se houver alterações em qualquer submódulo, faça commit e envie-as ao remoto correspondente antes de prosseguir. O repositório principal precisa apontar para um commit que outras pessoas também consigam obter.

### 2. Registre cada pasta

Use `git submodule add --force` para informar ao Git que os diretórios existentes são cópias locais dos repositórios indicados. O `--force` permite reutilizar essas cópias em vez de exigir diretórios vazios:

```bash
git submodule add --force \
  https://github.com/elenderg/Portugues-Puro.wiki.git \
  "Documentação/Wiki"

git submodule add --force \
  https://github.com/elenderg/PAL-1000.git \
  "IDE"
```

Esses comandos criam ou atualizam `.gitmodules` e preparam no índice do repositório principal os ponteiros para os commits atuais dos submódulos.

> **Atenção:** use esses comandos somente se os diretórios existentes forem de fato os repositórios indicados e não contiverem alterações locais não salvas. Se o comando informar que o endereço não corresponde ao repositório local, pare e investigue; não apague os diretórios nem os metadados `.git` para tentar contornar o erro.

### 3. Revise e faça o commit no repositório principal

Confira o que será registrado:

```bash
git status
git diff --cached --submodule=log
```

O arquivo `.gitmodules` deve listar os dois caminhos e seus remotos. O resumo do índice deve mostrar os submódulos como referências a commits, não como uma lista dos arquivos internos.

Se o resultado estiver correto, faça o commit no repositório principal:

```bash
git add .gitmodules "Documentação/Wiki" "IDE"
git commit -m "Registra Wiki e IDE como submódulos"
```

Depois, envie o commit do repositório principal:

```bash
git push origin main
```

O envio desse commit publica as referências aos submódulos, mas não envia commits que ainda não tenham sido publicados nos remotos da Wiki ou da IDE. Por isso, cada commit interno precisa ser enviado ao remoto próprio antes de atualizar o ponteiro no repositório principal.

## Como clonar o projeto depois

Para clonar o repositório principal e inicializar os dois submódulos de uma vez:

```bash
git clone --recurse-submodules https://github.com/elissongois/PoP.git
```

Se o repositório principal já tiver sido clonado sem essa opção, inicialize os submódulos com:

```bash
git submodule update --init --recursive
```

Sem essa inicialização, o clone pode conter apenas as referências aos submódulos, sem os arquivos de seus repositórios.

## Como atualizar um submódulo

Um submódulo fica associado a um commit específico. Ele **não acompanha automaticamente a branch remota**. Para atualizar a Wiki ou a IDE:

1. Acesse o submódulo e obtenha a atualização desejada.
2. Faça commit e envie qualquer alteração ao remoto próprio do submódulo.
3. No repositório principal, registre o novo ponteiro com outro commit.

Por exemplo, para avançar os submódulos às versões mais recentes de suas branches:

```bash
git -C "Documentação/Wiki" pull --ff-only origin master
git -C "IDE" pull --ff-only origin main
```

Depois, na raiz de `PoP`, revise e registre os novos ponteiros:

```bash
git status
git diff --submodule=log
git add "Documentação/Wiki" "IDE"
git commit -m "Atualiza submódulos"
git push origin main
```

Se houver alterações locais em um submódulo, faça commit e `git push` **dentro daquele repositório** antes de registrar seu novo commit no repositório principal. Não tente enviar o conteúdo do submódulo usando apenas `git push` na raiz de `PoP`.

## Comandos úteis para conferir o estado

Na raiz do repositório principal:

```bash
git submodule status
git status
```

Para conferir o remoto ou o estado de um submódulo específico:

```bash
git -C "Documentação/Wiki" remote -v
git -C "Documentação/Wiki" status --short --branch

git -C "IDE" remote -v
git -C "IDE" status --short --branch
```
