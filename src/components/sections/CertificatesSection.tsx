"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, FileText, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const certificates = [
  {
    id: "utn-full-stack", tone: "mint", label: "Full Stack", tag: "Full Stack", issuer: "UTN · Buenos Aires",
    title: "Diplomatura en Programación Web Full Stack", date: "2024-12-30", hours: 150,
    width: 1432, height: 1012,
    verification: "https://sysgestion.frba.utn.edu.ar/alumnos/validar_certificado",
    code: "CER-L98JR3JF-107479",
  },
  {
    id: "nestjs-backend", tone: "coral", label: "NestJS", tag: "Backend", issuer: "Udemy · Fernando Herrera",
    title: "Nest: Desarrollo backend escalable con Node", date: "2026-03-31", hours: 24,
    width: 2720, height: 2023,
    verification: "https://www.udemy.com/certificate/UC-8432151c-a6c8-4e68-8c44-b41c33f78fbb/",
    code: "",
  },
  {
    id: "n8n-mcp", tone: "violet", label: "n8n + MCP", tag: "IA · MCP", issuer: "Udemy · Fernando Herrera",
    title: "n8n + MCP: Automatización y agentes de IA inteligentes", date: "2026-11-06", hours: 19,
    width: 1600, height: 1190,
    verification: "https://www.udemy.com/certificate/UC-66eaedb8-595e-402b-817e-07b06493503b/",
    code: "",
  },
  {
    id: "sql-postgresql", tone: "blue", label: "PostgreSQL", tag: "PostgreSQL", issuer: "Udemy · Fernando Herrera · DevTalles",
    title: "SQL de cero: Tu guía práctica con PostgreSQL", date: "2026-11-24", hours: 16,
    width: 1600, height: 1190,
    verification: "https://www.udemy.com/certificate/UC-0235c882-3101-4a2e-a918-29d80a817b34/",
    code: "",
  },
];

export default function CertificatesSection() {
  const { language } = useLanguage();
  const es = language === "es";
  const rail = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const chosen = opened === null ? null : certificates[opened];
  const date = (value: string, compact = false) => new Intl.DateTimeFormat(es ? "es-AR" : "en-US", { year: "numeric", month: compact ? "short" : "long", day: "numeric", timeZone: "UTC" }).format(new Date(value));

  const goTo = (index: number) => {
    const track = rail.current;
    const item = track?.children[Math.max(0, Math.min(certificates.length - 1, index))] as HTMLElement | undefined;
    if (!track || !item) return;
    track.scrollTo({
      left: item.offsetLeft - (track.clientWidth - item.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  useEffect(() => {
    const track = rail.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let distance = Infinity;
      Array.from(track.children).forEach((child, index) => {
        const item = child as HTMLElement;
        const delta = (item.offsetLeft + item.clientWidth / 2 - center) / item.clientWidth;
        const amount = Math.min(1, Math.abs(delta));
        item.style.setProperty("--angle", `${-Math.max(-1, Math.min(1, delta)) * 25}deg`);
        item.style.setProperty("--scale", String(1 - amount * .13));
        item.style.setProperty("--opacity", String(1 - amount * .3));
        if (Math.abs(delta) < distance) { distance = Math.abs(delta); nearest = index; }
      });
      setActive(nearest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(track);
    track.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
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
      <div className="credentials-heading">
        <p className="credentials-eyebrow">{es ? "Formación continua" : "Always learning"}</p>
        <h2 id="certificates-title">{es ? "Certificaciones" : "Certifications"}<span className="heading-dot">.</span></h2>
        <p className="credentials-intro">{es ? "Deslizá o usá las flechas →" : "Swipe or use the arrows →"}</p>
      </div>
      <div className="credentials-carousel" role="region" aria-roledescription={es ? "carrusel" : "carousel"} aria-label={es ? "Certificados" : "Certificates"}>
      <ol id="certificates-rail" ref={rail} className="credentials-rail" tabIndex={0} aria-label={es ? "Certificados: desplazamiento horizontal" : "Certificates: horizontal scrolling"} onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        goTo(event.key === "Home" ? 0 : event.key === "End" ? certificates.length - 1 : active + (event.key === "ArrowRight" ? 1 : -1));
      }}>
        {certificates.map((cert, index) => (
          <li key={cert.id} aria-current={active === index ? "true" : undefined}>
            <button type="button" className={`credential-card credential-card--${cert.tone}`} aria-haspopup="dialog" aria-label={`${es ? "Ver certificado" : "View certificate"}: ${cert.title}`} onFocus={() => goTo(index)} onClick={event => { lastTrigger.current = event.currentTarget; setOpened(index); }}>
              <span className="credential-art">
                <span className="credential-orbit credential-orbit--one" aria-hidden="true" />
                <span className="credential-orbit credential-orbit--two" aria-hidden="true" />
                <span className="credential-corner" aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
                <span className="credential-paper-back" aria-hidden="true" />
                <span className="credential-paper">
                  <Image src={`/assets/certificates/${cert.id}.png`} alt={cert.title} width={cert.width} height={cert.height} sizes="(max-width: 639px) 197px, 263px" />
                </span>
                <span className="credential-art-open" aria-hidden="true"><ArrowUpRight size={23} /></span>
              </span>
              <span className="credential-caption"><span className="credential-name">{cert.label}</span><span className="credential-issuer">{index === 0 ? "UTN · Buenos Aires" : "Udemy · Fernando Herrera"}</span></span>
            </button>
          </li>
        ))}
      </ol>
      <div className="credentials-controls">
        <span className="credentials-count" role="status" aria-live="polite" aria-atomic="true"><span className="sr-only">{es ? "Certificado" : "Certificate"} </span>{String(active + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
        <span className="credentials-progress" aria-hidden="true"><span style={{ width: `${(active + 1) / certificates.length * 100}%` }} /></span>
        <div className="credentials-arrows">
          <button type="button" aria-label={es ? "Certificado anterior" : "Previous certificate"} aria-controls="certificates-rail" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowLeft size={20} /></button>
          <button type="button" aria-label={es ? "Certificado siguiente" : "Next certificate"} aria-controls="certificates-rail" disabled={active === certificates.length - 1} onClick={() => goTo(active + 1)}><ArrowRight size={20} /></button>
        </div>
      </div>
      </div>
      <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-title" onClose={() => setOpened(null)} onClick={e => {
        if (e.target !== e.currentTarget) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) setOpened(null);
      }}>
        {chosen && <>
          <header className="certificate-header"><div><p>{chosen.issuer}</p><h3 id="certificate-title">{chosen.title}</h3><p>{date(chosen.date)} · {chosen.hours} {es ? "horas" : "hours"}</p></div><button type="button" autoFocus aria-label={es ? "Cerrar certificado" : "Close certificate"} onClick={() => setOpened(null)}><X size={22} /></button></header>
          <div className="certificate-preview"><Image src={`/assets/certificates/${chosen.id}.png`} alt={`${es ? "Certificado de" : "Certificate for"} Juan Martín Durgali: ${chosen.title}`} width={chosen.width} height={chosen.height} sizes="(max-width: 844px) calc(100vw - 24px), 820px" /></div>
          <footer className="certificate-footer"><a href={`/assets/certificates/${chosen.id}.pdf`} target="_blank" rel="noopener noreferrer"><FileText size={16} />{es ? "Abrir PDF" : "Open PDF"}</a><a href={chosen.verification} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{es ? "Verificar credencial" : "Verify credential"}</a>{chosen.code && <p>{es ? "Código de verificación" : "Verification code"}: <span>{chosen.code}</span></p>}</footer>
        </>}
      </dialog>
    </section>
  );
}
