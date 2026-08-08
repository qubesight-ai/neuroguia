import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Boton } from "@/components/ui/Boton";
import { Aviso } from "@/components/Aviso";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y sugerencias — NeuroGuía" },
      {
        name: "description",
        content:
          "Propón una situación social que quieras ver explicada o envía comentarios sobre NeuroGuía. Los campos de nombre y correo son opcionales.",
      },
      { property: "og:title", content: "Contacto y sugerencias — NeuroGuía" },
      {
        property: "og:description",
        content: "Cuéntanos qué situación social te gustaría encontrar explicada.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [mensaje, setMensaje] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!mensaje.trim()) {
      setError("Escribe un mensaje antes de enviar.");
      return;
    }
    if (!privacidad) {
      setError("Necesitas aceptar el aviso de privacidad para enviar el formulario.");
      return;
    }
    setError("");
    setEnviado(true);
  }

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Contacto" }]} />
      <EncabezadoPagina
        titulo="Contacto y sugerencias"
        descripcion="Puedes proponer una situación social que te gustaría ver explicada. No necesitas dar tu nombre ni tu correo."
      />

      {enviado ? (
        <div className="card-soft mt-8 max-w-2xl p-6" data-card role="status">
          <CheckCircle2 className="h-10 w-10 text-secondary" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-bold">Sugerencia registrada</h2>
          <p className="mt-2">
            Gracias por escribir. En esta versión inicial el envío se simula y tu mensaje no sale de
            tu dispositivo ni se guarda en ningún servidor.
          </p>
          <Boton
            className="mt-4"
            variante="contorno"
            onClick={() => {
              setEnviado(false);
              setMensaje("");
              setPrivacidad(false);
            }}
          >
            Enviar otra sugerencia
          </Boton>
        </div>
      ) : (
        <form onSubmit={enviar} noValidate className="card-soft mt-8 max-w-2xl p-6" data-card>
          <div className="grid gap-5">
            <div>
              <label htmlFor="nombre" className="block font-semibold">
                Nombre <span className="font-normal text-muted-foreground">(opcional)</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block font-semibold">
                Correo <span className="font-normal text-muted-foreground">(opcional)</span>
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
              />
            </div>

            <div>
              <label htmlFor="tipo" className="block font-semibold">
                Tipo de mensaje
              </label>
              <select
                id="tipo"
                name="tipo"
                className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
              >
                <option>Proponer una situación social</option>
                <option>Corrección de contenido</option>
                <option>Problema de accesibilidad</option>
                <option>Comentario general</option>
              </select>
            </div>

            <div>
              <label htmlFor="situacion" className="block font-semibold">
                Situación social que quieres proponer{" "}
                <span className="font-normal text-muted-foreground">(opcional)</span>
              </label>
              <input
                id="situacion"
                name="situacion"
                type="text"
                placeholder="Por ejemplo: alguien cambia de tema cuando hablo"
                className="mt-2 min-h-12 w-full rounded-xl border-2 border-input bg-card px-3"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-semibold">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="mt-2 w-full rounded-xl border-2 border-input bg-card p-3"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacidad"
                type="checkbox"
                checked={privacidad}
                onChange={(e) => setPrivacidad(e.target.checked)}
                className="mt-1 h-6 w-6 shrink-0 rounded border-2 border-input"
              />
              <label htmlFor="privacidad" className="min-w-0">
                Acepto el aviso de privacidad: en esta versión el envío se simula y la información no
                sale de mi dispositivo.
              </label>
            </div>

            <div aria-live="polite">
              {error && (
                <p className="m-0 rounded-xl border-2 border-destructive bg-destructive-soft p-3 font-semibold">
                  Error: {error}
                </p>
              )}
            </div>

            <div>
              <Boton type="submit" tamano="lg">
                Enviar sugerencia
              </Boton>
            </div>
          </div>
        </form>
      )}

      <div className="mt-8 max-w-2xl">
        <Aviso tipo="aviso" titulo="Este formulario no es un canal de emergencia">
          Si estás en peligro inmediato, comunícate con los servicios de emergencia de tu país o
          busca ayuda de una persona de confianza.
        </Aviso>
      </div>
    </Contenedor>
  );
}