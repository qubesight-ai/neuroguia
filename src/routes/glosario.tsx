import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Buscador } from "@/components/Buscador";
import { EstadoVacio } from "@/components/EstadoVacio";
import { glosario } from "@/data/glosario";

export const Route = createFileRoute("/glosario")({
  head: () => ({
    meta: [
      { title: "Glosario de términos sociales — NeuroGuía" },
      {
        name: "description",
        content:
          "Definiciones claras con ejemplos: sarcasmo, reciprocidad, consentimiento, enmascaramiento, meltdown, shutdown, gaslighting y más.",
      },
      { property: "og:title", content: "Glosario de términos sociales — NeuroGuía" },
      {
        property: "og:description",
        content: "Términos explicados en lenguaje literal, cada uno con un ejemplo concreto.",
      },
    ],
  }),
  component: Glosario,
});

function Glosario() {
  const [q, setQ] = useState("");
  const lista = useMemo(() => {
    const busqueda = q.trim().toLowerCase();
    return glosario.filter(
      (g) =>
        !busqueda ||
        `${g.termino} ${g.definicion} ${g.ejemplo}`.toLowerCase().includes(busqueda),
    );
  }, [q]);

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Glosario" }]} />
      <EncabezadoPagina
        titulo="Glosario"
        descripcion="Términos que aparecen con frecuencia al hablar de comunicación, límites y neurodivergencia. Cada definición incluye un ejemplo."
      />

      <div className="card-soft mt-8 p-6" data-card>
        <Buscador
          valor={q}
          onCambio={setQ}
          etiqueta="Busca un término"
          marcador="Por ejemplo: enmascaramiento"
          resultados={lista.length}
        />
      </div>

      {lista.length > 0 ? (
        <dl className="mt-8 grid gap-4 md:grid-cols-2">
          {lista.map((g) => (
            <div key={g.termino} className="card-soft p-5" data-card>
              <dt className="text-lg font-bold">{g.termino}</dt>
              <dd className="mt-2">
                {g.definicion}
                <span className="mt-3 block rounded-xl border border-border bg-muted p-3 text-[0.95rem]">
                  <span className="font-semibold">Ejemplo: </span>
                  {g.ejemplo}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="mt-8">
          <EstadoVacio
            titulo="Ningún término coincide"
            descripcion="Prueba con otra palabra o revisa la lista completa borrando la búsqueda."
          />
        </div>
      )}
    </Contenedor>
  );
}