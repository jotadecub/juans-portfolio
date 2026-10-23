import { MotionConfig } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";

const containerClass = "mx-auto w-full max-w-6xl px-6 sm:px-8";

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
        <Projects />
        <About />
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