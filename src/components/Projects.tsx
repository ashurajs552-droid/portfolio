"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchHeading } from "@/components/ui/GlitchHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PROJECTS, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/SocialIcons";
import {
  ExternalLink,
  Sparkles,
  Terminal,
  Video,
  FileCode,
  ScanFace,
  Mic,
  Dumbbell,
  X
} from "lucide-react";

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const renderWireframePreview = (type: Project["wireframeType"]) => {
    switch (type) {
      case "video":
        return (
          <div className="w-full h-32 rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono-code text-[11px] space-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Video className="w-3.5 h-3.5 text-lime-400 animate-pulse" /> STREAM_01: 30 FPS
              </span>
              <span className="text-emerald-400">TRACKING 24 SUBJECTS</span>
            </div>
            <div className="grid grid-cols-4 gap-1 opacity-80">
              <div className="p-1 rounded bg-blue-950/60 border border-blue-500/40 text-center text-blue-300">
                FOCUSED: 88%
              </div>
              <div className="p-1 rounded bg-lime-950/60 border border-lime-500/40 text-center text-lime-300">
                ATTENTIVE
              </div>
              <div className="p-1 rounded bg-purple-950/60 border border-purple-500/40 text-center text-purple-300">
                ENGAGED
              </div>
              <div className="p-1 rounded bg-slate-900 border border-slate-700 text-center text-slate-400">
                CONF: 0.94
              </div>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div className="bg-lime-400 h-full w-[88%]" />
            </div>
          </div>
        );
      case "rag":
        return (
          <div className="w-full h-32 rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono-code text-[11px] space-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-400">
              <span className="flex items-center gap-1.5 font-bold">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" /> LOCAL_EMBEDDINGS: IndexedDB
              </span>
              <span className="text-lime-400">LATENCY: 12ms</span>
            </div>
            <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-slate-300 text-[10px]">
              &gt; Query: &quot;Summarize Section 4 requirements&quot;
              <br />
              <span className="text-lime-400">&gt; Llama-3.1-8b via Groq ⚡ [0.28s]</span>
            </div>
            <div className="flex gap-2 text-[9px] text-slate-500">
              <span>PDF Parsing: 100%</span>
              <span>• Zero-Server Privacy</span>
            </div>
          </div>
        );
      case "fitness":
        return (
          <div className="w-full h-32 rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono-code text-[11px] space-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Dumbbell className="w-3.5 h-3.5 text-amber-400" /> MET_CALORIE_ENGINE
              </span>
              <span className="text-lime-400">LOG TIME: &lt; 45s</span>
            </div>
            <div className="grid grid-cols-3 gap-1 opacity-90 text-[10px]">
              <div className="p-1 rounded bg-amber-950/60 border border-amber-500/40 text-center text-amber-300">
                BMR: 1,850 kcal
              </div>
              <div className="p-1 rounded bg-blue-950/60 border border-blue-500/40 text-center text-blue-300">
                TDEE: 2,650 kcal
              </div>
              <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-center text-emerald-300">
                MACROS: 40/40/20
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-800">
              <span>SQLite + JWT Persistence</span>
              <span className="text-lime-400 font-bold">100% AUTHENTICATED</span>
            </div>
          </div>
        );
      case "face":
        return (
          <div className="w-full h-32 rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono-code text-[11px] space-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-400">
              <span className="flex items-center gap-1.5 font-bold">
                <ScanFace className="w-3.5 h-3.5 text-blue-400" /> YOLOv8 + FaceNet Stage
              </span>
              <span className="text-emerald-400">ACCURACY: 95%</span>
            </div>
            <div className="flex items-center justify-around py-1">
              <div className="w-12 h-12 rounded border border-lime-400/60 bg-lime-500/10 flex items-center justify-center text-lime-300 text-[9px]">
                FACENET
              </div>
              <div className="text-slate-600">➔</div>
              <div className="w-12 h-12 rounded border border-blue-400/60 bg-blue-500/10 flex items-center justify-center text-blue-300 text-[9px]">
                EMBED
              </div>
              <div className="text-slate-600">➔</div>
              <div className="w-12 h-12 rounded border border-purple-400/60 bg-purple-500/10 flex items-center justify-center text-purple-300 text-[9px]">
                MATCH
              </div>
            </div>
          </div>
        );
      case "audio":
        return (
          <div className="w-full h-32 rounded-lg bg-slate-950 border border-slate-800 p-3 font-mono-code text-[11px] space-y-2 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Mic className="w-3.5 h-3.5 text-purple-400" /> MFCC SPECTROGRAM PIPELINE
              </span>
              <span className="text-lime-400">ACC: ~85%</span>
            </div>
            <div className="flex items-end gap-1 h-12 pt-2">
              {[40, 70, 25, 90, 60, 80, 45, 100, 75, 50, 85, 30, 95, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-blue-600 to-lime-400 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <GlitchHeading
        index="03"
        subtitle="PROVENANCE & BENCHMARKS"
        title="Featured AI & Web Projects"
      />

      {/* Filter Tab Header */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {[
          { id: "all", label: "All Projects" },
          { id: "cv", label: "Computer Vision" },
          { id: "llm", label: "LLM & RAG" },
          { id: "fullstack", label: "Full Stack Web" },
          { id: "ml", label: "Audio & ML" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 border border-blue-400/50"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          const isFeatured = project.featured;
          const colSpan = isFeatured ? "lg:col-span-6" : "lg:col-span-6";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={colSpan}
            >
              <SpotlightCard
                spotlightColor={isFeatured ? "rgba(59, 130, 246, 0.22)" : "rgba(132, 204, 22, 0.18)"}
                className="h-full flex flex-col justify-between border-slate-800 bg-slate-950/80 hover:border-slate-700"
              >
                <div>
                  {/* Top Bar / Category Tag */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code uppercase font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        {project.category.toUpperCase()}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase font-bold bg-lime-500/10 border border-lime-500/30 text-lime-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> FEATURED
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="text-[11px] font-mono-code text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" /> Pipeline Visual
                    </button>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-mono-code text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Wireframe Preview Box */}
                  <div className="my-4">
                    {renderWireframePreview(project.wireframeType)}
                  </div>

                  {/* Quantified Provenance Metrics */}
                  <div className="mt-4 space-y-2 mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono-code text-blue-400 font-bold uppercase tracking-wider mb-1">
                      QUANTIFIED IMPACT & PERFORMANCE:
                    </div>
                    {project.metrics.map((metric, mIdx) => {
                      const parts = metric.split(/(\*\*.*?\*\*)/g);
                      return (
                        <div
                          key={mIdx}
                          className="text-xs text-slate-200 flex items-start gap-2 font-sans leading-snug"
                        >
                          <span className="text-lime-400 font-bold text-sm mt-0.5">
                            ⚡
                          </span>
                          <span>
                            {parts.map((part, pIdx) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                return (
                                  <strong key={pIdx} className="text-white font-bold underline decoration-blue-500/60 font-mono-code">
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Tech Tags & Action Buttons */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-[11px] font-mono-code border border-slate-800"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono-code font-bold border border-slate-700 hover:border-slate-500 transition-all"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-100" />
                        <span>GitHub Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-code font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 transition-all border border-blue-400/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Visual Inspection */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative"
            >
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-mono-code text-xs text-blue-400 uppercase">
                SYSTEM DIAGNOSTIC MODAL // {previewProject.title}
              </div>

              <h3 className="text-xl font-bold font-mono-code text-white">
                {previewProject.title} Architecture
              </h3>

              <div className="py-2">
                {renderWireframePreview(previewProject.wireframeType)}
              </div>

              <div className="text-xs text-slate-300 font-mono-code space-y-2 bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="text-lime-400 font-bold">$ inspect --tech-stack</div>
                <div>Tech: {previewProject.tech.join(", ")}</div>
                <div className="text-blue-400 font-bold">$ inspect --quantified-impact</div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 font-sans text-xs">
                  {previewProject.metrics.map((m, i) => (
                    <li key={i}>{m.replace(/\*\*/g, "")}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setPreviewProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 font-mono-code text-xs"
                >
                  Close Console
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
