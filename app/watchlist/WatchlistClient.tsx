"use client";

import type { Player } from "./_data/watchlist";

export default function WatchlistClient({
  data,
}: {
  data: Player[];
}) {
  return (
    <div className="min-h-screen bg-[#070707] text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400">
        NCP Watchlist
      </h1>

      <p className="mt-4">
        {data.length} Players
      </p>
    </div>
  );
}
