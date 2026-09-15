import { z } from "zod";

/**
 * Esquema del análisis de una situación social.
 * Se valida tanto la salida del modelo como lo que llega al frontend.
 */
export const esquemaAnalisis = z.object({
  summary: z.string().min(1).max(600),
  knownFacts: z.array(z.string().min(1)).min(1).max(8),
  unknowns: z.array(z.string().min(1)).min(1).max(8),
  possibleInterpretations: z
    .array(
      z.object({
        title: z.string().min(1),
        explanation: z.string().min(1),
      }),
    )
    .min(2)
    .max(5),
  signalsToObserve: z.array(z.string().min(1)).min(1).max(8),
  options: z
    .array(
      z.object({
        action: z.string().min(1),
        benefit: z.string().min(1),
        tradeoff: z.string().min(1),
      }),
    )
    .min(2)
    .max(5),
  suggestedScript: z.string().min(1).max(600),
  relatedSituationIds: z.array(z.string()).max(3).default([]),
  safetyConcern: z.boolean().default(false),
  safetyMessage: z.string().nullable().default(null),
});

export type Analisis = z.infer<typeof esquemaAnalisis>;

export const esquemaEntradaAnalisis = z.object({
  texto: z.string().trim().min(20).max(1500),
  idioma: z.enum(["es", "en"]).default("es"),
  /** Situaciones candidatas de la biblioteca, calculadas en el cliente. */
  candidatas: z
    .array(z.object({ id: z.string(), titulo: z.string() }))
    .max(8)
    .default([]),
});

export type EntradaAnalisis = z.infer<typeof esquemaEntradaAnalisis>;

export const RECORDATORIO_ANALISIS =
  "No podemos saber con certeza lo que otra persona piensa o siente solo a partir de una conducta. Esta explicación presenta posibilidades, no certezas.";

export const RECORDATORIO_ANALISIS_EN =
  "We cannot know for certain what another person thinks or feels from a single behaviour. This explanation offers possibilities, not certainties.";
