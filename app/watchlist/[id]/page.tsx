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
      <div className="mx-auto max-w-5xl px-4 py-10">
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
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -right-28 -bottom-28 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.22em] text-zinc-400">
                {"★".repeat(player.stars)}
              </div>

              <h1 className="mt-2 truncate text-3xl font-semibold leading-tight">
                {player.name}
              </h1>

              <div className="mt-2 text-zinc-300">
                {player.height} • {player.position} • Class of {player.classYear}
              </div>

              <div className="mt-3 text-sm text-zinc-400">{player.school}</div>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-300">
                <span className="font-semibold text-white">{player.state}</span>
                <span className="h-4 w-px bg-zinc-700" />
                <span className="text-zinc-300">{player.classYear}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <div className="text-sm font-semibold text-white">Profile</div>
              <div className="mt-1 text-sm text-zinc-400">
                Quick snapshot + scouting notes
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <div className="text-xs text-zinc-500">School</div>
                  <div className="mt-1 text-zinc-200">{player.school}</div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <div className="text-xs text-zinc-500">State</div>
                  <div className="mt-1 text-zinc-200">{player.state}</div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <div className="text-xs text-zinc-500">Height</div>
                  <div className="mt-1 text-zinc-200">{player.height}</div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <div className="text-xs text-zinc-500">Position</div>
                  <div className="mt-1 text-zinc-200">{player.position}</div>
                </div>
              </div>

              {player.summary ? (
                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <div className="text-sm font-semibold text-white">
                    Scouting Summary
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {player.summary}
                  </div>
                </div>
              ) : (
                <div className="mt-6 border-t border-zinc-800 pt-5 text-sm text-zinc-400">
                  Scouting Summary coming soon.
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <div className="text-sm font-semibold text-white">Actions</div>
              <div className="mt-1 text-sm text-zinc-400">
                Quick links for the workflow
              </div>

              <div className="mt-5 space-y-3">
                <Link
                  href="/watchlist"
                  className="block rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-700 hover:text-white"
                >
                  Back to Watchlist
                </Link>

                <a
                  href="#"
                  className="block rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-700 hover:text-white"
                >
                  Share (coming soon)
                </a>
              </div>

              <div className="mt-6 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
                NCP Watchlist • Player Profiles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
