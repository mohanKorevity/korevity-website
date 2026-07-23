import SectionTitle from "../ui/SectionTitle";

export default function WhyChoose() {
  const reasons = [
    {
      title: "Business First",
      description:
        "Every solution is designed to solve real business problems, not just showcase technology.",
    },
    {
      title: "AI + BI Expertise",
      description:
        "We combine Artificial Intelligence with Business Intelligence to create practical, measurable value.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Our systems are built to grow with your business without requiring complete redesigns.",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="WHY KOREVITY"
          title="Why Businesses Choose Us"
          description="We focus on delivering practical AI solutions that improve productivity, reduce costs, and drive growth."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {reason.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}