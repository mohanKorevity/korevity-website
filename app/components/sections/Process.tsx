export default function Process() {

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your business goals, pain points, and opportunities.",
    },
    {
      number: "02",
      title: "Analyze",
      description:
        "Review your data, workflows, and current systems to identify improvements.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create a tailored AI and Business Intelligence solution aligned with your objectives.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Implement the solution with minimal disruption to your operations.",
    },
    {
      number: "05",
      title: "Optimize",
      description:
        "Continuously monitor performance and improve your solution over time.",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
            OUR PROCESS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            From Strategy to Success
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400">
            Every engagement follows a structured process designed to
            deliver measurable business value.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="flex gap-8 rounded-3xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500"
            >

              <div className="text-4xl font-black text-blue-500">
                {step.number}
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-8">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}