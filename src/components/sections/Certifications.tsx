"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

const certs = [
  {
    title: "Big Data Analytics Specialist",
    issuer: "IBM Academic Collaboration",
    date: "2024",
    color: "from-[#0530ad]/10 border-[#0530ad]/20 hover:border-[#0530ad]/50",
    iconColor: "text-[#0530ad]",
    badgeColor: "bg-[#0530ad]/10 text-[#0530ad]",
    verifyUrl: "#",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksForGeeks",
    date: "2024",
    color: "from-[#2f8d46]/10 border-[#2f8d46]/20 hover:border-[#2f8d46]/50",
    iconColor: "text-[#2f8d46]",
    badgeColor: "bg-[#2f8d46]/10 text-[#2f8d46]",
    verifyUrl: "#",
  },
];

const planned = [
  { title: "AWS Solutions Architect — Associate", target: "2025" },
  { title: "Certified Kubernetes Administrator (CKA)", target: "2025" },
  { title: "HashiCorp Terraform Associate", target: "2026" },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 w-full flex flex-col items-center" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">06.</span> Verified<span className="text-muted-foreground">Credentials</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Earned Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.15, type: "spring" }}
              className={`holographic glass-panel p-6 rounded-xl border transition-all duration-500 group bg-gradient-to-br ${cert.color} to-transparent hover:shadow-[0_0_25px_rgba(0,243,255,0.06)]`}
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-white/15 transition-colors shrink-0">
                    <Award className={`w-7 h-7 ${cert.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#00ff00]" />
                        {cert.issuer}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${cert.badgeColor}`}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
                {cert.verifyUrl !== "#" && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-primary/60 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" /> Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass-panel rounded-xl p-6 border border-white/8"
        >
          <h3 className="text-sm font-mono text-muted-foreground mb-5 flex items-center gap-2 uppercase tracking-wider">
            <ArrowRight className="w-4 h-4 text-primary" />
            Certification Roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {planned.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-dashed border-white/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-primary/40" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-300 leading-tight">{p.title}</div>
                  <div className="text-[10px] text-muted-foreground font-mono mt-0.5">Target: {p.target}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
