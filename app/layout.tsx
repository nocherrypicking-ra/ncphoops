import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoCherryPicking",
  description: "NCP Hoops",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070707] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
