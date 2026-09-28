"use client";

import { useRef } from "react";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";
import { useInViewOnce } from "@/lib/use-in-view-once";
import { usePrefereMenosMovimento } from "@/lib/usar-menos-movimento";

/**
 * Fundo com o vídeo do escritório (mesmo arquivo da revelação da Paola no
 * hero), desfocado e escurecido: aqui é só ambientação, não a protagonista —
 * o desfoque também atenua o notebook e a capa do livro que aparecem no
 * vídeo original. Mesma técnica de vídeo de fundo da ChamadaFinal, para
 * ficar consistente.
 */
export function PorQueSimples() {
  const ref = useRef<HTMLDivElement>(null);
  const pertoDoViewport = useInViewOnce(ref, "200px");
  const prefereMenosMovimento = usePrefereMenosMovimento();
  const mostrarVideo = pertoDoViewport && prefereMenosMovimento === false;

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep px-5 py-32 sm:px-8">
      {mostrarVideo ? (
        <video
          className="absolute inset-0 size-full object-cover opacity-30 blur-lg scale-110"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/paola-16x9.jpg"
          aria-hidden="true"
        >
          <source src="/media/paola-16x9.webm" type="video/webm" />
          <source src="/media/paola-16x9.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-lg scale-110"
          style={{ backgroundImage: "url(/media/paola-16x9.jpg)" }}
          aria-hidden="true"
        />
      )}
      {/* Overlay parelho (não gradiente): o texto fica centralizado, então precisa de
          contraste igual em toda a área, não só nas bordas. */}
      <div className="absolute inset-0 bg-navy-deep/65" />
      <div className="brilho-canto brilho-canto--inferior-esquerdo" aria-hidden="true" />

      <RevelarAoEntrar className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Ninguém decide bem <span className="text-gold">com medo.</span>
        </h2>
        <p className="text-lg leading-relaxed text-mist">
          Muita gente chega a um processo sem entender o que está acontecendo. Aqui, cada termo é
          traduzido e cada decisão é sua, tomada com informação.
        </p>
      </RevelarAoEntrar>
    </section>
  );
}
