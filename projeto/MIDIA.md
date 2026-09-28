# Mídia — Paola Marra | Advocacia (direção B recomendada)

> DEMONSTRAÇÃO — DADO FICTÍCIO. Toda mídia é gerada ou ilustrativa; não documenta pessoa, equipe, cliente ou escritório reais.

Status: pendente · recebida · processada. Originais em `projeto/referencias/midia/originais/` (inventário em `projeto/referencias/midia/INVENTARIO.md`). Destino final em `public/media/` na construção.

## Bloco de estilo (repetir em todo prompt)

> Deep navy blue (#1e2d3d to #0d1b2a) and warm metallic gold (#d4af37) only. Cinematic, calm, premium, shallow depth of field, soft volumetric light. Absolutely no text, letters, numbers, logos, signs or watermarks. No people, no faces, no hands, no office, no courtroom, no gavel, no documents. Abstract atmosphere and texture only. Slow, smooth motion; the last frame matches the first for a seamless loop.

Restrição do nicho: nada que sugira resultado, equipe, cliente ou espaço real. Só textura, luz e atmosfera.

## Itens da direção B

| # | Uso | Arquivo de destino | Proporção | Duração / loop | Status |
|---|---|---|---|---|---|
| 1 | Hero desktop e palavra-janela de Família/Trabalho | `public/media/hero-particulas-16x9.mp4` + `.webm` + poster `public/media/hero-particulas-16x9.jpg` | 16:9 | 10 s, loop | **processada** (17, 1080p) |
| 2 | Hero celular | `public/media/hero-particulas-9x16.mp4` + `.webm` + poster `public/media/hero-particulas-9x16.jpg` | 9:16 | 10 s, loop | **processada** (18, 1080×1920) |
| 3 | Fundo do "Como funciona" | `public/media/metodo-persiana-16x9.mp4` + poster `public/media/metodo-persiana-16x9.jpg` | 16:9 | 10 s, loop | **processada** (15, 720p; suficiente com opacidade baixa) |
| 4 | Fundo do "Como funciona" no celular | `public/media/metodo-persiana-9x16.mp4` + poster `public/media/metodo-persiana-9x16.jpg` | 9:16 | 10 s, loop | **processada** (19, 1080×1920) |
| 5 | Chamada final, partículas assentando | `public/media/cta-assentar-16x9.mp4` + poster (último quadro) `public/media/cta-assentar-16x9.jpg` | 16:9 | 10 s, **toca uma vez** e para | **processada** (20, 1080p) |
| 6 | Logo PM na navegação e favicon | `public/brand/pm.png` recortado, fundo transparente | 1:1 (650×650) | — | **processada** (03, recorte + fundo removido via colorkey) |
| 7 | Logo PM claro na abertura (letras papel, balança ouro, fundo transparente) | `public/brand/pm-claro.png` (ideal: SVG vetorizado) | ~2,1:1 (1160×544) | — | **processada para a prancha, copiada sem alteração** (fonte: `projeto/pranchas/media/pm-claro.png`, gerada do 03); qualidade insuficiente para produção — as letras "papel" ficam quase invisíveis sobre fundo claro/branco (foram pensadas para fundo navy escuro); pedir versão em alta/vetorizada na construção |
| 8 | Revelação da Paola após o hero | `public/media/paola-16x9.mp4` + `.webm` + poster `public/media/paola-16x9.jpg` | 16:9 | trecho de 8,4 s a 10 s (~1,6 s; ela olha e sorri), loop via atributo `loop` do `<video>` | **processada** (10, 1080p). O corte de 7,6–10 s sugerido tinha o notebook (logo Apple visível) e a capa "DIREITO CIVIL" legível até ~8,35 s; ajustado para iniciar em 8,4 s, ponto em que o enquadramento já corta para o close sem notebook nem capa visíveis. Sem crossfade de loop (arquivo é o trecho puro; a repetição depende do atributo `loop` do vídeo) |
| 9 | Revelação da Paola no celular | `public/media/paola-9x16.mp4` + poster | 9:16 | ~3 s, loop | **opcional**: recorte vertical do 10 (rosto centralizado) na construção; funciona com `object-position` enquanto isso |
| 10 | Assinatura "Paola Marra" | fonte Herr Von Muellerhoff via `next/font` (ou SVG da assinatura real) | — | escrita com o scroll | **pronta** (fonte); **pendente** se o dev quiser a assinatura real |

Tratamento na construção: comprimir (H.264 + VP9/WebM, sem áudio, ~2-4 MB por vídeo), gerar poster do 1º quadro, `preload="metadata"`, poster no lugar do vídeo em `prefers-reduced-motion` e em conexão lenta. Enquanto um item estiver pendente, usa-se o poster do item recebido mais próximo, sem conteúdo inventado.

## Prompts prontos (Google Flow)

**Prompt 1 · Hero desktop em 1080p (refazer o 14)**
```
Macro slow motion of tiny gold dust particles and small gold flakes floating and drifting through a deep dark navy blue space, lit by a single warm light from the left. Particles are sharp in the center and softly out of focus toward the edges, dense in the middle third of the frame. Camera almost still, a very slow push forward. Deep navy blue (#1e2d3d to #0d1b2a) and warm metallic gold (#d4af37) only. Cinematic, calm, premium, shallow depth of field, soft volumetric light. Absolutely no text, letters, numbers, logos, signs or watermarks. No people, no faces, no hands, no office, no courtroom, no gavel, no documents. Abstract atmosphere and texture only. Slow, smooth motion; the last frame matches the first for a seamless loop. 16:9, 1080p, 10 seconds.
```

**Prompt 2 · Hero celular**
```
Vertical macro slow motion of gold dust particles and small gold flakes floating upward through a deep dark navy blue space, dense in the center of the frame, lit by a single warm light from above. Camera still. Deep navy blue (#1e2d3d to #0d1b2a) and warm metallic gold (#d4af37) only. Cinematic, calm, premium, shallow depth of field, soft volumetric light. Absolutely no text, letters, numbers, logos, signs or watermarks. No people, no faces, no hands, no office, no courtroom, no gavel, no documents. Abstract atmosphere and texture only. Slow, smooth motion; the last frame matches the first for a seamless loop. 9:16 vertical, 1080p, 8 seconds.
```

**Prompt 3 · Persiana no celular**
```
Vertical extreme close-up of warm golden light passing through horizontal window blind slats, shadows of the slats drifting slowly downward across a deep navy blue wall. Dust sparkles gently in the light beams. Camera still. Deep navy blue (#1e2d3d to #0d1b2a) and warm metallic gold (#d4af37) only. Cinematic, calm, premium, shallow depth of field, soft volumetric light. Absolutely no text, letters, numbers, logos, signs or watermarks. No people, no faces, no hands, no office, no courtroom, no gavel, no documents. Abstract atmosphere and texture only. Slow, smooth motion; the last frame matches the first for a seamless loop. 9:16 vertical, 1080p, 8 seconds.
```

**Prompt 4 · CTA final, partículas assentando**
```
Gold dust particles drifting slowly downward and settling into a calm, thin horizontal band of soft gold light across the lower third of a deep navy blue space. The movement feels like things falling into place. Camera still. Deep navy blue (#1e2d3d to #0d1b2a) and warm metallic gold (#d4af37) only. Cinematic, calm, premium, shallow depth of field, soft volumetric light. Absolutely no text, letters, numbers, logos, signs or watermarks. No people, no faces, no hands, no office, no courtroom, no gavel, no documents. Abstract atmosphere and texture only. Slow, smooth motion; the last frame matches the first for a seamless loop. 16:9, 1080p, 8 seconds.
```

## Ideias de mídia por direção

- **A · A janela:** 15 (hero e método); prompt 3 para o celular; poster em quadro com lâminas bem marcadas.
- **B · Clareza em ouro:** tabela acima.
- **C · Porta aberta:** 11 (visita controlada pelo scroll; na construção, recodificar com keyframe a cada quadro para o scrub ficar liso); 10 opcional com legenda de demonstração; vertical pendente (percurso do escritório em 9:16).

## Mídia fora da seleção

- 13 martelo: descartado (texto na tela e marca "LAICIA FIRM").
- 12 mesa: reserva (placa e livro com texto).
- 16 drone: reserva; arranha-céus não parecem Brasília, não usar como a cidade.
- 02 e 05: reserva (placas e nomes de outros escritórios).
- 04: pessoa ilustrativa; não apresentar como a Paola.
- 10: é a Paola, conforme o dev (2026-09-28); usado na revelação. Sem legenda que atribua credencial; o aviso de demonstração cobre o cenário.
