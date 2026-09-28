import Link from "next/link";

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
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Para ler com calma.</h2>
          <Link href="/artigos" className="inline-block shrink-0 py-3 text-sm font-semibold text-gold">
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {ARTIGOS.map((artigo) => (
            <Link
              key={artigo.slug}
              href={`/artigos#${artigo.slug}`}
              className="rounded-2xl border border-white/10 bg-navy-deep/60 p-8 transition-colors hover:border-gold/50"
            >
              <h3 className="font-display mb-3 text-xl font-semibold">{artigo.titulo}</h3>
              <p className="text-mist">{artigo.resumo}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
