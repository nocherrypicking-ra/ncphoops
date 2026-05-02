"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RedeemPage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleRedeem = () => {
    const validCodes = ["SUPER24VIP", "NCPFREE", "COURTSIDE24"]; // YOU CONTROL THESE

    if (validCodes.includes(code.toUpperCase())) {
      router.push("/free-tickets");
    } else {
      alert("Invalid Code");
    }
  };

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
      <h1 style={{ marginBottom: "20px" }}>REDEEM ACCESS</h1>

      <input
        type="text"
        placeholder="ENTER CODE"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          padding: "12px",
          width: "260px",
          marginBottom: "15px",
          textAlign: "center",
          background: "black",
          border: "1px solid white",
          color: "white",
          letterSpacing: "2px"
        }}
      />

      <button onClick={handleRedeem} style={{
        padding: "12px 30px",
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
