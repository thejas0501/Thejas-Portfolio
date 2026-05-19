"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Server, Activity, Shield, GitBranch, Code } from "lucide-react";

const categories = [
  {
    title: "Cloud & AWS",
    icon: Cloud,
    iconColor: "text-primary",
    borderColor: "border-primary/20 hover:border-primary/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(0,243,255,0.06)]",
    skills: ["EC2", "VPC", "RDS", "ECS", "S3", "Lambda", "Route53", "IAM", "CloudFront", "SNS", "ALB"],
  },
  {
    title: "DevOps & Containers",
    icon: Server,
    iconColor: "text-[#b026ff]",
    borderColor: "border-[#b026ff]/20 hover:border-[#b026ff]/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(176,38,255,0.06)]",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Nginx", "Linux", "PM2"],
  },
  {
    title: "Observability & SRE",
    icon: Activity,
    iconColor: "text-[#00ff00]",
    borderColor: "border-[#00ff00]/20 hover:border-[#00ff00]/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(0,255,0,0.06)]",
    skills: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "CloudWatch", "SLO Engineering", "Incident Response"],
  },
  {
    title: "CI/CD & IaC",
    icon: GitBranch,
    iconColor: "text-orange-400",
    borderColor: "border-orange-400/20 hover:border-orange-400/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(251,146,60,0.06)]",
    skills: ["Terraform", "GitHub Actions", "GitLab CI/CD", "ArgoCD", "Ansible"],
  },
  {
    title: "Programming",
    icon: Code,
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-400/20 hover:border-yellow-400/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(250,204,21,0.06)]",
    skills: ["Python", "Flask", "Node.js", "Bash", "SQL", "C++"],
  },
  {
    title: "Security & Automation",
    icon: Shield,
    iconColor: "text-red-400",
    borderColor: "border-red-400/20 hover:border-red-400/40",
    glowColor: "hover:shadow-[0_0_25px_rgba(248,113,113,0.06)]",
    skills: ["IAM Policies", "VPC Security", "CloudTrail", "Lambda Automation", "SNS Alerting", "Chaos Testing"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">02.</span> Core<span className="text-muted-foreground">Dependencies</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group glass-panel rounded-xl p-6 border ${cat.borderColor} ${cat.glowColor} transition-all duration-500`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-black/40 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                    <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold font-mono">{cat.title}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white/[0.03] border border-white/8 rounded-md text-xs font-mono text-gray-400 group-hover:border-white/15 group-hover:text-gray-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
