import { notFound } from "next/navigation"
import { watchlist as players } from "../_data/watchlist"

export default function PlayerPage({ params }: { params: { id: string } }) {
const player = players.find((p) => p.id === params.id)

  if (!player) return notFound()

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-3xl font-bold">{player.name}</h1>
      <p className="text-zinc-400">
{player.height} • {player.position} • Class of {player.classYear}
      </p>
    </div>
  )
}
