"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ReticleCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, input, textarea, [role='button'], .spotlight-card");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Reticle Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/60 pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "#84cc16" : "#3b82f6",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        {/* Reticle corner ticks */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-blue-400/80" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-blue-400/80" />
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-1 w-0.5 bg-blue-400/80" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-1 w-0.5 bg-blue-400/80" />
      </motion.div>

      {/* Inner Precision Target Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          backgroundColor: isHovered ? "#84cc16" : "#60a5fa",
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </div>
  );
};
