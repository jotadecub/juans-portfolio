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
      "PostgreSQL",
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
  {
    id: "agrotrack",
    title: "AgroTrack",
    category: "Plataforma de gestión y trazabilidad ganadera",
    description:
      "Plataforma web que centraliza la gestión agropecuaria, permitiendo administrar usuarios, animales, terrenos, alimentos, enfermedades y cruces ganaderos desde un solo lugar. Incorpora geolocalización para identificar la ubicación de animales y terrenos, así como códigos QR para consultar rápidamente la información individual de cada animal, optimizando el seguimiento, la organización y la trazabilidad de las operaciones ganaderas.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "JWT",
      "PostgreSQL",
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