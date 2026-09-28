import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como esta demonstração trata dados: nada é armazenado nem enviado. Projeto conceitual para portfólio.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <main id="conteudo" className="bg-navy-deep pt-topo">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
        <h1 className="font-display mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Privacidade</h1>
        <p className="text-lg leading-relaxed text-mist">
          Este site é um projeto conceitual de portfólio. Os formulários de agendamento, mensagem e
          newsletter funcionam só na tela: nada é armazenado, enviado ou compartilhado. O site não
          usa cookies de rastreamento nem ferramentas de anúncio.
        </p>
      </div>
    </main>
  );
}
