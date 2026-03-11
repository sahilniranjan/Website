"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { allSkills, skillCategories } from "@/lib/constants";

function SkillBall({
  position,
  color,
  name,
  index,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.8 + index * 0.5) * 0.06;
    meshRef.current.rotation.y = t * 0.3 + index;
    meshRef.current.rotation.x = Math.sin(t * 0.2 + index * 0.3) * 0.1;

    const scale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.1
    );
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = "auto";
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.15}
        />
      </mesh>

      {/* Stripe on ball */}
      <mesh position={[0, position[1] - position[1], 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.04, 8, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.3}
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Skill label */}
      <Text
        position={[0, hovered ? 0.52 : 0.45, 0]}
        fontSize={hovered ? 0.18 : 0.14}
        color={hovered ? "#ffffff" : color}
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.008}
        outlineColor="#000000"
      >
        {name}
      </Text>

      {/* Glow ring when hovered */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.35, 0.42, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}

function TableSurface() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Felt surface */}
      <RoundedBox args={[10, 0.15, 6]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0d4a2e" roughness={0.9} />
      </RoundedBox>

      {/* Rails */}
      {/* Long rails */}
      <RoundedBox args={[10.4, 0.35, 0.3]} radius={0.05} position={[0, 0.15, 3.1]}>
        <meshStandardMaterial color="#3a1a0a" roughness={0.6} metalness={0.1} />
      </RoundedBox>
      <RoundedBox args={[10.4, 0.35, 0.3]} radius={0.05} position={[0, 0.15, -3.1]}>
        <meshStandardMaterial color="#3a1a0a" roughness={0.6} metalness={0.1} />
      </RoundedBox>
      {/* Short rails */}
      <RoundedBox args={[0.3, 0.35, 6.4]} radius={0.05} position={[5.15, 0.15, 0]}>
        <meshStandardMaterial color="#3a1a0a" roughness={0.6} metalness={0.1} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.35, 6.4]} radius={0.05} position={[-5.15, 0.15, 0]}>
        <meshStandardMaterial color="#3a1a0a" roughness={0.6} metalness={0.1} />
      </RoundedBox>

      {/* Corner pockets */}
      {[
        [4.8, 0.1, 2.8],
        [-4.8, 0.1, 2.8],
        [4.8, 0.1, -2.8],
        [-4.8, 0.1, -2.8],
        [0, 0.1, 2.95],
        [0, 0.1, -2.95],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <cylinderGeometry args={[0.25, 0.25, 0.3, 16]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      ))}
    </group>
  );
}

function CategoryLight({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <pointLight
      position={position}
      color={color}
      intensity={0.8}
      distance={6}
    />
  );
}

export default function PoolTable() {
  const groupRef = useRef<THREE.Group>(null);

  // Arrange balls in a triangle rack formation by category
  const ballPositions = useMemo(() => {
    const positions: { pos: [number, number, number]; skill: string; color: string }[] = [];
    let ballIndex = 0;

    // Use a triangle rack layout, grouping by category
    skillCategories.forEach((cat, catIdx) => {
      const catOffsetX = (catIdx - 2) * 2.2;
      const catOffsetZ = 0;

      cat.skills.forEach((skill, skillIdx) => {
        // Arrange in a small cluster per category
        const cols = Math.ceil(Math.sqrt(cat.skills.length));
        const row = Math.floor(skillIdx / cols);
        const col = skillIdx % cols;
        const offsetX = (col - (cols - 1) / 2) * 0.65;
        const offsetZ = (row - (Math.ceil(cat.skills.length / cols) - 1) / 2) * 0.65;

        positions.push({
          pos: [catOffsetX + offsetX, 0, catOffsetZ + offsetZ],
          skill,
          color: cat.color,
        });
        ballIndex++;
      });
    });

    return positions;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <TableSurface />

      {ballPositions.map((ball, i) => (
        <SkillBall
          key={ball.skill}
          position={ball.pos}
          color={ball.color}
          name={ball.skill}
          index={i}
        />
      ))}

      {/* Overhead light */}
      <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" />
      <ambientLight intensity={0.3} />

      {/* Category colored lights */}
      {skillCategories.map((cat, i) => (
        <CategoryLight
          key={cat.name}
          position={[(i - 2) * 2.2, 2, 0]}
          color={cat.color}
        />
      ))}
    </group>
  );
}
