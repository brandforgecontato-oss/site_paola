import type { Metadata } from "next";
import { Areas } from "@/components/secoes/Areas";
import { ArtigosChamada } from "@/components/secoes/ArtigosChamada";
import { Atendimento } from "@/components/secoes/Atendimento";
import { ChamadaFinal } from "@/components/secoes/ChamadaFinal";
import { ComoFunciona } from "@/components/secoes/ComoFunciona";
import { Hero } from "@/components/secoes/Hero";
import { PerguntasFrequentes } from "@/components/secoes/PerguntasFrequentes";
import { PorQueSimples } from "@/components/secoes/PorQueSimples";

export const metadata: Metadata = {
  title: { absolute: "Paola Marra Advocacia · Família e Trabalho em Brasília" },
  description:
    "Conceito de site de advocacia de família e do trabalho em Brasília, com linguagem simples e cada etapa explicada. Projeto de portfólio.",
  alternates: { canonical: "/" },
};

const FAQ_INICIO = [
  {
    pergunta: "Quanto tempo demora um processo?",
    resposta:
      "Depende do tipo de caso, de haver acordo e do andamento do Judiciário. Na consulta, você recebe uma estimativa realista para a sua situação, sem promessas de prazo.",
  },
  {
    pergunta: "Meu caso é simples. Preciso mesmo de advogada?",
    resposta: "Casos simples também têm detalhes que fazem diferença. A consulta serve para você entender se precisa, e de quê.",
  },
  {
    pergunta: "Posso fazer tudo online?",
    resposta: "Sim. Consulta, envio de documentos e acompanhamento podem ser feitos à distância.",
  },
  {
    pergunta: "O que levo para a primeira consulta?",
    resposta: "O que você tiver: documentos, mensagens, datas. Se faltar algo, você sai sabendo o que providenciar.",
  },
  {
    pergunta: "O que eu conto fica em sigilo?",
    resposta: "Sim. O sigilo profissional vale desde a primeira consulta.",
  },
];

export default function Inicio() {
  return (
    <main id="conteudo">
      <Hero />
      <ComoFunciona />
      <Areas />
      <PorQueSimples />
      <Atendimento />
      <PerguntasFrequentes itens={FAQ_INICIO} />
      <ArtigosChamada />
      <ChamadaFinal />
    </main>
  );
}
