/**
 * ========================================================
 * DESIGN SYSTEM: CREATIVE PULSE
 * Engine: i18n Bilíngue, Vitrine de Projetos (Negócio vs Técnico),
 * Galeria Modal / Lightbox e Ação Direta de WhatsApp
 * Copywriting Oficial: 'Copywriting Portifólio.md'
 * Autor: Rubens Cardoso (Rubens Alves Ramos Cardoso)
 * ========================================================
 */

// --- 1. DICIONÁRIO DE TRADUÇÃO (PT / EN) ---
const translations = {
  pt: {
    // Topo & Identidade
    badge_available: "Disponível para Projetos",
    nav_pain: "Dores",
    nav_solutions: "Soluções",
    nav_projects: "Cases Reais",
    nav_about: "Quem Sou Eu",
    nav_process: "Como Trabalho",
    nav_contact: "Contato",
    btn_whatsapp_nav: "Diagnóstico Rápido",
    
    // 1. Dobra Principal (Hero Section)
    hero_eyebrow: "Engenharia de Automação, Dados & Inteligência Artificial Aplicada",
    hero_headline: "Sua equipe deveria estar <span class=\"title-accent\">gerando receita</span>, não copiando e colando dados entre sistemas.",
    hero_subhead: "Eu desenvolvo automações sob medida, integrações e agentes inteligentes em Python que eliminam o trabalho manual, conectam softwares isolados e devolvem horas produtivas para a sua operação — com precisão cirúrgica e zero fadiga humana.",
    hero_btn_diagnostic: "Diagnosticar Gargalos da Minha Operação",
    hero_btn_projects: "Ver Projetos Reais ↓",
    hero_pill_1: "Foco em ROI e Redução de Custos",
    hero_pill_2: "Automações Defensivas em Python",
    hero_pill_3: "Operação 24/7 sem Fadiga Humana",

    // Card Pessoal Lateral
    hero_card_name: "Rubens Cardoso",
    hero_card_role: "Engenharia de Automação & IA Aplicada",
    hero_card_loc: "Petrolina / PE • Atendimento Brasil",
    hero_card_quote: "“Não programo por vaidade técnica. Cada automação ou agente que construo tem um único objetivo: poupar o tempo da sua equipe, reduzir custos operacionais e fazer seu negócio faturar mais.”",
    hero_card_adm: "Formação em Administração <span class=\"accent-paren\">(</span>Univasf<span class=\"accent-paren\">)</span> + Engenharia de IA",
    hero_card_adm_sub: "Mentalidade de processo, fluxo de caixa e ROI",

    // 2. Seção de Conexão (Identificação da Dor)
    sec_pain_tag: "[ IDENTIFICAÇÃO DE GARGALOS OPERACIONAIS ]",
    sec_pain_title: "O crescimento da sua empresa esbarra na <span class=\"title-accent\">lentidão dos seus processos</span>?",
    sec_pain_desc: "Você conhece a sua operação melhor do que ninguém. Você sabe exatamente onde o tempo é desperdiçado todos os dias, mas os softwares de prateleira não resolvem o problema específico do seu negócio. Se você lidera uma equipe ou gere uma empresa em crescimento, provavelmente convive com estes cenários:",
    
    pain_1_title: "Sistemas que não se conversam",
    pain_1_desc: "Você usa um ERP legado, um CRM e planilhas, mas o elo de ligação entre eles ainda é um funcionário digitando tudo manualmente.",
    
    pain_2_title: "Talentos caros fazendo trabalho de robô",
    pain_2_desc: "Profissionais estratégicos gastando horas do dia baixando relatórios, preenchendo cadastros, checando status ou validando listas.",
    
    pain_3_title: "Erros por fadiga e retrabalho",
    pain_3_desc: "Um número digitado errado, um filtro esquecido ou um lead que demorou para ser atendido custam caro no fim do mês.",
    
    pain_4_title: "Falta de escala",
    pain_4_desc: "Para dobrar a operação hoje, você precisaria dobrar o número de funcionários operacionais, corroendo sua margem de lucro.",
    
    pain_punchline: "Você não precisa trocar todo o sistema da sua empresa. Você precisa de inteligência conectando e automatizando o que você já tem.",

    // 3. O Que Eu Faço (Competências Traduzidas em Soluções)
    sec_sol_tag: "[ COMPETÊNCIAS TRADUZIDAS EM SOLUÇÕES ]",
    sec_sol_title: "Tecnologia moldada à regra do seu negócio <span class=\"title-accent\">(e não o contrário)</span>",
    sec_sol_desc: "Não vendo pacotes engessados. Eu entro na sua operação, entendo o fluxo de trabalho e construo a solução exata em código para resolver o seu problema em 4 frentes principais:",

    sol_1_tag: "#01 FLUXOS & PROCESSOS",
    sol_1_title: "Automação de Processos e Fluxos de Trabalho (RPA Web & Desktop)",
    sol_1_desc: "Transformo tarefas que levam horas em rotinas que rodam sozinhas em minutos. Mesmo que o seu sistema seja antigo, lento, cheio de telas ou não possua suporte a integrações oficiais, meus robôs navegam na interface exatamente como um humano faria — só que 10x mais rápido e 24 horas por dia.",
    sol_1_benefit: "10x mais rápido que operação manual • Operação contínua 24/7.",

    sol_2_tag: "#02 INTEGRAÇÃO DE SISTEMAS",
    sol_2_title: "Integração de Sistemas e Arquitetura de Fluxos",
    sol_2_desc: "Faço seus softwares conversarem em tempo real. Quando algo acontece no seu e-mail ou WhatsApp, seu CRM, agenda, financeiro e sistema interno são atualizados automaticamente. Fim das planilhas intermediárias e da perda de informações entre setores.",
    sol_2_benefit: "Dados integrados em tempo real • Fim de planilhas intermediárias.",

    sol_3_tag: "#03 EXTRAÇÃO & TRATAMENTO DE DADOS",
    sol_3_title: "Coleta, Mineração e Tratamento Inteligente de Dados (Web Scraping & Data)",
    sol_3_desc: "Precisa monitorar preços, extrair bases de leads qualificados ou consolidar milhares de registros espalhados na web ou em portais fechados? Construo extratores de alta performance que coletam, limpam, padronizam e entregam os dados prontos para a sua tomada de decisão.",
    sol_3_benefit: "Milhares de registros limpos, padronizados e prontos para decisão.",

    sol_4_tag: "#04 INTELIGÊNCIA ARTIFICIAL APLICADA",
    sol_4_title: "Inteligência Artificial Aplicada à Operação",
    sol_4_desc: "Sem \"hype\" vazio: aplico IA onde ela gera retorno financeiro. Desde agentes autônomos de atendimento que ouvem áudios, agendam horários e geram cobranças no PIX, até triagem inteligente de documentos e e-mails técnicos complexos para abertura automática de ordens de serviço.",
    sol_4_benefit: "Retorno financeiro real no caixa • Triagem e atendimento 24/7.",

    // 4. Prova Real (Portfólio de Projetos / Estudos de Caso)
    sec_proj_tag: "[ PROVA REAL // ESTUDOS DE CASO ]",
    sec_proj_title: "Engenharia na prática: <span class=\"title-accent\">Problemas reais que já resolvi</span>",
    sec_proj_desc: "Veja como transformei gargalos críticos de diferentes setores em operações autônomas e escaláveis. Clique nas imagens para abrir os diagramas e fluxos completos:",
    
    tab_business: "💼 O que resolve <span class=\"accent-paren font-bold\">(</span>Negócio<span class=\"accent-paren font-bold\">)</span>",
    tab_tech: "⚙️ Como funciona <span class=\"accent-paren font-bold\">(</span>Técnico<span class=\"accent-paren font-bold\">)</span>",
    btn_view_gallery: "Ver Detalhes & Arquitetura",
    sec_comp_title: "Outros Projetos & <span class=\"title-accent\">Utilitários de Engenharia</span>",

    // 5. Quem Sou Eu & Meus Pilares
    sec_about_tag: "[ AUTORIDADE E CONFIANÇA // QUEM SOU EU ]",
    sec_about_title: "Muito prazer, sou <span class=\"title-accent\">Rubens Cardoso</span>.",
    sec_about_mission: "Minha missão é construir a ponte entre a estratégia do seu negócio e o poder de execução da tecnologia.",
    sec_about_p1: "Muitos programadores entendem de código, mas não entendem como uma empresa funciona. Por outro lado, muitos consultores entendem de processos, mas não sabem construir a solução técnica. <strong>Meu trabalho une esses dois mundos.</strong>",
    sec_about_p2: "Com background em Administração e atuação direta em Engenharia de Software, Automação e Ciência de Dados, eu olho para a sua operação com a cabeça de um gestor: buscando <strong>retorno sobre o investimento (ROI), redução de custos e eficiência operacional</strong>. Quando escrevo uma linha de código em Python, o objetivo final nunca é \"fazer um programa bonito\", mas sim fazer a sua empresa rodar melhor, mais rápido e com menos custo.",
    
    sec_pillars_title: "Meus 4 Pilares Inegociáveis de Trabalho:",
    pillar_1_title: "Resultado Real no Caixa e na Rotina",
    pillar_1_desc: "Só faz sentido automatizar se for para economizar tempo real, reduzir custos ou destravar receita.",
    pillar_2_title: "Continuidade e Resiliência",
    pillar_2_desc: "Sistemas reais falham, a internet oscila e layouts mudam. Construo automações defensivas, preparadas para lidar com exceções sem travar a sua operação no meio do dia.",
    pillar_3_title: "Qualidade de Engenharia",
    pillar_3_desc: "Não faço \"gambiarras\" temporárias. Entrego arquiteturas profissionais (APIs, microsserviços em Docker, bancos de dados estruturados e logs de auditoria em tempo real).",
    pillar_4_title: "Segurança e Soberania de Dados",
    pillar_4_desc: "Suas credenciais, regras de negócio e dados de clientes trafegam em ambientes isolados, seguros e sob total controle da sua empresa.",

    // 6. Como Trabalhamos Juntos (Redução de Fricção)
    sec_proc_tag: "[ REDUÇÃO DE FRICÇÃO // PROCESSO ]",
    sec_proc_title: "Como transformamos o seu gargalo em solução em <span class=\"title-accent\">4 passos</span>:",
    sec_proc_desc: "Contratar uma solução personalizada não vai dar \"mais trabalho\" para a sua equipe. Veja como funciona:",
    step1_num: "#01",
    step1_title: "Diagnóstico Operacional",
    step1_desc: "Conversamos rapidamente sobre o processo atual. Você me mostra onde perde tempo, quais sistemas utiliza e qual resultado deseja alcançar.",
    step2_num: "#02",
    step2_title: "Desenho da Arquitetura",
    step2_desc: "Eu mapeio toda a lógica técnica e apresento uma proposta clara do que será construído, prazos e o impacto esperado na sua rotina.",
    step3_num: "#03",
    step3_title: "Desenvolvimento & Testes de Estresse",
    step3_desc: "Construo a solução sem interromper o dia a dia da sua equipe, testando cada cenário de erro para garantir estabilidade total.",
    step4_num: "#04",
    step4_title: "Implantação e Operação Assistida",
    step4_desc: "Colocamos a automação para rodar em produção (na nuvem ou nos seus servidores) com monitoramento ativo e suporte para garantir continuidade.",

    // 7. Rodapé de Conversão (CTA Final)
    sec_contact_tag: "[ CALL TO ACTION FINAL // DIAGNÓSTICO ]",
    sec_contact_title: "Qual processo da sua empresa você gostaria de <span class=\"title-accent\">nunca mais ter que fazer manualmente</span>?",
    sec_contact_desc: "Não importa o seu setor ou quão específico seja o sistema que você usa hoje. Se existe um padrão lógico, uma tarefa repetitiva ou dados que precisam ser cruzados, <strong>nós podemos automatizar</strong>.",
    contact_proposal: "Vamos conversar por 15 minutos? Me conte qual é o maior gargalo da sua equipe hoje e eu te digo exatamente como a tecnologia pode resolver.",
    contact_btn_whatsapp_big: "Falar Comigo no WhatsApp Agora",
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
    badge_available: "Available for Projects",
    nav_pain: "Bottlenecks",
    nav_solutions: "Solutions",
    nav_projects: "Case Studies",
    nav_about: "About Me",
    nav_process: "How I Work",
    nav_contact: "Contact",
    btn_whatsapp_nav: "Quick Diagnostic",
    
    // 1. Hero Section
    hero_eyebrow: "Automation Engineering, Data & Applied Artificial Intelligence",
    hero_headline: "Your team should be <span class=\"title-accent\">generating revenue</span>, not copying and pasting data between systems.",
    hero_subhead: "I engineer bespoke automations, integrations, and intelligent Python agents that eliminate manual grunt work, connect disconnected software, and return productive hours to your business — with surgical accuracy and zero human fatigue.",
    hero_btn_diagnostic: "Diagnose My Operational Bottlenecks",
    hero_btn_projects: "Explore Real Projects ↓",
    hero_pill_1: "Focus on ROI & Cost Reduction",
    hero_pill_2: "Defensive Python Automations",
    hero_pill_3: "24/7 Operation without Fatigue",

    // Personal Hero Card
    hero_card_name: "Rubens Cardoso",
    hero_card_role: "Automation & Applied AI Engineer",
    hero_card_loc: "Petrolina / PE • Serving clients worldwide",
    hero_card_quote: "“I don't code for technical vanity. Every automation or agent I engineer serves one clear purpose: saving your team's time, slashing operational costs, and boosting real revenue.”",
    hero_card_adm: "B.S. in Business Administration <span class=\"accent-paren\">(</span>Univasf<span class=\"accent-paren\">)</span> + AI Engineering",
    hero_card_adm_sub: "Process modeling, cash flow analysis, and ROI mindset",

    // 2. Pain Section
    sec_pain_tag: "[ OPERATIONAL BOTTLENECKS DIAGNOSTIC ]",
    sec_pain_title: "Is your company's growth held back by <span class=\"title-accent\">slow operational processes</span>?",
    sec_pain_desc: "You understand your day-to-day operations better than anyone. You know exactly where time is burned daily, but off-the-shelf software never fits your specific business rules. If you lead a growing team, you probably face these daily friction points:",
    
    pain_1_title: "Disconnected software silos",
    pain_1_desc: "You run a legacy ERP, a CRM, and spreadsheets, yet the actual link between them is an employee manually re-typing records.",
    
    pain_2_title: "Expensive talent doing robot work",
    pain_2_desc: "High-value professionals spending hours exporting reports, filling registries, checking statuses, or validating lists.",
    
    pain_3_title: "Errors caused by fatigue & rework",
    pain_3_desc: "A mistyped account number, a forgotten filter, or a delayed lead reply costs real money at month's end.",
    
    pain_4_title: "Lack of operational scalability",
    pain_4_desc: "To double output today, you would have to double headcount, eating away your profit margins.",
    
    pain_punchline: "You don't need to replace your company's entire software stack. You need intelligence connecting and automating what you already have.",

    // 3. Solutions Section
    sec_sol_tag: "[ CAPABILITIES TRANSLATED INTO SOLUTIONS ]",
    sec_sol_title: "Technology shaped around your business rules <span class=\"title-accent\">(not the other way around)</span>",
    sec_sol_desc: "I don't sell rigid off-the-shelf bundles. I study your operation, map the workflow, and engineer custom code to solve the core problem across 4 main areas:",

    sol_1_tag: "#01 WORKFLOWS & RPA",
    sol_1_title: "Process Automation & Workflows (RPA Web & Desktop)",
    sol_1_desc: "Transform tasks that take hours into routines running autonomously in minutes. Even if your system is legacy, sluggish, multi-screen, or lacks APIs, my robots interact with the interface just like a human would — 10x faster, 24 hours a day.",
    sol_1_benefit: "10x faster than manual handling • 24/7 continuous execution.",

    sol_2_tag: "#02 SYSTEM INTEGRATION",
    sol_2_title: "System Integration & Workflow Architecture",
    sol_2_desc: "Enable real-time communication across your software. When an event triggers in WhatsApp or email, your CRM, calendar, billing, and internal database sync automatically. Say goodbye to intermediary spreadsheets and dropped data.",
    sol_2_benefit: "Real-time unified sync • Zero cross-department silos.",

    sol_3_tag: "#03 DATA MINING & SCRAPING",
    sol_3_title: "Intelligent Data Mining & Hygiene (Web Scraping & Data)",
    sol_3_desc: "Need to monitor market pricing, harvest qualified B2B leads, or aggregate thousands of scattered records across the web? I build high-performance data pipelines that crawl, sanitize, normalize, and deliver decision-ready datasets.",
    sol_3_benefit: "Thousands of clean records normalized for instant executive decision.",

    sol_4_tag: "#04 APPLIED AI",
    sol_4_title: "Applied Operational Artificial Intelligence",
    sol_4_desc: "No empty buzzwords: I apply AI strictly where it drives financial return. From autonomous WhatsApp agents handling voice notes, calendar bookings, and PIX billing, to smart triage of complex technical emails and work orders.",
    sol_4_benefit: "Tangible business ROI • Autonomous 24/7 triage and customer care.",

    // 4. Projects Showcase
    sec_proj_tag: "[ REAL EVIDENCE // CASE STUDIES ]",
    sec_proj_title: "Engineering in practice: <span class=\"title-accent\">Real problems I have solved</span>",
    sec_proj_desc: "Explore how I turned critical bottlenecks across various industries into resilient autonomous pipelines. Click on the diagrams to view detailed architectures:",
    
    tab_business: "💼 What it Solves <span class=\"accent-paren font-bold\">(</span>Business<span class=\"accent-paren font-bold\">)</span>",
    tab_tech: "⚙️ How it Works <span class=\"accent-paren font-bold\">(</span>Technical<span class=\"accent-paren font-bold\">)</span>",
    btn_view_gallery: "View Details & Architecture",
    sec_comp_title: "Other Projects & <span class=\"title-accent\">Engineering Utilities</span>",

    // 5. About Me & Pillars
    sec_about_tag: "[ AUTHORITY & TRUST // ABOUT ME ]",
    sec_about_title: "Nice to meet you, I'm <span class=\"title-accent\">Rubens Cardoso</span>.",
    sec_about_mission: "My mission is building the bridge between your business strategy and the execution power of technology.",
    sec_about_p1: "Many developers understand code syntax but don't grasp how businesses operate. On the other hand, many consultants understand processes but cannot engineer the technical solution. <strong>My work unites both worlds.</strong>",
    sec_about_p2: "Combining a Business Administration background with hands-on Software Engineering, Automation, and Data Science, I look at your operation through an executive lens: focusing on <strong>ROI, cost reduction, and operational throughput</strong>. When I write Python code, the goal is never technical vanity, but helping your business run smoother, faster, and cheaper.",
    
    sec_pillars_title: "My 4 Non-Negotiable Engineering Pillars:",
    pillar_1_title: "Measurable Impact on Cash Flow and Routine",
    pillar_1_desc: "Automation only makes sense if it saves tangible time, cuts real costs, or unlocks new revenue.",
    pillar_2_title: "Continuity & Defensive Resilience",
    pillar_2_desc: "Real systems fail, networks jitter, and interfaces change. I engineer defensive automations that gracefully handle edge cases without crashing operations mid-day.",
    pillar_3_title: "Professional Engineering Standards",
    pillar_3_desc: "No quick patches. I deliver enterprise-ready architectures (REST APIs, containerized Docker workers, normalized databases, and structured audit logs).",
    pillar_4_title: "Data Security & Sovereignty",
    pillar_4_desc: "Your credentials, proprietary business logic, and customer data run inside isolated environments under your company's full ownership.",

    // 6. Process Section
    sec_proc_tag: "[ FRICTIONLESS COLLABORATION // WORKFLOW ]",
    sec_proc_title: "How we turn your bottleneck into an automated solution in <span class=\"title-accent\">4 steps</span>:",
    sec_proc_desc: "Bringing in a custom solution will not burden your team. Here is how simple the process is:",
    step1_num: "#01",
    step1_title: "Operational Diagnostic",
    step1_desc: "We hold a brief discovery session. You show me where hours are lost, what tools you use, and the target outcome.",
    step2_num: "#02",
    step2_title: "Architecture Blueprint",
    step2_desc: "I map out the complete technical workflow, timeline, and projected operational impact before writing code.",
    step3_num: "#03",
    step3_title: "Engineering & Stress Testing",
    step3_desc: "I build the solution without disrupting your ongoing operations, stress-testing edge cases for maximum reliability.",
    step4_num: "#04",
    step4_title: "Deployment & Assisted Run",
    step4_desc: "We deploy the automation to production (cloud or internal servers) with active monitoring and dedicated support.",

    // 7. Contact Section
    sec_contact_tag: "[ FINAL CALL TO ACTION // NEXT STEP ]",
    sec_contact_title: "Which process in your company would you like to <span class=\"title-accent\">never do manually again</span>?",
    sec_contact_desc: "Regardless of your industry or how proprietary your current system is: if there is a logical pattern, repetitive clicks, or data to cross-reference, <strong>we can automate it</strong>.",
    contact_proposal: "Let's talk for 15 minutes. Tell me about your team's biggest operational bottleneck and I will show you exactly how technology solves it.",
    contact_btn_whatsapp_big: "Talk with Me on WhatsApp Now",
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

// --- 2. DADOS DETALHADOS DOS 4 CASES REAIS (COPYWRITING PORTIFÓLIO) ---
const featuredProjects = [
  {
    id: "tescan",
    indexNum: "#01",
    categoryEyebrow: { 
      pt: "Setor Industrial / Científico • RPA & Triagem de OS", 
      en: "Industrial / Scientific Sector • RPA & Ticket Triage" 
    },
    metricBadge: { 
      pt: "-90% Tempo Operacional (15 min → 1,5 min)", 
      en: "-90% Operational Time (15 min → 1.5 min)" 
    },
    title: {
      pt: "Automação de Ordens de Serviço em Portal Corporativo Legado",
      en: "Automated Work Orders in Legacy Enterprise Portal"
    },
    highlight: {
      pt: "Redução de 90% no esforço manual: de 15 minutos para 1,5 minuto por chamado em equipamentos de alta complexidade.",
      en: "90% cut in manual effort: dropped from 15 min to 1.5 min per work order on high-value equipment."
    },
    mainImage: "assets/projects/tescan-capa.png",
    gallery: [
      { 
        src: "assets/projects/tescan-capa.png", 
        caption: { 
          pt: "Dashboard & Orquestrador de Triagem Automatizada de Chamados Legados", 
          en: "Automated Ticket Triage Orchestrator for Legacy Work Orders" 
        } 
      }
    ],
    business: {
      problem: {
        pt: "A equipe de suporte perdia cerca de <strong>15 minutos por chamado</strong> (25 horas a cada 100 solicitações) lendo e-mails técnicos sem padrão e navegando manualmente por um sistema web lento e burocrático para verificar garantias, cadastrar clientes e despachar engenheiros de campo.",
        en: "The support team lost roughly <strong>15 minutes per ticket</strong> (25 hours per 100 requests) reading unstructured emails and navigating a slow legacy web portal to check warranties, register clients, and dispatch field engineers."
      },
      solution: {
        pt: "Desenvolvi um microsserviço assíncrono em Python (FastAPI + Playwright) integrado ao fluxo de triagem. O robô recebe os dados do e-mail, acessa o portal legado em segundo plano, localiza o número de série do equipamento, valida o contrato, abre a Ordem de Serviço e notifica a fila de engenharia correspondente à urgência.",
        en: "Engineered an asynchronous Python microservice (FastAPI + Playwright) integrated into the triage pipeline. The worker extracts email data, queries the legacy portal in background, verifies equipment serial numbers and warranties, creates the ticket, and routes engineers based on severity."
      },
      results: [
        { pt: "Tempo operacional reduzido de 15 min para 1,5 min por chamado (-90% de esforço manual)", en: "Operational handling time dropped from 15 min to 1.5 min (-90% manual effort)" },
        { pt: "Eliminação total de erros de digitação em equipamentos de milhões de dólares", en: "Zero typing errors on mission-critical multi-million dollar equipment records" },
        { pt: "Atendimento imediato e despacho prioritário para paradas críticas", en: "Instant response dispatch for critical factory downtime alerts" }
      ]
    },
    technical: {
      stack: ["Python", "FastAPI", "Playwright Headless", "AsyncIO", "Docker", "REST Webhooks", "Robust Error Handling"],
      architecture: {
        pt: "Microsserviço conteinerizado em Docker com FastAPI assíncrono. O Playwright opera em headless com pools de workers concorrentes, tolerância a timeouts da interface legada, retentativas automáticas e disparo de webhooks com logs de auditoria.",
        en: "Containerized Docker microservice with asynchronous FastAPI. Playwright runs in headless mode with worker pools, fault-tolerant retry policies for slow legacy screens, and automated webhook triggers with structured audit logs."
      }
    }
  },

  {
    id: "dealership",
    indexNum: "#02",
    categoryEyebrow: { 
      pt: "Setor Automotivo / Concessionárias • Auditoria de Inventário", 
      en: "Automotive / Dealerships • Inventory Audit Bot" 
    },
    metricBadge: { 
      pt: "Horas → Minutos • Algoritmo Ponderado", 
      en: "Hours → Minutes • Weighted Algorithm" 
    },
    title: {
      pt: "Inteligência e Auditoria Automática de Estoque (Dealership ST Bot)",
      en: "Automated Inventory Intelligence & Audit (Dealership ST Bot)"
    },
    highlight: {
      pt: "Horas de conferência manual no sistema Dealernet convertidas em minutos com algoritmo matemático de prioridade ponderada.",
      en: "Hours of manual inventory verification in Dealernet converted into minutes via weighted algorithmic scoring."
    },
    mainImage: "assets/projects/dealership-capa.png",
    gallery: [
      { src: "assets/projects/dealership-capa.png", caption: { pt: "Capa do Sistema Dealership ST Bot", en: "Dealership ST Bot Cover" } },
      { src: "assets/projects/dealership-screen1.png", caption: { pt: "Camadas do ERP Dealernet e Seleção de Veículos", en: "Dealernet ERP Navigation & Vehicle Selection" } },
      { src: "assets/projects/dealership-relatorio.png", caption: { pt: "Planilha Gerencial Padronizada e Limpa para Decisão", en: "Sanitized Executive Inventory Spreadsheet" } }
    ],
    business: {
      problem: {
        pt: "A análise de inventário no sistema <em>Dealernet</em> exigia cliques manuais em centenas de linhas, abertura de múltiplos pop-ups e interpretação visual de ícones de status (como veículos com bloqueio, aviso e proposta ao mesmo tempo), gerando lentidão e erros de decisão por fadiga visual.",
        en: "Inventory analysis in the <em>Dealernet</em> platform demanded hundreds of manual clicks across nested pop-ups and subjective visual interpretation of status badges, resulting in severe delays and fatigue-induced stock misjudgments."
      },
      solution: {
        pt: "Criação do <em>Dealership ST Bot</em> com Python, Selenium e Pandas. O sistema navega pelas camadas ocultas da plataforma e aplica um <strong>algoritmo matemático de prioridade ponderada</strong> para cravar o status real de cada veículo sem subjetividade humana.",
        en: "Built the <em>Dealership ST Bot</em> utilizing Python, Selenium, and Pandas. The bot navigates hidden platform layers and applies a <strong>weighted mathematical priority algorithm</strong> to classify each vehicle's true status without human subjectivity."
      },
      results: [
        { pt: "Horas de checagem manual convertidas em poucos minutos automatizados", en: "Hours of manual inspection slashed to minutes of autonomous execution" },
        { pt: "Planilha diária em Excel limpa, padronizada e sem dubiedade", en: "Clean, standardized daily executive Excel report ready for management" },
        { pt: "Decisões comerciais mais ágeis para giro rápido de estoque", en: "Faster commercial decisions accelerating vehicle turnover rate" }
      ]
    },
    technical: {
      stack: ["Python", "Selenium WebDriver", "Pandas", "Dealernet ERP", "Algoritmo Ponderado", "OpenPyXL", "Data Sanitization"],
      architecture: {
        pt: "Automação defensiva orientada a objetos que decodifica matrizes de status complexas no DOM, calcula a pontuação ponderada de impedimentos via Pandas e gera relatórios formatados em Excel com alertas de estoque crítico.",
        en: "Defensive object-oriented automation decoding complex status matrices within the DOM, calculating weighted friction scores via Pandas, and emitting styled Excel workbooks."
      }
    }
  },

  {
    id: "clinicas",
    indexNum: "#03",
    categoryEyebrow: { 
      pt: "Saúde & Serviços • Agente Omnichannel com IA", 
      en: "Healthcare & Services • Omnichannel AI Agent" 
    },
    metricBadge: { 
      pt: "Atendimento 24/7 & PIX • Zero Overbooking", 
      en: "24/7 Care & Instant PIX • Zero Overbooking" 
    },
    title: {
      pt: "Operação Clínica Autônoma Omnichannel com IA",
      en: "Autonomous Omnichannel Clinical AI Agent"
    },
    highlight: {
      pt: "Atendimento 24/7 com IA de voz e texto, agendamento no Google Calendar sem risco de conflito e cobrança no PIX integrada.",
      en: "24/7 voice/text patient support, Google Calendar integration with zero double-booking, and automated PIX billing."
    },
    mainImage: "assets/projects/clinicas-diagrama.png",
    gallery: [
      { src: "assets/projects/clinicas-diagrama.png", caption: { pt: "Arquitetura Completa: WhatsApp, n8n, Chatwoot e PostgreSQL", en: "System Architecture: WhatsApp, n8n, Chatwoot & PostgreSQL" } },
      { src: "assets/projects/clinicas-capa.png", caption: { pt: "Visão Geral do Agente Clínico Inteligente", en: "Clinical Agent Overview" } },
      { src: "assets/projects/clinicas-secretaria.png", caption: { pt: "Fluxo de Confirmação & Disparos Preventivos (24h/5h/1h)", en: "Appointment Confirmations & Reminders Flow" } }
    ],
    business: {
      problem: {
        pt: "Perda de pacientes por demora no atendimento no WhatsApp, alto índice de faltas (<em>no-show</em>), sobrecarga na recepção para checar agendas e falhas no controle de pagamentos de consultas.",
        en: "Lost patient inquiries due to delayed WhatsApp replies, high <em>no-show</em> rates, overloaded receptionist staff, and revenue leakage from missing consultation payment tracking."
      },
      solution: {
        pt: "Arquitetura completa unindo IA Generativa (OpenAI), n8n, Chatwoot e banco de dados PostgreSQL. O agente inteligente atende em texto ou voz (transcrevendo áudios), calcula janelas livres no Google Calendar em tempo real sem risco de <em>overbooking</em>, gera cobranças instantâneas via PIX/Boleto (Asaas) com baixa automática no CRM e dispara lembretes preventivos (24h, 5h e 1h antes).",
        en: "End-to-end architecture unifying Generative AI (OpenAI), n8n, Chatwoot, and PostgreSQL. The agent handles text and voice notes, dynamically checks Google Calendar for available slots without double-booking, issues instant PIX/Boleto invoices (Asaas) with auto-reconciliation, and dispatches multi-stage reminders (24h, 5h, 1h)."
      },
      results: [
        { pt: "Atendimento imediato 24/7 para consultas e agendamentos", en: "Immediate 24/7 patient responsiveness without queue" },
        { pt: "Fluxo financeiro automatizado do agendamento ao pagamento PIX", en: "Automated billing pipeline from booking to verified PIX receipt" },
        { pt: "Queda drástica de faltas e transbordo humano apenas quando necessário", en: "Drastic drop in no-shows and seamless human handoff when strictly required" }
      ]
    },
    technical: {
      stack: ["n8n Orchestration", "OpenAI Whisper & GPT-4o", "Chatwoot", "PostgreSQL", "Google Calendar API", "Asaas Gateway PIX"],
      architecture: {
        pt: "Orquestração de microsserviços via n8n conectando WhatsApp Webhooks ao Chatwoot. Áudios são transcritos via Whisper, a intenção é estruturada em JSON, os horários validados contra a API do Google Calendar e os pagamentos liquidados no Asaas com webhook de confirmação.",
        en: "Microservices orchestrated in n8n routing WhatsApp webhooks through Chatwoot. Voice notes transcribed via Whisper, intents validated against Google Calendar API, and payments settled via Asaas webhooks with live PostgreSQL sync."
      }
    }
  },

  {
    id: "prospeccao",
    indexNum: "#04",
    categoryEyebrow: { 
      pt: "Comercial / B2B • Motores de Prospecção & Dados", 
      en: "Sales / B2B • Lead Scraping & Enrichment Engines" 
    },
    metricBadge: { 
      pt: "Segundos vs Horas • Milhares de Contatos", 
      en: "Seconds vs Hours • Thousands of Verified Leads" 
    },
    title: {
      pt: "Motores de Prospecção e Enriquecimento em Escala (MapsLeads + CepLeads)",
      en: "Enterprise B2B Lead Mining & Enrichment Engines (MapsLeads + CepLeads)"
    },
    highlight: {
      pt: "Coleta e enriquecimento de dados reduzidos de horas para segundos: milhares de leads higienizados entregues direto no CRM.",
      en: "Lead gathering and data hygiene cut from hours to seconds: thousands of verified B2B leads piped directly into CRM."
    },
    mainImage: "assets/projects/mapsleads-fluxo.png",
    gallery: [
      { src: "assets/projects/mapsleads-fluxo.png", caption: { pt: "Fluxo de Extração e Bypass de Bloqueios no MapsLeads", en: "Extraction & Anti-Block Pipeline in MapsLeads" } },
      { src: "assets/projects/mapsleads-capa.png", caption: { pt: "Capa do Sistema MapsLeads", en: "MapsLeads Engine Overview" } },
      { src: "assets/projects/cepleads-capa.png", caption: { pt: "Enriquecimento Demográfico e por CEP (CepLeads)", en: "Demographic & Postal Code Enrichment (CepLeads)" } },
      { src: "assets/projects/mapsleads-sheets.png", caption: { pt: "Bases Limpas e Higienizadas Prontas para Vendas", en: "Sales-Ready Sanitized Spreadsheet Outputs" } }
    ],
    business: {
      problem: {
        pt: "Equipes comerciais gastavam horas fazendo buscas manuais no Google Maps ou aplicando filtros repetitivos de renda e idade em plataformas de dados (como <em>CepLeads</em>), baixando planilhas e limpando contatos duplicados na mão — impossibilitando a escala.",
        en: "Sales reps wasted endless hours manually copying prospects from Google Maps or wrestling with repetitive filters on regional portals, downloading fragmented CSVs and cleaning invalid phones manually — stalling pipeline growth."
      },
      solution: {
        pt: "Transformei processos manuais de prospecção em APIs próprias em Python (Flask + Selenium Headless em containers Docker) orquestradas via n8n. Com um único comando, os robôs varrem milhares de registros em segundo plano, aplicam filtros demográficos, higienizam telefones e entregam os leads validados direto no CRM, Google Sheets ou Telegram.",
        en: "Transformed manual prospecting into proprietary Python APIs (Flask + Selenium Headless inside Docker) orchestrated via n8n. With a single trigger, headless workers scan thousands of listings, apply demographic filters, sanitize phone numbers, and feed validated leads into CRMs, Google Sheets, or Telegram."
      },
      results: [
        { pt: "Coleta de dados reduzida de horas de digitação para segundos automatizados", en: "Data collection turnaround shrunk from hours to seconds" },
        { pt: "Milhares de leads comerciais higienizados com telefones validados", en: "Thousands of verified B2B leads delivered with validated WhatsApp numbers" },
        { pt: "Time de vendas 100% concentrado em fechar negócios, não em garimpar dados", en: "Sales team freed to focus 100% on closing conversations instead of data entry" }
      ]
    },
    technical: {
      stack: ["Python Flask", "Selenium Headless", "Docker Containers", "n8n", "Pandas Data Cleaning", "Google Sheets API", "Telegram Bot API"],
      architecture: {
        pt: "APIs RESTful em Flask executadas em containers Docker isolados com instâncias do Chromium em modo headless. Técnicas anti-bloqueio avançadas (rotação de headers, jitter de interação), normalização de dados com Pandas e distribuição para Google Sheets API e Webhooks.",
        en: "RESTful Flask microservices deployed in isolated Docker containers with headless Chromium instances. Anti-detection measures (header randomization, dynamic scroll jitters), Pandas data sanitization, and output dispatch via Google Sheets API and Telegram bots."
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
    id: "diagbackend",
    indexNum: "#06",
    categoryEyebrow: { pt: "Backend • Diagnóstico CLI & Integridade", en: "Backend • CLI Diagnostics & Integrity" },
    title: {
      pt: "Scanner de Diagnóstico & Integridade de Pipelines Backend",
      en: "Backend Pipeline Diagnostics & Data Integrity Scanner"
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
  tescan: "business",
  dealership: "business",
  clinicas: "business",
  prospeccao: "business"
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
    const metric = p.metricBadge ? p.metricBadge[currentLang] : "";

    return `
      <div class="pulse-card pulse-card-accent p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <!-- Header do Card: Categoria com traço + Selo de Métrica em Destaque -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span class="eyebrow-pulse">${category}</span>
            <span class="text-xs text-[#8E8E93] font-mono">${p.indexNum}</span>
          </div>

          <!-- Métrica em Destaque Visual (Selo Numérico) -->
          ${metric ? `
            <div class="mb-3.5">
              <span class="metric-pill">
                <span class="material-symbols-outlined text-[16px]">trending_up</span>
                <span>${metric}</span>
              </span>
            </div>
          ` : ''}

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
                ${p.gallery.length} ${currentLang === 'pt' ? 'imagem(ns)' : 'image(s)'}
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
                    ${currentLang === 'pt' ? 'O Desafio / Gargalo' : 'The Challenge'}
                  </h4>
                  <p class="text-sm text-[#D9D9D9] leading-relaxed">${p.business.problem[currentLang]}</p>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">build</span>
                    ${currentLang === 'pt' ? 'A Solução Construída' : 'Engineered Solution'}
                  </h4>
                  <p class="text-sm text-[#D9D9D9] leading-relaxed">${p.business.solution[currentLang]}</p>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-1.5 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[15px] text-[#FA692A]">task_alt</span>
                    ${currentLang === 'pt' ? 'O Impacto Real no Negócio' : 'Real-World Impact'}
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
                    ${currentLang === 'pt' ? 'Arquitetura e Fluxo de Execução' : 'Architecture & Execution Flow'}
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
            href="https://wa.me/5574999954477?text=${encodeURIComponent(currentLang === 'pt' ? `Olá Rubens, vi seu case "${p.title.pt}" no portfólio e gostaria de entender como aplicar algo similar na minha operação!` : `Hello Rubens, I saw your case "${p.title.en}" on your portfolio and want to talk!`)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="pill-btn-dark hover:border-[#FA692A]/50 group">
            <span class="material-symbols-outlined text-[15px] text-[#FA692A] group-hover:scale-110 transition-transform">chat</span>
            <span>${currentLang === 'pt' ? 'Conversar sobre este case' : 'Ask about this case'}</span>
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

    <!-- Métrica em Destaque no Modal -->
    ${project.metricBadge ? `
      <div class="mt-4">
        <span class="metric-pill">
          <span class="material-symbols-outlined text-[16px]">trending_up</span>
          <span>${project.metricBadge[currentLang]}</span>
        </span>
      </div>
    ` : ''}

    <!-- Galeria de Imagens com Legendas -->
    <div class="py-6 space-y-8 max-h-[65vh] overflow-y-auto pr-2">
      ${project.gallery.map(img => `
        <div class="space-y-2.5">
          <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0D0D0D]">
            <img src="${img.src}" alt="${img.caption[currentLang]}" class="w-full object-contain max-h-[500px]" />
          </div>
          <p class="text-xs text-[#8E8E93] font-mono text-center flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[15px] text-[#FA692A]">image</span>
            <span>${img.caption[currentLang]}</span>
          </p>
        </div>
      `).join('')}
    </div>

    <!-- Rodapé do Modal com CTA Direto WhatsApp -->
    <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
      <span class="text-xs text-[#8E8E93]">
        ${currentLang === 'pt' ? 'Gostou dessa arquitetura? Vamos adaptá-la à sua operação.' : 'Interested in this architecture? Let\'s tailor it to your business.'}
      </span>
      <a 
        href="https://wa.me/5574999954477?text=${encodeURIComponent(currentLang === 'pt' ? `Olá Rubens, vi os detalhes do case "${project.title.pt}" e gostaria de agendar uma conversa de diagnóstico.` : `Hello Rubens, I saw the details of "${project.title.en}" and would like to talk.`)}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="pill-btn-primary">
        <span>${t.contact_btn_whatsapp_big}</span>
        <span class="arrow-circle">
          <span class="material-symbols-outlined text-[16px]">north_east</span>
        </span>
      </a>
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
  document.body.style.overflow = "auto";
}

// Fechar modal ao clicar fora
window.addEventListener("click", (e) => {
  const modal = document.getElementById("gallery-modal");
  if (e.target === modal) {
    closeGalleryModal();
  }
});

// Fechar com ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeGalleryModal();
  }
});

// --- 6. UTILITÁRIOS: COPIAR TEXTO & NOTIFICAÇÕES ---
function copyText(text, alertMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(alertMsg || translations[currentLang].copied_alert);
  }).catch(() => {
    showToast("Erro ao copiar.");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Menu Mobile
function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav) {
    nav.classList.toggle("hidden");
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
