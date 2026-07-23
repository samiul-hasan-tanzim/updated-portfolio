import { useEffect, useState, useRef } from "react";

interface CometData {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  dur: number;
  size: number;
  hue: number;
  tailLen: number;
}

function spawn(w: number, h: number, id: number): CometData {
  const margin = 80;
  const edge = Math.floor(Math.random() * 4);
  let x: number, y: number, baseAngle: number;

  if (edge === 0) {
    x = -margin;
    y = Math.random() * h;
    baseAngle = -20 + Math.random() * 40;
  } else if (edge === 1) {
    x = w + margin;
    y = Math.random() * h;
    baseAngle = 160 + Math.random() * 40;
  } else if (edge === 2) {
    x = Math.random() * w;
    y = -margin;
    baseAngle = 70 + Math.random() * 40;
  } else {
    x = Math.random() * w;
    y = h + margin;
    baseAngle = 250 + Math.random() * 40;
  }

  const angle = baseAngle * (Math.PI / 180);
  const dist = Math.max(w, h) * (1.2 + Math.random() * 0.6);
  const dx = Math.cos(angle) * dist;
  const dy = Math.sin(angle) * dist;
  const dur = 2.5 + Math.random() * 2.5;
  const size = 3 + Math.random() * 3;
  const hue = 180 + Math.random() * 80;
  const tailLen = 80 + Math.random() * 120;

  return { id, x, y, dx, dy, dur, size, hue, tailLen };
}

function Comet({ data, onEnd }: { data: CometData; onEnd: () => void }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const anim = node.animate(
      [
        { transform: "translate(0,0)", opacity: 0 },
        { transform: "translate(0,0)", opacity: 1, offset: 0.04 },
        { transform: `translate(${data.dx}px, ${data.dy}px)`, opacity: 1, offset: 0.75 },
        { transform: `translate(${data.dx}px, ${data.dy}px)`, opacity: 0 },
      ],
      { duration: data.dur * 1000, easing: "linear", fill: "forwards" }
    );
    anim.onfinish = onEnd;
    return () => anim.cancel();
  }, [data, onEnd]);

  const angle = Math.atan2(data.dy, data.dx) * (180 / Math.PI);

  return (
    <div
      ref={el}
      aria-hidden
      style={{
        position: "absolute",
        top: data.y - data.size / 2,
        left: data.x - data.size / 2,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: data.tailLen,
          height: data.size * 0.6,
          borderRadius: "50% 0 0 50%",
          transform: `rotate(${angle}deg)`,
          transformOrigin: "right center",
          background: `linear-gradient(270deg, oklch(0.95 0.15 ${data.hue}), transparent)`,
          boxShadow: `0 0 ${data.size * 3}px oklch(0.9 0.12 ${data.hue} / 0.6)`,
          marginTop: -data.size * 0.3,
        }}
      />
    </div>
  );
}

export function CosmicBackground() {
  const [comets, setComets] = useState<CometData[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let timer: number;

    const schedule = () => {
      timer = window.setTimeout(() => {
        setComets((prev) => {
          if (prev.length >= 2) return prev;
          return [...prev, spawn(w, h, idRef.current++)];
        });
        schedule();
      }, 4000 + Math.random() * 8000);
    };

    const initial = () => {
      timer = window.setTimeout(() => {
        setComets((prev) => [...prev, spawn(w, h, idRef.current++)]);
        schedule();
      }, 2000 + Math.random() * 4000);
    };

    initial();
    return () => clearTimeout(timer);
  }, []);

  const remove = (id: number) => setComets((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="cosmic-bg" aria-hidden>
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      {comets.map((c) => (
        <Comet key={c.id} data={c} onEnd={() => remove(c.id)} />
      ))}
    </div>
  );
}
