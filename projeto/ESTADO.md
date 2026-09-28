# Estado do projeto — Paola Marra - Advocacia

> DEMONSTRAÇÃO — DADO FICTÍCIO. Projeto de portfólio, conforme atualização do dev; não é escritório em operação.

## Agora

- **Fase atual:** 4 — Construção, revisão e relatório (não iniciada)
- **Próximo passo:** `/clear`, `/model sonnet` e "vamos continuar"; a construção autônoma segue `projeto/DIRECAO.md` (direção B), `projeto/COPY.md`, `projeto/MIDIA.md` e a Stack abaixo.
- **Modelo recomendado:** Sonnet
- **Versionamento:** modo 1 — GitHub Desktop; Claude/Codex não fazem commit nem push.
- **Última atualização:** 2026-09-28 por Claude Code (retomada após o Codex ficar sem créditos)
- **Modo:** teste/portfólio — cenário fictício autorizado; identificação de demonstração; sem atendimento real ou publicação autorizada.

## Fases

| Metade | # | Fase | Status | Resultado |
|---|---|---|---|---|
| Planejamento | 0 | Ambiente | Concluída | Git local, dependências e Chromium conferidos |
| | 1 | Briefing e nicho | Concluída | `projeto/BRIEF.md` atualizado para demonstração |
| | 2 | Pacote criativo | Concluída | `projeto/DIRECAO.md` (v2, B recomendada), `projeto/COPY.md`, `projeto/MIDIA.md`, pranchas em `projeto/pranchas/` |
| | 3 | Portão | Concluída | "Pode construir" em 2026-09-28, direção B |
| Execução autônoma | 4 | Construção, revisão e relatório | Não iniciada | `projeto/REVISAO.md`, `projeto/RELATORIO.md` |
| Refinamento | 5 | Refinamento livre | Não iniciada | — |
| Entrega | 6 | Preview, feedback, lançamento e portfólio | Não iniciada | — |

## Decisões aprovadas

- 2026-09-27 — Versionamento pelo GitHub Desktop, modo 1 (aprovado pelo dev).
- ~~2026-09-27 — Cliente real (confirmado pelo dev).~~ Substituído por demonstração para portfólio na atualização abaixo.
- 2026-09-27 — Ajustes locais do Git da BrandForge, remotes, instalação das dependências e conferência do Chromium autorizados pelo dev.
- 2026-09-27 — Dev pediu questionário pronto para enviar ao cliente.
- 2026-09-27 — Dev substituiu o questionário por 12 perguntas; ambição visual (discreto/marcante/uau) será decidida pelo dev na fase 1, com base na pergunta 6 e em `referencias/sites.md`. Sem commit pelo Codex.
- 2026-09-27 — Dev forneceu briefing de Paola Marra - Advocacia e declarou a inscrição OAB 123456/DF fictícia; não usar como identificação real. ~~Trilha e ambição visual ainda não aprovadas.~~ Confirmadas na decisão seguinte.
- 2026-09-27 — Dev confirmou trilha A, escopo proposto e visual marcante/acolhedor; ~~declarou que só a OAB é fictícia~~ (cenário reclassificado como demonstração posteriormente) e corrigiu a grafia para paolamarra.
- 2026-09-27 — Dev dispensou validação pela Paola; não exigir aprovação da cliente para copy, regras, FAQ, artigos ou privacidade. Revisão pelo agente em fontes oficiais; não atribuir validação profissional inexistente.
- 2026-09-27 — Dev adiou Instagram; omitir perfil, ícones, links e feed nesta etapa. Mensagem de materiais solicitada, sem autorização de envio externo.
- 2026-09-27 — Dev esclareceu que o site é apenas para portfólio; Paola existe e quer ser advogada. Dados específicos fictícios autorizados, sempre contextualizados como demonstração, sem atribuir credenciais reais à Paola.
- 2026-09-27 — Nove imagens geradas pelo dev recebidas e autorizadas para uso na demonstração. Pessoas/ambientes ilustrativos; não são documentação real do negócio.
- 2026-09-27 — Escopo adaptado à demonstração: agendamento, contato e newsletter simulados localmente, sem prestação real, envio ou coleta de dados. Integrações reais deixam de ser pendências desta etapa.
- 2026-09-28 — Dev pediu site marcante e uau, com vídeo, efeitos de scroll, animações e hero surpreendente; as três direções passam a ir de marcante a uau (sem direção discreta). Sete vídeos do Google Flow recebidos (10 a 16); 13 descartado por texto e marca de terceiros.
- 2026-09-28 — Dev escolheu a direção B "Clareza em ouro" e pediu para melhorá-la antes do "pode construir". Acréscimos aprovados: abertura com o logo PM, clarão dourado na revelação e assinatura escrita com o scroll. Depois, também: "Como funciona" com a persiana, chamada final com partículas assentando, palavra-janela no topo de Família e Trabalho, brilho na confirmação do agendamento.
- 2026-09-28 — **Portão aprovado: "pode construir"** (dev, BrandForge). Direção final: B "Clareza em ouro", com os acréscimos acima. Copy com CTA único "Agendar consulta"; mídia com vídeos 10, 15, 17 a 20 e logo PM; stack registrada abaixo.
- 2026-09-28 — Dev informou que o vídeo 10 retrata a Paola e autorizou o uso como revelação surpresa após o hero ("Prazer, Paola."). Continua sem atribuir credenciais reais; o aviso de demonstração permanece. Na construção, cortar o trecho com logo da Apple e capa de livro legível.

## Stack

Decidida no portão para a direção B (aprovada). As linhas com * valeriam revisão só se a direção mudasse.

- Base: Next.js + TypeScript + Tailwind v4, deploy de preview na Vercel (não indexável).
- GSAP + ScrollTrigger: sim. Dois momentos com pin e scrub: atravessar a palavra no hero e "Como funciona" fixado.*
- Lenis: sim, só na página inicial, porque há scrub. Fica fora das páginas com formulário (agendar) e desliga com `prefers-reduced-motion`.*
- Motion: sim, para interação de componente: passos do agendamento (`AnimatePresence`), painel de mensagem e perguntas frequentes.
- SplitText: não. A palavra escala inteira, sem animar letra por letra.
- 3D / WebGL / sequência em canvas: não. O efeito é vídeo + tipografia. (C usaria vídeo controlado pelo scroll com keyframe a cada quadro.)*
- View Transitions: não. Poucas páginas, sem transição lista → detalhe.
- Rive / Lottie: não.
- Vídeo: peça `VideoComPoster`, com poster no HTML, MP4 + WebM, carregamento perto do viewport e poster em `reduce`.
- Fontes: `next/font/google` com Bricolage Grotesque (display) + Instrument Sans (corpo) + Herr Von Muellerhoff (só a assinatura).
- Abertura com logo, clarão e assinatura: CSS puro (animação de carga e `animation-timeline: scroll()`), com fallback por GSAP ScrollTrigger nos navegadores sem suporte a timeline de scroll. A abertura roda uma vez por sessão e nunca esconde o conteúdo do HTML.
- Formulários (agendamento, mensagem, newsletter): só no navegador, sem Server Action, sem envio e sem armazenamento; `FormularioContato` não entra. A `seguranca-web` revisa mesmo assim (nada sai do navegador, headers, sem scripts de terceiros).
- Dados estruturados: sem `JsonLdNegocio` (proibido schema de escritório real); só `WebSite` básico. Preview com `noindex`.
- Hero sem JS: H1, apoio, CTA e poster com a palavra visíveis sem animação.

## Progresso da execução autônoma

- Não iniciada. Código do site depende da aprovação do portão.

## Pendências

- [x] Escolher modo de versionamento e tipo de projeto — dev.
- [x] Configurar e conferir identidade Git local da BrandForge, usuário no origin e remote template — Codex.
- [x] Verificar dependências e Chromium do Playwright — Codex; npm install e abertura de about:blank com screenshot concluídos.
- [ ] Conferir sincronização no GitHub Desktop antes de trocar de computador — dev; modo 1 sem fetch pelo Codex.
- [x] Receber respostas do questionário — dev; preservadas em `projeto/referencias/material-bruto.md`.
- [x] Confirmar trilha A, escopo proposto e ambição visual marcante — dev.
- [x] Reclassificar cenário como demonstração; OAB real e documentação profissional não são necessárias para este portfólio. Não usar número fictício como registro válido.
- [x] Corrigir grafia de domínio e e-mail para paolamarra — dev. Instagram adiado.
- [x] Receber mídia: nove imagens, incluindo logo, ambientes, pessoas ilustrativas, ícones e textura; inventário em `projeto/referencias/midia/INVENTARIO.md`.
- [x] Retirar pendências de domínio/e-mail operacional, endereço real, Google Maps, Calendly e serviço de newsletter: não necessários para a demonstração.
- [x] Preparar pacote criativo e interações demonstrativas — Claude Code, 2026-09-28.
- [x] Vídeos dos prompts 1 a 4 gerados pelo dev e recebidos (17 a 20), 2026-09-28.
- [ ] Corpo dos 2 artigos e prazo trabalhista da FAQ: redigir e conferir em fonte oficial na construção — agente.

## Cuidados da demonstração

- Aviso visível de projeto conceitual; nenhuma credencial ou trajetória fictícia apresentada como fato real da Paola.
- Não ligar contatos fictícios a telefone, mapa, e-mail ou calendário real. Formulários não devem armazenar/transmitir dados nem simular envio real.
- Imagens geradas são ilustrativas. Recepção e aperto de mãos contêm outras marcas/nomes; fora da seleção principal.
- Inscrição OAB omitida ou identificada como demonstração; sem schema de escritório real ou avaliações reais. Preview não indexável.

## Lançamento

- Nome de domínio conceitual: paolamarraadvocacia.com.br; não é necessário registrar. Preview do portfólio: a definir.
- Prazo: a definir. A resposta 11 citou 17 de outubro; dev questionou a meta, portanto não há prazo aprovado. Sem autorização de publicação.

## Diário curto

- 2026-09-27 — Projeto iniciado; diagnóstico identificou dependências ausentes e configuração Git da empresa pendente. Node e Git disponíveis; nenhum conflito de skills apontado. Sem alterações no código do site.
- 2026-09-27 — Dev escolheu GitHub Desktop e cliente real; ajustes de ambiente autorizados. Identidade Git e remotes conferidos após retomada.
- 2026-09-27 — Instalação retomada para restaurar os executáveis ausentes em node_modules/.bin. npm install terminou com código 0; npx playwright install chromium e teste de abertura/screenshot passaram. MCP não exposto nesta sessão; navegador validado diretamente pelo Playwright. Fase 1 aguardando material do cliente.
- 2026-09-27 — Questionário preparado com referências da lista curada. Nicho ainda desconhecido; pergunta sobre conselho mantida de forma condicional. Mensagem preparada, sem envio ao cliente pelo Codex.
- 2026-09-27 — Modelo e questionário do projeto atualizados com o texto fornecido pelo dev; fase 1 ajustada para manter a decisão de ambição visual com o dev.
- 2026-09-27 — Respostas recebidas e briefing elaborado. Nicho advocacia conferido em fontes oficiais da OAB; aplicação editorial e validação da Paola pendentes. Referências pesquisadas; sem código, commit ou push.
- 2026-09-27 — Briefing confirmado com correção de grafia, Instagram adiado e validação pela cliente dispensada expressamente. Prazo tratado como indefinido; mensagem de materiais preparada para o dev enviar. Próxima fase: pacote criativo.
- 2026-09-27 — Projeto reclassificado como demonstração de portfólio. Nove mídias copiadas e conferidas; briefing e pendências ajustados. Nenhuma imagem editada, código do site alterado ou commit realizado.
- 2026-09-28 — Retomado no Claude Code. Referências Meer Mohsin e Moto Card analisadas (OpenAI Astra bloqueou o navegador). Pacote v2 com vídeo: A "A janela", B "Clareza em ouro" (recomendada), C "Porta aberta". CTA único "Agendar consulta" (consulta é paga no cenário). Sem código do site, sem commit.
- 2026-09-28 — Dev escolheu B; entraram a revelação da Paola (vídeo 10), abertura com logo, clarão, assinatura e os efeitos das demais seções. Vídeos 17 a 20 recebidos. Portão aprovado; fase 4 liberada.
