export default function Services() {
  const services = [
    {
      title: "Business Intelligence",
      icon: "📊",
      description:
        "Interactive dashboards, KPI tracking, and data visualization to help leaders make better decisions.",
    },
    {
      title: "AI Automation",
      icon: "🤖",
      description:
        "Automate repetitive work with AI assistants, workflows, and intelligent business processes.",
    },
    {
      title: "Data Analytics",
      icon: "📈",
      description:
        "Transform raw business data into actionable insights that improve performance and profitability.",
    },
    {
      title: "Custom AI Solutions",
      icon: "🧠",
      description:
        "Tailor-made AI applications designed specifically for your business goals and operations.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            We combine Business Intelligence, Automation and Artificial
            Intelligence to help businesses scale faster while reducing
            operational complexity.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {services.map((service) => (

            <div
              key={service.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-10 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold group-hover:text-blue-400">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}