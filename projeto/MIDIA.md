# Plano de mídia — B / Presença

> DEMONSTRAÇÃO — DADO FICTÍCIO. Pessoas e ambientes fornecidos são imagens geradas pelo dev, autorizadas para este conceito. Não representam clientes, retratos confirmados ou espaço real da Paola.

## Bloco de estilo comum

Azul profundo próximo de #2c3e50, luz natural quente, madeira com acabamento discreto e dourado pontual. Ambiente de escuta e clareza, sem ostentação. Fotografias ilustrativas com contraste moderado; interfaces e textos do site permanecem fora das imagens. Sem nomes, números profissionais, certificados legíveis, marcas, depoimentos ou promessa de resultado. Nenhuma imagem gerada será apresentada como evidência de pessoas, estrutura ou atendimento reais.

## Mídia fornecida e destinos planejados

Originais preservados em `projeto/referencias/midia/originais/`. Nesta fase, apenas enquadramento por CSS nas pranchas; nenhuma transformação de bitmap executada.

| Origem | Uso | Proporção/enquadramento | Destino na construção | Status |
|---|---|---|---|---|
| 01-escritorio-geral.png | Hero desktop | Fonte 3:2; gerar versão 16:9 e enquadrar pelo container da direção B | `public/images/hero-escritorio-desktop.webp` | Recebida; preparação pendente |
| 01-escritorio-geral.png | Hero mobile | Versão vertical 9:16; mostrar no quadro horizontal curto com foco em mesa/cadeira conforme prancha | `public/images/hero-escritorio-mobile.webp` | Recebida; preparação pendente |
| 03-logo-pm.jpg | Marca/cabeçalho/rodapé | Conter monograma, remover margens excessivas sem redesenhar a identidade | `public/images/logo-pm.webp` | Recebida; preparação pendente |
| 04-profissional-ilustrativa.jpg | Seção “O conceito” | Vertical, foco no gesto de escuta; legenda de imagem gerada | `public/images/conceito-profissional.webp` | Recebida; preparação pendente |
| 09-textura-geometrica.jpg | Fundo opcional da seção do conceito | Baixa intensidade, sem repetição com emendas visíveis | `public/images/textura-geometrica.webp` | Recebida; uso opcional |
| 02-recepcao.jpg e 05-atendimento-ilustrativo.jpg | Reserva | Contêm marcas/nomes alheios; fora da seleção principal | Sem destino de publicação | Recebidas; não selecionadas |
| 06/07/08 ícones | Reserva visual | Estilos diferentes; não compor conjunto inconsistente | Sem destino de publicação | Recebidos; não selecionados |

- Usar `picture`/fontes responsivas ou `next/image` na construção, reservando dimensões. Recorte deverá preservar cadeira, mesa e iluminação; no celular, não depender de detalhes de documentos.
- A versão vertical 9:16 é alternativa de mídia para telas estreitas; não obriga a exibir toda a altura no hero. Se o recorte perder conteúdo, usar a fonte original com enquadramento por CSS em vez de distorcer.
- Não gerar foto de outra pessoa e nomeá-la como Paola. A prancha A é alternativa com cena humana explicitamente ilustrativa.
- Textura pode ser omitida se competir com o texto; nenhum novo material é necessário para construir a recomendação.
- Fotografias possuem detalhes sintéticos e textos em inglês. Enquadrar para que não se tornem informação funcional; não transcrever esses textos como instruções ou dados do projeto.

## Prompts opcionais para Google Flow

São alternativas prontas, não pedidos de geração pendentes nem requisito para avançar. A direção recomendada usa as imagens recebidas. Repetem as restrições para permanecerem completos quando copiados isoladamente.

### Hero desktop alternativo

- Uso: atmosfera simbólica, se o dev preferir substituir o escritório.
- Proporção: 16:9. Tipo: imagem estática, sem duração/loop. Câmera fixa em plano médio; sem movimento.
- Destino: `public/images/hero-atmosfera-desktop.webp`. Poster: não se aplica a imagem estática.
- Status: pendente, opcional, não solicitada.
- Prompt: “Imagem editorial horizontal 16:9 para um projeto conceitual de advocacia. Azul profundo próximo de #2c3e50, luz natural quente, madeira discreta e um único detalhe dourado. Natureza-morta com folhas sem escrita, pasta azul fechada e uma cadeira vazia vista parcialmente; composição serena, espaço negativo à esquerda. Câmera fixa em plano médio, perspectiva natural, sem movimento. Atmosfera simbólica de escuta e clareza, sem representar instalações reais. Sem pessoas, sem certificados, sem marcas, sem nomes, sem números profissionais. Sem texto, sem letras, sem legendas ou logotipos. Não sugerir atendimento, qualificação ou resultado real. Contraste moderado, luz suave, materiais plausíveis, sem ostentação.”

### Hero mobile alternativo

- Uso: mesma atmosfera em variante vertical.
- Proporção: 9:16. Tipo: imagem estática, sem duração/loop. Câmera fixa em plano médio vertical; sem movimento.
- Destino: `public/images/hero-atmosfera-mobile.webp`. Poster: não se aplica.
- Status: pendente, opcional, não solicitada.
- Prompt: “Imagem editorial vertical 9:16 para um projeto conceitual de advocacia. Azul profundo próximo de #2c3e50, luz natural quente, madeira discreta e um único detalhe dourado. Natureza-morta com folhas sem escrita, pasta azul fechada e uma cadeira vazia vista parcialmente; objetos principais no centro inferior, espaço negativo na parte superior e nas laterais para diferentes recortes. Câmera fixa em plano médio vertical, perspectiva natural, sem movimento. Atmosfera simbólica de escuta e clareza, sem representar instalações reais. Sem pessoas, sem certificados, sem marcas, sem nomes, sem números profissionais. Sem texto, sem letras, sem legendas ou logotipos. Não sugerir atendimento, qualificação ou resultado real. Contraste moderado, luz suave, materiais plausíveis, sem ostentação.”

## Movimento e carregamento

- Direção B: imagem estática; aproximação CSS de 3,5% apenas ao hover com ponteiro preciso. Sem loop ou câmera automática.
- `prefers-reduced-motion`: aproximação desativada. Hero, texto e imagem visíveis desde o HTML.
- Se C for escolhida, atualizar este plano: entrada sutil de escala na imagem, sem vídeo obrigatório.
- Open Graph: composição estática da identidade aprovada, 1200 × 630, com aviso de conceito. Destino `app/opengraph-image.tsx` na fase de construção; não gerar fotografia extra.
