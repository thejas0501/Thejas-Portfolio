"use client";

import { motion } from "framer-motion";
import { GitCommit, GitBranch } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      hash: "e9f81a7",
      role: "Associate Cloud & DevOps Engineer",
      company: "Masters' Union, Jalandhar",
      date: "2025 - Present",
      description: "Managed AWS production infrastructure (EC2, RDS). Deployed cloud apps on Linux via Nginx & PM2. Implemented CloudWatch monitoring, optimized costs, and configured IAM zero-trust structures."
    },
    {
      hash: "a4b9c1d",
      role: "BTech – Computer Science & Engineering",
      company: "Lovely Professional University (LPU)",
      date: "2022 - 2026",
      description: "Pursuing undergraduate degree with a curriculum focused on Cloud Computing, Big Data arrays, Data Structures, and scalable algorithms."
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">03.</span> Git<span className="text-muted-foreground">Log</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 lg:ml-12 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.hash}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5, type: "spring" }}
              className="relative pl-8 md:pl-12"
            >
              {/* Commit Dot */}
              <div className="absolute -left-[17px] top-4 bg-black border-2 border-primary rounded-full p-1 shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                <GitCommit className="w-4 h-4 text-primary" />
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-muted-foreground font-mono">
                      @ {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-sm font-mono px-3 py-1 bg-primary/10 text-primary rounded border border-primary/20 w-fit">
                      commit {exp.hash}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">
                      {exp.date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed font-mono text-sm border-l-2 border-white/10 pl-4 py-1">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Initial Branch Dot */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute -left-[17px] -bottom-2 bg-black border-2 border-muted-foreground rounded-full p-1"
          >
            <GitBranch className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
