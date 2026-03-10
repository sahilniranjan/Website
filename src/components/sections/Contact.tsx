"use client";

import { useState, FormEvent, Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import SectionHeading, { AnimateIn } from "@/components/ui/SectionHeading";
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

const ContactScene3D = dynamic(
  () => import("@/components/3d/ContactScene3D"),
  { ssr: false }
);

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

export default function Contact() {
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
    <section
      id="contact"
      className="section-padding max-w-7xl mx-auto relative"
    >
      <SectionHeading subtitle="Let's build something great together">
        Get in Touch
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <AnimateIn delay={0.1} direction="left">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-warm-white/50 mb-2"
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
                className="w-full px-4 py-3 rounded-xl glass border border-white/5 text-warm-white placeholder-warm-white/30 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-all bg-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-warm-white/50 mb-2"
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
                className="w-full px-4 py-3 rounded-xl glass border border-white/5 text-warm-white placeholder-warm-white/30 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-all bg-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-warm-white/50 mb-2"
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
                className="w-full px-4 py-3 rounded-xl glass border border-white/5 text-warm-white placeholder-warm-white/30 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-all bg-transparent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue to-neon-purple text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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
          </form>
        </AnimateIn>

        <AnimateIn delay={0.2} direction="right">
          <div className="space-y-8">
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-4 glass rounded-xl group hover:glow-blue transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 group-hover:bg-electric-blue/20 transition-colors">
                    <link.icon size={20} className="text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-warm-white/40">
                      {link.label}
                    </p>
                    <p className="text-warm-white/80 group-hover:text-electric-blue transition-colors text-sm">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-neon-purple/50 text-neon-purple font-medium hover:bg-neon-purple/10 hover:glow-purple transition-all duration-300"
            >
              <Download size={18} /> Download Resume
            </a>

            <div className="h-48 rounded-xl overflow-hidden glass hidden lg:block">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <pointLight
                    position={[5, 5, 5]}
                    intensity={0.3}
                    color="#00D4FF"
                  />
                  <ContactScene3D />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
