// data/players.ts

export type Player = {
  name: string
  slug: string
  school?: string
  state?: string
  classYear?: number
  position?: string
  stars?: number
  image?: string
  summary?: string
  college?: string
}

export const players: Player[] = [
  {
    name: "JJ Andrews",
    slug: "jj-andrews",
    school: "Little Rock Christian",
    state: "AR",
    classYear: 2026,
    position: "G/F",
    stars: 5,
    image: "/players/jj-andrews.jpg",
    summary:
      "Physical scoring wing who sets the tone. Downhill force, finishes through traffic, and brings disruptive defensive energy.",
    college: "Arkansas",
  },
  {
    name: "Ethan Sheats",
    slug: "ethan-sheats",
    school: "Denton HS",
    state: "TX",
    classYear: 2026,
    position: "F/C",
    stars: 5,
    image: "/players/ethan-sheats.jpg",
    summary:
      "Versatile frontcourt piece with size and skill. Reliable production and strong two-way presence.",
  },
]
