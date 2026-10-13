/**
 * ========================================================
 * DESIGN SYSTEM: CREATIVE PULSE
 * Engine: i18n Bilíngue, Vitrine de Projetos (Negócio vs Técnico),
 * Galeria Modal / Lightbox e Ação Direta de WhatsApp
 * ========================================================
 */

// --- 1. DICIONÁRIO DE TRADUÇÃO (PT / EN) ---
const translations = {
  pt: {
    // Topo & Identidade
    badge_available: "Disponível para Projetos & Automações",
    nav_about: "Quem Sou Eu",
    nav_solutions: "Soluções",
    nav_projects: "Projetos",
    nav_process: "Como Trabalho",
    nav_contact: "Contato",
    btn_whatsapp_nav: "Falar no WhatsApp",
    
    // Hero Pessoal
    hero_eyebrow: "AGENTS <span class=\"accent-paren\">//</span> AUTOMAÇÃO <span class=\"accent-paren\">//</span> BUSINESS ROI",
    hero_greeting: "Olá, sou o Rubens Alves Ramos Cardoso",
    hero_headline: "Agentes de IA, bots e automações inteligentes que colocam sua empresa para <span class=\"title-accent\">rodar 24/7</span>.",
    hero_subhead: "Desenvolvo soluções sob medida que eliminam tarefas manuais repetitivas, aceleram o atendimento da sua equipe e geram oportunidades reais de vendas. Foco total em retorno sobre investimento, economia de tempo e processos blindados.",
    hero_btn_whatsapp: "Conversar no WhatsApp",
    hero_btn_projects: "Ver Projetos na Prática",
    hero_pill_1: "Atendimento 24h sem pausas",
    hero_pill_2: "Leads qualificados para seu time",
    hero_pill_3: "Horas de trabalho economizadas",

    // Card Pessoal Lateral
    hero_card_role: "Desenvolvedor Python & Agentes de IA",
    hero_card_loc: "Petrolina / PE • Atendimento para todo o Brasil",
    hero_card_quote: "“Não programo por vaidade técnica. Cada automação ou agente que construo tem um único objetivo: poupar o tempo da sua equipe, reduzir custos operacionais e fazer seu negócio faturar mais.”",
    hero_card_adm: "Formação em Administração <span class=\"accent-paren\">(</span>Univasf<span class=\"accent-paren\">)</span> + Especializações em IA",

    // Seção Soluções (What I Can Help You With)
    sec_sol_tag: "[ O QUE POSSO FAZER POR VOCÊ ]",
    sec_sol_title: "Soluções práticas sob medida para a <span class=\"title-accent\">dor da sua empresa</span>",
    sec_sol_desc: "Deixe as tarefas repetitivas e braçais para os robôs e mantenha sua equipe focada em fechar negócios e atender clientes com excelência.",

    sol_1_tag: "#01 AGENTES CONVERSACIONAIS",
    sol_1_title: "Agentes de IA & Atendimento 24h",
    sol_1_desc: "Atendentes inteligentes integrados ao WhatsApp ou Web que entendem mensagens naturais, tiram dúvidas frequentes, agendam horários na sua agenda e realizam triagem humanizada sem deixar ninguém no vácuo.",
    sol_1_benefit: "Zero fila de espera e atendimento ativo fora do horário comercial.",

    sol_2_tag: "#02 MINERAÇÃO DE DADOS",
    sol_2_title: "Mineração de Leads & Prospecção B2B",
    sol_2_desc: "Robôs automatizados que varrem o Google Maps, bairros e regiões por CEP para extrair empresas ativas, telefones de WhatsApp, e-mails e sócios, entregando planilhas prontas para seu time de vendas prospectar.",
    sol_2_benefit: "Centenas de contatos qualificados e frescos toda semana.",

    sol_3_tag: "#03 FLUXOS OPERACIONAIS",
    sol_3_title: "Automação de Processos & Integrações",
    sol_3_desc: "Conexão inteligente entre seus sistemas (n8n, Planilhas, Google Calendar, CRMs, WhatsApp, Gateways de Pagamento). Adeus digitação manual de relatórios ou perda de informações entre abas.",
    sol_3_benefit: "Redução drástica de erros humanos e retrabalho da equipe.",

    // Seção Quem Sou Eu
    sec_about_tag: "QUEM SOU EU <span class=\"accent-paren\">//</span> BACKGROUND",
    sec_about_title: "A ponte entre a <span class=\"title-accent\">inteligência de negócios</span> e a <span class=\"title-accent\">engenharia de software</span>",
    sec_about_p1: "Meu nome é <strong>Rubens Alves Ramos Cardoso</strong>. Atualmente curso o 8º período de <strong>Administração na Universidade Federal do Vale do São Francisco <span class=\"accent-paren\">(</span>Univasf<span class=\"accent-paren\">)</span></strong>, aliando essa base estratégica com formações técnicas aprofundadas em Python e Inteligência Artificial na <strong>USP</strong>, <strong>ASIMOV</strong>, <strong>Rocketseat</strong> e <strong>DevAprender</strong>.",
    sec_about_p2: "Essa combinação é o meu maior diferencial: enquanto muitos desenvolvedores focam apenas em linhas de código, <strong>eu começo pelo problema do seu negócio</strong>. Compreendo fluxo de caixa, custos operacionais, experiência do cliente e funil de vendas. Por isso, as automações que crio são desenhadas para gerar retorno real.",
    
    edu_adm_title: "Bacharelado em Administração <span class=\"accent-paren\">(</span>8º período<span class=\"accent-paren\">)</span>",
    edu_adm_sub: "Univasf • Visão estratégica, gestão financeira e processos de negócio",
    edu_tech_title: "Formações & Certificações em IA e Python",
    edu_tech_sub: "USP <span class=\"accent-paren\">(</span>Computação &amp; POO<span class=\"accent-paren\">)</span> • ASIMOV <span class=\"accent-paren\">(</span>Agentes com LangChain<span class=\"accent-paren\">)</span> • Rocketseat <span class=\"accent-paren\">(</span>n8n na prática<span class=\"accent-paren\">)</span> • DevAprender <span class=\"accent-paren\">(</span>Mestre Pythonista<span class=\"accent-paren\">)</span>",

    // Seção Vitrine de Projetos
    sec_proj_tag: "RECENT WORK <span class=\"accent-paren\">//</span> CASES REAIS",
    sec_proj_title: "Projetos desenvolvidos e <span class=\"title-accent\">prontos para operar</span>",
    sec_proj_desc: "Veja abaixo exemplos práticos de soluções que desenvolvi. Clique nas imagens para ampliar os fluxos ou alterne entre a visão de negócio e a visão técnica.",
    
    tab_business: "💼 O que resolve <span class=\"accent-paren font-bold\">(</span>Negócio<span class=\"accent-paren font-bold\">)</span>",
    tab_tech: "⚙️ Como funciona <span class=\"accent-paren font-bold\">(</span>Técnico<span class=\"accent-paren font-bold\">)</span>",
    btn_view_gallery: "Ver Detalhes & Galeria",
    sec_comp_title: "Outros Projetos & <span class=\"title-accent\">Utilitários de Engenharia</span>",

    // Seção Processo / Como Trabalho
    sec_proc_tag: "PROCESSO DE TRABALHO <span class=\"accent-paren\">//</span> STEP-BY-STEP",
    sec_proc_title: "Como funciona <span class=\"title-accent\">trabalhar comigo</span>",
    sec_proc_desc: "Um método direto e sem enrolação para tirar a ideia do papel com segurança e rapidez.",
    step1_num: "#01",
    step1_title: "Diagnóstico da Dor",
    step1_desc: "Conversamos para entender onde sua operação está perdendo tempo, dinheiro ou vendas.",
    step2_num: "#02",
    step2_title: "Desenho da Solução",
    step2_desc: "Mapeio visualmente o fluxo da automação para você validar exatamente o que o robô fará antes de programarmos.",
    step3_num: "#03",
    step3_title: "Engenharia & Testes",
    step3_desc: "Desenvolvo os robôs, conecto as APIs e testo todos os cenários para garantir estabilidade e precisão.",
    step4_num: "#04",
    step4_title: "Entrega & Suporte",
    step4_desc: "Colocamos o sistema para rodar na sua empresa com suporte e acompanhamento de perto.",

    // Seção Contato
    sec_contact_tag: "START A CONVERSATION",
    sec_contact_title: "Tem uma ideia ou um gargalo no seu negócio? <span class=\"title-accent\">Vamos conversar.</span>",
    sec_contact_desc: "Me mande uma mensagem no WhatsApp ou no e-mail. Vamos analisar juntos se uma automação ou agente de IA pode transformar sua operação.",
    contact_btn_whatsapp_big: "Abrir Conversa no WhatsApp",
    contact_email_title: "E-mail Direto",
    contact_phone_title: "WhatsApp Comercial",
    contact_phone_val: "<span class=\"accent-paren font-bold\">(</span>74<span class=\"accent-paren font-bold\">)</span> 9 9995-4477",
    contact_email_val: "alvesrubens310@gmail.com",
    contact_copy_btn: "Copiar",
    copied_alert: "Copiado com sucesso!",

    // Modal
    modal_close: "Fechar",
    modal_title_gallery: "Galeria & Arquitetura Visual do Projeto"
  },

  en: {
    // Top & Identity
    badge_available: "Available for Projects & Automation",
    nav_about: "About Me",
    nav_solutions: "Solutions",
    nav_projects: "Projects",
    nav_process: "How I Work",
    nav_contact: "Contact",
    btn_whatsapp_nav: "Chat on WhatsApp",
    
    // Personal Hero
    hero_eyebrow: "AGENTS <span class=\"accent-paren\">//</span> AUTOMATION <span class=\"accent-paren\">//</span> BUSINESS ROI",
    hero_greeting: "Hello, I'm Rubens Alves Ramos Cardoso",
    hero_headline: "AI agents, bots, and smart automations that run your business <span class=\"title-accent\">24/7</span>.",
    hero_subhead: "I engineer custom solutions that eliminate repetitive grunt work, accelerate customer response times, and unlock real sales opportunities. Focused on tangible ROI, time savings, and bulletproof workflows.",
    hero_btn_whatsapp: "Chat on WhatsApp",
    hero_btn_projects: "Explore Real Projects",
    hero_pill_1: "24/7 uninterrupted operation",
    hero_pill_2: "Qualified leads for your sales team",
    hero_pill_3: "Countless work hours saved",

    // Personal Hero Card
    hero_card_role: "Python Developer & AI Agents Specialist",
    hero_card_loc: "Petrolina / PE • Serving clients worldwide",
    hero_card_quote: "“I don't code for technical vanity. Every automation or agent I engineer serves one clear purpose: saving your team's time, slashing operational costs, and boosting real revenue.”",
    hero_card_adm: "B.S. in Business Administration <span class=\"accent-paren\">(</span>Univasf<span class=\"accent-paren\">)</span> + AI Certifications",

    // Solutions Section (What I Can Help You With)
    sec_sol_tag: "[ WHAT I CAN HELP YOU WITH ]",
    sec_sol_title: "Practical solutions tailored to your <span class=\"title-accent\">operational bottlenecks</span>",
    sec_sol_desc: "Offload manual, repetitive tasks to intelligent software and empower your team to focus on closing deals and delighting customers.",

    sol_1_tag: "#01 CONVERSATIONAL AGENTS",
    sol_1_title: "AI Agents & 24/7 Reception",
    sol_1_desc: "Smart assistants integrated into WhatsApp or Web that understand natural language, answer inquiries, book appointments directly onto your calendar, and pre-qualify clients without wait times.",
    sol_1_benefit: "Zero waiting queue and full coverage during off-hours.",

    sol_2_tag: "#02 DATA MINING",
    sol_2_title: "Lead Mining & B2B Prospecting",
    sol_2_desc: "Automated crawlers sweeping Google Maps and geo-postal corridors to harvest active companies, WhatsApp numbers, emails, and decision-makers, outputting clean spreadsheets ready for outreach.",
    sol_2_benefit: "Hundreds of fresh, qualified contacts delivered weekly.",

    sol_3_tag: "#03 WORKFLOW ENGINES",
    sol_3_title: "Process Automation & Integrations",
    sol_3_desc: "Seamless connectivity across your tools (n8n, Google Sheets, Google Calendar, CRMs, WhatsApp, Payment Gateways). No more manual data re-entry or dropped leads.",
    sol_3_benefit: "Drastic reduction in human mistakes and operational friction.",

    // About Section
    sec_about_tag: "ABOUT ME <span class=\"accent-paren\">//</span> BACKGROUND",
    sec_about_title: "Bridging the gap between <span class=\"title-accent\">business strategy</span> and <span class=\"title-accent\">software engineering</span>",
    sec_about_p1: "My name is <strong>Rubens Alves Ramos Cardoso</strong>. I am currently in the 8th semester of <strong>Business Administration at Univasf <span class=\"accent-paren\">(</span>Federal University of the São Francisco Valley<span class=\"accent-paren\">)</span></strong>, paired with specialized technical training in Python and Artificial Intelligence at <strong>USP</strong>, <strong>ASIMOV</strong>, <strong>Rocketseat</strong>, and <strong>DevAprender</strong>.",
    sec_about_p2: "This combination is my strongest asset: while most developers focus purely on code syntax, <strong>I start with your business problem</strong>. I understand cash flow, operational overhead, customer journey, and sales funnels. The automations I build are designed to deliver a measurable financial return.",
    
    edu_adm_title: "B.S. in Business Administration <span class=\"accent-paren\">(</span>8th Semester<span class=\"accent-paren\">)</span>",
    edu_adm_sub: "Univasf • Strategic vision, financial analysis, and business process modeling",
    edu_tech_title: "Specializations in AI & Python Engineering",
    edu_tech_sub: "USP <span class=\"accent-paren\">(</span>CS &amp; OOP<span class=\"accent-paren\">)</span> • ASIMOV <span class=\"accent-paren\">(</span>LangChain Agents<span class=\"accent-paren\">)</span> • Rocketseat <span class=\"accent-paren\">(</span>Hands-on n8n<span class=\"accent-paren\">)</span> • DevAprender <span class=\"accent-paren\">(</span>Master Pythonista<span class=\"accent-paren\">)</span>",

    // Projects Showcase
    sec_proj_tag: "RECENT WORK <span class=\"accent-paren\">//</span> REAL CASES",
    sec_proj_title: "Live systems engineered and <span class=\"title-accent\">ready to deploy</span>",
    sec_proj_desc: "Explore practical solutions built to solve real-world problems. Click any image to view details and toggle between business impact and technical architecture.",
    
    tab_business: "💼 What it Solves <span class=\"accent-paren font-bold\">(</span>Business<span class=\"accent-paren font-bold\">)</span>",
    tab_tech: "⚙️ How it Works <span class=\"accent-paren font-bold\">(</span>Technical<span class=\"accent-paren font-bold\">)</span>",
    btn_view_gallery: "View Details & Gallery",
    sec_comp_title: "Other Engineering Projects & <span class=\"title-accent\">Utilities</span>",

    // Process Section
    sec_proc_tag: "WORKFLOW <span class=\"accent-paren\">//</span> STEP-BY-STEP",
    sec_proc_title: "How we work together <span class=\"title-accent\">step by step</span>",
    sec_proc_desc: "A straightforward, no-nonsense workflow to turn your requirements into reality smoothly.",
    step1_num: "#01",
    step1_title: "Discovery & Diagnostic",
    step1_desc: "We discuss your current workflow to identify exactly where your team loses time, money, or sales.",
    step2_num: "#02",
    step2_title: "Solution Blueprint",
    step2_desc: "I map out the complete automation flowchart so you can validate exactly what the system does before any code is written.",
    step3_num: "#03",
    step3_title: "Engineering & Testing",
    step3_desc: "I build the agents, link all APIs, and stress-test every edge case to ensure reliability and speed.",
    step4_num: "#04",
    step4_title: "Delivery & Support",
    step4_desc: "We roll out the system into your live operations with hands-on walkthroughs and dedicated support.",

    // Contact Section
    sec_contact_tag: "START A CONVERSATION",
    sec_contact_title: "Have an operational bottleneck or a new idea? <span class=\"title-accent\">Let's talk.</span>",
    sec_contact_desc: "Drop me a message on WhatsApp or shoot an email. Let's analyze how a custom automation or AI agent can transform your business.",
    contact_btn_whatsapp_big: "Start WhatsApp Chat Now",
    contact_email_title: "Direct Email",
    contact_phone_title: "Business WhatsApp",
    contact_phone_val: "+55 <span class=\"accent-paren font-bold\">(</span>74<span class=\"accent-paren font-bold\">)</span> 99995-4477",
    contact_email_val: "alvesrubens310@gmail.com",
    contact_copy_btn: "Copy",
    copied_alert: "Copied to clipboard!",

    // Modal
    modal_close: "Close",
    modal_title_gallery: "Project Gallery & Visual Architecture"
  }
};

// --- 2. DADOS DETALHADOS DOS 4 PROJETOS PRINCIPAIS ---
const featuredProjects = [
  {
    id: "clinicas",
    indexNum: "#01",
    categoryEyebrow: { pt: "Agente de IA • WhatsApp & Agenda", en: "AI Agent • WhatsApp & Booking" },
    title: {
      pt: "Agente de Atendimento Inteligente para Clínicas",
      en: "Intelligent Clinical Reception & Scheduling AI Agent"
    },
    highlight: {
      pt: "Atendimento humanizado 24h, agendamento direto no Google Calendar e redução de até 65% nas faltas de pacientes.",
      en: "24/7 humanized patient care, direct Google Calendar booking, and over 65% drop in appointment no-shows."
    },
    mainImage: "assets/projects/clinicas-capa.png",
    gallery: [
      { src: "assets/projects/clinicas-capa.png", caption: { pt: "Visão Geral do Agente", en: "Agent Overview" } },
      { src: "assets/projects/clinicas-diagrama.png", caption: { pt: "Diagrama do Fluxo de Atendimento e Triagem", en: "Reception & Triage Flow Diagram" } },
      { src: "assets/projects/clinicas-secretaria.png", caption: { pt: "Fluxo de Confirmações & Lembretes", en: "Automated Reminders & Scheduling" } }
    ],
    business: {
      problem: {
        pt: "Clínicas médicas e consultórios perdem consultas e pacientes porque a equipe humana não consegue responder WhatsApp instantaneamente fora do horário comercial, além do prejuízo financeiro causado por pacientes que esquecem de comparecer.",
        en: "Clinics lose patients due to delayed WhatsApp responses after business hours and suffer financial losses from high patient no-show rates."
      },
      solution: {
        pt: "Um atendente virtual inteligente que responde em segundos, tira dúvidas de horários e convênios, agenda consultas automaticamente na agenda do médico e envia lembretes preventivos 24h antes para confirmação.",
        en: "An intelligent virtual receptionist that answers in seconds, checks doctor availability, books events, and dispatches proactive confirmation reminders 24 hours prior."
      },
      results: [
        { pt: "Atendimento ativo 24 horas por dia, 7 dias por semana", en: "24/7 active patient care" },
        { pt: "Zero conflitos de horários no Google Calendar", en: "Zero double-booking calendar conflicts" },
        { pt: "Queda drástica em pacientes que faltam sem avisar", en: "Drastic drop in unnotified appointment no-shows" }
      ]
    },
    technical: {
      stack: ["n8n Workflows", "WhatsApp Business API", "Google Calendar API", "OpenAI / Groq", "Asaas Pagamentos", "Python Webhooks"],
      architecture: {
        pt: "Orquestrado em n8n com nós modulares de triagem, parsing de intenção via LLM com prompt defensivo contra alucinação de datas, checagem de slots livres via Google Calendar API e confirmação de pagamento prévia via Asaas.",
        en: "Orchestrated using modular n8n workflows with LLM intent parsing, date hallucination safeguards, live slot queries via Google Calendar API, and payment confirmation hooks."
      }
    }
  },

  {
    id: "dealership",
    indexNum: "#02",
    categoryEyebrow: { pt: "Bot de Vendas • Catálogo & Financiamento", en: "Sales Bot • Catalog & Financing" },
    title: {
      pt: "Dealership ST Bot: Esteira de Vendas para Concessionárias",
      en: "Dealership ST Bot: Automotive Sales & Qualification Bot"
    },
    highlight: {
      pt: "Apresenta estoque de veículos com fotos e fichas técnicas, simula financiamentos e encaminha leads já qualificados aos vendedores.",
      en: "Showcases vehicle inventory with specs and photos, calculates installment simulations, and routes qualified leads to sales reps."
    },
    mainImage: "assets/projects/dealership-capa.png",
    gallery: [
      { src: "assets/projects/dealership-capa.png", caption: { pt: "Capa do Sistema Dealership ST Bot", en: "Dealership ST Bot Cover" } },
      { src: "assets/projects/dealership-screen1.png", caption: { pt: "Catálogo Dinâmico e Apresentação de Veículos", en: "Dynamic Inventory Catalog" } },
      { src: "assets/projects/dealership-relatorio.png", caption: { pt: "Relatório de Qualificação de Compradores", en: "Lead Qualification Report" } }
    ],
    business: {
      problem: {
        pt: "Compradores de veículos pesquisam à noite e nos fins de semana. Quando a concessionária demora para responder sobre preços, fotos ou parcelas, o cliente fecha negócio com o concorrente.",
        en: "Car shoppers browse inventory during evenings and weekends. If a dealership takes hours to answer questions about pricing and financing, buyers switch to competitors."
      },
      solution: {
        pt: "Um bot interativo que apresenta o estoque filtrado por marca e faixa de preço, calcula estimativas de entrada e parcelamento na hora e entrega o cliente 'quente' com telefone e dados na mão do vendedor.",
        en: "An interactive sales bot that filters vehicle inventory by budget, calculates financing simulations on demand, and hands hot, pre-qualified leads directly to salespeople."
      },
      results: [
        { pt: "Primeiro contato instantâneo em menos de 10 segundos", en: "Instant initial contact under 10 seconds" },
        { pt: "Clientes já chegam ao vendedor sabendo o valor e a entrada", en: "Prospects arrive to sales reps already informed on pricing and down payment" },
        { pt: "Aumento de até 40% na conversão de visitantes em visitas físicas", en: "Up to 40% lift in showroom visit conversions" }
      ]
    },
    technical: {
      stack: ["Python", "Telegram / WhatsApp Engine", "Máquina de Estados <span class=\"accent-paren\">(</span>FSM<span class=\"accent-paren\">)</span>", "Catálogo Dinâmico JSON", "Webhooks CRM"],
      architecture: {
        pt: "Arquitetura orientada a objetos <span class=\"accent-paren\">(</span>POO<span class=\"accent-paren\">)</span> com máquina de estados finita para navegação suave de menus, desacoplamento do motor de cálculo financeiro e despachador de notificações para vendedores.",
        en: "Object-oriented architecture <span class=\"accent-paren\">(</span>OOP<span class=\"accent-paren\">)</span> with a finite state machine for seamless menu navigation, decoupled installment simulation math, and instant sales dispatch webhooks."
      }
    }
  },

  {
    id: "mapsleads",
    indexNum: "#03",
    categoryEyebrow: { pt: "Web Scraping • Mineração B2B Google Maps", en: "Web Scraping • Google Maps B2B Mining" },
    title: {
      pt: "MapsLeads: Mineração & Prospecção B2B no Google Maps",
      en: "MapsLeads: Google Maps B2B Lead Mining Engine"
    },
    highlight: {
      pt: "Varre nichos inteiros de empresas locais extraindo contatos, telefones de WhatsApp, sites e avaliações em planilhas prontas para vendas.",
      en: "Extracts entire local business niches harvesting WhatsApp contacts, websites, ratings, and social links directly into sales-ready spreadsheets."
    },
    mainImage: "assets/projects/mapsleads-capa.png",
    gallery: [
      { src: "assets/projects/mapsleads-capa.png", caption: { pt: "Capa do MapsLeads", en: "MapsLeads Cover" } },
      { src: "assets/projects/mapsleads-fluxo.png", caption: { pt: "Fluxo de Extração e Bypass de Bloqueios", en: "Extraction & Anti-Ban Flow" } },
      { src: "assets/projects/mapsleads-sheets.png", caption: { pt: "Planilha Estruturada Pronta para Vendas", en: "Formatted Spreadsheet Output" } }
    ],
    business: {
      problem: {
        pt: "Empresas que vendem para outras empresas <span class=\"accent-paren\">(</span>B2B<span class=\"accent-paren\">)</span> passam dias pesquisando clientes potenciais no Google Maps um por um para montar listas de contato, perdendo tempo valioso de prospecção.",
        en: "B2B sales teams spend whole workdays manually searching Google Maps to compile lead lists, burning valuable prospecting time on repetitive copying and pasting."
      },
      solution: {
        pt: "Um robô inteligente que faz a busca por segmento e cidade, extrai todos os dados comerciais relevantes, remove duplicados e formata uma planilha limpa e pronta para uso imediato.",
        en: "An automated web crawler that searches target niches by city, scrapes all commercial contacts, removes duplicates, and generates formatted CRM spreadsheets."
      },
      results: [
        { pt: "Economia de mais de 30 horas de trabalho manual por campanha", en: "Over 30 hours of manual labor saved per outreach campaign" },
        { pt: "Extração de Nome, Endereço, WhatsApp, Site e Avaliação", en: "Captures Name, Address, WhatsApp, Website, and Reviews" },
        { pt: "Planilhas organizadas entregues no formato Excel / Google Sheets", en: "Organized output in Excel & Google Sheets format" }
      ]
    },
    technical: {
      stack: ["Python", "Selenium / Playwright", "BeautifulSoup4", "Pandas", "Sanitização de Dados", "Anti-Bot Evasion"],
      architecture: {
        pt: "Navegação automatizada com rolagem dinâmica e tempos de espera humanizados para evitar bloqueios, parser acelerado com BeautifulSoup e sanitização colunar com Pandas.",
        en: "Automated browser session with dynamic scrolling, humanized jitter delays to prevent IP bans, fast BeautifulSoup parsing, and Pandas data hygiene."
      }
    }
  },

  {
    id: "cepleads",
    indexNum: "#04",
    categoryEyebrow: { pt: "Data Pipeline • Segmentação por CEP", en: "Data Pipeline • Postal Code Geocoding" },
    title: {
      pt: "CepLeads: Extração & Enriquecimento por Faixa de CEP",
      en: "CepLeads: Geolocation & Postal Code Prospecting Pipeline"
    },
    highlight: {
      pt: "Coleta e enriquece cadastros comerciais a partir de faixas de CEP e bairros específicos com validação rigorosa de WhatsApp e CNPJ.",
      en: "Extracts and enriches commercial directories across postal codes and target neighborhoods with strict tax ID and phone validation."
    },
    mainImage: "assets/projects/cepleads-capa.png",
    gallery: [
      { src: "assets/projects/cepleads-capa.png", caption: { pt: "Capa do CepLeads", en: "CepLeads Cover" } },
      { src: "assets/projects/cepleads-resultados.png", caption: { pt: "Scripts e Resultados de Extração em Escala", en: "Batch Script Results" } }
    ],
    business: {
      problem: {
        pt: "Quem faz vendas locais ou regionais precisa abordar comércios de bairros ou cidades específicas, mas as listas compradas na internet vêm com números inválidos ou empresas que já fecharam.",
        en: "Businesses doing territorial sales need fresh contacts in specific postal codes, but purchased lists are filled with disconnected numbers and closed shops."
      },
      solution: {
        pt: "Pipeline focado em geolocalização que consulta bases atualizadas por CEP, higieniza os telefones verificando formato de WhatsApp e gera bases confiáveis e segmentadas.",
        en: "Geolocated data pipeline querying updated registries by postal code, sanitizing phone numbers to WhatsApp standards, and delivering high-accuracy lead lists."
      },
      results: [
        { pt: "Mais de 10.000 cadastros processados por hora", en: "10,000+ records processed per hour" },
        { pt: "99% de precisão nos números e formatos de contato", en: "99% phone format and contact accuracy" },
        { pt: "Segmentação geográfica precisa por bairro e município", en: "Precise neighborhood and municipal geo-segmentation" }
      ]
    },
    technical: {
      stack: ["Python Assíncrono", "AsyncIO", "Requests", "Pandas", "Pydantic Schemas", "OpenPyXL"],
      architecture: {
        pt: "Arquitetura assíncrona não-bloqueante para consultas simultâneas de APIs públicas e privadas, validação de contratos com Pydantic e exportação tipada para Excel.",
        en: "Non-blocking asynchronous architecture querying public and private endpoints concurrently, contract enforcement with Pydantic, and type-safe Excel exporting."
      }
    }
  }
];

// --- 3. DADOS DOS PROJETOS COMPLEMENTARES ---
const secondaryProjects = [
  {
    id: "oraculo",
    indexNum: "#05",
    categoryEyebrow: { pt: "Inteligência Artificial • RAG Multi-LLM", en: "AI System • Multi-LLM Grounding" },
    title: {
      pt: "Oráculo: Assistente Conversacional Multimodal com Grounding",
      en: "Oracle: Multimodal Conversational Assistant with Document Grounding"
    },
    desc: {
      pt: "Sistema que permite conversar em linguagem natural com documentos <span class=\"accent-paren\">(</span>PDF, CSV, TXT, links web e vídeos do YouTube<span class=\"accent-paren\">)</span>. Integra Groq <span class=\"accent-paren\">(</span>LLaMA 3.3 70B ultra-rápido<span class=\"accent-paren\">)</span> e OpenAI, eliminando aprisionamento a fornecedores únicos.",
      en: "Interactive natural-language system enabling conversational queries across documents <span class=\"accent-paren\">(</span>PDF, CSV, TXT, web links, and YouTube<span class=\"accent-paren\">)</span>. Combines Groq <span class=\"accent-paren\">(</span>LLaMA 3.3 70B<span class=\"accent-paren\">)</span> and OpenAI without vendor lock-in."
    },
    tech: ["Python", "LangChain", "Streamlit", "Groq LPU", "OpenAI API", "Multi-LLM"]
  },
  {
    id: "tescan",
    indexNum: "#06",
    categoryEyebrow: { pt: "Backend • Diagnóstico CLI", en: "Backend • CLI Diagnostics" },
    title: {
      pt: "Tescan: Scanner de Diagnóstico & Integridade de Backend",
      en: "Tescan: System Audit & Diagnostic Integrity Scanner"
    },
    desc: {
      pt: "Ferramenta utilitária multithread para auditoria e verificação de arquivos e rotinas de sistema, detectando dados corrompidos ou inconsistências antes de quebrar fluxos em produção.",
      en: "Concurrent multithreaded utility inspecting directory trees, auditing data integrity, and catching anomalies before they impact live production pipelines."
    },
    tech: ["Python Core", "Multithreading", "Logging Estruturado", "File System APIs", "Error Handling"]
  }
];

// --- 4. GERENCIADOR DE ESTADO & FUNÇÕES ---
let currentLang = localStorage.getItem("portfolio_lang") || "pt";
let activeTabs = {
  clinicas: "business",
  dealership: "business",
  mapsleads: "business",
  cepleads: "business"
};

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;

  // Atualizar botões PT / EN no header
  const btnPt = document.getElementById("lang-btn-pt");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnPt && btnEn) {
    if (lang === "pt") {
      btnPt.className = "px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FA692A] text-white shadow-sm transition-all";
      btnEn.className = "px-2.5 py-1 rounded-full text-xs text-[#8E8E93] hover:text-white transition-all";
    } else {
      btnEn.className = "px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FA692A] text-white shadow-sm transition-all";
      btnPt.className = "px-2.5 py-1 rounded-full text-xs text-[#8E8E93] hover:text-white transition-all";
    }
  }

  // Atualizar todos os elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Renderizar projetos
  renderFeaturedProjects();
  renderSecondaryProjects();
}

function switchProjectTab(projectId, tabName) {
  activeTabs[projectId] = tabName;
  renderFeaturedProjects();
}

// Renderizar os 4 Projetos Principais no Estilo Creative Pulse
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = featuredProjects.map(p => {
    const activeTab = activeTabs[p.id] || "business";
    const title = p.title[currentLang];
    const category = p.categoryEyebrow[currentLang];
    const highlight = p.highlight[currentLang];

    return `
      <div class="pulse-card pulse-card-accent p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <!-- Header do Card: Categoria com traço + Número de série -->
          <div class="flex items-center justify-between gap-3 mb-3">
            <span class="eyebrow-pulse">${category}</span>
            <span class="text-xs text-[#8E8E93] font-mono">${p.indexNum}</span>
          </div>

          <!-- Título & Destaque de Impacto -->
          <h3 class="text-2xl font-bold text-white mb-2 leading-tight">${title}</h3>
          <p class="text-[#D9D9D9] text-sm mb-6 leading-relaxed flex items-start gap-2">
            <span class="material-symbols-outlined text-[18px] text-[#FA692A] mt-0.5 flex-shrink-0">check_circle</span>
            <span>${highlight}</span>
          </p>

          <!-- Imagem com Moldura do Creative Pulse -->
          <div class="pulse-image-frame mb-6 cursor-pointer group" onclick="openGalleryModal('${p.id}')" title="${t.btn_view_gallery}">
            <img src="${p.mainImage}" alt="${title}" class="w-full h-60 sm:h-64 object-cover object-top" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent flex items-end justify-between p-4 opacity-90 group-hover:opacity-100 transition-opacity">
              <span class="pill-btn-dark backdrop-blur-md">
                <span class="material-symbols-outlined text-[16px] text-[#FA692A]">visibility</span>
                <span>${t.btn_view_gallery}</span>
              </span>
              <span class="text-xs text-[#8E8E93] font-mono bg-[#141414]/90 px-3 py-1 rounded-full border border-white/10">
                ${p.gallery.length} imagens
              </span>
            </div>
          </div>

          <!-- Toggle Pills: Negócio vs Técnico -->
          <div class="flex items-center gap-1.5 p-1 rounded-full bg-[#0D0D0D] border border-white/10 mb-5 max-w-md">
            <button 
              type="button" 
              onclick="switchProjectTab('${p.id}', 'business')" 
              class="pulse-toggle-tab flex-1 text-center ${activeTab === 'business' ? 'active' : ''}">
              ${t.tab_business}
            </button>
            <button 
              type="button" 
              onclick="switchProjectTab('${p.id}', 'tech')" 
              class="pulse-toggle-tab flex-1 text-center ${activeTab === 'tech' ? 'active' : ''}">
              ${t.tab_tech}
            </button>
          </div>

          <!-- Conteúdo da Aba Ativa -->
          <div class="min-h-[160px]">
            ${activeTab === 'business' ? `
              <!-- VISÃO DE NEGÓCIO -->
              <div class="space-y-4">
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">warning</span>
                    ${currentLang === 'pt' ? 'O Problema que resolvi' : 'The Challenge Solved'}
                  </h4>
                  <p class="text-sm text-[#D9D9D9] leading-relaxed">${p.business.problem[currentLang]}</p>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">task_alt</span>
                    ${currentLang === 'pt' ? 'Resultados Práticos no Negócio' : 'Real-World Business Results'}
                  </h4>
                  <ul class="space-y-1.5 text-sm text-[#D9D9D9]">
                    ${p.business.results.map(r => `
                      <li class="flex items-start gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#FA692A] mt-2 flex-shrink-0"></span>
                        <span>${r[currentLang]}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            ` : `
              <!-- VISÃO TÉCNICA -->
              <div class="space-y-4">
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">integration_instructions</span>
                    ${currentLang === 'pt' ? 'Ferramentas & Integrações' : 'Tools & Integrations'}
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    ${p.technical.stack.map(s => `<span class="pulse-tech-tag">${s}</span>`).join('')}
                  </div>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">account_tree</span>
                    ${currentLang === 'pt' ? 'Como Funciona por Dentro' : 'Architecture & Flow'}
                  </h4>
                  <p class="text-xs font-mono text-[#D9D9D9] bg-[#0D0D0D] p-3 rounded-xl border border-white/10 leading-relaxed">
                    ${p.technical.architecture[currentLang]}
                  </p>
                </div>
              </div>
            `}
          </div>
        </div>

        <!-- Ações Inferiores com Botão Pill Creative Pulse -->
        <div class="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button 
            type="button" 
            onclick="openGalleryModal('${p.id}')" 
            class="text-xs font-semibold text-[#D9D9D9] hover:text-white flex items-center gap-1.5 transition-colors">
            <span>${t.btn_view_gallery}</span>
            <span class="material-symbols-outlined text-[15px] text-[#FA692A]">arrow_forward</span>
          </button>
          
          <a 
            href="https://wa.me/5574999954477?text=${encodeURIComponent(currentLang === 'pt' ? `Olá Rubens, vi seu projeto "${p.title.pt}" no portfólio e gostaria de tirar uma dúvida!` : `Hello Rubens, I saw your project "${p.title.en}" and would like to talk!`)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="pill-btn-dark hover:border-[#FA692A]/50 group">
            <span class="material-symbols-outlined text-[15px] text-[#FA692A] group-hover:scale-110 transition-transform">chat</span>
            <span>${currentLang === 'pt' ? 'Perguntar sobre este projeto' : 'Ask about this project'}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Renderizar Projetos Complementares
function renderSecondaryProjects() {
  const container = document.getElementById("secondary-projects-container");
  if (!container) return;

  container.innerHTML = secondaryProjects.map(p => {
    const title = p.title[currentLang];
    const category = p.categoryEyebrow[currentLang];
    const desc = p.desc[currentLang];

    return `
      <div class="pulse-card p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-3 mb-2.5">
            <span class="eyebrow-pulse">${category}</span>
            <span class="text-xs text-[#8E8E93] font-mono">${p.indexNum}</span>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">${title}</h4>
          <p class="text-sm text-[#D9D9D9] leading-relaxed mb-4">${desc}</p>
        </div>
        <div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
            ${p.tech.map(t => `<span class="pulse-tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 5. MODAL / LIGHTBOX DE GALERIA ---
function openGalleryModal(projectId) {
  const project = featuredProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("gallery-modal");
  const modalContent = document.getElementById("gallery-modal-body");
  if (!modal || !modalContent) return;

  const t = translations[currentLang];

  modalContent.innerHTML = `
    <!-- Topo do Modal -->
    <div class="flex items-start justify-between pb-4 border-b border-white/10">
      <div>
        <span class="eyebrow-pulse block mb-1">${project.categoryEyebrow[currentLang]}</span>
        <h3 class="text-2xl font-bold text-white">${project.title[currentLang]}</h3>
        <p class="text-sm text-[#FA692A] mt-1">${project.highlight[currentLang]}</p>
      </div>
      <button onclick="closeGalleryModal()" class="p-2 rounded-full bg-[#212121] hover:bg-[#2E2E2E] text-[#8E8E93] hover:text-white transition-colors" title="${t.modal_close}">
        <span class="material-symbols-outlined text-2xl">close</span>
      </button>
    </div>

    <!-- Imagens em Alta Resolução -->
    <div class="py-5 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
      <div class="space-y-6">
        ${project.gallery.map((img, idx) => `
          <div class="bg-[#0D0D0D] p-3.5 rounded-2xl border border-white/10">
            <div class="text-xs font-semibold text-[#D9D9D9] mb-2.5 flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-[#FA692A]">photo</span>
              <span>${idx + 1}. ${img.caption[currentLang]}</span>
            </div>
            <a href="${img.src}" target="_blank" title="Clique para abrir em tamanho original" class="block rounded-xl overflow-hidden border border-white/10 hover:border-[#FA692A]/50 transition-colors">
              <img src="${img.src}" alt="${img.caption[currentLang]}" class="w-full max-h-[500px] object-contain bg-[#141414] rounded-xl" />
            </a>
          </div>
        `).join('')}
      </div>

      <!-- Resumo Estratégico -->
      <div class="p-5 rounded-2xl bg-[#141414] border border-white/10">
        <h4 class="text-sm font-bold text-white mb-2">Visão Executiva do Projeto</h4>
        <p class="text-sm text-[#D9D9D9] leading-relaxed mb-3">${project.business.solution[currentLang]}</p>
        <div class="flex flex-wrap gap-1.5">
          ${project.technical.stack.map(s => `<span class="pulse-tech-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>

    <!-- Ações Inferiores do Modal -->
    <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
      <span class="text-xs text-[#8E8E93]">Rubens Alves Ramos Cardoso</span>
      <div class="flex items-center gap-2">
        <a 
          href="https://wa.me/5574999954477?text=${encodeURIComponent(`Olá Rubens, vi seu projeto "${project.title.pt}" no portfólio e gostaria de conversar!`)}"
          target="_blank"
          rel="noopener noreferrer"
          class="pill-btn-accent">
          <span class="material-symbols-outlined text-[16px]">chat</span>
          <span>Conversar no WhatsApp</span>
        </a>
        <button onclick="closeGalleryModal()" class="pill-btn-dark">
          ${t.modal_close}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// Fechar com tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeGalleryModal();
});

// Utilitário de Cópia
function copyText(text, notice) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(notice || translations[currentLang].copied_alert);
  }).catch(() => {
    showToast(translations[currentLang].copied_alert);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Mobile Menu
function toggleMobileNav() {
  const menu = document.getElementById("mobile-nav");
  if (menu) menu.classList.toggle("hidden");
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
