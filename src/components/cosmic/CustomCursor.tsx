import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx, ty = ry;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, [data-cursor='hover']");
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "60px" : "36px";
        ringRef.current.style.height = interactive ? "60px" : "36px";
        ringRef.current.style.borderColor = interactive
          ? "color-mix(in oklab, var(--nebula-pink) 80%, transparent)"
          : "color-mix(in oklab, var(--cyan-glow) 70%, transparent)";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
