"use client";

import type { Player } from "./_data/watchlist";

export default function WatchlistClient({
  data,
}: {
  data: Player[];
}) {
 return (
  <div className="min-h-screen bg-[#070707] text-white">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold">
        NCP <span className="text-yellow-400">Watchlist</span>
      </h1>

      <p className="mt-3 text-gray-400">
        {data.length} Players
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((player) => (
          <div
            key={player.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="text-yellow-400">
              {"★".repeat(player.stars)}
            </div>

            <h2 className="mt-3 text-lg font-semibold">
              {player.name}
            </h2>

            <p className="text-sm text-gray-300">
              {player.height} • {player.position}
            </p>

            <p className="text-sm text-gray-500">
              {player.school}
            </p>

            <p className="text-xs text-gray-500">
              {player.state} • {player.classYear}
            </p>

            {player.college && (
              <p className="mt-2 text-sm text-yellow-400">
                {player.college}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
