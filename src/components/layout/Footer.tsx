"use client";

import { siteConfig, navLinks } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-xl text-gradient">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted mt-1">
              AI/ML Engineer — {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Magnetic key={s.label} strength={0.25}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="p-2.5 rounded-full glass border-glow text-muted hover:text-ink transition-colors inline-flex"
                >
                  <s.icon size={18} />
                </a>
              </Magnetic>
            ))}
            <Magnetic strength={0.25}>
              <a
                href="#home"
                aria-label="Back to top"
                className="p-2.5 rounded-full bg-gradient-to-r from-violet to-cyan text-white inline-flex"
              >
                <ArrowUp size={18} />
              </a>
            </Magnetic>
          </div>
        </div>

        <p className="text-center text-xs font-mono text-muted/50 mt-10">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Three.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
