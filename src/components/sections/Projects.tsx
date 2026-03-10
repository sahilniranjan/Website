"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import Modal from "@/components/ui/Modal";
import { projects } from "@/lib/constants";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Things I've built that I'm proud of">
        Projects
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-sm font-mono mb-6">
              <Sparkles size={14} />
              {selectedProject.highlight}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-white mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-electric-blue font-medium text-lg mb-6">
              {selectedProject.subtitle}
            </p>
            <p className="text-warm-white/70 text-base leading-relaxed mb-8">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-mono px-4 py-1.5 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-warm-white/20 text-warm-white/80 text-sm font-medium hover:border-electric-blue hover:text-electric-blue transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-electric-blue to-neon-purple text-white text-sm font-medium hover:shadow-lg hover:shadow-electric-blue/25 transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard className="glass rounded-2xl overflow-hidden group cursor-pointer h-full">
        <div onClick={onClick} className="p-6 md:p-8 h-full flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-mono mb-4 w-fit">
            <Sparkles size={12} />
            {project.highlight}
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-warm-white mb-1 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-electric-blue/80 text-sm font-medium mb-4">
            {project.subtitle}
          </p>
          <p className="text-warm-white/50 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-white/5 text-warm-white/60 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-white/5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-warm-white/40 hover:text-electric-blue transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-warm-white/40 hover:text-electric-blue transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <span className="ml-auto text-xs text-warm-white/30 font-mono group-hover:text-electric-blue/50 transition-colors">
              Click to expand &rarr;
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
