import { createFileRoute } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Aviso } from "@/components/Aviso";

export const Route = createFileRoute("/sobre-el-proyecto")({
  head: () => ({
    meta: [
      { title: "Sobre el proyecto — NeuroGuía" },
      {
        name: "description",
        content:
          "NeuroGuía se creó desde una perspectiva de respeto hacia la neurodiversidad: hacer explícita la información social ambigua, sin enseñar a parecer neurotípico.",
      },
      { property: "og:title", content: "Sobre el proyecto — NeuroGuía" },
      {
        property: "og:description",
        content: "Principios: autonomía, dignidad, consentimiento, seguridad y diversidad.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Sobre el proyecto" }]} />
      <EncabezadoPagina
        titulo="Sobre el proyecto"
        descripcion="Una plataforma educativa para personas autistas, con TDAH, ansiedad social y otras neurodivergencias."
      />

      <blockquote className="card-soft mt-8 border-l-4 border-primary p-6 text-lg" data-card>
        NeuroGuía fue creada desde una perspectiva de respeto hacia la neurodiversidad. No busca
        enseñar a las personas neurodivergentes a parecer neurotípicas. Busca hacer explícita
        información social que con frecuencia se transmite de forma ambigua o implícita.
      </blockquote>

      <section className="card-soft mt-6 p-6" data-card>
        <h2 className="text-xl font-bold">Principios del proyecto</h2>
        <ListaClara
          items={[
            "Autonomía: tú decides qué usar y qué no.",
            "Dignidad: ningún contenido infantiliza ni corrige a quien lee.",
            "Comunicación clara: lenguaje literal y directo.",
            "Consentimiento: libre, informado, entusiasta y reversible.",
            "Seguridad: información para reconocer presión y abuso.",
            "Diversidad: hay muchas formas válidas de comunicarse.",
            "Derecho a establecer límites.",
            "Derecho a no participar.",
            "Nada sobre nosotros sin nosotros.",
          ]}
        />
      </section>

      <div className="mt-6">
        <Aviso tipo="aviso" titulo="Alcance de este sitio">
          NeuroGuía ofrece información educativa. No sustituye atención psicológica, médica ni
          legal, y no puede saber qué piensa otra persona. Las normas sociales cambian según la
          cultura, el contexto y las personas.
        </Aviso>
      </div>
    </Contenedor>
  );
}