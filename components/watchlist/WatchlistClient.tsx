
"use client";

import { useMemo, useState } from "react";
import type { WatchlistPlayer } from "../../data/watchlist";
import FilterBar from "./FilterBar";
import PlayerCard from "./PlayerCard";

type Props = {
  players: WatchlistPlayer[];
};

function normalize(v: string) {
  return v.trim().toLowerCase();
}

function starRank(s: string) {
  if (s === "NR") return 0;
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

export default function WatchlistClient({ players }: Props) {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("ALL");
  const [classYear, setClassYear] = useState("ALL");
  const [position, setPosition] = useState("ALL");
  const [stars, setStars] = useState("ALL");

  const options = useMemo(() => {
    const states = Array.from(new Set(players.map((p) => p.state))).sort();
    const classes = Array.from(new Set(players.map((p) => p.classYear)))
      .sort()
      .reverse();
    const positions = Array.from(new Set(players.map((p) => p.position))).sort();
    const starsList = Array.from(new Set(players.map((p) => p.stars))).sort(
      (a, b) => starRank(b) - starRank(a)
    );

    return { states, classes, positions, starsList };
  }, [players]);

  const filtered = useMemo(() => {
    const q = normalize(search);

    return players
      .filter((p) => {
        if (state !== "ALL" && p.state !== state) return false;
        if (classYear !== "ALL" && p.classYear !== classYear) return false;
        if (position !== "ALL" && p.position !== position) return false;
        if (stars !== "ALL" && p.stars !== stars) return false;

        if (!q) return true;

        const haystack = normalize(
          `${p.name} ${p.school} ${p.state} ${p.position} ${p.classYear} ${p.height} ${p.stars}`
        );

        return haystack.includes(q);
      })
      .sort((a, b) => {
        const sd = starRank(b.stars) - starRank(a.stars);
        if (sd !== 0) return sd;

        const cd = Number(b.classYear) - Number(a.classYear);
        if (cd !== 0) return cd;

        return a.name.localeCompare(b.name);
      });
  }, [players, search, state, classYear, position, stars]);

  function clearAll() {
    setSearch("");
    setState("ALL");
    setClassYear("ALL");
    setPosition("ALL");
    setStars("ALL");
  }

  return (
    <section>
      <FilterBar
        search={search}
        onSearch={setSearch}
        state={state}
        onState={setState}
        classYear={classYear}
        onClassYear={setClassYear}
        position={position}
        onPosition={setPosition}
        stars={stars}
        onStars={setStars}
        options={options}
        onClear={clearAll}
        resultsCount={filtered.length}
        totalCount={players.length}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PlayerCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-base font-semibold">No matches found</p>
          <p className="mt-2 text-sm text-white/65">
            Try clearing filters or searching by name, school, or state.
          </p>
          <button
            onClick={clearAll}
            className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold hover:bg-white/[0.10]"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
