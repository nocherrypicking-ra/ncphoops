export type Player = {
  id: number;
  slug: string;
  name: string;
  school: string;
  college: string;
  height: string;
  position: string;
  classYear: number;
  stars: string;
};

export const players: Player[] = [
  {
    id: 1,
    slug: "trey-rhodes",
    name: "Trey Rhodes",
    school: "Arkansas High",
    college: "Vincennes University",
    height: "6'4",
    position: "Wing",
    classYear: 2026,
    stars: "★★★★",
  },
];
