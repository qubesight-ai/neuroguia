import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Gauge, MapPin } from "lucide-react";
import { Contenedor } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Insignia } from "@/components/ui/Insignia";
import { Aviso } from "@/components/Aviso";
import { BotonFavorito } from "@/components/BotonFavorito";
import { DialogoEjemplo } from "@/components/DialogoEjemplo";
import { categoriaPorId } from "@/data/categorias";
import {
  RECORDATORIO,
  etiquetaAmbiguedad,
  situacionPorId,
  type Situacion,
} from "@/data/situaciones";

export const Route = createFileRoute("/situaciones/$id")({
  loader: ({ params }) => {
    const situacion = situacionPorId(params.id);
    if (!situacion) throw notFound();
    return { situacion };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Situación no encontrada — NeuroGuía" }, { name: "robots", content: "noindex" }],
      };
    }
    const { situacion } = loaderData;
    const titulo = `${situacion.titulo} — NeuroGuía`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: situacion.resumen },
        { property: "og:title", content: titulo },
        { property: "og:description", content: situacion.resumen },
      ],
    };
  },
  component: DetalleSituacion,
});

function Bloque({
  titulo,
  children,
  tono = "normal",
}: {
  titulo: string;
  children: React.ReactNode;
  tono?: "normal" | "destacado";
}) {
  return (
    <section
      className={`card-soft p-6 ${tono === "destacado" ? "border-2 border-primary/40 bg-primary-soft" : ""}`}
      data-card
    >
      <h2 className="text-xl font-bold">{titulo}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Lista({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetalleSituacion() {
  const { situacion } = Route.useLoaderData() as { situacion: Situacion };
  const categoria = categoriaPorId(situacion.categoria);

  return (
    <Contenedor className="py-10">
      <Migas
        items={[{ texto: "Situaciones", to: "/situaciones" }, { texto: situacion.titulo }]}
      />

      <article>
        <header>
          <div className="flex flex-wrap items-center gap-2">
            {categoria && <Insignia tono="primario">{categoria.nombre}</Insignia>}
            <Insignia tono="lavanda">
              <Gauge className="h-4 w-4" aria-hidden="true" />
              {etiquetaAmbiguedad[situacion.ambiguedad]}
            </Insignia>
            <Insignia>
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {situacion.contexto}
            </Insignia>
            <Insignia>
              <Clock className="h-4 w-4" aria-hidden="true" />
              {situacion.minutos} min de lectura
            </Insignia>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {situacion.titulo}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{situacion.resumen}</p>
          <div className="mt-4">
            <BotonFavorito
              tipo="situacion"
              id={situacion.id}
              nombre={situacion.titulo}
              tamano="md"
            />
          </div>
        </header>

        <div className="mt-8 space-y-5">
          <Bloque titulo="¿Qué está pasando?">
            <p className="m-0">{situacion.queEstaPasando}</p>
          </Bloque>

          <Bloque titulo="¿Por qué puede ser confuso?">
            <p className="m-0">{situacion.porQueConfuso}</p>
          </Bloque>

          <Bloque titulo="Qué podría significar">
            <p className="mt-0 text-muted-foreground">
              Ninguna de estas opciones es una certeza. Son posibilidades.
            </p>
            <Lista items={situacion.podriaSignificar} />
          </Bloque>

          <Bloque titulo="Otras interpretaciones posibles">
            <Lista items={situacion.otrasInterpretaciones} />
          </Bloque>

          <Bloque titulo="Señales que puedes observar">
            <p className="mt-0 text-muted-foreground">
              Las señales dan información parcial. Un patrón informa más que un solo hecho.
            </p>
            <Lista items={situacion.senales} />
          </Bloque>

          <Bloque titulo="Preguntas directas que puedes hacer">
            <Lista items={situacion.preguntasDirectas} />
          </Bloque>

          <section className="card-soft p-6" data-card>
            <h2 className="text-xl font-bold">Opciones para responder</h2>
            <p className="mt-2 text-muted-foreground">
              Todas son opciones, no instrucciones. Junto a cada una encontrarás qué comunica y qué
              podría ocurrir.
            </p>
            <ol className="mt-4 list-none space-y-4 p-0">
              {situacion.opciones.map((o, i) => (
                <li key={o.texto} className="rounded-none border border-border bg-muted p-5">
                  <p className="m-0 font-bold">
                    <span className="text-primary">Opción {i + 1}. </span>
                    {o.texto}
                  </p>
                  <dl className="mt-3 space-y-2">
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                        Qué comunica
                      </dt>
                      <dd className="m-0">{o.queComunica}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                        Qué podría ocurrir
                      </dt>
                      <dd className="m-0">{o.quePodriaOcurrir}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </section>

          <Bloque titulo="Lo que no estás obligado a hacer" tono="destacado">
            <Lista items={situacion.noObligado} />
          </Bloque>

          <Bloque titulo="Cuándo poner un límite">
            <Lista items={situacion.cuandoLimite} />
          </Bloque>

          <Bloque titulo="Cuándo pedir ayuda">
            <Lista items={situacion.cuandoAyuda} />
          </Bloque>

          {situacion.dialogo && (
            <DialogoEjemplo titulo={situacion.dialogo.titulo} lineas={situacion.dialogo.lineas} />
          )}

          <Aviso tipo="info" titulo="Recuerda">
            {RECORDATORIO}
          </Aviso>

          <Aviso tipo="apoyo" titulo="¿Necesitas una frase concreta?">
            En la sección de{" "}
            <Link to="/guiones" className="font-semibold underline">
              guiones sociales
            </Link>{" "}
            hay frases que puedes copiar y adaptar. También puedes{" "}
            <Link to="/simulador" className="font-semibold underline">
              practicar en el simulador
            </Link>
            .
          </Aviso>
        </div>
      </article>
    </Contenedor>
  );
}