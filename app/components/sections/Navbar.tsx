export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-5 max-w-7xl px-6">

        <nav className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/70 px-8 py-4 backdrop-blur-xl">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-black text-white">
              K
            </div>

            <div>

              <h1 className="text-xl font-bold text-white">
                KoreVity
              </h1>

              <p className="text-xs text-slate-400">
                Business Intelligence & AI Automation
              </p>

            </div>

          </div>

          {/* Navigation */}

          <div className="hidden items-center gap-10 text-sm font-medium text-slate-300 lg:flex">

            <a href="#" className="transition-colors hover:text-blue-400">
              Home
            </a>

            <a href="#services" className="transition-colors hover:text-blue-400">
              Services
            </a>

            <a href="#" className="transition-colors hover:text-blue-400">
              Solutions
            </a>

            <a href="#" className="transition-colors hover:text-blue-400">
              About
            </a>

            <a href="#" className="transition-colors hover:text-blue-400">
              Contact
            </a>

          </div>

          {/* CTA */}

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]">
            Book Demo
          </button>

        </nav>

      </div>
    </header>
  );
}