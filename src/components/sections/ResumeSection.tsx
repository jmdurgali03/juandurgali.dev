"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Heart,
  Calendar,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
          {t.resume.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* Tab Layout: Lateral Tabs + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lateral Tabs */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 p-2 rounded-2xl border border-slate-800 bg-slate-900/30">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all whitespace-nowrap lg:whitespace-normal w-full text-left ${
                  isActive
                    ? "text-white bg-purple-600/20 border border-purple-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/20 min-h-[420px]">
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
                <div className="flex items-center gap-3 mb-1">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{t.resume.tabs.education}</h3>
                </div>
                <div className="section-divider w-full" />

                <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-slate-700 ml-2 pt-2">
                  {t.resume.educationList.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#0a101e] border-2 border-purple-500 group-hover:border-purple-300 transition-all flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-white">{item.degree}</h4>
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-purple-300 text-xs font-medium">
                            <Calendar className="w-3 h-3" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-purple-400">{item.institution}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
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
                <div className="flex items-center gap-3 mb-1">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{t.resume.tabs.experience}</h3>
                </div>
                <div className="section-divider w-full" />

                <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-slate-700 ml-2 pt-2">
                  {t.resume.experienceList.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#0a101e] border-2 border-purple-500 group-hover:border-purple-300 transition-all flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-white">{item.role}</h4>
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-purple-300 text-xs font-medium">
                            <Calendar className="w-3 h-3" />{item.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-purple-400">{item.company}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
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
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Wrench className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{t.resume.tabs.skills}</h3>
                </div>
                <div className="section-divider w-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {t.resume.skillsCategories.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 space-y-3">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-slate-800 pb-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        {cat.category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:border-purple-500/30 hover:text-white transition-all"
                          >
                            <CheckCircle2 className="w-3 h-3 text-purple-400" />
                            {skill}
                          </span>
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
                <div className="flex items-center gap-3 mb-1">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{t.resume.tabs.interests}</h3>
                </div>
                <div className="section-divider w-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {t.resume.interestsList.map((interest, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        {interest.title}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{interest.description}</p>
                    </div>
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
