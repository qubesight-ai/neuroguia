import type { LucideIcon } from "lucide-react";
import type { FamiliaColor } from "@/lib/paleta";
import {
  MessagesSquare,
  MessageCircle,
  DoorOpen,
  Users,
  Heart,
  Sparkles,
  Briefcase,
  GraduationCap,
  Home,
  Bus,
  PartyPopper,
  Smartphone,
  Globe,
  Flame,
  ShieldCheck,
  ShieldAlert,
  Waves,
  HeartHandshake,
  Target,
  Zap,
  Rocket,
  CalendarClock,
  BatteryCharging,
} from "lucide-react";

export type CategoriaId =
  | "iniciar-conversacion"
  | "mantener-conversacion"
  | "terminar-conversacion"
  | "amistad"
  | "pareja-citas"
  | "coqueteo"
  | "trabajo"
  | "estudio"
  | "familia"
  | "espacios-publicos"
  | "reuniones"
  | "chat"
  | "redes-sociales"
  | "conflictos"
  | "limites"
  | "seguridad"
  | "sobrecarga"
  | "regulacion"
  | "tdah-atencion"
  | "tdah-hiperfoco"
  | "tdah-impulsos"
  | "tdah-organizacion"
  | "tdah-regulacion";

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  descripcion: string;
  icono: LucideIcon;
  /** Identidad cromática propia de la categoría. */
  color: FamiliaColor;
}

export const categorias: Categoria[] = [
  {
    id: "iniciar-conversacion",
    nombre: "Iniciar una conversación",
    descripcion: "Formas de empezar a hablar con alguien, con o sin guion previo.",
    icono: MessagesSquare,
    color: "azul",
  },
  {
    id: "mantener-conversacion",
    nombre: "Mantener una conversación",
    descripcion: "Turnos, pausas, temas y cómo saber si la otra persona sigue interesada.",
    icono: MessageCircle,
    color: "azul",
  },
  {
    id: "terminar-conversacion",
    nombre: "Terminar una conversación",
    descripcion: "Cerrar una interacción sin sentir que quedó algo mal.",
    icono: DoorOpen,
    color: "azul",
  },
  {
    id: "amistad",
    nombre: "Amistad",
    descripcion: "Cómo se construye, cómo se cuida y cómo se pide participar.",
    icono: Users,
    color: "turquesa",
  },
  {
    id: "pareja-citas",
    nombre: "Pareja y citas",
    descripcion: "Acuerdos, expectativas y comunicación en vínculos románticos.",
    icono: Heart,
    color: "magenta",
  },
  {
    id: "coqueteo",
    nombre: "Coqueteo e interés romántico",
    descripcion: "Diferencias entre amabilidad, interés y señales ambiguas.",
    icono: Sparkles,
    color: "magenta",
  },
  {
    id: "trabajo",
    nombre: "Trabajo",
    descripcion: "Instrucciones, jerarquías, feedback y peticiones de claridad.",
    icono: Briefcase,
    color: "naranja",
  },
  {
    id: "estudio",
    nombre: "Estudio",
    descripcion: "Clases, trabajos en grupo y comunicación con docentes.",
    icono: GraduationCap,
    color: "naranja",
  },
  {
    id: "familia",
    nombre: "Familia",
    descripcion: "Convivencia, expectativas familiares y límites en casa.",
    icono: Home,
    color: "turquesa",
  },
  {
    id: "espacios-publicos",
    nombre: "Transporte y espacios públicos",
    descripcion: "Normas variables en calles, tiendas, filas y transporte.",
    icono: Bus,
    color: "amarillo",
  },
  {
    id: "reuniones",
    nombre: "Reuniones y fiestas",
    descripcion: "Prepararse, participar y salir cuando lo necesitas.",
    icono: PartyPopper,
    color: "naranja",
  },
  {
    id: "chat",
    nombre: "Comunicación por chat",
    descripcion: "Tiempos de respuesta, tono escrito y malentendidos.",
    icono: Smartphone,
    color: "cielo",
  },
  {
    id: "redes-sociales",
    nombre: "Redes sociales",
    descripcion: "Publicaciones, comentarios y privacidad.",
    icono: Globe,
    color: "cielo",
  },
  {
    id: "conflictos",
    nombre: "Conflictos",
    descripcion: "Desacuerdos, reparación y cuándo alejarse.",
    icono: Flame,
    color: "coral",
  },
  {
    id: "limites",
    nombre: "Límites personales",
    descripcion: "Reconocer, expresar y sostener tus límites.",
    icono: ShieldCheck,
    color: "coral",
  },
  {
    id: "seguridad",
    nombre: "Seguridad y manipulación",
    descripcion: "Señales de presión, engaño y relaciones poco saludables.",
    icono: ShieldAlert,
    color: "coral",
  },
  {
    id: "sobrecarga",
    nombre: "Sobrecarga sensorial",
    descripcion: "Identificar señales tempranas y pedir pausas.",
    icono: Waves,
    color: "morado",
  },
  {
    id: "regulacion",
    nombre: "Regulación emocional",
    descripcion: "Recuperación, planes de salida y cuidado después de socializar.",
    icono: HeartHandshake,
    color: "verde",
  },
  {
    id: "tdah-atencion",
    nombre: "Atención y distracción",
    descripcion: "Cuando el foco cambia, se pierde el hilo o el entorno compite por tu atención.",
    icono: Target,
    color: "cielo",
  },
  {
    id: "tdah-hiperfoco",
    nombre: "Hiperfoco y transiciones",
    descripcion: "Entrar en un tema con intensidad y salir de él cuando la situación lo pide.",
    icono: Zap,
    color: "amarillo",
  },
  {
    id: "tdah-impulsos",
    nombre: "Impulsos e interrupciones",
    descripcion: "Responder rápido, interrumpir o decir algo antes de pensar las consecuencias.",
    icono: Rocket,
    color: "naranja",
  },
  {
    id: "tdah-organizacion",
    nombre: "Organización y planificación",
    descripcion: "Recordar compromisos, seguir instrucciones y gestionar el tiempo.",
    icono: CalendarClock,
    color: "morado",
  },
  {
    id: "tdah-regulacion",
    nombre: "Regulación emocional y TDAH",
    descripcion: "Rechazo a la frustración, emociones intensas y recuperación después de un revés.",
    icono: BatteryCharging,
    color: "coral",
  },
];

export const categoriaPorId = (id: string) => categorias.find((c) => c.id === id);