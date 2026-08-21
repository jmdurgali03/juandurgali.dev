import { useLanguage } from "@/context/LanguageContext";

const RESUME_URLS = {
  es: "/assets/cv-es.pdf",
  en: "/assets/cv-en.pdf",
} as const;

export function useResumeUrl() {
  const { language } = useLanguage();

  return RESUME_URLS[language];
}
