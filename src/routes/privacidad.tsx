import { createFileRoute, Link } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Privacidad y datos locales — NeuroGuía" },
      {
        name: "description",
        content:
          "NeuroGuía guarda favoritos, progreso, plan de regulación y preferencias solo en tu dispositivo mediante LocalStorage. No hay cuentas ni servidores.",
      },
      { property: "og:title", content: "Privacidad y datos locales — NeuroGuía" },
      {
        property: "og:description",
        content: "Qué se guarda, dónde se guarda y cómo borrarlo.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Privacidad" }]} />
      <EncabezadoPagina
        titulo="Privacidad"
        descripcion="Esta versión de NeuroGuía funciona sin registro y sin base de datos."
      />

      <section className="card-soft mt-8 p-6" data-card>
        <h2 className="text-xl font-bold">Qué se guarda y dónde</h2>
        <ListaClara
          items={[
            "Situaciones, guiones y recursos que marcas como guardados.",
            "Escenarios del simulador que completaste.",
            "Tu plan de regulación.",
            "Tus preferencias de accesibilidad.",
          ]}
        />
        <p className="mt-4">
          Todo se almacena con LocalStorage en tu navegador. No se envía a ningún servidor, no se
          comparte y no se usa para publicidad ni analítica.
        </p>
        <p className="mt-3">
          Puedes eliminar todo desde{" "}
          <Link to="/mi-espacio" className="font-semibold text-primary underline">
            Mi espacio
          </Link>
          . Si borras los datos del navegador, la información desaparecerá también.
        </p>
        <p className="mt-3">
          El formulario de sugerencias de esta versión inicial no envía datos a ningún servidor:
          simula el envío y muestra una confirmación.
        </p>
      </section>
    </Contenedor>
  );
}