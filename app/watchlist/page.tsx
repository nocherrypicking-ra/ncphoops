// app/watchlist/page.tsx

import Link from "next/link";
import { watchlist } from "../data/watchlist";

export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h1 className="text-5xl font-extrabold tracking-wide">
          WATCHLIST
        </h1>
        <p className="mt-4 max-w-2xl text-gray-400">
          No Cherry Picking evaluates players across regions with context,
          consistency, and projection. Rankings reflect live evaluation — not hype.
        </p>
      </section>

      {/* FILTER BAR (VISUAL ONLY FOR NOW) */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest text-gray-400">
          <span className="cursor-pointer hover:text-yellow-400">All</span>
          <span className="cursor-pointer hover:text-yellow-400">5 Star</span>
          <span className="cursor-pointer hover:text-yellow-400">4 Star</span>
          <span className="cursor-pointer hover:text-yellow-400">Guards</span>
          <span className="cursor-pointer hover:text-yellow-400">Wings</span>
          <span className="cursor-pointer hover:text-yellow-400">Bigs</span>
        </div>
      </section>

      {/* PLAYER GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {watchlist.map((player) => (
            <Link
              key={player.id}
              href={`/watchlist/${player.id}`}
              className="border border-gray-800 p-5 hover:border-yellow-400 transition"
            >
              {/* STARS */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-yellow-400 font-bold">
                  {"★".repeat(player.stars)}
                </span>
                <span className="text-xs text-gray-500">
                  {player.classYear}
                </span>
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold leading-tight">
                {player.name}
              </h3>

              {/* META */}
              <div className="mt-2 text-sm text-gray-400 space-y-1">
                <p>{player.position}</p>
                <p>{player.height}</p>
                <p>{player.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
