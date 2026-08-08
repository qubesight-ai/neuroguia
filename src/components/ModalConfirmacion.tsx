import { useEffect, useRef } from "react";
import { Boton } from "./ui/Boton";

export function ModalConfirmacion({
  titulo,
  descripcion,
  textoConfirmar,
  onConfirmar,
  onCancelar,
}: {
  titulo: string;
  descripcion: string;
  textoConfirmar: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}) {
  const cancelar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelar.current?.focus();
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancelar();
    };
    document.addEventListener("keydown", alTeclado);
    return () => document.removeEventListener("keydown", alTeclado);
  }, [onCancelar]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        aria-describedby="modal-desc"
        className="card-soft w-full max-w-md p-6 shadow-soft-lg"
        data-card
      >
        <h2 id="modal-titulo" className="text-xl font-bold">
          {titulo}
        </h2>
        <p id="modal-desc" className="mt-2 text-muted-foreground">
          {descripcion}
        </p>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Boton ref={cancelar} variante="contorno" onClick={onCancelar}>
            Cancelar
          </Boton>
          <Boton variante="peligro" onClick={onConfirmar}>
            {textoConfirmar}
          </Boton>
        </div>
      </div>
    </div>
  );
}