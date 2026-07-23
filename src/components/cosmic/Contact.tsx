import { useState } from "react";
import { Reveal } from "./Reveal";
import { Send, Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">// Transmission</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Open a <span className="text-gradient">channel</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Available for select engagements. Response within 24 hours across every timezone.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="card-cosmic h-full">
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan-glow)]">Direct Coordinates</div>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--neon-blue)] flex items-center justify-center">
                    <Mail size={16} className="text-black" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-mono text-sm">nova@vega.dev</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cosmic-purple)] to-[var(--nebula-pink)] flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-mono text-sm">Tokyo / Berlin</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Uplinks</div>
                <div className="mt-3 flex gap-3">
                  {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="h-11 w-11 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)] hover:shadow-[0_0_20px_-5px_var(--cyan-glow)] hover:border-[var(--cyan-glow)]/50 transition-all"
                      aria-label="Social"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              className="card-cosmic h-full"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Callsign" placeholder="Your name" />
                <Field label="Frequency" placeholder="you@domain.com" type="email" />
              </div>
              <div className="mt-4">
                <Field label="Subject" placeholder="Mission briefing" />
              </div>
              <div className="mt-4">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  placeholder="Transmit your message..."
                  className="mt-2 w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]/60 focus:shadow-[0_0_20px_-8px_var(--cyan-glow)] transition-all resize-none"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {sent ? (
                    <span className="text-[var(--cyan-glow)]">✓ Transmission received.</span>
                  ) : (
                    <>End-to-end encrypted · 256-bit</>
                  )}
                </div>
                <button type="submit" className="btn-neon">
                  Transmit <Send size={14} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]/60 focus:shadow-[0_0_20px_-8px_var(--cyan-glow)] transition-all"
      />
    </label>
  );
}
