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
        "elevar-suave flex gap-4 rounded-2xl border border-border p-5 no-underline",
        "hover:border-foreground/15",
        c.fondo,
      )}
      data-card
    >
      <span
        className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", c.circulo)}
        aria-hidden="true"
      >
        <Icono className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-foreground">{categoria.nombre}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{categoria.descripcion}</span>
        <span className="mt-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {total === 1 ? "1 situación" : `${total} situaciones`}
        </span>
      </span>
    </Link>
  );
}
