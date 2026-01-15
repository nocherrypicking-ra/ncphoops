import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NCP Hoops",
  description: "No Cherry Picking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070707] text-white">
        {/* NAV BAR */}
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="text-[11px] tracking-[0.35em] uppercase text-gray-300"
            >
              NOCHERRYPICKING
            </Link>

            <nav className="flex items-center gap-10">
              <Link href="/watchlist" className="nav-link">WATCHLIST</Link>
              <Link href="/media" className="nav-link">MEDIA</Link>
              <Link href="/aau" className="nav-link">AAU</Link>
              <Link href="/training" className="nav-link">TRAINING</Link>
              <Link href="/about" className="nav-link">ABOUT</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-7xl px-6 py-8 text-xs text-gray-500">
            © {new Date().getFullYear()} No Cherry Picking
          </div>
        </footer>
      </body>
    </html>
  );
}
