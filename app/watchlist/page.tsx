import Link from "next/link";
import { watchlist } from "@/data/watchlist";

export default function WatchlistPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 tracking-wide">
        WATCHLIST
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {watchlist.map((player) => (
          <Link
            key={player.id}
            href={`/watchlist/${player.id}`}
            className="group border border-neutral-800 rounded-xl p-6 hover:border-yellow-400 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-yellow-400 font-semibold">
                {player.stars}
              </span>
              <span className="text-sm text-neutral-400">
                {player.classYear}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-1 group-hover:text-yellow-400 transition">
              {player.name}
            </h2>

            <p className="text-sm text-neutral-400 mb-2">
              {player.position} • {player.height}
            </p>

            <p className="text-sm text-neutral-500">
              {player.school} ({player.state})
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
