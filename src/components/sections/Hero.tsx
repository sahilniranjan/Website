"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ArrowDown, FileText, Send } from "lucide-react";
import RoleTypewriter from "@/components/ui/RoleTypewriter";
import Magnetic from "@/components/ui/Magnetic";
import { siteConfig } from "@/lib/constants";

const NeuralField = dynamic(() => import("@/components/3d/NeuralField"), {
  ssr: false,
});

const firstName = "SAHIL";
const lastName = "NIRANJAN";

const letterVariants = {
  hidden: { y: "110%", rotate: 6, opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.35 + i * 0.045,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

function KineticWord({ word, offset, gradient }: { word: string; offset: number; gradient?: boolean }) {
  return (
    <span className="block overflow-hidden">
      <span className="inline-flex">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={offset + i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={`inline-block ${gradient ? "text-gradient" : ""}`}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aurora">
      {/* 3D neural network background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 9], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <NeuralField />
          </Suspense>
        </Canvas>
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 bg-dots" />

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
          </span>
          Open to AI/ML roles — {siteConfig.location}
        </motion.div>

        {/* Kinetic name */}
        <h1 className="font-heading font-bold tracking-tight leading-[0.95] text-[clamp(3rem,12vw,8.5rem)]">
          <KineticWord word={firstName} offset={0} />
          <KineticWord word={lastName} offset={firstName.length} gradient />
        </h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 text-lg md:text-2xl text-muted"
        >
          <RoleTypewriter />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-muted leading-relaxed"
        >
          I build LLM multi-agent systems, RAG pipelines, and production ML —
          most recently automating treasury verification at{" "}
          <span className="text-ink font-medium">BNY</span>. Patent holder,
          published researcher, MS Analytics @ Northeastern.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet to-cyan text-white font-medium hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)] transition-shadow duration-300"
            >
              View My Work <ArrowDown size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border-glow font-medium text-ink"
            >
              <FileText size={16} /> Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border-glow font-medium text-ink"
            >
              <Send size={16} /> Contact
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
