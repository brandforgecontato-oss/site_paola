import Link from "next/link";

const AREAS = [
  {
    titulo: "Direito de Família",
    texto: "Para quando a família muda de forma. Divórcio consensual ou litigioso, guarda dos filhos e pensão alimentícia.",
    servicos: ["Divórcio consensual", "Divórcio litigioso", "Guarda dos filhos", "Pensão alimentícia"],
    href: "/familia",
    rotulo: "Ver Direito de Família",
  },
  {
    titulo: "Direito do Trabalho",
    texto: "Para quando o trabalho termina mal ou pesa demais. Rescisão, assédio moral e ação trabalhista.",
    servicos: ["Rescisão", "Assédio moral", "Ação trabalhista"],
    href: "/trabalho",
    rotulo: "Ver Direito do Trabalho",
  },
];

export function Areas() {
  return (
    <section className="bg-navy px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display mb-12 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Duas áreas, com atenção inteira.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {AREAS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-navy-deep/60 p-8 transition-colors hover:border-gold/50"
            >
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

              <span className="mt-8 text-sm font-semibold text-gold">{area.rotulo} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
