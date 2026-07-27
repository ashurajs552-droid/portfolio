"use client";

import React, { useState } from "react";
import { ReticleCursor } from "@/components/ui/ReticleCursor";
import { BackgroundCanvas } from "@/components/3d/BackgroundCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { ResumeModal } from "@/components/ResumeModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="custom-cursor-active relative min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      {/* Reticle Target Cursor */}
      <ReticleCursor />

      {/* R3F 3D Interactive Landscape & Grid Backdrop */}
      <BackgroundCanvas />

      {/* Main UI Layer */}
      <div className="relative z-10">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
        <Footer />
      </div>

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
