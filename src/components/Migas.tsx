import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Miga {
  texto: string;
  to?: string;
}

export function Migas({ items }: { items: Miga[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-6" data-reading-hide="true">
      <ol className="flex list-none flex-wrap items-center gap-1 p-0 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="underline">
            Inicio
          </Link>
        </li>
        {items.map((m, i) => (
          <li key={m.texto} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            {m.to && i < items.length - 1 ? (
              <Link to={m.to} className="underline">
                {m.texto}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-foreground">
                {m.texto}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}