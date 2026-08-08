export function BarraProgreso({
  actual,
  total,
  etiqueta = "Progreso",
}: {
  actual: number;
  total: number;
  etiqueta?: string;
}) {
  const porcentaje = total > 0 ? Math.round((actual / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm font-semibold">
        <span>{etiqueta}</span>
        <span>
          {actual} de {total}
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={actual}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${etiqueta}: ${actual} de ${total}`}
        className="mt-2 h-3 w-full overflow-hidden rounded-full border border-border bg-muted"
      >
        <div
          className="superficie-degradado h-full rounded-full transition-[width] duration-300"
          style={{ width: `${porcentaje}%` }}
        />
      </div>
    </div>
  );
}
