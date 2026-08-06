import { readFileSync } from "node:fs";

const source = readFileSync("src/components/Globe.tsx", "utf8");

const checks = [
  {
    name: "pauses globe animation when the canvas is outside the viewport",
    passes: /IntersectionObserver/.test(source) && /isVisibleRef/.test(source),
  },
  {
    name: "respects prefers-reduced-motion for the globe animation",
    passes: /prefers-reduced-motion:\s*reduce/.test(source) && /prefersReducedMotionRef/.test(source),
  },
  {
    name: "caps globe devicePixelRatio instead of forcing a constant 2",
    passes: /Math\.min\(window\.devicePixelRatio/.test(source),
  },
];

const failures = checks.filter((check) => !check.passes);

if (failures.length > 0) {
  console.error("Globe performance guard failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log("Globe performance guard passed.");
