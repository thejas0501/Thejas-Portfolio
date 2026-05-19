"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitCommit, GitBranch, Briefcase, GraduationCap, CheckCircle2, AlertTriangle, Shield } from "lucide-react";

const workExp = [
  {
    hash: "e9f81a7",
    role: "Associate Cloud & DevOps Engineer",
    company: "Masters' Union, Jalandhar",
    date: "2025 — Present",
    description:
      "Managing production AWS infrastructure serving live applications. Responsible for reliability, monitoring, deployment automation, cost optimization, and incident response across the full cloud stack.",
    achievements: [
      "Managed production EC2, RDS, ALB instances serving live production traffic",
      "Deployed and maintained cloud applications on Ubuntu via Nginx reverse proxy + PM2",
      "Implemented CloudWatch monitoring with custom dashboards and SNS alerting pipelines",
      "Achieved 15% AWS cost reduction through waste detection and instance right-sizing",
      "Configured zero-trust IAM policies and VPC security architectures",
      "Handled P1—P4 production incidents with documented runbooks and post-mortems",
      "Automated deployment pipelines with GitLab CI/CD and Terraform",
    ],
    incidents: [
      { type: "P2", title: "RDS failover recovery", resolution: "Zero data loss, <3min downtime" },
      { type: "P3", title: "EC2 capacity exhaustion", resolution: "Auto-scaling + right-sizing deployed" },
    ],
  },
];

const eduExp = [
  {
    hash: "a4b9c1d",
    role: "BTech — Computer Science & Engineering",
    company: "Lovely Professional University (LPU)",
    date: "2022 — 2026",
    description:
      "Pursuing CSE with focus on Cloud Computing, Big Data, distributed systems, and scalable algorithms. Active in infrastructure projects and open-source DevOps tooling.",
    achievements: [
      "Specialized coursework in Cloud Computing and Big Data (Spark, Hadoop)",
      "Built production-grade AWS projects beyond curriculum scope",
      "IBM Academic Collaboration — Big Data Analytics Certification",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">03.</span> Git<span className="text-muted-foreground">Log</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full">
          {/* Work */}
          <div>
            <h3 className="text-xl font-mono text-primary mb-10 flex items-center gap-3">
              <Briefcase className="w-5 h-5" /> Experience
            </h3>
            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-10 pb-6">
              {workExp.map((exp, idx) => (
                <motion.div
                  key={exp.hash}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6, type: "spring" }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[13px] top-4 bg-black border-2 border-primary rounded-full p-0.5 shadow-[0_0_10px_rgba(0,243,255,0.4)]">
                    <GitCommit className="w-3.5 h-3.5 text-primary" />
                  </div>

                  <div className="glass-panel p-6 rounded-xl border border-white/8 hover:border-primary/30 transition-all group hover:shadow-[0_0_20px_rgba(0,243,255,0.05)]">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-muted-foreground font-mono">@ {exp.company}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 bg-primary/10 text-primary rounded border border-primary/15">
                          {exp.hash}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">{exp.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((a, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-[#00ff00] shrink-0 mt-1" />
                          <span className="text-xs text-gray-300">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* Incident Cards */}
                    {exp.incidents && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="text-xs font-mono text-muted-foreground mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-orange-400" />
                          Production Incidents Resolved
                        </div>
                        <div className="flex flex-col gap-2">
                          {exp.incidents.map((inc, iIdx) => (
                            <div key={iIdx} className="flex items-center gap-3 px-3 py-2 bg-black/30 rounded-lg border border-white/5">
                              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                inc.type === "P1" ? "bg-red-500/15 text-red-400 border border-red-500/20" :
                                inc.type === "P2" ? "bg-orange-500/15 text-orange-400 border border-orange-500/20" :
                                "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                              }`}>
                                {inc.type}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-300 truncate">{inc.title}</div>
                                <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                                  <Shield className="w-2.5 h-2.5 text-[#00ff00]" /> {inc.resolution}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div className="absolute -left-[13px] -bottom-1 bg-black border-2 border-muted-foreground/30 rounded-full p-0.5">
                <GitBranch className="w-3.5 h-3.5 text-muted-foreground/50" />
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-mono text-[#b026ff] mb-10 flex items-center gap-3">
              <GraduationCap className="w-5 h-5" /> Education
            </h3>
            <div className="relative border-l-2 border-[#b026ff]/20 ml-4 md:ml-6 space-y-10 pb-6">
              {eduExp.map((exp, idx) => (
                <motion.div
                  key={exp.hash}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 + 0.5, duration: 0.6, type: "spring" }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[13px] top-4 bg-black border-2 border-[#b026ff] rounded-full p-0.5 shadow-[0_0_10px_rgba(176,38,255,0.4)]">
                    <GitCommit className="w-3.5 h-3.5 text-[#b026ff]" />
                  </div>

                  <div className="glass-panel p-6 rounded-xl border border-white/8 hover:border-[#b026ff]/30 transition-all group hover:shadow-[0_0_20px_rgba(176,38,255,0.05)]">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-[#b026ff] transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-muted-foreground font-mono">@ {exp.company}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 bg-[#b026ff]/10 text-[#b026ff] rounded border border-[#b026ff]/15">
                          {exp.hash}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">{exp.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((a, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-[#b026ff] shrink-0 mt-1" />
                          <span className="text-xs text-gray-300">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="absolute -left-[13px] -bottom-1 bg-black border-2 border-muted-foreground/30 rounded-full p-0.5">
                <GitBranch className="w-3.5 h-3.5 text-muted-foreground/50" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
