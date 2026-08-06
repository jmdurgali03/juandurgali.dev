"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Frontend simulation — backend Nodemailer endpoint coming next session
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
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
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">
          {t.contact.subtitle}
        </p>
        <div className="section-divider w-20 mx-auto" />
      </motion.div>

      {/* Form + Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/30"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.contact.form.subject}
              </label>
              <input
                type="text"
                required
                placeholder={t.contact.form.subjectPlaceholder}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.contact.form.message}
              </label>
              <textarea
                rows={5}
                required
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white font-medium text-sm border border-purple-400/30 transition-all active:scale-[0.99]"
            >
              {status === "sending" ? (
                <span>{t.contact.form.sending}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.contact.form.sendBtn}
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-medium flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {t.contact.form.success}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Contact Info */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              {t.contact.directTitle}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">{t.contact.emailLabel}</span>
                  <a href="mailto:contact@devportfolio.com" className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                    contact@devportfolio.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">{t.contact.locationLabel}</span>
                  <span className="text-sm font-semibold text-white">{t.contact.locationValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-4">
            <h3 className="text-base font-bold text-white">{t.contact.socialsTitle}</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/30 transition-all text-sm font-medium"
              >
                <GithubIcon className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-purple-500/30 transition-all text-sm font-medium"
              >
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
