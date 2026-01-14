import { notFound } from "next/navigation";
import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = watchlist.find((p) => p.id === params.id);

  if (!player) return notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Back */}
        <div className="mb-6">
          <Link
            href="/watchlist"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
          >
            ← Back to Watchlist
          </Link>
        </div>

        {/* Header Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs tracking-wide text-zinc-400">
                {"★".repeat(player.stars)}
              </div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight">
                {player.name}
              </h1>
              <div className="mt-2 text-zinc-300">
                {player.height} • {player.position} • Class of {player.classYear}
              </div>
              <div className="mt-1 text-zinc-400">
                {player.school} • {player.state}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300">
              <div className="text-zinc-500">Player ID</div>
              <div className="mt-1 font-mono text-xs text-zinc-300">
                {player.id}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold">Scouting Summary</h2>
          <p className="mt-3 whitespace-pre-wrap text-zinc-300 leading-relaxed">
            {player.summary ? player.summary : "Summary coming soon."}
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
          <span className="underline underline-offset-4">Watchlist / Star Criteria</span> — coming soon.
        </div>
      </div>
    </div>
  );
}
