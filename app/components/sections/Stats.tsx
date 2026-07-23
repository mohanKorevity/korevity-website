import SectionTitle from "../ui/SectionTitle";

export default function Stats() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "AI Automation" },
    { value: "10x", label: "Faster Insights" },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="OUR IMPACT"
          title="Numbers That Matter"
          description="Helping organizations leverage AI and Business Intelligence to achieve measurable business outcomes."
        />

        <div className="mt-20 grid gap-8 grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center"
            >
              <h3 className="text-5xl font-black text-blue-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}