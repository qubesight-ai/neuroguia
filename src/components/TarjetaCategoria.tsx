import { Link } from "@tanstack/react-router";
import type { Categoria } from "@/data/categorias";

export function TarjetaCategoria({ categoria, total }: { categoria: Categoria; total: number }) {
  const Icono = categoria.icono;
  return (
    <Link
      to="/situaciones"
      search={{ categoria: categoria.id, q: "", ambiguedad: "todas" }}
      className="card-soft flex gap-4 p-5 no-underline transition-colors hover:bg-muted"
      data-card
    >
      <span
        className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft"
        aria-hidden="true"
      >
        <Icono className="h-6 w-6 text-primary" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-bold text-foreground">{categoria.nombre}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{categoria.descripcion}</span>
        <span className="mt-2 block text-sm font-semibold text-primary">
          {total === 1 ? "1 situación" : `${total} situaciones`}
        </span>
      </span>
    </Link>
  );
}