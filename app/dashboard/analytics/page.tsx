import AnalyticsChart from "../components/AnalyticsChart";
import ProfitBySegmentChart from "../components/ProfitBySegmentChart";
import ReturnedSalesChart from "../components/ReturnedSalesChart";
import ShipModeChart from "../components/ShipModeChart";
import CustomerAnalytics from "../components/CustomerAnalytics";
import ProductAnalytics from "../components/ProductAnalytics";
export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

<div>

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Analytics
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Interactive business intelligence and performance analytics.
        </p>

      </div>

      {/* Header */}

{/* KPI Cards */}

<section
  className="
    grid
    gap-6

    md:grid-cols-2
    xl:grid-cols-4
  "
>

  {/* Revenue */}

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-6
    "
  >

    <p className="text-sm text-slate-400">
      Total Sales
    </p>

    <h2
      className="
        mt-4
        text-4xl
        font-bold
        text-white
      "
    >
      $2.30M
    </h2>

    <p
      className="
        mt-3
        text-sm
        text-emerald-400
      "
    >
      ▲ +12.4%
    </p>

  </div>





  {/* Profit */}

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-6
    "
  >

    <p className="text-sm text-slate-400">
      Total Profit
    </p>

    <h2
      className="
        mt-4
        text-4xl
        font-bold
        text-white
      "
    >
      $286K
    </h2>

    <p
      className="
        mt-3
        text-sm
        text-cyan-300
      "
    >
      Profit Margin 12.47%
    </p>

  </div>





  {/* Orders */}

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-6
    "
  >

    <p className="text-sm text-slate-400">
      Orders
    </p>

    <h2
      className="
        mt-4
        text-4xl
        font-bold
        text-white
      "
    >
      5,009
    </h2>

    <p
      className="
        mt-3
        text-sm
        text-slate-400
      "
    >
      Across all regions
    </p>

  </div>





  {/* Customers */}

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-6
    "
  >

    <p className="text-sm text-slate-400">
      Customers
    </p>

    <h2
      className="
        mt-4
        text-4xl
        font-bold
        text-white
      "
    >
      793
    </h2>

    <p
      className="
        mt-3
        text-sm
        text-slate-400
      "
    >
      Active customers
    </p>

  </div>

</section>

{/* Analytics Charts */}

<section
  className="
    grid
    gap-6

    lg:grid-cols-2
  "
>

  {/* Profit by Segment */}

    <div
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
            text-xl
            font-semibold
        text-white
      "
    >
      Profit by Segment
    </h2>

    <p
      className="
        mt-2
        text-slate-400
      "
    >
      Consumer, Corporate and Home Office comparison.
    </p>

    <div className="mt-8">
  <ProfitBySegmentChart />
</div>

  </div>



  {/* Returned Sales */}

  <div
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
        text-xl
        font-semibold
        text-white
      "
    >
      Returned Sales by Category
    </h2>

    <p
      className="
        mt-2
        text-slate-400
      "
    >
      Technology, Furniture and Office Supplies.
    </p>

    <div className="mt-8">
  <ReturnedSalesChart />
</div>

  </div>

</section>

<section
  className="
    grid
    gap-6
    lg:grid-cols-3
  "
>

  {/* Ship Mode */}

  <div
    className="
      lg:col-span-2

      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-8
    "
  >

    <h2
      className="
        text-xl
        font-semibold
        text-white
      "
    >
      Sales by Ship Mode
    </h2>

    <p
      className="
        mt-2
        text-slate-400
      "
    >
      Distribution of sales across shipping methods.
    </p>

    <div className="mt-8">
  <ShipModeChart />
</div>

  </div>



  {/* AI Business Insights */}

  <div
    className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-cyan-500/5
      p-8
    "
  >

    <h2
      className="
        text-xl
        font-semibold
        text-white
      "
    >
      AI Business Insights
    </h2>

    <p
      className="
        mt-3
        text-slate-400
      "
    >
      AI-generated recommendations based on your business performance.
    </p>

    <div
      className="
        mt-8
        space-y-5
      "
    >

      <div>
        <h4 className="font-medium text-cyan-300">
          Highest Revenue
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Consumer Segment contributes the highest sales.
        </p>
      </div>

      <div>
        <h4 className="font-medium text-cyan-300">
          Shipping
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Standard Class is the most frequently used shipping method.
        </p>
      </div>

      <div>
        <h4 className="font-medium text-cyan-300">
          Best Category
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Technology generates the highest overall profit.
        </p>
      </div>

      <div>
        <h4 className="font-medium text-cyan-300">
          Recommendation
        </h4>

        <p className="mt-1 text-sm text-slate-300">
          Focus marketing efforts on Technology and Consumer customers to maximize growth.
        </p>
      </div>

    </div>

  </div>

</section>

{/* Sales Trend */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>
  {/* Header */}
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-semibold text-white">
        Sales Trend
      </h2>

      <p className="mt-2 text-slate-400">
        Monthly revenue performance across all regions.
      </p>
    </div>

    <div className="flex items-center gap-3">
      <button
        className="
          rounded-xl
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-cyan-300
        "
      >
        This Year
      </button>

      <button
        className="
          rounded-xl
          border
          border-white/10
          bg-slate-800/70
          px-4
          py-2
          text-sm
          text-slate-300
          hover:border-cyan-400/30
        "
      >
        Export
      </button>
    </div>
  </div>

  {/* Chart + Stats */}
  <div
    className="
      mt-10
      grid
      gap-6
      xl:grid-cols-[1fr_340px]
      items-start
    "
  >
    {/* LEFT */}
    <div className="w-full">
      <AnalyticsChart />
    </div>

    {/* RIGHT */}
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-sm text-slate-400">Highest Month</p>
        <h3 className="mt-2 text-3xl font-bold text-white">$352K</h3>
        <p className="mt-2 text-cyan-300 text-sm">October</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-sm text-slate-400">Lowest Month</p>
        <h3 className="mt-2 text-3xl font-bold text-white">$89K</h3>
        <p className="mt-2 text-red-300 text-sm">February</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-sm text-slate-400">Average Monthly</p>
        <h3 className="mt-2 text-3xl font-bold text-white">$191K</h3>
        <p className="mt-2 text-slate-400 text-sm">Last 12 Months</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-sm text-slate-400">Growth Rate</p>
        <h3 className="mt-2 text-3xl font-bold text-emerald-400">
          +18.6%
        </h3>
        <p className="mt-2 text-slate-400 text-sm">vs Last Year</p>
      </div>
    </div>
  </div>
</section>

    <CustomerAnalytics />

<ProductAnalytics />

</div>
  );
}