"use client";

import { useState } from "react";

export default function Media() {
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  const handleSubmit = () => {
    console.log("MEDIA:", form);
    alert("Media Access Granted");
  };

  return (
    <div style={container}>
      <h1>MEDIA ACCESS</h1>

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
