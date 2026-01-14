export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number;
  summary?: string;
};

export const watchlist: WatchlistPlayer[] = [
  // your players
];
{
  id: "test-player-2026",
  name: "Test Player",
  height: "6'4",
  position: "G/F",
  classYear: "2026",
  school: "Test HS",
  state: "TX",
  stars: 4,
  summary: "If you can see me, the watchlist data is loading correctly."
},
