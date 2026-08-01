"use client";

export default function WorkflowsDashboard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
      "
    >
      <h1 className="text-3xl font-bold text-white">
        Workflow Automation
      </h1>

      <p className="mt-3 text-slate-400">
        Build, automate and monitor business workflows.
      </p>

      <div
  className="
    mt-8
    grid
    gap-6
    lg:grid-cols-3
  "
>

  <div
  className="
    rounded-2xl
    border
    border-white/10
    bg-slate-950/40
    p-6
    transition
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400/30
    hover:bg-cyan-400/5
  "
>
    <p className="text-sm text-slate-400">
      Active Workflows
    </p>

    <h2 className="mt-3 text-4xl font-bold text-white">
      32
    </h2>

    <p className="mt-2 text-emerald-400">
      28 Running • 4 Scheduled
    </p>
  </div>

  <div
  className="
    rounded-2xl
    border
    border-white/10
    bg-slate-950/40
    p-6
    transition
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400/30
    hover:bg-cyan-400/5
  "
>
    <p className="text-sm text-slate-400">
      Automation Health
    </p>

    <h2 className="mt-3 text-4xl font-bold text-white">
      99.8%
    </h2>

    <p className="mt-2 text-cyan-400">
      Success Rate
    </p>
  </div>

  <div
  className="
    rounded-2xl
    border
    border-white/10
    bg-slate-950/40
    p-6
    transition
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400/30
    hover:bg-cyan-400/5
  "
>
    <p className="text-sm text-slate-400">
      Pending Tasks
    </p>

    <h2 className="mt-3 text-4xl font-bold text-white">
      3
    </h2>

    <p className="mt-2 text-amber-400">
      Awaiting Execution
    </p>
  </div>

</div>
<div
  className="
    mt-10
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    Workflow Library
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Manage your automated business processes.
  </p>

  <div
    className="
      mt-6
      grid
      gap-6
      lg:grid-cols-3
    "
  >

    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <h3 className="text-lg font-semibold text-white">
        Customer Onboarding
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        CRM → Email → ERP
      </p>

      <div className="mt-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-sm text-emerald-400">
          Running
        </span>
      </div>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <h3 className="text-lg font-semibold text-white">
        Invoice Processing
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Email → AI → ERP
      </p>

      <div className="mt-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-sm text-emerald-400">
          Running
        </span>
      </div>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <h3 className="text-lg font-semibold text-white">
        Inventory Alerts
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        ERP → Teams
      </p>

      <div className="mt-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-amber-400" />

        <span className="text-sm text-amber-400">
          Scheduled
        </span>
      </div>
    </div>

  </div>

</div>
<div className="mt-10">

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    Recent Executions
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Latest workflow activity across your business.
  </p>

  <div
    className="
      mt-6
      rounded-2xl
      border
      border-white/10
      bg-slate-950/40
      divide-y
      divide-white/10
    "
  >

    {[
      {
        name: "Customer Onboarding",
        status: "Completed",
      },
      {
        name: "Lead Qualification",
        status: "Completed",
      },
      {
        name: "AI Invoice Parser",
        status: "Running",
      },
      {
        name: "Inventory Alert",
        status: "Scheduled",
      },
    ].map((item) => (

      <div
        key={item.name}
        className="
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >

        <div>

          <h3
            className="
              font-medium
              text-white
            "
          >
            {item.name}
          </h3>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Workflow Execution
          </p>

        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold

            ${
              item.status === "Completed"
                ? "bg-emerald-400/20 text-emerald-300"
                : item.status === "Running"
                ? "bg-cyan-400/20 text-cyan-300"
                : "bg-amber-400/20 text-amber-300"
            }
          `}
        >
          {item.status}
        </span>

      </div>

    ))}

  </div>

</div>
    </div>
  );
}