"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const statusMessages = [
  "All pipelines passing",
  "K8s cluster healthy",
  "SLO: 99.97% met",
  "0 active incidents",
  "Terraform drift: none",
  "CI/CD: 42 deploys today",
];

export default function SystemStatus() {
  const [uptime, setUptime] = useState("0d 0h 0m");
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const startTime = Date.now() - 387_600_000; // ~4.5 days ago

    const uptimeInterval = setInterval(() => {
      const diff = Math.floor((Date.now() - startTime) / 1000);
      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      setUptime(`${d}d ${h}h ${m}m`);
    }, 60000);

    // Set initial
    const diff = Math.floor((Date.now() - startTime) / 1000);
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    setUptime(`${d}d ${h}h ${m}m`);

    const msgInterval = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % statusMessages.length);
    }, 4000);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-4 left-4 z-50 hidden lg:flex items-center gap-3 px-4 py-2 glass-panel rounded-full text-xs font-mono shadow-lg"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#00ff00] shadow-[0_0_8px_rgba(0,255,0,0.8)]" />
        <div className="absolute w-2 h-2 rounded-full bg-[#00ff00] animate-ping opacity-75" />
      </div>
      <span className="text-muted-foreground">
        uptime: <span className="text-white">{uptime}</span>
      </span>
      <span className="text-white/10">|</span>
      <Activity className="w-3 h-3 text-primary" />
      <span className="text-muted-foreground">{statusMessages[msgIdx]}</span>
    </motion.div>
  );
}
