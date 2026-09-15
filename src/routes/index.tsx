import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpen, MessageSquareQuote, PlayCircle, ArrowRight, Sparkles } from "lucide-react";
import { estiloFamilia } from "@/lib/paleta";
import { cn } from "@/lib/utils";
import { IlustracionInfinito, ManchasFondo } from "@/components/HeroInfinito";
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
    color: "azul",
  },
  {
    to: "/guiones",
    titulo: "Necesito una frase para responder",
    texto: "Guiones listos para copiar y adaptar a tu forma de hablar.",
    icono: MessageSquareQuote,
    color: "turquesa",
  },
  {
    to: "/simulador",
    titulo: "Quiero practicar",
    texto: "Escenarios con varias respuestas válidas y sus posibles efectos.",
    icono: PlayCircle,
    color: "magenta",
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
      <section className="relative overflow-hidden border-b-[3px] border-foreground">
        <ManchasFondo />
        <Contenedor className="py-10 sm:py-14">
          <p className="antetitulo flex items-center gap-2 border-b border-border pb-3">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Portada · Guía social para personas neurodivergentes
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="lg:border-r lg:border-border lg:pr-10">
              <h1 className="titular text-[clamp(2.4rem,7vw,4.5rem)]">
                Comprender las <em className="font-normal italic">normas sociales</em> sin dejar de
                ser tú
              </h1>
              <p className="entradilla mt-6 max-w-2xl">{t.lemaSecundario}</p>

              <div className="filete mt-8 flex flex-wrap gap-3 pt-8">
              <Link
                to="/situaciones"
                search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }}
                className="no-underline"
              >
                <Boton tamano="lg">
                  {t.acciones.explorar}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Boton>
              </Link>
              <Link to="/como-funciona" className="no-underline">
                <Boton variante="contorno" tamano="lg">
                  {t.acciones.comoFunciona}
                </Boton>
              </Link>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Sin registro. Todo lo que guardes se queda en tu dispositivo.
              </p>
            </div>

            <aside className="flex flex-col gap-6">
              <IlustracionInfinito />
            </aside>
          </div>
        </Contenedor>
      </section>

      <section aria-labelledby="caminos-titulo" className="py-14 sm:py-18">
        <Contenedor>
          <p className="antetitulo border-b-2 border-foreground pb-2">Elige tu camino</p>
          <h2 id="caminos-titulo" className="mt-4 text-3xl sm:text-4xl">
            ¿Qué quieres explorar hoy?
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Dos recorridos pensados para formas distintas de estar en el mundo. Puedes usar ambos:
            ninguno excluye al otro.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Link
              to="/situaciones"
              search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }}
              className="group elevar-suave flex flex-col gap-5 rounded-none border-2 border-foreground p-7 no-underline sm:p-9"
              data-card
            >
              <span
                className="grid h-16 w-16 place-items-center rounded-full bg-[linear-gradient(135deg,oklch(0.62_0.17_250),oklch(0.7_0.14_200),oklch(0.72_0.13_150))] text-primary-foreground"
                aria-hidden="true"
              >
                <Infinity className="h-8 w-8" strokeWidth={2} />
              </span>
              <span className="titular text-3xl sm:text-4xl">Autismo</span>
              <span className="text-muted-foreground">
                Situaciones sociales explicadas paso a paso, guiones para responder y señales
                ambiguas traducidas a lenguaje claro.
              </span>
              <span className="mt-auto inline-flex items-center gap-2 border-t-2 border-foreground pt-4 text-[0.78rem] font-bold uppercase tracking-[0.14em]">
                Entrar al camino autista
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <Link
              to="/tdah-adhd"
              className="group elevar-suave flex flex-col gap-5 rounded-none border-2 border-foreground p-7 no-underline sm:p-9"
              data-card
            >
              <span
                className="grid h-16 w-16 place-items-center rounded-full bg-[linear-gradient(135deg,oklch(0.78_0.17_90),oklch(0.72_0.19_55),oklch(0.65_0.22_30))] text-primary-foreground"
                aria-hidden="true"
              >
                <Zap className="h-8 w-8" strokeWidth={2} />
              </span>
              <span className="titular text-3xl sm:text-4xl">TDAH / ADHD · ADD</span>
              <span className="text-muted-foreground">
                Atención, hiperfoco, impulsos, organización y emociones intensas: estrategias
                realistas para mentes que no van en línea recta.
              </span>
              <span className="mt-auto inline-flex items-center gap-2 border-t-2 border-foreground pt-4 text-[0.78rem] font-bold uppercase tracking-[0.14em]">
                Entrar al camino TDAH
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ¿Te identificas con ambos o no estás seguro?{" "}
            <Link to="/situaciones" search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }} className="font-semibold underline underline-offset-2">
              Explora todo junto
            </Link>
            .
          </p>
        </Contenedor>
      </section>

      <section aria-labelledby="buscar-titulo" className="py-16 sm:py-20">
        <Contenedor>
          <h2 id="buscar-titulo" className="sr-only">
            Buscar una situación
          </h2>
          <div className="card-soft mx-auto max-w-3xl p-6 sm:p-7" data-card>
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
          </div>

          <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {accesos.map((a) => {
              const Icono = a.icono;
              const c = estiloFamilia(a.color);
              return (
                <li key={a.to}>
                  <Link
                    to={a.to}
                    className={cn(
                      "elevar-suave flex h-full flex-col rounded-none border border-border p-5 no-underline hover:border-foreground/15",
                      c.fondo,
                    )}
                    data-card
                  >
                    <span
                      className={cn("grid h-10 w-10 place-items-center rounded-xl", c.circulo)}
                      aria-hidden="true"
                    >
                      <Icono className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="mt-4 font-semibold text-foreground">{a.titulo}</span>
                    <span className="mt-1 text-sm text-muted-foreground">{a.texto}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="categorias-titulo" className="pb-16 sm:pb-20">
        <Contenedor>
          <p className="antetitulo border-b-2 border-foreground pb-2">Secciones</p>
          <h2 id="categorias-titulo" className="mt-4 text-3xl sm:text-4xl">
            Categorías principales
          </h2>
          <p className="mt-2 text-muted-foreground">
            Elige el tipo de situación que quieres comprender. Puedes leer solo lo que necesitas.
          </p>
          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <li key={c.id}>
                <TarjetaCategoria categoria={c} total={totalPorCategoria(c.id)} />
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="identidad-titulo" className="border-y border-border bg-card py-16 sm:py-20">
        <Contenedor className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="antetitulo border-b-2 border-foreground pb-2">Editorial</p>
            <h2 id="identidad-titulo" className="mt-4 text-3xl sm:text-4xl">
              No tienes que cambiar quién eres
            </h2>
            <p className="capitular mt-4 text-muted-foreground">
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

      <section aria-labelledby="tdah-titulo" className="border-y border-border bg-card py-16 sm:py-20">
        <Contenedor className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="antetitulo border-b-2 border-foreground pb-2">TDAH / ADHD y ADD</p>
            <h2 id="tdah-titulo" className="mt-4 text-3xl sm:text-4xl">
              También para mentes que saltan, se enfocan con intensidad y sienten con fuerza
            </h2>
            <p className="capitular mt-4 text-muted-foreground">
              Situaciones, guiones y estrategias pensadas para personas con TDAH, ADHD o ADD:
              perder el hilo, interrumpir, entrar en hiperfoco, olvidar compromisos y regular
              emociones intensas.
            </p>
            <div className="mt-6">
              <Link to="/tdah-adhd" className="no-underline">
                <Boton>Explorar sección TDAH / ADHD</Boton>
              </Link>
            </div>
          </div>
          <Aviso tipo="apoyo" titulo="Lo que encontrarás">
            <ul className="m-0 list-disc space-y-1 pl-5">
              <li>Situaciones sociales explicadas de forma literal.</li>
              <li>Guiones para pedir aclaraciones, pausas o apoyos.</li>
              <li>Estrategias de regulación emocional y organización.</li>
              <li>Un ejercicio interactivo sobre cambios de plan.</li>
            </ul>
          </Aviso>
        </Contenedor>
      </section>

      <section aria-labelledby="previa-titulo" className="py-16 sm:py-20">
        <Contenedor>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div>
              <p className="antetitulo">Lo último</p>
              <h2 id="previa-titulo" className="mt-2 text-3xl sm:text-4xl">
                Situaciones para empezar
              </h2>
            </div>
            <Link
              to="/situaciones"
              search={{ q: "", categoria: "todas", ambiguedad: "todas", contexto: "todos" }}
              className="shrink-0 border-b-2 border-foreground pb-0.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-foreground no-underline"
            >
              Ver todas
            </Link>
          </div>
          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {situaciones.slice(0, 6).map((s) => (
              <li key={s.id}>
                <TarjetaSituacion situacion={s} />
              </li>
            ))}
          </ul>
        </Contenedor>
      </section>

      <section aria-labelledby="recursos-titulo" className="pb-20 sm:pb-24">
        <Contenedor>
          <p className="antetitulo border-b-2 border-foreground pb-2">Recursos</p>
          <h2 id="recursos-titulo" className="mt-4 text-3xl sm:text-4xl">
            Recursos destacados
          </h2>
          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            <li
              className="tarjeta-editorial elevar-suave p-5"
              data-card
            >
              <h3 className="font-semibold">{guiones.length} guiones sociales</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Frases para pedir claridad, decir no, poner límites o pedir ayuda.
              </p>
              <Link to="/guiones" className="mt-4 inline-block text-sm font-semibold text-foreground">
                Ver guiones
              </Link>
            </li>
            <li
              className="tarjeta-editorial elevar-suave p-5"
              data-card
            >
              <h3 className="font-semibold">{ejercicios.length} ejercicios interactivos</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Practica sin calificaciones de «correcto» o «incorrecto».
              </p>
              <Link to="/simulador" className="mt-4 inline-block text-sm font-semibold text-foreground">
                Abrir simulador
              </Link>
            </li>
            <li
              className="tarjeta-editorial elevar-suave p-5"
              data-card
            >
              <h3 className="font-semibold">Límites y seguridad</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Reconocer presión, manipulación y relaciones poco saludables.
              </p>
              <Link
                to="/limites-y-seguridad"
                className="mt-4 inline-block text-sm font-semibold text-foreground"
              >
                Leer la guía
              </Link>
            </li>
            <li
              className="tarjeta-editorial elevar-suave p-5"
              data-card
            >
              <h3 className="font-semibold">Mi plan de regulación</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Un plan editable que se guarda solo en tu dispositivo.
              </p>
              <Link to="/regulacion" className="mt-4 inline-block text-sm font-semibold text-foreground">
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