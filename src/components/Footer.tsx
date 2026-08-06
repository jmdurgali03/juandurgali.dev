"use client";

import React from "react";
import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="text-sm text-slate-500">
          © {year} {t.home.name}. {t.footer.rights}
        </span>

        <p className="text-xs text-slate-600 text-center">
          {t.footer.builtWith}
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 rounded-full border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition-all"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
