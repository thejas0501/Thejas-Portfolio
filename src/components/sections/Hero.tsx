"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Terminal, Download, Github, Linkedin, Mail, Server, Cloud, Database, Shield, Cpu, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";

const typingPhrases = [
  "deploying infrastructure...",
  "monitoring production systems...",
  "optimizing cloud costs...",
  "engineering reliability...",
  "automating CI/CD pipelines...",
  "scaling Kubernetes clusters...",
];

function useTypingAnimation(phrases: string[], typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
  const [text, setText] = useState("");
  const phraseIdx = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    function tick() {
      const currentPhrase = phrases[phraseIdx.current];

      if (!isDeleting.current) {
        setText((prev) => {
          const next = currentPhrase.substring(0, prev.length + 1);
          if (next.length === currentPhrase.length) {
            // Pause at end, then start deleting
            timeoutRef.current = setTimeout(() => {
              isDeleting.current = true;
              tick();
            }, pauseTime);
          } else {
            timeoutRef.current = setTimeout(tick, typingSpeed);
          }
          return next;
        });
      } else {
        setText((prev) => {
          const next = currentPhrase.substring(0, prev.length - 1);
          if (next.length === 0) {
            isDeleting.current = false;
            phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
            timeoutRef.current = setTimeout(tick, 300);
          } else {
            timeoutRef.current = setTimeout(tick, deletingSpeed);
          }
          return next;
        });
      }
    }

    timeoutRef.current = setTimeout(tick, typingSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// Animated counter hook
function useCounter(target: number, duration = 2000, delay = 500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return count;
}

const metrics = [
  { label: "Uptime SLA", value: "99.97", suffix: "%", color: "text-[#00ff00]" },
  { label: "Services Monitored", value: 21, suffix: "+", color: "text-primary" },
  { label: "Cost Visibility", value: 13.2, suffix: "k/mo", prefix: "$", color: "text-[#b026ff]" },
  { label: "Incidents Resolved", value: 247, suffix: "", color: "text-orange-400" },
];

const floatingIcons = [
  { icon: Cloud, label: "AWS", x: "85%", y: "15%", delay: 0 },
  { icon: Database, label: "RDS", x: "90%", y: "45%", delay: 0.5 },
  { icon: Shield, label: "IAM", x: "82%", y: "70%", delay: 1 },
  { icon: Cpu, label: "K8s", x: "75%", y: "25%", delay: 1.5 },
  { icon: Activity, label: "SRE", x: "78%", y: "55%", delay: 2 },
];

export default function Hero() {
  const typedText = useTypingAnimation(typingPhrases);
  const deploymentsCount = useCounter(1247, 2500, 1000);
  const clustersCount = useCounter(3, 1500, 1200);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative w-full pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 w-full max-w-4xl z-10"
      >
        {/* Terminal Prompt */}
        <motion.div variants={itemVariants}>
          <div className="font-mono text-sm text-muted-foreground flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-[#00ff00]">root@infra</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-[#5c8fff]">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-white ml-1">{typedText}</span>
            <span className="text-primary animate-pulse">▋</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            <span className="block text-foreground">K A Thejas</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#8b5cf6] to-[#b026ff] pb-2 text-3xl md:text-5xl lg:text-6xl mt-3 tracking-tight">
              Cloud & DevOps Engineer
            </span>
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 tracking-tight max-w-3xl">
            Building Scalable Production Infrastructure
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed"
        >
          SRE-focused engineer specializing in{" "}
          <span className="text-primary">Kubernetes</span>,{" "}
          <span className="text-primary">AWS</span>,{" "}
          <span className="text-[#b026ff]">Terraform</span>,{" "}
          <span className="text-[#00ff00]">Observability</span>,{" "}
          CI/CD, and AI-powered automation.
        </motion.p>

        {/* Live Metrics Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mt-2"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric-card flex flex-col items-center px-4 py-3 min-w-[120px]"
            >
              <span className={`text-xl md:text-2xl font-bold font-mono ${m.color}`}>
                {m.prefix || ""}{typeof m.value === "number" ? m.value : m.value}{m.suffix}
              </span>
              <span className="text-xs text-muted-foreground font-mono mt-1">{m.label}</span>
            </div>
          ))}
          <div className="metric-card flex flex-col items-center px-4 py-3 min-w-[120px]">
            <span className="text-xl md:text-2xl font-bold font-mono text-primary">{deploymentsCount}</span>
            <span className="text-xs text-muted-foreground font-mono mt-1">Deployments</span>
          </div>
          <div className="metric-card flex flex-col items-center px-4 py-3 min-w-[120px]">
            <span className="text-xl md:text-2xl font-bold font-mono text-[#00ff00]">{clustersCount}</span>
            <span className="text-xs text-muted-foreground font-mono mt-1">Active Clusters</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
          <MagneticButton>
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono text-sm text-black bg-primary hover:bg-primary/90 rounded-md hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all"
            >
              <Server className="mr-2 h-4 w-4" /> View Projects
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="font-mono text-sm bg-white/5 backdrop-blur-sm border-white/15 text-white hover:bg-white/10 rounded-md"
              onClick={() => window.open("/thejas_devops.docx", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 bg-white/5 border-white/15 hover:bg-white/10 rounded-md"
              onClick={() => window.open("https://github.com/thejaskethini/", "_blank")}
            >
              <Github className="h-5 w-5 text-white" />
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 bg-white/5 border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 rounded-md"
              onClick={() => window.open("https://www.linkedin.com/in/ka-thejas/", "_blank")}
            >
              <Linkedin className="h-5 w-5 text-[#0a66c2]" />
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 bg-white/5 border-primary/30 hover:bg-primary/10 rounded-md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="h-5 w-5 text-primary" />
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Right side: Profile + Orbiting icons */}
      <div className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-80 h-80 xl:w-96 xl:h-96">
          {/* Orbiting rings */}
          <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-8 border border-[#b026ff]/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-[#00ff00]/8 rounded-full animate-[spin_30s_linear_infinite]" />

          {/* Profile image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-[#b026ff]/20 to-primary/20 rounded-full blur-2xl animate-pulse" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/thejaskethini.png"
                alt="K A Thejas"
                className="w-48 h-48 xl:w-56 xl:h-56 object-cover rounded-full border-2 border-primary/30 shadow-[0_0_40px_rgba(0,243,255,0.15)] relative z-10"
              />
            </div>
          </div>

          {/* Orbiting tech icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 origin-center"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 bg-black rounded-lg border border-primary/30 text-primary node-glow">
              <Server className="w-4 h-4" />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 origin-center"
          >
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 p-2 bg-black rounded-lg border border-[#b026ff]/30 text-[#b026ff] node-glow-purple">
              <Cloud className="w-4 h-4" />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 origin-center"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 p-2 bg-black rounded-lg border border-[#00ff00]/30 text-[#00ff00] node-glow-green">
              <Database className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating infrastructure icons (subtle, background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: item.delay + 1, duration: 1 }}
            className="absolute animate-float-slow"
            style={{ left: item.x, top: item.y }}
          >
            <div className="p-3 glass-panel rounded-lg">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
