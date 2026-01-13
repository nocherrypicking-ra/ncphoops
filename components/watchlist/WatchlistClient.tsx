// /components/watchlist/WatchlistClient.tsx
"use client";

import * as React from "react";
import type { WatchlistPlayer } from "@/data/watchlist";
import PlayerCard from "@/components/watchlist/PlayerCard";

type Props = {
  players: WatchlistPlayer[];
};

type SortKey = "stars" | "name" | "classYear";

function uniqueSorted(values: (string | number)[]) {
  return Array.from(new Set(values.filter((v) => v !== undefined && v !== null)))
    .map(String)
    .sort((a, b) => a.localeCompare(b));
}

function matchesSearch(p: WatchlistPlayer, q: string) {
  if (!q) return true;
  const s = q.toLowerCase().trim();
  const blob = [
    p.name,
    p.school,
    p.state,
    p.classYear,
    p.position,
    p.commit ?? "",
    p.summary ?? "",
    (p.strengths ?? []).join(" "),
    p.stats ?? "",
  ]
    .join(" ")
    .toLowerCase();
  return blob.includes(s);
}

function sortPlayers(list: WatchlistPlayer[], sort: SortKey) {
  const copy = [...list];

  if (sort === "stars") {
    copy.sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));
    return copy;
  }

  if (sort === "classYear") {
    copy.sort(
      (a, b) =>
        Number(a.classYear) - Number(b.classYear) ||
        (b.stars - a.stars) ||
        a.name.localeCompare(b.name)
    );
    return copy;
  }

  // name
  copy.sort((a, b) => a.name.localeCompare(b.name) || b.stars - a.stars);
  return copy;
}

export default function WatchlistClient({ players }: Props) {
  const [q, setQ] = React.useState("");
  const [state, setState] = React.useState("ALL");
  const [classYear, setClassYear] = React.useState("ALL");
  const [position, setPosition] = React.useState("ALL");
  const [stars, setStars] = React.useState<number | "ALL">("ALL");
  const [sort, setSort] = React.useState<SortKey>("stars");

  // Build filter options from data
  const stateOptions = React.useMemo(
    () => ["ALL", ...uniqueSorted(players.map((p) => p.state))],
    [players]
  );

  const classOptions = React.useMemo(() => {
    const yrs = Array.from(new Set(players.map((p) => p.classYear))).sort(
      (a, b) => Number(a) - Number(b)
    );
    return ["ALL", ...yrs];
  }, [players]);

  const posOptions = React.useMemo(
    () => ["ALL", ...uniqueSorted(players.map((p) => p.position))],
    [players]
  );

  const starsOptions = React.useMemo(() => {
    // numeric stars list (5,4,3,2,1)
    const nums = Array.from(new Set(players.map((p) => p.stars))).sort(
      (a, b) => b - a
    );
    return nums;
  }, [players]);

  const filtered = React.useMemo(() => {
    const base = players.filter((p) => {
      if (!matchesSearch(p, q)) return false;
      if (state !== "ALL" && p.state !== state) return false;
      if (classYear !== "ALL" && p.classYear !== classYear) return false;
      if (position !== "ALL" && p.position !== position) return false;
      if (stars !== "ALL" && p.stars !== stars) return false;
      return true;
    });

    return sortPlayers(base, sort);
  }, [players, q, state, classYear, position, stars, sort]);

  const clear = () => {
    setQ("");
    setState("ALL");
    setClassYear("ALL");
    setPosition("ALL");
    setStars("ALL");
    setSort("stars");
  };

  return (
    <div>
      {/* Controls */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            <span className="text-white">{filtered.length}</span> shown
          </div>
          <button
            onClick={clear}
            className="w-fit rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/50"
          >
            Reset
          </button>
        </div>

        {/* Search */}
        <div className="mt-4">
          <label className="block text-[11px] uppercase tracking-[0.22em] text-white/60">
            Search
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name, school, strengths, etc..."
            className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/40"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              State
            </p>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
            >
              {stateOptions.map((s) => (
                <option key={s} value={s} className="bg-black">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Class
            </p>
            <select
              value={classYear}
              onChange={(e) => setClassYear(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
            >
              {classOptions.map((c) => (
                <option key={c} value={c} className="bg-black">
                  {c === "ALL" ? "ALL" : `Class of ${c}`}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Position
            </p>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
            >
              {posOptions.map((p) => (
                <option key={p} value={p} className="bg-black">
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Stars
            </p>
            <select
              value={stars === "ALL" ? "ALL" : String(stars)}
              onChange={(e) =>
                setStars(e.target.value === "ALL" ? "ALL" : Number(e.target.value))
              }
              className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
            >
              <option value="ALL" className="bg-black">
                ALL
              </option>
              {starsOptions.map((n) => (
                <option key={n} value={String(n)} className="bg-black">
                  {n === 5 ? "★★★★★" : n === 4 ? "★★★★" : n === 3 ? "★★★" : n === 2 ? "★★" : "★"}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Sort
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
            >
              <option value="stars" className="bg-black">
                Stars (High → Low)
              </option>
              <option value="name" className="bg-black">
                Name (A → Z)
              </option>
              <option value="classYear" className="bg-black">
                Class (Low → High)
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PlayerCard key={p.id} player={p} />
        ))}
      </div>
    </div>
  );
}
