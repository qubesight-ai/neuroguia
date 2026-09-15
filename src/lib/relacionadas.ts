import { situaciones, type Situacion } from "@/data/situaciones";

const VACIAS = new Set([
  "que","de","la","el","los","las","un","una","y","o","en","con","por","para","me","mi","se","le","lo","no","si","es","al","del","mas","muy","pero","como","cuando","porque","sobre","este","esta","eso","esa","ya","he","ha","su","sus","yo","tu","te","a","the","and","to","of","is","it","in","my","i","for","with","not","but","that","this","was","he","she","they",
]);

function tokens(texto: string): string[] {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9ñ]+/)
    .filter((p) => p.length > 2 && !VACIAS.has(p));
}

/**
 * Busca situaciones publicadas relacionadas con un texto libre.
 * Puntúa coincidencias en palabras clave, título y resumen.
 */
export function buscarRelacionadas(texto: string, limite = 3): Situacion[] {
  const palabras = tokens(texto);
  if (palabras.length === 0) return [];
  const unicas = Array.from(new Set(palabras));

  const puntuadas = situaciones.map((s) => {
    const claves = new Set(s.palabrasClave.flatMap((k) => tokens(k)));
    const titulo = new Set(tokens(s.titulo));
    const resumen = new Set(tokens(`${s.resumen} ${s.contexto}`));
    let puntos = 0;
    for (const p of unicas) {
      if (claves.has(p)) puntos += 3;
      if (titulo.has(p)) puntos += 2;
      if (resumen.has(p)) puntos += 1;
    }
    return { s, puntos };
  });

  return puntuadas
    .filter((x) => x.puntos >= 3)
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, limite)
    .map((x) => x.s);
}
