"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="text-sm text-slate-500">
          © {year} {t.home.name}. {t.footer.rights}
        </span>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/jmdurgali03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/[0.16] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/juan-martin-durgali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/[0.16] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
            className="p-2.5 rounded-full border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/[0.16] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
