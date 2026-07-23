import { connectDB } from "@/lib/db";
import { Contact, type IContact } from "@/lib/models/contact";
import { DeleteButton } from "./_components/DeleteButton";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await connectDB();
  const messages = (await Contact.find().sort({ createdAt: -1 }).lean()) as IContact[];

  return (
    <div className="dashboard min-h-screen bg-[oklch(0.08_0.03_275)] text-white font-sans">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-wider">
              Incoming <span className="text-gradient">Transmissions</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              {messages.length} message{messages.length !== 1 ? "s" : ""} received
            </p>
          </div>
          <a href="/" className="text-xs font-mono uppercase tracking-widest text-[var(--cyan-glow)] hover:underline">
            ← Back to site
          </a>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Callsign</th>
                <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Frequency</th>
                <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Subject</th>
                <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</th>
                <th className="text-left px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Received</th>
                <th className="w-16" />
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-muted-foreground font-mono text-xs">
                    No transmissions yet. The void is silent.
                  </td>
                </tr>
              ) : (
                messages.map((m) => (
                  <tr key={m._id?.toString()} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-4 font-medium">{m.callsign}</td>
                    <td className="px-5 py-4 text-muted-foreground">{m.frequency}</td>
                    <td className="px-5 py-4 text-muted-foreground max-w-[160px] truncate">{m.subject}</td>
                    <td className="px-5 py-4 text-muted-foreground max-w-[240px] truncate">{m.message}</td>
                    <td className="px-5 py-4 text-muted-foreground font-mono text-xs whitespace-nowrap">
                      {new Date(m.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <DeleteButton id={m._id?.toString() ?? ""} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
