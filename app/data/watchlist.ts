// app/data/watchlist.ts

export type WatchlistPlayer = {
  id: string;
  name: string;
  position: string;
  height: string;
  classYear: string;
  state: string;
  stars: number;
};

export const watchlist: WatchlistPlayer[] = [
  {
    id: "player-1",
    name: "Sample Player One",
    position: "G",
    height: "6'2",
    classYear: "2026",
    state: "TX",
    stars: 4,
  },
  {
    id: "player-2",
    name: "Sample Player Two",
    position: "F",
    height: "6'7",
    classYear: "2025",
    state: "AR",
    stars: 3,
  },
];
