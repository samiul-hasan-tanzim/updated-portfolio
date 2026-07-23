import { useActionState, useEffect, useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { MouseParallax } from "./MouseParallax";
import { Send, Mail, MapPin, Phone, Github, Twitter, Linkedin, Loader2, Satellite, X } from "lucide-react";
import { submitContact } from "@/app/actions/contact";

function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.54 6.54 0 1 1-13.08 0 6.54 6.54 0 0 1 13.08 0zM21.6 12a3.27 3.27 0 1 1-6.54 0 3.27 3.27 0 0 1 6.54 0zM24 12a1.63 1.63 0 1 1-3.26 0 1.63 1.63 0 0 1 3.26 0z" />
    </svg>
  );
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContact, null);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state && "success" in state) {
      setShowSuccess(true);
      formRef.current?.reset();
    }
  }, [state]);

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
            <MouseParallax factor={7}>
              <div
                className="card-cosmic h-full"
                style={{ animation: "driftDiagonal 8s ease-in-out infinite" }}
              >
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--cyan-glow)]">Direct Coordinates</div>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--neon-blue)] flex items-center justify-center">
                    <Mail size={16} className="text-black" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-mono text-sm">samiulhasan.dev@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cosmic-purple)] to-[var(--nebula-pink)] flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-mono text-sm">Bangladesh · Remote</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--nebula-pink)] to-[var(--cosmic-purple)] flex items-center justify-center">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                    <div className="font-mono text-sm">+880 1784 468092</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Uplinks</div>
                <div className="mt-3 flex gap-3">
                  {[
                    { icon: Github, url: "https://github.com/samiul-hasan-tanzim", label: "GitHub" },
                    { icon: Linkedin, url: "https://www.linkedin.com/in/samiul-hasan-tanzim", label: "LinkedIn" },
                    { icon: MediumIcon, url: "https://medium.com/@samiulh_hasan", label: "Medium" },
                    { icon: Twitter, url: "https://x.com/Samiul_Hasan911", label: "X (Twitter)" },
                  ].map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)] hover:shadow-[0_0_20px_-5px_var(--cyan-glow)] hover:border-[var(--cyan-glow)]/50 transition-all"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              </div>
            </MouseParallax>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <MouseParallax factor={9}>
              <form
                ref={formRef}
                action={formAction}
                className="card-cosmic h-full"
                style={{ animation: "driftSway 9s ease-in-out infinite" }}
              >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="callsign" label="Callsign" placeholder="Your name" />
                <Field name="frequency" label="Frequency" placeholder="you@domain.com" type="email" />
              </div>
              <div className="mt-4">
                <Field name="subject" label="Subject" placeholder="Mission briefing" />
              </div>
              <div className="mt-4">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Transmit your message..."
                  className="mt-2 w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]/60 focus:shadow-[0_0_20px_-8px_var(--cyan-glow)] transition-all resize-none"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {state && "error" in state ? (
                    <span className="text-red-400">{state.error}</span>
                  ) : isPending ? (
                    <span className="text-muted-foreground animate-pulse">Encoding transmission...</span>
                  ) : (
                    <>End-to-end encrypted · 256-bit</>
                  )}
                </div>
                <button type="submit" disabled={isPending} className="btn-neon disabled:opacity-50 disabled:pointer-events-none">
                  {isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  {isPending ? " Sending" : " Transmit"}
                </button>
              </div>
              </form>
            </MouseParallax>
          </Reveal>
        </div>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowSuccess(false); }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[oklch(0.14_0.04_275/0.9)] backdrop-blur-xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-center">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-3 right-3 h-7 w-7 grid place-items-center rounded-full text-muted-foreground hover:text-white transition-colors"
            >
              <X size={14} />
            </button>

            <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--neon-blue)] flex items-center justify-center mb-5">
              <Satellite size={28} className="text-black" />
            </div>

            <h3 className="font-display text-2xl font-bold">Transmission Sent</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Your message is now drifting through the cosmic void toward its destination.
              If your frequency reaches us, a response will be dispatched within 24 cycles.
              Keep your eyes on the horizon.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 btn-neon"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]/60 focus:shadow-[0_0_20px_-8px_var(--cyan-glow)] transition-all"
      />
    </label>
  );
}
