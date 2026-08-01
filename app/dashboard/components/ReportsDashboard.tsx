"use client";

export default function ReportsDashboard() {
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
          Reports
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Generate, export and analyze business reports.
        </p>

      </div>

      {/* Report Cards */}

      <section
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

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
            Sales Reports
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            12
          </h2>

          <p className="mt-3 text-sm text-cyan-300">
            Monthly Reports
          </p>

        </div>

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
            Customer Reports
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            793
          </h2>

          <p className="mt-3 text-sm text-slate-300">
            Active Customers
          </p>

        </div>

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
            Product Reports
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            1,862
          </h2>

          <p className="mt-3 text-sm text-slate-300">
            Products
          </p>

        </div>

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
            AI Reports
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            24
          </h2>

          <p className="mt-3 text-sm text-emerald-400">
            Auto Generated
          </p>

        </div>

      </section>
<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <div
    className="
      flex
      items-center
      justify-between
    "
  >

    <div>

      <h2
        className="
          text-2xl
          font-semibold
          text-white
        "
      >
        Sales Reports
      </h2>

      <p
        className="
          mt-2
          text-slate-400
        "
      >
        Monthly business performance reports.
      </p>

    </div>

    <div className="flex gap-3">

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
        Export PDF
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
        "
      >
        Export Excel
      </button>

    </div>

  </div>
<div className="mt-8 overflow-x-auto">

  <table className="w-full">

    <thead>

      <tr className="border-b border-white/10">

        <th className="pb-4 text-left text-sm font-medium text-slate-400">
          Month
        </th>

        <th className="pb-4 text-left text-sm font-medium text-slate-400">
          Revenue
        </th>

        <th className="pb-4 text-left text-sm font-medium text-slate-400">
          Profit
        </th>

        <th className="pb-4 text-left text-sm font-medium text-slate-400">
          Orders
        </th>

      </tr>

    </thead>

    <tbody>

      <tr className="border-b border-white/5">

        <td className="py-4 text-white">
          January
        </td>

        <td className="py-4 text-slate-300">
          $186,000
        </td>

        <td className="py-4 text-emerald-400">
          $28,400
        </td>

        <td className="py-4 text-slate-300">
          392
        </td>

      </tr>

      <tr className="border-b border-white/5">

        <td className="py-4 text-white">
          February
        </td>

        <td className="py-4 text-slate-300">
          $212,000
        </td>

        <td className="py-4 text-emerald-400">
          $31,900
        </td>

        <td className="py-4 text-slate-300">
          418
        </td>

      </tr>

      <tr>

        <td className="py-4 text-white">
          March
        </td>

        <td className="py-4 text-slate-300">
          $241,000
        </td>

        <td className="py-4 text-emerald-400">
          $36,200
        </td>

        <td className="py-4 text-slate-300">
          455
        </td>

      </tr>

    </tbody>

  </table>

</div>
</section>
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
    Customer Reports
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Top customers by revenue and order volume.
  </p>

  <div className="mt-8 overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-white/10">

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Customer
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Orders
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Revenue
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Region
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b border-white/5">

          <td className="py-4 text-white">
            John Smith
          </td>

          <td className="py-4 text-slate-300">
            28
          </td>

          <td className="py-4 text-emerald-400">
            $24,850
          </td>

          <td className="py-4 text-slate-300">
            California
          </td>

        </tr>

        <tr className="border-b border-white/5">

          <td className="py-4 text-white">
            Sarah Johnson
          </td>

          <td className="py-4 text-slate-300">
            22
          </td>

          <td className="py-4 text-emerald-400">
            $21,100
          </td>

          <td className="py-4 text-slate-300">
            Texas
          </td>

        </tr>

        <tr>

          <td className="py-4 text-white">
            Michael Brown
          </td>

          <td className="py-4 text-slate-300">
            19
          </td>

          <td className="py-4 text-emerald-400">
            $18,940
          </td>

          <td className="py-4 text-slate-300">
            Florida
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>
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
    Product Reports
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Best-selling products and profitability overview.
  </p>

  <div className="mt-8 overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-white/10">

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Product
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Category
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Sales
          </th>

          <th className="pb-4 text-left text-sm font-medium text-slate-400">
            Profit
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b border-white/5">

          <td className="py-4 text-white">
            Laptop Pro X
          </td>

          <td className="py-4 text-slate-300">
            Technology
          </td>

          <td className="py-4 text-slate-300">
            $86,400
          </td>

          <td className="py-4 text-emerald-400">
            $18,900
          </td>

        </tr>

        <tr className="border-b border-white/5">

          <td className="py-4 text-white">
            Executive Chair
          </td>

          <td className="py-4 text-slate-300">
            Furniture
          </td>

          <td className="py-4 text-slate-300">
            $61,800
          </td>

          <td className="py-4 text-emerald-400">
            $12,600
          </td>

        </tr>

        <tr>

          <td className="py-4 text-white">
            Office Printer
          </td>

          <td className="py-4 text-slate-300">
            Office Supplies
          </td>

          <td className="py-4 text-slate-300">
            $42,900
          </td>

          <td className="py-4 text-emerald-400">
            $8,750
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>
<section
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
      text-2xl
      font-semibold
      text-white
    "
  >
    AI Executive Summary
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    AI-generated insights from all business reports.
  </p>

  <div
    className="
      mt-8
      grid
      gap-6
      lg:grid-cols-2
    "
  >

    <div>

      <h3 className="font-semibold text-cyan-300">
        Revenue Growth
      </h3>

      <p className="mt-2 text-slate-300">
        Revenue increased 18.6% compared to last year, driven mainly by Technology products.
      </p>

    </div>

    <div>

      <h3 className="font-semibold text-cyan-300">
        Customer Behavior
      </h3>

      <p className="mt-2 text-slate-300">
        Returning customers generated over 65% of total sales.
      </p>

    </div>

    <div>

      <h3 className="font-semibold text-cyan-300">
        Inventory Recommendation
      </h3>

      <p className="mt-2 text-slate-300">
        Increase inventory for high-demand Technology products before peak season.
      </p>

    </div>

    <div>

      <h3 className="font-semibold text-cyan-300">
        Suggested Action
      </h3>

      <p className="mt-2 text-slate-300">
        Focus marketing campaigns on high-value repeat customers to maximize profitability.
      </p>

    </div>

  </div>

</section>
    </div>
  );
}