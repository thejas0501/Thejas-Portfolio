import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import ParticleBackground from "@/components/shared/ParticleBackground";
import AiChatWidget from "@/components/shared/AiChatWidget";
import SystemStatus from "@/components/shared/SystemStatus";
import CommandMenu from "@/components/shared/CommandMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K A Thejas | Cloud & DevOps Engineer — SRE, AWS, Kubernetes, Terraform",
  description:
    "Portfolio of K A Thejas — Cloud & DevOps Engineer specializing in SRE, AWS infrastructure, Kubernetes, Terraform, Observability, CI/CD, and AI-powered automation. Building scalable production systems.",
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer", 
    "SRE",
    "Site Reliability Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Observability",
    "Prometheus",
    "Grafana",
    "Infrastructure as Code",
    "CI/CD",
    "Platform Engineer",
    "K A Thejas",
  ],
  authors: [{ name: "K A Thejas" }],
  openGraph: {
    title: "K A Thejas | Cloud & DevOps Engineer",
    description: "SRE-focused engineer building scalable production infrastructure with AWS, Kubernetes, Terraform, and Observability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col cursor-none overflow-x-hidden">
        <ParticleBackground />
        <CustomCursor />
        <SystemStatus />
        <CommandMenu />
        {children}
        <AiChatWidget />
      </body>
    </html>
  );
}
