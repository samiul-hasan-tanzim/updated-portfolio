/* eslint-disable react/jsx-no-comment-textnodes */
import { Reveal } from "./Reveal";
import { MouseParallax } from "./MouseParallax";

const skills = [
  { name: "React.js / Next.js", level: 90, group: "Frontend" },
  { name: "JavaScript (ES6+)", level: 88, group: "Language" },
  { name: "TypeScript", level: 82, group: "Language" },
  { name: "Tailwind CSS", level: 88, group: "Frontend" },
  { name: "Node.js / Express.js", level: 85, group: "Backend" },
  { name: "MongoDB", level: 80, group: "Database" },
  { name: "Redux Toolkit", level: 78, group: "State Management" },
  { name: "Git / GitHub", level: 75, group: "Tools" },
];

const stack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redux Toolkit",
  "JWT", "Better Auth", "Git", "GitHub", "Vercel", "Render", "Postman",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">// Arsenal</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Tools of the <span className="text-gradient">trade</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A curated stack refined over years of shipping production software at scale.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <MouseParallax factor={5 + i * 2}>
                <div
                  className="card-cosmic"
                  style={{
                    animation: `${["driftLeft", "driftRight", "driftUp", "driftDiagonal", "driftSway", "driftFloat", "driftGlide", "driftLeft"][i]} ${10 + i * 0.8}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-lg">{s.name}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.group}</div>
                    </div>
                    <div className="font-mono text-cyan-glow text-lg font-bold">{s.level}%</div>
                  </div>
                  <div className="mt-4 skill-bar">
                    <span style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              </MouseParallax>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {stack.map((t, i) => (
              <MouseParallax key={t} factor={4 + (i % 5) * 2}>
                <span
                  className="glass rounded-full px-4 py-2 text-sm font-mono transition-all hover:border-(--cyan-glow)/40 hover:text-cyan-glow hover:shadow-[0_0_20px_-5px_var(--cyan-glow)] cursor-default"
                  data-cursor="hover"
                  style={{
                    animation: `${["driftFloat", "driftSway", "driftLeft", "driftUp", "driftRight", "driftDiagonal", "driftGlide"][i % 7]} ${14 + (i % 5) * 1.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    display: "inline-block",
                  }}
                >
                  {t}
                </span>
              </MouseParallax>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
