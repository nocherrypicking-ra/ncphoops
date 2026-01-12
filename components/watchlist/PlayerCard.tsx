
"use client";

import type { WatchlistPlayer } from "../../data/watchlist";

function Stars({ value }: { value: string }) {
  if (value === "NR") {
    return (
      <span className="text-[11px] font-bold tracking-wider text-white/50">
        NOT RATED
      </span>
    );
  }

  const n = Math.max(0, Math.min(5, Number(value) || 0));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < n
              ? "text-[13px] text-[#ffd84d] drop-shadow-[0_0_6px_rgba(255,216,77,0.25)]"
              : "text-[13px] text-white/20"
          }
        >
          ★
        </span>
      ))}

      <span className="ml-2 text-[11px] font-bold tracking-wider text-white/55">
        {value}★
      </span>
    </div>
  );
}

export default function PlayerCard({ p }: { p: WatchlistPlayer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#ffd84d]/40 hover:bg-white/[0.05] transition">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#ffd84d]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="relative">
        {/* stars at top */}
        <div className="flex items-center justify-between">
          <Stars value={p.stars} />
          <span className="text-[11px] font-semibold tracking-wider text-white/55">
            {p.classYear}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-extrabold leading-tight">{p.name}</h3>

        <p className="mt-1 text-sm text-white/70">
          {p.school} <span className="text-white/35">•</span> {p.state}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <p className="text-[10px] font-semibold tracking-wider text-white/50">
              HEIGHT
            </p>
            <p className="mt-0.5 text-sm font-bold text-white/90">{p.height}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <p className="text-[10px] font-semibold tracking-wider text-white/50">
              POS
            </p>
            <p className="mt-0.5 text-sm font-bold text-white/90">
              {p.position}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <p className="text-[10px] font-semibold tracking-wider text-white/50">
              RANK
            </p>
            <p className="mt-0.5 text-sm font-bold text-white/90">
              {p.stars === "NR" ? "NR" : `${p.stars}★`}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-px w-full bg-white/10" />
          <p className="mt-3 text-xs text-white/55">
            Scouting summary coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
