import { createServerFn } from "@tanstack/react-start";
import { esquemaEntradaAnalisis, type Analisis } from "./analizador-tipos";
import { proveedorLovableAI } from "./analizador.server";

/**
 * Analiza una situación social descrita en lenguaje natural.
 * No persiste el texto ni el resultado: solo procesa y devuelve.
 */
export const analizarSituacion = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => esquemaEntradaAnalisis.parse(data))
  .handler(async ({ data }): Promise<Analisis> => {
    return proveedorLovableAI.analizar(data);
  });
