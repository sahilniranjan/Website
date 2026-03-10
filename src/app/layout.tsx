import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Niranjan — Data Scientist & ML Engineer",
  description:
    "MS Analytics @ Northeastern University. Former Data Analyst at Vivma Software supporting JPMorgan Chase & Goldman Sachs. Building predictive models, shipping ML pipelines, and exploring where data meets markets.",
  keywords: [
    "Sahil Niranjan",
    "Data Scientist",
    "ML Engineer",
    "Machine Learning",
    "Data Analyst",
    "Northeastern University",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Niranjan" }],
  openGraph: {
    title: "Sahil Niranjan — Data Scientist & ML Engineer",
    description:
      "MS Analytics @ Northeastern University. Building predictive models, shipping ML pipelines, and exploring where data meets markets.",
    url: "https://sahilniranjan.dev",
    siteName: "Sahil Niranjan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Niranjan — Data Scientist & ML Engineer",
    description:
      "MS Analytics @ Northeastern University. Building predictive models, shipping ML pipelines, and exploring where data meets markets.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
