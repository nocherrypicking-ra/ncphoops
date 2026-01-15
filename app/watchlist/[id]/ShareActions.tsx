"use client";

import { useState } from "react";

export default function ShareActions({ label = "Share" }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const copy = async () => {
    try {
      const url = getUrl();
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: prompt
      const url = getUrl();
      window.prompt("Copy this link:", url);
    }
  };

  const share = async () => {
    const url = getUrl();

    // Web Share API (mobile + some desktops)
    // fallback to copy
    try {
      // @ts-ignore
      if (navigator.share) {
        // @ts-ignore
        await navigator.share({ title: "NCP Watchlist", text: "Player profile", url });
        return;
      }
    } catch {
      // ignore & fallback
    }

    await copy();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copy}
        className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-200
                   hover:border-yellow-400/40 hover:text-white transition"
      >
        {copied ? "Copied ✅" : "Copy Link"}
      </button>

      <button
        onClick={share}
        className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300
                   hover:bg-yellow-400/15 transition"
      >
        {label}
      </button>
    </div>
  );
}
