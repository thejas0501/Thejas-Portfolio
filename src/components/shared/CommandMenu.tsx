"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Terminal, Lightbulb, Box, Code, Award, Mail } from "lucide-react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 text-sm text-muted-foreground hidden lg:flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-md border border-white/10 glass-panel shadow-lg">
        <span className="font-mono text-xs">Menu</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." className="font-mono" />
        <CommandList className="font-mono text-sm">
          <CommandEmpty>Command not found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => navigateTo("hero")} className="cursor-pointer">
              <Terminal className="mr-2 h-4 w-4 text-primary" />
              <span>Hero.init()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("about")} className="cursor-pointer">
              <Lightbulb className="mr-2 h-4 w-4 text-primary" />
              <span>SystemConfig.show()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("skills")} className="cursor-pointer">
              <Box className="mr-2 h-4 w-4 text-[#b026ff]" />
              <span>Dependencies.list()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("experience")} className="cursor-pointer">
              <Code className="mr-2 h-4 w-4 text-[#00ff00]" />
              <span>GitLog.view()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("projects")} className="cursor-pointer">
              <Terminal className="mr-2 h-4 w-4 text-yellow-500" />
              <span>DeployedAssets.list()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("certifications")} className="cursor-pointer">
              <Award className="mr-2 h-4 w-4 text-primary" />
              <span>Credentials.verify()</span>
            </CommandItem>
            <CommandItem onSelect={() => navigateTo("contact")} className="cursor-pointer">
              <Mail className="mr-2 h-4 w-4 text-red-500" />
              <span>Connections.open()</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
