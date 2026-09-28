"use client";

import Link from "next/link";
import { useRef } from "react";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";
import { useInViewOnce } from "@/lib/use-in-view-once";
import { usePrefereMenosMovimento } from "@/lib/usar-menos-movimento";

/** Vídeo de partículas assentando: toca uma vez ao entrar na tela e para no último quadro. */
export function ChamadaFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const pertoDoViewport = useInViewOnce(ref, "200px");
  const prefereMenosMovimento = usePrefereMenosMovimento();
  const mostrarVideo = pertoDoViewport && prefereMenosMovimento === false;

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep px-5 py-28 sm:px-8">
      {mostrarVideo && (
        <video
          className="absolute inset-0 size-full object-cover opacity-60"
          autoPlay
          muted
          playsInline
          poster="/media/cta-assentar-16x9.jpg"
          aria-hidden="true"
          onEnded={(e) => e.currentTarget.pause()}
        >
          <source src="/media/cta-assentar-16x9.mp4" type="video/mp4" />
        </video>
      )}
      {!mostrarVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/media/cta-assentar-16x9.jpg)" }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/20" />

      <RevelarAoEntrar className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Quando quiser, a gente começa pela conversa.
        </h2>
        <p className="mb-8 text-mist">Escolha o tema, a forma de atendimento e um horário.</p>
        <Link href="/agendar" className="botao-ouro inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep">
          Agendar consulta
        </Link>
      </RevelarAoEntrar>
    </section>
  );
}
