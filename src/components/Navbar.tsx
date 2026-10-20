"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useResumeUrl } from "@/hooks/useResumeUrl";
import type { Language } from "@/i18n/translations";
import { localizedPath } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const SECTIONS = ["home", "about", "resume", "projects", "contact"] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const resumeUrl = useResumeUrl();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === `/${language}` || pathname === "/";

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "resume", label: t.nav.resume },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  const languages = [
    { code: "es" as const, flag: "🇦🇷", label: "ES" },
    { code: "en" as const, flag: "🇬🇧", label: "EN" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    if (!isHomePage) return;

    const hashSection = window.location.hash.slice(1);
    const initialSection = SECTIONS.includes(hashSection as (typeof SECTIONS)[number])
      ? hashSection
      : "home";
    const resetFrame = requestAnimationFrame(() => setActiveSection(initialSection));
    let observer: IntersectionObserver;

    const observeSections = () => {
      observer?.disconnect();
      const topInset = Math.min(100, window.innerHeight * 0.2);
      const bottomInset = Math.max(0, window.innerHeight - topInset - 150);
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length) setActiveSection(visible[visible.length - 1].target.id);
        },
        { threshold: 0, rootMargin: `-${topInset}px 0px -${bottomInset}px 0px` }
      );
      SECTIONS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    };

    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      cancelAnimationFrame(resetFrame);
      observer.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, [isHomePage, pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langRef.current && !langRef.current.contains(e.target as Node) &&
        mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    if (!isHomePage) {
      router.push(`/${language}/#${id}`);
      return;
    }

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }
    }, 50);
  };

  const switchLanguage = (lang: Language) => {
    const hash = activeSection && activeSection !== "home" ? `#${activeSection}` : window.location.hash;

    setLanguage(lang);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push(localizedPath(lang, hash));
  };

  return (
    <header className="sticky top-3 z-50 glass-nav mx-3 sm:mx-6 lg:mx-auto lg:w-[calc(100%-80px)] lg:max-w-[1200px] px-4 lg:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group">
          <span className="text-lg font-semibold tracking-tight text-white">
            {t.nav.brand}<span className="text-emerald-400">.</span>
          </span>
        </button>

        {/* Desktop Nav - Pill Container */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.id;
            return (
              <button
                key={link.id}
                aria-current={isActive ? "location" : undefined}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Lang Dropdown + Resume */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Dropdown */}
          <div ref={langRef} className="relative inline-flex flex-col items-center">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label={t.nav.language}
              aria-expanded={langDropdownOpen}
              className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-white border border-white/[0.06] hover:border-white/[0.12] transition-all bg-white/[0.03]"
            >
              <span className="text-base leading-none">{currentLang.flag}</span>
              <span className="font-bold text-xs">{currentLang.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 py-1 rounded-xl bg-[#0c1120] border border-white/[0.08] shadow-2xl min-w-[110px] overflow-hidden z-50 text-center"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold transition-colors ${
                        language === lang.code
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resume CTA */}
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#090d16] text-xs font-semibold transition-all hover:bg-slate-200 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resumeBtn}</span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Lang Toggle */}
          <div ref={mobileLangRef} className="relative inline-flex flex-col items-center">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label={t.nav.language}
              aria-expanded={langDropdownOpen}
              className="flex items-center gap-1.5 px-3 py-1.5 min-h-11 rounded-full text-xs font-bold text-slate-300 border border-white/[0.06] bg-white/[0.03]"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.95 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 py-1 rounded-xl bg-[#0c1120] border border-white/[0.08] shadow-2xl min-w-[100px] z-50 text-center"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold ${
                        language === lang.code
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "text-slate-300 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-11 min-w-11 rounded-xl text-slate-300 hover:text-white border border-white/[0.06] bg-white/[0.03]"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav-drawer lg:hidden mt-3 border-t border-white/[0.06] pt-3 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.06] text-white font-semibold border border-white/[0.08]"
                      : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#090d16] text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              {t.nav.resumeBtn}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
