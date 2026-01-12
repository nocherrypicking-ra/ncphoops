// app/watchlist/page.tsx
import { watchlist } from "@/data/watchlist";
import WatchlistClient from "@/components/watchlist/WatchlistClient";

export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            WATCHLIST
          </h1>

          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/75">
            No Cherry Picking evaluates players with context, consistency, and long-term projection.
            Rankings reflect real evaluation — not hype.
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />
        </header>

        <WatchlistClient players={watchlist} />

        <footer className="mt-16 pt-10 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} No Cherry Picking
        </footer>
      </div>
    </main>
  );
}
