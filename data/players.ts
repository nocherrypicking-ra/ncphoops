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
  height?: string
  weight?: string
  wingspan?: string
  offers?: string
  stats?: string
}

// data/players.ts

export const players: Player[] = [  {
    id: "jj-andrews",
    slug: "jj-andrews",
    name: "JJ Andrews",
    school: "Little Rock Christian",
    state: "AR",
    classYear: 2026,
    position: "G/F",
    stars: 5,
image: "/placeholder.jpg.webp",
    summary:
  "JJ Andrews is a once-in-a-class, physical scoring wing who immediately sets the tone whenever he steps on the floor. At 6’7 with a 7-foot wingspan and a frame built like a grown man, he dominates downhill, finishes through traffic, and rises for emphatic dunks that change the momentum of a game. His perimeter shot is coming along smoothly (36% 3PT, 72% FT), making him a multi-dimensional scoring threat. Defensively, Andrews is long, aggressive, and versatile — disrupting passing lanes, switching across positions, and consistently elevating his team’s energy. He combines intelligence, effort, and elite physical tools to impact every possession. A University of Arkansas signee, JJ blends strength, athleticism, skill, and an unstoppable mentality, solidifying his spot as the premier prospect in the 2026 class.",
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
image: "/placeholder.jpg.webp",
    summary:
      "Versatile frontcourt piece with size and skill. Reliable production and strong two-way presence.",
  },
]
