// app/watchlist/page.tsx

import { watchlist } from "../data/watchlist";

export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h1 className="text-5xl font-extrabold tracking-widest">
          WATCHLIST
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchlist.map((player) => (
            <div
              key={player.id}
              className="border border-gray-800 p-6 hover:border-yellow-400 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{player.name}</h2>
                <span className="text-yellow-400 font-bold">
                  {"★".repeat(player.stars)}
                </span>
              </div>

              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  <span className="text-gray-500">Position:</span>{" "}
                  {player.position}
                </p>
                <p>
                  <span className="text-gray-500">Height:</span>{" "}
                  {player.height}
                </p>
                <p>
                  <span className="text-gray-500">Class:</span>{" "}
                  {player.classYear}
                </p>
                <p>
                  <span className="text-gray-500">State:</span>{" "}
                  {player.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
