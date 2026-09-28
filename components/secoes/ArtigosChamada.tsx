"use client";

import Link from "next/link";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";

const ARTIGOS = [
  {
    slug: "divorcio-em-cartorio",
    titulo: "Divórcio em cartório: quando é possível",
    resumo: "Nem todo divórcio precisa passar pelo fórum. Veja quando o cartório é um caminho e o que ele exige.",
  },
  {
    slug: "rescisao-o-que-conferir",
    titulo: "Rescisão: o que conferir antes de assinar",
    resumo: "Uma lista curta do que olhar nos documentos da saída, para não deixar nada para trás.",
  },
];

export function ArtigosChamada() {
  return (
    <section className="bg-navy px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <RevelarAoEntrar className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Para ler com calma.</h2>
          <Link
            href="/artigos"
            className="inline-block shrink-0 py-3 text-sm font-semibold text-gold transition-transform hover:translate-x-1"
          >
            Ver todos os artigos →
          </Link>
        </RevelarAoEntrar>

        <RevelarAoEntrar className="grid gap-6 sm:grid-cols-2" margem="-80px">
          {ARTIGOS.map((artigo, i) => (
            <Link
              key={artigo.slug}
              href={`/artigos#${artigo.slug}`}
              style={{ "--i": i } as React.CSSProperties}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
              }}
              className="cartao rounded-2xl border border-white/10 bg-navy-deep/60 p-8"
            >
              <h3 className="font-display mb-3 text-xl font-semibold">{artigo.titulo}</h3>
              <p className="text-mist">{artigo.resumo}</p>
            </Link>
          ))}
        </RevelarAoEntrar>
      </div>
    </section>
  );
}
