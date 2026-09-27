---
name: comecar
description: Conduz sites BrandForge do ambiente à entrega. Planejamento com o dev termina no portão “pode construir”; construção e revisão seguem sem perguntas; depois vêm refinamento e entrega. Retoma pelo projeto/ESTADO.md. Use para começar, continuar, retomar, saber onde parou ou ao chamar /comecar.
when_to_use: Início ou retomada de qualquer projeto de site criado a partir do template.
argument-hint: "[fase N]"
---

# Fluxo BrandForge

Leia `projeto/ESTADO.md`; se não existir, inicie na fase 0. Ao retomar, rode `node .claude/skills/comecar/scripts/checar-ambiente.mjs` e informe apenas alertas, uma linha por problema com solução. Com `/comecar fase N`, confira os portões anteriores e não os pule. Avise em uma linha a fase e o próximo passo; avise uma vez se o modelo da sessão divergir do recomendado. Leia apenas o arquivo da fase atual.

## Etapas

| Etapa | Fase | Arquivo | Saída | Modelo |
|---|---:|---|---|---|
| Planejamento | 0 | `fases/00-ambiente.md` | ambiente, modo de versionamento e estado inicial | Sonnet |
| | 1 | `fases/01-briefing.md` | briefing e nicho | Opus |
| | 2 | `fases/02-pacote-criativo.md` | três direções e pacote recomendado com copy e mídia | Opus |
| Portão | 3 | `fases/03-portao.md` | checklist, direção final, stack e aprovação única “pode construir” | Opus |
| Execução autônoma | 4 | `fases/04-execucao-autonoma.md` | site construído, revisado e relatório final | Sonnet |
| Refinamento | 5 | `fases/05-refinamento.md` | ajustes pedidos pelo dev | Sonnet |
| Entrega | 6 | `fases/06-entrega.md` | preview, feedback, lançamento e portfólio | Sonnet |

Modelos recomendados: fase 0 Sonnet; fases 1–3 Opus; fases 4–6 Sonnet. Claude Code pode avisar uma vez por etapa se o modelo divergir. Em Codex, informe o recomendado em uma linha; o dev controla o modelo pela interface.

## Regras

- Planejamento: proponha; reúna todas as perguntas pendentes numa mensagem, com opções numeradas e recomendação primeiro. Aceite texto, áudio transcrito, imagens e mensagens como briefing. Registre decisões aprovadas em `projeto/ESTADO.md`.
- Portão: não escreva código do site antes do “pode construir”. Pranchas descartáveis em `projeto/pranchas/` são permitidas.
- Execução autônoma: fases 4; não pergunte. Resolva dúvidas reversíveis conforme a direção e a copy e registre em `projeto/DECISOES.md`. Dados de negócio ausentes viram “a preencher” e pendência. Atualize o progresso no ESTADO a cada marco.
- Refinamento e entrega: aplique pedidos diretamente. Peça decisão só quando houver leituras materialmente diferentes, conflito com regra aprovada ou ação irreversível.
- Nunca invente dados do negócio. Dados reais ficam em `lib/site.ts`.
- Nada de push ou deploy em produção sem aprovação explícita. Não apague arquivos alheios nem instale programas.
- Só diga que algo passou após executar a checagem nesta sessão. Travas: nicho regulado conferido; portão aprovado; `npm run verificar` no fim da construção; segurança sem achados críticos aplicáveis.
- Conflitos entre skills: precedência definida em `stack-web`.

## Versionamento

A escolha é registrada no ESTADO na fase 0 e determina cada operação:

| Modo | Comportamento |
|---|---|
| 1 · GitHub Desktop | Claude não faz commit nem push. Ao fim de cada etapa, fornece “hora de commitar”, resumo e descrição; durante a execução, cria marcos locais com `marco.mjs`. |
| 2 · commits locais | Claude faz commits nos marcos e no fim das etapas. Push somente após autorização explícita. |
| 3 · commits e push | Claude faz commits nos marcos e etapas; cada push para no controle de permissões até ser autorizado. |

Retomada: o diagnóstico confere commits locais sem push e, nos modos 2 e 3, atualiza `origin` para conferir commits remotos sem pull. Se houver divergência, pare antes de editar e informe contagem e ação sugerida em uma linha. No modo 1, não faça fetch: informe o que o GitHub Desktop mostra.

## Fechamento

Atualize `projeto/ESTADO.md` com status, decisões, pendências, próximo passo e modelo recomendado. Versione conforme o modo. Mensagens de marco em uma linha; fechamento de etapa em até 5 linhas. Ao concluir o portão, recomende `/clear`, Sonnet e “vamos continuar”. Ao concluir a execução autônoma, apresente o relatório e ofereça refinamento. Não resuma arquivos: indique seus caminhos.

## Arquivos

Projeto: `projeto/`. Modelos: `modelos/`. Referências de processo: `referencias/`. Referências visuais: `referencias/sites.md`. Scripts: `scripts/`.
