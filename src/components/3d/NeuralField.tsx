"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 110;
const BOUNDS = { x: 11, y: 6.5, z: 4 };
const CONNECT_DIST = 2.1;

export default function NeuralField() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { basePositions, phases, positions, linePositions } = useMemo(() => {
    const basePositions = new Float32Array(NODE_COUNT * 3);
    const phases = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      basePositions[i * 3] = (Math.random() - 0.5) * 2 * BOUNDS.x;
      basePositions[i * 3 + 1] = (Math.random() - 0.5) * 2 * BOUNDS.y;
      basePositions[i * 3 + 2] = (Math.random() - 0.5) * 2 * BOUNDS.z;
      phases[i * 3] = Math.random() * Math.PI * 2;
      phases[i * 3 + 1] = Math.random() * Math.PI * 2;
      phases[i * 3 + 2] = Math.random() * Math.PI * 2;
    }
    const positions = basePositions.slice();
    const maxSegments = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
    const linePositions = new Float32Array(maxSegments * 6);
    return { basePositions, phases, positions, linePositions };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = basePositions[i * 3] + Math.sin(t * 0.25 + phases[i * 3]) * 0.7;
      positions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.cos(t * 0.2 + phases[i * 3 + 1]) * 0.55;
      positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.sin(t * 0.3 + phases[i * 3 + 2]) * 0.45;
    }

    let seg = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < CONNECT_DIST * CONNECT_DIST) {
          linePositions[seg * 6] = positions[i * 3];
          linePositions[seg * 6 + 1] = positions[i * 3 + 1];
          linePositions[seg * 6 + 2] = positions[i * 3 + 2];
          linePositions[seg * 6 + 3] = positions[j * 3];
          linePositions[seg * 6 + 4] = positions[j * 3 + 1];
          linePositions[seg * 6 + 5] = positions[j * 3 + 2];
          seg++;
        }
      }
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }
    if (linesRef.current) {
      const geo = linesRef.current.geometry;
      (geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      geo.setDrawRange(0, seg * 2);
    }

    // Mouse parallax
    if (groupRef.current) {
      const targetX = state.pointer.y * 0.12;
      const targetY = state.pointer.x * 0.18;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          color="#a78bfa"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
