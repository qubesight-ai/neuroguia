import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Gauge } from "lucide-react";
import { Insignia } from "./ui/Insignia";
import { BotonFavorito } from "./BotonFavorito";
import { categoriaPorId } from "@/data/categorias";
import { etiquetaAmbiguedad, type Situacion } from "@/data/situaciones";
import { estiloFamilia } from "@/lib/paleta";
import { cn } from "@/lib/utils";

const tonoAmbiguedad = {
  bajo: "turquesa",
  medio: "amarillo",
  alto: "morado",
} as const;

export function TarjetaSituacion({ situacion }: { situacion: Situacion }) {
  const categoria = categoriaPorId(situacion.categoria);
  const c = estiloFamilia(categoria?.color ?? "azul");

  return (
    <article
      className={cn(
        "elevar-suave flex flex-col rounded-3xl border border-border bg-card p-5 shadow-soft",
        "border-l-4",
        c.bordeSuperior.replace("border-t-", "border-l-"),
      )}
      data-card
    >
      <div className="flex flex-wrap items-center gap-2">
        {categoria && <Insignia tono={categoria.color}>{categoria.nombre}</Insignia>}
        <Insignia tono={tonoAmbiguedad[situacion.ambiguedad]}>
          <Gauge className="h-4 w-4" aria-hidden="true" />
          {etiquetaAmbiguedad[situacion.ambiguedad]}
        </Insignia>
      </div>

      <h3 className="mt-3 text-xl font-bold">
        <Link
          to="/situaciones/$id"
          params={{ id: situacion.id }}
          className="text-foreground no-underline hover:underline"
        >
          {situacion.titulo}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-muted-foreground">{situacion.resumen}</p>

      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <dt className="sr-only">Contexto</dt>
          <dd className="m-0">{situacion.contexto}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <dt className="sr-only">Tiempo de lectura</dt>
          <dd className="m-0">{situacion.minutos} min de lectura</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Link to="/situaciones/$id" params={{ id: situacion.id }} className="no-underline">
          <span className="inline-flex min-h-11 items-center rounded-full border border-transparent bg-[image:var(--grad-principal)] bg-[length:180%_100%] bg-left px-4 py-2 font-semibold text-white shadow-soft transition-[background-position] duration-250 hover:bg-right">
            Ver explicación
          </span>
        </Link>
        <BotonFavorito tipo="situacion" id={situacion.id} nombre={situacion.titulo} />
      </div>
    </article>
  );
}
