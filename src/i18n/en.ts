import type { Diccionario } from "./es";

/**
 * English UI dictionary. Mirrors every key in `es.ts`.
 */
export const en: Diccionario = {
  marca: "NeuroGuía",
  lema: "Understanding social norms without stopping being yourself.",
  lemaSecundario:
    "Clear explanations, real-life examples and practical tools to navigate social situations with more confidence.",
  nav: {
    inicio: "Home",
    situaciones: "Situations",
    simulador: "Simulator",
    guiones: "Scripts",
    relaciones: "Relationships",
    limites: "Boundaries & safety",
    regulacion: "Regulation",
    glosario: "Glossary",
    miEspacio: "My space",
    tdahAdhd: "ADHD / ADD",
  },
  acciones: {
    explorar: "Explore situations",
    comoFunciona: "How does it work?",
    verExplicacion: "See explanation",
    copiar: "Copy",
    copiado: "Copied",
    guardar: "Save",
    guardado: "Saved",
    personalizar: "Customize",
    reiniciar: "Restart",
    restablecer: "Reset",
    enviarSugerencia: "Send a suggestion",
    verTodas: "View all",
  },
  busqueda: {
    etiqueta: "Describe the situation you want to understand.",
    marcador: "For example: someone didn't say hello to me",
    sinResultados:
      "We couldn't find an exact explanation. You can explore related situations or send us a suggestion.",
    sinCoincidencias: "No exact matches",
  },
  accesibilidad: {
    titulo: "Accessibility",
    abrir: "Open accessibility options",
    cerrar: "Close accessibility options",
    tamanoTexto: "Text size",
    reducirTexto: "Decrease text size",
    aumentarTexto: "Increase text size",
    preferenciasVisualizacion: "Display preferences",
    intensidadVisual: "Visual intensity",
    intensidadDesc: "Adjust how much color and how many gradients are shown.",
    intensidades: {
      calma: { nombre: "Calm", descripcion: "No gradients, very soft pastel colors." },
      equilibrada: { nombre: "Balanced", descripcion: "Standard multicolor design." },
      vibrante: { nombre: "Vibrant", descripcion: "Stronger colors and gradients." },
    },
    altoContraste: "High contrast",
    altoContrasteDesc: "Strengthens borders and text color.",
    reducirAnimaciones: "Reduce animations",
    reducirAnimacionesDesc: "Removes transitions and motion.",
    vistaLectura: "Simplified reading view",
    vistaLecturaDesc: "Fewer elements and a narrow column.",
    modoOscuro: "Dark mode",
    modoOscuroDesc: "Dark background and light text.",
    sinDecoracion: "Disable decorative elements",
    sinDecoracionDesc: "Hides non-informative illustrations and backgrounds.",
    prefsGuardadas: "Your preferences are saved only on this device.",
  },
  idioma: {
    etiqueta: "Language",
    cambiar: "Cambiar a español",
    actual: "English",
  },
  cabecera: {
    saltar: "Skip to main content",
    edicionLinea: "Digital edition · No sign-up · Data stays on your device",
    tagline: "A social guide for neurodivergent people",
    navegacion: "Navigation",
    abrirMenu: "Open main menu",
    navPrincipal: "Main navigation",
    navMovil: "Main navigation (mobile)",
  },
  inicio: {
    antetitulo: "Front page · A social guide for neurodivergent people",
    titularA: "Understanding",
    titularB: "social norms",
    titularC: "without stopping being yourself",
    sinRegistro: "No sign-up. Everything you save stays on your device.",
    caminos: {
      antetitulo: "Choose your path",
      titulo: "What do you want to explore today?",
      intro:
        "Two journeys designed for different ways of being in the world. You can use both: neither excludes the other.",
      autismo: {
        titulo: "Autism",
        texto:
          "Social situations explained step by step, scripts for responding, and ambiguous signals translated into clear language.",
        cta: "Enter the autistic path",
      },
      tdah: {
        titulo: "ADHD · ADD",
        texto:
          "Attention, hyperfocus, impulses, organization and intense emotions: realistic strategies for minds that don't move in a straight line.",
        cta: "Enter the ADHD path",
      },
      ambos: "Do you identify with both, or not sure yet?",
      exploraTodo: "Explore everything together",
    },
    accesos: {
      situaciones: {
        titulo: "I want to understand a situation",
        texto: "Literal explanations, possible interpretations, and options for responding.",
      },
      guiones: {
        titulo: "I need a phrase to reply",
        texto: "Ready-made scripts to copy and adapt to the way you speak.",
      },
      simulador: {
        titulo: "I want to practice",
        texto: "Scenarios with several valid responses and their possible effects.",
      },
    },
    secciones: {
      antetitulo: "Sections",
      titulo: "Main categories",
      intro: "Choose the type of situation you want to understand. Read only what you need.",
    },
    editorial: {
      antetitulo: "Editorial",
      titulo: "You don't have to change who you are",
      p1: "NeuroGuía does not teach you to look neurotypical or to hide autistic traits. It explains social information that is often conveyed implicitly, so you can decide with more data.",
      p2: "Social norms change with culture, context and people. Here you'll find tools, not absolute rules: you can follow a norm, adapt it, or choose not to follow it.",
      avisoTitulo: "What you will find here",
      items: [
        "Several possible interpretations, never presented as certainties.",
        "Response options and what might happen with each one.",
        "What you are not obligated to do.",
        "When to set a boundary and when to ask for help.",
      ],
    },
    tdahSeccion: {
      antetitulo: "ADHD / ADD",
      titulo: "Also for minds that jump, focus intensely and feel deeply",
      entradilla:
        "Situations, scripts and strategies designed for people with ADHD or ADD: losing the thread, interrupting, falling into hyperfocus, forgetting commitments and regulating intense emotions.",
      cta: "Explore the ADHD section",
      avisoTitulo: "What you'll find",
      items: [
        "Social situations explained literally.",
        "Scripts to ask for clarifications, pauses or support.",
        "Emotional regulation and organization strategies.",
        "An interactive exercise about changes of plan.",
      ],
    },
    ultimas: {
      antetitulo: "Latest",
      titulo: "Situations to start with",
    },
    recursos: {
      antetitulo: "Resources",
      titulo: "Featured resources",
      guiones: {
        titulo: "social scripts",
        texto: "Phrases to ask for clarity, say no, set boundaries or ask for help.",
        enlace: "View scripts",
      },
      simulador: {
        titulo: "interactive exercises",
        texto: "Practice with no “right” or “wrong” grades.",
        enlace: "Open simulator",
      },
      seguridad: {
        titulo: "Boundaries and safety",
        texto: "Recognizing pressure, manipulation and unhealthy relationships.",
        enlace: "Read the guide",
      },
      plan: {
        titulo: "My regulation plan",
        texto: "An editable plan saved only on your device.",
        enlace: "Create my plan",
      },
      peligroTitulo: "If you are in immediate danger",
      peligroTexto:
        "Contact your country's emergency services or seek help from someone you trust. This site offers educational information and is not a substitute for psychological, medical or legal care.",
      sobre: "About the project",
      sugerencia: "Send a suggestion",
    },
    buscarSr: "Search for a situation",
  },
  pie: {
    lema: "Understanding social norms without stopping being yourself.",
    cita: "“There is no single right way to experience the world.”",
    secciones: "Sections",
    seguridad: "Safety and boundaries",
    privacidad: "Privacy",
    sobre: "About the project",
    contacto: "Contact and suggestions",
    avisoTitulo: "Important notice",
    avisoTexto:
      "This site offers educational information. It is not a substitute for psychological, medical or legal care. If you are in immediate danger, contact your country's emergency services or seek help from someone you trust.",
    cierre: "Made from a perspective of respect for neurodiversity. Nothing about us without us.",
    navPie: "Footer links",
  },
};
