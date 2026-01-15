import Link from "next/link";
import { watchlist } from "../_data/watchlist";

const slugify = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function Stars({ n }: { n: number }) {
  const count = Math.max(0, Math.min(5, n || 0));
  const opacity =
    count >= 5 ? "opacity-100" : count === 4 ? "opacity-90" : count === 3 ? "opacity-75" : "opacity-60";

  return (
    <div className={`flex items-center gap-0.5 text-yellow-400 ${opacity}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="drop-shadow-[0_0_12px_rgba(250,204,21,0.35)]">
          ★
        </span>
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
  const routeId = params?.id || "";

  // Match by slug of id OR name (so it works even if data ids are messy)
  const player =
    watchlist.find((p: any) => slugify(p?.id) === routeId) ||
    watchlist.find((p: any) => slugify(p?.name) === routeId) ||
    watchlist.find((p: any) => slugify(`${p?.name}-${p?.classYear}`) === routeId);

  // IMPORTANT: Do NOT call notFound() here.
  // We render a "not found" UI so you can debug without Next 404 masking the issue.
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

            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">
              Player not found
            </h1>

            <p className="mt-3 text-sm text-gray-300">
              Route ID:
              <span className="ml-2 text-yellow-400 break-all">{routeId}</span>
            </p>

            <p className="mt-3 text-sm text-gray-400">
              This usually means the player’s <span className="text-gray-200">id</span> in your data file doesn’t match
              what the URL is using. Easiest fix is to make sure each player has a clean slug ID like{" "}
              <span className="text-gray-200">ethan-sheats-2026</span>.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/watchlist"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-200
                           hover:border-yellow-400/40 hover:text-white transition text-center"
              >
                Go back
              </Link>

              <Link
                href="/watchlist#criteria"
                className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300
                           hover:bg-yellow-400/15 transition text-center"
              >
                Watchlist Criteria
              </Link>
            </div>
          </div>

          <p className="mt-10 text-xs text-gray-600">NCP Watchlist • Debug View</p>
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
        <Link
          href="/watchlist"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-300 transition"
        >
          ← Back to Watchlist
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
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

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/watchlist"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-200
                         hover:border-yellow-400/40 hover:text-white transition text-center"
            >
              Back to Watchlist
            </Link>

            <Link
              href="/watchlist#criteria"
              className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300
                         hover:bg-yellow-400/15 transition text-center"
            >
              Watchlist Criteria
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-600">NCP Watchlist • Player Profiles</p>
      </div>
    </div>
  );
}
