export type Education = {
  id: string;
  program: string;
  institution: string;
  startYear: number;
  endYear?: number;
  status: "completed" | "in-progress";
};

export type Language = {
  id: string;
  name: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
};

export type AboutContent = {
  paragraphs: string[];
  currentFocus: string;
  interests: string;
};