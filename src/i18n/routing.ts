import type { Language } from "@/i18n/translations";

export const locales = ["en", "es"] as const satisfies readonly Language[];
export const defaultLocale: Language = "en";

export function isLocale(value: string): value is Language {
  return locales.includes(value as Language);
}

export function localizedPath(locale: Language, hash = "") {
  return `/${locale}${hash}`;
}
