import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{titulo}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{descripcion}</p>
      {children}
    </div>
  );
}

export function ListaClara({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-none space-y-2 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-secondary"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}