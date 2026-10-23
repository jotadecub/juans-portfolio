import type {
  AboutContent,
  Education,
  Language,
} from "../types/about";

export const about: AboutContent = {
  paragraphs: [
    "Soy desarrollador de software en formación, con experiencia práctica en aplicaciones web frontend y backend. Me gusta analizar problemas y convertir necesidades reales en soluciones funcionales que optimicen procesos y mejoren la experiencia de los usuarios.",

    "Mi interés por entender cómo funcionan las aplicaciones me llevó a estudiar sistemas y desarrollo de software. A través de proyectos propios y académicos, he trabajado en interfaces, lógica de negocio y bases de datos, con especial interés en sistemas de gestión y plataformas administrativas.",
  ],

  currentFocus:
    "Actualmente fortalezco mis conocimientos en arquitectura de aplicaciones y exploro herramientas de inteligencia artificial para mejorar mi proceso de desarrollo. Busco una oportunidad laboral como desarrollador de software para aportar, aprender de otros profesionales y seguir creciendo.",

  interests:
    "Fuera del código, disfruto jugar voleibol, aprender idiomas y explorar nuevas tecnologías. También me interesa profundizar en ciberseguridad y en el uso de la inteligencia artificial para construir mejores soluciones.",
};

export const education: Education[] = [
  {
    id: "ingenieria-software",
    program: "Ingeniería de Software",
    institution: "Corporación Universitaria Iberoamericana",
    startYear: 2023,
    endYear: 2027,
    status: "in-progress",
  },
  {
    id: "tecnologia-software",
    program: "Tecnología de Análisis y Desarrollo de Software",
    institution: "Servicio Nacional de Aprendizaje",
    startYear: 2023,
    endYear: 2025,
    status: "completed",
  },
  {
    id: "tecnica-sistemas",
    program: "Técnica de Sistemas",
    institution: "Servicio Nacional de Aprendizaje",
    startYear: 2020,
    endYear: 2022,
    status: "completed",
  },
];

export const languages: Language[] = [
  {
    id: "ingles",
    name: "Inglés",
    level: "B2",
  },
  {
    id: "portugues",
    name: "Portugués",
    level: "B1",
  },
];