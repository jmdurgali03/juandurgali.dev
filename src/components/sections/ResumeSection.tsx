"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Wrench, Heart, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";

type Tab = "education" | "experience" | "skills" | "interests";

export default function ResumeSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("education");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "education", label: t.resume.tabs.education, icon: GraduationCap },
    { id: "experience", label: t.resume.tabs.experience, icon: Briefcase },
    { id: "skills", label: t.resume.tabs.skills, icon: Wrench },
    { id: "interests", label: t.resume.tabs.interests, icon: Heart },
  ];

  return (
    <section id="resume" className="py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="section-heading"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
          {t.resume.title}<span className="heading-dot">.</span>
        </h2>

      </motion.div>

      {/* Grid Layout: Tabs Sidebar + Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Tabs Sidebar */}
        <div className="resume-tabs lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 p-3 lg:p-4 rounded-xl text-left transition-all duration-300 group shrink-0 lg:shrink whitespace-nowrap lg:whitespace-normal ${
                  isActive
                    ? "bg-white/[0.06] text-white border border-white/[0.08]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent"
                }`}
              >
                <div
                  className={`p-1.5 lg:p-2 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-400 lg:scale-[1.02]"
                      : "bg-[#0c1120] text-slate-400 border border-white/[0.06] group-hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-semibold text-xs lg:text-sm tracking-wide">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabOutline"
                    className="absolute inset-0 rounded-xl border border-white/[0.1] pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="resume-content lg:col-span-9 p-6 sm:p-8 min-h-[420px]">
          <AnimatePresence mode="wait">
            {/* EDUCATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 1, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.education}</h3>
                </div>

                <div className="space-y-6 pt-2">
                  {t.resume.educationList.map((item, idx) => (
                    <div key={idx} className="resume-entry group relative py-6 border-b border-white/10 transition-colors duration-200">

                      <div className="space-y-3 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{item.degree}</h4>
                            <p className="text-sm font-medium text-slate-400 mt-0.5">{item.institution}</p>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] text-slate-300 text-xs font-medium border border-white/[0.08] shrink-0">
                            <Calendar className="w-3.5 h-3.5" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map((tag: string, tIdx: number) => (
                              <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/[0.06]">
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
                initial={{ opacity: 1, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.experience}</h3>
                </div>

                <div className="space-y-6 pt-2">
                  {t.resume.experienceList.map((item, idx) => (
                    <div key={idx} className="resume-entry group relative py-6 border-b border-white/10 transition-colors duration-200">

                      <div className="space-y-3 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{item.role}</h4>
                            <p className="text-sm font-medium text-slate-400 mt-0.5">{item.company}</p>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] text-slate-300 text-xs font-medium border border-white/[0.08] shrink-0">
                            <Calendar className="w-3.5 h-3.5" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map((tag: string, tIdx: number) => (
                              <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/[0.06]">
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

            {/* SKILLS */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 1, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.skills}</h3>
                </div>

                <div className="space-y-6">
                  {t.resume.skillsCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {cat.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {cat.items.map((skillName, sIdx) => (
                          <motion.div
                            key={sIdx}
                            whileHover={{ scale: 1.02, y: -1 }}
                            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] text-slate-200 text-sm font-medium transition-all shadow-sm cursor-default"
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
                initial={{ opacity: 1, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.resume.tabs.interests}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {t.resume.interestsList.map((interest, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-2 hover:border-white/[0.12] transition-all duration-300"
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
