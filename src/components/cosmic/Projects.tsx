import { Reveal } from "./Reveal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Helios Analytics",
    tagline: "Realtime observability at cosmic scale",
    img: "/assets/project-1.jpg",
    tags: ["Next.js", "WebGPU", "Rust", "ClickHouse"],
    desc: "Streaming analytics dashboard processing 4M events/sec with GPU-accelerated charts and predictive anomaly detection.",
  },
  {
    title: "Oracle AI",
    tagline: "Conversational intelligence platform",
    img: "/assets/project-2.jpg",
    tags: ["React", "LLM", "tRPC", "Postgres"],
    desc: "Multi-model AI workspace with agentic tool use, vector memory, and an extension SDK used by 12k developers.",
  },
  {
    title: "Voyager 3D",
    tagline: "Interactive solar-system explorer",
    img: "/assets/project-3.jpg",
    tags: ["Three.js", "GLSL", "React", "WebXR"],
    desc: "WebGL simulation with accurate orbital mechanics, cinematic camera choreography, and VR support. 4M+ views.",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Selected Work</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
                Missions <span className="text-gradient">launched</span>.
              </h2>
            </div>
            <a href="#contact" className="btn-outline-neon">
              Full Archive <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="card-cosmic group h-full flex flex-col" data-cursor="hover">
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] -mx-2 -mt-2 mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)]" aria-label="Live demo">
                      <ExternalLink size={14} />
                    </a>
                    <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)]" aria-label="Repository">
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyan-glow)]">
                  {p.tagline}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-full border border-white/10 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
