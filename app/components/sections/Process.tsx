import SectionTitle from "../ui/SectionTitle";

export default function Process() {
  const steps = [
    "Discover",
    "Design",
    "Develop",
    "Deploy",
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="OUR PROCESS"
          title="How We Work"
          description="A structured process that ensures every AI and Business Intelligence project delivers measurable value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}