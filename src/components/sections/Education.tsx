"use client";

import { useState } from "react";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { education } from "@/lib/constants";
import { GraduationCap, Award, BookOpen, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const achievementIcons: Record<string, typeof Award> = {
  Patent: Award,
  Published: BookOpen,
};

function getIcon(text: string) {
  for (const [key, Icon] of Object.entries(achievementIcons)) {
    if (text.toLowerCase().includes(key.toLowerCase())) return Icon;
  }
  return Award;
}

function CourseworkSection({ coursework }: { coursework: typeof education[0]["coursework"] }) {
  const [expanded, setExpanded] = useState(false);
  if (!coursework || coursework.length === 0) return null;

  const completed = coursework.filter((c) => !c.inProgress);
  const inProgress = coursework.filter((c) => c.inProgress);
  const visible = expanded ? completed : completed.slice(0, 6);

  return (
    <div className="mt-6">
      <h4 className="text-sm font-mono text-warm-white/60 mb-3 uppercase tracking-wider">
        Coursework
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {visible.map((course) => (
          <div
            key={course.name}
            className="flex items-center justify-between gap-2 text-sm text-warm-white/55 px-3 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors"
          >
            <span className="truncate">{course.name}</span>
            {course.grade && (
              <span className="shrink-0 text-xs font-mono text-electric-blue/80">
                {course.grade}
              </span>
            )}
          </div>
        ))}
      </div>
      {completed.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1 text-xs font-mono text-neon-purple/70 hover:text-neon-purple transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Show less" : `Show all ${completed.length} courses`}
        </button>
      )}
      {inProgress.length > 0 && (
        <div className="mt-3">
          <span className="text-xs font-mono text-warm-white/40 uppercase tracking-wider">
            In Progress (Winter 2026)
          </span>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {inProgress.map((course) => (
              <span
                key={course.name}
                className="text-xs font-mono px-3 py-1 rounded-full border border-neon-purple/20 text-neon-purple/70 bg-neon-purple/5"
              >
                {course.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Academic foundations and achievements">
        Education
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {education.map((edu, i) => (
          <AnimateIn key={edu.school} delay={i * 0.15} direction="up">
            <div className="glass rounded-2xl p-8 hover:glow-purple transition-shadow duration-300 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20 shrink-0">
                  <GraduationCap size={24} className="text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-warm-white">
                    {edu.degree}
                  </h3>
                  <p className="text-electric-blue font-medium">{edu.school}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-warm-white/50 font-mono">
                    <span>{edu.location}</span>
                    {edu.gpa && (
                      <>
                        <span className="text-warm-white/20">&bull;</span>
                        <span>
                          GPA:{" "}
                          <span className="text-electric-blue">{edu.gpa}</span>
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-warm-white/40 text-sm mt-1 font-mono">
                    {edu.period}
                  </p>
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <div className="space-y-3 pl-4 border-l-2 border-neon-purple/20">
                  {edu.achievements.map((achievement) => {
                    const isLink = typeof achievement === "object" && achievement.url;
                    const text = typeof achievement === "object" ? achievement.text : achievement;
                    const url = typeof achievement === "object" ? achievement.url : null;
                    const Icon = getIcon(text);
                    return (
                      <div
                        key={text}
                        className="flex items-center gap-3 text-warm-white/60 text-sm group"
                      >
                        <Icon
                          size={16}
                          className="text-neon-purple/60 group-hover:text-neon-purple transition-colors shrink-0"
                        />
                        {isLink && url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group-hover:text-electric-blue transition-colors flex items-center gap-1.5 underline underline-offset-2 decoration-electric-blue/30 hover:decoration-electric-blue"
                          >
                            {text}
                            <ExternalLink size={12} className="shrink-0 opacity-50 group-hover:opacity-100" />
                          </a>
                        ) : (
                          <span className="group-hover:text-warm-white/80 transition-colors">
                            {text}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              <CourseworkSection coursework={edu.coursework} />
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
