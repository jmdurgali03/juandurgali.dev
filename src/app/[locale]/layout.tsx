import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { isLocale, locales } from "@/i18n/routing";
import type { Metadata } from "next";

const descriptions = {
  es: "Portfolio de Juan Martín Durgali, desarrollador Full Stack especializado en aplicaciones web, automatización e inteligencia artificial.",
  en: "Juan Martín Durgali's portfolio. Full Stack Developer focused on web applications, automation, and artificial intelligence.",
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: locale === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/en" },
    },
    openGraph: {
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
      url: `/${locale}`,
      title: locale === "es" ? "Juan Martín Durgali | Desarrollador Full Stack" : "Juan Martín Durgali | Full Stack Developer",
      description: descriptions[locale],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <LanguageProvider initialLanguage={locale}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </LanguageProvider>
  );
}
