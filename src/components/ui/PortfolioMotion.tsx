"use client";

import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export default function PortfolioMotion({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
      {children}
    </MotionConfig>
  );
}
