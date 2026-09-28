# Direções visuais — Paola Marra | Advocacia

> DEMONSTRAÇÃO — DADO FICTÍCIO. Projeto de portfólio; não é escritório em operação.

Versão 2 (2026-09-28). Refeita a pedido do dev: todas as direções entre **marcante e uau**, com vídeo, scroll e animação, e hero surpreendente. A versão 1 (imagens estáticas) foi substituída.

## Design read

- Página de conversão (trilha A): apresenta o conceito e leva ao agendamento demonstrativo.
- Público do cenário: mulheres de 25 a 65 anos em Brasília, muitas "desorientadas e assustadas com processos" (material bruto §3). Precisam de calma e clareza, não de espetáculo pelo espetáculo.
- Clima pedido pela cliente: profissional, acolhedor, confiável, "clean mas quente"; **não** quer parecer grande escritório impessoal nem "millennial" (material bruto §6).
- Ambição: marcante/uau (dev, 2026-09-28).
- Identidade: azul escuro #2c3e50, dourado #d4af37, branco, cinza suave; logo PM com balança.
- Regras de nicho: sem preço, parcelamento, depoimento, resultado ou credencial real (Provimento 205/2021 como referência editorial).

**Tensão a resolver:** "uau" contra "acolhedor". Solução em todas as direções: o efeito conta a ideia central do brief (**clareza**), e o texto fica sempre calmo, curto e legível. Um momento forte por página, o resto quieto.

## Referências analisadas (Playwright, 1440 e 375)

| Referência | Técnica observada | Capturas |
|---|---|---|
| [Meer Mohsin](https://www.meermohsin.me) | Hero com título gigante passando **entre** o fundo e a pessoa recortada (camadas de profundidade); página de ~28.000 px dividida em capítulos fixados na tela, trocados pelo scroll com máscaras de forma. | `referencias/analise-visual/meermohsin-*` |
| [Moto Card](https://www.moto-card.com) | Abertura com logo centralizado; hero com objeto único em pedestal sobre textura escura e título centralizado; no scroll, uma nova cena sobe (globo) com etiquetas flutuando. | `referencias/analise-visual/motocard-*` |
| [Money in Check](https://moneyincheck.org) | Título monumental com objeto sobreposto, planos de profundidade (análise anterior). | `referencias/analise-visual/` |
| [OpenAI GPT-6 Astra](https://openai.com/index/gpt-6-astra/) | Não analisado: o site bloqueia navegador automatizado (403). | — |

Portfólio BrandForge (`portfolio/sites/`, local e remoto): vazio. Sem conflito de fonte, paleta ou hero.

## Autocrítica

Clichês de advocacia evitados: martelo (vídeo 13 descartado), balança como ilustração principal, serif de "tradição", banner escuro com texto dourado centralizado, "defendendo seus direitos".
O que é deste brief: a palavra **clareza** (diferencial declarado pela cliente), a luz entrando (entender antes de decidir), o método em etapas, o dourado e o azul da identidade dela.

---

## Direção A — "A janela" (marcante)

**Conceito:** a consulta como uma persiana que se abre. Quem chega está no escuro; cada etapa deixa entrar mais luz.
**Dials:** variação 6 · movimento 6 · densidade 3

**Paleta:** `#1e2d3d` azul (fundo) · `#142130` azul profundo · `#d4af37` dourado · `#eef2f5` papel · `#9fb0c0` névoa
**Tipografia:** Archivo (Google Fonts, eixo de largura). Títulos largos (wdth 108, peso 800); corpo normal.

**Hero:** duas colunas. À esquerda, H1 e ação sobre azul sólido; à direita, uma "janela" com o vídeo 15 (luz na persiana) atrás de 12 lâminas azuis. Ao rolar, as lâminas se fecham até sumir e a luz ocupa a janela.
**Scroll no site:** "Como funciona" fixado na tela, com três etapas, e cada uma abre um terço da persiana. Resto da página estático.
**H1:** "Família e trabalho, com clareza."
**Mídia:** 15 (hero e método).
**Referência:** Meer Mohsin, na troca de capítulos por máscara de forma. Aqui a máscara é a própria persiana e só roda em uma seção.
**Risco:** é a mais segura das três e a menos surpreendente no primeiro segundo.

**Pranchas:** `projeto/pranchas/a.html` · capturas `referencias/direcoes/a-1440.png`, `a-1440-scroll.png`, `a-375.png`

---

## Direção B — "Clareza em ouro" (uau, **recomendada**)

**Conceito:** a palavra que a cliente usa para se diferenciar vira o hero. "clareza" ocupa a tela e as letras são janelas para o vídeo de partículas douradas. Ao rolar, a câmera **atravessa** a palavra: as letras crescem até o ouro tomar a tela inteira, e o site continua do outro lado.
**Dials:** variação 7 · movimento 8 · densidade 3

**Paleta:** `#131f2c` azul noite (fundo) · `#1e2d3d` azul PM · `#d4af37` dourado · `#f1f4f7` papel · `#a3b3c2` névoa
**Tipografia:** Bricolage Grotesque, condensada no display (wdth 75, peso 800) e média nos títulos. Corpo em Instrument Sans.
**Forma:** botões em pílula, cartões com raio de 16 px.

**Hero:** vídeo 14 em tela cheia, com uma camada azul em `multiply` que deixa o vídeo aparecer só dentro das letras. H1, apoio e ação ficam na base, à esquerda. Seção fixada de ~2,2 telas: a palavra escala 14× e o texto da base sai.
**Escolhida pelo dev em 2026-09-28**, com três acréscimos e a revelação da Paola:
- **Abertura com o logo PM** (técnica do Moto Card). Na primeira visita, o logo claro (letras em papel, balança em ouro) aparece sobre o azul, fica cerca de 1 s e se dissolve em escala e desfoque, revelando o hero. Total de 2,4 s, só CSS, sem bloquear o conteúdo, que já está no HTML. Aparece uma vez por sessão e some com `reduce`.
- **Revelação da Paola.** Depois de atravessar "clareza", o ouro toma a tela e surge o vídeo 10 (a Paola, conforme o dev) com "Prazer, Paola." e o texto de apresentação.
- **Clarão dourado** no instante da passagem: um brilho radial em `screen` acende e apaga, e a Paola emerge da luz.
- **Assinatura:** "Paola Marra" em letra manuscrita dourada (Herr Von Muellerhoff), escrita da esquerda para a direita conforme o scroll. Troca pela assinatura real se o dev enviar.

**Scroll no site:**
1. Hero: logo → "clareza" → atravessar a palavra → clarão → Paola → assinatura (momento principal, seção fixada de ~4 telas).
2. "Como funciona" (aprovado 2026-09-28): três etapas fixadas, com número grande em ouro e texto trocando, sem cartões. Ao fundo, a luz da persiana (vídeo 15) abre um terço a cada etapa, com lâminas azuis encolhendo como na prancha A.
3. Áreas: Família e Trabalho lado a lado, com a lista de serviços revelada ao passar (sem scroll hijack).
4. Chamada final (aprovado): as partículas descem e assentam numa linha de luz atrás de "Agendar consulta" (vídeo do prompt 4; reserva: vídeo 14 a 0,5× de velocidade).
5. Páginas Família e Trabalho (aprovado): o topo repete a palavra-janela em escala menor, "família" ou "trabalho" com o vídeo 14 dentro das letras, sem travessia. O H1 da página fica abaixo.
6. Confirmação do agendamento (aprovado): ao confirmar, um brilho dourado curto sobe do botão (Motion, ~600 ms) e a mensagem de demonstração entra. Sem vídeo.
Tudo com `prefers-reduced-motion`: sem escala e sem seção fixada.

**H1:** "Família e trabalho em Brasília, sem juridiquês."
**Mídia:** 14 (hero e CTA final), 10 (revelação da Paola), 15 (fundo discreto do "Como funciona"), logo 03 na navegação e na abertura (versão clara).
**Referências:** Meer Mohsin (texto entre camadas: aqui o vídeo fica *dentro* da tipografia); Moto Card (objeto único e forte sobre fundo escuro; aqui o objeto é a palavra); Money in Check (título monumental).
**Por que recomendo:** o efeito mais surpreendente das três conta exatamente o diferencial da cliente, e o vídeo 14 não mostra pessoa, escritório nem texto (zero risco no nicho). É quente pelo dourado, não corporativo.
**Risco:** fundo escuro pode soar frio; compensado com dourado generoso, texto claro e seções internas mais leves em `#1e2d3d`. Vídeo 14 é 720p: pedir versão 1080p e vertical (ver MIDIA).

**Pranchas:** `projeto/pranchas/b.html` · capturas em `referencias/direcoes/`: `b-1440-abertura.png`, `b-1440.png`, `b-1440-travessia.png`, `b-1440-clarao.png`, `b-1440-paola.png`, `b-1440-assinatura.png` (e as mesmas em 375)

---

## Direção C — "Porta aberta" (uau narrativo)

**Conceito:** o site como uma visita. O scroll conduz a câmera pelo escritório (vídeo 11), da porta até a janela, e cada trecho da visita é um capítulo: Entrada, Família, Trabalho, Como funciona, Consulta.
**Dials:** variação 8 · movimento 9 · densidade 2

**Paleta:** `#0f1a26` tinta · `#1e2d3d` azul · `#d4af37` dourado · `#f3f1ec` papel · `#b3bfca` névoa
**Tipografia:** Schibsted Grotesk, peso 900 nos títulos (compacto, pesado) e 400 no corpo.

**Hero:** vídeo 11 em tela cheia, com véu escuro nas bordas. O H1 enorme fica embaixo à esquerda e o índice de capítulos à direita, com barra dourada de progresso. Seção fixada de ~3 telas, com o scroll controlando o tempo do vídeo.
**Scroll no site:** a página inteira é a visita, com capítulos fixados; no celular, o índice some e o vídeo toca normalmente.
**H1:** "Entre. A lei, explicada com calma."
**Mídia:** 11 (principal), 10 como apoio opcional (pessoa ilustrativa, com legenda de demonstração).
**Referências:** Meer Mohsin (página inteira em capítulos fixados); Apple iPhone da lista curada (vídeo controlado pelo scroll, técnica conhecida; não reanalisado).
**Risco:** o escritório com vista para arranha-céus sugere o "grande escritório impessoal" que a cliente não quer, e um espaço que não existe. Vídeo controlado pelo scroll pesa mais (vídeo precisa de keyframe a cada quadro) e exige mais cuidado no celular.

**Pranchas:** `projeto/pranchas/c.html` · capturas `referencias/direcoes/c-1440.png`, `c-1440-scroll.png`, `c-375.png`

---

## Recomendação

**Direção B**, escolhida pelo dev em 2026-09-28. A e C ficam registradas como alternativas descartadas.
