"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { allSkills } from "@/lib/constants";

function fibonacciSphere(samples: number, radius: number) {
  const points: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

export default function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const points = useMemo(() => fibonacciSphere(allSkills.length, 4), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.08 + pointer.x * 0.3;
    groupRef.current.rotation.x = pointer.y * 0.15;
  });

  return (
    <group ref={groupRef}>
      {allSkills.map((skill, i) => (
        <Text
          key={skill.name}
          position={points[i]}
          fontSize={0.28}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {skill.name}
        </Text>
      ))}
    </group>
  );
}
