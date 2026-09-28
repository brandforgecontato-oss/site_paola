import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";

export function Atendimento() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-24 sm:px-8">
      <div className="brilho-canto brilho-canto--superior-direito" aria-hidden="true" />

      <RevelarAoEntrar className="relative mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Presencial em Brasília ou online.
          </h2>
          <p className="max-w-md text-mist">
            A consulta pode ser no escritório, em Brasília, ou por vídeo, para quem está no DF e
            entorno. Você escolhe ao agendar.
          </p>
        </div>

        <dl className="rounded-2xl border border-white/10 bg-navy-deep/60 p-8 text-sm shadow-[0_20px_60px_-30px_rgba(212,175,55,0.35)]">
          <div className="flex justify-between border-b border-white/10 py-3">
            <dt className="text-mist">Segunda a sexta</dt>
            <dd className="font-medium text-paper">9h às 18h</dd>
          </div>
          <div className="flex justify-between py-3">
            <dt className="text-mist">Sábado</dt>
            <dd className="font-medium text-paper">9h às 13h</dd>
          </div>
        </dl>
      </RevelarAoEntrar>
    </section>
  );
}
