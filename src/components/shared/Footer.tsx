export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 bg-background/50 backdrop-blur-md mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-2">
        <div className="text-muted-foreground text-sm font-mono">
          <p>System Online. All pipelines passing.</p>
        </div>
        <div className="text-xs text-muted-foreground/50 font-mono">
          © {new Date().getFullYear()} Architected for Performance.
        </div>
      </div>
    </footer>
  );
}
