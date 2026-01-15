import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NCP Hoops",
  description: "No Cherry Picking",
};

const nav = [
  { href: "/watchlist", label: "WATCHLIST" },
  { href: "/media", label: "MEDIA" },
  { href: "/aau", label: "AAU" },
  { href: "/training", label: "TRAINING" },
  { href: "/about", label: "ABOUT" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070707] text-white antialiased">
        {/* Global background glow */}
        <div className="pointer-events-none fixed inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.07),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
        </div>

        {/* NAV */}
        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-[11px] tracking-[0.45em] uppercase text-gray-200"
            >
              NOCHERRYPICKING
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] tracking-[0.30em] uppercase font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]
                             hover:text-yellow-300 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile quick link */}
            <div className="md:hidden">
              <Link
                href="/watchlist"
                className="text-[11px] tracking-[0.30em] uppercase font-semibold text-yellow-300"
              >
                WATCHLIST →
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="relative z-10">{children}</main>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-white/10 mt-16">
          <div className="mx-auto max-w-7xl px-6 py-8 text-xs text-gray-500">
            © {new Date().getFullYear()} No Cherry Picking
          </div>
        </footer>
      </body>
    </html>
  );
}
