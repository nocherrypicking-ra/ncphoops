export type Player = {
  id: number;
  slug: string;

  // Basic Info
  name: string;
  school: string;
  city: string;
  state: string;

  // Measurements
  height: string;
  weight: number;
  position: string;

  // Recruiting
  classYear: number;
  stars: string;
  college: string;
  offers: string[];

  // Media
  image: string;
  scoutingReport: string;
};

export const players: Player[] = [
  {
    id: 1,
    slug: "trey-rhodes",

    // Basic Info
    name: "Trey Rhodes",
    school: "Arkansas High",
    city: "Texarkana",
    state: "AR",

    // Measurements
    height: "6'4",
    weight: 185,
    position: "Wing",

    // Recruiting
    classYear: 2026,
    stars: "★★★★",
    college: "Vincennes University",
    offers: [
      "Vincennes University",
      "Northwest Florida State",
      "South Arkansas",
      "Central Baptist"
    ],

    // Media
    image: "/players/trey-rhodes.jpg",

    scoutingReport:
      "Versatile wing with excellent size, athleticism and feel for the game. Impacts both ends of the floor and continues to trend upward as a college prospect.",
  },
];
