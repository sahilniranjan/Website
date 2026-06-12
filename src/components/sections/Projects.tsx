"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/useSpotlight";
import { projects } from "@/lib/constants";
import { ExternalLink, Github, Zap } from "lucide-react";

function TiltProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const spotlight = useSpotlight();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    spotlight(e);
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 6, ry: px * 6 });
  };

  return (
    <AnimateIn delay={(index % 2) * 0.12}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="spotlight-card glass border-glow rounded-3xl p-8 md:p-9 h-full flex flex-col group"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-sm text-muted/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r from-violet/15 to-cyan/15 border border-violet/30 text-cyan-bright">
            <Zap size={11} />
            {project.highlight}
          </span>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold mt-5 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-violet-bright mt-1.5 uppercase tracking-wider">
          {project.subtitle}
        </p>

        <p className="text-sm text-muted leading-relaxed mt-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-7 pt-6 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
          >
            <Github size={16} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan-bright transition-colors"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </motion.div>
    </AnimateIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="03" subtitle="Selected work">
        Projects
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <TiltProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
