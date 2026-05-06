"use client";

import { useState } from "react";

export default function GAPlusTicketPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          ticketType: "GA+",
        }),
      });

      if (response.ok) {
        setSuccess(true);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <h1 className="text-5xl font-bold mb-2 text-center">
          GA+
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Claim your premium Super 24 access.
        </p>

        {success ? (
          <div className="bg-green-600 rounded-xl p-6 text-center">
            Ticket request submitted successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black transition rounded-xl py-4 font-semibold"
            >
              {loading ? "SUBMITTING..." : "CLAIM TICKET"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
