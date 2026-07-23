export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-3xl font-bold text-blue-500">
            KoreVity
          </h1>
        </div>

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Services
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Solutions
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-semibold">
          Book Demo
        </button>

      </div>
    </nav>
  );
}