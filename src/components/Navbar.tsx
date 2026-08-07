"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/i18n/translations";
import { localizedPath } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SECTIONS = ["home", "about", "resume", "projects", "contact"] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

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
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
    // Small delay lets the mobile drawer close before scrolling,
    // preventing height reflow from breaking scrollIntoView.
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
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
    <header className="sticky top-0 z-50 w-full glass-nav px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-white italic">
            {t.nav.brand}<span className="text-purple-400">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Lang Dropdown + Resume */}
        <div className="hidden md:flex items-center gap-3">
          {/* Centered Language Dropdown */}
          <div ref={langRef} className="relative inline-flex flex-col items-center">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-900/50"
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
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 py-1 rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl min-w-[110px] overflow-hidden z-50 text-center"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold transition-colors ${
                        language === lang.code
                          ? "bg-purple-600/20 text-purple-300"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium border border-purple-400/30 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resumeBtn}</span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Centered Mobile Lang Toggle */}
          <div ref={mobileLangRef} className="relative inline-flex flex-col items-center">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 border border-slate-700 bg-slate-900/50"
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
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 py-1 rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl min-w-[100px] z-50 text-center"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold ${
                        language === lang.code
                          ? "bg-purple-600/20 text-purple-300"
                          : "text-slate-300 hover:bg-slate-800"
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
            className="p-2 rounded-xl text-slate-300 hover:text-white border border-slate-800 bg-slate-900/50"
            aria-label="Toggle menu"
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
            className="md:hidden mt-3 border-t border-slate-800 pt-3 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-600/20 text-purple-300 font-semibold border border-purple-500/30"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-medium"
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
