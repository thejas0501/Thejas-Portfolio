"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, Download, Github, Linkedin, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative w-full pt-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 w-full max-w-4xl z-10"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-primary font-mono mb-4 text-sm md:text-base flex items-center gap-2">
            <Terminal className="w-4 h-4" /> root@portfolio:~# ./init_profile.sh
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="block text-foreground">K A Thejas</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#b026ff] pb-2 text-4xl md:text-6xl lg:text-7xl mt-2 tracking-tight">
              DevOps & Cloud SRE
            </span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl text-lg md:text-xl leading-relaxed font-mono">
          <span className="text-white font-bold">Building Scalable Systems.</span> I design and manage production-grade cloud infrastructure with a focus on reliability, performance, and cost optimization.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <MagneticButton>
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="font-mono text-black bg-primary hover:bg-primary/90 rounded-none hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all">
              <Terminal className="mr-2 h-4 w-4" /> View Projects
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="lg" variant="outline" className="font-mono bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 rounded-none" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="icon" variant="outline" className="h-11 w-11 bg-black/50 border-white/20 hover:bg-white/10 rounded-none" onClick={() => window.open('https://github.com/thejas0501/', '_blank')}>
              <Github className="h-5 w-5 text-white" />
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="icon" variant="outline" className="h-11 w-11 bg-black/50 border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 rounded-none" onClick={() => window.open('https://www.linkedin.com/in/ka-thejas/', '_blank')}>
              <Linkedin className="h-5 w-5 text-[#0a66c2]" />
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Orbiting Tech Stack Visual */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-60">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-8 border border-[#b026ff]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-[#00ff00]/20 rounded-full animate-[spin_20s_linear_infinite]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://github.com/thejas0501.png" alt="Profile" className="w-24 h-24 rounded-full border-2 border-primary relative z-10 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 origin-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-2 bg-black rounded-lg border border-primary text-primary">
              <Server className="w-6 h-6" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 origin-center"
          >
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 bg-black rounded-lg border border-[#b026ff] text-[#b026ff]">
              <Cloud className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
