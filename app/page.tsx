export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* LOGO */}
      <img
        src="/super24-logo.png"
        alt="Super 24 Logo"
        className="w-64 md:w-80 mb-6"
      />

      {/* TAGLINE */}
      <h1 className="text-xl md:text-2xl tracking-widest mb-10">
        4 STATES. ONE FLOOR.
      </h1>

      {/* BUTTONS */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        
        <a href="https://buytickets.at/nocherrypickingsuper24invitational2026/2173763" className="border border-white py-3">
          BUY TICKETS
        </a>

        <a href="#" className="border border-white py-3">
          EVENT DETAILS
        </a>

        <a href="https://instagram.com/ncphoops_" className="border border-white py-3">
          INSTAGRAM
        </a>

        <a href="https://twitter.com/NCPhoops_" className="border border-white py-3">
          TWITTER / X
        </a>

      </div>
    </div>
  );
}
