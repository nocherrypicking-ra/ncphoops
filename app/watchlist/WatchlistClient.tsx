"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Player } from "./_data/watchlist";

function Stars({ stars }: { stars: number }) {
  if (stars <= 0) return null;

  return (
    <div className="flex text-yellow-400 text-sm">
      {Array.from({ length: stars }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
};

function Select({
  label,
  value,
  onChange,
  options,
}: SelectProps) {
    <label className="block">
      <span className="block mb-2 text-[11px] uppercase tracking-widest text-gray-400">
        {label}
      </span>

     <select
  value={value}
  onChange={(e) => onChange(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white"
>
  {options.map((o) => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ))}
</select>
    </label>
  );
}

export default function WatchlistClient({
  data,
}: {
  data: Player[];
}) {
  const [search, setSearch] = useState("");
  const [stars, setStars] = useState("all");
  const [state, setState] = useState("all");
  const [classYear, setClassYear] = useState("all");
  const [position, setPosition] = useState("all");

  const PER_PAGE = 12;

  const [page, setPage] = useState(1);

  const states = useMemo(() => {
    return [...new Set(data.map((p) => p.state))].sort();
  }, [data]);

  const classes = useMemo(() => {
    return [...new Set(data.map((p) => p.classYear))].sort(
      (a, b) => a - b
    );
  }, [data]);

  const positions = useMemo(() => {
    return [...new Set(data.map((p) => p.position))].sort();
  }, [data]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return data
      .filter((p) => {
        if (
          q &&
          !(
            p.name.toLowerCase().includes(q) ||
            p.school.toLowerCase().includes(q) ||
            p.state.toLowerCase().includes(q)
          )
        )
          return false;

        if (stars !== "all" && p.stars !== Number(stars))
          return false;

        if (state !== "all" && p.state !== state)
          return false;

        if (
          classYear !== "all" &&
          p.classYear !== Number(classYear)
        )
          return false;

        if (
          position !== "all" &&
          p.position !== position
        )
          return false;

        return true;
      })
      .sort((a, b) => {
        if (b.stars !== a.stars)
          return b.stars - a.stars;

        if (a.classYear !== b.classYear)
          return a.classYear - b.classYear;

        return a.name.localeCompare(b.name);
      });
  }, [
    data,
    search,
    stars,
    state,
    classYear,
    position,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PER_PAGE)
  );

  const currentPage = clamp(page, 1, totalPages);

  useEffect(() => {
    setPage(1);
  }, [search, stars, state, classYear, position]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, currentPage]);
  const reset = () => {
    setSearch("");
    setStars("all");
    setState("all");
    setClassYear("all");
    setPosition("all");
    setPage(1);
  };

    <div className="min-h-screen bg-[#070707] text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-14">

        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400">
            NOCHERRYPICKING
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            NCP <span className="text-yellow-400">Watchlist</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-gray-400">
            Filter by stars, state, class and position. Click any player to
            view their complete profile.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="grid gap-4 md:grid-cols-12">

            <div className="md:col-span-4">
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-widest text-gray-400">
                  Search
                </span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Player, school, state..."
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white"
                />
              </label>
            </div>

            <div className="md:col-span-2">
              <Select
                label="Stars"
                value={stars}
                onChange={setStars}
                options={[
                  { label: "All", value: "all" },
                  { label: "5 Star", value: "5" },
                  { label: "4 Star", value: "4" },
                  { label: "3 Star", value: "3" },
                  { label: "2 Star", value: "2" },
                  { label: "1 Star", value: "1" },
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="State"
                value={state}
                onChange={setState}
                options={[
                  { label: "All", value: "all" },
                  ...states.map((s) => ({
                    label: s,
                    value: s,
                  })),
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Class"
                value={classYear}
                onChange={setClassYear}
                options={[
                  { label: "All", value: "all" },
                  ...classes.map((c) => ({
                    label: String(c),
                    value: String(c),
                  })),
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Position"
                value={position}
                onChange={setPosition}
                options={[
                  { label: "All", value: "all" },
                  ...positions.map((p) => ({
                    label: p,
                    value: p,
                  })),
                ]}
              />
            </div>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <div className="text-sm text-gray-400">
              <span className="font-semibold text-yellow-400">
                {filtered.length}
              </span>{" "}
              Players
            </div>

            <button
              onClick={reset}
              className="rounded-xl border border-white/10 px-4 py-2 hover:border-yellow-400"
            >
              Reset
            </button>

          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {pageItems.map((p) => (

            <Link
              key={p.id}
              href={`/watchlist/${p.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-yellow-400"
            >
              <Stars stars={p.stars} />

              <h3 className="mt-3 text-lg font-semibold">
                {p.name}
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                {p.height} • {p.position}
              </p>

              <p className="text-sm text-gray-500">
                {p.school}
              </p>

              <p className="text-xs text-gray-500">
                {p.state} • {p.classYear}
              </p>

              {p.college !== "" && (
                <p className="mt-2 text-sm text-yellow-400">
                  {p.college}
                </p>
              )}

              <div className="mt-4 text-sm text-yellow-400">
                View Profile →
              </div>

            </Link>

          ))}

        </div>
                <div className="mt-10 flex items-center justify-between">

          <button
            disabled={currentPage === 1}
            onClick={() => setPage((p) => clamp(p - 1, 1, totalPages))}
            className="rounded-xl border border-white/10 px-4 py-2 disabled:opacity-40 hover:border-yellow-400"
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-10 w-10 rounded-xl border transition ${
                  currentPage === n
                    ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                    : "border-white/10 hover:border-yellow-400"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => clamp(p + 1, 1, totalPages))}
            className="rounded-xl border border-white/10 px-4 py-2 disabled:opacity-40 hover:border-yellow-400"
          >
            Next
          </button>

        </div>

        <div
          id="criteria"
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h2 className="text-2xl font-semibold">
            Watchlist{" "}
            <span className="text-yellow-400">
              Criteria
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            NCP evaluates players using long-term projection rather than
            short-term hype. Rankings are based on production, athletic
            tools, skill level, basketball IQ, competitiveness, motor,
            coachability, physical upside and overall projectability.
          </p>

          <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
            NOCHERRYPICKING • CONSTANT ELEVATION
          </p>
        </div>

      </div>
    </div>
  );
}
