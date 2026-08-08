import type { LucideIcon } from "lucide-react";
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
  | "regulacion";

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  descripcion: string;
  icono: LucideIcon;
}

export const categorias: Categoria[] = [
  {
    id: "iniciar-conversacion",
    nombre: "Iniciar una conversación",
    descripcion: "Formas de empezar a hablar con alguien, con o sin guion previo.",
    icono: MessagesSquare,
  },
  {
    id: "mantener-conversacion",
    nombre: "Mantener una conversación",
    descripcion: "Turnos, pausas, temas y cómo saber si la otra persona sigue interesada.",
    icono: MessageCircle,
  },
  {
    id: "terminar-conversacion",
    nombre: "Terminar una conversación",
    descripcion: "Cerrar una interacción sin sentir que quedó algo mal.",
    icono: DoorOpen,
  },
  {
    id: "amistad",
    nombre: "Amistad",
    descripcion: "Cómo se construye, cómo se cuida y cómo se pide participar.",
    icono: Users,
  },
  {
    id: "pareja-citas",
    nombre: "Pareja y citas",
    descripcion: "Acuerdos, expectativas y comunicación en vínculos románticos.",
    icono: Heart,
  },
  {
    id: "coqueteo",
    nombre: "Coqueteo e interés romántico",
    descripcion: "Diferencias entre amabilidad, interés y señales ambiguas.",
    icono: Sparkles,
  },
  {
    id: "trabajo",
    nombre: "Trabajo",
    descripcion: "Instrucciones, jerarquías, feedback y peticiones de claridad.",
    icono: Briefcase,
  },
  {
    id: "estudio",
    nombre: "Estudio",
    descripcion: "Clases, trabajos en grupo y comunicación con docentes.",
    icono: GraduationCap,
  },
  {
    id: "familia",
    nombre: "Familia",
    descripcion: "Convivencia, expectativas familiares y límites en casa.",
    icono: Home,
  },
  {
    id: "espacios-publicos",
    nombre: "Transporte y espacios públicos",
    descripcion: "Normas variables en calles, tiendas, filas y transporte.",
    icono: Bus,
  },
  {
    id: "reuniones",
    nombre: "Reuniones y fiestas",
    descripcion: "Prepararse, participar y salir cuando lo necesitas.",
    icono: PartyPopper,
  },
  {
    id: "chat",
    nombre: "Comunicación por chat",
    descripcion: "Tiempos de respuesta, tono escrito y malentendidos.",
    icono: Smartphone,
  },
  {
    id: "redes-sociales",
    nombre: "Redes sociales",
    descripcion: "Publicaciones, comentarios y privacidad.",
    icono: Globe,
  },
  {
    id: "conflictos",
    nombre: "Conflictos",
    descripcion: "Desacuerdos, reparación y cuándo alejarse.",
    icono: Flame,
  },
  {
    id: "limites",
    nombre: "Límites personales",
    descripcion: "Reconocer, expresar y sostener tus límites.",
    icono: ShieldCheck,
  },
  {
    id: "seguridad",
    nombre: "Seguridad y manipulación",
    descripcion: "Señales de presión, engaño y relaciones poco saludables.",
    icono: ShieldAlert,
  },
  {
    id: "sobrecarga",
    nombre: "Sobrecarga sensorial",
    descripcion: "Identificar señales tempranas y pedir pausas.",
    icono: Waves,
  },
  {
    id: "regulacion",
    nombre: "Regulación emocional",
    descripcion: "Recuperación, planes de salida y cuidado después de socializar.",
    icono: HeartHandshake,
  },
];

export const categoriaPorId = (id: string) => categorias.find((c) => c.id === id);