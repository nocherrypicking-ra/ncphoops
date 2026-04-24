export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* LOGO */}
      <img
        src="/super24-logo.png"
        alt="Super 24"
        style={{
          width: "300px",
          maxWidth: "90%",
          marginBottom: "20px",
        }}
      />

      {/* TAGLINE */}
      <h1
        style={{
          marginBottom: "30px",
          letterSpacing: "2px",
        }}
      >
        4 STATES. ONE FLOOR.
      </h1>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "260px",
        }}
      >
        <a
          href="https://buytickets.at/nocherrypickingsuper24invitational2026/2173763"
          style={{
            color: "white",
            border: "1px solid white",
            padding: "12px",
            textDecoration: "none",
          }}
        >
          BUY TICKETS
        </a>

        <a
          href="YOUR_EVENTBRITE_LINK"
          style={{
            color: "white",
            border: "1px solid white",
            padding: "12px",
            textDecoration: "none",
          }}
        >
          EVENTBRITE
        </a>

        <a
          href="https://instagram.com/thesuper24_"
          style={{
            color: "white",
            marginTop: "10px",
            textDecoration: "none",
          }}
        >
          INSTAGRAM
        </a>

        <a
          href="https://twitter.com/ncphoops_"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          TWITTER
        </a>
      </div>
    </div>
  );
}
