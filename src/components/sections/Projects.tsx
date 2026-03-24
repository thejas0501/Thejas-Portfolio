"use client";

import { motion } from "framer-motion";
import { Github, Terminal, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Cloud SRE Command Center",
      description: "Architected a centralized dashboard tracking AWS health, usage, and cost analytics. Built a waste detection engine targeting idle EC2 instances and unattached EBS volumes.",
      metrics: [
        "Reduced monthly AWS costs by identifying and cleaning 15% idle resource waste.",
        "Improved incident response times by 30% through unified observability."
      ],
      tags: ["Next.js", "AWS SDK v3", "CloudWatch", "Cost Explorer", "EC2", "RDS"],
      github: "https://github.com/thejas0501/",
      demo: "#"
    },
    {
      title: "Terraform AWS Infrastructure",
      description: "Architected a highly available, secure VPC with public/private subnets and ALB routing for backend services. Implemented Infrastructure as Code (IaC) principles.",
      metrics: [
        "Achieved 100% reproducible deployments across staging and production.",
        "Enforced zero-trust backend isolation using strict IAM and Security Groups."
      ],
      tags: ["Terraform", "AWS", "GitLab CI/CD", "VPC", "ALB"],
      github: "https://github.com/thejas0501/",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 w-full flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">04.</span> Deployed<span className="text-muted-foreground">Systems</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="flex flex-col gap-12 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative group glass-panel flex flex-col lg:flex-row gap-8 rounded-xl border border-white/10 hover:border-primary/50 transition-all p-8 md:p-10 hover:shadow-[0_0_30px_rgba(0,243,255,0.05)] overflow-hidden"
            >
              {/* Terminal Background Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal className="w-64 h-64 text-primary transform rotate-12" />
              </div>

              <div className="flex-1 z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg border-l-2 border-white/10 pl-4 py-1">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="mb-8 space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono opacity-80 mb-2">Quantifiable Impact:</h4>
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00ff00] shrink-0 mt-0.5" />
                      <span className="text-gray-200">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs bg-black/40 border-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
