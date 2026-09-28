import { ImageResponse } from "next/og";

// Placeholder até existir um poster processado do vídeo do hero em
// public/media/hero-particulas-16x9.jpg (pendência registrada para o dev). Enquanto isso,
// gera a mesma composição descrita em projeto/COPY.md (Open Graph): fundo azul, palavra
// "clareza" em ouro, sem juridiquês e sem dado de negócio real.
export const alt = "Paola Marra Advocacia · conceito de site";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const AZUL = "#0b1f3a";
const OURO = "#c9a24b";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: AZUL,
          color: OURO,
          fontFamily: "serif",
        }}
      >
        <span style={{ fontSize: 120, letterSpacing: 4 }}>clareza</span>
        <span style={{ fontSize: 32, color: "#f5f0e6", marginTop: 24 }}>
          Paola Marra Advocacia · conceito de site
        </span>
      </div>
    ),
    { ...size },
  );
}
