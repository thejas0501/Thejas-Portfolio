"use client";

import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#030014]/80 backdrop-blur-xl mt-24 relative">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + status */}
          <div className="flex items-center gap-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              sys<span className="text-primary">Admin</span>_portfolio
            </span>
            <span className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground ml-4 pl-4 border-l border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse shadow-[0_0_6px_rgba(0,255,0,0.6)]" />
              All systems operational
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/thejaskethini/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/ka-thejas/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0a66c2] transition-colors p-2 rounded-lg hover:bg-white/5">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:thejaskethini.tech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground/50 font-mono">
            © {new Date().getFullYear()} K A Thejas · Architected for reliability
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/40 font-mono">
            <span>Next.js</span>
            <span className="text-white/10">•</span>
            <span>TypeScript</span>
            <span className="text-white/10">•</span>
            <span>Tailwind</span>
            <span className="text-white/10">•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
