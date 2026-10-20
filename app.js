/**
 * ========================================================
 * DESIGN SYSTEM: GUARDBASE — SWISS TECHNICAL GRID
 * Specification: designs/guardbase-branding/DESIGN.md
 * Features: ASCII Topographic Canvas, Bilingual Dictionary (PT/EN),
 * Asymmetric Technical Project Cards, Lightbox Modal, Clipboard Helper
 * Developer & Applied AI Engineer: Rubens Cardoso
 * ========================================================
 */

// --- 1. DICIONÁRIO DE TRADUÇÃO (PT / EN) ---
const translations = {
  pt: {
    // Topo & Status
    badge_available: "<span class=\"w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse inline-block mr-1\"></span> OPERAÇÃO ATIVA · DISPONÍVEL",
    nav_pain: "01. Dores",
    nav_solutions: "02. Soluções",
    nav_projects: "03. Cases Reais",
    nav_about: "04. Quem Sou Eu",
    nav_process: "05. Como Trabalho",
    nav_contact: "06. Contato",
    btn_whatsapp_nav: "DIAGNOSTICAR GARGALOS",
    
    // 1. Dobra Principal (Hero Section)
    hero_eyebrow: "Engenharia de Automação, Dados & Inteligência Artificial Aplicada",
    hero_headline: "Sua equipe deveria estar <span class=\"text-[#3E7BFA] font-semibold\">gerando receita</span>, não copiando e colando dados entre sistemas",
    hero_subhead: "Eu desenvolvo automações sob medida, integrações e agentes inteligentes em Python que eliminam o trabalho manual, conectam softwares isolados e devolvem horas produtivas para a sua operação — com precisão cirúrgica e zero fadiga humana.",
    hero_btn_diagnostic: "DIAGNOSTICAR GARGALOS DA OPERAÇÃO",
    hero_btn_projects: "VER CASES REAIS",

    // 2. Seção de Conexão (Identificação da Dor)
    sec_pain_eyebrow: "O PROBLEMA",
    sec_pain_title: "O crescimento da sua empresa esbarra na <span class=\"text-[#3E7BFA] font-semibold\">lentidão dos seus processos</span>?",
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
    sec_sol_eyebrow: "SOLUÇÕES & COMPETÊNCIAS",
    sec_sol_title: "Tecnologia moldada à regra do seu negócio <span class=\"text-[#3E7BFA]\">(e não o contrário)</span>",
    sec_sol_desc: "Não vendo pacotes engessados. Eu entro na sua operação, entendo o fluxo de trabalho e construo a solução exata em código em 4 frentes:",

    sol_1_tag: "#01 FLUXOS & PROCESSOS",
    sol_1_title: "Automação de Processos e Fluxos de Trabalho (RPA Web & Desktop)",
    sol_1_desc: "Transformo tarefas que levam horas em rotinas que rodam sozinhas em minutos. Mesmo que o seu sistema seja antigo, lento, cheio de telas ou não possua suporte a integrações oficiais, meus robôs navegam na interface exatamente como um humano faria — só que 10x mais rápido e 24 horas por dia.",
    sol_1_benefit: "10x mais rápido • Operação contínua 24/7",

    sol_2_tag: "#02 INTEGRAÇÃO DE SISTEMAS",
    sol_2_title: "Integração de Sistemas e Arquitetura de Fluxos",
    sol_2_desc: "Faço seus softwares conversarem em tempo real. Quando algo acontece no seu e-mail ou WhatsApp, seu CRM, agenda, financeiro e sistema interno são atualizados automaticamente. Fim das planilhas intermediárias e da perda de informações entre setores.",
    sol_2_benefit: "Dados unificados em tempo real",

    sol_3_tag: "#03 EXTRAÇÃO & TRATAMENTO DE DADOS",
    sol_3_title: "Coleta, Mineração e Tratamento Inteligente de Dados (Web Scraping & Data)",
    sol_3_desc: "Precisa monitorar preços, extrair bases de leads qualificados ou consolidar milhares de registros espalhados na web ou em portais fechados? Construo extratores de alta performance que coletam, limpam, padronizam e entregam os dados prontos para a sua tomada de decisão.",
    sol_3_benefit: "Milhares de registros limpos para decisão",

    sol_4_tag: "#04 INTELIGÊNCIA ARTIFICIAL APLICADA",
    sol_4_title: "Inteligência Artificial Aplicada à Operação",
    sol_4_desc: "Sem \"hype\" vazio: aplico IA onde ela gera retorno financeiro. Desde agentes autônomos de atendimento que ouvem áudios, agendam horários e geram cobranças no PIX, até triagem inteligente de documentos e e-mails técnicos complexos para abertura automática de ordens de serviço.",
    sol_4_benefit: "Retorno financeiro real no caixa",

    // 4. Prova Real (Cases Reais)
    sec_proj_eyebrow: "CASES REAIS & ENGENHARIA",
    sec_proj_title: "Engenharia na prática: <span class=\"text-[#3E7BFA]\">Problemas reais que já resolvi</span>",
    sec_proj_desc: "Veja como transformei gargalos críticos de diferentes setores em operações autônomas e escaláveis. Clique nas imagens para abrir os diagramas e fluxos completos:",
    
    tab_business: "VISÃO DE NEGÓCIO",
    tab_tech: "ARQUITETURA TÉCNICA",
    btn_view_gallery: "VER DIAGRAMA & ARQUITETURA",
    sec_comp_title: "Outros Projetos & Utilitários de Engenharia",

    // 5. Quem Sou Eu & Pilares
    sec_about_eyebrow: "QUEM SOU EU & PILARES",
    sec_about_title: "Muito prazer, sou <span class=\"text-[#A6B5FF]\">Rubens Cardoso</span>.",
    sec_about_mission: "Minha missão é construir a ponte entre a estratégia do seu negócio e o poder de execução da tecnologia.",
    sec_about_p1: "Muitos programadores entendem de código, mas não entendem como uma empresa funciona. Por outro lado, muitos consultores entendem de processos, mas não sabem construir a solução técnica. <strong class=\"text-white\">Meu trabalho une esses dois mundos.</strong>",
    sec_about_p2: "Com background em Administração e atuação direta em Engenharia de Software, Automação e Ciência de Dados, eu olho para a sua operação com a cabeça de um gestor: buscando <strong class=\"text-white\">retorno sobre o investimento (ROI), redução de custos e eficiência operacional</strong>. Quando escrevo uma linha de código em Python, o objetivo final nunca é \"fazer um programa bonito\", mas sim fazer a sua empresa rodar melhor, mais rápido e com menos custo.",
    
    sec_pillars_title: "Meus 4 Pilares Inegociáveis de Trabalho:",
    pillar_1_title: "Resultado Real no Caixa e na Rotina",
    pillar_1_desc: "Só faz sentido automatizar se for para economizar tempo real, reduzir custos ou destravar receita.",
    pillar_2_title: "Continuidade e Resiliência",
    pillar_2_desc: "Sistemas reais falham, a internet oscila e layouts mudam. Construo automações defensivas preparadas para exceções.",
    pillar_3_title: "Qualidade de Engenharia",
    pillar_3_desc: "Não faço \"gambiarras\" temporárias. Entrego arquiteturas profissionais em microsserviços Docker e logs estruturados.",
    pillar_4_title: "Segurança e Soberania",
    pillar_4_desc: "Suas credenciais e dados trafegam em ambientes isolados, seguros e sob total controle da sua empresa.",

    // 6. Como Trabalhamos Juntos
    sec_proc_eyebrow: "METODOLOGIA DE TRABALHO",
    sec_proc_title: "Como transformamos o seu gargalo em solução em <span class=\"text-[#3E7BFA]\">4 passos</span>:",
    sec_proc_desc: "Contratar uma solução personalizada não vai dar \"mais trabalho\" para a sua equipe. Veja como funciona:",
    step1_title: "Diagnóstico Operacional",
    step1_desc: "Conversamos rapidamente sobre o processo atual. Você me mostra onde perde tempo, quais sistemas utiliza e qual resultado deseja alcançar.",
    step2_title: "Desenho da Arquitetura",
    step2_desc: "Eu mapeio toda a lógica técnica e apresento uma proposta clara do que será construído, prazos e o impacto esperado na sua rotina.",
    step3_title: "Desenvolvimento & Testes",
    step3_desc: "Construo a solução sem interromper o dia a dia da sua equipe, testando cada cenário de erro para garantir estabilidade total.",
    step4_title: "Implantação e Operação",
    step4_desc: "Colocamos a automação para rodar em produção (na nuvem ou nos seus servidores) com monitoramento ativo e suporte contínuo.",

    // 7. Rodapé de Conversão
    sec_contact_eyebrow: "DIAGNÓSTICO & CONTATO",

    // 7. Rodapé de Conversão
    sec_contact_title: "Qual processo da sua empresa você gostaria de <span class=\"text-[#E9F45B]\">nunca mais ter que fazer manualmente</span>?",
    sec_contact_desc: "Não importa o seu setor ou quão específico seja o sistema que você usa hoje. Se existe um padrão lógico, uma tarefa repetitiva ou dados que precisam ser cruzados, <strong class=\"text-white\">nós podemos automatizar</strong>.",
    contact_proposal: "Vamos conversar por 15 minutos? Me conte qual é o maior gargalo da sua equipe hoje e eu te digo exatamente como a tecnologia pode resolver.",
    contact_btn_whatsapp_big: "FALAR COMIGO NO WHATSAPP AGORA",
    copied_alert: "Copiado com sucesso!"
  },

  en: {
    badge_available: "<span class=\"w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse inline-block mr-1\"></span> LIVE SYSTEM · AVAILABLE",
    nav_pain: "01. Bottlenecks",
    nav_solutions: "02. Solutions",
    nav_projects: "03. Case Studies",
    nav_about: "04. About Me",
    nav_process: "05. Workflow",
    nav_contact: "06. Contact",
    btn_whatsapp_nav: "QUICK DIAGNOSTIC",
    
    hero_eyebrow: "Automation Engineering, Data & Applied Artificial Intelligence",
    hero_headline: "Your team should be <span class=\"text-[#3E7BFA] font-semibold\">generating revenue</span>, not copying and pasting data between systems",
    hero_subhead: "I engineer bespoke automations, integrations, and intelligent Python agents that eliminate manual grunt work, connect disconnected software, and return productive hours to your business — with surgical accuracy and zero human fatigue.",
    hero_btn_diagnostic: "DIAGNOSE OPERATIONAL BOTTLENECKS",
    hero_btn_projects: "VIEW CASE STUDIES",

    sec_pain_eyebrow: "THE PROBLEM",
    sec_pain_title: "Is your company's growth held back by <span class=\"text-[#3E7BFA] font-semibold\">slow operational processes</span>?",
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

    // 3. Solutions
    sec_sol_eyebrow: "SOLUTIONS & CAPABILITIES",
    sec_sol_title: "Technology shaped around your business rules <span class=\"text-[#3E7BFA]\">(not the other way around)</span>",
    sec_sol_desc: "I don't sell rigid off-the-shelf bundles. I study your operation, map the workflow, and engineer custom code across 4 main vectors:",

    sol_1_tag: "#01 WORKFLOWS & RPA",
    sol_1_title: "Process Automation & Workflows (RPA Web & Desktop)",
    sol_1_desc: "Transform tasks that take hours into routines running autonomously in minutes. Even if your system is legacy, sluggish, multi-screen, or lacks APIs, my robots interact with the interface just like a human would — 10x faster, 24 hours a day.",
    sol_1_benefit: "10x faster • 24/7 continuous operation",

    sol_2_tag: "#02 SYSTEM INTEGRATION",
    sol_2_title: "System Integration & Workflow Architecture",
    sol_2_desc: "Enable real-time communication across your software. When an event triggers in WhatsApp or email, your CRM, calendar, billing, and internal database sync automatically. Say goodbye to intermediary spreadsheets and dropped data.",
    sol_2_benefit: "Real-time unified sync across departments",

    sol_3_tag: "#03 DATA MINING & SCRAPING",
    sol_3_title: "Intelligent Data Mining & Hygiene (Web Scraping & Data)",
    sol_3_desc: "Need to monitor market pricing, harvest qualified B2B leads, or aggregate thousands of scattered records across the web? I build high-performance data pipelines that crawl, sanitize, normalize, and deliver decision-ready datasets.",
    sol_3_benefit: "Thousands of clean records normalized for decision",

    sol_4_tag: "#04 APPLIED AI",
    sol_4_title: "Applied Operational Artificial Intelligence",
    sol_4_desc: "No empty buzzwords: I apply AI strictly where it drives financial return. From autonomous WhatsApp agents handling voice notes, calendar bookings, and PIX billing, to smart triage of complex technical emails and work orders.",
    sol_4_benefit: "Tangible business ROI in cash flow",

    // 4. Case Studies
    sec_proj_eyebrow: "CASE STUDIES & ARCHITECTURE",
    sec_proj_title: "Engineering in practice: <span class=\"text-[#3E7BFA]\">Real problems I have solved</span>",
    sec_proj_desc: "Explore how I turned critical bottlenecks across various industries into resilient autonomous pipelines. Click on diagrams to view detailed architectures:",
    
    tab_business: "BUSINESS IMPACT",
    tab_tech: "TECHNICAL ARCHITECTURE",
    btn_view_gallery: "VIEW ARCHITECTURE & FLOW",
    sec_comp_title: "Other Engineering Projects & Utilities",

    // 5. About Me
    sec_about_eyebrow: "ABOUT ME & CORE PILLARS",
    sec_about_title: "Nice to meet you, I'm <span class=\"text-[#A6B5FF]\">Rubens Cardoso</span>.",
    sec_about_mission: "My mission is building the bridge between your business strategy and the execution power of technology.",
    sec_about_p1: "Many developers understand code syntax but don't grasp how businesses operate. On the other hand, many consultants understand processes but cannot engineer the technical solution. <strong class=\"text-white\">My work unites both worlds.</strong>",
    sec_about_p2: "Combining a Business Administration background with hands-on Software Engineering, Automation, and Data Science, I look at your operation through an executive lens: focusing on <strong class=\"text-white\">ROI, cost reduction, and operational throughput</strong>. When I write Python code, the goal is never technical vanity, but helping your business run smoother, faster, and cheaper.",
    
    sec_pillars_title: "My 4 Non-Negotiable Engineering Pillars:",
    pillar_1_title: "Measurable Impact on Cash Flow",
    pillar_1_desc: "Automation only makes sense if it saves tangible time, cuts real costs, or unlocks new revenue.",
    pillar_2_title: "Continuity & Defensive Resilience",
    pillar_2_desc: "Real systems fail, networks jitter, and interfaces change. I engineer defensive automations that handle edge cases.",
    pillar_3_title: "Professional Engineering Standards",
    pillar_3_desc: "No quick patches. I deliver enterprise-ready architectures in Docker microservices with structured audit logs.",
    pillar_4_title: "Data Security & Sovereignty",
    pillar_4_desc: "Your credentials and customer data run inside isolated environments under your company's full ownership.",

    // 6. Workflow
    sec_proc_eyebrow: "WORKFLOW & METHODOLOGY",
    sec_proc_title: "How we turn your bottleneck into an automated solution in <span class=\"text-[#3E7BFA]\">4 steps</span>:",
    sec_proc_desc: "Bringing in a custom solution will not burden your team. Here is how simple the process is:",
    step1_title: "Operational Diagnostic",
    step1_desc: "We hold a brief discovery session. You show me where hours are lost, what tools you use, and the target outcome.",
    step2_title: "Architecture Blueprint",
    step2_desc: "I map out the complete technical workflow, timeline, and projected operational impact before writing code.",
    step3_title: "Engineering & Stress Testing",
    step3_desc: "I build the solution without disrupting your ongoing operations, stress-testing edge cases for maximum reliability.",
    step4_title: "Deployment & Assisted Run",
    step4_desc: "We deploy the automation to production (cloud or internal servers) with active monitoring and continuous support.",

    // 7. Contact
    sec_contact_eyebrow: "DIAGNOSTIC & CONTACT",
    sec_contact_title: "Which process in your company would you like to <span class=\"text-[#E9F45B]\">never do manually again</span>?",
    sec_contact_desc: "Regardless of your industry or how proprietary your current system is: if there is a logical pattern, repetitive clicks, or data to cross-reference, <strong class=\"text-white\">we can automate it</strong>.",
    contact_proposal: "Let's talk for 15 minutes. Tell me about your team's biggest operational bottleneck and I will show you exactly how technology solves it.",
    contact_btn_whatsapp_big: "TALK WITH ME ON WHATSAPP NOW",
    copied_alert: "Copied to clipboard!"
  }
};

// --- 2. DADOS DETALHADOS DOS 4 CASES REAIS ---
const featuredProjects = [
  {
    id: "tescan",
    indexNum: "01",
    sector: { pt: "INDÚSTRIA / CIENTÍFICO", en: "INDUSTRIAL / SCIENTIFIC" },
    metric: { pt: "-90% TEMPO OPERACIONAL", en: "-90% HANDLING TIME" },
    title: {
      pt: "Automação de Ordens de Serviço em Portal Corporativo Legado",
      en: "Automated Work Orders in Legacy Enterprise Portal"
    },
    highlight: {
      pt: "Redução de 90% no esforço manual: de 15 minutos para 1,5 minuto por chamado em equipamentos de alta complexidade.",
      en: "90% cut in manual effort: dropped from 15 min to 1.5 min per work order on high-value equipment."
    },
    mainImage: "assets/projects/tescan-slide-1.png",
    gallery: [
      { 
        src: "assets/projects/tescan-slide-1.png", 
        caption: { 
          pt: "01 // Apresentação: Middleware Assíncrono para Automação de Ordens de Serviço", 
          en: "01 // Presentation: Asynchronous Middleware for Service Automation" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-2.png", 
        caption: { 
          pt: "02 // O Abismo Operacional: Triagem Manual vs. Complexidade de Chamados", 
          en: "02 // Operational Chasm: Manual Triage vs. Ticket Complexity" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-3.png", 
        caption: { 
          pt: "03 // Gargalo Invisível: Anatomia do Tempo Perdido em Chamados Críticos", 
          en: "03 // Invisible Bottleneck: Breakdown of Lost Time in Critical Incidents" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-4.png", 
        caption: { 
          pt: "04 // Ruptura de Paradigma: Transição para Arquitetura Orientada a Eventos", 
          en: "04 // Paradigm Shift: Transition to Event-Driven Architecture" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-5.png", 
        caption: { 
          pt: "05 // Arquitetura de Alto Nível: Fluxo de Dados e Integrações do Sistema", 
          en: "05 // High-Level Architecture: System Data Flow & Integrations" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-6.png", 
        caption: { 
          pt: "06 // API FastAPI & Pydantic: Ingestão e Validação Rigorosa de Schemas", 
          en: "06 // FastAPI & Pydantic: Strict Schema Validation & Data Ingestion" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-7.png", 
        caption: { 
          pt: "07 // Fila de Mensageria: Desacoplamento e Resiliência com Redis", 
          en: "07 // Message Queue: Asynchronous Decoupling & Resilience with Redis" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-8.png", 
        caption: { 
          pt: "08 // Motor Headless: Playwright Isolado e Navegação Autônoma no Portal", 
          en: "08 // Headless Engine: Isolated Playwright & Autonomous Portal Navigation" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-9.png", 
        caption: { 
          pt: "09 // Concorrência & Throughput: Pool de Workers e Controle por Semáforos", 
          en: "09 // Concurrency & Throughput: Worker Pool & Semaphore Control" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-10.png", 
        caption: { 
          pt: "10 // Resiliência Operacional: Circuit Breaker e Estratégia de Retentativas", 
          en: "10 // Operational Resilience: Circuit Breaker & Retry Strategy" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-11.png", 
        caption: { 
          pt: "11 // Despacho em Tempo Real: Notificações Multicanal e Disparo de Engenharia", 
          en: "11 // Real-Time Dispatch: Multi-Channel Alerts & Engineer Routing" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-12.png", 
        caption: { 
          pt: "12 // Telemetria & Observabilidade: Logs Estruturados e Rastreamento", 
          en: "12 // Telemetry & Observability: Structured Logs & Traceability" 
        } 
      },
      { 
        src: "assets/projects/tescan-slide-13.png", 
        caption: { 
          pt: "13 // Retorno sobre Investimento: Redução de 90% no Tempo Operacional", 
          en: "13 // Return on Investment: 90% Handling Time Reduction" 
        } 
      },
      { 
        src: "assets/projects/tescan-arquitetura.png", 
        caption: { 
          pt: "14 // Esquema Arquitetural: Microsserviço FastAPI + Playwright Headless", 
          en: "14 // Architecture Schema: FastAPI + Playwright Headless Microservice" 
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
        { pt: "Tempo operacional reduzido de 15 min para 1,5 min por chamado (-90% de esforço)", en: "Handling time dropped from 15 min to 1.5 min (-90% manual effort)" },
        { pt: "Eliminação total de erros manuais em contratos e equipamentos multimilionários", en: "Zero typing errors on mission-critical equipment records" },
        { pt: "Atendimento imediato e despacho prioritário para paradas críticas", en: "Instant response dispatch for critical factory downtime alerts" }
      ]
    },
    technical: {
      stack: ["Python", "FastAPI", "Playwright Headless", "AsyncIO", "Docker", "REST Webhooks"],
      architecture: {
        pt: "Microsserviço conteinerizado em Docker com FastAPI assíncrono. O Playwright opera em headless com pools de workers concorrentes, tolerância a timeouts da interface legada, retentativas automáticas e disparo de webhooks com logs de auditoria.",
        en: "Containerized Docker microservice with asynchronous FastAPI. Playwright runs in headless mode with worker pools, fault-tolerant retry policies for slow legacy screens, and automated webhook triggers with structured audit logs."
      }
    }
  },

  {
    id: "dealership",
    indexNum: "02",
    sector: { pt: "AUTOMOTIVO / CONCESSIONÁRIAS", en: "AUTOMOTIVE / DEALERSHIPS" },
    metric: { pt: "HORAS → MINUTOS · ALGORITMO PONDERADO", en: "HOURS → MINUTES · WEIGHTED SCORING" },
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
      { 
        src: "assets/projects/dealership-capa.png", 
        caption: { 
          pt: "Capa do Sistema: Dealership ST Bot - Inteligência e Auditoria de Estoque", 
          en: "System Cover: Dealership ST Bot - Inventory Intelligence & Audit" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-1.png", 
        caption: { 
          pt: "01 // Apresentação: Automação de Inventário e Tomada de Decisão", 
          en: "01 // Presentation: Inventory Automation & Decision Making" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-2.png", 
        caption: { 
          pt: "02 // O Desafio: Navegação Manual e Complexidade no ERP Dealernet", 
          en: "02 // The Challenge: Manual Navigation & Complexity in Dealernet ERP" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-3.png", 
        caption: { 
          pt: "03 // Regra de Negócio: Ambiguidade Visual de Status em Conflito", 
          en: "03 // Business Rule: Visual Ambiguity of Conflicting Status Badges" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-4.png", 
        caption: { 
          pt: "04 // Arquitetura Técnica: Pipeline Python + Selenium + Pandas", 
          en: "04 // Technical Architecture: Python + Selenium + Pandas Pipeline" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-5.png", 
        caption: { 
          pt: "05 // Engenharia de Decisão: Algoritmo Matemático de Prioridade Ponderada", 
          en: "05 // Decision Engineering: Weighted Mathematical Priority Algorithm" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-6.png", 
        caption: { 
          pt: "06 // Mapeamento do DOM: Extração Profunda em Camadas Ocultas do ERP", 
          en: "06 // DOM Mapping: Deep Extraction Across Hidden ERP Modal Layers" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-7.png", 
        caption: { 
          pt: "07 // Normalização de Registros e Tratamento Defensivo de Falhas", 
          en: "07 // Record Normalization & Defensive Exception Handling" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-8.png", 
        caption: { 
          pt: "08 // Classificação Semafórica: Ponderação de Bloqueios e Alertas Críticos", 
          en: "08 // Semaphoric Classification: Weighting Blockers & Critical Alerts" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-9.png", 
        caption: { 
          pt: "09 // Relatório Executivo: Geração Automatizada de Planilhas em Excel", 
          en: "09 // Executive Reporting: Automated Sanitized Excel Workbook Generation" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-10.png", 
        caption: { 
          pt: "10 // Parametrização e Modos de Execução do Bot de Varredura", 
          en: "10 // Parameterization & Scan Bot Execution Profiles" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-11.png", 
        caption: { 
          pt: "11 // Auditoria Cruzada: Eliminação de Inconsistências de Estoque", 
          en: "11 // Cross-Audit: Eliminating Inventory Divergences & Ghost Units" 
        } 
      },
      { 
        src: "assets/projects/dealership-slide-12.png", 
        caption: { 
          pt: "12 // Impacto nos Negócios: Horas de Checagem Reduzidas para Minutos", 
          en: "12 // Business Impact: Hours of Manual Inspection Slashed to Minutes" 
        } 
      },
      { 
        src: "assets/projects/dealership-screen1.png", 
        caption: { 
          pt: "13 // Inspeção Real no ERP: Seleção e Navegação pelas Matrizes de Dados", 
          en: "13 // Live ERP Inspection: Navigation Through Nested Vehicle Tables" 
        } 
      },
      { 
        src: "assets/projects/dealership-relatorio.png", 
        caption: { 
          pt: "14 // Planilha Gerencial Padronizada e Limpa para Decisão Comercial", 
          en: "14 // Standardized Executive Output Spreadsheet Ready for Sales" 
        } 
      }
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
        { pt: "Planilha diária em Excel limpa, padronizada e pronta para decisão", en: "Clean, standardized daily executive Excel report ready for management" },
        { pt: "Decisões comerciais mais ágeis para giro rápido de estoque", en: "Faster commercial decisions accelerating vehicle turnover rate" }
      ]
    },
    technical: {
      stack: ["Python", "Selenium WebDriver", "Pandas", "Dealernet ERP", "Algoritmo Ponderado", "OpenPyXL"],
      architecture: {
        pt: "Automação defensiva orientada a objetos que decodifica matrizes de status complexas no DOM, calcula a pontuação ponderada de impedimentos via Pandas e gera relatórios formatados em Excel com alertas de estoque crítico.",
        en: "Defensive object-oriented automation decoding complex status matrices within the DOM, calculating weighted friction scores via Pandas, and emitting styled Excel workbooks."
      }
    }
  },

  {
    id: "clinicas",
    indexNum: "03",
    sector: { pt: "SAÚDE & SERVIÇOS", en: "HEALTHCARE & SERVICES" },
    metric: { pt: "ATENDIMENTO 24/7 & PIX · ZERO OVERBOOKING", en: "24/7 CARE & PIX · ZERO OVERBOOKING" },
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
      { 
        src: "assets/projects/clinicas-diagrama.png", 
        caption: { 
          pt: "Arquitetura Completa: WhatsApp, n8n, Chatwoot e PostgreSQL", 
          en: "System Architecture: WhatsApp, n8n, Chatwoot & PostgreSQL" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-1.png", 
        caption: { 
          pt: "01 // Apresentação: Secretária Clínica Autônoma Omnichannel com IA", 
          en: "01 // Presentation: Autonomous Omnichannel Clinical AI Agent" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-2.png", 
        caption: { 
          pt: "02 // Infraestrutura em VPS: Coolify, PostgreSQL e Alta Concorrência", 
          en: "02 // VPS Infrastructure: Coolify, PostgreSQL & High Concurrency" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-3.png", 
        caption: { 
          pt: "03 // Processamento de Voz: Transcrição Whisper AI e Extração de Entidades", 
          en: "03 // Voice Processing: Whisper AI Transcription & Entity Extraction" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-4.png", 
        caption: { 
          pt: "04 // Agendamento Dinâmico: Sincronização em Tempo Real no Google Calendar", 
          en: "04 // Dynamic Booking: Real-Time Sync on Google Calendar (Zero Overbooking)" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-5.png", 
        caption: { 
          pt: "05 // Gateway Financeiro: Emissão Automática de PIX e Baixa no CRM", 
          en: "05 // Financial Gateway: Automated PIX Billing & Instant CRM Reconciliation" 
        } 
      },
      { 
        src: "assets/projects/clinicas-slide-6.png", 
        caption: { 
          pt: "06 // Disparos Preventivos: Régua de Confirmação (24h/5h/1h) e Queda de No-Show", 
          en: "06 // Preventive Messaging: Confirmation Timeline (24h/5h/1h) & Reduced No-Shows" 
        } 
      },
      { 
        src: "assets/projects/clinicas-capa.png", 
        caption: { 
          pt: "07 // Visão Geral do Sistema: Agente Clínico e Dashboard de Gestão", 
          en: "07 // System Overview: Clinical Agent & Management Dashboard" 
        } 
      },
      { 
        src: "assets/projects/clinicas-secretaria.png", 
        caption: { 
          pt: "08 // Painel de Atendimento: Histórico de Conversas e Transbordo Humano", 
          en: "08 // Patient Inbox: Conversation History & Seamless Human Handoff" 
        } 
      }
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
    indexNum: "04",
    sector: { pt: "COMERCIAL / B2B", en: "SALES / B2B" },
    metric: { pt: "SEGUNDOS VS HORAS · MILHARES DE LEADS", en: "SECONDS VS HOURS · THOUSANDS OF LEADS" },
    title: {
      pt: "Motores de Prospecção e Enriquecimento em Escala",
      en: "Enterprise B2B Lead Mining & Enrichment Engines"
    },
    highlight: {
      pt: "Coleta e enriquecimento de dados reduzidos de horas para segundos: milhares de leads higienizados entregues direto no CRM.",
      en: "Lead gathering and data hygiene cut from hours to seconds: thousands of verified B2B leads piped directly into CRM."
    },
    mainImage: "assets/projects/mapsleads-fluxo.png",
    gallery: [
      { 
        src: "assets/projects/mapsleads-fluxo.png", 
        caption: { 
          pt: "Fluxo de Extração e Bypass de Bloqueios no MapsLeads", 
          en: "Extraction & Anti-Block Pipeline in MapsLeads" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-1.png", 
        caption: { 
          pt: "01 // Apresentação: Arquitetura de Prospecção B2B Automatizada", 
          en: "01 // Presentation: Automated B2B Lead Generation Architecture" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-2.png", 
        caption: { 
          pt: "02 // O Gargalo: Prospecção Manual e Ineficiência Comercial", 
          en: "02 // Bottleneck: Manual Prospecting & Sales Team Inefficiency" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-3.png", 
        caption: { 
          pt: "03 // Pipeline de Extração: Automação Headless com Selenium", 
          en: "03 // Extraction Pipeline: Headless Automation with Selenium" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-4.png", 
        caption: { 
          pt: "04 // Microsserviço Flask em Docker: Isolamento e Escalabilidade", 
          en: "04 // Flask Microservice in Docker: Isolation & Scalability" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-5.png", 
        caption: { 
          pt: "05 // Camada Anti-Bloqueio: Rotação Dinâmica de Headers e Jitter", 
          en: "05 // Anti-Detection Layer: Dynamic Header Rotation & Jitter" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-6.png", 
        caption: { 
          pt: "06 // Higienização de Dados: Limpeza e Deduplicação com Pandas", 
          en: "06 // Data Hygiene: Cleaning & Deduplication with Pandas" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-7.png", 
        caption: { 
          pt: "07 // Validação de Contatos: Detecção e Normalização de Telefones/WhatsApp", 
          en: "07 // Contact Validation: Phone/WhatsApp Detection & Normalization" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-8.png", 
        caption: { 
          pt: "08 // Orquestração com n8n: Disparo em Lote e Roteamento de Fila", 
          en: "08 // n8n Orchestration: Batch Execution & Queue Routing" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-9.png", 
        caption: { 
          pt: "09 // Integração Contínua: Exportação para Google Sheets e CRMs", 
          en: "09 // Continuous Integration: Auto-Sync to Google Sheets & CRMs" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-slide-10.png", 
        caption: { 
          pt: "10 // Resultados Comerciais: Milhares de Leads Higienizados em Minutos", 
          en: "10 // Commercial Results: Thousands of Clean Leads in Minutes" 
        } 
      },
      { 
        src: "assets/projects/cepleads-slide-1.png", 
        caption: { 
          pt: "11 // CepLeads: Motor de Enriquecimento Geográfico e Demográfico por CEP", 
          en: "11 // CepLeads: Geographic & Demographic Postal Code Enrichment Engine" 
        } 
      },
      { 
        src: "assets/projects/cepleads-slide-2.png", 
        caption: { 
          pt: "12 // CepLeads: Segmentação por Faixa de Renda e Densidade Populacional", 
          en: "12 // CepLeads: Income Brackets & Demographic Targeting by Zip Code" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-capa.png", 
        caption: { 
          pt: "13 // Painel Central: MapsLeads Automation Hub", 
          en: "13 // Central Dashboard: MapsLeads Automation Hub" 
        } 
      },
      { 
        src: "assets/projects/cepleads-capa.png", 
        caption: { 
          pt: "14 // Painel Central: CepLeads Enrichment Engine", 
          en: "14 // Central Dashboard: CepLeads Enrichment Engine" 
        } 
      },
      { 
        src: "assets/projects/mapsleads-sheets.png", 
        caption: { 
          pt: "15 // Entrega Final: Bases Higienizadas e Prontas para Prospecção Ativa", 
          en: "15 // Final Delivery: Sanitized Sheets Ready for Outbound Sales" 
        } 
      }
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
      stack: ["Python Flask", "Selenium Headless", "Docker Containers", "n8n", "Pandas Data Cleaning", "Google Sheets API"],
      architecture: {
        pt: "APIs RESTful em Flask executadas em containers Docker isolados com instâncias do Chromium em modo headless. Técnicas anti-bloqueio avançadas (rotação de headers, jitter de interação), normalização de dados com Pandas e distribuição para Google Sheets API e Webhooks.",
        en: "RESTful Flask microservices deployed in isolated Docker containers with headless Chromium instances. Anti-detection measures (header randomization, dynamic scroll jitters), Pandas data sanitization, and output dispatch via Google Sheets API and Telegram bots."
      }
    }
  }
];

// --- 3. PROJETOS COMPLEMENTARES ---
const secondaryProjects = [
  {
    id: "oraculo",
    indexNum: "05",
    categoryEyebrow: { pt: "IA MULTIMODAL & RAG", en: "MULTIMODAL AI & RAG" },
    title: {
      pt: "Oráculo: Assistente Conversacional Multimodal com Grounding",
      en: "Oracle: Multimodal Conversational Assistant with Document Grounding"
    },
    desc: {
      pt: "Sistema que permite conversar em linguagem natural com documentos (PDF, CSV, TXT, links web e vídeos do YouTube). Integra Groq (LLaMA 3.3 70B ultra-rápido) e OpenAI sem lock-in.",
      en: "Natural-language conversational system querying documents (PDF, CSV, TXT, web links, and YouTube). Combines Groq (LLaMA 3.3 70B) and OpenAI without vendor lock-in."
    },
    tech: ["Python", "LangChain", "Streamlit", "Groq LPU", "OpenAI API"]
  },
  {
    id: "diagbackend",
    indexNum: "06",
    categoryEyebrow: { pt: "DIAGNÓSTICO CLI", en: "CLI DIAGNOSTICS" },
    title: {
      pt: "Scanner de Diagnóstico & Integridade de Pipelines Backend",
      en: "Backend Pipeline Diagnostics & Data Integrity Scanner"
    },
    desc: {
      pt: "Ferramenta utilitária multithread para auditoria e verificação de arquivos e rotinas de sistema, detectando dados corrompidos ou inconsistências antes de quebrar fluxos em produção.",
      en: "Concurrent multithreaded utility inspecting directory trees, auditing data integrity, and catching anomalies before they impact live production pipelines."
    },
    tech: ["Python Core", "Multithreading", "Structured Logging", "Error Handling"]
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

  // Atualizar botões no header
  const btnPt = document.getElementById("lang-btn-pt");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnPt && btnEn) {
    if (lang === "pt") {
      btnPt.className = "px-2 py-0.5 font-medium bg-[#0E1013] text-white rounded-[1px] transition-all";
      btnEn.className = "px-2 py-0.5 text-[#8C9298] hover:text-[#0E1013] rounded-[1px] transition-all";
    } else {
      btnEn.className = "px-2 py-0.5 font-medium bg-[#0E1013] text-white rounded-[1px] transition-all";
      btnPt.className = "px-2 py-0.5 text-[#8C9298] hover:text-[#0E1013] rounded-[1px] transition-all";
    }
  }

  // Atualizar textos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  renderFeaturedProjects();
  renderSecondaryProjects();
}

// --- ESTADO DO SLIDESHOW DE IMAGENS DOS CASES ---
const projectSlideIndices = {
  tescan: 0,
  dealership: 0,
  clinicas: 0,
  prospeccao: 0
};
const projectSlidePaused = {
  tescan: false,
  dealership: false,
  clinicas: false,
  prospeccao: false
};
let projectSlideInterval = null;

function switchProjectTab(projectId, tabName) {
  activeTabs[projectId] = tabName;
  renderFeaturedProjects();
}

// Renderizar os 4 Cases no formato Guardbase Swiss Technical Grid
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = featuredProjects.map(p => {
    const activeTab = activeTabs[p.id] || "business";
    const title = p.title[currentLang];
    const sector = p.sector[currentLang];
    const metric = p.metric[currentLang];
    const highlight = p.highlight[currentLang];
    const curIdx = projectSlideIndices[p.id] || 0;
    const activeImg = p.gallery[curIdx] || p.gallery[0];

    return `
      <div class="p-6 sm:p-10 bg-white flex flex-col justify-between hover:bg-[#FDFDFE] transition-colors relative">
        <div>
          <!-- Header do Card: Setor + Índice Numérico -->
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#E4E7EC] text-xs font-mono">
            <span class="text-[#3E7BFA] font-bold tracking-wider flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-[#3E7BFA]"></span>
              ${sector}
            </span>
            <span class="text-[#8C9298]">CASE // ${p.indexNum}</span>
          </div>

          <!-- Métrica em Destaque Técnico -->
          <div class="mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F0F5FF] border border-[#3E7BFA]/30 rounded-[2px] text-xs font-mono font-bold text-[#1D44B8]">
              <span class="material-symbols-outlined text-sm text-[#3E7BFA]">trending_up</span>
              ${metric}
            </span>
          </div>

          <!-- Título H3 -->
          <h3 class="text-xl sm:text-2xl font-display font-bold text-[#0E1013] mb-3 leading-snug">
            ${title}
          </h3>

          <p class="text-xs sm:text-sm text-[#5A6065] mb-5 leading-relaxed font-sans">
            ${highlight}
          </p>

          <!-- Imagem / Diagrama Técnico com Moldura de Engenharia e Transição Automática (12s) -->
          <div class="project-slideshow-container relative border border-[#E4E7EC] rounded-[2px] overflow-hidden mb-6 bg-[#0E1013] group cursor-pointer select-none" 
               id="slideshow-${p.id}"
               onmouseenter="pauseProjectSlideshow('${p.id}')"
               onmouseleave="resumeProjectSlideshow('${p.id}')"
               onclick="openGalleryModal('${p.id}', projectSlideIndices['${p.id}'] || 0)">
            
            <!-- Stack de Imagens da Galeria com Crossfade Suave -->
            <div class="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0A0C0E]">
              ${p.gallery.map((img, idx) => {
                const isActive = (curIdx === idx);
                return `
                  <img 
                    src="${img.src}" 
                    alt="${img.caption[currentLang]}" 
                    data-slide-index="${idx}"
                    class="project-slide-img absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${isActive ? 'opacity-95 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'} group-hover:scale-[1.02]" 
                  />
                `;
              }).join('')}
            </div>

            <!-- Overlay de Legenda e Controles com HUD Técnico -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-between p-3.5 z-20 pointer-events-none">
              <!-- Topo: Mini Tag de Status de Rotação + Contador -->
              <div class="flex items-center justify-between text-[10px] font-mono">
                <span class="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white/90 border border-white/10 rounded-[1px] flex items-center gap-1.5 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span id="slide-caption-${p.id}" class="truncate max-w-[200px] sm:max-w-[260px]">
                    ${activeImg.caption[currentLang]}
                  </span>
                </span>
                <span class="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white/90 border border-white/10 rounded-[1px] shadow-sm">
                  <span id="slide-num-${p.id}">${curIdx + 1}</span> / ${p.gallery.length}
                </span>
              </div>

              <!-- Base: Botão Ver Galeria + Indicadores Clicáveis -->
              <div class="flex items-end justify-between gap-2">
                <span class="btn-guardbase-secondary text-[11px] py-1 px-2.5 pointer-events-auto shrink-0">
                  ${t.btn_view_gallery}
                </span>
                
                ${p.gallery.length > 1 ? `
                  <div class="flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-[1px] pointer-events-auto shadow-sm max-w-[130px] sm:max-w-[200px] overflow-x-auto scrollbar-none" onclick="event.stopPropagation()">
                    ${p.gallery.map((_, idx) => `
                      <button 
                        type="button" 
                        onclick="setProjectSlide('${p.id}', ${idx})" 
                        data-dot-index="${idx}"
                        class="project-slide-dot w-2 h-2 rounded-full transition-all shrink-0 ${curIdx === idx ? 'bg-[#3E7BFA] scale-125' : 'bg-white/40 hover:bg-white/80'}"
                        title="Ir para slide ${idx + 1}"
                        aria-label="Ir para slide ${idx + 1}"></button>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Barra de Progresso Sutil do Slide (12 segundos) -->
            ${p.gallery.length > 1 ? `
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-30 pointer-events-none">
                <div id="slide-progress-${p.id}" class="h-full bg-[#3E7BFA] w-0"></div>
              </div>
            ` : ''}
          </div>

          <!-- Toggle de Visão: Negócio vs Técnico -->
          <div class="flex items-center gap-2 mb-5">
            <button 
              type="button" 
              onclick="switchProjectTab('${p.id}', 'business')" 
              class="technical-tab-btn ${activeTab === 'business' ? 'active' : ''}">
              ${t.tab_business}
            </button>
            <button 
              type="button" 
              onclick="switchProjectTab('${p.id}', 'tech')" 
              class="technical-tab-btn ${activeTab === 'tech' ? 'active' : ''}">
              ${t.tab_tech}
            </button>
          </div>

          <!-- Conteúdo da Aba Ativa -->
          <div class="min-h-[140px] text-xs font-sans text-[#5A6065]">
            ${activeTab === 'business' ? `
              <div class="space-y-3.5">
                <div>
                  <span class="font-mono text-[10px] font-bold text-[#8C9298] uppercase tracking-wider block mb-1">O DESAFIO //</span>
                  <p class="leading-relaxed text-[#0E1013]">${p.business.problem[currentLang]}</p>
                </div>
                <div>
                  <span class="font-mono text-[10px] font-bold text-[#8C9298] uppercase tracking-wider block mb-1">A SOLUÇÃO //</span>
                  <p class="leading-relaxed text-[#0E1013]">${p.business.solution[currentLang]}</p>
                </div>
                <div>
                  <span class="font-mono text-[10px] font-bold text-[#10B981] uppercase tracking-wider block mb-1">RESULTADOS COMPROVADOS //</span>
                  <ul class="space-y-1">
                    ${p.business.results.map(r => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-[#3E7BFA] font-bold">»</span>
                        <span>${r[currentLang]}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            ` : `
              <div class="space-y-3.5">
                <div>
                  <span class="font-mono text-[10px] font-bold text-[#8C9298] uppercase tracking-wider block mb-1">STACK TÉCNICO //</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${p.technical.stack.map(s => `<span class="px-2 py-0.5 bg-[#F7F8FA] border border-[#E4E7EC] font-mono text-[11px] text-[#0E1013] rounded-[1px]">${s}</span>`).join('')}
                  </div>
                </div>
                <div>
                  <span class="font-mono text-[10px] font-bold text-[#8C9298] uppercase tracking-wider block mb-1">ARQUITETURA DE DADOS //</span>
                  <p class="font-mono text-[11px] bg-[#F7F8FA] p-3 border border-[#E4E7EC] rounded-[2px] text-[#0E1013] leading-relaxed">
                    ${p.technical.architecture[currentLang]}
                  </p>
                </div>
              </div>
            `}
          </div>

        </div>

        <!-- Ação Inferior: Perguntar via WhatsApp -->
        <div class="pt-6 mt-6 border-t border-[#E4E7EC] flex items-center justify-between">
          <button type="button" onclick="openGalleryModal('${p.id}', projectSlideIndices['${p.id}'] || 0)" class="link-technical">
            ${t.btn_view_gallery} →
          </button>
          <a 
            href="https://wa.me/5574999954477?text=${encodeURIComponent(currentLang === 'pt' ? `Olá Rubens, vi seu case "${p.title.pt}" no portfólio e gostaria de entender como aplicar algo similar na minha operação!` : `Hello Rubens, I saw your case "${p.title.en}" on your portfolio and want to talk!`)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-xs font-mono font-medium text-[#3E7BFA] hover:text-[#1D44B8] transition-colors flex items-center gap-1">
            <span>DISCUTIR ESTE CASE</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(startProjectSlideshowTimer, 60);
}

// Funções de Controle do Slideshow Automático dos Projetos
function setProjectSlide(projectId, index) {
  const project = featuredProjects.find(p => p.id === projectId);
  if (!project || !project.gallery || project.gallery.length <= 1) return;

  const validIndex = (index + project.gallery.length) % project.gallery.length;
  projectSlideIndices[projectId] = validIndex;

  const container = document.getElementById(`slideshow-${projectId}`);
  if (!container) return;

  // Atualizar imagens visíveis
  const slides = container.querySelectorAll(".project-slide-img");
  slides.forEach((img, idx) => {
    if (idx === validIndex) {
      img.classList.remove("opacity-0", "pointer-events-none", "z-0", "scale-105");
      img.classList.add("opacity-95", "z-10", "scale-100");
    } else {
      img.classList.remove("opacity-95", "z-10", "scale-100");
      img.classList.add("opacity-0", "pointer-events-none", "z-0", "scale-105");
    }
  });

  // Atualizar dots
  const dots = container.querySelectorAll(".project-slide-dot");
  dots.forEach((dot, idx) => {
    if (idx === validIndex) {
      dot.className = "project-slide-dot w-2 h-2 rounded-full transition-all bg-[#3E7BFA] scale-125 shrink-0";
      // Rolar APENAS o container interno de dots horizontalmente (nunca a janela da página)
      const dotContainer = dot.parentElement;
      if (dotContainer && dotContainer.scrollWidth > dotContainer.clientWidth) {
        const targetLeft = dot.offsetLeft - (dotContainer.clientWidth / 2) + (dot.offsetWidth / 2);
        dotContainer.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    } else {
      dot.className = "project-slide-dot w-2 h-2 rounded-full transition-all bg-white/40 hover:bg-white/80 shrink-0";
    }
  });

  // Atualizar contador e legenda
  const numEl = document.getElementById(`slide-num-${projectId}`);
  if (numEl) numEl.textContent = validIndex + 1;

  const capEl = document.getElementById(`slide-caption-${projectId}`);
  if (capEl && project.gallery[validIndex]) {
    capEl.textContent = project.gallery[validIndex].caption[currentLang] || "";
  }

  // Reiniciar barra de progresso do slide
  const progressEl = document.getElementById(`slide-progress-${projectId}`);
  if (progressEl) {
    progressEl.style.transition = 'none';
    progressEl.style.width = '0%';
    void progressEl.offsetWidth; // Trigger reflow
    if (!projectSlidePaused[projectId]) {
      progressEl.style.transition = 'width 12000ms linear';
      progressEl.style.width = '100%';
    }
  }
}

function nextProjectSlide(projectId) {
  const current = projectSlideIndices[projectId] || 0;
  setProjectSlide(projectId, current + 1);
}

function pauseProjectSlideshow(projectId) {
  projectSlidePaused[projectId] = true;
  const progressEl = document.getElementById(`slide-progress-${projectId}`);
  if (progressEl) {
    const computedW = window.getComputedStyle(progressEl).width;
    progressEl.style.transition = 'none';
    progressEl.style.width = computedW;
  }
}

function resumeProjectSlideshow(projectId) {
  projectSlidePaused[projectId] = false;
  const progressEl = document.getElementById(`slide-progress-${projectId}`);
  if (progressEl) {
    progressEl.style.transition = 'width 12000ms linear';
    progressEl.style.width = '100%';
  }
}

function startProjectSlideshowTimer() {
  if (projectSlideInterval) clearInterval(projectSlideInterval);

  featuredProjects.forEach(p => {
    if (p.gallery && p.gallery.length > 1) {
      const progressEl = document.getElementById(`slide-progress-${p.id}`);
      if (progressEl && !projectSlidePaused[p.id]) {
        progressEl.style.transition = 'none';
        progressEl.style.width = '0%';
        void progressEl.offsetWidth;
        progressEl.style.transition = 'width 12000ms linear';
        progressEl.style.width = '100%';
      }
    }
  });

  projectSlideInterval = setInterval(() => {
    featuredProjects.forEach(p => {
      if (p.gallery && p.gallery.length > 1 && !projectSlidePaused[p.id]) {
        nextProjectSlide(p.id);
      }
    });
  }, 12000);
}

// Renderizar Projetos Secundários
function renderSecondaryProjects() {
  const container = document.getElementById("secondary-projects-container");
  if (!container) return;

  container.innerHTML = secondaryProjects.map(p => {
    return `
      <div class="p-6 border border-[#E4E7EC] bg-[#F7F8FA] rounded-[2px] flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-[#8C9298] mb-2">
            <span>${p.categoryEyebrow[currentLang]}</span>
            <span>// ${p.indexNum}</span>
          </div>
          <h4 class="text-base font-display font-bold text-[#0E1013] mb-2">${p.title[currentLang]}</h4>
          <p class="text-xs text-[#5A6065] leading-relaxed mb-4">${p.desc[currentLang]}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-[#E4E7EC]">
          ${p.tech.map(t => `<span class="px-2 py-0.5 bg-white border border-[#E4E7EC] font-mono text-[10px] text-[#5A6065]">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// --- 5. MODAL / LIGHTBOX DE ARQUITETURA ---
function openGalleryModal(projectId, initialIndex = 0) {
  const project = featuredProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("gallery-modal");
  const modalContent = document.getElementById("gallery-modal-body");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Topo do Modal -->
    <div class="flex items-start justify-between pb-4 border-b border-[#E4E7EC]">
      <div>
        <span class="text-xs font-mono text-[#3E7BFA] font-bold block">${project.sector[currentLang]} // CASE ${project.indexNum}</span>
        <h3 class="text-xl sm:text-2xl font-display font-bold text-[#0E1013] mt-1">${project.title[currentLang]}</h3>
        <p class="text-xs text-[#5A6065] font-mono mt-1">${project.metric[currentLang]}</p>
      </div>
      <button onclick="closeGalleryModal()" class="p-1.5 border border-[#E4E7EC] hover:bg-[#F7F8FA] text-[#0E1013] transition-colors" title="Fechar">
        <span class="material-symbols-outlined text-xl">close</span>
      </button>
    </div>

    <!-- Imagens / Diagramas -->
    <div class="py-6 space-y-6 max-h-[65vh] overflow-y-auto pr-2" id="gallery-modal-scroll">
      ${project.gallery.map((img, idx) => `
        <div id="modal-diagram-${idx}" class="space-y-2 border ${idx === initialIndex ? 'border-[#3E7BFA] ring-2 ring-[#3E7BFA]/20' : 'border-[#E4E7EC]'} p-2 bg-[#F7F8FA] transition-all rounded-[2px]">
          <div class="flex items-center justify-between text-[11px] font-mono text-[#5A6065] pb-1 px-1">
            <span class="text-[#3E7BFA] font-bold">SLIDE ${String(idx + 1).padStart(2, '0')} // ${project.sector[currentLang]}</span>
            <span>${idx === initialIndex ? '● EXIBINDO ATUAL' : ''}</span>
          </div>
          <img src="${img.src}" alt="${img.caption[currentLang]}" class="w-full object-contain max-h-[500px] bg-[#0E1013] rounded-[1px]" />
          <p class="text-xs text-[#5A6065] font-mono text-center py-1">
            » ${img.caption[currentLang]}
          </p>
        </div>
      `).join('')}
    </div>

    <!-- Rodapé Modal -->
    <div class="pt-4 border-t border-[#E4E7EC] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
      <span class="text-[#5A6065]">
        ${currentLang === 'pt' ? 'Gostou dessa arquitetura? Vamos adaptá-la à sua operação.' : 'Interested in this architecture? Let\'s tailor it to your business.'}
      </span>
      <a 
        href="https://wa.me/5574999954477?text=${encodeURIComponent(currentLang === 'pt' ? `Olá Rubens, vi os detalhes do case "${project.title.pt}" e gostaria de agendar uma conversa de diagnóstico.` : `Hello Rubens, I saw the details of "${project.title.en}" and would like to talk.`)}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-guardbase-primary text-xs py-2 px-4">
        <span>FALAR NO WHATSAPP</span>
        <span>→</span>
      </a>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  if (initialIndex > 0) {
    setTimeout(() => {
      const el = document.getElementById(`modal-diagram-${initialIndex}`);
      const scrollParent = document.getElementById("gallery-modal-scroll");
      if (el && scrollParent) {
        scrollParent.scrollTo({
          top: el.offsetTop - 16,
          behavior: 'smooth'
        });
      }
    }, 120);
  }
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("gallery-modal");
  if (e.target === modal) closeGalleryModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeGalleryModal();
});

// --- 6. TOPOGRAPHIC ASCII MATRIX CANVAS (GUARDBASE SIGNATURE) ---
function initAsciiCanvas() {
  const canvas = document.getElementById("ascii-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  const chars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];
  const cols = Math.floor(width / 14);
  const rows = Math.floor(height / 14);
  let offset = 0;

  function render() {
    ctx.fillStyle = "#0E1013";
    ctx.fillRect(0, 0, width, height);

    ctx.font = "11px 'DM Mono', monospace";
    offset += 0.02;

    const cellW = width / cols;
    const cellH = height / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Onda matemática topográfica composta
        const x = c / cols;
        const y = r / rows;
        const wave1 = Math.sin(x * 6 + offset) * 0.5 + 0.5;
        const wave2 = Math.cos(y * 4 - offset * 0.7) * 0.5 + 0.5;
        const combined = (wave1 * 0.6 + wave2 * 0.4);

        // Nível de intensidade e caractere ASCII
        const intensity = Math.min(Math.max(combined, 0), 1);
        const charIdx = Math.floor(intensity * (chars.length - 1));
        const ch = chars[charIdx];

        // Cores da paleta Guardbase: Azul Elétrico (#3E7BFA), Periwinkle (#A6B5FF) e Azul Royal (#1D44B8)
        if (intensity > 0.75) {
          ctx.fillStyle = "#A6B5FF";
        } else if (intensity > 0.45) {
          ctx.fillStyle = "#3E7BFA";
        } else {
          ctx.fillStyle = "#1D44B8";
        }

        ctx.fillText(ch, c * cellW + 2, r * cellH + 10);
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// --- 7. UTILITÁRIOS ---
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
  }, 3000);
}

function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav) nav.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  initAsciiCanvas();
});
