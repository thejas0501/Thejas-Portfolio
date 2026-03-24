"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ command: string; response: React.ReactNode }[]>([
    {
      command: "uptime",
      response: <div className="text-muted-foreground">up 4 days, 12:34, 1 user, load averages: 0.12, 0.05, 0.01</div>
    },
    {
      command: "whoami",
      response: (
        <div className="text-primary glow-text mb-2">
          Hello! I'm K A Thejas, a Cloud & DevOps Engineer based in Tirupati, currently working at Masters' Union.
          Type 'help' to see available commands.
        </div>
      )
    }
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let response: React.ReactNode = "";
    
    switch(cmd) {
      case "help":
        response = (
          <div className="flex flex-col gap-1 text-muted-foreground mt-2">
            <div><span className="text-[#00ff00]">about</span>    - display system biography</div>
            <div><span className="text-[#00ff00]">skills</span>   - list technical dependencies</div>
            <div><span className="text-[#00ff00]">projects</span> - execute project discovery</div>
            <div><span className="text-[#00ff00]">clear</span>    - reset terminal session</div>
          </div>
        );
        break;
      case "about":
        response = <div className="mt-2 text-gray-300">I am a Cloud & DevOps Engineer with hands-on experience managing real-world AWS infrastructure. I specialize in building scalable systems, automating deployments, and optimizing cloud costs. I have worked on production systems involving EC2, RDS, ALB, and monitoring tools, ensuring high availability and performance.</div>;
        break;
      case "skills":
        response = (
          <div className="flex flex-wrap gap-2 mt-3 mb-2">
            {["AWS", "Azure", "Docker", "Terraform", "GitLab CI", "Spark", "Python", "Power BI", "Nginx"].map(skill => (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={skill} 
                className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-primary text-xs hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all cursor-crosshair"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        );
        break;
      case "projects":
        response = <div className="text-muted-foreground italic mt-2">Redirecting to /projects... (Scroll down!)</div>;
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "":
        response = "";
        break;
      default:
        response = <span className="text-destructive mt-2 block">command not found: {cmd}</span>;
    }

    setOutput(prev => [...prev, { command: cmd, response }]);
    setInput("");
  };

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="text-primary">01.</span> System<span className="text-muted-foreground">Config</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl overflow-hidden glass-panel shadow-2xl border-white/10 flex flex-col h-[500px] hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] transition-shadow duration-500">
          {/* Mac-style Terminal Header */}
          <div className="bg-black/80 px-4 py-3 flex items-center border-b border-white/10 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff00]/80 shadow-[0_0_5px_rgba(0,255,0,0.5)]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Terminal className="w-3 h-3 text-primary" />
              root@devops-portfolio:~
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={containerRef}
            className="flex-1 bg-black/60 p-6 font-mono text-sm overflow-y-auto custom-scrollbar cursor-text" 
            onClick={() => document.getElementById("terminal-input")?.focus()}
          >
            {/* Run Logs */}
            {output.map((out, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex items-center gap-2 text-[#00ff00] mb-1">
                  <span>root@portfolio:~$</span>
                  <span className="text-white">{out.command}</span>
                </div>
                {out.response && <div className="text-gray-300 pl-4 border-l-2 border-white/10">{out.response}</div>}
              </div>
            ))}
            
            {/* Active Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 text-[#00ff00] pb-4">
              <span>root@portfolio:~$</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 placeholder:text-gray-600/50"
                placeholder="type 'help' and press Enter"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
