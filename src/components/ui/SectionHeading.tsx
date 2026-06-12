"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const offsets = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    none: { x: 0, y: 0 },
  };
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function SectionHeading({
  children,
  subtitle,
  index,
}: {
  children: ReactNode;
  subtitle?: string;
  index?: string;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <AnimateIn>
        <div className="flex items-center gap-4 mb-4">
          {index && (
            <span className="font-mono text-sm text-violet-bright/70">
              {index}
            </span>
          )}
          <span className="h-px w-12 bg-gradient-to-r from-violet to-transparent" />
          {subtitle && (
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted">
              {subtitle}
            </p>
          )}
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {children}
        </h2>
      </AnimateIn>
    </div>
  );
}
