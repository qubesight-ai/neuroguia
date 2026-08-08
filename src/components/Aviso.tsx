import type { ReactNode } from "react";
import { AlertTriangle, Info, LifeBuoy, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Tipo = "info" | "aviso" | "riesgo" | "apoyo";

const config: Record<Tipo, { icono: typeof Info; clase: string; prefijo: string }> = {
  info: {
    icono: Info,
    clase: "bg-nd-azul-soft border-nd-azul/50 text-foreground",
    prefijo: "Información",
  },
  aviso: {
    icono: AlertTriangle,
    clase: "bg-nd-amarillo-soft border-nd-naranja/60 text-foreground",
    prefijo: "Advertencia",
  },
  riesgo: {
    icono: ShieldAlert,
    clase: "bg-nd-coral-soft border-nd-coral text-foreground",
    prefijo: "Seguridad",
  },
  apoyo: {
    icono: LifeBuoy,
    clase: "bg-nd-turquesa-soft border-nd-turquesa/60 text-foreground",
    prefijo: "Apoyo",
  },
};

export function Aviso({
  tipo = "info",
  titulo,
  children,
  className,
}: {
  tipo?: Tipo;
  titulo: string;
  children: ReactNode;
  className?: string;
}) {
  const { icono: Icono, clase, prefijo } = config[tipo];
  return (
    <aside
      className={cn("rounded-3xl border-2 p-5 shadow-soft", clase, className)}
      aria-label={`${prefijo}: ${titulo}`}
    >
      <div className="flex items-start gap-3">
        <Icono className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
        <div className="min-w-0">
          <p className="m-0 font-bold">
            <span className="sr-only">{prefijo}: </span>
            {titulo}
          </p>
          <div className="mt-1 text-[0.95rem]">{children}</div>
        </div>
      </div>
    </aside>
  );
}