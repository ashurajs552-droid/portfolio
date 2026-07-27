"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlitchHeading } from "@/components/ui/GlitchHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Award, BrainCircuit, Cpu, Cloud, Code2, CheckCircle2 } from "lucide-react";

export const Certifications: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-sky-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Award className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <GlitchHeading
        index="05"
        subtitle="VERIFIED CREDENTIALS"
        title="Certifications"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.2)"
              className="h-full border-slate-800 bg-slate-950/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {renderIcon(cert.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-mono-code font-bold text-white text-base mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono-code mb-4">
                  {cert.issuer}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-emerald-400 pt-3 border-t border-slate-800/60">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
