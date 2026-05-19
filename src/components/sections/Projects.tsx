"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Activity, Server, Shield, Cpu, Cloud, Database, GitBranch, Zap, Eye, ArrowRight, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectMetric {
  label: string;
  value: string;
  color: string;
}

interface ArchitectureStep {
  label: string;
  icon: LucideIcon;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: "production" | "development";
  description: string;
  highlights: string[];
  metrics: ProjectMetric[];
  tags: string[];
  architecture: ArchitectureStep[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "opsconsole",
    title: "OpsConsole",
    subtitle: "AWS Cloud Observability Platform",
    status: "production",
    description:
      "Production-grade centralized AWS monitoring dashboard providing real-time health tracking, cost analytics, security auditing, and waste detection across 21 cloud services. Built to give complete infrastructure visibility for a $13k/month AWS environment.",
    highlights: [
      "Monitors 21 AWS services in real-time (EC2, RDS, S3, VPC, IAM, Lambda, etc.)",
      "$13k/month infrastructure cost visibility with trend analysis",
      "Waste detection engine targeting idle EC2, unattached EBS, unused RDS",
      "Security auditing via CloudTrail integration and IAM policy analysis",
      "Infrastructure topology mapping with service dependency visualization",
      "Automated cost optimization recommendations with savings estimates",
    ],
    metrics: [
      { label: "AWS Services", value: "21+", color: "text-primary" },
      { label: "Waste Reduced", value: "15%", color: "text-[#00ff00]" },
      { label: "Incident Response", value: "-30%", color: "text-[#b026ff]" },
      { label: "Infra Visibility", value: "$13k/mo", color: "text-orange-400" },
    ],
    tags: ["Next.js", "AWS SDK v3", "CloudWatch", "Cost Explorer", "EC2", "RDS", "S3", "IAM", "CloudTrail", "VPC"],
    architecture: [
      { label: "Dashboard", icon: Eye },
      { label: "AWS SDK", icon: Cloud },
      { label: "CloudWatch", icon: Activity },
      { label: "Cost Explorer", icon: Database },
      { label: "EC2/RDS/S3", icon: Server },
    ],
    github: "https://github.com/thejas0501/OpsConsole-AWS",
  },
  {
    id: "sre-platform",
    title: "Intelligent Observability",
    subtitle: "SRE & AIOps Platform",
    status: "production",
    description:
      "Full-stack observability and SRE platform implementing SLO engineering with burn rate alerting, Prometheus metrics pipelines, Grafana dashboards, anomaly detection, and Lambda-based auto-remediation. Designed to shift from reactive incident response to proactive reliability engineering.",
    highlights: [
      "SLO/error budget management with multi-window burn rate alerting",
      "Prometheus metrics pipeline with custom service exporters",
      "Grafana dashboards for infrastructure, application, and business observability",
      "Anomaly detection engine with statistical deviation analysis",
      "Chaos testing framework for controlled failure injection",
      "Lambda-based auto-remediation for common infrastructure failures",
    ],
    metrics: [
      { label: "SLO Compliance", value: "99.95%", color: "text-[#00ff00]" },
      { label: "MTTR", value: "<5min", color: "text-primary" },
      { label: "Observability", value: "3-layer", color: "text-[#b026ff]" },
      { label: "Auto-remediation", value: "Active", color: "text-orange-400" },
    ],
    tags: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Terraform", "AWS Lambda", "Python", "Docker", "SLO"],
    architecture: [
      { label: "Application", icon: Cpu },
      { label: "OTel Collector", icon: Eye },
      { label: "Prometheus", icon: Activity },
      { label: "Grafana", icon: Database },
      { label: "Auto-Remediate", icon: Zap },
    ],
    github: "https://github.com/thejas0501/Intelligent-Observability-SRE-Platform",
  },
  {
    id: "terraform-infra",
    title: "Production AWS Infra",
    subtitle: "Terraform IaC Platform",
    status: "production",
    description:
      "Highly available, zero-trust AWS infrastructure provisioned entirely via Terraform. Multi-AZ deployments with private subnet isolation, ALB health checks, auto-scaling groups, and automated CI/CD pipelines — achieving 100% reproducible infrastructure with zero manual intervention.",
    highlights: [
      "Multi-AZ VPC architecture with public/private subnet isolation",
      "ALB with health checks, auto-scaling, and SSL termination",
      "Zero-trust IAM with least-privilege policies and role-based access",
      "100% reproducible deployments — no manual cloud console access needed",
      "GitLab CI/CD pipeline for automated terraform plan/apply workflows",
      "Security Groups with strict ingress/egress rules per service tier",
    ],
    metrics: [
      { label: "IaC Coverage", value: "100%", color: "text-primary" },
      { label: "Manual Steps", value: "0", color: "text-[#00ff00]" },
      { label: "Availability", value: "Multi-AZ", color: "text-[#b026ff]" },
      { label: "Security", value: "Zero-Trust", color: "text-red-400" },
    ],
    tags: ["Terraform", "AWS", "GitLab CI/CD", "VPC", "ALB", "EC2", "RDS", "IAM", "Security Groups"],
    architecture: [
      { label: "Git Push", icon: GitBranch },
      { label: "GitLab CI", icon: Cpu },
      { label: "TF Plan", icon: Eye },
      { label: "TF Apply", icon: Zap },
      { label: "AWS Infra", icon: Cloud },
    ],
    github: "https://github.com/thejas0501/terraform-aws-production-infra",
  },
  {
    id: "progressive-delivery",
    title: "Progressive Delivery",
    subtitle: "GitOps & Canary Platform",
    status: "development",
    description:
      "GitOps-driven progressive delivery system using ArgoCD and Kubernetes for canary deployments with automated rollback on SLO violations. Implements traffic splitting, health-gate promotion, and observability-driven deployment decisions.",
    highlights: [
      "GitOps workflow with ArgoCD automated sync and drift detection",
      "Canary deployments with configurable traffic splitting percentages",
      "Automated rollback triggered by SLO violation or error rate spikes",
      "Kubernetes cluster management with Helm chart templating",
      "GitHub Actions CI pipeline for container builds and image scanning",
      "Prometheus-based deployment health scoring for promotion gates",
    ],
    metrics: [
      { label: "Downtime", value: "Zero", color: "text-[#00ff00]" },
      { label: "Rollback Time", value: "<2min", color: "text-primary" },
      { label: "Deployment", value: "GitOps", color: "text-[#b026ff]" },
      { label: "Health Gates", value: "SLO-based", color: "text-orange-400" },
    ],
    tags: ["ArgoCD", "Kubernetes", "Helm", "Docker", "GitHub Actions", "Prometheus", "Canary"],
    architecture: [
      { label: "Git", icon: GitBranch },
      { label: "CI Build", icon: Cpu },
      { label: "ArgoCD", icon: Activity },
      { label: "K8s Cluster", icon: Server },
      { label: "Canary/Promote", icon: Shield },
    ],
    github: "https://github.com/thejas0501/",
  },
];

function ArchitectureFlow({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto py-3 px-1">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={idx} className="flex items-center gap-1 shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <div className="p-2 bg-black/60 rounded-lg border border-primary/20 node-glow">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="w-3 h-3 text-primary/30 mx-1 shrink-0 mt-[-16px]" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      className="relative group glass-panel rounded-xl border border-white/8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.status === "production" ? (
                <span className="status-badge-live">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse shadow-[0_0_6px_rgba(0,255,0,0.8)]" />
                  LIVE
                </span>
              ) : (
                <span className="status-badge-dev">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  IN DEV
                </span>
              )}
            </div>
            <p className="text-sm text-primary/70 font-mono">{project.subtitle}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-card text-center py-3 px-2">
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</div>
              <div className="text-[10px] text-muted-foreground font-mono mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="mb-6">
          <div className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Architecture Flow</div>
          <ArchitectureFlow steps={project.architecture} />
        </div>

        {/* Expand/Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-mono text-primary/70 hover:text-primary transition-colors mb-4"
        >
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {expanded ? "Collapse Details" : "View Technical Details"}
        </button>

        {/* Expandable Highlights */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mb-6 space-y-2 pl-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3">
                  Key Highlights
                </h4>
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff00] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[10px] bg-black/30 border-primary/15 text-primary/70 px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 w-full flex flex-col items-center justify-center" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">04.</span> Deployed<span className="text-muted-foreground">Systems</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
