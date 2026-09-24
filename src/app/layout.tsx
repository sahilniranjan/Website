import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Niranjan — AI/ML Engineer",
  description:
    "AI/ML engineer building LLM retrieval systems and the evaluation harnesses that gate them. Three and a half years of production ML across financial services, healthcare, and higher education. MS Analytics @ Northeastern University.",
  keywords: [
    "Sahil Niranjan",
    "AI Engineer",
    "ML Engineer",
    "GenAI",
    "LLM",
    "RAG",
    "LLM Evaluation",
    "Machine Learning",
    "MLOps",
    "Northeastern University",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Niranjan" }],
  openGraph: {
    title: "Sahil Niranjan — AI/ML Engineer",
    description:
      "LLM retrieval systems, evaluation harnesses, and production ML across financial services, healthcare, and higher education.",
    url: "https://sahilniranjan.dev",
    siteName: "Sahil Niranjan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Niranjan — AI/ML Engineer",
    description:
      "LLM retrieval systems, evaluation harnesses, and production ML across financial services, healthcare, and higher education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050509" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
