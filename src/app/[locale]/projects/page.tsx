"use client";

import React, { type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Code2, ExternalLink, Star } from "lucide-react";

import TechIcon from "@/components/icons/TechIcon";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const allProjects = [
    { ...t.projects.featuredProject, featured: true },
    ...t.projects.projectList.map((project) => ({ ...project, featured: false })),
  ];

  return (
    <main className="min-h-screen bg-[#0a101e] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${language}`}
          className="group mb-10 inline-flex items-center gap-2 font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Volver atrás
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            {t.projects.title}
          </h1>
          <p className="text-slate-400">{t.projects.subtitle}</p>
        </motion.div>

        <ul className="project-stack" aria-label={t.projects.title}>
          {allProjects.map((project, idx) => {
            const image = project.image ?? ("images" in project ? project.images?.[0] : undefined);

            return (
              <li
                key={project.title}
                className="project-stack__card group"
                style={{ "--card-index": idx } as CSSProperties}
              >
                <div className="project-stack__content">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                          <Star className="h-3 w-3 fill-emerald-400" />
                          {t.projects.featuredBadge}
                        </span>
                      )}
                      <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </span>
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      {String(idx + 1).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}
                    </p>
                    <h2 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-purple-300 sm:text-3xl">
                      {project.title}
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                      {project.techIcons?.map((techName: string) => (
                        <div
                          key={techName}
                          title={techName}
                          className="flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/70 px-2.5 py-2 text-xs text-slate-300"
                        >
                          <TechIcon name={techName} className="h-4 w-4" />
                          <span>{techName}</span>
                        </div>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-purple-500"
                      >
                        <GithubIcon className="h-4 w-4" />
                        {t.projects.viewGithub}
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="project-stack__visual">
                  {image ? (
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="flex h-full min-h-64 items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.22),transparent_45%),linear-gradient(145deg,#1e293b,#0f172a)]">
                      <Code2 className="h-16 w-16 text-purple-300/55" />
                    </div>
                  )}
                  <div className="project-stack__visual-shade" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
