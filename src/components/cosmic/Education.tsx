import { Reveal } from "./Reveal";
import { MouseParallax } from "./MouseParallax";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Ananda Mohan College, Mymensingh",
    year: "2023 — Present",
    desc: "Pursuing a comprehensive understanding of business administration, including management principles, marketing strategies, financial accounting, and organizational behavior. Balancing academic growth with hands-on software development.",
  },
  {
    icon: BookOpen,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dukhumia Bidyaniketon",
    year: "2020 — 2022",
    desc: "Completed higher secondary education from the Arts background. This is where I wrote my first line of HTML — a single spark that ignited my passion for web development and set me on the path to becoming a developer.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Education</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Academic <span className="text-gradient">foundation</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100} className="h-full">
              <MouseParallax factor={7 + i * 2} className="h-full">
                <div
                  className="card-cosmic h-full flex flex-col"
                  style={{
                    animation: `${["driftFloat", "driftSway"][i]} ${6 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--neon-blue)] flex items-center justify-center">
                      <e.icon size={18} className="text-black" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyan-glow)]">
                      {e.year}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold">{e.degree}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{e.institution}</div>
                  <p className="mt-3 text-sm text-white/80 flex-1">{e.desc}</p>
                </div>
              </MouseParallax>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
