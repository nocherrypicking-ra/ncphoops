import Link from "next/link";
import { watchlist } from "../_data/watchlist";
import ShareBar from "./ShareBar";

export const dynamic = "force-static";

export function generateStaticParams() {
  return watchlist.map((p) => ({ id: p.id }));
}

function Stars({ n }: { n: number }) {
  const count = Math.max(0, Math.min(5, n || 0));
  const opacity =
    count >= 5 ? "opacity-100" : count === 4 ? "opacity-90" : count === 3 ? "opacity-75" : "opacity-60";

  return (
    <div className={`flex items-center gap-0.5 text-yellow-400 ${opacity}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="drop-shadow-[0_0_12px_rgba(250,204,21,0.35)]">★</span>
      ))}
      {count === 0 && <span className="text-gray-600">—</span>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[11px] tracking-widest uppercase text-gray-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default function WatchlistPlayerPage({ params }: { params: { id: string } }) {
  const routeId = (params?.id || "").trim();
  const player = watchlist.find((p) => p.id === routeId);

  if (!player) {
    return (
      <div className="min-h-screen bg-[#070707] text-white">
        <div className="pointer-events-none fixed inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/watchlist"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-300 transition"
          >
            ← Back to Watchlist
          </Link>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">NOCHERRYPICKING</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Player not found</h1>
            <p className="mt-3 text-sm text-gray-400">
              ID: <span className="text-yellow-300 break-all">{routeId}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/watchlist"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-300 transition"
          >
            ← Back to Watchlist
          </Link>

          <Link href="/watchlist#criteria" className="text-sm text-yellow-300 hover:text-yellow-200 transition">
            Watchlist Criteria →
          </Link>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
          {/* NEW: share row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">NOCHERRYPICKING</p>
              <Stars n={player.stars} />
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{player.name}</h1>

              <p className="text-sm text-gray-300">
                {player.height} <span className="text-gray-500">·</span> {player.position}{" "}
                <span className="text-gray-500">·</span> Class of {player.classYear}
              </p>

              <p className="text-sm text-yellow-400 mt-1">
                {player.school} <span className="text-gray-500">·</span> {player.state}
              </p>
            </div>

            <ShareBar label={player.name} />
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="School" value={player.school} />
            <Stat label="State" value={player.state} />
            <Stat label="Height" value={player.height} />
            <Stat label="Position" value={player.position} />
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold">Scouting Summary</h2>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              {player.summary?.trim() ? player.summary : "Scouting summary coming soon."}
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-600">NCP Watchlist • Player Profiles</p>
      </div>
    </div>
  );
}
