import Link from "next/link";
import { notFound } from "next/navigation";
import { watchlist } from "../_data/watchlist";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const player = watchlist.find((p) => p.id === id);

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
          <div className="text-xs tracking-[0.22em] text-zinc-400">
            {"★".repeat(player.stars)}
          </div>

          <h1 className="mt-2 text-3xl font-semibold">{player.name}</h1>

          <div className="mt-2 text-zinc-300">
            {player.height} • {player.position} • Class of {player.classYear}
          </div>

          <div className="mt-4 grid gap-2 text-sm text-zinc-300">
            <div>
              <span className="text-zinc-500">School:</span> {player.school}
            </div>
            <div>
              <span className="text-zinc-500">State:</span> {player.state}
            </div>
          </div>

          {player.summary ? (
            <div className="mt-6 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-300">
              {player.summary}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
