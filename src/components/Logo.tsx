import { cn } from "@/lib/utils";

/**
 * Símbolo del infinito de la neurodiversidad, dibujado con un trazo continuo
 * y un degradado multicolor fluido. Sin piezas de rompecabezas.
 */
export function SimboloInfinito({
  className,
  idGradiente,
  ancho = 3.4,
}: {
  className?: string;
  idGradiente?: string;
  ancho?: number;
}) {
  const id: string = idGradiente ?? "nd-infinito";
  return (
    <svg
      viewBox="0 0 64 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-8 w-16", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0%" stopColor="var(--nd-azul)" />
          <stop offset="16%" stopColor="var(--nd-cielo)" />
          <stop offset="32%" stopColor="var(--nd-turquesa)" />
          <stop offset="46%" stopColor="var(--nd-verde)" />
          <stop offset="58%" stopColor="var(--nd-amarillo)" />
          <stop offset="70%" stopColor="var(--nd-naranja)" />
          <stop offset="80%" stopColor="var(--nd-coral)" />
          <stop offset="90%" stopColor="var(--nd-magenta)" />
          <stop offset="100%" stopColor="var(--nd-morado)" />
        </linearGradient>
      </defs>
      <path
        d="M32 16C26.5 5.4 20.8 2.4 14.2 4.2 7.2 6.1 3.4 10.6 3.4 16c0 5.4 3.8 9.9 10.8 11.8 6.6 1.8 12.3-1.2 17.8-11.8 5.5-10.6 11.2-13.6 17.8-11.8 7 1.9 10.8 6.4 10.8 11.8 0 5.4-3.8 9.9-10.8 11.8C43.2 29.6 37.5 26.6 32 16Z"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={ancho}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Logotipo horizontal: símbolo + nombre. Usa `soloSimbolo` para la versión reducida. */
export function Logo({
  className,
  soloSimbolo = false,
  claro = false,
  idGradiente = "nd-infinito",
}: {
  className?: string;
  soloSimbolo?: boolean;
  claro?: boolean;
  idGradiente?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <SimboloInfinito className="h-6 w-12 shrink-0" idGradiente={idGradiente} />
      {!soloSimbolo && (
        <span
          className={cn(
            "font-display text-2xl font-black tracking-[-0.035em] sm:text-[1.7rem]",
            claro ? "text-white" : "text-foreground",
          )}
        >
          Neuro<span className={claro ? "text-white" : "italic"}>Guía</span>
        </span>
      )}
      {soloSimbolo && <span className="sr-only">NeuroGuía</span>}
    </span>
  );
}
