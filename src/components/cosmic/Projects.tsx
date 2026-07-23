import { useState } from "react";
import { Reveal } from "./Reveal";
import { ProjectModal, ModalSection, ModalTags, ModalLinks } from "./ProjectModal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CareerPilot AI",
    tagline: "AI-powered career development platform",
    img: "/assets/project-1.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    desc: "A full-stack AI-powered career development platform that helps job seekers manage, analyze, and advance their careers with intelligent tools and personalized insights.",
    liveUrl: "https://career-pilot-ai-client-scic-5.vercel.app",
    githubUrl: "https://github.com/samiul-hasan-tanzim",
    details: {
      description: "CareerPilot AI is a full-stack AI-powered career development platform designed to help job seekers and professionals manage, analyze, and advance their careers. It solves the problem of navigating the modern job market by providing intelligent tools that give users personalized, data-driven insights. Users can upload resumes for AI-powered analysis and scoring, receive tailored career recommendations based on their skills, chat with an AI career mentor for guidance, identify skill gaps, explore career roadmaps, and manage their entire job application workflow — all in one centralized dashboard.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express.js 5", "MongoDB", "Mongoose 9", "JWT", "Google Gemini AI", "Framer Motion", "Recharts", "Lucide React"],
      features: [
        "AI-powered resume analysis and scoring",
        "Personalized career recommendations based on skills",
        "AI career mentor chat for guidance",
        "Skill gap identification and career roadmaps",
        "Centralized job application workflow management",
        "Role-based dashboards with secure access",
      ],
      challenges: "Integrating AI models for accurate resume parsing and career recommendations while maintaining low latency and handling complex user queries was a significant challenge. The real-time chat feature required careful state management and streaming response handling.",
      future: "Planned enhancements include integrations with job boards for live listings, peer networking features, AI-powered mock interviews, and a mobile app version.",
    },
  },
  {
    title: "FundSpark",
    tagline: "Full-stack crowdfunding platform",
    img: "/assets/project-2.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB", "Stripe", "Better Auth"],
    desc: "A full-stack crowdfunding platform with a built-in credit economy, Stripe payments, role-based access, and admin tools for campaign management.",
    liveUrl: "https://fund-spark-client-11.vercel.app",
    githubUrl: "https://github.com/samiul-hasan-tanzim",
    details: {
      description: "FundSpark is a full-stack crowdfunding platform that bridges the gap between creators with innovative ideas and supporters who want to fund them. It solves the problem of discovering, funding, and managing campaigns by providing a centralized ecosystem with a built-in credit economy. Creators can launch campaigns to raise funds for projects, products, social causes, and community initiatives. Supporters can browse campaigns, contribute platform credits (purchased via Stripe), and track their contributions. A role-based system (Supporter, Creator, Admin) with JWT authentication ensures secure access, while admin tools handle campaign approvals, withdrawal requests, user management, and reporting.",
      tech: ["Next.js 16", "React 19", "Tailwind CSS", "Express.js 5", "MongoDB", "Stripe", "Better Auth", "JWT", "Framer Motion", "Swiper", "Recharts", "Lucide React"],
      features: [
        "Campaign creation with goal tracking and progress visualization",
        "Built-in credit economy (20 credits = $1) with Stripe payments",
        "Role-based access control (Supporter, Creator, Admin)",
        "Admin dashboard for campaign approvals and withdrawal management",
        "Real-time campaign updates and notifications",
        "Responsive design with smooth animations",
      ],
      challenges: "Implementing the credit-based economy with Stripe integration required careful handling of payment webhooks, credit conversions, and ensuring accurate balance tracking across the platform.",
      future: "Future updates include a recommendation engine for discovering campaigns, social sharing features, a mobile app, and cryptocurrency payment support.",
    },
  },
  {
    title: "ArtHub",
    tagline: "Contemporary art marketplace & gallery",
    img: "/assets/project-3.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB", "Stripe", "Better Auth"],
    desc: "A full-stack contemporary art marketplace connecting artists with collectors, featuring Stripe payments, subscriptions, and role-based dashboards.",
    liveUrl: "https://art-hub-client-10.vercel.app",
    githubUrl: "https://github.com/samiul-hasan-tanzim",
    details: {
      description: "ArtHub is a full-stack contemporary art marketplace and gallery platform that connects visionary artists with art collectors. It solves the problem of fragmented art discovery and purchasing by providing a centralized, secure, and feature-rich platform where artists can showcase and sell their work, collectors can browse and purchase artwork with confidence, and administrators can manage the entire ecosystem. The platform addresses key pain points such as verifying legitimate purchases for reviews, managing subscription-based purchasing limits, and providing role-based dashboards tailored to each user type (admin, artist, collector).",
      tech: ["Next.js 16", "React 19", "Tailwind CSS", "Express.js 5", "MongoDB", "Stripe", "Better Auth", "JWT", "HeroUI", "Framer Motion", "Recharts", "Lucide React"],
      features: [
        "Artist portfolio showcasing with artwork management",
        "Secure artwork purchasing with Stripe payment processing",
        "Subscription-based purchasing limits for collectors",
        "Role-based dashboards (Admin, Artist, Collector)",
        "Artwork review system with purchase verification",
        "Dark/light theme support with next-themes",
      ],
      challenges: "Building a secure art marketplace required careful handling of ownership verification, subscription-based purchasing limits, and ensuring that only verified purchasers could leave reviews on artwork.",
      future: "Planned features include an auction system, augmented reality preview for artwork placement, artist collaboration tools, and a mobile application.",
    },
  },
];

export function Projects() {
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Selected Work</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
                Projects <span className="text-gradient">I've built</span>.
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
              <article
                className="card-cosmic group h-full flex flex-col cursor-pointer"
                data-cursor="hover"
                onClick={() => setSelected(p)}
              >
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
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)]"
                      aria-label="Live demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)]"
                      aria-label="Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                  {p.tags.slice(0, 4).map((t) => (
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

      <ProjectModal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">{selected.title}</h3>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyan-glow)] mb-4">
              {selected.tagline}
            </div>

            <ModalLinks liveUrl={selected.liveUrl} githubUrl={selected.githubUrl} />

            <ModalSection title="Description">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.details.description}
              </p>
            </ModalSection>

            <ModalSection title="Technologies Used">
              <ModalTags tags={selected.details.tech} />
            </ModalSection>

            <ModalSection title="Features">
              <ul className="space-y-2">
                {selected.details.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[var(--cyan-glow)] mt-1">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ModalSection>

            <ModalSection title="Challenges">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.details.challenges}
              </p>
            </ModalSection>

            <ModalSection title="Future Improvements">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.details.future}
              </p>
            </ModalSection>
          </>
        )}
      </ProjectModal>
    </section>
  );
}
