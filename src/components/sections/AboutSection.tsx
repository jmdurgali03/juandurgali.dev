"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import DashedBorder from "@/components/DashedBorder";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          {t.about.title}
        </h2>
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
          {t.about.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="space-y-4">
            <p className="text-slate-300 text-base leading-relaxed">
              {t.about.descriptionParagraph1}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.about.descriptionParagraph2}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient block">3+</span>
              <span className="text-xs text-slate-500">{t.about.stats.experience}</span>
            </div>
            <div className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient block">15+</span>
              <span className="text-xs text-slate-500">{t.about.stats.projects}</span>
            </div>
            <div className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient block">100%</span>
              <span className="text-xs text-slate-500">{t.about.stats.satisfaction}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-600 transition-all"
            >
              <Mail className="w-4 h-4" />
              {t.about.contactBtn}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm border border-purple-400/30 transition-all"
            >
              <FileText className="w-4 h-4" />
              {t.about.resumeBtn}
            </a>
            <div className="flex items-center gap-2 ml-auto">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Photo with Dashed Border */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative flex items-center justify-center">
            <DashedBorder size={320} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center overflow-hidden">
              <Code2 className="w-24 h-24 text-purple-400/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
