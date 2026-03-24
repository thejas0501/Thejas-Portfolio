"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Activity, Lock, Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />,
      skills: ["AWS (EC2, RDS, ECS, S3)", "VPC & IAM", "ALB / CloudFront", "Azure VMs"],
      color: "from-primary/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]",
      borderColor: "border-primary/30 group-hover:border-primary"
    },
    {
      title: "DevOps & Automation",
      icon: <Server className="w-8 h-8 text-[#b026ff] group-hover:text-white transition-colors duration-500" />,
      skills: ["Docker", "Terraform (IaC)", "GitLab CI", "GitHub Actions", "Git"],
      color: "from-[#b026ff]/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(176,38,255,0.2)]",
      borderColor: "border-[#b026ff]/30 group-hover:border-[#b026ff]"
    },
    {
      title: "Monitoring & Observability",
      icon: <Activity className="w-8 h-8 text-[#00ff00] group-hover:text-white transition-colors duration-500" />,
      skills: ["AWS CloudWatch", "Custom Dashboards", "Cost Explorer API"],
      color: "from-[#00ff00]/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]",
      borderColor: "border-[#00ff00]/30 group-hover:border-[#00ff00]"
    },
    {
      title: "Backend",
      icon: <Lock className="w-8 h-8 text-yellow-500 group-hover:text-white transition-colors duration-500" />,
      skills: ["Node.js", "Python", "C++", "SQL / PostgreSQL", "Nginx"],
      color: "from-yellow-500/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]",
      borderColor: "border-yellow-500/30 group-hover:border-yellow-500"
    },
    {
      title: "Data Ecosystem",
      icon: <Database className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-500" />,
      skills: ["Apache Spark", "Hadoop (HDFS/YARN)", "IBM Watson Studio", "IBM Db2", "Power BI"],
      color: "from-blue-500/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      borderColor: "border-blue-500/30 group-hover:border-blue-500"
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">02.</span> Core<span className="text-muted-foreground">Dependencies</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-xl glass-panel p-6 border ${cat.borderColor} ${cat.glowColor} transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="mb-4 bg-black/50 w-fit p-3 rounded-lg border border-white/5 backdrop-blur-md">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-white/30 transition-colors">
                      {skill}
                    </span>
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
