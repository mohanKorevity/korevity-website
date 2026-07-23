export default function Stats() {

  const stats = [
    {
      value: "50+",
      label: "Business Processes Automated",
    },
    {
      value: "30%",
      label: "Average Productivity Improvement",
    },
    {
      value: "24/7",
      label: "AI-Powered Automation",
    },
    {
      value: "100%",
      label: "Tailored Business Solutions",
    },
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
            RESULTS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Built for Measurable Impact
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400">
            We focus on delivering real business outcomes through AI,
            automation, and data intelligence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center transition hover:border-blue-500 hover:-translate-y-2"
            >

              <h3 className="text-5xl font-black text-blue-500">
                {item.value}
              </h3>

              <p className="mt-5 text-slate-400 leading-7">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}