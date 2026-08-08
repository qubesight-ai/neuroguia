import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variante =
  /** Degradado azul → morado → magenta. */
  | "primario"
  /** Degradado turquesa → verde: regulación y acciones protectoras. */
  | "regulacion"
  /** Degradado amarillo → naranja: advertencias y matices. */
  | "aviso"
  /** Coral con texto de alto contraste: seguridad y límites. */
  | "seguridad"
  /** Fondo blanco con borde del color de la sección. */
  | "contorno"
  /** Fondo blanco con borde multicolor. */
  | "contorno-multicolor"
  | "sutil"
  | "peligro";

type Tamano = "sm" | "md" | "lg";

const variantes: Record<Variante, string> = {
  primario:
    "border border-transparent bg-nd-azul text-white hover:brightness-[1.06] active:scale-[0.985]",
  regulacion:
    "border border-transparent bg-nd-turquesa text-white hover:brightness-[1.06] active:scale-[0.985]",
  aviso:
    "border border-transparent bg-nd-amarillo text-nd-amarillo-ink hover:brightness-[1.04] active:scale-[0.985]",
  seguridad:
    "border border-transparent bg-nd-coral text-white hover:brightness-[1.06] active:scale-[0.985]",
  contorno: "bg-card text-foreground border border-input hover:bg-muted active:bg-muted",
  "contorno-multicolor":
    "bg-card text-foreground border border-input hover:bg-muted active:bg-muted",
  sutil: "bg-muted text-foreground border border-transparent hover:bg-muted/70",
  peligro:
    "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90",
};

const tamanos: Record<Tamano, string> = {
  sm: "min-h-11 px-3.5 py-2 text-[0.72rem] gap-2",
  md: "min-h-11 px-5 py-2.5 text-[0.78rem] gap-2",
  lg: "min-h-12 px-6 py-3 text-[0.85rem] gap-2.5",
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
        "inline-flex items-center justify-center rounded-none font-bold uppercase tracking-[0.1em]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "disabled:pointer-events-none disabled:opacity-55 disabled:shadow-none disabled:saturate-50",
        variantes[variante],
        tamanos[tamano],
        className,
      )}
      {...props}
    />
  ),
);
Boton.displayName = "Boton";
