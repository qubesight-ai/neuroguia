import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card" data-reading-hide="true">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="m-0 text-lg font-extrabold">
            Neuro<span className="text-primary">Guía</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Comprender las normas sociales sin dejar de ser tú.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="text-base font-bold">Secciones</h2>
          <ul className="mt-2 list-none space-y-1 p-0 text-sm">
            <li>
              <Link to="/limites-y-seguridad" className="text-muted-foreground underline">
                Seguridad y límites
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="text-muted-foreground underline">
                Privacidad
              </Link>
            </li>
            <li>
              <Link to="/sobre-el-proyecto" className="text-muted-foreground underline">
                Sobre el proyecto
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-muted-foreground underline">
                Contacto y sugerencias
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold">Aviso importante</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Este sitio ofrece información educativa. No sustituye atención psicológica, médica ni
            legal. Si estás en peligro inmediato, comunícate con los servicios de emergencia de tu
            país o busca ayuda de una persona de confianza.
          </p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-sm text-muted-foreground sm:px-6">
        Hecho desde una perspectiva de respeto a la neurodiversidad. Nada sobre nosotros sin
        nosotros.
      </div>
    </footer>
  );
}