import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variante = "primario" | "secundario" | "contorno" | "sutil" | "peligro";
type Tamano = "sm" | "md" | "lg";

const variantes: Record<Variante, string> = {
  primario: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
  secundario:
    "bg-secondary text-secondary-foreground hover:bg-secondary/85 border border-secondary",
  contorno: "bg-card text-foreground border border-input hover:bg-muted",
  sutil: "bg-muted text-foreground border border-transparent hover:bg-primary-soft",
  peligro:
    "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90",
};

const tamanos: Record<Tamano, string> = {
  sm: "min-h-11 px-3 py-2 text-sm gap-2",
  md: "min-h-12 px-5 py-2.5 text-base gap-2",
  lg: "min-h-14 px-6 py-3 text-lg gap-2.5",
};

export interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  tamano?: Tamano;
}

export const Boton = forwardRef<HTMLButtonElement, BotonProps>(
  ({ className, variante = "primario", tamano = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors",
        "disabled:pointer-events-none disabled:opacity-60",
        variantes[variante],
        tamanos[tamano],
        className,
      )}
      {...props}
    />
  ),
);
Boton.displayName = "Boton";