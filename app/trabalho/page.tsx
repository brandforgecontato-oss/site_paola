import type { Metadata } from "next";
import Link from "next/link";
import { PalavraJanela } from "@/components/secoes/PalavraJanela";
import { PerguntasFrequentes } from "@/components/secoes/PerguntasFrequentes";

export const metadata: Metadata = {
  title: "Direito do Trabalho em Brasília",
  description:
    "Rescisão, assédio moral e ação trabalhista explicados com clareza, do primeiro documento ao fim do processo. Conceito de site para portfólio.",
  alternates: { canonical: "/trabalho" },
};

const ITENS = [
  {
    titulo: "Rescisão.",
    texto: "Conferência das verbas e dos documentos da saída, para você saber se está tudo certo.",
  },
  {
    titulo: "Assédio moral.",
    texto: "Orientação sobre como registrar o que aconteceu e quais caminhos existem.",
  },
  {
    titulo: "Ação trabalhista.",
    texto: "Quando é preciso ir à Justiça do Trabalho, cada etapa é explicada antes de acontecer.",
  },
];

const FAQ = [
  {
    pergunta: "Existe prazo para entrar com ação?",
    resposta:
      "Existe, e ele corre desde a saída do emprego: são até dois anos para entrar com a ação, que pode cobrar valores dos últimos cinco anos do contrato (Constituição Federal, art. 7º, XXIX). Por isso vale buscar orientação cedo.",
  },
  {
    pergunta: "Procurar orientação pode me prejudicar?",
    resposta: "Buscar informação sobre os seus direitos é direito seu.",
  },
];

export default function Trabalho() {
  return (
    <main id="conteudo">
      <PalavraJanela palavra="trabalho" />

      <section className="bg-navy-deep px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Direito do Trabalho em Brasília
          </h1>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-mist">
            O fim de um emprego, ou um ambiente que adoece, deixa muitas dúvidas. Aqui você entende
            quais são os seus direitos e o que dá para fazer.
          </p>

          <h2 className="font-display mb-6 text-xl font-semibold">O que inclui</h2>
          <ul className="mb-14 flex flex-col gap-6">
            {ITENS.map((item) => (
              <li key={item.titulo}>
                <p className="mb-1 font-medium">{item.titulo}</p>
                <p className="text-mist">{item.texto}</p>
              </li>
            ))}
          </ul>

          <h2 className="font-display mb-4 text-xl font-semibold">Como funciona nesse tema</h2>
          <p className="text-mist">
            Leve o que tiver: termo de rescisão, contracheques, mensagens, datas. Na consulta você
            sai sabendo o que falta e se vale seguir.
          </p>
        </div>
      </section>

      <PerguntasFrequentes titulo="Perguntas" itens={FAQ} />

      <section className="bg-navy px-5 py-20 text-center sm:px-8">
        <h2 className="font-display mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          Traga suas dúvidas e seus documentos.
        </h2>
        <Link
          href="/agendar"
          className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
        >
          Agendar consulta
        </Link>
      </section>
    </main>
  );
}
