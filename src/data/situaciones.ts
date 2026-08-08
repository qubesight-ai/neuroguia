import type { CategoriaId } from "./categorias";
import { iniciarConversacionExtra } from "./situaciones-extra/iniciar-conversacion";

export type Ambiguedad = "bajo" | "medio" | "alto";

export interface OpcionRespuesta {
  texto: string;
  queComunica: string;
  quePodriaOcurrir: string;
}

export interface LineaDialogo {
  quien: string;
  texto: string;
}

export interface Situacion {
  id: string;
  titulo: string;
  resumen: string;
  contexto: string;
  categoria: CategoriaId;
  ambiguedad: Ambiguedad;
  minutos: number;
  palabrasClave: string[];
  queEstaPasando: string;
  porQueConfuso: string;
  podriaSignificar: string[];
  otrasInterpretaciones: string[];
  senales: string[];
  preguntasDirectas: string[];
  opciones: OpcionRespuesta[];
  noObligado: string[];
  cuandoLimite: string[];
  cuandoAyuda: string[];
  dialogo?: { titulo: string; lineas: LineaDialogo[] };
}

export const RECORDATORIO =
  "Recuerda: no puedes conocer con certeza lo que alguien piensa sin preguntarle. Un solo comportamiento no permite conocer una intención.";

const situacionesBase: Situacion[] = [
  {
    id: "no-devuelve-saludo",
    titulo: "Alguien no devuelve un saludo",
    resumen:
      "Conversaste con una persona un día y al día siguiente no responde a tu saludo.",
    contexto: "Pasillo, clase, oficina o calle",
    categoria: "iniciar-conversacion",
    ambiguedad: "alto",
    minutos: 5,
    palabrasClave: ["saludo", "ignorar", "hola", "no me habla", "me evita"],
    queEstaPasando:
      "Saludaste a una persona con la que hablaste antes y no obtuviste respuesta. La interacción terminó sin una explicación visible.",
    porQueConfuso:
      "La ausencia de respuesta no contiene información. Podría deberse a la otra persona, al entorno o a algo que no tiene relación contigo, y desde fuera esas opciones se ven iguales.",
    podriaSignificar: [
      "No te vio ni te escuchó.",
      "Estaba distraída pensando en otra cosa.",
      "Tenía prisa.",
      "Estaba preocupada o cansada.",
      "No sabía cómo continuar la interacción.",
      "No tenía interés en conversar en ese momento.",
    ],
    otrasInterpretaciones: [
      "Algunas personas saludan solo cuando alguien las saluda primero y de frente.",
      "En algunos lugares saludar a diario se considera normal; en otros, solo se saluda al llegar o en ocasiones específicas.",
      "Puede tener dificultades para reconocer caras fuera del contexto habitual.",
    ],
    senales: [
      "Miraba el teléfono, iba con audífonos o caminaba rápido.",
      "Iba acompañada y hablando con otra persona.",
      "Responde en otros momentos o por otros canales.",
      "Se repite muchas veces con distintas personas, no solo contigo.",
    ],
    preguntasDirectas: [
      "«Hola, ¿te alcancé a saludar hoy? No estaba seguro.»",
      "«¿Prefieres que no te salude cuando estás ocupada?»",
      "«¿Está todo bien entre nosotros? Te lo pregunto porque no quiero suponer.»",
    ],
    opciones: [
      {
        texto: "Saludar brevemente y seguir con tu día.",
        queComunica: "Que mantienes la puerta abierta sin exigir una respuesta.",
        quePodriaOcurrir:
          "Puede responder en otro momento, o no. No obtienes información nueva, pero tampoco pierdes nada.",
      },
      {
        texto: "Esperar otra oportunidad y observar si se repite.",
        queComunica: "Que estás reuniendo información antes de sacar conclusiones.",
        quePodriaOcurrir:
          "Con varios encuentros verás un patrón, que es más informativo que un solo día.",
      },
      {
        texto: "Preguntar de forma tranquila y directa.",
        queComunica: "Que prefieres claridad en lugar de suposiciones.",
        quePodriaOcurrir:
          "Muchas personas responden con normalidad. Algunas pueden sorprenderse por la pregunta; eso no significa que hiciste algo mal.",
      },
      {
        texto: "No continuar la interacción si te incomoda.",
        queComunica: "Que cuidas tu energía.",
        quePodriaOcurrir:
          "La relación puede quedarse como está. Es una opción válida y no requiere justificación.",
      },
    ],
    noObligado: [
      "No estás obligado a saludar a todas las personas todos los días.",
      "No estás obligado a insistir hasta obtener respuesta.",
      "No estás obligado a explicar por qué te incomodó.",
    ],
    cuandoLimite: [
      "Si alguien te ignora en público y luego te busca solo cuando necesita algo, puedes decidir cuánta disponibilidad ofreces.",
      "Si te pide que no la saludes delante de otras personas pero sí en privado, puedes preguntar el motivo y decidir si te parece aceptable.",
    ],
    cuandoAyuda: [
      "Si esta situación te genera ansiedad durante días y afecta tu descanso.",
      "Si ocurre en un grupo de forma coordinada y sostenida; eso puede ser exclusión deliberada.",
    ],
    dialogo: {
      titulo: "Ejemplo de conversación directa",
      lineas: [
        { quien: "Tú", texto: "Hola. Ayer hablamos y hoy no me saludaste. ¿Pasó algo?" },
        { quien: "La otra persona", texto: "Ah, perdón, iba con prisa y ni miré." },
        { quien: "Tú", texto: "Gracias por decirme. Prefiero preguntar antes que suponer." },
      ],
    },
  },
  {
    id: "cuando-hablar-en-grupo",
    titulo: "No saber cuándo hablar en una conversación grupal",
    resumen:
      "Quieres participar en un grupo, pero no encuentras el momento para entrar sin interrumpir.",
    contexto: "Grupo de amistades, clase o reunión de trabajo",
    categoria: "mantener-conversacion",
    ambiguedad: "alto",
    minutos: 6,
    palabrasClave: ["grupo", "turnos", "interrumpir", "participar", "hablar"],
    queEstaPasando:
      "Varias personas hablan y los turnos cambian rápido. Cuando preparas una frase, el tema ya cambió.",
    porQueConfuso:
      "Los turnos en grupo casi nunca se anuncian. Se usan pausas breves, miradas y cambios de tono que ocurren en menos de un segundo y no son iguales en todos los grupos.",
    podriaSignificar: [
      "El grupo tiene un ritmo rápido habitual y no está excluyéndote.",
      "Hay personas que hablan más por costumbre.",
      "El tema es muy conocido por unos y no por otros.",
    ],
    otrasInterpretaciones: [
      "En algunas culturas y familias, hablar encima de otra persona indica entusiasmo, no descortesía.",
      "En otros contextos, interrumpir se considera un problema serio.",
      "En reuniones de trabajo suele existir un turno más formal.",
    ],
    senales: [
      "Alguien baja el volumen o alarga la última palabra: suele indicar final de turno.",
      "Miradas que se dirigen hacia ti: puede ser una invitación a hablar.",
      "Silencio de más de dos segundos: espacio disponible.",
      "Alguien dice «¿y tú qué opinas?»: turno explícito.",
    ],
    preguntasDirectas: [
      "«¿Puedo agregar algo sobre esto?»",
      "«Cuando terminen, me gustaría contar una cosa relacionada.»",
      "«Me cuesta entrar cuando hablan rápido. ¿Me avisan cuando haya espacio?»",
    ],
    opciones: [
      {
        texto: "Anunciar tu turno antes de hablar.",
        queComunica: "Que quieres participar sin quitar el turno a otra persona.",
        quePodriaOcurrir: "Suele funcionar bien; el grupo hace espacio de forma explícita.",
      },
      {
        texto: "Escribir tu idea en el teléfono para no perderla.",
        queComunica: "Nada hacia el grupo; es una estrategia para ti.",
        quePodriaOcurrir:
          "Reduce la carga de memoria. Si alguien lo nota, puedes explicar que tomas notas.",
      },
      {
        texto: "Hablar con una sola persona del grupo en paralelo.",
        queComunica: "Que prefieres conversaciones de dos.",
        quePodriaOcurrir: "Suele ser más cómodo y sigue siendo participar.",
      },
      {
        texto: "Escuchar sin hablar.",
        queComunica: "Que estás presente a tu manera.",
        quePodriaOcurrir:
          "Alguien puede preguntarte si estás bien. Puedes responder que prefieres escuchar.",
      },
    ],
    noObligado: [
      "No estás obligado a hablar para «demostrar interés».",
      "No estás obligado a mantener contacto visual mientras hablas.",
      "No estás obligado a quedarte hasta el final.",
    ],
    cuandoLimite: [
      "Si te interrumpen sistemáticamente, puedes decir: «Me gustaría terminar la idea».",
      "Si alguien se burla de tu forma de hablar, puedes nombrarlo o retirarte.",
    ],
    cuandoAyuda: [
      "Si evitar grupos está limitando tu estudio o tu trabajo y quieres apoyos concretos.",
    ],
  },
  {
    id: "tarda-en-responder",
    titulo: "Una persona tarda mucho en responder un mensaje",
    resumen: "Enviaste un mensaje y pasaron horas o días sin respuesta.",
    contexto: "Chat, mensajería o redes",
    categoria: "chat",
    ambiguedad: "alto",
    minutos: 5,
    palabrasClave: ["mensaje", "chat", "no responde", "visto", "tiempo"],
    queEstaPasando:
      "El mensaje aparece entregado o leído, pero no hay respuesta y el tiempo transcurre.",
    porQueConfuso:
      "El «visto» indica que la aplicación mostró el mensaje, no que la persona lo leyó con atención ni que decidió no responder.",
    podriaSignificar: [
      "Abrió la notificación y luego se distrajo.",
      "Está trabajando, estudiando o durmiendo.",
      "Quiere responder con calma y aún no puede.",
      "Le cuesta responder mensajes en general.",
      "No quiere continuar la conversación en este momento.",
    ],
    otrasInterpretaciones: [
      "Algunas personas responden en minutos y otras en días; ambas son formas habituales.",
      "Las funciones ejecutivas afectan la capacidad de responder aunque exista interés.",
    ],
    senales: [
      "Publica en redes pero no responde: informa poco, publicar cuesta menos esfuerzo que responder.",
      "Responde siempre tarde a todas las personas.",
      "Responde rápido cuando necesita algo y tarde el resto del tiempo.",
    ],
    preguntasDirectas: [
      "«¿Prefieres que te escriba por otro medio?»",
      "«¿Te viene bien responder cuando puedas o prefieres que te llame?»",
      "«Me ayuda saber cuánto sueles tardar. ¿Cómo funcionas con los mensajes?»",
    ],
    opciones: [
      {
        texto: "Esperar sin enviar mensajes adicionales.",
        queComunica: "Que respetas su ritmo.",
        quePodriaOcurrir: "Puede responder más tarde. Mientras tanto, la incertidumbre sigue.",
      },
      {
        texto: "Enviar un recordatorio breve y amable.",
        queComunica: "Que el tema sigue abierto para ti.",
        quePodriaOcurrir: "Suele estar bien si es un mensaje corto y sin reproche.",
      },
      {
        texto: "Preguntar directamente por sus tiempos de respuesta.",
        queComunica: "Que prefieres acuerdos explícitos.",
        quePodriaOcurrir: "Puede reducir mucho la ansiedad futura si acuerdan algo.",
      },
      {
        texto: "Dejar de esperar y ocuparte de otra cosa.",
        queComunica: "Que no pones tu día en pausa.",
        quePodriaOcurrir: "Protege tu energía; la conversación puede retomarse después.",
      },
    ],
    noObligado: [
      "No estás obligado a responder al instante para «compensar».",
      "No estás obligado a mantener conversaciones que te agotan.",
      "No estás obligado a interpretar el «visto» como un mensaje.",
    ],
    cuandoLimite: [
      "Si alguien exige respuestas inmediatas de tu parte pero no ofrece lo mismo, puedes nombrar esa diferencia.",
      "Si te envía muchos mensajes seguidos cuando no respondes de inmediato, puedes pedir que espere.",
    ],
    cuandoAyuda: [
      "Si la espera te genera pensamientos repetitivos difíciles de detener y quieres estrategias con apoyo profesional.",
    ],
  },
  {
    id: "amabilidad-o-coqueteo",
    titulo: "Diferenciar amabilidad de coqueteo",
    resumen:
      "Alguien es cálido contigo y no sabes si es simpatía general o interés romántico.",
    contexto: "Trabajo, estudio, aplicaciones o vida cotidiana",
    categoria: "coqueteo",
    ambiguedad: "alto",
    minutos: 7,
    palabrasClave: ["coqueteo", "interés", "gusta", "amable", "romántico"],
    queEstaPasando:
      "Una persona te trata con calidez: sonríe, conversa, hace preguntas o te ayuda. No hay una declaración explícita.",
    porQueConfuso:
      "La amabilidad y el coqueteo comparten muchas conductas. La diferencia suele estar en el patrón y en la exclusividad, no en un gesto aislado.",
    podriaSignificar: [
      "Es amable con todas las personas por costumbre o por su trabajo.",
      "Le interesa tu amistad.",
      "Tiene interés romántico y espera que lo notes.",
      "Está siendo cordial en un contexto donde se espera cordialidad.",
    ],
    otrasInterpretaciones: [
      "En algunos lugares el contacto físico breve es habitual y no indica interés.",
      "En trabajos de atención al público la amabilidad es parte del rol.",
      "El coqueteo se expresa de formas muy distintas según cultura, edad y persona.",
    ],
    senales: [
      "Patrón, no un gesto único: ocurre varias veces y en distintos contextos.",
      "Exclusividad relativa: contigo hace cosas que no hace con el resto.",
      "Iniciativa: escribe primero, propone planes, busca continuidad.",
      "Reciprocidad: pregunta por ti y recuerda lo que cuentas.",
      "Ausencia de señales no es prueba de desinterés; solo es falta de datos.",
    ],
    preguntasDirectas: [
      "«Quiero preguntarte algo directo: ¿tu interés en mí es de amistad o romántico? Cualquier respuesta está bien.»",
      "«Me gustas. ¿Te gustaría que saliéramos alguna vez? Si prefieres que no, no cambia nada entre nosotros.»",
    ],
    opciones: [
      {
        texto: "Observar durante más tiempo antes de decidir.",
        queComunica: "Nada explícito; te da más información.",
        quePodriaOcurrir: "Reduces el riesgo de malinterpretar, pero la incertidumbre continúa.",
      },
      {
        texto: "Preguntar directamente, sin presionar.",
        queComunica: "Respeto y claridad.",
        quePodriaOcurrir:
          "Obtienes una respuesta concreta. Preguntar una vez es respetuoso; insistir después de un «no» no lo es.",
      },
      {
        texto: "Expresar tu interés y dejar la decisión en la otra persona.",
        queComunica: "Que eres claro y no exiges respuesta inmediata.",
        quePodriaOcurrir: "Puede aceptar, rechazar o pedir tiempo. Las tres respuestas son válidas.",
      },
      {
        texto: "No hacer nada porque la incertidumbre no te incomoda.",
        queComunica: "Que estás cómodo con el vínculo como está.",
        quePodriaOcurrir: "La relación sigue igual.",
      },
    ],
    noObligado: [
      "No estás obligado a adivinar señales sutiles.",
      "No estás obligado a corresponder al interés de otra persona.",
      "No estás obligado a mantener una amistad después de un rechazo si no te sientes cómodo.",
    ],
    cuandoLimite: [
      "Si alguien insiste después de que dijiste «no», eso ya no es coqueteo: es presión.",
      "Si el contacto físico te incomoda, puedes pedir que se detenga sin explicar por qué.",
    ],
    cuandoAyuda: [
      "Si alguien usa tu dificultad para leer señales como forma de manipularte o ridiculizarte.",
    ],
    dialogo: {
      titulo: "Ejemplo de pregunta directa y respuesta",
      lineas: [
        {
          quien: "Tú",
          texto:
            "Quiero preguntarte algo directo porque no quiero suponer: ¿lo nuestro es amistad o hay interés romántico de tu parte?",
        },
        { quien: "La otra persona", texto: "Te veo como amistad, la verdad." },
        { quien: "Tú", texto: "Gracias por la claridad. Me sirve saberlo." },
      ],
    },
  },
  {
    id: "pedir-participar",
    titulo: "Cómo pedir participar en una actividad",
    resumen: "Un grupo hace algo que te interesa y no sabes cómo unirte.",
    contexto: "Amistades, clase, trabajo o comunidad",
    categoria: "amistad",
    ambiguedad: "medio",
    minutos: 5,
    palabrasClave: ["unirse", "grupo", "invitación", "participar", "actividad"],
    queEstaPasando:
      "Se organiza algo y no recibiste una invitación explícita, aunque tampoco te excluyeron de forma clara.",
    porQueConfuso:
      "Muchas invitaciones son implícitas: se asume que quien está cerca se apunta. Ese código no está escrito en ningún sitio.",
    podriaSignificar: [
      "Asumieron que no te interesaba.",
      "Olvidaron avisarte.",
      "El plan surgió de forma espontánea entre quienes estaban presentes.",
      "El grupo es cerrado por algún motivo concreto.",
    ],
    otrasInterpretaciones: [
      "Algunas actividades tienen cupo o requisitos y no dependen de las personas.",
      "Preguntar suele ser aceptable y no se considera imponerse.",
    ],
    senales: [
      "Hablan del plan delante de ti: suele indicar apertura.",
      "Publican la actividad en un grupo del que formas parte.",
      "Cambian de tema cuando te acercas: puede indicar que es privado.",
    ],
    preguntasDirectas: [
      "«¿Puedo unirme?»",
      "«¿Es un plan abierto o solo para ustedes? Cualquier respuesta está bien.»",
      "«Me interesa. ¿Me avisan la próxima vez?»",
    ],
    opciones: [
      {
        texto: "Preguntar de forma directa si puedes unirte.",
        queComunica: "Interés claro y sin rodeos.",
        quePodriaOcurrir: "La respuesta es sí o no, y en ambos casos tendrás información real.",
      },
      {
        texto: "Pedir que te avisen en la próxima ocasión.",
        queComunica: "Que quieres estar en la lista sin condicionar el plan actual.",
        quePodriaOcurrir: "Puede facilitar futuras invitaciones.",
      },
      {
        texto: "Proponer tú una actividad.",
        queComunica: "Iniciativa.",
        quePodriaOcurrir: "Cambias el rol: dejas de esperar invitación.",
      },
      {
        texto: "No unirte y buscar espacios donde te sientas más cómodo.",
        queComunica: "Que eliges dónde inviertes tu energía.",
        quePodriaOcurrir: "Válido y a veces más sostenible.",
      },
    ],
    noObligado: [
      "No estás obligado a insistir si te dicen que no.",
      "No estás obligado a participar en todas las actividades de un grupo para pertenecer.",
    ],
    cuandoLimite: [
      "Si te invitan solo para hacerte objeto de bromas, puedes retirarte y decirlo.",
    ],
    cuandoAyuda: [
      "Si la exclusión es sostenida en el trabajo o el estudio, puede tratarse de acoso y existen canales formales.",
    ],
  },
  {
    id: "rechazar-invitacion",
    titulo: "Cómo rechazar una invitación",
    resumen: "No quieres o no puedes asistir y temes que se malinterprete.",
    contexto: "Amistades, familia o trabajo",
    categoria: "limites",
    ambiguedad: "bajo",
    minutos: 4,
    palabrasClave: ["decir no", "rechazar", "invitación", "plan", "excusa"],
    queEstaPasando: "Te invitan a algo y prefieres no ir.",
    porQueConfuso:
      "Existe la idea de que un «no» necesita justificación. No la necesita, aunque en algunos contextos se espera una frase breve de cortesía.",
    podriaSignificar: [
      "La otra persona quiere pasar tiempo contigo.",
      "Es una invitación formal que se hace a todo el grupo.",
      "Espera una respuesta para organizar cupos.",
    ],
    otrasInterpretaciones: [
      "En algunos entornos laborales, ciertas invitaciones son opcionales aunque suenen obligatorias. Puedes preguntar si la asistencia es obligatoria.",
    ],
    senales: [
      "Pide confirmación con fecha: necesita una respuesta concreta.",
      "Dice «si te apetece»: suele indicar que es opcional.",
      "Insiste después de tu «no»: eso es presión, no invitación.",
    ],
    preguntasDirectas: [
      "«¿Es obligatorio asistir o es opcional?»",
      "«¿Hasta cuándo puedo confirmar?»",
    ],
    opciones: [
      {
        texto: "«Gracias por invitarme. Esta vez no voy a ir.»",
        queComunica: "Claridad y agradecimiento, sin justificación.",
        quePodriaOcurrir: "Suele aceptarse sin problema.",
      },
      {
        texto: "«No puedo ir, pero me gustaría que hagamos algo otro día.»",
        queComunica: "Que rechazas el plan, no a la persona.",
        quePodriaOcurrir: "Mantiene el vínculo si te interesa mantenerlo.",
      },
      {
        texto: "«Los lugares con mucho ruido me agotan. Prefiero vernos en un sitio tranquilo.»",
        queComunica: "Una necesidad concreta y una alternativa.",
        quePodriaOcurrir: "Puede llevar a planes más accesibles para ti.",
      },
      {
        texto: "Aceptar por compromiso aunque no quieras ir.",
        queComunica: "Disponibilidad que quizá no tienes.",
        quePodriaOcurrir:
          "Puede generar agotamiento o cancelaciones de último momento. Es una opción, pero tiene un costo.",
      },
    ],
    noObligado: [
      "No estás obligado a dar motivos.",
      "No estás obligado a inventar excusas.",
      "No estás obligado a proponer una alternativa.",
    ],
    cuandoLimite: [
      "Si insisten después de dos negativas, puedes decir: «Ya respondí. Prefiero no repetirlo».",
    ],
    cuandoAyuda: [
      "Si te resulta imposible negarte y eso te ha llevado a situaciones que te dañaron.",
    ],
  },
  {
    id: "terminar-conversacion",
    titulo: "Cómo terminar una conversación",
    resumen: "Quieres irte y no sabes cómo cerrar sin parecer brusco.",
    contexto: "Cualquier interacción presencial o por llamada",
    categoria: "terminar-conversacion",
    ambiguedad: "medio",
    minutos: 4,
    palabrasClave: ["despedirse", "terminar", "irme", "cerrar", "adiós"],
    queEstaPasando:
      "La conversación continúa y tú ya quieres terminarla, por tiempo, por cansancio o por otra razón.",
    porQueConfuso:
      "Los cierres suelen anunciarse con señales indirectas: mirar la hora, cambiar de postura, resumir lo dicho. Si esas señales no se detectan o no se emiten, la conversación se alarga.",
    podriaSignificar: [
      "La otra persona disfruta la conversación.",
      "No detecta que quieres terminar.",
      "Espera que tú marques el cierre.",
    ],
    otrasInterpretaciones: [
      "En algunas culturas la despedida es larga y tiene varios pasos; en otras, una frase basta.",
    ],
    senales: [
      "Frases resumen: «Bueno, pues eso», «En fin».",
      "Movimiento corporal hacia la salida.",
      "Mirar la hora o el teléfono.",
    ],
    preguntasDirectas: ["«¿Cerramos aquí y seguimos otro día?»"],
    opciones: [
      {
        texto: "«Necesito irme ya. Me gustó hablar contigo.»",
        queComunica: "Cierre claro y cálido.",
        quePodriaOcurrir: "Suele funcionar bien en casi cualquier contexto.",
      },
      {
        texto: "«Me estoy cansando y necesito parar. Seguimos otro día.»",
        queComunica: "Una necesidad real y una continuidad.",
        quePodriaOcurrir: "Es honesto y no requiere más explicación.",
      },
      {
        texto: "Anunciar el final con antelación: «Tengo diez minutos».",
        queComunica: "Un marco claro desde el inicio.",
        quePodriaOcurrir: "Evita cierres incómodos porque el límite ya estaba dicho.",
      },
      {
        texto: "Irte sin decir nada.",
        queComunica: "Puede leerse como enojo, aunque no lo sea.",
        quePodriaOcurrir:
          "Podría generar confusión. Si necesitas salir de forma urgente por sobrecarga, es válido; puedes explicar después si quieres.",
      },
    ],
    noObligado: [
      "No estás obligado a quedarte hasta que la otra persona termine.",
      "No estás obligado a dar un motivo.",
    ],
    cuandoLimite: [
      "Si alguien te retiene físicamente o bloquea la salida, eso no es una conversación: busca ayuda.",
    ],
    cuandoAyuda: ["Si sales de conversaciones con agotamiento intenso de forma repetida."],
  },
  {
    id: "sarcasmo",
    titulo: "Qué hacer cuando alguien utiliza sarcasmo",
    resumen: "Alguien dice algo cuyo significado literal no coincide con su intención.",
    contexto: "Amistades, trabajo, familia o chat",
    categoria: "conflictos",
    ambiguedad: "alto",
    minutos: 5,
    palabrasClave: ["sarcasmo", "ironía", "broma", "literal", "doble sentido"],
    queEstaPasando:
      "La persona dice una frase que, tomada literalmente, no encaja con la situación. Por ejemplo: «Qué día tan maravilloso» bajo la lluvia.",
    porQueConfuso:
      "El sarcasmo depende del tono, el contexto compartido y la relación. Por escrito pierde casi todas esas pistas.",
    podriaSignificar: [
      "Está bromeando de forma amistosa.",
      "Está expresando molestia de forma indirecta.",
      "Está criticando a alguien sin decirlo abiertamente.",
      "Está diciendo la frase de forma literal y tú dudaste sin motivo.",
    ],
    otrasInterpretaciones: [
      "El sarcasmo es más frecuente en algunos países y grupos que en otros.",
      "Pedir aclaración no es un fallo: es una petición razonable de información.",
    ],
    senales: [
      "Tono exagerado o alargado.",
      "Contradicción evidente entre la frase y los hechos.",
      "Risas del grupo justo después.",
      "Emojis o «jaja» en mensajes escritos.",
    ],
    preguntasDirectas: [
      "«¿Lo dices literalmente o es una broma? Prefiero preguntar.»",
      "«No estoy seguro de haber entendido. ¿Me lo explicas directo?»",
    ],
    opciones: [
      {
        texto: "Preguntar si es literal o broma.",
        queComunica: "Que prefieres claridad.",
        quePodriaOcurrir: "La mayoría aclara sin problema.",
      },
      {
        texto: "Pedir que te hablen de forma directa en general.",
        queComunica: "Una necesidad comunicativa concreta.",
        quePodriaOcurrir: "Muchas personas cercanas se adaptan si lo saben.",
      },
      {
        texto: "Responder al contenido literal y observar la reacción.",
        queComunica: "Nada negativo; a veces genera risas.",
        quePodriaOcurrir: "Puedes descubrir el sentido por la respuesta.",
      },
      {
        texto: "Ignorar el comentario y seguir.",
        queComunica: "Que no le das importancia.",
        quePodriaOcurrir: "Evita el desgaste, aunque la duda puede quedarse.",
      },
    ],
    noObligado: [
      "No estás obligado a fingir que entendiste.",
      "No estás obligado a aceptar bromas repetidas sobre ti.",
    ],
    cuandoLimite: [
      "Si el «sarcasmo» se usa para insultarte y luego dicen «era broma», puedes decir: «No me gusta ese tipo de broma. Prefiero que no la repitas».",
    ],
    cuandoAyuda: [
      "Si en tu trabajo las burlas son constantes, puede tratarse de acoso laboral.",
    ],
  },
  {
    id: "instrucciones-ambiguas",
    titulo: "Recibir instrucciones ambiguas en el trabajo",
    resumen: "Te piden algo sin especificar qué, cómo o para cuándo.",
    contexto: "Trabajo o prácticas",
    categoria: "trabajo",
    ambiguedad: "medio",
    minutos: 6,
    palabrasClave: ["trabajo", "instrucciones", "jefe", "tarea", "claridad"],
    queEstaPasando:
      "Recibes una petición del tipo «revisa esto cuando puedas» o «dale una vuelta al informe», sin criterios concretos.",
    porQueConfuso:
      "Quien la emite suele tener en mente un resultado que no verbaliza. Asume un contexto compartido que puede no existir.",
    podriaSignificar: [
      "Confía en tu criterio y no tiene preferencia.",
      "Tiene una expectativa concreta que no explicó.",
      "Aún no sabe qué quiere.",
      "Tiene prisa y resumió demasiado.",
    ],
    otrasInterpretaciones: [
      "«Cuando puedas» significa cosas distintas según la persona: puede ser hoy o esta semana.",
      "Pedir precisión suele valorarse de forma positiva en el trabajo.",
    ],
    senales: [
      "Menciona una reunión próxima: probablemente lo necesita antes.",
      "Dice «no corre prisa» y luego pregunta el mismo día: conviene confirmar plazos por escrito.",
    ],
    preguntasDirectas: [
      "«Para hacerlo bien necesito tres datos: qué entregable esperas, en qué formato y para qué fecha.»",
      "«¿Prefieres una revisión de ortografía o una revisión de contenido?»",
      "«¿Te sirve si te lo envío el jueves a las 12?»",
    ],
    opciones: [
      {
        texto: "Pedir criterios concretos por escrito.",
        queComunica: "Profesionalidad y prevención de errores.",
        quePodriaOcurrir: "Reduce retrabajo y deja constancia del acuerdo.",
      },
      {
        texto: "Proponer tu interpretación y pedir confirmación.",
        queComunica: "Iniciativa con verificación.",
        quePodriaOcurrir: "Suele funcionar cuando la persona está ocupada.",
      },
      {
        texto: "Entregar una primera versión corta y pedir feedback.",
        queComunica: "Avance sin invertir tiempo de más.",
        quePodriaOcurrir: "Permite corregir el rumbo pronto.",
      },
      {
        texto: "Hacerlo según tu criterio sin preguntar.",
        queComunica: "Autonomía.",
        quePodriaOcurrir:
          "Puede coincidir con lo esperado o requerir rehacerlo. Depende del contexto y de la persona.",
      },
    ],
    noObligado: [
      "No estás obligado a adivinar expectativas no dichas.",
      "No estás obligado a aceptar plazos imposibles sin decirlo.",
    ],
    cuandoLimite: [
      "Si te asignan tareas fuera de tu rol de forma constante, puedes pedir que se revise por escrito.",
    ],
    cuandoAyuda: [
      "Si necesitas ajustes razonables, en muchos países existen figuras legales que los respaldan.",
    ],
    dialogo: {
      titulo: "Ejemplo de petición de claridad",
      lineas: [
        { quien: "Responsable", texto: "Dale una vuelta al informe cuando puedas." },
        {
          quien: "Tú",
          texto:
            "Claro. Para no equivocarme: ¿reviso solo redacción o también los datos? ¿Lo necesitas antes del viernes?",
        },
        { quien: "Responsable", texto: "Redacción, y para el jueves." },
      ],
    },
  },
  {
    id: "cambio-de-planes",
    titulo: "Manejar un cambio inesperado de planes",
    resumen: "Algo acordado cambia con poco aviso y sientes malestar o bloqueo.",
    contexto: "Amistades, familia o trabajo",
    categoria: "regulacion",
    ambiguedad: "bajo",
    minutos: 5,
    palabrasClave: ["cambio", "planes", "cancelan", "imprevisto", "rutina"],
    queEstaPasando:
      "Un plan que ya habías organizado mentalmente cambia de horario, lugar o forma.",
    porQueConfuso:
      "El malestar no siempre viene del plan nuevo, sino del esfuerzo de rehacer la preparación interna. Desde fuera puede parecer una reacción desproporcionada, pero tiene una causa concreta.",
    podriaSignificar: [
      "Surgió un imprevisto real.",
      "La otra persona organiza con flexibilidad y no midió el impacto.",
      "El cambio se decidió en grupo sin consultarte.",
    ],
    otrasInterpretaciones: [
      "Para algunas personas cambiar planes tiene un costo bajo; suponen que para todas es igual.",
    ],
    senales: [
      "Avisan con antelación y preguntan si te viene bien: consideración.",
      "Cambian planes de forma repetida y sin avisar: puedes hablarlo.",
    ],
    preguntasDirectas: [
      "«¿El cambio es definitivo o todavía puede moverse?»",
      "«Me ayuda saberlo con antelación. ¿Puedes avisarme en cuanto lo sepas la próxima vez?»",
    ],
    opciones: [
      {
        texto: "Pedir unos minutos antes de responder.",
        queComunica: "Que necesitas procesar, no que estés enojado.",
        quePodriaOcurrir: "Suele evitar respuestas de las que después te arrepientas.",
      },
      {
        texto: "Aceptar el cambio y ajustar tu preparación.",
        queComunica: "Flexibilidad.",
        quePodriaOcurrir: "Puede costar energía; considera reservar tiempo de recuperación.",
      },
      {
        texto: "Decir que ya no participarás con el nuevo formato.",
        queComunica: "Un límite claro.",
        quePodriaOcurrir: "Es válido. Puedes decirlo sin enojo y sin justificarlo en detalle.",
      },
      {
        texto: "Proponer una alternativa que te funcione.",
        queComunica: "Interés en participar con condiciones viables.",
        quePodriaOcurrir: "A veces el grupo acepta la propuesta.",
      },
    ],
    noObligado: [
      "No estás obligado a adaptarte de inmediato.",
      "No estás obligado a ocultar que los cambios te afectan.",
    ],
    cuandoLimite: [
      "Si alguien cambia planes constantemente y luego te culpa por tu reacción, puedes hablarlo o reducir el contacto.",
    ],
    cuandoAyuda: [
      "Si los cambios te provocan crisis frecuentes, un apoyo profesional puede ayudarte a construir estrategias.",
    ],
  },
  {
    id: "sobrecarga-en-lugar",
    titulo: "Decir que un lugar causa sobrecarga sensorial",
    resumen: "Estás en un sitio con demasiado ruido, luz o gente y necesitas salir.",
    contexto: "Restaurantes, fiestas, transporte, oficinas",
    categoria: "sobrecarga",
    ambiguedad: "bajo",
    minutos: 5,
    palabrasClave: ["ruido", "sobrecarga", "luz", "salir", "sensorial"],
    queEstaPasando:
      "El entorno supera lo que tu sistema sensorial puede procesar con comodidad. Puede aparecer dolor de cabeza, irritabilidad, dificultad para hablar o necesidad urgente de salir.",
    porQueConfuso:
      "La sobrecarga no siempre se ve desde fuera. Otras personas pueden estar cómodas en el mismo lugar y no entender la diferencia.",
    podriaSignificar: [
      "El nivel de estímulo es alto de forma objetiva.",
      "Llevas mucho tiempo sin pausas y tu margen es menor hoy.",
      "Hay hambre, cansancio o dolor sumándose al entorno.",
    ],
    otrasInterpretaciones: [
      "No necesitas justificar tu umbral sensorial comparándolo con el de otras personas.",
    ],
    senales: [
      "Señales tempranas: te cuesta seguir la conversación, subes o bajas el volumen de tu voz, aumenta el movimiento repetitivo.",
      "Señales medias: irritabilidad, visión que «pesa», ganas de taparte los oídos.",
      "Señales avanzadas: bloqueo del habla, necesidad urgente de salir.",
    ],
    preguntasDirectas: [
      "«¿Hay una zona más tranquila?»",
      "«¿Podemos bajar la música?»",
      "«Voy a salir diez minutos y vuelvo.»",
    ],
    opciones: [
      {
        texto: "«Este lugar tiene mucho ruido para mí. Voy a salir un momento.»",
        queComunica: "Información concreta, sin dramatizar.",
        quePodriaOcurrir: "La mayoría lo acepta con normalidad.",
      },
      {
        texto: "Usar tapones o audífonos.",
        queComunica: "Que estás gestionando tu entorno.",
        quePodriaOcurrir: "Reduce el estímulo sin salir del lugar.",
      },
      {
        texto: "Activar tu plan de salida y marcharte.",
        queComunica: "Que priorizas tu bienestar.",
        quePodriaOcurrir: "Prevé una recuperación más corta que si esperas al límite.",
      },
      {
        texto: "Quedarte y aguantar sin decir nada.",
        queComunica: "Nada hacia fuera.",
        quePodriaOcurrir:
          "Puede llevar a un meltdown o shutdown y a varios días de recuperación. Es una opción, pero con un costo alto.",
      },
    ],
    noObligado: [
      "No estás obligado a explicar tu diagnóstico para pedir un ajuste.",
      "No estás obligado a quedarte hasta el final.",
      "No estás obligado a enmascarar tu malestar.",
    ],
    cuandoLimite: [
      "Si alguien insiste en que «no es para tanto», puedes decir: «Es mi experiencia y necesito salir».",
    ],
    cuandoAyuda: [
      "Si la sobrecarga te impide trabajar o estudiar, existen ajustes razonables que puedes solicitar.",
    ],
  },
  {
    id: "presion-o-manipulacion",
    titulo: "Reconocer presión o manipulación",
    resumen: "Alguien insiste, culpabiliza o apura para que hagas algo que no quieres.",
    contexto: "Relaciones, amistades, trabajo o internet",
    categoria: "seguridad",
    ambiguedad: "medio",
    minutos: 8,
    palabrasClave: ["manipulación", "presión", "chantaje", "culpa", "abuso"],
    queEstaPasando:
      "Dijiste que no, o dudaste, y la otra persona intenta cambiar tu decisión mediante insistencia, culpa, prisa o promesas.",
    porQueConfuso:
      "La manipulación suele mezclarse con afecto real y con frases que suenan razonables. Rara vez aparece como una amenaza evidente.",
    podriaSignificar: [
      "Insistencia sin mala intención por parte de alguien que no registra tu «no».",
      "Un patrón deliberado para conseguir algo de ti.",
      "Una diferencia de expectativas que puede hablarse.",
    ],
    otrasInterpretaciones: [
      "Una sola insistencia no define a una persona. Un patrón repetido sí es información relevante.",
    ],
    senales: [
      "Prisa artificial: «Tiene que ser ahora o nunca».",
      "Culpa: «Si me quisieras, lo harías».",
      "Aislamiento: critica a tus personas cercanas.",
      "Secreto: «No se lo cuentes a nadie».",
      "Negación de tu percepción: «Eso no pasó», «Estás exagerando» (gaslighting).",
      "Recompensas y castigos alternados.",
      "Pide dinero, datos, fotos o contraseñas.",
    ],
    preguntasDirectas: [
      "«Ya dije que no. ¿Por qué sigues insistiendo?»",
      "«Necesito tiempo para decidir. ¿Hay algún motivo real para la prisa?»",
      "«Prefiero consultarlo con alguien de confianza antes de responder.»",
    ],
    opciones: [
      {
        texto: "Repetir tu «no» sin dar explicaciones nuevas.",
        queComunica: "Que tu decisión no está en negociación.",
        quePodriaOcurrir:
          "Quien respeta límites se detiene. Quien insiste te está dando información importante.",
      },
      {
        texto: "Poner tiempo de por medio antes de decidir.",
        queComunica: "Que no aceptas decisiones apresuradas.",
        quePodriaOcurrir: "La prisa artificial suele desaparecer o intensificarse; ambas cosas informan.",
      },
      {
        texto: "Contarlo a una persona de confianza.",
        queComunica: "Que rompes el secreto, que es la condición donde el abuso se sostiene.",
        quePodriaOcurrir: "Obtienes una segunda perspectiva y apoyo.",
      },
      {
        texto: "Cortar el contacto y bloquear.",
        queComunica: "Un límite firme.",
        quePodriaOcurrir: "Es válido en cualquier momento y no requiere aviso previo.",
      },
    ],
    noObligado: [
      "No estás obligado a justificar un «no».",
      "No estás obligado a dar una segunda oportunidad.",
      "No estás obligado a responder mensajes de quien no respeta tus límites.",
      "No estás obligado a enviar fotos, dinero ni datos personales a nadie.",
    ],
    cuandoLimite: [
      "En cuanto notes insistencia después de un «no» claro.",
      "Cuando te pidan secreto sobre algo que te incomoda.",
      "Cuando alguien condicione su afecto a que hagas algo.",
    ],
    cuandoAyuda: [
      "Si hay amenazas, chantaje con imágenes, presión sexual o violencia, busca ayuda de inmediato.",
      "Si estás en peligro inmediato, contacta con los servicios de emergencia de tu país o con una persona de confianza.",
    ],
    dialogo: {
      titulo: "Ejemplo de respuesta ante insistencia",
      lineas: [
        { quien: "La otra persona", texto: "Si de verdad confiaras en mí, me lo mandarías." },
        {
          quien: "Tú",
          texto: "Ya dije que no. La confianza no se demuestra haciendo algo que no quiero.",
        },
        { quien: "La otra persona", texto: "Solo era una broma, no exageres." },
        { quien: "Tú", texto: "Voy a terminar la conversación aquí." },
      ],
    },
  },
  {
    id: "tdah-perder-hilo",
    titulo: "Perdiste el hilo de una conversación grupal",
    resumen:
      "El grupo habla de varios temas a la vez y tu atención salta a otra cosa. Cuando vuelves, no sabes de qué están hablando.",
    contexto: "Reunión, clase o conversación por chat",
    categoria: "tdah-atencion",
    ambiguedad: "medio",
    minutos: 5,
    palabrasClave: ["distraerse", "perderse", "hilo", "atención", "grupo"],
    queEstaPasando:
      "Tu atención se movió hacia un estímulo interno o externo y, al volver, el tema ya cambió. Esto no significa que no te importe la conversación.",
    porQueConfuso:
      "En grupos los temas cambian rápido y sin aviso. Las personas con TDAH/ADD notamos más el salto porque el retorno cuesta más esfuerzo.",
    podriaSignificar: [
      "La conversación avanzó mientras tu atención estaba en otra parte.",
      "Alguien cambió de tema sin señalarlo.",
      "El ambiente tenía demasiados estímulos y tu cerebro priorizó uno de ellos.",
    ],
    otrasInterpretaciones: [
      "Algunas personas usan cambios de tema como forma de conversar; no es descortesía.",
      "Puedes pedir que te pongan al día sin que eso sea raro.",
    ],
    senales: [
      "Dejaste de escuchar en un punto concreto y sabes cuál fue.",
      "El grupo ríe o reacciona a algo que no escuchaste.",
      "Alguien usa una palabra clave que no reconoces.",
    ],
    preguntasDirectas: [
      "«Perdí el hilo. ¿De qué están hablando ahora?»",
      "«¿Volvieron al tema anterior o empezaron otro?»",
      "«Me distraje un segundo. ¿Me resumen en una frase?»",
    ],
    opciones: [
      {
        texto: "Pedir un resumen breve y sin disculparte.",
        queComunica: "Que necesitas información, no que la conversación te aburrió.",
        quePodriaOcurrir: "La mayoría de las personas responde con normalidad.",
      },
      {
        texto: "Escuchar un poco más para reconstruir el tema.",
        queComunica: "Nada explícito; es una estrategia personal.",
        quePodriaOcurrir: "Puede funcionar si el tema es reconocible, pero no si cambian de nuevo.",
      },
      {
        texto: "Anotar la palabra clave y buscarla después.",
        queComunica: "Que prefieres no interrumpir.",
        quePodriaOcurrir: "Te quedas con la duda, pero evitas cortar el ritmo del grupo.",
      },
      {
        texto: "Retirarte de la conversación si ya te cuesta mucho.",
        queComunica: "Que cuidas tu energía.",
        quePodriaOcurrir: "Es válido; puedes retomar en otro momento o con una persona.",
      },
    ],
    noObligado: [
      "No estás obligado a fingir que entiendes.",
      "No estás obligado a disculparte por cómo funciona tu atención.",
      "No estás obligado a quedarte en una conversación que ya no puedes seguir.",
    ],
    cuandoLimite: [
      "Si alguien se burla de que te distrajiste, puedes nombrarlo o alejarte.",
      "Si te presionan para prestar atención de una forma específica, puedes decir que tu forma es distinta.",
    ],
    cuandoAyuda: [
      "Si perder el hilo te ocurre con frecuencia y afecta tu trabajo o estudios.",
      "Si sientes vergüenza intensa cada vez que pides aclaraciones.",
    ],
    dialogo: {
      titulo: "Pedir el hilo de vuelta",
      lineas: [
        { quien: "Tú", texto: "Perdí el hilo cuando hablaron del presupuesto. ¿De qué siguen ahora?" },
        { quien: "La otra persona", texto: "Ahora discutimos la fecha de entrega." },
        { quien: "Tú", texto: "Gracias. Si me pierdo otra vez, me avisan." },
      ],
    },
  },
  {
    id: "tdah-interrumpir",
    titulo: "Interrumpiste sin querer",
    resumen:
      "Estás conversando y una idea surge con urgencia. La dices en voz alta antes de que la otra persona termine.",
    contexto: "Conversación individual o grupal",
    categoria: "tdah-impulsos",
    ambiguedad: "medio",
    minutos: 5,
    palabrasClave: ["interrumpir", "impulso", "idea", "urgente", "hablar"],
    queEstaPasando:
      "Un pensamiento se activó con tanta intensidad que salió antes de que filtraras el turno. No siempre es falta de respeto; a veces es dificultad para retener la idea.",
    porQueConfuso:
      "Interrumpir se lee como descortesía, pero en el TDAH/ADD puede deberse a miedo a olvidar la idea, no a despreciar al otro.",
    podriaSignificar: [
      "La idea tenía mucha carga emocional o creativa para ti.",
      "Te costó contener el impulso de hablar.",
      "El ritmo de la conversación te llevó a hablar en un espacio que no era el tuyo.",
    ],
    otrasInterpretaciones: [
      "Algunas personas interrumpen como señal de entusiasmo.",
      "En ciertos contextos, interrumpir es normal; en otros, se considera grave.",
    ],
    senales: [
      "La otra persona dejó de hablar y te miró.",
      "Alguien dijo «déjame terminar».",
      "Sientes que hablaste demasiado rápido.",
    ],
    preguntasDirectas: [
      "«Perdón, te interrumpí. ¿Qué ibas a decir?»",
      "«¿Me avisas si hablo antes de que termines? Me cuesta contener las ideas.»",
      "«¿Puedo anotar esto antes de que se me olvide y seguimos contigo?»",
    ],
    opciones: [
      {
        texto: "Pedir disculpas brevemente y devolver el turno.",
        queComunica: "Que reconoces la interrupción y respetas su turno.",
        quePodriaOcurrir: "La mayoría lo agradece y la conversación continúa.",
      },
      {
        texto: "Explicar que te cuesta retener ideas y pedir ayuda.",
        queComunica: "Que no fue intencional y que buscas una solución conjunta.",
        quePodriaOcurrir: "La otra persona puede ofrecerte espacios para anotar o avisarte.",
      },
      {
        texto: "Anotar la idea y seguir escuchando.",
        queComunica: "Que no exiges hablar en ese instante.",
        quePodriaOcurrir: "Te libera de la urgencia de recordar.",
      },
      {
        texto: "No decir nada y dejar que la idea se vaya.",
        queComunica: "Que priorizas el turno del otro.",
        quePodriaOcurrir: "Pierdes la idea, pero mantienes el ritmo social.",
      },
    ],
    noObligado: [
      "No estás obligado a justificar tu forma de procesar las ideas.",
      "No estás obligado a reprimir todas tus intervenciones.",
      "No estás obligado a aceptar que te traten con desprecio por interrumpir.",
    ],
    cuandoLimite: [
      "Si alguien te grita o humilla por interrumpir.",
      "Si te dicen que no te dejarán hablar hasta que aprendas a no hacerlo.",
    ],
    cuandoAyuda: [
      "Si las interrupciones te generan conflictos recurrentes.",
      "Si sientes que no puedes controlar el impulso y te afecta emocionalmente.",
    ],
    dialogo: {
      titulo: "Reparar una interrupción",
      lineas: [
        { quien: "Tú", texto: "Perdón, te corté. ¿Qué ibas a decir?" },
        { quien: "La otra persona", texto: "No pasa nada. Decía que…" },
        { quien: "Tú", texto: "Gracias. A veces se me escapan las ideas antes de tiempo." },
      ],
    },
  },
  {
    id: "tdah-hiperfoco-social",
    titulo: "Te metiste tanto en un tema que olvidaste revisar si la otra persona sigue interesada",
    resumen:
      "Hablas de algo que te apasiona y de pronto notas que la otra persona responde con monosílabos o mira el reloj.",
    contexto: "Conversación individual o grupal",
    categoria: "tdah-hiperfoco",
    ambiguedad: "medio",
    minutos: 6,
    palabrasClave: ["hiperfoco", "monopolizar", "pasión", "tema", "interés"],
    queEstaPasando:
      "Entraste en un estado de hiperfoco: el tema te absorbió y la señales sociales de la otra persona pasaron a segundo plano.",
    porQueConfuso:
      "El entusiasmo genuino se puede leer como monopolio de la conversación. La otra persona puede no saber cómo decir que quiere cambiar de tema.",
    podriaSignificar: [
      "La otra persona sigue interesada pero cansada.",
      "La otra persona no entiende el tema y no sabe cómo decirlo.",
      "Llevas más tiempo del que la situación permite.",
    ],
    otrasInterpretaciones: [
      "Algunas personas disfrutan escuchar a alguien apasionado.",
      "En otros contextos, hablar mucho de un tema se considera dominante.",
    ],
    senales: [
      "La otra persona deja de hacer preguntas.",
      "Sus respuestas son de una sola palabra.",
      "Mira el teléfono, el reloj o a su alrededor.",
      "Cambia de postura o da un paso atrás.",
    ],
    preguntasDirectas: [
      "«Me estoy extendiendo mucho. ¿Quieres que siga o cambiamos de tema?»",
      "«Este tema me apasiona. ¿Te interesa o prefiero resumir?»",
      "«¿Te cuento la versión corta?»",
    ],
    opciones: [
      {
        texto: "Pausar y preguntar si quiere seguir escuchando.",
        queComunica: "Que valoras su interés y no asumes que quiere seguir.",
        quePodriaOcurrir: "Te da una respuesta honesta y evitas seguir solo.",
      },
      {
        texto: "Resumir en una frase y ofrecer detalles si quiere.",
        queComunica: "Que puedes ajustar la profundidad.",
        quePodriaOcurrir: "La otra persona puede pedir más o agradecer el resumen.",
      },
      {
        texto: "Cambiar de tema y preguntarle por algo suyo.",
        queComunica: "Que la conversación es de dos direcciones.",
        quePodriaOcurrir: "Recupera la reciprocidad.",
      },
      {
        texto: "Seguir hablando del tema si la otra persona sigue participando.",
        queComunica: "Que el interés es mutuo.",
        quePodriaOcurrir: "Puede ser una conversación enriquecedora.",
      },
    ],
    noObligado: [
      "No estás obligado a cortar tu entusiasmo por completo.",
      "No estás obligado a hablar de temas que no te interesen para compensar.",
      "No estás obligado a interpretar cada señal como rechazo.",
    ],
    cuandoLimite: [
      "Si alguien te interrumpe de forma grosera para obligarte a callar.",
      "Si te culpan de «hablar demasiado» de forma recurrente sin querer entender.",
    ],
    cuandoAyuda: [
      "Si el hiperfoco te impide mantener amistades o relaciones.",
      "Si sientes vergüenza intensa después de notar que hablaste mucho.",
    ],
    dialogo: {
      titulo: "Ajustar la profundidad del tema",
      lineas: [
        { quien: "Tú", texto: "Me doy cuenta de que estoy hablando mucho de esto. ¿Te interesa o resumo?" },
        { quien: "La otra persona", texto: "La verdad es que no entiendo mucho del tema." },
        { quien: "Tú", texto: "Vale. Cuéntame qué has hecho esta semana." },
      ],
    },
  },
  {
    id: "tdah-olvidar-compromiso",
    titulo: "Olvidaste un compromiso que habías prometido",
    resumen:
      "Te escriben preguntando dónde estás. Te das cuenta de que acordaste algo y no lo recordaste.",
    contexto: "Amistades, familia, trabajo o estudio",
    categoria: "tdah-organizacion",
    ambiguedad: "bajo",
    minutos: 5,
    palabrasClave: ["olvidar", "compromiso", "recordar", "cita", "plan"],
    queEstaPasando:
      "La memoria prospectiva (recordar hacer cosas en el futuro) puede ser difícil con TDAH/ADD. El olvido no equivale a falta de importancia.",
    porQueConfuso:
      "Otras personas pueden interpretar el olvido como desinterés o irresponsabilidad. Explicir la diferencia ayuda a reparar y a prevenir.",
    podriaSignificar: [
      "El compromiso no quedó anclado en un recordatorio visible.",
      "Hubo un cambio de contexto que borró la intención.",
      "Dijiste que sí en el momento sin revisar tu disponibilidad real.",
    ],
    otrasInterpretaciones: [
      "Algunas personas usan calendarios y alarmas como apoyo, no como señal de irresponsabilidad.",
      "Pedir que te envíen recordatorios puede ser una solución práctica.",
    ],
    senales: [
      "Te escriben o llaman preguntando si vas.",
      "Ves el mensaje original y te das cuenta del error.",
      "Sientes un golpe de adrenalina al recordar.",
    ],
    preguntasDirectas: [
      "«Tienes razón, lo olvidé. ¿Aún puedo sumarme o lo movemos?»",
      "«Me cuesta recordar sin recordatorio. ¿Puedes enviarme un mensaje antes la próxima vez?»",
      "«¿A qué hora quedamos exactamente? Quiero ver si alcanzo.»",
    ],
    opciones: [
      {
        texto: "Reconocer el olvido sin excusas largas y proponer una solución.",
        queComunica: "Responsabilidad y voluntad de reparar.",
        quePodriaOcurrir: "La otra persona puede aceptar o estar molesta; ambas son válidas.",
      },
      {
        texto: "Pedir un sistema de recordatorios conjunto.",
        queComunica: "Que necesitas apoyos externos, no que no te importe.",
        quePodriaOcurrir: "Mejora la coordinación futura.",
      },
      {
        texto: "Revisar si dijiste sí sin querer y aclarar tu disponibilidad real.",
        queComunica: "Honestidad sobre tus límites.",
        quePodriaOcurrir: "Puede generar una conversación incómoda pero necesaria.",
      },
      {
        texto: "No responder de inmediato si estás sobrecargado.",
        queComunica: "Que necesitas calmarte antes de reparar.",
        quePodriaOcurrir: "Es válido, pero avisa que vas a responder en cuanto puedas.",
      },
    ],
    noObligado: [
      "No estás obligado a inventar una excusa para proteger la imagen.",
      "No estás obligado a aceptar que te traten como irresponsable.",
      "No estás obligado a compensar con algo que no puedas cumplir.",
    ],
    cuandoLimite: [
      "Si alguien usa tus olvidos para humillarte o controlarte.",
      "Si te exigen recordar sin permitirte usar apoyos.",
    ],
    cuandoAyuda: [
      "Si los olvidos son frecuentes y afectan trabajo, estudios o relaciones importantes.",
      "Si sientes mucha culpa que te impide reparar.",
    ],
    dialogo: {
      titulo: "Reparar un olvido",
      lineas: [
        { quien: "La otra persona", texto: "¿No venías hoy?" },
        { quien: "Tú", texto: "Lo siento, se me pasó. ¿Aún estás por aquí o lo movemos?" },
        { quien: "La otra persona", texto: "Ya me voy. Quedemos otro día." },
        { quien: "Tú", texto: "Vale. Te pido que me mandes un recordatorio un día antes, si puedes." },
      ],
    },
  },
  {
    id: "tdah-rechazo-frustracion",
    titulo: "Reaccionaste con mucha intensidad ante una corrección pequeña",
    resumen:
      "Alguien te señaló un error o un cambio menor y sentiste una ola de frustración, vergüenza o enfado que te sorprendió a ti mismo.",
    contexto: "Trabajo, estudio o familia",
    categoria: "tdah-regulacion",
    ambiguedad: "medio",
    minutos: 6,
    palabrasClave: ["frustración", "corrección", "rechazo", "emoción", "intensa"],
    queEstaPasando:
      "La sensibilidad al rechazo a la frustración (RSD) es común en TDAH/ADD. El cerebro interpreta la corrección como una amenaza emocional mayor de lo que es objetivamente.",
    porQueConfuso:
      "La reacción puede parecer desproporcionada para quien observa, pero para quien la siente es real y abrumadora. No es «exagerar».",
    podriaSignificar: [
      "La corrección tocó una zona de inseguridad previa.",
      "Acumulaste estrés previo y esa fue la gota que derramó el vaso.",
      "Tu sistema nervioso respondió antes de que pudieras pensar.",
    ],
    otrasInterpretaciones: [
      "Algunas personas con TDAH/ADD tienen respuestas emocionales más rápidas e intensas.",
      "Nombrar la reacción puede reducir su impacto.",
    ],
    senales: [
      "Calor en el rostro, taquicardia o tensión muscular.",
      "Ganas de defenderte fuertemente o de alejarte.",
      "Pensamientos repetitivos sobre lo que dijeron.",
    ],
    preguntasDirectas: [
      "«Necesito un minuto antes de responder. No es por ti.»",
      "«¿Puedes decirme qué parte necesitas que cambie exactamente?»",
      "«Me afectó más de lo que esperaba. Vuelvo enseguida.»",
    ],
    opciones: [
      {
        texto: "Pedir una pausa breve antes de seguir.",
        queComunica: "Que no ignoras el mensaje, pero necesitas regulararte.",
        quePodriaOcurrir: "Te da espacio para bajar la intensidad.",
      },
      {
        texto: "Preguntar exactamente qué se espera.",
        queComunica: "Que quieres entender la corrección concreta.",
        quePodriaOcurrir: "Convierte la crítica vaga en una instrucción accionable.",
      },
      {
        texto: "Nombrar que la corrección te afectó, sin culpar.",
        queComunica: "Honestidad emocional.",
        quePodriaOcurrir: "Puede generar comprensión o incomodidad; ambas son información.",
      },
      {
        texto: "Alejarte del lugar hasta sentirte mejor.",
        queComunica: "Que cuidas tu regulación.",
        quePodriaOcurrir: "Evitas decir algo que luego lamentes.",
      },
    ],
    noObligado: [
      "No estás obligado a aceptar correcciones agresivas como si fueran neutras.",
      "No estás obligado a explicar tu reacción en el momento exacto.",
      "No estás obligado a suprimir la emoción para parecer profesional.",
    ],
    cuandoLimite: [
      "Si la corrección incluye humillación, comparaciones o gritos.",
      "Si alguien usa tu reacción emocional para descalificarte.",
    ],
    cuandoAyuda: [
      "Si las respuestas intensas son frecuentes y te agotan.",
      "Si evitas recibir feedback por miedo a tu propia reacción.",
    ],
    dialogo: {
      titulo: "Regularse ante una corrección",
      lineas: [
        { quien: "La otra persona", texto: "Este dato está mal. Tienes que revisarlo." },
        { quien: "Tú", texto: "Vale. Necesito un minuto para procesarlo y luego te pregunto qué corregir." },
        { quien: "La otra persona", texto: "Está bien." },
        { quien: "Tú", texto: "Gracias. Vuelvo enseguida." },
      ],
    },
  },
];

export const situaciones: Situacion[] = [
  ...situacionesBase,
  ...iniciarConversacionExtra,
];

export const situacionPorId = (id: string) => situaciones.find((s) => s.id === id);

export const etiquetaAmbiguedad: Record<Ambiguedad, string> = {
  bajo: "Ambigüedad baja",
  medio: "Ambigüedad media",
  alto: "Ambigüedad alta",
};