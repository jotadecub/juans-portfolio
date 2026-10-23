export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: ProjectImage;
  repositoryUrl?: string;
  demoUrl?: string;
};