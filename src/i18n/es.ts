/**
 * Diccionario de textos de interfaz. Para añadir inglés en el futuro:
 * crear `en.ts` con las mismas claves y seleccionar el diccionario en `index.ts`.
 */
export const es = {
  marca: "NeuroGuía",
  lema: "Comprender las normas sociales sin dejar de ser tú.",
  lemaSecundario:
    "Explicaciones claras, ejemplos reales y herramientas prácticas para navegar situaciones sociales con mayor seguridad.",
  nav: {
    inicio: "Inicio",
    situaciones: "Situaciones",
    simulador: "Simulador",
    guiones: "Guiones",
    relaciones: "Relaciones",
    limites: "Límites y seguridad",
    regulacion: "Regulación",
    glosario: "Glosario",
    miEspacio: "Mi espacio",
    tdahAdhd: "TDAH / ADHD",
  },
  acciones: {
    explorar: "Explorar situaciones",
    comoFunciona: "¿Cómo funciona?",
    verExplicacion: "Ver explicación",
    copiar: "Copiar",
    copiado: "Copiado",
    guardar: "Guardar",
    guardado: "Guardado",
    personalizar: "Personalizar",
    reiniciar: "Reiniciar",
    enviarSugerencia: "Enviar sugerencia",
  },
  busqueda: {
    etiqueta: "Describe la situación que quieres entender.",
    marcador: "Por ejemplo: alguien no me saludó",
    sinResultados:
      "No encontramos una explicación exacta. Puedes explorar situaciones relacionadas o enviarnos una sugerencia.",
  },
  accesibilidad: {
    titulo: "Accesibilidad",
    abrir: "Abrir opciones de accesibilidad",
  },
} as const;

export type Diccionario = typeof es;