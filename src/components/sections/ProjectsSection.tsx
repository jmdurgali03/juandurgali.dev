"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Star, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";
import Link from "next/link";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          {t.projects.title}
        </h2>
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
          {t.projects.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-purple-500/30 transition-all shadow-xl backdrop-blur-md">
          {/* Image Placeholder */}
          <div className="lg:col-span-5 aspect-video rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center justify-center p-6 text-center group-hover:border-purple-500/30 transition-all">
            <Code2 className="w-14 h-14 text-purple-400/50 mb-2" />
            <span className="text-xs text-slate-500 font-mono">[Project Image]</span>
          </div>

          {/* Info */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-emerald-400" />
                {t.projects.featuredBadge}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3" />{t.projects.featuredProject.date}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {t.projects.featuredProject.title}
            </h3>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.projects.featuredProject.description}
            </p>

            {/* Tech Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech:</span>
              <div className="flex flex-wrap items-center gap-2">
                {t.projects.featuredProject.techIcons?.map((techName: string, i: number) => (
                  <div
                    key={i}
                    title={techName}
                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-purple-500/40 transition-all"
                  >
                    <TechIcon name={techName} className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={t.projects.featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium border border-purple-400/30 transition-all w-fit shadow-md hover:scale-105 active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              {t.projects.viewGithub}
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 flex flex-col justify-between group hover:border-purple-500/30 transition-all shadow-lg backdrop-blur-md"
          >
            <div className="space-y-4">
              {/* Image Placeholder */}
              <div className="aspect-video rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center justify-center p-4 text-center group-hover:border-purple-500/30 transition-all">
                <Code2 className="w-10 h-10 text-purple-400/40 mb-1" />
                <span className="text-xs text-slate-600 font-mono">[Image]</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
              {/* Tech Icons for smaller projects */}
              <div className="flex items-center gap-2">
                {project.techIcons?.map((techName: string, i: number) => (
                  <div
                    key={i}
                    title={techName}
                    className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60"
                  >
                    <TechIcon name={techName} className="w-4 h-4" />
                  </div>
                ))}
              </div>

              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500/30 transition-all"
                aria-label={t.projects.viewGithub}
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
