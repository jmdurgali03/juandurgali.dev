import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://juandurgali.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["es", "en"].flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages: { es: `${siteUrl}/es`, en: `${siteUrl}/en` } },
    },
    {
      url: `${siteUrl}/${locale}/projects`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: { es: `${siteUrl}/es/projects`, en: `${siteUrl}/en/projects` },
      },
    },
  ]);
}
