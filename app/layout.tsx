import "./globals.css";

export const metadata = {
  title: "NCP Hoops",
  description: "No Cherry Picking",
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
