import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpen, MessageSquareQuote, PlayCircle, ArrowRight } from "lucide-react";
import ilustracion from "@/assets/ilustracion-rutas.jpg";
import { Contenedor } from "@/components/Seccion";
import { Buscador } from "@/components/Buscador";
import { TarjetaCategoria } from "@/components/TarjetaCategoria";
import { TarjetaSituacion } from "@/components/TarjetaSituacion";
import { EstadoVacio } from "@/components/EstadoVacio";
import { Aviso } from "@/components/Aviso";
import { Boton } from "@/components/ui/Boton";
import { categorias } from "@/data/categorias";
import { situaciones } from "@/data/situaciones";
import { guiones } from "@/data/guiones";
import { ejercicios } from "@/data/simulador";
import { t } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroGuía — Comprender las normas sociales sin dejar de ser tú" },
      {
        name: "description",
        content:
          "Explicaciones claras, ejemplos reales y herramientas prácticas para navegar situaciones sociales con mayor seguridad. Para personas autistas, con TDAH, ansiedad social y otras neurodivergencias.",
      },
      {
        property: "og:title",
        content: "NeuroGuía — Comprender las normas sociales sin dejar de ser tú",
      },
      {
        property: "og:description",
        content:
          "Situaciones sociales explicadas de forma literal, guiones para copiar y ejercicios prácticos. Sin enseñar a ocultar quién eres.",
      },
    ],
  }),
  component: Inicio,
});

const accesos = [
  {
    to: "/situaciones",
    titulo: "Quiero entender una situación",
    texto: "Explicaciones literales, interpretaciones posibles y opciones para responder.",
    icono: BookOpen,
  },
  {
    to: "/guiones",
    titulo: "Necesito una frase para responder",
    texto: "Guiones listos para copiar y adaptar a tu forma de hablar.",
    icono: MessageSquareQuote,
  },
  {
    to: "/simulador",
    titulo: "Quiero practicar",
    texto: "Escenarios con varias respuestas válidas y sus posibles efectos.",
    icono: PlayCircle,
  },
] as const;

function Inicio() {
  const [consulta, setConsulta] = useState("");

  const resultados = useMemo(() => {
    const q = consulta.trim().toLowerCase();
    if (!q) return [];
    return situaciones.filter((s) =>
      [s.titulo, s.resumen, s.contexto, ...s.palabrasClave].join(" ").toLowerCase().includes(q),
    );
  }, [consulta]);

  const totalPorCategoria = (id: string) =>
    situaciones.filter((s) => s.categoria === id).length;

  return (
    <>
      <section className="border-b border-border bg-card">
        <Contenedor className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              Guía social para personas neurodivergentes
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.lema}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{t.lemaSecundario}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/situaciones"
                className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground no-underline hover:bg-primary/90"
              >
                {t.acciones.explorar}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/como-funciona"
                className="inline-flex min-h-14 items-center rounded-xl border border-input bg-card px-6 py-3 text-lg font-semibold text-foreground no-underline hover:bg-muted"
              >
                {t.acciones.comoFunciona}
              </Link>
            </div>
          </div>

          <img
            src={ilustracion}
            width={1280}
            height={960}
            data-decorative="true"
            alt="Ilustración abstracta con líneas suaves que se ramifican en varias direcciones y conectan círculos de distintos colores, como distintas rutas posibles para interpretar una misma situación."
            className="w-full rounded-3xl border border-border"
          />
        </Contenedor>
      </section>

      <section aria-labelledby="buscar-titulo" className="py-12">
        <Contenedor>
          <h2 id="buscar-titulo" className="sr-only">
            Buscar una situación
          </h2>
          <div className="card-soft mx-auto max-w-3xl p-6" data-card>
            <Buscador
              valor={consulta}
              onCambio={setConsulta}
              etiqueta={t.busqueda.etiqueta}
              marcador={t.busqueda.marcador}
              resultados={consulta ? resultados.length : undefined}
            />
            {consulta && resultados.length > 0 && (
              <ul className="mt-4 list-none space-y-2 p-0">
                {resultados.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link
                      to="/situaciones/$id"
                      params={{ id: s.id }}
                      className="block rounded-xl border border-border p-4 no-underline hover:bg-muted"
                    >
                      <span className="block font-bold text-foreground">{s.titulo}</span>
                      <span className="block text-sm text-muted-foreground">{s.resumen}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {consulta && resultados.length === 0 && (
              <div className="mt-4">
                <EstadoVacio titulo="Sin coincidencias exactas" descripcion={t.busqueda.sinResultados}>
                  <Link
                    to="/situaciones"
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
          </div>

          <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3">
            {accesos.map((a) => {
              const Icono = a.icono;
              return (
                <li key={a.to}>
                  <Link
                    to={a.to}
                    className="card-soft flex h-full flex-col p-5 no-underline hover:bg-muted"
                    data-card
                  >
                    <Icono className="h-7 w-7 text-primary" aria-hidden="true" />
                    <span className="mt-3 text-lg font-bold text-foreground">{a.titulo}</span>
                    <span className="mt-1 text-muted-foreground">{a.texto}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="categorias-titulo" className="pb-12">
        <Contenedor>
          <h2 id="categorias-titulo" className="text-2xl font-extrabold sm:text-3xl">
            Categorías principales
          </h2>
          <p className="mt-2 text-muted-foreground">
            Elige el tipo de situación que quieres comprender. Puedes leer solo lo que necesitas.
          </p>
          <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <li key={c.id}>
                <TarjetaCategoria categoria={c} total={totalPorCategoria(c.id)} />
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="identidad-titulo" className="border-y border-border bg-card py-12">
        <Contenedor className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="identidad-titulo" className="text-2xl font-extrabold sm:text-3xl">
              No tienes que cambiar quién eres
            </h2>
            <p className="mt-3 text-muted-foreground">
              NeuroGuía no enseña a parecer neurotípico ni a ocultar rasgos autistas. Explica
              información social que muchas veces se transmite de forma implícita, para que puedas
              decidir con más datos.
            </p>
            <p className="mt-3 text-muted-foreground">
              Las normas sociales cambian según la cultura, el contexto y las personas. Aquí
              encontrarás herramientas, no reglas absolutas: puedes seguir una norma, adaptarla o
              decidir no seguirla.
            </p>
          </div>
          <Aviso tipo="apoyo" titulo="Lo que sí encontrarás aquí">
            <ul className="m-0 list-disc space-y-1 pl-5">
              <li>Varias interpretaciones posibles, sin presentarlas como certezas.</li>
              <li>Opciones de respuesta y lo que podría ocurrir con cada una.</li>
              <li>Lo que no estás obligado a hacer.</li>
              <li>Cuándo poner un límite y cuándo pedir ayuda.</li>
            </ul>
          </Aviso>
        </Contenedor>
      </section>

      <section aria-labelledby="previa-titulo" className="py-12">
        <Contenedor>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <h2 id="previa-titulo" className="text-2xl font-extrabold sm:text-3xl">
              Situaciones para empezar
            </h2>
            <Link to="/situaciones" className="shrink-0 font-semibold text-primary underline">
              Ver todas
            </Link>
          </div>
          <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
            {situaciones.slice(0, 6).map((s) => (
              <li key={s.id}>
                <TarjetaSituacion situacion={s} />
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="recursos-titulo" className="pb-16">
        <Contenedor>
          <h2 id="recursos-titulo" className="text-2xl font-extrabold sm:text-3xl">
            Recursos destacados
          </h2>
          <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-4">
            <li className="card-soft p-5" data-card>
              <h3 className="text-lg font-bold">{guiones.length} guiones sociales</h3>
              <p className="mt-1 text-muted-foreground">
                Frases para pedir claridad, decir no, poner límites o pedir ayuda.
              </p>
              <Link to="/guiones" className="mt-3 inline-block font-semibold text-primary underline">
                Ver guiones
              </Link>
            </li>
            <li className="card-soft p-5" data-card>
              <h3 className="text-lg font-bold">{ejercicios.length} ejercicios interactivos</h3>
              <p className="mt-1 text-muted-foreground">
                Practica sin calificaciones de «correcto» o «incorrecto».
              </p>
              <Link to="/simulador" className="mt-3 inline-block font-semibold text-primary underline">
                Abrir simulador
              </Link>
            </li>
            <li className="card-soft p-5" data-card>
              <h3 className="text-lg font-bold">Límites y seguridad</h3>
              <p className="mt-1 text-muted-foreground">
                Reconocer presión, manipulación y relaciones poco saludables.
              </p>
              <Link
                to="/limites-y-seguridad"
                className="mt-3 inline-block font-semibold text-primary underline"
              >
                Leer la guía
              </Link>
            </li>
            <li className="card-soft p-5" data-card>
              <h3 className="text-lg font-bold">Mi plan de regulación</h3>
              <p className="mt-1 text-muted-foreground">
                Un plan editable que se guarda solo en tu dispositivo.
              </p>
              <Link to="/regulacion" className="mt-3 inline-block font-semibold text-primary underline">
                Crear mi plan
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Aviso tipo="riesgo" titulo="Si estás en peligro inmediato">
              Comunícate con los servicios de emergencia de tu país o busca ayuda de una persona de
              confianza. Este sitio ofrece información educativa y no sustituye atención
              psicológica, médica ni legal.
            </Aviso>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/sobre-el-proyecto" className="no-underline">
              <Boton variante="contorno">Sobre el proyecto</Boton>
            </Link>
            <Link to="/contacto" className="no-underline">
              <Boton variante="sutil">Enviar una sugerencia</Boton>
            </Link>
          </div>
        </Contenedor>
      </section>
    </>
  );
}