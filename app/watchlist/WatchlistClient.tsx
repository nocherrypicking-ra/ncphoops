"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { WatchlistPlayer } from "./_data/watchlist";

type Props = {
  data: WatchlistPlayer[];
};

export default function WatchlistClient({ data }: Props) {
  const [q, setQ] = useState("");
  const [stars, setStars] = useState<"all" | 1 | 2 | 3 | 4 | 5>("all");
  const [state, setState] = useState("all");
  const [classYear, setClassYear] = useState("all");
  const [position, setPosition] = useState("all");

  const states = useMemo(() => {
    const set = new Set<string>();
    data.forEach((p) => set.add(p.state));
    return ["all", ...Array.from(set).sort()];
  }, [data]);

  const classYears = useMemo(() => {
    const set = new Set<string>();
    data.forEach((p) => set.add(p.classYear));
    return ["all", ...Array.from(set).sort()];
  }, [data]);

  const positions = useMemo(() => {
    const set = new Set<string>();
    data.forEach((p) => set.add(p.position));
    return ["all", ...Array.from(set).sort()];
  }, [data]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return data.filter((p) => {
      const matchQuery =
        query.length === 0
          ? true
          : `${p.name} ${p.school} ${p.state}`.toLowerCase().includes(query);

      const matchStars = stars === "all" ? true : p.stars === stars;
      const matchState = state === "all" ? true : p.state === state;
      const matchClass = classYear === "all" ? true : p.classYear === classYear;
      const matchPos = position === "all" ? true : p.position === position;

      return matchQuery && matchStars && matchState && matchClass && matchPos;
    });
  }, [data, q, stars, state, classYear, position]);

  function reset() {
    setQ("");
    setStars("all");
    setState("all");
    setClassYear("all");
    setPosition("all");
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, school, state..."
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-zinc-600 md:max-w-md"
        />

        <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto md:flex-1 md:flex-row">
          <select
            value={stars}
            onChange={(e) =>
              setStars(e.target.value === "all" ? "all" : (Number(e.target.value) as 1 | 2 | 3 | 4 | 5))
            }
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Stars</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All States</option>
            {states
              .filter((s) => s !== "all")
              .map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>

          <select
            value={classYear}
            onChange={(e) => setClassYear(e.target.value)}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Class</option>
            {classYears
              .filter((y) => y !== "all")
              .map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
          </select>

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Pos</option>
            {positions
              .filter((p) => p !== "all")
              .map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
          </select>
        </div>

        <div className="flex items-center justify-between gap-3 md:justify-end">
          <div className="text-sm text-zinc-300">{filtered.length} players</div>
          <button
            onClick={reset}
            className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/watchlist/${p.id}`}
            className="block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 shadow-sm transition hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs tracking-wide text-zinc-400">
                  {"★".repeat(p.stars)}
                </div>
                <div className="mt-1 text-lg font-semibold leading-tight">
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-zinc-400">
                  {p.height} • {p.position}
                </div>
              </div>

              <div className="text-right text-sm text-zinc-300">
                <div className="font-medium text-white">{p.state}</div>
                <div className="text-zinc-400">{p.classYear}</div>
              </div>
            </div>

            <div className="mt-3 text-sm text-zinc-300">
              <div className="font-medium text-white">{p.school}</div>
            </div>

            {p.summary ? (
              <div className="mt-3 text-xs text-zinc-300">{p.summary}</div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
