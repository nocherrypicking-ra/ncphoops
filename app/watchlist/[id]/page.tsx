import Link from "next/link";
import { watchlist } from "../_data/watchlist";

const slugify = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Universal slug rule (matches WatchlistClient)
const playerSlug = (p: any) => slugify(p.id || `${p.name}-${p.classYear}` || p.name);

function Stars({ n }: { n: number }) {
  const count = Math.max(0, Math.min(5, n || 0));
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="drop-shadow-[0_0_10px_rgba(250,204,21,0.35)]">★</span>
      ))}
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
  const player = watchlist.find((p: any) => playerSlug(p) === routeId);

  if (!player) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex items-center justify-center">
        Player not found
      </div>
    );
  }

  const shareUrl = `https://ncphoops.com/watchlist/${playerSlug(player)}`;
  const shareText = `${player.name} • Class of ${player.classYear} • NCP Watchlist`;

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <Link href="/watchlist" className="text-sm text-gray-300 hover:text-yellow-300">
          ← Back to Watchlist
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <Stars n={player.stars} />
          <h1 className="mt-2 text-4xl font-semibold">{player.name}</h1>

          <p className="text-gray-300 mt-1">
            {player.height} · {player.position} · Class of {player.classYear}
          </p>

          <p className="text-yellow-400 mt-1">
            {player.school} · {player.state}
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="School" value={player.school} />
            <Stat label="State" value={player.state} />
            <Stat label="Height" value={player.height} />
            <Stat label="Position" value={player.position} />
          </div>

          {/* Summary */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold">Scouting Summary</h2>
            <p className="mt-3 text-sm text-gray-300">
              {player.summary || "Scouting summary coming soon."}
            </p>
          </div>

          {/* SHARE WEAPON */}
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert("Profile link copied");
              }}
              className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300 hover:bg-yellow-400/20 transition"
            >
              Copy Profile Link
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: player.name,
                    text: shareText,
                    url: shareUrl,
                  });
                } else {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Share not supported — link copied instead");
                }
              }}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 hover:border-yellow-400/40 transition"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
