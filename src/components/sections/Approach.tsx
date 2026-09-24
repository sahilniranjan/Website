"use client";

import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/constants";
import { useSpotlight } from "@/lib/useSpotlight";

export default function Approach() {
  const spotlight = useSpotlight();

  return (
    <section id="approach" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="03" subtitle="How I work">
        Where does it fail?
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <AnimateIn key={p.n} delay={i * 0.1}>
            <div
              onMouseMove={spotlight}
              className="spotlight-card glass border-glow rounded-3xl p-8 h-full flex flex-col"
            >
              <span className="font-mono text-sm text-violet-bright/70">
                {p.n}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold mt-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-muted leading-relaxed mt-4 flex-1">{p.body}</p>
              <p className="text-sm text-ink/70 leading-relaxed mt-6 pt-5 border-t border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-bright block mb-2">
                  In practice
                </span>
                {p.evidence}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
