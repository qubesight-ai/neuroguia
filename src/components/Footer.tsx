import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useT } from "@/i18n";

export function Footer() {
  const t = useT();

  return (
    <footer className="mt-16" data-reading-hide="true">
      <div className="regla-doble w-full" data-decorative="true" />
      <div className="bg-nd-pie text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo claro idGradiente="nd-infinito-pie" />
            <p className="mt-3 text-sm text-white/80">{t.pie.lema}</p>
            <p className="mt-4 text-base font-semibold text-white">{t.pie.cita}</p>
          </div>

          <nav aria-label={t.pie.navPie}>
            <h2 className="border-b border-white/25 pb-2 text-base font-bold uppercase tracking-[0.14em] text-white">
              {t.pie.secciones}
            </h2>
            <ul className="mt-3 list-none space-y-2 p-0 text-sm">
              <li>
                <Link to="/limites-y-seguridad" className="text-nd-enlace-pie underline">
                  {t.pie.seguridad}
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-nd-enlace-pie underline">
                  {t.pie.privacidad}
                </Link>
              </li>
              <li>
                <Link to="/sobre-el-proyecto" className="text-nd-enlace-pie underline">
                  {t.pie.sobre}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-nd-enlace-pie underline">
                  {t.pie.contacto}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="border-b border-white/25 pb-2 text-base font-bold uppercase tracking-[0.14em] text-white">
              {t.pie.avisoTitulo}
            </h2>
            <p className="mt-3 text-sm text-white/80">{t.pie.avisoTexto}</p>
          </div>
        </div>
        <div className="border-t border-white/15 px-4 py-5 text-center text-sm text-white/75 sm:px-6">
          {t.pie.cierre}
        </div>
      </div>
    </footer>
  );
}
