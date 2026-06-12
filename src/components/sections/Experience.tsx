"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/useSpotlight";
import { experiences } from "@/lib/constants";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const spotlight = useSpotlight();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto relative">
      <SectionHeading index="02" subtitle="Where I've worked">
        Experience
      </SectionHeading>

      <div ref={timelineRef} className="relative">
        {/* Timeline track */}
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/5" />
        {/* Animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-violet to-cyan origin-top"
        />

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-40" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-br from-violet to-cyan border-2 border-background" />
                  </span>
                </div>

                {/* Card */}
                <div className={`md:w-1/2 pl-10 md:pl-0 ${isLeft ? "md:pr-14" : "md:pl-14"}`}>
                  <AnimateIn direction={isLeft ? "left" : "right"}>
                    <div
                      onMouseMove={spotlight}
                      className="spotlight-card glass border-glow rounded-3xl p-7 md:p-8"
                    >
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-muted mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={12} className="text-violet-bright" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} className="text-cyan-bright" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold">{exp.role}</h3>
                      <p className="text-gradient font-semibold mt-1">{exp.company}</p>
                      <p className="text-sm text-muted mt-3 leading-relaxed">{exp.summary}</p>

                      <ul className="mt-5 space-y-2.5">
                        {exp.description.map((item, j) => (
                          <li key={j} className="flex gap-2.5 text-sm text-ink/75 leading-relaxed">
                            <ChevronRight
                              size={14}
                              className="text-violet-bright mt-1 shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-muted hover:text-ink hover:border-violet/50 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                </div>

                {/* Spacer for the opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
