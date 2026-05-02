"use client";

import { useState } from "react";

export default function GAPlusPage() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);

 const handleSubmit = async () => {
  setLoading(true);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxFe1HkhpGpTyQ98kC_YlNT5gBEJyKkZ-kuPAlHDo6AD83OjSo60JBlenYMClisQxID/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first: form.first,
        last: form.last,
        email: form.email,
        type: "GA"
      }),
    });

    alert("Ticket Claimed ✅");

    setForm({
      first: "",
      last: "",
      email: ""
    });

  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

      alert("GA+ Ticket Claimed ✅");

      setForm({ first: "", last: "", email: "" });

    } catch (err) {
      console.error(err);
      alert("Error claiming ticket ❌");
    }

    setLoading(false);
  };

  return (
    <div style={container}>
      <h1>GA+ ACCESS</h1>

      <input placeholder="First Name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} />
      <input placeholder="Last Name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <button onClick={handleSubmit} disabled={loading} style={buttonStyle}>
        {loading ? "SUBMITTING..." : "CLAIM TICKET"}
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

const buttonStyle = {
  padding: "12px 28px",
  backgroundColor: "transparent",
  color: "#FFD700",
  border: "1px solid #FFD700",
  cursor: "pointer",
  letterSpacing: "2px",
  marginTop: "10px"
};
