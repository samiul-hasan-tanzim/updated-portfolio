import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const r = (s as HTMLElement).getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive((s as HTMLElement).id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold tracking-widest text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_10px_var(--cyan-glow)]" />
            NOVA<span className="text-gradient">VEGA</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-[var(--cyan-glow)] via-[var(--neon-blue)] to-[var(--cosmic-purple)] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a href="#contact" className="hidden md:inline-flex btn-outline-neon !py-2 !px-4 !text-xs">
            Let's Talk
          </a>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
