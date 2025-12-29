// /data/watchlist.ts

export type WatchlistPlayer = {
  id: string;
  name: string;
  position: string;
  height: string;
  classYear: string;
  school: string;
  state: string;
  stars: number;
};

export const watchlist: WatchlistPlayer[] = [
  {
    id: "sample-player-1",
    name: "Sample Prospect",
    position: "G",
    height: "6'3",
    classYear: "2026",
    school: "NCP Prep",
    state: "AR",
    stars: 5,
  },
  {
    id: "sample-player-2",
    name: "Example Wing",
    position: "F",
    height: "6'6",
    classYear: "2025",
    school: "NCP Academy",
    state: "TX",
    stars: 4,
  },
];
