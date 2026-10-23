import { motion } from "motion/react";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

const linkClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-[#aab2b6] px-3 py-2 text-xs font-semibold text-[#111618] transition-colors hover:bg-[#e3e7e9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const titleId = `project-${project.id}`;

  const hasLinks = Boolean(
    project.repositoryUrl || project.demoUrl,
  );

  return (
    <motion.article
      aria-labelledby={titleId}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="grid min-w-0 gap-6 rounded-2xl border border-[#d5dadd] bg-white/40 p-5 sm:p-6 xl:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="aspect-4/3 overflow-hidden rounded-xl bg-[#e5e9eb]">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-[#737b80]">
            <span
              aria-hidden="true"
              className="font-mono text-5xl font-bold"
            >
              {"</>"}
            </span>

            <p className="text-center text-xs">
              Vista previa pendiente
            </p>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-col">
        <h3
          id={titleId}
          className="mt-2 text-xl leading-tight font-bold tracking-tight"
        >
          {project.title}
        </h3>
        
        <p className="text-xs font-medium text-[#555e63]">
          {project.category}
        </p>

        <p className="mt-3 text-sm leading-6 text-[#555e63]">
          {project.description}
        </p>

        <ul
          aria-label="Tecnologías utilizadas"
          className="mt-5 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-[#d5dadd] bg-[#e9edef] px-2 py-1 text-xs font-medium text-[#39494f]"
            >
              {technology}
            </li>
          ))}
        </ul>

        {hasLinks && (
          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} (se abre en otra pestaña)`}
                  className={linkClass}
                >
                  Ver código
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver demo de ${project.title} (se abre en otra pestaña)`}
                  className={linkClass}
                >
                  Ver demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}