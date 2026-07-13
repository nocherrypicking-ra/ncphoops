export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-5xl font-black text-yellow-400 uppercase tracking-wide">
          NCP Watchlist
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          The premier basketball watchlist featuring all talent levels across
          Arkansas, Texas, Oklahoma & Louisiana.
        </p>

        <div className="mt-6 border-b border-neutral-800"></div>

        {/* Filters */}
        <div className="mt-8 rounded-xl border border-neutral-800 bg-[#111111] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-yellow-400 mb-2 uppercase">
                Stars
              </label>
              <select className="w-full rounded-lg bg-black border border-neutral-700 p-3 text-white">
                <option>All Stars</option>
                <option>No Stars</option>
                <option>★</option>
                <option>★★</option>
                <option>★★★</option>
                <option>★★★★</option>
                <option>★★★★★</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-yellow-400 mb-2 uppercase">
                Class
              </label>
              <select className="w-full rounded-lg bg-black border border-neutral-700 p-3 text-white">
                <option>All Classes</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-yellow-400 mb-2 uppercase">
                Position
              </label>
              <select className="w-full rounded-lg bg-black border border-neutral-700 p-3 text-white">
                <option>All Positions</option>
                <option>PG</option>
                <option>SG</option>
                <option>SF</option>
                <option>PF</option>
                <option>C</option>
                <option>G</option>
                <option>Wing</option>
                <option>Forward</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-yellow-400 mb-2 uppercase">
                State
              </label>
              <select className="w-full rounded-lg bg-black border border-neutral-700 p-3 text-white">
                <option>All States</option>
                <option>AR</option>
                <option>TX</option>
                <option>OK</option>
                <option>LA</option>
              </select>
            </div>
          </div>
        </div>

        {/* Player Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-[#111111] p-6 min-h-[260px]"></div>

          <div className="rounded-xl border border-neutral-800 bg-[#111111] p-6 min-h-[260px]"></div>

          <div className="rounded-xl border border-neutral-800 bg-[#111111] p-6 min-h-[260px]"></div>

          <div className="rounded-xl border border-neutral-800 bg-[#111111] p-6 min-h-[260px]"></div>
        </div>
      </div>
    </main>
  );
}
