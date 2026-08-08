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
    "border border-transparent text-white shadow-soft bg-[image:var(--grad-principal)] bg-[length:180%_100%] bg-left hover:bg-right active:brightness-95",
  regulacion:
    "border border-transparent text-white shadow-soft bg-[image:var(--grad-calma)] bg-[length:180%_100%] bg-left hover:bg-right active:brightness-95",
  aviso:
    "border border-transparent text-nd-amarillo-ink shadow-soft bg-[image:var(--grad-aviso)] bg-[length:180%_100%] bg-left hover:bg-right active:brightness-95",
  seguridad:
    "border border-nd-coral bg-nd-coral text-white shadow-soft hover:brightness-95 active:brightness-90",
  contorno: "bg-card text-foreground border-2 border-input hover:bg-muted active:bg-muted",
  "contorno-multicolor": "borde-degradado text-foreground hover:brightness-[0.98]",
  sutil: "bg-muted text-foreground border border-transparent hover:bg-nd-azul-soft",
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
        "inline-flex items-center justify-center rounded-full font-semibold",
        "transition-[background-position,background-color,filter,box-shadow,transform] duration-250",
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
