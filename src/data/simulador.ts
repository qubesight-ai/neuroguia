export type Valoracion =
  | "puede-funcionar"
  | "depende-contexto"
  | "podria-confundir"
  | "clara-respetuosa"
  | "riesgo-limites";

export const etiquetasValoracion: Record<Valoracion, string> = {
  "puede-funcionar": "Puede funcionar",
  "depende-contexto": "Depende del contexto",
  "podria-confundir": "Podría generar confusión",
  "clara-respetuosa": "Opción clara y respetuosa",
  "riesgo-limites": "Puede poner en riesgo tus límites",
};

export interface OpcionEjercicio {
  id: string;
  texto: string;
  valoracion: Valoracion;
  queComunica: string;
  ventajas: string[];
  riesgos: string[];
  alternativas: string[];
}

export interface Ejercicio {
  id: string;
  titulo: string;
  contexto: string;
  escenario: string;
  pregunta: string;
  opciones: OpcionEjercicio[];
  porQueVariasValidas: string;
}

export const ejercicios: Ejercicio[] = [
  {
    id: "e-señales-desinteres",
    titulo: "La otra persona responde con monosílabos",
    contexto: "Conversación presencial",
    escenario:
      "Estás hablando con alguien y comienza a responder únicamente «sí», «ajá» y «está bien», mientras mira repetidamente el teléfono.",
    pregunta: "¿Qué podrías hacer?",
    porQueVariasValidas:
      "Las respuestas breves pueden indicar prisa, cansancio, preocupación o falta de interés en ese momento. Como no puedes saberlo con certeza, varias respuestas son razonables: unas buscan información, otras protegen tu energía y otras dejan la puerta abierta.",
    opciones: [
      {
        id: "a",
        texto: "Continuar hablando sin detenerte.",
        valoracion: "podria-confundir",
        queComunica: "Que no registraste las señales o que decidiste ignorarlas.",
        ventajas: ["Si la otra persona solo estaba distraída, puede volver a la conversación."],
        riesgos: [
          "Si quería terminar, puede sentirse atrapada.",
          "Tú puedes quedarte con la duda de qué pasó.",
        ],
        alternativas: ["Hacer una pausa y preguntar si es buen momento."],
      },
      {
        id: "b",
        texto: "Preguntar si necesita irse.",
        valoracion: "clara-respetuosa",
        queComunica: "Que notaste algo y prefieres preguntar antes de suponer.",
        ventajas: ["Obtienes información concreta.", "Le das una salida sin incomodidad."],
        riesgos: ["Puede decir «no, sigue» por cortesía aunque quiera irse."],
        alternativas: ["«¿Es buen momento o mejor seguimos después?»"],
      },
      {
        id: "c",
        texto: "Decir: «Podemos continuar después si estás ocupado».",
        valoracion: "clara-respetuosa",
        queComunica: "Flexibilidad y respeto por su tiempo.",
        ventajas: ["Mantiene la relación abierta.", "No exige explicación."],
        riesgos: ["Si querías terminar el tema hoy, puede quedar sin cerrar."],
        alternativas: ["Acordar un momento concreto para retomarlo."],
      },
      {
        id: "d",
        texto: "Enojarte inmediatamente.",
        valoracion: "riesgo-limites",
        queComunica: "Que interpretaste su conducta como una falta de respeto hacia ti.",
        ventajas: ["Expresa que algo te afectó, aunque de forma difícil de recibir."],
        riesgos: [
          "Se basa en una suposición sobre su intención, que no puedes conocer.",
          "Puede dañar el vínculo y dejarte con malestar añadido.",
        ],
        alternativas: [
          "Nombrar el efecto sin atribuir intención: «Me quedo confundido cuando respondes así».",
        ],
      },
      {
        id: "e",
        texto: "Finalizar la conversación amablemente.",
        valoracion: "puede-funcionar",
        queComunica: "Que cuidas tu energía y cierras con calma.",
        ventajas: ["Evita alargar una interacción incómoda.", "No requiere justificación."],
        riesgos: ["Puede que la otra persona no note por qué terminaste."],
        alternativas: ["Cerrar y decir que te gustaría retomarlo otro día."],
      },
    ],
  },
  {
    id: "e-invitacion-ruidosa",
    titulo: "Te invitan a un lugar muy ruidoso",
    contexto: "Amistades",
    escenario:
      "Un grupo te invita a un bar con música alta. Quieres ver a estas personas, pero sabes que ese lugar te provoca sobrecarga sensorial.",
    pregunta: "¿Qué podrías responder?",
    porQueVariasValidas:
      "Tus necesidades sensoriales y tu deseo de socializar pueden estar en tensión. No hay una única forma de resolverlo: puedes negociar el lugar, poner condiciones o no ir.",
    opciones: [
      {
        id: "a",
        texto: "«Ese lugar tiene demasiado ruido para mí. ¿Podemos elegir otro?»",
        valoracion: "clara-respetuosa",
        queComunica: "Una necesidad concreta y una propuesta.",
        ventajas: ["Da al grupo información útil.", "Aumenta la posibilidad de participar."],
        riesgos: ["El grupo puede mantener el plan; entonces decides tú."],
        alternativas: ["Proponer dos lugares concretos que te funcionen."],
      },
      {
        id: "b",
        texto: "«Voy a pasar un rato al principio y luego me retiro.»",
        valoracion: "puede-funcionar",
        queComunica: "Participación con límite anunciado.",
        ventajas: ["Ves a las personas.", "El límite queda dicho desde el inicio."],
        riesgos: ["Aun así puede haber cansancio; considera tiempo de recuperación."],
        alternativas: ["Llegar temprano, cuando hay menos gente y menos volumen."],
      },
      {
        id: "c",
        texto: "Ir sin decir nada y aguantar toda la noche.",
        valoracion: "riesgo-limites",
        queComunica: "Disponibilidad total, que puede no ser real.",
        ventajas: ["Evitas conversaciones sobre tus necesidades."],
        riesgos: ["Sobrecarga, posible meltdown o shutdown y varios días de recuperación."],
        alternativas: ["Llevar tapones y acordar una hora de salida contigo mismo."],
      },
      {
        id: "d",
        texto: "«Gracias, esta vez no voy.»",
        valoracion: "puede-funcionar",
        queComunica: "Un «no» claro y suficiente.",
        ventajas: ["Protege tu energía.", "No necesita explicación."],
        riesgos: ["Si nunca explicas, el grupo puede seguir eligiendo lugares poco accesibles."],
        alternativas: ["Añadir: «Avísenme si hacen algo más tranquilo»."],
      },
    ],
  },
  {
    id: "e-mensaje-ambiguo",
    titulo: "Un mensaje que puede leerse de varias formas",
    contexto: "Chat",
    escenario:
      "Recibes este mensaje de alguien con quien trabajas: «Vaya, qué interesante tu manera de organizar el archivo».",
    pregunta: "¿Cómo podrías responder?",
    porQueVariasValidas:
      "El texto no incluye tono. La frase puede ser un elogio, una crítica indirecta o un comentario neutro. Preguntar es una respuesta razonable y no es un signo de debilidad.",
    opciones: [
      {
        id: "a",
        texto: "«¿Lo dices como crítica o como comentario? Prefiero preguntar antes de suponer.»",
        valoracion: "clara-respetuosa",
        queComunica: "Que buscas claridad sin ponerte a la defensiva.",
        ventajas: ["Corta la ambigüedad de inmediato."],
        riesgos: ["Alguien podría incomodarse por lo directo; suele pasar rápido."],
        alternativas: ["«¿Hay algo que quieras que cambie del archivo?»"],
      },
      {
        id: "b",
        texto: "Asumir que es una crítica y disculparte.",
        valoracion: "podria-confundir",
        queComunica: "Que aceptas una crítica que quizá no existió.",
        ventajas: ["Puede cerrar el tema rápido."],
        riesgos: ["Te sitúa en falta sin datos.", "Puede aumentar tu ansiedad después."],
        alternativas: ["Preguntar antes de disculparte."],
      },
      {
        id: "c",
        texto: "«Gracias» y seguir.",
        valoracion: "depende-contexto",
        queComunica: "Que lo tomas como comentario neutro.",
        ventajas: ["Evita el conflicto.", "Rápido y sin desgaste."],
        riesgos: ["Si era una petición de cambio, puede volver a surgir."],
        alternativas: ["Añadir: «Si quieres otro formato, dime»."],
      },
      {
        id: "d",
        texto: "No responder.",
        valoracion: "depende-contexto",
        queComunica: "Poco; deja la interpretación abierta.",
        ventajas: ["No inviertes energía en un mensaje ambiguo."],
        riesgos: ["En contextos de trabajo puede leerse como falta de respuesta."],
        alternativas: ["Responder solo con una confirmación breve."],
      },
    ],
  },
  {
    id: "e-insistencia",
    titulo: "Alguien insiste después de tu «no»",
    contexto: "Relación o amistad",
    escenario:
      "Dijiste que no quieres compartir tu ubicación en tiempo real. La otra persona responde: «Si no tienes nada que esconder, no entiendo el problema».",
    pregunta: "¿Qué podrías hacer?",
    porQueVariasValidas:
      "La frase traslada la carga de justificación hacia ti. Puedes responder, sostener tu límite sin argumentar o retirarte. Todas son válidas; lo que no es negociable es tu derecho a decir no.",
    opciones: [
      {
        id: "a",
        texto: "«Mi privacidad no depende de tener algo que esconder. Mi respuesta sigue siendo no.»",
        valoracion: "clara-respetuosa",
        queComunica: "Un límite firme y una corrección del razonamiento.",
        ventajas: ["Deja el límite explícito.", "No entra en la lógica de la culpa."],
        riesgos: ["Puede insistir; eso te da más información sobre la relación."],
        alternativas: ["Repetir solo: «Ya respondí»."],
      },
      {
        id: "b",
        texto: "Aceptar para evitar el conflicto.",
        valoracion: "riesgo-limites",
        queComunica: "Que la insistencia funciona contigo.",
        ventajas: ["Termina la discusión en el momento."],
        riesgos: [
          "Hace más probable que se repita la presión.",
          "Compartes información que no querías compartir.",
        ],
        alternativas: ["Pedir tiempo: «No voy a decidir bajo presión»."],
      },
      {
        id: "c",
        texto: "Explicar tus motivos con mucho detalle.",
        valoracion: "depende-contexto",
        queComunica: "Que tu límite necesita aprobación.",
        ventajas: ["Con personas que respetan límites, puede generar comprensión."],
        riesgos: ["Con quien presiona, cada motivo se convierte en algo que discutir."],
        alternativas: ["Un motivo breve y una repetición del límite."],
      },
      {
        id: "d",
        texto: "Terminar la conversación y hablarlo con alguien de confianza.",
        valoracion: "puede-funcionar",
        queComunica: "Que no negocias tus límites en el momento.",
        ventajas: ["Te da perspectiva externa.", "Reduce la presión inmediata."],
        riesgos: ["El tema puede volver; conviene tener tu respuesta preparada."],
        alternativas: ["Escribir tu límite por mensaje para tenerlo claro."],
      },
    ],
  },
  {
    id: "e-grupo-tema",
    titulo: "Hablaste mucho de tu tema de interés",
    contexto: "Reunión con amistades",
    escenario:
      "Estabas contando algo que te apasiona y notas que dos personas se miraron entre ellas y cambiaron de tema.",
    pregunta: "¿Qué podrías hacer?",
    porQueVariasValidas:
      "Compartir intereses en profundidad es una forma válida de comunicación. Al mismo tiempo, la reciprocidad ayuda en grupo. Puedes ajustar, preguntar o no cambiar nada.",
    opciones: [
      {
        id: "a",
        texto: "«Me emociono con este tema. ¿Quieren que siga o cambiamos?»",
        valoracion: "clara-respetuosa",
        queComunica: "Autoconocimiento y apertura, sin disculparte por tu interés.",
        ventajas: ["Obtienes una respuesta real.", "No asumes rechazo."],
        riesgos: ["Puede que respondan por cortesía."],
        alternativas: ["Preguntar a alguien concreto qué opina del tema."],
      },
      {
        id: "b",
        texto: "Dejar de hablar del tema y no volver a mencionarlo nunca.",
        valoracion: "podria-confundir",
        queComunica: "Puede parecer que te molestaste.",
        ventajas: ["Evita el riesgo de repetirlo."],
        riesgos: [
          "Renuncias a algo importante para ti por una señal que no confirmaste.",
          "Puede aumentar el enmascaramiento y el agotamiento.",
        ],
        alternativas: ["Buscar espacios donde ese tema sea bienvenido."],
      },
      {
        id: "c",
        texto: "Seguir hablando y luego preguntar por los intereses de las otras personas.",
        valoracion: "puede-funcionar",
        queComunica: "Que compartes y también te interesas.",
        ventajas: ["Crea reciprocidad sin ocultar quién eres."],
        riesgos: ["Si el turno se alargó mucho, el grupo puede haberse dispersado."],
        alternativas: ["Contar una versión corta y ofrecer detalles a quien quiera."],
      },
      {
        id: "d",
        texto: "Preguntar directamente: «¿Hablé demasiado?»",
        valoracion: "depende-contexto",
        queComunica: "Que valoras su experiencia.",
        ventajas: ["Puede darte información concreta y útil."],
        riesgos: ["La respuesta puede ser incómoda o poco honesta.", "Puede reforzar autocrítica."],
        alternativas: [
          "Preguntar a una persona de confianza en privado en lugar de al grupo entero.",
        ],
      },
    ],
  },
];