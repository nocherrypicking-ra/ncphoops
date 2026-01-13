// /components/watchlist/PlayerCard.tsx
import Link from "next/link";
import type { WatchlistPlayer } from "@/data/watchlist";

type Props = {
  player: WatchlistPlayer;
};

function starsToText(stars: number, trending?: "up" | "down") {
  const base =
    stars >= 5
      ? "★★★★★"
      : stars === 4
      ? "★★★★"
      : stars === 3
      ? "★★★"
      : stars === 2
      ? "★★"
      : "★";

  const arrow = trending === "up" ? " ↗" : trending === "down" ? " ↘" : "";
  return `${base}${arrow}`;
}

export default function PlayerCard({ player: p }: Props) {
  return (
    <Link
      href={`/watchlist/${p.id}`}
      className="group block rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/[0.07]"
    >
      {/* Top row: Stars + Class */}
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.22em] text-white/70">
          {starsToText(p.stars, p.trending)}
        </div>

        <span className="text-[11px] font-semibold tracking-wider text-white/55">
          {p.classYear}
        </span>
      </div>

      {/* Name + School */}
      <h3 className="mt-2 text-xl font-semibold leading-tight">{p.name}</h3>
      <p className="mt-1 text-sm text-white/70">
        {p.school} • {p.state}
      </p>

      {/* Height / Position */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-sm">
          {p.height}
        </span>

        <span className="text-sm text-white/70">{p.position}</span>
      </div>

      {/* Commit */}
      {p.commit ? (
        <p className="mt-3 text-xs text-white/70">
          College: <span className="text-white">{p.commit}</span>
        </p>
      ) : null}

      {/* Summary */}
      {p.summary ? (
        <p className="mt-3 text-sm text-white/70 line-clamp-3">{p.summary}</p>
      ) : null}

      {/* Strength tags */}
      {p.strengths?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.strengths.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {/* Stats */}
      {p.stats ? <p className="mt-4 text-xs text-white/60">{p.stats}</p> : null}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-white/50">
        <span className="uppercase tracking-[0.22em]">Open Profile</span>
        <span className="opacity-0 transition group-hover:opacity-100">→</span>
      </div>
    </Link>
  );
}
