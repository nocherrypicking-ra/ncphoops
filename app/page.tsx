// app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* HERO / SPOTLIGHT */}
      <section className="section hero">
        <h1>SPOTLIGHT CONTENT</h1>
        <p>Event • Player of the Month • Feature</p>
        <div className="hero-box">FEATURED SPOTLIGHT</div>
      </section>

      {/* FEATURED CONTENT */}
      <section className="section">
        <h2>FEATURED CONTENT</h2>
        <div className="grid-4">
          <div className="card">CONTENT</div>
          <div className="card">CONTENT</div>
          <div className="card">CONTENT</div>
          <div className="card">CONTENT</div>
        </div>
      </section>

      {/* ALL STAR */}
      <section className="section dark">
        <h2>ALL STAR 2026</h2>
        <div className="grid-4">
          <div className="card">WATCHLIST</div>
          <div className="card">WATCHLIST</div>
          <div className="card">WATCHLIST</div>
          <div className="card">WATCHLIST</div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="section">
        <h2>TRAINING CLIPS</h2>
        <div className="grid-4">
          <div className="card">TRAINING</div>
          <div className="card">TRAINING</div>
          <div className="card">TRAINING</div>
          <div className="card">TRAINING</div>
        </div>
        <button className="cta">BOOK NOW</button>
      </section>

      {/* ALUMNI */}
      <section className="section dark">
        <h2>NCP ALUMNI</h2>
        <div className="grid-4">
          <div className="card">ALUMNI</div>
          <div className="card">ALUMNI</div>
          <div className="card">ALUMNI</div>
          <div className="card">ALUMNI</div>
        </div>
      </section>
    </>
  );
}
