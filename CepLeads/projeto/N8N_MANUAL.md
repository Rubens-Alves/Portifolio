# Como Usar a API de Coleta de Leads no n8n

Este guia explica como configurar um nó no n8n para chamar a API de automação e receber os dados dos leads coletados.

---

### Passo a Passo

1.  **Adicione o Nó "HTTP Request"**
    *   No seu fluxo de trabalho (workflow) do n8n, adicione um novo nó do tipo `HTTP Request`.

2.  **Configure as Propriedades do Nó**
    Preencha os campos da seguinte forma:

    *   **Authentication:** `None`
    *   **Request Method:** `POST`
    *   **URL:** Cole a seguinte URL:
        ```
        https://automacoes-cepleads.kzttar.easypanel.host/api/get_leads
        ```
    *   **Send Body:** Marque esta opção como **ligada**.
    *   **Body Content Type:** `JSON`
    *   **Body:** Clique em "Add Expression" e insira o JSON com os dados para a busca. O JSON deve conter uma chave `"ceps"` com uma lista de CEPs.

        **Exemplo de JSON:**
        ```json
        {
          "ceps": [
            "01310-000",
            "04538-132",
            "22041-001"
          ],
          "quantidade_leads": 50
        }
        ```
        *   `ceps`: (Obrigatório) Lista de CEPs que a automação deve pesquisar.
        *   `quantidade_leads`: (Opcional) Número máximo de leads que você deseja comprar. Se não for fornecido, o padrão será 10.

3.  **Execute o Nó**
    *   Clique em "Execute Node". A execução pode demorar vários minutos, dependendo da quantidade de CEPs. **Seja paciente e não cancele o fluxo.**

### O que Esperar como Resposta

Se a execução for bem-sucedida, o nó `HTTP Request` retornará um JSON com os dados dos leads coletados. A saída estará dentro do campo `data` e se parecerá com isto:

```json
{
  "leads": [
    {
      "Nome": "JOAO DA SILVA",
      "Telefone": [
        "(11) 99999-8888"
      ],
      "Idade": "45",
      // ... outros campos
    },
    {
      "Nome": "MARIA SOUZA",
      "Telefone": [
        "(21) 98888-7777"
      ],
      "Idade": "38",
      // ... outros campos
    }
  ]
}
```

Agora você pode usar os nós seguintes no seu fluxo para processar essa lista de leads.
