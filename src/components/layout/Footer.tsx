import { profile } from "../../data/profile";

const linkClass =
  "rounded-sm text-sm text-[#bbc1c4] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export default function Footer() {

  return (
    <footer className="bg-[#101618] text-[#f3f4f4]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col gap-8 border-t border-[#354044] py-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="inline-block rounded-sm text-2xl font-extrabold tracking-tighter focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {profile.initials}
            </a>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#bbc1c4]">
              Gracias por visitar mi portfolio.
              Si tienes una oportunidad o una idea, conversemos.
            </p>

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className={`${linkClass} mt-3 inline-block max-w-full break-all`}
              >
                {profile.email}
              </a>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <nav
              aria-label="Enlaces del pie de página"
              className="flex flex-wrap gap-x-5 gap-y-3"
            >
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                  <span className="sr-only">
                    {" "}(se abre en otra pestaña)
                  </span>
                </a>
              )}

              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                  <span className="sr-only">
                    {" "}(se abre en otra pestaña)
                  </span>
                </a>
              )}

              <a href="#inicio" className={linkClass}>
                Volver arriba
                <span aria-hidden="true"> ↑</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}