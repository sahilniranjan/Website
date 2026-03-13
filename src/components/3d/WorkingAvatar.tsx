"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function WorkingAvatar() {
  const rootRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const torsoRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const keyboardRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const typing = Math.sin(t * 10) * 0.2;

    if (rootRef.current) {
      rootRef.current.position.y = -1.3 + Math.sin(t * 1.2) * 0.05;
      rootRef.current.rotation.y = pointer.x * 0.15;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 1.6) * 0.05;
      headRef.current.rotation.y = pointer.x * 0.12;
    }

    if (torsoRef.current) {
      torsoRef.current.scale.y = 1 + Math.sin(t * 1.2) * 0.015;
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -0.95 + typing * 0.35;
      leftArmRef.current.rotation.z = -0.12 + Math.sin(t * 6) * 0.04;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -0.9 - typing * 0.35;
      rightArmRef.current.rotation.z = 0.12 + Math.cos(t * 6) * 0.04;
    }

    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.55 + Math.sin(t * 2.2) * 0.15;
    }

    if (keyboardRef.current) {
      keyboardRef.current.position.y = -0.05 + Math.sin(t * 10) * 0.01;
    }
  });

  return (
    <group ref={rootRef} position={[0, -1.3, -5.5]} scale={1.15}>
      <group position={[0, -1.8, 0]}>
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[4.8, 0.18, 2.2]} />
          <meshStandardMaterial color="#2d190f" roughness={0.65} metalness={0.15} />
        </mesh>
        <mesh position={[0, 0.22, -0.55]}>
          <boxGeometry args={[0.95, 0.06, 0.45]} />
          <meshStandardMaterial color="#101014" roughness={0.45} metalness={0.5} />
        </mesh>
        <mesh ref={keyboardRef} position={[0, 0.03, -0.05]}>
          <boxGeometry args={[0.95, 0.04, 0.3]} />
          <meshStandardMaterial color="#14141b" roughness={0.4} metalness={0.35} />
        </mesh>
        <mesh ref={screenRef} position={[0, 0.46, -0.72]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1, 0.6, 0.03]} />
          <meshStandardMaterial
            color="#59d7ff"
            emissive="#00d4ff"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.15}
          />
        </mesh>
      </group>

      <mesh position={[0, -2.9, 0]}>
        <boxGeometry args={[1.4, 0.15, 1.4]} />
        <meshStandardMaterial color="#1b1c24" roughness={0.75} metalness={0.2} />
      </mesh>
      <mesh position={[0, -2.2, 0.2]}>
        <boxGeometry args={[0.18, 1.1, 0.18]} />
        <meshStandardMaterial color="#1b1c24" roughness={0.75} metalness={0.2} />
      </mesh>
      <mesh position={[0, -1.7, 0.65]}>
        <boxGeometry args={[0.9, 0.8, 0.16]} />
        <meshStandardMaterial color="#202331" roughness={0.7} metalness={0.1} />
      </mesh>

      <mesh ref={torsoRef} position={[0, -1.1, 0.25]}>
        <boxGeometry args={[0.7, 1.05, 0.42]} />
        <meshStandardMaterial color="#263041" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh ref={headRef} position={[0, -0.28, 0.3]}>
        <sphereGeometry args={[0.25, 28, 28]} />
        <meshStandardMaterial color="#d5b9a1" roughness={0.75} metalness={0.02} />
      </mesh>

      <mesh ref={leftArmRef} position={[-0.48, -1.1, 0.02]} rotation={[-0.95, 0, -0.1]}>
        <boxGeometry args={[0.18, 0.7, 0.18]} />
        <meshStandardMaterial color="#2d3a4d" roughness={0.72} metalness={0.08} />
      </mesh>
      <mesh ref={rightArmRef} position={[0.48, -1.1, 0.02]} rotation={[-0.95, 0, 0.1]}>
        <boxGeometry args={[0.18, 0.7, 0.18]} />
        <meshStandardMaterial color="#2d3a4d" roughness={0.72} metalness={0.08} />
      </mesh>

      <mesh position={[-0.15, -0.32, 0.52]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.9} color="#ffffff" />
      </mesh>
      <mesh position={[0.15, -0.32, 0.52]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.9} color="#ffffff" />
      </mesh>
    </group>
  );
}
