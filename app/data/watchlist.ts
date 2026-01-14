// /data/watchlist.ts

export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number;          // 0–5
  summary?: string;       // optional scouting blurb
  tags?: string[];        // ✅ add this (fixes your [id] error)
};

export const watchlist: WatchlistPlayer[] = [
  // keep your list here
];
