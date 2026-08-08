export interface TerminoGlosario {
  termino: string;
  definicion: string;
  ejemplo: string;
}

export const glosario: TerminoGlosario[] = [
  {
    termino: "Comunicación directa",
    definicion:
      "Decir lo que quieres decir de forma explícita, sin dejar el significado a la interpretación.",
    ejemplo: "«No quiero ir a la fiesta.»",
  },
  {
    termino: "Comunicación indirecta",
    definicion:
      "Transmitir un mensaje mediante insinuaciones, tono o contexto en lugar de decirlo de forma literal.",
    ejemplo: "«Uf, mañana madrugo…», dicho para no decir «no voy a ir».",
  },
  {
    termino: "Sarcasmo",
    definicion:
      "Decir lo contrario de lo que se piensa, normalmente con un tono marcado, a veces con intención crítica.",
    ejemplo: "Alguien mira un vaso roto y dice: «Perfecto, justo lo que necesitaba».",
  },
  {
    termino: "Ironía",
    definicion:
      "Contraste entre lo que se dice o se espera y lo que ocurre. No siempre busca criticar a alguien.",
    ejemplo: "Llevas paraguas todo el día y llueve justo cuando lo dejas en casa.",
  },
  {
    termino: "Doble sentido",
    definicion: "Una frase que admite dos lecturas al mismo tiempo, una literal y otra implícita.",
    ejemplo: "«Qué callado estás hoy», que puede ser observación o reproche.",
  },
  {
    termino: "Lenguaje corporal",
    definicion:
      "Información que se transmite con postura, gestos, distancia o movimientos. No es un código exacto: varía entre personas y culturas.",
    ejemplo: "Cruzar los brazos puede indicar incomodidad, frío o simple costumbre.",
  },
  {
    termino: "Reciprocidad",
    definicion:
      "Intercambio equilibrado en una relación: ambas personas preguntan, escuchan, proponen y sostienen el vínculo.",
    ejemplo: "Tú escribes primero unas veces y la otra persona otras.",
  },
  {
    termino: "Consentimiento",
    definicion:
      "Acuerdo libre, informado, entusiasta y reversible. Puede retirarse en cualquier momento, incluso después de haberlo dado.",
    ejemplo: "«¿Te parece bien si te abrazo?» «Preferiría que no.» «Vale.»",
  },
  {
    termino: "Límite",
    definicion:
      "Lo que estás dispuesto a aceptar y lo que no. No necesita justificación ni aprobación de otra persona.",
    ejemplo: "«No respondo mensajes después de las once de la noche.»",
  },
  {
    termino: "Enmascaramiento",
    definicion:
      "Esfuerzo por ocultar rasgos propios para encajar. Puede reducir conflictos a corto plazo y generar agotamiento a largo plazo.",
    ejemplo: "Forzar contacto visual durante una hora y salir con dolor de cabeza.",
  },
  {
    termino: "Sobrecarga sensorial",
    definicion:
      "Estado en el que la cantidad de estímulos supera lo que puedes procesar con comodidad.",
    ejemplo: "En un supermercado con música, luces y anuncios te cuesta pensar y hablar.",
  },
  {
    termino: "Meltdown",
    definicion:
      "Respuesta intensa y externalizada ante una sobrecarga acumulada. No es una rabieta ni una elección.",
    ejemplo: "Después de dos horas de ruido, aparece llanto o gritos que no puedes detener.",
  },
  {
    termino: "Shutdown",
    definicion:
      "Respuesta de bloqueo hacia dentro ante una sobrecarga: el habla, el movimiento o la comprensión se reducen.",
    ejemplo: "Quieres responder una pregunta y no consigues formar palabras.",
  },
  {
    termino: "Funciones ejecutivas",
    definicion:
      "Procesos que permiten iniciar tareas, organizarlas, cambiar de actividad y gestionar el tiempo.",
    ejemplo: "Quieres responder un correo importante y no logras empezar durante días.",
  },
  {
    termino: "Sensibilidad al rechazo",
    definicion:
      "Reacción emocional muy intensa ante un rechazo, una crítica o la posibilidad de haberlos provocado.",
    ejemplo: "Un mensaje sin respuesta te ocupa el pensamiento durante horas.",
  },
  {
    termino: "Gaslighting",
    definicion:
      "Hacer que dudes de tu propia percepción o memoria mediante negaciones repetidas de hechos.",
    ejemplo: "«Nunca dije eso, te lo estás inventando», cuando sí lo dijo.",
  },
  {
    termino: "Grooming",
    definicion:
      "Proceso en el que una persona adulta gana la confianza de un menor o de alguien vulnerable para abusar de él, con frecuencia por internet.",
    ejemplo:
      "Alguien te trata como su persona especial, pide secreto y luego solicita fotos privadas.",
  },
  {
    termino: "TDAH / ADHD",
    definicion:
      "Trastorno por déficit de atención con o sin hiperactividad. En inglés se conoce como ADHD. Puede incluir dificultad para mantener la atención, hiperactividad, impulsividad y regulación emocional.",
    ejemplo:
      "Una persona con TDAH puede olvidar un compromiso aunque le importe mucho, o interrumpir sin querer porque la idea llega con urgencia.",
  },
  {
    termino: "ADD",
    definicion:
      "Presentación inatenta del TDAH, sin hiperactividad visible. Se caracteriza más por distracción, olvidos, dificultad para organizarse y para terminar tareas.",
    ejemplo:
      "Alguien con ADD puede parecer estar soñando despierto, perder objetos con frecuencia o tener muchos proyectos iniciados y pocos terminados.",
  },
  {
    termino: "Hiperfoco",
    definicion:
      "Estado de atención muy intensa y sostenida en un tema o actividad de gran interés. Puede ser productivo, pero también dificulta las transiciones y el cuidado básico.",
    ejemplo:
      "Empiezas a investigar un tema a las ocho de la noche y, cuando lo notas, son las tres de la mañana y no cenaste.",
  },
  {
    termino: "Rechazo a la frustración / RSD",
    definicion:
      "Reacción emocional muy intensa ante el rechazo, la crítica o el fracaso real o percibido. No es una exageración voluntaria; el sistema nervioso responde con fuerza.",
    ejemplo:
      "Una corrección menor en el trabajo te produce vergüenza, enfado o tristeza que tarda horas en bajar.",
  },
  {
    termino: "Memoria prospectiva",
    definicion:
      "Capacidad de recordar hacer algo en el futuro. En TDAH/ADD puede fallar incluso cuando la intención es real y el compromiso es importante.",
    ejemplo:
      "Quedaste en llamar a alguien mañana y, aunque lo pensaste varias veces, no lo hiciste hasta que te recordaron.",
  },
  {
    termino: "Parálisis por análisis",
    definicion:
      "Bloqueo ante demasiadas opciones o pasos. El cerebro no elige ninguna ruta y la tarea se retrasa.",
    ejemplo:
      "Tienes cinco tareas pendientes, no sabes por cuál empezar y terminas sin hacer ninguna.",
  },
  {
    termino: "Impulsividad",
    definicion:
      "Tendencia a actuar o hablar antes de evaluar las consecuencias. Puede mostrarse como interrupciones, compras repentinas o respuestas rápidas.",
    ejemplo:
      "Dices un comentario en una reunión y solo después notas que no era el momento adecuado.",
  },
];