"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const [konamiActive, setKonamiActive] = useState(false);
  const sequenceRef = useRef<string[]>([]);
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      sequenceRef.current.push(e.code);
      if (sequenceRef.current.length > konamiCode.length) {
        sequenceRef.current.shift();
      }
      if (
        sequenceRef.current.length === konamiCode.length &&
        sequenceRef.current.every((key, i) => key === konamiCode[i])
      ) {
        setKonamiActive(true);
        sequenceRef.current = [];
        setTimeout(() => setKonamiActive(false), 5000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      {konamiActive && (
        <div className="fixed inset-0 z-[300] pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, opacity: 1 }}
              animate={{ y: "100vh", opacity: [1, 1, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                ease: "linear",
              }}
              className="absolute text-electric-blue font-mono text-sm"
              style={{ left: `${Math.random() * 100}%` }}
            >
              {Array.from({ length: 15 })
                .map(() => String.fromCharCode(0x30a0 + Math.random() * 96))
                .join("\n")}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-warm-white/40 text-sm font-mono flex items-center gap-1.5">
          Built with <Heart size={14} className="text-neon-purple" /> using
          Next.js & Three.js
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/40 hover:text-electric-blue transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white/40 hover:text-electric-blue transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-warm-white/40 hover:text-electric-blue transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-warm-white/30 text-xs font-mono">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
