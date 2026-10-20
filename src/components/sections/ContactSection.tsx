"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import Globe from "@/components/Globe";
import { toast } from "sonner";
import Link from "next/link";

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t.contact.form.success);
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        toast.error(t.contact.form.error);
      }
    } catch {
      toast.error(t.contact.form.connectionError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="section-heading"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
          {t.contact.title}<span className="heading-dot">.</span>
        </h2>

      </motion.div>

      {/* 2-Column Grid: Form + Info + Socials on LEFT, Globe 3D on RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT COLUMN: Form + Info + Socials */}
        <motion.div
          initial={{ opacity: 1, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Contact Form Card */}
          <div className="contact-form p-6 sm:p-8 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2.5 flex flex-col">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all text-base"
                  />
                </div>
                <div className="space-y-2.5 flex flex-col">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all text-base"
                  />
                </div>
              </div>

              <div className="space-y-2.5 flex flex-col">
                <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  maxLength={150}
                  required
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all text-base"
                />
              </div>

              <div className="space-y-2.5 flex flex-col">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  name="message"
                  maxLength={3000}
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all text-base resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 disabled:bg-slate-400 text-[#090d16] font-semibold text-sm transition-all active:scale-[0.99]"
              >
                {isSending ? (
                  <span>{t.contact.form.sending}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.contact.form.sendBtn}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links Sub-Card */}
          <div className="contact-info py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Info */}
            <div className="space-y-3 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-emerald-400 shrink-0 border border-white/[0.08]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">{t.contact.emailLabel}</span>
                  <Link href={`mailto:${t.contact.emailValue}`} className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                    {t.contact.emailValue}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-emerald-400 shrink-0 border border-white/[0.08]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">{t.contact.locationLabel}</span>
                  <span className="text-sm font-semibold text-white">{t.contact.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0 border-t sm:border-t-0 sm:border-l border-white/[0.08] pt-4 sm:pt-0 sm:pl-6">
              <Link
                href="https://github.com/jmdurgali03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.16] transition-all text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/juan-martin-durgali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.16] transition-all text-xs font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Dark 3D Globe */}
        <motion.div
          initial={{ opacity: 1, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="contact-globe w-full p-4 flex items-center justify-center overflow-hidden">
            <Globe />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
