import mainData from "@/data/main.json";
import resumeData from "@/data/resume.json";
import projectsData from "@/data/projects.json";

export const translations = {
  es: {
    ...mainData.es,
    resume: resumeData.es,
    projects: projectsData.es,
  },
  en: {
    ...mainData.en,
    resume: resumeData.en,
    projects: projectsData.en,
  },
};

export type Language = "es" | "en";

export function getTranslations(language: Language) {
  return translations[language];
}
