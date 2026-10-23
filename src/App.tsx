import { MotionConfig } from "motion/react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";

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

      <Footer />
    </MotionConfig>
  );
}