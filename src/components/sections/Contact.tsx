"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquareCode } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      value: "github.com/thejas0501",
      icon: <Github className="w-6 h-6 shrink-0" />,
      href: "https://github.com/thejas0501/",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/k-a-thejas-06698252",
      icon: <Linkedin className="w-6 h-6 shrink-0" />,
      href: "https://linkedin.com/in/k-a-thejas-06698252/",
      color: "hover:text-[#0a66c2]"
    },
    {
      name: "Email / Phone",
      value: "kethinithejas22112004@gmail.com",
      icon: <Mail className="w-6 h-6 shrink-0" />,
      href: "mailto:kethinithejas22112004@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-4 mb-16 w-full">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center">
            <span className="text-primary">06.</span> Open<span className="text-muted-foreground">Connections</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <p className="text-muted-foreground text-center max-w-lg mb-12 text-lg">
          My inbox is always open. Whether you have a question about scalable architecture or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          {contacts.map((contact, idx) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className={`flex flex-col items-center gap-4 glass-panel p-8 rounded-xl border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all group w-full text-muted-foreground ${contact.color}`}
            >
              <div className="p-4 rounded-full bg-black/50 border border-white/5 group-hover:bg-primary/10 transition-colors">
                {contact.icon}
              </div>
              <div className="text-center w-full">
                <h3 className="font-bold text-foreground mb-1 font-mono">{contact.name}</h3>
                <p className="text-xs break-all opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
        >
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold font-mono rounded hover:bg-white transition-colors hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] active:scale-95 duration-200">
            <MessageSquareCode className="w-5 h-5" />
            Download Resume_v2.0.pdf
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
