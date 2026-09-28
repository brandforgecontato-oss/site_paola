"use client";

// Substitui o botão flutuante de WhatsApp: aqui é só demonstração, sem número real e sem envio.
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function PainelMensagem() {
  const [aberto, setAberto] = useState(false);
  const reduz = useReducedMotion();
  const painelId = useId();

  return (
    <div className="painel-flutuante fixed right-5 bottom-5 z-30 sm:right-8 sm:bottom-8">
      <AnimatePresence>
        {aberto && (
          <motion.div
            id={painelId}
            role="dialog"
            aria-label="Mensagem de demonstração"
            initial={{ opacity: 0, y: reduz ? 0 : 12, scale: reduz ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduz ? 0 : 12, scale: reduz ? 1 : 0.97 }}
            transition={{ duration: reduz ? 0 : 0.2 }}
            className="mb-3 w-72 rounded-2xl border border-white/10 bg-navy p-5 text-sm text-paper shadow-xl"
          >
            <p>
              Neste projeto conceitual, o contato por mensagem é só demonstração. Nenhum número real
              está ligado a este site.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls={painelId}
        className="grid size-14 place-items-center rounded-full bg-gold text-navy-deep shadow-lg transition-transform hover:scale-105"
        aria-label="Mandar mensagem (demonstração)"
      >
        <span aria-hidden="true" className="text-2xl">
          {aberto ? "✕" : "💬"}
        </span>
      </button>
    </div>
  );
}
