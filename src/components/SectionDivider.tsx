"use client";

import { motion } from "framer-motion";

const svgProps = {
  className: "w-10 h-10 sm:w-12 sm:h-12 shrink-0",
  stroke: "rgba(168, 85, 247, 0.3)",
  strokeWidth: "1.5",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TerminalIcon() {
  return (
    <svg {...svgProps} className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" viewBox="0 0 48 32">
      <rect x="2" y="2" width="44" height="28" rx="4" />
      <polyline points="10,10 18,16 10,22" />
      <line x1="22" y1="22" x2="30" y2="22" />
    </svg>
  );
}

function MouseIcon() {
  return (
    <svg {...svgProps} viewBox="0 0 36 56">
      {/* Mouse body */}
      <rect x={4} y={4} width={28} height={48} rx={14} />
      {/* Center divider line between buttons */}
      <line x1={18} y1={4} x2={18} y2={22} />
      {/* Scroll wheel */}
      <rect x={15.5} y={14} width={5} height={8} rx={2.5} />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg {...svgProps} viewBox="0 0 64 52">
      {/* Screen */}
      <rect x={4} y={4} width={56} height={34} rx={3} />
      {/* Code lines inside screen */}
      <line x1={12} y1={14} x2={32} y2={14} />
      <line x1={12} y1={20} x2={40} y2={20} />
      <line x1={12} y1={26} x2={28} y2={26} />
      <line x1={12} y1={32} x2={36} y2={32} />
      {/* Stand neck */}
      <line x1={32} y1={38} x2={32} y2={44} />
      {/* Stand base */}
      <line x1={20} y1={44} x2={44} y2={44} />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg {...svgProps} viewBox="0 0 64 64">
      {/* CPU Body */}
      <rect x={12} y={12} width={40} height={40} rx={4} />
      {/* Inner circuit */}
      <rect x={22} y={22} width={20} height={20} rx={2} />
      {/* Top pins */}
      <line x1={20} y1={12} x2={20} y2={4} />
      <line x1={32} y1={12} x2={32} y2={4} />
      <line x1={44} y1={12} x2={44} y2={4} />
      {/* Bottom pins */}
      <line x1={20} y1={52} x2={20} y2={60} />
      <line x1={32} y1={52} x2={32} y2={60} />
      <line x1={44} y1={52} x2={44} y2={60} />
      {/* Left pins */}
      <line x1={12} y1={20} x2={4} y2={20} />
      <line x1={12} y1={32} x2={4} y2={32} />
      <line x1={12} y1={44} x2={4} y2={44} />
      {/* Right pins */}
      <line x1={52} y1={20} x2={60} y2={20} />
      <line x1={52} y1={32} x2={60} y2={32} />
      <line x1={52} y1={44} x2={60} y2={44} />
    </svg>
  );
}

const variants = {
  terminal: TerminalIcon,
  mouse: MouseIcon,
  monitor: MonitorIcon,
  cpu: CpuIcon,
};

export default function SectionDivider({
  variant,
}: {
  variant: "terminal" | "mouse" | "monitor" | "cpu";
}) {
  const Icon = variants[variant];

  return (
    <motion.div
      className="flex items-center max-w-5xl mx-auto py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3))",
        }}
      />
      <div className="mx-4">
        <Icon />
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, rgba(168, 85, 247, 0.3), transparent)",
        }}
      />
    </motion.div>
  );
}
