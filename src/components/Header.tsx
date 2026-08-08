import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Settings2, X } from "lucide-react";
import { Boton } from "./ui/Boton";
import { Logo } from "./Logo";
import { PanelAccesibilidad } from "./PanelAccesibilidad";
import { t } from "@/i18n";

const enlaces = [
  { to: "/", texto: t.nav.inicio, exact: true },
  { to: "/situaciones", texto: t.nav.situaciones },
  { to: "/simulador", texto: t.nav.simulador },
  { to: "/guiones", texto: t.nav.guiones },
  { to: "/relaciones", texto: t.nav.relaciones },
  { to: "/limites-y-seguridad", texto: t.nav.limites },
  { to: "/regulacion", texto: t.nav.regulacion },
  { to: "/glosario", texto: t.nav.glosario },
  { to: "/mi-espacio", texto: t.nav.miEspacio },
] as const;

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [panelAbierto, setPanelAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/85 backdrop-blur-md supports-[backdrop-filter]:bg-card/70">
      <div className="linea-infinito h-1 w-full" data-decorative="true" />
      <a href="#contenido" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="NeuroGuía, ir al inicio" className="min-w-0 no-underline">
          <Logo />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <Link to="/situaciones" className="hidden no-underline md:inline-flex">
            <Boton tamano="sm">
              {t.acciones.explorar}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Boton>
          </Link>

          <div className="relative">
            <Boton
              variante="contorno-multicolor"
              tamano="sm"
              onClick={() => setPanelAbierto((v) => !v)}
              aria-expanded={panelAbierto}
              aria-haspopup="dialog"
            >
              <Settings2 className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{t.accesibilidad.titulo}</span>
              <span className="sr-only sm:hidden">{t.accesibilidad.abrir}</span>
            </Boton>
            {panelAbierto && <PanelAccesibilidad onCerrar={() => setPanelAbierto(false)} />}
          </div>

          <Boton
            variante="contorno"
            tamano="sm"
            className="lg:hidden"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
          >
            {menuAbierto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="sr-only">Menú principal</span>
          </Boton>
        </div>
      </div>

      <nav
        id="menu-principal"
        aria-label="Navegación principal"
        className={`${menuAbierto ? "block" : "hidden"} border-t border-border lg:block lg:border-t-0`}
      >
        <ul className="mx-auto flex max-w-7xl list-none flex-col gap-1 px-4 py-3 sm:px-6 lg:flex-row lg:flex-wrap lg:py-2">
          {enlaces.map((e) => (
            <li key={e.to}>
              <Link
                to={e.to}
                onClick={() => setMenuAbierto(false)}
                activeOptions={{ exact: Boolean("exact" in e && e.exact) }}
                className="group relative block min-h-11 rounded-lg px-3 py-2.5 text-base font-semibold text-nd-azul-ink/85 no-underline transition-colors duration-200 hover:bg-nd-azul-soft hover:text-nd-azul-ink data-[status=active]:text-foreground"
              >
                {e.texto}
                <span
                  aria-hidden="true"
                  className="linea-infinito absolute inset-x-3 bottom-1 h-[3px] rounded-full opacity-0 transition-opacity duration-200 group-data-[status=active]:opacity-100"
                />
              </Link>
            </li>
          ))}
          <li className="mt-2 md:hidden">
            <Link to="/situaciones" className="no-underline" onClick={() => setMenuAbierto(false)}>
              <Boton tamano="sm" className="w-full">
                {t.acciones.explorar}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Boton>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
