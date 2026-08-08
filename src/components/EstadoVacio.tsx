import type { ReactNode } from "react";
import { SearchX } from "lucide-react";

export function EstadoVacio({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion: string;
  children?: ReactNode;
}) {
  return (
    <div className="card-soft p-8 text-center" data-card role="status">
      <SearchX className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden="true" />
      <h3 className="mt-3 text-lg font-bold">{titulo}</h3>
      <p className="mx-auto mt-1 text-muted-foreground">{descripcion}</p>
      {children && <div className="mt-4 flex flex-wrap justify-center gap-3">{children}</div>}
    </div>
  );
}