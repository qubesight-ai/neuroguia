import { createFileRoute } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Acordeon } from "@/components/Acordeon";
import { Aviso } from "@/components/Aviso";
import { DialogoEjemplo } from "@/components/DialogoEjemplo";

export const Route = createFileRoute("/relaciones")({
  head: () => ({
    meta: [
      { title: "Amistad, coqueteo y relaciones — NeuroGuía" },
      {
        name: "description",
        content:
          "Diferencias entre amabilidad, amistad y coqueteo; cómo preguntar directamente, aceptar un rechazo, entender el consentimiento y reconocer señales de manipulación.",
      },
      { property: "og:title", content: "Amistad, coqueteo y relaciones — NeuroGuía" },
      {
        property: "og:description",
        content: "Explicaciones claras sobre vínculos, consentimiento y patrones observables.",
      },
    ],
  }),
  component: Relaciones,
});

function Relaciones() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Relaciones" }]} />
      <EncabezadoPagina
        titulo="Amistad, coqueteo y relaciones"
        descripcion="Los vínculos se construyen con patrones, no con gestos aislados. Aquí se explica qué se puede observar y qué conviene preguntar."
      />

      <div className="mt-8 space-y-4">
        <Acordeon titulo="Amabilidad, amistad, coqueteo e interés romántico" abiertoPorDefecto>
          <ListaClara
            items={[
              "Amabilidad: trato cordial que puede darse con cualquier persona, a veces por norma social o por trabajo.",
              "Amistad: interés sostenido y recíproco en tu vida, con continuidad en el tiempo.",
              "Coqueteo: conducta que busca señalar atracción; se expresa de formas muy distintas según la persona y la cultura.",
              "Interés romántico: deseo de construir un vínculo afectivo o sexual, que puede o no expresarse con coqueteo.",
            ]}
          />
          <p className="mt-3">
            Estas categorías se solapan. No hay una señal que las distinga con certeza.
          </p>
        </Acordeon>

        <Acordeon titulo="Por qué una sola señal no demuestra interés">
          <p className="m-0">
            Sonreír, recordar tu nombre, tocarte el brazo o escribirte de noche pueden ocurrir sin
            interés romántico. Lo informativo es el patrón: que se repita, que haya iniciativa y que
            exista reciprocidad. Aun así, el patrón tampoco es una prueba; la única forma de saberlo
            es preguntar.
          </p>
        </Acordeon>

        <Acordeon titulo="Cómo preguntar directamente sin presionar">
          <ListaClara
            items={[
              "Elige un momento privado y sin prisa.",
              "Nombra que prefieres preguntar antes que suponer.",
              "Ofrece de forma explícita la opción de decir no.",
              "Pregunta una vez. Insistir después de una respuesta no es preguntar: es presionar.",
            ]}
          />
          <div className="mt-4">
            <DialogoEjemplo
              titulo="Ejemplo"
              lineas={[
                {
                  quien: "Tú",
                  texto:
                    "Me gustas y prefiero decirlo claro. ¿Te gustaría que saliéramos alguna vez? Si prefieres que no, está bien y no cambia nada.",
                },
                { quien: "La otra persona", texto: "Gracias por decirlo, pero prefiero que sigamos como amigos." },
                { quien: "Tú", texto: "Vale. Gracias por responder con claridad." },
              ]}
            />
          </div>
        </Acordeon>

        <Acordeon titulo="Cómo aceptar un rechazo">
          <ListaClara
            items={[
              "Un «no» es una respuesta completa y no necesita explicación.",
              "Puedes agradecer la claridad y retirarte de la conversación.",
              "Puedes sentir tristeza intensa; eso no obliga a la otra persona a cambiar su respuesta.",
              "No estás obligado a mantener la amistad si te resulta doloroso, y decirlo con calma es válido.",
              "Pedir explicaciones repetidas, insistir o culpar convierte el rechazo en presión.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Consentimiento: libre, informado, entusiasta y reversible">
          <ListaClara
            items={[
              "Libre: sin presión, chantaje, prisa ni miedo a consecuencias.",
              "Informado: ambas personas saben qué va a ocurrir.",
              "Entusiasta: un «sí» claro, no un silencio ni un «bueno, vale».",
              "Reversible: puede retirarse en cualquier momento, incluso a mitad de algo ya empezado.",
              "El consentimiento se pregunta, no se deduce del lenguaje corporal.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Diferencia entre interés y obsesión, y espacio personal">
          <ListaClara
            items={[
              "Interés: quieres saber de la otra persona y respetas sus tiempos y su privacidad.",
              "Obsesión: la atención se vuelve constante, revisas sus perfiles sin parar o necesitas saber dónde está.",
              "Evita aparecer en sus espacios sin invitación, enviar muchos mensajes seguidos o pedir explicaciones por no responder.",
              "Pregunta antes de cualquier contacto físico, incluidos abrazos.",
              "Si notas que no puedes parar, hablarlo con un profesional puede ayudarte.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Señales de una relación saludable">
          <ListaClara
            items={[
              "Puedes decir «no» sin miedo a represalias.",
              "Tus necesidades sensoriales y de comunicación se toman en serio.",
              "Hay reciprocidad: ambas personas cuidan el vínculo.",
              "Los desacuerdos se hablan, no se castigan con silencio.",
              "Mantienes tus otras relaciones y tus intereses.",
              "Puedes ser tú sin enmascarar todo el tiempo.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Señales de manipulación o abuso">
          <ListaClara
            items={[
              "Insiste después de un «no» claro.",
              "Usa culpa: «Si me quisieras, lo harías».",
              "Te aísla de tus personas de confianza.",
              "Pide secreto sobre lo que ocurre entre ustedes.",
              "Niega hechos para que dudes de tu memoria (gaslighting).",
              "Alterna afecto y castigo de forma imprevisible.",
              "Controla tu dinero, tu teléfono o tu ubicación.",
              "Usa tu neurodivergencia como argumento: «Nadie más te va a aguantar».",
            ]}
          />
          <p className="mt-3">
            Una sola conducta no define a una persona; un patrón repetido sí es información
            importante.
          </p>
        </Acordeon>

        <Acordeon titulo="Qué hacer si alguien insiste después de un «no»">
          <ListaClara
            items={[
              "Repite el límite sin dar argumentos nuevos: «Ya respondí».",
              "No negocies decisiones bajo prisa.",
              "Cuéntalo a alguien de confianza; el secreto sostiene el abuso.",
              "Puedes bloquear, salir del lugar o terminar la relación sin aviso previo.",
            ]}
          />
        </Acordeon>
      </div>

      <div className="mt-8">
        <Aviso tipo="riesgo" titulo="Si estás en peligro inmediato">
          Comunícate con los servicios de emergencia de tu país o busca ayuda de una persona de
          confianza. Esta información es educativa y no sustituye atención psicológica, médica ni
          legal.
        </Aviso>
      </div>
    </Contenedor>
  );
}