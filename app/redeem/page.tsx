"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RedeemPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRedeem = async () => {
    const input = code.toUpperCase().trim();

    let ticketType = "";
    let redirectPath = "";

    // 🎟️ CODE MAPPING
    if (input === "IVERSON") {
      ticketType = "GA";
      redirectPath = "/tickets/ga";
    } else if (input === "KYRIE") {
      ticketType = "GA+";
      redirectPath = "/tickets/ga-plus";
    } else if (input === "SGA") {
      ticketType = "VIP";
      redirectPath = "/tickets/vip";
    } else if (input === "TEAGUE") {
      ticketType = "MEDIA";
      redirectPath = "/tickets/media";
    } else if (input === "JORDAN") {
      ticketType = "PLAYER";
      redirectPath = "/tickets/player";
    } else {
      setError("INVALID CODE");
      return;
    }

    try {
      // 📩 SEND EMAIL LOG
      await fetch("/api/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: input,
          type: ticketType,
        }),
      });

      // 🚀 REDIRECT AFTER SUCCESS
      router.push(redirectPath);

    } catch (err) {
      console.error(err);
      setError("ERROR SENDING");
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
        gap: "15px",
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
          outline: "none",
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
          letterSpacing: "2px",
        }}
      >
        REDEEM
      </button>

      {error && (
        <p
          style={{
            color: "red",
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
