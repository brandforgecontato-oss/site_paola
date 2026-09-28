import type { Metadata } from "next";
import Link from "next/link";
import { RevelarAoEntrar } from "@/components/animacoes/RevelarAoEntrar";
import { PalavraJanela } from "@/components/secoes/PalavraJanela";
import { PerguntasFrequentes } from "@/components/secoes/PerguntasFrequentes";

export const metadata: Metadata = {
  title: "Direito de Família em Brasília",
  description:
    "Divórcio, guarda e pensão alimentícia explicados em linguagem simples, com cada etapa combinada. Conceito de site para portfólio.",
  alternates: { canonical: "/familia" },
};

const ITENS = [
  {
    titulo: "Divórcio consensual.",
    texto: "Quando o casal concorda com os termos. Costuma ser o caminho mais rápido e menos desgastante.",
  },
  {
    titulo: "Divórcio litigioso.",
    texto: "Quando não há acordo. Você entende cada fase antes de ela começar.",
  },
  {
    titulo: "Guarda dos filhos.",
    texto: "Definição de com quem as crianças moram e como fica a convivência.",
  },
  {
    titulo: "Pensão alimentícia.",
    texto: "Pedido, revisão ou ajuste do valor, conforme a necessidade e a possibilidade de cada parte.",
  },
];

const FAQ = [
  {
    pergunta: "Dá para fazer divórcio sem ir ao fórum?",
    resposta: "Em alguns casos, sim, por cartório. Na consulta você descobre se o seu se encaixa.",
  },
  {
    pergunta: "A pensão pode mudar depois?",
    resposta: "Pode ser revista quando a situação de quem paga ou de quem recebe muda.",
  },
];

export default function Familia() {
  return (
    <main id="conteudo">
      <PalavraJanela palavra="família" />

      <section className="relative overflow-hidden bg-navy-deep px-5 py-20 sm:px-8">
        <div className="brilho-canto brilho-canto--superior-direito" aria-hidden="true" />
        <RevelarAoEntrar className="relative mx-auto max-w-3xl">
          <h1 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Direito de Família em Brasília
          </h1>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-mist">
            Separação, guarda e pensão mexem com a casa inteira. O objetivo é resolver com o menor
            desgaste possível, e com você sabendo o que está acontecendo.
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
            Na consulta, você conta a situação da família. Se houver chance de acordo, ela é
            considerada primeiro. Se não houver, você recebe o plano por escrito antes de qualquer
            passo.
          </p>
        </RevelarAoEntrar>
      </section>

      <PerguntasFrequentes titulo="Perguntas" itens={FAQ} />

      <section className="relative overflow-hidden bg-navy px-5 py-20 text-center sm:px-8">
        <div className="brilho-canto brilho-canto--inferior-esquerdo" aria-hidden="true" />
        <RevelarAoEntrar className="relative">
          <h2 className="font-display mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
            Conte o que está acontecendo.
          </h2>
          <Link
            href="/agendar"
            className="botao-ouro inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep"
          >
            Agendar consulta
          </Link>
        </RevelarAoEntrar>
      </section>
    </main>
  );
}
