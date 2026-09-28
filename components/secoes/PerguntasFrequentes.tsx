"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type Pergunta = { pergunta: string; resposta: string };

export function PerguntasFrequentes({ titulo = "Perguntas frequentes", itens }: { titulo?: string; itens: Pergunta[] }) {
  const [aberta, setAberta] = useState<number | null>(0);
  const reduz = useReducedMotion();
  const idBase = useId();

  return (
    <section className="bg-navy-deep px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{titulo}</h2>

        <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {itens.map((item, i) => {
            const painelId = `${idBase}-painel-${i}`;
            const expandida = aberta === i;
            return (
              <li key={item.pergunta}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={expandida}
                    aria-controls={painelId}
                    onClick={() => setAberta(expandida ? null : i)}
                  >
                    <span className="font-medium">{item.pergunta}</span>
                    <span aria-hidden="true" className="shrink-0 text-gold">
                      {expandida ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expandida && (
                    <motion.div
                      id={painelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduz ? 0 : 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-mist">{item.resposta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
