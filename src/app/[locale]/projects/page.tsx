"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";

interface Project {
  title: string;
  date: string;
  description: string;
  githubUrl?: string;
  image?: string;
  images?: string[];
  techIcons?: string[];
}

function ProjectCard({ project, index, total, viewGithub }: { project: Project; index: number; total: number; viewGithub: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 88%", "start 18%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.35 });
  const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [72, 0]);
  const scale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [0.94, 1]);
  const opacity = useTransform(progress, [0, 0.45, 1], reduceMotion ? [1, 1, 1] : [0.2, 0.75, 1]);
  const rotate = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [index % 2 === 0 ? -1.2 : 1.2, 0]);

  return (
    <div ref={cardRef} className="relative mb-[18vh] last:mb-0" style={{ zIndex: index + 1 }}>
      <motion.article
        style={{ y, scale, opacity, rotate, transformOrigin: "center top" }}
        className="sticky top-24 overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/95 shadow-[0_-12px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
        <div className="grid grid-cols-1 items-center gap-7 p-6 sm:p-9 md:grid-cols-[1.1fr_1.4fr] lg:gap-10">
          <div className="min-w-0">
            <div className="group/image relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-700/60 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.22),transparent_45%),linear-gradient(145deg,#1e293b,#0f172a)]">
              {(project.image || project.images?.[0]) ? (
                <>
                  <Image src={project.image ?? project.images![0]} alt={project.title} fill sizes="(min-width: 1280px) 460px, (min-width: 768px) 42vw, 100vw" className="object-cover transition duration-700 group-hover/image:scale-[1.04]" />
                  {project.images?.[1] && (
                    <div className="absolute bottom-3 left-3 h-[42%] w-[50%] overflow-hidden rounded-lg border border-white/20 bg-slate-900 shadow-2xl transition duration-500 group-hover/image:-translate-y-1 group-hover/image:scale-105">
                      <Image src={project.images[1]} alt={`${project.title} landing page`} fill sizes="240px" className="object-cover" />
                    </div>
                  )}
                </>
              ) : <Code2 className="h-14 w-14 text-purple-300/55" />}
            </div>
            <div className="mt-3 text-center font-mono text-xs tracking-[0.2em] text-slate-500">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
              <span className="rounded-full border border-slate-700/70 bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-400">{project.date}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.techIcons?.map((techName) => (
                <div key={techName} className="group/tech relative rounded-xl border border-slate-700/60 bg-slate-800/60 p-2.5 transition hover:-translate-y-1 hover:border-purple-500/50">
                  <TechIcon name={techName} className="h-6 w-6" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-700/50 bg-slate-950/95 px-2 py-1 text-xs font-semibold text-purple-300 opacity-0 transition-opacity group-hover/tech:opacity-100">{techName}</span>
                </div>
              ))}
            </div>
            {project.githubUrl && (
              <div className="mt-2 flex justify-end border-t border-slate-800/80 pt-4">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:border-transparent hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20">
                  <GithubIcon className="h-4 w-4" />{viewGithub}<ExternalLink className="h-4 w-4 opacity-70" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  
  // Combine featured and regular projects
  const allProjects = [
    t.projects.featuredProject,
    ...t.projects.projectList
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[#0a101e]">
      <div className="max-w-6xl mx-auto">
        <Link 
          href={`/${language}`} 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors group font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver atrás
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{t.projects.title}</h1>
          <p className="text-slate-400 mb-16">{t.projects.subtitle}</p>
        </motion.div>

        <div className="relative pb-28">
          {allProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} total={allProjects.length} viewGithub={t.projects.viewGithub} />
          ))}
        </div>
      </div>
    </main>
  );
}
