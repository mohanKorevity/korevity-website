export default function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      {/* Glow */}
      <div className="absolute -inset-6 rounded-[40px] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

          <div>
            <p className="text-sm text-slate-400">
              KoreVity AI Dashboard
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Live Intelligence
            </h2>
          </div>

          <div className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
            ● Live
          </div>

        </div>

        {/* Metrics */}

        <div className="grid grid-cols-3 gap-4 p-8">

          <div className="rounded-2xl bg-slate-800/60 p-5">
            <p className="text-slate-400 text-sm">
              AI Tasks
            </p>

            <h3 className="mt-3 text-3xl font-black">
              1.2K
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-5">
            <p className="text-slate-400 text-sm">
              Saved
            </p>

            <h3 className="mt-3 text-3xl font-black">
              320h
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-5">
            <p className="text-slate-400 text-sm">
              ROI
            </p>

            <h3 className="mt-3 text-3xl font-black text-green-400">
              +186%
            </h3>
          </div>

        </div>

        {/* Chart */}

        <div className="px-8">

          <div className="relative h-48 rounded-2xl border border-slate-800 bg-slate-950">

            <svg
              viewBox="0 0 500 180"
              className="absolute inset-0 h-full w-full"
            >

              <polyline
                fill="none"
                stroke="#3B82F6"
                strokeWidth="5"
                points="
                0,150
                60,140
                120,125
                180,100
                240,95
                300,70
                360,58
                420,38
                500,20"
              />

            </svg>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex items-center justify-between p-8">

          <div>

            <p className="text-slate-400 text-sm">
              Automation Efficiency
            </p>

            <h3 className="mt-2 text-4xl font-black">
              98.7%
            </h3>

          </div>

          <div className="rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold">
            +24%
          </div>

        </div>

      </div>

    </div>
  );
}