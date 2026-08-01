export default function NotificationsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Notifications
        </h1>

        <p className="mt-2 text-slate-400">
          Stay updated with AI insights, reports, automations and team activity.
        </p>

      </div>

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

            <h2 className="text-xl font-semibold text-white">
              Recent Notifications
            </h2>

            <p className="mt-2 text-slate-400">
              View the latest activity across your workspace.
            </p>

          </div>

          <button
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
            "
          >
            Mark All as Read
          </button>

        </div>

      </section>

    </div>
  );
}