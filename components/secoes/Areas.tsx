"use client";

import Link from "next/link";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";

const AREAS = [
  {
    icone: "F",
    titulo: "Direito de Família",
    texto: "Para quando a família muda de forma. Divórcio consensual ou litigioso, guarda dos filhos e pensão alimentícia.",
    servicos: ["Divórcio consensual", "Divórcio litigioso", "Guarda dos filhos", "Pensão alimentícia"],
    href: "/familia",
    rotulo: "Ver Direito de Família",
  },
  {
    icone: "T",
    titulo: "Direito do Trabalho",
    texto: "Para quando o trabalho termina mal ou pesa demais. Rescisão, assédio moral e ação trabalhista.",
    servicos: ["Rescisão", "Assédio moral", "Ação trabalhista"],
    href: "/trabalho",
    rotulo: "Ver Direito do Trabalho",
  },
];

export function Areas() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-24 sm:px-8">
      <div className="brilho-canto brilho-canto--superior-direito" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl">
        <RevelarAoEntrar>
          <h2 className="font-display mb-12 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Duas áreas, com atenção inteira.
          </h2>
        </RevelarAoEntrar>

        <RevelarAoEntrar className="grid gap-6 sm:grid-cols-2" margem="-80px">
          {AREAS.map((area, i) => (
            <Link
              key={area.href}
              href={area.href}
              style={{ "--i": i } as React.CSSProperties}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
              }}
              className="cartao group flex flex-col rounded-2xl border border-white/10 bg-navy-deep/60 p-8"
            >
              <span
                aria-hidden="true"
                className="font-display mb-5 grid size-11 place-items-center rounded-full border border-gold/40 text-lg font-bold text-gold"
              >
                {area.icone}
              </span>
              <h3 className="font-display mb-3 text-2xl font-semibold">{area.titulo}</h3>
              <p className="text-mist">{area.texto}</p>

              <ul className="mt-6 flex max-h-0 flex-col gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                {area.servicos.map((servico) => (
                  <li key={servico} className="flex items-center gap-2 text-sm text-paper">
                    <span aria-hidden="true" className="text-gold">
                      •
                    </span>
                    {servico}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                {area.rotulo} →
              </span>
            </Link>
          ))}
        </RevelarAoEntrar>
      </div>
    </section>
  );
}
