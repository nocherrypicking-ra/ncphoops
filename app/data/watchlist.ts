// data/watchlist.ts
export type WatchlistPlayer = {
  id: string;          // slug id
  name: string;
  height: string;      // "6'4"
  position: string;    // "PG", "G", "F", "C", "G/F", etc
  classYear: string;   // "2025", "2026"
  school: string;
  state: string;       // "AR", "TX", etc
  stars: string;       // "5", "4", "3", "2", "1", or "NR"
};

export const watchlist: WatchlistPlayer[] = [
  {
    id: "sample-player-one-2026",
    name: "Sample Player One",
    height: "6'2",
    position: "G",
    classYear: "2026",
    school: "Sample HS",
    state: "AR",
    stars: "4",
  },
  {
    id: "sample-player-two-2025",
    name: "Sample Player Two",
    height: "6'7",
    position: "F",
    classYear: "2025",
    school: "Sample HS",
    state: "TX",
    stars: "3",
  },
];
