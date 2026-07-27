"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlitchHeading } from "@/components/ui/GlitchHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TIMELINE_ITEMS } from "@/data/portfolioData";
import { Trophy, Users, Code, Star, Calendar } from "lucide-react";

export const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "leadership":
        return <Users className="w-5 h-5 text-blue-400" />;
      case "contribution":
        return <Code className="w-5 h-5 text-lime-400" />;
      default:
        return <Star className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="timeline" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <GlitchHeading
        index="04"
        subtitle="ACHIEVEMENTS & LEADERSHIP"
        title="Impact Timeline"
      />

      <div className="relative border-l-2 border-slate-800/90 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
        {TIMELINE_ITEMS.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:border-lime-400 group-hover:scale-110 transition-all z-20">
              <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-lime-400" />
            </div>

            {/* Item Card */}
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.15)"
              className="border-slate-800 bg-slate-950/80 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-mono-code text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono-code">
                      {item.organization}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  {item.badge && (
                    <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-blue-500/10 border border-blue-500/30 text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {item.description}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
