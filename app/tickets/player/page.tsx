"use client";

import { useState } from "react";

export default function PlayerPage() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    athlete: ""
  });

  const handleSubmit = () => {
    console.log("PLAYER GUEST:", form);
    alert("Player Guest Ticket Claimed");
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
        gap: "12px"
      }}
    >
      <h1>PLAYER GUEST ACCESS</h1>

      <input
        type="text"
        placeholder="First Name"
        value={form.first}
        onChange={(e) => setForm({ ...form, first: e.target.value })}
        style={{ padding: "10px", width: "250px" }}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={form.last}
        onChange={(e) => setForm({ ...form, last: e.target.value })}
        style={{ padding: "10px", width: "250px" }}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{ padding: "10px", width: "250px" }}
      />

      <input
        type="text"
        placeholder="Athlete Name"
        value={form.athlete}
        onChange={(e) => setForm({ ...form, athlete: e.target.value })}
        style={{ padding: "10px", width: "250px" }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 20px",
          backgroundColor: "white",
          color: "black",
          border: "none",
          cursor: "pointer"
        }}
      >
        CLAIM ACCESS
      </button>
    </div>
  );
}
