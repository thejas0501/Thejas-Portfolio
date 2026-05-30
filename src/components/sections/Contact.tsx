"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Terminal, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate deployment animation
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contacts = [
    {
      name: "GitHub",
      value: "github.com/thejaskethini",
      icon: Github,
      href: "https://github.com/thejaskethini/",
      hoverColor: "hover:border-white/30 hover:text-white",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ka-thejas",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ka-thejas/",
      hoverColor: "hover:border-[#0a66c2]/30 hover:text-[#0a66c2]",
    },
    {
      name: "Email",
      value: "thejaskethini.tech@gmail.com",
      icon: Mail,
      href: "mailto:thejaskethini.tech@gmail.com",
      hoverColor: "hover:border-primary/30 hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center pt-24 w-full" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <div className="flex items-center justify-center gap-4 mb-16 w-full">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="section-title text-center">
            <span className="text-primary">07.</span> Open<span className="text-muted-foreground">Connections</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12 text-base">
          My inbox is always open. Whether you have a question about scalable architecture, 
          a production challenge, or just want to connect — I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="terminal-window flex flex-col"
          >
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500/80" />
                <div className="terminal-dot bg-yellow-500/80" />
                <div className="terminal-dot bg-[#00ff00]/80" />
              </div>
              <div className="flex-1 text-center font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3 text-primary" />
                send-message --to=thejas
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 bg-black/40 p-5 space-y-4">
              {/* Name */}
              <div>
                <label className="text-xs font-mono text-[#00ff00] mb-1.5 block">
                  <span className="text-muted-foreground">$</span> NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_10px_rgba(0,243,255,0.08)] transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-mono text-[#00ff00] mb-1.5 block">
                  <span className="text-muted-foreground">$</span> EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_10px_rgba(0,243,255,0.08)] transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-mono text-[#00ff00] mb-1.5 block">
                  <span className="text-muted-foreground">$</span> SUBJECT
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_10px_rgba(0,243,255,0.08)] transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono text-[#00ff00] mb-1.5 block">
                  <span className="text-muted-foreground">$</span> MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-md px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_10px_rgba(0,243,255,0.08)] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 bg-primary text-black font-mono font-bold text-sm rounded-md hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Deploying message...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message deployed successfully ✓
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Deploy Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Cards + Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {contacts.map((contact, idx) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={contact.name !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className={`glass-panel p-5 rounded-xl border border-white/8 transition-all group flex items-center gap-4 text-muted-foreground ${contact.hoverColor}`}
              >
                <div className="p-3 bg-black/40 rounded-lg border border-white/5 group-hover:bg-white/5 transition-colors shrink-0">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-foreground font-mono">{contact.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Resume Download */}
            <motion.a
              href="/thejas_devops.docx"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-primary text-black font-bold font-mono text-sm rounded-xl hover:bg-white hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] active:scale-[0.98] transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
