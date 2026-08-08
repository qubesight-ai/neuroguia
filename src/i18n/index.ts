import { es, type Diccionario } from "./es";

export type Idioma = "es";

const diccionarios: Record<Idioma, Diccionario> = { es };

export const idiomaActual: Idioma = "es";

export const t = diccionarios[idiomaActual];