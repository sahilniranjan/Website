"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/constants";

const GalaxyScene = dynamic(() => import("@/components/3d/GalaxyScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] md:h-[650px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

/* ── Animated skill chip with particle burst on hover ── */
function SkillChip({ name, color, delay }: { name: string; color: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; angle: number }[]>([]);

  const spawnParticles = useCallback(() => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      angle: (i / 6) * Math.PI * 2,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 600);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 200 }}
      onMouseEnter={() => {
        setHovered(true);
        spawnParticles();
      }}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center gap-1.5 text-sm font-mono px-4 py-2 rounded-xl border cursor-default select-none transition-all duration-300"
      style={{
        borderColor: hovered ? `${color}80` : `${color}25`,
        color: hovered ? "#ffffff" : `${color}DD`,
        backgroundColor: hovered ? `${color}20` : `${color}08`,
        boxShadow: hovered ? `0 0 20px ${color}30, 0 0 40px ${color}15` : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Animated dot */}
      <span
        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          backgroundColor: color,
          boxShadow: hovered ? `0 0 8px ${color}` : "none",
        }}
      />
      {name}

      {/* Particle burst */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: Math.cos(p.angle) * 30,
            y: Math.sin(p.angle) * 30,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            backgroundColor: color,
            top: "50%",
            left: "50%",
            boxShadow: `0 0 4px ${color}`,
          }}
        />
      ))}
    </motion.span>
  );
}

/* ── Animated category card with progress bar ── */
function CategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative glass rounded-2xl p-7 overflow-hidden group transition-all duration-500"
      style={{
        boxShadow: hovered ? `0 8px 32px ${category.color}18, inset 0 1px 0 ${category.color}15` : "none",
      }}
    >
      {/* Animated gradient border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${category.color}15, transparent 50%, ${category.color}08)`,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${category.color}40, transparent 70%)`,
        }}
      />

      {/* Category header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <motion.div
          animate={hovered ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: `${category.color}15`,
            border: `1px solid ${category.color}30`,
          }}
        >
          <div
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: category.color }}
          />
        </motion.div>
        <div>
          <h3 className="font-heading text-lg font-bold" style={{ color: category.color }}>
            {category.name}
          </h3>
          <span className="text-xs font-mono text-warm-white/30">
            {category.skills.length} skills
          </span>
        </div>
      </div>

      {/* Skill count bar */}
      <div className="h-1 rounded-full bg-white/[0.04] mb-5 overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${Math.min((category.skills.length / 8) * 100, 100)}%` } : {}}
          transition={{ delay: index * 0.12 + 0.4, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
            boxShadow: `0 0 8px ${category.color}40`,
          }}
        />
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill, j) => (
          <SkillChip
            key={skill}
            name={skill}
            color={category.color}
            delay={inView ? index * 0.12 + 0.3 + j * 0.06 : 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Floating stats strip ── */
function StatsStrip() {
  const total = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <AnimateIn delay={0.2} direction="up">
      <div className="flex flex-wrap justify-center gap-8 mb-4">
        {[
          { label: "Total Skills", value: total, color: "#00D4FF" },
          { label: "Categories", value: skillCategories.length, color: "#A855F7" },
          { label: "ML/AI Tools", value: skillCategories.find(c => c.name === "ML/AI")?.skills.length || 0, color: "#22D3EE" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="block font-heading text-3xl font-bold"
              style={{ color: stat.color }}
            >
              {stat.value}
            </motion.span>
            <span className="text-xs font-mono text-warm-white/40 uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </AnimateIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Technologies and tools I work with daily">
        Skills
      </SectionHeading>

      <StatsStrip />

      <GalaxyScene />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <CategoryCard key={category.name} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}
