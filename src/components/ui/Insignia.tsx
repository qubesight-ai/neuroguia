import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tono = "neutro" | "primario" | "menta" | "lavanda" | "aviso" | "riesgo";

const tonos: Record<Tono, string> = {
  neutro: "bg-muted text-foreground border-border",
  primario: "bg-primary-soft text-foreground border-primary/40",
  menta: "bg-secondary-soft text-foreground border-secondary/50",
  lavanda: "bg-lavender-soft text-foreground border-lavender/40",
  aviso: "bg-warning-soft text-warning-foreground border-warning/60",
  riesgo: "bg-destructive-soft text-foreground border-destructive/50",
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
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
        tonos[tono],
        className,
      )}
    >
      {children}
    </span>
  );
}