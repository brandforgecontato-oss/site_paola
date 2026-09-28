import Link from "next/link";
import { NewsletterRodape } from "@/components/contato/NewsletterRodape";

const LINKS = [
  { href: "/familia", rotulo: "Família" },
  { href: "/trabalho", rotulo: "Trabalho" },
  { href: "/artigos", rotulo: "Artigos" },
  { href: "/privacidade", rotulo: "Privacidade" },
];

export function Rodape() {
  return (
    <footer className="bg-navy-deep px-5 pb-16 text-mist sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rodape-linha" aria-hidden="true" />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 pt-10">
        <div className="flex flex-col gap-2">
          <p className="font-display text-lg font-semibold text-paper">
            Paola <span className="text-gold">Marra</span> Advocacia
          </p>
          <p className="text-sm">Brasília, DF</p>
          <p className="text-sm">contato@example.com (endereço de demonstração)</p>
          <p className="text-sm">Registro profissional: demonstração</p>
        </div>

        <ul className="flex flex-wrap gap-x-2 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="inline-block px-2 py-3 hover:text-paper">
                {link.rotulo}
              </Link>
            </li>
          ))}
        </ul>

        <div className="max-w-sm">
          <p className="mb-2 text-sm font-medium text-paper">Textos novos por e-mail</p>
          <NewsletterRodape />
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-mist/80">
          Projeto conceitual para portfólio. Informações e imagens ilustrativas; não oferece
          atendimento jurídico.
        </p>

        <p className="text-xs text-mist/60">Site por BrandForge</p>
      </div>
    </footer>
  );
}
