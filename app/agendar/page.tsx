import type { Metadata } from "next";
import { FluxoAgendar } from "@/components/contato/FluxoAgendar";

export const metadata: Metadata = {
  title: "Agendar consulta",
  description: "Demonstração de agendamento: escolha o tema, a forma de atendimento e um horário. Nenhum dado é enviado.",
  alternates: { canonical: "/agendar" },
};

export default function Agendar() {
  return (
    <main id="conteudo" className="bg-navy-deep pt-topo">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Agendar consulta</h1>
        <FluxoAgendar />
      </div>
    </main>
  );
}
