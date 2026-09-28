"use client";

import { useEffect, useState } from "react";
import { usePrefereMenosMovimento } from "@/lib/usar-menos-movimento";

/**
 * Topo das páginas de área: a palavra ("família" ou "trabalho") com o vídeo de
 * partículas dentro das letras, em escala menor e sem travessia (projeto/DIRECAO.md).
 */
export function PalavraJanela({ palavra }: { palavra: string }) {
  const prefereMenosMovimento = usePrefereMenosMovimento();
  // Poster primeiro (LCP rápido), vídeo entra logo após o primeiro paint.
  const [montado, setMontado] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMontado(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const mostrarVideo = montado && prefereMenosMovimento !== true;

  return (
    <div className="pt-topo">
      <div className="janela">
        {mostrarVideo ? (
          <video className="janela-video" autoPlay muted loop playsInline poster="/media/hero-particulas-16x9.jpg">
            <source src="/media/hero-particulas-16x9.webm" type="video/webm" />
            <source src="/media/hero-particulas-16x9.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="janela-video bg-cover bg-center"
            style={{ backgroundImage: "url(/media/hero-particulas-16x9.jpg)" }}
          />
        )}
        <div className="janela-recorte">
          <span aria-hidden="true" className="janela-palavra">
            {palavra}
          </span>
        </div>
      </div>
    </div>
  );
}
