"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import Globe from "@/components/Globe";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(t.contact.form.success, {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
        });
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        toast.error(data.error || t.contact.form.error, {
          icon: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
        });
      }
    } catch {
      toast.error(t.contact.form.connectionError, {
        icon: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          {t.contact.title}
        </h2>
        <p className="text-sm tracking-widest text-slate-500 mb-2">
          {t.contact.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* 2-Column Grid: Form + Info + Socials on LEFT, Globe 3D on RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT COLUMN: Form + Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Contact Form Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-2xl space-y-5">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white font-medium text-sm border border-purple-400/30 transition-all active:scale-[0.99] shadow-lg shadow-purple-500/20"
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
          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Info */}
            <div className="space-y-3 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">{t.contact.emailLabel}</span>
                  <Link href={`mailto:${t.contact.emailValue}`} className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                    {t.contact.emailValue}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-medium">{t.contact.locationLabel}</span>
                  <span className="text-sm font-semibold text-white">{t.contact.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6">
              <Link
                href="https://github.com/jmdurgali03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/juan-martin-durgali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all text-xs font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Dark 3D Globe */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="w-full p-4 rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
            <Globe />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
