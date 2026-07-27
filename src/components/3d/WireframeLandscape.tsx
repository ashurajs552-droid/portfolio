"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TerrainGrid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.z = Math.sin(time) * 0.05;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -4, -5]}
    >
      <planeGeometry args={[40, 40, 24, 24]} />
      <meshBasicMaterial
        wireframe
        color="#1e3a8a"
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function WireframeLandscape() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <TerrainGrid />
      </Canvas>
    </div>
  );
}
