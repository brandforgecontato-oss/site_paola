"use client";

import { useRef } from "react";
import { useInViewOnce } from "@/lib/use-in-view-once";

type Props = {
  children: React.ReactNode;
  className?: string;
  margem?: string;
  style?: React.CSSProperties;
};

/** Marca a entrada no viewport; a página define a animação e os estilos. */
export function RevelarAoEntrar({ children, className, margem, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const entrou = useInViewOnce(ref, margem);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-revelar-ao-entrar
      data-revelado={entrou ? "true" : "false"}
    >
      {children}
    </div>
  );
}
