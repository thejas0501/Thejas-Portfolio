"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certs = [
    { title: "Big Data Analytics Specialist", date: "2024", issuer: "IBM Academic Collaboration" },
    { title: "Data Structures & Algorithms", date: "2024", issuer: "GeeksForGeeks" }
  ];

  return (
    <section id="certifications" className="py-24 w-full flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">05.</span> Verified<span className="text-muted-foreground">Credentials</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="flex items-center gap-4 glass-panel p-5 rounded-xl border border-white/10 hover:border-[#b026ff]/50 hover:shadow-[0_0_20px_rgba(176,38,255,0.1)] transition-all group cursor-default"
              >
                <div className="bg-black/50 p-3 rounded-full border border-white/5 group-hover:border-[#b026ff]/30 transition-colors">
                  <Award className="w-6 h-6 text-[#b026ff] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm md:text-base leading-tight group-hover:text-primary transition-colors">{cert.title}</span>
                  <span className="text-xs text-muted-foreground font-mono mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00ff00]" /> {cert.issuer} ({cert.date})
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
