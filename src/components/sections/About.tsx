"use client";

import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Building at the intersection of data, ML, and markets">
        About Me
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-3 space-y-6">
          <AnimateIn delay={0.1} direction="left">
            <p className="text-warm-white/70 text-lg leading-relaxed">
              MS Analytics @{" "}
              <span className="text-electric-blue font-medium">
                Northeastern University
              </span>{" "}
              (3.83 GPA, June 2026). Former Data Analyst at{" "}
              <span className="text-neon-purple font-medium">
                Vivma Software
              </span>{" "}
              supporting{" "}
              <span className="text-warm-white font-medium">
                JPMorgan Chase & Goldman Sachs
              </span>
              .
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2} direction="left">
            <p className="text-warm-white/70 text-lg leading-relaxed">
              I build predictive models, ship ML pipelines, and love where data
              meets markets.{" "}
              <span className="text-warm-white font-medium">Patent holder</span>
              .{" "}
              <span className="text-warm-white font-medium">
                Hackathon winner
              </span>
              .{" "}
              <span className="text-warm-white font-medium">
                Basketball enthusiast
              </span>
              .
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3} direction="left">
            <p className="text-warm-white/50 text-base leading-relaxed">
              I thrive on solving complex problems with data &mdash; whether
              it&apos;s building a sub-millisecond inference engine for crypto
              markets, deploying computer vision systems with 97% accuracy, or
              crunching 1.5M records monthly for Wall Street clients. My work
              sits at the intersection of engineering rigor and analytical
              creativity.
            </p>
          </AnimateIn>
        </div>

        <div className="lg:col-span-2 flex justify-center">
          <AnimateIn delay={0.4} direction="right">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-electric-blue/20 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border border-neon-purple/20 animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "25s",
                }}
              />
              <div
                className="absolute inset-8 rounded-full border border-electric-blue/10 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl glass glow-blue flex items-center justify-center rotate-12">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-gradient -rotate-12">
                    SN
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-electric-blue/50 animate-float" />
              <div className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-neon-purple/50 animate-float-delayed" />
              <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-yellow-400/50 animate-float" />
            </div>
          </AnimateIn>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={0.1 * i} direction="up">
            <div className="glass rounded-xl p-6 text-center hover:glow-blue transition-shadow duration-300">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <p className="mt-2 text-warm-white/50 text-sm font-mono">
                {stat.label}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
