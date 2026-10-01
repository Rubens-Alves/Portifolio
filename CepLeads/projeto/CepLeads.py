from flask import Flask, request, jsonify
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import json
from time import sleep

app = Flask(__name__)

def configurar_driver():
    """Configura e retorna uma instância do WebDriver do Chrome em modo headless."""
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    driver = webdriver.Chrome(options=chrome_options)
    return driver

def login(driver, email, senha, espera):
    """Realiza o login no site cepleads.com."""
    driver.get('https://cepleads.com')
    email_input = WebDriverWait(driver, espera).until(
        EC.element_to_be_clickable((By.XPATH, "//input[@id='email']"))
    )
    sleep(1)
    email_input.send_keys(email)
    senha_input = driver.find_element(By.XPATH, "//input[@id='password']")
    senha_input.send_keys(senha)
    login_button = driver.find_element(By.XPATH, "//button[@type='submit']")
    login_button.click()
    sleep(1)

def coletar_leads(driver, espera, ceps, quantidade_leads):
    """Navega no site, busca e coleta os leads com base nos CEPs fornecidos."""
    ceps_string = ','.join(ceps)

    buscar_leads_button = WebDriverWait(driver, espera).until(
        EC.element_to_be_clickable((By.XPATH, "//a[@class='btn btn-success mt-2']"))
    )
    buscar_leads_button.click()
    sleep(1)

    cep_input = WebDriverWait(driver, espera).until(
        EC.visibility_of_element_located((By.XPATH, "//input[@id='cepInput']"))
    )
    cep_input.clear()
    cep_input.send_keys(ceps_string)

    remover_duplicados_button = WebDriverWait(driver, espera).until(
        EC.element_to_be_clickable((By.XPATH, "//button[@id='btnDedup']"))
    )
    remover_duplicados_button.click()
    sleep(1)

    # Filtros de pesquisa (podem ser parametrizados no futuro, se necessário)
    idade_minima = driver.find_element(By.XPATH, "//input[@id='dataNascimentoMin']")
    idade_minima.clear()
    idade_minima.send_keys("01/01/1975")
    idade_maxima = driver.find_element(By.XPATH, "//input[@id='dataNascimentoMax']")
    idade_maxima.clear()
    idade_maxima.send_keys("31/12/1995")
    renda_minima = driver.find_element(By.XPATH, "//input[@id='rendaMin']")
    renda_minima.clear()
    renda_minima.send_keys("8")
    renda_maxima = driver.find_element(By.XPATH, "//input[@id='rendaMax']")
    renda_maxima.clear()
    renda_maxima.send_keys("50")
    sleep(1)

    creditos_disponiveis_text = driver.find_element(By.XPATH, "//span[@id='userBalance']").text
    custo_lead_text = driver.find_element(By.XPATH, "//span[@id='leadCost']").text
    creditos_disponiveis = float(creditos_disponiveis_text.replace(",", "."))
    custo_lead = float(custo_lead_text.replace(",", "."))

    if quantidade_leads * custo_lead > creditos_disponiveis:
        raise ValueError(f"Créditos insuficientes para comprar {quantidade_leads} leads.")

    buscar_button = driver.find_element(By.XPATH, "//button[@id='searchButton']")
    driver.execute_script("arguments[0].scrollIntoView(true);", buscar_button)
    sleep(1)
    buscar_button.click()

    tempo_espera = len(ceps) * 60
    WebDriverWait(driver, tempo_espera).until(
        EC.presence_of_element_located((By.XPATH, "//div[@id='progressInfo']/strong[contains(text(), 'Busca concluída:')]"))
    )
    sleep(1.5)

    leads_found_text = driver.find_element(By.XPATH, "//span[@id='leadsFound']").text
    leads_encontrados = int(leads_found_text) if leads_found_text.isdigit() else 0

    if leads_encontrados == 0:
        # Se nenhum lead for encontrado, não há o que comprar.
        # Retorna uma lista vazia para o n8n, indicando que a operação foi bem sucedida, mas sem resultados.
        return []

    if leads_encontrados < quantidade_leads:
        quantidade_leads = leads_encontrados

    quantidade_leads_input = driver.find_element(By.XPATH, "//input[@id='quantityInput']")
    quantidade_leads_input.clear()
    quantidade_leads_input.send_keys(str(quantidade_leads))

    comprar_button = WebDriverWait(driver, espera).until(
        EC.element_to_be_clickable((By.XPATH, "//button[@id='purchaseButton']"))
    )
    driver.execute_script("arguments[0].scrollIntoView(true);", comprar_button)
    sleep(1)
    comprar_button.click()
    sleep(3)

    tabela = WebDriverWait(driver, espera).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='table-responsive']/table"))
    )
    sleep(1)
    cabecalhos_elements = tabela.find_elements(By.TAG_NAME, "th")
    cabecalhos = [cabecalho.text for cabecalho in cabecalhos_elements]

    lista_leads = []
    linhas = tabela.find_elements(By.XPATH, ".//tbody/tr")
    for linha in linhas:
        celulas = linha.find_elements(By.TAG_NAME, "td")
        lead_data = {}
        for i, celula in enumerate(celulas):
            chave = cabecalhos[i]
            valor = celula.text
            if chave == "Telefone":
                valor = [tel.strip() for tel in valor.split(",")]
            elif valor == "N/A":
                valor = None
            lead_data[chave] = valor
        lista_leads.append(lead_data)

    return lista_leads

@app.route('/api/get_leads', methods=['POST'])
def get_leads_endpoint():
    """Endpoint para receber CEPs, coletar leads e retorná-los como JSON."""
    dados = request.get_json()
    if not dados or 'ceps' not in dados:
        return jsonify({"erro": "JSON inválido. A chave 'ceps' é obrigatória."}), 400

    ceps = dados['ceps']
    # Use a quantidade de leads do JSON ou um valor padrão (ex: 10)
    quantidade_leads = dados.get('quantidade_leads', 10)
    
    # Suas credenciais (idealmente, viriam de variáveis de ambiente)
    email = "leofborghi2008@gmail.com"
    senha = "20032020#Leg"
    espera = 40

    driver = None
    try:
        driver = configurar_driver()
        login(driver, email, senha, espera)
        leads_coletados = coletar_leads(driver, espera, ceps, quantidade_leads)
        return jsonify({"leads": leads_coletados})
    except Exception as e:
        # Log do erro seria ideal aqui
        return jsonify({"erro": str(e)}), 500
    finally:
        if driver:
            driver.quit()

if __name__ == "__main__":
    # O host '0.0.0.0' torna o servidor acessível na rede da sua VPS
    app.run(host='0.0.0.0', port=5000)