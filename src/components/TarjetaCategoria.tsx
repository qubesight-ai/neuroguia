import { Link } from "@tanstack/react-router";
import type { Categoria } from "@/data/categorias";
import { estiloFamilia } from "@/lib/paleta";
import { cn } from "@/lib/utils";

export function TarjetaCategoria({ categoria, total }: { categoria: Categoria; total: number }) {
  const Icono = categoria.icono;
  const c = estiloFamilia(categoria.color);

  return (
    <Link
      to="/situaciones"
      search={{ categoria: categoria.id, q: "", ambiguedad: "todas" }}
      className={cn(
        "tarjeta-editorial elevar-suave flex gap-4 p-5 no-underline",
        c.fondo,
      )}
      data-card
    >
      <span
        className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-none", c.circulo)}
        aria-hidden="true"
      >
        <Icono className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0">
        <span className="font-display block text-lg font-bold text-foreground">
          {categoria.nombre}
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">{categoria.descripcion}</span>
        <span className="antetitulo mt-2 block">
          {total === 1 ? "1 situación" : `${total} situaciones`}
        </span>
      </span>
    </Link>
  );
}
