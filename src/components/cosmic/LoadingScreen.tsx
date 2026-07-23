import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 12 + 4);
      setProgress(Math.floor(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setGone(true), 500);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#050816] transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="relative flex flex-col items-center">
        <div className="relative h-40 w-40">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--cyan-glow)]/30 animate-[spin-slow_4s_linear_infinite]" style={{ animation: "spin-slow 4s linear infinite" }} />
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-[var(--cosmic-purple)]/40" style={{ animation: "spin-slow 6s linear infinite reverse" }} />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--cyan-glow)] via-[var(--neon-blue)] to-[var(--cosmic-purple)] blur-md opacity-70 animate-pulse" />
          <div className="absolute inset-0 grid place-items-center font-display font-bold text-2xl text-gradient">
            {progress}%
          </div>
        </div>
        <div className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Initializing warp drive
        </div>
      </div>
    </div>
  );
}
