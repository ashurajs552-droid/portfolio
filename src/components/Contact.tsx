"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlitchHeading } from "@/components/ui/GlitchHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import {
  Mail,
  Copy,
  Check,
  Send,
  Terminal,
  FileText,
  Sparkles
} from "lucide-react";

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate Formspree AJAX post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <GlitchHeading
        index="06"
        subtitle="INITIATE COMMUNICATIONS"
        title="Contact & Resume"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Console Box */}
        <div className="lg:col-span-5 space-y-6">
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.2)"
            className="border-slate-800 bg-slate-950/80 p-6 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono-code text-xs text-blue-400">
              <span className="flex items-center gap-2 font-bold">
                <Terminal className="w-4 h-4" /> aashu@terminal:~$
              </span>
              <span className="text-lime-400">ONLINE</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Looking to deploy high-performance computer vision pipelines, local LLM architectures, or custom AI agents? Let&apos;s collaborate.
            </p>

            {/* Resume Button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono-code font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all border border-blue-400/40"
              >
                <FileText className="w-5 h-5" />
                <span>Open Interactive Resume</span>
              </button>
            </div>

            {/* Direct Copy Console List */}
            <div className="space-y-3 font-mono-code pt-2">
              {/* Email */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between group hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white shrink-0"
                  title="Copy email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-lime-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between group hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <GithubIcon className="w-4 h-4 text-slate-200 shrink-0" />
                  <span className="text-xs text-slate-200 truncate">
                    github.com/ashurajs552-droid
                  </span>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white shrink-0"
                  title="Open GitHub"
                >
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between group hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs text-slate-200 truncate">
                    linkedin.com/in/aashu-raj-s
                  </span>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white shrink-0"
                  title="Open LinkedIn"
                >
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Formspree Form Box */}
        <div className="lg:col-span-7">
          <SpotlightCard
            spotlightColor="rgba(132, 204, 22, 0.15)"
            className="border-slate-800 bg-slate-950/80 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 font-mono-code">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                TRANSMIT MESSAGE (FORMSPREE ENDPOINT)
              </span>
              <span className="text-lime-400 text-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> SECURE_SSL
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 font-mono-code">
                <div className="w-12 h-12 rounded-full bg-lime-500/20 border border-lime-400 text-lime-400 mx-auto flex items-center justify-center text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will respond to your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono-code">
                <div>
                  <label className="block text-xs text-slate-400 uppercase mb-1.5">
                    // Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 uppercase mb-1.5">
                    // Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 uppercase mb-1.5">
                    // Message / Project Specs
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, engineering role, or technical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xl shadow-blue-600/30 transition-all border border-blue-400/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Signal</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
