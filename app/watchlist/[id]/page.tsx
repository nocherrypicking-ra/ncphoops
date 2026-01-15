import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export const dynamic = "force-dynamic";

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

export default async function WatchlistPlayerPage(props: {
  params?: Promise<{ id?: string }> | { id?: string };
}) {
  // ✅ Works whether params is normal OR a Promise (covers Next canary behaviors)
  const resolvedParams =
    props.params && typeof (props.params as any).then === "function"
      ? await (props.params as Promise<{ id?: string }>)
      : (props.params as { id?: string } | undefined);

  const routeId = (resolvedParams?.id ?? "").trim();

  const player = routeId ? watchlist.find((p) => p.id === routeId) : undefined;

  if (!player) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/watchlist" className="text-sm text-gray-300 hover:text-yellow-300 transition">
          ← Back to Watchlist
        </Link>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">NOCHERRYPICKING</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Player not found</h1>

          <p className="mt-3 text-sm text-gray-300">
            Route ID: <span className="text-yellow-400 break-all">{routeId || "(empty)"}</span>
          </p>

          <div className="mt-6 text-xs text-gray-500 space-y-2">
            <p>
              If Route ID is <span className="text-gray-200">(empty)</span>, the dynamic param isn’t being captured.
            </p>
            <p>
              Confirm path: <span className="text-gray-200">app/watchlist/[id]/page.tsx</span>
            </p>
            <p>
              Also confirm the folder name is exactly: <span className="text-gray-200">[id]</span>
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-600">NCP Watchlist • Debug View</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-center justify-between gap-4">
        <Link href="/watchlist" className="text-sm text-gray-300 hover:text-yellow-300 transition">
          ← Back to Watchlist
        </Link>
        <Link href="/watchlist#criteria" className="text-sm text-yellow-300 hover:text-yellow-200 transition">
          Watchlist Criteria →
        </Link>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">NOCHERRYPICKING</p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <Stars n={player.stars} />
          <span className="text-[11px] tracking-widest uppercase text-gray-500">{player.state}</span>
        </div>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">{player.name}</h1>

        <p className="mt-2 text-sm text-gray-300">
          {player.height} <span className="text-gray-500">·</span> {player.position}{" "}
          <span className="text-gray-500">·</span> Class of {player.classYear}
        </p>

        <p className="text-sm text-yellow-400 mt-2">
          {player.school} <span className="text-gray-500">·</span> {player.state}
        </p>

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
  );
}
