"use client";

import { useState } from "react";

export default function Player() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    athlete: ""
  });

  const handleSubmit = () => {
    console.log("PLAYER:", form);
    alert("Player Guest Ticket Claimed");
  };

  return (
    <div style={container}>
      <h1>PLAYER GUEST ACCESS</h1>

      <input placeholder="First Name" onChange={(e) => setForm({...form, first: e.target.value})} />
      <input placeholder="Last Name" onChange={(e) => setForm({...form, last: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input placeholder="Athlete Name" onChange={(e) => setForm({...form, athlete: e.target.value})} />

      <button onClick={handleSubmit}>CLAIM ACCESS</button>
    </div>
  );
}
