import Link from "next/link";
import { notFound } from "next/navigation";
import { watchlist } from "../_data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = watchlist.find((p) => p.id === params.id);
  if (!player) return notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Top back link */}
        <div className="mb-6">
          <Link
            href="/watchlist"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
          >
            ← Back to Watchlist
          </Link>
        </div>

        {/* Hero card */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-7 shadow-sm">
          {/* soft glow */}
          <div className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 -bottom-28 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.22em] text-zinc-400">
                {"★".repeat(player.stars)}
              </div>

              <h1 className="mt-2 text-3xl font-semibold leading-tight">
                {player.name}
              </h1>

              <div className="mt-2 text-zinc-300">
                {player.height} • {player.position} • Class of {player.classYear}
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-300">
                <span className="font-semibold text-white">{player.state}</span>
                <span className="h-4 w-px bg-zinc-700" />
                <span className="truncate">{player.school}</span>
              </div>
            </div>

            {/* Right side quick info */}
            <div className="relative grid w-full gap-3 sm:w-[280px]">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
                <div className="text-xs tracking-widest text-zinc-500">POSITION</div>
                <div className="mt-1 text-lg font-semibold">{player.position}</div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
                <div className="text-xs tracking-widest text-zinc-500">HEIGHT</div>
                <div className="mt-1 text-lg font-semibold">{player.height}</div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
                <div className="text-xs tracking-widest text-zinc-500">CLASS</div>
                <div className="mt-1 text-lg font-semibold">{player.classYear}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-7">
              <div className="text-xs tracking-widest text-zinc-500">
                SCOUTING SUMMARY
              </div>

              <div className="mt-3 text-sm leading-relaxed text-zinc-200">
                {player.summary ? (
                  player.summary
                ) : (
                  <span className="text-zinc-400">
                    Summary coming soon.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Placeholder blocks for later */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-7">
              <div className="text-xs tracking-widest text-zinc-500">NOTES</div>
              <div className="mt-3 text-sm text-zinc-400">
                Film links / offers / stats coming soon.
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-7">
              <div className="text-xs tracking-widest text-zinc-500">CONTACT</div>
              <div className="mt-3 text-sm text-zinc-400">
                Coaches & scouting contact block coming soon.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
          <span className="underline underline-offset-4">NCP Watchlist</span> —
          profiles update as film and info gets confirmed.
        </div>
      </div>
    </div>
  );
}
