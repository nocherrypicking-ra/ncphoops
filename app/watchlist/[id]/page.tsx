import Link from "next/link";
import { notFound } from "next/navigation";
import { watchlist } from "@/data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const routeId = params?.id;

  const player = watchlist.find((p) => p.id === routeId);

  if (!player) return notFound();

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

        <p className="mt-1 text-yellow-400">
          {player.school} · {player.state}
        </p>

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
