import { MessageSquare } from "lucide-react";
import type { LineaDialogo } from "@/data/situaciones";

export function DialogoEjemplo({
  titulo,
  lineas,
}: {
  titulo: string;
  lineas: LineaDialogo[];
}) {
  return (
    <div className="card-soft p-5" data-card>
      <h3 className="flex items-center gap-2 text-lg font-bold">
        <MessageSquare className="h-5 w-5 text-primary" aria-hidden="true" />
        {titulo}
      </h3>
      <ol className="mt-3 list-none space-y-3 p-0">
        {lineas.map((l, i) => (
          <li key={i} className="rounded-xl border border-border bg-muted p-4">
            <p className="m-0 text-sm font-bold text-primary">{l.quien}</p>
            <p className="m-0 mt-1">«{l.texto}»</p>
          </li>
        ))}
      </ol>
    </div>
  );
}