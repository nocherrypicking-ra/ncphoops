"use client";

import { useMemo, useState } from "react";

export default function ShareBar({ label }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    // Works on Vercel + local
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const title = label ? `NCP Watchlist • ${label}` : "NCP Watchlist";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {}
    }
  };

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: title, url });
      } else {
        // If share isn't supported, just copy
        await copyLink();
      }
    } catch {
      // user canceled or share failed — do nothing
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
      <button
        onClick={copyLink}
        className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-200
                   hover:border-yellow-400/40 hover:text-white transition"
      >
        {copied ? "Copied ✓" : "Copy Link"}
      </button>

      <button
        onClick={share}
        className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300
                   hover:bg-yellow-400/15 transition"
      >
        Share
      </button>
    </div>
  );
}
