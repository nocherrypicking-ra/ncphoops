"use client";

import { useState } from "react";

export default function PlayerPage() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    athlete: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxFe1HkhpGpTyQ98kC_YlNT5gBEJyKkZ-kuPAlHDo6AD83OjSo60JBlenYMClisQxID/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first: form.first,
          last: form.last,
          email: form.email,
          athlete: form.athlete,
          type: "PLAYER"
        })
      });

      alert("Player Guest Ticket Claimed 🏀");

      setForm({
        first: "",
        last: "",
        email: "",
        athlete: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error submitting form ❌");
    }

    setLoading(false);
  };

  return (
    <div style={container}>
      <h1>PLAYER GUEST ACCESS</h1>

      <input
        type="text"
        placeholder="First Name"
        value={form.first}
        onChange={(e) => setForm({ ...form, first: e.target.value })}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={form.last}
        onChange={(e) => setForm({ ...form, last: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Athlete Name"
        value={form.athlete}
        onChange={(e) => setForm({ ...form, athlete: e.target.value })}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "SUBMITTING..." : "CLAIM ACCESS"}
      </button>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  gap: "12px"
};
