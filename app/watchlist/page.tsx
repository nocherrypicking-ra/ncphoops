import { watchlist } from "@/data/watchlist";

export default function WatchlistPage() {
  return (
    <main style={{ padding: "48px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "32px" }}>
        WATCHLIST
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {watchlist.map((player) => (
          <div
            key={player.slug}
            style={{
              border: "1px solid #333",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "8px" }}>
              {"★".repeat(player.stars)}
            </div>

            <h2 style={{ fontSize: "20px", marginBottom: "6px" }}>
              {player.name}
            </h2>

            <div style={{ fontSize: "14px", opacity: 0.8 }}>
              {player.height} • {player.position}
            </div>

            <div style={{ fontSize: "14px", opacity: 0.8 }}>
              {player.school} ({player.state})
            </div>

            <div style={{ fontSize: "14px", opacity: 0.8 }}>
              Class of {player.classYear}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
