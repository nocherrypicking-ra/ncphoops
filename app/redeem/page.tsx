"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RedeemPage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleRedeem = () => {
    const input = code.toUpperCase().trim();

    if (input === "IVERSON") {
      router.push("/tickets/ga");

    } else if (input === "KYRIE") {
      router.push("/tickets/ga-plus");

    } else if (input === "SGA") {
      router.push("/tickets/vip");

    } else if (input === "TEAGUE") {
      router.push("/tickets/media");

    } else if (input === "JORDAN") {
      router.push("/tickets/player");

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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>REDEEM ACCESS</h1>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="ENTER CODE"
        style={{
          padding: "12px",
          margin: "10px",
          textAlign: "center"
        }}
      />

      <button onClick={handleRedeem}>
        REDEEM
      </button>
    </div>
  );
}
