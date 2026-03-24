"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AWS Cloud Operations Console",
      description: "Architected a centralized dashboard tracking AWS health, usage, and cost analytics. Automated cloud waste detection for idle resources and optimized costs using AWS APIs.",
      tags: ["Next.js", "AWS SDK", "CloudWatch", "Cost Explorer", "EC2", "RDS"],
      github: "https://github.com/thejas0501/",
      demo: "#"
    },
    {
      title: "Production AWS via Terraform",
      description: "Provisioned secure VPC architecture with ALB and private subnets using Terraform IaC. Integrated infrastructure validation directly into GitLab CI pipelines.",
      tags: ["Terraform", "AWS", "GitLab CI", "VPC", "ALB"],
      github: "https://github.com/thejas0501/",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">04.</span> Deployed<span className="text-muted-foreground">Assets</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="group glass-panel p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,243,255,0.1)] flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 className="w-10 h-10 text-primary group-hover:text-[#b026ff] transition-colors duration-500" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer z-10 relative">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer z-10 relative">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 font-mono group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-primary/80 px-2 py-1 bg-primary/5 border border-primary/20 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
