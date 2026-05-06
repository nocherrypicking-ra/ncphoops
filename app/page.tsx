export default function HomePage() {
  const buttonStyle: React.CSSProperties = {
    color: "white",
    border: "1px solid rgba(255,255,255,0.6)",
    padding: "12px",
    textDecoration: "none",
    textAlign: "center",
    letterSpacing: "1px",
    fontWeight: "bold",
  };

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
      <div
        style={{
          marginBottom: "30px",
          lineHeight: "1.8",
        }}
      >
        <p
          style={{
            color: "white",
            letterSpacing: "4px",
            fontSize: "13px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          MARCH 23, 2026 • 2:00 PM
        </p>

        <p
          style={{
            color: "white",
            letterSpacing: "4px",
            fontSize: "13px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          TEXAS HIGH SCHOOL • TEXARKANA, TX
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "3px",
            fontSize: "11px",
            marginTop: "6px",
            marginBottom: 0,
          }}
        >
          4001 SUMMERHILL RD
        </p>
      </div>

      <img
        src="/super24-logo.png"
        alt="Super 24"
        style={{
          width: "300px",
          maxWidth: "90%",
          marginBottom: "20px",
        }}
      />

      <h1
        style={{
          marginBottom: "30px",
          letterSpacing: "4px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        4 STATES. ONE FLOOR.
      </h1>

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
          style={buttonStyle}
        >
          BUY TICKETS
        </a>

        <a
          href="https://www.eventbrite.com/e/ncp-super-24-invitational-tickets-1987785283292?aff=ebdssbdestsearch"
          style={buttonStyle}
        >
          EVENTBRITE
        </a>

        <a href="/redeem" style={buttonStyle}>
          REDEEM
        </a>

        <a
          href="https://instagram.com/thesuper24_"
          style={buttonStyle}
        >
          INSTAGRAM
        </a>

        <a
          href="https://twitter.com/NCPhoops_"
          style={buttonStyle}
        >
          TWITTER
        </a>
      </div>
    </div>
  );
}
