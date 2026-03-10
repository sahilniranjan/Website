"use client";

import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { education } from "@/lib/constants";
import { GraduationCap, Award, Trophy, BookOpen, Dribbble } from "lucide-react";

const achievementIcons: Record<string, typeof Award> = {
  Patent: Award,
  Published: BookOpen,
  Hackathon: Trophy,
  Basketball: Dribbble,
  Cricket: Dribbble,
};

function getIcon(achievement: string) {
  for (const [key, Icon] of Object.entries(achievementIcons)) {
    if (achievement.toLowerCase().includes(key.toLowerCase())) return Icon;
  }
  return Award;
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
                    const Icon = getIcon(achievement);
                    return (
                      <div
                        key={achievement}
                        className="flex items-center gap-3 text-warm-white/60 text-sm group"
                      >
                        <Icon
                          size={16}
                          className="text-neon-purple/60 group-hover:text-neon-purple transition-colors shrink-0"
                        />
                        <span className="group-hover:text-warm-white/80 transition-colors">
                          {achievement}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
