"use client";

import React from "react";

type Options = {
  states: string[];
  classes: string[];
  positions: string[];
  starsList: string[];
};

type Props = {
  search: string;
  onSearch: (v: string) => void;

  state: string;
  onState: (v: string) => void;

  classYear: string;
  onClassYear: (v: string) => void;

  position: string;
  onPosition: (v: string) => void;

  stars: string;
  onStars: (v: string) => void;

  options: Options;

  onClear: () => void;

  resultsCount: number;
  totalCount: number;
};

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[11px] font-semibold tracking-wider text-white/55">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl border border-white/12 bg-white/[0.04] px-3 text-sm text-white outline-none focus:border-white/25"
      >
        {children}
      </select>
    </label>
  );
}

export default function FilterBar({
  search,
  onSearch,
  state,
  onState,
  classYear,
  onClassYear,
  position,
  onPosition,
  stars,
  onStars,
  options,
  onClear,
  resultsCount,
  totalCount,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold tracking-wide text-white/85">
            Filters
          </p>
          <p className="text-xs text-white/60">
            Showing{" "}
            <span className="font-semibold text-white/85">{resultsCount}</span>{" "}
            of{" "}
            <span className="font-semibold text-white/85">{totalCount}</span>
          </p>
        </div>

        <button
          onClick={onClear}
          className="h-11 w-full lg:w-auto rounded-xl border border-white/12 bg-white/[0.04] px-4 text-sm font-semibold hover:bg-white/[0.08]"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <label className="flex flex-col gap-1 lg:col-span-2">
          <span className="text-[11px] font-semibold tracking-wider text-white/55">
            SEARCH
          </span>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Name, school, state..."
            className="h-11 rounded-xl border border-white/12 bg-white/[0.04] px-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25"
          />
        </label>

        <Select label="STATE" value={state} onChange={onState}>
          <option value="ALL">All</option>
          {options.states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>

        <Select label="CLASS" value={classYear} onChange={onClassYear}>
          <option value="ALL">All</option>
          {options.classes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>

        <Select label="POSITION" value={position} onChange={onPosition}>
          <option value="ALL">All</option>
          {options.positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Select>

        <Select label="STARS" value={stars} onChange={onStars}>
          <option value="ALL">All</option>
          {options.starsList.map((s) => (
            <option key={s} value={s}>
              {s === "NR" ? "NR" : `${s}★`}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}

