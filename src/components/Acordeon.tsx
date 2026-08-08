import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Acordeon({
  titulo,
  children,
  abiertoPorDefecto = false,
  className,
}: {
  titulo: string;
  children: ReactNode;
  abiertoPorDefecto?: boolean;
  className?: string;
}) {
  const [abierto, setAbierto] = useState(abiertoPorDefecto);
  const id = useId();

  return (
    <div className={cn("card-soft overflow-hidden", className)} data-card>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls={`panel-${id}`}
          id={`boton-${id}`}
          onClick={() => setAbierto((v) => !v)}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold hover:bg-muted"
        >
          <span className="min-w-0">{titulo}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn("h-5 w-5 shrink-0 transition-transform", abierto && "rotate-180")}
          />
        </button>
      </h3>
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`boton-${id}`}
        hidden={!abierto}
        className="border-t border-border px-5 py-4"
      >
        {children}
      </div>
    </div>
  );
}