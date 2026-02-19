import Image from "next/image"
import { notFound } from "next/navigation"
import { players } from "../../../data/players"

export default async function PlayerProfilePage({ params }: { params: any }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug

  const player = players.find((p: any) => p.slug === slug || p.id === slug)
  if (!player) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[360px,1fr]">
        <div className="self-start w-full max-w-[360px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60">
          <div className="relative h-[420px] w-full">
            <Image
              src={player.image ?? "/players/placeholder.jpg.webp"}
              alt={player.name}
              fill
              className="object-cover"
              sizes="360px"
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

          {/* QUICK INFO BOX */}
          <div className="mt-5 max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="grid grid-cols-2 gap-y-2 text-sm text-white/80">
              {player.height && (
                <>
                  <span className="text-white/50">Height</span>
                  <span>{player.height}</span>
                </>
              )}

              {player.wingspan && (
                <>
                  <span className="text-white/50">Wingspan</span>
                  <span>{player.wingspan}</span>
                </>
              )}

              {player.position && (
                <>
                  <span className="text-white/50">Position</span>
                  <span>{player.position}</span>
                </>
              )}

              {player.classYear && (
                <>
                  <span className="text-white/50">Class</span>
                  <span>{player.classYear}</span>
                </>
              )}

              {player.college && (
                <>
                  <span className="text-white/50">Commitment</span>
                  <span className="text-yellow-300">{player.college}</span>
                </>
              )}

              {player.offers && (
                <>
                  <span className="text-white/50">Offers</span>
                  <span>{player.offers}</span>
                </>
              )}

              {player.stats && (
                <>
                  <span className="text-white/50">Stats</span>
                  <span>{player.stats}</span>
                </>
              )}
            </div>
          </div>

          {player.summary ? (
            <p className="mt-6 text-white/80 leading-relaxed">{player.summary}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
