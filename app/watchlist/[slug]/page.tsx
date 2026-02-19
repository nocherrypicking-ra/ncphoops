import Image from "next/image"
import { notFound } from "next/navigation"
import { players } from "../../../data/players"

export default async function PlayerProfilePage({ params }: { params: any }) {
  // In some Next/Turbopack builds, params can behave like a Promise.
  const resolvedParams = await params
  const slug = resolvedParams?.slug

  const player = players.find((p: any) => p.slug === slug || p.id === slug)

  if (!player) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-[320px,1fr]">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
<div className="relative h-[260px] w-full">
            <Image
              src={player.image ?? "/players/placeholder.jpg"}
              alt={player.name}
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl text-white font-bold tracking-wide">
            {player.name}
          </h1>

          <div className="text-white/70 mt-2">
            {player.school} ({player.state}) • Class of {player.classYear} •{" "}
            {player.position}
          </div>

          <div className="mt-4 text-yellow-300 text-xl">
            {"★".repeat(player.stars ?? 0)}
            <span className="text-white/60 text-sm ml-3">
              {player.stars ?? 0}-Star
            </span>
          </div>

          {player.summary ? (
            <p className="mt-6 text-white/80 leading-relaxed">{player.summary}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
