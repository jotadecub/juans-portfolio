import { motion } from "motion/react";
import type { Experience } from "../../types/experience";
import TechnologyList from "../ui/TechnologyList";

type ExperienceItemProps = {
  experience: Experience;
};

export default function ExperienceItem({
  experience,
}: ExperienceItemProps) {
  const titleId = `experience-${experience.id}`;

  return (
    <li className="relative pl-7 sm:pl-9">
      {/* Punto de la línea de tiempo */}
      <span
        aria-hidden="true"
        className="absolute top-2 -left-1.5 h-2.5 w-2.5 rounded-full bg-[#f3f4f4] ring-4 ring-[#101618]"
      />

      <motion.article
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="grid gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6"
      >
        <p className="pt-0.5 text-xs leading-6 text-[#bbc1c4]">
          <time dateTime={experience.startDate.dateTime}>
            {experience.startDate.label}
          </time>

          <span aria-hidden="true"> — </span>
          <span className="sr-only"> hasta </span>

          {experience.endDate ? (
            <time dateTime={experience.endDate.dateTime}>
              {experience.endDate.label}
            </time>
          ) : (
            <span>Actualidad</span>
          )}
        </p>

        <div className="min-w-0">
          <h3
            id={titleId}
            className="text-base leading-6 font-semibold text-[#f3f4f4]"
          >
            {experience.role}

            <span className="block font-normal text-[#d1d7da]">
              {experience.project}
            </span>
          </h3>

          <p className="mt-2 text-xs font-medium tracking-wide text-[#aab5ba]">
            {experience.context}
          </p>

          <p className="mt-3 text-sm leading-6 text-[#bbc1c4]">
            {experience.description}
          </p>

          <div className="mt-5">
            <TechnologyList
              technologies={experience.technologies}
              theme="light"
            />
          </div>
        </div>
      </motion.article>
    </li>
  );
}