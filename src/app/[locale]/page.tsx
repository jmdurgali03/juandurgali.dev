"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/SectionDivider";

export default function LocalePage() {
  return (
    <main>
      <HomeSection />
      <SectionDivider variant="terminal" />
      <AboutSection />
      <SectionDivider variant="mouse" />
      <ResumeSection />
      <SectionDivider variant="monitor" />
      <ProjectsSection />
      <SectionDivider variant="cpu" />
      <ContactSection />
    </main>
  );
}
