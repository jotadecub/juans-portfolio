import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="scroll-mt-8 bg-[#f3f4f4] py-16 text-[#111618] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
            Mis proyectos
          </p>

          <h2
            id="proyectos-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Proyectos destacados
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#555e63]">
            Una selección de proyectos para mostrar lo que
            construyo, cómo abordo los problemas y las tecnologías
            que utilizo.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-1">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm leading-6 text-[#555e63]">
            Próximamente compartiré mis proyectos.
          </p>
        )}
      </div>
    </section>
  );
}