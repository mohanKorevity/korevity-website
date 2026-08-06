export default function TrustedBy() {
  const industries = [
  "Manufacturing",
  "Healthcare",
  "Finance",
  "Retail",
  "Logistics",
  "Education",
];

  return (
    <section className="border-y border-slate-800 bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm uppercase tracking-[4px] text-slate-400">
          Helping Businesses Across Industries
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="
rounded-xl
border border-white/10
bg-white/[0.03]
py-5
text-center
font-medium
text-slate-300
transition
hover:border-cyan-400/50
hover:bg-white/[0.06]
hover:text-white
"
            >
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}