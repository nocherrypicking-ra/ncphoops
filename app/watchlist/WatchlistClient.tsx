"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number; // 1–5
  summary?: string;
};

function Stars({ n }: { n: number }) {
  const count = Math.max(0, Math.min(5, n || 0));
  const opacity =
    count >= 5 ? "opacity-100" : count === 4 ? "opacity-90" : count === 3 ? "opacity-75" : "opacity-60";

  return (
    <div className={`flex items-center gap-0.5 text-yellow-400 ${opacity}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="drop-shadow-[0_0_10px_rgba(250,204,21,0.35)]">★</span>
      ))}
      {count === 0 && <span className="text-gray-600">—</span>}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-gray-400 mb-2">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white
                   focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#0b0b0b]">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function WatchlistClient({ data }: { data: WatchlistPlayer[] }) {
  const [q, setQ] = useState("");
  const [star, setStar] = useState<number | "all">("all");
  const [state, setState] = useState("all");
  const [classYear, setClassYear] = useState("all");
  const [position, setPosition] = useState("all");

  // Pagination
  const PER_PAGE = 12;
  const [page, setPage] = useState(1);

  const states = useMemo(() => {
    const s = Array.from(new Set(data.map((p) => p.state).filter(Boolean)));
    return s.sort((a, b) => a.localeCompare(b));
  }, [data]);

  const classes = useMemo(() => {
    const s = Array.from(new Set(data.map((p) => p.classYear).filter(Boolean)));
    return s.sort((a, b) => Number(a) - Number(b));
  }, [data]);

  const positions = useMemo(() => {
    const s = Array.from(new Set(data.map((p) => p.position).filter(Boolean)));
    return s.sort((a, b) => a.localeCompare(b));
  }, [data]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return data
      .filter((p) => {
        const matchQuery =
          !query ||
          (p.name || "").toLowerCase().includes(query) ||
          (p.school || "").toLowerCase().includes(query) ||
          (p.state || "").toLowerCase().includes(query);

        const matchStar = star === "all" ? true : p.stars === star;
        const matchState = state === "all" ? true : p.state === state;
        const matchClass = classYear === "all" ? true : p.classYear === classYear;
        const matchPos = position === "all" ? true : p.position === position;

        return matchQuery && matchStar && matchState && matchClass && matchPos;
      })
      .sort((a, b) => {
        if (b.stars !== a.stars) return b.stars - a.stars;
        const ay = Number(a.classYear);
        const by = Number(b.classYear);
        if (!Number.isNaN(ay) && !Number.isNaN(by) && ay !== by) return ay - by;
        return (a.name || "").localeCompare(b.name || "");
      });
  }, [data, q, star, state, classYear, position]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(filtered.length / PER_PAGE)), [filtered.length]);
  const safePage = clamp(page, 1, totalPages);

  // When filters change, go back to page 1
  useEffect(() => {
    setPage(1);
  }, [q, star, state, classYear, position]);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, safePage]);

  const reset = () => {
    setQ("");
    setStar("all");
    setState("all");
    setClassYear("all");
    setPosition("all");
    setPage(1);
  };

  // Page number window like: 1 ... 4 5 6 ... 12
  const pageNumbers = useMemo(() => {
    const windowSize = 5;
    const half = Math.floor(windowSize / 2);

    let start = Math.max(1, safePage - half);
    let end = Math.min(totalPages, start + windowSize - 1);
    start = Math.max(1, end - windowSize + 1);

    const nums: number[] = [];
    for (let i = start; i <= end; i++) nums.push(i);
    return nums;
  }, [safePage, totalPages]);

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">NOCHERRYPICKING</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            NCP <span className="text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">Watchlist</span>
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            Filter by stars, state, class, and position. Click a player to view their profile.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <label className="block">
                <span className="block text-[11px] tracking-widest uppercase text-gray-400 mb-2">Search</span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Name, school, state..."
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white
                             placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                />
              </label>
            </div>

            <div className="md:col-span-2">
              <Select
                label="Stars"
                value={star === "all" ? "all" : String(star)}
                onChange={(v) => setStar(v === "all" ? "all" : Number(v))}
                options={[
                  { label: "All Stars", value: "all" },
                  { label: "5 Stars", value: "5" },
                  { label: "4 Stars", value: "4" },
                  { label: "3 Stars", value: "3" },
                  { label: "2 Stars", value: "2" },
                  { label: "1 Star", value: "1" },
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="State"
                value={state}
                onChange={setState}
                options={[{ label: "All States", value: "all" }, ...states.map((s) => ({ label: s, value: s }))]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Class"
                value={classYear}
                onChange={setClassYear}
                options={[{ label: "All Classes", value: "all" }, ...classes.map((c) => ({ label: c, value: c }))]}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Position"
                value={position}
                onChange={setPosition}
                options={[
                  { label: "All Positions", value: "all" },
                  ...positions.map((p) => ({ label: p, value: p })),
                ]}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-300">
              <span className="text-yellow-400 font-semibold">{filtered.length}</span>{" "}
              <span className="text-gray-500">/</span> {data.length} players
              <span className="text-gray-500"> · </span>
              Page <span className="text-yellow-400 font-semibold">{safePage}</span> of {totalPages}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={reset}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-200
                           hover:border-yellow-400/40 hover:text-white transition"
              >
                Reset
              </button>

              <Link href="/watchlist#criteria" className="text-sm text-yellow-400 hover:text-yellow-300 transition">
                Watchlist Criteria →
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pageItems.map((p) => (
            <Link
              key={p.id}
              href={`/watchlist/${p.id}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5
                         hover:border-yellow-400/50 hover:bg-white/[0.05] transition"
            >
              <div className="flex items-start justify-between gap-3">
                <Stars n={p.stars} />
                <span className="text-[10px] tracking-widest uppercase text-gray-500">{p.state}</span>
              </div>

              <div className="mt-3">
                <h3 className="text-lg font-semibold leading-snug group-hover:text-yellow-300 transition">{p.name}</h3>

                <p className="mt-1 text-sm text-gray-300">
                  {p.height} <span className="text-gray-500">·</span> {p.position}{" "}
                  <span className="text-gray-500">·</span> Class of {p.classYear}
                </p>

                <p className="mt-2 text-xs text-gray-400">{p.school}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-yellow-400 text-sm">
                  <span className="group-hover:underline">View profile</span>
                  <span className="opacity-80">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-400">
            Showing{" "}
            <span className="text-gray-200">
              {(safePage - 1) * PER_PAGE + 1}-{Math.min(safePage * PER_PAGE, filtered.length)}
            </span>{" "}
            of <span className="text-gray-200">{filtered.length}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              disabled={safePage <= 1}
              onClick={() => setPage((p) => clamp(p - 1, 1, totalPages))}
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-200
                         disabled:opacity-40 disabled:cursor-not-allowed hover:border-yellow-400/40 transition"
            >
              Prev
            </button>

            {safePage > 3 && (
              <>
                <button
                  onClick={() => setPage(1)}
                  className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-200 hover:border-yellow-400/40 transition"
                >
                  1
                </button>
                <span className="px-1 text-gray-600">…</span>
              </>
            )}

            {pageNumbers.map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={[
                  "rounded-xl border px-3 py-2 text-sm transition",
                  n === safePage
                    ? "border-yellow-400/60 bg-yellow-400/10 text-yellow-200"
                    : "border-white/10 bg-black/30 text-gray-200 hover:border-yellow-400/40",
                ].join(" ")}
              >
                {n}
              </button>
            ))}

            {safePage < totalPages - 2 && (
              <>
                <span className="px-1 text-gray-600">…</span>
                <button
                  onClick={() => setPage(totalPages)}
                  className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-200 hover:border-yellow-400/40 transition"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => clamp(p + 1, 1, totalPages))}
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-200
                         disabled:opacity-40 disabled:cursor-not-allowed hover:border-yellow-400/40 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Criteria Footer */}
        <div id="criteria" className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <h2 className="text-xl font-semibold">
            Watchlist <span className="text-yellow-400">Criteria</span>
          </h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            NCP Watchlist players are evaluated on production, projectable tools, motor, competition, coachability, and
            long-term upside — not hype. This list is built for real scouting eyes.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Want a player evaluated? DM <span className="text-gray-300">@NCPHoops_</span> or visit{" "}
            <span className="text-gray-300">NCPHoops.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
