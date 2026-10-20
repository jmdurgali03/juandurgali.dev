export default function SectionDivider({ variant }: { variant: "terminal" | "mouse" | "monitor" | "cpu" }) {
  return <div data-divider={variant} aria-hidden="true" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"><div className="h-px bg-white/[0.08]" /></div>;
}
