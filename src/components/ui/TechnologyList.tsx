import { FiCode } from "react-icons/fi";
import { getTechnology } from "../../data/technologies";

type TechnologyListProps = {
  technologies: string[];
  theme?: "light" | "dark";
};

const themeClasses = {
  light:
    "border-[#d5dadd] bg-[#e9edef] text-[#39494f]",
  dark:
    "border-[#354044] bg-[#1a2226] text-[#e1e6e8]",
};

export default function TechnologyList({
  technologies,
  theme = "light",
}: TechnologyListProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <ul
      aria-label="Tecnologías utilizadas"
      className="flex flex-wrap gap-2"
    >
      {technologies.map((name) => {
        const technology = getTechnology(name);
        const Icon = technology?.icon ?? FiCode;
        const label = technology?.label ?? name;

        return (
          <li
            key={name}
            className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-2 ${themeClasses[theme]}`}
          >
            <Icon
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4 shrink-0"
            />

            <span className="text-xs font-medium">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}