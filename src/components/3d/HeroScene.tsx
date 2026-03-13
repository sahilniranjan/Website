"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

const ParticleField = lazy(() => import("./ParticleField"));
const FloatingShape = lazy(() => import("./FloatingShapes"));
const WorkingAvatar = lazy(() => import("./WorkingAvatar"));

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#A855F7" />
          <pointLight position={[5, 3, -3]} intensity={0.3} color="#00D4FF" />
          <spotLight
            position={[0, 5, -2]}
            angle={0.45}
            penumbra={0.8}
            intensity={0.55}
            color="#8ad9ff"
          />

          <WorkingAvatar />

          <FloatingShape
            position={[-4, 2, -2]}
            geometry="icosahedron"
            color="#00D4FF"
            scale={1.2}
            speed={0.8}
            distort={0.4}
          />
          <FloatingShape
            position={[4, -1, -3]}
            geometry="torusKnot"
            color="#A855F7"
            scale={0.8}
            speed={0.6}
            distort={0.3}
          />
          <FloatingShape
            position={[-2, -3, -1]}
            geometry="octahedron"
            color="#22D3EE"
            scale={0.9}
            speed={1}
            distort={0.2}
          />
          <FloatingShape
            position={[3, 3, -4]}
            geometry="dodecahedron"
            color="#F59E0B"
            scale={0.7}
            speed={0.7}
            distort={0.35}
          />

          <ParticleField count={800} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
