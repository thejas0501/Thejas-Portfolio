"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Shield, DollarSign, Cpu, Activity, Server, Cloud, Database, Zap, GitBranch } from "lucide-react";

const stats = [
  { label: "AWS Services Managed", value: "21+", icon: Cloud, color: "text-primary" },
  { label: "Production Uptime", value: "99.97%", icon: Activity, color: "text-[#00ff00]" },
  { label: "Cost Visibility", value: "$13k/mo", icon: DollarSign, color: "text-[#b026ff]" },
  { label: "Deployments Automated", value: "100%", icon: Zap, color: "text-orange-400" },
];

const pillars = [
  {
    title: "Cost Optimization",
    description: "Identifying idle resources, right-sizing instances, and leveraging CloudWatch + Cost Explorer to reduce AWS spend and deliver actionable cost intelligence.",
    icon: DollarSign,
    color: "from-[#00ff00]/5 border-[#00ff00]/20 hover:border-[#00ff00]/50 hover:shadow-[0_0_25px_rgba(0,255,0,0.08)]",
    iconColor: "text-[#00ff00]",
  },
  {
    title: "Infrastructure Automation",
    description: "Eliminating manual toil and configuration drift through Terraform IaC, CI/CD pipelines, and GitOps workflows for reproducible infrastructure.",
    icon: Cpu,
    color: "from-[#b026ff]/5 border-[#b026ff]/20 hover:border-[#b026ff]/50 hover:shadow-[0_0_25px_rgba(176,38,255,0.08)]",
    iconColor: "text-[#b026ff]",
  },
  {
    title: "Monitoring & Observability",
    description: "Building centralized dashboards with Prometheus, Grafana, and CloudWatch for real-time alerting, faster incident response, and SLO compliance.",
    icon: Activity,
    color: "from-primary/5 border-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.08)]",
    iconColor: "text-primary",
  },
  {
    title: "Zero-Trust Security",
    description: "Architecting secure VPC deployments with private subnet isolation, strict IAM least-privilege policies, and CloudTrail audit logging.",
    icon: Shield,
    color: "from-red-500/5 border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.08)]",
    iconColor: "text-red-400",
  },
];

const techBadges = [
  "AWS", "Kubernetes", "Terraform", "Docker", "Prometheus", "Grafana",
  "ArgoCD", "GitHub Actions", "Python", "Linux", "Nginx", "Helm",
];

export default function About() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ command: string; response: React.ReactNode }[]>([
    {
      command: "uptime",
      response: <div className="text-muted-foreground">up 4 days, 12:34, 1 user, load averages: 0.12, 0.05, 0.01</div>,
    },
    {
      command: "whoami",
      response: (
        <div className="text-primary">
          Cloud &amp; DevOps Engineer | SRE | Infra Automation
          <br />
          <span className="text-muted-foreground">Type &apos;help&apos; for available commands.</span>
        </div>
      ),
    },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="flex flex-col gap-1 text-muted-foreground mt-1">
            <div><span className="text-[#00ff00]">about</span>    — system biography</div>
            <div><span className="text-[#00ff00]">skills</span>   — technical dependencies</div>
            <div><span className="text-[#00ff00]">stack</span>    — infrastructure stack</div>
            <div><span className="text-[#00ff00]">projects</span> — deployed systems</div>
            <div><span className="text-[#00ff00]">clear</span>    — reset session</div>
          </div>
        );
        break;
      case "about":
        response = (
          <div className="mt-1 text-gray-300">
            Cloud &amp; DevOps Engineer with hands-on production AWS experience. I specialize in building scalable infrastructure, automating deployments, optimizing cloud costs ($13k/mo visibility), and engineering reliability with SLO-driven observability. Currently managing EC2, RDS, ALB, VPC and monitoring stacks in production.
          </div>
        );
        break;
      case "skills":
      case "stack":
        response = (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {techBadges.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-primary text-xs">
                {t}
              </span>
            ))}
          </div>
        );
        break;
      case "projects":
        response = <div className="text-muted-foreground italic mt-1">Navigating to /projects...</div>;
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }, 800);
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "":
        response = "";
        break;
      default:
        response = <span className="text-destructive mt-1 block">command not found: {cmd}</span>;
    }

    setOutput((prev) => [...prev, { command: cmd, response }]);
    setInput("");
  };

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">01.</span> System<span className="text-muted-foreground">Config</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Left: Engineering Philosophy */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base">
                I&apos;m a <span className="text-primary font-semibold">Cloud &amp; DevOps Engineer</span> with a production-first mindset. 
                I don&apos;t just deploy infrastructure — I engineer systems that are reliable, observable, cost-efficient, and built to scale.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                My work focuses on managing <span className="text-white">production AWS infrastructure</span> (EC2, RDS, ALB, VPC), 
                building observability platforms that monitor 21+ cloud services, 
                automating deployments with Terraform and CI/CD pipelines, 
                and driving <span className="text-white">cloud cost optimization</span> with $13k/month infrastructure visibility.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                I approach every system with an SRE mindset: define SLOs, instrument with metrics, 
                automate remediation, and eliminate toil. If a process can break in production, 
                I&apos;ve probably written a runbook and automated the recovery for it.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {techBadges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.04 }}
                  className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-xs font-mono text-gray-300 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="terminal-window flex flex-col h-[400px] hover:shadow-[0_0_30px_rgba(0,243,255,0.05)] transition-shadow duration-500">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500/80 shadow-[0_0_4px_rgba(239,68,68,0.5)]" />
                <div className="terminal-dot bg-yellow-500/80 shadow-[0_0_4px_rgba(234,179,8,0.5)]" />
                <div className="terminal-dot bg-[#00ff00]/80 shadow-[0_0_4px_rgba(0,255,0,0.5)]" />
              </div>
              <div className="flex-1 text-center font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3 text-primary" />
                root@devops-portfolio:~
              </div>
            </div>

            <div
              ref={containerRef}
              className="flex-1 bg-black/40 p-4 font-mono text-xs overflow-y-auto custom-scrollbar cursor-text"
              onClick={() => document.getElementById("terminal-input")?.focus()}
            >
              {output.map((out, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex items-center gap-2 text-[#00ff00] mb-0.5">
                    <span>root@portfolio:~$</span>
                    <span className="text-white">{out.command}</span>
                  </div>
                  {out.response && <div className="text-gray-300 pl-4 border-l border-white/5">{out.response}</div>}
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 text-[#00ff00]">
                <span>root@portfolio:~$</span>
                <input
                  id="terminal-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 placeholder:text-gray-700"
                  placeholder="type 'help'"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="metric-card text-center py-5">
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 opacity-60`} />
              <div className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Engineering Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-mono text-muted-foreground mb-8 flex items-center gap-3">
            <GitBranch className="w-5 h-5 text-primary" />
            Engineering Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                className={`glass-panel p-6 rounded-xl border transition-all duration-500 group bg-gradient-to-br ${pillar.color} to-transparent`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-black/40 rounded-lg border border-white/5">
                    <pillar.icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
