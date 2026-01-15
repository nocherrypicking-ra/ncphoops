export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            NO CHERRY{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
              PICKING
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Real evaluation. Real development. Real opportunity.
          </p>
          <p className="mt-3 text-sm text-gray-400 max-w-xl">
            Built for players who earn it — not skip steps.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/watchlist"
              className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 text-sm text-yellow-200
                         hover:bg-yellow-400/15 transition"
            >
              Open Watchlist →
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] h-[320px] flex items-center justify-center text-gray-500">
          HERO VIDEO / IMAGE
        </div>
      </div>

      <div className="mt-16">
        <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400">
          THE MISSION
        </p>
        <p className="mt-4 text-sm text-gray-200 max-w-4xl leading-relaxed">
          No Cherry Picking exists to evaluate players honestly, develop them intentionally,
          and provide opportunities based on production — not hype, politics, or favoritism.
        </p>
      </div>
    </div>
  );
}
