# Revisão — Paola Marra Advocacia (demonstração)

2026-09-28 · fase 4. Evidências: screenshots em `projeto/referencias/construcao/`, relatórios do subagente `revisor` e do subagente `seguranca`, `npm run verificar`, Lighthouse (`projeto/lighthouse-desktop.json`, `projeto/lighthouse-mobile.json`).

## Visual e conteúdo

| Item | Status | Evidência |
|---|---|---|
| Seções da Home na ordem do mapa (Abertura·Hero·Prazer Paola·Como funciona·Áreas·Por que simples·Atendimento·FAQ·Artigos·CTA final) | ok | `revisor`; screenshots `home-1440-topo.png`, `home-1920-topo-retest.png` |
| Aviso fixo de demonstração em todas as páginas, texto exato | ok | `revisor` conferiu 6 páginas |
| Textos de Família, Trabalho, Artigos, Privacidade, 404 batem com COPY.md | ok | `revisor` |
| Fluxo `/agendar` completo (3 passos + validações + confirmação) | ok | testado manualmente nesta sessão (clique real), screenshot `agendar-confirmado.png` — a mensagem final é exatamente "Tudo certo com a demonstração." |
| Regras de nicho (sem preço, depoimento, resultado, "especialista"; registro = "demonstração") | ok | `revisor` |
| Títulos de página com separador "·" e Home com title/description próprios | **corrigido** | achados R-04/R-05 do revisor; `app/layout.tsx` e `app/page.tsx` ajustados; reconferido |
| Hero: travessia da palavra + revelação da Paola + assinatura com `prefers-reduced-motion` | **corrigido** | achados R-01/R-02/R-03 do revisor (bloco `.hero-sticky` sem `padding-top`/altura revertida corretamente); ajustado em `app/globals.css`; reconferido em 375, 1440 e 1920 com `reduce` emulado — sem vão em branco, sem sobreposição, Paola e assinatura visíveis |
| "Como funciona" (pin GSAP + persiana) trocando de passo sem sobrepor texto | **corrigido** | bug de lógica no `ComoFunciona.tsx` (tween `autoAlpha` conflitante entre passos) corrigido e reconferido em capturas intermediárias |

## Responsividade

| Item | Status |
|---|---|
| 375, 768/mobile e 1920px sem quebra visual | ok (375, 1440, 1920 conferidos com screenshots) |
| Sem scroll horizontal em 375px | ok — `document.documentElement.scrollWidth > innerWidth` = false |
| Alvos de toque ≥44px em links principais | **corrigido parcialmente** — links de rodapé e "Ver todos os artigos" ganharam padding vertical para atingir a faixa de 44px; o link da marca no cabeçalho (36×36) ficou abaixo do ideal — **pendente humano**: aceitar o tamanho atual do logo ou aumentar a área clicável |
| Imagens responsivas (`next/image` com `sizes`) | ok |

## Performance

| Item | Status | Evidência |
|---|---|---|
| `npm run verificar` (lint + build) | ok | build limpo, sem erros |
| Lighthouse desktop (perf·a11y·boas práticas·SEO) | **96 · 97 · 100 · 69** | `projeto/lighthouse-desktop.json`. SEO 69 só por causa do `noindex` proposital (preview não é para publicar) |
| Lighthouse mobile (perf·a11y·boas práticas·SEO) | **51–76 (variação entre execuções) · 97 · 100 · 69** | `projeto/lighthouse-mobile.json`. **Pendente**: performance mobile abaixo da meta de 85, dominada pelo peso do vídeo do hero (LCP 4,5–5,4s) — ver decisão e nota abaixo |
| Hero sem JavaScript (H1, apoio, CTA, poster) | ok | poster aparece via `<video poster>` nativo; conteúdo textual está no HTML servido |
| `prefers-reduced-motion` sem scroll-jacking/parallax | ok | reconferido após correção acima |

**Nota sobre performance mobile:** a direção aprovada pede hero "uau" com vídeo cinematográfico em tela cheia (decisão do dev, `projeto/ESTADO.md`). O maior custo é o próprio arquivo de vídeo do hero (~3,7 MB no formato preferencial). Já mitigado nesta fase: vídeo do hero e da página de área agora só entra no DOM depois do primeiro paint (poster aparece primeiro, via `next/image`, para o LCP não competir com o vídeo), evitando carregar o vídeo da Paola antes da hora. Resultado ainda abaixo de 85 em mobile; comprimir ainda mais o vídeo (menor bitrate/resolução) é a próxima alavanca, registrada como pendência de refinamento.

## Acessibilidade

| Item | Status | Evidência |
|---|---|---|
| Contraste (texto branco/dourado sobre navy e sobre vídeo) | ok (avaliação visual) | screenshots; texto sempre com fundo escuro sólido ou gradiente atrás |
| Alt text em imagens de conteúdo | ok | checagem automática: 0 imagens sem alt |
| Label em campos do formulário de agendar | ok | `FluxoAgendar.tsx` usa `<label htmlFor>` em nome, e-mail e mensagem; grupos com `<legend>` |
| Tab em ordem lógica, foco visível | ok | testado nesta sessão: skip link → logo → links do menu, todos com `outline` visível |
| HTML semântico, um H1 por página | ok | checagem automática |
| `prefers-reduced-motion: reduce` sem rolagem sequestrada | ok, após correção | ver item de Hero acima |

## Segurança

Relatório completo do subagente `seguranca`: **aprovado com pendências, sem item crítico ou bloqueante.**

| ID | Gravidade | Resumo |
|---|---|---|
| S-01 | baixa | CSP sem diretivas explícitas de `script-src`/`style-src`/`media-src` | **corrigido** — CSP fechada em `next.config.ts` (`default-src 'self'` + diretivas específicas; `unsafe-eval` só fora de produção) |
| S-02 | baixa | `dangerouslySetInnerHTML` no JSON-LD | sem ação necessária — valor vem só de dados internos (`site.nome`, `urlDoSite()`), nunca de entrada de usuário |

`npm audit`: 0 vulnerabilidades. Nenhum segredo encontrado. Formulários (agendar, mensagem, newsletter) 100% no navegador, sem `fetch`/armazenamento — conforme decisão registrada. Sem login, banco ou pagamento nesta demonstração (itens correspondentes do checklist não se aplicam).

## Conformidade de nicho regulado

- Copy revisada contra `projeto/BRIEF.md` §2: sem preço, depoimento, avaliação ou promessa de resultado — ok.
- Registro profissional exibido como "demonstração" em todo o site — ok.
- Confirmação do cliente: **pendente humano** — Paola não valida a copy nesta demonstração, por decisão do dev (ESTADO.md), então este item do checklist fica formalmente pendente, como esperado.

## Pendências

- [ ] Performance mobile abaixo de 85 no Lighthouse local — ligado ao peso do vídeo do hero; considerar recomprimir com bitrate menor no refinamento.
- [ ] Alvo de toque do logo no cabeçalho (36×36) abaixo de 44px — decisão do dev sobre aumentar a área clicável.
- [ ] `public/brand/pm-claro.png` (logo da abertura) em qualidade baixa fora de fundo escuro — decisão #3 em DECISOES.md.
- [ ] Corte do vídeo da revelação da Paola ficou em 1,6 s em vez dos ~2,4 s sugeridos, para evitar logo de terceiro e capa de livro legível — decisão #2 em DECISOES.md.
