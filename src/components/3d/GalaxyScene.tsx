"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const SkillGalaxy = lazy(() => import("./SkillGalaxy"));

export default function GalaxyScene() {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] group">
      {/* Glow backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-electric-blue/[0.04] blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-neon-purple/[0.04] blur-[80px]" />
      </div>

      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SkillGalaxy />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>

      {/* Interaction hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 text-warm-white/20 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="animate-pulse">
          <circle cx="8" cy="8" r="2" />
          <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
        Drag to explore &bull; Hover skills to inspect
      </div>
    </div>
  );
}
