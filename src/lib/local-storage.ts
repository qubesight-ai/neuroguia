import { useCallback, useEffect, useState } from "react";

export const PREFIX = "neuroguia:";

export function leer<T>(clave: string, porDefecto: T): T {
  if (typeof window === "undefined") return porDefecto;
  try {
    const raw = window.localStorage.getItem(PREFIX + clave);
    return raw ? (JSON.parse(raw) as T) : porDefecto;
  } catch {
    return porDefecto;
  }
}

export function escribir<T>(clave: string, valor: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + clave, JSON.stringify(valor));
    window.dispatchEvent(new CustomEvent("neuroguia:storage", { detail: clave }));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function borrarTodo() {
  if (typeof window === "undefined") return;
  Object.keys(window.localStorage)
    .filter((k) => k.startsWith(PREFIX))
    .forEach((k) => window.localStorage.removeItem(k));
  window.dispatchEvent(new CustomEvent("neuroguia:storage", { detail: "*" }));
}

/**
 * Estado sincronizado con LocalStorage. Empieza con el valor por defecto para
 * evitar diferencias entre servidor y cliente, y lee el dato tras hidratar.
 */
export function useAlmacenLocal<T>(clave: string, porDefecto: T) {
  const [valor, setValor] = useState<T>(porDefecto);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    setValor(leer<T>(clave, porDefecto));
    setListo(true);
    const alCambiar = (e: Event) => {
      const detalle = (e as CustomEvent<string>).detail;
      if (detalle === clave || detalle === "*") setValor(leer<T>(clave, porDefecto));
    };
    window.addEventListener("neuroguia:storage", alCambiar);
    return () => window.removeEventListener("neuroguia:storage", alCambiar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave]);

  const actualizar = useCallback(
    (siguiente: T | ((anterior: T) => T)) => {
      setValor((anterior) => {
        const resultado =
          typeof siguiente === "function"
            ? (siguiente as (a: T) => T)(anterior)
            : siguiente;
        escribir(clave, resultado);
        return resultado;
      });
    },
    [clave],
  );

  return { valor, actualizar, listo } as const;
}

export type TipoGuardado = "situacion" | "guion" | "recurso" | "simulador";

export function useFavoritos(tipo: TipoGuardado) {
  const { valor, actualizar, listo } = useAlmacenLocal<string[]>(`favoritos:${tipo}`, []);

  const alternar = useCallback(
    (id: string) =>
      actualizar((anterior) =>
        anterior.includes(id) ? anterior.filter((x) => x !== id) : [...anterior, id],
      ),
    [actualizar],
  );

  const agregar = useCallback(
    (id: string) => actualizar((anterior) => (anterior.includes(id) ? anterior : [...anterior, id])),
    [actualizar],
  );

  return { ids: valor, alternar, agregar, listo } as const;
}