import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";

export function PorQueSimples() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-5 py-28 sm:px-8">
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
