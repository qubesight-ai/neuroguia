import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, Settings2 } from "lucide-react";
import { Boton } from "./ui/Boton";
import { Logo } from "./Logo";
import { PanelAccesibilidad } from "./PanelAccesibilidad";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
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
  const rutaActual = useRouterState({ select: (s) => s.location.pathname });
  const esActiva = (to: string, exact?: boolean) =>
    exact ? rutaActual === to : rutaActual === to || rutaActual.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
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

          <Sheet open={menuAbierto} onOpenChange={setMenuAbierto}>
            <SheetTrigger asChild>
              <Boton variante="contorno" tamano="sm" className="lg:hidden">
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Abrir menú principal</span>
              </Boton>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[min(20rem,88vw)] flex-col gap-0 overflow-y-auto p-0 sm:max-w-sm"
              aria-label="Navegación principal"
            >
              <SheetHeader className="border-b border-border px-5 py-4 text-left">
                <SheetTitle>Navegación</SheetTitle>
              </SheetHeader>
              <nav aria-label="Navegación principal (móvil)" className="flex-1 px-3 py-3">
                <ul className="flex list-none flex-col gap-1">
                  {enlaces.map((e) => (
                    <li key={e.to}>
                      <SheetClose asChild>
                        <Link
                          to={e.to}
                          activeOptions={{ exact: Boolean("exact" in e && e.exact) }}
                          aria-current={
                            esActiva(e.to, Boolean("exact" in e && e.exact)) ? "page" : undefined
                          }
                          className="flex min-h-11 items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-[0.95rem] font-medium text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground data-[status=active]:border-input data-[status=active]:bg-muted data-[status=active]:font-semibold data-[status=active]:text-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="h-5 w-1 rounded-full bg-transparent transition-colors group-data-[status=active]:bg-foreground data-[status=active]:bg-foreground"
                          />
                          {e.texto}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-border px-5 py-4">
                <SheetClose asChild>
                  <Link to="/situaciones" className="no-underline">
                    <Boton tamano="sm" className="w-full">
                      {t.acciones.explorar}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Boton>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <nav
        id="menu-principal"
        aria-label="Navegación principal"
        className="hidden border-t border-border lg:block lg:border-t-0"
      >
        <ul className="mx-auto flex max-w-7xl list-none flex-row flex-wrap gap-1 px-4 py-2 sm:px-6">
          {enlaces.map((e) => (
            <li key={e.to}>
              <Link
                to={e.to}
                activeOptions={{ exact: Boolean("exact" in e && e.exact) }}
                aria-current={esActiva(e.to, Boolean("exact" in e && e.exact)) ? "page" : undefined}
                className="group relative block min-h-11 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground no-underline transition-colors duration-300 hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-foreground"
              >
                {e.texto}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-0.5 h-px rounded-full bg-foreground/70 opacity-0 transition-opacity duration-300 group-data-[status=active]:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
