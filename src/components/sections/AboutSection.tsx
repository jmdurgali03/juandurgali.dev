"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

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

      {/* Unified Single Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-2xl hover:border-purple-500/20 transition-all"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Rectangular Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/60 shadow-xl group">
              <Image
                src="/assets/images/about-me.png"
                alt={t.about.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a101e]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Description & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <div className="space-y-4">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {t.about.descriptionParagraph1}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {t.about.descriptionParagraph2}
              </p>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-600 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                {t.about.contactBtn}
              </button>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm border border-purple-400/30 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <FileText className="w-4 h-4" />
                {t.about.resumeBtn}
              </Link>

              <div className="flex items-center gap-2.5 sm:ml-auto">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
