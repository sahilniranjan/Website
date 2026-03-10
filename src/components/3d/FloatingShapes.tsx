"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: "icosahedron" | "torusKnot" | "octahedron" | "dodecahedron";
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
}

export default function FloatingShape({
  position,
  geometry,
  color,
  scale = 1,
  speed = 1,
  distort = 0.3,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.z = t * 0.2;
    const { x, y } = state.pointer;
    meshRef.current.position.x = position[0] + x * 0.5;
    meshRef.current.position.y = position[1] + y * 0.3;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 1]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  };

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {renderGeometry()}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}
