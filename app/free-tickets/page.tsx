export default function FreeTickets() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ marginBottom: "20px" }}>
        FREE ACCESS UNLOCKED
      </h1>

      <p style={{ marginBottom: "25px" }}>
        You’ve been granted exclusive access.
      </p>

      <a
        href="PUT_YOUR_FREE_TICKET_LINK_HERE"
        style={{
          padding: "12px 30px",
          background: "white",
          color: "black",
          textDecoration: "none"
        }}
      >
        CLAIM YOUR TICKET
      </a>
    </div>
  );
}
