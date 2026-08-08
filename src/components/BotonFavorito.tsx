import { Bookmark, BookmarkCheck } from "lucide-react";
import { Boton } from "./ui/Boton";
import { useFavoritos, type TipoGuardado } from "@/lib/local-storage";

export function BotonFavorito({
  tipo,
  id,
  nombre,
  tamano = "sm",
}: {
  tipo: TipoGuardado;
  id: string;
  nombre: string;
  tamano?: "sm" | "md";
}) {
  const { ids, alternar } = useFavoritos(tipo);
  const guardado = ids.includes(id);

  return (
    <Boton
      variante={guardado ? "regulacion" : "contorno"}
      tamano={tamano}
      onClick={() => alternar(id)}
      aria-pressed={guardado}
      aria-label={guardado ? `Quitar de guardados: ${nombre}` : `Guardar: ${nombre}`}
    >
      {guardado ? (
        <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Bookmark className="h-4 w-4" aria-hidden="true" />
      )}
      {guardado ? "Guardado" : "Guardar"}
    </Boton>
  );
}