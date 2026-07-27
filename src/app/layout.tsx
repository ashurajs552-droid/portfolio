import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aashu Raj S — AI/ML Engineer Portfolio",
  description: "Personal portfolio of Aashu Raj S, B.E. AI & Machine Learning Engineer specializing in Computer Vision, Edge AI, Local-First LLM agents, and full-stack ML architecture.",
  keywords: [
    "Aashu Raj S",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "LLM Integrations",
    "PyTorch",
    "Next.js AI",
    "ClassPulse AI",
    "DocMind"
  ],
  authors: [{ name: "Aashu Raj S", url: "https://github.com/ashurajs552-droid" }],
  openGraph: {
    title: "Aashu Raj S — AI/ML Engineer",
    description: "Engineering real-time Computer Vision & Local-first LLM systems.",
    type: "website",
    locale: "en_US",
    siteName: "Aashu Raj S Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashu Raj S — AI/ML Engineer",
    description: "Engineering real-time Computer Vision & Local-first LLM systems."
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0a0a0f] text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
