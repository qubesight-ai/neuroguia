import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Compass,
  Eye,
  HelpCircle,
  ListChecks,
  Loader2,
  MessageSquareQuote,
  Pencil,
  Sparkles,
} from "lucide-react";
import { Contenedor, EncabezadoPagina, ListaClara } from "@/components/Seccion";
import { Migas } from "@/components/Migas";
import { Aviso } from "@/components/Aviso";
import { Boton } from "@/components/ui/Boton";
import { BotonCopiar } from "@/components/BotonCopiar";
import { analizarSituacion } from "@/lib/analizador.functions";
import {
  RECORDATORIO_ANALISIS,
  RECORDATORIO_ANALISIS_EN,
  type Analisis,
} from "@/lib/analizador-tipos";
import { buscarRelacionadas } from "@/lib/relacionadas";
import { situaciones } from "@/data/situaciones";
import { usePreferencias } from "@/lib/preferencias";
import { useT } from "@/i18n";

export const Route = createFileRoute("/analizar")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? (search["q"] as string) : "",
  }),
  head: () => ({
    meta: [
      { title: "Analizador de situaciones sociales — NeuroGuía" },
      {
        name: "description",
        content:
          "Describe una situación social confusa y obtén hechos, dudas abiertas, interpretaciones posibles y opciones, sin afirmar lo que piensa otra persona.",
      },
      { property: "og:title", content: "Analizador de situaciones sociales — NeuroGuía" },
      {
        property: "og:description",
        content:
          "Una herramienta que separa hechos de interpretaciones y ofrece posibilidades, nunca certezas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Analizar,
});

const MIN = 20;

function Tarjeta({
  titulo,
  icono: Icono,
  children,
}: {
  titulo: string;
  icono: typeof Eye;
  children: React.ReactNode;
}) {
  return (
    <section className="tarjeta-editorial p-6" aria-label={titulo}>
      <h2 className="flex items-center gap-2 text-xl font-bold">
        <Icono className="h-5 w-5 shrink-0 text-nd-azul" aria-hidden="true" />
        {titulo}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function Analizar() {
  const t = useT();
  const { prefs } = usePreferencias();
  const { q } = Route.useSearch();
  const [texto, setTexto] = useState(q);
  const [estado, setEstado] = useState<"inicial" | "cargando" | "listo" | "error">("inicial");
  const [error, setError] = useState("");
  const [analisis, setAnalisis] = useState<Analisis | null>(null);
  const [frase, setFrase] = useState("");
  const [editando, setEditando] = useState(false);
  const resultadoRef = useRef<HTMLDivElement>(null);
  const analizar = useServerFn(analizarSituacion);

  const relacionadasLocales = useMemo(
    () => (analisis ? buscarRelacionadas(texto, 3) : []),
    [analisis, texto],
  );

  const relacionadas = useMemo(() => {
    const porId = analisis
      ? analisis.relatedSituationIds
          .map((id) => situaciones.find((s) => s.id === id))
          .filter((s): s is NonNullable<typeof s> => Boolean(s))
      : [];
    const mezcla = [...porId, ...relacionadasLocales];
    return mezcla.filter((s, i) => mezcla.findIndex((o) => o.id === s.id) === i).slice(0, 3);
  }, [analisis, relacionadasLocales]);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const limpio = texto.trim();
    if (limpio.length < MIN) {
      setError(t.analizador.minimo);
      setEstado("error");
      return;
    }
    setEstado("cargando");
    setError("");
    setAnalisis(null);
    try {
      const candidatas = buscarRelacionadas(limpio, 6).map((s) => ({
        id: s.id,
        titulo: s.titulo,
      }));
      const resultado = await analizar({
        data: { texto: limpio, idioma: prefs.idioma, candidatas },
      });
      setAnalisis(resultado);
      setFrase(resultado.suggestedScript);
      setEditando(false);
      setEstado("listo");
      window.setTimeout(() => resultadoRef.current?.focus(), 60);
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : "";
      setError(
        mensaje.includes("LIMITE_ALCANZADO")
          ? t.analizador.errorLimite
          : mensaje.includes("SIN_CREDITOS") || mensaje.includes("SIN_CLAVE_IA")
            ? t.analizador.errorCreditos
            : t.analizador.errorGenerico,
      );
      setEstado("error");
    }
  }

  const recordatorio = prefs.idioma === "en" ? RECORDATORIO_ANALISIS_EN : RECORDATORIO_ANALISIS;

  return (
    <Contenedor className="py-10">
      <Migas items={[{ texto: t.analizador.titulo }]} />
      <EncabezadoPagina titulo={t.analizador.titulo} descripcion={t.analizador.descripcion} />

      <form onSubmit={enviar} className="mt-8 max-w-3xl">
        <label htmlFor="situacion" className="block text-lg font-semibold">
          {t.analizador.etiquetaCampo}
        </label>
        <textarea
          id="situacion"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={5}
          placeholder={t.analizador.marcador}
          aria-describedby="privacidad-analisis"
          className="mt-2 w-full rounded-none border-2 border-input bg-card p-4 text-base placeholder:text-muted-foreground"
        />
        <p id="privacidad-analisis" className="mt-2 text-sm text-muted-foreground">
          {t.analizador.privacidad}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Boton type="submit" tamano="lg" disabled={estado === "cargando"}>
            {estado === "cargando" ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            )}
            {estado === "cargando" ? t.analizador.analizando : t.analizador.boton}
          </Boton>
          {analisis && (
            <Boton
              variante="contorno"
              tamano="lg"
              onClick={() => {
                setAnalisis(null);
                setTexto("");
                setEstado("inicial");
              }}
            >
              {t.analizador.nuevo}
            </Boton>
          )}
        </div>
      </form>

      <div aria-live="polite" className="mt-6 max-w-3xl">
        {estado === "cargando" && (
          <p className="text-base font-semibold">{t.analizador.analizando}</p>
        )}
        {estado === "error" && error && (
          <Aviso tipo="aviso" titulo={t.analizador.titulo}>
            <p className="m-0">{error}</p>
          </Aviso>
        )}
      </div>

      {analisis && (
        <div
          ref={resultadoRef}
          tabIndex={-1}
          className="mt-10 grid max-w-3xl gap-6 focus:outline-none"
        >
          {analisis.safetyConcern && analisis.safetyMessage && (
            <Aviso tipo="riesgo" titulo={t.analizador.seguridad}>
              <p className="m-0">{analisis.safetyMessage}</p>
            </Aviso>
          )}

          <Tarjeta titulo={t.analizador.resumen} icono={Compass}>
            <p className="m-0">{analisis.summary}</p>
          </Tarjeta>

          <Tarjeta titulo={t.analizador.sabemos} icono={ListChecks}>
            <ListaClara items={analisis.knownFacts} />
          </Tarjeta>

          <Tarjeta titulo={t.analizador.noSabemos} icono={HelpCircle}>
            <ListaClara items={analisis.unknowns} />
          </Tarjeta>

          <Tarjeta titulo={t.analizador.interpretaciones} icono={Sparkles}>
            <ul className="mt-3 list-none space-y-4 p-0">
              {analisis.possibleInterpretations.map((it) => (
                <li key={it.title} className="border-l-4 border-nd-turquesa pl-4">
                  <p className="antetitulo m-0">{t.analizador.posibilidad}</p>
                  <p className="m-0 font-bold">{it.title}</p>
                  <p className="m-0 text-[0.95rem]">{it.explanation}</p>
                </li>
              ))}
            </ul>
          </Tarjeta>

          <Tarjeta titulo={t.analizador.senales} icono={Eye}>
            <ListaClara items={analisis.signalsToObserve} />
          </Tarjeta>

          <Tarjeta titulo={t.analizador.opciones} icono={ListChecks}>
            <ul className="mt-3 grid list-none gap-4 p-0">
              {analisis.options.map((op) => (
                <li key={op.action} className="border border-border p-4">
                  <p className="m-0 font-bold">{op.action}</p>
                  <p className="m-0 mt-2 text-[0.95rem]">
                    <span className="antetitulo block">{t.analizador.beneficio}</span>
                    {op.benefit}
                  </p>
                  <p className="m-0 mt-2 text-[0.95rem]">
                    <span className="antetitulo block">{t.analizador.inconveniente}</span>
                    {op.tradeoff}
                  </p>
                </li>
              ))}
            </ul>
          </Tarjeta>

          <Tarjeta titulo={t.analizador.frase} icono={MessageSquareQuote}>
            {editando ? (
              <>
                <label htmlFor="frase-adaptada" className="text-sm text-muted-foreground">
                  {t.analizador.adaptarAyuda}
                </label>
                <textarea
                  id="frase-adaptada"
                  value={frase}
                  onChange={(e) => setFrase(e.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-none border-2 border-input bg-card p-3 text-base"
                />
              </>
            ) : (
              <blockquote className="m-0 border-l-4 border-nd-magenta pl-4 text-lg italic">
                {frase}
              </blockquote>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <BotonCopiar texto={frase} etiqueta={t.acciones.copiar} />
              <Boton
                variante="contorno"
                tamano="sm"
                onClick={() => setEditando((v) => !v)}
                aria-pressed={editando}
              >
                <Pencil className="h-4 w-4" aria-hidden="true" />
                {t.analizador.adaptar}
              </Boton>
            </div>
          </Tarjeta>

          <Aviso tipo="info" titulo={t.analizador.recuerda}>
            <p className="m-0">{recordatorio}</p>
          </Aviso>

          {relacionadas.length > 0 && (
            <section aria-labelledby="relacionadas-titulo">
              <h2 id="relacionadas-titulo" className="titular text-2xl">
                {t.analizador.relacionadas}
              </h2>
              <ul className="mt-4 list-none space-y-2 p-0">
                {relacionadas.map((s) => (
                  <li key={s.id}>
                    <Link
                      to="/situaciones/$id"
                      params={{ id: s.id }}
                      className="block border border-border p-4 no-underline hover:bg-muted"
                    >
                      <span className="block font-bold text-foreground">{s.titulo}</span>
                      <span className="block text-sm text-muted-foreground">{s.resumen}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </Contenedor>
  );
}
