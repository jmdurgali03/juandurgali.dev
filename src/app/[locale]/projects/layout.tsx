import type { Metadata } from "next";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const isSpanish = locale === "es";
  return {
    title: isSpanish ? "Proyectos" : "Projects",
    description: isSpanish
      ? "Proyectos de desarrollo de software, automatización e inteligencia artificial de Juan Martín Durgali."
      : "Software development, automation, and artificial intelligence projects by Juan Martín Durgali.",
    alternates: {
      canonical: `/${locale}/projects`,
      languages: { es: "/es/projects", en: "/en/projects", "x-default": "/en/projects" },
    },
    openGraph: { url: `/${locale}/projects` },
  };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
