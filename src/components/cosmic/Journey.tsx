import { Reveal } from "./Reveal";
import { MouseParallax } from "./MouseParallax";
import { BookOpen, FileJson, Layers, Layout, Database, Rocket, Sparkles } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    year: "Month 1",
    title: "Frontend Foundations",
    org: "HTML5 · CSS3 · Git & GitHub",
    desc: "Started with the building blocks of the web — HTML5 for structure and CSS3 for styling. Built responsive, accessible layouts and learned version control with Git and GitHub for collaborative development.",
  },
  {
    icon: FileJson,
    year: "Month 2",
    title: "JavaScript & Interactivity",
    org: "JavaScript (ES6+) · DOM Manipulation · TypeScript",
    desc: "Dived deep into JavaScript (ES6+), mastering core concepts like closures, promises, async/await, and DOM manipulation. Then leveled up with TypeScript for type-safe, maintainable code.",
  },
  {
    icon: Layers,
    year: "Month 3",
    title: "React & Component Architecture",
    org: "React.js · Tailwind CSS · Responsive Design",
    desc: "Learned React.js — component-based architecture, hooks, props, and state management. Combined with Tailwind CSS for rapid, utility-first styling and responsive design patterns.",
  },
  {
    icon: Layout,
    year: "Month 4",
    title: "Next.js & State Management",
    org: "Next.js (App Router) · Redux Toolkit · Zustand",
    desc: "Explored Next.js with the App Router, understanding SSR, SSG, and route handlers. Managed complex application state with Redux Toolkit and Zustand for scalable state solutions.",
  },
  {
    icon: Database,
    year: "Month 5",
    title: "Backend & Database",
    org: "Node.js · Express.js · MongoDB · Auth",
    desc: "Built REST APIs with Node.js and Express.js, connected to MongoDB for data persistence. Implemented authentication and authorization with JWT and Better Auth, including protected routes and RBAC.",
  },
  {
    icon: Rocket,
    year: "Month 6",
    title: "Full Stack Integration & Deployment",
    org: "API Integration · Vercel · Render · Netlify",
    desc: "Integrated frontend with backend APIs, built Next.js route handlers, and deployed full-stack applications on Vercel, Render, and Netlify. Currently exploring AI-powered development and advanced Next.js patterns.",
  },
  {
    icon: Sparkles,
    year: "Currently Learning",
    title: "Expanding the Stack",
    org: "Angular · C# · .NET · ASP.NET",
    desc: "Broadening my skills into the .NET ecosystem — learning Angular for frontend, C# as the core language, and .NET with ASP.NET for building robust, enterprise-grade backend applications.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Journey</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              My <span className="text-gradient">learning path</span>.
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
                      <MouseParallax factor={6 + i}>
                        <div
                          className={`card-cosmic ${left ? "md:mr-10" : "md:ml-10"}`}
                          style={{
                            animation: `${["driftFloat", "driftSway", "driftLeft", "driftDiagonal", "driftRight", "driftUp", "driftGlide"][i]} ${6 + i * 0.4}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--cyan-glow)]">
                          <it.icon size={14} />
                          {it.year}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                        <div className="text-sm text-muted-foreground">{it.org}</div>
                        <p className="mt-3 text-sm text-white/80">{it.desc}</p>
                        </div>
                      </MouseParallax>
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden ml-12">
                      <MouseParallax factor={4 + i}>
                        <div
                          className="card-cosmic"
                          style={{
                            animation: `${["driftUp", "driftGlide", "driftSway", "driftLeft", "driftDiagonal", "driftRight", "driftFloat"][i]} ${5 + i * 0.5}s ease-in-out infinite`,
                          }}
                        >
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--cyan-glow)]">
                          <it.icon size={14} />
                          {it.year}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                        <div className="text-sm text-muted-foreground">{it.org}</div>
                        <p className="mt-3 text-sm text-white/80">{it.desc}</p>
                        </div>
                      </MouseParallax>
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
