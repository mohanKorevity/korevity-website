export default function TrustedBy() {
  const industries = [
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Retail",
    "Logistics",
    "Professional Services",
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm uppercase tracking-[4px] text-slate-500">
          Built for Modern Businesses
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-slate-800 bg-slate-900 py-5 text-center font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}