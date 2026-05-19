"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Menu, X, Github } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Certs", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      // Active section detection
      const sections = links.map(l => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-4"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary via-[#b026ff] to-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Terminal className="w-5 h-5 text-primary group-hover:text-[#b026ff] transition-colors" />
            <span className="font-mono font-bold text-lg tracking-tighter">
              sys<span className="text-primary glow-text">Admin</span>
              <span className="text-muted-foreground">_</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary glow-text"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="text-primary/40 mr-1">/</span>
                {link.name.toLowerCase()}
              </Link>
            ))}
            <a
              href="https://github.com/thejas0501/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-white transition-colors ml-2"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted-foreground hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#030014]/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {links.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-mono font-bold text-foreground hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <span className="text-primary/50 text-sm">0{idx + 1}.</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-white/10 pt-6 mt-4 flex gap-4">
                <a href="https://github.com/thejas0501/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
