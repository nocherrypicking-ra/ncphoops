import { notFound } from "next/navigation";
import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = watchlist.find((p) => p.id === params.id);
  if (!player) return notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-6">
          <Link
            href="/watchlist"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
          >
            ← Back to Watchlist
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="text-xs tracking-widest text-zinc-400">
            {"★".repeat(player.stars)}
          </div>

          <h1 className="mt-2 text-3xl font-semibold leading-tight">{player.name}</h1>

          <div className="mt-2 text-zinc-300">
            {player.school} ({player.state}) • Class of {player.classYear}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Height</div>
              <div className="mt-1 font-medium">{player.height}</div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Position</div>
              <div className="mt-1 font-medium">{player.position}</div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <div className="text-xs text-zinc-400">Stars</div>
              <div className="mt-1 font-medium">{player.stars}</div>
            </div>
          </div>

          {player.summary ? (
            <div className="mt-6 text-sm text-zinc-200 leading-relaxed">
              {player.summary}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
