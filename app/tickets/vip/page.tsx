"use client";

import { useState } from "react";

export default function VIP() {
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  const handleSubmit = () => {
    console.log("VIP:", form);
    alert("VIP Access Granted");
  };

  return (
    <div style={container}>
      <h1>VIP ACCESS</h1>

      <input placeholder="First Name" onChange={(e) => setForm({...form, first: e.target.value})} />
      <input placeholder="Last Name" onChange={(e) => setForm({...form, last: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />

      <button onClick={handleSubmit}>CLAIM ACCESS</button>
    </div>
  );
}
const container = {
  minHeight: "100vh",
  background: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px"
};
