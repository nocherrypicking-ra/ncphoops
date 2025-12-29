// app/data/watchlist.ts

export type WatchlistPlayer = {
  id: string;
  name: string;
  height: string;
  position: string;
  classYear: string;
  school: string;
  state: string;
  stars: number;
};

export const watchlist: WatchlistPlayer[] = [
  {
    id: "sample-player-1",
    name: "Sample Player",
    height: "6'4",
    position: "G",
    classYear: "2026",
    school: "NCP Prep",
    state: "TX",
    stars: 4,
  },
  {
    id: "sample-player-2",
    name: "Another Prospect",
    height: "6'7",
    position: "F",
    classYear: "2025",
    school: "NCP Academy",
    state: "AR",
    stars: 3,
  },
];
