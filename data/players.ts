// data/players.ts

export type Player = {
  id: string
  slug: string
  name: string
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
    id: "jj-andrews",
    slug: "jj-andrews",
    name: "JJ Andrews",
    school: "Little Rock Christian",
    state: "AR",
    classYear: 2026,
    position: "G/F",
    stars: 5,
    image: "/players/placeholder.jpg",
    summary:
      "Physical scoring wing who sets the tone. Downhill force, finishes through traffic, and brings disruptive defensive energy.",
    college: "Arkansas",
  },
  {
    id: "ethan-sheats",
    slug: "ethan-sheats",
    name: "Ethan Sheats",
    school: "Denton HS",
    state: "TX",
    classYear: 2026,
    position: "F/C",
    stars: 5,
    image: "/players/placeholder.jpg",
    summary:
      "Versatile frontcourt piece with size and skill. Reliable production and strong two-way presence.",
  },
]
