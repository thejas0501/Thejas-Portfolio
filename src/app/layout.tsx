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
  title: "K A Thejas | Cloud & DevOps Engineer",
  description: "Portfolio of K A Thejas, Cloud & DevOps Engineer specializing in AWS, infrastructure automation, and data platforms.",
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
