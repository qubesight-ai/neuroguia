import { es, type Diccionario } from "./es";
import { en } from "./en";
import { usePreferencias } from "@/lib/preferencias";

export type Idioma = "es" | "en";
export type { Diccionario };

const diccionarios: Record<Idioma, Diccionario> = { es, en };

/** Devuelve el diccionario del idioma elegido en las preferencias. */
export function useT(): Diccionario {
  const { prefs } = usePreferencias();
  return diccionarios[prefs.idioma] ?? es;
}
