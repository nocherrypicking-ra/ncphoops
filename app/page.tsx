export default function HomePage() {
  return (
    <main style={{ padding: "80px 40px", fontFamily: "sans-serif" }}>
      <section style={{ marginBottom: "120px" }}>
        <h1 style={{ fontSize: "56px", fontWeight: 800 }}>
          NO CHERRY PICKING
        </h1>
        <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "700px" }}>
          Spotlighting real development, real players, and real opportunity.
        </p>
      </section>

      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700 }}>
          SPOTLIGHT CONTENT
        </h2>
        <p>Featured events, players, and highlights.</p>
      </section>

      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700 }}>
          WATCHLIST
        </h2>
        <p>Regional players tracked by class, position, and status.</p>
      </section>

      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700 }}>
          EVENTS
        </h2>
        <p>Upcoming showcases, All-Star Games, and exposure events.</p>
      </section>

      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700 }}>
          TRAINING & DEVELOPMENT
        </h2>
        <p>Mentorship, training clips, and pricing info.</p>
      </section>

      <section>
        <h2 style={{ fontSize: "36px", fontWeight: 700 }}>
          NCP ALUMNI
        </h2>
        <p>Players who came through the NCP ecosystem.</p>
      </section>
    </main>
  );
}
