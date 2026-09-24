"use client";

import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import { caseStudy } from "@/lib/constants";
import { useSpotlight } from "@/lib/useSpotlight";

export default function CaseStudy() {
  const spotlight = useSpotlight();

  return (
    <section id="case-study" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="01" subtitle={caseStudy.kicker}>
        {caseStudy.title}
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* The problem */}
        <AnimateIn className="lg:col-span-7">
          <div
            onMouseMove={spotlight}
            className="spotlight-card glass border-glow rounded-3xl p-8 md:p-10 h-full"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-violet-bright mb-5">
              {caseStudy.eyebrow}
            </p>
            <h3 className="font-heading text-xl font-bold mb-4">The problem</h3>
            <p className="text-muted leading-relaxed">{caseStudy.problem}</p>

            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
              {caseStudy.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Metrics */}
        <AnimateIn delay={0.1} className="lg:col-span-5">
          <div className="grid grid-cols-1 gap-6 h-full">
            {caseStudy.metrics.map((m) => (
              <div
                key={m.label}
                onMouseMove={spotlight}
                className="spotlight-card glass border-glow rounded-3xl p-7 flex-1 flex flex-col justify-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient">
                  {m.value}
                </p>
                <p className="text-sm text-muted mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Approach steps */}
        {caseStudy.approach.map((step, i) => (
          <AnimateIn
            key={step.label}
            delay={0.05 * i}
            className="lg:col-span-6"
          >
            <div
              onMouseMove={spotlight}
              className="spotlight-card glass border-glow rounded-3xl p-7 h-full"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-sm text-violet-bright/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-heading text-lg font-bold">{step.label}</h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          </AnimateIn>
        ))}

        {/* Outcome */}
        <AnimateIn delay={0.1} className="lg:col-span-12">
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-violet/15 to-cyan/10 border border-violet/25">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Outcome
            </p>
            <p className="font-heading text-xl md:text-2xl leading-snug text-ink/95">
              {caseStudy.outcome}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
