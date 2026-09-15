import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { escribir, leer } from "./local-storage";

export type Tema = "claro" | "oscuro";
export type Intensidad = "calma" | "equilibrada" | "vibrante";
export type Idioma = "es" | "en";

export interface Preferencias {
  idioma: Idioma;
  escalaTexto: number;
  altoContraste: boolean;
  movimientoReducido: boolean;
  lecturaSimple: boolean;
  tema: Tema;
  sinDecoracion: boolean;
  intensidad: Intensidad;
}

export const PREFERENCIAS_POR_DEFECTO: Preferencias = {
  idioma: "es",
  escalaTexto: 1,
  altoContraste: false,
  movimientoReducido: false,
  lecturaSimple: false,
  tema: "claro",
  sinDecoracion: false,
  intensidad: "equilibrada",
};

export const INTENSIDADES: { id: Intensidad; nombre: string; descripcion: string }[] = [
  {
    id: "calma",
    nombre: "Calma",
    descripcion: "Sin degradados, colores pastel muy suaves.",
  },
  {
    id: "equilibrada",
    nombre: "Equilibrada",
    descripcion: "Diseño multicolor normal.",
  },
  {
    id: "vibrante",
    nombre: "Vibrante",
    descripcion: "Colores y degradados más intensos.",
  },
];

export const ESCALA_MIN = 0.9;
export const ESCALA_MAX = 1.6;
export const ESCALA_PASO = 0.1;

interface Contexto {
  prefs: Preferencias;
  actualizar: (parcial: Partial<Preferencias>) => void;
  restablecer: () => void;
}

const PreferenciasContext = createContext<Contexto | null>(null);

const CLAVE = "preferencias";

function aplicar(prefs: Preferencias) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = prefs.idioma;
  root.style.setProperty("--font-scale", String(prefs.escalaTexto));
  root.classList.toggle("dark", prefs.tema === "oscuro");
  root.classList.toggle("hc", prefs.altoContraste);
  root.classList.toggle("reduce-motion", prefs.movimientoReducido);
  root.classList.toggle("reading-view", prefs.lecturaSimple);
  root.classList.toggle("no-decor", prefs.sinDecoracion);
  root.classList.toggle("intensidad-calma", prefs.intensidad === "calma");
  root.classList.toggle("intensidad-vibrante", prefs.intensidad === "vibrante");
}

export function ProveedorPreferencias({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Preferencias>(PREFERENCIAS_POR_DEFECTO);

  useEffect(() => {
    const guardadas = leer<Partial<Preferencias>>(CLAVE, {});
    const sistemaReduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const inicial: Preferencias = {
      ...PREFERENCIAS_POR_DEFECTO,
      movimientoReducido: Boolean(sistemaReduce),
      ...guardadas,
    };
    setPrefs(inicial);
    aplicar(inicial);
  }, []);

  const actualizar = useCallback((parcial: Partial<Preferencias>) => {
    setPrefs((anterior) => {
      const siguiente = { ...anterior, ...parcial };
      escribir(CLAVE, siguiente);
      aplicar(siguiente);
      return siguiente;
    });
  }, []);

  const restablecer = useCallback(() => {
    setPrefs(PREFERENCIAS_POR_DEFECTO);
    escribir(CLAVE, PREFERENCIAS_POR_DEFECTO);
    aplicar(PREFERENCIAS_POR_DEFECTO);
  }, []);

  const valor = useMemo(() => ({ prefs, actualizar, restablecer }), [prefs, actualizar, restablecer]);

  return <PreferenciasContext.Provider value={valor}>{children}</PreferenciasContext.Provider>;
}

export function usePreferencias() {
  const ctx = useContext(PreferenciasContext);
  if (!ctx) throw new Error("usePreferencias debe usarse dentro de ProveedorPreferencias");
  return ctx;
}