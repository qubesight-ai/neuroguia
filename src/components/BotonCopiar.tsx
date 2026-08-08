import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Boton } from "./ui/Boton";

export function BotonCopiar({ texto, etiqueta = "Copiar" }: { texto: string; etiqueta?: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      /* el portapapeles puede no estar disponible */
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  }

  return (
    <Boton variante="contorno" tamano="sm" onClick={copiar} aria-live="polite">
      {copiado ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {copiado ? "Copiado" : etiqueta}
    </Boton>
  );
}