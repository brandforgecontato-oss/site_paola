import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";
import { siteIndexavel } from "./lib/site";

// IPs desta máquina na rede local: o servidor de desenvolvimento aceita o celular na mesma rede Wi-Fi
// (o Next bloqueia origens que não sejam localhost). Só vale no `next dev`.
const ipsDaRede = Object.values(networkInterfaces())
  .flat()
  .filter((i) => i && i.family === "IPv4" && !i.internal)
  .map((i) => i!.address);

// Headers de segurança base (skill seguranca-web, assets/headers-seguranca.md).
// CSP fechada: o site não carrega nenhum script, fonte ou mídia de terceiros (fontes via
// next/font ficam self-hosted no build, vídeos e imagens vêm de /public). 'unsafe-inline' em
// script/style é necessário pelos scripts de hidratação do próprio Next.js e pelas classes
// utilitárias do Tailwind; sem CDN, analytics ou script externo, isso não amplia a superfície.
// unsafe-eval só em desenvolvimento: o React usa eval() para depuração em modo dev
// (nunca em produção); sem isso, o próprio Next dev quebra com essa CSP.
const scriptSrcDev = process.env.NODE_ENV === "production" ? "" : " 'unsafe-eval'";
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${scriptSrcDev}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const headersSeguranca = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ipsDaRede,
  async headers() {
    const headers = siteIndexavel() ? headersSeguranca : [...headersSeguranca, { key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
