import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Settings2, X } from "lucide-react";
import { Boton } from "./ui/Boton";
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <a href="#contenido" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="min-w-0 text-xl font-extrabold tracking-tight text-foreground no-underline sm:text-2xl"
        >
          Neuro<span className="text-primary">Guía</span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <div className="relative">
            <Boton
              variante="contorno"
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
                className="block min-h-11 rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground no-underline hover:bg-muted hover:text-foreground data-[status=active]:bg-primary-soft data-[status=active]:font-bold data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:decoration-2 data-[status=active]:underline-offset-4"
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}