"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Calendar, Code2, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "@/components/icons/TechIcon";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const allProjects = [t.projects.featuredProject, ...t.projects.projectList];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <Link
          href={`/${language}`}
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.nav.home}
        </Link>

        <header className="mb-20 max-w-2xl">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-white sm:text-6xl">
            {t.projects.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            {t.projects.subtitle}
          </p>
        </header>

        {/* The project-stack CSS handles the sticky overlapping cards (defined in globals.css) */}
        <ul className="project-stack">
          {allProjects.map((project, idx) => {
            const isFeatured = idx === 0;
            const image = project.image;

            return (
              <li
                key={idx}
                className="project-stack__card"
                style={{ "--card-index": idx } as React.CSSProperties}
              >
                <div className="project-stack__content">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                          <Star className="h-3 w-3 fill-emerald-400" />
                          {t.projects.featuredBadge}
                        </span>
                      )}
                      <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {project.date}
                      </span>
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      {String(idx + 1).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}
                    </p>
                    <h2 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-3xl">
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
                          className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.04] px-2.5 py-2 text-xs text-slate-300"
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
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#090d16] shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-200 active:scale-95"
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
                    <div className="flex h-full min-h-64 items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.1),transparent_45%),linear-gradient(145deg,#0c1120,#090d16)]">
                      <Code2 className="h-16 w-16 text-slate-500/40" />
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
