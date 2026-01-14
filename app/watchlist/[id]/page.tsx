import { notFound } from "next/navigation";
import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export default function PlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params?.id;

  if (!id) return notFound();

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
          <div className="text-xs tracking-widest text-zinc-400">
            {"★".repeat(Number(player.stars || 0))}
          </div>

          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            {player.name}
          </h1>

          <div className="mt-3 text-zinc-300">
            {player.height} • {player.position} • Class of {player.classYear}
          </div>

          <div className="mt-2 text-zinc-400">
            {player.school} • {player.state}
          </div>

          {"summary" in player && (player as any).summary ? (
            <p className="mt-6 leading-relaxed text-zinc-200">
              {(player as any).summary}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
