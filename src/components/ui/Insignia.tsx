import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { FamiliaColor } from "@/lib/paleta";
import { estiloFamilia } from "@/lib/paleta";

type Tono = "neutro" | "primario" | "menta" | "lavanda" | "aviso" | "riesgo" | FamiliaColor;

const alias: Record<string, FamiliaColor> = {
  primario: "azul",
  menta: "turquesa",
  lavanda: "morado",
  aviso: "amarillo",
  riesgo: "coral",
};

export function Insignia({
  children,
  tono = "neutro",
  className,
}: {
  children: ReactNode;
  tono?: Tono;
  className?: string;
}) {
  const familia = alias[tono] ?? (tono === "neutro" ? null : (tono as FamiliaColor));
  const estilo = familia ? estiloFamilia(familia) : null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold",
        estilo
          ? cn(estilo.fondo, estilo.texto, estilo.borde)
          : "border-border bg-muted text-foreground",
        className,
      )}
    >
      {estilo && (
        <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", estilo.punto)} />
      )}
      {children}
    </span>
  );
}
