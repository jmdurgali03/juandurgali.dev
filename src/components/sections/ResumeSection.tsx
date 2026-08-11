"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Heart,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";

type ResumeTab = "education" | "experience" | "skills" | "interests";

export default function ResumeSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ResumeTab>("education");

  const tabs = [
    { id: "education" as ResumeTab, label: t.resume.tabs.education, icon: GraduationCap },
    { id: "experience" as ResumeTab, label: t.resume.tabs.experience, icon: Briefcase },
    { id: "skills" as ResumeTab, label: t.resume.tabs.skills, icon: Wrench },
    { id: "interests" as ResumeTab, label: t.resume.tabs.interests, icon: Heart },
  ];

  return (
    <section id="resume" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          {t.resume.title}
        </h2>
        <p className="text-sm tracking-widest text-slate-500 mb-2">
          {t.resume.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* Tab Layout: Lateral/Top Tabs + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Tabs Bar */}
        <div className="lg:col-span-3 grid grid-cols-4 lg:flex lg:flex-col gap-1 sm:gap-2 p-0 lg:p-2 lg:rounded-2xl lg:border lg:border-slate-800 lg:bg-slate-900/40 lg:backdrop-blur-md lg:shadow-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col lg:flex-row items-center gap-1.5 lg:gap-3 px-1 lg:px-3.5 py-2 lg:py-3 rounded-xl font-medium text-xs lg:text-sm transition-all duration-300 w-full text-center lg:text-left group ${
                  isActive
                    ? "text-white bg-purple-600/15 border border-purple-500/30 shadow-lg shadow-purple-500/5"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                <div
                  className={`p-1.5 lg:p-2 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/30 lg:scale-105"
                      : "bg-slate-800/80 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-semibold text-xs lg:text-sm tracking-wide">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-xl border border-purple-500/40 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-md min-h-[420px] shadow-2xl">
          <AnimatePresence mode="wait">
            {/* EDUCATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.education}</h3>
                </div>

                <div className="space-y-6 pt-2">
                  {t.resume.educationList.map((item, idx) => (
                    <div key={idx} className="group relative p-5 rounded-2xl bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800/40 hover:border-purple-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="space-y-3 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.degree}</h4>
                            <p className="text-sm font-medium text-purple-400/90 mt-0.5">{item.institution}</p>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/50 text-purple-300 text-xs font-medium border border-slate-700 shrink-0">
                            <Calendar className="w-3.5 h-3.5" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map((tag: string, tIdx: number) => (
                              <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/50 text-purple-200 text-xs font-medium border border-slate-700/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.experience}</h3>
                </div>

                <div className="space-y-6 pt-2">
                  {t.resume.experienceList.map((item, idx) => (
                    <div key={idx} className="group relative p-5 rounded-2xl bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800/40 hover:border-purple-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="space-y-3 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.role}</h4>
                            <p className="text-sm font-medium text-purple-400/90 mt-0.5">{item.company}</p>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/50 text-purple-300 text-xs font-medium border border-slate-700 shrink-0">
                            <Calendar className="w-3.5 h-3.5" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map((tag: string, tIdx: number) => (
                              <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/50 text-purple-200 text-xs font-medium border border-slate-700/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SKILLS WITH TECH ICONS */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.skills}</h3>
                </div>

                <div className="space-y-6">
                  {t.resume.skillsCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        {cat.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {cat.items.map((skillName, sIdx) => (
                          <motion.div
                            key={sIdx}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-purple-500/50 hover:bg-slate-800 text-slate-200 text-sm font-medium transition-all shadow-md cursor-default"
                          >
                            <TechIcon name={skillName} className="w-5 h-5 shrink-0" />
                            <span>{skillName}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* INTERESTS */}
            {activeTab === "interests" && (
              <motion.div
                key="interests"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.interests}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {t.resume.interestsList.map((interest, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
                    >
                      <h4 className="text-white font-semibold text-sm">{interest.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{interest.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
