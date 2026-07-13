export default function PlayerCard() {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-[#111111] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,.20)]">

      {/* Player Photo */}
      <div className="relative h-80 bg-neutral-700">

        {/* Stars */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 text-center text-xl tracking-widest text-yellow-400">
          ★★★★☆
        </div>

      </div>

      {/* Player Info */}
      <div className="p-5">

        <h2 className="text-2xl font-bold uppercase">
          Trey Rhodes
        </h2>

        <p className="mt-2 text-neutral-300">
          Arkansas High
        </p>

        <p className="text-neutral-400">
          6'4 | Wing
        </p>

        <p className="text-neutral-500">
          Class 2026
        </p>

        <p className="mt-5 text-center font-semibold uppercase tracking-wide text-yellow-400 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Profile →
        </p>

      </div>
    </div>
  );
}
