"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const certificates = [
  {
    id: "utn-full-stack", mark: "UTN", tag: "Full Stack", issuer: "UTN · Buenos Aires",
    title: "Diplomatura en Programación Web Full Stack", date: "2024-12-30", hours: 150,
    color: "#a4e8c4", width: 1432, height: 1012,
    verification: "https://sysgestion.frba.utn.edu.ar/alumnos/validar_certificado",
    code: "CER-L98JR3JF-107479",
  },
  {
    id: "nestjs-backend", mark: "Nest", tag: "Backend", issuer: "Udemy · Fernando Herrera",
    title: "Nest: Desarrollo backend escalable con Node", date: "2026-03-31", hours: 24,
    color: "#e8b5af", width: 2720, height: 2023,
    verification: "https://www.udemy.com/certificate/UC-8432151c-a6c8-4e68-8c44-b41c33f78fbb/",
    code: "",
  },
];

export default function CertificatesSection() {
  const { language } = useLanguage();
  const es = language === "es";
  const viewport = useRef<HTMLDivElement>(null);
  const previous = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const chosen = opened === null ? null : certificates[opened];
  const date = (value: string) => new Intl.DateTimeFormat(es ? "es-AR" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(value));

  useEffect(() => {
    const area = viewport.current;
    if (!area) return;
    const badges = Array.from(area.querySelectorAll<HTMLButtonElement>(".credential-badge"));
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const controller = new AbortController();
    const signal = controller.signal;
    let position = .5, target = .5, raf = 0, lastTime = 0, selected = -1;
    let previousScroll = window.scrollY;
    let ignoreClick = false;
    let drag: { id: number; x: number; y: number; last: number; time: number; speed: number; start: number; moved: boolean } | null = null;
    const clamp = (n: number) => Math.max(0, Math.min(badges.length - 1, n));
    const spacing = () => Math.min(310, area.clientWidth * .68);
    const draw = (now: number) => {
      raf = 0;
      const dt = Math.min(50, now - (lastTime || now - 16));
      lastTime = now;
      position = reduced.matches ? target : position + (target - position) * (1 - Math.pow(.86, dt / 16.67));
      if (!reduced.matches) {
        const radius = Math.max(640, area.clientWidth * .9);
        badges.forEach((badge, i) => {
          const x = (i - position) * spacing();
          const y = radius - Math.sqrt(radius * radius - x * x);
          const angle = Math.asin(x / radius) * 180 / Math.PI;
          badge.style.transform = `translate3d(${x}px,${y}px,0) rotate(${angle}deg)`;
        });
      }
      const index = Math.round(position);
      if (index !== selected) { selected = index; setActive(index); }
      if (previous.current) previous.current.disabled = target <= 0;
      if (next.current) next.current.disabled = target >= badges.length - 1;
      if (Math.abs(target - position) > .0005) raf = requestAnimationFrame(draw);
      else { position = target; lastTime = 0; }
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const go = (index: number) => { target = clamp(index); wake(); };
    previous.current?.addEventListener("click", () => go(Math.ceil(target) - 1), { signal });
    next.current?.addEventListener("click", () => go(Math.floor(target) + 1), { signal });
    area.addEventListener("pointerdown", e => {
      if (reduced.matches || e.button !== 0) return;
      ignoreClick = false;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, last: e.clientX, time: performance.now(), speed: 0, start: target, moved: false };
    }, { signal });
    area.addEventListener("pointermove", e => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.max(Math.abs(dx), Math.abs(dy)) > 8) {
        if (Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
        drag.moved = true; area.setPointerCapture(e.pointerId);
      }
      if (!drag.moved) return;
      const now = performance.now();
      drag.speed = (e.clientX - drag.last) / Math.max(8, now - drag.time);
      drag.last = e.clientX; drag.time = now;
      target = clamp(drag.start - dx / spacing()); ignoreClick = true; wake();
    }, { signal });
    const release = (e: PointerEvent) => {
      if (!drag || drag.id !== e.pointerId) return;
      const d = drag; drag = null;
      if (area.hasPointerCapture(e.pointerId)) area.releasePointerCapture(e.pointerId);
      if (d.moved) go(Math.round(target - (performance.now() - d.time < 100 ? d.speed : 0) * 140 / spacing()));
    };
    area.addEventListener("pointerup", release, { signal });
    area.addEventListener("pointercancel", e => {
      if (drag?.id === e.pointerId) { drag = null; go(Math.round(target)); }
    }, { signal });
    area.addEventListener("click", e => {
      if (ignoreClick && e.detail > 0) { e.stopImmediatePropagation(); e.preventDefault(); ignoreClick = false; }
    }, { capture: true, signal });
    area.addEventListener("wheel", e => {
      if (reduced.matches || e.ctrlKey || Math.abs(e.deltaY) >= Math.abs(e.deltaX) && !e.shiftKey) return;
      e.preventDefault(); target = clamp(target + (e.deltaX || e.deltaY) / spacing()); wake();
    }, { passive: false, signal });
    window.addEventListener("scroll", () => {
      const delta = window.scrollY - previousScroll;
      previousScroll = window.scrollY;
      const box = area.getBoundingClientRect();
      if (!reduced.matches && !drag && !dialog.current?.open && box.top < window.innerHeight && box.bottom > 0) {
        target = clamp(target + delta / 850); wake();
      }
    }, { passive: true, signal });
    area.addEventListener("keydown", e => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const index = e.key === "Home" ? 0 : e.key === "End" ? badges.length - 1 : clamp(Math.round(target) + (e.key === "ArrowRight" ? 1 : -1));
      go(index); badges[index].focus({ preventScroll: true });
    }, { signal });
    badges.forEach((badge, index) => badge.addEventListener("focus", () => go(index), { signal }));
    const layout = () => { badges.forEach(b => { b.style.transform = ""; }); wake(); };
    const observer = new ResizeObserver(layout); observer.observe(area);
    reduced.addEventListener("change", layout, { signal });
    wake();
    return () => { controller.abort(); observer.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (opened === null) return;
    const modal = dialog.current;
    if (!modal) return;
    modal.showModal();
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      modal.close(); document.documentElement.style.overflow = overflow;
      lastTrigger.current?.focus({ preventScroll: true });
    };
  }, [opened]);

  return (
    <section id="certificates" aria-labelledby="certificates-title" className="credentials-section max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24">
      <div className="section-heading">
        <p className="credentials-eyebrow">{es ? "Formación continua" : "Always learning"}</p>
        <h2 id="certificates-title" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{es ? "Aprender. Crear. Evolucionar" : "Learn. Build. Evolve"}<span className="heading-dot">.</span></h2>
        <p className="credentials-intro">{es ? "Cada aprendizaje, una nueva perspectiva. Explorá mis certificaciones." : "Every learning experience, a new perspective. Explore my certifications."}</p>
      </div>
      <div ref={viewport} className="credentials-viewport" role="region" aria-roledescription={es ? "carrusel" : "carousel"} aria-label={es ? "Certificaciones" : "Certifications"}>
        {certificates.map((cert, index) => (
          <button key={cert.id} className="credential-badge" style={{ "--badge-accent": cert.color, "--badge-index": index } as CSSProperties} aria-haspopup="dialog" aria-label={`${es ? "Ver certificado" : "View certificate"}: ${cert.title}`} onClick={event => { lastTrigger.current = event.currentTarget; setOpened(index); }}>
            <span className="credential-seal" aria-hidden="true"><span className="credential-coin"><strong>{cert.mark}</strong><small>{cert.tag}</small></span></span>
            <span className="credential-issuer">{cert.issuer}</span>
            <span className="credential-name">{cert.title}</span>
            <span className="credential-meta">{cert.hours} {es ? "horas" : "hours"} · {cert.date.slice(0, 4)}</span>
            <span className="credential-open">{es ? "Ver certificado" : "View certificate"} ↗</span>
          </button>
        ))}
      </div>
      <div className="credentials-controls">
        <p>{es ? "Arrastrá para explorar · Clic para abrir" : "Drag to explore · Click to open"}</p>
        <div className="credentials-navigation"><button ref={previous} type="button" aria-label={es ? "Insignia anterior" : "Previous badge"}><ArrowLeft size={18} /></button><span aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / 02</span><button ref={next} type="button" aria-label={es ? "Insignia siguiente" : "Next badge"}><ArrowRight size={18} /></button></div>
      </div>
      <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-title" onClose={() => setOpened(null)} onClick={e => {
        if (e.target !== e.currentTarget) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) setOpened(null);
      }}>
        {chosen && <>
          <header className="certificate-header"><div><p>{chosen.issuer}</p><h3 id="certificate-title">{chosen.title}</h3><p>{date(chosen.date)} · {chosen.hours} {es ? "horas" : "hours"}</p></div><button type="button" autoFocus aria-label={es ? "Cerrar certificado" : "Close certificate"} onClick={() => setOpened(null)}><X size={22} /></button></header>
          <div className="certificate-preview"><Image src={`/assets/certificates/${chosen.id}.png`} alt={`${es ? "Certificado de" : "Certificate for"} Juan Martín Durgali: ${chosen.title}`} width={chosen.width} height={chosen.height} sizes="(max-width: 900px) 95vw, 1000px" /></div>
          <footer className="certificate-footer"><a href={`/assets/certificates/${chosen.id}.pdf`} target="_blank" rel="noopener noreferrer"><FileText size={16} />{es ? "Abrir PDF" : "Open PDF"}</a><a href={chosen.verification} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{es ? "Verificar credencial" : "Verify credential"}</a>{chosen.code && <p>{es ? "Código de verificación" : "Verification code"}: <span>{chosen.code}</span></p>}</footer>
        </>}
      </dialog>
    </section>
  );
}
