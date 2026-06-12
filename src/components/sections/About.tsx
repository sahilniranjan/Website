"use client";

import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { useSpotlight } from "@/lib/useSpotlight";
import { stats, publications, siteConfig } from "@/lib/constants";
import { Award, BookOpen, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function About() {
  const spotlight = useSpotlight();

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeading index="01" subtitle="Who I am">
        About
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Bio — large card */}
        <AnimateIn className="md:col-span-2 md:row-span-2">
          <div
            onMouseMove={spotlight}
            className="spotlight-card glass border-glow rounded-3xl p-8 md:p-10 h-full"
          >
            <div className="flex items-center gap-2 text-violet-bright font-mono text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} /> AI/ML Engineer
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-ink/90">
              I build machine learning systems that ship — from{" "}
              <span className="text-gradient font-semibold">
                LLM multi-agent treasury verification at BNY
              </span>{" "}
              to anomaly-detection models guarding investment-banking
              compliance pipelines at Vivma Software.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              My work spans the full lifecycle: RAG pipelines over thousands of
              policy documents, feature engineering on millions of financial
              records, latency-optimized C++ inference, and MLOps pipelines
              with MLflow, Docker, and CI/CD. I care about systems that are
              measurable — precision lifted from 0.62 to 0.81, retrieval
              latency cut 44%, $850K in engineering hours saved.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              Currently finishing my MS in Analytics at Northeastern University
              in Boston, with a granted patent and published research along the
              way.
            </p>
          </div>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn delay={0.1}>
          <div
            onMouseMove={spotlight}
            className="spotlight-card glass border-glow rounded-3xl p-7 h-full"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                    <CountUp
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </p>
                  <p className="text-xs text-muted mt-1.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Location / status */}
        <AnimateIn delay={0.2}>
          <div
            onMouseMove={spotlight}
            className="spotlight-card glass border-glow rounded-3xl p-7 h-full flex flex-col justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-muted font-mono text-xs uppercase tracking-widest">
              <MapPin size={14} className="text-cyan-bright" /> Based in
            </div>
            <div>
              <p className="font-heading text-2xl font-bold">Boston, MA</p>
              <p className="text-sm text-muted mt-1.5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
                Open to AI/ML opportunities
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Patent + Publication */}
        {publications.map((pub, i) => (
          <AnimateIn key={pub.type} delay={0.15 + i * 0.1} className="md:col-span-1">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={spotlight}
              className="spotlight-card glass border-glow rounded-3xl p-7 h-full flex flex-col gap-3 group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-bright">
                  {pub.type === "Patent" ? <Award size={14} /> : <BookOpen size={14} />}
                  {pub.type}
                </div>
                <ExternalLink
                  size={14}
                  className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="font-medium leading-snug">{pub.title}</p>
              <p className="text-xs font-mono text-muted">{pub.detail}</p>
            </a>
          </AnimateIn>
        ))}

        {/* Quick contact strip */}
        <AnimateIn delay={0.3}>
          <a
            href={`mailto:${siteConfig.email}`}
            onMouseMove={spotlight}
            className="spotlight-card rounded-3xl p-7 h-full flex flex-col justify-between gap-3 bg-gradient-to-br from-violet/20 to-cyan/10 border border-violet/30 hover:border-violet/60 transition-colors block group"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Get in touch
            </p>
            <p className="font-heading text-xl font-bold group-hover:text-gradient transition-all break-all">
              {siteConfig.email}
            </p>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
