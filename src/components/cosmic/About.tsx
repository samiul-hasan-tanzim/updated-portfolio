import { Reveal } from "./Reveal";
import { MouseParallax } from "./MouseParallax";
import { Quote, Sparkles, Rocket, Code2 } from "lucide-react";

const highlights = [
  { icon: Rocket, label: "Full-stack projects", value: "MERN" },
  { icon: Code2, label: "Clean, typed code", value: "TypeScript" },
  { icon: Sparkles, label: "Always learning", value: "Curious" },
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
            <MouseParallax factor={6}>
              <div
                className="card-cosmic h-full"
                style={{ animation: "driftLeft 7s ease-in-out infinite" }}
              >
                <Quote className="text-[var(--cyan-glow)]" size={32} />
                <p className="mt-4 text-xl leading-relaxed text-white/90">
                  My journey into web development started with curiosity — I wanted to understand how the websites I used every day actually worked. That curiosity quickly turned into a passion for building modern web applications from the ground up. I specialize in the <span className="text-gradient font-semibold">MERN stack</span> and Next.js, crafting full-stack solutions that are both performant and a joy to use.
                </p>
                <p className="mt-4 text-muted-foreground">
                  I work with React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, Redux Toolkit, Tailwind CSS, Better Auth, and JWT authentication. I enjoy building real-world tools — AI-powered platforms, crowdfunding ecosystems, and creative marketplaces — that solve actual problems. Every project teaches me something new, and I'm always pushing to level up my skills and become a better Full Stack Developer.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Outside of coding, I love exploring new technologies, reading about design and productivity, and spending time learning things that challenge how I think. I believe great software is built by people who stay curious.
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
            </MouseParallax>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <MouseParallax factor={8}>
              <div
                className="card-cosmic h-full"
                style={{ animation: "driftRight 8s ease-in-out infinite" }}
              >
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan-glow)]">Profile</div>
                <div className="mt-4 space-y-4">
                  {[
                    ["Name", "Samiul Hasan"],
                    ["Role", "Frontend-Focused Full Stack Developer"],
                    ["Location", "Bangladesh · Remote"],
                    ["Focus", "MERN · Next.js · TypeScript"],
                    ["Languages", "EN · BN"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
                      <span className="text-sm font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MouseParallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
