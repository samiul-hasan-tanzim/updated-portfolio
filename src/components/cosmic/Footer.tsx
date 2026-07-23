import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-display font-bold tracking-widest">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_10px_var(--cyan-glow)]" />
            SAMIUL<span className="text-gradient">HASAN</span>
          </div>
          <div className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Samiul Hasan · Crafted in the space between stars.
          </div>
          <a href="#home" className="btn-outline-neon !py-2 !px-4 !text-xs">
            <ArrowUp size={14} /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
