import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { BarraProgreso } from "@/components/BarraProgreso";
import { Boton } from "@/components/ui/Boton";
import { Insignia } from "@/components/ui/Insignia";
import { Aviso } from "@/components/Aviso";
import { BotonFavorito } from "@/components/BotonFavorito";
import { ejercicios, etiquetasValoracion, type Valoracion } from "@/data/simulador";
import { useFavoritos } from "@/lib/local-storage";

export const Route = createFileRoute("/simulador")({
  head: () => ({
    meta: [
      { title: "Simulador de situaciones sociales — NeuroGuía" },
      {
        name: "description",
        content:
          "Practica escenarios sociales con varias respuestas válidas. Sin respuestas correctas ni incorrectas: cada opción muestra qué comunica, sus ventajas y sus riesgos.",
      },
      { property: "og:title", content: "Simulador de situaciones sociales — NeuroGuía" },
      {
        property: "og:description",
        content: "Ejercicios interactivos con explicaciones de cada opción.",
      },
    ],
  }),
  component: Simulador,
});

const tonoValoracion: Record<Valoracion, "menta" | "aviso" | "lavanda" | "riesgo" | "primario"> = {
  "clara-respetuosa": "menta",
  "puede-funcionar": "primario",
  "depende-contexto": "lavanda",
  "podria-confundir": "aviso",
  "riesgo-limites": "riesgo",
};

function Simulador() {
  const [indice, setIndice] = useState(0);
  const [elegida, setElegida] = useState<string | null>(null);
  const { agregar } = useFavoritos("simulador");

  const ejercicio = ejercicios[indice]!;
  const opcion = ejercicio.opciones.find((o) => o.id === elegida);

  const siguiente = () => {
    agregar(ejercicio.id);
    setElegida(null);
    setIndice((i) => Math.min(i + 1, ejercicios.length - 1));
  };

  const reiniciar = () => {
    setIndice(0);
    setElegida(null);
  };

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Simulador" }]} />
      <EncabezadoPagina
        titulo="Simulador de situaciones"
        descripcion="Escenarios breves con varias respuestas posibles. No hay respuestas correctas ni incorrectas: hay efectos distintos."
      />

      <div className="card-soft mt-8 p-6" data-card>
        <BarraProgreso
          actual={indice + 1}
          total={ejercicios.length}
          etiqueta="Escenario"
        />

        <article className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Insignia tono="primario">{ejercicio.contexto}</Insignia>
            <BotonFavorito tipo="simulador" id={ejercicio.id} nombre={ejercicio.titulo} />
          </div>
          <h2 className="mt-3 text-2xl font-bold">{ejercicio.titulo}</h2>
          <p className="mt-3 rounded-2xl border border-border bg-muted p-5 text-lg">
            {ejercicio.escenario}
          </p>

          <fieldset className="mt-6">
            <legend className="text-lg font-semibold">{ejercicio.pregunta}</legend>
            <ul className="mt-3 list-none space-y-2 p-0">
              {ejercicio.opciones.map((o) => (
                <li key={o.id}>
                  <Boton
                    variante={elegida === o.id ? "primario" : "contorno"}
                    aria-pressed={elegida === o.id}
                    className="w-full justify-start text-left"
                    onClick={() => setElegida(o.id)}
                  >
                    {o.texto}
                  </Boton>
                </li>
              ))}
            </ul>
          </fieldset>

          <div aria-live="polite">
            {opcion && (
              <div className="mt-6 rounded-2xl border-2 border-primary/40 bg-primary-soft p-5">
                <Insignia tono={tonoValoracion[opcion.valoracion]}>
                  {etiquetasValoracion[opcion.valoracion]}
                </Insignia>
                <h3 className="mt-3 text-lg font-bold">Qué comunica esa respuesta</h3>
                <p className="mt-1">{opcion.queComunica}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="font-bold">Ventajas</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {opcion.ventajas.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Posibles riesgos</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {opcion.riesgos.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Alternativas</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {opcion.alternativas.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-4 border-t border-primary/30 pt-4">
                  <span className="font-bold">Por qué puede haber varias respuestas válidas: </span>
                  {ejercicio.porQueVariasValidas}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Boton
              variante="contorno"
              onClick={() => {
                setElegida(null);
                setIndice((i) => Math.max(0, i - 1));
              }}
              disabled={indice === 0}
            >
              Escenario anterior
            </Boton>
            <Boton onClick={siguiente} disabled={indice === ejercicios.length - 1}>
              Siguiente escenario
            </Boton>
            <Boton variante="sutil" onClick={reiniciar}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reiniciar
            </Boton>
          </div>
        </article>
      </div>

      <div className="mt-8">
        <Aviso tipo="info" titulo="Sin calificaciones">
          Aquí no se usan las etiquetas «correcto», «incorrecto» ni «persona normal». Se describe
          qué comunica cada opción y qué podría ocurrir, para que decidas tú.
        </Aviso>
      </div>
    </Contenedor>
  );
}