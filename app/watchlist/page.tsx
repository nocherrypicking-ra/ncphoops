import WatchlistClient from "./WatchlistClient";
import { watchlist } from "./_data/watchlist";

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">NCP Watchlist</h1>
          <p className="mt-2 text-zinc-300">
            Filter by stars, state, class, and position. Click a player to view profile.
          </p>
        </div>

        <WatchlistClient data={watchlist} />
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-400">
          <span className="underline underline-offset-4">Watchlist / Star Criteria</span> — coming soon.
        </div>
      </div>
    </div>
  );
}

