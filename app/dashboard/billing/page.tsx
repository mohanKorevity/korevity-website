export default function BillingPage() {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Billing
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Manage subscriptions, invoices and payment methods.
        </p>

      </div>

      {/* Current Plan */}

      <section
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-cyan-500/10
          to-blue-600/10
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

            <p className="text-cyan-300 text-sm">
              CURRENT PLAN
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                text-white
              "
            >
              KoreVity Pro
            </h2>

            <p
              className="
                mt-3
                text-slate-300
              "
            >
              Business Intelligence + AI Automation Suite
            </p>

          </div>

          <div className="text-right">

            <h3
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              $99
            </h3>

            <p className="text-slate-400">
              /month
            </p>

          </div>

        </div>

        <div
          className="
            mt-8
            grid
            gap-5
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/50
              p-5
            "
          >

            <p className="text-slate-400 text-sm">
              Dashboards
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Unlimited
            </h3>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/50
              p-5
            "
          >

            <p className="text-slate-400 text-sm">
              AI Requests
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Unlimited
            </h3>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/50
              p-5
            "
          >

            <p className="text-slate-400 text-sm">
              Team Members
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Unlimited
            </h3>

          </div>

        </div>

      </section>

      {/* Payment Method */}

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
            text-xl
            font-semibold
            text-white
          "
        >
          Payment Method
        </h2>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Your default payment method.
        </p>

        <div
          className="
            mt-8

            flex
            items-center
            justify-between

            rounded-2xl

            border
            border-white/10

            bg-slate-800/50

            p-6
          "
        >

          <div>

            <h3 className="font-semibold text-white">
              Visa ending in •••• 4832
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Expires 08 / 2029
            </p>

          </div>

          <button
            className="
              rounded-xl

              border
              border-cyan-500/20

              bg-cyan-500/10

              px-5
              py-2

              text-cyan-300

              transition

              hover:bg-cyan-500/20
            "
          >
            Update Card
          </button>

        </div>

      </section>
      
        {/* Billing History */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <div>

    <h2
      className="
        text-xl
        font-semibold
        text-white
      "
    >
      Billing History
    </h2>

    <p
      className="
        mt-2
        text-slate-400
      "
    >
      View and download your previous invoices.
    </p>

  </div>

  <div
    className="
      mt-8
      overflow-hidden
      rounded-2xl
      border
      border-white/10
    "
  >

    <table className="w-full">

      
        

      <thead className="bg-slate-800/70">

        <tr
          className="
            text-left
            text-sm
            text-slate-400
          "
        >

          <th className="px-6 py-4">
            Invoice
          </th>

          <th className="px-6 py-4">
            Date
          </th>

          <th className="px-6 py-4">
            Amount
          </th>

          <th className="px-6 py-4">
            Status
          </th>

          <th className="px-6 py-4 text-right">
            Download
          </th>

        </tr>

      </thead>

      <tbody>
        

  {/* Invoice 1 */}

  <tr className="border-t border-white/10">

    <td className="px-6 py-5">

      <div>

        <p className="font-semibold text-white">
          INV-2026-001
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Professional Plan
        </p>

      </div>

    </td>

    <td className="px-6 py-5 text-slate-400">
      Jul 2026
    </td>

    <td className="px-6 py-5 font-semibold text-white">
      $99
    </td>

    <td className="px-6 py-5">

      <span
        className="
          rounded-full
          bg-emerald-500/20
          px-3
          py-1
          text-xs
          font-semibold
          text-emerald-400
        "
      >
        Paid
      </span>

    </td>

    <td className="px-6 py-5 text-right">

      <button
        className="
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          text-sm
          text-slate-300
          transition
          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        Download
      </button>

    </td>

  </tr>





  {/* Invoice 2 */}

  <tr className="border-t border-white/10">

    <td className="px-6 py-5">

      <div>

        <p className="font-semibold text-white">
          INV-2026-002
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Professional Plan
        </p>

      </div>

    </td>

    <td className="px-6 py-5 text-slate-400">
      Jun 2026
    </td>

    <td className="px-6 py-5 font-semibold text-white">
      $99
    </td>

    <td className="px-6 py-5">

      <span
        className="
          rounded-full
          bg-emerald-500/20
          px-3
          py-1
          text-xs
          font-semibold
          text-emerald-400
        "
      >
        Paid
      </span>

    </td>

    <td className="px-6 py-5 text-right">

      <button
        className="
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          text-sm
          text-slate-300
          transition
          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        Download
      </button>

    </td>

  </tr>





  {/* Invoice 3 */}

  <tr className="border-t border-white/10">

    <td className="px-6 py-5">

      <div>

        <p className="font-semibold text-white">
          INV-2026-003
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Starter Plan
        </p>

      </div>

    </td>

    <td className="px-6 py-5 text-slate-400">
      May 2026
    </td>

    <td className="px-6 py-5 font-semibold text-white">
      $49
    </td>

    <td className="px-6 py-5">

      <span
        className="
          rounded-full
          bg-emerald-500/20
          px-3
          py-1
          text-xs
          font-semibold
          text-emerald-400
        "
      >
        Paid
      </span>

    </td>

    <td className="px-6 py-5 text-right">

      <button
        className="
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          text-sm
          text-slate-300
          transition
          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        Download
      </button>

    </td>

  </tr>

  </tbody>

    </table>

  </div>

</section>

</div>
);
}