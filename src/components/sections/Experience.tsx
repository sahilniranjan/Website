"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { experiences } from "@/lib/constants";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Where I've built, shipped, and scaled">
        Experience
      </SectionHeading>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-blue via-neon-purple to-transparent" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12 md:pl-20"
    >
      <div className="absolute left-[10px] md:left-[26px] top-2 w-[14px] h-[14px] rounded-full border-2 border-electric-blue bg-background z-10">
        <div className="absolute inset-1 rounded-full bg-electric-blue animate-pulse-glow" />
      </div>

      <TiltCard className="glass rounded-2xl p-6 md:p-8 hover:glow-blue transition-all duration-300 group">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-warm-white group-hover:text-gradient transition-all duration-300">
              {experience.role}
            </h3>
            <p className="text-electric-blue font-medium text-base">
              {experience.company}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-sm text-warm-white/50 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {experience.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {experience.description.map((desc, j) => (
            <li
              key={j}
              className="text-warm-white/60 text-sm leading-relaxed flex items-start gap-2"
            >
              <span className="text-neon-purple mt-1.5 shrink-0">&#9657;</span>
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue/80 border border-electric-blue/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}
