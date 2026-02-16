"use client";

import { useParams } from "next/navigation";
import { watchlist as players } from "../_data/watchlist";

export default function PlayerPage() {
  const params = useParams<{ id: string }>();
  const id = (params?.id as string) ?? "";

  const player = players.find((p) => p.id === id);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-white">
      <a href="/watchlist" className="text-sm text-yellow-400">
        ← Back to Watchlist
      </a>

      {player ? (
        <>
   <h1 className="mt-6 text-3xl font-bold">{player.name}</h1>
<div className="mt-2 text-yellow-400 text-lg">
  {"★".repeat(player.stars)}
</div>

<p className="mt-2 text-zinc-400">
  {player.height} • {player.position} • Class of {player.classYear}
</p>

<p className="mt-3 text-zinc-300">
  {player.school} • {player.state}
</p>


{/* ⬇️ PASTE THE NEW CODE RIGHT HERE ⬇️ */}

<div className="mt-10 grid md:grid-cols-3 gap-8">

  {/* LEFT – SCOUTING */}
  <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-4">
      Scouting Report
    </h2>

    <p className="text-sm text-gray-300 leading-relaxed">
      {player.summary || "Evaluation coming soon."}
    </p>
  </div>

  {/* RIGHT – PLAYER INFO */}
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
    <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-4">
      Player Info
    </h2>

    <div className="flex justify-between text-sm text-gray-300">
      <span>Height</span>
      <span className="text-white">{player.height}</span>
    </div>

    <div className="flex justify-between text-sm text-gray-300">
      <span>Position</span>
      <span className="text-white">{player.position}</span>
    </div>

    <div className="flex justify-between text-sm text-gray-300">
      <span>Class</span>
      <span className="text-white">{player.classYear}</span>
    </div>

    <div className="flex justify-between text-sm text-gray-300">
      <span>Stars</span>
      <span className="text-yellow-400">{player.stars}★</span>
    </div>

  </div>

</div>

        </>
      ) : (
        <>
          <h1 className="mt-6 text-3xl font-bold">Player not found</h1>
          <p className="mt-2 text-zinc-400">
            Looking for ID: <span className="text-yellow-400">{id || "(empty)"}</span>
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-zinc-300 mb-2">First 12 IDs in your data:</p>
            <ul className="text-xs text-zinc-400 space-y-1">
              {players.slice(0, 12).map((p) => (
                <li key={p.id}>{p.id}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
