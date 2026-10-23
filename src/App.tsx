import { MotionConfig } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";

const containerClass = "mx-auto w-full max-w-6xl px-6 sm:px-8";

const sectionClass = "py-16 sm:py-20 lg:py-24";

const eyebrowClass =
  "mb-3 text-xs font-bold uppercase tracking-[0.2em]";

const titleClass =
  "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl";

const descriptionClass = "mt-4 max-w-xl text-base leading-7";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only z-50 rounded-lg bg-white px-4 py-3 text-black focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1}>
      
        <Hero />

        <Experience />

        {/* Proyectos */}
        <section
          id="proyectos"
          aria-labelledby="proyectos-title"
          className={`${sectionClass} bg-[#f3f4f4]`}
        >
          <div className={containerClass}>
            <p className={eyebrowClass}>Mis proyectos</p>

            <h2 id="proyectos-title" className={titleClass}>
              Proyectos destacados
            </h2>

            <p className={`${descriptionClass} text-[#555e63]`}>
              Una selección de proyectos con sus tecnologías,
              capturas y enlaces.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[1, 2].map((number) => (
                <div
                  key={number}
                  className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-[#aab2b6] p-6"
                >
                  <p className="text-sm text-[#555e63]">
                    Espacio para el proyecto {number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section
          id="sobre-mi"
          aria-labelledby="sobre-mi-title"
          className={`${sectionClass} bg-[#101618] text-[#f3f4f4]`}
        >
          <div
            className={`${containerClass} grid gap-10 lg:grid-cols-2`}
          >
            <div>
              <p className={eyebrowClass}>Sobre mí</p>

              <h2 id="sobre-mi-title" className={titleClass}>
                Un poco sobre mí
              </h2>

              <p
                className={`${descriptionClass} text-[#bbc1c4]`}
              >
                Aquí contaremos tu historia, tus intereses y cómo
                abordas los desafíos al desarrollar software.
              </p>
            </div>

            <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-[#465257] p-6">
              <p className="text-center text-sm text-[#bbc1c4]">
                Aquí irán enfoque, mentalidad y pasiones
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#101618] text-[#f3f4f4]">
        <div className={containerClass}>
          <div className="flex flex-col gap-4 border-t border-[#354044] py-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="w-fit text-xl font-extrabold tracking-tighter"
            >
              JC
            </a>

            <p className="text-sm text-[#bbc1c4]">
              Gracias por visitar mi portfolio.
            </p>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}