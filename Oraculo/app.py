import streamlit as st
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI
from loaders import *
import tempfile
from langchain_core.prompts import ChatPromptTemplate
# from langchain.agents import create_agent
# from langgraph.checkpoint.memory import InMemorySaver


TIPOS_VALIDOS = [
    'Site', 'YouTube', 'PDFs', 'Csv', 'txt'
]

CONFIG_MODELOS = {
    'OpenAI': {'Modelos': ['gpt-5.6-luna', 'gpt-5.6-terra', 'gpt-5.6-sol'], 'chat': ChatOpenAI},
    'Groq': {'Modelos': ['llama-3.3-70b-versatile', 'openai/gpt-oss-20b', 'openai/gpt-oss-120b'], 'chat': ChatGroq}
}

if 'memoria' not in st.session_state:
    st.session_state['memoria'] = InMemoryChatMessageHistory()


def load_files(tipo_arquivo, arquivo):
    if tipo_arquivo == 'Site':
        documento = web_loader(arquivo)
        st.session_state['web_document'] = arquivo
    elif tipo_arquivo == 'YouTube':
        documento = youtube_loader(arquivo)
        st.session_state['yt_document'] = arquivo
    elif tipo_arquivo == 'PDFs': # método file_uploader do streamlit carrega um binário
        # Para que possamos carregar esses arquivos, precisamos primeiro salvar no disco para que ele tenha um path
        # a maneira de fazer isso aqui é criando uma pasta temporária de salvamento
        with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as temp:
            temp.write(arquivo.read()) # o write() faz esse salvamento. O read() lê o arquivo para conseguir salvar
            temp_name = temp.name # esse temp_name é na verdade o caminho que usaremos para fazer o load do arquivo.and
        documento = pdf_loader(temp_name)
    elif tipo_arquivo == 'Csv':
        with tempfile.NamedTemporaryFile(suffix='.csv', delete=False) as temp:
            temp.write(arquivo.read())
            temp_name = temp.name
        documento = csv_loader(temp_name)
    else: #elif tipo_arquivo == 'txt':
        with tempfile.NamedTemporaryFile(suffix='.txt', delete=False) as temp:
            temp.write(arquivo.read())
            temp_name = temp.name
        documento = txt_loader(temp_name)

    return documento


def load_model(provedor, modelo, api_key, tipo_arquivo, arquivo):

    documento = load_files(tipo_arquivo, arquivo)

    system_message = '''Você é um assistente amigável chamado Oráculo.
    Você possui acesso às seguintes informações vindas 
    de um documento {}: 

    ####
    {}
    ####

    Utilize as informações fornecidas para basear as suas respostas.

    Sempre que houver $ na sua saída, substita por S.

    Se a informação do documento for algo como "Just a moment...Enable JavaScript and cookies to continue" 
    sugira ao usuário carregar novamente o Oráculo!'''.format(tipo_arquivo, documento)
    
    template = ChatPromptTemplate.from_messages(
        [
            ('system', system_message),
            ('placeholder', '{chat_history}'),
            ('user', '{input}')
        ]
    )

    chat = CONFIG_MODELOS[provedor]['chat'](model=modelo, api_key=api_key)
    # agent = create_agent(
    #     model=chat,
    #     tools=[],
    #     system_prompt=system_message,
    #     checkpointer=checkpointer
    # )
    chain = template | chat
    st.session_state['chain'] = chain


def pagina_chat():
    st.header('Bem Vindo ao Oráculo ⚛️ヾ(≧▽≦)o', divider=True)

    # OLD: mensagens = st.session_state.get('mensagens', MENSAGENS_EXEMPLO) # '[]' como valor do get, mas nesse exemplo estamos usando 'MENSAGENS_EXEMPLO'
    # Session_state é a memória dentro de um app streamlit, ela funciona bem como um dicionário, então podemos usar
    # os mesmos métodos.

    chain = st.session_state.get('chain')
    if chain is None:
        st.error('Carregue o Oráculo')
        st.stop()
    
    memoria = st.session_state['memoria']

    for mensagem in memoria.messages:
        chat = st.chat_message(mensagem.type) # aqui é o primeiro elemento da tupla 'user'
        chat.markdown(mensagem.content) # aqui é o segundo elemento da tupla 'olá'

    chat_input = st.chat_input('Fale com o Oráculo')

    if chat_input: # se o usuário mandou mensagem
        #mensagens.append(('user', chat_input))
        chat = st.chat_message('human')
        chat.markdown(chat_input)

        chat = st.chat_message('ai')
        resposta = chat.write_stream(chain.stream({
            'input': chat_input,
            'chat_history': memoria.messages
        }))
        # resposta = chat_model.invoke(chat_input).content
        memoria.add_user_message(chat_input)
        memoria.add_ai_message(resposta)

        st.session_state['memoria'] = memoria
        # st.rerun()


def sidebar():
    tabs = st.tabs(['Upload de arquivos', 'Seleção de modelos'])
    with tabs[0]:
        # No selectbox passamos primeiro a label da janela de seleção e depois a lista com as opções
        tipo_arquivo = st.selectbox('Selecione o tipo de arquivo', TIPOS_VALIDOS)

        # Agora é preciso que criemos uma sessão específica para cada seleção, a final, cada uma precisa de um input diferente
        if tipo_arquivo == 'Site':
            arquivo = st.text_input('Digite a URL do site', value=st.session_state.get('web_document'))
        elif tipo_arquivo == 'YouTube':
            arquivo = st.text_input('Digite a URL do vídeo', value=st.session_state.get('yt_document'))
        elif tipo_arquivo == 'PDFs':
            arquivo = st.file_uploader('Faça o upload do arquivo PDF', type='.pdf')
        elif tipo_arquivo == 'Csv':
            arquivo = st.file_uploader('Faça o upload do arquivo Csv', type='.Csv')
        else: #tipo_arquivo == 'txt':
            arquivo = st.file_uploader('Faça o upload do arquivo Csv', type='.txt')
    with tabs[1]: # seleção de modelos
        provedor = st.selectbox('Selecione o provedor do modelo', CONFIG_MODELOS.keys())
        modelo = st.selectbox('Selecione o modelo', CONFIG_MODELOS[provedor]['Modelos'])
        api_key = st.text_input(f'Adicione a API Key do provedor {provedor}', value=st.session_state.get(f'api_key_{provedor}'))
        # value adiciona um valor padrão

        st.session_state[f'api_key_{provedor}'] = api_key

    if st.button('Inicializar Oráculo', use_container_width=True):
        # Lógica de solicitar inserção ou validação da API Key
        load_model(provedor, modelo, api_key, tipo_arquivo, arquivo)
    if st.button('Apagar Histórico de Conversa', use_container_width=True):
        # Lógica de solicitar inserção ou validação da API Key
        st.session_state['memoria'] = InMemoryChatMessageHistory()


def main():
    with st.sidebar:
        sidebar()
    pagina_chat()


if __name__ == '__main__':
    main()