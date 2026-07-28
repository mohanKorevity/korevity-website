import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6">

      <h1 className="text-8xl font-black">404</h1>

      <h2 className="mt-6 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-center text-slate-400">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition"
      >
        Back Home
      </Link>

    </main>
  );
}