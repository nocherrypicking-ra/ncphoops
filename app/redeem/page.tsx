"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RedeemPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
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
      setError("INVALID CODE");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px"
      }}
    >
      <input
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          setError("");
        }}
        placeholder="ENTER CODE"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleRedeem();
        }}
        style={{
          padding: "14px",
          width: "260px",
          textAlign: "center",
          backgroundColor: "black",
          border: "1px solid white",
          color: "white",
          letterSpacing: "2px",
          outline: "none"
        }}
      />

      <button
        onClick={handleRedeem}
        style={{
          padding: "12px 30px",
          backgroundColor: "transparent",
          color: "#FFD700",
          border: "1px solid #FFD700",
          cursor: "pointer",
          letterSpacing: "2px"
        }}
      >
        REDEEM
      </button>

      {error && (
        <p
          style={{
            color: "red",
            fontSize: "14px",
            letterSpacing: "1px"
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
