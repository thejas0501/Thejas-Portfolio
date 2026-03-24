"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Server, Cloud, Container, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full pt-20">
      
      {/* Left Text Content */}
      <motion.div 
        className="flex-1 flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">System Status: Online & Scaling</span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-xl md:text-2xl font-mono text-primary glow-text">
            &gt; Hello, world. I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="block text-foreground">K A Thejas</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#b026ff] pb-2">
              Cloud & DevOps Engineer
            </span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground max-w-lg text-lg leading-relaxed">
          Cloud & DevOps Engineer with hands-on experience building and deploying cloud-native infrastructure, CI/CD pipelines, and robust data platforms across AWS, Azure, and IBM Cloud.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <MagneticButton>
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all font-mono text-black">
              <Terminal className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-mono">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MagneticButton>
        </motion.div>
        
        {/* Fake Terminal Logs */}
        <motion.div variants={itemVariants} className="mt-8 p-4 rounded-lg bg-black/50 border border-white/10 font-mono text-xs text-muted-foreground max-w-lg backdrop-blur-md">
          <p className="text-[#00ff00]">$ ./deploy.sh --target=production</p>
          <p className="opacity-70 animate-pulse">[INFO] Initializing infrastructure...</p>
          <p className="opacity-70">[INFO] Containers scaling up (3/3)</p>
          <p className="text-primary glow-text">[SUCCESS] Deployment verified. Uptime 100%.</p>
        </motion.div>
      </motion.div>

      {/* Right Visual Content (Orbiting Tech Icons) */}
      <motion.div 
        className="flex-1 relative flex items-center justify-center min-h-[400px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-primary/30 flex items-center justify-center" style={{ animation: "spin 20s linear infinite" }}>
          <div className="absolute w-full h-full rounded-full border border-white/5" />
          
          {/* Orbiting Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border border-primary/50 p-3 rounded-xl shadow-[0_0_15px_rgba(0,243,255,0.4)]" style={{ animation: "spin 20s linear infinite reverse" }}>
            <Server className="w-6 h-6 text-primary" />
          </div>
          
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-black border border-[#b026ff]/50 p-3 rounded-xl shadow-[0_0_15px_rgba(176,38,255,0.4)]" style={{ animation: "spin 20s linear infinite reverse" }}>
            <Cloud className="w-6 h-6 text-[#b026ff]" />
          </div>
          
          <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 bg-black border border-[#00ff00]/50 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.4)]" style={{ animation: "spin 20s linear infinite reverse" }}>
            <Container className="w-6 h-6 text-[#00ff00]" />
          </div>

          <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-black border border-white/20 p-3 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ animation: "spin 20s linear infinite reverse" }}>
            <Github className="w-6 h-6 text-white" />
          </div>

          {/* Center Profile Ring */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-primary/20 to-[#b026ff]/20 border-2 border-primary/50 backdrop-blur-xl flex items-center justify-center" style={{ animation: "spin 10s linear infinite reverse" }}>
             <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center" style={{ animation: "spin 10s linear infinite" }}>
                <Terminal className="w-12 h-12 text-primary glow-text" />
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
