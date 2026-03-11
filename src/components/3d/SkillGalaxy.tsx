"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { skillCategories } from "@/lib/constants";

/* ── Shimmering ring particles on each orbit ── */
function OrbitRing({ radius, color, count = 80 }: { radius: number; color: string; count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [radius, count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.03} color={color} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

/* ── Floating ambient particles in the background ── */
function AmbientParticles({ count = 300 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#00D4FF"),
      new THREE.Color("#A855F7"),
      new THREE.Color("#22D3EE"),
      new THREE.Color("#F59E0B"),
      new THREE.Color("#EC4899"),
    ];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ── Connection beams between skills in same category ── */
function CategoryBeams({ positions, color }: { positions: THREE.Vector3[]; color: string }) {
  const lines = useMemo(() => {
    const segs: THREE.Vector3[][] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        segs.push([positions[i], positions[j]]);
      }
    }
    return segs;
  }, [positions]);

  return (
    <>
      {lines.map((seg, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(seg);
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.08 });
        const lineObj = new THREE.Line(geo, mat);
        return <primitive key={i} object={lineObj} />;
      })}
    </>
  );
}

/* ── Individual hoverable skill node ── */
function SkillNode({
  orbitRadius,
  angle,
  speed,
  tilt,
  color,
  name,
  index,
}: {
  orbitRadius: number;
  angle: number;
  speed: number;
  tilt: number;
  color: string;
  name: string;
  index: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  const trailGeo = useMemo(() => {
    const count = 20;
    const positions = new Float32Array(count * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    const x = Math.cos(t) * orbitRadius;
    const z = Math.sin(t) * orbitRadius;
    const y = Math.sin(t * 0.7) * tilt;
    groupRef.current.position.set(x, y, z);

    // Pulse the glow
    if (glowRef.current) {
      const s = hovered ? 1.6 + Math.sin(state.clock.elapsedTime * 4) * 0.2 : 1.0 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.15;
      glowRef.current.scale.setScalar(s);
    }

    // Trail positions
    if (trailRef.current) {
      const posArr = trailRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = posArr.length / 3 - 1; i > 0; i--) {
        posArr[i * 3] = posArr[(i - 1) * 3];
        posArr[i * 3 + 1] = posArr[(i - 1) * 3 + 1];
        posArr[i * 3 + 2] = posArr[(i - 1) * 3 + 2];
      }
      posArr[0] = x;
      posArr[1] = y;
      posArr[2] = z;
      trailRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group
        ref={groupRef}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        {/* Core sphere */}
        <mesh>
          <sphereGeometry args={[hovered ? 0.2 : 0.14, 24, 24]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 1.2 : 0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* Outer glow */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={hovered ? 0.2 : 0.07} />
        </mesh>

        {/* Hovered ring */}
        {hovered && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.28, 0.38, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        )}

        {/* Text label */}
        <Text
          position={[0, hovered ? 0.45 : 0.32, 0]}
          fontSize={hovered ? 0.18 : 0.12}
          color={hovered ? "#ffffff" : color}
          anchorX="center"
          anchorY="bottom"
          outlineWidth={0.006}
          outlineColor="#000000"
          font={undefined}
        >
          {name}
        </Text>
      </group>

      {/* Trail particles */}
      <points ref={trailRef} geometry={trailGeo}>
        <pointsMaterial size={0.04} color={color} transparent opacity={0.3} sizeAttenuation />
      </points>
    </>
  );
}

/* ── Central pulsing core ── */
function CentralCore() {
  const ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.1);
      ref.current.rotation.y = t * 0.2;
      ref.current.rotation.z = t * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group>
      {/* Core icosahedron */}
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.35, 1]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#A855F7"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Orbiting ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.6, 0.02, 8, 64]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.3} />
      </mesh>
      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

/* ── Main galaxy scene ── */
export default function SkillGalaxy() {
  const groupRef = useRef<THREE.Group>(null);

  // Pre-compute positions for beam connections
  const categoryNodePositions = useMemo(() => {
    const map: Record<string, THREE.Vector3[]> = {};
    skillCategories.forEach((cat, catIdx) => {
      const orbitRadius = 2.0 + catIdx * 1.2;
      map[cat.name] = cat.skills.map((_, skillIdx) => {
        const angle = (skillIdx / cat.skills.length) * Math.PI * 2;
        return new THREE.Vector3(
          Math.cos(angle) * orbitRadius,
          0,
          Math.sin(angle) * orbitRadius
        );
      });
    });
    return map;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralCore />
      <AmbientParticles />

      {skillCategories.map((cat, catIdx) => {
        const orbitRadius = 2.0 + catIdx * 1.2;
        const speed = 0.15 - catIdx * 0.02;
        const tilt = 0.2 + catIdx * 0.15;

        return (
          <group key={cat.name}>
            <OrbitRing radius={orbitRadius} color={cat.color} />
            <CategoryBeams
              positions={categoryNodePositions[cat.name]}
              color={cat.color}
            />
            {cat.skills.map((skill, skillIdx) => {
              const startAngle = (skillIdx / cat.skills.length) * Math.PI * 2;
              return (
                <SkillNode
                  key={skill}
                  orbitRadius={orbitRadius}
                  angle={startAngle}
                  speed={speed}
                  tilt={tilt}
                  color={cat.color}
                  name={skill}
                  index={catIdx * 10 + skillIdx}
                />
              );
            })}
          </group>
        );
      })}

      <ambientLight intensity={0.2} />
      <pointLight position={[0, 4, 0]} intensity={1} color="#ffffff" />
      <pointLight position={[5, 2, 5]} intensity={0.4} color="#00D4FF" />
      <pointLight position={[-5, 2, -5]} intensity={0.4} color="#A855F7" />
    </group>
  );
}
