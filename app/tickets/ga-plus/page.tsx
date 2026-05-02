"use client";

import { useState } from "react";

export default function GAPlus() {
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  const handleSubmit = () => {
    console.log("GA+:", form);
    alert("GA+ Ticket Claimed");
  };

  return (
    <div style={container}>
      <h1>GA+ ACCESS</h1>

      <input placeholder="First Name" onChange={(e) => setForm({...form, first: e.target.value})} />
      <input placeholder="Last Name" onChange={(e) => setForm({...form, last: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />

      <button onClick={handleSubmit}>CLAIM TICKET</button>
    </div>
  );
}
