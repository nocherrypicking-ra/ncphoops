export type WatchlistPlayer = {
  slug: string;
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
    slug: "trey-rhodes",
    name: "Trey Rhodes",
    height: "6'5",
    position: "G/F",
    classYear: "2025",
    school: "Arkansas High",
    state: "AR",
    stars: 4,
  },
  {
    slug: "mj-ward",
    name: "Mahliek Ward",
    height: "6'6",
    position: "F",
    classYear: "2025",
    school: "Little Rock Central",
    state: "AR",
    stars: 4,
  },
];
