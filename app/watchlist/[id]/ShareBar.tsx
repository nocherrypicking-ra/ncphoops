"use client";

import { useMemo, useState } from "react";

export default function ShareBar({
  slug,
  name,
  classYear,
}: {
  slug: string;
  name: string;
  classYear: string;
}) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/watchlist/${slug}`;
  }, [slug]);

  const text = `${name} • Class of ${classYear} • NCP Watchlist`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback
      prompt("Copy this link:", url);
    }
  };

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: name, text, url });
      } else {
        await copy();
      }
    } catch {
      // do nothing if user cancels share sheet
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <button
        onClick={copy}
        className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300 hover:bg-yellow-400/20 transition"
      >
        {copied ? "Copied ✅" : "Copy Profile Link"}
      </button>

      <button
        onClick={share}
        className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 hover:border-yellow-400/40 transition"
      >
        Share
      </button>
    </div>
  );
}
