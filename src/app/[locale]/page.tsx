"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function LocalePage() {
  return (
    <main>
      <HomeSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <AboutSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <ResumeSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <ProjectsSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <ContactSection />
    </main>
  );
}
