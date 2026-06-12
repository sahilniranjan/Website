"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { useSpotlight } from "@/lib/useSpotlight";
import { education } from "@/lib/constants";
import {
  GraduationCap,
  Award,
  BookOpen,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function Education() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const spotlight = useSpotlight();

  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="05" subtitle="Where I studied">
        Education
      </SectionHeading>

      <div className="space-y-6">
        {education.map((edu, i) => {
          const isOpen = expanded === edu.school;
          return (
            <AnimateIn key={edu.school} delay={i * 0.1}>
              <div
                onMouseMove={spotlight}
                className="spotlight-card glass border-glow rounded-3xl p-7 md:p-9"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-violet/20 to-cyan/10 border border-violet/25 h-fit">
                      <GraduationCap size={22} className="text-violet-bright" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold">
                        {edu.degree}
                      </h3>
                      <p className="text-gradient font-semibold mt-1">
                        {edu.school}
                      </p>
                      <p className="font-mono text-xs text-muted mt-2">
                        {edu.location}
                        {edu.gpa && (
                          <span className="ml-3 text-cyan-bright">
                            GPA {edu.gpa}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-muted shrink-0 md:text-right">
                    {edu.period}
                  </span>
                </div>

                {edu.achievements.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {edu.achievements.map((ach) => (
                      <a
                        key={ach.text}
                        href={ach.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet/50 transition-colors group"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-ink/85">
                          {ach.text.startsWith("Patent") ? (
                            <Award size={16} className="text-violet-bright shrink-0" />
                          ) : (
                            <BookOpen size={16} className="text-cyan-bright shrink-0" />
                          )}
                          {ach.text}
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {edu.coursework.length > 0 && (
                  <div className="mt-6">
                    <button
                      onClick={() => setExpanded(isOpen ? null : edu.school)}
                      className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-ink transition-colors"
                      aria-expanded={isOpen}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                      {isOpen ? "Hide coursework" : `Show coursework (${edu.coursework.length})`}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-5">
                            {edu.coursework.map((course) => (
                              <div
                                key={course.name}
                                className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-sm"
                              >
                                <span className="text-ink/75 leading-snug">
                                  {course.name}
                                </span>
                                {course.inProgress ? (
                                  <span className="font-mono text-[10px] uppercase tracking-wider text-mint shrink-0">
                                    Now
                                  </span>
                                ) : (
                                  <span className="font-mono text-xs text-cyan-bright shrink-0">
                                    {course.grade}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
