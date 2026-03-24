"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Terminal className="w-6 h-6 text-primary group-hover:text-purple-500 transition-colors" />
          <span className="font-mono font-bold text-xl tracking-tighter">sys<span className="text-primary glow-text">Admin</span>_</span>
        </Link>
        <div className="hidden md:flex gap-8 group">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-primary opacity-50 mr-1">/</span>
              <span className="hover:glow-text transition-all">{link.name.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
