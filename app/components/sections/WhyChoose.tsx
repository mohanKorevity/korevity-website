export default function WhyChoose() {
  const features = [
    {
      number: "01",
      title: "Business First",
      description:
        "Every solution starts with your business goals—not technology. We solve problems that create measurable value.",
    },
    {
      number: "02",
      title: "AI Powered",
      description:
        "We leverage modern AI to automate repetitive work, accelerate decision-making, and improve efficiency.",
    },
    {
      number: "03",
      title: "Data Driven",
      description:
        "Turn scattered data into dashboards and insights that help leaders make confident decisions.",
    },
    {
      number: "04",
      title: "Scalable",
      description:
        "Our solutions grow with your business—from startups to enterprise organizations.",
    },
  ];

  return (
    <section className="bg-slate-900 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          <div>
            <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
              WHY KOREVITY
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Technology
              <br />
              That Creates
              <br />
              Business Value
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-400">
              We don't build software for the sake of technology.
              Every dashboard, workflow, and AI solution is designed
              to improve productivity, reduce costs, and create
              measurable business outcomes.
            </p>
          </div>

          <div className="space-y-8">

            {features.map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500"
              >

                <p className="text-blue-500 text-sm font-bold">
                  {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}