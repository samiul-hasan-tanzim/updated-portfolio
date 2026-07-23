import { useEffect, useCallback, type ReactNode } from "react";
import { X, ExternalLink, Github } from "lucide-react";

export function ProjectModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-strong rounded-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full glass hover:text-[var(--cyan-glow)] hover:border-[var(--cyan-glow)]/50 transition-all"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function ModalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--cyan-glow)] mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
}

export function ModalTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-full border border-white/10 bg-white/5"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function ModalLinks({ liveUrl, githubUrl }: { liveUrl?: string; githubUrl?: string }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-neon !py-2 !px-4 !text-xs"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-neon !py-2 !px-4 !text-xs"
        >
          <Github size={14} /> Repository
        </a>
      )}
    </div>
  );
}
