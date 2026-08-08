import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Contenedor, EncabezadoPagina } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Boton } from "@/components/ui/Boton";
import { Aviso } from "@/components/Aviso";
import { EstadoVacio } from "@/components/EstadoVacio";
import { ModalConfirmacion } from "@/components/ModalConfirmacion";
import { PlanRegulacion } from "@/components/PlanRegulacion";
import { PanelAccesibilidad } from "@/components/PanelAccesibilidad";
import { borrarTodo, useFavoritos } from "@/lib/local-storage";
import { situaciones } from "@/data/situaciones";
import { guiones } from "@/data/guiones";
import { ejercicios } from "@/data/simulador";

export const Route = createFileRoute("/mi-espacio")({
  head: () => ({
    meta: [
      { title: "Mi espacio: contenido guardado y preferencias — NeuroGuía" },
      {
        name: "description",
        content:
          "Tus situaciones y guiones guardados, los escenarios que completaste, tu plan de regulación y tus preferencias de accesibilidad. Todo permanece en tu dispositivo.",
      },
      { property: "og:title", content: "Mi espacio — NeuroGuía" },
      {
        property: "og:description",
        content: "Contenido guardado sin registro, almacenado solo en tu dispositivo.",
      },
    ],
  }),
  component: MiEspacio,
});

function MiEspacio() {
  const situacionesGuardadas = useFavoritos("situacion");
  const guionesGuardados = useFavoritos("guion");
  const completados = useFavoritos("simulador");
  const [confirmar, setConfirmar] = useState(false);
  const [mostrarPrefs, setMostrarPrefs] = useState(false);

  const misSituaciones = situaciones.filter((s) => situacionesGuardadas.ids.includes(s.id));
  const misGuiones = guiones.filter((g) => guionesGuardados.ids.includes(g.id));
  const misEjercicios = ejercicios.filter((e) => completados.ids.includes(e.id));

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: "Mi espacio" }]} />
      <EncabezadoPagina
        titulo="Mi espacio"
        descripcion="Todo lo que guardas aquí permanece en este dispositivo. No hay cuentas ni servidores: si borras los datos del navegador, se eliminará."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Situaciones guardadas</h2>
          {misSituaciones.length > 0 ? (
            <ul className="mt-3 list-none space-y-2 p-0">
              {misSituaciones.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/situaciones/$id"
                    params={{ id: s.id }}
                    className="block rounded-xl border border-border p-3 no-underline hover:bg-muted"
                  >
                    <span className="font-semibold text-foreground">{s.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3">
              <EstadoVacio
                titulo="Todavía no guardaste situaciones"
                descripcion="Usa el botón «Guardar» en cualquier situación para tenerla aquí."
              >
                <Link
                  to="/situaciones"
                  className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground no-underline"
                >
                  Explorar situaciones
                </Link>
              </EstadoVacio>
            </div>
          )}
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Guiones guardados</h2>
          {misGuiones.length > 0 ? (
            <ul className="mt-3 list-none space-y-2 p-0">
              {misGuiones.map((g) => (
                <li key={g.id} className="rounded-xl border border-border p-3">
                  «{g.texto}»
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3">
              <EstadoVacio
                titulo="Todavía no guardaste guiones"
                descripcion="Puedes guardar las frases que te resulten útiles."
              >
                <Link
                  to="/guiones"
                  className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground no-underline"
                >
                  Ver guiones
                </Link>
              </EstadoVacio>
            </div>
          )}
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Escenarios completados</h2>
          {misEjercicios.length > 0 ? (
            <ul className="mt-3 list-none space-y-2 p-0">
              {misEjercicios.map((e) => (
                <li key={e.id} className="rounded-xl border border-border p-3">
                  {e.titulo}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3">
              <EstadoVacio
                titulo="Sin escenarios completados"
                descripcion="Cuando avances en el simulador, aparecerán aquí."
              >
                <Link
                  to="/simulador"
                  className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground no-underline"
                >
                  Abrir simulador
                </Link>
              </EstadoVacio>
            </div>
          )}
        </section>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Preferencias de accesibilidad</h2>
          <p className="mt-2 text-muted-foreground">
            Puedes ajustarlas aquí o desde el botón de accesibilidad del encabezado.
          </p>
          <div className="relative mt-3">
            <Boton
              variante="contorno"
              onClick={() => setMostrarPrefs((v) => !v)}
              aria-expanded={mostrarPrefs}
            >
              {mostrarPrefs ? "Ocultar opciones" : "Mostrar opciones"}
            </Boton>
            {mostrarPrefs && <PanelAccesibilidad onCerrar={() => setMostrarPrefs(false)} />}
          </div>
        </section>
      </div>

      <div className="mt-10">
        <PlanRegulacion />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Aviso tipo="apoyo" titulo="Tus datos permanecen en el dispositivo">
          NeuroGuía no tiene cuentas ni base de datos. Favoritos, progreso, plan de regulación y
          preferencias se guardan con LocalStorage en este navegador.
        </Aviso>

        <section className="card-soft p-6" data-card>
          <h2 className="text-xl font-bold">Eliminar todos los datos locales</h2>
          <p className="mt-2 text-muted-foreground">
            Se borrarán tus favoritos, tu progreso, tu plan de regulación y tus preferencias. Esta
            acción no se puede deshacer.
          </p>
          <Boton variante="peligro" className="mt-3" onClick={() => setConfirmar(true)}>
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Eliminar todos mis datos
          </Boton>
        </section>
      </div>

      {confirmar && (
        <ModalConfirmacion
          titulo="¿Eliminar todos los datos locales?"
          descripcion="Se borrarán tus favoritos, tu progreso, tu plan de regulación y tus preferencias de accesibilidad guardadas en este dispositivo."
          textoConfirmar="Sí, eliminar todo"
          onCancelar={() => setConfirmar(false)}
          onConfirmar={() => {
            borrarTodo();
            setConfirmar(false);
          }}
        />
      )}
    </Contenedor>
  );
}