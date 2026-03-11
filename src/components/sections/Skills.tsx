"use client";

import dynamic from "next/dynamic";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/constants";

const PoolScene = dynamic(() => import("@/components/3d/PoolScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Technologies and tools I work with daily">
        Skills
      </SectionHeading>

      <PoolScene />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <AnimateIn key={category.name} delay={i * 0.1} direction="up">
            <div className="glass rounded-xl p-6 hover:glow-blue transition-shadow duration-300">
              <h3
                className="font-heading text-lg font-bold mb-4"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: `${category.color}30`,
                      color: `${category.color}CC`,
                      backgroundColor: `${category.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
