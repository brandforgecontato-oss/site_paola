# Estado do projeto — a definir

## Agora

- **Fase atual:** 1 — Briefing e nicho (em andamento)
- **Próximo passo:** receber as respostas de `projeto/QUESTIONARIO-CLIENTE.md` e extrair o briefing.
- **Modelo recomendado:** Opus (referência da skill para planejamento; sessão atual no Codex)
- **Versionamento:** modo 1 — GitHub Desktop; Codex não faz commit nem push.
- **Última atualização:** 2026-09-27 por Codex
- **Modo:** cliente real

## Fases

| Metade | # | Fase | Status | Resultado |
|---|---|---|---|---|
| Planejamento | 0 | Ambiente | Concluída | Git local, dependências e Chromium conferidos |
| | 1 | Briefing e nicho | Em andamento | Aguardando material para `projeto/BRIEF.md` |
| | 2 | Pacote criativo | Não iniciada | `projeto/DIRECAO.md`, `projeto/COPY.md`, `projeto/MIDIA.md` |
| | 3 | Portão | Não iniciada | Aguardando "pode construir" |
| Execução autônoma | 4 | Construção, revisão e relatório | Não iniciada | `projeto/REVISAO.md`, `projeto/RELATORIO.md` |
| Refinamento | 5 | Refinamento livre | Não iniciada | — |
| Entrega | 6 | Preview, feedback, lançamento e portfólio | Não iniciada | — |

## Decisões aprovadas

- 2026-09-27 — Versionamento pelo GitHub Desktop, modo 1 (aprovado pelo dev).
- 2026-09-27 — Cliente real (confirmado pelo dev).
- 2026-09-27 — Ajustes locais do Git da BrandForge, remotes, instalação das dependências e conferência do Chromium autorizados pelo dev.
- 2026-09-27 — Dev pediu questionário pronto para enviar ao cliente.
- 2026-09-27 — Dev substituiu o questionário por 12 perguntas; ambição visual (discreto/marcante/uau) será decidida pelo dev na fase 1, com base na pergunta 6 e em `referencias/sites.md`. Sem commit pelo Codex.

## Stack

- Base do template: Next.js + TypeScript + Tailwind; camadas adicionais serão decididas no portão.

## Progresso da execução autônoma

- Não iniciada. Código do site depende da aprovação do portão.

## Pendências

- [x] Escolher modo de versionamento e tipo de projeto — dev.
- [x] Configurar e conferir identidade Git local da BrandForge, usuário no origin e remote template — Codex.
- [x] Verificar dependências e Chromium do Playwright — Codex; npm install e abertura de about:blank com screenshot concluídos.
- [ ] Conferir sincronização no GitHub Desktop antes de trocar de computador — dev; modo 1 sem fetch pelo Codex.
- [ ] Receber respostas do questionário e materiais do negócio para briefing — dev; questionário em `projeto/QUESTIONARIO-CLIENTE.md`.

## Provisórios a trocar antes de publicar

- Dados do negócio ainda não fornecidos.

## Lançamento

- Domínio, preview e produção: a definir.

## Diário curto

- 2026-09-27 — Projeto iniciado; diagnóstico identificou dependências ausentes e configuração Git da empresa pendente. Node e Git disponíveis; nenhum conflito de skills apontado. Sem alterações no código do site.
- 2026-09-27 — Dev escolheu GitHub Desktop e cliente real; ajustes de ambiente autorizados. Identidade Git e remotes conferidos após retomada.
- 2026-09-27 — Instalação retomada para restaurar os executáveis ausentes em node_modules/.bin. npm install terminou com código 0; npx playwright install chromium e teste de abertura/screenshot passaram. MCP não exposto nesta sessão; navegador validado diretamente pelo Playwright. Fase 1 aguardando material do cliente.
- 2026-09-27 — Questionário preparado com referências da lista curada. Nicho ainda desconhecido; pergunta sobre conselho mantida de forma condicional. Mensagem preparada, sem envio ao cliente pelo Codex.
- 2026-09-27 — Modelo e questionário do projeto atualizados com o texto fornecido pelo dev; fase 1 ajustada para manter a decisão de ambição visual com o dev.
