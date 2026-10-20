"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { useResumeUrl } from "@/hooks/useResumeUrl";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const { t } = useLanguage();
  const resumeUrl = useResumeUrl();

  return (
    <section id="about" className="px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease }}
        className="section-heading"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          {t.about.title}<span className="heading-dot">.</span>
        </h2>

      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="about-portrait relative w-full max-w-xs sm:max-w-sm aspect-[3/4] overflow-hidden">
            <Image
              src="/assets/images/about-me.webp"
              alt={t.about.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="lg:col-span-7 flex flex-col gap-8 justify-center text-center lg:text-left"
        >
          <div className="space-y-4">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {t.about.descriptionParagraph1}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.about.descriptionParagraph2}
            </p>
          </div>

          {/* CTAs & Socials */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {/* Primary CTA */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#090d16] font-medium text-sm transition-all hover:opacity-90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <Mail className="w-4 h-4" />
              {t.about.contactBtn}
            </button>

            {/* Secondary CTA */}
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] text-white font-medium text-sm transition-all hover:bg-white/[0.04] hover:border-white/[0.16] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <FileText className="w-4 h-4" />
              {t.about.resumeBtn}
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 sm:ml-auto">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
