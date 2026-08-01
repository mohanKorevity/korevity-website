"use client";

import TopCustomersChart from "./TopCustomersChart";
import CustomerGrowthChart from "./CustomerGrowthChart";
import CustomerDistributionChart from "./CustomerDistributionChart";
export default function CustomerAnalytics() {
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
      <h2 className="text-2xl font-semibold text-white">
        Customer Analytics
      </h2>

      <p className="mt-2 text-slate-400">
        Customer growth, top customers and customer distribution.
      </p>

      <div
        className="
          mt-10
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Top Customers */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950/40
            p-6
            h-[420px]
          "
        >
          <h3 className="text-lg font-semibold text-white">
            Top Customers
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Highest revenue generating customers.
          </p>

          <div className="mt-6 h-[300px]">
            <TopCustomersChart />
          </div>
        </div>

        {/* Customer Growth */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950/40
            p-6
            h-[420px]
          "
        >
          <h3 className="text-lg font-semibold text-white">
            Customer Growth
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Monthly customer acquisition trend.
          </p>

          <div className="mt-6 h-[300px]">
  <CustomerGrowthChart />
</div>
        </div>
      </div>
      <div
  className="
    mt-6
    rounded-2xl
    border
    border-white/10
    bg-slate-950/40
    p-6
    h-[420px]
  "
>
  <h3 className="text-lg font-semibold text-white">
    Customer Distribution
  </h3>

  <p className="mt-2 text-sm text-slate-400">
    Distribution of customers across business segments.
  </p>

  <div className="mt-6 h-[300px]">
    <CustomerDistributionChart />
  </div>
</div>
    </section>
  );
}