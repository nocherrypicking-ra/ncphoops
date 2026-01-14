import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export default function PlayerProfile({ params }: { params: { id: string } }) {
  const player = watchlist.find((p) => p.id === params.id);

  if (!player) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Link href="/watchlist" className="text-zinc-300 underline underline-offset-4">
            ← Back to Watchlist
          </Link>
          <h1 className="mt-6 text-2xl font-semibold">Player not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link href="/watchlist" className="text-zinc-300 underline underline-offset-4">
          ← Back to Watchlist
        </Link>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold">{player.name}</h1>
              <div className="mt-2 text-zinc-300">
                {player.height} • {player.position} • Class of {player.classYear}
              </div>
              <div className="mt-2 text-zinc-400">
                {player.school} ({player.state})
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-zinc-400">Rating</div>
              <div className="mt-1 text-2xl font-semibold text-yellow-300">
                {player.stars}★
              </div>
            </div>
          </div>

          {player.summary ? (
            <div className="mt-6 text-zinc-200 leading-relaxed">
              {player.summary}
            </div>
          ) : (
            <div className="mt-6 text-zinc-400">
              Scouting summary coming soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
