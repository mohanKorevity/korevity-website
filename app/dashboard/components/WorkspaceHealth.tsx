const services: {
  name: string;
  status: string;
  color: string;
}[] = [
  {
    name: "AI Engine",
    status: "Operational",
    color: "bg-emerald-400",
  },
  {
    name: "Knowledge Base",
    status: "Operational",
    color: "bg-emerald-400",
  },
  {
    name: "Automation",
    status: "Operational",
    color: "bg-emerald-400",
  },
  {
    name: "Analytics",
    status: "Operational",
    color: "bg-emerald-400",
  },
];

export default function WorkspaceHealth() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
      "
    >
      <h2
        className="
          text-2xl
          font-semibold
          text-white
        "
      >
        Workspace Health
      </h2>

      <div className="mt-8 space-y-4">

  {services.length === 0 ? (

    <div
      className="
        rounded-2xl
        border
        border-dashed
        border-white/10
        bg-white/5
        p-8
        text-center
      "
    >

      <p
        className="
          text-lg
          font-semibold
          text-white
        "
      >
        No services available
      </p>

      <p
        className="
          mt-2
          text-slate-500
        "
      >
        Workspace services will appear here.
      </p>

    </div>

  ) : (

    services.map((service) => (

          <div
            key={service.name}
            className="
              flex
              items-center
              justify-between

              rounded-xl

              border
              border-white/10

              bg-white/5

              px-5
              py-4
            "
          >

            <div className="flex items-center gap-3">

              <span
                className={`
                  h-3
                  w-3
                  rounded-full
                  ${service.color}
                `}
              />

              <span className="text-white">
                {service.name}
              </span>

            </div>

            <span className="text-sm text-emerald-300">
              {service.status}
            </span>

          </div>

          ))

  )}

</div>

    </section>
  );
}