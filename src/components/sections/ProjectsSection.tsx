"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from "@/components/icons/TechIcon";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const projects = [t.projects.featuredProject, ...t.projects.projectList.filter((project) => project.showOnLanding)];
  return (
    <section id="projects" className="portfolio-section py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="section-heading">
        <h2>{t.projects.title}<span className="heading-dot">.</span></h2>
        <Link href={`/${language}/projects`} className="text-link">{t.projectsCta}<ArrowUpRight size={18} /></Link>
      </div>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <motion.article key={project.title} className={`gallery-project group ${index === 0 ? "gallery-project--featured" : ""}`} initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <div className="gallery-image">
              {project.image && <Image src={project.image} alt={project.title} fill sizes={index === 0 ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 768px) 550px, 100vw"} className="object-cover" />}
              {index === 0 && <span className="gallery-featured-label">{t.projects.featuredBadge}</span>}
              {project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.viewGithub}: ${project.title}`} className="gallery-open"><ArrowUpRight size={22} /></Link>}
            </div>
            <div className="gallery-content">
              <div className="gallery-title-row"><h3>{project.title}</h3>{project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gallery-github" aria-label={`${t.projects.viewGithub}: ${project.title}`}><GithubIcon className="w-5 h-5" /></Link>}</div>
              <p>{project.description}</p>
              <div className="gallery-tech">{project.techIcons?.map((techName) => <span key={techName} title={techName}><TechIcon name={techName} className="w-4 h-4" /><span>{techName}</span></span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="flex justify-center mt-12"><Link href={`/${language}/projects`} className="action-button action-button--secondary">{t.projectsCta}<ArrowRight size={18} /></Link></div>
    </section>
  );
}
