// app/watchlist/page.tsx

import { watchlist } from "../data/watchlist";

export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <h1 className="text-5xl font-extrabold tracking-wide">
          WATCHLIST
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl">
          No Cherry Picking evaluates players with context, consistency,
          and long-term projection. Rankings reflect real evaluation — not hype.
        </p>
      </section>

      {/* FILTER BAR (VISUAL ONLY) */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest text-gray-400">
          <span>All</span>
          <span>5 Star</span>
          <span>4 Star</span>
          <span>Guards</span>
          <span>Wings</span>
          <span>Bigs</span>
        </div>
      </section>

      {/* PLAYER GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchlist.map((player, index) => (
            <div
              key={index}
              className="border border-gray-800 p-5 hover:border-yellow-400 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-yellow-400 font-bold">
                  {"★".repeat(player.stars)}
                </span>
                <span className="text-sm text-gray-500">
                  {player.classYear}
                </span>
              </div>

              <h3 className="text-xl font-semibold">
                {player.name}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {player.position} · {player.height}
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
