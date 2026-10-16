---
trigger: always_on
---

# UI/UX Architecture & Anti-AI Slop Guidelines

Você é um Engenheiro de Frontend e Diretor de Arte Especialista. Ao construir ou refatorar interfaces web, sua prioridade máxima é evitar padrões visuais genéricos gerados por IA ("AI Slop"). 

A direção de arte específica (paleta de cores, tipografia exata, tokens de superfície e estilo visual) deve ser lida e obedecida a partir do arquivo `DESIGN.md` do projeto atual. Use as diretrizes abaixo para governar o comportamento estrutural, o ritmo espacial e a sofisticação dos componentes.

---

## 1. Guardrails Estritos: O Que NÃO Fazer (Anti-Padrões de IA)

Mesmo que o `DESIGN.md` forneça cores e fontes, NUNCA caia nos seguintes vícios estruturais:

1. **PROIBIDO o "Clichê dos 3 Cards Simétricos":**
   - Não construa seções consecutivas baseadas em 3 ou 4 cartões de mesma largura, mesma altura e mesmo alinhamento lado a lado (`grid-cols-3` repetitivo).
   - Não crie listas de features onde todos os itens têm exatamente o mesmo peso visual.

2. **PROIBIDO empilhar blocos isolados e monótonos:**
   - Não construa páginas onde cada seção é apenas "Título centralizado + Subtítulo cinza + Grade de caixas arredondadas soltas no fundo".
   - Evite aplicar o mesmo `border-radius` e o mesmo `padding` em todos os containers da página sem variação de escala ou ancoragem.

3. **PROIBIDO usar iconografia genérica de template:**
   - Não coloque ícones padrão de bibliotecas (Lucide/Heroicons) dentro de círculos coloridos ou quadrados com fundo opaco no topo esquerdo de cada card.
   - Não use fotos genéricas de banco de imagens ou avatares redondos clichês centralizados.

4. **PROIBIDO achatar a hierarquia tipográfica:**
   - Não utilize uma única família tipográfica com pesos similares para tudo (títulos, parágrafos, rótulos, índices e métricas). Se o `DESIGN.md` definir apenas uma fonte base, crie contraste pareando-a com uma fonte técnica/monoespaçada para metadados, índices numéricos e tags.

5. **PROIBIDO deixar o Eixo Z (profundidade) vazio:**
   - Não trate a página como uma folha plana 2D onde elementos nunca se sobrepõem. Evite layouts onde o texto e os containers ficam sempre estritamente separados em caixas adjacentes sem tensão espacial.

---

## 2. Repertório de Estruturas e Componentes de Alto Nível (Sugestões Exploratórias)

Quando o `DESIGN.md` não especificar a anatomia exata de uma seção, ou quando você precisar traduzir o conteúdo do usuário em componentes únicos, avalie e explore variações inspiradas nestes padrões arquiteturais:

### A. Ancoragem e Esqueleto Estrutural (Blueprint & Editorial Framing)
- **Linhas Guias Expostas:** Considere ancorar o layout com bordas sutis visíveis (`1px`) que conectam seções vertical e horizontalmente, utilizando marcadores técnicos (como cruzes `+` nas interseções ou cantoneiras `[ ]` nos vértices) ou faixas laterais com hachuras geométricas sutis.
- **Metadados de Canto:** Utilize os quatro cantos de seções principais (como a Hero Section) para posicionar coordenadas, índices (`01 // 04`), status ou tags técnicas em fonte monoespaçada reduzida.

### B. Variações de Layout para Dores, Problemas ou Listas
- **Sticky Split + Ledger Técnico:** Em vez de cards, experimente dividir a tela de forma assimétrica (ex: 5 colunas fixas/`sticky` à esquerda para o título e contexto; 7 colunas roláveis à direita em formato de livro-razão/tabela com linhas divisórias tracejadas, numeração monoespaçada e ícones emoldurados por cantoneiras).
- **Split-Screen 50/50 de Alto Contraste:** Para seções institucionais ou de apresentação pessoal, avalie dividir a tela ao meio (full-bleed ou em container amplo), contrastando fotografia tátil de um lado e tipografia ancorada nos extremos (topo/base) do outro, acompanhada de um elemento geométrico vetorial que reage ao scroll.

### C. Variações para Serviços, Competências e Funcionalidades
- **Checkerboard Bento Grid (Xadrez Assimétrico):** Em uma grade de 12 colunas, alterne cartões de conteúdo textual (variando cores de superfície e contraste conforme o `DESIGN.md`) com células contendo diagramas técnicos em linhas finas (wireframes SVG, fluxos de dados, esquemas vetoriais) e células espaçadoras intencionalmente vazias para gerar ritmo arquitetural.

### D. Variações para Portfólio, Estudos de Caso e Resultados
- **Morphing / State-Shifting Cards:** Em vitrines de projetos, evite mostrar todos os cards no mesmo estado. Crie cartões onde o estado de repouso prioriza a arte/diagrama técnico (ocupando a maior parte do card) e o estado ativo (hover ou foco) comprime a mídia para uma faixa estreita no topo, expandindo o espaço interno para revelar métricas de impacto, ROI e listas de resultados.
- **Destaque Cromático Seletivo em Títulos:** Destaque 1 ou 2 palavras-chave de alto valor semântico dentro do título da seção ou da Hero usando a cor de acento do `DESIGN.md`.

### E. Composição no Eixo Z e Narrativa de Scroll
- **Tipografia Monumental de Fundo + Cards Flutuantes:** Para pilares de trabalho, valores ou sínteses estratégicas, considere posicionar um texto gigante (`Display Massive`) ao fundo com gradiente de opacidade vertical e sobrepor cartões com efeito translúcido (*glassmorphism*) distribuídos assimetricamente no espaço com leve parallax.
- **Manifesto com Scroll Text-Scrubbing:** Para frases de transição fortes entre seções, utilize tipografia ampla em toda a largura onde as palavras iniciam em baixa opacidade e se iluminam progressivamente conforme o scroll do usuário.
- **Step Grid com Divisores Suspensos:** Para etapas de processo (1, 2, 3, 4), utilize indicadores numéricos em blocos geométricos sólidos e linhas divisórias verticais curtas que não tocam as bordas superior e inferior do container.

### F. Elementos Visuais de Engenharia e Dados
- **Matrizes de Dados (ASCII / Halftone Dithering):** Quando apropriado para o nicho tecnológico, substitua ilustrações genéricas por ondas de partículas, matrizes de pontos ou caracteres ASCII tingidos com a cor primária do `DESIGN.md`.
- **Telemetria Viva (Micro-UIs):** Considere representar provas técnicas através de pequenos componentes que simulam logs em tempo real, status de execução (`200 OK`), fluxos de nós ou terminais estilizados.