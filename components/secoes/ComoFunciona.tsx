"use client";

import { useRef } from "react";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";
import { gsap, useGSAP } from "@/lib/gsap";

const PASSOS = [
  {
    numero: "1",
    titulo: "Consulta inicial.",
    texto: "Você conta o que está acontecendo, no seu tempo. Sai sabendo quais caminhos existem e o que cada um exige.",
  },
  {
    numero: "2",
    titulo: "Plano explicado.",
    texto: "Se decidir seguir, recebe por escrito os próximos passos, os documentos necessários e o que depende de você.",
  },
  {
    numero: "3",
    titulo: "Acompanhamento.",
    texto: "A cada movimentação, uma explicação curta do que aconteceu e do que vem a seguir. Sem você precisar perguntar.",
  },
];

export function ComoFunciona() {
  const secao = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        const passos = gsap.utils.toArray<HTMLElement>(".passo-metodo", secao.current);
        const persiana = secao.current?.querySelector(".persiana-cortina");
        // Só sobrepõe os passos e esconde a persiana quando o JS realmente vai
        // controlar a troca (esta matchMedia só roda em telas ≥768px); sem isso,
        // os passos ficam empilhados normalmente e a persiana fica visível
        // como fundo estático (ver fallback logo abaixo do useGSAP).
        gsap.set(passos.slice(1), { position: "absolute", inset: 0, autoAlpha: 0 });
        gsap.set(passos[0]?.parentElement, { position: "relative" });
        if (persiana) gsap.set(persiana, { clipPath: "inset(0 100% 0 0)" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secao.current,
            start: "top top",
            end: () => `+=${window.innerHeight * (passos.length - 1)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        passos.slice(1).forEach((passo, i) => {
          tl.to(passos[i], { autoAlpha: 0, yPercent: -12 });
          tl.fromTo(passo, { autoAlpha: 0, yPercent: 12 }, { autoAlpha: 1, yPercent: 0 }, "<");
        });
        if (persiana) {
          tl.to(persiana, { clipPath: "inset(0 66% 0 0)", ease: "none" }, 0)
            .to(persiana, { clipPath: "inset(0 33% 0 0)", ease: "none" }, ">-0.5")
            .to(persiana, { clipPath: "inset(0 0% 0 0)", ease: "none" }, ">-0.5");
        }
      });
    },
    { scope: secao },
  );

  return (
    <section id="como-funciona" ref={secao} className="relative min-h-svh overflow-hidden bg-navy-deep">
      <div className="persiana-cortina absolute inset-0 opacity-30">
        <video className="size-full object-cover" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/media/metodo-persiana-9x16.mp4" media="(max-width: 767px)" type="video/mp4" />
          <source src="/media/metodo-persiana-16x9.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-5 py-24 sm:px-8">
        <h2 className="font-display mb-16 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Primeiro você entende. Depois decide.
        </h2>

        <div className="flex flex-col gap-16 sm:gap-0">
          {PASSOS.map((passo, i) => (
            <RevelarAoEntrar
              key={passo.numero}
              style={{ "--i": i } as React.CSSProperties}
              className="passo-metodo grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span className="font-display text-7xl font-extrabold text-gold sm:text-8xl">
                {passo.numero}
              </span>
              <div className="max-w-lg pt-2">
                <p className="font-display mb-3 text-xl font-semibold">{passo.titulo}</p>
                <p className="text-mist">{passo.texto}</p>
              </div>
            </RevelarAoEntrar>
          ))}
        </div>
      </div>
    </section>
  );
}
