"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, TerminalSquare } from "lucide-react";

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: "agent"|"user", text: string}[]>([
    { role: "agent", text: "Hi! I'm the DevOps Assistant for Thejas's portfolio. Ask me anything about his skills, experience, or infrastructure." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Simulate AI thinking and responding
    setTimeout(() => {
        let aiResponse = "I am a simulated AI. In a production environment, I'd connect to an LLM via API gateway.";
        const lowercaseMsg = userMsg.toLowerCase();
        
        if (lowercaseMsg.includes("kubernetes") || lowercaseMsg.includes("aws") || lowercaseMsg.includes("cloud")) {
            aiResponse = "Thejas has extensive experience with AWS, managing production EC2, RDS, and scalable infrastructure. He is also highly skilled in Terraform and cloud monitoring via CloudWatch.";
        } else if (lowercaseMsg.includes("education") || lowercaseMsg.includes("college") || lowercaseMsg.includes("degree")) {
            aiResponse = "He is pursuing a B.Tech in CSE from Lovely Professional University (2022-2026), focusing on cloud computing and big data.";
        } else if (lowercaseMsg.includes("hire") || lowercaseMsg.includes("contact")) {
            aiResponse = "You can reach out directly via the Contact section below, or email him at kethinithejas22112004@gmail.com. He is currently open to new opportunities!";
        } else if (lowercaseMsg.includes("hello") || lowercaseMsg.includes("hi") || lowercaseMsg.includes("who")) {
            aiResponse = "Hello there! I'm the automated assistant for K A Thejas. How can I assist you with questions about his infrastructure expertise today?";
        }

        setMessages(prev => [...prev, { role: "agent", text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.4)] z-50 transition-opacity ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-80 sm:w-96 h-[500px] glass-panel bg-black/80 border border-white/20 rounded-2xl flex flex-col z-50 overflow-hidden shadow-2xl backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TerminalSquare className="w-5 h-5 text-primary" />
                <span className="font-mono font-bold text-sm text-white">DevOps_Copilot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-primary text-black rounded-tr-sm" : "bg-white/10 text-gray-200 border border-white/5 rounded-tl-sm"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} className="h-1" />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-white/10 bg-black/50">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my skills..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 rounded-full bg-primary text-black disabled:opacity-50 disabled:bg-gray-500 transition-colors"
                >
                  <Send className="w-4 h-4 -pl-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
