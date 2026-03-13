"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/constants";

const GalaxyScene = dynamic(() => import("@/components/3d/GalaxyScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] md:h-[500px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

/* ── Floating background orbs that drift around the section ── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.name}
          className="absolute rounded-full"
          style={{
            width: 200 + i * 60,
            height: 200 + i * 60,
            background: `radial-gradient(circle, ${cat.color}08, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 60 * Math.cos(i * 1.3), -40 * Math.sin(i * 0.7), 0],
            y: [0, -50 * Math.sin(i * 1.1), 30 * Math.cos(i * 0.9), 0],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          initial={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Mouse-tracking gradient spotlight ── */
function MouseSpotlight({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, [containerRef, x, y]);

  return (
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"
      style={{
        x: useTransform(springX, (v) => v - 250),
        y: useTransform(springY, (v) => v - 250),
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}

/* ── Animated skill bubble that floats and reacts ── */
function SkillBubble({
  name,
  color,
  delay,
  index,
}: {
  name: string;
  color: string;
  delay: number;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 150, damping: 12 }}
      whileHover={{ scale: 1.15, y: -6, zIndex: 20 }}
      whileTap={{ scale: 0.92, rotate: Math.random() > 0.5 ? 5 : -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTapStart={() => { setTapped(true); setTimeout(() => setTapped(false), 500); }}
      className="relative cursor-pointer select-none"
    >
      {/* Glow ring on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.4 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${color}25, transparent 70%)`,
              filter: "blur(8px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Tap ripple */}
      <AnimatePresence>
        {tapped && (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: `2px solid ${color}`, }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          y: [0, -4 - (index % 3) * 2, 0],
        }}
        transition={{
          duration: 2.5 + (index % 4) * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
        className="relative flex items-center gap-2 px-4 py-2.5 rounded-2xl border backdrop-blur-sm transition-colors duration-300"
        style={{
          borderColor: hovered ? `${color}70` : `${color}20`,
          backgroundColor: hovered ? `${color}18` : `${color}06`,
          boxShadow: hovered
            ? `0 0 25px ${color}20, 0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 ${color}15`
            : `0 2px 8px rgba(0,0,0,0.2)`,
        }}
      >
        {/* Pulsing dot */}
        <motion.span
          animate={{
            scale: hovered ? [1, 1.5, 1] : [1, 1.2, 1],
            opacity: hovered ? [1, 0.6, 1] : [0.7, 0.4, 0.7],
          }}
          transition={{ duration: hovered ? 0.6 : 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full shrink-0"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}`,
          }}
        />
        <span
          className="text-sm font-mono font-medium transition-colors duration-200"
          style={{ color: hovered ? "#ffffff" : `${color}CC` }}
        >
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ── Category card with orbiting accent, animated mesh bg ── */
function CategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 80 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
      onMouseMove={handleMouse}
      className="relative rounded-3xl p-[1px] overflow-hidden group cursor-default"
      style={{
        background: hovered
          ? `linear-gradient(${135 + mousePos.x * 90}deg, ${category.color}40, transparent 50%, ${category.color}20)`
          : `linear-gradient(135deg, ${category.color}15, transparent 50%, ${category.color}08)`,
      }}
    >
      {/* Inner card */}
      <div
        className="relative rounded-3xl p-7 overflow-hidden h-full"
        style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)" }}
      >
        {/* Animated mesh gradient background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${category.color}12 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${category.color}06 0%, transparent 40%)
            `,
          }}
        />

        {/* Orbiting accent dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 right-4 w-16 h-16 pointer-events-none"
        >
          <motion.div
            animate={{
              scale: hovered ? [1, 1.5, 1] : 1,
              opacity: hovered ? [0.5, 1, 0.5] : 0.3,
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: category.color, boxShadow: `0 0 8px ${category.color}` }}
          />
        </motion.div>

        {/* Category header */}
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <motion.div
            animate={hovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              backgroundColor: `${category.color}12`,
              border: `1px solid ${category.color}25`,
            }}
          >
            {/* Inner animated gradient */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from 0deg, ${category.color}20, transparent, ${category.color}10, transparent)`,
              }}
            />
            <div
              className="w-4 h-4 rounded-md relative z-10"
              style={{ backgroundColor: category.color }}
            />
          </motion.div>
          <div>
            <h3 className="font-heading text-lg font-bold" style={{ color: category.color }}>
              {category.name}
            </h3>
            <motion.span
              animate={{ opacity: hovered ? 1 : 0.4 }}
              className="text-xs font-mono text-warm-white/40"
            >
              {category.skills.length} skills
            </motion.span>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="h-1.5 rounded-full bg-white/[0.04] mb-6 overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${Math.min((category.skills.length / 8) * 100, 100)}%` } : {}}
            transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
            className="h-full rounded-full relative"
            style={{
              background: `linear-gradient(90deg, ${category.color}, ${category.color}90)`,
              boxShadow: `0 0 10px ${category.color}50`,
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
              className="absolute inset-0 w-1/3"
              style={{ background: `linear-gradient(90deg, transparent, ${category.color}40, transparent)` }}
            />
          </motion.div>
        </div>

        {/* Floating skill bubbles */}
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {category.skills.map((skill, j) => (
            <SkillBubble
              key={skill}
              name={skill}
              color={category.color}
              delay={inView ? index * 0.08 + 0.2 + j * 0.05 : 0}
              index={index * 10 + j}
            />
          ))}
        </div>

        {/* Bottom glow line */}
        <motion.div
          animate={{
            opacity: hovered ? [0.3, 0.7, 0.3] : 0,
            scaleX: hovered ? 1 : 0,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-[10%] right-[10%] h-[1px] origin-center"
          style={{ background: `linear-gradient(90deg, transparent, ${category.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

/* ── Animated counter ── */
function AnimatedCounter({ value, color }: { value: number; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 150 }}
      className="block font-heading text-4xl font-bold tabular-nums"
      style={{ color }}
    >
      {count}
    </motion.span>
  );
}

/* ── Stat card with animated ring ── */
function StatCard({ label, value, color, index }: { label: string; value: number; color: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.05, y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative text-center glass rounded-2xl px-6 py-5 overflow-hidden group"
    >
      {/* Animated ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 group-hover:opacity-25 transition-opacity"
          style={{ border: `2px dashed ${color}` }}
        />
      </motion.div>

      <AnimatedCounter value={value} color={color} />
      <motion.span
        animate={{ opacity: hovered ? 0.8 : 0.4 }}
        className="text-xs font-mono text-warm-white uppercase tracking-wider mt-1 block"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" ref={sectionRef} className="section-padding max-w-7xl mx-auto relative">
      <FloatingOrbs />
      <MouseSpotlight containerRef={sectionRef} />

      <div className="relative z-10">
        <SectionHeading subtitle="Technologies and tools I work with daily">
          Skills
        </SectionHeading>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
          <StatCard label="Total Skills" value={total} color="#00D4FF" index={0} />
          <StatCard label="Categories" value={skillCategories.length} color="#A855F7" index={1} />
          <StatCard label="ML/AI Tools" value={skillCategories.find(c => c.name === "ML/AI")?.skills.length || 0} color="#22D3EE" index={2} />
        </div>

        {/* 3D Galaxy */}
        <GalaxyScene />

        {/* Category cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.name} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
