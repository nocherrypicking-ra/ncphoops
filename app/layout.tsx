// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Cherry Picking | NCP Hoops",
  description: "No Cherry Picking Basketball Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL NAV */}
        <header className="nav">
          <div className="nav-inner">
            <span className="logo">NOCHERRYPICKING</span>
            <nav className="nav-links">
              <a href="/watchlist">WATCHLIST</a>
              <a href="/media">MEDIA</a>
              <a href="/events">EVENTS</a>
              <a href="/training">TRAINING</a>
              <a href="/about">ABOUT</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} No Cherry Picking</p>
        </footer>
      </body>
    </html>
  );
}
