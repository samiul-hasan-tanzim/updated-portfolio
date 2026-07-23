import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{".dashboard, .dashboard * { cursor: auto !important; }"}</style>
      {children}
    </>
  );
}
