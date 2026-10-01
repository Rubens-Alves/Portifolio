from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
from time import sleep


def login(email, senha, espera):
    driver = webdriver.Chrome()
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
    
    return driver


def main(driver, espera, leads):
    with open('ceps.json', 'r', encoding='utf-8') as f:
        dados = json.load(f)

    lista_ceps = dados["ceps"]
    ceps_string = ','.join(lista_ceps)

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
    
    # Filtros de pesquisa
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

    creditos_disponives_text = driver.find_element(By.XPATH, "//span[@id='userBalance']").text
    custo_lead_text = driver.find_element(By.XPATH, "//span[@id='leadCost']").text
    creditos_disponiveis = float(creditos_disponives_text.replace(",", "."))
    custo_lead = float(custo_lead_text.replace(",", "."))
    
    if leads * custo_lead > creditos_disponiveis:
        print(f"Créditos insuficientes para comprar {leads} leads.\n Créditos disponíveis: {creditos_disponiveis}\n Custo para comprar {leads} leads: {leads * custo_lead}")
        driver.quit()
        return

    buscar_button = driver.find_element(By.XPATH, "//button[@id='searchButton']")
    driver.execute_script("arguments[0].scrollIntoView(true);", buscar_button)
    sleep(1)
    buscar_button.click()

    tempo_espera = len(lista_ceps) * 60
    WebDriverWait(driver, tempo_espera).until(
        EC.presence_of_element_located((By.XPATH, "//div[@id='progressInfo']/strong[contains(text(), 'Busca concluída:')]"))
    )
    sleep(1.5)

    leads_encontrados = int(driver.find_element(By.XPATH, "//span[@id='leadsFound']").text)

    if leads_encontrados < leads:
        leads = leads_encontrados
        
    #definir quantidade de compra
    quantidade_leads = driver.find_element(By.XPATH, "//input[@id='quantityInput']")
    quantidade_leads.clear()
    quantidade_leads.send_keys(str(leads))

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

    json_output = json.dumps(lista_leads, indent=4, ensure_ascii=False)
    with open('leads.json', 'w', encoding='utf-8') as f:
        f.write(json_output)
    
    driver.quit()


if __name__ == "__main__":
    email = "leofborghi2008@gmail.com"
    senha = "20032020#Leg"
    espera = 40
    leads = 10
    driver = login(email, senha, espera)
    main(driver, espera, leads)
