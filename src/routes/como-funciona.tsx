import { createFileRoute, Link } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Aviso } from "@/components/Aviso";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "¿Cómo funciona NeuroGuía?" },
      {
        name: "description",
        content:
          "Cómo está organizada NeuroGuía: situaciones explicadas, guiones para copiar, ejercicios sin respuestas correctas y datos guardados solo en tu dispositivo.",
      },
      { property: "og:title", content: "¿Cómo funciona NeuroGuía?" },
      {
        property: "og:description",
        content: "Herramientas, no reglas absolutas. Así se usa el sitio.",
      },
    ],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "¿Cómo funciona?" }]} />
      <EncabezadoPagina
        titulo="¿Cómo funciona?"
        descripcion="NeuroGuía hace explícita información social que muchas veces se transmite de forma ambigua. Tú decides qué usar y qué no."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Cada situación tiene la misma estructura</h2>
          <ListaClara
            items={[
              "Qué está pasando, en lenguaje literal.",
              "Por qué puede ser confuso.",
              "Qué podría significar y otras interpretaciones posibles.",
              "Señales observables y preguntas directas que puedes hacer.",
              "Opciones para responder y qué podría ocurrir con cada una.",
              "Lo que no estás obligado a hacer.",
              "Cuándo poner un límite y cuándo pedir ayuda.",
            ]}
          />
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Lo que este sitio no hace</h2>
          <ListaClara
            items={[
              "No presenta la neurodivergencia como algo que deba corregirse.",
              "No enseña a ocultar rasgos autistas ni a parecer neurotípico.",
              "No usa las etiquetas «respuesta correcta» ni «persona normal».",
              "No afirma intenciones ajenas como si fueran certezas.",
              "No promete resultados: el contexto y la cultura cambian las cosas.",
            ]}
          />
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Tus datos</h2>
          <p className="mt-2">
            Los favoritos, el progreso, tu plan de regulación y tus preferencias de accesibilidad se
            guardan únicamente en este dispositivo, con LocalStorage. No se envían a ningún
            servidor y no necesitas crear una cuenta.
          </p>
          <Link to="/mi-espacio" className="mt-3 inline-block font-semibold text-primary underline">
            Ir a Mi espacio
          </Link>
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Accesibilidad</h2>
          <p className="mt-2">
            En el encabezado hay un botón de accesibilidad. Desde ahí puedes cambiar el tamaño del
            texto, activar alto contraste, reducir animaciones, usar una vista de lectura
            simplificada, elegir modo claro u oscuro y desactivar elementos decorativos.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Aviso tipo="aviso" titulo="Las normas sociales no son universales">
          Cambian según la cultura, el contexto y las personas. Puedes seguir una norma, adaptarla o
          decidir no seguirla. Tu comodidad y tu seguridad también importan.
        </Aviso>
      </div>
    </Contenedor>
  );
}