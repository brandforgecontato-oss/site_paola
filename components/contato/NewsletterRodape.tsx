"use client";

import { useId, useState } from "react";

export function NewsletterRodape() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return <p role="status" className="text-sm text-gold">Demonstração: nenhuma inscrição foi feita e nenhum dado foi enviado.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1">
        <label htmlFor={id} className="sr-only">
          Seu e-mail
        </label>
        <input
          id={id}
          type="email"
          required
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-navy-deep px-4 py-3 text-sm text-paper placeholder:text-mist/60"
        />
      </div>
      <button type="submit" className="shrink-0 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy-deep">
        Quero receber
      </button>
    </form>
  );
}
