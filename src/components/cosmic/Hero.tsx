import { useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={parallaxRef} className="relative z-10 transition-transform duration-500 ease-out">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_10px_var(--cyan-glow)] animate-pulse" />
            Available for interstellar missions
          </div>

          <h1 className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Building the
            <br />
            <span className="text-gradient">future</span>, one
            <br />
            <span className="typewriter">interface at a time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm <span className="text-white font-semibold">Nova Vega</span> — a full-stack engineer crafting cinematic, high-performance experiences at the edge of what browsers can do.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-neon">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline-neon">
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "6+", l: "Years" },
              { n: "40+", l: "Projects" },
              { n: "12", l: "Awards" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait with orbits */}
        <div className="relative flex items-center justify-center h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="orbit-ring" style={{ width: 520, height: 520 }} />
            <div
              className="orbit-ring absolute"
              style={{ width: 420, height: 420, animation: "spin-reverse 25s linear infinite", borderColor: "color-mix(in oklab, var(--cosmic-purple) 40%, transparent)" }}
            />
            <div
              className="orbit-ring absolute"
              style={{ width: 320, height: 320, animation: "spin-slow 15s linear infinite", borderColor: "color-mix(in oklab, var(--nebula-pink) 40%, transparent)" }}
            />
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="floating-particle" style={{ animationDuration: "10s" }} />
            <div className="floating-particle" style={{ animationDuration: "14s", animationDelay: "-4s", background: "var(--nebula-pink)", boxShadow: "0 0 10px var(--nebula-pink)" }} />
            <div className="floating-particle" style={{ animationDuration: "18s", animationDelay: "-2s", background: "var(--cosmic-purple)", boxShadow: "0 0 10px var(--cosmic-purple)" }} />
          </div>

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[var(--neon-blue)] opacity-30 blur-3xl" aria-hidden />

          {/* Portrait */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full p-1 bg-gradient-to-br from-[var(--cyan-glow)] via-[var(--cosmic-purple)] to-[var(--nebula-pink)] shadow-[0_0_80px_-10px_var(--neon-blue)]">
            <div className="h-full w-full rounded-full overflow-hidden border-2 border-black/50">
              <img
                src="/assets/hero-portrait.jpg"
                alt="Nova Vega portrait"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
