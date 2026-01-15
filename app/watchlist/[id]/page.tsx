import Link from "next/link";
import { watchlist } from "@/data/watchlist";

export const dynamic = "force-dynamic";

const slugify = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const playerSlug = (p: any) => slugify(String(p?.id || ""));

function getRouteId(params: any) {
  const v = params?.id;
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v[0] || "";
  return "";
}

export default function PlayerPage({ params }: { params: any }) {
  const routeId = getRouteId(params);

  const player = watchlist.find((p: any) => playerSlug(p) === routeId);

  if (!player) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <Link href="/watchlist" className="text-sm text-gray-300 hover:text-yellow-300">
            ← Back to Watchlist
          </Link>

          <h1 className="mt-6 text-4xl font-semibold">Player not found</h1>
          <p className="mt-2 text-sm text-gray-300">
            Route ID: <span className="text-yellow-400">{routeId || "(empty)"}</span>
          </p>

          <p className="mt-6 text-xs text-gray-500">
            If Route ID is empty, your route folder is not being matched.
            Confirm your file path is exactly: <b>app/watchlist/[id]/page.tsx</b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <Link href="/watchlist" className="text-sm text-gray-300 hover:text-yellow-300">
          ← Back to Watchlist
        </Link>

        <h1 className="mt-8 text-5xl font-semibold">{player.name}</h1>
        <p className="mt-2 text-gray-300">
          {player.height} · {player.position} · Class of {player.classYear}
        </p>
        <p className="mt-1 text-yellow-400">{player.school} · {player.state}</p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">Scouting Summary</h2>
          <p className="mt-3 text-gray-300">
            {player.summary?.trim() ? player.summary : "Scouting summary coming soon."}
          </p>
        </div>
      </div>
    </div>
  );
}
