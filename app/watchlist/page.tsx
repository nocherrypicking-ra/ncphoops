// app/watchlist/page.tsx

'use client';

import { useState } from 'react';
import { watchlist } from '../data/watchlist';

type Filters = {
  state: string;
  classYear: string;
  position: string;
  stars: string;
};

export default function WatchlistPage() {
  const [filters, setFilters] = useState<Filters>({
    state: 'ALL',
    classYear: 'ALL',
    position: 'ALL',
    stars: 'ALL',
  });

  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredPlayers = watchlist.filter((player) => {
    return (
      (filters.state === 'ALL' || player.state === filters.state) &&
      (filters.classYear === 'ALL' || player.classYear === filters.classYear) &&
      (filters.position === 'ALL' || player.position === filters.position) &&
      (filters.stars === 'ALL' || player.stars === Number(filters.stars))
    );
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold tracking-widest">WATCHLIST</h1>
        <p className="mt-4 text-gray-400 max-w-2xl">
          No Cherry Picking evaluates players with context, consistency, and long-term projection.
          Rankings reflect real evaluation — not hype.
        </p>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <select
          className="bg-black border border-gray-700 p-3"
          value={filters.state}
          onChange={(e) => handleChange('state', e.target.value)}
        >
          <option value="ALL">All States</option>
          <option value="TX">Texas</option>
          <option value="AR">Arkansas</option>
          <option value="OK">Oklahoma</option>
          <option value="LA">Louisiana</option>
        </select>

        <select
          className="bg-black border border-gray-700 p-3"
          value={filters.classYear}
          onChange={(e) => handleChange('classYear', e.target.value)}
        >
          <option value="ALL">All Classes</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>

        <select
          className="bg-black border border-gray-700 p-3"
          value={filters.position}
          onChange={(e) => handleChange('position', e.target.value)}
        >
          <option value="ALL">All Positions</option>
          <option value="G">Guard</option>
          <option value="F">Forward</option>
          <option value="C">Big</option>
        </select>

        <select
          className="bg-black border border-gray-700 p-3"
          value={filters.stars}
          onChange={(e) => handleChange('stars', e.target.value)}
        >
          <option value="ALL">All Stars</option>
          <option value="5">5★</option>
          <option value="4">4★</option>
          <option value="3">3★</option>
        </select>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlayers.map((player) => (
          <div
            key={`${player.name}-${player.classYear}`}
            className="border border-gray-800 p-6 hover:border-yellow-400 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-yellow-400 font-bold">
                {'★'.repeat(player.stars)}
              </span>
              <span className="text-gray-400 text-sm">{player.classYear}</span>
            </div>

            <h3 className="text-xl font-bold">{player.name}</h3>

            <p className="text-gray-400 mt-2">
              {player.position} • {player.height}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {player.state}
            </p>
          </div>
        ))}
      </section>

      {filteredPlayers.length === 0 && (
        <p className="text-center text-gray-500 mt-16">
          No players match your filters.
        </p>
      )}
    </main>
  );
}
