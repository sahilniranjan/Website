"use client";

import { useState, FormEvent } from "react";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";
import { useSpotlight } from "@/lib/useSpotlight";
import { siteConfig } from "@/lib/constants";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Download,
  CheckCircle,
  Loader2,
} from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sahil Niranjan",
    href: siteConfig.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sahilniranjan",
    href: siteConfig.github,
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl glass text-ink placeholder-muted/50 focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/40 transition-all bg-transparent";

export default function Contact() {
  const spotlight = useSpotlight();
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpwzgkvl"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormState("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto relative">
      <SectionHeading index="06" subtitle="Let's build something great">
        Get in <span className="text-gradient">Touch</span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        <AnimateIn delay={0.1} direction="left">
          <div
            onMouseMove={spotlight}
            className="spotlight-card glass border-glow rounded-3xl p-7 md:p-9"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-widest text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or role..."
                />
              </div>
              <Magnetic strength={0.15}>
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet to-cyan text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.55)] transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "idle" && (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  )}
                  {formState === "sent" && (
                    <>
                      <CheckCircle size={18} /> Sent Successfully!
                    </>
                  )}
                  {formState === "error" && "Failed — try again"}
                </button>
              </Magnetic>
            </form>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} direction="right">
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                onMouseMove={spotlight}
                className="spotlight-card flex items-center gap-4 p-4 glass border-glow rounded-2xl group"
              >
                <div className="p-2.5 rounded-xl bg-violet/10 border border-violet/25 group-hover:bg-violet/20 transition-colors">
                  <link.icon size={20} className="text-violet-bright" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
                    {link.label}
                  </p>
                  <p className="text-ink/85 group-hover:text-cyan-bright transition-colors text-sm">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            <Magnetic strength={0.15}>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl glass border-glow font-medium text-ink"
              >
                <Download size={18} /> Download Resume
              </a>
            </Magnetic>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
