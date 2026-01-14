"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { WatchlistPlayer } from "./_data/watchlist";

function uniq(arr: string[]) {
  return Array.from(new Set(arr)).filter(Boolean).sort();
}

function StarRow({ stars }: { stars: number }) {
  const total = 5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < stars ? "text-yellow-300" : "text-zinc-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function WatchlistClient({ data }: { data: WatchlistPlayer[] }) {
  const states = uniq(data.map((p) => p.state));
  const classes = uniq(data.map((p) => p.classYear));
  const positions = uniq(data.map((p) => p.position));

  const [q, setQ] = useState("");
  const [star, setStar] = useState<number | "all">("all");
  const [state, setState] = useState("all");
  const [classYear, setClassYear] = useState("all");
  const [position, setPosition] = useState("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return data
      .filter((p) => (star === "all" ? true : p.stars === star))
      .filter((p) => (state === "all" ? true : p.state === state))
      .filter((p) => (classYear === "all" ? true : p.classYear === classYear))
      .filter((p) => (position === "all" ? true : p.position === position))
      .filter((p) => {
        if (!query) return true;
        return (
          p.name.toLowerCase().includes(query) ||
          p.school.toLowerCase().includes(query) ||
          p.state.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));
  }, [q, star, state, classYear, position, data]);

  return (
    <div>
      <div className="mb-6 grid gap-3 md:grid-cols-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, school, state…"
          className="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
        />

        <select
          value={star}
          onChange={(e) => setStar(e.target.value === "all" ? "all" : Number(e.target.value))}
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
        >
          <option value="all">All Stars</option>
          <option value="5">★★★★★ (5)</option>
          <option value="4">★★★★☆ (4)</option>
          <option value="3">★★★☆☆ (3)</option>
          <option value="2">★★☆☆☆ (2)</option>
          <option value="1">★☆☆☆☆ (1)</option>
          <option value="0">No Star (0)</option>
        </select>

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
        >
          <option value="all">All States</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <select
            value={classYear}
            onChange={(e) => setClassYear(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
          >
            <option value="all">All Classes</option>
            {classes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
          >
            <option value="all">All Pos</option>
            {positions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between text-sm text-zinc-400">
        <div>{filtered.length} players</div>
        <button
          onClick={() => {
            setQ("");
            setStar("all");
            setState("all");
            setClassYear("all");
            setPosition("all");
          }}
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/watchlist/${p.id}`}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-sm hover:border-yellow-300/40 hover:bg-zinc-900/70 transition"
          >
            <div className="flex items-center justify-between">
              <StarRow stars={p.stars} />
              <span className="text-xs text-zinc-400">{p.state}</span>
            </div>

            <div className="mt-3">
              <div className="text-lg font-semibold leading-tight">{p.name}</div>
              <div className="mt-1 text-sm text-zinc-300">
                {p.height} • {p.position}
              </div>
            </div>

            <div className="mt-3 text-sm text-zinc-400">
              <div>{p.school}</div>
              <div>Class of {p.classYear}</div>
            </div>

            {p.summary ? (
              <div className="mt-3 text-xs text-zinc-300">
                {p.summary}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
