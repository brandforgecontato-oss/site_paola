import { site, urlDoSite } from "@/lib/site";

// Cenário de portfólio (Paola Marra Advocacia): proibido schema de escritório real
// (Attorney/LegalService), pois nenhum dado de negócio é real (decisão em projeto/ESTADO.md).
// Publica só um "WebSite" básico com nome e url; nunca telefone, endereço, horário, redes,
// avaliações, FAQ ou credenciais. Nada é publicado se o nome estiver vazio.
export function JsonLdNegocio() {
  const { nome } = site;
  if (!nome) return null;

  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: nome,
    url: urlDoSite(),
  };

  // JSON.stringify não escapa "<": trocar por < impede fechar a tag <script> por engano.
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
