import type { CategoriaId } from "../categorias";
import type { Ambiguedad, Situacion } from "../situaciones";

/** Entrada compacta: se expande a una ficha completa de situación. */
export interface EntradaCompacta {
  id: string;
  titulo: string;
  resumen: string;
  contexto: string;
  ambiguedad: Ambiguedad;
  minutos?: number;
  claves: string[];
  pasa: string;
  confuso: string;
  significa: string[];
  otras: string[];
  senales: string[];
  preguntas: string[];
  /** [texto, qué comunica, qué podría ocurrir] */
  opciones: [string, string, string][];
  noObligado: string[];
  limites: string[];
  ayuda: string[];
  /** [quién, texto] */
  dialogo?: [string, string][];
}

const OPCIONES_COMUNES: [string, string, string][] = [
  [
    "Esperar y observar si se repite antes de concluir algo.",
    "Que reúnes información en lugar de decidir con un solo dato.",
    "Con varias ocasiones podrás ver un patrón, que informa mucho más que un hecho aislado.",
  ],
  [
    "Preguntar de forma tranquila y directa.",
    "Que prefieres claridad en lugar de suposiciones.",
    "Muchas personas responden con normalidad. Si alguien se molesta por una pregunta clara, eso habla de esa persona, no de ti.",
  ],
  [
    "No continuar la interacción si te resulta incómoda.",
    "Que cuidas tu energía y tus límites.",
    "La situación puede quedarse como está. Es una opción válida y no requiere justificación.",
  ],
];

const NO_OBLIGADO_COMUN = [
  "No estás obligado a ocultar cómo funcionas para que la interacción sea más cómoda para otras personas.",
  "No estás obligado a responder de inmediato: puedes pedir tiempo.",
];

const AYUDA_COMUN = [
  "Si la situación te genera ansiedad durante días y afecta tu sueño, tu apetito o tus estudios y trabajo.",
  "Si se repite de forma sostenida y sientes que no tienes herramientas para manejarla sola o solo.",
];

export function crear(categoria: CategoriaId, e: EntradaCompacta): Situacion {
  return {
    id: e.id,
    titulo: e.titulo,
    resumen: e.resumen,
    contexto: e.contexto,
    categoria,
    ambiguedad: e.ambiguedad,
    minutos: e.minutos ?? 5,
    palabrasClave: e.claves,
    queEstaPasando: e.pasa,
    porQueConfuso: e.confuso,
    podriaSignificar: e.significa,
    otrasInterpretaciones: e.otras,
    senales: e.senales,
    preguntasDirectas: e.preguntas,
    opciones: [...e.opciones, ...OPCIONES_COMUNES].map(([texto, queComunica, quePodriaOcurrir]) => ({
      texto,
      queComunica,
      quePodriaOcurrir,
    })),
    noObligado: [...e.noObligado, ...NO_OBLIGADO_COMUN],
    cuandoLimite: e.limites,
    cuandoAyuda: [...e.ayuda, ...AYUDA_COMUN],
    ...(e.dialogo
      ? {
          dialogo: {
            titulo: "Ejemplo de conversación directa",
            lineas: e.dialogo.map(([quien, texto]) => ({ quien, texto })),
          },
        }
      : {}),
  };
}

export const crearLista = (categoria: CategoriaId, entradas: EntradaCompacta[]): Situacion[] =>
  entradas.map((e) => crear(categoria, e));
