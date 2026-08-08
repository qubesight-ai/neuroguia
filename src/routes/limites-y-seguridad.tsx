import { createFileRoute, Link } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Acordeon } from "@/components/Acordeon";
import { Aviso } from "@/components/Aviso";

export const Route = createFileRoute("/limites-y-seguridad")({
  head: () => ({
    meta: [
      { title: "Límites personales y seguridad — NeuroGuía" },
      {
        name: "description",
        content:
          "Derecho a decir no, consentimiento, presión social, manipulación, gaslighting, grooming, estafas, seguridad en citas y en internet, y cuándo pedir ayuda.",
      },
      { property: "og:title", content: "Límites personales y seguridad — NeuroGuía" },
      {
        property: "og:description",
        content: "Información clara para reconocer presión, abuso y relaciones de poder.",
      },
    ],
  }),
  component: Limites,
});

function Limites() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Límites y seguridad" }]} />
      <EncabezadoPagina
        titulo="Límites y seguridad"
        descripcion="Tus límites no necesitan justificación. Esta sección explica formas frecuentes de presión y qué puedes hacer ante ellas."
      />

      <div className="mt-6">
        <Aviso tipo="riesgo" titulo="Si estás en peligro inmediato">
          Comunícate con los servicios de emergencia de tu país o busca ayuda de una persona de
          confianza. NeuroGuía ofrece información educativa y no sustituye atención psicológica,
          médica ni legal.
        </Aviso>
      </div>

      <div className="mt-8 space-y-4">
        <Acordeon titulo="Derecho a decir «no» y consentimiento" abiertoPorDefecto>
          <ListaClara
            items={[
              "«No» es una respuesta completa. No requiere motivos ni aprobación.",
              "Puedes cambiar de opinión después de haber dicho «sí».",
              "El consentimiento es libre, informado, entusiasta y reversible.",
              "El silencio, la duda o un «bueno» resignado no son consentimiento.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Presión social">
          <ListaClara
            items={[
              "Frases como «todo el mundo lo hace» describen costumbres, no obligaciones.",
              "La prisa («ahora o nunca») suele servir para evitar que pienses.",
              "Puedes responder: «Necesito tiempo para decidir».",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Manipulación, chantaje emocional y gaslighting">
          <ListaClara
            items={[
              "Manipulación: conseguir algo de ti sin pedirlo de forma directa.",
              "Chantaje emocional: usar culpa, lástima o amenazas de abandono.",
              "Gaslighting: negar hechos para que dudes de tu memoria o percepción.",
              "Anota lo que ocurre: tener registro ayuda cuando alguien niega los hechos.",
              "Contrástalo con una persona de confianza.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Grooming y relaciones de poder">
          <ListaClara
            items={[
              "Grooming: una persona adulta gana la confianza de un menor o de alguien vulnerable para abusar; suele empezar con halagos, regalos y secreto.",
              "Relación de poder: hay diferencia de edad, jerarquía, dinero o dependencia. En esos casos el consentimiento queda condicionado.",
              "Señales de alerta: «eres especial», «no lo cuentes», pasar rápido a temas sexuales, pedir fotos.",
              "Si alguien te pide secreto sobre algo que te incomoda, eso es motivo para contarlo.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Estafas, abuso económico y abuso emocional">
          <ListaClara
            items={[
              "Nadie legítimo te pedirá contraseñas, códigos de verificación ni criptomonedas con urgencia.",
              "Desconfía de romances en línea que piden dinero y evitan las videollamadas.",
              "Abuso económico: controlar tus ingresos, pedir préstamos constantes o gestionar tu dinero sin acuerdo.",
              "Abuso emocional: humillaciones, silencios como castigo, control de con quién hablas.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Seguridad en citas y en internet">
          <ListaClara
            items={[
              "Primera cita en un lugar público y con hora de fin decidida por ti.",
              "Cuéntale a alguien dónde estarás y con quién.",
              "Llega y vuelve con tu propio transporte si puedes.",
              "No compartas dirección, lugar de trabajo, documentos ni datos bancarios al inicio.",
              "Revisa la privacidad de tus redes y quién puede escribirte.",
              "Puedes irte en cualquier momento, sin explicación.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Cuándo hablar con una persona de confianza o un profesional">
          <ListaClara
            items={[
              "Cuando alguien te presiona de forma repetida o te pide secreto.",
              "Cuando hay amenazas, chantaje con imágenes o presión sexual.",
              "Cuando dudas de tu propia percepción por lo que alguien te dice.",
              "Cuando la situación afecta tu sueño, tu alimentación o tu seguridad.",
              "Pedir ayuda no es exagerar. Puedes pedirla también solo para ordenar tus ideas.",
            ]}
          />
        </Acordeon>
      </div>

      <p className="mt-8">
        También puedes leer la situación{" "}
        <Link
          to="/situaciones/$id"
          params={{ id: "presion-o-manipulacion" }}
          className="font-semibold text-primary underline"
        >
          «Reconocer presión o manipulación»
        </Link>
        .
      </p>
    </Contenedor>
  );
}