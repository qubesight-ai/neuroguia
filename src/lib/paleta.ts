/**
 * Familias cromáticas de NeuroGuía, inspiradas en el infinito multicolor de la
 * neurodiversidad. Cada familia expone clases utilitarias ya construidas para
 * que los componentes no escriban colores a mano.
 */
export type FamiliaColor =
  | "azul"
  | "cielo"
  | "turquesa"
  | "verde"
  | "amarillo"
  | "naranja"
  | "coral"
  | "magenta"
  | "morado";

export interface EstiloFamilia {
  /** Fondo pastel muy suave para tarjetas. */
  fondo: string;
  /** Círculo de color para el icono. */
  circulo: string;
  /** Texto con contraste accesible. */
  texto: string;
  /** Borde de color. */
  borde: string;
  /** Borde superior de acento. */
  bordeSuperior: string;
  /** Anillo de selección. */
  anillo: string;
  /** Punto o indicador sólido. */
  punto: string;
}

export const familias: Record<FamiliaColor, EstiloFamilia> = {
  azul: {
    fondo: "bg-card",
    circulo: "bg-nd-azul-soft text-nd-azul-ink",
    texto: "text-nd-azul-ink",
    borde: "border-nd-azul/50",
    bordeSuperior: "border-t-nd-azul",
    anillo: "ring-nd-azul",
    punto: "bg-nd-azul",
  },
  cielo: {
    fondo: "bg-card",
    circulo: "bg-nd-cielo-soft text-nd-cielo-ink",
    texto: "text-nd-cielo-ink",
    borde: "border-nd-cielo/50",
    bordeSuperior: "border-t-nd-cielo",
    anillo: "ring-nd-cielo",
    punto: "bg-nd-cielo",
  },
  turquesa: {
    fondo: "bg-card",
    circulo: "bg-nd-turquesa-soft text-nd-turquesa-ink",
    texto: "text-nd-turquesa-ink",
    borde: "border-nd-turquesa/50",
    bordeSuperior: "border-t-nd-turquesa",
    anillo: "ring-nd-turquesa",
    punto: "bg-nd-turquesa",
  },
  verde: {
    fondo: "bg-card",
    circulo: "bg-nd-verde-soft text-nd-verde-ink",
    texto: "text-nd-verde-ink",
    borde: "border-nd-verde/50",
    bordeSuperior: "border-t-nd-verde",
    anillo: "ring-nd-verde",
    punto: "bg-nd-verde",
  },
  amarillo: {
    fondo: "bg-card",
    circulo: "bg-nd-amarillo-soft text-nd-amarillo-ink",
    texto: "text-nd-amarillo-ink",
    borde: "border-nd-amarillo/60",
    bordeSuperior: "border-t-nd-amarillo",
    anillo: "ring-nd-amarillo",
    punto: "bg-nd-amarillo",
  },
  naranja: {
    fondo: "bg-card",
    circulo: "bg-nd-naranja-soft text-nd-naranja-ink",
    texto: "text-nd-naranja-ink",
    borde: "border-nd-naranja/50",
    bordeSuperior: "border-t-nd-naranja",
    anillo: "ring-nd-naranja",
    punto: "bg-nd-naranja",
  },
  coral: {
    fondo: "bg-card",
    circulo: "bg-nd-coral-soft text-nd-coral-ink",
    texto: "text-nd-coral-ink",
    borde: "border-nd-coral/50",
    bordeSuperior: "border-t-nd-coral",
    anillo: "ring-nd-coral",
    punto: "bg-nd-coral",
  },
  magenta: {
    fondo: "bg-card",
    circulo: "bg-nd-magenta-soft text-nd-magenta-ink",
    texto: "text-nd-magenta-ink",
    borde: "border-nd-magenta/50",
    bordeSuperior: "border-t-nd-magenta",
    anillo: "ring-nd-magenta",
    punto: "bg-nd-magenta",
  },
  morado: {
    fondo: "bg-card",
    circulo: "bg-nd-morado-soft text-nd-morado-ink",
    texto: "text-nd-morado-ink",
    borde: "border-nd-morado/50",
    bordeSuperior: "border-t-nd-morado",
    anillo: "ring-nd-morado",
    punto: "bg-nd-morado",
  },
};

export const estiloFamilia = (familia: FamiliaColor) => familias[familia];

/** Reparte familias de color de forma estable para listas sin color propio. */
export const ordenFamilias: FamiliaColor[] = [
  "azul",
  "turquesa",
  "magenta",
  "naranja",
  "morado",
  "verde",
  "cielo",
  "coral",
  "amarillo",
];

export const familiaPorIndice = (i: number): FamiliaColor =>
  ordenFamilias[i % ordenFamilias.length]!;
