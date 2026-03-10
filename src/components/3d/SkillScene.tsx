"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";

const SkillSphere = lazy(() => import("./SkillSphere"));

export default function SkillScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <SkillSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
