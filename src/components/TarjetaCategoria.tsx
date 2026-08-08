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
        "elevar-suave flex gap-4 rounded-3xl border border-border border-t-4 p-5 no-underline",
        "shadow-soft hover:border-t-current",
        c.fondo,
        c.bordeSuperior,
      )}
      data-card
    >
      <span
        className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-full", c.circulo)}
        aria-hidden="true"
      >
        <Icono className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-bold text-foreground">{categoria.nombre}</span>
        <span className="mt-1 block text-sm text-foreground/70">{categoria.descripcion}</span>
        <span className={cn("mt-2 block text-sm font-bold", c.texto)}>
          {total === 1 ? "1 situación" : `${total} situaciones`}
        </span>
      </span>
    </Link>
  );
}
