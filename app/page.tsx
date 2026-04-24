export default function HomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <img 
        src="/super24-logo.png" 
        alt="Super 24" 
        style={{ width: "300px", marginBottom: "20px" }} 
      />

      <h1 style={{ marginBottom: "30px" }}>
        4 STATES. ONE FLOOR.
      </h1>

      <a href="https://instagram.com/ncphoops_" style={{ margin: "10px", color: "white" }}>
        INSTAGRAM
      </a>

      <a href="https://twitter.com/NCPhoops_" style={{ margin: "10px", color: "white" }}>
        TWITTER
      </a>

    </div>
  );
}
