# Guia Completo: Modificando e Implantando a Automação

Este documento é o manual de operações padrão para qualquer desenvolvedor (incluindo o cliente) que precise fazer alterações no código da automação e implantar a nova versão na VPS através do EasyPanel.

---

## Parte 1: Configuração Inicial do Ambiente (Feito Apenas UMA VEZ por computador)

Antes de poder modificar o código, você precisa configurar seu computador para se comunicar com o GitHub. Siga estes passos apenas na primeira vez que for usar um novo computador.

### Pré-requisitos:
- Você tem uma conta no GitHub.
- Você é um colaborador no repositório do projeto.

### Passo 1: Instalar as Ferramentas Essenciais

1.  **Instale o Visual Studio Code (VS Code):** Um editor de código moderno e gratuito. Ele tem um terminal integrado que usaremos para os comandos. Baixe em: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2.  **Instale o Git:** O sistema de controle de versão que rastreia as mudanças no código. Baixe em: [https://git-scm.com/downloads](https://git-scm.com/downloads)

### Passo 2: Configurar seu Nome e Email no Git

Abra o terminal no VS Code (`View` > `Terminal`) e execute os dois comandos abaixo, substituindo com suas informações. Isso é importante para que o GitHub saiba quem está fazendo as alterações.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Passo 3: Autenticar-se no GitHub (Método Recomendado: PAT)

Para que seu computador tenha permissão para enviar código para o repositório privado, você precisa de uma forma de autenticação. Usaremos um **Token de Acesso Pessoal (PAT)**, que funciona como uma senha específica para o Git.

1.  **Crie um PAT no GitHub:**
    *   Siga o guia oficial e detalhado do próprio GitHub para criar um token: [Criando um Token de Acesso Pessoal](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)
    *   **Permissões:** Ao criar o token, marque a caixa **`repo`**. Isso dará ao token permissão total para interagir com repositórios.
    *   **Copie o Token:** Ao final, o GitHub mostrará o token (ele começa com `ghp_...`). **Copie-o e guarde-o em um lugar seguro, como um gerenciador de senhas. Você nunca mais o verá novamente.**

2.  **Use o Token ao Clonar:** Quando você executar o comando `git clone` no próximo passo, o Git pedirá seu nome de usuário e senha. Use:
    *   **Nome de Usuário:** Seu nome de usuário do GitHub.
    *   **Senha:** O **Token de Acesso Pessoal (PAT)** que você acabou de copiar (NÃO a sua senha do GitHub).

### Passo 4: Baixar (Clonar) o Repositório

Finalmente, vamos baixar uma cópia do projeto para o seu computador.

1.  No seu terminal, navegue para a pasta onde você quer guardar seus projetos (ex: `cd Documents/Projects`).
2.  Execute o comando abaixo:

    ```bash
    git clone https://github.com/Rubens-Alves/automacao_web.git
    ```
3.  Abra a pasta do projeto no VS Code (`File` > `Open Folder...` e selecione a pasta `automacao_web`).

**Pronto! Seu computador está configurado.**

---

## Parte 2: O Fluxo de Trabalho para Fazer Modificações (O Ciclo do Dia a Dia)

Siga estes passos toda vez que você precisar alterar o código.

### Passo 1: Garantir que seu Código está Atualizado

Antes de começar a editar, sempre puxe as últimas alterações do GitHub. Isso evita conflitos se outra pessoa tiver modificado o código.

```bash
git pull
```

### Passo 2: Fazer as Modificações no Código

Use o VS Code para editar os arquivos (`CepLeads.py`, `Dockerfile`, `requirements.txt`, etc.) conforme necessário.

### Passo 3: Salvar um "Snapshot" das suas Alterações (Commit)

Depois de fazer e testar suas alterações, você precisa salvá-las no histórico do Git. Este é um processo de dois estágios.

1.  **Adicionar os arquivos modificados à "área de preparação":**

    ```bash
    git add .
    ```
    (O ponto `.` significa "todos os arquivos modificados nesta pasta e subpastas").

2.  **Fazer o "Commit":** Crie um snapshot permanente com uma mensagem descrevendo o que você fez.

    ```bash
    git commit -m "Exemplo: Adiciona busca por novo tipo de lead"
    ```
    **Dica:** Escreva uma mensagem de commit clara e concisa.

### Passo 4: Enviar suas Alterações para o GitHub

Agora, envie seus commits do seu computador para o repositório central no GitHub.

```bash
git push
```

Suas modificações agora estão salvas no GitHub e prontas para serem implantadas.

---

## Parte 3: Implantar a Nova Versão no EasyPanel

Este é o passo final, que pega o código atualizado do GitHub e o coloca em produção na VPS.

1.  **Acesse a interface do EasyPanel.**
2.  Navegue até o seu projeto (`automacoes`) e selecione o serviço (`cepleads`).
3.  Encontre e clique no botão **"Deploy"** ou **"Redeploy"**.
4.  **Acompanhe os Logs:** O EasyPanel mostrará os logs da implantação em tempo real. Observe o processo para garantir que não haja erros de build.
5.  **Sucesso:** Quando os logs mostrarem que o Gunicorn foi iniciado e os workers foram "bootados", a nova versão está no ar e pronta para receber requisições.
