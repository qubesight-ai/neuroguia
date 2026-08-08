import { useState } from "react";
import { Check, Save } from "lucide-react";
import { Boton } from "./ui/Boton";
import { useAlmacenLocal } from "@/lib/local-storage";

export interface Plan {
  senales: string;
  ayuda: string;
  empeora: string;
  contactos: string;
  frase: string;
  lugar: string;
}

export const PLAN_VACIO: Plan = {
  senales: "",
  ayuda: "",
  empeora: "",
  contactos: "",
  frase: "",
  lugar: "",
};

const campos: { clave: keyof Plan; etiqueta: string; ayuda: string }[] = [
  {
    clave: "senales",
    etiqueta: "Señales de que estoy llegando a mi límite",
    ayuda: "Por ejemplo: me cuesta hablar, el ruido molesta más, quiero salir.",
  },
  {
    clave: "ayuda",
    etiqueta: "Cosas que me ayudan",
    ayuda: "Por ejemplo: silencio, caminar, música conocida, agua.",
  },
  {
    clave: "empeora",
    etiqueta: "Cosas que empeoran la situación",
    ayuda: "Por ejemplo: preguntas seguidas, luz fuerte, contacto físico.",
  },
  {
    clave: "contactos",
    etiqueta: "Personas a quienes puedo contactar",
    ayuda: "Nombres y forma de contacto.",
  },
  {
    clave: "frase",
    etiqueta: "Frase que puedo utilizar para pedir espacio",
    ayuda: "Por ejemplo: «Necesito diez minutos a solas y vuelvo».",
  },
  {
    clave: "lugar",
    etiqueta: "Lugar seguro al que puedo ir",
    ayuda: "Por ejemplo: la escalera, el baño, el coche, mi habitación.",
  },
];

export function PlanRegulacion() {
  const { valor, actualizar } = useAlmacenLocal<Plan>("plan-regulacion", PLAN_VACIO);
  const [guardado, setGuardado] = useState(false);

  return (
    <section className="card-soft p-6" data-card aria-labelledby="plan-titulo">
      <h2 id="plan-titulo" className="text-2xl font-bold">
        Mi plan de regulación
      </h2>
      <p className="mt-2 text-muted-foreground">
        Escribe lo que te sirve a ti. Se guarda solo en este dispositivo, mientras escribes.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {campos.map((c) => (
          <div key={c.clave}>
            <label htmlFor={`plan-${c.clave}`} className="block font-semibold">
              {c.etiqueta}
            </label>
            <p id={`plan-${c.clave}-ayuda`} className="mt-1 text-sm text-muted-foreground">
              {c.ayuda}
            </p>
            <textarea
              id={`plan-${c.clave}`}
              aria-describedby={`plan-${c.clave}-ayuda`}
              rows={3}
              value={valor[c.clave]}
              onChange={(e) => {
                actualizar((anterior) => ({ ...anterior, [c.clave]: e.target.value }));
                setGuardado(false);
              }}
              className="mt-2 w-full rounded-xl border-2 border-input bg-card p-3"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Boton
          onClick={() => {
            actualizar((anterior) => ({ ...anterior }));
            setGuardado(true);
          }}
        >
          {guardado ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Save className="h-4 w-4" aria-hidden="true" />
          )}
          Guardar en este dispositivo
        </Boton>
        <p className="m-0 text-sm text-muted-foreground" role="status" aria-live="polite">
          {guardado ? "Tu plan está guardado en este dispositivo." : ""}
        </p>
      </div>
    </section>
  );
}