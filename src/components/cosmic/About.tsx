import { Reveal } from "./Reveal";
import { Quote, Sparkles, Rocket, Code2 } from "lucide-react";

const highlights = [
  { icon: Rocket, label: "Ships weekly", value: "Fast" },
  { icon: Code2, label: "TypeScript native", value: "Typed" },
  { icon: Sparkles, label: "Motion-first", value: "Cinematic" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// About</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              A brief <span className="text-gradient">transmission</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <div className="card-cosmic h-full">
              <Quote className="text-[var(--cyan-glow)]" size={32} />
              <p className="mt-4 text-xl leading-relaxed text-white/90">
                I believe interfaces should feel like <span className="text-gradient font-semibold">worlds</span> — living systems that respond, breathe, and reward attention. My work sits at the intersection of engineering rigor and visual poetry: React apps that ship, WebGL scenes that fly, and design systems teams actually enjoy using.
              </p>
              <p className="mt-4 text-muted-foreground">
                Based between Tokyo and Berlin. Currently exploring realtime multiplayer canvases, WebGPU, and building tools that make other developers feel like they have superpowers.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {highlights.map((h) => (
                  <div key={h.label} className="glass rounded-xl p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--neon-blue)] flex items-center justify-center">
                      <h.icon size={18} className="text-black" />
                    </div>
                    <div>
                      <div className="font-display font-semibold">{h.value}</div>
                      <div className="text-xs text-muted-foreground">{h.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="card-cosmic h-full">
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan-glow)]">Profile</div>
              <div className="mt-4 space-y-4">
                {[
                  ["Name", "Nova Vega"],
                  ["Role", "Senior Software Engineer"],
                  ["Location", "Tokyo · Berlin · Remote"],
                  ["Focus", "Frontend · WebGL · AI"],
                  ["Languages", "EN · JP · DE"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
                    <span className="text-sm font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
