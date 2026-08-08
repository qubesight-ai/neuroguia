import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16" data-reading-hide="true">
      <div className="linea-infinito h-1.5 w-full" data-decorative="true" />
      <div className="bg-nd-pie text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo claro idGradiente="nd-infinito-pie" />
            <p className="mt-3 text-sm text-white/80">
              Comprender las normas sociales sin dejar de ser tú.
            </p>
            <p className="mt-4 text-base font-semibold text-white">
              «No existe una única manera correcta de experimentar el mundo».
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <h2 className="text-base font-bold text-white">Secciones</h2>
            <ul className="mt-3 list-none space-y-2 p-0 text-sm">
              <li>
                <Link to="/limites-y-seguridad" className="text-nd-enlace-pie underline">
                  Seguridad y límites
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-nd-enlace-pie underline">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/sobre-el-proyecto" className="text-nd-enlace-pie underline">
                  Sobre el proyecto
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-nd-enlace-pie underline">
                  Contacto y sugerencias
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-bold text-white">Aviso importante</h2>
            <p className="mt-3 text-sm text-white/80">
              Este sitio ofrece información educativa. No sustituye atención psicológica, médica ni
              legal. Si estás en peligro inmediato, comunícate con los servicios de emergencia de tu
              país o busca ayuda de una persona de confianza.
            </p>
          </div>
        </div>
        <div className="border-t border-white/15 px-4 py-5 text-center text-sm text-white/75 sm:px-6">
          Hecho desde una perspectiva de respeto a la neurodiversidad. Nada sobre nosotros sin
          nosotros.
        </div>
      </div>
    </footer>
  );
}
