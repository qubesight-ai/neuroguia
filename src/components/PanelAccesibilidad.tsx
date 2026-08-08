import { useEffect, useRef } from "react";
import { X, Minus, Plus, RotateCcw } from "lucide-react";
import { Boton } from "./ui/Boton";
import {
  ESCALA_MAX,
  ESCALA_MIN,
  ESCALA_PASO,
  INTENSIDADES,
  usePreferencias,
} from "@/lib/preferencias";
import { cn } from "@/lib/utils";

function Interruptor({
  id,
  etiqueta,
  descripcion,
  activo,
  onChange,
}: {
  id: string;
  etiqueta: string;
  descripcion: string;
  activo: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <label htmlFor={id} className="min-w-0 cursor-pointer">
        <span className="block font-semibold">{etiqueta}</span>
        <span className="block text-sm text-muted-foreground">{descripcion}</span>
      </label>
      <input
        id={id}
        type="checkbox"
        checked={activo}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-6 w-6 shrink-0 rounded border-2 border-input accent-[var(--primary)]"
      />
    </div>
  );
}

export function PanelAccesibilidad({ onCerrar }: { onCerrar: () => void }) {
  const { prefs, actualizar, restablecer } = usePreferencias();
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contenedor.current?.querySelector<HTMLElement>("button, input")?.focus();
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
    };
    document.addEventListener("keydown", alTeclado);
    return () => document.removeEventListener("keydown", alTeclado);
  }, [onCerrar]);

  const porcentaje = Math.round(prefs.escalaTexto * 100);

  return (
    <div
      ref={contenedor}
      role="dialog"
      aria-modal="false"
      aria-label="Opciones de accesibilidad"
      className="card-soft absolute right-0 z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] p-5 shadow-soft-lg"
      data-card
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold">Accesibilidad</h2>
        <Boton variante="sutil" tamano="sm" onClick={onCerrar} aria-label="Cerrar opciones de accesibilidad">
          <X className="h-5 w-5" aria-hidden="true" />
        </Boton>
      </div>

      <fieldset className="mt-4 border-b border-border pb-4">
        <legend className="font-semibold">Tamaño del texto</legend>
        <div className="mt-2 flex items-center gap-3">
          <Boton
            variante="contorno"
            tamano="sm"
            aria-label="Reducir el tamaño del texto"
            disabled={prefs.escalaTexto <= ESCALA_MIN}
            onClick={() =>
              actualizar({
                escalaTexto: Math.max(ESCALA_MIN, +(prefs.escalaTexto - ESCALA_PASO).toFixed(2)),
              })
            }
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </Boton>
          <output className="min-w-16 text-center font-semibold" aria-live="polite">
            {porcentaje}%
          </output>
          <Boton
            variante="contorno"
            tamano="sm"
            aria-label="Aumentar el tamaño del texto"
            disabled={prefs.escalaTexto >= ESCALA_MAX}
            onClick={() =>
              actualizar({
                escalaTexto: Math.min(ESCALA_MAX, +(prefs.escalaTexto + ESCALA_PASO).toFixed(2)),
              })
            }
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </Boton>
        </div>
      </fieldset>

      <fieldset className="mt-2">
        <legend className="sr-only">Preferencias de visualización</legend>
        <Interruptor
          id="pref-contraste"
          etiqueta="Alto contraste"
          descripcion="Refuerza bordes y color del texto."
          activo={prefs.altoContraste}
          onChange={(v) => actualizar({ altoContraste: v })}
        />
        <Interruptor
          id="pref-movimiento"
          etiqueta="Reducir animaciones"
          descripcion="Elimina transiciones y movimiento."
          activo={prefs.movimientoReducido}
          onChange={(v) => actualizar({ movimientoReducido: v })}
        />
        <Interruptor
          id="pref-lectura"
          etiqueta="Vista de lectura simplificada"
          descripcion="Menos elementos y una columna estrecha."
          activo={prefs.lecturaSimple}
          onChange={(v) => actualizar({ lecturaSimple: v })}
        />
        <Interruptor
          id="pref-tema"
          etiqueta="Modo oscuro"
          descripcion="Fondo oscuro y texto claro."
          activo={prefs.tema === "oscuro"}
          onChange={(v) => actualizar({ tema: v ? "oscuro" : "claro" })}
        />
        <Interruptor
          id="pref-decoracion"
          etiqueta="Desactivar elementos decorativos"
          descripcion="Oculta ilustraciones y fondos no informativos."
          activo={prefs.sinDecoracion}
          onChange={(v) => actualizar({ sinDecoracion: v })}
        />
      </fieldset>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="m-0 text-sm text-muted-foreground">
          Tus preferencias se guardan solo en este dispositivo.
        </p>
        <Boton variante="sutil" tamano="sm" onClick={restablecer}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Restablecer
        </Boton>
      </div>
    </div>
  );
}