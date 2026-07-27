"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlitchHeading } from "@/components/ui/GlitchHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code2,
  BrainCircuit,
  Sparkles,
  LineChart,
  Server,
  Globe,
  Database,
  Cpu,
  Flame,
  Search,
  CheckCircle2
} from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-lime-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "LineChart":
        return <LineChart className="w-5 h-5 text-purple-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== "All" && cat.title !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0 && searchQuery !== "") return null;

    return {
      ...cat,
      skills: searchQuery !== "" ? matchingSkills : cat.skills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <GlitchHeading
        index="02"
        subtitle="COMPLETE TECHNICAL STACK"
        title="Skills & Technologies I Know"
      />

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white font-bold border border-blue-400/50 shadow-md shadow-blue-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tech (e.g., PyTorch)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono-code text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Skills Grid - Distinct Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat!.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.15)"
              className="h-full border-slate-800 bg-slate-950/80 p-5 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {renderCategoryIcon(cat!.iconName)}
                    </div>
                    <h3 className="font-mono-code font-bold text-white text-sm">
                      {cat!.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-code text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {cat!.skills.length}
                  </span>
                </div>

                {/* Badges List */}
                <div className="space-y-2">
                  {cat!.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center justify-between p-2 rounded-lg border text-xs font-mono-code transition-all duration-200 ${
                        skill.hot
                          ? "bg-blue-950/30 border-blue-500/30 text-blue-200 hover:border-blue-400"
                          : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>{skill.name}</span>
                        {skill.hot && (
                          <Flame className="w-3 h-3 text-lime-400 animate-pulse inline-block" />
                        )}
                      </div>
                      {skill.level && (
                        <span className="text-[10px] text-slate-500 font-mono-code">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
