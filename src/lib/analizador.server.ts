import {
  esquemaAnalisis,
  type Analisis,
  type EntradaAnalisis,
} from "./analizador-tipos";

/**
 * Abstracción del proveedor de IA. Cambiar de modelo o proveedor
 * solo requiere reemplazar esta función.
 */
export interface ProveedorAnalisis {
  analizar(entrada: EntradaAnalisis): Promise<Analisis>;
}

const MODELO = "google/gemini-2.5-flash";
const ENDPOINT = "https://ai.gateway.lovable.dev/v1/chat/completions";

function instrucciones(entrada: EntradaAnalisis): string {
  const idioma =
    entrada.idioma === "en"
      ? "Write every string in clear, plain English."
      : "Escribe todos los textos en español claro y literal.";

  const candidatas =
    entrada.candidatas.length > 0
      ? `\nSituaciones ya publicadas en NeuroGuía que podrían estar relacionadas (usa sus id EXACTOS en relatedSituationIds, máximo 3, solo si son realmente pertinentes):\n${entrada.candidatas
          .map((c) => `- ${c.id}: ${c.titulo}`)
          .join("\n")}`
      : "\nNo hay situaciones candidatas: devuelve relatedSituationIds vacío.";

  return `Eres una herramienta educativa de NeuroGuía, un sitio para personas autistas, con TDAH, ansiedad social y otras neurodivergencias.

Tu tarea: ayudar a comprender una situación social ambigua SIN afirmar conocer las intenciones, pensamientos o emociones de terceras personas.

Principios obligatorios:
- Separa hechos explícitos del mensaje de las interpretaciones.
- Reconoce la ambigüedad; ofrece varias posibilidades, nunca una certeza.
- No enseñes masking ni asumas que existe una única conducta social correcta.
- Nunca diagnostiques a la persona ni a terceros (autismo, TDAH, trastornos, enfermedades mentales).
- No afirmes "le gustas", "no le gustas", "está mintiendo", "te está manipulando" como hechos.
- No te presentes como psicólogo ni terapeuta; no sustituyes atención profesional.
- No sugieras confrontaciones peligrosas.
- Usa lenguaje como "una posibilidad es...", "esto podría significar...", "no podemos determinarlo solo con esta información".
- Respeta la autonomía: ninguna opción se marca como la correcta.
- Si detectas violencia, coerción, amenazas, abuso, explotación sexual o peligro físico: safetyConcern = true y safetyMessage prioriza alejarse del peligro y buscar ayuda de una persona de confianza o de servicios locales de emergencia. Si no, safetyConcern = false y safetyMessage = null.

${idioma}
${candidatas}

Responde ÚNICAMENTE con un objeto JSON válido, sin texto adicional ni bloques de código, con esta forma:
{"summary":string,"knownFacts":string[],"unknowns":string[],"possibleInterpretations":[{"title":string,"explanation":string}],"signalsToObserve":string[],"options":[{"action":string,"benefit":string,"tradeoff":string}],"suggestedScript":string,"relatedSituationIds":string[],"safetyConcern":boolean,"safetyMessage":string|null}

Entre 2 y 5 interpretaciones. Entre 2 y 5 opciones. suggestedScript es una sola frase breve que la persona pueda copiar y adaptar.`;
}

function extraerJson(contenido: string): unknown {
  const limpio = contenido
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  try {
    return JSON.parse(limpio);
  } catch {
    const inicio = limpio.indexOf("{");
    const fin = limpio.lastIndexOf("}");
    if (inicio === -1 || fin <= inicio) throw new Error("RESPUESTA_NO_JSON");
    return JSON.parse(limpio.slice(inicio, fin + 1));
  }
}

export const proveedorLovableAI: ProveedorAnalisis = {
  async analizar(entrada) {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("SIN_CLAVE_IA");

    const respuesta = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODELO,
        temperature: 0.4,
        messages: [
          { role: "system", content: instrucciones(entrada) },
          { role: "user", content: entrada.texto },
        ],
      }),
    });

    if (respuesta.status === 429) throw new Error("LIMITE_ALCANZADO");
    if (respuesta.status === 402) throw new Error("SIN_CREDITOS");
    if (!respuesta.ok) throw new Error("ERROR_PROVEEDOR");

    const datos = (await respuesta.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const contenido = datos.choices?.[0]?.message?.content;
    if (!contenido) throw new Error("RESPUESTA_VACIA");

    return esquemaAnalisis.parse(extraerJson(contenido));
  },
};
