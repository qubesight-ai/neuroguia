import { createFileRoute } from "@tanstack/react-router";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Acordeon } from "@/components/Acordeon";
import { Aviso } from "@/components/Aviso";
import { PlanRegulacion } from "@/components/PlanRegulacion";

export const Route = createFileRoute("/regulacion")({
  head: () => ({
    meta: [
      { title: "Regulación y sobrecarga sensorial — NeuroGuía" },
      {
        name: "description",
        content:
          "Señales tempranas de sobrecarga, planes de salida, kit sensorial, diferencias entre meltdown, shutdown y ansiedad, y un plan de regulación editable que se guarda en tu dispositivo.",
      },
      { property: "og:title", content: "Regulación y sobrecarga sensorial — NeuroGuía" },
      {
        property: "og:description",
        content: "Herramientas prácticas para antes, durante y después de socializar.",
      },
    ],
  }),
  component: Regulacion,
});

function Regulacion() {
  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Regulación" }]} />
      <EncabezadoPagina
        titulo="Regulación y sobrecarga"
        descripcion="Identificar señales tempranas suele ser más útil que resistir hasta el límite. Aquí tienes herramientas y un plan personal editable."
      />

      <div className="mt-8 space-y-4">
        <Acordeon titulo="Señales tempranas de sobrecarga" abiertoPorDefecto>
          <ListaClara
            items={[
              "Cuesta seguir el hilo de una conversación.",
              "Los sonidos habituales molestan más de lo normal.",
              "Aumenta el movimiento repetitivo o la necesidad de moverte.",
              "Aparece irritabilidad sin motivo claro.",
              "Te cuesta encontrar palabras.",
              "Sientes urgencia de salir del lugar.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Revisa primero hambre, cansancio, estrés y dolor">
          <p className="m-0">
            Estas cuatro cosas reducen tu margen sensorial. Antes de interpretar una reacción como
            «exagerada», comprueba si comiste, si dormiste, cuánta tensión acumulas y si algo te
            duele. A veces la solución es agua, comida o una pausa, no una estrategia social.
          </p>
        </Acordeon>

        <Acordeon titulo="Prepararse para un evento social">
          <ListaClara
            items={[
              "Pregunta cuánta gente irá, cuánto durará y cómo es el lugar.",
              "Decide de antemano tu hora de salida.",
              "Localiza una zona tranquila al llegar.",
              "Lleva tapones, audífonos o gafas de sol.",
              "Prepara una o dos frases para presentarte y una para despedirte.",
              "Reserva tiempo de recuperación después, no planes nada más ese día.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Pedir una pausa y crear un plan de salida">
          <ListaClara
            items={[
              "Frase para pausa: «Voy a salir diez minutos y vuelvo».",
              "Decide antes cómo volverás a casa y si necesitas avisar a alguien.",
              "Acuerda una señal con una persona de confianza para irse sin explicaciones.",
              "Guarda un mensaje escrito por si te cuesta hablar en ese momento.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Recuperarse después de socializar">
          <ListaClara
            items={[
              "Reduce estímulos: luz baja, silencio, ropa cómoda.",
              "Haz algo conocido y predecible.",
              "Come e hidrátate.",
              "Evita revisar mentalmente cada frase que dijiste; puedes anotar dudas y dejarlas para otro día.",
              "El agotamiento después de socializar no significa que lo hicieras mal.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Manejar cambios inesperados">
          <ListaClara
            items={[
              "Pide unos minutos antes de responder.",
              "Pregunta qué parte del plan cambia exactamente.",
              "Escribe la nueva secuencia de pasos.",
              "Puedes decir que no participas con el formato nuevo.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Crear un kit sensorial">
          <ListaClara
            items={[
              "Tapones o audífonos con cancelación de ruido.",
              "Gafas de sol o gorra.",
              "Un objeto para las manos.",
              "Agua y algo de comer.",
              "Auriculares con música o sonido conocido.",
              "Una tarjeta o nota con tu frase para pedir espacio.",
            ]}
          />
        </Acordeon>

        <Acordeon titulo="Diferencias entre meltdown, shutdown y ansiedad">
          <ListaClara
            items={[
              "Meltdown: respuesta intensa hacia fuera ante sobrecarga acumulada. No es una elección ni una rabieta.",
              "Shutdown: bloqueo hacia dentro; se reduce el habla, el movimiento o la comprensión.",
              "Ansiedad: anticipación de algo que puede ocurrir, con síntomas físicos como taquicardia.",
              "Pueden aparecer juntos. Lo que ayuda en uno puede no servir en otro, así que conviene tener varias estrategias.",
            ]}
          />
        </Acordeon>
      </div>

      <div className="mt-10">
        <PlanRegulacion />
      </div>

      <div className="mt-8">
        <Aviso tipo="apoyo" titulo="Tus datos se quedan aquí">
          Tu plan se guarda únicamente en este dispositivo mediante LocalStorage. No se envía a
          ningún servidor y puedes borrarlo cuando quieras.
        </Aviso>
      </div>
    </Contenedor>
  );
}