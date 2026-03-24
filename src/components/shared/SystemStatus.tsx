"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SystemStatus() {
  const [uptime, setUptime] = useState("0h 0m 0s");

  useEffect(() => {
    const startTime = Date.now() - (Math.random() * 100000000); // Random offset to look like it's been running

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);
      
      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      
      setUptime(`${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 z-50 hidden md:flex items-center gap-2 px-3 py-1.5 glass-panel bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono shadow-lg"
    >
      <div className="w-2 h-2 rounded-full bg-[#00ff00] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_8px_rgba(0,255,0,0.8)]" />
      <span className="text-muted-foreground">sys.uptime: <span className="text-white">{uptime}</span></span>
      <span className="text-muted-foreground ml-2 border-l border-white/10 pl-2">status: <span className="text-[#00ff00]">passing</span></span>
    </motion.div>
  );
}
