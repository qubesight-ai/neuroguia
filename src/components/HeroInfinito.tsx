import { SimboloInfinito } from "./Logo";

/** Manchas orgánicas pastel muy suaves de fondo. */
export function ManchasFondo() {
  return (
    <div
      aria-hidden="true"
      data-decorative="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <span className="flotar-lento absolute -left-32 -top-32 h-96 w-96 rounded-full bg-nd-azul-soft/60 blur-[80px]" />
      <span className="flotar-lento absolute bottom-[-10rem] right-[-6rem] h-96 w-96 rounded-full bg-nd-turquesa-soft/50 blur-[90px] [animation-delay:-12s]" />
    </div>
  );
}

/**
 * Ilustración abstracta: un gran infinito multicolor y varios caminos curvos
 * que llegan al mismo punto por rutas distintas.
 */
export function IlustracionInfinito() {
  return (
    <div className="relative mx-auto w-full max-w-md" data-decorative="true">
      <SimboloInfinito
        className="h-auto w-full"
        idGradiente="nd-infinito-hero"
        ancho={2}
      />

      <svg
        viewBox="0 0 320 140"
        aria-hidden="true"
        focusable="false"
        className="mt-4 w-full"
      >
        <g fill="none" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 128C60 128 78 34 160 34s108 60 148 60" stroke="var(--nd-azul)" opacity="0.5" />
          <path d="M12 128C74 128 96 66 160 66s96 34 148 34" stroke="var(--nd-turquesa)" opacity="0.5" />
          <path d="M12 128C88 128 110 96 160 96s108 6 148 6" stroke="var(--nd-morado)" opacity="0.4" />
        </g>
        <g>
          <circle cx="160" cy="34" r="3" fill="var(--nd-azul)" />
          <circle cx="160" cy="66" r="3" fill="var(--nd-turquesa)" />
          <circle cx="160" cy="96" r="3" fill="var(--nd-morado)" />
          <circle cx="12" cy="128" r="3.5" fill="var(--foreground)" opacity="0.5" />
        </g>
      </svg>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Distintas maneras de percibir una misma situación pueden llevar a la misma conclusión.
      </p>
    </div>
  );
}
