"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function ContactScene3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, -0.2]}>
          <coneGeometry args={[0.8, 2.5, 4]} />
          <meshStandardMaterial
            color="#00D4FF"
            transparent
            opacity={0.2}
            wireframe
            emissive="#00D4FF"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, -0.3, 0]} rotation={[0.3, 0.5, -0.2]}>
          <coneGeometry args={[0.5, 1.8, 4]} />
          <meshStandardMaterial
            color="#A855F7"
            transparent
            opacity={0.15}
            wireframe
            emissive="#A855F7"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}
