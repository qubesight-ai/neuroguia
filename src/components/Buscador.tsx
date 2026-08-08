import { Search, X } from "lucide-react";
import { useId } from "react";
import { Boton } from "./ui/Boton";

export function Buscador({
  valor,
  onCambio,
  etiqueta,
  marcador,
  resultados,
}: {
  valor: string;
  onCambio: (v: string) => void;
  etiqueta: string;
  marcador: string;
  resultados?: number;
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="block text-lg font-semibold">
        {etiqueta}
      </label>
      <div className="mt-2 flex items-center gap-2">
        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id={id}
            type="search"
            value={valor}
            onChange={(e) => onCambio(e.target.value)}
            placeholder={marcador}
            aria-describedby={resultados !== undefined ? `${id}-conteo` : undefined}
            className="min-h-14 w-full rounded-xl border-2 border-input bg-card pl-12 pr-4 text-base placeholder:text-muted-foreground"
          />
        </div>
        {valor && (
          <Boton variante="contorno" tamano="sm" onClick={() => onCambio("")}>
            <X className="h-4 w-4" aria-hidden="true" />
            Limpiar
          </Boton>
        )}
      </div>
      {resultados !== undefined && (
        <p id={`${id}-conteo`} aria-live="polite" className="mt-2 text-sm text-muted-foreground">
          {resultados === 1 ? "1 resultado" : `${resultados} resultados`}
        </p>
      )}
    </div>
  );
}