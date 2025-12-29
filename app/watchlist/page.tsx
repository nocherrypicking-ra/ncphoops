// app/watchlist/page.tsx

import { watchlist } from "../data/watchlist";

export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold tracking-widest mb-4">
          WATCHLIST
        </h1>
        <p className="text-gray-400 max-w-2xl">
          No Cherry Picking evaluates players across regions with context,
          consistency, and projection. Rankings reflect live evaluation — not hype.
        </p>
      </section>

      {/* FILTER BAR (VISUAL ONLY) */}
      <section className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-gray-400">
          <span className="hover:text-yellow-400 cursor-pointer">All</span>
          <span className="hover:text-yellow-400 cursor-pointer">5 Star</span>
          <span className="hover:text-yellow-400 cursor-pointer">4 Star</span>
          <span className="hover:text-yellow-400 cursor-pointer">Guards</span>
          <span className="hover:text-yellow-400 cursor-pointer">Wings</span>
          <span className="hover:text-yellow-400 cursor-pointer">Bigs</span>
        </div>
      </section>

      {/* PLAYER GRID */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {watchlist.map((player) => (
            <div
              key={player.id}
              className="border border-gray-800 p-5 hover:border-yellow-400 transition"
            >
              <div className="flex justify-between mb-3">
                <span className="text-yellow-400 font-bold">
                  {"★".repeat(player.stars)}
                </span>
                <span className="text-sm text-gray-400">
                  {player.classYear}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{player.name}</h3>
              <p className="text-gray-400 text-sm">
                {player.position} • {player.height}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {player.state}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
