"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, FileText, Sparkles, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "skills", "projects", "timeline", "certifications", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "01. HERO" },
    { id: "skills", label: "02. ARSENAL" },
    { id: "projects", label: "03. PROJECTS" },
    { id: "timeline", label: "04. IMPACT" },
    { id: "certifications", label: "05. CERTS" },
    { id: "contact", label: "06. CONTACT" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-blue-400 transition-colors">
            <Terminal className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="font-mono-code font-bold text-white tracking-wider flex items-center gap-1.5 text-sm sm:text-base">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-lime-400 text-xs px-1.5 py-0.2 rounded bg-lime-500/10 border border-lime-500/30">
                AI/ML
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono-code">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white font-medium shadow-md shadow-blue-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono-code font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 transition-all border border-blue-400/30"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0f]/95 border-b border-slate-800 px-6 py-4 mt-2 space-y-2 backdrop-blur-2xl"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-2 px-3 rounded-md font-mono-code text-xs transition-colors ${
                activeSection === item.id
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold"
                  : "text-slate-300 hover:bg-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};
