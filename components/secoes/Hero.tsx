"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePrefereMenosMovimento } from "@/lib/usar-menos-movimento";

/**
 * Hero da direção B "Clareza em ouro" (projeto/DIRECAO.md).
 * Abertura com logo, travessia da palavra "clareza" e revelação da Paola:
 * decisão #1 em projeto/DECISOES.md — tudo em CSS (`animation-timeline: scroll()`
 * em app/globals.css), sem GSAP. Sem JS, sem suporte a scroll-timeline ou com
 * `prefers-reduced-motion`, o conteúdo aparece empilhado e estático.
 */
export function Hero() {
  const prefereMenosMovimento = usePrefereMenosMovimento();
  // O poster pinta primeiro (LCP rápido); o vídeo entra logo depois do primeiro
  // paint, para não competir com o carregamento do conteúdo principal.
  const [montado, setMontado] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMontado(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const mostrarVideo = montado && prefereMenosMovimento !== true;

  return (
    <>
      <div className="hero-abertura" aria-hidden="true">
        <Image src="/brand/pm-claro.png" alt="" width={320} height={150} priority />
      </div>

      <div className="hero-palco">
        <section className="hero-sticky">
          {mostrarVideo ? (
            <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-particulas-16x9.jpg">
              <source src="/media/hero-particulas-9x16.webm" media="(max-width: 767px)" type="video/webm" />
              <source src="/media/hero-particulas-9x16.mp4" media="(max-width: 767px)" type="video/mp4" />
              <source src="/media/hero-particulas-16x9.webm" type="video/webm" />
              <source src="/media/hero-particulas-16x9.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/media/hero-particulas-16x9.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-video"
            />
          )}

          <div className="hero-recorte">
            <span className="hero-palavra" aria-hidden="true">
              clareza
            </span>
          </div>

          <div className="hero-base">
            <div>
              <h1 className="font-display max-w-[30ch] text-[28px] leading-tight font-bold tracking-tight sm:text-[38px]">
                Família e trabalho em Brasília, sem juridiquês.
              </h1>
              <p className="hero-apoio">
                Você entende cada etapa antes de decidir. A primeira consulta existe para isso.
              </p>
            </div>
            <Link
              href="/agendar"
              className="w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold whitespace-nowrap text-navy-deep transition-transform hover:scale-[1.03]"
            >
              Agendar consulta
            </Link>
          </div>

          <div className="hero-paola">
            {mostrarVideo ? (
              <video autoPlay muted loop playsInline poster="/media/paola-16x9.jpg">
                <source src="/media/paola-16x9.webm" type="video/webm" />
                <source src="/media/paola-16x9.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image src="/media/paola-16x9.jpg" alt="Paola Marra à mesa de trabalho, sorrindo para a câmera." fill sizes="100vw" />
            )}
            <div className="hero-paola-texto">
              <h2>
                Prazer, <span>Paola.</span>
              </h2>
              <span className="hero-assinatura" aria-hidden="true">
                Paola Marra
              </span>
              <p>
                Do outro lado de cada termo difícil, uma pessoa que explica com calma e escuta o que
                você tem a dizer.
              </p>
            </div>
          </div>

          <div className="hero-clarao" aria-hidden="true" />
        </section>
      </div>
    </>
  );
}
