import { watchlist as players } from "../_data/watchlist";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const id = params?.id ?? "";
  const player = players.find((p) => p.id === id);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-white">
      <a href="/watchlist" className="text-sm text-yellow-400">← Back to Watchlist</a>

      {player ? (
        <>
          <h1 className="mt-6 text-3xl font-bold">{player.name}</h1>
          <p className="mt-2 text-zinc-400">
            {player.height} • {player.position} • Class of {player.classYear}
          </p>
          <p className="mt-3 text-zinc-300">{player.school} • {player.state}</p>
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
