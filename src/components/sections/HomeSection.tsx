"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import DashedBorder from "@/components/DashedBorder";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function HomeSection() {
  const { t } = useLanguage();
  const [solutionIndex, setSolutionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSolutionIndex((prev) => (prev + 1) % t.home.solutions.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [t.home.solutions.length]);

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start gap-5"
        >
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Greeting */}
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400">
            {t.home.greeting}
          </span>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.home.name}
          </h1>

          {/* Animated Solution Text - always on a separate line */}
          <div className="h-10 sm:h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={solutionIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-lg sm:text-xl font-medium text-slate-400"
              >
                {t.home.solutions[solutionIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
            {t.home.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-600 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              {t.home.contactBtn}
            </button>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm border border-purple-400/30 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              {t.home.resumeBtn}
            </Link>
          </div>
        </motion.div>

        {/* Right: Profile Image with Dashed Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative flex items-center justify-center">
            <DashedBorder size={410} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/home.png"
                alt={t.home.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
