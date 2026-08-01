"use client";

const integrations = [
  "Power BI",
  "Microsoft 365",
  "Teams",
  "Outlook",
  "Excel",
  "Google Workspace",
  "Gmail",
  "Google Sheets",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Shopify",
];

export default function IntegrationsDashboard() {
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
      {/* Header */}

      <h1 className="text-3xl font-bold text-white">
        Integrations
      </h1>

      <p className="mt-3 text-slate-400">
        Connect KoreVity with your favorite business tools.
      </p>

      {/* Stats */}

      <div
        className="
          mt-8
          grid
          gap-6
          lg:grid-cols-3
        "
      >
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <p className="text-sm text-slate-400">
            Connected Apps
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            18
          </h2>

          <p className="mt-2 text-emerald-400">
            Active Integrations
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <p className="text-sm text-slate-400">
            Sync Status
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            99.9%
          </h2>

          <p className="mt-2 text-cyan-400">
            Healthy
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <p className="text-sm text-slate-400">
            Available Connectors
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            250+
          </h2>

          <p className="mt-2 text-amber-400">
            Ready to Connect
          </p>
        </div>
      </div>

      {/* Marketplace */}

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-white">
          Integration Marketplace
        </h2>

        <p className="mt-2 text-slate-400">
          Connect your business ecosystem.
        </p>

        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {integrations.map((app) => (
            <div
              key={app}
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
              <h3
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {app}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-400
                "
              >
                Connect your data securely with KoreVity.
              </p>

              <button
                className="
                  mt-6
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}