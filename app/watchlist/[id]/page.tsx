import Link from "next/link";
import { watchlist } from "../_data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const raw = params.id;
  const id = decodeURIComponent(raw).trim();

  const player = watchlist.find((p) => (p.id || "").trim() === id);

  // ✅ DEBUG MODE: do NOT 404 yet. Show what the route is receiving.
  if (!player) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Link
            href="/watchlist"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
          >
            ← Back to Watchlist
          </Link>

          <h1 className="mt-6 text-2xl font-semibold">PLAYER NOT FOUND (DEBUG)</h1>

          <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm">
            <div className="text-zinc-400">params.id (raw)</div>
            <div className="mt-1 font-mono text-zinc-200">{raw}</div>

            <div className="mt-4 text-zinc-400">decoded id</div>
            <div className="mt-1 font-mono text-zinc-200">{id}</div>
          </div>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="text-zinc-400 text-sm mb-2">
              First 25 IDs in watchlist data:
            </div>
            <ul className="space-y-1 font-mono text-xs text-zinc-200">
              {watchlist.slice(0, 25).map((p) => (
                <li key={p.id}>• {p.id}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-sm text-zinc-400">
            If the decoded id is NOT exactly one of the IDs above, that’s why it
            “404s”.
          </div>
        </div>
      </div>
    );
  }

  // ✅ Normal page if found
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
          <div className="text-xs tracking-wide text-zinc-400">
            {"★".repeat(player.stars)}
          </div>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">{player.name}</h1>
          <div className="mt-2 text-zinc-300">
            {player.height} • {player.position} • Class of {player.classYear}
          </div>
          <div className="mt-1 text-zinc-400">
            {player.school} • {player.state}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold">Scouting Summary</h2>
          <p className="mt-3 whitespace-pre-wrap text-zinc-300 leading-relaxed">
            {player.summary || "Summary coming soon."}
          </p>
        </div>
      </div>
    </div>
  );
}
