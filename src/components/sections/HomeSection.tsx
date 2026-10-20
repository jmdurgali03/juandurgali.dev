"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { useResumeUrl } from "@/hooks/useResumeUrl";
import Link from "next/link";
import Image from "next/image";

export default function HomeSection() {
  const { t } = useLanguage();
  const resumeUrl = useResumeUrl();
  const reducedMotion = useReducedMotion();
  const [solutionIndex, setSolutionIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 160, damping: 25 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), { stiffness: 160, damping: 25 });

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => setSolutionIndex((prev) => (prev + 1) % t.home.solutions.length), 4000);
    return () => clearInterval(timer);
  }, [t.home.solutions.length, reducedMotion]);

  return (
    <section id="home" className="hero-section max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-greeting">{t.home.greeting}<span className="hero-greeting-line" /></p>
          <h1 className="hero-name">
            {t.home.name.split(" ").slice(0, -1).join(" ")}<br />
            <span>{t.home.name.split(" ").at(-1)}<span className="hero-period">.</span></span>
          </h1>
          <div className="hero-role" aria-label={t.home.solutions[0]}>
            <span className="status-dot" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={solutionIndex} initial={{ y: 12, opacity: 0, filter: "blur(4px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={{ y: -12, opacity: 0, filter: "blur(4px)" }} transition={{ duration: 0.25 }} aria-hidden="true">
                {t.home.solutions[solutionIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="hero-description">{t.home.description}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#contact" className="action-button action-button--primary">{t.home.contactBtn}<ArrowUpRight size={18} /></a>
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" className="action-button action-button--secondary"><FileText size={16} />{t.home.resumeBtn}</Link>
          </div>
        </div>
        <div className="hero-portrait-area" style={{ perspective: 1000 }}>
          <div className="portrait-outline" aria-hidden="true" />
          <motion.div className="hero-portrait" style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY }} onPointerMove={(event) => {
            if (event.pointerType !== "mouse" || reducedMotion) return;
            const rect = event.currentTarget.getBoundingClientRect();
            pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
            pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
          }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
            <Image src="/assets/images/home.webp" alt={t.home.name} fill className="object-cover" sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 85vw" priority />
            <div className="portrait-shade" />
            <div className="portrait-caption"><span>{t.contact.locationValue}</span><ArrowUpRight size={20} /></div>
          </motion.div>
          <div className="portrait-mark" aria-hidden="true"><svg viewBox="0 0 60 60" fill="none"><path d="M30 0v60M0 30h60M9 9l42 42M9 51 51 9" stroke="currentColor" strokeWidth="2" /></svg></div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="flex items-center gap-5">
          <Link href="https://github.com/jmdurgali03" target="_blank" rel="noopener noreferrer" className="social-link"><GithubIcon className="w-4 h-4" />GitHub<ArrowUpRight size={12} /></Link>
          <Link href="https://linkedin.com/in/juan-martin-durgali" target="_blank" rel="noopener noreferrer" className="social-link"><LinkedinIcon className="w-4 h-4" />LinkedIn<ArrowUpRight size={12} /></Link>
        </div>
        <a href="#projects" className="hero-explore">{t.nav.projects}<ArrowDown size={16} /></a>
      </div>
    </section>
  );
}
