"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Copy, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const fullText = `
Aashu Raj S - AI/ML Engineer
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.summary}

PROJECTS:
${PROJECTS.map((p) => `- ${p.title}: ${p.description}\n  Metrics: ${p.metrics.join("; ")}`).join("\n")}
    `;
    navigator.clipboard.writeText(fullText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-slate-950 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between font-mono-code shrink-0">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Resume_Aashu_Raj_S</span>
                <span className="text-xs text-lime-400 bg-lime-500/10 px-2 py-0.5 rounded border border-lime-500/30">
                  VERIFIED
                </span>
              </h3>
              <div className="text-xs text-slate-400">AI & Machine Learning Engineer</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-code font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                title="Copy Resume Text"
              >
                {copied ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Resume Text"}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-200 text-sm">
            {/* Header section */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white font-mono-code">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-blue-400 font-mono-code font-bold text-sm mt-1">
                  {PERSONAL_INFO.tagline}
                </p>
                <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.location}</p>
              </div>

              <div className="text-xs font-mono-code space-y-1 text-slate-400">
                <div>Email: <span className="text-white">{PERSONAL_INFO.email}</span></div>
                <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">github.com/ashurajs552-droid</a></div>
                <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/aashu-raj-s</a></div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono-code font-bold text-blue-400 uppercase tracking-wider mb-2">
                EXECUTIVE SUMMARY
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono-code font-bold text-blue-400 uppercase tracking-wider mb-3">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 font-bold block mb-1">{cat.title}:</span>
                    <span className="text-slate-200">{cat.skills.map((s) => `${s.name} (${s.level})`).join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono-code font-bold text-blue-400 uppercase tracking-wider mb-3">
                KEY QUANTIFIED PROJECTS
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white font-mono-code text-base">{p.title}</span>
                      <span className="text-xs text-slate-400 font-mono-code">{p.tech.join(" | ")}</span>
                    </div>
                    <p className="text-xs text-slate-300">{p.description}</p>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {p.metrics.map((m, i) => (
                        <li key={i}>{m.replace(/\*\*/g, "")}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Leadership */}
            <div>
              <h2 className="text-xs font-mono-code font-bold text-blue-400 uppercase tracking-wider mb-3">
                EDUCATION & LEADERSHIP
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-white font-mono-code">
                  <span>Bachelor of Engineering — Artificial Intelligence & Machine Learning</span>
                  <span className="text-blue-400">Undergraduate</span>
                </div>
                <div className="text-slate-400">
                  Student Vice Chair @ IEEE Computer Society • Cultural Coordinator @ Student Council • 3rd Place HACKOTSAVA 2025 National Hackathon
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
