"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  FileText,
  Terminal,
  Cpu,
  Zap,
  Activity,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typewriter effect logic
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = PERSONAL_INFO.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      {/* Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-8 space-y-6"
        >
          {/* Top Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="font-mono-code text-xs text-blue-300 tracking-wide font-medium">
              {PERSONAL_INFO.tagline}
            </span>
          </div>

          {/* Headline Name */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-mono-code leading-none">
              {PERSONAL_INFO.name}
            </h1>

            {/* Interactive Typewriter line */}
            <div className="h-12 mt-3 flex items-center text-xl sm:text-2xl lg:text-3xl font-mono-code text-slate-300">
              <span className="text-blue-500 font-bold mr-2">&gt;</span>
              <span className="text-slate-400">I build</span>
              <span className="text-lime-400 font-semibold ml-2 font-mono-code underline decoration-lime-500/40 decoration-wavy">
                {currentText}
              </span>
              <span className="inline-block w-2.5 h-7 bg-blue-400 ml-1 animate-pulse" />
            </div>
          </div>

          {/* Quantified Summary */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            {PERSONAL_INFO.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-code font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all border border-blue-400/40"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 font-mono-code font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all shadow-lg"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-mono-code text-sm border border-slate-800 hover:border-slate-600 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 max-w-md">
            <span className="font-mono-code text-xs text-slate-500 uppercase tracking-wider">
              CONNECT:
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs font-mono-code"
            >
              <GithubIcon className="w-4 h-4" />
              <span>/ashurajs552-droid</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs font-mono-code"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>/in/aashu-raj-s</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-xs font-mono-code"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Console / System Radar Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Header bar of mini console */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>aashu-system.v14</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
            </div>

            {/* Console Content Metrics Grid */}
            <div className="py-5 space-y-4 font-mono-code">
              <div className="text-xs text-slate-400 flex justify-between items-center">
                <span>ARCH: <span className="text-white">EDGE_AI_CV</span></span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> LIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {PERSONAL_INFO.heroMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-lg font-bold text-lime-400 mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Code Block */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <div className="text-blue-400 font-bold">$ cat stack_spec.json</div>
                <div className="text-slate-400 pl-2">
                  &#123;&quot;core&quot;: &quot;PyTorch + YOLOv8&quot;,<br />
                  &nbsp;&quot;llm&quot;: &quot;Llama 3.1 + Groq&quot;,<br />
                  &nbsp;&quot;web&quot;: &quot;Next.js 14 App Router&quot;&#125;
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
