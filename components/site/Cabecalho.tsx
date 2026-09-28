"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/familia", rotulo: "Família" },
  { href: "/trabalho", rotulo: "Trabalho" },
  { href: "/#como-funciona", rotulo: "Como funciona" },
  { href: "/artigos", rotulo: "Artigos" },
];

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="relative bg-navy-deep/70 backdrop-blur-sm">
      <nav className="flex h-16 items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <Link href="/" className="flex items-center gap-3 text-[15px] font-medium">
          <Image
            src="/brand/pm.png"
            alt="Paola Marra Advocacia"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="hidden sm:inline">Paola Marra Advocacia</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-mist transition-colors hover:text-paper">
                {link.rotulo}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/agendar"
            className="whitespace-nowrap rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
          >
            Agendar consulta
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-paper md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
          >
            <span aria-hidden="true" className="text-xl">
              {aberto ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      {aberto && (
        <ul
          id="menu-movel"
          className="mx-5 flex flex-col gap-1 rounded-2xl bg-navy-deep/95 p-4 backdrop-blur md:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base text-paper"
                onClick={() => setAberto(false)}
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
