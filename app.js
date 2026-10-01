/**
 * ========================================================
 * OBSIDIAN ENGINEERING PORTFOLIO - CORE ENGINE
 * Developer: Rubens Alves Ramos Cardoso
 * Architecture: Bilingual i18n, Terminal Simulator,
 * Bento Grid Filters, Case Study Modal & Dispatch Flow
 * ========================================================
 */

// --- 1. DATA DICTIONARIES & BILINGUAL CONTENT ---
const translations = {
  pt: {
    // Header & Meta
    nav_about: "Sobre",
    nav_stack: "Stack",
    nav_education: "Formação",
    nav_projects: "Projetos",
    nav_methodology: "Metodologia",
    nav_contact: "Contato",
    status_online: "v2.5.0 • online",
    btn_download_cv: "Currículo / CV",
    btn_cv_short: "CV",
    role_subtitle: "Backend & Agentes de IA",

    // Hero Section
    hero_beacon: "Disponível para Projetos & Vagas Backend / IA",
    hero_headline_start: "Desenvolvendo arquiteturas de ",
    hero_headline_gradient: "backend escaláveis",
    hero_headline_mid: ", agentes de IA autônomos e ",
    hero_headline_gradient2: "pipelines de dados de alto rendimento.",
    hero_subhead: "Desenvolvedor Python focado em microsserviços distribuídos, orquestração de agentes com LangChain e n8n, web scraping em escala e design resiliente de bancos de dados. Aliando rigor técnico com visão estratégica de processos.",
    hero_btn_projects: "Ver Projetos",
    hero_btn_contact: "Iniciar Contato",
    
    // Telemetry Stats
    stat_projects_val: "6+",
    stat_projects_label: "Sistemas em Produção",
    stat_python_val: "Python 3.12+",
    stat_python_label: "AsyncIO & Tipagem Rígida",
    stat_automation_val: "100%",
    stat_automation_label: "Automação & Agentes IA",
    stat_latency_val: "< 25ms",
    stat_latency_label: "Latência Média p99",

    // Terminal in Hero
    term_tab_1: "health_check.py",
    term_tab_2: "clinic_agent.py",
    term_tab_3: "lead_miner.py",
    term_run_btn: "Executar Script",
    term_running: "Processando...",
    term_response_status: "HTTP/1.1 200 OK",
    term_response_time: "Tempo de Resposta:",

    // Divider Labels
    div_stack: "[01 // CAPACIDADES TÉCNICAS]",
    div_stack_sub: "SYS_STACK_VER 2026.1",
    div_education: "[02 // FORMAÇÃO & CERTIFICAÇÕES]",
    div_education_sub: "ACADEMIA & RIGOR TÉCNICO",
    div_projects: "[03 // ESTUDOS DE CASO]",
    div_projects_sub: "6 PROJETOS CATALOGADOS",
    div_methodology: "[04 // METODOLOGIA DE ENGENHARIA]",
    div_methodology_sub: "CONTRATOS ESTRITOS • RESILIÊNCIA",
    div_contact: "[05 // CANAL SEGURO]",
    div_contact_sub: "STATUS: ABERTO A PROPOSTAS",

    // Stack Section
    stack_title: "TECH STACK // CAPACIDADES DE ENGENHARIA",
    stack_desc: "Ferramentas testadas em produção, drivers assíncronos e frameworks modernos focados em resiliência e concorrência.",
    stack_card1_title: "Python Runtime & Ecossistema Backend",
    stack_card1_badge: "Núcleo Principal",
    stack_card1_desc: "Domínio avançado de Python moderno orientado a objetos e programação assíncrona com AsyncIO. Desenvolvimento de APIs velozes com FastAPI e Flask, contratos rigorosos com Pydantic v2 e testes automatizados com PyTest.",
    stack_card2_title: "Agentes de IA & Orquestração LLM",
    stack_card2_badge: "Engenharia de IA",
    stack_card2_desc: "Criação de agentes autônomos orientados a objetivos com LangChain e n8n. Integração de LLMs (OpenAI, Groq, Claude), RAG contextual, memory persistence, tool-calling e automação de fluxos conversacionais complexos.",
    stack_card3_title: "Web Scraping & Mineração de Leads",
    stack_card3_badge: "Extração em Escala",
    stack_card3_desc: "Robôs de extração com Playwright, Selenium e BeautifulSoup com rotação de headers, contorno de bloqueios, geocoding reverso e sanitização rigorosa de dados comerciais para CRM.",
    stack_card4_title: "Bancos de Dados, Cache & Infra",
    stack_card4_badge: "Persistência & Deploy",
    stack_card4_desc: "Modelagem relacional com PostgreSQL e SQLite, camadas de caching ultrarrápido com Redis, conteinerização com Docker, automação GitOps e deploy em ambiente Linux.",

    // Education Section
    edu_title: "FORMAÇÃO & CERTIFICAÇÕES // BASE TÉCNICA",
    edu_desc: "A união estratégica entre a inteligência de negócios (Administração Univasf) e o rigor de engenharia de software da USP, Rocketseat, ASIMOV e DevAprender.",
    edu_univasf_title: "Bacharelado em Administração",
    edu_univasf_inst: "Univasf - Universidade Federal do Vale do São Francisco",
    edu_univasf_status: "Cursando (8º Período)",
    edu_univasf_desc: "Formação sólida em processos organizacionais, gestão de projetos, análise financeira e estratégia. Essa base capacita a construção de softwares com impacto direto no modelo de negócio, custos e faturamento dos clientes.",
    
    edu_cert_usp1: "Introdução à Ciência da Computação com Python (Partes 1 e 2)",
    edu_cert_usp1_inst: "USP - Universidade de São Paulo (2024)",
    edu_cert_usp2: "Programação Orientada a Objetos (POO)",
    edu_cert_usp2_inst: "USP - Universidade de São Paulo (2024)",
    edu_cert_asimov: "Aplicações de IA: Criação de Agentes com LangChain",
    edu_cert_asimov_inst: "ASIMOV Academy (2026)",
    edu_cert_rocketseat: "Agentes de IA com N8N na Prática",
    edu_cert_rocketseat_inst: "Rocketseat (2026)",
    edu_cert_devaprender: "Mestre Pythonista - Formação Completa",
    edu_cert_devaprender_inst: "DevAprender (2026)",

    // Projects Section
    proj_title: "PROJETOS EM DESTAQUE // SHOWCASE",
    proj_desc: "Aplicações reais desenvolvidas com foco em automação operacional, agentes cognitivos e inteligência de dados.",
    filter_all: "Todos os Projetos",
    filter_ai: "Agentes de IA & LLMs",
    filter_scraping: "Scraping & Lead Gen",
    filter_bots: "Automações & Bots",
    btn_view_details: "Ver Detalhes do Projeto",
    btn_open_code: "Explorar Estrutura",

    // Methodology Section
    method_title: "CICLO DE ENGENHARIA // COMO EU CONSTRUO",
    method_desc: "Processo estruturado para desenvolvimento de software previsível, resiliente e de fácil manutenção.",
    step1_title: "Modelagem & Regras de Negócio",
    step1_desc: "Entendimento aprofundado dos requisitos, fluxos de valor da empresa e definição dos contratos de dados (Pydantic / SQL) antes de escrever as rotas.",
    step2_title: "Arquitetura de Agentes & APIs",
    step2_desc: "Desenvolvimento modular com separação de camadas, injeção de dependências, tratamento estrito de exceções e prompts determinísticos.",
    step3_title: "Assincronismo & Resiliência",
    step3_desc: "Mecanismos de retentativas automáticas, controle de concorrência com AsyncIO/Redis, e prevenção contra quebras de API externas.",
    step4_title: "Testes, Validação & Observabilidade",
    step4_desc: "Cobertura de casos de borda com PyTest, logging estruturado de eventos, validação de payload em tempo de execução e empacotamento com Docker.",

    // Contact Section
    contact_title: "VAMOS CONVERSAR // INICIAR CONEXÃO",
    contact_desc: "Estou disponível para discutir oportunidades de desenvolvimento backend, projetos de automação com Agentes de IA e consultoria de dados. Vamos estruturar sua solução.",
    contact_email_label: "E-MAIL PRINCIPAL",
    contact_loc_label: "LOCALIZAÇÃO & FUSO",
    contact_loc_val: "Brasil • Petrolina/PE (UTC-3)",
    contact_response_label: "TEMPO DE RESPOSTA",
    contact_response_val: "< 12 Horas úteis",
    contact_terminal_title: "DISPATCH_MESSAGE.sh",
    contact_form_name: "NOME // IDENTIFICADOR",
    contact_form_name_ph: "Seu nome ou empresa",
    contact_form_email: "E-MAIL // RETORNO",
    contact_form_email_ph: "seuemail@empresa.com",
    contact_form_subject: "ASSUNTO // TIPO DE DEMANDA",
    contact_opt1: "Desenvolvimento de Agentes de IA / LLMs",
    contact_opt2: "Backend Python / APIs REST Escaláveis",
    contact_opt3: "Extração de Dados / Web Scraping em Lote",
    contact_opt4: "Automação de Processos & Bots",
    contact_opt5: "Oportunidade de Trabalho / Contratação",
    contact_opt6: "Outro Assunto",
    contact_form_msg: "PAYLOAD // DETALHES DO PROJETO OU PROPOSTA",
    contact_form_msg_ph: "Descreva os requisitos técnicos, o objetivo do sistema ou o escopo da oportunidade...",
    contact_btn_send: "Transmitir Mensagem",
    contact_sending: "Criptografando & Transmitindo...",
    contact_success_title: "Despacho Transmitido com Sucesso!",
    contact_success_desc: "Sua mensagem foi empacotada e enviada para a caixa prioritária de Rubens Alves. O retorno será realizado com agilidade.",
    contact_btn_another: "Enviar Outra Mensagem",
    contact_btn_mailto: "Abrir no Cliente de E-mail Direto",

    // Modal Details
    modal_problem: "O Desafio & Contexto de Negócio",
    modal_solution: "Solução Técnica Implementada",
    modal_key_features: "Funcionalidades Principais",
    modal_architecture: "Destaques de Arquitetura",
    modal_close: "Fechar Janela",

    // Footer
    footer_status: "Sistemas operacionais • Python 3.12 • LangChain • FastAPI",
    footer_copy: "© 2026 Rubens Alves Ramos Cardoso. Desenvolvido com Obsidian Engineering.",
    copied_toast: "Copiado para a área de transferência!"
  },

  en: {
    // Header & Meta
    nav_about: "About",
    nav_stack: "Stack",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_methodology: "Methodology",
    nav_contact: "Contact",
    status_online: "v2.5.0 • online",
    btn_download_cv: "Resume / CV",
    btn_cv_short: "CV",
    role_subtitle: "Backend & AI Agents",

    // Hero Section
    hero_beacon: "Available for Backend & AI Engineering Roles",
    hero_headline_start: "Building scalable ",
    hero_headline_gradient: "backend architectures",
    hero_headline_mid: ", autonomous AI agents, and ",
    hero_headline_gradient2: "high-throughput data pipelines.",
    hero_subhead: "Python Developer specializing in distributed microservices, AI agent orchestration with LangChain & n8n, large-scale web scraping, and bulletproof database design. Fusing engineering rigor with strategic business insight.",
    hero_btn_projects: "Explore Projects",
    hero_btn_contact: "Initiate Contact",
    
    // Telemetry Stats
    stat_projects_val: "6+",
    stat_projects_label: "Production Systems",
    stat_python_val: "Python 3.12+",
    stat_python_label: "AsyncIO & Strict Typing",
    stat_automation_val: "100%",
    stat_automation_label: "Automation & AI Agents",
    stat_latency_val: "< 25ms",
    stat_latency_label: "Average p99 Latency",

    // Terminal in Hero
    term_tab_1: "health_check.py",
    term_tab_2: "clinic_agent.py",
    term_tab_3: "lead_miner.py",
    term_run_btn: "Run Script",
    term_running: "Executing...",
    term_response_status: "HTTP/1.1 200 OK",
    term_response_time: "Response Time:",

    // Divider Labels
    div_stack: "[01 // TECHNICAL CAPABILITIES]",
    div_stack_sub: "SYS_STACK_VER 2026.1",
    div_education: "[02 // EDUCATION & CREDENTIALS]",
    div_education_sub: "ACADEMIA & RIGOR",
    div_projects: "[03 // CASE STUDIES]",
    div_projects_sub: "6 CATALOGUED PROJECTS",
    div_methodology: "[04 // ENGINEERING LIFECYCLE]",
    div_methodology_sub: "STRICT CONTRACTS • RESILIENCE",
    div_contact: "[05 // SECURE CHANNEL]",
    div_contact_sub: "STATUS: OPEN FOR WORK",

    // Stack Section
    stack_title: "TECH STACK // ENGINEERING CAPABILITIES",
    stack_desc: "Production-tested tools, asynchronous drivers, and modern frameworks optimized for resilience and concurrency.",
    stack_card1_title: "Python Runtime & Backend Ecosystem",
    stack_card1_badge: "Core Engine",
    stack_card1_desc: "Advanced mastery of modern Python OOP and asynchronous programming with AsyncIO. Fast API development with FastAPI and Flask, strict runtime schemas with Pydantic v2, and testing suites via PyTest.",
    stack_card2_title: "AI Agents & LLM Orchestration",
    stack_card2_badge: "AI Engineering",
    stack_card2_desc: "Goal-oriented autonomous agents built using LangChain and n8n. Seamless integration with OpenAI, Groq, and Claude APIs, contextual RAG, memory persistence, tool-calling, and deterministic conversation flow control.",
    stack_card3_title: "Web Scraping & Lead Mining",
    stack_card3_badge: "Scale Extraction",
    stack_card3_desc: "Industrial-grade scraping bots using Playwright, Selenium, and BeautifulSoup with header rotation, rate-limit bypassing, reverse geocoding, and CRM-ready data sanitization.",
    stack_card4_title: "Databases, Caching & Infra",
    stack_card4_badge: "Persistence & Ops",
    stack_card4_desc: "Relational modeling with PostgreSQL and SQLite, lightning-fast caching layers with Redis, lightweight Docker containerization, GitOps workflows, and Linux deployment environments.",

    // Education Section
    edu_title: "EDUCATION & CERTIFICATIONS // TECHNICAL FOUNDATION",
    edu_desc: "A strategic synergy between business administration acumen (Univasf) and software engineering rigor from USP, Rocketseat, ASIMOV, and DevAprender.",
    edu_univasf_title: "B.S. in Business Administration",
    edu_univasf_inst: "Univasf - Federal University of the São Francisco Valley",
    edu_univasf_status: "Enrolled (8th Semester)",
    edu_univasf_desc: "Rigorous training in organizational processes, project management, financial analysis, and strategic vision. Enables building software directly aligned with customer business models, cost reduction, and revenue growth.",
    
    edu_cert_usp1: "Introduction to Computer Science with Python (Parts 1 & 2)",
    edu_cert_usp1_inst: "USP - University of São Paulo (2024)",
    edu_cert_usp2: "Object-Oriented Programming (OOP)",
    edu_cert_usp2_inst: "USP - University of São Paulo (2024)",
    edu_cert_asimov: "AI Applications: Building Agents with LangChain",
    edu_cert_asimov_inst: "ASIMOV Academy (2026)",
    edu_cert_rocketseat: "Hands-on AI Agents with N8N",
    edu_cert_rocketseat_inst: "Rocketseat (2026)",
    edu_cert_devaprender: "Master Pythonista - Complete Specialization",
    edu_cert_devaprender_inst: "DevAprender (2026)",

    // Projects Section
    proj_title: "FEATURED PROJECTS // CASE STUDIES",
    proj_desc: "Real-world production systems engineered for automated operations, cognitive agents, and intelligent data harvesting.",
    filter_all: "All Projects",
    filter_ai: "AI Agents & LLMs",
    filter_scraping: "Scraping & Lead Gen",
    filter_bots: "Automation & Bots",
    btn_view_details: "View Project Specs",
    btn_open_code: "Explore Structure",

    // Methodology Section
    method_title: "ENGINEERING LIFECYCLE // HOW I BUILD",
    method_desc: "A predictable, resilient methodology for zero-downtime and clean backend software delivery.",
    step1_title: "Data Modeling & Domain Requirements",
    step1_desc: "Deep analysis of operational flows and strict contract schemas (Pydantic / SQL relational constraints) established before any route is created.",
    step2_title: "Agent & API Contract Architecture",
    step2_desc: "Modular design with clear layer separation, dependency injection, defensive exception handling, and deterministic prompts.",
    step3_title: "Asynchrony & Concurrency Resilience",
    step3_desc: "Automated retry engines, backoff algorithms, AsyncIO/Redis concurrency controls, and dead-letter fault tolerance.",
    step4_title: "Testing, Verification & Observability",
    step4_desc: "Edge-case coverage via PyTest suites, structured log telemetry, runtime payload validation, and reproducible Docker environments.",

    // Contact Section
    contact_title: "LET'S CONNECT // START A CONVERSATION",
    contact_desc: "Available for backend engineering positions, AI agent development contracts, and data automation consulting. Let's engineer your next milestone.",
    contact_email_label: "PRIMARY EMAIL",
    contact_loc_label: "LOCATION & TIMEZONE",
    contact_loc_val: "Brazil • Petrolina/PE (UTC-3 / EST Aligned)",
    contact_response_label: "RESPONSE TIME",
    contact_response_val: "< 12 Business Hours",
    contact_terminal_title: "DISPATCH_MESSAGE.sh",
    contact_form_name: "NAME // SENDER",
    contact_form_name_ph: "Your name or organization",
    contact_form_email: "WORK EMAIL // RETURN_URI",
    contact_form_email_ph: "your.name@company.com",
    contact_form_subject: "SUBJECT // ENGAGEMENT TYPE",
    contact_opt1: "Autonomous AI Agents & LLM Pipelines",
    contact_opt2: "Scalable Python Backend & REST APIs",
    contact_opt3: "Large-Scale Data Extraction / Web Scraping",
    contact_opt4: "Automated Workflows & Custom Bots",
    contact_opt5: "Full-Time Role / Hiring Inquiries",
    contact_opt6: "General Technology Consultation",
    contact_form_msg: "PAYLOAD // PROJECT SCOPE OR INQUIRY",
    contact_form_msg_ph: "Outline technical specifications, business requirements, or team role scope...",
    contact_btn_send: "Transmit Dispatch",
    contact_sending: "Encrypting & Transmitting...",
    contact_success_title: "Dispatch Transmitted Successfully!",
    contact_success_desc: "Your payload has been queued in Rubens Alves' priority inbox. Expect a prompt and detailed technical response.",
    contact_btn_another: "Send Another Dispatch",
    contact_btn_mailto: "Open in Native Email Client",

    // Modal Details
    modal_problem: "The Business Challenge & Context",
    modal_solution: "Engineered Technical Solution",
    modal_key_features: "Core Capabilities & Features",
    modal_architecture: "Architectural Highlights",
    modal_close: "Close Inspector",

    // Footer
    footer_status: "All systems nominal • Python 3.12 • LangChain • FastAPI",
    footer_copy: "© 2026 Rubens Alves Ramos Cardoso. Crafted with Obsidian Engineering.",
    copied_toast: "Copied to clipboard!"
  }
};

// --- 2. PROJECTS CATALOG (6 PROJECTS) ---
const projectsData = [
  {
    id: "clinicas-agent",
    folder: "Agente de Atendimento - Clínicas",
    category: "ai-agents",
    categoryLabel: { pt: "Agente de IA & LLMs", en: "AI Agents & LLMs" },
    version: "v2.1",
    statusBadge: { pt: "Produção Ativa", en: "Production Live" },
    title: {
      pt: "Agente de Atendimento Inteligente para Clínicas",
      en: "Intelligent Clinical Reception & Triage Agent"
    },
    shortDesc: {
      pt: "Agente autônomo conversacional para triagem de pacientes, agendamento de consultas médicas e confirmações automáticas com controle estrito de agenda e redução de no-shows.",
      en: "Autonomous conversational AI agent for patient triage, medical appointment scheduling, and automated confirmations with strict calendar synchronization and no-show mitigation."
    },
    techBadges: ["Python", "LangChain", "n8n", "OpenAI API", "Webhooks", "FastAPI", "SQLite/Postgres"],
    metrics: [
      { label: { pt: "Disponibilidade", en: "Availability" }, val: "24/7" },
      { label: { pt: "Tempo de Resposta", en: "Avg Latency" }, val: "1.4s" },
      { label: { pt: "Queda de No-Shows", en: "No-Show Drop" }, val: "-68%" }
    ],
    problem: {
      pt: "Clínicas médicas e odontológicas enfrentam gargalos crônicos no atendimento humano via WhatsApp: pacientes demoram a ser respondidos fora do horário comercial, agendas sofrem com erros de sobreposição e o índice de faltas (no-shows) causa prejuízo financeiro direto.",
      en: "Healthcare and dental clinics struggle with slow WhatsApp response times, high after-hours patient drop-off, double-booking errors, and costly appointment no-shows due to manual scheduling friction."
    },
    solution: {
      pt: "Construção de um agente cognitivo integrado que compreende intenções em linguagem natural, valida horários disponíveis via webhook direto no sistema de gestão/agenda, efetua confirmações preventivas e realiza triagem com encaminhamento humanizado quando necessário.",
      en: "Engineered a cognitive agent combining LangChain and n8n webhooks that parses natural language intent, queries live calendar availability, sends automatic reminders, and routes complex medical cases to human staff."
    },
    features: [
      { pt: "Agendamento, reagendamento e cancelamento autônomo em tempo real", en: "Autonomous real-time booking, rescheduling, and cancellation" },
      { pt: "Triagem prévia de especialidades e convênios aceitos", en: "Pre-triage for medical specialties and insurance providers" },
      { pt: "Disparo automático de lembretes e confirmações com 24h e 2h de antecedência", en: "Automated reminder workflows dispatched at 24h and 2h intervals" },
      { pt: "Proteção contra alucinação de datas e persistência de contexto por paciente", en: "Date hallucination safeguards and per-patient conversation memory" }
    ],
    architecture: {
      pt: "Orquestrador n8n acoplado a microsserviço Python/FastAPI, utilizando LangChain para orquestração de ferramentas (Tool Calling), banco relacional para registro de transações e Webhooks do WhatsApp Business API.",
      en: "n8n orchestrator coupled with a Python/FastAPI microservice utilizing LangChain for tool calling, transactional database storage, and WhatsApp Business API webhooks."
    }
  },
  {
    id: "cepleads",
    folder: "CepLeads",
    category: "scraping-data",
    categoryLabel: { pt: "Web Scraping & Pipeline", en: "Web Scraping & Data Pipeline" },
    version: "v1.8",
    statusBadge: { pt: "Data Pipeline", en: "Data Pipeline" },
    title: {
      pt: "CepLeads: Mineração & Enriquecimento por Malha Geográfica",
      en: "CepLeads: Geolocation & Postal Code Lead Miner"
    },
    shortDesc: {
      pt: "Pipeline de extração, validação e enriquecimento cadastral de estabelecimentos comerciais segmentados por faixas de CEP e coordenadas geográficas.",
      en: "Automated extraction, validation, and enrichment pipeline for commercial businesses segmented by postal code corridors and geospatial coordinates."
    },
    techBadges: ["Python", "AsyncIO", "Requests", "Pandas", "Pydantic", "OpenPyXL", "Geocoding"],
    metrics: [
      { label: { pt: "Registros/Hora", en: "Records/Hour" }, val: "10k+" },
      { label: { pt: "Taxa de Validação", en: "Validation Rate" }, val: "99.2%" },
      { label: { pt: "Formato Export", en: "Output Formats" }, val: "CSV / XLSX" }
    ],
    problem: {
      pt: "Equipes de vendas B2B gastam horas coletando manualmente dados cadastrais e telefones de empresas por região, resultando em listas com contatos desatualizados, formatos inconsistentes e alto custo de prospecção.",
      en: "B2B sales organizations expend extensive manual labor sourcing local business registry data and phone numbers, yielding fragmented, out-of-date lead lists with high prospecting acquisition costs."
    },
    solution: {
      pt: "Desenvolvimento de um pipeline assíncrono em Python que itera por malhas de CEPs, consulta múltiplas bases públicas e privadas de forma resiliente, sanitiza números de contato e gera planilhas estruturadas prontas para CRM.",
      en: "Designed an asynchronous Python pipeline querying geo-indexed business directories across postal codes, formatting data with strict Pydantic schemas, and producing clean CRM-compatible datasets."
    },
    features: [
      { pt: "Varredura contínua por faixa de CEP com controle de concorrência", en: "Continuous postal code range sweeping with concurrency throttling" },
      { pt: "Validação estrita de telefones (DDD + formato WhatsApp) e CNPJ", en: "Strict phone number normalization (WhatsApp-ready) and tax ID validation" },
      { pt: "Deduplicação de registros e filtros por atividade econômica (CNAE/Nicho)", en: "Automatic duplicate purging and commercial category/niche filtering" },
      { pt: "Exportação automatizada com tipagem de colunas para Excel e CSV", en: "Automated type-safe export into Excel and CSV" }
    ],
    architecture: {
      pt: "Script assíncrono estruturado com pooling de conexões HTTP, tratamento defensivo de rate-limits, validação com Pydantic e processamento vetorial com Pandas.",
      en: "Structured asynchronous script with HTTP connection pooling, rate-limit backoff handling, Pydantic data schemas, and Pandas vector processing."
    }
  },
  {
    id: "dealership-bot",
    folder: "Dealership ST Bot",
    category: "bots-automation",
    categoryLabel: { pt: "Automações & Bots", en: "Automation & Bots" },
    version: "v3.0",
    statusBadge: { pt: "Automação Comercial", en: "Sales Automation" },
    title: {
      pt: "Dealership ST Bot: Esteira de Vendas para Concessionárias",
      en: "Dealership ST Bot: Automotive Sales Automation"
    },
    shortDesc: {
      pt: "Bot transacional e de qualificação para concessionárias e revendedoras automotivas. Automatiza a apresentação do estoque, simulações de financiamento e agendamento de test-drives.",
      en: "Transactional customer qualification bot for vehicle dealerships. Automates inventory browsing, payment simulations, and test-drive scheduling."
    },
    techBadges: ["Python", "Bot Engine", "POO Avançada", "REST APIs", "Webhooks", "JSON Store"],
    metrics: [
      { label: { pt: "Qualificação", en: "Qualification" }, val: "Instantânea" },
      { label: { pt: "Conversão Lead", en: "Lead Lift" }, val: "+42%" },
      { label: { pt: "Operação", en: "Uptime" }, val: "24/7" }
    ],
    problem: {
      pt: "Leads que entram à noite ou nos fins de semana em concessionárias costumam esfriar por falta de atendimento rápido, perdendo a decisão de compra para concorrentes com resposta imediata.",
      en: "Automotive buyer inquiries generated during evenings and weekends go cold due to delayed sales response, surrendering hot prospects to faster-responding competitors."
    },
    solution: {
      pt: "Construção de um bot conversacional em Python com máquina de estados finita (FSM), permitindo ao cliente consultar veículos disponíveis por modelo e faixa de preço, calcular estimativas de parcelas e repassar os dados já qualificados ao vendedor.",
      en: "Implemented an event-driven state machine bot in Python that guides buyers through inventory filters, calculates realistic installment estimates, and forwards qualified leads to sales reps."
    },
    features: [
      { pt: "Catálogo dinâmico de veículos com fotos, ficha técnica e valores", en: "Dynamic vehicle catalog with high-res photos, specs, and prices" },
      { pt: "Simulador de entrada e parcelamento integrado", en: "Integrated down-payment and financing installment simulator" },
      { pt: "Roteamento inteligente do lead com histórico para o time de vendas", en: "Intelligent lead dispatch with full chat transcript to sales reps" },
      { pt: "Notificações instantâneas e coleta de dados cadastrais essenciais", en: "Instant notifications and capture of buyer phone, email, and trade-in info" }
    ],
    architecture: {
      pt: "Arquitetura orientada a objetos (POO) com separação nítida de serviços de catálogo, máquina de estados para navegação de menus e despachador de webhooks para CRM.",
      en: "Object-oriented architecture (OOP) with clean separation of catalog services, state machine menu navigation, and CRM webhook dispatchers."
    }
  },
  {
    id: "mapsleads",
    folder: "MapsLeads",
    category: "scraping-data",
    categoryLabel: { pt: "Web Scraping & Leads", en: "Web Scraping & Leads" },
    version: "v2.4",
    statusBadge: { pt: "Scraper em Escala", en: "Scale Scraper" },
    title: {
      pt: "MapsLeads: Extrator em Massa do Google Maps",
      en: "MapsLeads: Google Maps B2B Mining Engine"
    },
    shortDesc: {
      pt: "Minerador automatizado de alta densidade projetado para capturar empresas locais, números de telefone, sites, redes sociais e notas de avaliação direto do Google Maps.",
      en: "High-density automated miner engineered to extract local businesses, phone numbers, websites, social links, and reviews directly from Google Maps."
    },
    techBadges: ["Python", "Selenium/Playwright", "BeautifulSoup", "AsyncIO", "Proxy Manager", "Excel"],
    metrics: [
      { label: { pt: "Campos Coletados", en: "Extracted Fields" }, val: "14+" },
      { label: { pt: "Bypass Bloqueios", en: "Anti-Ban Rate" }, val: "99.8%" },
      { label: { pt: "Enriquecimento", en: "Social Enrich" }, val: "Ativo" }
    ],
    problem: {
      pt: "A prospecção ativa B2B depende de dados frescos de empresas locais, mas a coleta manual é inviável em larga escala e ferramentas pagas cobram valores exorbitantes com dados frequentemente obsoletos.",
      en: "Outbound B2B prospecting relies heavily on fresh local business listings, but manual collection is cost-prohibitive, and commercial scraping SaaS charges steep recurring fees for stale registries."
    },
    solution: {
      pt: "Robô em Python especializado em navegação headless inteligente com rolagem contínua, extração seletiva de elementos DOM do Google Maps e enriquecimento secundário através de raspagem do website próprio da empresa.",
      en: "Specialized Python bot featuring stealth headless automation, dynamic infinite-scroll pagination, Google Maps DOM element extraction, and secondary scraping of target business websites."
    },
    features: [
      { pt: "Pesquisa por palavra-chave e coordenadas geográficas de qualquer cidade", en: "Keyword and geo-coordinate search covering any target municipality" },
      { pt: "Coleta completa: Nome, Endereço, Telefone, Website, Avaliações e Horários", en: "Complete telemetry: Name, Address, Phone, Website, Rating, and Hours" },
      { pt: "Crawler secundário que visita o site da empresa para capturar e-mails e Instagram", en: "Secondary crawler visiting company websites to extract emails and social handles" },
      { pt: "Prevenção contra 'bot detection' com tempos de espera humanizados", en: "Anti-bot evasion with humanized interaction delays and randomized headers" }
    ],
    architecture: {
      pt: "Módulo central em Python com automação de navegador via Playwright/Selenium, parser acelerado com BeautifulSoup, e exportador de dados com sanitização contra caracteres especiais.",
      en: "Core Python module driving Playwright/Selenium browser sessions, high-speed parsing with BeautifulSoup, and sanitized multi-tab spreadsheet generation."
    }
  },
  {
    id: "oraculo",
    folder: "Oraculo",
    category: "ai-agents",
    categoryLabel: { pt: "Inteligência Artificial & Analytics", en: "AI & Decision Analytics" },
    version: "v1.5",
    statusBadge: { pt: "IA Cognitiva", en: "Cognitive AI" },
    title: {
      pt: "Oráculo: Sistema de Inteligência & Síntese Analítica",
      en: "Oracle: Augmented Decision & Synthesis Engine"
    },
    shortDesc: {
      pt: "Sistema analítico impulsionado por LLMs voltado para interpretação de perguntas complexas, agregação de múltiplas fontes e geração de pareceres estratégicos fundamentados.",
      en: "LLM-driven analytical engine built to interpret complex analytical inquiries, aggregate heterogeneous knowledge sources, and synthesize structured strategic dossiers."
    },
    techBadges: ["Python", "LangChain", "Vector Embeddings", "RAG", "Prompt Engineering", "FastAPI"],
    metrics: [
      { label: { pt: "Precisão Síntese", en: "Synthesis Score" }, val: "Elevada" },
      { label: { pt: "Redução de Análise", en: "Time Saved" }, val: "-80%" },
      { label: { pt: "Fontes Cruzadas", en: "Cross-Sources" }, val: "Múltiplas" }
    ],
    problem: {
      pt: "Profissionais e tomadores de decisão perdem dias lendo relatórios e planilhas desconexas para extrair respostas estratégicas consolidadas sobre tendências, dados operacionais e diagnósticos.",
      en: "Decision-makers spend disproportionate time reading fragmented reports, unstructured text, and spreadsheets to synthesize actionable business insights."
    },
    solution: {
      pt: "Desenvolvimento do Oráculo como um agente de IA especializado que utiliza cadeias do LangChain, estratégias avançadas de RAG e formatação estruturada de respostas para entregar sínteses executivas precisas.",
      en: "Constructed 'Oracle' as an AI intelligence agent leveraging LangChain retrieval-augmented generation (RAG), vector stores, and structured prompt engineering to generate executive briefs."
    },
    features: [
      { pt: "Ingestão e leitura semântica de relatórios e documentos", en: "Semantic document ingestion and chunked vector indexing" },
      { pt: "Mecanismo de perguntas e respostas contextualizado com citação de fontes", en: "Contextual Q&A engine with clear source attribution" },
      { pt: "Geração de resumos executivos focados em métricas de tomada de decisão", en: "Automated executive briefings focused on decision KPIs" },
      { pt: "Prompts calibrados para neutralizar alucinações técnicas", en: "Calibrated system prompts mitigating technical hallucinations" }
    ],
    architecture: {
      pt: "Pipeline em Python utilizando LangChain, banco vetorial para busca semântica por similaridade de cossenos e interface de consulta direta com logging de auditoria.",
      en: "Python pipeline leveraging LangChain abstractions, vector similarity retrieval, and direct API endpoints equipped with query audit logs."
    }
  },
  {
    id: "tescan",
    folder: "Tescan",
    category: "bots-automation",
    categoryLabel: { pt: "Backend & Scanner Técnico", en: "Backend & Technical Scanner" },
    version: "v2.0",
    statusBadge: { pt: "Utilitário Core", en: "Core Utility" },
    title: {
      pt: "Tescan: Scanner de Diagnóstico & Integridade de Rotinas",
      en: "Tescan: System Audit & Diagnostic Scanner"
    },
    shortDesc: {
      pt: "Ferramenta de varredura técnica, inspeção de integridade e diagnósticos automatizados de rotinas de backend com geração de relatórios de telemetria.",
      en: "Technical scanning utility and automated backend integrity auditor providing real-time diagnostics and structured system telemetry logs."
    },
    techBadges: ["Python", "Multithreading", "Logging Estruturado", "File System APIs", "Error Handling"],
    metrics: [
      { label: { pt: "Velocidade Scan", en: "Scan Velocity" }, val: "Ultra-rápido" },
      { label: { pt: "Cobertura", en: "Audit Scope" }, val: "Full Checks" },
      { label: { pt: "Falhas Ocultas", en: "Bug Discovery" }, val: "Zero-Miss" }
    ],
    problem: {
      pt: "Falhas silenciosas em scripts, arquivos corrompidos ou inconsistências em dados de entrada podem paralisar operações sem que o desenvolvedor perceba a tempo de intervir.",
      en: "Silent background script failures, corrupted file inputs, and inconsistent data streams can halt production workflows without immediate visibility."
    },
    solution: {
      pt: "Utilitário resiliente de inspeção e scanning que percorre diretórios, valida conformidade de arquivos, testa integridade estrutural e gera relatórios claros para resolução imediata.",
      en: "Resilient scanner inspecting file trees, verifying structural consistency, auditing execution prerequisites, and outputting actionable status reports."
    },
    features: [
      { pt: "Varredura concorrente de arquivos e pastas com multithreading", en: "Concurrent multi-threaded directory and file tree inspection" },
      { pt: "Validação de integridade e detecção precoce de anomalias", en: "Integrity check and early anomaly/corruption detection" },
      { pt: "Emissão de logs padronizados com níveis de severidade (INFO, WARN, ERROR)", en: "Standardized logging output categorized by severity levels" },
      { pt: "Facilidade de execução via linha de comando (CLI) ou acoplado como módulo", en: "Standalone CLI execution or modular integration into bigger pipelines" }
    ],
    architecture: {
      pt: "Python puro com bibliotecas nativas de sistema de arquivos e concorrência, dispensando dependências pesadas e garantindo execução ultrarrápida.",
      en: "Pure Python core with standard library concurrency and file system hooks, ensuring zero heavy dependencies and instant execution."
    }
  }
];

// --- 3. TERMINAL SNIPPETS & SIMULATOR ---
const terminalSnippets = {
  health: {
    tabName: "health_check.py",
    filePath: "api/v2/telemetry/health_check.py",
    code: `<span class="text-secondary">from</span> fastapi <span class="text-secondary">import</span> FastAPI, Depends
<span class="text-secondary">from</span> app.core.telemetry <span class="text-secondary">import</span> SystemMonitor

app = FastAPI(title=<span class="text-primary-fixed">"RubensAlves.TelemetryRouter"</span>)

<span class="text-secondary">@app.get</span>(<span class="text-primary-fixed">"/health"</span>, status_code=200)
<span class="text-secondary">async def</span> <span class="text-primary">probe_cluster_state</span>(monitor = Depends(SystemMonitor)):
    <span class="text-outline"># Real-time backend &amp; AI worker telemetry</span>
    <span class="text-secondary">return await</span> monitor.get_active_runtime_metrics()`
  },
  agent: {
    tabName: "clinic_agent.py",
    filePath: "agents/clinicas/triage_workflow.py",
    code: `<span class="text-secondary">from</span> langchain_core.prompts <span class="text-secondary">import</span> ChatPromptTemplate
<span class="text-secondary">from</span> app.agents.tools <span class="text-secondary">import</span> check_schedule, book_slot

<span class="text-secondary">async def</span> <span class="text-primary">dispatch_clinic_triage</span>(patient_msg: str, contact_id: str):
    chain = clinic_triage_prompt | llm.bind_tools([check_schedule, book_slot])
    response = <span class="text-secondary">await</span> chain.ainvoke({<span class="text-primary-fixed">"input"</span>: patient_msg})
    <span class="text-secondary">return</span> {<span class="text-primary-fixed">"status"</span>: <span class="text-primary-container">"DISPATCHED"</span>, <span class="text-primary-fixed">"action"</span>: response.tool_calls}`
  },
  miner: {
    tabName: "lead_miner.py",
    filePath: "pipelines/scraping/async_maps_miner.py",
    code: `<span class="text-secondary">import</span> asyncio
<span class="text-secondary">from</span> playwright.async_api <span class="text-secondary">import</span> async_playwright
<span class="text-secondary">from</span> app.schemas <span class="text-secondary">import</span> BusinessLead

<span class="text-secondary">async def</span> <span class="text-primary">harvest_cep_corridor</span>(query_niche: str, cep_prefix: str) -&gt; list[BusinessLead]:
    <span class="text-secondary">async with</span> async_playwright() <span class="text-secondary">as</span> p:
        browser = <span class="text-secondary">await</span> p.chromium.launch(headless=True)
        leads = <span class="text-secondary">await</span> scrape_batch_records(browser, query_niche, cep_prefix)
        <span class="text-secondary">return</span> [BusinessLead(**item) <span class="text-secondary">for</span> item <span class="text-secondary">in</span> leads]`
  }
};

let currentLang = localStorage.getItem("portfolio_lang") || "pt";
let currentTab = "health";

// --- 4. CORE CONTROLLER FUNCTIONS ---

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update button classes
  const btnPt = document.getElementById("lang-btn-pt");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnPt && btnEn) {
    if (lang === "pt") {
      btnPt.className = "px-2 py-0.5 rounded text-xs font-mono font-bold bg-primary-container text-on-primary-container shadow-sm transition-all";
      btnEn.className = "px-2 py-0.5 rounded text-xs font-mono text-outline hover:text-on-surface transition-all";
    } else {
      btnEn.className = "px-2 py-0.5 rounded text-xs font-mono font-bold bg-primary-container text-on-primary-container shadow-sm transition-all";
      btnPt.className = "px-2 py-0.5 rounded text-xs font-mono text-outline hover:text-on-surface transition-all";
    }
  }

  // Update standard i18n text nodes
  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  const phElements = document.querySelectorAll("[data-i18n-ph]");
  phElements.forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Render projects cards with current language
  renderProjects();
}

function toggleLanguage() {
  const nextLang = currentLang === "pt" ? "en" : "pt";
  setLanguage(nextLang);
}

// Render Project Bento Cards
let currentFilter = "all";

function renderProjects() {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = currentFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === currentFilter);

  container.innerHTML = filtered.map(p => {
    const title = p.title[currentLang];
    const category = p.categoryLabel[currentLang];
    const desc = p.shortDesc[currentLang];
    const viewBtn = translations[currentLang].btn_view_details;

    return `
      <div class="project-card bg-surface-container-low rounded-xl p-6 border-micro flex flex-col justify-between group relative overflow-hidden" data-project-id="${p.id}">
        <!-- Top subtle accent light -->
        <div class="absolute -right-12 -top-12 w-32 h-32 bg-primary-container/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary-container/10 transition-all"></div>
        
        <div>
          <!-- Header tags -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-primary-container">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              ${category}
            </span>
            <span class="font-mono text-xs text-outline px-2 py-0.5 rounded bg-surface-container border border-surface-container-high">${p.version}</span>
          </div>

          <!-- Project Title -->
          <h3 class="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors mb-2">
            ${title}
          </h3>

          <!-- Directory Tag -->
          <div class="flex items-center gap-1.5 text-xs font-mono text-outline mb-3">
            <span class="material-symbols-outlined text-[14px]">folder</span>
            <span class="truncate">${p.folder}</span>
          </div>

          <!-- Description -->
          <p class="text-sm text-on-surface-variant leading-relaxed mb-4">
            ${desc}
          </p>

          <!-- Tech Pills -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.techBadges.slice(0, 5).map(tag => `
              <span class="tech-pill">${tag}</span>
            `).join('')}
            ${p.techBadges.length > 5 ? `<span class="tech-pill text-outline">+${p.techBadges.length - 5}</span>` : ''}
          </div>
        </div>

        <div>
          <!-- Telemetry mini-metrics -->
          <div class="grid grid-cols-3 gap-2 p-2.5 rounded bg-surface-container-lowest border border-surface-container-high mb-4">
            ${p.metrics.map(m => `
              <div class="flex flex-col text-center">
                <span class="font-mono text-xs font-bold text-primary-fixed truncate">${m.val}</span>
                <span class="text-[10px] text-outline truncate">${m.label[currentLang]}</span>
              </div>
            `).join('')}
          </div>

          <!-- Inspect Button -->
          <button 
            type="button"
            onclick="openProjectModal('${p.id}')"
            class="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-mono text-xs font-semibold transition-all border border-surface-container-high group-hover:border-primary-container/40">
            <span>${viewBtn}</span>
            <span class="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function setProjectFilter(cat) {
  currentFilter = cat;
  
  // Update filter buttons
  const buttons = document.querySelectorAll(".project-filter-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-filter") === cat) {
      btn.className = "project-filter-btn px-3 py-1.5 rounded font-mono text-xs font-semibold bg-primary-container text-on-primary-container transition-all shadow-sm";
    } else {
      btn.className = "project-filter-btn px-3 py-1.5 rounded font-mono text-xs text-outline hover:text-on-surface bg-surface-container-low hover:bg-surface-container transition-all";
    }
  });

  renderProjects();
}

// Project Modal Handler
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-body");
  if (!modal || !modalContent) return;

  const t = translations[currentLang];

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between pb-4 border-b border-surface-container-high">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-mono text-xs uppercase px-2 py-0.5 rounded bg-primary-container/15 text-primary-container font-semibold">
            ${project.categoryLabel[currentLang]}
          </span>
          <span class="font-mono text-xs text-outline">${project.version}</span>
          <span class="font-mono text-xs text-secondary">• ${project.statusBadge[currentLang]}</span>
        </div>
        <h2 class="text-2xl font-bold text-on-surface">${project.title[currentLang]}</h2>
        <div class="flex items-center gap-1.5 font-mono text-xs text-outline mt-1">
          <span class="material-symbols-outlined text-[14px]">folder_open</span>
          <span>${project.folder}</span>
        </div>
      </div>
      <button onclick="closeProjectModal()" class="p-1.5 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="${t.modal_close}">
        <span class="material-symbols-outlined text-2xl">close</span>
      </button>
    </div>

    <!-- Modal Body Content -->
    <div class="py-5 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
      
      <!-- Metrics Bar -->
      <div class="grid grid-cols-3 gap-3 p-3 rounded-lg bg-surface-container-lowest border border-surface-container-high">
        ${project.metrics.map(m => `
          <div class="text-center">
            <div class="font-mono text-base font-bold text-primary-container">${m.val}</div>
            <div class="text-xs text-outline">${m.label[currentLang]}</div>
          </div>
        `).join('')}
      </div>

      <!-- Problem & Context -->
      <div>
        <h4 class="font-mono text-xs uppercase text-primary-fixed tracking-wider font-semibold mb-1.5 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">report_problem</span>
          ${t.modal_problem}
        </h4>
        <p class="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-3.5 rounded-lg border border-surface-container-high">
          ${project.problem[currentLang]}
        </p>
      </div>

      <!-- Solution -->
      <div>
        <h4 class="font-mono text-xs uppercase text-secondary tracking-wider font-semibold mb-1.5 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">psychology</span>
          ${t.modal_solution}
        </h4>
        <p class="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-3.5 rounded-lg border border-surface-container-high">
          ${project.solution[currentLang]}
        </p>
      </div>

      <!-- Key Features -->
      <div>
        <h4 class="font-mono text-xs uppercase text-on-surface tracking-wider font-semibold mb-2 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
          ${t.modal_key_features}
        </h4>
        <ul class="space-y-2">
          ${project.features.map(f => `
            <li class="flex items-start gap-2.5 text-sm text-on-surface-variant">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-container mt-2 flex-shrink-0"></span>
              <span>${f[currentLang]}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Architecture -->
      <div>
        <h4 class="font-mono text-xs uppercase text-outline tracking-wider font-semibold mb-1.5 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">account_tree</span>
          ${t.modal_architecture}
        </h4>
        <p class="text-xs font-mono text-on-surface-variant bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high leading-relaxed">
          ${project.architecture[currentLang]}
        </p>
      </div>

      <!-- Tech Stack -->
      <div>
        <h4 class="font-mono text-xs uppercase text-outline tracking-wider font-semibold mb-2">Technologies &amp; Libraries</h4>
        <div class="flex flex-wrap gap-2">
          ${project.techBadges.map(b => `
            <span class="tech-pill tech-pill-primary">${b}</span>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="pt-4 border-t border-surface-container-high flex flex-wrap items-center justify-between gap-3">
      <div class="text-xs font-mono text-outline">
        <span>Repo:</span> <code class="text-on-surface">./${project.folder}</code>
      </div>
      <div class="flex items-center gap-2">
        <a href="#contact" onclick="closeProjectModal()" class="px-4 py-2 rounded bg-primary-container text-on-primary-container font-mono text-xs font-bold hover:bg-primary-fixed-dim transition-all shadow-sm">
          ${t.hero_btn_contact}
        </a>
        <button onclick="closeProjectModal()" class="px-3 py-2 rounded bg-surface-container-high hover:bg-surface-variant font-mono text-xs text-on-surface transition-all">
          ${t.modal_close}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// --- 5. TERMINAL SIMULATOR LOGIC ---

function switchTerminalTab(tabKey) {
  currentTab = tabKey;
  const snippet = terminalSnippets[tabKey];
  if (!snippet) return;

  // Update tabs visual state
  ["health", "agent", "miner"].forEach(k => {
    const tabEl = document.getElementById(`term-tab-${k}`);
    if (tabEl) {
      if (k === tabKey) {
        tabEl.className = "px-3 py-1 text-xs font-mono font-medium rounded-t bg-surface-container-lowest text-primary-container border-b-2 border-primary-container transition-all";
      } else {
        tabEl.className = "px-3 py-1 text-xs font-mono text-outline hover:text-on-surface transition-all";
      }
    }
  });

  const pathEl = document.getElementById("term-file-path");
  const codeEl = document.getElementById("term-code-body");
  if (pathEl) pathEl.textContent = snippet.filePath;
  if (codeEl) codeEl.innerHTML = snippet.code;
}

function runTerminalSimulation() {
  const btn = document.getElementById("term-run-btn");
  const outputBox = document.getElementById("term-output-box");
  const latencyDisplay = document.getElementById("term-latency-display");
  const jsonOutput = document.getElementById("term-json-code");
  const t = translations[currentLang];

  if (!btn || !outputBox || !jsonOutput) return;

  btn.disabled = true;
  btn.innerHTML = `<span class="material-symbols-outlined text-[14px] animate-spin">refresh</span><span>${t.term_running}</span>`;

  // Simulate network latency & computation
  const simulatedLatency = (Math.random() * (16 - 6) + 6).toFixed(1);

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `<span class="material-symbols-outlined text-[14px]">play_arrow</span><span>${t.term_run_btn}</span>`;

    if (latencyDisplay) {
      latencyDisplay.textContent = `${t.term_response_time} ${simulatedLatency}ms`;
    }

    let payload = {};
    if (currentTab === "health") {
      payload = {
        status: "healthy",
        service: "rubens-telemetry-engine",
        version: "3.12-async",
        uptime_sla: "99.99%",
        active_routines: 48,
        latency_p99: `${simulatedLatency}ms`,
        cache_hit_ratio: 0.992
      };
    } else if (currentTab === "agent") {
      payload = {
        status: "completed",
        agent: "ClinicasTriageEngine",
        intent: "agendamento_consulta",
        action: "check_schedule_and_confirm",
        selected_slot: "2026-10-02T14:30:00-03:00",
        hallucination_check: "passed",
        execution_time: `${simulatedLatency}ms`
      };
    } else {
      payload = {
        status: "streaming",
        pipeline: "MapsLeads_AsyncWorker",
        batch_size: 250,
        records_sanitized: 248,
        geo_zone: "Nordeste/BR",
        crm_ready: true,
        execution_time: `${simulatedLatency}ms`
      };
    }

    jsonOutput.textContent = JSON.stringify(payload, null, 2);
  }, 450);
}

// --- 6. DISPATCH FORM HANDLER ---

function handleDispatchSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("portfolio-contact-form");
  const submitBtn = document.getElementById("dispatch-submit-btn");
  const statusOverlay = document.getElementById("dispatch-success-overlay");
  const t = translations[currentLang];

  if (!form || !submitBtn) return;

  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="material-symbols-outlined text-[16px] animate-spin">refresh</span>
    <span>${t.contact_sending}</span>
  `;

  // Simulate network handshake sequence
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;

    if (statusOverlay) {
      statusOverlay.classList.remove("hidden");
      statusOverlay.classList.add("flex");
    }
  }, 1200);
}

function resetDispatchForm() {
  const form = document.getElementById("portfolio-contact-form");
  const statusOverlay = document.getElementById("dispatch-success-overlay");
  if (form) form.reset();
  if (statusOverlay) {
    statusOverlay.classList.add("hidden");
    statusOverlay.classList.remove("flex");
  }
}

function triggerMailtoFallback() {
  const name = document.getElementById("contact-name")?.value || "";
  const email = document.getElementById("contact-email")?.value || "";
  const subjectVal = document.getElementById("contact-subject")?.value || "Contato via Portfólio";
  const message = document.getElementById("contact-message")?.value || "";

  const mailtoLink = `mailto:rubensalves.contato@gmail.com?subject=${encodeURIComponent(`[Portfólio] ${subjectVal}`)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)}`;
  window.location.href = mailtoLink;
}

// --- 7. CLIPBOARD HELPER & TOAST ---

function copyToClipboard(text, noticeText) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(noticeText || translations[currentLang].copied_toast);
  }).catch(() => {
    // Fallback
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(noticeText || translations[currentLang].copied_toast);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  menu.classList.toggle("hidden");
}

// Keyboard shortcuts (Esc to close modal)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// --- 8. INITIALIZATION ON DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  switchTerminalTab("health");
});
