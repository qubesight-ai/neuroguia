import { createFileRoute, Link } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Aviso } from "@/components/Aviso";
import { Boton } from "@/components/ui/Boton";
import { Acordeon } from "@/components/Acordeon";
import { guiones } from "@/data/guiones";
import { situaciones } from "@/data/situaciones";
import { ejercicios } from "@/data/simulador";

export const Route = createFileRoute("/tdah-adhd")({
  head: () => ({
    meta: [
      { title: "Guía de TDAH / ADHD y ADD — NeuroGuía" },
      {
        name: "description",
        content:
          "Situaciones, guiones, ejercicios y términos para personas con TDAH, ADHD o ADD. Sin patologizar, sin forzar a encajar.",
      },
      { property: "og:title", content: "Guía de TDAH / ADHD y ADD — NeuroGuía" },
      {
        property: "og:description",
        content:
          "Herramientas prácticas para entender situaciones sociales, regular emociones y comunicar necesidades propias del TDAH/ADD.",
      },
    ],
  }),
  component: TdahAdhd,
});

const tdahCategorias = [
  "tdah-atencion",
  "tdah-hiperfoco",
  "tdah-impulsos",
  "tdah-organizacion",
  "tdah-regulacion",
] as const;

function TdahAdhd() {
  const situacionesTDAH = situaciones.filter((s) => tdahCategorias.includes(s.categoria as typeof tdahCategorias[number]));
  const guionesTDAH = guiones.filter((g) => tdahCategorias.includes(g.categoria as typeof tdahCategorias[number]));

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "TDAH / ADHD y ADD" }]} />
      <EncabezadoPagina
        titulo="TDAH / ADHD y ADD"
        descripcion="Un espacio para entender situaciones sociales propias del TDAH, ADHD y ADD: atención, hiperfoco, impulsos, organización y regulación emocional."
      />

      <blockquote className="card-soft mt-8 border-l-4 border-primary p-6 text-lg" data-card>
        Tener TDAH, ADHD o ADD no significa que debas cambiar quién eres para encajar. Aquí encontrarás
        herramientas para nombrar lo que te pasa, comunicarlo y decidir qué hacer.
      </blockquote>

      <section className="card-soft mt-6 p-6" data-card>
        <h2 className="text-xl font-bold">¿Qué encontrarás aquí?</h2>
        <ListaClara
          items={[
            "Situaciones sociales explicadas de forma literal.",
            "Guiones para pedir aclaraciones, pausas o apoyos.",
            "Un ejercicio interactivo sobre cambios de plan.",
            "Términos del glosario relacionados con el TDAH/ADD.",
            "Estrategias de regulación emocional y organización.",
          ]}
        />
      </section>

      <section aria-labelledby="tdah-situaciones-titulo" className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="antetitulo border-b-2 border-foreground pb-2">Situaciones</p>
            <h2 id="tdah-situaciones-titulo" className="mt-4 text-3xl sm:text-4xl">
              Escenarios comunes
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
        <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2">
          {situacionesTDAH.map((s) => (
            <li key={s.id} className="tarjeta-editorial elevar-suave p-5" data-card>
              <h3 className="text-[1.15rem] font-bold leading-tight">
                <Link
                  to="/situaciones/$id"
                  params={{ id: s.id }}
                  className="text-foreground no-underline hover:underline"
                >
                  {s.titulo}
                </Link>
              </h3>
              <p className="mt-2 text-muted-foreground">{s.resumen}</p>
              <Link
                to="/situaciones/$id"
                params={{ id: s.id }}
                className="mt-4 inline-block border-b-2 border-foreground text-[0.72rem] font-bold uppercase tracking-[0.14em] text-foreground no-underline"
              >
                Ver explicación
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tdah-guiones-titulo" className="mt-10">
        <p className="antetitulo border-b-2 border-foreground pb-2">Guiones</p>
        <h2 id="tdah-guiones-titulo" className="mt-4 text-3xl sm:text-4xl">
          Frases para usar
        </h2>
        <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2">
          {guionesTDAH.map((g) => (
            <li key={g.id} className="tarjeta-editorial elevar-suave p-5" data-card>
              <blockquote className="border-l-4 border-primary pl-4 text-lg">«{g.texto}»</blockquote>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold">Cuándo usarlo: </span>
                {g.cuandoUsarlo}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/guiones" className="no-underline">
            <Boton variante="contorno">Ver todos los guiones</Boton>
          </Link>
        </div>
      </section>

      <section aria-labelledby="tdah-regulacion-titulo" className="mt-10">
        <p className="antetitulo border-b-2 border-foreground pb-2">Regulación</p>
        <h2 id="tdah-regulacion-titulo" className="mt-4 text-3xl sm:text-4xl">
          Estrategias prácticas
        </h2>
        <div className="mt-6 space-y-4">
          <Acordeon titulo="Antes de socializar" abiertoPorDefecto>
            <ListaClara
              items={[
                "Revisa hambre, cansancio, estrés y dolor: reducen tu margen de atención.",
                "Pregunta el plan concreto: lugar, hora, duración y número de personas.",
                "Prepara una frase para pedir pausa o aclaración.",
                "Lleva algo para anotar ideas si te surge la urgencia de interrumpir.",
              ]}
            />
          </Acordeon>
          <Acordeon titulo="Durante la interacción">
            <ListaClara
              items={[
                "Si te distraes, pide el hilo sin disculparte excesivamente.",
                "Si entras en hiperfoco, pausa y pregunta si la otra persona quiere seguir.",
                "Si sientes impulso de interrumpir, anótalo o di «tengo una idea, déjame esperar mi turno».",
                "Si el ambiente te sobrecarga, pide moverte o salir un rato.",
              ]}
            />
          </Acordeon>
          <Acordeon titulo="Después de socializar">
            <ListaClara
              items={[
                "Recupera estímulos bajos: silencio, luz suave, ropa cómoda.",
                "No revises mentalmente cada frase; anota dudas para otro momento.",
                "Si olvidaste algo, repara sin excusas largas y pide recordatorios para la próxima vez.",
                "Recuerda: tu valor no depende de cuánto duraste o cuánto hablaste.",
              ]}
            />
          </Acordeon>
        </div>
      </section>

      <section aria-labelledby="tdah-simulador-titulo" className="mt-10">
        <p className="antetitulo border-b-2 border-foreground pb-2">Práctica</p>
        <h2 id="tdah-simulador-titulo" className="mt-4 text-3xl sm:text-4xl">
          Ejercicio interactivo
        </h2>
        <div className="card-soft mt-6 p-6" data-card>
          <p className="m-0 text-lg font-semibold">{ejercicios.find((e) => e.id === "e-tdah-cambio-plan")?.titulo}</p>
          <p className="mt-2 text-muted-foreground">
            {ejercicios.find((e) => e.id === "e-tdah-cambio-plan")?.escenario}
          </p>
          <div className="mt-5">
            <Link to="/simulador" className="no-underline">
              <Boton>Practicar en el simulador</Boton>
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Aviso tipo="info" titulo="TDAH, ADHD y ADD son formas de neurodivergencia">
          Aquí usamos los tres términos porque distintas personas se identifican con cada uno. TDAH es el
          nombre más común en español; ADHD es el término internacional; ADD se refiere a la presentación
          inatenta sin hiperactividad.
        </Aviso>
      </div>
    </Contenedor>
  );
}
