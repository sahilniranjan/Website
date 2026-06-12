"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { skillCategories, allSkills } from "@/lib/constants";

const ALL = "All";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const visibleSkills =
    activeCategory === ALL
      ? allSkills
      : skillCategories
          .find((c) => c.name === activeCategory)!
          .skills.map((skill) => ({
            name: skill,
            color: skillCategories.find((c) => c.name === activeCategory)!.color,
          }));

  const marqueeRow = (reverse: boolean, items: typeof allSkills) => (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex shrink-0 gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="px-4 py-2 rounded-full text-sm font-mono whitespace-nowrap bg-white/[0.03] border border-white/8"
            style={{ color: skill.color }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  const mid = Math.ceil(allSkills.length / 2);

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="04" subtitle="What I work with">
        Skills
      </SectionHeading>

      {/* Category filter */}
      <AnimateIn>
        <div className="flex flex-wrap gap-2.5 mb-10">
          {[ALL, ...skillCategories.map((c) => c.name)].map((name) => {
            const cat = skillCategories.find((c) => c.name === name);
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                onClick={() => setActiveCategory(name)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                  isActive
                    ? "text-ink border-transparent"
                    : "text-muted border-white/10 hover:text-ink hover:border-white/25"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet/30 to-cyan/20 border border-violet/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  {cat && (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                  )}
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </AnimateIn>

      {/* Skill chips */}
      <AnimateIn delay={0.1}>
        <motion.div layout className="flex flex-wrap gap-3 min-h-[120px]">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => (
              <motion.span
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                whileHover={{ y: -4, scale: 1.06 }}
                className="px-4 py-2.5 rounded-2xl text-sm font-medium cursor-default select-none border bg-white/[0.03]"
                style={{
                  borderColor: `${skill.color}40`,
                  color: skill.color,
                  boxShadow: `0 0 24px -12px ${skill.color}60`,
                }}
              >
                {skill.name}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimateIn>

      {/* Infinite marquee */}
      <AnimateIn delay={0.15} className="mt-16 space-y-4">
        {marqueeRow(false, allSkills.slice(0, mid))}
        {marqueeRow(true, allSkills.slice(mid))}
      </AnimateIn>
    </section>
  );
}
