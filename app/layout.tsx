import type { Metadata } from "next";
import { Bricolage_Grotesque, Herr_Von_Muellerhoff, Instrument_Sans } from "next/font/google";
import { JsonLdNegocio } from "@/components/seo/JsonLd";
import { PainelMensagem } from "@/components/contato/PainelMensagem";
import { Aviso } from "@/components/site/Aviso";
import { Cabecalho } from "@/components/site/Cabecalho";
import { Rodape } from "@/components/site/Rodape";
import { site, siteIndexavel, urlDoSite } from "@/lib/site";
import "./globals.css";

// Tipografia da direção B "Clareza em ouro" (projeto/DIRECAO.md).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
const muelleroff = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-muelleroff",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(urlDoSite()),
  title: site.nome ? { default: site.nome, template: `%s · ${site.nome}` } : "Site em construção",
  description: site.descricao || undefined,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome || undefined,
    title: "Paola Marra Advocacia · conceito de site",
    description: "Família e trabalho em Brasília, sem juridiquês. Projeto conceitual de portfólio.",
  },
  robots: siteIndexavel() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${instrument.variable} ${muelleroff.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-deep"
        >
          Pular para o conteúdo
        </a>
        <div className="fixed inset-x-0 top-0 z-40">
          <Aviso />
          <Cabecalho />
        </div>
        {children}
        <Rodape />
        <PainelMensagem />
        <JsonLdNegocio />
      </body>
    </html>
  );
}
