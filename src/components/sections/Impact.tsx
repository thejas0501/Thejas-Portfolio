"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, DollarSign, Cpu } from "lucide-react";

export default function Impact() {
  const pillars = [
    {
      title: "Cost Optimization",
      description: "Identifying idle resources, right-sizing EC2 instances, and utilizing CloudWatch + Cost Explorer to drastically reduce AWS monthly billing.",
      icon: <DollarSign className="w-8 h-8 text-[#00ff00]" />,
      color: "from-[#00ff00]/10 border-[#00ff00]/30 hover:border-[#00ff00] hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]"
    },
    {
      title: "Infrastructure Automation",
      description: "Eliminating manual toil and preventing configuration drift through Infrastructure as Code (Terraform) and robust CI/CD pipelines.",
      icon: <Cpu className="w-8 h-8 text-[#b026ff]" />,
      color: "from-[#b026ff]/10 border-[#b026ff]/30 hover:border-[#b026ff] hover:shadow-[0_0_30px_rgba(176,38,255,0.15)]"
    },
    {
      title: "Monitoring & Observability",
      description: "Building centralized dashboards with bespoke metrics for real-time alerting, faster incident response, and SLA compliance.",
      icon: <Activity className="w-8 h-8 text-primary" />,
      color: "from-primary/10 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
    },
    {
      title: "Zero-Trust Security",
      description: "Architecting secure VPC deployments, isolating private subnets, and enforcing strict IAM least-privilege policies across all environments.",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      color: "from-red-500/10 border-red-500/30 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
    }
  ];

  return (
    <section id="impact" className="min-h-screen py-24 w-full flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">02.5.</span> DevOps<span className="text-muted-foreground">Impact</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-panel p-8 rounded-xl border transition-all duration-500 group bg-gradient-to-br ${pillar.color} to-black/40`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{pillar.title}</h3>
              </div>
              <p className="text-gray-300 font-mono text-sm leading-relaxed border-l-2 border-white/10 pl-4 py-1">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
