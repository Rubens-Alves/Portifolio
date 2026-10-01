# Projeto de Automação de Coleta de Leads (CepLeads)

Este repositório contém o código-fonte para a automação de coleta de leads, desenvolvida para ser executada em um ambiente de servidor (VPS) e acessível via requisições HTTP. A automação interage com a plataforma `cepleads.com` para buscar e coletar dados com base em CEPs fornecidos.

---

## Estrutura do Repositório

Este projeto é composto pelos seguintes arquivos:

-   **`CepLeads.py`**
    *   **Descrição:** Este é o arquivo principal da aplicação. Ele implementa um servidor web Flask que recebe requisições HTTP (POST) contendo listas de CEPs. Internamente, ele utiliza Selenium para automatizar a navegação no site `cepleads.com`, coletar os leads e retornar os dados em formato JSON. É a versão do código preparada para rodar em produção via Docker.

-   **`AppCepLeads-standart.py`**
    *   **Descrição:** Esta é uma versão base do script de automação, projetada para ser executada localmente em um computador. Ela não possui a estrutura de servidor Flask e é útil para testes e desenvolvimento inicial da lógica de automação sem a necessidade de um ambiente de servidor.

-   **`Dockerfile`**
    *   **Descrição:** Este arquivo contém as instruções para construir a imagem Docker da aplicação. Ele define o ambiente necessário (Python, Google Chrome, ChromeDriver), instala as dependências e configura como a aplicação deve ser iniciada dentro de um contêiner. É essencial para a implantação em ambientes como o EasyPanel.

-   **`requirements.txt`**
    *   **Descrição:** Lista todas as bibliotecas Python das quais o projeto depende (ex: `Flask`, `selenium`, `gunicorn`, `webdriver-manager`). Este arquivo é usado pelo Dockerfile para instalar as dependências durante o processo de construção da imagem.

-   **`N8N_MANUAL.md`**
    *   **Descrição:** Um guia detalhado para configurar e usar o endpoint da API de coleta de leads dentro de um fluxo de trabalho do n8n. Ele explica como fazer a requisição HTTP, formatar o JSON de entrada e interpretar a resposta.

-   **`GUIA_MODIFICACAO_E_DEPLOY.md`**
    *   **Descrição:** Um manual completo para desenvolvedores, cobrindo o processo de modificação do código, gerenciamento de versões com Git e implantação de novas versões na VPS através do EasyPanel. Inclui instruções para configuração inicial do ambiente de desenvolvimento e o fluxo de trabalho diário.

---

## Como Funciona

A aplicação é empacotada em um contêiner Docker e implantada em uma VPS gerenciada pelo EasyPanel. O EasyPanel expõe um endpoint HTTP que pode ser acessado por serviços externos (como o n8n). Ao receber uma requisição, a aplicação executa a automação Selenium em um navegador headless, coleta os dados e os retorna como JSON.

---

## Contato

Para dúvidas ou suporte, entre em contato com Rubens Alves / alvesrubens310@gmail.com.
