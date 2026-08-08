import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Gauge } from "lucide-react";
import { Insignia } from "./ui/Insignia";
import { BotonFavorito } from "./BotonFavorito";
import { categoriaPorId } from "@/data/categorias";
import { etiquetaAmbiguedad, type Situacion } from "@/data/situaciones";

const tonoAmbiguedad = {
  bajo: "menta",
  medio: "aviso",
  alto: "lavanda",
} as const;

export function TarjetaSituacion({ situacion }: { situacion: Situacion }) {
  const categoria = categoriaPorId(situacion.categoria);

  return (
    <article className="card-soft flex flex-col p-5" data-card>
      <div className="flex flex-wrap items-center gap-2">
        {categoria && <Insignia tono="primario">{categoria.nombre}</Insignia>}
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
        <Link
          to="/situaciones/$id"
          params={{ id: situacion.id }}
          className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground no-underline hover:bg-primary/90"
        >
          Ver explicación
        </Link>
        <BotonFavorito tipo="situacion" id={situacion.id} nombre={situacion.titulo} />
      </div>
    </article>
  );
}