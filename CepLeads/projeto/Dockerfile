# 1. Usar uma imagem base oficial do Python, slim para ser mais leve
FROM python:3.10-slim

# 2. Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# 3. Copiar o arquivo de dependências primeiro para aproveitar o cache do Docker
COPY requirements.txt .

# 4. Instalar dependências do sistema e do Python
# O -y confirma automaticamente, e --no-install-recommends economiza espaço
RUN apt-get update && apt-get install -y --no-install-recommends     wget     unzip     # Limpa o cache para manter a imagem pequena    && apt-get clean     && rm -rf /var/lib/apt/lists/*

# Instala as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir gunicorn webdriver-manager

# 5. Instalar o Google Chrome e o ChromeDriver
# Este bloco baixa e instala o Chrome e o driver correspondente
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&     dpkg -i google-chrome-stable_current_amd64.deb;     apt-get -fy install;     rm google-chrome-stable_current_amd64.deb

# 6. Copiar o resto do código da sua aplicação
COPY . .

# 7. O comando para iniciar a aplicação quando o contêiner rodar
# O EasyPanel fornecerá a variável de ambiente $PORT
# Timeout aumentado para 2 horas (7200 segundos)
CMD gunicorn --workers 2 --timeout 7200 --bind 0.0.0.0:$PORT CepLeads:app
