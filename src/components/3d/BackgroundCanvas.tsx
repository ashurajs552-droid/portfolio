"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WireframeLandscape = dynamic(
  () => import("./WireframeLandscape"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
    ),
  }
);

export const BackgroundCanvas: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      setIsLowPower(true);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient dark radial glow */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-radial-gradient opacity-90" />
      <div className="absolute inset-0 bg-cyber-grid opacity-25" />

      {/* 3D Scene for Desktop when mounted */}
      {mounted && !isLowPower && <WireframeLandscape />}

      {/* Grid overlay blur gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/40 to-[#0a0a0f] pointer-events-none" />
    </div>
  );
};
