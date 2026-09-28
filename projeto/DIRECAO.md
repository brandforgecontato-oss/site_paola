# Direções criativas — Paola Marra

> DEMONSTRAÇÃO — DADO FICTÍCIO. Projeto conceitual para portfólio; não representa uma advogada ou escritório em operação.

## Conceito central

Uma conversa compreensível sobre assuntos que atravessam a vida: família e trabalho. O espaço de escuta orienta as imagens, o ritmo e a hierarquia, sem métricas de êxito ou credenciais fictícias apresentadas como reais.

Leitura do briefing: site institucional com estrutura de agendamento demonstrativo, público amplo, muitas pessoas chegando com insegurança. Ambição aprovada: **marcante**, mantendo alternativas discreta e uau para comparação. Paleta azul/dourado recebida do dev; mídias geradas fornecidas pelo dev.

## Portfólio e pesquisa

- `portfolio/sites/` contém apenas `.gitkeep`; nenhum projeto anterior disponível para comparar fontes ou composição.
- Modo GitHub Desktop respeitado: sem fetch, commit ou push. Não foi afirmada consulta a portfólio remoto atualizado.
- Mind Robotics, Money in Check e Vittude visitados via Playwright em 1440 e 375, com rolagem até o fim. Capturas e observações em `projeto/referencias/analise-visual/`.
- As fontes são pontos de partida de composição; não reutilizamos marcas, textos ou imagens desses sites.

## A — Escuta

- **Ambição:** discreta.
- **Ideia:** uma presença humana em um espaço de leitura calmo.
- **H1:** “Escuta atenta. Direito em Brasília.”
- **Apoio:** “Uma conversa clara pode ser o primeiro passo para compreender uma situação difícil.”
- **CTA:** “Simular consulta”.
- **Referências:** [Vittude](https://vittude.com/), enviada pelo dev: composição texto/fotografia e ação clara, observadas no hero. Reinterpretação com imagem retangular de um único canto amplo e fundo claro, sem cores ou recorte orgânico da referência. [Mind Robotics](https://www.mindrobotics.com), da lista curada: navegação curta e hierarquia ampla; aqui em escala silenciosa, sem pills no título.
- **Mídia:** `04-profissional-ilustrativa.jpg` em enquadramento vertical; legenda esclarece que não é retrato da Paola. Logo PM fornecido. Sem fotos de clientes ou depoimentos.
- **Alavancas:** espaço como material, largura de leitura contida e neutros suaves. Inverte a monumentalidade tipográfica: proximidade acima de impacto.
- **Paleta:** azul `#2c3e50` para texto/CTA; branco `#ffffff`; névoa `#edf1f4`; apoio `#4b5e6c`; ouro fosco `#a88c46` reservado a detalhes não textuais.
- **Tipografia:** Lora 400 nos títulos, Source Sans 3 400/600 no corpo. Razão 1,25; H1 ~62 px no desktop, 34 px no celular. Serifa justificada pelo conceito de leitura cuidadosa; nenhum destaque isolado em itálico.
- **Forma:** controles com raio 6 px; imagem com um canto de 128 px no desktop; sem sombras de cartões.
- **Layout:** texto e imagem vertical em proporção aproximada 5:3. Áreas abaixo em duas colunas abertas; método depois em lista de etapas e FAQ em acordeões.

```text
aviso de demonstração
marca                         navegação
H1 + apoio + CTA              imagem humana
áreas em duas colunas
método em etapas / FAQ / contato demo
```

- **Assinatura:** uma dobra suave no enquadramento da foto; interação principal é a abertura clara do diálogo demonstrativo. Movimento reduzido mantém tudo estático.
- **Pranchas:** `projeto/pranchas/a.html`; `projeto/referencias/direcoes/a-1440.png` e `a-375.png`.
- **Risco:** pode parecer conservadora frente à ambição marcante; a imagem sintética exige contextualização permanente.

## B — Presença (recomendada)

- **Ambição:** marcante.
- **Ideia:** o azul sustenta a confiança; a luz e a madeira do escritório trazem acolhimento.
- **H1:** “Família e trabalho. Direito com clareza.”
- **Contexto do hero:** “Direito de Família e do Trabalho em Brasília”. Brasília identifica o cenário fictício, não um estabelecimento real.
- **Apoio:** “Escuta, linguagem simples e atenção ao que importa em cada etapa da sua vida.”
- **CTA:** “Simular consulta”.
- **Referências:** [Mind Robotics](https://www.mindrobotics.com), seção “Intelligence on the factory floor”: separação entre título dominante e área visual/painel informativo, com navegação enxuta. Reinterpretamos essa hierarquia em texto à esquerda e ambiente à direita, sem pills ou cena industrial. [Vittude](https://vittude.com/): protagonismo de uma ação e presença acolhedora da imagem, aqui com ambiente em lugar de retrato.
- **Mídia:** `01-escritorio-geral.png` no hero, cortado pelo layout sem modificar o original. `04-profissional-ilustrativa.jpg` apenas em seção posterior, como ilustração. Textura recebida opcional em uma seção do conceito, com baixa intensidade.
- **Alavancas:** grande superfície de cor, profundidade pela fotografia e ritmo entre azul e áreas claras. Inverte o acento sempre discreto: dourado ganha área apenas no botão principal.
- **Paleta:** azul `#2c3e50` (fundo/texto); branco suave `#fcfcfa`; ouro `#d4af37` (CTA); apoio claro `#dde3e8`; areia `#e9e2d2` (aviso); azul profundo `#263949` (texto sobre ouro).
- **Tipografia:** DM Sans 400/450/500/600, títulos e corpo na mesma família. Razão 1,25; H1 ~61 px no desktop, ~34 px no celular. Contorno aberto e peso moderado para evitar solenidade excessiva.
- **Forma:** raio 2 px em controles; canto inferior esquerdo amplo no quadro do escritório (72 px). O canto funciona como passagem entre imagem e conteúdo. Sem caixas repetidas ou sombras decorativas.
- **Layout:** bloco azul contínuo no topo; duas áreas abaixo sobre fundo claro, ao lado de um título de seção; depois apresentação do conceito, sequência de três etapas, artigos e FAQ.

```text
aviso de demonstração
marca                         navegação
fundo azul
H1 + apoio + CTA              ambiente em grande quadro
fim do fundo azul
título da seção              Família        Trabalho
conceito / método / artigos / FAQ / simulação
```

- **Assinatura:** aproximação de 3,5% da imagem do escritório ao passar o ponteiro; em telas táteis ela permanece estática. `prefers-reduced-motion` desativa a aproximação. Não há parallax, pin ou conteúdo inicialmente oculto.
- **Pranchas:** `projeto/pranchas/b.html`; `projeto/referencias/direcoes/b-1440.png` e `b-375.png`.
- **Risco:** excesso de azul pode endurecer o conjunto; por isso as seções seguintes são claras e a fotografia recebe luz quente. Manter dourado longe de texto pequeno sobre branco.

## C — Perspectiva

- **Ambição:** uau.
- **Ideia:** entrar visualmente no espaço de uma conversa importante.
- **H1:** “Direito em Brasília. Novas perspectivas.”
- **Apoio:** “Clareza para olhar o presente. Cuidado para pensar o próximo passo.”
- **CTA:** “Simular consulta”.
- **Referência:** [Money in Check](https://moneyincheck.org), da lista curada: título serifado monumental, objeto/ambiente e texto em planos de profundidade. Reinterpretamos em fotografia de ambiente ocupando o palco e tipografia no primeiro plano; sem xadrez, notas, grade ou tela de carregamento. No celular, a composição assume quatro linhas e conserva o CTA visível.
- **Mídia:** `01-escritorio-geral.png` como fundo panorâmico; camada escura de proteção sob texto. Marca PM no cabeçalho, sem clientes fictícios em evidência.
- **Alavancas:** escala tipográfica, profundidade por camadas e um único movimento de entrada. Inverte a economia de espaço com ocupação visual ampla.
- **Paleta:** noite `#1b2e3b`; branco `#ffffff`; azul `#223542`; ouro claro `#e4c677`; apoio `#e1e5e9`; fundo de seção `#f9fafb`.
- **Tipografia:** Bodoni Moda 400 nos títulos, Manrope 400/600 no corpo. Razão 1,333; H1 até ~102 px no desktop e ~45 px no celular. Contraste da serifa escolhido para uma composição de capa, não como fonte de texto corrido.
- **Forma:** cantos retos, navegação por dois campos na base do palco; botão com superfície sólida.
- **Layout:** hero imersivo, navegação das duas áreas integrada à base e seção seguinte com bastante respiro; conteúdo restante retoma hierarquia simples.

```text
aviso de demonstração
imagem de ambiente em toda a largura
marca / navegação sobre faixa protegida
título monumental + apoio + CTA
Família                       Trabalho
seção clara / método / conteúdos / FAQ
```

- **Assinatura:** imagem aproxima-se de escala 1,035 para 1 em 1,2 s ao abrir; texto já visível. Com movimento reduzido, imagem estática. Sem vídeo obrigatório, 3D ou rolagem travada.
- **Pranchas:** `projeto/pranchas/c.html`; `projeto/referencias/direcoes/c-1440.png` e `c-375.png`.
- **Risco:** mais solene; a serifa fina exige tamanho generoso e fundo protegido. A camada escura e o cabeçalho sólido evitam perda de contraste sobre a janela.

## Recomendação e autocrítica

**B — Presença** traduz melhor o visual marcante/acolhedor solicitado. A funciona para uma direção silenciosa; C, para priorizar impacto de portfólio.

Removidos contadores, depoimentos de resultado, etiquetas decorativas sobre imagens e conjunto de ícones com três estilos incompatíveis. As três alternativas variam fonte, enquadramento e estrutura, mantendo a identidade recebida.

## Verificação das pranchas

- Breakpoints: 320, 375, 768, 1024, 1280, 1440 e 1536 px. Evidência em `projeto/referencias/direcoes/verificacao.json`.
- Capturas finais em 1440 × 900 e 375 × 812. Menu, diálogo, conteúdo sem JavaScript e movimento reduzido verificados; isso não substitui a revisão do site na construção.
- Contrastes das cores planas em `projeto/referencias/direcoes/contraste.json`; texto sobre fotografia usa proteção escura, a conferir novamente no layout final.
- Imagens apenas enquadradas por CSS nesta fase; originais preservados. Não há implementação do site.

## Escolhida no portão

Ainda não escolhida. Aguardando escolha/ajustes do dev e autorização “pode construir”.
