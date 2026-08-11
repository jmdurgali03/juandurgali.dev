"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  
  // Combine featured and regular projects
  const allProjects = [
    t.projects.featuredProject,
    ...t.projects.projectList
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[#0a101e]">
      <div className="max-w-4xl mx-auto">
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

        <div className="relative pb-32 space-y-4">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              className="sticky rounded-3xl border border-slate-700 bg-slate-900 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
              style={{ top: `${80 + idx * 40}px` }}
            >
              {/* Fake thumbnail */}
              <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center p-6 text-center">
                <Code2 className="w-16 h-16 text-purple-400/30 mb-2" />
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-sm font-medium border border-slate-700/50">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.techIcons?.map((techName: string, i: number) => (
                    <div
                      key={i}
                      className="group/tech relative flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 hover:scale-110 transition-all cursor-pointer"
                    >
                      <TechIcon name={techName} className="w-6 h-6" />
                      <span className="absolute -bottom-7 opacity-0 group-hover/tech:opacity-100 text-xs font-semibold text-purple-300 transition-opacity whitespace-nowrap bg-slate-900/90 px-2 py-1 rounded-md border border-slate-700/50">
                        {techName}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mt-2 border-t border-slate-800/50 flex justify-end">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-purple-600 text-white font-medium transition-all shadow-lg hover:shadow-purple-500/25 border border-slate-700 hover:border-transparent"
                  >
                    <GithubIcon className="w-4 h-4" />
                    {t.projects.viewGithub}
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
