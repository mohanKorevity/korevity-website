"use client";
import TopSellingProductsChart from "./TopSellingProductsChart";
import ProfitByProductChart from "./ProfitByProductChart";
import CategoryPerformanceChart from "./CategoryPerformanceChart";
export default function ProductAnalytics() {
  return (
    <section
      className="
        mt-8
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
      "
    >
      <h2 className="text-2xl font-semibold text-white">
        Product Analytics
      </h2>

      <p className="mt-2 text-slate-400">
        Product sales, profitability and performance insights.
      </p>

      <div
        className="
          mt-10
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Top Selling Products */}

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
            Top Selling Products
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Best performing products by revenue.
          </p>
          <div className="mt-6 h-[300px]">
  <TopSellingProductsChart />
</div>
        </div>

        {/* Profit by Product */}

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
    Profit by Product
  </h3>

  <p className="mt-2 text-sm text-slate-400">
    Highest profit generating products.
  </p>

  <div className="mt-6 h-[300px]">
    <ProfitByProductChart />
  </div>

</div>
      </div>
      <div
  className="
    mt-6
    grid
    gap-6
    lg:grid-cols-3
  "
>

  {/* Category Performance */}

  <div
    className="
      lg:col-span-2
      rounded-2xl
      border
      border-white/10
      bg-slate-950/40
      p-6
      h-[420px]
    "
  >
    <h3 className="text-lg font-semibold text-white">
      Category Performance
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      Sales performance across product categories.
    </p>

    <div className="mt-6 h-[300px]">
      <CategoryPerformanceChart />
    </div>

  </div>

  {/* AI Product Insights */}

  <div
    className="
      rounded-2xl
      border
      border-cyan-500/20
      bg-cyan-500/5
      p-6
    "
  >
    <h3 className="text-lg font-semibold text-white">
      AI Product Insights
    </h3>

    <div className="mt-6 space-y-5">

      <div>
        <h4 className="font-medium text-cyan-300">
          Best Seller
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Technology products generate the highest revenue.
        </p>
      </div>

      <div>
        <h4 className="font-medium text-cyan-300">
          Profitability
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Laptops contribute the highest overall profit.
        </p>
      </div>

      <div>
        <h4 className="font-medium text-cyan-300">
          Recommendation
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Increase inventory for high-demand Technology products.
        </p>
      </div>

    </div>

  </div>

</div>
    </section>
  );
}