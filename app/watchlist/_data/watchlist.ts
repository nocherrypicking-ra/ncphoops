// /app/watchlist/_data/watchlist.ts

export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number;     // 0–5
  summary?: string;
  tags?: string[];
};

export const watchlist: WatchlistPlayer[] = [
  // put your players here
];
