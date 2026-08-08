export type GuionCategoriaId =
  | "iniciar"
  | "aclarar"
  | "decir-no"
  | "terminar"
  | "espacio"
  | "sensorial"
  | "instrucciones"
  | "malentendido"
  | "romantico"
  | "rechazar"
  | "consentimiento"
  | "incomodidad"
  | "ayuda"
  | "tdah-atencion"
  | "tdah-hiperfoco"
  | "tdah-impulsos"
  | "tdah-organizacion"
  | "tdah-regulacion";

export interface GuionCategoria {
  id: GuionCategoriaId;
  nombre: string;
}

export const guionCategorias: GuionCategoria[] = [
  { id: "iniciar", nombre: "Iniciar una conversación" },
  { id: "aclarar", nombre: "Pedir aclaraciones" },
  { id: "decir-no", nombre: "Decir que no" },
  { id: "terminar", nombre: "Terminar una conversación" },
  { id: "espacio", nombre: "Pedir espacio" },
  { id: "sensorial", nombre: "Explicar una necesidad sensorial" },
  { id: "instrucciones", nombre: "Solicitar instrucciones claras" },
  { id: "malentendido", nombre: "Resolver un malentendido" },
  { id: "romantico", nombre: "Preguntar por interés romántico" },
  { id: "rechazar", nombre: "Rechazar una invitación" },
  { id: "consentimiento", nombre: "Pedir consentimiento" },
  { id: "incomodidad", nombre: "Comunicar incomodidad" },
  { id: "ayuda", nombre: "Solicitar ayuda" },
  { id: "tdah-atencion", nombre: "Atención y distracción" },
  { id: "tdah-hiperfoco", nombre: "Hiperfoco y transiciones" },
  { id: "tdah-impulsos", nombre: "Impulsos e interrupciones" },
  { id: "tdah-organizacion", nombre: "Organización y compromisos" },
  { id: "tdah-regulacion", nombre: "Regulación emocional y TDAH" },
];

export interface Guion {
  id: string;
  categoria: GuionCategoriaId;
  texto: string;
  cuandoUsarlo: string;
}

export const guiones: Guion[] = [
  {
    id: "g-iniciar-1",
    categoria: "iniciar",
    texto: "Hola. No nos conocemos mucho, pero me interesó lo que dijiste antes. ¿Te puedo preguntar algo sobre eso?",
    cuandoUsarlo: "Cuando quieres empezar con un tema concreto en lugar de charla general.",
  },
  {
    id: "g-iniciar-2",
    categoria: "iniciar",
    texto: "Hola, soy [nombre]. Me cuesta iniciar conversaciones, así que voy directo: ¿te gusta [tema]?",
    cuandoUsarlo: "Cuando prefieres nombrar la dificultad en lugar de disimularla.",
  },
  {
    id: "g-iniciar-3",
    categoria: "iniciar",
    texto: "¿Te importa si me siento aquí? Si prefieres estar solo, no hay problema.",
    cuandoUsarlo: "Cuando quieres acercarte dejando una salida clara a la otra persona.",
  },
  {
    id: "g-aclarar-1",
    categoria: "aclarar",
    texto: "No estoy seguro de haber entendido. ¿Podrías explicarlo de forma más directa?",
    cuandoUsarlo: "Cuando el mensaje fue indirecto o metafórico.",
  },
  {
    id: "g-aclarar-2",
    categoria: "aclarar",
    texto: "Cuando dices eso, ¿lo dices literalmente o es una broma?",
    cuandoUsarlo: "Ante sarcasmo, ironía o doble sentido.",
  },
  {
    id: "g-aclarar-3",
    categoria: "aclarar",
    texto: "Voy a repetir lo que entendí para confirmar: [resumen]. ¿Es correcto?",
    cuandoUsarlo: "Para verificar acuerdos importantes.",
  },
  {
    id: "g-no-1",
    categoria: "decir-no",
    texto: "No, gracias. No voy a hacerlo.",
    cuandoUsarlo: "Cuando quieres una negativa breve y sin justificación.",
  },
  {
    id: "g-no-2",
    categoria: "decir-no",
    texto: "Ya respondí que no. Prefiero no volver a hablar del tema.",
    cuandoUsarlo: "Cuando alguien insiste después de tu primera negativa.",
  },
  {
    id: "g-no-3",
    categoria: "decir-no",
    texto: "Necesito pensarlo antes de responder. Te contesto [momento concreto].",
    cuandoUsarlo: "Cuando te presionan para decidir rápido.",
  },
  {
    id: "g-terminar-1",
    categoria: "terminar",
    texto: "Me agrada conversar contigo, pero ahora necesito descansar.",
    cuandoUsarlo: "Cuando quieres cerrar sin que parezca rechazo personal.",
  },
  {
    id: "g-terminar-2",
    categoria: "terminar",
    texto: "Tengo que irme ya. Seguimos otro día.",
    cuandoUsarlo: "Cierre neutro que funciona en casi cualquier contexto.",
  },
  {
    id: "g-terminar-3",
    categoria: "terminar",
    texto: "Antes de empezar te aviso: tengo unos [X] minutos.",
    cuandoUsarlo: "Para poner el límite al inicio y evitar cierres incómodos.",
  },
  {
    id: "g-espacio-1",
    categoria: "espacio",
    texto: "Necesito un rato a solas. No es por ti, y vuelvo cuando esté mejor.",
    cuandoUsarlo: "Cuando necesitas pausa y quieres evitar malentendidos.",
  },
  {
    id: "g-espacio-2",
    categoria: "espacio",
    texto: "Voy a salir diez minutos a un lugar tranquilo. Ahora vuelvo.",
    cuandoUsarlo: "En eventos, reuniones o clases.",
  },
  {
    id: "g-sensorial-1",
    categoria: "sensorial",
    texto: "El ruido de aquí me agota bastante. ¿Podemos movernos a un sitio más tranquilo?",
    cuandoUsarlo: "Para pedir un cambio concreto de entorno.",
  },
  {
    id: "g-sensorial-2",
    categoria: "sensorial",
    texto: "Voy a usar audífonos un rato. Sigo escuchando, solo bajo el ruido de fondo.",
    cuandoUsarlo: "Para explicar una herramienta sensorial sin dar detalles médicos.",
  },
  {
    id: "g-sensorial-3",
    categoria: "sensorial",
    texto: "Prefiero que no me toquen el hombro sin avisar. Me sobresalta.",
    cuandoUsarlo: "Para pedir un ajuste sobre contacto físico.",
  },
  {
    id: "g-instr-1",
    categoria: "instrucciones",
    texto:
      "Para hacerlo bien necesito tres datos: qué esperas exactamente, en qué formato y para qué fecha.",
    cuandoUsarlo: "Ante una tarea descrita de forma vaga.",
  },
  {
    id: "g-instr-2",
    categoria: "instrucciones",
    texto: "¿«Cuando puedas» significa hoy, esta semana o sin fecha concreta?",
    cuandoUsarlo: "Para convertir un plazo ambiguo en un plazo concreto.",
  },
  {
    id: "g-instr-3",
    categoria: "instrucciones",
    texto: "¿Me lo puedes enviar por escrito? Así lo sigo mejor y evito errores.",
    cuandoUsarlo: "Cuando las instrucciones verbales se te olvidan o se mezclan.",
  },
  {
    id: "g-mal-1",
    categoria: "malentendido",
    texto:
      "Creo que hubo un malentendido. Yo entendí [X]. ¿Me cuentas qué entendiste tú?",
    cuandoUsarlo: "Para revisar el malentendido sin buscar culpables.",
  },
  {
    id: "g-mal-2",
    categoria: "malentendido",
    texto:
      "No fue mi intención molestarte. No lo noté en el momento. ¿Me explicas qué parte te afectó?",
    cuandoUsarlo: "Cuando alguien se molestó y no sabes por qué.",
  },
  {
    id: "g-mal-3",
    categoria: "malentendido",
    texto: "Prefiero que me avises con anticipación cuando cambien los planes.",
    cuandoUsarlo: "Para prevenir el mismo problema en el futuro.",
  },
  {
    id: "g-rom-1",
    categoria: "romantico",
    texto:
      "Quiero preguntarte algo directo: ¿tu interés en mí es de amistad o romántico? Cualquier respuesta está bien.",
    cuandoUsarlo: "Cuando las señales son ambiguas y prefieres claridad.",
  },
  {
    id: "g-rom-2",
    categoria: "romantico",
    texto:
      "Me gustas. ¿Te gustaría que saliéramos alguna vez? Si prefieres que no, lo entiendo y no cambia nada.",
    cuandoUsarlo: "Para expresar interés sin presionar.",
  },
  {
    id: "g-rechazar-1",
    categoria: "rechazar",
    texto: "Gracias por invitarme. Esta vez no voy a ir.",
    cuandoUsarlo: "Negativa amable y completa; no necesita más.",
  },
  {
    id: "g-rechazar-2",
    categoria: "rechazar",
    texto:
      "No puedo ir a ese plan, pero me gustaría vernos en algo más tranquilo. ¿Te parece?",
    cuandoUsarlo: "Cuando rechazas el formato, no a la persona.",
  },
  {
    id: "g-consent-1",
    categoria: "consentimiento",
    texto: "¿Te parece bien si te doy un abrazo? Si no, también está bien.",
    cuandoUsarlo: "Antes de cualquier contacto físico.",
  },
  {
    id: "g-consent-2",
    categoria: "consentimiento",
    texto: "¿Quieres seguir o prefieres parar aquí? Puedes cambiar de opinión en cualquier momento.",
    cuandoUsarlo: "En cualquier situación íntima o que avance de nivel.",
  },
  {
    id: "g-consent-3",
    categoria: "consentimiento",
    texto: "¿Puedo contarle esto a [persona] o prefieres que quede entre nosotros?",
    cuandoUsarlo: "Antes de compartir información de otra persona.",
  },
  {
    id: "g-incom-1",
    categoria: "incomodidad",
    texto: "Cuando dices eso me siento incómodo. Prefiero que no lo repitas.",
    cuandoUsarlo: "Para nombrar el efecto sin acusar de intención.",
  },
  {
    id: "g-incom-2",
    categoria: "incomodidad",
    texto: "No me gusta ese tipo de broma sobre mí. Te lo digo en serio, no estoy enojado.",
    cuandoUsarlo: "Cuando las bromas se repiten.",
  },
  {
    id: "g-incom-3",
    categoria: "incomodidad",
    texto: "Necesito que dejes de insistir. Mi respuesta no va a cambiar.",
    cuandoUsarlo: "Ante presión sostenida.",
  },
  {
    id: "g-ayuda-1",
    categoria: "ayuda",
    texto: "Estoy teniendo dificultades con [situación]. ¿Puedes ayudarme o decirme con quién hablar?",
    cuandoUsarlo: "Petición concreta y accionable.",
  },
  {
    id: "g-ayuda-2",
    categoria: "ayuda",
    texto: "No estoy bien y no quiero estar solo ahora. ¿Puedes acompañarme un rato?",
    cuandoUsarlo: "Cuando necesitas presencia más que consejos.",
  },
  {
    id: "g-ayuda-3",
    categoria: "ayuda",
    texto:
      "Necesito ayuda con algo importante y me cuesta explicarlo hablando. ¿Puedo escribírtelo?",
    cuandoUsarlo: "Cuando el habla se te dificulta en momentos de estrés.",
  },
  {
    id: "g-tdah-atencion-1",
    categoria: "tdah-atencion",
    texto:
      "Me distraje y perdí el hilo. ¿De qué están hablando ahora?",
    cuandoUsarlo: "Cuando tu atención salta y necesitas reconectar con la conversación.",
  },
  {
    id: "g-tdah-atencion-2",
    categoria: "tdah-atencion",
    texto:
      "Escucho mejor cuando hay poco ruido de fondo. ¿Podemos movernos a un lugar más tranquilo?",
    cuandoUsarlo: "Cuando el entorno dificulta tu atención sin que sea culpa de nadie.",
  },
  {
    id: "g-tdah-hiperfoco-1",
    categoria: "tdah-hiperfoco",
    texto:
      "Este tema me entusiasma y me puedo extender. Dime si quieres que resuma o cambiemos de tema.",
    cuandoUsarlo: "Antes de entrar en un tema que te apasiona mucho.",
  },
  {
    id: "g-tdah-hiperfoco-2",
    categoria: "tdah-hiperfoco",
    texto:
      "Estoy en medio de algo y me cuesta parar. ¿Me das cinco minutos más y luego seguimos contigo?",
    cuandoUsarlo: "Cuando necesitas salir del hiperfoco con una transición negociada.",
  },
  {
    id: "g-tdah-impulsos-1",
    categoria: "tdah-impulsos",
    texto:
      "Perdón, te interrumpí. ¿Qué ibas a decir?",
    cuandoUsarlo: "Después de interrumpir sin querer.",
  },
  {
    id: "g-tdah-impulsos-2",
    categoria: "tdah-impulsos",
    texto:
      "A veces se me escapan las ideas antes de tiempo. ¿Me avisas si te corto?",
    cuandoUsarlo: "Para prevenir interrupciones futuras con alguien de confianza.",
  },
  {
    id: "g-tdah-organizacion-1",
    categoria: "tdah-organizacion",
    texto:
      "Se me pasó. ¿Aún estás disponible o lo movemos? Y si puedes, envíame un recordatorio un día antes.",
    cuandoUsarlo: "Cuando olvidas un plan y quieres reparar sin excusas largas.",
  },
  {
    id: "g-tdah-organizacion-2",
    categoria: "tdah-organizacion",
    texto:
      "Para cumplir bien necesito que me lo escribas con fecha, hora y lugar exactos.",
    cuandoUsarlo: "Cuando las instrucciones verbales o vagas no te funcionan.",
  },
  {
    id: "g-tdah-regulacion-1",
    categoria: "tdah-regulacion",
    texto:
      "Necesito un minuto para procesar esto. Vuelvo enseguida.",
    cuandoUsarlo: "Antes de responder bajo una emoción intensa.",
  },
  {
    id: "g-tdah-regulacion-2",
    categoria: "tdah-regulacion",
    texto:
      "La corrección me afectó más de lo que me gustaría. Dame un momento y luego te pregunto qué cambiar.",
    cuandoUsarlo: "Cuando la sensibilidad al rechazo a la frustración se activa.",
  },
];