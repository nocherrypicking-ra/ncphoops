// app/watchlist/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { watchlist } from "../_data/watchlist";

type ParamsMaybePromise = { id: string } | Promise<{ id: string }>;

export default async function PlayerPage({
  params,
}: {
  params: ParamsMaybePromise;
}) {
  const resolved = await Promise.resolve(params as any);
  const rawId = resolved?.id;

  if (!rawId) return notFound();

  const id = decodeURIComponent(String(rawId));
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
            {"★".repeat(player.stars)}
          </div>

          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            {player.name}
          </h1>

          <div className="mt-3 text-zinc-300">
            <span className="font-medium text-white">{player.school}</span>{" "}
            <span className="text-zinc-500">•</span> {player.state}{" "}
            <span className="text-zinc-500">•</span> Class of {player.classYear}
          </div>

          <div className="mt-2 text-zinc-300">
            {player.height} <span className="text-zinc-500">•</span>{" "}
            {player.position}
          </div>

          {player.summary ? (
            <p className="mt-5 text-sm leading-relaxed text-zinc-200">
              {player.summary}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
