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
        className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted"
      >
        <div className="h-full rounded-full bg-secondary" style={{ width: `${porcentaje}%` }} />
      </div>
    </div>
  );
}