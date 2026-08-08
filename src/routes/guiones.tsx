import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Buscador } from "@/components/Buscador";
import { BotonCopiar } from "@/components/BotonCopiar";
import { BotonFavorito } from "@/components/BotonFavorito";
import { EstadoVacio } from "@/components/EstadoVacio";
import { Boton } from "@/components/ui/Boton";
import { Insignia } from "@/components/ui/Insignia";
import { Aviso } from "@/components/Aviso";
import { guionCategorias, guiones } from "@/data/guiones";

export const Route = createFileRoute("/guiones")({
  head: () => ({
    meta: [
      { title: "Guiones sociales para copiar y adaptar — NeuroGuía" },
      {
        name: "description",
        content:
          "Frases listas para pedir aclaraciones, decir no, poner límites, explicar una necesidad sensorial o pedir ayuda. Puedes copiarlas y personalizarlas.",
      },
      { property: "og:title", content: "Guiones sociales para copiar y adaptar — NeuroGuía" },
      {
        property: "og:description",
        content: "Más de 30 frases claras y respetuosas para situaciones difíciles.",
      },
    ],
  }),
  component: Guiones,
});

function Guiones() {
  const [q, setQ] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [editando, setEditando] = useState<string | null>(null);
  const [textos, setTextos] = useState<Record<string, string>>({});

  const lista = useMemo(() => {
    const busqueda = q.trim().toLowerCase();
    return guiones.filter(
      (g) =>
        (categoria === "todas" || g.categoria === categoria) &&
        (!busqueda ||
          `${g.texto} ${g.cuandoUsarlo}`.toLowerCase().includes(busqueda)),
    );
  }, [q, categoria]);

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Guiones" }]} />
      <EncabezadoPagina
        titulo="Guiones sociales"
        descripcion="Frases que puedes copiar tal cual o personalizar con tus palabras. Son opciones, no fórmulas obligatorias."
      />

      <div className="card-soft mt-8 p-6" data-card>
        <Buscador
          valor={q}
          onCambio={setQ}
          etiqueta="Busca un guion por palabra clave"
          marcador="Por ejemplo: decir no, ruido, aclarar"
          resultados={lista.length}
        />
        <fieldset className="mt-5">
          <legend className="font-semibold">Filtrar por categoría</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Boton
              variante={categoria === "todas" ? "primario" : "contorno"}
              tamano="sm"
              aria-pressed={categoria === "todas"}
              onClick={() => setCategoria("todas")}
            >
              Todas
            </Boton>
            {guionCategorias.map((c) => (
              <Boton
                key={c.id}
                variante={categoria === c.id ? "primario" : "contorno"}
                tamano="sm"
                aria-pressed={categoria === c.id}
                onClick={() => setCategoria(c.id)}
              >
                {c.nombre}
              </Boton>
            ))}
          </div>
        </fieldset>
      </div>

      {lista.length > 0 ? (
        <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-2">
          {lista.map((g) => {
            const nombreCategoria =
              guionCategorias.find((c) => c.id === g.categoria)?.nombre ?? "";
            const texto = textos[g.id] ?? g.texto;
            return (
              <li key={g.id} className="card-soft flex flex-col p-5" data-card>
                <Insignia tono="menta">{nombreCategoria}</Insignia>
                {editando === g.id ? (
                  <>
                    <label htmlFor={`edit-${g.id}`} className="mt-3 font-semibold">
                      Personaliza el guion
                    </label>
                    <textarea
                      id={`edit-${g.id}`}
                      value={texto}
                      rows={4}
                      onChange={(e) => setTextos((t) => ({ ...t, [g.id]: e.target.value }))}
                      className="mt-2 w-full rounded-xl border-2 border-input bg-card p-3"
                    />
                  </>
                ) : (
                  <blockquote className="mt-3 border-l-4 border-primary pl-4 text-lg">
                    «{texto}»
                  </blockquote>
                )}
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  <span className="font-semibold">Cuándo usarlo: </span>
                  {g.cuandoUsarlo}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <BotonCopiar texto={texto} />
                  <BotonFavorito tipo="guion" id={g.id} nombre={g.texto} />
                  <Boton
                    variante="sutil"
                    tamano="sm"
                    onClick={() => setEditando(editando === g.id ? null : g.id)}
                  >
                    {editando === g.id ? "Listo" : "Personalizar"}
                  </Boton>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-8">
          <EstadoVacio
            titulo="Ningún guion coincide"
            descripcion="Prueba con otras palabras o quita el filtro de categoría."
          >
            <Boton
              variante="contorno"
              onClick={() => {
                setQ("");
                setCategoria("todas");
              }}
            >
              Quitar filtros
            </Boton>
          </EstadoVacio>
        </div>
      )}

      <div className="mt-8">
        <Aviso tipo="info" titulo="Puedes cambiar las palabras">
          Adapta cualquier guion a tu forma de hablar. No necesitas sonar de una manera concreta
          para que tu mensaje sea válido.
        </Aviso>
      </div>
    </Contenedor>
  );
}