"use client";

import { useState } from "react";
import { Trash2, TriangleAlert, X } from "lucide-react";
import { deleteMessage } from "../actions";

export function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="h-8 w-8 grid place-items-center rounded-lg text-muted-foreground hover:text-red-400 hover:bg-red-400/10 transition-all"
        aria-label="Delete message"
      >
        <Trash2 size={14} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[oklch(0.14_0.04_275/0.9)] backdrop-blur-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 h-7 w-7 grid place-items-center rounded-full text-muted-foreground hover:text-white transition-colors"
            >
              <X size={14} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <TriangleAlert size={18} className="text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold">Delete transmission</h3>
                <p className="text-sm text-muted-foreground">This cannot be undone.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <form
                action={deleteMessage}
                onSubmit={() => setOpen(false)}
                className="flex-1"
              >
                <input type="hidden" name="id" value={id} />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-500/20 px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/30 transition-all"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
