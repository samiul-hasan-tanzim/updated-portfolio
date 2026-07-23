import { Reveal } from "./Reveal";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    year: "2024 — Now",
    title: "Principal Engineer",
    org: "Aurora Systems",
    desc: "Leading the design-engineering guild. Shipped a WebGPU rendering pipeline that cut frame budgets by 60% across the product suite.",
  },
  {
    icon: Briefcase,
    year: "2022 — 2024",
    title: "Senior Software Engineer",
    org: "Nebula Labs",
    desc: "Built the realtime collaboration engine powering 200k concurrent editors. Multi-cursor CRDT with sub-40ms latency.",
  },
  {
    icon: Code,
    year: "2020 — 2022",
    title: "Frontend Engineer",
    org: "Voyager Studio",
    desc: "Delivered 20+ award-winning marketing sites. Two FWAs, one Awwwards Site of the Year nomination.",
  },
  {
    icon: GraduationCap,
    year: "2018 — 2020",
    title: "MSc, Human–Computer Interaction",
    org: "ETH Zürich",
    desc: "Thesis on physics-based motion in touch interfaces. Published at CHI '20.",
  },
  {
    icon: GraduationCap,
    year: "2014 — 2018",
    title: "BSc, Computer Science",
    org: "University of Tokyo",
    desc: "Graduated top 3%. Research assistant in graphics lab; contributed to an open-source shader compiler.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Trajectory</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              A <span className="text-gradient">journey</span> through spacetime.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="timeline-line" aria-hidden />
          <div className="space-y-16">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={i}>
                  <div className="relative grid md:grid-cols-2 gap-8 items-center">
                    <div className={`hidden md:block ${left ? "" : "md:order-2"}`}>
                      <div className={`card-cosmic ${left ? "md:mr-10" : "md:ml-10"}`}>
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--cyan-glow)]">
                          <it.icon size={14} />
                          {it.year}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                        <div className="text-sm text-muted-foreground">{it.org}</div>
                        <p className="mt-3 text-sm text-white/80">{it.desc}</p>
                      </div>
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden ml-12">
                      <div className="card-cosmic">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--cyan-glow)]">
                          <it.icon size={14} />
                          {it.year}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                        <div className="text-sm text-muted-foreground">{it.org}</div>
                        <p className="mt-3 text-sm text-white/80">{it.desc}</p>
                      </div>
                    </div>

                    {/* Node */}
                    <div className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                      <div className="timeline-node" />
                    </div>

                    <div className={`hidden md:block ${left ? "md:order-2" : ""}`} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
