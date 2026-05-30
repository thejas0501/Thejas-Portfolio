"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, GitBranch, Star, GitFork, Terminal } from "lucide-react";

const repos = [
  {
    name: "OpsConsole-AWS",
    description: "Centralized AWS observability dashboard — 21 services, cost analytics, waste detection",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 12,
    forks: 3,
    category: "Observability",
    url: "https://github.com/thejaskethini/OpsConsole-AWS",
  },
  {
    name: "Intelligent-Observability-SRE-Platform",
    description: "SLO engineering, burn rate alerting, Prometheus/Grafana, auto-remediation",
    language: "Python",
    languageColor: "#3572A5",
    stars: 8,
    forks: 2,
    category: "SRE",
    url: "https://github.com/thejaskethini/Intelligent-Observability-and-SRE-Platform",
  },
  {
    name: "terraform-aws-production-infra",
    description: "Multi-AZ VPC, zero-trust IAM, ALB, GitLab CI/CD — 100% IaC",
    language: "HCL",
    languageColor: "#844fba",
    stars: 6,
    forks: 1,
    category: "IaC",
    url: "https://github.com/thejaskethini/terraform-aws-production-infra",
  },
  {
    name: "Zero-To-SRE",
    description: "Comprehensive SRE cheatsheets — Linux, K8s, AWS, Observability, Databases",
    language: "Markdown",
    languageColor: "#083fa1",
    stars: 15,
    forks: 5,
    category: "Documentation",
    url: "https://github.com/thejaskethini/Zero-To-SRE",
  },
];

const activityFeed = [
  { time: "2h ago", action: "pushed to", target: "main", repo: "OpsConsole-AWS", msg: "feat: add RDS cost breakdown view" },
  { time: "5h ago", action: "merged PR", target: "#24", repo: "terraform-aws-infra", msg: "fix: security group ingress rules" },
  { time: "1d ago", action: "pushed to", target: "main", repo: "SRE-Platform", msg: "feat: burn rate multi-window alerting" },
  { time: "2d ago", action: "opened issue", target: "#18", repo: "Zero-To-SRE", msg: "docs: add chaos engineering cheatsheet" },
  { time: "3d ago", action: "pushed to", target: "feat/canary", repo: "progressive-delivery", msg: "feat: ArgoCD rollout controller" },
  { time: "4d ago", action: "merged PR", target: "#12", repo: "OpsConsole-AWS", msg: "feat: CloudTrail security audit" },
];

// Seeded PRNG for deterministic contribution graph (avoids hydration mismatch)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateContributions() {
  const weeks = 52;
  const days = 7;
  const random = seededRandom(42); // Fixed seed
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const baseChance = 0.6;
      const isWeekend = d >= 5;
      const recentBoost = w > 40 ? 0.2 : 0;
      const chance = baseChance + recentBoost - (isWeekend ? 0.3 : 0);

      if (random() < chance) {
        const level = random();
        if (level < 0.3) week.push(1);
        else if (level < 0.6) week.push(2);
        else if (level < 0.85) week.push(3);
        else week.push(4);
      } else {
        week.push(0);
      }
    }
    grid.push(week);
  }
  return grid;
}

// Pre-compute so it's the same on server and client
const staticContributions = generateContributions();

function ContributionGraph() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-[700px]">
        {staticContributions.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-[3px]">
            {week.map((level, dIdx) => (
              <div
                key={dIdx}
                className={`w-[10px] h-[10px] rounded-[2px] contrib-${level} transition-colors hover:ring-1 hover:ring-primary/30`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground font-mono">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className={`w-[10px] h-[10px] rounded-[2px] contrib-${l}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default function GitHubActivity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-24 w-full flex flex-col items-center justify-center" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-primary">05.</span> Engineering<span className="text-muted-foreground">Activity</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-panel rounded-xl p-6 border border-white/8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Github className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <a href="https://github.com/thejaskethini" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                @thejaskethini
              </a>
              {" "} — contribution activity
            </span>
          </div>
          <ContributionGraph />
        </motion.div>

        {/* Repos + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Repo Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="glass-panel p-5 rounded-xl border border-white/8 hover:border-primary/30 transition-all group block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {repo.forks}
                  </span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/5 text-primary/60 rounded border border-primary/10">
                    {repo.category}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Terminal Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 terminal-window flex flex-col"
          >
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500/80" />
                <div className="terminal-dot bg-yellow-500/80" />
                <div className="terminal-dot bg-[#00ff00]/80" />
              </div>
              <div className="flex-1 text-center font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3 text-primary" />
                git log --oneline
              </div>
            </div>
            <div className="flex-1 bg-black/40 p-4 font-mono text-xs overflow-y-auto custom-scrollbar max-h-[400px]">
              {activityFeed.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="mb-3 pb-3 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-muted-foreground/50">{item.time}</span>
                    <span className="text-[#00ff00]">{item.action}</span>
                    <span className="text-primary">{item.target}</span>
                  </div>
                  <div className="text-gray-400 pl-0 flex items-center gap-2">
                    <span className="text-muted-foreground">→</span>
                    <span className="text-white/70">{item.repo}</span>
                  </div>
                  <div className="text-gray-500 mt-0.5 italic">{item.msg}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
