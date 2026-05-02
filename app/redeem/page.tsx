export default function RedeemPage() {
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
      <h1 style={{ marginBottom: "20px" }}>REDEEM TICKET</h1>

      <input
        type="text"
        placeholder="Enter Code"
        style={{
          padding: "12px",
          width: "250px",
          marginBottom: "15px",
          textAlign: "center",
          background: "black",
          border: "1px solid white",
          color: "white"
        }}
      />

      <button style={{
        padding: "12px 24px",
        background: "white",
        color: "black",
        border: "none",
        cursor: "pointer"
      }}>
        REDEEM
      </button>
    </div>
  );
}
