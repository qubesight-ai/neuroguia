import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Buscador } from "@/components/Buscador";
import { TarjetaSituacion } from "@/components/TarjetaSituacion";
import { EstadoVacio } from "@/components/EstadoVacio";
import { categorias } from "@/data/categorias";
import { situaciones } from "@/data/situaciones";
import { t } from "@/i18n";

interface Filtros {
  q: string;
  categoria: string;
  ambiguedad: string;
  contexto: string;
}

export const Route = createFileRoute("/situaciones/")({
  validateSearch: (search: Record<string, unknown>): Filtros => {
    const texto = (clave: string, porDefecto: string) =>
      typeof search[clave] === "string" ? (search[clave] as string) : porDefecto;
    return {
      q: texto("q", ""),
      categoria: texto("categoria", "todas"),
      ambiguedad: texto("ambiguedad", "todas"),
      contexto: texto("contexto", "todos"),
    };
  },
  head: () => ({
    meta: [
      { title: "Biblioteca de situaciones sociales — NeuroGuía" },
      {
        name: "description",
        content:
          "Busca y filtra situaciones sociales explicadas de forma literal: qué está pasando, por qué puede ser confuso y qué opciones tienes para responder.",
      },
      { property: "og:title", content: "Biblioteca de situaciones sociales — NeuroGuía" },
      {
        property: "og:description",
        content:
          "Situaciones sociales con interpretaciones posibles, señales observables, preguntas directas y límites.",
      },
    ],
  }),
  component: Situaciones,
});

const contextos = Array.from(new Set(situaciones.map((s) => s.contexto))).sort();

function Situaciones() {
  const filtros = Route.useSearch();
  const navigate = Route.useNavigate();

  const actualizar = (parcial: Partial<Filtros>) => {
    navigate({ search: (prev: Filtros) => ({ ...prev, ...parcial }) });
  };

  const lista = useMemo(() => {
    const q = filtros.q.trim().toLowerCase();
    return situaciones.filter((s) => {
      const coincideTexto =
        !q ||
        [s.titulo, s.resumen, s.contexto, ...s.palabrasClave]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const coincideCategoria = filtros.categoria === "todas" || s.categoria === filtros.categoria;
      const coincideAmbiguedad =
        filtros.ambiguedad === "todas" || s.ambiguedad === filtros.ambiguedad;
      const coincideContexto = filtros.contexto === "todos" || s.contexto === filtros.contexto;
      return coincideTexto && coincideCategoria && coincideAmbiguedad && coincideContexto;
    });
  }, [filtros]);

  const hayFiltros =
    filtros.q !== "" ||
    filtros.categoria !== "todas" ||
    filtros.ambiguedad !== "todas" ||
    filtros.contexto !== "todos";

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Situaciones" }]} />
      <EncabezadoPagina
        titulo="Biblioteca de situaciones sociales"
        descripcion="Cada situación se explica de forma literal, con varias interpretaciones posibles y opciones para responder. Ninguna interpretación se presenta como certeza."
      />

      <div className="card-soft mt-8 p-6" data-card>
        <Buscador
          valor={filtros.q}
          onCambio={(v) => actualizar({ q: v })}
          etiqueta={t.busqueda.etiqueta}
          marcador={t.busqueda.marcador}
          resultados={lista.length}
        />

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="f-categoria" className="block font-semibold">
              Categoría
            </label>
            <select
              id="f-categoria"
              value={filtros.categoria}
              onChange={(e) => actualizar({ categoria: e.target.value })}
              className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
            >
              <option value="todas">Todas las categorías</option>
              {categorias.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="f-ambiguedad" className="block font-semibold">
              Nivel de ambigüedad
            </label>
            <select
              id="f-ambiguedad"
              value={filtros.ambiguedad}
              onChange={(e) => actualizar({ ambiguedad: e.target.value })}
              className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
            >
              <option value="todas">Cualquier nivel</option>
              <option value="bajo">Bajo</option>
              <option value="medio">Medio</option>
              <option value="alto">Alto</option>
            </select>
          </div>

          <div>
            <label htmlFor="f-contexto" className="block font-semibold">
              Contexto
            </label>
            <select
              id="f-contexto"
              value={filtros.contexto}
              onChange={(e) => actualizar({ contexto: e.target.value })}
              className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
            >
              <option value="todos">Cualquier contexto</option>
              {contextos.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {hayFiltros && (
          <Link
            to="/situaciones"
            search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }}
            className="mt-4 inline-block font-semibold text-primary underline"
          >
            Quitar todos los filtros
          </Link>
        )}
      </div>

      {lista.length > 0 ? (
        <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((s) => (
            <li key={s.id}>
              <TarjetaSituacion situacion={s} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8">
          <EstadoVacio titulo="Sin coincidencias exactas" descripcion={t.busqueda.sinResultados}>
            <Link
              to="/situaciones"
              search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }}
              className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground no-underline"
            >
              Ver todas las situaciones
            </Link>
            <Link
              to="/contacto"
              className="inline-flex min-h-11 items-center rounded-xl border border-input px-4 py-2 font-semibold text-foreground no-underline"
            >
              Enviar una sugerencia
            </Link>
          </EstadoVacio>
        </div>
      )}
    </Contenedor>
  );
}