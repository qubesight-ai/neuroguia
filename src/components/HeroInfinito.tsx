import { SimboloInfinito } from "./Logo";

/** Manchas orgánicas pastel muy suaves de fondo. */
export function ManchasFondo() {
  return (
    <div
      aria-hidden="true"
      data-decorative="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <span className="flotar-lento absolute -left-24 -top-24 h-80 w-80 rounded-full bg-nd-azul-soft blur-3xl" />
      <span className="flotar-lento absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-nd-magenta-soft blur-3xl [animation-delay:-6s]" />
      <span className="flotar-lento absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-nd-turquesa-soft blur-3xl [animation-delay:-12s]" />
      <span className="flotar-lento absolute bottom-8 right-1/4 h-56 w-56 rounded-full bg-nd-amarillo-soft blur-3xl [animation-delay:-3s]" />
    </div>
  );
}

/**
 * Ilustración abstracta: un gran infinito multicolor y varios caminos curvos
 * que llegan al mismo punto por rutas distintas.
 */
export function IlustracionInfinito() {
  return (
    <div className="relative mx-auto w-full max-w-xl" data-decorative="true">
      <SimboloInfinito
        className="w-full drop-shadow-[0_18px_40px_oklch(0.55_0.12_290_/_22%)]"
        idGradiente="nd-infinito-hero"
        ancho={2.6}
      />

      <svg
        viewBox="0 0 320 140"
        aria-hidden="true"
        focusable="false"
        className="mt-2 w-full"
      >
        <g fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M12 128C60 128 78 34 160 34s108 60 148 60" stroke="var(--nd-azul)" opacity="0.85" />
          <path d="M12 128C74 128 96 66 160 66s96 34 148 34" stroke="var(--nd-turquesa)" opacity="0.85" />
          <path d="M12 128C88 128 110 96 160 96s108 6 148 6" stroke="var(--nd-verde)" opacity="0.85" />
          <path d="M12 128C56 128 70 14 160 14s118 84 148 84" stroke="var(--nd-magenta)" opacity="0.7" />
          <path d="M12 128C100 128 126 112 160 112s122 -12 148 -12" stroke="var(--nd-naranja)" opacity="0.7" />
        </g>
        <g>
          <circle cx="160" cy="14" r="6" fill="var(--nd-magenta)" />
          <circle cx="160" cy="34" r="6" fill="var(--nd-azul)" />
          <circle cx="160" cy="66" r="6" fill="var(--nd-turquesa)" />
          <circle cx="160" cy="96" r="6" fill="var(--nd-verde)" />
          <circle cx="160" cy="112" r="6" fill="var(--nd-naranja)" />
          <circle cx="12" cy="128" r="7" fill="var(--nd-morado)" />
          <circle cx="308" cy="94" r="7" fill="var(--nd-cielo)" />
        </g>
      </svg>

      <p className="mt-3 text-center text-sm text-muted-foreground">
        Distintas maneras de percibir una misma situación pueden llevar a la misma conclusión.
      </p>
    </div>
  );
}
