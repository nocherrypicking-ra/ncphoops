// /app/watchlist/page.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { watchlist, type WatchlistPlayer } from "@/data/watchlist";

type SortKey = "stars" | "name" | "classYear";

const STAR_LABELS: Record<number, string> = {
  5: "★★★★★",
  4: "★★★★",
  3: "★★★",
  2: "★★",
  1: "★",
};

function classLabel(y: string) {
  return `Class of ${y}`;
}

function pillClass(active: boolean) {
  return [
    "rounded-full border px-3 py-1 text-xs md:text-sm transition",
    active
      ? "bg-white text-black border-white"
      : "bg-transparent text-white border-white/20 hover:border-white/50",
  ].join(" ");
}

function safeLower(v: string) {
  return (v ?? "").toLowerCase();
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

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) =>
    a.localeCompare(b)
  );
}

function starsToText(stars: number, trending?: "up" | "down") {
  const base = STAR_LABELS[stars] ?? "★";
  const arrow = trending === "up" ? " ↗" : trending === "down" ? " ↘" : "";
  return `${base}${arrow}`;
}

export default function WatchlistPage() {
  // Filters
  const [q, setQ] = React.useState("");
  const [state, setState] = React.useState<string>("ALL");
  const [classYear, setClassYear] = React.useState<string>("ALL");
  const [stars, setStars] = React.useState<number | "ALL">("ALL");
  const [position, setPosition] = React.useState<string>("ALL");
  const [sort, setSort] = React.useState<SortKey>("stars");

  // Options from data
  const stateOptions = React.useMemo(
    () => ["ALL", ...uniqueSorted(watchlist.map((p) => p.state))],
    []
  );
  const classOptions = React.useMemo(
    () =>
      ["ALL", ...uniqueSorted(watchlist.map((p) => p.classYear)).sort((a, b) => Number(a) - Number(b))],
    []
  );
  const posOptions = React.useMemo(
    () => ["ALL", ...uniqueSorted(watchlist.map((p) => p.position))],
    []
  );

  const filtered = React.useMemo(() => {
    const base = watchlist.filter((p) => {
      if (!matchesSearch(p, q)) return false;
      if (state !== "ALL" && p.state !== state) return false;
      if (classYear !== "ALL" && p.classYear !== classYear) return false;
      if (stars !== "ALL" && p.stars !== stars) return false;
      if (position !== "ALL" && p.position !== position) return false;
      return true;
    });

    return sortPlayers(base, sort);
  }, [q, state, classYear, stars, position, sort]);

  const clearFilters = () => {
    setQ("");
    setState("ALL");
    setClassYear("ALL");
    setStars("ALL");
    setPosition("ALL");
    setSort("stars");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 md:pt-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                NCP Watchlist
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                Prospects we’re tracking.
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
                Filter by state, class, stars, and position. Click a card to open
                the profile page (slug routing).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearFilters}
                className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/50"
              >
                Reset
              </button>
              <div className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">
                {filtered.length} shown
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6">
            <label className="block text-xs uppercase tracking-[0.22em] text-white/60">
              Search
            </label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Name, school, state, strengths, etc..."
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/40"
            />
          </div>

          {/* Filters */}
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-5">
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
                    {c === "ALL" ? "ALL" : classLabel(c)}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                Stars
              </p>
              <select
                value={stars}
                onChange={(e) =>
                  setStars(e.target.value === "ALL" ? "ALL" : Number(e.target.value))
                }
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/40"
              >
                <option value="ALL" className="bg-black">
                  ALL
                </option>
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n} className="bg-black">
                    {STAR_LABELS[n]}
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

          {/* Quick Star Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Quick:
            </span>
            {(["ALL", 5, 4, 3, 2, 1] as const).map((s) => {
              const active = stars === s;
              const label =
                s === "ALL" ? "All Stars" : STAR_LABELS[s as number];
              return (
                <button
                  key={String(s)}
                  onClick={() => setStars(s)}
                  className={pillClass(active)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-white/70">No players match those filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/50"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`/watchlist/${p.id}`}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                      {starsToText(p.stars, p.trending)}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {p.school} • {p.state}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-sm">
                      {p.height}
                    </div>
                    <div className="mt-2 text-xs text-white/60">
                      {p.position} • {p.classYear}
                    </div>
                  </div>
                </div>

                {p.commit ? (
                  <p className="mt-3 text-xs text-white/70">
                    College: <span className="text-white">{p.commit}</span>
                  </p>
                ) : null}

                {p.summary ? (
                  <p className="mt-3 text-sm text-white/70 line-clamp-3">
                    {p.summary}
                  </p>
                ) : null}

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

                {p.stats ? (
                  <p className="mt-4 text-xs text-white/60">{p.stats}</p>
                ) : null}

                <div className="mt-5 flex items-center justify-between text-xs text-white/50">
                  <span className="uppercase tracking-[0.22em]">
                    Open Profile
                  </span>
                  <span className="opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Criteria link (placeholder) */}
        <div className="mt-10 text-center">
          <Link
            href="/watchlist/criteria"
            className="text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            Watchlist / Star Criteria
          </Link>
        </div>
      </section>
    </main>
  );
}
