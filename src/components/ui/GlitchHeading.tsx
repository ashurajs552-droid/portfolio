"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlitchHeadingProps {
  index?: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export const GlitchHeading: React.FC<GlitchHeadingProps> = ({
  index,
  title,
  subtitle,
  accent = "blue",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 font-mono-code text-xs uppercase tracking-widest text-blue-400 mb-2">
        {index && (
          <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
            {index}
          </span>
        )}
        <span className="h-px w-8 bg-blue-500/30" />
        <span className="text-slate-400">{subtitle || "SYSTEM_MODULE"}</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-mono-code text-white flex items-center gap-2">
        <span className="text-blue-500 font-normal opacity-70">&gt;</span>
        <span>{title}</span>
        <span className="inline-block w-2.5 h-6 bg-lime-400 animate-pulse ml-1" />
      </h2>
    </motion.div>
  );
};
