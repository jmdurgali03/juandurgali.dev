"use client";

import React from "react";

/**
 * Animated dashed circle border that orbits around a circular image.
 * Props: size (px), className for positioning.
 */
export default function DashedBorder({
  size = 320,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const r = size / 2 - 4;
  const circumference = 2 * Math.PI * r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`absolute pointer-events-none ${className}`}
      fill="none"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="rgba(168, 85, 247, 0.35)"
        strokeWidth="2"
        strokeDasharray="12 8"
        className="dashed-border-animation"
        style={{ strokeDashoffset: 0 }}
      />
    </svg>
  );
}
