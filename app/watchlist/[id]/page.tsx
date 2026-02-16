import { notFound } from "next/navigation"
import players from "@/data/watchlist" // ← wherever your player data lives

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = players.find(
    (p) => p.slug === params.id
  )

  if (!player) return notFound()

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-3xl font-bold">{player.name}</h1>
      <p className="text-zinc-400">
        {player.height} • {player.position} • Class of {player.class}
      </p>
    </div>
  )
}
