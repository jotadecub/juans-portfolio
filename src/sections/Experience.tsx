import ExperienceItem from "../components/experience/ExperienceItem";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="scroll-mt-8 bg-[#101618] py-16 text-[#f3f4f4] sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
            Mi experiencia
          </p>

          <h2
            id="experiencia-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Experiencia
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-[#bbc1c4]">
            Un recorrido por los proyectos en los que he participado,
            las responsabilidades que he asumido y las tecnologías
            que he utilizado.
          </p>
        </div>

        <div className="min-w-0">
          {experiences.length > 0 ? (
            <ol
              aria-label="Experiencias, de la más reciente a la más antigua"
              className="ml-1.5 space-y-10 border-l border-[#667278] pb-2"
            >
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </ol>
          ) : (
            <p className="text-sm leading-6 text-[#bbc1c4]">
              Próximamente compartiré mis experiencias y proyectos.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}