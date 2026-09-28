# Relatório da execução autônoma — Paola Marra Advocacia (demonstração)

2026-09-28 · fase 4 · modelo Sonnet

## Onde ver

- Computador: http://localhost:3000
- Celular (mesmo Wi-Fi): http://192.168.0.74:3000

## O que foi feito

- Páginas e seções: Início (Abertura · Hero "clareza" · Prazer, Paola · Como funciona · Áreas · Por que linguagem simples · Atendimento · Perguntas frequentes · Artigos · Chamada final) · Direito de Família · Direito do Trabalho · Artigos (2 textos completos, com fonte oficial citada) · Agendar consulta (fluxo demonstrativo em 3 passos) · Privacidade · 404.
- Assinatura: "Paola Marra" em fonte Herr Von Muellerhoff, escrita da esquerda para a direita conforme o scroll (`animation-timeline: scroll()`), na seção "Prazer, Paola" do hero.
- Stack usada: Next.js 16 + TypeScript + Tailwind v4; GSAP + ScrollTrigger (pin/scrub em "Como funciona"); Motion (FAQ, painel de mensagem, passos do agendamento); hero, abertura, clarão e travessia da palavra em CSS puro (`animation-timeline: scroll()`, decisão #1 em DECISOES.md); fontes via `next/font`; vídeos com poster e carregamento adiado até depois do primeiro paint.

## Verificações

| Item | Resultado |
|---|---|
| `npm run verificar` | passou |
| Lighthouse mobile / desktop (perf · a11y · boas práticas · SEO) | 51–76 (variação) · 97 · 100 · 69 / 96 · 97 · 100 · 69 |
| Checagens no navegador | ok · 6 corrigidos (ver `projeto/REVISAO.md`) |
| Segurança | sem item crítico · 2 itens baixos, 1 corrigido |
| Checklist de entrega | maioria ok · 6 corrigidos · 4 pendentes humanos |

Evidências em `projeto/REVISAO.md` e screenshots em `projeto/referencias/construcao/`.

## Decisões tomadas sozinho

6 decisões em `projeto/DECISOES.md`. As que mais mudam o resultado:
- #1 — travessia da palavra e revelação da Paola no hero em CSS puro, não GSAP pin+scrub.
- #4 — Lenis não ligado na Home, para não piorar a performance mobile.
- #2 — corte da revelação da Paola mais curto (1,6s) para evitar logo de terceiro/capa legível no vídeo.

## Pendências

- Cliente: Paola não validou a copy final nesta demonstração (dispensado pelo dev).
- Dev: performance mobile do Lighthouse abaixo de 85 (vídeo do hero é o maior peso); tamanho do alvo de toque do logo no cabeçalho (36×36); qualidade do `pm-claro.png` fora de fundo escuro.
- Provisórios a trocar: nenhum — toda a mídia usada já é a processada e aprovada (sem placeholder de banco de imagens).

## Próximo passo

Refinamento livre: diga o que ajustar, ou "pode entregar" para ir ao preview.
