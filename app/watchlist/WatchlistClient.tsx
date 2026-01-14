"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number; // 1–5
  summary?: string; // optional (we can ignore it)
};

export default function WatchlistClient({ data }: { data: WatchlistPlayer[] }) {
  const [q, setQ] = useState("");
  const [star, setStar] = useState<number | "all">("all");
  const [state, setState] = useState("all");
  const [classYear, setClassYear] = useState("all");
  const [position, setPosition] = useState("all");

  const states = useMemo(() => {
    const s = Array.from(new Set(data.map((p) => p.state).filter(Boolean)));
    return s.sort((a, b) => a.localeCompare(b));
  }, [data]);

  const classYears = useMemo(() => {
    const y = Array.from(new Set(data.map((p) => p.classYear).filter(Boolean)));
    return y.sort((a, b) => Number(a) - Number(b));
  }, [data]);

  const positions = useMemo(() => {
    const p = Array.from(new Set(data.map((x) => x.position).filter(Boolean)));
    return p.sort((a, b) => a.localeCompare(b));
  }, [data]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return data
      .filter((p) => {
        if (star !== "all" && p.stars !== star) return false;
        if (state !== "all" && p.state !== state) return false;
        if (classYear !== "all" && p.classYear !== classYear) return false;
        if (position !== "all" && p.position !== position) return false;

        if (!query) return true;

        const hay = `${p.name} ${p.school} ${p.state} ${p.classYear} ${p.position} ${p.height}`.toLowerCase();
        return hay.includes(query);
      })
      .sort((a, b) => {
        // stars DESC, then name ASC
        if (b.stars !== a.stars) return b.stars - a.stars;
        return a.name.localeCompare(b.name);
      });
  }, [data, q, star, state, classYear, position]);

  const reset = () => {
    setQ("");
    setStar("all");
    setState("all");
    setClassYear("all");
    setPosition("all");
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, school, state..."
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-zinc-600"
          />
        </div>

        <div className="lg:col-span-2">
          <select
            value={star}
            onChange={(e) => {
              const v = e.target.value;
              setStar(v === "all" ? "all" : Number(v));
            }}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Stars</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All States</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2">
          <select
            value={classYear}
            onChange={(e) => setClassYear(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Classes</option>
            {classYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-1">
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
          >
            <option value="all">All Pos</option>
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Count + Reset */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-zinc-400">{filtered.length} players</div>
        <button
          onClick={reset}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:text-white"
        >
          Reset
        </button>
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
                <div className="text-xs tracking-widest text-zinc-400">
                  {"★".repeat(p.stars)}
                </div>
                <div className="mt-1 text-lg font-semibold leading-tight">{p.name}</div>
                <div className="mt-1 text-sm text-zinc-400">
                  {p.height} • {p.position}
                </div>
              </div>

              <div className="text-right text-sm text-zinc-300">
                <div className="font-medium text-white">{p.state}</div>
                <div className="text-zinc-400">{p.classYear}</div>
              </div>
            </div>

            <div className="mt-3 text-sm text-zinc-400">{p.school}</div>

            {/* summary optional - safe */}
            {p.summary ? (
              <div className="mt-3 text-xs text-zinc-300">{p.summary}</div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
