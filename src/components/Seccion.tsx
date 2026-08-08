import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { estiloFamilia, familiaPorIndice } from "@/lib/paleta";

export function Contenedor({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}>{children}</div>;
}

export function EncabezadoPagina({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <h1 className="titular text-[clamp(2rem,5vw,3.25rem)]">{titulo}</h1>
      <p className="entradilla mt-4">{descripcion}</p>
      {children}
    </div>
  );
}

export function ListaClara({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-none space-y-2 p-0">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full",
              estiloFamilia(familiaPorIndice(i)).punto,
            )}
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}