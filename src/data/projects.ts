import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "vetconect",
    title: "VetConect",
    category: "Plataforma de conexión y servicios veterinarios",
    description:
      "Plataforma web que conecta usuarios y ganaderos con veterinarios para centralizar la atención médica animal. Ofrece una experiencia responsiva para gestionar solicitudes de servicio en tiempo real, coordinar la atención y mantener un historial clínico y de vacunación totalmente digitalizado.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "JWT",
      "Postman",
      "Google Maps API",
      "Git",
      "Figma",
    ],

    // image: {
    //   src: "/images/projects/restaurante.webp",
    //   alt: "Panel de ventas y pedidos de la aplicación",
    // },
    // repositoryUrl: "https://github.com/tu-usuario/tu-repositorio",
    // demoUrl: "https://tu-proyecto.com",
  },
];