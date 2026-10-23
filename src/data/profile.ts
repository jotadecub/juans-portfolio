type Profile = {
  initials: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  cvUrl?: string;
  imageUrl?: string;
};

export const profile: Profile = {
  initials: "JC",
  firstName: "Juan David",
  lastName: "Cubides Florez",
  role: "Desarrollador de Software",
  description:
    "Me apasiona la tecnología y la creación de soluciones útiles. Busco seguir aprendiendo y afrontar nuevos retos como desarrollador.",

  email: "juandavidcubidesflorez@example.com",
  githubUrl: "https://github.com/jotadecub",
  linkedinUrl: "https://www.linkedin.com/in/jotadecub/",
  cvUrl: "/cv.pdf",
  imageUrl: "/images/hero.webp",
};