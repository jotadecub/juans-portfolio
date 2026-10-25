export type ExperienceDate = {
  label: string;
  dateTime: string;
};

export type Experience = {
  id: string;
  role: string;
  project: string;
  context?: string;
  startDate: ExperienceDate;
  endDate: ExperienceDate | null;
  description: string;
  highlights?: string[];
  technologies: string[];
};