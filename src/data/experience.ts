import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "chickenboom",
    role: "Freelancer Full Stack",
    project: "ChickenBoom - Restaurante",
    startDate: {
      label: "Sept 2026",
      dateTime: "2026-09",
    },
    endDate: {
      label: "Nov 2026",
      dateTime: "2026-11",
    },
    description:
      "Sistema de punto de venta y gestión para restaurantes.",
    highlights: [
      "Desarrollé la gestión de inventario, productos y promociones.",
      "Integré el manejo de pedidos y domicilios en una misma plataforma.",
      "Implementé un módulo de arqueo de caja para apoyar el control financiero y la trazabilidad de las operaciones.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "ShadCN UI",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Postman",
    ],
  },
  {
    id: "montañas-azules",
    role: "Desarrollador FullStack",
    project: "Fundación Montañas Azules - HIC",
    startDate: {
      label: "Ene 2025",
      dateTime: "2025-01",
    },
    endDate: {
      label: "Jul 2025",
      dateTime: "2025-07",
    },
    description:
      "Plataforma para el control, seguimiento y visualización de información.",
    highlights: [
      "Desarrollé vistas y gráficos para consultar y analizar datos de ventas.",
      "Automaticé la corrección de consolidaciones bancarias para reducir tareas y errores manuales.",
      "Diseñé interfaces adaptables centradas en la experiencia de usuario.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Postman",
    ],
  },
  {
    id: "superventas",
    role: "Freelancer FullStack",
    project: "Autoservicio Superventas",
    context: "Aplicación web para la creación de ",
    startDate: {
      label: "Ene 2025",
      dateTime: "2025-01",
    },
    endDate: {
      label: "Jul 2025",
      dateTime: "2025-07",
    },
    description:
      "Sistema de gestión y automatización para la creación de habladores de productos.",
    highlights: [
      "Desarrollé una herramienta para procesar archivos Excel y generar habladores de productos de forma automatizada.",
      "Implementé funcionalidades de exportación a PDF e impresión directa en múltiples formatos.",
      "Optimicé los tiempos operativos al reemplazar el proceso manual por un flujo digital intuitivo y eficiente.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "ShadCN UI",
      "JWT",
      "Postman",
    ],
  },
];